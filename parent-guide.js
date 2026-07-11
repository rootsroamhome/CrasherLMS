/**
 * parent-guide.js — the parent's guide to the current unit.
 *
 * Units-driven (no Airtable, not week-based). For the unit Crasher is in (or
 * whichever you pick), it shows: a preview of the unit, where he might get
 * stuck, a Small/Medium/Large "do something real" pick, and links to the
 * unit's readings/videos so a parent can refresh their own memory.
 */

const HS_UNITS = window.HS_UNITS || [];

function unitState(id) { try { return JSON.parse(localStorage.getItem('homeskewl_unit_' + id)) || {}; } catch (e) { return {}; } }
function doneCount(u) { const d = unitState(u.id).done || {}; return u.cards.filter(c => d[c.id]).length; }
function activeUnit() { return HS_UNITS.find(u => doneCount(u) < u.cards.length) || HS_UNITS[HS_UNITS.length - 1]; }
function esc(s) { return (s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
function colorOf(subject) { const m = typeof SUBJECT_COLORS !== 'undefined' ? SUBJECT_COLORS : {}; return m[subject] || { bg: '#17A0AE', tile: '#8FD6E1', accent: '#17A0AE' }; }

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

function switcher(active) {
  if (HS_UNITS.length < 2) return '';
  return `<div class="u-switch pg-switch">${HS_UNITS.map(u =>
    `<a class="u-switch-link${u.id === active.id ? ' on' : ''}" href="parent-guide.html?u=${u.id}">${esc(u.short || u.title)}</a>`
  ).join('')}</div>`;
}

function previewCard(u) {
  const c = colorOf('Science');
  const done = doneCount(u), total = u.cards.length;
  const where = done === 0 ? 'Not started yet' : done === total ? 'Finished' : `On lesson ${done + 1} of ${total}`;
  return `<div class="pg-preview" style="--tile:${c.tile};">
    ${u.image ? `<div class="pg-photo"><img src="${esc(u.image)}" alt=""></div>` : ''}
    <div class="pg-preview-body">
      <div class="pg-eyebrow">The unit he's in · ${where}</div>
      <div class="pg-title">${esc(u.title)}</div>
      <p class="pg-eq">${esc(u.eq)}</p>
      <a class="btn btn-primary" href="unit.html?u=${u.id}" target="_blank" rel="noopener">Preview the whole unit ↗</a>
    </div>
  </div>`;
}

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

function load() {
  const root = document.getElementById('content');
  if (!HS_UNITS.length) { root.innerHTML = '<p class="empty-msg">No units loaded.</p>'; return; }
  const pick = new URLSearchParams(location.search).get('u');
  const u = HS_UNITS.find(x => x.id === pick) || activeUnit();

  root.innerHTML =
    switcher(u) +
    previewCard(u) +
    hotspots(u) +
    activities(u) +
    resourcesSection(u);
}

load();
