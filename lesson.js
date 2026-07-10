/**
 * lesson.js — generic renderer for a single science lesson.
 * Reads ?recordId=, fetches the To-Do item, matches its name to a
 * lesson in LESSONS (lessons.js), and renders it.
 */

const params   = new URLSearchParams(window.location.search);
const recordId = params.get('recordId');
const TODAY    = new Date().toISOString().split('T')[0];

function showToast(msg) {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.classList.add('show');
  setTimeout(() => el.classList.remove('show'), 3000);
}

function subjectStyle(subject) {
  return (typeof SUBJECT_COLORS !== 'undefined' && SUBJECT_COLORS[subject]) || { bg: '#1A1A1A', label: '#FBF7EC', accent: '#1A1A1A' };
}

function findLessonKey(itemName) {
  for (const key of Object.keys(LESSONS)) {
    if (itemName.includes(key)) return key;
  }
  return null;
}

function photoHtml(key, subject) {
  // Photos paused for now (sourcing being reworked). Re-enable by removing this line.
  return '';
  const kw = (typeof LESSON_PHOTOS !== 'undefined') && LESSON_PHOTOS[key];
  if (!kw) return '';
  const seed = Math.abs([...key].reduce((a, c) => a + c.charCodeAt(0), 0)) % 1000;
  const src = `https://loremflickr.com/900/380/${encodeURIComponent(kw)}?lock=${seed}`;
  const tag = (subject || '').toUpperCase();
  const tile = subjectStyle(subject).tile || 'var(--cream-2)';
  return `<div class="lesson-photo" style="--tile:${tile};">
    <img src="${src}" alt="" loading="lazy" onerror="this.style.display='none'" />
    <span class="photo-ribbon"><span class="ribbon-track">${(tag + '&nbsp;·&nbsp;').repeat(24)}</span></span>
  </div>`;
}

function learnItHtml(lesson) {
  const items = (lesson.learnIt || []).map(o => `
    <li class="choice-item">
      <span class="choice-type">${o.type}</span>
      <span class="choice-desc">${o.desc}</span>
      ${o.meta ? `<span class="choice-meta">${o.meta}</span>` : ''}
      ${o.link && o.link !== '#' ? `<a class="choice-link" href="${o.link}" target="_blank" rel="noopener">Open ↗</a>` : ''}
    </li>`).join('');

  return `
    <div class="content-section">
      <div class="content-section-header">
        <span class="content-section-icon">🎬</span>
        <span class="content-section-title">Hook</span>
      </div>
      <p>${lesson.hook || ''}</p>
    </div>
    <div class="content-section">
      <div class="content-section-header">
        <span class="content-section-icon">📚</span>
        <span class="content-section-title">Learn It — pick at least one way</span>
      </div>
      <ul class="choice-list">${items}</ul>
    </div>`;
}

let QUIZ = [];
let quizScore = null;

function quizHtml(lesson) {
  QUIZ = lesson.quiz || [];
  const qs = QUIZ.map((item, qi) => `
    <div class="quiz-q" data-qi="${qi}">
      <div class="quiz-q-text">${qi + 1}. ${item.q}</div>
      ${item.options.map((opt, oi) => `
        <label class="quiz-opt" data-qi="${qi}" data-oi="${oi}">
          <input type="radio" name="q${qi}" value="${oi}" onchange="selectOpt(${qi},${oi})" />
          <span>${opt}</span>
        </label>`).join('')}
    </div>`).join('');

  return `
    ${qs}
    <button class="btn btn-primary" id="check-quiz" onclick="checkQuiz()">Check my answers</button>
    <div id="quiz-result"></div>`;
}

window.selectOpt = function (qi, oi) {
  document.querySelectorAll(`.quiz-opt[data-qi="${qi}"]`).forEach(el => el.classList.remove('selected'));
  document.querySelector(`.quiz-opt[data-qi="${qi}"][data-oi="${oi}"]`).classList.add('selected');
};

window.checkQuiz = function () {
  let correct = 0;
  QUIZ.forEach((item, qi) => {
    const chosen = document.querySelector(`input[name="q${qi}"]:checked`);
    const chosenOi = chosen ? parseInt(chosen.value, 10) : null;
    document.querySelector(`.quiz-opt[data-qi="${qi}"][data-oi="${item.answer}"]`).classList.add('correct');
    if (chosenOi === item.answer) correct++;
    else if (chosenOi !== null) document.querySelector(`.quiz-opt[data-qi="${qi}"][data-oi="${chosenOi}"]`).classList.add('incorrect');
    document.querySelectorAll(`.quiz-q[data-qi="${qi}"] .quiz-opt`).forEach(el => el.classList.add('quiz-locked'));
  });
  quizScore = `${correct}/${QUIZ.length}`;
  const emoji = correct === QUIZ.length ? '🎉' : (correct >= QUIZ.length / 2 ? '👍' : '💪');
  const msg = correct === QUIZ.length ? 'Perfect score!' : 'Green shows the right answer — read any you missed.';
  document.getElementById('quiz-result').innerHTML = `<div class="quiz-result">${emoji} You got ${correct} of ${QUIZ.length}. ${msg}</div>`;
  const btn = document.getElementById('check-quiz');
  btn.disabled = true; btn.textContent = 'Checked ✓';
};

function choicesHtml(lesson) {
  const opts = (lesson.showIt || []).map((o, i) => `
    <div class="check-option">
      <div class="check-option-title">Option ${i + 1}: ${o.type}</div>
      <div class="check-option-desc">${o.prompt}</div>
    </div>`).join('');
  return `
    <p style="margin-bottom:14px; color:var(--text-muted);">Pick <strong>one</strong> way to show it and do it — then record it in the <strong>Mark This Done</strong> box below.</p>
    ${opts}`;
}

function doneAreaHtml(lesson, isQuiz) {
  const prompt = isQuiz
    ? (lesson && lesson.short ? lesson.short : 'Answer in your own words:')
    : 'Write your answer, or where your work lives (a link, your notebook, or "told a parent"):';
  return `
    <div class="done-reminder">👉 When you finish, tap <strong>Mark This Done</strong>. If you don't, it rolls over to tomorrow.</div>
    <label for="short-answer" style="display:block; font-weight:600; margin:14px 0 8px; color:var(--text-muted);">${prompt}</label>
    <textarea id="short-answer" class="rh-input" placeholder="Type your answer here…" style="min-height:110px;"></textarea>
    <button class="btn btn-success" style="margin-top:12px;" onclick="markDone()">✓ Mark This Done</button>`;
}

async function loadLesson() {
  const main = document.getElementById('content-main');
  if (!recordId) {
    main.innerHTML = '<p>No lesson found. <a href="index.html">Go back to your list</a>.</p>';
    return;
  }

  try {
    const res = await fetch(`${CONFIG.apiBase}/${encodeURIComponent(TABLES.todos)}/${recordId}`);
    if (!res.ok) throw new Error('Record not found');
    const record   = await res.json();
    const itemName = record.fields['Item name'] || '';
    const subject  = record.fields['Subject'] || 'Science';
    const unit     = record.fields['Unit'] || '';
    const stdCode  = record.fields['Standard code'] || '';

    const lessonKey = findLessonKey(itemName);
    const lesson = lessonKey ? LESSONS[lessonKey] : null;
    if (!lesson) {
      document.getElementById('lesson-title').textContent = itemName || 'Lesson';
      document.getElementById('lesson-content').innerHTML =
        '<div class="content-section"><p>This item doesn\'t have a lesson page yet — just do what the title says and mark it done.</p></div>';
      document.getElementById('check-section').style.display = 'none';
    } else {
      const c = subjectStyle(subject);
      document.getElementById('lesson-meta').innerHTML = `
        <span class="subject-badge" style="background:${c.bg}; color:${c.label};">${subject}</span>
        ${(lesson.standards || stdCode) ? `<span style="font-size:0.76rem; font-weight:700; color:var(--text-dim);">${lesson.standards || stdCode}</span>` : ''}
        ${(lesson.unit || unit) ? `<span style="font-size:0.76rem; color:var(--text-dim);">${lesson.unit || unit}</span>` : ''}`;
      document.getElementById('lesson-title').textContent = lesson.title;
      document.getElementById('lesson-content').innerHTML = photoHtml(lessonKey, subject) + learnItHtml(lesson);
      const isQuiz = !!lesson.quiz;
      document.getElementById('check-options').innerHTML = isQuiz ? quizHtml(lesson) : choicesHtml(lesson);
      document.querySelector('#check-section .content-section-title').textContent =
        isQuiz ? 'Show It — quick quiz + your own words' : 'Show It — pick one way';
    }

    document.getElementById('done-area').innerHTML = doneAreaHtml(lesson, !!(lesson && lesson.quiz));

  } catch (e) {
    console.error(e);
    main.innerHTML = '<p>Couldn\'t load this lesson. <a href="index.html">Go back to your list</a>.</p>';
  }
}

window.markDone = async function () {
  const shortAns = document.getElementById('short-answer')?.value.trim() || '';
  const parts = [];
  if (quizScore) parts.push(`Quiz: ${quizScore}`);
  else if (QUIZ.length) parts.push('Quiz: not checked');
  if (shortAns) parts.push(`Short answer: ${shortAns}`);
  const notes = parts.join('\n') || 'Marked done';
  try {
    const res = await fetch(`${CONFIG.apiBase}/${encodeURIComponent(TABLES.todos)}/${recordId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ fields: { Status: 'Done', 'Completion date': TODAY, 'Student notes': notes } }),
    });
    if (!res.ok) throw new Error('Save failed');
    showToast('Done! Great work. ✓');
    setTimeout(() => window.location.href = 'index.html', 1200);
  } catch (e) {
    console.error(e);
    showToast('Error saving — try from the main list.');
  }
};

loadLesson();
