/**
 * index.js — Daily To-Do List with date navigation
 *
 * Modes:
 *   today  — default; shows all Not Started items with date <= today
 *   past   — read-only view of a specific past date
 *   future — preview of a specific future date (grayed out)
 */

const TODAY = new Date().toISOString().split('T')[0];
let viewDate = TODAY;

// ── Airtable helpers (via proxy) ──

function proxyUrl(table, recordId = '') {
  const base = `${CONFIG.apiBase}/${encodeURIComponent(table)}`;
  return recordId ? `${base}/${recordId}` : base;
}

function fetchWithTimeout(url, opts = {}, ms = 10000) {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), ms);
  return fetch(url, { ...opts, signal: ctrl.signal }).finally(() => clearTimeout(timer));
}

async function airtableGet(table, filterFormula, sort = []) {
  const params = new URLSearchParams();
  if (filterFormula) params.set('filterByFormula', filterFormula);
  sort.forEach((s, i) => {
    params.set(`sort[${i}][field]`, s.field);
    params.set(`sort[${i}][direction]`, s.direction || 'asc');
  });
  const res  = await fetchWithTimeout(`${proxyUrl(table)}?${params}`);
  const json = await res.json();
  if (!res.ok) {
    const msg = (typeof json.error === 'string' ? json.error : json.error?.message) || `HTTP ${res.status}`;
    throw new Error(msg);
  }
  return json.records || [];
}

async function airtablePatch(table, recordId, fields) {
  const res = await fetchWithTimeout(proxyUrl(table, recordId), {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ fields }),
  });
  const json = await res.json();
  if (!res.ok) throw new Error(json.error?.message || 'Save failed');
  return json;
}

function showToast(msg) {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.classList.add('show');
  setTimeout(() => el.classList.remove('show'), 3000);
}

// ── Carry-forward: bump "Days carried" for overdue items (once per day, today only) ──
async function runCarryForward(records) {
  const flagKey = `cf_done_${TODAY}`;
  if (localStorage.getItem(flagKey)) return;
  const overdue = records.filter(r => r.fields['Scheduled date'] && r.fields['Scheduled date'] < TODAY);
  for (const rec of overdue) {
    const current = rec.fields['Days carried'] || 0;
    await airtablePatch(TABLES.todos, rec.id, { 'Days carried': current + 1 });
  }
  localStorage.setItem(flagKey, '1');
}

// ── Date utilities ──

function offsetDate(dateStr, days) {
  const d = new Date(dateStr + 'T00:00:00');
  d.setDate(d.getDate() + days);
  return d.toISOString().split('T')[0];
}

function formatDateLong(dateStr) {
  return new Date(dateStr + 'T00:00:00').toLocaleDateString('en-US', {
    weekday: 'long', month: 'long', day: 'numeric',
  });
}

function getMode() {
  if (viewDate === TODAY) return 'today';
  if (viewDate < TODAY)  return 'past';
  return 'future';
}

// ── Navigation UI ──

function updateNavUI() {
  const mode = getMode();
  const navTitle  = document.getElementById('nav-title');
  const navDate   = document.getElementById('nav-date');
  const backBtn   = document.getElementById('back-today');

  navDate.textContent = formatDateLong(viewDate);

  if (mode === 'today') {
    navTitle.textContent = "Today's List";
    backBtn.style.display = 'none';
  } else if (mode === 'past') {
    navTitle.textContent = 'Past Day';
    backBtn.style.display = 'inline-flex';
  } else {
    navTitle.textContent = 'Coming Up';
    backBtn.style.display = 'inline-flex';
  }
}

document.getElementById('prev-day').addEventListener('click', () => {
  viewDate = offsetDate(viewDate, -1);
  loadTodos();
});

document.getElementById('next-day').addEventListener('click', () => {
  viewDate = offsetDate(viewDate, 1);
  loadTodos();
});

document.getElementById('back-today').addEventListener('click', () => {
  viewDate = TODAY;
  loadTodos();
});

// ── Render ──

function subjectStyle(subject) {
  return SUBJECT_COLORS[subject] || { bg: '#1E293B', accent: '#64748B', label: '#94A3B8' };
}

function buildCard(rec, mode) {
  const f       = rec.fields;
  const subject = f['Subject'] || 'Unknown';
  const colors  = subjectStyle(subject);
  const carried = f['Days carried'] || 0;
  const contentLink = f['Content page link'] || '#';
  const href = contentLink === '#' ? '#' :
    contentLink.startsWith('http')
      ? contentLink
      : `${contentLink}?recordId=${rec.id}`;

  const isDone = f['Status'] === 'Done';

  const card = document.createElement('div');
  card.className = 'card todo-card';
  if (mode === 'today') card.classList.add('card-clickable');
  if (mode === 'past' && isDone) card.classList.add('card-past-done');
  if (mode === 'future') card.classList.add('card-future');
  card.dataset.recordId = rec.id;
  card.style.setProperty('--card-accent', colors.accent);

  const openLessonBtn = href !== '#' ? `
    <a href="${href}" class="btn btn-ghost" onclick="event.stopPropagation()">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
      Open Lesson
    </a>` : '';

  let actionsHtml = '';
  if (mode === 'today') {
    actionsHtml = `
      <div class="card-actions">
        ${openLessonBtn}
        <button class="btn btn-success mark-done-btn" onclick="event.stopPropagation(); openDoneForm('${rec.id}')">✓ Mark Done</button>
      </div>
      <div class="done-form" id="form-${rec.id}">
        <label for="notes-${rec.id}">Where is your work? (screenshot link, notebook, verbal to parent, etc.)</label>
        <textarea id="notes-${rec.id}" placeholder="e.g. Screenshot in Drive folder / told Mom"></textarea>
        <div class="done-form-row">
          <button class="btn btn-success" onclick="submitDone('${rec.id}')">Submit ✓</button>
          <button class="btn btn-ghost" onclick="closeDoneForm('${rec.id}')">Cancel</button>
        </div>
      </div>`;
  } else if (mode === 'past') {
    const badgeHtml = isDone
      ? `<span class="status-badge done">✓ Done${f['Completion date'] ? ' · ' + formatDateLong(f['Completion date']) : ''}</span>`
      : `<span class="status-badge pending">↩ Carried over</span>`;
    actionsHtml = `<div class="card-actions">${openLessonBtn}${badgeHtml}</div>`;
  } else {
    const allowWorkAhead = subject === 'Science';
    const badge = allowWorkAhead ? '' : `<span class="status-badge preview">Not active yet</span>`;
    actionsHtml = `<div class="card-actions">${openLessonBtn}${badge}</div>`;
  }

  card.innerHTML = `
    <span class="subject-badge" style="background:${colors.bg}; color:${colors.label};">${subject}</span>
    ${mode === 'today' && carried > 0 ? `<div class="carried-label">↩ Carried over ${carried} day${carried > 1 ? 's' : ''}</div>` : ''}
    <div class="todo-title">${f['Item name'] || 'Untitled'}</div>
    <div class="todo-ican">${f['I Can statement'] || ''}</div>
    ${actionsHtml}
  `;

  if (mode === 'today') {
    card.addEventListener('click', (e) => {
      if (e.target.closest('button') || e.target.closest('a') || e.target.closest('.done-form')) return;
      window.location.href = href;
    });
  }

  return card;
}

function openDoneForm(recordId) {
  const form = document.getElementById(`form-${recordId}`);
  if (form) { form.classList.add('open'); form.querySelector('textarea')?.focus(); }
}

function closeDoneForm(recordId) {
  const form = document.getElementById(`form-${recordId}`);
  if (form) form.classList.remove('open');
}

window.openDoneForm  = openDoneForm;
window.closeDoneForm = closeDoneForm;

window.submitDone = async function (recordId) {
  const notes = document.getElementById(`notes-${recordId}`)?.value.trim() || '';
  const card  = document.querySelector(`[data-record-id="${recordId}"]`);
  try {
    await airtablePatch(TABLES.todos, recordId, {
      Status: 'Done',
      'Completion date': TODAY,
      'Student notes': notes,
    });
    card.classList.add('completing');
    setTimeout(() => card.remove(), 500);
    showToast('Marked done! Great work. ✓');
    setTimeout(() => {
      if (document.querySelectorAll('.card[data-record-id]').length === 0) renderEmptyState();
    }, 600);
  } catch (err) {
    console.error(err);
    showToast('Error saving — check your connection.');
  }
};

function renderEmptyState(msg) {
  document.getElementById('todo-list').innerHTML = `
    <div class="empty-state">
      <div class="big-emoji">${msg ? '📅' : '🎉'}</div>
      <h2>${msg || 'All done for today!'}</h2>
      <p>${msg ? '' : 'Nothing left on your list. You crushed it.'}</p>
    </div>
  `;
}

// ── Main ──

async function loadTodos() {
  updateNavUI();
  const container = document.getElementById('todo-list');
  const mode = getMode();

  container.innerHTML = `<div class="loading"><div class="spinner"></div>Loading…</div>`;

  try {
    let records;
    let filter;

    if (mode === 'today') {
      filter = `AND({Status}="Not Started", {Scheduled date}<="${TODAY}")`;
      records = await airtableGet(TABLES.todos, filter, [{ field: 'Scheduled date', direction: 'asc' }]);
      runCarryForward(records).catch(e => console.warn('carry-forward:', e));
    } else {
      filter = `IS_SAME({Scheduled date},"${viewDate}","day")`;
      records = await airtableGet(TABLES.todos, filter, [{ field: 'Scheduled date', direction: 'asc' }]);
    }

    if (records.length === 0) {
      const isSchoolDay = mode !== 'today';
      renderEmptyState(isSchoolDay ? 'Nothing scheduled for this day' : null);
      return;
    }

    container.innerHTML = '';

    if (mode !== 'today') {
      const banner = document.createElement('div');
      banner.className = `view-banner ${mode}`;
      banner.textContent = mode === 'past'
        ? 'Past date — read-only view'
        : 'Preview — this day isn\'t active yet';
      container.appendChild(banner);
    }

    if (mode === 'today') {
      const carried = records.filter(r => r.fields['Scheduled date'] < TODAY);
      const fresh   = records.filter(r => r.fields['Scheduled date'] === TODAY);

      if (carried.length > 0) {
        const lbl = document.createElement('div');
        lbl.className = 'section-label';
        lbl.textContent = 'Carried over';
        container.appendChild(lbl);
        carried.forEach(r => container.appendChild(buildCard(r, 'today')));
      }
      if (fresh.length > 0) {
        if (carried.length > 0) {
          const lbl = document.createElement('div');
          lbl.className = 'section-label';
          lbl.textContent = 'New today';
          container.appendChild(lbl);
        }
        fresh.forEach(r => container.appendChild(buildCard(r, 'today')));
      }
    } else {
      records.forEach(r => container.appendChild(buildCard(r, mode)));
    }

  } catch (err) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="big-emoji">⚠️</div>
        <h2>Couldn't load your list</h2>
        <p>${err.message}</p>
      </div>`;
    console.error(err);
  }
}

loadTodos();
