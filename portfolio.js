/**
 * portfolio.js — Crasher's work.
 *
 * Top: standards mastered, by content area (a quick % per area — click to jump
 * to that area's checklist below).
 * Middle: the three tracks as Today-style tiles (like the Units page). Click a
 * track → its unit pills → a unit → his work for that unit (avg quiz score,
 * quiz-by-lesson, vocabulary, KWL, every written answer).
 * Bottom: EVERY 7th-grade standard, clickable. "his work →" jumps to the lesson
 * that shows it; "assigned" has a lesson waiting; "needs work" has nothing yet —
 * a visible gap to build for.
 *
 * Reads localStorage, so it shows the work done on THIS device.
 */

const HS_UNITS = window.HS_UNITS || [];

let openTrack = 'core';      // which track's unit pills are showing
let selectedUnit = null;     // which unit's work is open
let IDX = {};                // standard-code → covering lessons (built in load)

function unitState(id) { try { return JSON.parse(localStorage.getItem('homeskewl_unit_' + id)) || {}; } catch (e) { return {}; } }
function esc(s) { return (s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
function pct(n, d) { return d ? Math.round(n / d * 100) : 0; }
function colorTile(subject) { const m = typeof SUBJECT_COLORS !== 'undefined' ? SUBJECT_COLORS : {}; return (m[subject] || {}).tile || '#8FD6E1'; }
function colorBold(subject) { const m = typeof SUBJECT_COLORS !== 'undefined' ? SUBJECT_COLORS : {}; return (m[subject] || {}).bg || '#17A0AE'; }
function unitDoneCount(u) { const done = unitState(u.id).done || {}; return u.cards.filter(c => done[c.id]).length; }

function analyze(u) {
  const s = unitState(u.id);
  const done = s.done || {}, ans = s.ans || {}, quiz = s.quiz || {}, sort = s.sort || {}, kwl = s.kwl || {};
  const total = u.cards.length;
  const doneCount = u.cards.filter(c => done[c.id]).length;

  let quizGot = 0, quizMax = 0; const quizRows = [];
  u.cards.forEach(c => {
    if (!c.blocks.some(b => b.type === 'quiz')) return;
    const raw = quiz[c.id];
    if (raw && raw.includes('/')) {
      const [g, m] = raw.split('/').map(Number);
      quizGot += g; quizMax += m;
      quizRows.push({ n: c.n, title: c.title, got: g, max: m });
    } else {
      quizRows.push({ n: c.n, title: c.title, got: null, max: c.blocks.find(b => b.type === 'quiz').questions.length });
    }
  });

  const words = ((u.vocab && u.vocab.mustOwn) || []).map(v => v.term);
  const got = words.filter(w => sort[w] === 'got').length;
  const fuzzy = words.filter(w => sort[w] === 'fuzzy');

  let answered = 0;
  u.cards.forEach(c => c.blocks.forEach((b, bi) => {
    if (b.type === 'answers') b.prompts.forEach((p, pi) => { if (ans[`${c.id}_${bi}_${pi}`]) answered++; });
    if (b.type === 'choice') { const pk = ans[`${c.id}_${bi}_pick`]; if (pk !== undefined && pk !== '' && ans[`${c.id}_${bi}_r${pk}`]) answered++; }
  }));

  return { s, done, ans, kwl, total, doneCount, quizGot, quizMax, quizRows, words, got, fuzzy, sorted: got + fuzzy.length, answered };
}

/* Sum a track's quiz got/max (for the avg quiz score on a track tile). */
function trackQuiz(units) {
  let got = 0, max = 0;
  units.forEach(u => { const d = analyze(u); got += d.quizGot; max += d.quizMax; });
  return { got, max, pct: max ? pct(got, max) : null };
}

function meter(label, text, value, color) {
  return `<div class="bp-meter">
    <div class="bp-meter-top"><span>${label}</span><span class="bp-meter-val">${esc(text)}</span></div>
    <div class="bp-meter-bar"><div style="width:${value}%; background:${color};"></div></div>
  </div>`;
}

/* One lesson's saved work — quiz score + written answers / build links / rubric. */
function cardWork(u, c, d) {
  const a = d.ans || {};
  const quizMap = (d.s && d.s.quiz) || {};
  const parts = [];

  const quizBlock = c.blocks.find(b => b.type === 'quiz');
  if (quizBlock) {
    const raw = quizMap[c.id];
    if (raw && raw.includes('/')) {
      const [g, m] = raw.split('/').map(Number);
      const p = pct(g, m);
      const col = p === 100 ? 'var(--success)' : p >= 50 ? 'var(--teal)' : '#F0533F';
      parts.push(`<div class="bp-qa"><div class="bp-q">Quick check</div>
        <div class="bp-a"><span class="pf-score" style="color:${col}">Scored ${g} / ${m} · ${p}%</span></div></div>`);
    }
  }

  c.blocks.forEach((b, bi) => {
    if (b.type === 'answers') {
      b.prompts.forEach((p, pi) => {
        const v = a[`${c.id}_${bi}_${pi}`];
        parts.push(`<div class="bp-qa">
          <div class="bp-q">${esc(p)}</div>
          <div class="bp-a${v ? '' : ' empty'}">${v ? esc(v) : '— not answered yet —'}</div>
        </div>`);
      });
    }
    if (b.type === 'build' && b.photo) {
      const v = a[`${c.id}_${bi}_photo`];
      if (v) parts.push(`<div class="bp-qa"><div class="bp-q">${esc(b.title || 'Build')} — photo/link</div><div class="bp-a"><a href="${esc(v)}" target="_blank" rel="noopener">${esc(v)}</a></div></div>`);
    }
    if (b.type === 'rubric') {
      const checks = b.items.map((it, ii) => `<li class="${a[`${c.id}_${bi}_r${ii}`] === 'y' ? 'on' : ''}">${esc(it)}</li>`).join('');
      parts.push(`<div class="bp-qa"><div class="bp-q">Self-check</div><ul class="bp-rubric">${checks}</ul></div>`);
    }
    if (b.type === 'choice') {
      const pk = a[`${c.id}_${bi}_pick`];
      if (pk !== undefined && pk !== '') {
        const o = b.options[parseInt(pk, 10)];
        const v = a[`${c.id}_${bi}_r${pk}`];
        const label = o ? (o.label || 'His choice') : 'His choice';
        const val = (o && o.input === 'text')
          ? (v ? esc(v) : '— not done yet —')
          : (v ? `<a href="${esc(v)}" target="_blank" rel="noopener">${esc(v)}</a>` : '— not done yet —');
        parts.push(`<div class="bp-qa"><div class="bp-q">${esc(b.title || 'Show what you know')} — chose: ${esc(label)}</div><div class="bp-a${v ? '' : ' empty'}">${val}</div></div>`);
      }
    }
  });
  if (!parts.length) return '';
  return `<div class="bp-workcard" id="pfwork-${u.id}-${c.id}">
    <div class="bp-workcard-title">${c.n}. ${esc(c.title)}${c.standards ? ` <span class="pf-workstd">${esc(c.standards)}</span>` : ''}</div>
    ${parts.join('')}</div>`;
}

/* The selected unit's work panel (avg quiz score + chart + vocab + KWL + work). */
function unitWorkPanel(u) {
  const d = analyze(u);
  const quizAvg = d.quizMax ? pct(d.quizGot, d.quizMax) : null;
  const gotPct = pct(d.got, d.words.length);
  const donePct = pct(d.doneCount, d.total);
  const accent = u.track === 'math' ? '#D19A1F' : u.track === 'clep' ? '#E07A3E' : 'var(--teal)';

  const chart = d.quizRows.map(r => {
    const h = r.got === null ? 0 : pct(r.got, r.max);
    const label = r.got === null ? '–' : `${r.got}/${r.max}`;
    const col = r.got === null ? 'var(--line)' : (h === 100 ? 'var(--success)' : h >= 50 ? 'var(--teal)' : '#F0533F');
    return `<div class="bp-bar"><div class="bp-bar-fill" style="height:${Math.max(h, 4)}%; background:${col};"></div>
      <div class="bp-bar-num">${label}</div><div class="bp-bar-cap">#${r.n}</div></div>`;
  }).join('');

  const untouched = d.words.length - d.sorted;
  const vocabBar = `<div class="bp-seg">
    <div style="flex:${d.got}; background:var(--success);"></div>
    <div style="flex:${d.fuzzy.length}; background:#D19A1F;"></div>
    <div style="flex:${Math.max(untouched, 0)}; background:var(--cream-2);"></div>
  </div>`;

  const kwl = (d.kwl.k || d.kwl.w || d.kwl.l) ? `<h3 class="bp-subhead">KWL</h3><div class="bp-kwl">
    <div><span>Knew going in</span><p>${esc(d.kwl.k) || '<em>—</em>'}</p></div>
    <div><span>Wanted to know</span><p>${esc(d.kwl.w) || '<em>—</em>'}</p></div>
    <div><span>Learned by the end</span><p>${esc(d.kwl.l) || '<em>(not finished)</em>'}</p></div>
  </div>` : '';

  const work = u.cards.map(c => cardWork(u, c, d)).filter(Boolean).join('');

  return `<div class="pf-workview-inner" id="pf-${u.id}">
    <div class="pf-workview-head">
      <h2 class="pf-workview-title">${esc(u.title)}</h2>
      <span class="pf-workview-sub">${d.doneCount}/${d.total} lessons${quizAvg !== null ? ` · quiz ${quizAvg}%` : ''}${d.answered ? ` · ${d.answered} answers` : ''}</span>
    </div>
    <div class="pf-body">
      <div class="bp-meters">
        ${meter('Lessons done', `${d.doneCount} / ${d.total}`, donePct, accent)}
        ${meter('Avg quiz score', quizAvg === null ? 'no quizzes yet' : `${quizAvg}% (${d.quizGot}/${d.quizMax})`, quizAvg || 0, 'var(--success)')}
        ${meter('Words owned', `${d.got} / ${d.words.length}`, gotPct, '#D19A1F')}
      </div>

      ${d.quizRows.length ? `<h3 class="bp-subhead">Quiz scores by lesson</h3><div class="bp-chart">${chart}</div>` : ''}

      <h3 class="bp-subhead">Vocabulary</h3>
      ${vocabBar}
      <div class="bp-legend"><span class="dot-got"></span>Got it (${d.got}) <span class="dot-fuzzy"></span>Still fuzzy (${d.fuzzy.length}) <span class="dot-none"></span>Not rated (${Math.max(untouched, 0)})</div>
      ${d.fuzzy.length ? `<div class="bp-studylist"><strong>Study list:</strong> ${d.fuzzy.map(esc).join(' · ')}</div>` : ''}

      ${kwl}

      <h3 class="bp-subhead">Lesson work</h3>
      ${work || '<p class="empty-msg">No saved work for this unit yet.</p>'}
    </div>
  </div>`;
}

/* ── the three track tiles + unit pills (Today-style, like the Units page) ── */
function trackImage(units) { const u = units.find(x => x.image) || units[0]; return u && u.image ? u.image : ''; }
function trackStats(units) {
  const done = units.reduce((n, u) => n + unitDoneCount(u), 0);
  const total = units.reduce((n, u) => n + u.cards.length, 0);
  return `${units.length} unit${units.length === 1 ? '' : 's'} · ${done}/${total} lessons`;
}
function tileFoot(key, units) {
  const q = trackQuiz(units);
  const cta = openTrack === key ? 'Units below ↓' : 'Pick a unit →';
  return `<div class="tile-foot"><span class="tile-cta">${cta}</span>${q.pct !== null ? `<span class="tile-prog">Avg quiz ${q.pct}%</span>` : ''}</div>`;
}
function trackTiles(core, math, clep) {
  const oc = key => openTrack === key ? ' open' : '';
  const coreImg = trackImage(core);
  const t1 = core.length ? `<button type="button" class="card tile tex-a today-tile track-tile core${oc('core')}" data-track="core" style="--tile:#8FD6E1; --card-accent:#17A0AE;">
    <span class="tile-dot"></span><span class="tile-side">THEMATIC</span>
    ${coreImg ? `<div class="today-photo"><img src="${coreImg}" alt=""></div>` : ''}
    <div class="tile-eyebrow">${trackStats(core)}</div>
    <h2 class="tile-title">Interdisciplinary</h2>
    ${tileFoot('core', core)}
  </button>` : '';
  const t2 = math.length ? `<button type="button" class="card tile tex-c today-tile track-tile math${oc('math')}" data-track="math" style="--tile:#F4CE5E; --card-accent:#D19A1F;">
    <span class="tile-dot"></span><span class="tile-side">SKILLS</span>
    <span class="tile-ghost" aria-hidden="true">M</span>
    <div class="tile-eyebrow">${trackStats(math)}</div>
    <h2 class="tile-title">Math</h2>
    ${tileFoot('math', math)}
  </button>` : '';
  const t3 = clep.length ? `<button type="button" class="card tile tex-b today-tile track-tile clep${oc('clep')}" data-track="clep" style="--tile:#F0B98C; --card-accent:#E07A3E;">
    <span class="tile-dot"></span><span class="tile-side">ELECTIVE</span>
    <span class="tile-arcs" aria-hidden="true"></span>
    <div class="tile-eyebrow">${trackStats(clep)}</div>
    <h2 class="tile-title tile-title-sans">CLEP</h2>
    <p class="tile-display">College credit · Western Civ I</p>
    ${tileFoot('clep', clep)}
  </button>` : '';
  return t1 + t2 + t3;
}
function trackPillsPanel(key, units) {
  if (!units.length) return '';
  const pills = units.map(u => {
    const name = (u.short || u.title).replace(/^[^·]*·\s*/, '');
    return `<button type="button" class="u-switch-link pf-pill${u.id === selectedUnit ? ' on' : ''}" data-uid="${u.id}" title="${esc(u.short || u.title)}">${esc(name)}</button>`;
  }).join('');
  return `<div class="track-pills u-switch-group ${key}" data-track="${key}" style="display:${openTrack === key ? 'flex' : 'none'};">${pills}</div>`;
}

function renderTrackSection() {
  const core = HS_UNITS.filter(u => !u.track);
  const math = HS_UNITS.filter(u => u.track === 'math');
  const clep = HS_UNITS.filter(u => u.track === 'clep');
  const host = document.getElementById('pf-tracksection');
  const work = selectedUnit
    ? unitWorkPanel(HS_UNITS.find(u => u.id === selectedUnit))
    : '<p class="empty-msg pf-workhint">Tap a unit above to open his work — his avg quiz score, vocabulary, and written answers.</p>';
  host.innerHTML = `<div class="u-tracks">
      <div class="track-picker">${trackTiles(core, math, clep)}</div>
      ${trackPillsPanel('core', core)}${trackPillsPanel('math', math)}${trackPillsPanel('clep', clep)}
    </div>
    <div id="pf-workview">${work}</div>`;
  wireTrackSection();
}
function wireTrackSection() {
  const host = document.getElementById('pf-tracksection');
  host.querySelectorAll('.track-tile').forEach(t => {
    t.onclick = () => {
      openTrack = openTrack === t.dataset.track ? null : t.dataset.track;
      selectedUnit = null;   // collapsing/switching a track hides the open work
      renderTrackSection();
    };
  });
  host.querySelectorAll('.pf-pill').forEach(p => {
    p.onclick = () => {
      selectedUnit = p.dataset.uid;
      renderTrackSection();
      const wv = document.getElementById('pf-workview');
      if (wv) wv.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
  });
}

/* ── standards → his work ── */
function stdWorkIndex() {
  const norm = window.hsNormStd;
  const idx = {};
  HS_UNITS.forEach(u => {
    const done = unitState(u.id).done || {};
    u.cards.forEach(c => {
      (c.standards || '').split('·').forEach(t => {
        const n = norm(t); if (!n) return;
        (idx[n] = idx[n] || []).push({ unitId: u.id, cardId: c.id, done: !!done[c.id] });
      });
    });
  });
  return idx;
}

/* Top summary: % of standards mastered, per content area. */
function masteryTop() {
  const S = window.HS_STANDARDS || [];
  const norm = window.hsNormStd;
  const tiles = S.map(a => {
    let mastered = 0, assigned = 0, missing = 0;
    a.list.forEach(s => {
      const e = IDX[norm(s.code)] || [];
      if (e.some(x => x.done)) mastered++; else if (e.length) assigned++; else missing++;
    });
    const total = a.list.length;
    return `<button type="button" class="pf-area" data-area="${esc(a.area)}">
      <div class="pf-area-name">${esc(a.area)}</div>
      <div class="pf-area-pct">${pct(mastered, total)}<span>%</span></div>
      <div class="pf-area-sub">${mastered} of ${total} mastered</div>
      <div class="pf-seg pf-area-seg">
        <div style="flex:${mastered}; background:var(--success);"></div>
        <div style="flex:${assigned}; background:#D19A1F;"></div>
        <div style="flex:${missing}; background:var(--cream-2);"></div>
      </div>
      <div class="pf-area-foot">${assigned} assigned · ${missing} need work</div>
    </button>`;
  }).join('');
  return `<div class="pf-area-grid">${tiles}</div>`;
}

function standardsMastery() {
  const S = window.HS_STANDARDS || [];
  const norm = window.hsNormStd;
  const grid = S.map(a => {
    let mastered = 0, missing = 0;
    const rows = a.list.map(s => {
      const entries = IDX[norm(s.code)] || [];
      const doneE = entries.filter(e => e.done);
      const state = doneE.length ? 'mastered' : (entries.length ? 'started' : 'none');
      if (state === 'mastered') mastered++;
      if (state === 'none') missing++;
      const target = doneE[0] || entries[0] || null;
      const tgtAttrs = (state !== 'none' && target) ? ` data-unit="${esc(target.unitId)}" data-card="${esc(target.cardId)}"` : '';
      const tag = state === 'mastered' ? '<span class="pf-std-tag mastered">his work →</span>'
                : state === 'started' ? '<span class="pf-std-tag assigned">assigned</span>'
                : '<span class="pf-std-tag needwork">needs work</span>';
      return `<button type="button" class="std-row pf-std ${state}"${tgtAttrs} data-code="${esc(s.code)}">
        <span class="std-check" aria-hidden="true"></span>
        <span class="std-code">${esc(s.code)}</span>
        <span class="std-label">${esc(s.label)}</span>
        ${tag}
      </button>`;
    }).join('');
    const total = a.list.length;
    return `<details class="std-card tile ${a.tex}" style="--tile:${colorTile(a.color)}; --ribbon:${colorBold(a.color)}; --ribbon-text:#fff;" data-area="${esc(a.area)}">
      <summary class="std-face">
        <span class="std-ghost" aria-hidden="true"><b>${esc(a.ghost || a.area)}</b><b>${esc(a.ghost || a.area)}</b><b>${esc(a.ghost || a.area)}</b></span>
        <span class="tile-side">${esc(a.side)}</span>
        <div class="big-ribbon"><div class="ribbon-track">${(esc(a.area) + '&nbsp;·&nbsp;').repeat(14)}</div></div>
        <div class="std-face-bottom">
          <span class="std-arrow">→</span>
          <div>
            <div class="std-face-title"><span class="std-word">${esc(a.area)}</span>${a.tagline ? ` <span class="std-bull">•</span> <span class="std-tag">${esc(a.tagline)}</span>` : ''}</div>
            <div class="std-face-sub"><span class="pf-std-count">${mastered}</span> mastered · ${missing} need work</div>
          </div>
        </div>
      </summary>
      <div class="std-checklist">${a.source ? `<div class="std-source">${esc(a.source)}</div>` : ''}${rows}</div>
    </details>`;
  }).join('');
  return `<div class="std-grid">${grid}</div>`;
}

function jumpToWork(unitId, cardId) {
  if (!unitId) return;
  const u = HS_UNITS.find(x => x.id === unitId); if (!u) return;
  selectedUnit = unitId;
  openTrack = u.track === 'math' ? 'math' : u.track === 'clep' ? 'clep' : 'core';
  renderTrackSection();
  requestAnimationFrame(() => {
    const el = document.getElementById('pfwork-' + unitId + '-' + cardId) || document.getElementById('pf-' + unitId);
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    document.querySelectorAll('.pf-flash').forEach(e => e.classList.remove('pf-flash'));
    el.classList.add('pf-flash');
    setTimeout(() => el.classList.remove('pf-flash'), 2200);
  });
}

function wireStandards() {
  document.querySelectorAll('.pf-std').forEach(btn => {
    if (!btn.dataset.unit) return;   // "needs work" rows have nothing to jump to
    btn.addEventListener('click', () => jumpToWork(btn.dataset.unit, btn.dataset.card));
  });
}
function wireMasteryTop() {
  document.querySelectorAll('.pf-area').forEach(btn => {
    btn.addEventListener('click', () => {
      const card = [...document.querySelectorAll('.std-card')].find(c => c.dataset.area === btn.dataset.area);
      if (card) { card.open = true; card.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    });
  });
}

function section(title, sub, body) {
  return `<div class="bp-section"><div class="section-label">${title}</div>${sub ? `<p class="pf-section-sub">${sub}</p>` : ''}${body}</div>`;
}

function load() {
  const content = document.getElementById('content');
  if (!HS_UNITS.length) { content.innerHTML = '<p class="empty-msg">No units loaded.</p>'; return; }
  IDX = stdWorkIndex();

  content.innerHTML =
    section('Standards mastered — by content area', '', masteryTop()) +
    `<div class="bp-section"><div class="section-label">His work</div><p class="pf-section-sub">Pick a track, then a unit, to open his avg quiz score, vocabulary, and written answers.</p><div id="pf-tracksection"></div></div>` +
    section('Standards → his work',
      'Every 7th-grade standard. “his work →” jumps to the lesson that shows it, “assigned” has a lesson waiting, and “needs work” has nothing yet — a gap to build for.',
      standardsMastery());

  renderTrackSection();
  wireStandards();
  wireMasteryTop();
}

load();
