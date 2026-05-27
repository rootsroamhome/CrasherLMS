/**
 * repopulate-todos.mjs
 * Deletes all existing To-Do Items and recreates them from scratch.
 * Run with: AIRTABLE_API_KEY=... AIRTABLE_BASE_ID=... node repopulate-todos.mjs
 */

const API_KEY  = process.env.AIRTABLE_API_KEY;
const BASE_ID  = process.env.AIRTABLE_BASE_ID;
const TABLE    = 'To-Do Items';
const BASE_URL = `https://api.airtable.com/v0/${BASE_ID}/${encodeURIComponent(TABLE)}`;
const HEADERS  = { Authorization: `Bearer ${API_KEY}`, 'Content-Type': 'application/json' };

const sleep = ms => new Promise(r => setTimeout(r, ms));

// ── Airtable helpers ──────────────────────────────────────────────────────────

async function fetchAllIds() {
  const ids = [];
  let offset;
  do {
    const url = `${BASE_URL}?fields[]=Item+name${offset ? `&offset=${offset}` : ''}`;
    const res  = await fetch(url, { headers: HEADERS });
    const data = await res.json();
    for (const r of (data.records || [])) ids.push(r.id);
    offset = data.offset;
    await sleep(220);
  } while (offset);
  return ids;
}

async function deleteAll(ids) {
  console.log(`Deleting ${ids.length} existing records…`);
  for (let i = 0; i < ids.length; i += 10) {
    const batch = ids.slice(i, i + 10);
    const qs    = batch.map(id => `records[]=${id}`).join('&');
    const res   = await fetch(`${BASE_URL}?${qs}`, { method: 'DELETE', headers: HEADERS });
    if (!res.ok) console.error('Delete error:', await res.text());
    await sleep(220);
  }
  console.log('All existing records deleted.');
}

async function createAll(records) {
  console.log(`Creating ${records.length} records…`);
  let created = 0;
  for (let i = 0; i < records.length; i += 10) {
    const batch = records.slice(i, i + 10);
    const res   = await fetch(BASE_URL, {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify({ records: batch.map(fields => ({ fields })) }),
    });
    const data = await res.json();
    if (!res.ok) console.error('Create error:', JSON.stringify(data));
    else created += data.records.length;
    await sleep(220);
  }
  console.log(`Done — created ${created} records.`);
}

// ── Data ──────────────────────────────────────────────────────────────────────

// All school days (corrected — Mon–Thu except the opening Thu–Fri and Mon–Tue partial weeks)
const schoolDays = [
  '2026-05-28','2026-05-29',
  '2026-06-01','2026-06-02',
  '2026-06-08','2026-06-09','2026-06-10','2026-06-11',
  '2026-06-15','2026-06-16','2026-06-17','2026-06-18',
  '2026-06-22','2026-06-23','2026-06-24','2026-06-25',
  '2026-06-29','2026-06-30','2026-07-01','2026-07-02',
  '2026-07-06','2026-07-07','2026-07-08','2026-07-09',
  '2026-07-13','2026-07-14','2026-07-15','2026-07-16',
  '2026-07-20','2026-07-21','2026-07-22','2026-07-23',
  '2026-07-27','2026-07-28','2026-07-29','2026-07-30',
  '2026-08-03','2026-08-04','2026-08-05','2026-08-06',
  '2026-08-10','2026-08-11','2026-08-12','2026-08-13',
  '2026-08-17','2026-08-18','2026-08-19','2026-08-20',
  '2026-08-24','2026-08-25','2026-08-26','2026-08-27',
];

// Weekly Mon–Thu blocks starting June 8 (positional: [Mon, Tue, Wed, Thu])
const weeks = [
  ['2026-06-08','2026-06-09','2026-06-10','2026-06-11'],
  ['2026-06-15','2026-06-16','2026-06-17','2026-06-18'],
  ['2026-06-22','2026-06-23','2026-06-24','2026-06-25'],
  ['2026-06-29','2026-06-30','2026-07-01','2026-07-02'],
  ['2026-07-06','2026-07-07','2026-07-08','2026-07-09'],
  ['2026-07-13','2026-07-14','2026-07-15','2026-07-16'],
  ['2026-07-20','2026-07-21','2026-07-22','2026-07-23'],
  ['2026-07-27','2026-07-28','2026-07-29','2026-07-30'],
  ['2026-08-03','2026-08-04','2026-08-05','2026-08-06'],
  ['2026-08-10','2026-08-11','2026-08-12','2026-08-13'],
  ['2026-08-17','2026-08-18','2026-08-19','2026-08-20'],
  ['2026-08-24','2026-08-25','2026-08-26','2026-08-27'],
];

const base = extra => ({
  Status: 'Not Started',
  'Days carried': 0,
  ...extra,
});

const records = [];

// ── Daily: Read for 30 minutes ───────────────────────────────────────────────
for (const date of schoolDays) {
  records.push(base({
    'Item name':       'Read for 30 minutes',
    Subject:           'ELA',
    Unit:              'Summer Reading',
    'I Can statement': 'Read whatever you want for 30 minutes',
    'Scheduled date':  date,
  }));
}

// ── Daily: Khan Academy Math ─────────────────────────────────────────────────
for (const date of schoolDays) {
  records.push(base({
    'Item name':        'Khan Academy Math — 30 minutes',
    Subject:            'Math',
    Unit:               'Summer Math — Get Ready for 7th Grade',
    'I Can statement':  'Work through Khan Academy modules for 30 minutes',
    'Content page link':'https://www.khanacademy.org/math/get-ready-for-7th-grade',
    'Scheduled date':   date,
  }));
}

// ── WWII Self-Study ───────────────────────────────────────────────────────────
const wwiiICan  = 'I can explain which major countries fought on each side in WWII and give reasons why';
const wwiiIKnow = 'I can name the Allied and Axis powers and explain at least two reasons countries chose the side they did';

records.push(base({
  'Item name':                  'Explore WWII Self-Study — Which countries were on which side and why',
  Subject:                      'Social Science',
  Unit:                         'WWII Self-Study',
  'I Can statement':            wwiiICan,
  "I'll Know I've Got It When": wwiiIKnow,
  'Scheduled date':             '2026-05-28',
}));

records.push(base({
  'Item name':                  'Explore WWII Self-Study — go deeper',
  Subject:                      'Social Science',
  Unit:                         'WWII Self-Study',
  'I Can statement':            wwiiICan,
  "I'll Know I've Got It When": wwiiIKnow,
  'Scheduled date':             '2026-05-29',
}));

records.push(base({
  'Item name':                  'Explore WWII Self-Study — final day',
  Subject:                      'Social Science',
  Unit:                         'WWII Self-Study',
  'I Can statement':            wwiiICan,
  "I'll Know I've Got It When": wwiiIKnow,
  'Scheduled date':             '2026-06-01',
}));

records.push(base({
  'Item name':                  'Share what you learned about WWII',
  Subject:                      'Social Science',
  Unit:                         'WWII Self-Study',
  'I Can statement':            'I can share what I learned about WWII in a format I choose',
  "I'll Know I've Got It When": "I've shown someone what I learned about WWII — however I want to do it\n\nOptions: make a slideshow, record a video or voice memo, teach a parent, make a drawing or diagram, write about it, or anything else that shows what you know",
  'Scheduled date':             '2026-06-02',
}));

// ── Rabbit Hole — May 28 only ────────────────────────────────────────────────
records.push(base({
  'Item name':                  'Rabbit Hole — make something',
  Subject:                      'Rabbit Hole',
  Unit:                         'Your Brain This Week',
  'I Can statement':            'I can make something this week — whatever I want, whatever format',
  "I'll Know I've Got It When": 'I made something and put it somewhere or showed someone',
  'Scheduled date':             '2026-05-28',
}));

// ── Weekly: Self-Study + Rabbit Hole (June 8 – Aug 27) ──────────────────────
const shareDesc = 'Options: make a slideshow, record a video or voice memo, teach a parent, make a drawing or diagram, write about it, or anything else that shows what you know';

for (const [mon, tue, wed, thu] of weeks) {
  // Monday — Pick topic
  records.push(base({
    'Item name':                  'Pick your self-study topic for the week',
    Subject:                      'Social Science',
    Unit:                         'Self-Study',
    'I Can statement':            "I can identify something I'm curious about and decide how I want to learn about it this week",
    "I'll Know I've Got It When": 'I have a topic and a plan for how I\'m going to explore it',
    'Scheduled date':             mon,
  }));

  // Tuesday — Explore
  records.push(base({
    'Item name':                  'Explore your self-study topic',
    Subject:                      'Social Science',
    Unit:                         'Self-Study',
    'I Can statement':            'I can research and explore my chosen topic using sources I find',
    "I'll Know I've Got It When": "I've spent real time learning about my topic and have notes, ideas, or things I want to share",
    'Scheduled date':             tue,
  }));

  // Tuesday — Rabbit Hole share
  records.push(base({
    'Item name':                  'Rabbit Hole — share something',
    Subject:                      'Rabbit Hole',
    Unit:                         'Your Brain This Week',
    'I Can statement':            'I can share something weird, interesting, or cool that I found this week',
    "I'll Know I've Got It When": "I've dropped a link, voice memo, photo, or reaction — something that shows what I'm into",
    'Scheduled date':             tue,
  }));

  // Wednesday — Explore
  records.push(base({
    'Item name':                  'Explore your self-study topic',
    Subject:                      'Social Science',
    Unit:                         'Self-Study',
    'I Can statement':            'I can research and explore my chosen topic using sources I find',
    "I'll Know I've Got It When": "I've spent real time learning about my topic and have notes, ideas, or things I want to share",
    'Scheduled date':             wed,
  }));

  // Thursday — Share
  records.push(base({
    'Item name':                  'Share what you learned',
    Subject:                      'Social Science',
    Unit:                         'Self-Study',
    'I Can statement':            'I can share what I learned this week in a format I choose',
    "I'll Know I've Got It When": `I've shown someone what I learned — however I want to do that\n\n${shareDesc}`,
    'Scheduled date':             thu,
  }));

  // Thursday — Rabbit Hole make
  records.push(base({
    'Item name':                  'Rabbit Hole — make something',
    Subject:                      'Rabbit Hole',
    Unit:                         'Your Brain This Week',
    'I Can statement':            'I can make something this week — whatever I want, whatever format',
    "I'll Know I've Got It When": 'I made something and put it somewhere or showed someone',
    'Scheduled date':             thu,
  }));
}

// ── Science Units ─────────────────────────────────────────────────────────────
const scienceUnits = [
  {
    learnName: 'Organism Growth & Reproduction — Learn It',
    showName:  'Organism Growth & Reproduction — Show It',
    unit:      'Unit 1 — Organism Growth & Reproduction',
    standards: 'MS-LS1-4, MS-LS1-5, MS-LS3-2',
    ican:      'I can use evidence to explain how animal behaviors and plant structures increase chances of successful reproduction, and how environmental and genetic factors influence growth',
    iknow:     'I can explain the difference between sexual and asexual reproduction, give a real example of each, and explain why genetic variation matters for survival',
    learnDate: '2026-05-29',
    showDate:  '2026-06-01',
  },
  {
    learnName: 'Matter & Energy in Organisms — Learn It',
    showName:  'Matter & Energy in Organisms — Show It',
    unit:      'Unit 2 — Matter & Energy in Organisms',
    standards: 'MS-LS1-6, MS-LS1-7',
    ican:      'I can construct a scientific explanation for how photosynthesis cycles matter and moves energy into and out of organisms, and model how food molecules are rearranged to release energy',
    iknow:     'I can explain photosynthesis and cellular respiration in plain language — what goes in, what comes out, and why both matter',
    learnDate: '2026-06-09',
    showDate:  '2026-06-11',
  },
  {
    learnName: 'Interactions in Ecosystems — Learn It',
    showName:  'Interactions in Ecosystems — Show It',
    unit:      'Unit 3 — Interactions in Ecosystems',
    standards: 'MS-LS2-1, MS-LS2-2',
    ican:      'I can analyze data to show how resource availability affects populations and construct an explanation predicting how organisms interact across ecosystems',
    iknow:     'I can explain what a trophic cascade is using a real example and predict what happens if you remove one key species',
    learnDate: '2026-06-16',
    showDate:  '2026-06-18',
  },
  {
    learnName: 'Matter & Energy in Ecosystems — Learn It',
    showName:  'Matter & Energy in Ecosystems — Show It',
    unit:      'Unit 4 — Matter & Energy in Ecosystems',
    standards: 'MS-LS2-3, MS-LS2-4',
    ican:      'I can model how matter cycles and energy flows through an ecosystem and construct an evidence-based argument for how ecosystem changes affect populations',
    iknow:     "I can explain the 10% energy rule, draw a food web, and argue using evidence why removing one part of an ecosystem has ripple effects",
    learnDate: '2026-06-23',
    showDate:  '2026-06-25',
  },
  {
    learnName: 'Ecosystems & Biodiversity — Learn It',
    showName:  'Ecosystems & Biodiversity — Show It',
    unit:      'Unit 5 — Ecosystems & Biodiversity',
    standards: 'MS-LS2-5',
    ican:      'I can evaluate competing design solutions for maintaining biodiversity and ecosystem services',
    iknow:     'I can explain what ecosystem services are, why biodiversity matters, and describe at least two real approaches humans use to protect it',
    learnDate: '2026-06-30',
    showDate:  '2026-07-02',
  },
  {
    learnName: 'Inheritance & Variation — Learn It',
    showName:  'Inheritance & Variation — Show It',
    unit:      'Unit 6 — Inheritance & Variation',
    standards: 'MS-LS3-1, MS-LS3-2',
    ican:      "I can model why gene mutations have harmful, beneficial, or neutral effects, and explain why sexual reproduction produces variation while asexual reproduction doesn't",
    iknow:     'I can explain what a mutation is, give an example of each type, and explain why sexual reproduction matters for evolution',
    learnDate: '2026-07-07',
    showDate:  '2026-07-09',
  },
  {
    learnName: 'Evolution — Learn It',
    showName:  'Evolution — Show It',
    unit:      'Unit 7 — Evolution',
    standards: 'MS-LS4-1, MS-LS4-2',
    ican:      'I can analyze fossil record data for patterns showing how life has changed, and explain anatomical similarities between modern organisms and fossils to infer evolutionary relationships',
    iknow:     'I can explain at least three types of evidence for evolution and use them to show why scientists are confident all life on Earth is related',
    learnDate: '2026-07-14',
    showDate:  '2026-07-16',
  },
  {
    learnName: 'Natural & Artificial Selection — Learn It',
    showName:  'Natural & Artificial Selection — Show It',
    unit:      'Unit 8 — Natural & Artificial Selection',
    standards: 'MS-LS4-4, MS-LS4-5',
    ican:      'I can explain how genetic variation increases survival odds and describe technologies humans use to influence trait inheritance',
    iknow:     'I can explain natural selection using a real example, explain artificial selection, and describe one modern technology that takes it further',
    learnDate: '2026-07-21',
    showDate:  '2026-07-23',
  },
];

for (const u of scienceUnits) {
  records.push(base({
    'Item name':                  u.learnName,
    Subject:                      'Science',
    Unit:                         u.unit,
    'Standard code':              u.standards,
    'I Can statement':            u.ican,
    "I'll Know I've Got It When": u.iknow,
    'Scheduled date':             u.learnDate,
  }));
  records.push(base({
    'Item name':                  u.showName,
    Subject:                      'Science',
    Unit:                         u.unit,
    'Standard code':              u.standards,
    'I Can statement':            u.ican,
    "I'll Know I've Got It When": u.iknow,
    'Scheduled date':             u.showDate,
  }));
}

// ── Run ───────────────────────────────────────────────────────────────────────
console.log(`Total records to create: ${records.length}`);
const ids = await fetchAllIds();
await deleteAll(ids);
await createAll(records);
