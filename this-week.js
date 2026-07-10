/**
 * this-week.js — the weekly Self-Study vs. Rabbit Hole choice.
 * The pick is remembered per week (Monday's date) in localStorage.
 * Submissions post Done records to Airtable, tagged by Subject.
 */

const TODAY = new Date().toISOString().split('T')[0];

function mondayOf(dateStr) {
  const d = new Date(dateStr + 'T00:00:00');
  const day = d.getDay();                 // 0 Sun … 6 Sat
  const diff = (day === 0 ? -6 : 1) - day; // back to Monday
  d.setDate(d.getDate() + diff);
  return d.toISOString().split('T')[0];
}
const WEEK_KEY = `track_${mondayOf(TODAY)}`;

function showToast(msg) {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.classList.add('show');
  setTimeout(() => el.classList.remove('show'), 3000);
}

async function saveToAirtable(itemName, subject, unit, notes) {
  const url = `${CONFIG.apiBase}/${encodeURIComponent(TABLES.todos)}`;
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      fields: {
        'Item name': itemName,
        Subject: subject,
        Unit: unit,
        Status: 'Done',
        'Scheduled date': TODAY,
        'Completion date': TODAY,
        'Student notes': notes,
        'Days carried': 0,
      },
      typecast: true,
    }),
  });
  const json = await res.json();
  if (!res.ok) throw new Error(json.error?.message || 'Save failed');
  return json;
}

/* ---- Self-study topic springboards — ANY topic, just sparks ---- */
const SPRINGBOARDS = [
  'How something works (engines, batteries, the internet)',
  'An animal or creature you love',
  'A moment in history — any era, anywhere',
  'A sport, game, or how it works',
  'Space & the universe',
  'A country or culture',
  'A mystery or unsolved question',
  'How something is made',
  'A person who changed the world',
  'Anything you\'re curious about',
];

function renderChooser() {
  const chosen = localStorage.getItem(WEEK_KEY);
  document.getElementById('chooser').innerHTML = `
    <div class="track-grid">
      <div class="track-choice selfstudy ${chosen === 'selfstudy' ? 'chosen' : ''}" onclick="pickTrack('selfstudy')">
        <span class="ribbon">Go Deep · Go Deep · Go Deep</span>
        <div class="track-eyebrow">Track A</div>
        <div class="track-name serif">Self-Study</div>
        <div class="track-desc">Pick one thing, dig in all week, and report what you found. You choose the topic and how you show it.</div>
      </div>
      <div class="track-choice rabbithole ${chosen === 'rabbithole' ? 'chosen' : ''}" onclick="pickTrack('rabbithole')">
        <span class="ribbon">Chase It · Chase It · Chase It</span>
        <div class="track-eyebrow">Track B</div>
        <div class="track-name serif">Rabbit Holes</div>
        <div class="track-desc">No topic, no rubric. Find weird stuff, make something, share something. Follow your curiosity.</div>
      </div>
    </div>
    ${chosen ? `<p style="text-align:center; margin:-8px 0 20px;"><a href="#" onclick="clearTrack(event)" style="font-size:0.82rem; color:var(--text-dim); text-decoration:underline;">change my pick for this week</a></p>` : ''}
  `;
}

window.pickTrack = function (track) {
  localStorage.setItem(WEEK_KEY, track);
  renderChooser();
  renderTrack(track);
  window.scrollTo({ top: document.getElementById('track-content').offsetTop - 80, behavior: 'smooth' });
};

window.clearTrack = function (e) {
  e.preventDefault();
  localStorage.removeItem(WEEK_KEY);
  renderChooser();
  document.getElementById('track-content').innerHTML = '';
};

function card(inner) { return `<div class="card" style="cursor:default;">${inner}</div>`; }

function renderTrack(track) {
  const wrap = document.getElementById('track-content');
  if (track === 'selfstudy') {
    wrap.innerHTML = `
      <div class="section-label">Self-Study · this week</div>
      ${card(`
        <div class="rh-duration">Step 1 · Monday</div>
        <div class="todo-title" style="margin-bottom:8px;">Pick your topic</div>
        <div class="rh-prompt">What do you actually want to understand this week? Steal an idea below or bring your own — the only rule is <em>you</em> pick it.</div>
        <div style="display:flex; flex-wrap:wrap; gap:8px; margin-bottom:14px;">
          ${SPRINGBOARDS.map(s => `<button class="btn btn-ghost" style="font-size:0.78rem; padding:6px 12px;" onclick="fillTopic('${s.replace(/'/g, "\\'")}')">${s}</button>`).join('')}
        </div>
        <input type="text" id="ss-topic" class="rh-input" style="min-height:auto;" placeholder="My topic for this week is…" />
        <button class="btn btn-success" id="ss-topic-btn" onclick="submitTopic()">Lock in my topic ✓</button>
        <p id="ss-topic-confirm" style="display:none; margin-top:10px; color:var(--success); font-weight:700;">Locked in. Now go learn about it. ✓</p>
      `)}
      ${card(`
        <div class="rh-duration">Step 2 · Midweek</div>
        <div class="todo-title" style="margin-bottom:8px;">Explore & take notes</div>
        <div class="rh-prompt">Watch, read, build, ask — whatever gets you into it. Drop what you\'re finding here as you go (links, notes, questions). You can submit this more than once.</div>
        <textarea id="ss-notes" class="rh-input" placeholder="What I\'m finding, links, questions I still have…"></textarea>
        <button class="btn btn-success" id="ss-notes-btn" onclick="submitNotes()">Save my progress ↑</button>
        <p id="ss-notes-confirm" style="display:none; margin-top:10px; color:var(--success); font-weight:700;">Saved. Keep going. ✓</p>
      `)}
      ${card(`
        <div class="rh-duration">Step 3 · Thursday</div>
        <div class="todo-title" style="margin-bottom:8px;">Show what you learned</div>
        <div class="rh-prompt">Teach it, write it, draw it, record it, slideshow it — your choice. Then drop it (or where it lives) here.</div>
        <textarea id="ss-share" class="rh-input" placeholder="What I learned + how I showed it (link, or describe it)…"></textarea>
        <button class="btn btn-success" id="ss-share-btn" onclick="submitShare()">Turn it in ✓</button>
        <p id="ss-share-confirm" style="display:none; margin-top:10px; color:var(--success); font-weight:700;">Nice work. That\'s a wrap on the week. ✓</p>
      `)}
    `;
  } else {
    wrap.innerHTML = `
      <div class="section-label">Rabbit Holes · this week</div>
      ${card(`
        <div class="rh-duration">Anytime · ~15–20 min</div>
        <div class="todo-title" style="margin-bottom:8px;">Make something</div>
        <div class="rh-prompt">A video, drawing, voice memo, song, meme, diagram, contraption — anything. No topic. Just make it and tell us where it is.</div>
        <textarea id="rh-make" class="rh-input" placeholder="What I made + where it lives…"></textarea>
        <button class="btn btn-success" id="rh-make-btn" onclick="submitRH('rh-make','Rabbit Hole — made something')">Drop it here ↑</button>
        <p id="rh-make-confirm" style="display:none; margin-top:10px; color:var(--success); font-weight:700;">Love it. ✓</p>
      `)}
      ${card(`
        <div class="rh-duration">Anytime · ~2–5 min</div>
        <div class="todo-title" style="margin-bottom:8px;">Share something weird</div>
        <div class="rh-prompt">Find something interesting on the internet this week — a video, article, photo, subreddit, Wikipedia deep-dive — and drop the link with one sentence on why it got you.</div>
        <textarea id="rh-weird" class="rh-input" placeholder="Link + why it\'s cool…"></textarea>
        <button class="btn btn-success" id="rh-weird-btn" onclick="submitRH('rh-weird','Rabbit Hole — shared something weird')">Share it ↑</button>
        <p id="rh-weird-confirm" style="display:none; margin-top:10px; color:var(--success); font-weight:700;">Saved. ✓</p>
      `)}
    `;
  }
}

window.fillTopic = function (t) {
  const input = document.getElementById('ss-topic');
  input.value = t.startsWith('Anything') ? '' : t;
  input.focus();
};

async function submitOne(textId, btnId, confirmId, itemName, subject, unit) {
  const val = document.getElementById(textId)?.value.trim();
  if (!val) { showToast('Add something first!'); return; }
  const btn = document.getElementById(btnId);
  const original = btn.textContent;
  btn.disabled = true; btn.textContent = 'Saving…';
  try {
    await saveToAirtable(itemName, subject, unit, val);
    document.getElementById(confirmId).style.display = 'block';
    btn.textContent = 'Saved ✓';
    showToast('Saved! ✓');
  } catch (e) {
    console.error(e);
    btn.disabled = false; btn.textContent = original;
    showToast('Error saving — check your connection.');
  }
}

window.submitTopic = () => submitOne('ss-topic', 'ss-topic-btn', 'ss-topic-confirm', 'Self-Study — picked topic', 'Self-Study', 'Self-Study');
window.submitNotes = () => {
  // notes are re-submittable: reset button state each time
  const btn = document.getElementById('ss-notes-btn'); btn.disabled = false;
  submitOne('ss-notes', 'ss-notes-btn', 'ss-notes-confirm', 'Self-Study — progress notes', 'Self-Study', 'Self-Study')
    .then(() => { document.getElementById('ss-notes').value = ''; });
};
window.submitShare = () => submitOne('ss-share', 'ss-share-btn', 'ss-share-confirm', 'Self-Study — shared what I learned', 'Self-Study', 'Self-Study');
window.submitRH = (textId, itemName) => {
  const map = { 'rh-make': ['rh-make-btn', 'rh-make-confirm'], 'rh-weird': ['rh-weird-btn', 'rh-weird-confirm'] };
  const [btnId, confirmId] = map[textId];
  submitOne(textId, btnId, confirmId, itemName, 'Rabbit Hole', 'Rabbit Hole — Your Brain This Week');
};

renderChooser();
const existing = localStorage.getItem(WEEK_KEY);
if (existing) renderTrack(existing);
