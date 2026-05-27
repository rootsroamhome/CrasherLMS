# Deployment Reference

## Netlify Setup
- **Repo:** `github.com/rootsroamhome/CrasherLMS`
- **Branch:** `main` → auto-deploys on push
- **Publish dir:** `.` (root — no build step)
- **Functions dir:** `netlify/functions/`

## Required Environment Variables
Must be set in **Netlify → Projects → CrasherLMS → Project configuration → Environment variables**.
Actual values are in `.env.local` (gitignored — `cat .env.local`).

| Key | Where to find value |
|-----|---------------------|
| `AIRTABLE_API_KEY` | `.env.local` → `AIRTABLE_API_KEY` |
| `AIRTABLE_BASE_ID` | `.env.local` → `AIRTABLE_BASE_ID` |

After changing env vars, trigger **Deploy project** in Netlify.

## How the Proxy Works
```
Browser → /api/airtable/To-Do%20Items?filterByFormula=...
  ↓  (netlify.toml redirect, status 200 rewrite)
Netlify function → /.netlify/functions/airtable/To-Do%20Items?filterByFormula=...
  ↓  (function strips prefix, appends BASE_ID, forwards with API key)
Airtable API → https://api.airtable.com/v0/{BASE_ID}/To-Do%20Items?filterByFormula=...
```

The function is at `netlify/functions/airtable.js`. It reads `event.path` and `event.rawQuery`, strips the function prefix, and forwards to Airtable with the auth header.

## Diagnosing Errors

**"NOT_FOUND"** → Netlify env vars are set but wrong (typo). The API key has a dot in it — common copy-paste failure. Re-enter both values exactly from `.env.local`.

**"Missing AIRTABLE_API_KEY..."** → Netlify env vars not set at all.

**"Loading forever"** → Was caused by `runCarryForward` blocking render. Fixed in commit `cd53054` — carry-forward is now fire-and-forget. All fetches also have a 10-second AbortController timeout.

To verify credentials work (bypasses Netlify entirely):
```bash
source /Users/danielleseay/CrasherLMS/.env.local
curl -s -H "Authorization: Bearer $AIRTABLE_API_KEY" \
  "https://api.airtable.com/v0/$AIRTABLE_BASE_ID/To-Do%20Items?maxRecords=1" \
  | python3 -c "import sys,json; d=json.load(sys.stdin); print('OK' if 'records' in d else d)"
```
Expected: `OK` — if this works but the site still shows errors, the Netlify env vars are wrong.

## Git / Deploy Workflow
```bash
cd /Users/danielleseay/CrasherLMS
git add <files>
git commit -m "message"
git push origin main   # triggers Netlify auto-deploy
```

## Cache Note
`*.js` and `*.css` have `Cache-Control: public, max-age=3600`. If users see stale JS behavior after a deploy, add `?v=N` to the script tag in `index.html` to bust the cache.
