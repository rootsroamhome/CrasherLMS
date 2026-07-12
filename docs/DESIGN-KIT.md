# HomeSkewl Design Kit — reusable page elements & rules

A menu of the design building blocks we worked out (first on the **Today** page). Use it
to build **any new track or page** so everything feels like one system. Pick and mix the
elements — **a new page should share these elements, but it does NOT have to be laid out
like Today.** This doc exists so you can build without re-deriving decisions from scratch.

Read alongside [`STYLE-GUIDE.md`](STYLE-GUIDE.md) (the overall visual system + hard rules).
The reference implementation lives in **`index.js`** + **`styles.css`** (the Today gallery).

---

## Hard rules (never break these)

1. **Real photos only.** Topical, high-quality, **self-hosted** in `assets/units/`, and
   **looked at before committing.** No AI images, no random/keyword stock. Source via the
   Wikipedia recipe (below), credit each in `assets/units/CREDITS.txt`. If you can't find a
   good real photo, use **no photo** (a fill treatment or plain color) — never a bad one.
2. **Two typefaces only:** **Fraunces** (serif) + **Inter** (sans). No new fonts. The
   d.school "two-voice" feel comes from *mixing* these per tile, not from adding faces.
3. **Color means track.** Each track owns one color; cream + black are the only neutrals.
   Don't color anything decoratively.
4. **Coral is reserved.** `#F0533F` is for small accents (a ribbon, the spinner) and is
   saved for a future "gap-filler lessons" track. **Never** a track/tile fill, never a
   button fill.
5. **No meta in student copy.** Write to Crasher directly, HS reading level, keep it fun —
   never reference difficulty/scaffolding. (See [`STYLE-GUIDE.md`](STYLE-GUIDE.md).)
6. **Flat.** No dot textures, no background "glow" behind tiles. Solid color + the fills below.
7. **Renders on iPad + phone.** Equal-size cards on desktop; stack + size-to-content on mobile.

### Track colors (assigned so far)
| Track | Accent (bold) | Tile (soft) |
|-------|--------------|-------------|
| Interdisciplinary (core) | `--teal #17A0AE` | `#8FD6E1` |
| Math | `#D19A1F` | `#F4CE5E` (gold) |
| College Credit (CLEP) | `#E07A3E` | `#F0B98C` (brown) |
| **A new track → pick its own** | from the subject palette in `config.js` | soft version |

**Choosing a new track color:** pull from `SUBJECT_COLORS` (`config.js`) or the STYLE-GUIDE
palette. Make it clearly distinct from teal/gold/brown. **Avoid plum/magenta** (Danielle
rejected it) and **coral** (reserved). Good unused candidates: olive/sage `#7C8A4E`/`#CFD39A`
(currently only the weekly tile), or a deeper blue/green not yet in play.

---

## The element menu

Each element is optional. Class names / values reference the live Today code.

### 1. Flat tile
Solid track/neutral color, `border-radius: ~7px`, **no border, no shadow**, a faint hairline
edge (`box-shadow: inset 0 0 0 1px rgba(26,26,26,.08)`), and **`overflow: hidden`** (needed so
the ribbon and ghost-letter fills clip cleanly). Kill the old dot texture on any reused tile
(`.tile::before/::after { display:none }`).

### 2. Vertical dotted label (`.tile-side`)
A small rotated eyebrow up the left edge with a leading dot, **black ink** (light on black
tiles). It names **the KIND of thing** the tile is — not all "lesson." Examples in use:
`THEMATIC UNIT · MATH · BE LITERATE · CLEP · THIS WEEK · SEE YOUR WORK`. Give a new track its
own clear word.

### 3. The three type recipes (mix these — don't use one everywhere)
- **A — inset photo + Fraunces serif title + Inter meta pills.** The default "lesson" look.
- **B — Inter heavy-sans title (`.tile-title-sans`, 900, uppercase) + a Fraunces serif-italic
  line as the graphic (`.tile-display`).** For meaty/feature tiles (CLEP uses this).
- **C — one big Fraunces word as the artwork** (short daily/simple tiles). Keep it **one line**
  (fit/shrink it; never wrap).

### 4. Buttons & pills (simple, neutral)
- **Outline pills** for most actions: transparent bg, `2px solid` ink (white on dark tiles),
  full radius. **No coral fills.**
- **Primary action = neutral black fill** (e.g. a timer Start): black bg, cream text.
- **Small "✓ Done" pill** (`.daily-done`): tiny outline pill, sits **bottom-right**
  (`margin-left:auto`), **fills solid black** when checked (`.is-checked`).
- **Plain text CTA** (`.tile-cta`, e.g. "Start →") when you don't want a button box — matches
  across tiles.

### 5. Corner-tape ribbon (`.ribbon` + `.ribbon-track`)
A diagonal tape across the **top-right** corner, **coral** accent, one word. Needs the tile's
`overflow:hidden`. Use sparingly (Portfolio has one). Sized for a normal tile: see
`.today-tile .ribbon`.

### 6. Photos — the day-rotating mix
- **Photo band** = a real photo at the top of a tile; text flows **below** it.
- **Only some tiles show a photo on a given day**, the set **rotates by date**, and **never
  every tile at once.** Logic: `computePhotoPlan()` / `PHOTO_PLAN` in `index.js` (a tile is
  eligible only if it has a real image; ~60% day-seeded chance; caps below "all").
- A unit is photo-eligible only once it has a **real topical image** (`image:` field). Gate
  not-yet-photographed tracks with a `PHOTO_READY` flag until their photos exist (that's how
  Math is currently held out).

### 7. Fills for a photo-less tile (cycled, day-varied — never templated)
When a tile has **no photo** that day it gets **one of three treatments**, cycled across the
no-photo tiles with a day-seeded offset so neighbours differ and it changes daily
(`computeFillPlan()` / `FILL_PLAN`):
- **plain** — just the solid color.
- **arcs** (`.tile-arcs`) — **very faint** concentric rings from a corner
  (`repeating-radial-gradient`, ~`0.055` alpha; two corner variants `.alt`).
- **ghost letter** (`.tile-ghost`) — **one** big serif initial, **whitish & transparent**
  (`rgba(255,255,255,.42)`), **~33rem**, spanning the whole tile, bleeding off the edge (a
  *suggestion* of a letter, not a whole one). One letter — **never a whole word.**

### 8. Grid / layout
- **Desktop:** equal-size cards — `grid-template-columns: repeat(3,1fr); grid-auto-rows: 1fr`
  so **every card is the same size**. **No hero** — no tile is bigger/more important than the rest.
- **Tablet:** 2 columns. **Phone (≤640px):** 1 column, `grid-auto-rows: auto` (size to content).
- Your new page can arrange these tiles differently (rows, sections, a switcher) — just keep
  cards uniform and the elements consistent.

---

## The photo recipe (copy-paste)

```bash
# 1) real image URL for a topic (keyless Wikipedia API)
curl -s "https://en.wikipedia.org/api/rest_v1/page/summary/<Wikipedia_Title>" \
  | python3 -c "import sys,json;print(json.load(sys.stdin).get('originalimage',{}).get('source',''))"
# 2) download + resize to ~1100px into the repo
curl -sL -A "Mozilla/5.0" "<that url>" -o /tmp/x.jpg
sips -Z 1100 /tmp/x.jpg --out assets/units/<name>.jpg
# 3) OPEN IT and confirm it's real, topical, high quality, appropriate — THEN commit
# 4) add a line to assets/units/CREDITS.txt
```
CLEP's six photos were sourced exactly this way (Ziggurat of Ur, Parthenon, Colosseum,
Chartres, Florence Duomo, Ortelius world map).

---

## Wiring a new track in

1. Give each unit `track: '<newtrack>'` (interdisciplinary units have **no** `track`; that's
   how the core filter works — `HS_UNITS.filter(u => !u.track)`). **Any "which unit is active"
   or "core" filter must exclude the new track** (don't reuse a bare `track !== 'math'` — it
   would swallow other tracks; that bug bit CLEP).
2. Add its `<script>` to **all five** pages that read `HS_UNITS`: `index.html`, `unit.html`,
   `big-picture.html`, `portfolio.html`, `parent-guide.html`.
3. Add its color to the switcher group, the Big-Picture column, and the Portfolio/Parents
   track columns (these are their **own** layouts — not the Today tile look).
4. Give units a real `image:` (see recipe) and add the track to the photo mix; until then keep
   a `PHOTO_READY` gate so no placeholder shows.

---

## Rejected options (don't bring these back)

- Dot texture over tiles; a grey/white "back glow" behind content.
- Halftone **bloom** and "big circular arrow on every tile" (auditioned, not chosen).
- A **big dark** faded letter, or a **whole-word** ghost ("too busy").
- **Plum/magenta** as a track color; **coral** as a tile/button fill.
- A **hero** tile that's larger than the others (every card is equal weight).
- Green/coral **filled** buttons on tiles (outline, or neutral-black for a primary action).
