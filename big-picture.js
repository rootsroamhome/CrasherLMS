/**
 * big-picture.js — Parent overview page
 * All Airtable calls go through the /api/airtable proxy.
 */

const TODAY_BP       = new Date().toISOString().split('T')[0];
const SEVEN_DAYS_AGO = new Date(Date.now() - 7 * 86400000).toISOString().split('T')[0];

async function airtableGetAll(table, filterFormula) {
  const all = [];
  let offset = null;

  do {
    const params = new URLSearchParams();
    if (filterFormula) params.set('filterByFormula', filterFormula);
    params.set('pageSize', '100');
    if (offset) params.set('offset', offset);

    const url  = `${CONFIG.apiBase}/${encodeURIComponent(table)}?${params}`;
    const res  = await fetch(url);
    const json = await res.json();
    if (!res.ok) {
      const msg = (typeof json.error === 'string' ? json.error : json.error?.message) || `HTTP ${res.status}`;
      throw new Error(msg);
    }

    all.push(...(json.records || []));
    offset = json.offset || null;
  } while (offset);

  return all;
}

function subjectColor(subject) {
  return SUBJECT_COLORS[subject] || { accent: '#64748B', label: '#94A3B8', bg: '#1E293B' };
}

function formatDate(dateStr) {
  if (!dateStr) return '';
  return new Date(dateStr + 'T12:00:00').toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

function el(tag, cls, html) {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (html) e.innerHTML = html;
  return e;
}

function renderUnits(todos) {
  const units = {};
  const unitsBySubject = {};

  for (const r of todos) {
    if (['Self-Study', 'Rabbit Hole'].includes(r.fields['Subject'])) continue;
    const unit    = r.fields['Unit'] || 'Uncategorized';
    const subject = r.fields['Subject'] || 'Unknown';
    if (!units[unit]) units[unit] = { subject, total: 0, done: 0 };
    units[unit].total++;
    if (r.fields['Status'] === 'Done') units[unit].done++;
  }

  if (Object.keys(units).length === 0) return el('p', 'empty-msg', 'No units yet — add items in Airtable to see progress here.');

  // Group units by subject
  for (const [name, data] of Object.entries(units)) {
    const subject = data.subject;
    if (!unitsBySubject[subject]) unitsBySubject[subject] = [];
    unitsBySubject[subject].push({ name, data });
  }

  const container = document.createDocumentFragment();

  // Render each subject section
  for (const [subject, unitList] of Object.entries(unitsBySubject)) {
    const color = subjectColor(subject).accent;
    const section = el('div', 'subject-section');
    section.innerHTML = `<div class="subject-section-title" style="color:${color};">📚 ${subject}</div>`;

    const grid = el('div', 'unit-grid');
    for (const { name, data } of unitList) {
      const pct    = data.total > 0 ? Math.round((data.done / data.total) * 100) : 0;
      const status = pct === 100 ? '✓ Complete' : pct > 0 ? 'In Progress' : 'Not Started';
      const card   = el('div', 'unit-card');
      card.innerHTML = `
        <div class="unit-name">${name}</div>
        <div class="unit-progress-bar"><div class="unit-progress-fill" style="width:${pct}%; background:${color};"></div></div>
        <div class="unit-count">${data.done}/${data.total} done · ${status}</div>
      `;
      grid.appendChild(card);
    }
    section.appendChild(grid);
    container.appendChild(section);
  }

  return container;
}

function renderStandards(standards) {
  if (standards.length === 0) return el('p', 'empty-msg', 'No standards added yet.');

  const bySubject = {};
  for (const r of standards) {
    const subj = r.fields['Subject'] || 'Unknown';
    if (!bySubject[subj]) bySubject[subj] = [];
    bySubject[subj].push(r);
  }

  const container = document.createDocumentFragment();
  for (const [subj, rows] of Object.entries(bySubject)) {
    const color   = subjectColor(subj).accent;
    const section = el('div', 'subject-section');
    section.innerHTML = `<div class="subject-section-title" style="color:${color};">${subj}</div>`;
    const list = el('div');
    for (const r of rows) {
      const done = r.fields['Completed'] === true;
      const row  = el('div', 'standard-row');
      row.innerHTML = `
        <div class="standard-check ${done ? 'done' : 'pending'}">${done ? '✓' : ''}</div>
        <div>
          <div class="standard-code">${r.fields['Standard code'] || ''}</div>
          <div class="standard-ican">${r.fields['I Can statement'] || ''}</div>
          ${done && r.fields['Completion date'] ? `<div class="completion-date">Completed ${formatDate(r.fields['Completion date'])}</div>` : ''}
        </div>
      `;
      list.appendChild(row);
    }
    section.appendChild(list);
    container.appendChild(section);
  }
  return container;
}

function renderRecent(todos) {
  const recent = todos
    .filter(r => r.fields['Unit'] !== 'Self-Study' && r.fields['Status'] === 'Done' && r.fields['Completion date'] >= SEVEN_DAYS_AGO)
    .sort((a, b) => (b.fields['Completion date'] || '').localeCompare(a.fields['Completion date'] || ''));

  if (recent.length === 0) return el('p', 'empty-msg', 'Nothing completed in the last 7 days yet.');

  const list = el('div');
  for (const r of recent) {
    const color = subjectColor(r.fields['Subject']).accent;
    const row   = el('div', 'completion-row');
    row.innerHTML = `
      <div style="font-size:0.7rem; color:${color}; font-weight:700; text-transform:uppercase; letter-spacing:0.04em;">${r.fields['Subject']}</div>
      <div class="completion-item">${r.fields['Item name'] || 'Untitled'}</div>
      ${r.fields['Student notes'] ? `<div class="completion-notes">"${r.fields['Student notes']}"</div>` : ''}
      <div class="completion-date">${formatDate(r.fields['Completion date'])}</div>
    `;
    list.appendChild(row);
  }
  return list;
}

function renderStuck(todos) {
  const stuck = todos.filter(r => !['Self-Study','Rabbit Hole'].includes(r.fields['Subject']) && r.fields['Status'] !== 'Done' && (r.fields['Days carried'] || 0) >= 3);
  if (stuck.length === 0) return el('p', 'empty-msg', 'Nothing stuck — great!');

  const list = el('div');
  for (const r of stuck) {
    const color = subjectColor(r.fields['Subject']).accent;
    const days  = r.fields['Days carried'] || 0;
    const row   = el('div', 'completion-row');
    row.innerHTML = `
      <div style="font-size:0.7rem; color:${color}; font-weight:700; text-transform:uppercase; letter-spacing:0.04em;">${r.fields['Subject']}</div>
      <div style="display:flex; align-items:center; gap:8px;">
        <span class="completion-item">${r.fields['Item name'] || 'Untitled'}</span>
        <span class="stuck-badge">↩ ${days} days</span>
      </div>
      <div class="completion-date">Scheduled ${formatDate(r.fields['Scheduled date'])}</div>
    `;
    list.appendChild(row);
  }
  return list;
}


function section(title, icon, content) {
  const wrap = document.createElement('div');
  wrap.style.marginBottom = '28px';
  const hdr = el('div', 'section-label');
  hdr.innerHTML = `${icon} ${title}`;
  wrap.appendChild(hdr);
  if (content instanceof Node || content instanceof DocumentFragment) {
    wrap.appendChild(content);
  } else {
    wrap.insertAdjacentHTML('beforeend', content);
  }
  return wrap;
}

async function load() {
  const content = document.getElementById('content');
  try {
    const [todos, standards] = await Promise.all([
      airtableGetAll(TABLES.todos),
      airtableGetAll(TABLES.standards),
    ]);

    const thisWeek      = todos.filter(r => r.fields['Unit'] !== 'Self-Study' && r.fields['Completion date'] >= SEVEN_DAYS_AGO && r.fields['Status'] === 'Done');
    const stuck         = todos.filter(r => !['Self-Study','Rabbit Hole'].includes(r.fields['Subject']) && r.fields['Status'] !== 'Done' && (r.fields['Days carried'] || 0) >= 3);
    const standardsDone = standards.filter(r => r.fields['Completed'] === true);

    document.getElementById('stat-done').textContent      = thisWeek.length;
    document.getElementById('stat-stuck').textContent     = stuck.length;
    document.getElementById('stat-standards').textContent = `${standardsDone.length}/${standards.length}`;

    content.innerHTML = '';
    content.appendChild(section('Unit Progress',                       '📊', renderUnits(todos)));
    content.appendChild(section('Standards Tracker',                   '📋', renderStandards(standards)));
    content.appendChild(section('Completed in the Last 7 Days',        '✓',  renderRecent(todos)));
    content.appendChild(section('Items That Might Be Stuck (3+ days)', '⚠️', renderStuck(todos)));

  } catch (e) {
    content.innerHTML = `
      <div class="empty-state">
        <div class="big-emoji">⚠️</div>
        <h2>Couldn't load data</h2>
        <p>${e.message}</p>
      </div>
    `;
    console.error(e);
  }
}

load();
