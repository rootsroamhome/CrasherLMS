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
const YEAR_PLAN = [
  { n: 1, id: 'rivers', title: 'Rivers & the Rise of Civilization', theme: 'Water & land · first civilizations · flood myths' },
  { n: 2, id: 'metals', title: 'Metals & the Rise of Empires', theme: 'Matter & reactions · Bronze/Iron Age · forge myths' },
  { n: 3, id: null, title: 'Deep Time & the Restless Earth', theme: 'Rock cycle · plate tectonics · reading evidence' },
  { n: 4, id: null, title: 'A Connected World', theme: 'Resources · trade routes · research writing' },
  { n: 5, id: null, title: 'When the Ground Shifts', theme: 'Natural hazards · turning points · a choice novel' },
  { n: 6, id: null, title: 'Power (capstone)', theme: 'Energy & circuits · who controls energy · persuasion' },
];

/* The full year's 7th-grade standards, by content area. `match` (optional) is the
   token used to auto-check from a completed lesson when it differs from `code`. */
const STANDARDS = [
  { area: 'Math', side: 'MATHEMATICS', color: 'Math', tagline: 'daily on Khan Academy', tex: 'tex-a', list: [
    { code: '7.RP.A', label: 'Analyze proportional relationships — ratios, unit rates, proportions' },
    { code: '7.NS.A', label: 'Add, subtract, multiply & divide rational numbers (including negatives)' },
    { code: '7.EE.A', label: 'Use properties to generate equivalent expressions' },
    { code: '7.EE.B', label: 'Solve real-life problems with equations & inequalities' },
    { code: '7.G.A', label: 'Draw, construct & describe geometric figures (scale, cross-sections)' },
    { code: '7.G.B', label: 'Angle, area, surface area & volume problems' },
    { code: '7.SP.AB', label: 'Random sampling & comparing two populations' },
    { code: '7.SP.C', label: 'Probability of chance events' },
  ] },
  { area: 'Science', side: 'NGSS SCIENCE', color: 'Science', tagline: 'across the units', tex: 'tex-b', list: [
    { code: 'MS-PS1-1', label: 'Model atoms, molecules & extended structures' },
    { code: 'MS-PS1-2', label: 'Analyze evidence that a chemical reaction occurred' },
    { code: 'MS-PS1-3', label: 'Synthetic materials come from natural resources' },
    { code: 'MS-PS1-4', label: 'Particle motion, temperature & changes of state' },
    { code: 'MS-PS1-5', label: 'Conservation of mass in a reaction' },
    { code: 'MS-PS1-6', label: 'Design a device that releases or absorbs thermal energy' },
    { code: 'MS-ESS2-1', label: "Cycling of Earth's materials (rock cycle)" },
    { code: 'MS-ESS2-2', label: 'Geoscience processes over time & scale' },
    { code: 'MS-ESS2-3', label: 'Evidence for plate motions' },
    { code: 'MS-ESS2-4', label: 'The water cycle, driven by sun & gravity' },
    { code: 'MS-ESS3-1', label: 'Uneven distribution of natural resources' },
    { code: 'MS-ESS3-2', label: 'Forecast & reduce the impact of natural hazards' },
    { code: 'MS-PS3-1', label: 'Kinetic energy — mass & speed' },
    { code: 'MS-PS3-2', label: 'Potential energy stored in a system' },
    { code: 'MS-PS3-5', label: 'Energy transfer changes an object’s energy' },
    { code: 'MS-ETS1-1', label: 'Define & delimit an engineering design problem' },
    { code: 'MS-LS2-1', label: 'Resource availability affects organisms (revisit)' },
  ] },
  { area: 'Reading & Writing', side: 'ELA', color: 'ELA', tagline: 'woven through every unit', tex: 'tex-c', list: [
    { code: 'RI.7.1', label: 'Cite textual evidence (informational text)' },
    { code: 'RI.7.2', label: 'Determine a central idea & summarize' },
    { code: 'RI.7.3', label: 'Analyze how ideas & events interact (cause/effect)' },
    { code: 'RI.7.8', label: 'Evaluate an argument and its evidence' },
    { code: 'RL.7.1', label: 'Cite textual evidence (literature)' },
    { code: 'RL.7.2', label: 'Determine a theme & summarize' },
    { code: 'RL.7.9', label: 'Compare a fictional & a historical account' },
    { code: 'W.7.1', label: 'Write an argument with reasons & evidence' },
    { code: 'W.7.2', label: 'Write informative / explanatory text' },
    { code: 'W.7.3', label: 'Write a narrative' },
    { code: 'W.7.7', label: 'Conduct a short research project' },
    { code: 'SL.7.4', label: 'Present claims & findings' },
  ] },
  { area: 'Social Studies', side: 'OREGON SOCIAL SCIENCES', color: 'Humanities', tagline: 'world history & civics in the units', tex: 'tex-d', list: [
    { code: '7.G.GR.1', label: 'Geographic reasoning' },
    { code: '7.G.HI.4', label: 'Human–environment interaction' },
    { code: '7.G.HE.6', label: 'How environment shapes societies' },
    { code: '7.H.CH.3', label: 'Analyze causes & effects of historical change' },
    { code: '7.C.PI.1', label: 'Political institutions & power' },
    { code: '7.E', label: 'Economics — trade, resources & scarcity' },
    { code: 'SB13', match: 'Tribal history', label: 'Tribal History / Shared History (SB 13)' },
  ] },
];

function unitState(id) { try { return JSON.parse(localStorage.getItem('homeskewl_unit_' + id)) || {}; } catch (e) { return {}; } }
function esc(s) { return (s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
function pct(n, d) { return d ? Math.round(n / d * 100) : 0; }
function builtUnit(id) { return HS_UNITS.find(u => u.id === id); }
function doneCount(u) { const done = unitState(u.id).done || {}; return u.cards.filter(c => done[c.id]).length; }
function colorTile(subject) { const m = typeof SUBJECT_COLORS !== 'undefined' ? SUBJECT_COLORS : {}; return (m[subject] || {}).tile || '#8FD6E1'; }

/* Standards covered by a lesson that's marked done, in any built unit. */
function autoCovered() {
  const set = new Set();
  HS_UNITS.forEach(u => {
    const done = unitState(u.id).done || {};
    u.cards.forEach(c => { if (done[c.id]) (c.standards || '').split('·').forEach(t => set.add(t.trim())); });
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
    if (auto.has(s.match || s.code) && !store[s.code]) { store[s.code] = 1; changed = true; }
  }));
  if (changed) saveStore(store);
})();

function isDone(code) { return !!store[code]; }
function areaDone(a) { return a.list.filter(s => isDone(s.code)).length; }

/* ── year arc ── */
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
    return `<details class="std-card tile ${a.tex}" style="--tile:${colorTile(a.color)};" data-area="${esc(a.area)}">
      <summary class="std-face">
        <span class="tile-side">${esc(a.side)}</span>
        <div class="big-ribbon"><div class="ribbon-track">${(esc(a.area) + '&nbsp;·&nbsp;').repeat(14)}</div></div>
        <div class="std-face-bottom">
          <span class="std-arrow">→</span>
          <div>
            <div class="std-face-title">${esc(a.area)}</div>
            <div class="std-face-sub"><span class="std-count">${done}</span> of ${total} done · ${esc(a.tagline)}</div>
          </div>
        </div>
      </summary>
      <div class="std-checklist">${rows}</div>
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
  const cardsDone = HS_UNITS.reduce((s, u) => s + doneCount(u), 0);

  document.getElementById('stat-units').textContent = `${unitsLive}/${YEAR_PLAN.length}`;
  document.getElementById('stat-cards').textContent = cardsDone;
  document.getElementById('stat-standards').textContent = `${doneStd}/${totalStd}`;

  content.innerHTML =
    section('The year, unit by unit', `<div class="yr-list">${YEAR_PLAN.map(unitRow).join('')}</div>`) +
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
