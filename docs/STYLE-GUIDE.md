# HomeSkewl — Design & Style Guide

The single source of truth for how HomeSkewl looks, sounds, and behaves. Read this
before changing anything visual or adding content. Running state (what's built, what's
next) lives in [`HANDOFF.md`](../HANDOFF.md); how to build lessons lives in
[`BUILDING-MATH-UNITS.md`](BUILDING-MATH-UNITS.md) and [`YEAR-MAP.md`](YEAR-MAP.md).

---

## What HomeSkewl is (in one paragraph)

A homeschool site for one 7th grader ("Crasher," reads at a high-school level). It runs
on **self-paced thematic units** — the interdisciplinary ones (science + world history +
ELA braided around an essential question) and a parallel **math** track. No due dates:
the next lesson unlocks when the current is marked done. Everything is plain
HTML/CSS/JS, no framework, deployed on Netlify from `main`. Progress/answers save to the
browser's **localStorage** (per unit: `homeskewl_unit_<id>`), so it's contained in-app.
The five tabs: **Today · Units · Portfolio · Big Picture · Parents.**

The visual voice is **d.school editorial**: warm cream ground, saturated color tiles with
halftone texture, big Fraunces serif headings, corner-tape ribbons, square/touching
gallery grids, motion only on hover.

---

## HARD RULES (these came from Danielle — do not break them)

1. **Photos: real, curated, self-hosted. NEVER AI slop, never keyword-random stock.**
   - No AI-generated images. No `loremflickr` / random-per-load services (they returned
     watermarked junk and changed every visit — this was explicitly rejected).
   - Photos must be **real, high-quality, topical**, and **saved into the repo** under
     `assets/units/` so they're static and don't depend on an external host.
   - Sourcing method that works (keyless, licensed): pull a real image URL from the
     **Wikipedia REST API**, download it, resize with `sips`, and **look at it** (open it)
     before committing. See the recipe below. Credit each in `assets/units/CREDITS.txt`.
   - If you can't find a good real photo, use **no photo** (a clean color tile) rather
     than a bad one. Every tile degrades gracefully to its color.
2. **No fourth-wall / meta in student-facing copy.** Don't say "in this lesson we will…"
   or reference the app itself. Write to Crasher directly, at a HS reading level.
3. **Everything contained in-app.** No physical worksheets; answers save in the browser.
4. **Real pedagogy.** Interdisciplinary units use hook → embedded video → explainer →
   build → tiered check → reflection. Standards are the **actual Oregon 7th-grade
   standards** (see YEAR-MAP / the Big Picture checklist), not cherry-picked.
5. **Must render nicely on an iPad.** Test at 768px+. Two-column grids collapse to one
   below ~720–760px.
6. **Danielle discusses pedagogy, content, and look/feel — not code.** Talk in those terms.

### The image recipe (copy-paste)

```bash
# 1) get a real image URL for a topic (keyless Wikipedia API)
curl -s "https://en.wikipedia.org/api/rest_v1/page/summary/Nile" \
  | python3 -c "import sys,json;print(json.load(sys.stdin).get('originalimage',{}).get('source',''))"
# 2) download + resize to ~1100px, save into the repo
curl -sL -A "Mozilla/5.0" "<that url>" -o /tmp/x.jpg
sips -Z 1100 /tmp/x.jpg --out assets/units/<name>.jpg
# 3) OPEN IT and confirm it's real, topical, high quality, appropriate — then commit
# 4) add a line to assets/units/CREDITS.txt
```

Current photos: `assets/units/rivers.jpg` (Nile), `metals.jpg` (blacksmith),
`reading.jpg`–`reading4.jpg` (libraries/bookstore — the reading tile rotates through them
and advances one on each "done"). Wikimedia Commons and `upload.wikimedia.org` hotlink
fine, but we **self-host** anyway for stability.

---

## Color palette (from `styles.css :root` + `config.js`)

**Ground & ink**
| Token | Hex | Use |
|-------|-----|-----|
| `--cream` | `#FEFCF7` | page background (warm, near-white) |
| `--cream-2` | `#F8F4E9` | soft surfaces, insets, tile gutters-of-light |
| `--paper` | `#FFFFFF` | cards |
| `--ink` | `#1A1A1A` | text + all 2–3px borders (the "drawn" look) |
| `--ink-soft` (`--text-muted`) | `#4A4642` | secondary text |
| `--ink-dim` (`--text-dim`) | `#8A857C` | tertiary text, meta |
| `--line` | `#EEE8DA` | hairlines |

**Brand accents (d.school-bright)**
| Token | Hex | Use |
|-------|-----|-----|
| `--coral` | `#F0533F` | primary action buttons, hook eyebrow, active-map, spinner |
| `--teal` | `#17A0AE` | **interdisciplinary** accent (badges, progress, switcher) |
| `--mustard` | `#E0A93B` | "fuzzy" vocab, minor accents |
| `--plum` | `#8B4FA6` | rabbit-hole / self-study flavor |
| `--olive` | `#6F6F45` | self-study flavor |
| `--success` | `#3E9E6E` | correct answers, "done today" green |
| `--danger` | `#E8503A` | wrong answers |

**Subject tiles** (`SUBJECT_COLORS` in `config.js`): each subject has a **bg** (saturated,
for badges/ribbons — white text reads on it) and a **tile** (soft, for full-tile
backgrounds — dark text reads on it):

| Subject | bg (saturated) | tile (soft) |
|---------|----------------|-------------|
| Science | `#17A0AE` | `#8FD6E1` |
| Math | `#F0533F` | `#F79E8C` |
| ELA | `#D19A1F` | `#F4CE5E` |
| Humanities | `#E07A3E` | `#F0B98C` |
| Self-Study | `#7C8A4E` | `#CFD39A` |
| Rabbit Hole | `#B657A0` | `#EBB7DE` |

**Per-track theming (important):** the two tracks are color-coded everywhere.
- **Interdisciplinary = teal** (`--teal` / soft `#8FD6E1`).
- **Math = yellow/gold**: accent **`#D19A1F`**, soft **`#F4CE5E`**.

The unit page sets `--u-accent` / `--u-accent-soft` on `#unit-app` and adds
`.theme-math` for math units. Badges, progress bars, word-card fronts, in-lesson
buttons, the switcher pill, the Big-Picture column, and the Parents switcher all follow
this teal-vs-gold split. **When you add a math unit it inherits the gold automatically**
(via `track: 'math'`); don't hardcode colors in a unit file.

---

## Typography

- **Serif — `Fraunces`** (`--serif`): all headings, titles, big display, blockquotes,
  card fronts. Loaded via `@import` from Google Fonts (optical sizing 9–144, weights
  400–900, italics). Falls back to Georgia.
- **Sans — `Inter`** (`--sans` / `--font`): body, UI, labels, eyebrows. Loaded from
  `rsms.me/inter`. Falls back to system-ui.
- **Eyebrows / labels:** Inter, ~0.72rem, weight 800, UPPERCASE, letter-spacing ~0.08–0.1em,
  usually a muted or accent color. This is the workhorse label style (`.u-sec`,
  `.tile-eyebrow`, `.yr-col-label`, `.u-switch-label`, `.std-face` side text).
- **Body copy:** Inter ~0.92–1rem, line-height ~1.5. Reader panes use Fraunces at 1.12rem /
  1.72 line-height for long-form reading.

---

## Loading style

Every page boots with a centered spinner in its content container, replaced on render:

```html
<div id="content"><div class="loading"><div class="spinner"></div>Loading…</div></div>
```
```css
.loading { text-align: center; padding: 44px; color: var(--text-dim); }
.spinner { width: 30px; height: 30px; border: 3px solid var(--line);
  border-top-color: var(--coral); border-radius: 50%;
  animation: spin 0.75s linear infinite; margin: 0 auto 12px; }
@keyframes spin { to { transform: rotate(360deg); } }
```
Loading text is friendly and specific ("Loading your unit…", "Reading his work…"). Images
load **eagerly** (no `loading="lazy"` — it left blank frames in some renderers).

---

## Components & their rules

- **Radius:** `--radius: 18px` (cards), `--radius-sm: 11px`. **Exception:** the Today
  gallery is **square (radius 0) and touching** — a d.school menu grid with 3px ink
  gutters and `align-items: stretch` so paired tiles are equal height (no ragged white
  space). Feature lesson tile spans both columns.
- **Borders & shadows:** the signature look is a **2–3px solid `--ink` border** plus an
  **offset hard shadow** (`box-shadow: 4–5px 5px 0 rgba(26,26,26,0.1)`), not soft blur.
- **Halftone texture:** color tiles carry a randomized dot texture (`.tile` + `tex-a…d`,
  optional `dots-pink/blue`). Keep it — it's core to the vibe.
- **Ribbons = corner tape.** A diagonal band that **crosses a corner side-to-side** (wide
  enough that both ends clip off-tile — never ends mid-tile), **colored a bolder shade of
  the tile** via `--ribbon` (NEVER black), at **varying angles** (`--rib-angle`), always
  **clear of the words** (headings sit bottom/left, tape sits top/right). See `.ribbon`,
  `.big-ribbon`.
- **Word cards (flashcards):** uniform size, **wrap-and-center** so a short last row is
  centered under the rest (symmetrical). Front = tile-soft color (teal or, for math, yellow).
- **Buttons:** `.btn-primary` = coral fill / white text (gold on math pages);
  `.btn-success` = green; `.btn-ghost` = ink outline. Pills have 2px ink borders + full radius.
- **Timers:** 30-min focus timers on the daily Today tiles (start/pause/reset, toast on
  finish). Give buttons breathing room from the timer.
- **Motion:** **hover-only and slow.** Tiles lift or show an inset ring on hover; ticker
  ribbons scroll only on hover; nothing auto-animates except the loading spinner.

---

## Layout patterns worth reusing

- **Today** = a textured, touching, square tile gallery. Summer (before Aug 1) shows only
  the two daily tiles; Aug 1–30 adds a unit preview; Aug 31+ is in session. A date picker
  (`?d=YYYY-MM-DD`) time-travels the whole page for sharing/previewing.
- **Two labeled, color-coded columns** for "one of each track" views: Big Picture's year
  arc and the Parents switcher both use `Interdisciplinary` (teal) | `Math` (gold),
  collapsing to one column under 760px.
- **Collapsible accordions** for anything that could get long (Portfolio units, Big-Picture
  standards cards) — closed by default, `<details>/<summary>`.

---

## Voice checklist for any new content

Direct to Crasher · HS reading level · no meta/fourth-wall · a real hook (a surprising
fact) · concrete examples (more than one) · pre-teach vocab · check understanding · tie
back to the essential question · connect to Medford/Rogue-Valley or his ebike where it's
honest, not forced.
