# HomeSkewl — where we are (updated 2026-07-10, third pass)

## Latest pass — Today rebuilt around the units, mastery view, clean readers
The date-locked to-do list is **retired as the front door.** The site now runs on the units:
- **Today (`index.html`/`index.js`) is units-driven and Airtable-free.** A d.school-style
  **textured tile gallery** (mixed subject colors + halftone + ribbon + curated photos). Three
  phases by date:
  - **Deep summer** (`today < SUMMER_END` = Aug 1): ONLY the two daily tiles — 30 min Reading +
    30 min Khan — plus a summer countdown. No unit/preview/weekly/portfolio (Danielle: over the
    summer it's just reading + math).
  - **Ramp** (Aug 1 – Aug 30): full gallery with the lesson tile in "Preview the unit" mode.
  - **In session** (`>= CURRICULUM.yearStart` Aug 31): lesson tile = "Continue", "Week N of 37".
  Tiles: feature lesson (unit's next card → My Unit), Reading + Math dailies w/ timers, weekly-pick
  tile (→ this-week.html, framed "pick Monday, work all week"), black **"See your work" → Portfolio**.
  **Nothing rolls over:** daily "done today" keyed by LOCAL date. Edit `DAILY` / `SUMMER_END` in `index.js`.
  **Date picker / time-travel:** Today renders from `viewDate` (defaults to real today). A picker
  ("See another day" / "Back to today") and a **shareable `?d=YYYY-MM-DD` link** let anyone preview
  any day — e.g. `index.html?d=2026-08-31` shows the first day of school. All phase logic
  (`isSummer()`, `inSession()`, `weekNumber()`) derives from `viewDate`.
  **Terminology:** a unit's "cards" are called **lessons** in all user-facing copy (Danielle found
  "cards" confusing). Code still uses `cards` internally; only display strings say "lesson(s)".
  ✅ **Photos are curated + self-hosted** in `assets/units/` (rivers.jpg, metals.jpg, reading.jpg —
  real Wikimedia Commons photos, see `assets/units/CREDITS.txt`). Static, high-quality, topical.
  **Do NOT use loremflickr / keyword-random stock again** — it returned watermarked "AI slop" and
  changed every load. New unit → add a real image to `assets/units/` and set `image:` on the unit.
  ⚠️ Gotcha: `config.js` / `curriculum.js` declare `SUBJECT_COLORS` / `CURRICULUM` as top-level
  `const`, NOT on `window`. Reference them **by name** (guarded with `typeof`), never `window.*` —
  that's what made every Today tile fall back to teal ("all blue").
- **Two separate result pages — keep them separate:**
  - **Portfolio (`portfolio.html`/`portfolio.js`)** = HIS WORK. Each unit is a **collapsed
    accordion** (closed by default; tap to open) so it never gets unwieldy: inside is cards-done,
    quiz chart, vocab study list, KWL, and every written answer. Reads localStorage (this device
    only; cross-device sync still a to-do).
  - **Big Picture (`big-picture.html`/`big-picture.js`)** = THE YEAR + STANDARDS CHECKLIST (its
    original purpose — do not turn it back into an answer dump). Shows the six-unit arc (live vs.
    planned, from `YEAR_PLAN`), and a **full 7th-grade standards checklist**: every standard for the
    year in `STANDARDS` (Math / Science / ELA / Social Studies), grouped into **collapsible
    d.school-style content-area cards** (colored tile + halftone + top-right "\" tape). Every
    standard shows a ✓ (done) or empty circle. A standard **auto-checks** when a completed lesson
    covers it (matched off the units' card `standards`), and each is **click-to-toggle by hand**
    (persisted in `localStorage['homeskewl_standards']`) so things done outside the app — like daily
    Khan **Math**, which no unit covers — can still be checked. Math is always shown so it never
    looks like it doesn't exist. Add a new standard by editing the `STANDARDS` array.
- **Clean reading panes (`reader.html`/`reader.js` + `readings.js`).** Any lesson reading that
  used to link to an outside site (USGS, Britannica) now opens an in-app, ad-free, printable
  reading pane instead. Primary sources got real text: Gilgamesh's flood, the Code of
  Hammurabi, Yu the Great, the Shield of Achilles (Hephaestus), Ogun. Plus two research
  "reading room" pages (four river civilizations; materials that changed the world). 9 docs total.
- **Parents (`parent-guide.html`/`parent-guide.js`) rebuilt units-driven (no Airtable, no week
  table).** For the active unit (or `?u=<id>` via the switcher): a preview card w/ the unit photo +
  "Preview the whole unit" link, **"Where he might get stuck"** (from `unit.parent.hotspots`), a
  **Small/Medium/Large "do something real"** pick (from `unit.parent.activities` — one tiered set
  per unit, Rogue-Valley-local), and **"Refresh your own memory"** = the unit's readings + videos
  auto-collected from its cards. Per-unit granularity (add more activities to `unit.parent` if wanted).
- **Ribbons** are **corner tape**: `.ribbon` (portfolio/this-week) crosses the TOP-RIGHT corner
  side-to-side (wide enough that both ends clip off-tile, never ending mid-tile); `.big-ribbon`
  (standards cards) runs "\" across the top. Colour is a **bolder shade of the tile** via
  `--ribbon` (never black), text via `--ribbon-text`, and the angle varies via `--rib-angle`.
  All sit clear of the (bottom/left) headings.
- **Today gallery** is a d.school-style **touching grid**: square corners, 3px ink gutters
  (`gap`+ink background), `align-items:stretch` so paired tiles are **equal height** (no ragged
  white space). Feature lesson tile spans both columns. 2-col at ≥720px (iPad+), 1-col below.
- **Nav label is "Units"** (was "My Unit").
- **Big Picture** unit rows show a cute **target-date pill** (`YEAR_PLAN[].window`, e.g. "Aug 31 –
  Oct 9" — rough, adjustable). Standards-card side labels shortened (MATH/SCIENCE/ELA/HISTORY) so
  they don't overlap the arrow.
- **All lesson links open in a new tab** (external resources + readings). Internal nav stays in-tab.
- **Nav everywhere:** Today · My Unit · **Portfolio** · Big Picture · Parents. (This Week was pulled
  from the nav — it's a once-a-week pick, reached from the Today weekly tile; `this-week.html` still
  exists. "Review"/`learning-review.html` also still exists, not in nav.)

Everything below is committed to git and live at **https://homeskewl.netlify.app**.
A fresh session can pick up from this file + `CLAUDE.md` + the repo — nothing lives only in chat.
(Units 1–2 and the year map from the earlier passes are all still current — see below.)

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
   (now visible on the Big Picture dashboard) should shape how Unit 3 gets built.
2. Build Units 3–6 per `docs/YEAR-MAP.md` (Unit 3 = Deep Time & the Restless Earth is next).
   Any new reading that would link off-site should get a `readings.js` entry + `reader.html?doc=` link.
3. **Cross-device sync** — the dashboard reads localStorage, so it only sees the device he works
   on. If Danielle wants to review his answers from her own phone/laptop, that needs a real sync
   (Airtable or similar). This is the main open item now.
4. Revisit photos with a reliable source.
5. Spot-check the TED-Ed embed in Unit 2's launch card plays (yt id `yQP4UJhNn0I`).
6. DONE this pass: Today points at the current unit card; daily strip w/ timers, no rollover;
   mastery/answers dashboard; clean in-app readers; all lesson links open in a new tab.

## The older system (mostly superseded)
- `index.html`/`index.js` and `big-picture.*` were **rewritten this pass** (Today + mastery,
  both units-driven, no Airtable). They no longer touch the date-list.
- Still Airtable-backed and unchanged: `this-week.*` (the weekly Self-Study/Rabbit-Hole pick still
  posts a Done record), `parent-guide.*` (parent planning from `curriculum.js`), `lesson.html`/
  `lesson.js`/`lessons.js` (the old generic science-lesson renderer + all its content — note the
  Humanities units in `lessons.js` are the raw material for building units 3–6), `learning-review.*`.
- Airtable still holds the 381 dated items (`populate-7th-grade.mjs`); nothing reads them on the
  Today page anymore, but the parent/this-week pages do. Safe to leave.
