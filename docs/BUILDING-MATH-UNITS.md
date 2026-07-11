# Building the Math Units (for the rest of the year)

How to build the remaining 7th-grade math units the same way as
`unit-math-proportions.js` (the one that's done). Read [`STYLE-GUIDE.md`](STYLE-GUIDE.md)
first for the visual rules. Math units are **Khan-scaffolded**: our structure + explainer
+ vocab + our own quick checks, with the **videos and practice deep-linked to Khan**
(not embedded). They render **yellow/gold** automatically via `track: 'math'`.

---

## The math arc (Khan 7th-grade sequence)

This is `MATH_PLAN` in `big-picture.js`. Build them in order; each is one `unit-*.js` file.

| # | Unit | Khan unit slug | Oregon domains |
|---|------|----------------|----------------|
| 1 | **Proportional Relationships** ✅ built | `cc-7th-ratio-proportion` | 7.RP |
| 2 | Rates & Percentages | `cc-7th-rates-and-percentages` (verify) | 7.RP, 7.NS |
| 3 | Negative Numbers (add/sub/mul/div rationals) | `cc-7th-negative-numbers-*` (verify) | 7.NS |
| 4 | Expressions & Equations | `cc-7th-expressions-equations` (verify) | 7.AEE |
| 5 | Geometry | `cc-7th-geometry` (verify) | 7.GM |
| 6 | Statistics & Probability | `cc-7th-stats-and-probability` (verify) | 7.DR, 7.RP.B |

⚠️ **Always verify the actual Khan URLs** — don't guess slugs. Use `WebSearch` limited to
`khanacademy.org`, e.g. *"Khan Academy 7th grade rates and percentages practice"*. The
search results give the real `/math/cc-seventh-grade-math/<unit>/<lesson>/{v|e|a}/<slug>`
URLs for videos (`/v/`), practice exercises (`/e/`), and articles (`/a/`). Confirm the
Oregon standard codes against the Big Picture Math checklist / [`YEAR-MAP.md`](YEAR-MAP.md).

---

## Step 1 — copy the template

Copy `unit-math-proportions.js` to `unit-math-<topic>.js`. Keep the top constant that
holds the Khan unit base URL so links stay readable:

```js
const K = 'https://www.khanacademy.org/math/cc-seventh-grade-math/<khan-unit-slug>';
window.HS_UNITS = window.HS_UNITS || [];
window.HS_UNITS.push({
  id: 'math-<topic>',          // stable id, used in URLs + MATH_PLAN
  short: 'Math · <Topic>',     // switcher label
  title: '<Full Title>',
  track: 'math',               // ← REQUIRED. Gives it the gold theme + keeps it out of
                               //   the interdisciplinary "Today's lesson" slot.
  eq: 'A plain-language essential question for the unit.',
  image: 'assets/units/<a-real-photo>.jpg',   // optional; real photo only (see style guide)
  parent: { hotspots: [...], activities: [...] },   // for the Parents guide (see below)
  vocab: { mustOwn: [ {term, def}, ... ], frayer: [ {term, definition, examples, nonexamples, sentence}, ... ] },
  cards: [ ... ],
});
```

---

## Step 2 — the card recipe

~6–8 cards. Each is one ~20–30 min session. Standard shape per lesson:

1. **`hook`** — one surprising, concrete opener. (Math hook = the "aha" trick or a real
   scenario, not a definition.)
2. **`prose`** — the explainer, in plain language, with **more than one worked example**
   (Danielle's rule). Show the numbers. Use a `<table>` or a centered `<blockquote>` for
   the key formula. **Tie in the interdisciplinary units where honest** (see below).
3. **`flashcards`** — pre-teach vocab (renders `vocab.mustOwn`).
4. **`video`** — deep-link to the Khan video: `{ type:'video', title, url: K+'/…/v/…',
   label: '▶ Watch on Khan', focus: 'one thing to watch for' }`. (The `label` field makes
   the button say "Watch on Khan" instead of "Watch on YouTube".)
5. **`quiz`** — 3–4 **multiple-choice** quick checks we wrote (not Khan's). Do these
   BEFORE sending him to Khan practice, so he engages instead of passively watching.
6. **`practice`** — deep-link to the specific Khan exercise(s):
   `{ type:'practice', title:'Now you try — on Khan', note:'…',
      links:[ {url:K+'/…/e/…', label:'<exercise name>'}, … ] }`.
7. **`next`** — one line teasing the next lesson.

The **last card** is reflection: `prose` → `kwlback` → `vocabsort` → `rubric` ("Can you do
each of these?") → a `practice` link to the Khan unit's quizzes/unit test → `done`.

Tag each card with its Oregon standard so completion auto-checks the Big Picture:
`standards: '7.RP.A.2'` (use the **Oregon** codes — `7.NS.A.1`, `7.AEE.B.3`, `7.GM.A.1`,
`7.DR.B.2`, etc., NOT the Common-Core `7.EE`/`7.SP` codes).

### Block types the renderer (`unit.js`) understands
`hook · video {yt embeds | url+label links out} · read {body and/or url→reader} · prose ·
answers {prompts[]} · build · quiz {questions:[{q,options,answer}]} · flashcards · matching
{set[]} · frayer · kwl/kwlback/kwlfinish · vocabsort · rubric {items[]} · practice {url|links[]} ·
deeper · next · done`. KWL uses per-card `klabel`/`wlabel` overrides.

---

## Step 3 — interdisciplinary tie-ins

When a math idea connects to a built unit, say so — in the hook, an example, or a
`<p class="tie-in">🔗 <b>Tie-in — <Unit>:</b> …</p>` callout. Real examples in the
Proportions unit: the **bronze recipe** (Metals, 10 copper : 1 tin — a proportional
relationship with k = 0.1, and a solved "45 lb copper → how much tin?"), and **ebike
range** (miles per charge = a constant of proportionality). Only tie in where it's honest;
don't force it. The `.tie-in` callout is styled to the unit's accent color.

---

## Step 4 — wire it in (5 edits + 1)

1. Add `<script src="unit-math-<topic>.js"></script>` (after the other `unit-*.js`,
   before the page script) in **all five** pages that read `window.HS_UNITS`:
   `unit.html`, `index.html`, `portfolio.html`, `big-picture.html`, `parent-guide.html`.
2. In **`big-picture.js`**, set the matching `MATH_PLAN` row's `id` to your unit's `id`
   (that flips it from "Planned" to a live, linked, progress-tracked row in the gold Math
   column).

That's it. Everything else is automatic because of `track: 'math'`:
- appears in the **Units switcher** (gold "Math" row),
- the **daily Math tile on Today** already points at `unit.html?u=math-proportions` —
  when you want a different math unit to be "today's math," change that link in the `DAILY`
  array in `index.js` (or make it point at the active math unit),
- shows in the **Portfolio** (his answers/quiz scores),
- its standards **auto-check** the Big Picture Math checklist (a `norm()` function bridges
  code formats, so `7.RP.A.2` on a card lights up `7.RP.A.2` on the checklist),
- selectable in the **Parents guide** gold column.

The Parents guide needs a `parent: { hotspots:[…], activities:[…] }` block on the unit
(2–4 misconception hot-spots + a Small/Medium/Large "do something real" set; resources are
auto-collected from the unit's `read`/`video` blocks). Keep activities Rogue-Valley-local
where possible.

---

## Step 5 — verify

- `node --check unit-math-<topic>.js` (and the pages/scripts you touched).
- Load `unit.html?u=math-<topic>`: gold theme, switcher shows it under **Math**, a lesson
  renders its video ("Watch on Khan"), quiz, and practice buttons (open in a new tab).
- Mark a lesson done → its standard ticks on **Big Picture**; his answers show on
  **Portfolio**; the **Math column** shows progress.
- Check it on an **iPad width** (768px).
- Commit + push to `main`; poll `https://homeskewl.netlify.app/unit-math-<topic>.js` for 200.

---

## Quick reference: what a math card looks like

```js
{
  id: 'k-tables', n: 2, title: 'Finding k — from tables & equations',
  subject: 'Math', minutes: 25, standards: '7.RP.A.2',
  blocks: [
    { type: 'hook', text: 'To find k, divide y by x. That\'s the whole move.' },
    { type: 'prose', body: '<p><b>Example 1…</b></p><p><b>Example 2…</b></p><p class="tie-in">🔗 <b>Tie-in — Metals:</b> bronze is 10 copper : 1 tin, so k = 0.1.</p>' },
    { type: 'video', title: 'Constant of proportionality', url: K + '/…/v/…', label: '▶ Watch on Khan', focus: '…' },
    { type: 'quiz', questions: [ { q: '…', options: ['…','…','…','…'], answer: 1 }, /* 2–3 more */ ] },
    { type: 'practice', title: 'Now you try — on Khan', links: [ { url: K + '/…/e/…', label: '…' } ] },
    { type: 'next', text: 'Next: find k straight off a graph.' },
  ],
},
```
