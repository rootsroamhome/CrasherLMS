/**
 * populate-science-curriculum.mjs
 * Creates all science lesson records (32 days) + Khan unit tests (8 days)
 * Run with: AIRTABLE_API_KEY=... AIRTABLE_BASE_ID=... node populate-science-curriculum.mjs
 */

const API_KEY  = process.env.AIRTABLE_API_KEY;
const BASE_ID  = process.env.AIRTABLE_BASE_ID;
const TABLE    = 'To-Do Items';
const BASE_URL = `https://api.airtable.com/v0/${BASE_ID}/${encodeURIComponent(TABLE)}`;
const HEADERS  = { Authorization: `Bearer ${API_KEY}`, 'Content-Type': 'application/json' };

const sleep = ms => new Promise(r => setTimeout(r, ms));

async function createAll(records) {
  console.log(`Creating ${records.length} science lesson records…`);
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

const base = extra => ({
  Status: 'Not Started',
  'Days carried': 0,
  ...extra,
});

const records = [];

// Unit 1 — Organism Growth & Reproduction (4 lessons, May 28 - June 2)
records.push(base({
  'Item name': 'Sexual and asexual reproduction',
  Subject: 'Science',
  Unit: 'Unit 1 — Organism Growth & Reproduction',
  'Standard code': 'MS-LS1-4, MS-LS1-5, MS-LS3-2',
  'I Can statement': 'I can explain the difference between sexual and asexual reproduction and describe why organisms use each strategy.',
  'Content page link': 'content-science-unit1.html',
  'Scheduled date': '2026-05-28',
}));

records.push(base({
  'Item name': 'Animal behavior and offspring success',
  Subject: 'Science',
  Unit: 'Unit 1 — Organism Growth & Reproduction',
  'Standard code': 'MS-LS1-4, MS-LS1-5, MS-LS3-2',
  'I Can statement': 'I can explain how animal behaviors increase the chances of successful reproduction.',
  'Content page link': 'content-science-unit1.html',
  'Scheduled date': '2026-05-29',
}));

records.push(base({
  'Item name': 'Plant reproductive success',
  Subject: 'Science',
  Unit: 'Unit 1 — Organism Growth & Reproduction',
  'Standard code': 'MS-LS1-4, MS-LS1-5, MS-LS3-2',
  'I Can statement': 'I can explain how plant structures (flowers, pollen, seeds, fruit) help plants reproduce successfully.',
  'Content page link': 'content-science-unit1.html',
  'Scheduled date': '2026-06-01',
}));

records.push(base({
  'Item name': 'Organism growth and the environment',
  Subject: 'Science',
  Unit: 'Unit 1 — Organism Growth & Reproduction',
  'Standard code': 'MS-LS1-4, MS-LS1-5, MS-LS3-2',
  'I Can statement': 'I can explain how environmental and genetic factors influence organism growth.',
  'Content page link': 'content-science-unit1.html',
  'Scheduled date': '2026-06-02',
}));

records.push(base({
  'Item name': 'Organism growth and reproduction — Unit test',
  Subject: 'Science',
  Unit: 'Unit 1 — Organism Growth & Reproduction',
  'I Can statement': 'Complete the Khan Academy unit test',
  'Content page link': 'content-science-unit1.html',
  'Scheduled date': '2026-06-02',
}));

// Unit 2 — Matter & Energy in Organisms (3 lessons, Jun 8-10)
records.push(base({
  'Item name': 'Photosynthesis in organisms',
  Subject: 'Science',
  Unit: 'Unit 2 — Matter & Energy in Organisms',
  'Standard code': 'MS-LS1-6, MS-LS1-7',
  'I Can statement': 'I can explain how plants use photosynthesis to turn light energy into chemical energy.',
  'Content page link': 'content-science-unit2.html',
  'Scheduled date': '2026-06-08',
}));

records.push(base({
  'Item name': 'Food and energy in organisms',
  Subject: 'Science',
  Unit: 'Unit 2 — Matter & Energy in Organisms',
  'Standard code': 'MS-LS1-6, MS-LS1-7',
  'I Can statement': 'I can explain how organisms use cellular respiration to break down food and release energy.',
  'Content page link': 'content-science-unit2.html',
  'Scheduled date': '2026-06-09',
}));

records.push(base({
  'Item name': 'Activity: How can measuring cellular respiration help us reach a fitness goal?',
  Subject: 'Science',
  Unit: 'Unit 2 — Matter & Energy in Organisms',
  'Standard code': 'MS-LS1-6, MS-LS1-7',
  'I Can statement': 'I can explain how measuring respiration (breathing rate, heart rate) helps track fitness improvements.',
  'Content page link': 'content-science-unit2.html',
  'Scheduled date': '2026-06-10',
}));

records.push(base({
  'Item name': 'Matter and energy in organisms — Unit test',
  Subject: 'Science',
  Unit: 'Unit 2 — Matter & Energy in Organisms',
  'I Can statement': 'Complete the Khan Academy unit test',
  'Content page link': 'content-science-unit2.html',
  'Scheduled date': '2026-06-10',
}));

// Unit 3 — Interactions in Ecosystems (4 lessons, Jun 11, 15-17)
records.push(base({
  'Item name': 'Populations, communities, and ecosystems',
  Subject: 'Science',
  Unit: 'Unit 3 — Interactions in Ecosystems',
  'Standard code': 'MS-LS2-1, MS-LS2-2',
  'I Can statement': 'I can explain what populations, communities, and ecosystems are and how they relate.',
  'Content page link': 'content-science-unit3.html',
  'Scheduled date': '2026-06-11',
}));

records.push(base({
  'Item name': 'Resources and population growth',
  Subject: 'Science',
  Unit: 'Unit 3 — Interactions in Ecosystems',
  'Standard code': 'MS-LS2-1, MS-LS2-2',
  'I Can statement': 'I can explain how available resources affect population size and growth.',
  'Content page link': 'content-science-unit3.html',
  'Scheduled date': '2026-06-15',
}));

records.push(base({
  'Item name': 'Ecological interactions',
  Subject: 'Science',
  Unit: 'Unit 3 — Interactions in Ecosystems',
  'Standard code': 'MS-LS2-1, MS-LS2-2',
  'I Can statement': 'I can describe different types of interactions between organisms (predation, competition, symbiosis).',
  'Content page link': 'content-science-unit3.html',
  'Scheduled date': '2026-06-16',
}));

records.push(base({
  'Item name': 'Activity: How do limited resources impact populations that live near us?',
  Subject: 'Science',
  Unit: 'Unit 3 — Interactions in Ecosystems',
  'Standard code': 'MS-LS2-1, MS-LS2-2',
  'I Can statement': 'I can analyze how resource scarcity affects local populations.',
  'Content page link': 'content-science-unit3.html',
  'Scheduled date': '2026-06-17',
}));

records.push(base({
  'Item name': 'Interactions in ecosystems — Unit test',
  Subject: 'Science',
  Unit: 'Unit 3 — Interactions in Ecosystems',
  'I Can statement': 'Complete the Khan Academy unit test',
  'Content page link': 'content-science-unit3.html',
  'Scheduled date': '2026-06-17',
}));

// Unit 4 — Matter & Energy in Ecosystems (3 lessons, Jun 18, 22-23)
records.push(base({
  'Item name': 'Photosynthesis in ecosystems',
  Subject: 'Science',
  Unit: 'Unit 4 — Matter & Energy in Ecosystems',
  'Standard code': 'MS-LS2-3, MS-LS2-4',
  'I Can statement': 'I can explain how photosynthesis brings energy into ecosystems.',
  'Content page link': 'content-science-unit4.html',
  'Scheduled date': '2026-06-18',
}));

records.push(base({
  'Item name': 'Matter and energy in foodwebs',
  Subject: 'Science',
  Unit: 'Unit 4 — Matter & Energy in Ecosystems',
  'Standard code': 'MS-LS2-3, MS-LS2-4',
  'I Can statement': 'I can trace energy and matter flow through food webs and explain the 10% energy rule.',
  'Content page link': 'content-science-unit4.html',
  'Scheduled date': '2026-06-22',
}));

records.push(base({
  'Item name': 'Activity: What happens when a food web is disturbed?',
  Subject: 'Science',
  Unit: 'Unit 4 — Matter & Energy in Ecosystems',
  'Standard code': 'MS-LS2-3, MS-LS2-4',
  'I Can statement': 'I can predict and explain the ripple effects of removing an organism from a food web.',
  'Content page link': 'content-science-unit4.html',
  'Scheduled date': '2026-06-23',
}));

records.push(base({
  'Item name': 'Matter and energy in ecosystems — Unit test',
  Subject: 'Science',
  Unit: 'Unit 4 — Matter & Energy in Ecosystems',
  'I Can statement': 'Complete the Khan Academy unit test',
  'Content page link': 'content-science-unit4.html',
  'Scheduled date': '2026-06-23',
}));

// Unit 5 — Ecosystems & Biodiversity (4 lessons, Jun 24-25, 29-30)
records.push(base({
  'Item name': 'Ecosystem dynamics',
  Subject: 'Science',
  Unit: 'Unit 5 — Ecosystems & Biodiversity',
  'Standard code': 'MS-LS2-5',
  'I Can statement': 'I can explain how ecosystems change over time and respond to disturbances.',
  'Content page link': 'content-science-unit5.html',
  'Scheduled date': '2026-06-24',
}));

records.push(base({
  'Item name': 'Biodiversity and ecosystem health',
  Subject: 'Science',
  Unit: 'Unit 5 — Ecosystems & Biodiversity',
  'Standard code': 'MS-LS2-5',
  'I Can statement': 'I can explain why biodiversity matters for ecosystem stability and health.',
  'Content page link': 'content-science-unit5.html',
  'Scheduled date': '2026-06-25',
}));

records.push(base({
  'Item name': 'Activity: What evidence can scientists use to tell if an ecosystem is healthy?',
  Subject: 'Science',
  Unit: 'Unit 5 — Ecosystems & Biodiversity',
  'Standard code': 'MS-LS2-5',
  'I Can statement': 'I can identify and describe indicators of ecosystem health.',
  'Content page link': 'content-science-unit5.html',
  'Scheduled date': '2026-06-29',
}));

records.push(base({
  'Item name': 'Humans and ecosystems',
  Subject: 'Science',
  Unit: 'Unit 5 — Ecosystems & Biodiversity',
  'Standard code': 'MS-LS2-5',
  'I Can statement': 'I can evaluate human impacts on ecosystems and describe conservation solutions.',
  'Content page link': 'content-science-unit5.html',
  'Scheduled date': '2026-06-30',
}));

records.push(base({
  'Item name': 'Ecosystems and biodiversity — Unit test',
  Subject: 'Science',
  Unit: 'Unit 5 — Ecosystems & Biodiversity',
  'I Can statement': 'Complete the Khan Academy unit test',
  'Content page link': 'content-science-unit5.html',
  'Scheduled date': '2026-06-30',
}));

// Unit 6 — Inheritance & Variation (6 lessons, Jul 1-2, 6-9)
records.push(base({
  'Item name': 'Chromosomes',
  Subject: 'Science',
  Unit: 'Unit 6 — Inheritance & Variation',
  'Standard code': 'MS-LS3-1, MS-LS3-2',
  'I Can statement': 'I can explain what chromosomes are and how they carry genetic information.',
  'Content page link': 'content-science-unit6.html',
  'Scheduled date': '2026-07-01',
}));

records.push(base({
  'Item name': 'Genes, proteins, and traits',
  Subject: 'Science',
  Unit: 'Unit 6 — Inheritance & Variation',
  'Standard code': 'MS-LS3-1, MS-LS3-2',
  'I Can statement': 'I can explain how genes code for proteins that create traits.',
  'Content page link': 'content-science-unit6.html',
  'Scheduled date': '2026-07-02',
}));

records.push(base({
  'Item name': 'Mutations',
  Subject: 'Science',
  Unit: 'Unit 6 — Inheritance & Variation',
  'Standard code': 'MS-LS3-1, MS-LS3-2',
  'I Can statement': 'I can explain what mutations are and describe their effects.',
  'Content page link': 'content-science-unit6.html',
  'Scheduled date': '2026-07-06',
}));

records.push(base({
  'Item name': 'Activity: Why do some mutations cause genetic disorders?',
  Subject: 'Science',
  Unit: 'Unit 6 — Inheritance & Variation',
  'Standard code': 'MS-LS3-1, MS-LS3-2',
  'I Can statement': 'I can explain how mutations in genes can lead to genetic disorders.',
  'Content page link': 'content-science-unit6.html',
  'Scheduled date': '2026-07-07',
}));

records.push(base({
  'Item name': 'Reproduction and genetic variation',
  Subject: 'Science',
  Unit: 'Unit 6 — Inheritance & Variation',
  'Standard code': 'MS-LS3-1, MS-LS3-2',
  'I Can statement': 'I can explain why sexual reproduction creates variation while asexual does not.',
  'Content page link': 'content-science-unit6.html',
  'Scheduled date': '2026-07-08',
}));

records.push(base({
  'Item name': 'Activity: Why do puppies in the same litter look different?',
  Subject: 'Science',
  Unit: 'Unit 6 — Inheritance & Variation',
  'Standard code': 'MS-LS3-1, MS-LS3-2',
  'I Can statement': 'I can explain genetic variation in offspring from the same parents.',
  'Content page link': 'content-science-unit6.html',
  'Scheduled date': '2026-07-09',
}));

records.push(base({
  'Item name': 'Inheritance and variation — Unit test',
  Subject: 'Science',
  Unit: 'Unit 6 — Inheritance & Variation',
  'I Can statement': 'Complete the Khan Academy unit test',
  'Content page link': 'content-science-unit6.html',
  'Scheduled date': '2026-07-09',
}));

// Unit 7 — Evolution (5 lessons, Jul 13-16, 20)
records.push(base({
  'Item name': 'Evolution and common ancestry',
  Subject: 'Science',
  Unit: 'Unit 7 — Evolution',
  'Standard code': 'MS-LS4-1, MS-LS4-2',
  'I Can statement': 'I can explain evolution and describe how all life shares common ancestry.',
  'Content page link': 'content-science-unit7.html',
  'Scheduled date': '2026-07-13',
}));

records.push(base({
  'Item name': 'The fossil record',
  Subject: 'Science',
  Unit: 'Unit 7 — Evolution',
  'Standard code': 'MS-LS4-1, MS-LS4-2',
  'I Can statement': 'I can interpret fossil evidence to show how life has changed over time.',
  'Content page link': 'content-science-unit7.html',
  'Scheduled date': '2026-07-14',
}));

records.push(base({
  'Item name': 'Evidence of evolution: anatomy',
  Subject: 'Science',
  Unit: 'Unit 7 — Evolution',
  'Standard code': 'MS-LS4-1, MS-LS4-2',
  'I Can statement': 'I can use anatomical similarities to infer evolutionary relationships.',
  'Content page link': 'content-science-unit7.html',
  'Scheduled date': '2026-07-15',
}));

records.push(base({
  'Item name': 'Activity: How can we use skeletons and fossils to understand whale evolution?',
  Subject: 'Science',
  Unit: 'Unit 7 — Evolution',
  'Standard code': 'MS-LS4-1, MS-LS4-2',
  'I Can statement': 'I can analyze fossil and anatomical evidence to trace evolutionary changes.',
  'Content page link': 'content-science-unit7.html',
  'Scheduled date': '2026-07-16',
}));

records.push(base({
  'Item name': 'Evidence of evolution: embryology',
  Subject: 'Science',
  Unit: 'Unit 7 — Evolution',
  'Standard code': 'MS-LS4-1, MS-LS4-2',
  'I Can statement': 'I can use embryological evidence to support evolutionary theory.',
  'Content page link': 'content-science-unit7.html',
  'Scheduled date': '2026-07-20',
}));

records.push(base({
  'Item name': 'Evolution — Unit test',
  Subject: 'Science',
  Unit: 'Unit 7 — Evolution',
  'I Can statement': 'Complete the Khan Academy unit test',
  'Content page link': 'content-science-unit7.html',
  'Scheduled date': '2026-07-20',
}));

// Unit 8 — Natural & Artificial Selection (3 lessons, Jul 21-23)
records.push(base({
  'Item name': 'Natural selection',
  Subject: 'Science',
  Unit: 'Unit 8 — Natural & Artificial Selection',
  'Standard code': 'MS-LS4-4, MS-LS4-5',
  'I Can statement': 'I can explain how natural selection drives evolutionary change.',
  'Content page link': 'content-science-unit8.html',
  'Scheduled date': '2026-07-21',
}));

records.push(base({
  'Item name': 'Adaptation and environmental change',
  Subject: 'Science',
  Unit: 'Unit 8 — Natural & Artificial Selection',
  'Standard code': 'MS-LS4-4, MS-LS4-5',
  'I Can statement': 'I can describe adaptations and explain how environmental change affects populations.',
  'Content page link': 'content-science-unit8.html',
  'Scheduled date': '2026-07-22',
}));

records.push(base({
  'Item name': 'Artificial selection',
  Subject: 'Science',
  Unit: 'Unit 8 — Natural & Artificial Selection',
  'Standard code': 'MS-LS4-4, MS-LS4-5',
  'I Can statement': 'I can explain artificial selection and describe modern biotechnology applications.',
  'Content page link': 'content-science-unit8.html',
  'Scheduled date': '2026-07-23',
}));

records.push(base({
  'Item name': 'Natural and artificial selection — Unit test',
  Subject: 'Science',
  Unit: 'Unit 8 — Natural & Artificial Selection',
  'I Can statement': 'Complete the Khan Academy unit test',
  'Content page link': 'content-science-unit8.html',
  'Scheduled date': '2026-07-23',
}));

console.log(`Total records to create: ${records.length}`);
await createAll(records);
