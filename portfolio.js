/**
 * portfolio.js — Crasher's work, unit by unit.
 *
 * Each unit is a COLLAPSED accordion (closed by default) so the page stays
 * short no matter how many units exist — tap a unit to open its work: quiz
 * scores, vocab self-check, KWL, and every written answer.
 *
 * Reads the browser's localStorage, so it shows the work done on THIS device.
 * (Cross-device sync to a shared database is a separate to-do.)
 */

const HS_UNITS = window.HS_UNITS || [];

function unitState(id) { try { return JSON.parse(localStorage.getItem('homeskewl_unit_' + id)) || {}; } catch (e) { return {}; } }
function esc(s) { return (s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
function pct(n, d) { return d ? Math.round(n / d * 100) : 0; }

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

/* One unit = one collapsed accordion. */
function unitAccordion(u) {
  const d = analyze(u);
  const quizAvg = d.quizMax ? pct(d.quizGot, d.quizMax) : null;
  const gotPct = pct(d.got, d.words.length);
  const donePct = pct(d.doneCount, d.total);
  const touched = d.doneCount > 0 || d.answered > 0;

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

  const work = u.cards.map(c => cardWork(u, c, d.ans)).filter(Boolean).join('');

  const summary = `<summary class="pf-summary">
      <span class="pf-caret">▸</span>
      <span class="pf-unit-name">${esc(u.title)}</span>
      <span class="pf-unit-stat">${d.doneCount}/${d.total} lessons${quizAvg !== null ? ` · quiz ${quizAvg}%` : ''}${d.answered ? ` · ${d.answered} answers` : ''}</span>
    </summary>`;

  return `<details class="pf-unit"${touched ? '' : ''}>
    ${summary}
    <div class="pf-body">
      <div class="bp-meters">
        ${meter('Lessons done', `${d.doneCount} / ${d.total}`, donePct, 'var(--teal)')}
        ${meter('Quiz accuracy', quizAvg === null ? 'no quizzes yet' : `${quizAvg}% (${d.quizGot}/${d.quizMax})`, quizAvg || 0, 'var(--success)')}
        ${meter('Words owned', `${d.got} / ${d.words.length}`, gotPct, '#D19A1F')}
      </div>

      ${d.quizRows.length ? `<h3 class="bp-subhead">Quiz scores by lesson</h3><div class="bp-chart">${chart}</div>` : ''}

      <h3 class="bp-subhead">Vocabulary</h3>
      ${vocabBar}
      <div class="bp-legend"><span class="dot-got"></span>Got it (${d.got}) <span class="dot-fuzzy"></span>Still fuzzy (${d.fuzzy.length}) <span class="dot-none"></span>Not rated (${Math.max(untouched, 0)})</div>
      ${d.fuzzy.length ? `<div class="bp-studylist"><strong>Study list:</strong> ${d.fuzzy.map(esc).join(' · ')}</div>` : ''}

      ${kwl}

      <h3 class="bp-subhead">Written work</h3>
      ${work || '<p class="empty-msg">No written answers saved for this unit yet.</p>'}
    </div>
  </details>`;
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

  content.innerHTML = HS_UNITS.map(unitAccordion).join('') +
    `<p class="bp-footnote">Tap a unit to open his work. This reads the work saved in this browser on this device — the quiz and vocab numbers are signals to talk about, not grades.</p>`;

  // Toggle the caret when an accordion opens/closes.
  content.querySelectorAll('.pf-unit').forEach(d => {
    d.addEventListener('toggle', () => d.querySelector('.pf-caret').textContent = d.open ? '▾' : '▸');
  });
}

load();
