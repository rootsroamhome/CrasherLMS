# CrasherLMS — Claude Code Context

## What This Is
Homeschool LMS for one middle-school student (going into 7th grade). Daily to-do list pulled from Airtable, served as a static site via Netlify with a serverless proxy function. No framework — plain HTML/CSS/JS.

## Tech Stack
| Layer | Tool |
|-------|------|
| Frontend | Vanilla HTML + CSS + JS |
| Database | Airtable (REST API v0) |
| Hosting | Netlify (static site + Functions) |
| Proxy | `netlify/functions/airtable.js` — all browser→Airtable calls route through here |
| Repo | `github.com/rootsroamhome/CrasherLMS` → auto-deploys to Netlify on push to `main` |

## File Map
```
index.html / index.js       — "Today" landing (units-driven, NO Airtable): the current unit's next
                              card links into My Unit, + a daily Math/Reading strip w/ focus timers.
                              Daily checks are date-keyed in localStorage and never roll over.
unit.html / unit.js          — Self-paced unit renderer. Loads every unit-*.js (they self-register
                              into window.HS_UNITS); ?u=<id> selects one. Progress/answers/quizzes
                              per unit in localStorage. All external + reading links open new tab.
unit-rivers.js / unit-metals.js — Unit content (Unit 1, Unit 2). Same card/block schema.
reader.html / reader.js / readings.js — Clean, ad-free, printable reading panes at reader.html?doc=<id>.
                              Lessons link here instead of outside sites; readings.js holds the text.
big-picture.html / .js       — Mastery + portfolio dashboard (units-driven, NO Airtable): reads each
                              unit's localStorage → cards done, quiz chart, vocab, KWL, every answer.
this-week.html / .js         — Weekly Self-Study ⇄ Rabbit Hole choice (pick per week, saved in localStorage)
lesson.html / lesson.js      — ONE generic science lesson renderer; matches ?recordId item name → LESSONS
lessons.js                   — All science lesson content (hook / Learn It / Show It), keyed by item-name phrase
curriculum.js                — Source of truth: units, standards, hot-spots, tiered parent activities
parent-guide.html / .js      — Parent page: week ahead, time planned, hot-spots, Small/Medium/Large activities
big-picture.html / .js       — Progress dashboard (unit progress, standards tracker)
learning-review.html         — AI-scored review of responses (uses netlify/functions/score-response.js)
rabbit-hole.html / .js        — Legacy standalone rabbit-hole page (kept; superseded by this-week.html)
content-*.html               — Legacy per-unit science pages from the summer Life Science units (kept as archive)
styles.css                   — Shared styles. Editorial light theme: Fraunces serif + Inter, cream, ticker ribbons
config.js                    — CONFIG.apiBase + TABLES + SUBJECT_COLORS constants
netlify/functions/airtable.js — Serverless proxy; reads AIRTABLE_API_KEY + AIRTABLE_BASE_ID from env
netlify.toml                — Redirects /api/airtable/* → function; sets publish = "."
populate-7th-grade.mjs       — Rebuilds the 2026–27 year (To-Do Items + Standards). Re-run to reset the year.
populate-schedule.mjs / repopulate-todos.mjs / setup-airtable.mjs — Older one-time scripts (superseded)
```

## Adding / editing a thematic unit (the current model)
Each unit is one `unit-<id>.js` file that does `window.HS_UNITS.push({ id, short, title, eq,
vocab:{mustOwn,frayer}, cards:[…] })`. Add the file to the `<script>` list in `unit.html`,
`index.html`, and `big-picture.html` (all three read HS_UNITS). Cards are ordered; each has
`{id, n, title, subject, minutes, standards, blocks:[…]}`. Block types the renderer understands:
hook, video (`yt` embed or `url` link-out), read (inline `body` and/or `url` → prefer
`reader.html?doc=…`), answers, build, quiz, flashcards, matching, frayer, kwl/kwlback/kwlfinish,
vocabsort, rubric, prose, deeper, next, done. Off-site readings should get a `readings.js` entry
and link via `reader.html?doc=<id>`. See `docs/YEAR-MAP.md` for the planned units + standards map.

## Adding / editing science lessons (older date-list model)
A science To-Do item links to `lesson.html` and its **Item name** contains a phrase
(e.g. `Atoms & Molecules — Learn It`). `lesson.js` matches that phrase against a key in
`lessons.js`. To add a lesson: add an entry to `LESSONS` in `lessons.js`, then schedule
Learn It / Show It items whose names contain that key in `populate-7th-grade.mjs`.
Units + parent activities live in `curriculum.js` (the `unit` label must match the item's `Unit`).

## Airtable Credentials (for direct API calls or MCP)
Stored in `.env.local` (gitignored). Read them with: `cat .env.local`
- **Base ID:** in `.env.local` as `AIRTABLE_BASE_ID`
- **API Key (PAT):** in `.env.local` as `AIRTABLE_API_KEY`
- **Direct API base URL:** `https://api.airtable.com/v0/{AIRTABLE_BASE_ID}`
- **Browser proxy URL:** `/api/airtable` (goes through Netlify function)

→ See [`docs/airtable.md`](docs/airtable.md) for full schema and field names.

## Fixed: NOT_FOUND bug (was misdiagnosed as env var typo, 2026-05-27 → fixed 2026-07-10)
**Symptom:** All pages showed "Couldn't load your list / NOT_FOUND" or "Couldn't load data / NOT_FOUND"  
**Real cause:** `netlify/functions/airtable.js` stripped the wrong path prefix. The browser calls `/api/airtable/*`, which `netlify.toml` rewrites (status 200) to the function — but Netlify does **not** rewrite `event.path` inside the function; it still holds the original request path (`/api/airtable/To-Do%20Items`), not the destination path (`/.netlify/functions/airtable/To-Do%20Items`). The function was stripping `/.netlify/functions/airtable`, which never matched, so the full un-stripped path got appended to the Airtable URL and Airtable correctly 404'd it.  
**Fix:** `subPath` extraction now strips either prefix (`/api/airtable` or `/.netlify/functions/airtable`), verified locally via `netlify dev` and confirmed with real data loading in-browser.  
**Note:** an earlier commit (`d3b1990`) worked around this by pointing `config.js` `apiBase` directly at `/.netlify/functions/airtable`, bypassing the redirect. Both routes work now; `apiBase` could be switched back to `/api/airtable` if desired. The old advice to re-check Netlify dashboard env vars for typos was a red herring — if NOT_FOUND ever reappears, check the code path first, not the dashboard.

## Data State (2026–2027 7th grade year)
- Airtable was **wiped and rebuilt 2026-07-10** by `populate-7th-grade.mjs`: 381 To-Do Items + 15 Standards. The old summer/Life-Science records are gone.
- School calendar: **Mon–Thu, 2026-08-31 → 2027-06-11**, holidays/breaks skipped (143 school days, 37 weeks). Holiday list is hard-coded in the populate script — edit there.
- Science = Oregon 7th grade NGSS sequence (Life Science was completed over summer, so this year is Physical + Earth/Space + a capstone energy/ebike unit). 28 Learn/Show + review weeks fill the first ~28 weeks; the rest are flex.
- Subjects in use: `Science`, `Math`, `ELA` (daily independent reading — always his choice), `Humanities` (integrated ELA + world-history units), `Self-Study`, `Rabbit Hole`. (New single-select options were added to Airtable via `typecast:true`.)
- **Humanities** = integrated ELA + Oregon world-history, 6 units × 4 lessons, scheduled Mon (Learn) / Wed (Show); science is Tue/Thu. Standards in the tracker carry both CCSS ELA (RI/RL/W/SL) and Oregon SS codes. One choice-novel unit (Humanities 5). "Show It" leans on products (build a model, make a diagram, make a Canva presentation) via `showIt` options in `lessons.js`.
- Weekly rhythm: Math + independent Reading daily; Humanities Mon/Wed; Science Tue/Thu; the Self-Study⇄Rabbit-Hole pick on Mon.
- `repopulate-todos.mjs` is the OLD summer loader — do not run it; use `populate-7th-grade.mjs` to reset the year.

## Key Behaviors (current, units model)
- **Today (index.js):** picks the "active" unit = first unit not 100% done, shows its next unlocked
  card as a deep link into `unit.html?u=<id>`. Daily Math/Reading anchors live in the `DAILY` array;
  their "done today" flags are keyed by **local** date and never carry over.
- **Unit progression (unit.js):** the next card unlocks when the current one is Marked Done. No dates.
  Answers/quiz/KWL/vocab/match all autosave to `localStorage['homeskewl_unit_<id>']`.
- **Big Picture (big-picture.js):** reconstructs answer keys from block structure
  (`<cardId>_<blockIndex>_<promptIndex>`) to show every saved answer; reads localStorage only.
- **New-tab links:** unit.js forces `target=_blank` on every `http` and `reader.html` link inside a
  lesson; internal unit nav + the map's `#` jumps stay in-tab.
- *(Legacy, still used by this-week.js / parent-guide.js:)* Airtable fetches abort at 10s; the old
  date-list / carry-forward logic was removed from index.js this pass.

→ See [`docs/deployment.md`](docs/deployment.md) for Netlify setup details.
