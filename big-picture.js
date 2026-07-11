/**
 * big-picture.js — the year at a glance + a full 7th-grade standards checklist.
 *
 * The PARENT's overview: the six-unit arc for the year, and a checklist of ALL
 * the year's standards grouped into collapsible content-area cards (Math too —
 * even though the units don't touch it, so it never looks like it doesn't exist).
 * Each standard shows a ✓ when done or an empty circle when not.
 *
 * "Done" = auto-checked when a completed lesson covers that standard, and also
 * click-to-toggle by hand (stored in localStorage) so things done outside the
 * app — like daily Khan math — can be checked off too.
 * (Crasher's actual answers/quizzes live on the Portfolio page, not here.)
 */

const HS_UNITS = window.HS_UNITS || [];
const STD_KEY = 'homeskewl_standards';

/* The planned year (see docs/YEAR-MAP.md). `id` links a plan row to a built unit. */
/* `window` = the target date range for a unit (rough, adjustable — edit here). */
const YEAR_PLAN = [
  { n: 1, id: 'rivers', title: 'Rivers & the Rise of Civilization', theme: 'Water & land · first civilizations · flood myths', window: 'Aug 31 – Oct 9' },
  { n: 2, id: 'metals', title: 'Metals & the Rise of Empires', theme: 'Matter & reactions · Bronze/Iron Age · forge myths', window: 'Oct 12 – Nov 20' },
  { n: 3, id: null, title: 'Deep Time & the Restless Earth', theme: 'Rock cycle · plate tectonics · reading evidence', window: 'Nov 30 – Jan 22' },
  { n: 4, id: null, title: 'A Connected World', theme: 'Resources · trade routes · research writing', window: 'Jan 25 – Mar 5' },
  { n: 5, id: null, title: 'When the Ground Shifts', theme: 'Natural hazards · turning points · a choice novel', window: 'Mar 8 – Apr 23' },
  { n: 6, id: null, title: 'Power (capstone)', theme: 'Energy & circuits · who controls energy · persuasion', window: 'Apr 26 – Jun 11' },
];

/* The math arc (Khan 7th-grade sequence). `id` links to a built math unit.
   `window` = a rough, broad target range (math runs daily, self-paced, alongside
   the interdisciplinary track). Ranges are sized by the breadth of each Khan unit
   — Negatives, Expressions and Geometry are Khan's biggest 7th-grade units, so
   they get more weeks; edit freely. */
const MATH_PLAN = [
  { n: 1, id: 'math-proportions', title: 'Proportional Relationships', theme: 'Ratios · constant of proportionality · graphs · proportions', window: 'Aug 31 – Oct 2' },
  { n: 2, id: 'math-rates', title: 'Rates & Percentages', theme: 'Unit rates · percent problems', window: 'Oct 5 – Nov 13' },
  { n: 3, id: 'math-negatives', title: 'Negative Numbers', theme: 'Add, subtract, multiply & divide rationals', window: 'Nov 16 – Jan 15' },
  { n: 4, id: 'math-expressions', title: 'Expressions & Equations', theme: 'Equivalent expressions · solve equations & inequalities', window: 'Jan 18 – Mar 5' },
  { n: 5, id: 'math-geometry', title: 'Geometry', theme: 'Scale drawings · angles · area, surface area & volume', window: 'Mar 8 – Apr 30' },
  { n: 6, id: 'math-statistics', title: 'Statistics & Probability', theme: 'Sampling · comparing populations · chance', window: 'May 3 – Jun 11' },
];

/* The full year's 7th-grade standards, by content area — the ACTUAL Oregon
   standards (checked against the ODE / IXL enumerations, July 2026):
   Math = 2021 Oregon Math Standards; Science = Oregon (NGSS) grade-7 standards;
   ELA = Oregon grade-7 English Language Arts; Social Studies = 2024 Oregon Social
   Science Standards (in effect for 2026–27). This is EVERY standard, whether or
   not a unit covers it, so gaps are visible. */
const STANDARDS = window.HS_STANDARDS;

function unitState(id) { try { return JSON.parse(localStorage.getItem('homeskewl_unit_' + id)) || {}; } catch (e) { return {}; } }
function esc(s) { return (s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
function pct(n, d) { return d ? Math.round(n / d * 100) : 0; }
function builtUnit(id) { return HS_UNITS.find(u => u.id === id); }
function doneCount(u) { const done = unitState(u.id).done || {}; return u.cards.filter(c => done[c.id]).length; }
function colorTile(subject) { const m = typeof SUBJECT_COLORS !== 'undefined' ? SUBJECT_COLORS : {}; return (m[subject] || {}).tile || '#8FD6E1'; }
function colorBold(subject) { const m = typeof SUBJECT_COLORS !== 'undefined' ? SUBJECT_COLORS : {}; return (m[subject] || {}).bg || '#17A0AE'; }

const norm = window.hsNormStd;

/* Normalized codes covered by a lesson that's marked done, in any built unit. */
function autoCovered() {
  const set = new Set();
  HS_UNITS.forEach(u => {
    const done = unitState(u.id).done || {};
    u.cards.forEach(c => { if (done[c.id]) (c.standards || '').split('·').forEach(t => { const n = norm(t); if (n) set.add(n); }); });
  });
  return set;
}

function loadStore() { try { return JSON.parse(localStorage.getItem(STD_KEY)) || {}; } catch (e) { return {}; } }
function saveStore(s) { localStorage.setItem(STD_KEY, JSON.stringify(s)); }

/* Merge completed-lesson coverage into the saved checklist (add-only), so the
   list fills in on its own as lessons get done, without wiping manual checks. */
let store = loadStore();
(function seed() {
  const auto = autoCovered();
  let changed = false;
  STANDARDS.forEach(a => a.list.forEach(s => {
    if (auto.has(norm(s.code)) && !store[s.code]) { store[s.code] = 1; changed = true; }
  }));
  if (changed) saveStore(store);
})();

function isDone(code) { return !!store[code]; }
function areaDone(a) { return a.list.filter(s => isDone(s.code)).length; }

/* ── year arc ── */
function dateTag(row) {
  return row.window ? `<span class="yr-window">🗓️ ${esc(row.window)}</span>` : '';
}

function unitRow(row) {
  const u = builtUnit(row.id);
  if (!u) {
    return `<div class="yr-row planned">
      <div class="yr-n">${row.n}</div>
      <div class="yr-main">
        <div class="yr-title">${esc(row.title)}</div>
        <div class="yr-theme">${esc(row.theme)}</div>
        ${dateTag(row)}
      </div>
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
      ${dateTag(row)}
      <div class="yr-bar"><div style="width:${p}%;"></div></div>
    </div>
    <div class="yr-status"><span class="yr-chip live-chip">${done}/${total} · ${status}</span></div>
  </a>`;
}

/* ── standards cards (collapsible, d.school-style) ── */
function standardsCards() {
  return `<div class="std-grid">${STANDARDS.map(a => {
    const done = areaDone(a), total = a.list.length;
    const rows = a.list.map(s => `
      <button type="button" class="std-row ${isDone(s.code) ? 'on' : ''}" data-code="${esc(s.code)}">
        <span class="std-check" aria-hidden="true"></span>
        <span class="std-code">${esc(s.code)}</span>
        <span class="std-label">${esc(s.label)}</span>
      </button>`).join('');
    return `<details class="std-card tile ${a.tex}" style="--tile:${colorTile(a.color)}; --ribbon:${colorBold(a.color)}; --ribbon-text:#fff;" data-area="${esc(a.area)}">
      <summary class="std-face">
        <span class="tile-side">${esc(a.side)}</span>
        <div class="big-ribbon"><div class="ribbon-track">${(esc(a.area) + '&nbsp;·&nbsp;').repeat(14)}</div></div>
        <div class="std-face-bottom">
          <span class="std-arrow">→</span>
          <div>
            <div class="std-face-title">${esc(a.area)}</div>
            <div class="std-face-sub"><span class="std-count">${done}</span> of ${total} done</div>
          </div>
        </div>
      </summary>
      <div class="std-checklist">${a.source ? `<div class="std-source">${esc(a.source)}</div>` : ''}${rows}</div>
    </details>`;
  }).join('')}</div>`;
}

function section(title, body) {
  return `<div class="bp-section"><div class="section-label">${title}</div>${body}</div>`;
}

function load() {
  const content = document.getElementById('content');
  const totalStd = STANDARDS.reduce((n, a) => n + a.list.length, 0);
  const doneStd = STANDARDS.reduce((n, a) => n + areaDone(a), 0);
  const unitsLive = HS_UNITS.length;
  const totalUnits = YEAR_PLAN.length + MATH_PLAN.length;
  const cardsDone = HS_UNITS.reduce((s, u) => s + doneCount(u), 0);

  document.getElementById('stat-units').textContent = `${unitsLive}/${totalUnits}`;
  document.getElementById('stat-cards').textContent = cardsDone;
  document.getElementById('stat-standards').textContent = `${doneStd}/${totalStd}`;

  const yearColumns = `<div class="yr-columns">
    <div class="yr-col core"><div class="yr-col-label">Interdisciplinary</div><div class="yr-list">${YEAR_PLAN.map(unitRow).join('')}</div></div>
    <div class="yr-col math"><div class="yr-col-label">Math</div><div class="yr-list">${MATH_PLAN.map(unitRow).join('')}</div></div>
  </div>`;

  content.innerHTML =
    section('The year, unit by unit', yearColumns) +
    section('Standards checklist — the whole year', standardsCards()) +
    `<p class="bp-footnote">Tap a subject to open its standards. A standard checks itself off when a lesson
     that covers it is done — and you can tap any standard to check it by hand (handy for daily Khan math,
     which lives outside the units). Crasher's actual answers are on the <a href="portfolio.html">Portfolio</a> page.</p>`;

  wire();
}

function wire() {
  document.querySelectorAll('.std-row').forEach(row => {
    row.addEventListener('click', () => {
      const code = row.dataset.code;
      if (store[code]) delete store[code]; else store[code] = 1;
      saveStore(store);
      row.classList.toggle('on', !!store[code]);
      // update this card's count + the top total
      const card = row.closest('.std-card');
      const area = STANDARDS.find(a => a.area === card.dataset.area);
      card.querySelector('.std-count').textContent = areaDone(area);
      const totalStd = STANDARDS.reduce((n, a) => n + a.list.length, 0);
      const doneStd = STANDARDS.reduce((n, a) => n + areaDone(a), 0);
      document.getElementById('stat-standards').textContent = `${doneStd}/${totalStd}`;
    });
  });
}

load();
