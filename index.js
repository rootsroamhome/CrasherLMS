/**
 * index.js — the "Today" landing page.
 *
 * No Airtable, no due dates, nothing rolls over. Today shows two things:
 *   1. Your unit lesson — the next unlocked card of the unit you're in,
 *      linking straight into "My Unit."
 *   2. The every-day 30-minute anchors (math + independent reading) with
 *      focus timers. Their "done" checks are stored under today's date, so
 *      they simply reset tomorrow — nothing ever piles up.
 *
 * Reads unit data + progress from the same localStorage the unit pages use.
 */

/* Local calendar date (not UTC), so "today" flips at local midnight and the
   daily checks line up with the date shown in the header. */
function localToday() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}
const TODAY = localToday();
const HS_UNITS = window.HS_UNITS || [];

/* The daily anchors. Edit this list to change what shows every day. */
const DAILY = [
  { key: 'math', subject: 'Math', title: 'Math', minutes: 35,
    link: 'https://www.khanacademy.org/math/cc-seventh-grade-math',
    linkLabel: 'Open Khan Academy',
    note: 'Khan Academy, on grade level — pick up right where you left off.' },
  { key: 'reading', subject: 'ELA', title: 'Independent Reading', minutes: 30,
    link: null,
    note: 'Your pick of book. Just read — no log, no quiz.' },
];

/* ── unit progress (reads each unit's own localStorage) ── */
function unitState(id) { try { return JSON.parse(localStorage.getItem('homeskewl_unit_' + id)) || {}; } catch (e) { return {}; } }
function unitDoneCount(u) { const d = unitState(u.id).done || {}; return u.cards.filter(c => d[c.id]).length; }
function currentCard(u) { const d = unitState(u.id).done || {}; return u.cards.find(c => !d[c.id]) || null; }
function activeUnit() { return HS_UNITS.find(u => unitDoneCount(u) < u.cards.length) || HS_UNITS[HS_UNITS.length - 1]; }

/* ── daily "done today" state (date-keyed, so it never carries over) ── */
const DKEY = 'homeskewl_daily_' + TODAY;
function dailyState() { try { return JSON.parse(localStorage.getItem(DKEY)) || {}; } catch (e) { return {}; } }
function setDaily(k, v) { const s = dailyState(); if (v) s[k] = 1; else delete s[k]; localStorage.setItem(DKEY, JSON.stringify(s)); }

function esc(s) { return (s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
function colorOf(subject) { return (window.SUBJECT_COLORS || {})[subject] || { bg: '#17A0AE', tile: '#8FD6E1' }; }

function showToast(msg) {
  const el = document.getElementById('toast');
  el.textContent = msg; el.classList.add('show');
  setTimeout(() => el.classList.remove('show'), 3000);
}

/* ── silly facts (rotate daily) ── */
const SILLY_FACTS = [
  'Octopuses have three hearts and blue blood — it runs on copper instead of the iron that makes our blood red.',
  'Sharks are older than trees. Sharks have swum the oceans for about 450 million years; the first trees showed up roughly 390 million years ago.',
  'An electric eel isn\'t actually an eel — it\'s a kind of knifefish — and one was measured zapping 860 volts, the biggest jolt of any animal on Earth.',
  'Wombats poop cubes. Their intestines have stretchy and stiff patches that mold the poop into little dice so it won\'t roll off the rocks they mark.',
  'Tardigrades — tiny "water bears" — were put in the raw vacuum of space in 2007, and some came back alive.',
  'A mantis shrimp punches so fast it briefly boils the water next to its claw, making a flash of light and a shockwave.',
  'Reindeer eyes change color with the seasons — gold in summer, blue in winter — to see better through months of Arctic darkness.',
  'Crows can recognize individual human faces and hold a grudge for years, even teaching other crows who to avoid.',
  'Honeybees can be trained to understand the idea of zero — a concept it took humans thousands of years to invent.',
  'Axolotls can regrow whole legs, parts of their heart, and even parts of their brain.',
  'Platypuses glow blue-green under ultraviolet light. Nobody is totally sure why.',
  'A shrimp\'s heart is in its head.',
  'Elephants are one of the only mammals that physically cannot jump.',
  'A blue whale\'s heart is about the size of a small car, and it beats only a few times a minute when the whale dives.',
  'Hummingbirds are the only birds that can fly backwards.',
  'Alessandro Volta built the first real battery in 1800 out of stacked copper and zinc discs. The word "volt" is named after him.',
  'Electricity zips through a wire almost as fast as light — but the actual electrons drift along slower than a walking snail.',
  'Lithium is the lightest metal on Earth. It\'s so light it floats on water (right before it reacts with it).',
  'Around the year 1900, about a third of the cars on U.S. roads were electric. Gasoline didn\'t win the fight until later.',
  'A bicycle is the most energy-efficient way to travel ever invented — mile for mile, a person on a bike beats every animal and every machine.',
  'An ebike or EV motor turns about 85–90% of its energy into motion. A gasoline engine wastes most of its energy as heat.',
  'Lightning is about five times hotter than the surface of the Sun — roughly 30,000°C.',
  'Copper is in almost all wiring because, out of the metals we can afford, only silver carries electricity better.',
  'A lithium battery lasts way longer if you don\'t drain it to 0% or stuff it to 100%. Keeping it in the middle is the secret.',
  'The Eiffel Tower is about 15 cm taller in summer than in winter, because the iron expands when it heats up.',
  'In Oregon it was illegal to pump your own gas for almost 70 years — the rule finally changed statewide in 2023.',
];
function getDailyFact(dateStr) {
  const hash = dateStr.split('').reduce((a, c) => a + c.charCodeAt(0), 0);
  return SILLY_FACTS[hash % SILLY_FACTS.length];
}

function greeting() {
  const h = new Date().getHours();
  return h < 12 ? 'Good morning' : h < 17 ? 'Hey' : 'Good evening';
}

/* ── render pieces ── */

function lessonHero() {
  const u = activeUnit();
  if (!u) return '';
  const card = currentCard(u);
  const done = unitDoneCount(u), total = u.cards.length;
  const c = colorOf('Science');

  if (!card) {
    return `<a class="today-lesson today-lesson-done" href="unit.html?u=${u.id}">
      <div class="today-eyebrow">Your unit</div>
      <h2 class="today-lesson-title">🎉 You've finished ${esc(u.title)}</h2>
      <p class="today-lesson-sub">Every card is done. Head to My Unit to review your work or start what's next.</p>
    </a>`;
  }

  const started = done > 0;
  return `<a class="today-lesson" href="unit.html?u=${u.id}" style="--tile:${c.tile};">
    <div class="today-eyebrow">Today's lesson · ${esc(u.short || u.title)}</div>
    <h2 class="today-lesson-title">${esc(card.title)}</h2>
    <div class="today-lesson-meta">
      <span class="subject-badge" style="background:${c.bg}; color:#fff;">${esc(card.subject)}</span>
      <span class="today-min">~${card.minutes} min</span>
      <span class="today-standards">${esc(card.standards || '')}</span>
    </div>
    <div class="today-lesson-foot">
      <span class="today-go">${started ? 'Continue the unit' : 'Start the unit'} →</span>
      <span class="today-unit-progress">${done} of ${total} cards done</span>
    </div>
    <div class="today-lesson-bar"><div style="width:${Math.round(done / total * 100)}%; background:${c.bg};"></div></div>
  </a>`;
}

function dailyCard(item) {
  const c = colorOf(item.subject);
  const isDone = !!dailyState()[item.key];
  const linkHtml = item.link
    ? `<a class="btn btn-primary" href="${item.link}" target="_blank" rel="noopener">${esc(item.linkLabel || 'Open')} ↗</a>`
    : '';
  return `<div class="daily-card${isDone ? ' is-done' : ''}" data-key="${item.key}" style="--tile:${c.tile}; --accent:${c.bg};">
    <div class="daily-head">
      <span class="subject-badge" style="background:${c.bg}; color:#fff;">${esc(item.subject)}</span>
      <span class="daily-min">${item.minutes} min/day</span>
    </div>
    <div class="daily-title">${esc(item.title)}</div>
    <div class="daily-note">${esc(item.note)}</div>
    <div class="timer" data-min="${item.minutes}">
      <div>
        <div class="timer-label">Focus timer</div>
        <div class="timer-display">${item.minutes}:00</div>
      </div>
      <div class="timer-btns">
        <button class="btn btn-primary timer-start" type="button">▶ Start</button>
        <button class="btn btn-ghost timer-reset" type="button">↻ Reset</button>
      </div>
    </div>
    <div class="daily-actions">
      ${linkHtml}
      <button class="btn btn-success daily-done" type="button">${isDone ? '✓ Done today' : 'Mark done today'}</button>
    </div>
  </div>`;
}

function render() {
  document.getElementById('today').innerHTML = `
    <div class="today-hero">
      <div class="today-date">${new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</div>
      <h1 class="today-greeting">${greeting()}, Crasher.</h1>
      <p class="today-fact">${esc(getDailyFact(TODAY))}</p>
    </div>

    ${lessonHero()}

    <div class="section-label">Every day — about 30 minutes each</div>
    <div class="daily-grid">${DAILY.map(dailyCard).join('')}</div>

    <a class="today-week" href="this-week.html">
      <span>🐇 Mondays: pick your <strong>Self-Study</strong> or <strong>Rabbit Hole</strong> for the week</span>
      <span class="today-week-go">→</span>
    </a>`;

  wire();
}

/* ── wiring ── */
function wire() {
  document.querySelectorAll('.daily-card').forEach(cardEl => {
    const key = cardEl.dataset.key;
    attachTimer(cardEl, parseInt(cardEl.querySelector('.timer').dataset.min, 10));
    cardEl.querySelector('.daily-done').onclick = () => {
      const nowDone = !dailyState()[key];
      setDaily(key, nowDone);
      cardEl.classList.toggle('is-done', nowDone);
      cardEl.querySelector('.daily-done').textContent = nowDone ? '✓ Done today' : 'Mark done today';
      if (nowDone) showToast('Nice — checked off for today ✓');
    };
  });
}

function attachTimer(card, minutes) {
  const el = card.querySelector('.timer');
  const display = el.querySelector('.timer-display');
  const startBtn = el.querySelector('.timer-start');
  const resetBtn = el.querySelector('.timer-reset');
  let remaining = minutes * 60, ticking = false, intervalId = null;

  function draw() {
    const m = Math.floor(remaining / 60), s = remaining % 60;
    display.textContent = `${m}:${String(s).padStart(2, '0')}`;
  }
  function stop() {
    clearInterval(intervalId); intervalId = null; ticking = false;
    el.classList.remove('running');
    startBtn.textContent = remaining === 0 ? '▶ Start' : '▶ Resume';
  }
  function start() {
    if (ticking) { stop(); startBtn.textContent = '▶ Resume'; return; }
    if (remaining === 0) remaining = minutes * 60;
    ticking = true; el.classList.add('running'); el.classList.remove('done');
    startBtn.textContent = '⏸ Pause';
    intervalId = setInterval(() => {
      remaining--; draw();
      if (remaining <= 0) {
        stop(); el.classList.add('done');
        display.textContent = 'Done! ⏰';
        startBtn.textContent = '▶ Again';
        showToast('Time\'s up — nice focus! ✓');
      }
    }, 1000);
  }
  startBtn.addEventListener('click', start);
  resetBtn.addEventListener('click', () => { stop(); remaining = minutes * 60; el.classList.remove('done'); draw(); startBtn.textContent = '▶ Start'; });
  draw();
}

render();
