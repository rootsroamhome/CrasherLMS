/**
 * One-time Airtable setup script.
 *
 * This script has already been run successfully — tables and example data
 * are already in your Airtable base. You only need to run this again if
 * you delete the tables and want to start fresh.
 *
 * To run:
 *   AIRTABLE_API_KEY=your_token AIRTABLE_BASE_ID=your_base_id node setup-airtable.mjs
 */

const API_KEY = process.env.AIRTABLE_API_KEY;
const BASE_ID = process.env.AIRTABLE_BASE_ID;

if (!API_KEY || !BASE_ID) {
  console.error('\nMissing environment variables. Run like this:');
  console.error('  AIRTABLE_API_KEY=your_token AIRTABLE_BASE_ID=your_base_id node setup-airtable.mjs\n');
  process.exit(1);
}

const META_URL = `https://api.airtable.com/v0/meta/bases/${BASE_ID}/tables`;
const DATA_URL = `https://api.airtable.com/v0/${BASE_ID}`;
const HEADERS  = { Authorization: `Bearer ${API_KEY}`, 'Content-Type': 'application/json' };

async function api(url, method = 'GET', body = null) {
  const opts = { method, headers: HEADERS };
  if (body) opts.body = JSON.stringify(body);
  const res  = await fetch(url, opts);
  const json = await res.json();
  if (!res.ok) throw new Error(`${method} ${url}\n${JSON.stringify(json, null, 2)}`);
  return json;
}

async function getExistingTables() {
  const schema = await api(META_URL);
  return schema.tables.map((t) => ({ id: t.id, name: t.name }));
}

async function ensureTable(existingTables, name, fields) {
  const existing = existingTables.find((t) => t.name === name);
  if (existing) { console.log(`  ✓ "${name}" already exists`); return existing.id; }
  console.log(`  + Creating "${name}"...`);
  const result = await api(META_URL, 'POST', { name, fields });
  console.log(`  ✓ Created "${name}" (${result.id})`);
  return result.id;
}

async function createRecord(tableName, fields) {
  return api(`${DATA_URL}/${encodeURIComponent(tableName)}`, 'POST', { fields });
}

async function main() {
  console.log('\n=== Homeschool LMS — Airtable Setup ===\n');

  const existing = await getExistingTables();
  console.log(`Found ${existing.length} existing table(s): ${existing.map(t => t.name).join(', ')}`);

  await ensureTable(existing, 'To-Do Items', [
    { name: 'Item name', type: 'singleLineText' },
    { name: 'Subject', type: 'singleSelect', options: { choices: [
      { name: 'Math' }, { name: 'Science' }, { name: 'Social Science' },
      { name: 'ELA' }, { name: 'Health' }, { name: 'Rabbit Hole' },
    ]}},
    { name: 'Unit', type: 'singleLineText' },
    { name: 'Standard code', type: 'singleLineText' },
    { name: 'I Can statement', type: 'multilineText' },
    { name: "I'll Know I've Got It When", type: 'multilineText' },
    { name: 'Content page link', type: 'url' },
    { name: 'Status', type: 'singleSelect', options: { choices: [
      { name: 'Not Started' }, { name: 'Done' },
    ]}},
    { name: 'Scheduled date', type: 'date', options: { dateFormat: { name: 'iso' } } },
    { name: 'Completion date', type: 'date', options: { dateFormat: { name: 'iso' } } },
    { name: 'Student notes', type: 'multilineText' },
    { name: 'Days carried', type: 'number', options: { precision: 0 } },
  ]);

  await ensureTable(existing, 'Standards', [
    { name: 'Standard code', type: 'singleLineText' },
    { name: 'Subject', type: 'singleSelect', options: { choices: [
      { name: 'Math' }, { name: 'Science' }, { name: 'Social Science' },
      { name: 'ELA' }, { name: 'Health' }, { name: 'Rabbit Hole' },
    ]}},
    { name: 'I Can statement', type: 'multilineText' },
    { name: 'Unit', type: 'singleLineText' },
    { name: 'Completed', type: 'checkbox', options: { color: 'greenBright', icon: 'check' } },
    { name: 'Completion date', type: 'date', options: { dateFormat: { name: 'iso' } } },
  ]);

  await ensureTable(existing, 'Schedule', [
    { name: 'Date', type: 'date', options: { dateFormat: { name: 'iso' } } },
    { name: 'Notes', type: 'multilineText' },
  ]);

  console.log('\nPopulating example data...');
  const today = new Date().toISOString().split('T')[0];

  for (const fields of [
    { 'Item name': 'Rational Numbers — Adding and Subtracting', Subject: 'Math', Unit: 'Unit 1 — Number Sense', 'Standard code': '7.NS.A.1', 'I Can statement': 'I can add and subtract positive and negative rational numbers and explain why subtraction is the same as adding the opposite.', "I'll Know I've Got It When": 'I can solve problems with negative numbers without a calculator and explain my thinking out loud.', 'Content page link': 'content-math.html', Status: 'Not Started', 'Scheduled date': today, 'Days carried': 0 },
    { 'Item name': "Earth's Rock Cycle — Building a Model", Subject: 'Science', Unit: 'Unit 1 — Earth Systems', 'Standard code': '7.ESS2.1', 'I Can statement': "I can build a model showing how Earth's materials cycle through processes like melting, weathering, and sedimentation.", "I'll Know I've Got It When": 'I can look at a rock and make a reasonable guess about how it formed and what might happen to it next.', 'Content page link': 'content-science.html', Status: 'Not Started', 'Scheduled date': today, 'Days carried': 0 },
    { 'Item name': 'Early Humans — Where Did We Come From?', Subject: 'Social Science', Unit: 'Unit 1 — Human Origins', 'Standard code': '6/7.H.CE.1', 'I Can statement': 'I can identify key turning points in early human history and explain how they transformed the way people lived.', "I'll Know I've Got It When": 'I can explain three things early humans figured out that changed everything, without looking at notes.', 'Content page link': 'content-social-science.html', Status: 'Not Started', 'Scheduled date': today, 'Days carried': 0 },
  ]) {
    const rec = await createRecord('To-Do Items', fields);
    console.log(`  ✓ ${fields['Item name']} (${rec.id})`);
  }

  console.log('\n=== Done! ===\n');
}

main().catch(e => { console.error(e.message); process.exit(1); });
