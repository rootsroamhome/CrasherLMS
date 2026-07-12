# Building the CLEP Units (the college-credit elective)

How to build the rest of the **Modern States CLEP Western Civilization I** modules the
same way as `unit-clep-early-civ.js` (Module 1, the one that's done). Read
[`STYLE-GUIDE.md`](STYLE-GUIDE.md) first for the visual rules and
[`BUILDING-MATH-UNITS.md`](BUILDING-MATH-UNITS.md) — CLEP units follow the **same
"scaffold-then-link-out" pattern as the Khan math units**. They render **brown**
automatically via `track: 'clep'`.

## Why this is different from Khan

Khan Academy has clean, public, per-video URLs, so the math units deep-link each lesson.
**Modern States does not.** Its lessons live inside a login-gated Brightspace LMS
(`learn.modernstates.org`, course **6858**). There are no stable public per-video links.

So the convention here is:

- One shared constant links to the **course** (log in once): `const MS = 'https://learn.modernstates.org/d2l/le/discovery/view/course/6858';`
- Every `video`/`practice` block points at `MS`, and the **card text + `focus` field name the exact lesson number** to open there — "watch 1.2", "watch 2.4 and 2.5".
- The launch card walks the one-time free signup at `register.modernstates.org`.

That's the honest deep link: he lands in the right course and knows exactly which numbered
lesson to play.

## The module arc (Modern States → our units)

This is `CLEP_PLAN` in `big-picture.js`. Build in order; each Modern States **module** = one
`unit-clep-*.js` file. Exam weights in parentheses (from the course overview).

| # | Unit file | Module | Modern States lessons | Exam weight |
|---|-----------|--------|-----------------------|-------------|
| 1 | ✅ `unit-clep-early-civ.js` | Ancient Near East | 1.1–1.7 | 8–17% |
| 2 | ✅ `unit-clep-greece.js` | Greece & Its Legacy | 2.1–2.11 | 15–17% |
| 3 | ✅ `unit-clep-rome.js` | Rome: Republic to Empire | 3.1–3.11 | 15–17% |
| 4 | ✅ `unit-clep-medieval.js` | Medieval Europe | 4.1–4.18 | 23–27% (biggest) |
| 5 | ✅ `unit-clep-renaissance.js` | Renaissance & Reformation | 5.1–5.10 | 13–17% |
| 6 | ✅ `unit-clep-early-modern.js` | Early Modern Europe | 6.1–6.9 | 10–15% |

**All six modules are built** (2026-07-11), quiz-aligned and meta-free, verified in-browser
(18/18 units live). They were built from the module quiz answer keys (topic weighting) +
knowledge; refine any module against its transcripts later if you want deeper fidelity.

⚠️ **Verify the lesson list against the live course overview** before building — Modern
States revises it (this list is the 2025 revision). Page:
`https://modernstates.org/course/western-civilization-i-ancient-near-east-to-1648/`.

## Curriculum tie-ins (use where honest — Danielle's rule)

The CLEP overlaps the interdisciplinary year. Reinforce, don't force:

- **Module 1** → **Unit 1 (Rivers)** Mesopotamia/Nile + **Unit 2 (Metals)** Bronze/Iron.
- **Module 4** (Medieval) → **Unit 4 (A Connected World)**: Silk Road/Indian Ocean trade,
  the **Black Death** (lessons 4.13–4.14) maps straight onto Unit 4's plague ecology.
- **Module 6** (Early Modern) → **Unit 4** again (Atlantic trade, resource exchange).

Tag a card with a genuine Oregon standard (`7.H.CH.3`, `7.C.PI.1`, `RI.7.1`, `RI.7.8`) only
where it's really earned, so the Big Picture checklist stays honest. Most CLEP cards can
leave `standards: ''`.

## The recipe (same as math, minus embedded video)

Copy `unit-clep-early-civ.js` → `unit-clep-<topic>.js`. Keep `track: 'clep'`, a unique `id`
matching its `CLEP_PLAN` row, `short: 'CLEP · <Topic>'`. Then:

1. **launch** card — hook + what to watch this module + `flashcards` (pre-teach `vocab.mustOwn`) + `kwl` + a `video` block opening the course.
2. **~5–6 content cards**, each = one or two Modern States lessons: `hook` → `prose` explainer (plain language, real names/dates the CLEP tests, a tie-in where honest) → `video` block (`url: MS`, `label: '▶ Watch 2.x on Modern States'`, `focus:` names the lesson + what to listen for) → `quiz` (3 MC checks **we** wrote, CLEP-style) → `next`.
3. At least one card should use a **`read` primary source** + `answers` (the CLEP tests source analysis — e.g. Hammurabi in Module 1). Every module has good primary sources; pick one.
4. **reflection** card — `prose` recap → `practice` (link to the module's own quiz on Modern States) → `kwlback` → `vocabsort` → `rubric` → `done` (tease the next module).

### Bridging the 7th→college leap — INVISIBLY (hard rule)

College history is a real jump for a 7th grader — mostly **vocabulary density** and dense
reading, not the ideas. We scaffold for that, but **the student must never see the scaffolding.**

**NO META (Danielle's rule, non-negotiable).** Crasher "just gets the content and the
assessments." Student copy must NEVER reference the teaching machinery or difficulty:
- ❌ "Another way in / optional / use if the reading feels heavy / a step below the college
  reading / easiest level / plain version / stretch read / these words stop being scary /
  get your head ready / this unit works differently."
- ✅ Present everything as if it's simply the lesson and the quiz. Enrichment is offered as
  *cool stuff*, never as a remedial fallback. Keep it fun — **"not the glue factory."**

The four supports, in their NON-meta form (see `unit-clep-early-civ.js` for the pattern):

- **Vocabulary** — a `matching` game, titled just `'Vocabulary — match each to its plain meaning'`,
  **no `note`**. Denser register words (*stele, tribute, hegemony, principate, schism, absolutism*…)
  with plain glosses. Use the inline form `{ type:'matching', pairs:[{term,def},…] }` (keeps it
  separate from `vocab.mustOwn` so the flashcards/vocabsort stay tight). Never call it "college words."
- **Curiosity prompts** (was "reading guide") — a short `prose` block, `🔎 As you watch 1.x, see if
  you can answer:` + 2–4 questions. No page counts, no "chunk it," no process/difficulty talk.
- **"Put it in your own words"** — an `answers` block with one dense sentence (in quotes) to rewrite
  plainly. It reads as a normal task; don't label it "college."
- **"Bring it to life"** — a `prose` block (renders links; `deeper` escapes text so don't use it)
  offering **genuinely fun content**: a great video AND a grade-level book / graphic novel.
  Present by what it IS ("fast and funny," "gorgeous"), never by its level. Verified sources:
  - **CrashCourse World History** (YouTube) — fast, funny. Mesopotamia #3, Egypt #4; later eps cover Greece/Rome/Medieval/Renaissance/Exploration.
  - **World History Encyclopedia**, **Khan Academy World History**, **NatGeo "…101"**, **Ducksters** — pick per topic; present as content, not "easier."
  - **OverSimplified** (YouTube) — specific wars/figures only. Henry VIII → **Module 5**; not for M1–3.
  - **Books / graphic novels** (fun, grade-level; name title + author, no link): *Cartoon History of
    the Universe* Vol. 1 (Gonick — Stone Age→ancient, covers much of M1–2); the *Gilgamesh* graphic
    trilogy (Ludmila Zeman); *The Golden Bull* (Cowley, Sumer); Rick Riordan's *Kane Chronicles*
    (Egyptian gods) & *Tales of Ancient Egypt* (Lancelyn Green). Pick era-appropriate picks per module.
  Always **verify a link resolves** before wiring it in — don't guess URL slugs. Books can be named
  without links.

Module 1 (`unit-clep-early-civ.js`) has all four, meta-free — copy that pattern exactly.

### Block types the renderer (`unit.js`) understands
`hook · video {yt | url+label+focus} · read {title, body, url, source} · prose · answers
{prompts[]} · build · quiz {questions:[{q,options[],answer}]} · flashcards · matching ·
frayer · kwl/kwlback/kwlfinish · vocabsort · rubric {items[]} · practice {url|links[]} ·
deeper · next · done`.

## Wiring a new CLEP unit in (checklist)

1. `unit-clep-<topic>.js` created with `track: 'clep'`, and **wrapped in an IIFE**
   `(function () { … })();` — REQUIRED. These load as classic `<script>`s sharing global
   scope, so a top-level `const MS`/`MS_SIGNUP` in two unit files collides ("already declared")
   and silently kills every unit after it. All six CLEP files (and the math files) are wrapped.
2. Add `<script src="unit-clep-<topic>.js"></script>` to **all five** pages that load units:
   `index.html`, `unit.html`, `big-picture.html`, `portfolio.html`, `parent-guide.html`
   (after the other unit scripts).
3. Its `CLEP_PLAN` row already exists in `big-picture.js` — just confirm the `id` matches.
4. No new CSS needed — `track: 'clep'` gives the brown theme, switcher group, and Big
   Picture column automatically.
5. Verify in-browser: `unit.html?u=clep-<topic>` renders brown, the switcher shows a
   "College Credit (CLEP)" group, quizzes score, and every Modern States link opens in a
   new tab.

## Pacing

One CLEP course, taken slow, aimed at the exam Crasher can sit **once he turns 13 (Feb)**.
Finishing the whole course earns a Modern States **voucher that covers the exam fee**.
Roughly one module a month is plenty; Module 4 (Medieval) is the largest, so give it more
time. Don't rush ahead of his interest — the point is a real, free college credit before
high school, not speed.
