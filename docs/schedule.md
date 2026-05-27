# Summer Schedule Reference

## School Days (Mon–Thu only, no Fridays)
```
May 28–29 (Thu–Fri — partial week)
June 1–2  (Mon–Tue — partial week)
June 8–11, 15–18, 22–25
June 29 – July 2
July 7–10, 13–16, 20–23, 27–30
Aug 3–6, 10–13, 17–20, 24–27
```
Total: 52 school days.

## What Runs Every School Day (104 records total)
- **Read for 30 minutes** — Subject: ELA, Unit: Summer Reading
- **Khan Academy Math — 30 minutes** — Subject: Math, Unit: Summer Math — Get Ready for 7th Grade, link: https://www.khanacademy.org/math/get-ready-for-7th-grade

## WWII Self-Study (4 records — May 28–June 2 only)
- May 28: "Explore WWII Self-Study — Which countries were on which side and why"
- May 29: "Explore WWII Self-Study — go deeper"
- June 1: "Explore WWII Self-Study — final day"
- June 2: "Share what you learned about WWII"
All: Subject: Social Science, Unit: WWII Self-Study

## Self-Study (48 records — Mon–Thu, June 8–August 27)
Pattern repeats each week:
- **Monday:** "Pick your self-study topic for the week"
- **Tuesday:** "Explore your self-study topic"
- **Wednesday:** "Explore your self-study topic"
- **Thursday:** "Share what you learned"
All: Subject: Social Science, Unit: Self-Study

## Rabbit Hole (25 records)
- **May 28 only:** "Rabbit Hole — make something"
- **Every Tuesday (June 8 week → Aug 24 week):** "Rabbit Hole — share something" (12 records)
- **Every Thursday (June 8 week → Aug 24 week):** "Rabbit Hole — make something" (12 records)
All: Subject: Rabbit Hole, Unit: Your Brain This Week

## Science Units (16 records — Learn It + Show It pairs)
| Unit | Learn It | Show It |
|------|----------|---------|
| Unit 1 — Organism Growth & Reproduction | May 29 | June 1 |
| Unit 2 — Matter & Energy in Organisms | June 9 | June 11 |
| Unit 3 — Interactions in Ecosystems | June 16 | June 18 |
| Unit 4 — Matter & Energy in Ecosystems | June 23 | June 25 |
| Unit 5 — Ecosystems & Biodiversity | June 30 | July 2 |
| Unit 6 — Inheritance & Variation | July 8 | July 10 |
| Unit 7 — Evolution | July 15 | July 17 |
| Unit 8 — Natural & Artificial Selection | July 22 | July 24 |

Standards: Unit 1: MS-LS1-4/5, MS-LS3-2 · Unit 2: MS-LS1-6/7 · Unit 3: MS-LS2-1/2 · Unit 4: MS-LS2-3/4 · Unit 5: MS-LS2-5 · Unit 6: MS-LS3-1/2 · Unit 7: MS-LS4-1/2 · Unit 8: MS-LS4-4/5

## Checking / Adding Records
```bash
source /Users/danielleseay/CrasherLMS/.env.local
# Check what's scheduled for a date
curl -s -H "Authorization: Bearer $AIRTABLE_API_KEY" \
  "https://api.airtable.com/v0/$AIRTABLE_BASE_ID/To-Do%20Items?filterByFormula=%7BScheduled+date%7D%3D%222026-06-09%22" \
  | python3 -c "import sys,json; [print(r['fields']['Item name']) for r in json.load(sys.stdin)['records']]"
```

Do NOT re-run `populate-schedule.mjs` — it will create duplicates. It is gitignored.
