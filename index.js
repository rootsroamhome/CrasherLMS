/**
 * index.js — Daily To-Do List with date navigation
 *
 * Modes:
 *   today  — default; shows all Not Started items with date <= today
 *   past   — read-only view of a specific past date
 *   future — preview of a specific future date (grayed out)
 */

const TODAY = new Date().toISOString().split('T')[0];
let viewDate = TODAY;

// ── Airtable helpers (via proxy) ──

function proxyUrl(table, recordId = '') {
  const base = `${CONFIG.apiBase}/${encodeURIComponent(table)}`;
  return recordId ? `${base}/${recordId}` : base;
}

function fetchWithTimeout(url, opts = {}, ms = 10000) {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), ms);
  return fetch(url, { ...opts, signal: ctrl.signal }).finally(() => clearTimeout(timer));
}

async function airtableGet(table, filterFormula, sort = []) {
  const params = new URLSearchParams();
  if (filterFormula) params.set('filterByFormula', filterFormula);
  sort.forEach((s, i) => {
    params.set(`sort[${i}][field]`, s.field);
    params.set(`sort[${i}][direction]`, s.direction || 'asc');
  });
  const res  = await fetchWithTimeout(`${proxyUrl(table)}?${params}`);
  const json = await res.json();
  if (!res.ok) {
    const msg = (typeof json.error === 'string' ? json.error : json.error?.message) || `HTTP ${res.status}`;
    throw new Error(msg);
  }
  return json.records || [];
}

async function airtablePatch(table, recordId, fields) {
  const res = await fetchWithTimeout(proxyUrl(table, recordId), {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ fields }),
  });
  const json = await res.json();
  if (!res.ok) throw new Error(json.error?.message || 'Save failed');
  return json;
}

function showToast(msg) {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.classList.add('show');
  setTimeout(() => el.classList.remove('show'), 3000);
}

// ── Carry-forward: bump "Days carried" for overdue items (once per day, today only) ──
async function runCarryForward(records) {
  const flagKey = `cf_done_${TODAY}`;
  if (localStorage.getItem(flagKey)) return;
  const overdue = records.filter(r => r.fields['Scheduled date'] && r.fields['Scheduled date'] < TODAY);
  for (const rec of overdue) {
    const current = rec.fields['Days carried'] || 0;
    await airtablePatch(TABLES.todos, rec.id, { 'Days carried': current + 1 });
  }
  localStorage.setItem(flagKey, '1');
}

// ── Date utilities ──

function offsetDate(dateStr, days) {
  const d = new Date(dateStr + 'T00:00:00');
  d.setDate(d.getDate() + days);
  return d.toISOString().split('T')[0];
}

function formatDateLong(dateStr) {
  return new Date(dateStr + 'T00:00:00').toLocaleDateString('en-US', {
    weekday: 'long', month: 'long', day: 'numeric',
  });
}

function getMode() {
  if (viewDate === TODAY) return 'today';
  if (viewDate < TODAY)  return 'past';
  return 'future';
}

// ── Navigation UI ──

function updateNavUI() {
  const mode = getMode();
  const navTitle  = document.getElementById('nav-title');
  const navDate   = document.getElementById('nav-date');
  const backBtn   = document.getElementById('back-today');

  navDate.textContent = formatDateLong(viewDate);

  if (mode === 'today') {
    navTitle.textContent = "Today's List";
    backBtn.style.display = 'none';
  } else if (mode === 'past') {
    navTitle.textContent = 'Past Day';
    backBtn.style.display = 'inline-flex';
  } else {
    navTitle.textContent = 'Coming Up';
    backBtn.style.display = 'inline-flex';
  }
}

document.getElementById('prev-day').addEventListener('click', () => {
  viewDate = offsetDate(viewDate, -1);
  loadTodos();
});

document.getElementById('next-day').addEventListener('click', () => {
  viewDate = offsetDate(viewDate, 1);
  loadTodos();
});

document.getElementById('back-today').addEventListener('click', () => {
  viewDate = TODAY;
  loadTodos();
});

// Jump to any date via the native calendar
const dateJump = document.getElementById('date-jump');
dateJump.addEventListener('change', (e) => {
  if (!e.target.value) return;
  viewDate = e.target.value;
  loadTodos();
});
document.getElementById('pick-date').addEventListener('click', () => {
  dateJump.value = viewDate;
  if (dateJump.showPicker) dateJump.showPicker();
  else dateJump.focus();
});

// ── Silly facts (rotate daily) ──

const SILLY_FACTS = [
  // Animals
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
  'Sea otters have a loose pouch of skin under each arm to store food — and a favorite rock for cracking shells.',
  'Hummingbirds are the only birds that can fly backwards.',
  // Electricity, batteries, engineering, ebikes
  'Alessandro Volta built the first real battery in 1800 out of stacked copper and zinc discs. The word "volt" is named after him.',
  'Electricity zips through a wire almost as fast as light — but the actual electrons drift along slower than a walking snail, a few millimeters per second.',
  'Lithium is the lightest metal on Earth. It\'s so light it floats on water (right before it reacts with it).',
  'The units volt, amp, ohm, watt, and hertz are all named after real scientists: Volta, Ampère, Ohm, Watt, and Hertz.',
  'Around the year 1900, about a third of the cars on U.S. roads were electric. Gasoline didn\'t win the fight until later.',
  'A bicycle is the most energy-efficient way to travel ever invented — mile for mile, a person on a bike beats every animal and every machine.',
  'An ebike or EV motor turns about 85–90% of its energy into motion. A gasoline engine wastes most of its energy as heat and only uses about a quarter of it.',
  'Lightning is about five times hotter than the surface of the Sun — roughly 30,000°C.',
  'Copper is in almost all wiring because, out of the metals we can afford, only silver carries electricity better.',
  'Many ebikes and EVs use "regenerative braking" — when you slow down, the motor spins backward and charges the battery a little.',
  'A lithium battery lasts way longer if you don\'t drain it to 0% or stuff it to 100%. Keeping it in the middle is the secret to battery life.',
  'Thomas Edison and Nikola Tesla fought a "War of the Currents" over whether the world should run on DC or AC electricity. AC won.',
  'The zap you get from a doorknob can be 10,000+ volts — but there\'s almost no current behind it, which is why it only stings.',
  'The chain-driven bicycle was invented in the 1880s — meaning the bike came before the car.',
  'The Eiffel Tower is about 15 cm taller in summer than in winter, because the iron expands when it heats up.',
  'The Wright brothers\' first airplane flight in 1903 was shorter than the wingspan of a modern Boeing 747.',
  'The lead-acid battery was invented in 1859, and that same basic design still starts most gasoline cars today.',
  // Weird laws
  'In Oregon it was illegal to pump your own gas for almost 70 years — the rule finally changed statewide in 2023.',
  'In Switzerland it\'s illegal to own just one guinea pig. They\'re considered social animals, so the law says you have to keep at least two.',
  'In the United Kingdom there\'s a genuine law making it illegal to handle a salmon "in suspicious circumstances."',
  'In Alaska it\'s illegal to wake a sleeping bear to take its photo.',
  'In Arizona there\'s still a law against hunting camels — left over from the 1800s, when the U.S. Army really did use camels in the desert.',
];

function getDailyFact(dateStr) {
  const hash = dateStr.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return SILLY_FACTS[hash % SILLY_FACTS.length];
}

// ── Render ──

function subjectStyle(subject) {
  return SUBJECT_COLORS[subject] || { bg: '#1E293B', accent: '#64748B', label: '#94A3B8' };
}

function buildCard(rec, mode) {
  const f       = rec.fields;
  const subject = f['Subject'] || 'Unknown';
  const colors  = subjectStyle(subject);
  const carried = f['Days carried'] || 0;
  const contentLink = f['Content page link'] || '#';
  const href = contentLink === '#' ? '#' :
    contentLink.startsWith('http')
      ? contentLink
      : `${contentLink}?recordId=${rec.id}`;

  const isDone = f['Status'] === 'Done';

  // Timed items (Read / Khan) get a native focus timer in today mode
  const timerMatch = (f['Item name'] || '').match(/(\d+)\s*minutes/i);
  const timerMin = (mode === 'today' && timerMatch) ? parseInt(timerMatch[1], 10) : null;
  const timerHtml = timerMin ? `
    <div class="timer" data-min="${timerMin}">
      <div>
        <div class="timer-label">Focus timer</div>
        <div class="timer-display">${timerMin}:00</div>
      </div>
      <div class="timer-btns">
        <button class="btn btn-primary timer-start" type="button">▶ Start</button>
        <button class="btn btn-ghost timer-reset" type="button">↻ Reset</button>
      </div>
    </div>` : '';

  const card = document.createElement('div');
  card.className = 'card tile todo-card';
  if (mode === 'today') card.classList.add('card-clickable');
  if (mode === 'past' && isDone) card.classList.add('card-past-done');
  if (mode === 'future') card.classList.add('card-future');
  card.dataset.recordId = rec.id;
  card.style.setProperty('--card-accent', colors.accent);
  card.style.setProperty('--tile', colors.tile || colors.bg);

  const openLessonBtn = href !== '#' ? `
    <a href="${href}" class="btn btn-ghost" onclick="event.stopPropagation()">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
      Open Lesson
    </a>` : '';

  const arrowHtml = href !== '#' ? `
    <a href="${href}" class="circle-arrow" onclick="event.stopPropagation()" aria-label="Open">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
    </a>` : '';

  let actionsHtml = '';
  if (mode === 'today') {
    actionsHtml = `
      <div class="card-actions">
        ${openLessonBtn}
        <button class="btn btn-success mark-done-btn" onclick="event.stopPropagation(); openDoneForm('${rec.id}')">✓ Mark Done</button>
      </div>
      <div class="done-form" id="form-${rec.id}">
        <label for="notes-${rec.id}">Where is your work? (screenshot link, notebook, verbal to parent, etc.)</label>
        <textarea id="notes-${rec.id}" placeholder="e.g. Screenshot in Drive folder / told Mom"></textarea>
        <div class="done-form-row">
          <button class="btn btn-success" onclick="submitDone('${rec.id}')">Submit ✓</button>
          <button class="btn btn-ghost" onclick="closeDoneForm('${rec.id}')">Cancel</button>
        </div>
      </div>`;
  } else if (mode === 'past') {
    const badgeHtml = isDone
      ? `<span class="status-badge done">✓ Done${f['Completion date'] ? ' · ' + formatDateLong(f['Completion date']) : ''}</span>`
      : `<span class="status-badge pending">↩ Carried over</span>`;
    actionsHtml = `<div class="card-actions">${openLessonBtn}${badgeHtml}</div>`;
  } else {
    const allowWorkAhead = subject === 'Science';
    const badge = allowWorkAhead ? '' : `<span class="status-badge preview">Not active yet</span>`;
    actionsHtml = `<div class="card-actions">${openLessonBtn}${badge}</div>`;
  }

  card.innerHTML = `
    <span class="tile-dot"></span>
    <span class="tile-side">${subject}</span>
    <div class="tile-main">
      ${mode === 'today' && carried > 0 ? `<div class="carried-label">↩ Carried over ${carried} day${carried > 1 ? 's' : ''}</div>` : ''}
      <div class="todo-title">${f['Item name'] || 'Untitled'}</div>
      <div class="todo-ican">${f['I Can statement'] || ''}</div>
      ${timerHtml}
      ${actionsHtml}
      <div class="tile-foot">
        <span class="tile-tag">${f['Unit'] || subject}</span>
        ${arrowHtml}
      </div>
    </div>
  `;

  if (timerMin) attachTimer(card, timerMin);

  if (mode === 'today') {
    card.addEventListener('click', (e) => {
      if (e.target.closest('button') || e.target.closest('a') || e.target.closest('.done-form') || e.target.closest('.timer')) return;
      window.location.href = href;
    });
  }

  return card;
}

function attachTimer(card, minutes) {
  const el      = card.querySelector('.timer');
  const display = el.querySelector('.timer-display');
  const startBtn = el.querySelector('.timer-start');
  const resetBtn = el.querySelector('.timer-reset');
  let remaining = minutes * 60;
  let ticking = false;
  let intervalId = null;

  function render() {
    const m = Math.floor(remaining / 60);
    const s = remaining % 60;
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
    ticking = true;
    el.classList.add('running'); el.classList.remove('done');
    startBtn.textContent = '⏸ Pause';
    intervalId = setInterval(() => {
      remaining--;
      render();
      if (remaining <= 0) {
        stop();
        el.classList.add('done');
        display.textContent = 'Done! ⏰';
        startBtn.textContent = '▶ Again';
        showToast('Time\'s up — nice focus! ✓');
      }
    }, 1000);
  }
  startBtn.addEventListener('click', start);
  resetBtn.addEventListener('click', () => {
    stop(); remaining = minutes * 60; el.classList.remove('done');
    render(); startBtn.textContent = '▶ Start';
  });
  render();
}

function openDoneForm(recordId) {
  const form = document.getElementById(`form-${recordId}`);
  if (form) { form.classList.add('open'); form.querySelector('textarea')?.focus(); }
}

function closeDoneForm(recordId) {
  const form = document.getElementById(`form-${recordId}`);
  if (form) form.classList.remove('open');
}

window.openDoneForm  = openDoneForm;
window.closeDoneForm = closeDoneForm;

window.submitDone = async function (recordId) {
  const notes = document.getElementById(`notes-${recordId}`)?.value.trim() || '';
  const card  = document.querySelector(`[data-record-id="${recordId}"]`);
  try {
    await airtablePatch(TABLES.todos, recordId, {
      Status: 'Done',
      'Completion date': TODAY,
      'Student notes': notes,
    });
    card.classList.add('completing');
    setTimeout(() => card.remove(), 500);
    showToast('Marked done! Great work. ✓');
    setTimeout(() => {
      if (document.querySelectorAll('.card[data-record-id]').length === 0) renderEmptyState();
    }, 600);
  } catch (err) {
    console.error(err);
    showToast('Error saving — check your connection.');
  }
};

function renderEmptyState(msg) {
  document.getElementById('todo-list').innerHTML = `
    <div class="empty-state">
      <div class="big-emoji">${msg ? '📅' : '🎉'}</div>
      <h2>${msg || 'All done for today!'}</h2>
      <p>${msg ? '' : 'Nothing left on your list. You crushed it.'}</p>
    </div>
  `;
}

// ── Main ──

async function loadTodos() {
  updateNavUI();
  const container = document.getElementById('todo-list');
  const mode = getMode();

  container.innerHTML = `<div class="loading"><div class="spinner"></div>Loading…</div>`;

  try {
    let records;
    let filter;

    if (mode === 'today') {
      const tomorrow = offsetDate(TODAY, 1);
      filter = `AND({Status}="Not Started", {Scheduled date}<"${tomorrow}")`;
      records = await airtableGet(TABLES.todos, filter, [{ field: 'Scheduled date', direction: 'asc' }]);
      runCarryForward(records).catch(e => console.warn('carry-forward:', e));
    } else {
      filter = `IS_SAME({Scheduled date},"${viewDate}","day")`;
      records = await airtableGet(TABLES.todos, filter, [{ field: 'Scheduled date', direction: 'asc' }]);
    }

    if (records.length === 0) {
      const isSchoolDay = mode !== 'today';
      renderEmptyState(isSchoolDay ? 'Nothing scheduled for this day' : null);
      return;
    }

    container.innerHTML = '';

    if (mode === 'today') {
      const banner = document.createElement('div');
      banner.className = `view-banner today-banner`;
      banner.innerHTML = `<strong>Hey Crasher —</strong> ${getDailyFact(viewDate)}`;
      container.appendChild(banner);
    } else if (mode === 'past') {
      const banner = document.createElement('div');
      banner.className = `view-banner ${mode}`;
      banner.textContent = 'Past date — read-only view';
      container.appendChild(banner);
    } else {
      const banner = document.createElement('div');
      banner.className = `view-banner ${mode}`;
      banner.textContent = 'Preview — this day isn\'t active yet';
      container.appendChild(banner);
    }

    if (mode === 'today') {
      const carried = records.filter(r => r.fields['Scheduled date'] < TODAY);
      const fresh   = records.filter(r => r.fields['Scheduled date'] === TODAY);

      if (carried.length > 0) {
        const lbl = document.createElement('div');
        lbl.className = 'section-label';
        lbl.textContent = 'Carried over';
        container.appendChild(lbl);
        carried.forEach(r => container.appendChild(buildCard(r, 'today')));
      }
      if (fresh.length > 0) {
        if (carried.length > 0) {
          const lbl = document.createElement('div');
          lbl.className = 'section-label';
          lbl.textContent = 'New today';
          container.appendChild(lbl);
        }
        fresh.forEach(r => container.appendChild(buildCard(r, 'today')));
      }
    } else {
      records.forEach(r => container.appendChild(buildCard(r, mode)));
    }

  } catch (err) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="big-emoji">⚠️</div>
        <h2>Couldn't load your list</h2>
        <p>${err.message}</p>
      </div>`;
    console.error(err);
  }
}

loadTodos();
