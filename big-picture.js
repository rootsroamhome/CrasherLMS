/**
 * big-picture.js — mastery + portfolio dashboard.
 *
 * Reads every unit (window.HS_UNITS) and the work Crasher saved in
 * localStorage — which cards are done, quiz scores, vocab self-sort, KWL,
 * and every written answer — and lays it out so a teacher can see progress,
 * mastery signals, and his actual writing in one place.
 *
 * NOTE: this reads the browser's localStorage, so it shows the work done on
 * THIS device. (Cross-device sync to a shared database is a separate to-do.)
 */

const HS_UNITS = window.HS_UNITS || [];

function unitState(id) { try { return JSON.parse(localStorage.getItem('homeskewl_unit_' + id)) || {}; } catch (e) { return {}; } }
function esc(s) { return (s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
function pct(n, d) { return d ? Math.round(n / d * 100) : 0; }

/* Pull a tidy summary of one unit's saved work. */
function analyze(u) {
  const s = unitState(u.id);
  const done = s.done || {}, ans = s.ans || {}, quiz = s.quiz || {}, sort = s.sort || {}, kwl = s.kwl || {};
  const total = u.cards.length;
  const doneCount = u.cards.filter(c => done[c.id]).length;

  // Quizzes: parse "3/4" scores that were saved.
  let quizGot = 0, quizMax = 0; const quizRows = [];
  u.cards.forEach(c => {
    const hasQuiz = c.blocks.some(b => b.type === 'quiz');
    if (!hasQuiz) return;
    const raw = quiz[c.id];
    if (raw && raw.includes('/')) {
      const [g, m] = raw.split('/').map(Number);
      quizGot += g; quizMax += m;
      quizRows.push({ n: c.n, title: c.title, got: g, max: m });
    } else {
      quizRows.push({ n: c.n, title: c.title, got: null, max: c.blocks.find(b => b.type === 'quiz').questions.length });
    }
  });

  // Vocab self-sort.
  const words = u.vocab.mustOwn.map(v => v.term);
  const got = words.filter(w => sort[w] === 'got').length;
  const fuzzy = words.filter(w => sort[w] === 'fuzzy');

  return { s, done, ans, kwl, total, doneCount, quizGot, quizMax, quizRows, words, got, fuzzy, sorted: got + fuzzy.length };
}

/* Meter row: label, count text, and a filled bar. */
function meter(label, text, value, color) {
  return `<div class="bp-meter">
    <div class="bp-meter-top"><span>${label}</span><span class="bp-meter-val">${esc(text)}</span></div>
    <div class="bp-meter-bar"><div style="width:${value}%; background:${color};"></div></div>
  </div>`;
}

/* Every written answer for one card, reconstructed from block structure. */
function cardWork(u, c, a) {
  const parts = [];
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
  return `<div class="bp-workcard"><div class="bp-workcard-title">${c.n}. ${esc(c.title)}</div>${parts.join('')}</div>`;
}

function unitBlock(u) {
  const d = analyze(u);
  const quizAvg = d.quizMax ? pct(d.quizGot, d.quizMax) : null;
  const gotPct = pct(d.got, d.words.length);
  const donePct = pct(d.doneCount, d.total);

  // Quiz bar chart (one bar per quiz card).
  const chart = d.quizRows.map(r => {
    const h = r.got === null ? 0 : pct(r.got, r.max);
    const label = r.got === null ? '–' : `${r.got}/${r.max}`;
    const col = r.got === null ? 'var(--line)' : (h === 100 ? 'var(--success)' : h >= 50 ? 'var(--teal)' : '#F0533F');
    return `<div class="bp-bar"><div class="bp-bar-fill" style="height:${Math.max(h, 4)}%; background:${col};"></div>
      <div class="bp-bar-num">${label}</div><div class="bp-bar-cap">#${r.n}</div></div>`;
  }).join('');

  // Vocab: got / fuzzy / untouched segmented bar + study list.
  const untouched = d.words.length - d.sorted;
  const vocabBar = `<div class="bp-seg">
    <div style="flex:${d.got}; background:var(--success);" title="Got it: ${d.got}"></div>
    <div style="flex:${d.fuzzy.length}; background:#D19A1F;" title="Fuzzy: ${d.fuzzy.length}"></div>
    <div style="flex:${Math.max(untouched, 0)}; background:var(--cream-2);" title="Not rated: ${untouched}"></div>
  </div>`;

  // KWL
  const kwl = (d.kwl.k || d.kwl.w || d.kwl.l) ? `<div class="bp-kwl">
    <div><span>Knew going in</span><p>${esc(d.kwl.k) || '<em>—</em>'}</p></div>
    <div><span>Wanted to know</span><p>${esc(d.kwl.w) || '<em>—</em>'}</p></div>
    <div><span>Learned by the end</span><p>${esc(d.kwl.l) || '<em>(not finished)</em>'}</p></div>
  </div>` : '';

  const work = u.cards.map(c => cardWork(u, c, d.ans)).filter(Boolean).join('');

  return `<section class="bp-unit">
    <div class="bp-unit-head">
      <h2>${esc(u.title)}</h2>
      <p class="bp-eq">${esc(u.eq)}</p>
    </div>

    <div class="bp-meters">
      ${meter('Cards done', `${d.doneCount} / ${d.total}`, donePct, 'var(--teal)')}
      ${meter('Quiz accuracy', quizAvg === null ? 'no quizzes yet' : `${quizAvg}% (${d.quizGot}/${d.quizMax})`, quizAvg || 0, 'var(--success)')}
      ${meter('Words owned', `${d.got} / ${d.words.length}`, gotPct, '#D19A1F')}
    </div>

    ${d.quizRows.length ? `<details class="bp-detail"><summary>Quiz scores by lesson</summary>
      <div class="bp-chart">${chart}</div></details>` : ''}

    <details class="bp-detail"><summary>Vocabulary self-check</summary>
      ${vocabBar}
      <div class="bp-legend"><span class="dot-got"></span>Got it (${d.got}) <span class="dot-fuzzy"></span>Still fuzzy (${d.fuzzy.length}) <span class="dot-none"></span>Not rated (${Math.max(untouched, 0)})</div>
      ${d.fuzzy.length ? `<div class="bp-studylist"><strong>Study list:</strong> ${d.fuzzy.map(esc).join(' · ')}</div>` : ''}
    </details>

    ${kwl ? `<details class="bp-detail"><summary>KWL — what he knew, wanted, and learned</summary>${kwl}</details>` : ''}

    <details class="bp-detail" open><summary>His written work (${work ? 'his answers' : 'nothing yet'})</summary>
      ${work || '<p class="empty-msg">No written answers saved for this unit yet.</p>'}
    </details>
  </section>`;
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

  content.innerHTML = HS_UNITS.map(unitBlock).join('') +
    `<p class="bp-footnote">This page reads the work saved in this browser on this device. It's a running picture of his thinking — the quiz and vocab numbers are signals to talk about, not grades.</p>`;
}

load();
