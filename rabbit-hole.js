/**
 * rabbit-hole.js — Rabbit Hole / "Your Brain This Week" page
 * Submits each card's content to Airtable via the /api/airtable proxy.
 */

const TODAY = new Date().toISOString().split('T')[0];

function showToast(msg) {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.classList.add('show');
  setTimeout(() => el.classList.remove('show'), 3000);
}

async function saveToAirtable(itemName, notes) {
  const url = `${CONFIG.apiBase}/${encodeURIComponent(TABLES.todos)}`;
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      fields: {
        'Item name':        itemName,
        Subject:            'Rabbit Hole',
        Unit:               'Rabbit Hole — Your Brain This Week',
        Status:             'Done',
        'Scheduled date':   TODAY,
        'Completion date':  TODAY,
        'Student notes':    notes,
        'Days carried':     0,
      },
    }),
  });
  const json = await res.json();
  if (!res.ok) throw new Error(json.error?.message || 'Save failed');
  return json;
}

window.submitRabbitHole = async function (prefix, textareaId, btnId, itemName) {
  const notes = document.getElementById(textareaId)?.value.trim();
  if (!notes) { showToast('Add something before submitting!'); return; }

  const btn = document.getElementById(btnId);
  btn.disabled = true;
  btn.textContent = 'Saving…';

  try {
    await saveToAirtable(itemName, notes);
    btn.textContent = 'Saved ✓';
    document.getElementById(`${prefix}-confirm`).style.display = 'block';
    showToast('Saved! ✓');
  } catch (e) {
    console.error(e);
    btn.disabled = false;
    btn.textContent = 'Drop it here ↑';
    showToast('Error saving — check your connection.');
  }
};

window.submitWeird = async function () {
  const link = document.getElementById('weird-link')?.value.trim();
  const why  = document.getElementById('weird-why')?.value.trim();

  if (!link && !why) { showToast('Add a link or a sentence before submitting!'); return; }

  const notes = [link && `Link: ${link}`, why && `Why: ${why}`].filter(Boolean).join('\n');
  const btn = document.getElementById('weird-btn');
  btn.disabled = true;
  btn.textContent = 'Saving…';

  try {
    await saveToAirtable('Share Something Weird', notes);
    btn.textContent = 'Saved ✓';
    document.getElementById('weird-confirm').style.display = 'block';
    showToast('Saved! ✓');
  } catch (e) {
    console.error(e);
    btn.disabled = false;
    btn.textContent = 'Share it ↑';
    showToast('Error saving — check your connection.');
  }
};
