/**
 * portfolio.js — Crasher's work, by track.
 *
 * Two columns like Big Picture — Interdisciplinary (teal) and Math (gold) — each
 * a stack of COLLAPSED unit accordions (closed by default) so the page stays
 * short: tap a unit to open its work (quiz scores, vocab self-check, KWL, every
 * written answer).
 *
 * Plus a "Standards → his work" grid (the same four content-area boxes as Big
 * Picture). Each standard is clickable: tap one and the page opens the unit and
 * scrolls to the completed lesson whose saved work shows that mastery.
 *
 * Reads the browser's localStorage, so it shows the work done on THIS device.
 * (Cross-device sync to a shared database is a separate to-do.)
 */

const HS_UNITS = window.HS_UNITS || [];

function unitState(id) { try { return JSON.parse(localStorage.getItem('homeskewl_unit_' + id)) || {}; } catch (e) { return {}; } }
function esc(s) { return (s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
function pct(n, d) { return d ? Math.round(n / d * 100) : 0; }
function colorTile(subject) { const m = typeof SUBJECT_COLORS !== 'undefined' ? SUBJECT_COLORS : {}; return (m[subject] || {}).tile || '#8FD6E1'; }
function colorBold(subject) { const m = typeof SUBJECT_COLORS !== 'undefined' ? SUBJECT_COLORS : {}; return (m[subject] || {}).bg || '#17A0AE'; }

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

  const words = u.vocab.mustOwn.map(v => v.term);
  const got = words.filter(w => sort[w] === 'got').length;
  const fuzzy = words.filter(w => sort[w] === 'fuzzy');

  // How much written work exists (for the summary line).
  let answered = 0;
  u.cards.forEach(c => c.blocks.forEach((b, bi) => {
    if (b.type === 'answers') b.prompts.forEach((p, pi) => { if (ans[`${c.id}_${bi}_${pi}`]) answered++; });
  }));

  return { s, done, ans, kwl, total, doneCount, quizGot, quizMax, quizRows, words, got, fuzzy, sorted: got + fuzzy.length, answered };
}

function meter(label, text, value, color) {
  return `<div class="bp-meter">
    <div class="bp-meter-top"><span>${label}</span><span class="bp-meter-val">${esc(text)}</span></div>
    <div class="bp-meter-bar"><div style="width:${value}%; background:${color};"></div></div>
  </div>`;
}

/* One lesson's saved work. Renders the quiz score (mastery evidence) plus any
   written answers / build links / rubric self-check. Given a stable id + its
   standards so the standards grid can jump straight to it. */
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
  });
  if (!parts.length) return '';
  return `<div class="bp-workcard" id="pfwork-${u.id}-${c.id}">
    <div class="bp-workcard-title">${c.n}. ${esc(c.title)}${c.standards ? ` <span class="pf-workstd">${esc(c.standards)}</span>` : ''}</div>
    ${parts.join('')}</div>`;
}

/* One unit = one collapsed accordion, anchored by id so standards can jump to it. */
function unitAccordion(u) {
  const d = analyze(u);
  const quizAvg = d.quizMax ? pct(d.quizGot, d.quizMax) : null;
  const gotPct = pct(d.got, d.words.length);
  const donePct = pct(d.doneCount, d.total);
  const isMath = u.track === 'math';
  const accent = isMath ? '#D19A1F' : 'var(--teal)';

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

  const summary = `<summary class="pf-summary">
      <span class="pf-caret">▸</span>
      <span class="pf-unit-name">${esc(u.title)}</span>
      <span class="pf-unit-stat">${d.doneCount}/${d.total} lessons${quizAvg !== null ? ` · quiz ${quizAvg}%` : ''}${d.answered ? ` · ${d.answered} answers` : ''}</span>
    </summary>`;

  return `<details class="pf-unit${isMath ? ' pf-unit-math' : ''}" id="pf-${u.id}">
    ${summary}
    <div class="pf-body">
      <div class="bp-meters">
        ${meter('Lessons done', `${d.doneCount} / ${d.total}`, donePct, accent)}
        ${meter('Quiz accuracy', quizAvg === null ? 'no quizzes yet' : `${quizAvg}% (${d.quizGot}/${d.quizMax})`, quizAvg || 0, 'var(--success)')}
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
  </details>`;
}

/* ── Standards → his work ──────────────────────────────────────────────────
   Index every standard code (normalized) to the lessons that cover it, marking
   which are done. A standard with a done lesson = mastery evidence you can jump to. */
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

function standardsMastery() {
  const S = window.HS_STANDARDS || [];
  const norm = window.hsNormStd;
  const idx = stdWorkIndex();
  const grid = S.map(a => {
    let masteredCount = 0;
    const rows = a.list.map(s => {
      const entries = idx[norm(s.code)] || [];
      const doneE = entries.filter(e => e.done);
      const state = doneE.length ? 'mastered' : (entries.length ? 'started' : 'none');
      if (state === 'mastered') masteredCount++;
      const target = doneE[0] || entries[0] || null;
      const tgtAttrs = target ? ` data-unit="${esc(target.unitId)}" data-card="${esc(target.cardId)}"` : '';
      const tag = state === 'mastered' ? '<span class="pf-std-tag">his work →</span>'
                : state === 'started' ? '<span class="pf-std-tag muted">assigned</span>' : '';
      return `<button type="button" class="std-row pf-std ${state}"${tgtAttrs} data-code="${esc(s.code)}"${state === 'none' ? ' disabled' : ''}>
        <span class="std-check" aria-hidden="true"></span>
        <span class="std-code">${esc(s.code)}</span>
        <span class="std-label">${esc(s.label)}</span>
        ${tag}
      </button>`;
    }).join('');
    const total = a.list.length;
    return `<details class="std-card tile ${a.tex}" style="--tile:${colorTile(a.color)}; --ribbon:${colorBold(a.color)}; --ribbon-text:#fff;" data-area="${esc(a.area)}">
      <summary class="std-face">
        <span class="std-ghost" aria-hidden="true">${esc(a.ghost || a.area)}</span>
        <span class="tile-side">${esc(a.side)}</span>
        <div class="big-ribbon"><div class="ribbon-track">${(esc(a.area) + '&nbsp;·&nbsp;').repeat(14)}</div></div>
        <div class="std-face-bottom">
          <span class="std-arrow">→</span>
          <div>
            <div class="std-face-title"><span class="std-word">${esc(a.area)}</span>${a.tagline ? ` <span class="std-bull">•</span> <span class="std-tag">${esc(a.tagline)}</span>` : ''}</div>
            <div class="std-face-sub"><span class="pf-std-count">${masteredCount}</span> of ${total} with work</div>
          </div>
        </div>
      </summary>
      <div class="std-checklist">${a.source ? `<div class="std-source">${esc(a.source)}</div>` : ''}${rows}</div>
    </details>`;
  }).join('');
  return `<div class="std-grid">${grid}</div>`;
}

function section(title, sub, body) {
  return `<div class="bp-section"><div class="section-label">${title}</div>${sub ? `<p class="pf-section-sub">${sub}</p>` : ''}${body}</div>`;
}

function jumpToWork(unitId, cardId) {
  if (!unitId) return;
  const acc = document.getElementById('pf-' + unitId);
  if (acc && !acc.open) {
    acc.open = true;
    const caret = acc.querySelector('.pf-caret');
    if (caret) caret.textContent = '▾';
  }
  const work = document.getElementById('pfwork-' + unitId + '-' + cardId) || acc;
  document.querySelectorAll('.pf-flash').forEach(e => e.classList.remove('pf-flash'));
  if (!work) return;
  // let the <details> expand before scrolling
  requestAnimationFrame(() => {
    work.scrollIntoView({ behavior: 'smooth', block: 'center' });
    work.classList.add('pf-flash');
    setTimeout(() => work.classList.remove('pf-flash'), 2200);
  });
}

function wireStandards() {
  document.querySelectorAll('.pf-std').forEach(btn => {
    if (btn.classList.contains('none')) return;
    btn.addEventListener('click', () => jumpToWork(btn.dataset.unit, btn.dataset.card));
  });
}

function load() {
  const content = document.getElementById('content');
  if (!HS_UNITS.length) { content.innerHTML = '<p class="empty-msg">No units loaded.</p>'; return; }

  let cardsDone = 0, cardsTotal = 0, qGot = 0, qMax = 0, wGot = 0, wTotal = 0;
  HS_UNITS.forEach(u => {
    const d = analyze(u);
    cardsDone += d.doneCount; cardsTotal += d.total;
    qGot += d.quizGot; qMax += d.quizMax;
    wGot += d.got; wTotal += d.words.length;
  });

  document.getElementById('stat-cards').textContent = `${cardsDone}/${cardsTotal}`;
  document.getElementById('stat-quiz').textContent = qMax ? `${pct(qGot, qMax)}%` : '–';
  document.getElementById('stat-words').textContent = `${wGot}/${wTotal}`;

  const inter = HS_UNITS.filter(u => u.track !== 'math');
  const math = HS_UNITS.filter(u => u.track === 'math');
  const col = (label, cls, list) => `<div class="yr-col ${cls}"><div class="yr-col-label">${label}</div>${
    list.length ? list.map(unitAccordion).join('') : '<p class="empty-msg">No units yet.</p>'}</div>`;

  const workColumns = `<div class="yr-columns pf-cols">
    ${col('Interdisciplinary', 'core', inter)}
    ${col('Math', 'math', math)}
  </div>`;

  content.innerHTML =
    section('His work, by track', 'Tap a unit to open his quiz scores, vocabulary, and written answers.', workColumns) +
    section('Standards → his work',
      'Tap any lit-up standard to jump to the completed lesson whose saved work shows it. Rows fill in as he finishes lessons on this device.',
      standardsMastery()) +
    `<p class="bp-footnote">This reads the work saved in this browser on this device — the quiz and vocab numbers
     are signals to talk about, not grades. The whole-year standards <em>checklist</em> lives on the
     <a href="big-picture.html">Big Picture</a> page.</p>`;

  // Toggle the caret when an accordion opens/closes.
  content.querySelectorAll('.pf-unit').forEach(dEl => {
    dEl.addEventListener('toggle', () => dEl.querySelector('.pf-caret').textContent = dEl.open ? '▾' : '▸');
  });
  wireStandards();
}

load();
