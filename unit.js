/**
 * unit.js — self-paced renderer + progression for the thematic units.
 * Reads window.HS_UNITS (unit-*.js files register themselves); ?u=<id> picks
 * the unit, defaulting to the first. Everything (answers, quiz scores, KWL,
 * vocab self-sort, which cards are done) is saved to localStorage per unit,
 * so it's fully contained in-app and survives refreshes. No due dates — the
 * next card unlocks when the current one is marked done.
 */

const HS_UNITS = window.HS_UNITS || [];
const UNIT = HS_UNITS.find(u => u.id === new URLSearchParams(location.search).get('u')) || HS_UNITS[0];
const LS_KEY = 'homeskewl_unit_' + UNIT.id;
let state = {};
let viewId = null;
let openTrack = null;   // which track's unit pills are revealed in the picker

function load() {
  try { state = JSON.parse(localStorage.getItem(LS_KEY)) || {}; } catch (e) { state = {}; }
  state.done = state.done || {};
  state.ans  = state.ans  || {};
  state.kwl  = state.kwl  || {};
  state.sort = state.sort || {};
  state.quiz = state.quiz || {};
  state.match = state.match || {};
}
function save() { localStorage.setItem(LS_KEY, JSON.stringify(state)); }

function currentIndex() {
  for (let i = 0; i < UNIT.cards.length; i++) if (!state.done[UNIT.cards[i].id]) return i;
  return UNIT.cards.length - 1;
}
function esc(s) { return (s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }

function unitDoneCount(u) {
  try {
    const s = JSON.parse(localStorage.getItem('homeskewl_unit_' + u.id)) || {};
    return Object.keys(s.done || {}).filter(k => s.done[k]).length;
  } catch (e) { return 0; }
}

/* ── block renderers ─────────────────────────────────────────── */

/* Icons for the two "your pick" blocks (learn-path + show-what-you-know). */
function optIcon(kind) {
  return ({ video: '▶', read: '📖', both: '🔀', record: '🎥', write: '✍️',
            make: '🃏', draw: '🎨', project: '🖼️', teach: '🗣️' })[kind] || '•';
}
/* Render one learn-path option's inner content (a video or a reading). */
function learnOptionInner(o) {
  if (o.kind === 'read') {
    return `${o.title ? `<div class="u-sec" style="margin-top:0;">📖 ${esc(o.title)}</div>` : ''}
      ${o.body || ''}
      ${o.url ? `<a class="choice-link" href="${o.url}" target="_blank" rel="noopener">Open the ${esc(o.source || 'reading')} ↗</a>` : ''}`;
  }
  // video
  if (o.yt) {
    return `${o.title ? `<div class="u-sec" style="margin-top:0;">▶ ${esc(o.title)}</div>` : ''}
      <div class="u-video"><iframe src="https://www.youtube-nocookie.com/embed/${o.yt}" title="${esc(o.title || 'video')}" allow="accelerometer; encrypted-media; picture-in-picture" allowfullscreen loading="lazy"></iframe></div>
      ${o.focus ? `<p class="u-focus">${esc(o.focus)}</p>` : ''}`;
  }
  return `${o.title ? `<div class="u-sec" style="margin-top:0;">▶ ${esc(o.title)}</div>` : ''}
    <a class="btn btn-primary" href="${o.url}" target="_blank" rel="noopener">${esc(o.watchLabel || '▶ Watch on YouTube')}</a>
    ${o.focus ? `<p class="u-focus">${esc(o.focus)}</p>` : ''}`;
}

function blockHtml(card, b, bi) {
  const aid = (pi) => `${card.id}_${bi}_${pi}`;
  switch (b.type) {

    case 'hook':
      return `<div class="u-hook"><span class="u-eyebrow"><i class="ti"></i>🎬 Hook</span><p>${b.text}</p></div>`;

    case 'video':
      if (b.yt) {
        return `<div class="u-block">
          ${b.title ? `<div class="u-sec">▶ Watch — ${esc(b.title)}</div>` : ''}
          <div class="u-video"><iframe src="https://www.youtube-nocookie.com/embed/${b.yt}" title="${esc(b.title || 'video')}" allow="accelerometer; encrypted-media; picture-in-picture" allowfullscreen loading="lazy"></iframe></div>
          ${b.focus ? `<p class="u-focus">${esc(b.focus)}</p>` : ''}</div>`;
      }
      return `<div class="u-block">
        ${b.title ? `<div class="u-sec">▶ Watch — ${esc(b.title)}</div>` : ''}
        <a class="btn btn-primary" href="${b.url}" target="_blank" rel="noopener">${esc(b.label || '▶ Watch on YouTube')}</a>
        ${b.focus ? `<p class="u-focus">${esc(b.focus)}</p>` : ''}</div>`;

    case 'practice':
      return `<div class="u-block u-practice">
        <div class="u-sec">🎯 ${esc(b.title || 'Practice on Khan')}</div>
        ${b.note ? `<p class="u-focus">${esc(b.note)}</p>` : ''}
        <div class="practice-links">${(b.links || [{ url: b.url, label: b.label }]).map(l =>
          `<a class="btn btn-primary" href="${l.url}" target="_blank" rel="noopener">${esc(l.label || 'Practice')} ↗</a>`).join('')}</div></div>`;

    case 'read':
      return `<div class="u-block u-read">
        <div class="u-sec">📖 Read${b.title ? ' — ' + esc(b.title) : ''}</div>
        ${b.body || ''}
        ${b.url ? `<a class="choice-link" href="${b.url}" target="_blank" rel="noopener">Open the ${esc(b.source || 'source')} ↗</a>` : ''}</div>`;

    case 'prose':
      return `<div class="u-block u-prose">${b.body || ''}</div>`;

    case 'learn': {
      // Choose how to take it in: a video OR a reading (both stay available).
      const pickAid = aid('pick');
      const saved = state.ans[pickAid];
      const picked = (saved !== undefined && saved !== '') ? parseInt(saved, 10) : 0;
      return `<div class="u-block u-pick u-learn" data-pickaid="${pickAid}">
        <div class="u-sec">🧭 ${esc(b.title || 'Learn it your way')}</div>
        <p class="u-focus">${esc(b.note || 'Your call — pick how you want to take this in. (You can look at both if you want.)')}</p>
        <div class="pick-tabs">${b.options.map((o, oi) =>
          `<button type="button" class="pick-tab ${oi === picked ? 'on' : ''}" data-opt="${oi}">${optIcon(o.kind)} ${esc(o.label || (o.kind === 'read' ? 'Read it' : 'Watch it'))}</button>`).join('')}</div>
        ${b.options.map((o, oi) =>
          `<div class="pick-panel" data-opt="${oi}" style="display:${oi === picked ? 'block' : 'none'};">${learnOptionInner(o)}</div>`).join('')}
      </div>`;
    }

    case 'choice': {
      // Choose how to show what you know: record / write / make a set, etc.
      const pickAid = aid('pick');
      const saved = state.ans[pickAid];
      const picked = (saved !== undefined && saved !== '') ? parseInt(saved, 10) : -1;
      return `<div class="u-block u-pick u-choice" data-pickaid="${pickAid}">
        <div class="u-sec">🌟 ${esc(b.title || 'Show what you know — your pick')}</div>
        <p class="u-focus">${esc(b.note || 'Pick ONE way to prove you\'ve got it — whichever you\'ll actually do well.')}</p>
        <div class="pick-tabs">${b.options.map((o, oi) =>
          `<button type="button" class="pick-tab ${oi === picked ? 'on' : ''}" data-opt="${oi}">${optIcon(o.kind)} ${esc(o.label || 'Option')}</button>`).join('')}</div>
        ${b.options.map((o, oi) => {
          const rid = aid('r' + oi);
          const field = o.input === 'text'
            ? `<textarea class="rh-input u-ans" data-aid="${rid}" placeholder="Type here…">${esc(state.ans[rid] || '')}</textarea>`
            : `<input type="text" class="u-ans" data-aid="${rid}" value="${esc(state.ans[rid] || '')}" placeholder="Paste your link here — https://…" style="width:100%;">`;
          return `<div class="pick-panel" data-opt="${oi}" style="display:${oi === picked ? 'block' : 'none'};">
            ${o.prompt ? `<p class="u-prompt-text">${o.prompt}</p>` : ''}
            ${field}</div>`;
        }).join('')}
      </div>`;
    }

    case 'answers':
      return `<div class="u-block u-answers">
        <div class="u-sec">✏️ Your turn — type your answers</div>
        ${b.prompts.map((p, pi) => `
          <label class="u-prompt">${esc(p)}
            <textarea class="rh-input u-ans" data-aid="${aid(pi)}" placeholder="Type here…">${esc(state.ans[aid(pi)] || '')}</textarea>
          </label>`).join('')}</div>`;

    case 'build':
      return `<div class="u-block u-build">
        <div class="u-sec">🔧 Build it${b.title ? ' — ' + esc(b.title) : ''}${b.minutes ? ` · ~${b.minutes} min` : ''}</div>
        ${b.steps || ''}
        ${b.photo ? `<label class="u-prompt" style="margin-top:12px;">${esc(b.photoLabel || 'Paste a photo link (optional):')}
          <input type="text" class="u-ans" data-aid="${aid('photo')}" value="${esc(state.ans[aid('photo')] || '')}" placeholder="https://…" style="width:100%;"></label>` : ''}</div>`;

    case 'quiz':
      return `<div class="u-block u-quiz" data-cardid="${card.id}">
        <div class="u-sec">✅ Quick check</div>
        ${b.questions.map((item, qi) => `
          <div class="quiz-q" data-qi="${qi}">
            <div class="quiz-q-text">${qi + 1}. ${esc(item.q)}</div>
            ${item.options.map((o, oi) => `
              <label class="quiz-opt" data-qi="${qi}" data-oi="${oi}"><input type="radio" name="${card.id}_q${qi}" value="${oi}"><span>${esc(o)}</span></label>`).join('')}
          </div>`).join('')}
        <button class="btn btn-primary u-quiz-check">Check my answers</button>
        <div class="u-quiz-result"></div></div>`;

    case 'flashcards':
      return `<div class="u-block">
        <div class="u-sec">🃏 ${esc(b.title || 'Vocabulary')}</div>
        ${b.note ? `<p class="u-focus">${esc(b.note)}</p>` : ''}
        <div class="flip-grid">${UNIT.vocab.mustOwn.map(v => `
          <button type="button" class="flip-card"><div class="flip-inner">
            <div class="flip-front">${esc(v.term)}</div>
            <div class="flip-back">${esc(v.def)}</div>
          </div></button>`).join('')}</div></div>`;

    case 'frayer':
      return `<div class="u-block">
        <div class="u-sec">🔍 ${esc(b.title || 'Deep dive')}</div>
        ${b.note ? `<p class="u-focus">${esc(b.note)}</p>` : ''}
        ${UNIT.vocab.frayer.map(f => `
          <div class="frayer">
            <div class="frayer-term">${esc(f.term)}</div>
            <div class="frayer-grid">
              <div class="frayer-q"><span>Definition</span><p>${esc(f.definition)}</p></div>
              <div class="frayer-q"><span>Examples</span><ul>${f.examples.map(x => `<li>${esc(x)}</li>`).join('')}</ul></div>
              <div class="frayer-q"><span>Not examples</span><ul>${f.nonexamples.map(x => `<li>${esc(x)}</li>`).join('')}</ul></div>
              <div class="frayer-q"><span>In a sentence</span><p><em>${esc(f.sentence)}</em></p></div>
            </div></div>`).join('')}</div>`;

    case 'matching': {
      // Two ways to supply pairs: `set: [term,...]` looks defs up in vocab.mustOwn
      // (the core tier), or `pairs: [{term, def}]` provides them inline (used for the
      // separate "College Words" tier so it doesn't bloat the must-own flashcards).
      const pairs = b.pairs
        ? b.pairs.map(p => ({ t: p.term, d: p.def }))
        : b.set.map(t => ({ t, d: (UNIT.vocab.mustOwn.find(v => v.term === t) || {}).def || '' }));
      const doneMatch = state.match[card.id];
      return `<div class="u-block u-match" data-cardid="${card.id}" data-pairs="${esc(JSON.stringify(pairs)).replace(/"/g, '&quot;')}">
        <div class="u-sec">🧩 ${esc(b.title || 'Word match')}</div>
        ${b.note ? `<p class="u-focus">${esc(b.note)}</p>` : ''}
        <div class="match-grid"><div class="match-col match-terms"></div><div class="match-col match-defs"></div></div>
        <div class="match-status">${doneMatch ? 'Matched all ' + pairs.length + ' — nice.' : ''}</div></div>`;
    }

    case 'kwl':
      return `<div class="u-block u-kwl">
        <div class="u-sec">🧠 What you're bringing in</div>
        ${b.prompt ? `<p class="u-focus">${esc(b.prompt)}</p>` : ''}
        <label class="u-prompt">${esc(b.klabel || 'What I think I already know about rivers & the first cities:')}
          <textarea class="rh-input u-kwl-k" placeholder="Type here…">${esc(state.kwl.k || '')}</textarea></label>
        <label class="u-prompt">${esc(b.wlabel || "What I'm curious about / want to figure out:")}
          <textarea class="rh-input u-kwl-w" placeholder="Type here…">${esc(state.kwl.w || '')}</textarea></label></div>`;

    case 'kwlback':
      return `<div class="u-block u-kwl-recap">
        <div class="u-sec">🧠 Your day-one notes</div>
        ${b.prompt ? `<p class="u-focus">${esc(b.prompt)}</p>` : ''}
        <div class="recap-box"><span>You said you knew:</span><p>${esc(state.kwl.k) || '<em>(nothing written)</em>'}</p></div>
        <div class="recap-box"><span>You were curious about:</span><p>${esc(state.kwl.w) || '<em>(nothing written)</em>'}</p></div></div>`;

    case 'kwlfinish':
      return `<div class="u-block u-kwl">
        <div class="u-sec">🧠 Close the loop</div>
        ${b.prompt ? `<p class="u-focus">${esc(b.prompt)}</p>` : ''}
        <label class="u-prompt">What I actually learned, what surprised me, and a question I still have:
          <textarea class="rh-input u-kwl-l" placeholder="Type here…">${esc(state.kwl.l || '')}</textarea></label></div>`;

    case 'vocabsort':
      return `<div class="u-block u-sort">
        <div class="u-sec">🎯 ${esc(b.title || 'Which words do you own?')}</div>
        ${b.note ? `<p class="u-focus">${esc(b.note)}</p>` : ''}
        ${UNIT.vocab.mustOwn.map(v => `
          <div class="sort-row" data-term="${esc(v.term)}">
            <span class="sort-word">${esc(v.term)}</span>
            <span class="sort-btns">
              <button type="button" class="sort-b ${state.sort[v.term] === 'got' ? 'on-got' : ''}" data-v="got">Got it</button>
              <button type="button" class="sort-b ${state.sort[v.term] === 'fuzzy' ? 'on-fuzzy' : ''}" data-v="fuzzy">Still fuzzy</button>
            </span></div>`).join('')}</div>`;

    case 'rubric':
      return `<div class="u-block u-rubric">
        <div class="u-sec">📋 ${esc(b.title || 'Self-check')}</div>
        ${b.items.map((it, ii) => `
          <label class="rubric-row"><input type="checkbox" class="u-ans" data-aid="${aid('r' + ii)}" ${state.ans[aid('r' + ii)] === 'y' ? 'checked' : ''}><span>${esc(it)}</span></label>`).join('')}</div>`;

    case 'deeper':
      return `<div class="u-block u-deeper"><span class="u-eyebrow">Go deeper (optional)</span><p>${esc(b.text)}</p></div>`;

    case 'next':
      return `<div class="u-next">→ ${esc(b.text)}</div>`;

    case 'done':
      return `<div class="u-block u-prose" style="text-align:center;"><p>${esc(b.text)}</p></div>`;

    default: return '';
  }
}

/* ── card + page render ──────────────────────────────────────── */

function cardHtml(card, status) {
  const blocks = card.blocks.map((b, bi) => blockHtml(card, b, bi)).join('');
  let foot;
  if (status === 'current') {
    foot = `<button class="btn btn-success u-markdone" style="margin-top:8px;">✓ Mark this done${card.n < UNIT.cards.length ? ' — unlock the next' : ''}</button>`;
  } else if (status === 'done') {
    foot = `<div class="u-reviewing">✓ You finished this one. <a href="#" class="u-unmark">Mark it not done</a> · <a href="#" class="u-jump-current">Back to where you are →</a></div>`;
  } else {
    foot = `<div class="u-reviewing u-preview">👀 Preview — you haven't unlocked this yet, so nothing here counts as progress. <a href="#" class="u-jump-current">Back to where you are →</a></div>`;
  }
  return `
    <div class="u-card" data-cardid="${card.id}">
      <div class="content-meta">
        <span class="subject-badge" style="background:var(--u-accent); color:#fff;">${esc(card.subject)}</span>
        <span style="font-size:0.76rem; font-weight:700; color:var(--text-dim);">${esc(card.standards || '')}</span>
        <span style="font-size:0.76rem; color:var(--text-dim);">~${card.minutes} min</span>
      </div>
      <h1 class="content-title">${esc(card.title)}</h1>
      ${blocks}
      ${foot}
    </div>`;
}

function mapHtml() {
  const curI = currentIndex();
  return UNIT.cards.map((c, i) => {
    const done = state.done[c.id];
    const locked = i > curI;
    const status = done ? 'done' : (i === curI ? 'current' : 'locked');
    const icon = done ? '✓' : (i === curI ? '●' : '🔒');
    return `<button type="button" class="map-item ${status}" data-cardid="${c.id}">
      <span class="map-icon">${icon}</span><span class="map-n">${c.n}</span><span class="map-title">${esc(c.title)}</span></button>`;
  }).join('') + `<button type="button" class="map-reset" id="map-reset">↺ Reset all progress</button>`;
}

/* ── track picker ────────────────────────────────────────────────
   Three Today-style tiles (a mix of recipes: interdisciplinary carries a
   real photo, math a big ghost letter, CLEP the heavy-sans + serif look).
   Click a tile to reveal that track's individual unit pills below. */
function trackStats(units) {
  const done = units.reduce((n, u) => n + unitDoneCount(u), 0);
  const total = units.reduce((n, u) => n + u.cards.length, 0);
  return `${units.length} unit${units.length === 1 ? '' : 's'} · ${done}/${total} lessons`;
}
function trackActiveImage(units) {
  const u = units.find(x => unitDoneCount(x) < x.cards.length) || units[units.length - 1];
  return u && u.image ? u.image : '';
}
function trackPillsPanel(key, units) {
  if (!units.length) return '';
  const pills = units.map(u => {
    // Strip the "Unit 1 · " / "CLEP · " / "Math · " prefix — the tile already
    // names the track, so pills just carry the unit name (fits one line).
    const name = (u.short || u.title).replace(/^[^·]*·\s*/, '');
    return `<a class="u-switch-link${u.id === UNIT.id ? ' on' : ''}" href="unit.html?u=${u.id}" title="${esc(u.short || u.title)}">${esc(name)}</a>`;
  }).join('');
  return `<div class="track-pills u-switch-group ${key}" data-track="${key}" style="display:${openTrack === key ? 'flex' : 'none'};">${pills}</div>`;
}
function trackPicker(coreUnits, mathUnits, clepUnits) {
  const cta = key => openTrack === key ? 'Units below ↓' : 'Pick a unit →';
  const openCls = key => openTrack === key ? ' open' : '';

  const coreImg = trackActiveImage(coreUnits);
  const coreTile = coreUnits.length ? `<button type="button" class="card tile tex-a today-tile track-tile core${openCls('core')}" data-track="core" style="--tile:#8FD6E1; --card-accent:#17A0AE;">
    <span class="tile-dot"></span><span class="tile-side">THEMATIC</span>
    ${coreImg ? `<div class="today-photo"><img src="${coreImg}" alt=""></div>` : ''}
    <div class="tile-eyebrow">${trackStats(coreUnits)}</div>
    <h2 class="tile-title">Interdisciplinary</h2>
    <div class="tile-foot"><span class="tile-cta">${cta('core')}</span></div>
  </button>` : '';

  const mathTile = mathUnits.length ? `<button type="button" class="card tile tex-c today-tile track-tile math${openCls('math')}" data-track="math" style="--tile:#F4CE5E; --card-accent:#D19A1F;">
    <span class="tile-dot"></span><span class="tile-side">SKILLS</span>
    <span class="tile-ghost" aria-hidden="true">M</span>
    <div class="tile-eyebrow">${trackStats(mathUnits)}</div>
    <h2 class="tile-title">Math</h2>
    <div class="tile-foot"><span class="tile-cta">${cta('math')}</span></div>
  </button>` : '';

  const clepTileEl = clepUnits.length ? `<button type="button" class="card tile tex-b today-tile track-tile clep${openCls('clep')}" data-track="clep" style="--tile:#F0B98C; --card-accent:#E07A3E;">
    <span class="tile-dot"></span><span class="tile-side">ELECTIVE</span>
    <span class="tile-arcs" aria-hidden="true"></span>
    <div class="tile-eyebrow">${trackStats(clepUnits)}</div>
    <h2 class="tile-title tile-title-sans">CLEP</h2>
    <p class="tile-display">College credit · Western Civ I</p>
    <div class="tile-foot"><span class="tile-cta">${cta('clep')}</span></div>
  </button>` : '';

  return `<div class="u-tracks">
    <div class="track-picker">${coreTile}${mathTile}${clepTileEl}</div>
    ${trackPillsPanel('core', coreUnits)}
    ${trackPillsPanel('math', mathUnits)}
    ${trackPillsPanel('clep', clepUnits)}
  </div>`;
}

/* ── lesson grid ─────────────────────────────────────────────────
   When a unit is open (no single lesson picked), every lesson shows as a
   Today-style tile. All tiles wear the unit's track color; variety comes
   from mixed textures/recipes — one photo tile (the current lesson), the
   rest cycling arcs · ghost-number · plain. Click a tile to open it. */
function trackColors() {
  if (UNIT.track === 'math') return { tile: '#F4CE5E', accent: '#D19A1F' };
  if (UNIT.track === 'clep') return { tile: '#F0B98C', accent: '#E07A3E' };
  return { tile: '#8FD6E1', accent: '#17A0AE' };
}
function lessonTile(card, i, curI) {
  const done = !!state.done[card.id];
  const status = done ? 'done' : (i === curI ? 'current' : 'locked');
  const tc = trackColors();
  const tex = ['tex-a', 'tex-b', 'tex-c', 'tex-d'][i % 4];
  const showPhoto = i === curI && UNIT.image;
  const fillType = ['plain', 'arcs', 'letter'][i % 3];
  const fill = showPhoto
    ? `<div class="today-photo"><img src="${UNIT.image}" alt=""></div>`
    : fillType === 'arcs' ? `<span class="tile-arcs${i % 2 ? ' alt' : ''}" aria-hidden="true"></span>`
    : fillType === 'letter' ? `<span class="tile-ghost" aria-hidden="true">${card.n}</span>`
    : '';
  const statusPill = done ? '<span class="lt-status done">✓ Done</span>'
    : status === 'current' ? '<span class="lt-status current">● You’re here</span>'
    : '<span class="lt-status locked">🔒 Locked</span>';
  const cta = done ? 'Review →' : status === 'current' ? 'Open →' : 'Peek →';
  return `<button type="button" class="card tile ${tex} today-tile lesson-tile ${status}" data-cardid="${card.id}"
      style="--tile:${tc.tile}; --card-accent:${tc.accent};">
    <span class="tile-dot"></span><span class="tile-side">LESSON ${card.n}</span>
    ${fill}
    <div class="tile-meta">
      <span class="subject-badge" style="background:${tc.accent}; color:#fff;">${esc(card.subject)}</span>
      <span>~${card.minutes} min</span>
    </div>
    <h2 class="tile-title">${esc(card.title)}</h2>
    <div class="tile-foot"><span class="tile-cta">${cta}</span>${statusPill}</div>
  </button>`;
}
function lessonGrid() {
  const curI = currentIndex();
  const tiles = UNIT.cards.map((c, i) => lessonTile(c, i, curI)).join('');
  return `<div class="lesson-grid">${tiles}</div>
    <button type="button" class="btn btn-ghost u-reset-grid" id="map-reset">↺ Reset all progress</button>`;
}

function render() {
  load();
  const curI = currentIndex();
  // viewId === null → the lesson-grid view; otherwise show that one lesson.
  if (viewId && !UNIT.cards.find(c => c.id === viewId)) viewId = null;
  const doneCount = Object.keys(state.done).filter(k => state.done[k]).length;
  const pct = Math.round((doneCount / UNIT.cards.length) * 100);

  const coreUnits = HS_UNITS.filter(u => !u.track);
  const mathUnits = HS_UNITS.filter(u => u.track === 'math');
  const clepUnits = HS_UNITS.filter(u => u.track === 'clep');
  const curTrack = UNIT.track === 'math' ? 'math' : UNIT.track === 'clep' ? 'clep' : 'core';
  if (openTrack === null) openTrack = curTrack;
  const switcher = HS_UNITS.length > 1 ? trackPicker(coreUnits, mathUnits, clepUnits) : '';

  let body, viewCard = null, status = null;
  if (!viewId) {
    body = lessonGrid();
  } else {
    viewCard = UNIT.cards.find(c => c.id === viewId);
    status = state.done[viewId] ? 'done' : (viewId === UNIT.cards[curI].id ? 'current' : 'locked');
    body = `<div class="u-lesson-back"><a href="#" class="u-to-grid">← All lessons</a></div>${cardHtml(viewCard, status)}`;
  }

  const app = document.getElementById('unit-app');
  app.classList.toggle('theme-math', UNIT.track === 'math');
  app.classList.toggle('theme-clep', UNIT.track === 'clep');
  app.innerHTML = `
    <div class="u-head">
      ${switcher}
      <div class="hero-title">${esc(UNIT.title)}</div>
      <p class="hero-sub">${esc(UNIT.eq)}</p>
      <div class="u-progress">
        <div class="u-progress-bar"><div class="u-progress-fill" style="width:${pct}%;"></div></div>
        <div class="u-progress-label">${doneCount} of ${UNIT.cards.length} done</div>
      </div>
    </div>
    ${body}`;

  wire(viewCard, status);

  // Every outside resource or reading opens in a new tab, so the lesson stays
  // put. (Internal unit navigation and the map's "#" jumps are left alone.)
  document.querySelectorAll('#unit-app a[href^="http"], #unit-app a[href^="reader.html"]').forEach(a => {
    a.target = '_blank'; a.rel = 'noopener';
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ── wiring (listeners) ──────────────────────────────────────── */

function wire(card, isCurrent) {
  const app = document.getElementById('unit-app');

  // Lesson grid: click a lesson tile to open it; "← All lessons" returns.
  app.querySelectorAll('.lesson-tile').forEach(t => {
    t.onclick = () => { viewId = t.dataset.cardid; render(); };
  });
  const toGrid = app.querySelector('.u-to-grid');
  if (toGrid) toGrid.onclick = (e) => { e.preventDefault(); viewId = null; render(); };

  // Track picker: click a tile to reveal its unit pills (accordion — one open).
  app.querySelectorAll('.track-tile').forEach(t => {
    t.onclick = () => {
      const key = t.dataset.track;
      openTrack = openTrack === key ? null : key;
      app.querySelectorAll('.track-tile').forEach(x => {
        x.classList.toggle('open', x.dataset.track === openTrack);
        const c = x.querySelector('.tile-cta');
        if (c) c.textContent = x.dataset.track === openTrack ? 'Units below ↓' : 'Pick a unit →';
      });
      app.querySelectorAll('.track-pills').forEach(p => {
        p.style.display = p.dataset.track === openTrack ? 'flex' : 'none';
      });
    };
  });
  app.querySelectorAll('.map-item').forEach(el => {
    el.onclick = () => { viewId = el.dataset.cardid; render(); };
  });
  const jump = app.querySelector('.u-jump-current');
  if (jump) jump.onclick = (e) => { e.preventDefault(); viewId = UNIT.cards[currentIndex()].id; render(); };
  const unmark = app.querySelector('.u-unmark');
  if (unmark) unmark.onclick = (e) => { e.preventDefault(); delete state.done[viewId]; save(); render(); };
  const reset = app.querySelector('#map-reset');
  if (reset) reset.onclick = () => { if (confirm('Reset all progress and answers for this unit?')) { localStorage.removeItem(LS_KEY); load(); viewId = UNIT.cards[0].id; render(); } };

  app.querySelectorAll('textarea.u-ans, input.u-ans[type="text"]').forEach(el => {
    el.oninput = () => { state.ans[el.dataset.aid] = el.value; save(); };
  });
  app.querySelectorAll('input.u-ans[type="checkbox"]').forEach(el => {
    el.onchange = () => { state.ans[el.dataset.aid] = el.checked ? 'y' : ''; save(); };
  });
  const kwlK = app.querySelector('.u-kwl-k'); if (kwlK) kwlK.oninput = () => { state.kwl.k = kwlK.value; save(); };
  const kwlW = app.querySelector('.u-kwl-w'); if (kwlW) kwlW.oninput = () => { state.kwl.w = kwlW.value; save(); };
  const kwlL = app.querySelector('.u-kwl-l'); if (kwlL) kwlL.oninput = () => { state.kwl.l = kwlL.value; save(); };

  app.querySelectorAll('.flip-card').forEach(el => { el.onclick = () => el.classList.toggle('flipped'); });

  // "Your pick" blocks (learn-path + show-what-you-know): toggle the chosen
  // panel and remember the choice. Response fields inside autosave via u-ans.
  app.querySelectorAll('.u-pick').forEach(p => {
    const pickAid = p.dataset.pickaid;
    p.querySelectorAll('.pick-tab').forEach(tab => {
      tab.onclick = () => {
        const oi = tab.dataset.opt;
        state.ans[pickAid] = oi; save();
        p.querySelectorAll('.pick-tab').forEach(t => t.classList.toggle('on', t === tab));
        p.querySelectorAll('.pick-panel').forEach(pl => { pl.style.display = pl.dataset.opt === oi ? 'block' : 'none'; });
      };
    });
  });

  app.querySelectorAll('.sort-row').forEach(row => {
    row.querySelectorAll('.sort-b').forEach(btn => {
      btn.onclick = () => {
        state.sort[row.dataset.term] = btn.dataset.v; save();
        row.querySelectorAll('.sort-b').forEach(b2 => b2.classList.remove('on-got', 'on-fuzzy'));
        btn.classList.add(btn.dataset.v === 'got' ? 'on-got' : 'on-fuzzy');
      };
    });
  });

  app.querySelectorAll('.u-quiz').forEach(q => wireQuiz(q));
  app.querySelectorAll('.u-match').forEach(m => wireMatch(m));

  const md = app.querySelector('.u-markdone');
  if (md) md.onclick = () => {
    state.done[card.id] = 1; save();
    const nextI = currentIndex();
    viewId = UNIT.cards[nextI].id;
    render();
  };
}

function wireQuiz(q) {
  const btn = q.querySelector('.u-quiz-check');
  const cardId = q.dataset.cardid;
  q.querySelectorAll('.quiz-opt').forEach(opt => {
    opt.onclick = () => {
      const qi = opt.dataset.qi;
      q.querySelectorAll(`.quiz-opt[data-qi="${qi}"]`).forEach(o => o.classList.remove('selected'));
      opt.classList.add('selected');
      opt.querySelector('input').checked = true;
    };
  });
  btn.onclick = () => {
    const qs = q.querySelectorAll('.quiz-q');
    let correct = 0;
    const answers = UNIT.cards.find(c => c.id === cardId).blocks.find(b => b.type === 'quiz').questions;
    qs.forEach((qEl, qi) => {
      const chosen = qEl.querySelector('input:checked');
      const ci = chosen ? parseInt(chosen.value, 10) : null;
      qEl.querySelector(`.quiz-opt[data-oi="${answers[qi].answer}"]`).classList.add('correct');
      if (ci === answers[qi].answer) correct++;
      else if (ci !== null) qEl.querySelector(`.quiz-opt[data-oi="${ci}"]`).classList.add('incorrect');
      qEl.querySelectorAll('.quiz-opt').forEach(o => o.classList.add('quiz-locked'));
    });
    state.quiz[cardId] = correct + '/' + qs.length; save();
    const emoji = correct === qs.length ? '🎉' : (correct >= qs.length / 2 ? '👍' : '💪');
    q.querySelector('.u-quiz-result').innerHTML = `<div class="quiz-result">${emoji} ${correct} of ${qs.length}. ${correct === qs.length ? 'Perfect.' : 'Green shows the right answer.'}</div>`;
    btn.disabled = true; btn.textContent = 'Checked ✓';
  };
}

function wireMatch(m) {
  const cardId = m.dataset.cardid;
  const pairs = JSON.parse(m.dataset.pairs.replace(/&quot;/g, '"').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>'));
  const termsCol = m.querySelector('.match-terms'), defsCol = m.querySelector('.match-defs');
  const status = m.querySelector('.match-status');
  let sel = null, matched = 0;
  function shuffle(a) { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
  function mk(text, id, kind) {
    const b = document.createElement('button'); b.type = 'button'; b.className = 'mcard'; b.dataset.id = id; b.dataset.kind = kind; b.textContent = text;
    b.onclick = () => click(b); return b;
  }
  pairs.forEach((p, i) => termsCol.appendChild(mk(p.t, i, 't')));
  shuffle(pairs.map((p, i) => ({ d: p.d, i }))).forEach(o => defsCol.appendChild(mk(o.d, o.i, 'd')));
  function click(b) {
    if (b.classList.contains('matched')) return;
    if (b.dataset.kind === 't') { if (sel) sel.classList.remove('sel'); if (sel === b) { sel = null; return; } sel = b; b.classList.add('sel'); return; }
    if (!sel) return;
    if (sel.dataset.id === b.dataset.id) {
      sel.classList.add('matched'); b.classList.add('matched'); sel.classList.remove('sel'); sel = null; matched++;
      if (matched === pairs.length) { status.textContent = 'Matched all ' + pairs.length + ' — nice.'; state.match[cardId] = 1; save(); }
    } else {
      const t = sel; b.classList.add('wrong'); t.classList.add('wrong');
      setTimeout(() => { b.classList.remove('wrong'); t.classList.remove('wrong'); t.classList.remove('sel'); }, 340); sel = null;
    }
  }
}

load();
render();
