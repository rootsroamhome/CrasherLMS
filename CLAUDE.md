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
index.html / index.js       — Daily to-do list (main page) w/ date nav + rotating fun facts
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

## Adding / editing science lessons
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
- Subjects in use: `Science`, `Math`, `ELA`, `Self-Study`, `Rabbit Hole`. (`Self-Study` was added to the Airtable single-select via `typecast:true`.)
- `repopulate-todos.mjs` is the OLD summer loader — do not run it; use `populate-7th-grade.mjs` to reset the year.

## Key Behaviors
- **index.js:** Loads `Not Started` items with `Scheduled date <= today`. Carry-forward increments `Days carried` once per calendar day (localStorage flag). Carry-forward is fire-and-forget (non-blocking).
- **Date navigation:** Prev/Next buttons on index page. Past = read-only. Future = grayed preview. "Back to Today" button appears when not on today's date.
- **Mark Done flow:** Opens inline form, student enters where work is stored, PATCH updates Status + Completion date + Student notes.
- **Fetch timeout:** All fetches abort at 10 seconds.

→ See [`docs/deployment.md`](docs/deployment.md) for Netlify setup details.
