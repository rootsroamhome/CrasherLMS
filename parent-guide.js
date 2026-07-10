/**
 * parent-guide.js — the week ahead for the parent.
 * Shows the upcoming school week's plan, total time, hot-spots, and the
 * tiered parent activities for whichever unit is active that week.
 */

const TODAY = new Date().toISOString().split('T')[0];

function iso(d) { return d.toISOString().split('T')[0]; }
function addDays(dateStr, n) { const d = new Date(dateStr + 'T00:00:00'); d.setDate(d.getDate() + n); return iso(d); }

// Monday of the *upcoming* school week. On Fri/Sat/Sun, jump to next Monday.
function upcomingMonday() {
  const d = new Date(TODAY + 'T00:00:00');
  const day = d.getDay(); // 0 Sun … 6 Sat
  let delta;
  if (day === 0) delta = 1;            // Sun -> Mon
  else if (day <= 4) delta = 1 - day;  // Mon–Thu -> this Monday
  else delta = 8 - day;                // Fri/Sat -> next Monday
  d.setDate(d.getDate() + delta);
  return iso(d);
}

const MON = upcomingMonday();
const THU = addDays(MON, 3);
const SUN = addDays(MON, 6);

function fmt(dateStr) { return new Date(dateStr + 'T12:00:00').toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' }); }
function fmtShort(dateStr) { return new Date(dateStr + 'T12:00:00').toLocaleDateString('en-US', { month: 'short', day: 'numeric' }); }

function subjColor(s) { return (SUBJECT_COLORS[s] || { accent: '#1A1A1A', bg: '#1A1A1A', label: '#FBF7EC' }); }

async function airtableGetAll(table, filterFormula) {
  const all = [];
  let offset = null;
  do {
    const p = new URLSearchParams();
    if (filterFormula) p.set('filterByFormula', filterFormula);
    p.set('pageSize', '100');
    if (offset) p.set('offset', offset);
    const res = await fetch(`${CONFIG.apiBase}/${encodeURIComponent(table)}?${p}`);
    const json = await res.json();
    if (!res.ok) throw new Error((typeof json.error === 'string' ? json.error : json.error?.message) || `HTTP ${res.status}`);
    all.push(...(json.records || []));
    offset = json.offset || null;
  } while (offset);
  return all;
}

function activeUnitFor(items) {
  // Prefer the science unit scheduled this week; fall back to nearest upcoming unit by number.
  const sci = items.find(r => r.fields['Subject'] === 'Science' && r.fields['Unit']);
  if (sci) {
    const u = CURRICULUM.units.find(x => x.unit === sci.fields['Unit']);
    if (u) return u;
  }
  return null;
}

function tierMeta(tier) {
  return ({
    Small:  { emoji: '🏠', blurb: '1–2 hrs · home · things you have' },
    Medium: { emoji: '🚗', blurb: 'Half day · around Medford · small cost' },
    Large:  { emoji: '🧭', blurb: 'Bigger project · light travel or a $100+ item' },
  })[tier] || { emoji: '•', blurb: '' };
}

function card(inner, accent) {
  return `<div class="card" style="cursor:default; --card-accent:${accent || 'var(--ink)'};">${inner}</div>`;
}

async function earliestDateFrom(dateStr) {
  const p = new URLSearchParams();
  p.set('filterByFormula', `{Scheduled date} >= "${dateStr}"`);
  p.set('sort[0][field]', 'Scheduled date');
  p.set('sort[0][direction]', 'asc');
  p.set('maxRecords', '1');
  const res = await fetch(`${CONFIG.apiBase}/${encodeURIComponent(TABLES.todos)}?${p}`);
  const json = await res.json();
  return json.records?.[0]?.fields?.['Scheduled date'] || null;
}

let curMon = MON;

function mondayOf(dateStr) {
  const d = new Date(dateStr + 'T00:00:00');
  const dow = d.getDay() || 7;
  d.setDate(d.getDate() - (dow - 1));
  return iso(d);
}

function renderWeekNav() {
  const thu = addDays(curMon, 3);
  document.getElementById('week-nav').innerHTML = `
    <button class="btn btn-ghost" id="prev-week" type="button">
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"/></svg> Prev week
    </button>
    <div class="week-nav-center">
      <div class="week-nav-label">Week of ${fmtShort(curMon)}</div>
      <div class="week-nav-sub">${fmt(curMon)} – ${fmt(thu)}</div>
      <span class="date-jump-wrap">
        <button class="btn btn-today cal-btn" id="pick-week" type="button" style="margin-top:6px;">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
          Pick a week
        </button>
        <input type="date" class="date-jump" id="week-jump" aria-label="Jump to a week" />
      </span>
    </div>
    <button class="btn btn-ghost" id="next-week" type="button">
      Next week <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
    </button>`;

  document.getElementById('prev-week').onclick = () => { curMon = addDays(curMon, -7); load(); };
  document.getElementById('next-week').onclick = () => { curMon = addDays(curMon, 7); load(); };
  const jump = document.getElementById('week-jump');
  jump.onchange = (e) => { if (e.target.value) { curMon = mondayOf(e.target.value); load(); } };
  document.getElementById('pick-week').onclick = () => {
    jump.value = curMon;
    try { jump.showPicker(); }
    catch (e) { jump.focus(); jump.click(); }
  };
}

async function load() {
  const root = document.getElementById('content');
  root.innerHTML = `<div class="loading"><div class="spinner"></div>Loading the week…</div>`;

  try {
    let mon = curMon, preview = false;
    let items = await airtableGetAll(TABLES.todos, `AND({Scheduled date} >= "${mon}", {Scheduled date} <= "${addDays(mon, 6)}")`);

    // Empty week (summer / break): jump forward to the first populated week — once.
    if (items.length === 0 && !load._jumped) {
      const next = await earliestDateFrom(mon);
      if (next) {
        mon = mondayOf(next); curMon = mon; preview = true; load._jumped = true;
        items = await airtableGetAll(TABLES.todos, `AND({Scheduled date} >= "${mon}", {Scheduled date} <= "${addDays(mon, 6)}")`);
      }
    }
    const thu = addDays(mon, 3);

    renderWeekNav();
    document.getElementById('week-range').textContent =
      `${preview ? 'Jumping to the first week — ' : ''}Use the arrows or the calendar to look ahead. What's planned, where to lean in, how to make it real.`;

    root.innerHTML = '';

    if (items.length === 0) {
      root.innerHTML = `<div class="view-banner">Nothing scheduled the week of ${fmtShort(mon)} — likely a break week. Jump to another week above.</div>`;
      return;
    }

    // ---- Time planned ----
    const byDay = {};
    let weekMin = 0;
    for (const r of items) {
      const d = r.fields['Scheduled date'];
      const m = estimateMinutes(r.fields);
      weekMin += m;
      (byDay[d] = byDay[d] || []).push({ name: r.fields['Item name'], subject: r.fields['Subject'], min: m });
    }
    const hrs = Math.round(weekMin / 6) / 10;

    const days = Object.keys(byDay).sort();
    const scheduleRows = days.map(d => {
      const list = byDay[d];
      const dayMin = list.reduce((a, b) => a + b.min, 0);
      const chips = list.map(x => {
        const c = subjColor(x.subject);
        return `<span class="subject-badge" style="background:${c.bg}; color:${c.label}; margin:0;">${x.subject}</span>`;
      });
      // de-dup chips by subject
      const seen = new Set();
      const uniqueChips = list.filter(x => { if (seen.has(x.subject)) return false; seen.add(x.subject); return true; })
        .map(x => { const c = subjColor(x.subject); return `<span class="subject-badge" style="background:${c.bg}; color:${c.label}; margin:0;">${x.subject}</span>`; });
      return `
        <div style="display:flex; justify-content:space-between; align-items:center; gap:12px; padding:11px 0; border-bottom:1.5px solid var(--line);">
          <div style="min-width:0;">
            <div style="font-weight:700; font-size:0.9rem;">${fmt(d)}</div>
            <div style="display:flex; gap:6px; flex-wrap:wrap; margin-top:5px;">${uniqueChips.join('')}</div>
          </div>
          <div style="flex-shrink:0; font-family:var(--serif); font-size:1.1rem; font-weight:600; color:var(--text-muted);">~${Math.round(dayMin / 6) / 10}h</div>
        </div>`;
    }).join('');

    root.appendChild(sectionEl('The week ahead', '🗓️',
      card(`
        <div style="display:flex; justify-content:space-between; align-items:baseline; margin-bottom:6px;">
          <div class="todo-title">${days.length} school days</div>
          <div style="font-family:var(--serif); font-size:1.6rem; font-weight:600;">~${hrs}h planned</div>
        </div>
        <div style="font-size:0.82rem; color:var(--text-dim); margin-bottom:8px;">${CURRICULUM.schoolWeek} · estimates, not a stopwatch</div>
        ${scheduleRows}
      `, 'var(--coral)')
    ));

    // ---- Active unit: big idea + hot-spots + activities ----
    const unit = activeUnitFor(items);
    if (unit) {
      const c = subjColor(unit.subject);

      root.appendChild(sectionEl('What he\'s working on', '🔬',
        card(`
          <span class="subject-badge" style="background:${c.bg}; color:${c.label};">${unit.subject} · ${unit.strand || ''}</span>
          <div class="todo-title" style="margin:6px 0;">${unit.unit}</div>
          <div style="font-size:0.78rem; color:var(--text-dim); font-weight:700; margin-bottom:10px;">${(unit.standards || []).join(' · ')}</div>
          <p style="color:var(--text-muted); line-height:1.6;">${unit.bigIdea}</p>
        `, c.accent)
      ));

      if (unit.hotspots) {
        root.appendChild(sectionEl('Where to lean in', '⚠️',
          card(`<p style="color:var(--text-muted); line-height:1.6;">${unit.hotspots}</p>`, 'var(--mustard)')
        ));
      }

      if (unit.activities && unit.activities.length) {
        const acts = unit.activities.map(a => {
          const t = tierMeta(a.tier);
          return card(`
            <div style="display:flex; align-items:center; gap:8px; margin-bottom:6px;">
              <span style="font-size:1.3rem;">${t.emoji}</span>
              <span class="subject-badge" style="background:var(--ink); color:var(--cream);">${a.tier}</span>
              <span style="font-size:0.76rem; color:var(--text-dim);">${t.blurb}</span>
            </div>
            <div class="todo-title" style="font-size:1.1rem; margin-bottom:6px;">${a.title}</div>
            <p style="color:var(--text-muted); line-height:1.6; margin-bottom:8px;">${a.detail}</p>
            <div style="display:flex; gap:14px; flex-wrap:wrap; font-size:0.8rem; font-weight:700; color:var(--text);">
              <span>💵 ${a.cost}</span><span>⏱️ ${a.time}</span>
            </div>
          `, c.accent);
        }).join('');
        root.appendChild(sectionEl('Do it for real — pick a level', '🙌', acts));
      }
    }

  } catch (e) {
    console.error(e);
    root.innerHTML = `<div class="empty-state"><div class="big-emoji">⚠️</div><h2>Couldn't load the week</h2><p>${e.message}</p></div>`;
  }
}

function sectionEl(title, icon, html) {
  const wrap = document.createElement('div');
  wrap.style.marginBottom = '10px';
  const hdr = document.createElement('div');
  hdr.className = 'section-label';
  hdr.innerHTML = `${icon} ${title}`;
  wrap.appendChild(hdr);
  wrap.insertAdjacentHTML('beforeend', html);
  return wrap;
}

load();
