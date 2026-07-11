/**
 * index.js — the "Today" landing page.
 *
 * A d.school-style gallery of mixed-color, textured tiles. No Airtable, no due
 * dates, nothing rolls over. It shows:
 *   1. A feature "lesson" tile — the next unlocked card of the unit he's in,
 *      linking into My Unit. Gated to the school-year start (Aug 31): before
 *      then it's a friendly countdown + preview.
 *   2. The every-day 30-minute anchors (math + reading) with focus timers.
 *      "Done today" is stored under the LOCAL date, so it resets each morning
 *      and never piles up.
 *   3. Tiles for the weekly Self-Study/Rabbit-Hole pick and his portfolio.
 */

/* Local calendar date (not UTC), so "today" flips at local midnight and the
   weekday label always matches the date. */
function localToday() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}
const TODAY = localToday();
const HS_UNITS = window.HS_UNITS || [];
// config.js / curriculum.js declare these as top-level `const`, which share the
// page's global lexical scope but are NOT properties of window — so reference
// them by name (guarded), never as window.*.
const SCHOOL_START = (typeof CURRICULUM !== 'undefined' && CURRICULUM.yearStart) || '2026-08-31';

/* A loremflickr keyword per unit for the feature photo. */
const UNIT_PHOTO = { rivers: 'river', metals: 'blacksmith' };

/* The daily anchors. Edit this list to change what shows every day. */
const DAILY = [
  { key: 'math', subject: 'Math', title: 'Math', minutes: 35, side: 'DAILY',
    link: 'https://www.khanacademy.org/math/cc-seventh-grade-math', linkLabel: 'Open Khan Academy',
    note: 'Khan Academy, on grade level — pick up right where you left off.' },
  { key: 'reading', subject: 'ELA', title: 'Independent Reading', minutes: 30, side: 'DAILY',
    photo: 'library', link: null,
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

/* ── dates ── */
function parseDate(s) { return new Date(s + 'T00:00:00'); }
function daysBetween(a, b) { return Math.round((parseDate(b) - parseDate(a)) / 86400000); }
function fmtLong(s) { return parseDate(s).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' }); }
const DAYS_TO_SCHOOL = daysBetween(TODAY, SCHOOL_START);
const IN_SESSION = DAYS_TO_SCHOOL <= 0;
function weekNumber() { const d = daysBetween(SCHOOL_START, TODAY); return d < 0 ? 0 : Math.floor(d / 7) + 1; }

function esc(s) { return (s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
function colorOf(subject) {
  const map = typeof SUBJECT_COLORS !== 'undefined' ? SUBJECT_COLORS : {};
  return map[subject] || { bg: '#17A0AE', tile: '#8FD6E1' };
}

function showToast(msg) {
  const el = document.getElementById('toast');
  el.textContent = msg; el.classList.add('show');
  setTimeout(() => el.classList.remove('show'), 3000);
}

/* rotating photo band (degrades to the tile's color if the image fails) */
function photoBand(keyword) {
  return `<div class="today-photo"><img src="https://loremflickr.com/640/300/${keyword}" alt="" loading="lazy" onerror="this.parentElement.remove()"></div>`;
}

/* deterministic-ish texture variant so tiles don't all look identical */
const TEX = ['tex-a', 'tex-b', 'tex-c', 'tex-d'];

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

/* ── tiles ── */

function lessonTile() {
  const u = activeUnit();
  if (!u) return '';
  const card = currentCard(u);
  const done = unitDoneCount(u), total = u.cards.length;
  const kw = UNIT_PHOTO[u.id] || 'landscape';
  const c = colorOf('Science');

  if (!card) {
    return `<a class="card tile tex-c today-tile today-lesson-tile" href="unit.html?u=${u.id}" style="--tile:${c.tile}; --card-accent:${c.bg};">
      <span class="tile-dot"></span><span class="tile-side">DONE</span>
      <div class="tile-eyebrow">Your unit</div>
      <h2 class="tile-title">🎉 You finished ${esc(u.title)}</h2>
      <p class="tile-desc">Every card is done — head in to review your work or start what's next.</p>
      <div class="tile-foot"><span class="tile-cta">Open the unit →</span></div>
    </a>`;
  }

  const eyebrow = IN_SESSION ? `Today's lesson · ${esc(u.short || u.title)}` : `Starts Mon, Aug 31 · ${esc(u.short || u.title)}`;
  const cta = !IN_SESSION ? 'Preview the unit →' : (done > 0 ? 'Continue the unit →' : 'Start the unit →');

  return `<a class="card tile tex-a today-tile today-lesson-tile" href="unit.html?u=${u.id}" style="--tile:${c.tile}; --card-accent:${c.bg};">
    <span class="tile-dot"></span><span class="tile-side">LESSON</span>
    ${photoBand(kw)}
    <div class="tile-eyebrow">${eyebrow}</div>
    <h2 class="tile-title">${esc(card.title)}</h2>
    <div class="tile-meta">
      <span class="subject-badge" style="background:${c.bg}; color:#fff;">${esc(card.subject)}</span>
      <span>~${card.minutes} min</span>
      <span>${esc(card.standards || '')}</span>
    </div>
    <div class="tile-foot">
      <span class="tile-cta">${cta}</span>
      ${IN_SESSION ? `<span class="tile-prog">${done} of ${total} cards done</span>` : '<span class="tile-prog">Take a peek before the year starts</span>'}
    </div>
    ${IN_SESSION ? `<div class="tile-bar"><div style="width:${Math.round(done / total * 100)}%; background:${c.bg};"></div></div>` : ''}
  </a>`;
}

function dailyTile(item, i) {
  const c = colorOf(item.subject);
  const isDone = !!dailyState()[item.key];
  const linkHtml = item.link
    ? `<a class="btn btn-primary" href="${item.link}" target="_blank" rel="noopener">${esc(item.linkLabel || 'Open')} ↗</a>`
    : '';
  return `<div class="card tile ${TEX[i % TEX.length]} ${i % 2 ? 'dots-blue' : 'dots-pink'} today-tile daily-card${isDone ? ' is-done' : ''}"
      data-key="${item.key}" style="--tile:${c.tile}; --card-accent:${c.bg};">
    <span class="tile-dot"></span><span class="tile-side">${esc(item.side || 'DAILY')}</span>
    ${item.photo ? photoBand(item.photo) : ''}
    <div class="tile-eyebrow">${item.minutes} min a day</div>
    <h2 class="tile-title">${esc(item.title)}</h2>
    <p class="tile-desc">${esc(item.note)}</p>
    <div class="timer" data-min="${item.minutes}">
      <div><div class="timer-label">Focus timer</div><div class="timer-display">${item.minutes}:00</div></div>
      <div class="timer-btns">
        <button class="btn btn-primary timer-start" type="button">▶ Start</button>
        <button class="btn btn-ghost timer-reset" type="button">↻ Reset</button>
      </div>
    </div>
    <div class="daily-actions">${linkHtml}
      <button class="btn btn-success daily-done" type="button">${isDone ? '✓ Done today' : 'Mark done today'}</button>
    </div>
  </div>`;
}

function weeklyTile() {
  const c = colorOf('Rabbit Hole');
  return `<a class="card tile tex-b today-tile" href="this-week.html" style="--tile:${c.tile}; --card-accent:${c.bg};">
    <span class="tile-dot"></span><span class="tile-side">WEEKLY</span>
    <div class="tile-eyebrow">Pick once, each Monday</div>
    <h2 class="tile-title">Self-Study or Rabbit Hole</h2>
    <p class="tile-desc">Go deep on one thing you choose, or chase something weird and make stuff. One pick for the whole week.</p>
    <div class="tile-foot"><span class="tile-cta">Make this week's pick →</span></div>
  </a>`;
}

function portfolioTile() {
  return `<a class="card tile black tex-d today-tile" href="big-picture.html" style="--card-accent:var(--teal);">
    <span class="tile-dot"></span><span class="tile-side">YOUR WORK</span>
    <div class="ribbon"><div class="ribbon-track">PORTFOLIO · PROGRESS · MASTERY · PORTFOLIO · PROGRESS · MASTERY · </div></div>
    <div class="tile-eyebrow">Everything you've made</div>
    <h2 class="tile-title">See your work</h2>
    <p class="tile-desc">Your answers, quiz scores, and vocabulary — all in one place, unit by unit.</p>
    <div class="tile-foot"><span class="tile-cta">Open your portfolio →</span></div>
  </a>`;
}

function schoolFlag() {
  if (IN_SESSION) {
    const wk = weekNumber();
    return `<div class="school-flag in-session">📚 School year 2026–27${wk ? ` · Week ${wk} of 37` : ''}</div>`;
  }
  return `<div class="school-flag summer">☀️ Summer break — school starts <strong>${fmtLong(SCHOOL_START)}</strong>
    <span class="countdown">${DAYS_TO_SCHOOL} ${DAYS_TO_SCHOOL === 1 ? 'day' : 'days'} to go</span></div>`;
}

function render() {
  document.getElementById('today').innerHTML = `
    <div class="today-hero">
      <div class="today-date">${fmtLong(TODAY)}</div>
      <h1 class="today-greeting">${greeting()}, Crasher.</h1>
      <p class="today-fact">${esc(getDailyFact(TODAY))}</p>
      ${schoolFlag()}
    </div>
    <div class="today-gallery">
      ${lessonTile()}
      ${DAILY.map(dailyTile).join('')}
      ${weeklyTile()}
      ${portfolioTile()}
    </div>`;
  wire();
}

/* ── wiring ── */
function wire() {
  document.querySelectorAll('.daily-card').forEach(cardEl => {
    const key = cardEl.dataset.key;
    attachTimer(cardEl, parseInt(cardEl.querySelector('.timer').dataset.min, 10));
    cardEl.querySelector('.daily-done').onclick = (e) => {
      e.preventDefault(); e.stopPropagation();
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
  startBtn.addEventListener('click', (e) => { e.preventDefault(); e.stopPropagation(); start(); });
  resetBtn.addEventListener('click', (e) => { e.preventDefault(); e.stopPropagation(); stop(); remaining = minutes * 60; el.classList.remove('done'); draw(); startBtn.textContent = '▶ Start'; });
  draw();
}

render();
