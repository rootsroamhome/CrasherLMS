# Building the Interdisciplinary Units (Units 3–6)

How to build the remaining interdisciplinary units the same way as `unit-rivers.js`
and `unit-metals.js` (the two that are live). Read [`STYLE-GUIDE.md`](STYLE-GUIDE.md)
first for the non-negotiable design/voice/photo rules, and [`YEAR-MAP.md`](YEAR-MAP.md)
for the full arc, essential questions, and standards ownership.

Interdisciplinary units braid **science + world history + ELA** around one essential
question. They render **teal** automatically (no `track` field — that's what makes a unit
"math/gold"). Each is **~16 cards ≈ 16 sessions ≈ ~6 weeks** at 2–3 sessions/week.

> **Pacing note (from YEAR-MAP):** iterate Unit 3+ only after Crasher has run a real week
> inside Units 1–2 — his minutes-per-card, quiz results, and which builds he actually does
> should shape the next build. Don't batch-build all four blind.

---

## The arc — what's left to build

| # | Unit | Essential question | Science | History / SS | ELA arc | Local (Rogue Valley) hook |
|---|------|--------------------|---------|--------------|---------|---------------------------|
| 3 | **Deep Time & the Restless Earth** | The ground remembers everything — who can read what it wrote? | Rock cycle, plate tectonics, geologic time | Geology sets the stage for history (Pompeii/Thera; Mazama in Klamath oral tradition) | Nonfiction: evidence & claims; explanatory writing | Table Rocks, Crater Lake, Cascadia |
| 4 | **A Connected World** | What really travels when strangers trade? | Uneven distribution of resources; germs & ecosystems | Silk Road & Indian Ocean trade; spread of ideas/religions; the Black Death | Research writing — follow one thing that traveled | What the valley imports/exports; pears, timber, chips |
| 5 | **When the Ground Shifts** | We can't stop disasters — so what CAN we do? | Forecasting & designing for natural hazards | Disasters that redirected history; Cascadia 1700 (tribal oral records + Japanese tsunami logs) | **Choice novel** — narrative + theme | Cascadia prep, wildfire smoke season, family quake kit |
| 6 | **Power** (capstone) | Where does power actually come from? | Energy transformation, kinetic/potential, circuits | Who controls energy controls the age: muscle → water → coal → oil → batteries | Persuasive capstone — argue for an energy future, deliver it aloud | Ebike teardown/design; Rogue hydropower — full circle to Unit 1 |

Units 3–6 already have a **`window` date range** in `YEAR_PLAN` (in `big-picture.js`); you
just set their `id` when the file exists (see Step 4).

---

## Step 1 — copy a template

Copy `unit-rivers.js` (or `unit-metals.js`) to `unit-<id>.js`. Use a short, stable `id`
(`deep-time`, `connected-world`, `ground-shifts`, `power`). The object shape:

```js
window.HS_UNITS = window.HS_UNITS || [];
window.HS_UNITS.push({
  id: '<id>',                 // stable; used in URLs (unit.html?u=<id>) + YEAR_PLAN
  short: 'Unit 3 · Deep Time',// switcher label
  title: '<Full Title>',
  // NO `track` field → interdisciplinary → teal theme. (track:'math' is what makes gold.)
  eq: 'The one-sentence essential question, in plain language.',
  image: 'assets/units/<name>.jpg',   // optional; REAL photo only — see Photos below
  parent: {                    // powers the Parents guide
    hotspots: [ '<b>Misconception / thing to watch</b> — …', /* 3–4, may use HTML */ ],
    activities: [
      { tier: 'Small',  title: '…', detail: '…', cost: 'Free', time: '20–30 min' },
      { tier: 'Medium', title: '…', detail: '…', cost: '≈ $5', time: 'Half day' },
      { tier: 'Large',  title: '…', detail: '…', cost: 'Free–$ gas', time: 'Full day' },
    ],
  },
  vocab: {
    mustOwn: [ { term: '…', def: '…' }, /* ~8–12; renders flashcards + vocab self-sort */ ],
    frayer:  [ { term:'…', definition:'…', examples:[…], nonexamples:[…], sentence:'…' }, /* 1–2 */ ],
  },
  cards: [ /* ~16 ordered cards — see Step 2 */ ],
});
```

> ⚠️ **Do NOT add a top-level `const`/`let`/`var`** (a base URL, a helper, anything).
> All `unit-*.js` files load as classic `<script>`s that **share one global scope**, so a
> second file declaring the same name throws `Identifier '…' has already been declared` and
> the unit silently fails to register. `unit-rivers.js`/`unit-metals.js` declare nothing at
> the top level, which is why they're safe. If you truly need a local constant, **wrap the
> whole file body in an IIFE** — `(function () { const K = …; window.HS_UNITS.push({…}); })();`
> — the way the math units do.

---

## Step 2 — the ~16-card recipe

Each card is one ~20–40 min session: `{ id, n, title, subject, minutes, standards, blocks:[…] }`.
The proven interdisciplinary shape (from YEAR-MAP), in order:

1. **Launch** — `hook` (a surprising, concrete fact) → `video` (embedded) → `flashcards`
   (pre-teach vocab) → `kwl` (what he knows / wants to know).
2. **Paired A/B lessons** — the science strand and the history strand, alternating. Each:
   `hook`/`prose` explainer with **more than one concrete example** → a `read` (clean reading,
   see Step 3) → a `quiz` or `answers` check.
3. **Hands-on build(s)** — `build` blocks (a model, a diagram, a stream-table-style demo).
   Optional `photo` field lets him log a photo/link of what he made.
4. **A medium creative project** — `answers` + `build`, tied to the essential question.
5. **An ELA story / writing arc** — a myth, narrative, explanatory, argument, or research
   piece (whichever this unit *owns* per YEAR-MAP), via `read` + `answers`.
6. **A local Rogue Valley connection** — a card that lands the unit in Medford / the Rogue /
   his ebike, honestly (not forced).
7. **Reflection (last card)** — `prose` recap → `kwlback` (shows his day-one KWL) →
   `vocabsort` (self-rate every must-own word) → `rubric` ("Can you do each of these?") →
   `done`.

### Block types the renderer (`unit.js`) understands
`hook · video {yt embed | url+label link-out} · read {inline body and/or url→reader.html?doc=…} ·
answers {prompts[]} · build {title, photo?} · quiz {questions:[{q,options,answer}]} · flashcards ·
matching {set[]} · frayer · kwl / kwlback / kwlfinish (klabel/wlabel overrides) · vocabsort ·
rubric {items[]} · prose · deeper · next · done`

- **Videos** embed with `yt: '<id>'`, or link out with `url` + `label`. `unit.js` forces
  `target=_blank` on every `http` and `reader.html` link, so external stuff opens in a new tab.
- Keep the **map/`#` in-tab jumps** internal; those stay in-page.

---

## Step 3 — readings (never send him to an ad-filled site)

Any substantial reading gets a clean, in-app pane. Add an entry to `readings.js`:

```js
window.READINGS['<doc-id>'] = {
  unit: 'Deep Time', title: '…', subtitle: '…',
  source: 'HomeSkewl reading · … / public-domain source',
  body: `<p>…</p><h2>…</h2><p>…</p>`,
};
```

Then link to it from a card two ways (both used in `unit-rivers.js`):
- A **`read` block**: `{ type:'read', title:'…', source:'clean reading', url:'reader.html?doc=<doc-id>', body:'<p>short in-card version…</p>' }`
- Inline **`.read-links`** anchors inside a body: `<p class="read-links">📄 <a href="reader.html?doc=<doc-id>">Title ↗</a></p>`

Content is written in-house or drawn from **public-domain** sources; name the source in the
entry. It renders ad-free, printable, in the site's style at `reader.html?doc=<doc-id>`.

---

## Step 4 — wire it in (5 script tags + 1 id)

1. Add `<script src="unit-<id>.js"></script>` (after the other `unit-*.js`, before the page
   script) in **all five** pages that read `window.HS_UNITS`:
   `unit.html`, `index.html`, `portfolio.html`, `big-picture.html`, `parent-guide.html`.
   *(The old CLAUDE.md says "three pages" — that's stale; it's five now.)*
2. In **`big-picture.js` → `YEAR_PLAN`**, set the matching row's `id` from `null` to your
   unit's `id` (the `window` date is already there). That flips it from "Planned" to a live,
   linked, progress-tracked row in the teal Interdisciplinary column.

Everything else is automatic once it's in `HS_UNITS`:
- appears in the **Units switcher** and as the active unit on **Today**,
- shows in the **Portfolio** Interdisciplinary column (answers, quiz chart, vocab, KWL),
- its `standards` tags **auto-check Big Picture** and **light up the Portfolio "Standards →
  his work" grid** (see Step 5),
- selectable in the **Parents guide** (from the `parent` block).

---

## Step 5 — standards (they do more than before)

Tag each card with the Oregon code it demonstrates: `standards: '7.ESS2.1'`. A `norm()`
bridge (in `standards.js`) matches format variants, so the NGSS/CCSS forms from YEAR-MAP
also work — `MS-ESS2-1`, `7.ESS2.1`, and `RI.7.1`/`7.RI.1` all normalize to the same key.
**Prefer the exact Oregon code from `standards.js`** to be safe.

Two payoffs, both keyed off the card's `standards`:
- **Big Picture** checks the row off when a lesson covering it is marked done.
- **Portfolio → "Standards → his work"** makes that standard *clickable* and jumps to the
  completed lesson whose saved work proves it. So put the `standards` tag on the card that
  actually shows mastery, and make sure that card has **visible work** (a `quiz`, `answers`,
  or a `rubric`) — that's what the jump lands on.

**Codes to tag, by unit** (all exist in `standards.js` unless flagged):

| Unit | Science | History / Social Science | ELA |
|------|---------|--------------------------|-----|
| 3 Deep Time | `7.ESS2.1` `7.ESS2.2` `7.ESS2.3` | `7.G.GR.1` `7.H.CH.3` `7.H.CP.9` `7.H.CC.6` | `7.RI.1` `7.RI.2` `7.RI.8` `7.W.2` |
| 4 Connected World | `7.ESS3.1` `7.LS2.1` | `7.E.ST.10` `7.E.ST.11` `7.E.MI.4` `7.G.MM.3` `7.G.GR.1` `7.H.CC.4` `7.H.CC.5` `7.H.CH.3` | `7.W.7` `7.RI.3` `7.RI.1` |
| 5 Ground Shifts | `7.ESS3.2` `MS.ETS1.1` | `7.G.HI.4` `7.H.CH.3` `7.H.CC.6` `7.H.CP.9` | `7.RL.2` `7.RL.9` `7.W.3` `7.RI.3` |
| 6 Power (capstone) | ⚠️ `7.PS3.1` `7.PS3.2` `7.PS3.5` (see note) · `MS.ETS1.1` · revisit `7.PS1.3` `7.PS1.6` | `7.C.PI.1` `7.E.MI.5` `7.H.CH.3` | `7.W.1` `7.SL.4` `7.RI.8` |

> ⚠️ **Gap to fix for Unit 6:** the energy standards (`7.PS3.*` / `MS-PS3-1,2,5`) are **not
> in `standards.js`** — its Science list jumps from `7.PS1.*` to `7.ESS2.*`. Before tagging
> Unit 6, **add the PS3 rows** to the Math/Science block of `window.HS_STANDARDS` in
> `standards.js` (e.g. `{ code:'7.PS3.1', label:'Kinetic energy relates to mass & speed' }`,
> `7.PS3.2` potential energy, `7.PS3.5` energy-transfer evidence), or those tags will match
> nothing. `standards.js` is the single source of truth loaded by both Big Picture and
> Portfolio — edit it once.

---

## Design, content & photo rules (the hard ones — from Danielle)

Full detail in [`STYLE-GUIDE.md`](STYLE-GUIDE.md); the non-negotiables:

- **Photos: real, curated, self-hosted only. Never AI, never keyword-random stock.**
  Recipe: pull a real image URL from the **Wikipedia REST API** → download → `sips -Z 1100`
  → **open it and look** (real, topical, high-quality, appropriate?) → save to
  `assets/units/<name>.jpg` → add a credit line to `assets/units/CREDITS.txt`. **No good
  photo → no photo** (a clean color tile degrades gracefully). Images load **eagerly** (no
  `loading="lazy"`).
- **No fourth-wall / meta** in student-facing copy. Don't say "in this lesson we will…" or
  mention the app. Write **directly to Crasher**, at a high-school reading level.
- **Everything in-app** — no physical worksheets; all answers save to `localStorage`.
- **Real pedagogy, real standards** — hook → embedded video → explainer → build → tiered
  check → reflection; tag the **actual Oregon standards**, don't cherry-pick.
- **iPad-first** — must render nicely at 768px+; two-column grids collapse below ~720–760px.
- **Teal, automatically** — no `track` field. Don't hardcode colors in a unit file.
- **Voice checklist:** direct to Crasher · HS reading level · no meta · a real hook (a
  surprising fact) · more than one concrete example · pre-teach vocab · check understanding ·
  tie back to the essential question · connect to Medford / the Rogue Valley / his ebike where
  it's **honest, not forced**.
- **Reuse the through-line:** each unit re-asks "what does controlling this let people do?"
  and reuses the surplus→specialization dominoes from Unit 1 so the model compounds.

---

## Step 6 — verify

- `node --check unit-<id>.js` (and any page/`readings.js` you touched).
- **Shared-scope check** (catches the `const`-collision gotcha): load `unit-rivers.js`,
  `unit-metals.js`, all `unit-math-*.js`, and your new file together in one context (a Node
  `vm` shared context, like the browser) and confirm every unit still registers.
- Load `unit.html?u=<id>`: **teal** theme, the switcher lists it, cards render, `read` blocks
  open the clean reader, videos/links open in a new tab.
- Mark a lesson done → its standard **ticks on Big Picture** *and* **lights up on the Portfolio
  "Standards → his work" grid** (click it — it should jump to that lesson's work).
- **Portfolio:** the unit shows in the **Interdisciplinary** column. **Parents:** it shows with
  its hot-spots + Small/Medium/Large activities.
- Check it at **iPad width (768px)**.
- Commit + push to `main`; poll `https://homeskewl.netlify.app/unit-<id>.js` for a 200.

---

## Quick reference — what a card looks like

```js
{
  id: 'water-cycle', n: 2, title: 'The water cycle: Earth's solar engine',
  subject: 'Science', minutes: 25, standards: '7.ESS2.4',
  blocks: [
    { type: 'hook', text: 'Every day the sun lifts about a trillion tons of water off Earth — no pumps, no wires, just sunlight…' },
    { type: 'prose', body: '<p><b>Two forces trade off…</b></p><p><b>Example 1…</b></p><p><b>Example 2…</b></p>' },
    { type: 'read', title: 'The Water Cycle', source: 'clean reading', url: 'reader.html?doc=water-cycle', body: '<p>Short in-card version…</p>' },
    { type: 'video', title: '…', yt: '<youtube-id>', focus: 'one thing to watch for' },
    { type: 'quiz', questions: [ { q: '…', options: ['…','…','…','…'], answer: 1 }, /* 2–3 more */ ] },
    { type: 'next', text: 'Next: where all that water collects — and why people build there.' },
  ],
},
```
