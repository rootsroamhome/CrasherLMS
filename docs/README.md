# HomeSkewl — docs index & project recap

Start here. This is the map of everything, plus a one-page recap of what we built and why.

## The docs
- **[`../HANDOFF.md`](../HANDOFF.md)** — the **running state**: what's built, what's next,
  gotchas. Updated every work session. Read it first to continue the project.
- **[`../CLAUDE.md`](../CLAUDE.md)** — repo/tech context, file map, key behaviors.
- **[`STYLE-GUIDE.md`](STYLE-GUIDE.md)** — the **design system + hard rules** (photos,
  colors, fonts, loading, components, voice). Read before touching anything visual.
- **[`YEAR-MAP.md`](YEAR-MAP.md)** — the year's **curriculum plan** + Oregon standards map.
- **[`BUILDING-MATH-UNITS.md`](BUILDING-MATH-UNITS.md)** — **how to build** the remaining
  math units (Khan-scaffolded, gold theme).
- `airtable.md`, `deployment.md` — legacy Airtable schema + Netlify setup.

## What HomeSkewl is
A self-paced homeschool site for one 7th grader ("Crasher"). Plain HTML/CSS/JS, no
framework, Netlify-hosted from `main`, progress in `localStorage`. Five tabs:
**Today · Units · Portfolio · Big Picture · Parents.**

## Architecture at a glance
- **Units** register themselves into `window.HS_UNITS` (`unit-<id>.js`) and are rendered by
  `unit.js` at `unit.html?u=<id>`. Two tracks: **interdisciplinary** (no `track` field, teal)
  and **math** (`track: 'math'`, gold). Each unit = ordered **cards** (called "lessons" in
  the UI); a card is built from **blocks** (hook, video, read, prose, flashcards, quiz,
  frayer, kwl, vocabsort, rubric, practice, next, done…). All answers/quiz/vocab/done save to
  `localStorage['homeskewl_unit_<id>']`.
- **Today** (`index.html`/`index.js`): units-driven, date-aware (summer → in-session), a
  touching square tile gallery, daily Math + Reading anchors with focus timers, a shareable
  `?d=YYYY-MM-DD` date picker. Nothing rolls over.
- **Portfolio** (`portfolio.*`): his work per unit, collapsed accordions.
- **Big Picture** (`big-picture.*`): the six-unit interdisciplinary arc **and** the math arc
  in two color-coded columns, plus a full **Oregon 7th-grade standards checklist** that
  auto-checks as lessons are done (and is click-to-toggle by hand).
- **Parents** (`parent-guide.*`): per-unit preview + hot-spots + Small/Medium/Large activity
  + resources, with a two-column (interdisciplinary/math) switcher.
- **Readers** (`reader.*` + `readings.js`): clean, ad-free, printable reading panes; lessons
  link here instead of ad-filled sites. All external/reading links open in a new tab.

## Key decisions we made (the "why")
- **From a date-locked to-do list → self-paced units.** Nothing rolls over; the next lesson
  unlocks on "done."
- **Photos: real, curated, self-hosted only.** AI/keyword-random stock was explicitly
  rejected (see the STYLE-GUIDE image rule). Sourced via the Wikipedia API, resized, viewed,
  committed to `assets/units/`.
- **Standards are the real Oregon 7th-grade standards** (Math = 2021 Oregon; Science = Oregon
  NGSS grade-7; ELA = Oregon grade-7; Social Studies = 2024 Oregon). The Big Picture lists
  **all ~130** so gaps between units and standards are visible and can be supplemented.
- **Math got its own structured track** (not "go do Khan"): our scaffolding around Khan's
  deep-linked videos/practice, gold-themed, tied into Portfolio + Big Picture + standards.
- **Consistent teal (interdisciplinary) vs gold (math)** color-coding across every page.

## Built so far
Interdisciplinary: **Unit 1 Rivers**, **Unit 2 Metals** (units 3–6 planned, see YEAR-MAP).
Math: **Proportional Relationships** (units 2–6 planned, see BUILDING-MATH-UNITS).
