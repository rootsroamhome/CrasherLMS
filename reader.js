/**
 * reader.js — renders a clean, ad-free reading pane at reader.html?doc=<id>.
 * Content comes from window.READINGS (readings.js). Opens in its own tab from
 * a lesson, so "close tab" returns Crasher straight to where he was.
 */

const docId = new URLSearchParams(location.search).get('doc');
const doc = (window.READINGS || {})[docId];
const root = document.getElementById('reader');

function esc(s) { return (s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }

if (!doc) {
  document.title = 'Reading not found — HomeSkewl';
  root.innerHTML = `
    <div class="empty-state">
      <div class="big-emoji">📄</div>
      <h2>That reading isn't here</h2>
      <p>Close this tab and head back to your lesson.</p>
    </div>`;
} else {
  document.title = doc.title + ' — HomeSkewl';
  root.innerHTML = `
    <article class="reader-doc">
      <div class="reader-eyebrow">${esc(doc.unit ? doc.unit + ' · Reading' : 'Reading')}</div>
      <h1 class="reader-title">${esc(doc.title)}</h1>
      ${doc.subtitle ? `<p class="reader-sub">${esc(doc.subtitle)}</p>` : ''}
      <div class="reader-body">${doc.body}</div>
      <div class="reader-source">Source: ${esc(doc.source || 'HomeSkewl reading')}</div>
      <div class="reader-actions">
        <button class="btn btn-primary" id="reader-print">🖨 Save / print as PDF</button>
        <button class="btn btn-ghost" id="reader-close">Close this reading</button>
      </div>
    </article>`;

  document.getElementById('reader-print').onclick = () => window.print();
  document.getElementById('reader-close').onclick = () => {
    // If opened in its own tab, close it; otherwise fall back to history.
    window.close();
    setTimeout(() => { if (!window.closed) history.back(); }, 120);
  };
}
