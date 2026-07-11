/**
 * big-picture.js — the year at a glance + standards tracker.
 *
 * This is the PARENT's overview: the whole six-unit arc for the year, how far
 * along each one is, and which academic standards have been covered so far.
 * (His actual answers/quizzes live on the Portfolio page, not here.)
 *
 * Progress reads localStorage; the standards list is derived from the cards in
 * the units that are built, so it's always honest about what's been touched.
 */

const HS_UNITS = window.HS_UNITS || [];

/* The planned year (see docs/YEAR-MAP.md). `id` links a plan row to a built unit. */
const YEAR_PLAN = [
  { n: 1, id: 'rivers', title: 'Rivers & the Rise of Civilization', theme: 'Water & land · first civilizations · flood myths' },
  { n: 2, id: 'metals', title: 'Metals & the Rise of Empires', theme: 'Matter & reactions · Bronze/Iron Age · forge myths' },
  { n: 3, id: null, title: 'Deep Time & the Restless Earth', theme: 'Rock cycle · plate tectonics · reading evidence' },
  { n: 4, id: null, title: 'A Connected World', theme: 'Resources · trade routes · research writing' },
  { n: 5, id: null, title: 'When the Ground Shifts', theme: 'Natural hazards · turning points · a choice novel' },
  { n: 6, id: null, title: 'Power (capstone)', theme: 'Energy & circuits · who controls energy · persuasion' },
];

function unitState(id) { try { return JSON.parse(localStorage.getItem('homeskewl_unit_' + id)) || {}; } catch (e) { return {}; } }
function esc(s) { return (s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
function pct(n, d) { return d ? Math.round(n / d * 100) : 0; }
function builtUnit(id) { return HS_UNITS.find(u => u.id === id); }
function doneCount(u) { const done = unitState(u.id).done || {}; return u.cards.filter(c => done[c.id]).length; }

/* Which academic area a standard code belongs to (or null if it's not a code). */
function areaOf(code) {
  if (/^MS-/.test(code)) return 'Science';
  if (/^7\./.test(code)) return 'Social Studies (Oregon)';
  if (/^(RI|RL|W|SL|L)\.7/.test(code)) return 'ELA';
  return null;
}

/* Distinct standards codes covered by the units that are built. */
function coveredStandards() {
  const byArea = { 'Science': new Set(), 'Social Studies (Oregon)': new Set(), 'ELA': new Set() };
  HS_UNITS.forEach(u => u.cards.forEach(c => {
    (c.standards || '').split('·').forEach(tok => {
      const code = tok.trim();
      const area = areaOf(code);
      if (area) byArea[area].add(code);
    });
  }));
  return byArea;
}

function unitRow(row) {
  const u = builtUnit(row.id);
  if (!u) {
    return `<div class="yr-row planned">
      <div class="yr-n">${row.n}</div>
      <div class="yr-main"><div class="yr-title">${esc(row.title)}</div><div class="yr-theme">${esc(row.theme)}</div></div>
      <div class="yr-status"><span class="yr-chip">Planned</span></div>
    </div>`;
  }
  const done = doneCount(u), total = u.cards.length, p = pct(done, total);
  const status = p === 100 ? 'Complete' : p > 0 ? 'In progress' : 'Ready';
  return `<a class="yr-row live" href="unit.html?u=${u.id}">
    <div class="yr-n">${row.n}</div>
    <div class="yr-main">
      <div class="yr-title">${esc(row.title)}</div>
      <div class="yr-theme">${esc(row.theme)}</div>
      <div class="yr-bar"><div style="width:${p}%;"></div></div>
    </div>
    <div class="yr-status"><span class="yr-chip live-chip">${done}/${total} · ${status}</span></div>
  </a>`;
}

function standardsBlock(byArea) {
  const areas = Object.keys(byArea).filter(a => byArea[a].size);
  if (!areas.length) return '<p class="empty-msg">No standards covered yet.</p>';
  return `<div class="std-grid">${areas.map(a => {
    const codes = [...byArea[a]].sort();
    return `<div class="std-col">
      <div class="std-area">${esc(a)} <span class="std-count">${codes.length}</span></div>
      <div class="std-chips">${codes.map(c => `<span class="std-chip">✓ ${esc(c)}</span>`).join('')}</div>
    </div>`;
  }).join('')}</div>`;
}

function section(title, body) {
  return `<div class="bp-section"><div class="section-label">${title}</div>${body}</div>`;
}

function load() {
  const content = document.getElementById('content');
  const byArea = coveredStandards();
  const stdTotal = Object.values(byArea).reduce((s, set) => s + set.size, 0);
  const unitsLive = HS_UNITS.length;
  const cardsDone = HS_UNITS.reduce((s, u) => s + doneCount(u), 0);

  document.getElementById('stat-units').textContent = `${unitsLive}/${YEAR_PLAN.length}`;
  document.getElementById('stat-cards').textContent = cardsDone;
  document.getElementById('stat-standards').textContent = stdTotal;

  content.innerHTML =
    section('The year, unit by unit', `<div class="yr-list">${YEAR_PLAN.map(unitRow).join('')}</div>`) +
    section('Standards covered so far', standardsBlock(byArea)) +
    `<p class="bp-footnote">Standards are pulled from the lessons in the units that are built, so this list grows as new units go live. Want to see Crasher's actual answers and quiz scores? Those live on the <a href="portfolio.html">Portfolio</a> page.</p>`;
}

load();
