# HomeSkewl — where we are (updated 2026-07-10, second pass)

Everything below is committed to git and live at **https://homeskewl.netlify.app**.
A fresh session can pick up from this file + `CLAUDE.md` + the repo — nothing lives only in chat.

## The direction we landed on
Moving from a **date-locked daily to-do list** to **interdisciplinary, self-paced thematic units**
(science + world history + ELA braided around an essential question). Units aren't tied to calendar
dates — the next lesson unlocks when the current one is marked done, so nothing rolls over.

## Unit 1 — Rivers & the Rise of Civilization (BUILT + LIVE)
- Reach it at **`/unit.html`** (the "My Unit" nav tab).
- Files: `unit.html`, `unit.js` (renderer + progression + localStorage), `unit-rivers.js` (all content).
- Progress, answers, quiz scores, KWL, vocab self-sort all save to **localStorage** (contained in-app,
  survives refresh). Not yet synced to Airtable/Big Picture — that's a to-do.
- **Essential question:** How do rivers shape the way people live — and how do people shape rivers back?
- **16 cards**, each a standalone ~30–45 min session (2-sitting lessons split into A/B so nothing repeats):
  1 Launch (video + vocab flashcards + EQ + KWL) · 2–3 Water Cycle A/B · 4–5 Water Shapes Land A/B ·
  6–7 Floodplains→Cities A/B (Frayer + matching #1) · 8 Mesopotamia · 9–10 Portrait of a Civilization
  project A/B · 11–12 Flood Myths A/B (matching #2) · 13 Harnessing Rivers (dams/hydropower) ·
  14 Our River: the Rogue (local, moderate) · 15–16 Reflection A/B (reopens day-one KWL → the "L").
- **Assessment tiers:** quizzes + 2 matching games (formative) → Canva "Portrait of a Civilization"
  (medium) → portfolio + written synthesis + self-rubric (mastery). Nothing standardized.
- **Vocab:** 15 must-own words (flashcard preview → surface in context → 2 matching checks → self-sort).
  Frayer deep-dives on the 3 highest-level anchors: hydrologic cycle, specialization, civilization.
- **Standards hit:** Science MS-ESS2-4/2-2/2-1/3-1 + LS2-1 revisit · SS 7.G.GR.1/HI.4/HE.6, 7.H.CH.3,
  7.C.PI.1, 7.E, Tribal history · ELA RI.7.1/7.2, RL.7.2/7.9, W.7.1/7.2, SL.7.4.
- Renderer block types (in `unit.js`): hook, video (embed if `yt`, else link-out), read, answers,
  build, quiz, flashcards, matching, frayer, kwl/kwlback/kwlfinish, vocabsort, rubric, prose, deeper, next, done.
- UX niceties done: preview any card from the map (no commitment), one-click un-mark-done, reset progress.

## Unit 2 — Metals & the Rise of Empires (BUILT + LIVE)
- Reach it at **`/unit.html?u=metals`** — the unit page now has a **unit switcher** (pill links
  in the header showing each unit's progress). `?u=<id>` picks the unit; progress is saved
  per-unit in localStorage (`homeskewl_unit_<id>`), so Unit 1 progress was untouched.
- Files: `unit-metals.js` (content). Unit files now self-register into `window.HS_UNITS`
  (`unit-rivers.js` was converted to the same pattern); `unit.js` renders whichever is selected.
  The KWL block takes per-unit `klabel`/`wlabel` overrides now.
- **Essential question:** How does changing what things are made of change who has power?
- Braid: matter & chemical reactions (MS-PS1-1…6) + Bronze/Iron Age trade & empires + forge
  myths and argument writing. **16 cards**, same shape as Unit 1:
  1 Launch (atoms video + vocab + KWL) · 2–3 Atoms & Elements A/B (molecule models build) ·
  4–5 What Heat Does A/B (food-coloring particle build) · 6–7 Chemical Reactions A/B
  (sealed-bag conservation-of-mass build, matching #1) · 8 From Rock to Metal (smelting,
  bronze, Frayer × 3) · 9–10 Biography of a Material project A/B (Canva) · 11 The Tin Problem
  (Uluburun wreck, monopoly→tribute→empire chain, Bronze Age Collapse) · 12 The Forge in Story
  (Hephaestus + Ogun, myth/compare writing, matching #2) · 13 Iron: The Metal for Everyone
  (Assyria, plow vs sword, argument seed) · 14 Our Material: Lithium (his ebike battery,
  McDermitt Caldera/Thacker Pass — the local + modern hook) · 15–16 Reflection A/B.
- Deliberate echoes of Unit 1: the dominoes chain (surplus→specialization) restarts with iron;
  card 14 mirrors card 14 of Unit 1 (a "our backyard" lesson); same assessment tiers
  (quizzes/matching → Canva project → synthesis + self-rubric).
- Vocab: 15 must-own (atom → monopoly), Frayer on chemical reaction / alloy / empire.
- One embedded video (TED-Ed "Just How Small Is an Atom?", yt `yQP4UJhNn0I`) — worth a
  click-through check; other videos use the search-link pattern.

## Year map (NEW — read before building Unit 3)
**`docs/YEAR-MAP.md`** holds the full 6-unit year plan: themes, essential questions, which
science/SS/ELA standards each unit OWNS vs revisits, and a coverage table showing every
standard is hit. Short version: 3 Deep Time & the Restless Earth · 4 A Connected World ·
5 When the Ground Shifts (choice novel) · 6 Power (capstone, closes the loop to rivers +
metals). Units 1–2 built; 3–6 to build after Crasher road-tests these.

## The teacher's stated preferences (Danielle — a professional teacher)
- Wants real interdisciplinary planning (used Catlin Tucker's framework), no cherry-picking standards,
  natural pacing (don't cram or stretch), Oregon pacing guides as reference.
- Depth over shallowness: hook (fun fact + embedded video) → 2 solid learn paths → build → check.
- Vocab pre-taught, checked with cute interactives (flashcards/matching), part of the reflection.
- Keep meta/fourth-wall asides OUT of student-facing copy. Crasher reads at HS level.
- Everything contained in-app (no physical notebook). Each session alone in the UX (no "I already did this").
- Does NOT want to discuss code — talk pedagogy, content, and look/feel only.

## Design system (applied app-wide already)
Editorial/d.school vibe: Fraunces serif + Inter, cream ground, saturated color tiles with **halftone
texture** (randomized per tile, some with pink/blue dots, occasional black cards), soft shadows,
**motion only on hover and slow** (ticker ribbons scroll on hover only), gallery grid on the Today
view. Focus timers on the 30-min items. Photos are **paused** (Wikipedia hotlink was blocked in preview;
`lessons.js` has a loremflickr fallback + `LESSON_PHOTOS` curated Wikipedia URLs to revisit).

## Next steps
1. Get Crasher's real feel for Units 1–2 (pacing/depth); his minutes-per-card and quiz results
   should shape how Unit 3 gets built.
2. Build Units 3–6 per `docs/YEAR-MAP.md` (Unit 3 = Deep Time & the Restless Earth is next).
3. Decide whether to point the "Today" home screen at the current unit's next card (+ a daily
   math/reading strip) so there's one front door.
4. Sync unit progress → Big Picture / Parents page (currently localStorage only).
5. Revisit photos with a reliable source.
6. Spot-check the TED-Ed embed in Unit 2's launch card plays (yt id `yQP4UJhNn0I`).

## The older system (still present, being superseded)
Date-based to-do list: `index.html`/`index.js`, `lesson.html`/`lesson.js`/`lessons.js`,
`this-week.*`, `big-picture.*`, `parent-guide.*`, `learning-review.*`, Airtable (429 dated items,
loaded by `populate-7th-grade.mjs`). Fine to keep for now; the unit model is the future.
