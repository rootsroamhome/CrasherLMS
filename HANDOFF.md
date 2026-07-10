# HomeSkewl — where we are (updated 2026-07-10)

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
1. Get Crasher's real feel for Unit 1 (pacing/depth), iterate on this unit.
2. Build the rest of the year's units using Unit 1 as the template (same framework + block types).
   Themes roughly follow the science/history arc already scoped in `curriculum.js` / `lessons.js`.
3. Produce a **year-long standards coverage map** so every standard is hit across the units.
4. Decide whether to point the "Today" home screen at the current unit's next card (+ a daily
   math/reading strip) so there's one front door.
5. Sync unit progress → Big Picture / Parents page (currently localStorage only).
6. Revisit photos with a reliable source.

## The older system (still present, being superseded)
Date-based to-do list: `index.html`/`index.js`, `lesson.html`/`lesson.js`/`lessons.js`,
`this-week.*`, `big-picture.*`, `parent-guide.*`, `learning-review.*`, Airtable (429 dated items,
loaded by `populate-7th-grade.mjs`). Fine to keep for now; the unit model is the future.
