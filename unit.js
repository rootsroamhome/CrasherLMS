/**
 * unit.js — self-paced renderer + progression for the Rivers unit.
 * Reads UNIT (unit-rivers.js). Everything (answers, quiz scores, KWL, vocab
 * self-sort, which cards are done) is saved to localStorage, so it's fully
 * contained in-app and survives refreshes. No due dates — the next card
 * unlocks when the current one is marked done.
 */

const LS_KEY = 'homeskewl_unit_' + UNIT.id;
let state = {};
let viewId = null;

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

/* ── block renderers ─────────────────────────────────────────── */

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
        <a class="btn btn-primary" href="${b.url}" target="_blank" rel="noopener">▶ Watch on YouTube</a>
        ${b.focus ? `<p class="u-focus">${esc(b.focus)}</p>` : ''}</div>`;

    case 'read':
      return `<div class="u-block u-read">
        <div class="u-sec">📖 Read${b.title ? ' — ' + esc(b.title) : ''}</div>
        ${b.body || ''}
        ${b.url ? `<a class="choice-link" href="${b.url}" target="_blank" rel="noopener">Open the ${esc(b.source || 'source')} ↗</a>` : ''}</div>`;

    case 'prose':
      return `<div class="u-block u-prose">${b.body || ''}</div>`;

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
      const pairs = b.set.map(t => ({ t, d: (UNIT.vocab.mustOwn.find(v => v.term === t) || {}).def || '' }));
      const doneMatch = state.match[card.id];
      return `<div class="u-block u-match" data-cardid="${card.id}" data-pairs='${esc(JSON.stringify(pairs))}'>
        <div class="u-sec">🧩 ${esc(b.title || 'Word match')}</div>
        ${b.note ? `<p class="u-focus">${esc(b.note)}</p>` : ''}
        <div class="match-grid"><div class="match-col match-terms"></div><div class="match-col match-defs"></div></div>
        <div class="match-status">${doneMatch ? 'Matched all ' + pairs.length + ' — nice.' : ''}</div></div>`;
    }

    case 'kwl':
      return `<div class="u-block u-kwl">
        <div class="u-sec">🧠 What you're bringing in</div>
        ${b.prompt ? `<p class="u-focus">${esc(b.prompt)}</p>` : ''}
        <label class="u-prompt">What I think I already know about rivers &amp; the first cities:
          <textarea class="rh-input u-kwl-k" placeholder="Type here…">${esc(state.kwl.k || '')}</textarea></label>
        <label class="u-prompt">What I'm curious about / want to figure out:
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

function cardHtml(card, isCurrent) {
  const blocks = card.blocks.map((b, bi) => blockHtml(card, b, bi)).join('');
  const doneBtn = isCurrent
    ? `<button class="btn btn-success u-markdone" style="margin-top:8px;">✓ Mark this done${card.n < UNIT.cards.length ? ' — unlock the next' : ''}</button>`
    : `<div class="u-reviewing">You're reviewing a finished lesson. <a href="#" class="u-jump-current">Back to where you are →</a></div>`;
  return `
    <div class="u-card" data-cardid="${card.id}">
      <div class="content-meta">
        <span class="subject-badge" style="background:var(--teal); color:var(--cream);">${esc(card.subject)}</span>
        <span style="font-size:0.76rem; font-weight:700; color:var(--text-dim);">${esc(card.standards || '')}</span>
        <span style="font-size:0.76rem; color:var(--text-dim);">~${card.minutes} min</span>
      </div>
      <h1 class="content-title">${esc(card.title)}</h1>
      ${blocks}
      ${doneBtn}
    </div>`;
}

function mapHtml() {
  const curI = currentIndex();
  return UNIT.cards.map((c, i) => {
    const done = state.done[c.id];
    const locked = i > curI;
    const status = done ? 'done' : (i === curI ? 'current' : 'locked');
    const icon = done ? '✓' : (i === curI ? '●' : '🔒');
    return `<button type="button" class="map-item ${status}" ${locked ? 'disabled' : ''} data-cardid="${c.id}">
      <span class="map-icon">${icon}</span><span class="map-n">${c.n}</span><span class="map-title">${esc(c.title)}</span></button>`;
  }).join('');
}

function render() {
  load();
  const curI = currentIndex();
  if (!viewId || !UNIT.cards.find(c => c.id === viewId)) viewId = UNIT.cards[curI].id;
  const viewCard = UNIT.cards.find(c => c.id === viewId);
  const isCurrent = viewId === UNIT.cards[curI].id;
  const doneCount = Object.keys(state.done).filter(k => state.done[k]).length;
  const pct = Math.round((doneCount / UNIT.cards.length) * 100);

  document.getElementById('unit-app').innerHTML = `
    <div class="u-head">
      <div class="hero-title">${esc(UNIT.title)}</div>
      <p class="hero-sub">${esc(UNIT.eq)}</p>
      <div class="u-progress">
        <div class="u-progress-bar"><div class="u-progress-fill" style="width:${pct}%;"></div></div>
        <div class="u-progress-label">${doneCount} of ${UNIT.cards.length} done</div>
        <button type="button" id="map-toggle" class="btn btn-ghost">All lessons</button>
      </div>
      <div id="unit-map" class="unit-map" style="display:none;">${mapHtml()}</div>
    </div>
    ${cardHtml(viewCard, isCurrent)}`;

  wire(viewCard, isCurrent);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ── wiring (listeners) ──────────────────────────────────────── */

function wire(card, isCurrent) {
  const app = document.getElementById('unit-app');

  document.getElementById('map-toggle').onclick = () => {
    const m = document.getElementById('unit-map');
    m.style.display = m.style.display === 'none' ? 'grid' : 'none';
  };
  app.querySelectorAll('.map-item:not([disabled])').forEach(el => {
    el.onclick = () => { viewId = el.dataset.cardid; render(); };
  });
  const jump = app.querySelector('.u-jump-current');
  if (jump) jump.onclick = (e) => { e.preventDefault(); viewId = UNIT.cards[currentIndex()].id; render(); };

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
