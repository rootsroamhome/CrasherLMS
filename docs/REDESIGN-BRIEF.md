# Redesign Brief — make the pages fit the new CLEP track

**Goal of the next session:** redesign HomeSkewl's pages to gracefully accommodate a **new third
track** (the CLEP college-credit elective) that was just added. The content is all built and
verified; the *layouts* now need to breathe with three tracks instead of two. Do the redesign
locally, verify at desktop AND mobile widths, get Danielle's eye on the direction, then push once.

---

## First, orient yourself
Read these before touching anything:
- [`HANDOFF.md`](../HANDOFF.md) — running state log.
- [`CLAUDE.md`](../CLAUDE.md) — architecture + file map.
- [`docs/STYLE-GUIDE.md`](STYLE-GUIDE.md) — the design system + **hard rules** (real-photos-only,
  colors, Fraunces/Inter, loading). Any redesign must obey this.
- [`docs/BUILDING-CLEP-UNITS.md`](BUILDING-CLEP-UNITS.md) — how the CLEP units work + rules.

**Run it:** `preview_start` with `{name: "unit-preview"}` (config in `.claude/launch.json`; it's a
static python http server). Then open `unit.html?u=clep-greece`, `big-picture.html`, `index.html`,
etc. Verify with the browser tools; `resize_window` to mobile (375px) and tablet (768px). **Never**
run the server via Bash.

**Working style with Danielle:** she is a professional teacher and wants to discuss **pedagogy,
content, and look/feel — NOT code.** Show her the design/visual direction (screenshots), not
implementation. Get her sign-off before committing a big visual change.

---

## What was just built (the CLEP elective) — context you need

A **third unit track** was added alongside the existing two:
- **Interdisciplinary** (core) — teal — 6 units (`unit-rivers.js` … `unit-power.js`).
- **Math** — gold — 6 units (`unit-math-*.js`).
- **College Credit (CLEP)** — **brown (`#E07A3E` / soft `#F0B98C`)** — **6 units, all built**:
  `unit-clep-early-civ.js`, `-greece.js`, `-rome.js`, `-medieval.js`, `-renaissance.js`,
  `-early-modern.js`. This is Modern States' free **CLEP Western Civilization I** course
  (Ancient Near East → 1648), taken slowly toward the exam Crasher can sit once he turns 13.

How the track is wired (already done — don't rebuild, just restyle around it):
- **`unit.js`** — `track: 'clep'` gets its own switcher group (`switchRow(clepUnits, 'clep',
  'College Credit (CLEP)')`) and `app.classList.toggle('theme-clep', …)`. Three groups now render
  in `.u-switch-wrap`.
- **`styles.css`** — `#unit-app.theme-clep` (brown accent), `.u-switch-group.clep …`,
  `.yr-col.clep …`, and `.yr-columns` was widened from **2 to 3 columns** (`1fr 1fr 1fr`), collapsing
  to 1fr on mobile.
- **`big-picture.js`** — a `CLEP_PLAN` array + a third year-column. Its `window` dates run
  **Aug 31 → late spring** (NOT over the summer — see rules).
- Every unit `<script>` is loaded on all 5 pages: `index.html`, `unit.html`, `big-picture.html`,
  `portfolio.html`, `parent-guide.html`.

Current state renders with **no console errors** and **18/18 units live** — but the layouts were
designed for two tracks, so they're now tight. That's the job.

---

## The redesign — surfaces to fix

1. **Units switcher (`unit.js` / `styles.css`).** Three labeled groups (Interdisciplinary / Math /
   College Credit) now stack in the hero. It works but is cramped and long. Make it breathe —
   consider collapsible groups, a cleaner group treatment, or a more compact chip layout. Plum group
   should read as clearly distinct from teal/gold.
2. **Big Picture (`big-picture.js` / `styles.css`).** The "year, unit by unit" section went from a
   2-column to a **3-column** grid — check it's not cramped at desktop, and that the **mobile**
   collapse (currently → 1fr, three tall stacks) still reads well. The `stat-units` count is now
   `18/18`. This is the page most affected.
3. **Today (`index.html` / `index.js`).** Currently units-driven (active interdisciplinary unit +
   a daily Math/Reading strip). **Open design decision:** how (or whether) the CLEP elective should
   surface here — a third daily/اmbient tile? a small "elective" nod? Danielle's call; bring options.
   NOTE: `index.js` filters `track !== 'math'` for the "active unit"; CLEP (`track === 'clep'`) will
   currently fall INTO the interdisciplinary active-unit logic — check that it doesn't hijack the
   "Today's lesson" slot (it probably should be excluded like math is).
4. **Portfolio (`portfolio.js`) & Parents (`parent-guide.js`).** Make sure CLEP work and the CLEP
   parent hotspots/activities show up cleanly in their column/section layouts (Portfolio has
   track columns; Parents reads each unit's `parent` block).

---

## Hard rules (do not violate)

- **Design system:** obey [`STYLE-GUIDE.md`](STYLE-GUIDE.md) — editorial d.school vibe, **Fraunces**
  serif + Inter, cream ground, halftone color tiles, hover-only motion, **real photos only** (no
  emoji/clip-art as imagery). Plum is the CLEP color; teal = core, gold = math.
- **No meta in STUDENT copy.** Student-facing text never references scaffolding/difficulty. Keep it
  fun — "not the glue factory." (This is about the unit content; mostly relevant if you touch copy.)
- **School starts Aug 31.** Nothing is scheduled or paced over the summer; all windows anchor to
  Aug 31. The CLEP exam is **not a deadline** (eligible at 13 in Feb; aim late spring / whenever).
- **`unit-clep-*.js` files MUST stay wrapped in an IIFE** `(function(){…})();`. They load as classic
  scripts; a top-level `const MS` in two files collides and silently kills later units. Don't unwrap.
- **A background formatter** lightly reflows `styles.css` and the `unit-*.js` files — **re-grep exact
  text right before editing** those files.
- **Modern States is login-gated** (course 6858); there are no public per-lesson URLs. That's by
  design — don't try to "fix" the deep links.

## Verify + ship
- Verify in the browser preview: no console errors, all three switcher groups, Big Picture 3 columns,
  **and mobile (375px)** on every changed page. Screenshot the before/after for Danielle.
- **Not pushed live yet.** The whole CLEP build + redesign should go out in **one clean push to
  `main`** (auto-deploys to Netlify) — and **only when Danielle says so.**
