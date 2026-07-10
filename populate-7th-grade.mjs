/**
 * populate-7th-grade.mjs
 * Wipes To-Do Items + Standards and rebuilds the full 2026–2027 7th grade year.
 *
 * Run:  node populate-7th-grade.mjs           (reads .env.local vars if exported)
 *   or  AIRTABLE_API_KEY=… AIRTABLE_BASE_ID=… node populate-7th-grade.mjs
 *
 * School week: Mon–Thu, starting 2026-08-31, skipping US/Oregon holidays
 * and breaks. Science is aligned to Oregon's 7th grade NGSS sequence
 * (Physical Science + Earth/Space; Life Science was done over summer),
 * with a capstone energy/electricity unit built around the ebike.
 */

const API_KEY = process.env.AIRTABLE_API_KEY;
const BASE_ID = process.env.AIRTABLE_BASE_ID;
if (!API_KEY || !BASE_ID) { console.error('Missing AIRTABLE_API_KEY / AIRTABLE_BASE_ID'); process.exit(1); }

const HEADERS = { Authorization: `Bearer ${API_KEY}`, 'Content-Type': 'application/json' };
const url = (t) => `https://api.airtable.com/v0/${BASE_ID}/${encodeURIComponent(t)}`;
const sleep = (ms) => new Promise(r => setTimeout(r, ms));

// ── Calendar ────────────────────────────────────────────────────────────────
const START = '2026-08-31';
const END   = '2027-06-11';

// Excluded single days + break spans (Mon–Thu only matter)
const HOLIDAYS = new Set([
  '2026-09-07',                                     // Labor Day
  '2026-11-11',                                     // Veterans Day
  '2026-11-23','2026-11-24','2026-11-25','2026-11-26', // Thanksgiving week
  '2026-12-21','2026-12-22','2026-12-23','2026-12-24', // Winter break wk1
  '2026-12-28','2026-12-29','2026-12-30','2026-12-31', // Winter break wk2
  '2027-01-18',                                     // MLK Day
  '2027-02-15',                                     // Presidents Day
  '2027-03-22','2027-03-23','2027-03-24','2027-03-25', // Spring break
  '2027-05-31',                                     // Memorial Day
]);

function iso(d) { return d.toISOString().split('T')[0]; }
function* eachDay(start, end) {
  const d = new Date(start + 'T00:00:00'); const last = new Date(end + 'T00:00:00');
  while (d <= last) { yield new Date(d); d.setDate(d.getDate() + 1); }
}

// Build weeks keyed by each week's Monday date, so a holiday Monday
// doesn't merge the rest of that week into the previous one.
const weekMap = new Map();
for (const d of eachDay(START, END)) {
  const dow = d.getDay();                 // 1=Mon … 4=Thu
  if (dow < 1 || dow > 4) continue;        // Mon–Thu only
  const s = iso(d);
  if (HOLIDAYS.has(s)) continue;
  const mon = new Date(d); mon.setDate(d.getDate() - (dow - 1));
  const key = iso(mon);
  if (!weekMap.has(key)) weekMap.set(key, { mon: null, tue: null, wed: null, thu: null });
  weekMap.get(key)[['', 'mon', 'tue', 'wed', 'thu'][dow]] = s;
}
const weeks = [...weekMap.values()];      // chronological (insertion order)
const schoolDays = weeks.flatMap(w => [w.mon, w.tue, w.wed, w.thu].filter(Boolean));

// ── Science lesson sequence (keys must match lessons.js) ─────────────────────
const U = {
  1: 'Unit 1 — Structure & Properties of Matter',
  2: 'Unit 2 — Chemical Reactions',
  3: "Unit 3 — Earth's Systems",
  4: 'Unit 4 — History of Earth',
  5: 'Unit 5 — Human Impacts & Natural Hazards',
  6: 'Unit 6 — Energy, Electricity & the E-Bike',
};
const scienceSeq = [
  { key: 'Atoms & Molecules', unit: U[1], std: 'MS-PS1-1' },
  { key: 'States of Matter', unit: U[1], std: 'MS-PS1-4' },
  { key: 'Thermal Energy & Changes of State', unit: U[1], std: 'MS-PS1-4' },
  { key: 'Natural & Synthetic Materials', unit: U[1], std: 'MS-PS1-3' },
  { review: U[1] },
  { key: 'Signs of a Chemical Reaction', unit: U[2], std: 'MS-PS1-2' },
  { key: 'Conservation of Mass', unit: U[2], std: 'MS-PS1-5' },
  { key: 'Endothermic & Exothermic', unit: U[2], std: 'MS-PS1-6' },
  { key: 'Batteries — Chemistry to Electricity', unit: U[2], std: 'MS-PS1-2' },
  { review: U[2] },
  { key: 'The Rock Cycle', unit: U[3], std: 'MS-ESS2-1' },
  { key: 'The Water Cycle & Earth', unit: U[3], std: 'MS-ESS2-1' },
  { key: 'Uneven Distribution of Resources', unit: U[3], std: 'MS-ESS3-1' },
  { review: U[3] },
  { key: 'Geologic Time', unit: U[4], std: 'MS-ESS2-2' },
  { key: 'Reading Rock Strata', unit: U[4], std: 'MS-ESS2-3' },
  { key: 'Plate Tectonics', unit: U[4], std: 'MS-ESS2-3' },
  { key: 'Cascadia', unit: U[4], std: 'MS-ESS2-3' },
  { review: U[4] },
  { key: 'Forecasting Natural Hazards', unit: U[5], std: 'MS-ESS3-2' },
  { key: 'Earthquake Engineering', unit: U[5], std: 'MS-ESS3-2' },
  { key: 'Human Impact & Solutions', unit: U[5], std: 'MS-ESS3-2' },
  { review: U[5] },
  { key: 'Kinetic & Potential Energy', unit: U[6], std: 'MS-PS3-1' },
  { key: 'Energy Transformations', unit: U[6], std: 'MS-PS3-5' },
  { key: 'Electricity & Circuits', unit: U[6], std: 'MS-PS3-2' },
  { key: 'E-Bike Engineering Challenge', unit: U[6], std: 'MS-ETS1-1' },
  { review: U[6] },
];

// ── Practical math (dropped onto certain Wednesdays) ─────────────────────────
const practicalMath = [
  'Practical Math — budget a dream ebike build (unit prices, totals, staying under a cap)',
  'Practical Math — unit rates at the grocery store (which size is actually the better deal?)',
  'Practical Math — percents & tips: sales, discounts, and leaving a tip',
  'Practical Math — scale & geometry: draw a room or a bike ramp to scale',
  'Practical Math — probability with dice and cards (what are the real odds?)',
  'Practical Math — proportions: mix a recipe or paint up and down',
];

// ── Assemble records ─────────────────────────────────────────────────────────
const base = (extra) => ({ Status: 'Not Started', 'Days carried': 0, ...extra });
const records = [];

// Dailies
for (const date of schoolDays) {
  records.push(base({
    'Item name': 'Read for 30 minutes',
    Subject: 'ELA', Unit: 'Independent Reading',
    'I Can statement': 'Read whatever you want for 30 minutes',
    'Scheduled date': date,
  }));
  records.push(base({
    'Item name': 'Khan Academy Math — 30 minutes',
    Subject: 'Math', Unit: '7th Grade Math (Khan Academy)',
    'I Can statement': 'Work through Khan Academy 7th grade for 30 minutes',
    'Content page link': 'https://www.khanacademy.org/math/cc-seventh-grade-math',
    'Scheduled date': date,
  }));
}

// Weekly choice pointer (Mondays) + science + practical math
let sciIdx = 0, pmIdx = 0, monthTag = '';
for (const w of weeks) {
  if (w.mon) {
    records.push(base({
      'Item name': 'Pick your week — Self-Study or Rabbit Hole',
      Subject: 'Self-Study', Unit: 'This Week',
      'I Can statement': 'Choose my track for the week and get going',
      'Content page link': 'this-week.html',
      'Scheduled date': w.mon,
    }));
  }

  // Science needs a Tue and a Thu that week
  if (w.tue && w.thu && sciIdx < scienceSeq.length) {
    const item = scienceSeq[sciIdx++];
    if (item.review) {
      records.push(base({
        'Item name': `${item.review} — Review & Show What You Know`,
        Subject: 'Science', Unit: item.review,
        'I Can statement': 'Pull the unit together — retake the ideas, then prove it your way (Khan check, project, or teach it).',
        'Scheduled date': w.tue,
      }));
      records.push(base({
        'Item name': `${item.review} — Review & Show What You Know`,
        Subject: 'Science', Unit: item.review,
        'I Can statement': 'Finish your unit review and show what you know.',
        'Scheduled date': w.thu,
      }));
    } else {
      records.push(base({
        'Item name': `${item.key} — Learn It`,
        Subject: 'Science', Unit: item.unit, 'Standard code': item.std,
        'I Can statement': 'Learn it your way — pick a video, a reading, or a hands-on option.',
        'Content page link': 'lesson.html',
        'Scheduled date': w.tue,
      }));
      records.push(base({
        'Item name': `${item.key} — Show It`,
        Subject: 'Science', Unit: item.unit, 'Standard code': item.std,
        'I Can statement': 'Show what you know — pick how you prove it.',
        'Content page link': 'lesson.html',
        'Scheduled date': w.thu,
      }));
    }
  }

  // One practical-math item per new month, on Wednesday
  if (w.wed && pmIdx < practicalMath.length) {
    const m = w.wed.slice(0, 7);
    if (m !== monthTag) {
      monthTag = m;
      records.push(base({
        'Item name': practicalMath[pmIdx++],
        Subject: 'Math', Unit: '7th Grade Math (Khan Academy)',
        'I Can statement': 'Use math on something real, not just a worksheet.',
        'Scheduled date': w.wed,
      }));
    }
  }
}

// ── Standards ────────────────────────────────────────────────────────────────
const standards = [
  ['MS-PS1-1', U[1], 'I can build models of atoms and molecules to show what substances are made of.'],
  ['MS-PS1-3', U[1], 'I can explain how synthetic materials are made from natural resources and how that affects society.'],
  ['MS-PS1-4', U[1], 'I can use the particle model to explain how adding or removing heat changes a substance between solid, liquid, and gas.'],
  ['MS-PS1-2', U[2], 'I can analyze evidence to determine whether a chemical reaction has happened.'],
  ['MS-PS1-5', U[2], 'I can use a model to show that atoms — and total mass — are conserved in a chemical reaction.'],
  ['MS-PS1-6', U[2], 'I can design a device that releases or absorbs thermal energy by a chemical process.'],
  ['MS-ESS2-1', U[3], "I can model how Earth's materials cycle through the rock cycle and water cycle, driven by energy."],
  ['MS-ESS3-1', U[3], "I can explain how geologic processes unevenly distribute Earth's resources like minerals, water, and energy."],
  ['MS-ESS2-2', U[4], "I can explain how geoscience processes have reshaped Earth's surface across many time scales."],
  ['MS-ESS2-3', U[4], 'I can analyze evidence — rock strata, fossils, seafloor — for the motion of tectonic plates over time.'],
  ['MS-ESS3-2', U[5], 'I can analyze data on natural hazards to forecast future risk and design ways to reduce it.'],
  ['MS-PS3-1', U[6], 'I can explain and model how kinetic energy depends on mass and speed.'],
  ['MS-PS3-2', U[6], 'I can build models showing how potential energy changes with position and arrangement.'],
  ['MS-PS3-5', U[6], 'I can argue from evidence that energy is transferred and transformed, never destroyed.'],
  ['MS-ETS1-1', U[6], 'I can define an engineering design problem with clear criteria and constraints.'],
].map(([code, unit, ican]) => ({ 'Standard code': code, Subject: 'Science', Unit: unit, 'I Can statement': ican, Completed: false }));

// ── Airtable ops ─────────────────────────────────────────────────────────────
async function fetchAllIds(table) {
  const ids = []; let offset;
  do {
    const u = `${url(table)}?fields[]=${table === 'Standards' ? 'Standard+code' : 'Item+name'}${offset ? `&offset=${offset}` : ''}`;
    const res = await fetch(u, { headers: HEADERS });
    const data = await res.json();
    if (!res.ok) throw new Error(JSON.stringify(data));
    for (const r of (data.records || [])) ids.push(r.id);
    offset = data.offset; await sleep(210);
  } while (offset);
  return ids;
}
async function deleteAll(table) {
  const ids = await fetchAllIds(table);
  console.log(`Deleting ${ids.length} from ${table}…`);
  for (let i = 0; i < ids.length; i += 10) {
    const qs = ids.slice(i, i + 10).map(id => `records[]=${id}`).join('&');
    const res = await fetch(`${url(table)}?${qs}`, { method: 'DELETE', headers: HEADERS });
    if (!res.ok) console.error('Delete error:', await res.text());
    await sleep(210);
  }
}
async function createAll(table, rows) {
  console.log(`Creating ${rows.length} in ${table}…`);
  let n = 0;
  for (let i = 0; i < rows.length; i += 10) {
    const batch = rows.slice(i, i + 10);
    const res = await fetch(url(table), {
      method: 'POST', headers: HEADERS,
      body: JSON.stringify({ records: batch.map(fields => ({ fields })), typecast: true }),
    });
    const data = await res.json();
    if (!res.ok) console.error('Create error:', JSON.stringify(data));
    else n += data.records.length;
    await sleep(210);
  }
  console.log(`  created ${n}`);
}

console.log(`School days: ${schoolDays.length} across ${weeks.length} weeks (${START} → ${END})`);
console.log(`Science lessons scheduled: ${sciIdx} of ${scienceSeq.length}`);
console.log(`To-Do records: ${records.length} · Standards: ${standards.length}`);

await deleteAll('To-Do Items');
await deleteAll('Standards');
await createAll('To-Do Items', records);
await createAll('Standards', standards);
console.log('Done.');
