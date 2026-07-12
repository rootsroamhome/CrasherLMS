/**
 * index.js — the "Today" landing page.
 *
 * A d.school-style gallery of mixed-color, textured tiles. No Airtable, no due
 * dates, nothing rolls over. It shows:
 *   1. A feature "lesson" tile — the next unlocked card of the unit he's in,
 *      linking into My Unit. Gated to the school-year start (Aug 31): before
 *      then it's a friendly countdown + preview.
 *   2. The every-day anchors (reading + math) with a 30-min focus timer. Math
 *      drops the timer once school is in session (Aug 31+) so its self-paced
 *      unit has no time limit; reading keeps it. "Done today" is stored under
 *      the LOCAL date, so it resets each morning and never piles up.
 *   3. Tiles for the weekly Self-Study/Rabbit-Hole pick and his portfolio.
 */

/* Local calendar date (not UTC), so "today" flips at local midnight and the
   weekday label always matches the date. */
function localToday() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}
const REAL_TODAY = localToday();
// The date Today is *showing*. Defaults to the real date, but a date picker (and
// a shareable ?d=YYYY-MM-DD link) can point it at any day — so someone can see
// what the first day of school looks like without waiting for it.
let viewDate = (() => {
  const d = new URLSearchParams(location.search).get('d');
  return /^\d{4}-\d{2}-\d{2}$/.test(d || '') ? d : REAL_TODAY;
})();
const HS_UNITS = window.HS_UNITS || [];
// config.js / curriculum.js declare these as top-level `const`, which share the
// page's global lexical scope but are NOT properties of window — so reference
// them by name (guarded), never as window.*.
// Follows the Medford School District 549C 2026–27 calendar, EXCEPT we start
// Aug 31 (the district's 7th-grade day is Sep 1, but we begin a day early).
// Last student day is Jun 10. August 1–30 stay empty (school hasn't begun).
const SCHOOL_START = '2026-08-31';
const SCHOOL_END = '2027-06-10';
// July weekdays show only the daily reading + Khan math; August is empty until
// school starts. (isSummer = July and earlier → the daily math is generic Khan.)
const SUMMER_END = '2026-08-01';

/* No-school days for students (Medford SD 2026–27) — weekends are handled
   separately. Single days use `d`; multi-day breaks use `from`/`to` (inclusive).
   The label shows on the rest-day screen. */
const NO_SCHOOL = [
  { d: '2026-07-03', label: 'Independence Day' },
  { d: '2026-09-04', label: 'No school' },
  { d: '2026-09-07', label: 'Labor Day' },
  { d: '2026-10-02', label: 'No school' },
  { d: '2026-10-09', label: 'No school' },
  { d: '2026-11-02', label: 'No school' },
  { d: '2026-11-11', label: 'Veterans Day' },
  { from: '2026-11-23', to: '2026-11-24', label: 'Conferences — no school' },
  { from: '2026-11-25', to: '2026-11-27', label: 'Thanksgiving Break' },
  { d: '2026-12-11', label: 'No school' },
  { from: '2026-12-21', to: '2027-01-01', label: 'Winter Break' },
  { d: '2027-01-18', label: 'Martin Luther King Jr. Day' },
  { d: '2027-01-25', label: 'No school' },
  { d: '2027-02-15', label: "Presidents' Day" },
  { d: '2027-03-01', label: 'No school' },
  { from: '2027-03-22', to: '2027-03-26', label: 'Spring Break' },
  { d: '2027-04-05', label: 'No school' },
  { d: '2027-04-23', label: 'No school' },
  { d: '2027-05-10', label: 'No school' },
  { d: '2027-05-31', label: 'Memorial Day' },
];

/* The daily anchors. Edit this list to change what shows every day. */
const DAILY = [
  // Reading is a daily anchor, not one of the three tracks → cream (neutral).
  { key: 'reading', subject: 'ELA', title: 'Independent Reading', minutes: 30, side: 'BE LITERATE', ghost: 'B',
    tile: '#F8F4E9', accent: '#6F6F45',
    photos: ['assets/units/reading.jpg', 'assets/units/reading2.jpg', 'assets/units/reading3.jpg', 'assets/units/reading4.jpg'],
    link: null, note: 'Your pick of book. Just read — no log, no quiz.' },
  // Math = the gold track color (NOT its coral subject swatch — coral is reserved).
  { key: 'math', subject: 'Math', title: 'Proportions', minutes: 30, side: 'MATH', ghost: 'M',
    tile: '#F4CE5E', accent: '#D19A1F',
    link: 'unit.html?u=math-proportions', linkLabel: 'Start', internal: true,
    noTimerInSession: true,   // self-paced once the 7th-grade units start (Aug 31): no timer
    note: 'Work the Proportional Relationships unit — a short video, a quick check, then Khan practice.',
    // Over the summer there's no unit yet — it's just Khan practice to stay sharp.
    // The Proportional Relationships unit only kicks in with the school year (Aug 31).
    summer: {
      title: 'Khan Math',
      link: 'https://www.khanacademy.org/math/cc-seventh-grade-math', linkLabel: 'Open Khan', internal: false,
      note: 'Summer math is just Khan — your pick of 7th-grade skills to keep sharp. The math unit starts when school does.',
    } },
];

/* ── unit progress (reads each unit's own localStorage) ── */
function unitState(id) { try { return JSON.parse(localStorage.getItem('homeskewl_unit_' + id)) || {}; } catch (e) { return {}; } }
function unitDoneCount(u) { const d = unitState(u.id).done || {}; return u.cards.filter(c => d[c.id]).length; }
function currentCard(u) { const d = unitState(u.id).done || {}; return u.cards.find(c => !d[c.id]) || null; }
// Interdisciplinary units carry no `track` (math='math', clep='clep'); the core
// "Thematic Unit" slot is only those, so CLEP never hijacks Today's lesson tile.
const CORE_UNITS = HS_UNITS.filter(u => !u.track);
function activeUnit() { return CORE_UNITS.find(u => unitDoneCount(u) < u.cards.length) || CORE_UNITS[CORE_UNITS.length - 1]; }
function mathUnit() { return HS_UNITS.find(u => u.track === 'math'); }
// The College Credit (CLEP) elective — its own brown-tiled slot on Today.
const CLEP_UNITS = HS_UNITS.filter(u => u.track === 'clep');
function clepUnit() { return CLEP_UNITS.find(u => unitDoneCount(u) < u.cards.length) || CLEP_UNITS[0]; }
const CLEP_TILE = '#F0B98C', CLEP_ACCENT = '#E07A3E';   // brown (Danielle's pick; not plum)

/* Photo mix (d.school-style): only *some* tiles carry a photo on a given day,
   the set rotates day to day, and never every tile at once. A tile is eligible
   only if it actually has a real, topical, self-hosted image. */
function dayHash(s) { return (s || '').split('').reduce((a, c) => a + c.charCodeAt(0), 0); }
// CLEP now has real, topical, self-hosted photos (assets/units/clep-*.jpg), so it
// joins the photo rotation. Math still uses a placeholder (reading3.jpg bookstore),
// so it stays out until a genuinely topical math image exists.
const PHOTO_READY = { math: false, clep: true };
let PHOTO_PLAN = new Set();
function computePhotoPlan() {
  const eligible = [];
  const u = activeUnit(); if (u && u.image) eligible.push('thematic');
  eligible.push('reading');                          // always has curated photos
  const m = mathUnit(); if (m && m.image && PHOTO_READY.math) eligible.push('math');
  const cl = clepUnit(); if (cl && cl.image && PHOTO_READY.clep) eligible.push('clep');
  // each eligible tile has a ~60% (day-seeded) chance of showing its photo today
  let picks = eligible.filter(k => (dayHash(k + '|' + viewDate) % 10) < 6);
  const cap = eligible.length >= 3 ? eligible.length - 1 : eligible.length;  // leave at least one photo-less
  if (!picks.length) picks = [eligible[dayHash(viewDate) % eligible.length]];
  if (picks.length > cap) picks = picks.slice(0, cap);
  PHOTO_PLAN = new Set(picks);
}

/* ── daily "done today" state (date-keyed, so it never carries over) ── */
function dkey() { return 'homeskewl_daily_' + viewDate; }
function dailyState() { try { return JSON.parse(localStorage.getItem(dkey())) || {}; } catch (e) { return {}; } }
function setDaily(k, v) { const s = dailyState(); if (v) s[k] = 1; else delete s[k]; localStorage.setItem(dkey(), JSON.stringify(s)); }

/* ── dates (all derived from viewDate, so the picker can time-travel) ── */
function parseDate(s) { return new Date(s + 'T00:00:00'); }
function daysBetween(a, b) { return Math.round((parseDate(b) - parseDate(a)) / 86400000); }
function fmtLong(s) { return parseDate(s).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' }); }
function inSession() { return viewDate >= SCHOOL_START && viewDate <= SCHOOL_END; }
function isSummer() { return viewDate < SUMMER_END; }
function weekNumber() { const d = daysBetween(SCHOOL_START, viewDate); return d < 0 ? 0 : Math.floor(d / 7) + 1; }
function isWeekend(date) { const wd = parseDate(date).getDay(); return wd === 0 || wd === 6; }
function holidayLabel(date) {
  for (const h of NO_SCHOOL) {
    if (h.d && h.d === date) return h.label;
    if (h.from && date >= h.from && date <= h.to) return h.label;
  }
  return null;
}
/* What kind of day is viewDate? Drives what Today shows.
   weekend / holiday → rest (no work); school → full gallery; july → reading +
   Khan math only; off → empty (August before school, or after the year ends). */
function dayType() {
  if (isWeekend(viewDate)) return { type: 'weekend' };
  const hol = holidayLabel(viewDate);
  if (hol) return { type: 'holiday', label: hol };
  if (inSession()) return { type: 'school' };
  if (viewDate >= '2026-07-01' && viewDate <= '2026-07-31') return { type: 'july' };
  return { type: 'off' };
}

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

/* static, self-hosted photo band (curated real images — no random/AI stock) */
function photoBand(src) {
  return src ? `<div class="today-photo"><img src="${src}" alt=""></div>` : '';
}
/* one big whitish serif initial — spans the tile behind the content */
function ghostLetter(ch) {
  const c = (ch || '').trim()[0];
  return c ? `<span class="tile-ghost" aria-hidden="true">${esc(c.toUpperCase())}</span>` : '';
}
/* A photo-less tile gets one of three treatments — plain · faint arcs · ghost
   letter. They're CYCLED across the no-photo tiles (so neighbours always differ
   and there's a guaranteed mix), with a day-seeded offset so which tile gets
   which changes daily. Photos, when present, take precedence. */
const FILLS = ['plain', 'arcs', 'letter'];
const FILL_ORDER = ['thematic', 'reading', 'math', 'clep', 'weekly', 'portfolio'];
let FILL_PLAN = {};
function computeFillPlan() {
  const noPhoto = FILL_ORDER.filter(k => !PHOTO_PLAN.has(k));
  const off = dayHash(viewDate);
  FILL_PLAN = {};
  noPhoto.forEach((k, i) => { FILL_PLAN[k] = FILLS[(i + off) % FILLS.length]; });
}
function tileFill(key, ghostChar) {
  const t = FILL_PLAN[key] || 'plain';
  if (t === 'arcs') return `<span class="tile-arcs${dayHash(key + viewDate) % 2 ? ' alt' : ''}" aria-hidden="true"></span>`;
  if (t === 'letter') return ghostLetter(ghostChar);
  return '';   // plain — just the solid color
}
/* rotating photo picker: a daily tile with a `photos` array cycles through them,
   advancing to a fresh photo each time it's marked done */
function picIndex(key, len) { return ((parseInt(localStorage.getItem('homeskewl_pic_' + key) || '0', 10) % len) + len) % len; }
function bumpPic(key, len) { const n = (picIndex(key, len) + 1) % len; localStorage.setItem('homeskewl_pic_' + key, n); return n; }
function tilePhoto(item) { return item.photos ? item.photos[picIndex(item.key, item.photos.length)] : item.photo; }

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
  const c = colorOf('Science');

  if (!card) {
    return `<a class="card tile tex-c today-tile today-lesson-tile" href="unit.html?u=${u.id}" style="--tile:${c.tile}; --card-accent:${c.bg};">
      <span class="tile-dot"></span><span class="tile-side">DONE</span>
      <div class="tile-eyebrow">Your unit</div>
      <h2 class="tile-title">🎉 You finished ${esc(u.title)}</h2>
      <p class="tile-desc">Every lesson is done — head in to review your work or start what's next.</p>
      <div class="tile-foot"><span class="tile-cta">Open the unit →</span></div>
    </a>`;
  }

  const eyebrow = inSession() ? `Today's lesson · ${esc(u.short || u.title)}` : `Starts Mon, Aug 31 · ${esc(u.short || u.title)}`;
  const cta = !inSession() ? 'Preview the unit →' : (done > 0 ? 'Continue the unit →' : 'Start the unit →');

  return `<a class="card tile tex-a today-tile today-lesson-tile" href="unit.html?u=${u.id}" style="--tile:${c.tile}; --card-accent:${c.bg};">
    <span class="tile-dot"></span><span class="tile-side">THEMATIC UNIT</span>
    ${PHOTO_PLAN.has('thematic') ? photoBand(u.image) : tileFill('thematic', u.short || u.title)}
    <div class="tile-eyebrow">${eyebrow}</div>
    <h2 class="tile-title">${esc(card.title)}</h2>
    <div class="tile-meta">
      <span class="subject-badge" style="background:${c.bg}; color:#fff;">${esc(card.subject)}</span>
      <span>~${card.minutes} min</span>
      <span>${esc(card.standards || '')}</span>
    </div>
    <div class="tile-foot">
      <span class="tile-cta">${cta}</span>
      ${inSession() ? `<span class="tile-prog">${done} of ${total} lessons done</span>` : '<span class="tile-prog">Take a peek before the year starts</span>'}
    </div>
    ${inSession() ? `<div class="tile-bar"><div style="width:${Math.round(done / total * 100)}%; background:${c.bg};"></div></div>` : ''}
  </a>`;
}

function dailyTile(item, i) {
  if (isSummer() && item.summer) item = { ...item, ...item.summer };
  const c = item.tile ? { tile: item.tile, bg: item.accent } : colorOf(item.subject);
  const isDone = !!dailyState()[item.key];
  // Self-paced anchors drop the 30-min timer once school is in session (Aug 31+),
  // so he works through the unit with no time constraint. Summer keeps the timer.
  const timed = !(item.noTimerInSession && inSession());
  // Plain text CTA (matches the CLEP/Thematic "Start →"), not a pill button.
  const linkHtml = item.link
    ? `<a class="tile-cta daily-cta" href="${item.link}"${item.internal ? '' : ' target="_blank" rel="noopener"'}>${esc(item.linkLabel || 'Open')} ${item.internal ? '→' : '↗'}</a>`
    : '';
  const eyebrow = timed ? `${item.minutes} min a day` : 'Self-paced · take your time';
  const timerHtml = timed
    ? `<div class="timer" data-min="${item.minutes}">
      <div><div class="timer-label">Focus timer</div><div class="timer-display">${item.minutes}:00</div></div>
      <div class="timer-btns">
        <button class="btn btn-primary timer-start" type="button">▶ Start</button>
        <button class="btn btn-ghost timer-reset" type="button">↻ Reset</button>
      </div>
    </div>`
    : '';
  return `<div class="card tile ${TEX[i % TEX.length]} ${i % 2 ? 'dots-blue' : 'dots-pink'} today-tile daily-card${isDone ? ' is-done' : ''}"
      data-key="${item.key}" style="--tile:${c.tile}; --card-accent:${c.bg};">
    <span class="tile-dot"></span><span class="tile-side">${esc(item.side || 'DAILY')}</span>
    ${PHOTO_PLAN.has(item.key) ? photoBand(tilePhoto(item)) : tileFill(item.key, item.ghost)}
    <div class="tile-eyebrow">${eyebrow}</div>
    <h2 class="tile-title">${esc(item.title)}</h2>
    <p class="tile-desc">${esc(item.note)}</p>
    ${timerHtml}
    <div class="daily-actions">${linkHtml}
      <button class="btn daily-done pill-sm${isDone ? ' is-checked' : ''}" type="button">✓ Done</button>
    </div>
  </div>`;
}

/* The College Credit (CLEP) elective — recipe B: a heavy sans title + a serif
   line as the graphic. Brown, so it reads distinctly from teal/gold. */
function clepTile() {
  const u = clepUnit();
  if (!u) return '';
  const done = unitDoneCount(u), total = u.cards.length;
  const cta = done > 0 ? 'Continue →' : 'Start →';
  // Big sans title stays short — drop the "(CLEP Western Civ I · Module N)" tag
  // (the eyebrow already names the module).
  const shortTitle = (u.title || '').replace(/\s*\(.*\)\s*$/, '');
  return `<a class="card tile tex-c today-tile today-clep-tile" href="unit.html?u=${u.id}" style="--tile:${CLEP_TILE}; --card-accent:${CLEP_ACCENT};">
    <span class="tile-dot"></span><span class="tile-side">CLEP</span>
    ${PHOTO_PLAN.has('clep') && u.image ? photoBand(u.image) : tileFill('clep', 'C')}
    <div class="tile-eyebrow">${esc(u.short || 'Western Civ')}</div>
    <h2 class="tile-title tile-title-sans">${esc(shortTitle)}</h2>
    ${u.eq ? `<p class="tile-display">${esc(u.eq)}</p>` : ''}
    <div class="tile-foot">
      <span class="tile-cta">${cta}</span>
      <span class="tile-prog">${done} of ${total} done</span>
    </div>
  </a>`;
}

function weeklyTile() {
  const c = colorOf('Self-Study');
  return `<a class="card tile tex-b today-tile" href="this-week.html" style="--tile:${c.tile}; --card-accent:${c.bg};">
    <span class="tile-dot"></span><span class="tile-side">THIS WEEK</span>
    ${tileFill('weekly', 'W')}
    <div class="tile-eyebrow">Pick Monday · work on it all week</div>
    <h2 class="tile-title">Self-Study, or a Rabbit Hole</h2>
    <p class="tile-desc">Choose your track on Monday, then come here each day to work on it — go deep on one thing, or chase something weird and make stuff.</p>
    <div class="tile-foot"><span class="tile-cta">Open this week's work →</span></div>
  </a>`;
}

function portfolioTile() {
  return `<a class="card tile black tex-d today-tile today-wide" href="portfolio.html" style="--card-accent:var(--coral);">
    <span class="tile-dot"></span><span class="tile-side">SEE YOUR WORK</span>
    ${tileFill('portfolio', 'P')}
    <div class="tile-eyebrow">Everything you've made</div>
    <h2 class="tile-title">See your work</h2>
    <p class="tile-desc">Your answers, quiz scores, and vocabulary — all in one place, unit by unit.</p>
    <div class="tile-foot"><span class="tile-cta">Open your portfolio →</span></div>
  </a>`;
}

function schoolFlag() {
  if (inSession()) {
    const wk = weekNumber();
    return `<div class="school-flag in-session">📚 School year 2026–27${wk ? ` · Week ${wk}` : ''}</div>`;
  }
  return '';   // no summer-break countdown banner
}

/* Weekends, holidays/breaks, and pre-school August all show a calm rest screen
   instead of the work gallery. */
function restBlock(dt) {
  let icon = '☀️', head = 'No schoolwork today', sub = '';
  if (dt.type === 'weekend') { icon = '🌿'; head = "It's the weekend"; sub = 'No schoolwork today — go be a kid.'; }
  else if (dt.type === 'holiday') { icon = '🎉'; head = dt.label; sub = 'No school today.'; }
  return `<div class="today-rest">
    <span class="today-rest-icon">${icon}</span>
    <h2 class="today-rest-head">${esc(head)}</h2>
    ${sub ? `<p class="today-rest-sub">${esc(sub)}</p>` : ''}
  </div>`;
}

function datePicker() {
  const previewing = viewDate !== REAL_TODAY;
  return `<div class="today-datepick">
    <button type="button" class="btn btn-ghost" id="pick-day">📅 See another day</button>
    <input type="date" id="day-jump" class="date-jump" value="${viewDate}" aria-label="Pick a day to preview" />
    ${previewing ? `<button type="button" class="btn btn-ghost" id="back-today">↩ Back to today</button>` : ''}
    ${previewing ? `<span class="previewing-badge">Previewing this day</span>` : ''}
  </div>`;
}

function render() {
  const hero = `
    <div class="today-hero">
      <div class="today-date">${fmtLong(viewDate)}</div>
      <h1 class="today-greeting">${greeting()}, Crasher.</h1>
      <p class="today-fact">${esc(getDailyFact(viewDate))}</p>
      ${schoolFlag()}
      ${datePicker()}
    </div>`;

  computePhotoPlan();
  computeFillPlan();
  const dt = dayType();
  let gallery;
  if (dt.type === 'school') {
    gallery = `<div class="today-gallery">
        ${lessonTile()}
        ${DAILY.map(dailyTile).join('')}
        ${clepTile()}
        ${weeklyTile()}
        ${portfolioTile()}
      </div>`;
  } else if (dt.type === 'july') {
    gallery = `<div class="today-gallery">${DAILY.map(dailyTile).join('')}</div>`;
  } else {
    gallery = restBlock(dt);
  }

  document.getElementById('today').innerHTML = hero + gallery;
  wire();
}

/* ── wiring ── */
function setViewDate(d) {
  viewDate = d;
  const url = new URL(location.href);
  if (d === REAL_TODAY) url.searchParams.delete('d'); else url.searchParams.set('d', d);
  history.replaceState(null, '', url);
  render();
}

function wire() {
  const jump = document.getElementById('day-jump');
  const pick = document.getElementById('pick-day');
  if (pick && jump) {
    pick.onclick = () => { try { jump.showPicker(); } catch (e) { jump.focus(); } };
    jump.onchange = (e) => { if (e.target.value) setViewDate(e.target.value); };
  }
  const back = document.getElementById('back-today');
  if (back) back.onclick = () => setViewDate(REAL_TODAY);

  document.querySelectorAll('.daily-card').forEach(cardEl => {
    const key = cardEl.dataset.key;
    const timerEl = cardEl.querySelector('.timer');
    if (timerEl) attachTimer(cardEl, parseInt(timerEl.dataset.min, 10));
    cardEl.querySelector('.daily-done').onclick = (e) => {
      e.preventDefault(); e.stopPropagation();
      const nowDone = !dailyState()[key];
      setDaily(key, nowDone);
      cardEl.classList.toggle('is-done', nowDone);
      cardEl.querySelector('.daily-done').classList.toggle('is-checked', nowDone);
      if (nowDone) {
        showToast('Nice — checked off for today ✓');
        const item = DAILY.find(d => d.key === key);
        const img = cardEl.querySelector('.today-photo img');
        if (item && item.photos && img) img.src = item.photos[bumpPic(key, item.photos.length)];
      }
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
