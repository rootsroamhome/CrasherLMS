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
index.html / index.js       — Daily to-do list (main page) with date navigation
rabbit-hole.html / .js      — Student rabbit-hole submissions
big-picture.html / .js      — Parent dashboard (unit progress, standards tracker)
content-*.html              — Static lesson content pages
styles.css                  — Shared dark-mode styles
config.js                   — CONFIG.apiBase + TABLES + SUBJECT_COLORS constants
netlify/functions/airtable.js — Serverless proxy; reads AIRTABLE_API_KEY + AIRTABLE_BASE_ID from env
netlify.toml                — Redirects /api/airtable/* → function; sets publish = "."
populate-schedule.mjs       — One-time script that loaded 197 summer records (already run, do not re-run)
setup-airtable.mjs          — One-time table-creation script (already run, do not re-run)
```

## Airtable Credentials (for direct API calls or MCP)
Stored in `.env.local` (gitignored). Read them with: `cat .env.local`
- **Base ID:** in `.env.local` as `AIRTABLE_BASE_ID`
- **API Key (PAT):** in `.env.local` as `AIRTABLE_API_KEY`
- **Direct API base URL:** `https://api.airtable.com/v0/{AIRTABLE_BASE_ID}`
- **Browser proxy URL:** `/api/airtable` (goes through Netlify function)

→ See [`docs/airtable.md`](docs/airtable.md) for full schema and field names.

## Current Broken State (as of 2026-05-27) — MUST FIX FIRST
**Symptom:** All pages show "Couldn't load your list / NOT_FOUND" or "Couldn't load data / NOT_FOUND"  
**Cause:** Netlify env vars `AIRTABLE_API_KEY` and `AIRTABLE_BASE_ID` are set but have wrong/typo'd values.  
**Fix:** Go to Netlify → Projects → CrasherLMS → Project configuration → Environment variables. Delete both and re-add:

| Key | Value |
|-----|-------|
| `AIRTABLE_BASE_ID` | value from `.env.local` |
| `AIRTABLE_API_KEY` | value from `.env.local` |

Then trigger **Deploy project** in Netlify. Direct API calls with these values return data correctly (verified).

## Data State
- **197 summer schedule records** already in Airtable (populated 2026-05-27 via `populate-schedule.mjs`). **Do not run that script again** — it will duplicate everything.
- 3 example records from initial setup also exist (dated 2026-05-15, Subject: Math/Science/Social Science).
- See [`docs/schedule.md`](docs/schedule.md) for the full schedule structure.

## Key Behaviors
- **index.js:** Loads `Not Started` items with `Scheduled date <= today`. Carry-forward increments `Days carried` once per calendar day (localStorage flag). Carry-forward is fire-and-forget (non-blocking).
- **Date navigation:** Prev/Next buttons on index page. Past = read-only. Future = grayed preview. "Back to Today" button appears when not on today's date.
- **Mark Done flow:** Opens inline form, student enters where work is stored, PATCH updates Status + Completion date + Student notes.
- **Fetch timeout:** All fetches abort at 10 seconds.

→ See [`docs/deployment.md`](docs/deployment.md) for Netlify setup details.
