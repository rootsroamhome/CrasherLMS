/**
 * parent-guide.js — the parent's guide, anchored to where he is right now.
 *
 * Not week-based. The top is a "Right now" snapshot: the unit he's in for each
 * track (Interdisciplinary / Math / CLEP), the next lesson, and the first thing
 * to watch for. Tap one (or any unit in the picker) to open its full guide:
 * where he might get stuck, a Small/Medium/Large "do something real" pick, and
 * links to the unit's readings/videos so a parent can refresh their own memory.
 */

const HS_UNITS = window.HS_UNITS || [];

let selectedUnit = null;   // which unit's full guide is open

function unitState(id) { try { return JSON.parse(localStorage.getItem('homeskewl_unit_' + id)) || {}; } catch (e) { return {}; } }
function doneCount(u) { const d = unitState(u.id).done || {}; return u.cards.filter(c => d[c.id]).length; }
function esc(s) { return (s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }

const TRACKS = [
  { key: 'core', label: 'Interdisciplinary', accent: '#17A0AE', soft: '#8FD6E1', filter: u => !u.track },
  { key: 'math', label: 'Math', accent: '#D19A1F', soft: '#F4CE5E', filter: u => u.track === 'math' },
  { key: 'clep', label: 'CLEP', accent: '#E07A3E', soft: '#F0B98C', filter: u => u.track === 'clep' },
];
function trackUnits(t) { return HS_UNITS.filter(t.filter); }
function trackOf(u) { return TRACKS.find(t => t.filter(u)) || TRACKS[0]; }
function activeIn(units) { return units.find(u => doneCount(u) < u.cards.length) || units[units.length - 1]; }

const TIER = {
  Small:  { emoji: '🏠', blurb: 'At home · things you have' },
  Medium: { emoji: '🚗', blurb: 'Around the valley · small cost' },
  Large:  { emoji: '🧭', blurb: 'A bigger outing or project' },
};

/* Pull the unit's readings + videos so a parent can brush up. */
function resources(u) {
  const out = [];
  const seen = new Set();
  u.cards.forEach(c => c.blocks.forEach(b => {
    if (b.type === 'read' && b.url && /^reader\.html/.test(b.url)) {
      if (!seen.has(b.url)) { seen.add(b.url); out.push({ kind: 'Reading', label: b.title || 'Reading', href: b.url }); }
    }
    if (b.type === 'video') {
      const href = b.yt ? `https://www.youtube.com/watch?v=${b.yt}` : b.url;
      if (href && !seen.has(href)) { seen.add(href); out.push({ kind: 'Video', label: b.title || 'Video', href }); }
    }
  }));
  return out;
}

function whereLine(u) {
  const done = doneCount(u), total = u.cards.length;
  return done === 0 ? 'Ready to start' : done === total ? 'Finished ✓' : `On lesson ${done + 1} of ${total}`;
}

/* ── "Right now" snapshot: one card per track ── */
function nowCard(t) {
  const units = trackUnits(t);
  if (!units.length) return '';
  const u = activeIn(units);
  const done = doneCount(u), total = u.cards.length;
  const nextCard = u.cards[Math.min(done, total - 1)];
  const nextLine = done === total ? 'All lessons done' : `Next: ${esc(nextCard.title)}`;
  const heads = (u.parent && u.parent.hotspots && u.parent.hotspots[0]) || '';
  return `<div class="pg-now ${t.key}${u.id === selectedUnit ? ' on' : ''}" data-uid="${u.id}" role="button" tabindex="0">
    <span class="pg-now-track">${esc(t.label)}</span>
    <span class="pg-now-where">${esc(whereLine(u))}</span>
    <span class="pg-now-unit">${esc(u.title)}</span>
    <span class="pg-now-next">${nextLine}</span>
    ${heads ? `<div class="pg-now-heads"><span class="pg-now-heads-label">⚠️ Heads up</span><p>${heads}</p></div>` : ''}
    <span class="pg-now-cta">Open the guide →</span>
  </div>`;
}

/* ── the "open any unit" picker (grouped pills) ── */
function picker() {
  return `<div class="pg-picker">${TRACKS.map(t => {
    const units = trackUnits(t);
    if (!units.length) return '';
    const pills = units.map(u => {
      const name = (u.short || u.title).replace(/^[^·]*·\s*/, '');
      return `<button type="button" class="u-switch-link pf-pill${u.id === selectedUnit ? ' on' : ''}" data-uid="${u.id}" title="${esc(u.short || u.title)}">${esc(name)}</button>`;
    }).join('');
    return `<div class="pg-pick-group u-switch-group ${t.key}"><span class="pg-pick-label">${esc(t.label)}</span><div class="pg-pick-pills">${pills}</div></div>`;
  }).join('')}</div>`;
}

/* ── one unit's full guide ── */
function hotspots(u) {
  if (!u.parent || !u.parent.hotspots) return '';
  return sec('Where he might get stuck', '⚠️',
    `<ul class="pg-hotspots">${u.parent.hotspots.map(h => `<li>${h}</li>`).join('')}</ul>`);
}
function activities(u) {
  if (!u.parent || !u.parent.activities) return '';
  const cards = u.parent.activities.map(a => {
    const t = TIER[a.tier] || { emoji: '•', blurb: '' };
    return `<div class="pg-act">
      <div class="pg-act-head"><span class="pg-act-emoji">${t.emoji}</span>
        <span class="pg-tier">${esc(a.tier)}</span>
        <span class="pg-act-blurb">${esc(t.blurb)}</span></div>
      <div class="pg-act-title">${esc(a.title)}</div>
      <p class="pg-act-detail">${esc(a.detail)}</p>
      <div class="pg-act-meta"><span>💵 ${esc(a.cost)}</span><span>⏱️ ${esc(a.time)}</span></div>
    </div>`;
  }).join('');
  return sec('Do something real — pick a level', '🙌', `<div class="pg-acts">${cards}</div>`);
}
function resourcesSection(u) {
  const res = resources(u);
  if (!res.length) return '';
  return sec('Refresh your own memory', '📚',
    `<div class="pg-res">${res.map(r =>
      `<a class="pg-res-link" href="${esc(r.href)}" target="_blank" rel="noopener"><span class="pg-res-kind">${esc(r.kind)}</span>${esc(r.label)} ↗</a>`
    ).join('')}</div>`);
}
function sec(title, icon, body) {
  return `<div class="pg-section"><div class="section-label">${icon} ${title}</div>${body}</div>`;
}

function guide(u) {
  if (!u) return '';
  const t = trackOf(u);
  return `<div class="pg-guide" id="pg-guide">
    <div class="pg-preview" style="--tile:${t.soft};">
      ${u.image ? `<div class="pg-photo"><img src="${esc(u.image)}" alt=""></div>` : ''}
      <div class="pg-preview-body">
        <div class="pg-eyebrow"><span class="pg-guide-track" style="color:${t.accent};">${esc(t.label)}</span> · ${esc(whereLine(u))}</div>
        <div class="pg-title">${esc(u.title)}</div>
        <p class="pg-eq">${esc(u.eq)}</p>
        <a class="btn btn-primary" href="unit.html?u=${u.id}" target="_blank" rel="noopener">Preview the whole unit ↗</a>
      </div>
    </div>
    ${hotspots(u)}
    ${activities(u)}
    ${resourcesSection(u)}
  </div>`;
}

function render() {
  const root = document.getElementById('content');
  root.innerHTML =
    `<div class="pg-section"><div class="section-label">📍 Right now</div>
      <p class="pf-section-sub">Where he is in each track and the first thing to watch for. Tap one — or any unit below — for its full guide.</p>
      <div class="pg-now-grid">${TRACKS.map(nowCard).join('')}</div></div>` +
    `<div class="pg-section"><div class="section-label">Open any unit's guide</div>${picker()}</div>` +
    `<div id="pg-guide-host">${guide(HS_UNITS.find(u => u.id === selectedUnit))}</div>`;
  wire();
}

function wire() {
  document.querySelectorAll('.pg-now, .pg-picker .pf-pill').forEach(el => {
    const open = () => {
      selectedUnit = el.dataset.uid;
      render();
      const g = document.getElementById('pg-guide');
      if (g) g.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    el.onclick = open;
    el.onkeydown = (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); } };
  });
}

function load() {
  const root = document.getElementById('content');
  if (!HS_UNITS.length) { root.innerHTML = '<p class="empty-msg">No units loaded.</p>'; return; }
  const pick = new URLSearchParams(location.search).get('u');
  selectedUnit = (HS_UNITS.find(u => u.id === pick) || activeIn(trackUnits(TRACKS[0])) || HS_UNITS[0]).id;
  render();
}

load();
