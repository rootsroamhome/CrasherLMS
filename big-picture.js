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

/* The math arc (Khan 7th-grade sequence). `id` links to a built math unit. */
const MATH_PLAN = [
  { n: 1, id: 'math-proportions', title: 'Proportional Relationships', theme: 'Ratios · constant of proportionality · graphs · proportions' },
  { n: 2, id: null, title: 'Rates & Percentages', theme: 'Unit rates · percent problems' },
  { n: 3, id: null, title: 'Negative Numbers', theme: 'Add, subtract, multiply & divide rationals' },
  { n: 4, id: null, title: 'Expressions & Equations', theme: 'Equivalent expressions · solve equations & inequalities' },
  { n: 5, id: null, title: 'Geometry', theme: 'Scale drawings · angles · area, surface area & volume' },
  { n: 6, id: null, title: 'Statistics & Probability', theme: 'Sampling · comparing populations · chance' },
];

/* The full year's 7th-grade standards, by content area — the ACTUAL Oregon
   standards (checked against the ODE / IXL enumerations, July 2026):
   Math = 2021 Oregon Math Standards; Science = Oregon (NGSS) grade-7 standards;
   ELA = Oregon grade-7 English Language Arts; Social Studies = 2024 Oregon Social
   Science Standards (in effect for 2026–27). This is EVERY standard, whether or
   not a unit covers it, so gaps are visible. */
const STANDARDS = [
  { area: 'Math', side: 'MATH', color: 'Math', tex: 'tex-a', source: 'Oregon 2021 Mathematics Standards · Grade 7', list: [
    { code: '7.NS.A.1', label: 'Add & subtract rational numbers (extend to negatives & absolute value)' },
    { code: '7.NS.A.2', label: 'Multiply & divide rational numbers' },
    { code: '7.NS.A.3', label: 'Write rational numbers as equivalent fractions, decimals & percents' },
    { code: '7.AEE.A.1', label: 'Write equivalent expressions using the properties of operations' },
    { code: '7.AEE.A.2', label: 'Rewriting an expression can show how quantities are related' },
    { code: '7.AEE.B.3', label: 'Solve problems using expressions & equations with positive & negative rationals' },
    { code: '7.AEE.B.4', label: 'Build & solve one- and two-step linear inequalities' },
    { code: '7.RP.A.1', label: 'Unit rates involving ratios of fractions' },
    { code: '7.RP.A.2', label: 'Recognize & represent proportional relationships (tables, graphs, equations)' },
    { code: '7.RP.A.3', label: 'Use proportional relationships to solve ratio & percent problems' },
    { code: '7.RP.B.4', label: 'Probability of a chance event is a number between 0 and 1' },
    { code: '7.RP.B.5', label: 'Use experimental & theoretical probability to make predictions' },
    { code: '7.RP.B.6', label: 'Develop a probability model and use it to find probabilities' },
    { code: '7.RP.B.7', label: 'Probabilities of compound events (lists, tables, tree diagrams, simulation)' },
    { code: '7.GM.A.1', label: 'Scale drawings — compute actual lengths & areas' },
    { code: '7.GM.A.2', label: 'Draw triangles from given angles/sides; when they are possible or unique' },
    { code: '7.GM.B.3', label: 'Relate area & circumference of circles; use the formulas' },
    { code: '7.GM.B.4', label: 'Supplementary, complementary, vertical & adjacent angles' },
    { code: '7.GM.B.5', label: 'Area, volume & surface area of 2-D and 3-D figures' },
    { code: '7.DR.A.1', label: 'Formulate investigative questions; samples must be representative' },
    { code: '7.DR.B.2', label: 'Use random samples to draw inferences about populations' },
    { code: '7.DR.C.3', label: 'Compare two data distributions (center & variability)' },
    { code: '7.DR.D.4', label: 'Interpret center & variability to compare populations' },
  ] },
  { area: 'Science', side: 'SCIENCE', color: 'Science', tex: 'tex-b', source: 'Oregon (NGSS) Science Standards · Grade 7', list: [
    { code: '7.PS1.1', label: 'Model the atomic composition of molecules & extended structures' },
    { code: '7.PS1.2', label: 'Analyze evidence that a chemical reaction has occurred' },
    { code: '7.PS1.3', label: 'Synthetic materials come from natural resources & impact society' },
    { code: '7.PS1.4', label: 'Particle motion, temperature & state changes with thermal energy' },
    { code: '7.PS1.5', label: 'Conservation of mass — atom count is unchanged in a reaction' },
    { code: '7.PS1.6', label: 'Design a device that releases or absorbs thermal energy' },
    { code: '7.ESS2.1', label: "Cycling of Earth's materials & the energy that drives it" },
    { code: '7.ESS2.2', label: "Geoscience processes have changed Earth's surface (time & scale)" },
    { code: '7.ESS2.3', label: 'Evidence for past plate motions (fossils, rocks, seafloor)' },
    { code: '7.ESS3.1', label: "Uneven distribution of Earth's resources from geoscience processes" },
    { code: '7.ESS3.2', label: 'Forecast natural hazards & technologies to mitigate them' },
    { code: '7.LS1.6', label: 'Photosynthesis in the cycling of matter & flow of energy' },
    { code: '7.LS1.7', label: 'Food rearranged through chemical reactions for growth/energy' },
    { code: '7.LS2.1', label: 'Effects of resource availability on organisms & populations' },
    { code: '7.LS2.2', label: 'Predict patterns of interactions among organisms' },
    { code: '7.LS2.3', label: 'Cycling of matter & flow of energy among living & nonliving parts' },
    { code: '7.LS2.4', label: 'Changes to an ecosystem affect its populations (argument)' },
    { code: '7.LS2.5', label: 'Evaluate design solutions for maintaining biodiversity' },
    { code: 'MS.ETS1.1', label: 'Define the criteria & constraints of a design problem' },
    { code: 'MS.ETS1.2', label: 'Evaluate competing design solutions' },
    { code: 'MS.ETS1.3', label: 'Combine the best characteristics of solutions into a better one' },
    { code: 'MS.ETS1.4', label: 'Model to generate data for iterative testing & refinement' },
  ] },
  { area: 'Reading & Writing', side: 'ELA', color: 'ELA', tex: 'tex-c', source: 'Oregon English Language Arts · Grade 7', list: [
    { code: '7.RL.1', label: 'Literature: cite several pieces of textual evidence (explicit & inferred)' },
    { code: '7.RL.2', label: 'Literature: determine a theme & analyze its development; summarize' },
    { code: '7.RL.3', label: 'Literature: analyze how story/drama elements interact' },
    { code: '7.RL.4', label: 'Literature: meaning of words/phrases; impact of rhyme & sound' },
    { code: '7.RL.5', label: "Literature: how a drama's or poem's form contributes to meaning" },
    { code: '7.RL.6', label: 'Literature: analyze & contrast points of view of characters/narrators' },
    { code: '7.RL.7', label: 'Literature: compare a text to its audio/film/staged version' },
    { code: '7.RL.9', label: 'Literature: compare a fictional portrayal with a historical account' },
    { code: '7.RL.10', label: 'Literature: read & comprehend grades 6–8 texts proficiently' },
    { code: '7.RI.1', label: 'Informational: cite several pieces of textual evidence' },
    { code: '7.RI.2', label: 'Informational: determine two+ central ideas; summarize' },
    { code: '7.RI.3', label: 'Informational: analyze interactions of individuals, events & ideas' },
    { code: '7.RI.4', label: 'Informational: figurative, connotative & technical word meaning' },
    { code: '7.RI.5', label: 'Informational: analyze the structure used to organize a text' },
    { code: '7.RI.6', label: "Informational: author's point of view & purpose" },
    { code: '7.RI.7', label: 'Informational: compare a text to an audio/video/multimedia version' },
    { code: '7.RI.8', label: 'Informational: trace & evaluate an argument and its evidence' },
    { code: '7.RI.9', label: 'Informational: analyze how two authors treat the same topic' },
    { code: '7.RI.10', label: 'Informational: read & comprehend grades 6–8 texts proficiently' },
    { code: '7.W.1', label: 'Write arguments with claims, reasons & evidence' },
    { code: '7.W.2', label: 'Write informative / explanatory texts' },
    { code: '7.W.3', label: 'Write narratives' },
    { code: '7.W.4', label: 'Produce clear, coherent writing for task, purpose & audience' },
    { code: '7.W.5', label: 'Plan, revise, edit & rewrite to strengthen writing' },
    { code: '7.W.6', label: 'Use technology to produce, publish & link to sources' },
    { code: '7.W.7', label: 'Conduct short research projects from several sources' },
    { code: '7.W.8', label: 'Gather & assess sources; quote/paraphrase; avoid plagiarism; cite' },
    { code: '7.W.9', label: 'Draw evidence from texts to support analysis & research' },
    { code: '7.W.10', label: 'Write routinely over extended & shorter time frames' },
    { code: '7.SL.1', label: 'Engage effectively in collaborative discussions' },
    { code: '7.SL.2', label: 'Analyze main ideas in diverse media & formats' },
    { code: "7.SL.3", label: "Delineate a speaker's argument; evaluate reasoning & evidence" },
    { code: '7.SL.4', label: 'Present claims & findings with relevant evidence' },
    { code: '7.SL.5', label: 'Include multimedia & visual displays in presentations' },
    { code: '7.SL.6', label: 'Adapt speech to context; use formal English when appropriate' },
    { code: '7.L.1', label: 'Command of grammar & usage when writing/speaking' },
    { code: '7.L.2', label: 'Command of capitalization, punctuation & spelling' },
    { code: '7.L.3', label: 'Use knowledge of language & its conventions' },
    { code: '7.L.4', label: 'Determine word meaning (context, roots/affixes, references)' },
    { code: '7.L.5', label: 'Figurative language, word relationships & nuance' },
    { code: '7.L.6', label: 'Acquire & use grade-level academic & domain vocabulary' },
  ] },
  { area: 'Social Studies', side: 'HISTORY', color: 'Humanities', tex: 'tex-d', source: 'Oregon 2024 Social Science Standards · Grade 7', list: [
    { code: '7.C.PI.1', label: 'Civics: early governance, Paleolithic to 900 CE' },
    { code: '7.C.PI.2', label: 'Civics: governance after 600 CE & treatment of underrepresented groups' },
    { code: '7.C.PI.3', label: 'Civics: compare historical & modern governance across continents' },
    { code: '7.C.PI.4', label: 'Civics: religions, philosophies & legal systems on rights & justice' },
    { code: '7.C.PI.5', label: 'Civics: constitutions, laws, treaties & international agreements' },
    { code: '7.C.IR.6', label: 'Civics: rights & roles of citizens to 900 CE' },
    { code: '7.C.IR.7', label: 'Civics: rights & roles of citizens after 600 CE' },
    { code: '7.C.IR.8', label: 'Civics: resisting misinformation, indifference & discrimination' },
    { code: '7.C.DP.9', label: 'Civics: repair, reconciliation & restorative justice after injustice' },
    { code: '7.C.CE.10', label: 'Civics: attempts to limit the power of government' },
    { code: '7.G.GR.1', label: 'Geography: maps & spatial thinking on movement of people, goods, ideas' },
    { code: '7.G.GR.2', label: 'Geography: place, region, absolute & relative location' },
    { code: '7.G.MM.3', label: 'Geography: transport & communication spread ideas & culture' },
    { code: '7.G.HI.4', label: 'Geography: how place shapes culture, politics, religion, identity' },
    { code: '7.G.HI.5', label: 'Geography: consequences of cultural conflict, exchange & fusion' },
    { code: '7.G.HE.6', label: 'Geography: how environment shapes population, tech & resource use' },
    { code: '7.G.HE.7', label: 'Geography: how conquest & colonialism affected communities' },
    { code: '7.E.ES.1', label: 'Economics: education/training for two career choices' },
    { code: '7.E.ES.2', label: 'Economics: budget for living expenses & savings' },
    { code: '7.E.ES.3', label: 'Economics: tools to budget & save for a large purchase' },
    { code: '7.E.MI.4', label: 'Economics: supply & demand affect wages & prices' },
    { code: '7.E.MI.5', label: 'Economics: roles of consumers & producers in markets' },
    { code: '7.E.MI.6', label: 'Economics: the four factors of production' },
    { code: '7.E.MI.7', label: 'Economics: how different economic systems allocate resources' },
    { code: '7.E.IC.8', label: 'Economics: how government interventions (taxes, tribute) affect people' },
    { code: '7.E.IC.9', label: 'Economics: weigh costs & benefits for underrepresented groups' },
    { code: '7.E.ST.10', label: 'Economics: compare specialization & trade in two civilizations' },
    { code: '7.E.ST.11', label: 'Economics: specialization & the cost of goods for trade/barter' },
    { code: '7.E.ST.12', label: 'Economics: interdependence & technology raise living standards' },
    { code: '7.H.CH.1', label: 'History: construct & interpret a timeline of human societies' },
    { code: '7.H.CH.2', label: 'History: what defines a complex society or "civilization"' },
    { code: '7.H.CH.3', label: 'History: key features of civilizations, Neolithic to 900 CE' },
    { code: '7.H.CC.4', label: 'History: sources on interactions of cultures, Neolithic to 900 CE' },
    { code: '7.H.CC.5', label: 'History: sources on interactions of cultures after 600 CE' },
    { code: '7.H.CC.6', label: 'History: Indigenous resilience & resistance to colonialism' },
    { code: '7.H.CE.7', label: 'History: how conquest & colonialism affected communities' },
    { code: '7.H.CP.8', label: 'History: origins of early world religions, Neolithic to 1500 CE' },
    { code: '7.H.CP.9', label: 'History: creation & origin stories across cultures' },
    { code: '7.H.CP.10', label: 'History: compare Hinduism, Judaism, Buddhism, Taoism, Christianity, Islam' },
    { code: '7.H.CP.11', label: 'History: origins & modern forms of anti-Judaism' },
    { code: '7.H.CP.12', label: 'History: how institutions create or address injustice' },
    { code: '7.H.CP.13', label: 'History: Indigenous civilizations of the Americas, to 1500' },
    { code: '7.H.CP.14', label: 'History: cultures of W. Asia, Middle East & N. Africa, to 1500' },
    { code: '7.H.CP.15', label: 'History: cultures of Sub-Saharan Africa' },
  ] },
];

function unitState(id) { try { return JSON.parse(localStorage.getItem('homeskewl_unit_' + id)) || {}; } catch (e) { return {}; } }
function esc(s) { return (s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
function pct(n, d) { return d ? Math.round(n / d * 100) : 0; }
function builtUnit(id) { return HS_UNITS.find(u => u.id === id); }
function doneCount(u) { const done = unitState(u.id).done || {}; return u.cards.filter(c => done[c.id]).length; }
function colorTile(subject) { const m = typeof SUBJECT_COLORS !== 'undefined' ? SUBJECT_COLORS : {}; return (m[subject] || {}).tile || '#8FD6E1'; }
function colorBold(subject) { const m = typeof SUBJECT_COLORS !== 'undefined' ? SUBJECT_COLORS : {}; return (m[subject] || {}).bg || '#17A0AE'; }

/* Normalize a standard code so codes in different formats still match, e.g.
   "MS-ESS3-1", "7.ESS3.1" → "ESS31"; "RI.7.1", "7.RI.1" → "RI1". */
function norm(code) {
  let c = (code || '').trim().toUpperCase().replace(/\s+/g, '');
  c = c.replace(/^MS[-.]?/, '');   // MS-ESS3-1 -> ESS3-1
  c = c.replace(/^7\./, '');       // 7.RI.1 -> RI.1 ; 7.ESS3.1 -> ESS3.1
  c = c.replace(/\.7\./, '.');     // RI.7.1 -> RI.1
  c = c.replace(/-/g, '.');        // ESS3-1 -> ESS3.1
  return c.replace(/\./g, '');     // -> ESS31, RI1
}

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
