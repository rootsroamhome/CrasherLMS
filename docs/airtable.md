# Airtable Reference

## Credentials
Stored in `.env.local` (gitignored). Read with: `cat /Users/danielleseay/CrasherLMS/.env.local`
- `AIRTABLE_BASE_ID` — the base ID (starts with `app`)
- `AIRTABLE_API_KEY` — personal access token (starts with `pat`)

To call Airtable directly from Claude Code:
```bash
source /Users/danielleseay/CrasherLMS/.env.local
curl -H "Authorization: Bearer $AIRTABLE_API_KEY" \
  "https://api.airtable.com/v0/$AIRTABLE_BASE_ID/To-Do%20Items?maxRecords=5"
```

## Tables

### To-Do Items (`TABLES.todos`)
| Field | Type | Notes |
|-------|------|-------|
| `Item name` | singleLineText | Task title |
| `Subject` | singleSelect | Math, Science, Social Science, ELA, Health, Rabbit Hole |
| `Unit` | singleLineText | e.g. "Summer Reading", "Self-Study", "Unit 1 — Organism Growth & Reproduction" |
| `Standard code` | singleLineText | e.g. "MS-LS1-4, MS-LS1-5" (comma-separated for science items) |
| `I Can statement` | multilineText | Learning goal; also used for task description on simple items |
| `I'll Know I've Got It When` | multilineText | Mastery criteria |
| `Content page link` | url | Relative path (e.g. `content-science.html`) or full URL (Khan Academy) |
| `Status` | singleSelect | `Not Started` or `Done` |
| `Scheduled date` | date (ISO) | `YYYY-MM-DD` |
| `Completion date` | date (ISO) | Set when marked Done |
| `Student notes` | multilineText | Student's response when marking Done |
| `Days carried` | number (int) | Incremented once/day when item is overdue |

### Standards (`TABLES.standards`)
| Field | Type |
|-------|------|
| `Standard code` | singleLineText |
| `Subject` | singleSelect |
| `I Can statement` | multilineText |
| `Unit` | singleLineText |
| `Completed` | checkbox |
| `Completion date` | date (ISO) |

### Schedule (`TABLES.schedule`)
| Field | Type |
|-------|------|
| `Date` | date (ISO) |
| `Notes` | multilineText |

## Common Filter Formulas

```
# Today's active items
AND({Status}="Not Started", {Scheduled date}<="2026-05-27")

# Items for a specific date
{Scheduled date}="2026-06-09"

# All items for a subject
{Subject}="Science"

# Done items
{Status}="Done"
```

## Batch Create (up to 10 records per request)
```javascript
fetch(`https://api.airtable.com/v0/${BASE_ID}/To-Do%20Items`, {
  method: 'POST',
  headers: { Authorization: `Bearer ${KEY}`, 'Content-Type': 'application/json' },
  body: JSON.stringify({
    records: [
      { fields: { 'Item name': '...', Subject: '...', Status: 'Not Started', 'Scheduled date': '2026-06-09' } },
    ]
  })
})
```

## Data Already Loaded (DO NOT RE-RUN populate-schedule.mjs)
197 records inserted 2026-05-27 covering:
- Read for 30 minutes (ELA) — every school day
- Khan Academy Math (Math) — every school day  
- WWII Self-Study items — May 28–June 2
- Self-Study items (Social Science) — Mon–Thu, June 8–August 27
- Rabbit Hole items — Tuesdays + Thursdays, June 8–August 27
- Science units 1–8 (Learn It + Show It) — specific dates through July 24

School days are Mon–Thu only, no Fridays, running May 28–August 27.
