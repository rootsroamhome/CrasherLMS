/**
 * index.js — Daily To-Do List
 *
 * All Airtable calls go through the /api/airtable proxy (Netlify function).
 * The API key lives in Netlify environment variables — never in browser code.
 *
 * Load logic:
 *  1. Fetch all To-Do Items where Status = "Not Started" and Scheduled date <= today
 *  2. Split into: carried (date < today) vs new (date = today)
 *  3. Render carried first, then new items
 *
 * Mark-done logic:
 *  1. User clicks "Mark Done" → inline form opens
 *  2. User types where work is → submits
 *  3. PATCH record: Status=Done, Completion date=today, Student notes=text
 *  4. Card animates out
 *
 * Carry-forward: bumps "Days carried" for overdue items once per day
 *  (tracked in localStorage so it only runs once per calendar day)
 */

const TODAY = new Date().toISOString().split('T')[0];

// ---- Airtable helpers (via proxy) ----

function proxyUrl(table, recordId = '') {
  const base = `${CONFIG.apiBase}/${encodeURIComponent(table)}`;
  return recordId ? `${base}/${recordId}` : base;
}

async function airtableGet(table, filterFormula, sort = []) {
  const params = new URLSearchParams();
  if (filterFormula) params.set('filterByFormula', filterFormula);
  sort.forEach((s, i) => {
    params.set(`sort[${i}][field]`, s.field);
    params.set(`sort[${i}][direction]`, s.direction || 'asc');
  });

  const res  = await fetch(`${proxyUrl(table)}?${params}`);
  const json = await res.json();
  if (!res.ok) throw new Error(json.error?.message || 'Failed to load list');
  return json.records || [];
}

async function airtablePatch(table, recordId, fields) {
  const res = await fetch(proxyUrl(table, recordId), {
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

// ---- Carry-forward: bump "Days carried" for overdue items (once per day) ----
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

// ---- Render ----

function subjectStyle(subject) {
  return SUBJECT_COLORS[subject] || { bg: '#1E293B', accent: '#64748B', label: '#94A3B8' };
}

function buildCard(rec) {
  const f       = rec.fields;
  const subject = f['Subject'] || 'Unknown';
  const colors  = subjectStyle(subject);
  const carried = f['Days carried'] || 0;
  const contentLink = f['Content page link'] || '#';
  const href = contentLink === '#' ? '#' :
    contentLink.startsWith('http')
      ? contentLink
      : `${contentLink}?recordId=${rec.id}`;

  const card = document.createElement('div');
  card.className = 'card card-clickable todo-card';
  card.dataset.recordId = rec.id;
  card.style.setProperty('--card-accent', colors.accent);

  card.innerHTML = `
    <span class="subject-badge" style="background:${colors.bg}; color:${colors.label};">
      ${subject}
    </span>
    ${carried > 0 ? `<div class="carried-label">↩ Carried over ${carried} day${carried > 1 ? 's' : ''}</div>` : ''}
    <div class="todo-title">${f['Item name'] || 'Untitled'}</div>
    <div class="todo-ican">${f['I Can statement'] || ''}</div>
    <div class="card-actions">
      <a href="${href}" class="btn btn-ghost" onclick="event.stopPropagation()">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
        Open Lesson
      </a>
      <button class="btn btn-success mark-done-btn" onclick="event.stopPropagation(); openDoneForm('${rec.id}')">
        ✓ Mark Done
      </button>
    </div>
    <div class="done-form" id="form-${rec.id}">
      <label for="notes-${rec.id}">Where is your work? (screenshot link, notebook, verbal to parent, etc.)</label>
      <textarea id="notes-${rec.id}" placeholder="e.g. Screenshot in Drive folder / told Mom"></textarea>
      <div class="done-form-row">
        <button class="btn btn-success" onclick="submitDone('${rec.id}')">Submit ✓</button>
        <button class="btn btn-ghost" onclick="closeDoneForm('${rec.id}')">Cancel</button>
      </div>
    </div>
  `;

  card.addEventListener('click', (e) => {
    if (e.target.closest('button') || e.target.closest('a') || e.target.closest('.done-form')) return;
    window.location.href = href;
  });

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

function renderEmptyState() {
  document.getElementById('todo-list').innerHTML = `
    <div class="empty-state">
      <div class="big-emoji">🎉</div>
      <h2>All done for today!</h2>
      <p>Nothing left on your list. You crushed it.</p>
    </div>
  `;
}

// ---- Main ----

async function loadTodos() {
  document.getElementById('today-date').textContent = new Date().toLocaleDateString('en-US', {
    weekday: 'long', month: 'long', day: 'numeric',
  });

  const container = document.getElementById('todo-list');

  try {
    const filter  = `AND({Status}="Not Started", {Scheduled date}<="${TODAY}")`;
    const records = await airtableGet(TABLES.todos, filter, [{ field: 'Scheduled date', direction: 'asc' }]);

    await runCarryForward(records);

    if (records.length === 0) { renderEmptyState(); return; }

    const carried = records.filter(r => r.fields['Scheduled date'] < TODAY);
    const fresh   = records.filter(r => r.fields['Scheduled date'] === TODAY);

    container.innerHTML = '';

    if (carried.length > 0) {
      const lbl = document.createElement('div');
      lbl.className = 'section-label';
      lbl.textContent = 'Carried over';
      container.appendChild(lbl);
      carried.forEach(r => container.appendChild(buildCard(r)));
    }

    if (fresh.length > 0) {
      if (carried.length > 0) {
        const lbl = document.createElement('div');
        lbl.className = 'section-label';
        lbl.textContent = 'New today';
        container.appendChild(lbl);
      }
      fresh.forEach(r => container.appendChild(buildCard(r)));
    }

  } catch (err) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="big-emoji">⚠️</div>
        <h2>Couldn't load your list</h2>
        <p>${err.message}</p>
      </div>
    `;
    console.error(err);
  }
}

loadTodos();
