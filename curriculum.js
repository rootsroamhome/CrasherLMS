/**
 * curriculum.js — HomeSkewl 7th Grade (2026–2027)
 *
 * Single source of truth for units, standards, hot-spots, and the
 * tiered parent-driven activities. Consumed by parent-guide.js and
 * big-picture.js. The `unit` label here MUST exactly match the
 * `Unit` field on the matching To-Do Items in Airtable.
 *
 * Science is aligned to Oregon's official 7th-grade NGSS sequence.
 * Crasher completed the Life Science strand over summer, so this
 * year covers the remaining Physical Science (matter + chemistry)
 * and Earth & Space (Earth systems, history, human impact) units,
 * plus a capstone energy/electricity unit built around his ebike.
 */

const CURRICULUM = {
  yearStart: '2026-08-31',
  yearEnd:   '2027-06-11',
  schoolWeek: 'Mon–Thu · 3–4 hrs/day · flexible',

  // Daily / weekly rhythm shown on the parent page
  rhythm: [
    { subject: 'Math',    cadence: 'Every day',  minutes: 35, note: 'Khan Academy 7th grade, on grade level' },
    { subject: 'ELA',     cadence: 'Every day',  minutes: 30, note: 'Independent reading; one writing task per week' },
    { subject: 'Science', cadence: 'Tue + Thu',  minutes: 55, note: 'Learn It (Tue) / Show It (Thu)' },
    { subject: 'Self-Study or Rabbit Hole', cadence: 'Weekly choice', minutes: 40, note: 'He picks the track each Monday' },
  ],

  units: [
    {
      number: 1,
      subject: 'Science',
      strand: 'Physical Science',
      unit: 'Unit 1 — Structure & Properties of Matter',
      standards: ['MS-PS1-1', 'MS-PS1-3', 'MS-PS1-4'],
      bigIdea: 'Everything is made of atoms arranged in patterns. Those patterns explain why materials behave the way they do — and why a lithium battery cell is built the way it is.',
      hotspots: 'Atoms vs. molecules vs. compounds gets muddled. Watch that he can tell the difference with a real example, not just a definition. Particle-motion diagrams (solid/liquid/gas) are worth slowing down on.',
      activities: [
        {
          tier: 'Small',
          title: 'Kitchen states-of-matter lab',
          detail: 'Freeze, melt, and boil water and watch the particle behavior change. Dissolve salt and sugar. Make oobleck (cornstarch + water) to see a material that acts solid and liquid at once. Have him narrate what the particles are doing at each step.',
          cost: 'Free — household items',
          time: '1–2 hours',
        },
        {
          tier: 'Medium',
          title: 'ScienceWorks Hands-On Museum, Ashland',
          detail: 'About 15 minutes from Medford. Hands-on exhibits on matter, states, and energy. Good for turning abstract particle ideas into something he can touch.',
          cost: '≈ $12–15/person',
          time: 'Half day',
        },
        {
          tier: 'Large',
          title: 'Hands-on chemistry set (used across Units 1 & 2)',
          detail: 'A real starter chemistry kit (e.g., Thames & Kosmos C500/C1000) plus a molecular-model set. Build models of water, CO₂, and salt so he can see structure; carry the kit into the Chemical Reactions unit. One purchase, two units of use.',
          cost: '≈ $100–130 (one-time)',
          time: 'Ongoing',
        },
      ],
    },
    {
      number: 2,
      subject: 'Science',
      strand: 'Physical Science',
      unit: 'Unit 2 — Chemical Reactions',
      standards: ['MS-PS1-2', 'MS-PS1-5', 'MS-PS1-6'],
      bigIdea: 'In a chemical reaction, atoms rearrange but are never created or destroyed. Batteries are chemistry you can hold — chemical energy turning into electrical energy on demand.',
      hotspots: 'Conservation of mass is counter-intuitive when a gas is produced ("where did the mass go?"). Weighing a fizzing reaction in a sealed bag makes it click. Balancing equations is new — keep it light and concrete.',
      activities: [
        {
          tier: 'Small',
          title: 'Kitchen reactions + a lemon battery',
          detail: 'Baking soda + vinegar weighed on a kitchen scale in a sealed bag (mass stays the same). Rust steel wool. Use red-cabbage juice as a pH indicator. Then build a lemon or potato battery with pennies, galvanized nails, and wire — and light an LED. Chemistry → electricity, in his wheelhouse.',
          cost: '≈ $10 (LED + wire); rest household',
          time: '1–2 hours',
        },
        {
          tier: 'Medium',
          title: 'Tour a Medford ebike / bike shop battery bench',
          detail: 'Call ahead and ask to see how lithium battery packs are built, balanced, and cared for. Connects the chemistry of reactions to the exact thing he is obsessed with. Free, and he will ask better questions than the adults.',
          cost: 'Free',
          time: '1 hour',
        },
      ],
    },
    {
      number: 3,
      subject: 'Science',
      strand: 'Earth & Space Science',
      unit: 'Unit 3 — Earth\'s Systems',
      standards: ['MS-ESS2-1', 'MS-ESS3-1'],
      bigIdea: 'Earth recycles its materials through the rock cycle and the water cycle, powered by the sun and Earth\'s internal heat. Where useful minerals ended up — including the metals inside every battery — is not random.',
      hotspots: 'The rock cycle is a cycle, not a line — he should be able to start anywhere and loop back. "Uneven distribution of resources" is the standard that ties straight to lithium/cobalt mining; make that connection explicit.',
      activities: [
        {
          tier: 'Small',
          title: 'Water cycle in a jar + edible rock cycle',
          detail: 'Seal a little water in a clear jar in the sun and watch evaporation/condensation. Then model the rock cycle with crayon shavings: shave (sediment), press (sedimentary), warm in hand + press (metamorphic), melt and re-cool (igneous).',
          cost: 'Free — household items',
          time: '1–2 hours',
        },
        {
          tier: 'Medium',
          title: 'Hike the Table Rocks',
          detail: 'Upper or Lower Table Rock right outside Medford — flat-topped volcanic plateaus with clear rock layering and a payoff view. Read the landscape together: what\'s the cap rock, what\'s underneath, how did water shape it. Free and genuinely local geology.',
          cost: 'Free (gas only)',
          time: 'Half day',
        },
        {
          tier: 'Large',
          title: 'Day trip to Crater Lake National Park',
          detail: 'About 80 minutes northeast. The caldera of a collapsed volcano — a textbook of Earth\'s systems and deep time in one view. Pairs perfectly with this unit and the next one (History of Earth).',
          cost: '≈ $30/car entry',
          time: 'Full day',
        },
      ],
    },
    {
      number: 4,
      subject: 'Science',
      strand: 'Earth & Space Science',
      unit: 'Unit 4 — History of Earth',
      standards: ['MS-ESS2-2', 'MS-ESS2-3'],
      bigIdea: 'Rock layers and the seafloor are a record book. Read them and you can reconstruct 4.6 billion years — including the plate-tectonic engine parked right under the Pacific Northwest.',
      hotspots: 'Geologic time is almost impossible to feel. A physical scale model (below) does more than any video. Plate tectonics evidence (matching coastlines, seafloor age, earthquakes) should be "evidence for," not just "a fact to memorize."',
      activities: [
        {
          tier: 'Small',
          title: 'Scale timeline of Earth\'s history',
          detail: 'Roll a length of paper (or use the driveway) as 4.6 billion years. Mark where life, dinosaurs, and humans show up. The gut-punch is how late everything he\'s heard of appears. Ties directly to reading rock strata.',
          cost: 'Free — household items',
          time: '1–2 hours',
        },
        {
          tier: 'Medium',
          title: 'Read the layers: local roadcut or riverbank + Cascadia',
          detail: 'Find an exposed roadcut or Rogue River bank and sketch the visible layers oldest-to-youngest. Pair with a short study of the Cascadia Subduction Zone — the fault under our feet — so plate tectonics is local, not abstract.',
          cost: 'Free (gas only)',
          time: 'Half day',
        },
        {
          tier: 'Large',
          title: 'Oregon Caves National Monument',
          detail: 'About 2 hours southwest. Marble caves formed over enormous timescales — a walkable lesson in the history of Earth and how rock transforms. Ranger-led tour.',
          cost: '≈ $10/tour + gas',
          time: 'Full day',
        },
      ],
    },
    {
      number: 5,
      subject: 'Science',
      strand: 'Earth & Space Science',
      unit: 'Unit 5 — Human Impacts & Natural Hazards',
      standards: ['MS-ESS3-2'],
      bigIdea: 'We can\'t stop earthquakes or wildfires, but we can forecast the risk and design for it. Living in the Rogue Valley, this is not hypothetical.',
      hotspots: 'The distinction between "predict the exact day" (we can\'t) and "forecast the probability and prepare" (we can) is the whole standard. Keep it evidence-based, not scary — he\'s designing solutions, not doomscrolling.',
      activities: [
        {
          tier: 'Small',
          title: 'Earthquake-resistant build + a real prep kit',
          detail: 'Build a tower (spaghetti + marshmallows, or LEGO) and shake-test it on a cookie sheet set on tennis balls. Redesign to survive longer. Then build an actual family earthquake kit together — Cascadia makes this genuinely useful, not just a lesson.',
          cost: 'Free–$40 (kit supplies you likely want anyway)',
          time: '1–2 hours',
        },
        {
          tier: 'Medium',
          title: 'Rogue River watershed impact walk',
          detail: 'Walk a stretch of the Rogue or Bear Creek and inventory human impact — erosion, runoff, restoration, invasive plants. Have him propose one realistic design solution. Optionally log observations in the free iNaturalist app to keep it going.',
          cost: 'Free',
          time: 'Half day',
        },
      ],
    },
    {
      number: 6,
      subject: 'Science',
      strand: 'Physical Science · capstone',
      unit: 'Unit 6 — Energy & Electricity',
      standards: ['MS-PS3-1', 'MS-PS3-2', 'MS-PS3-5', 'MS-ETS1-1'],
      bigIdea: 'Energy changes form but is never lost. Follow it from a battery, through a motor, into motion — and you understand how the machines all around you actually work. The unit wraps with a hands-on design challenge.',
      hotspots: 'Energy "used up" vs. "transformed" is the classic misconception — keep tracing it through real devices (chemical → electrical → kinetic → heat). This is the hands-on capstone unit; lean into building over worksheets.',
      activities: [
        {
          tier: 'Small',
          title: 'Circuits, electromagnet & a homopolar motor',
          detail: 'Light an LED, then wrap wire around a nail to build an electromagnet, then make a homopolar motor (battery + neodymium magnet + a loop of copper wire) that actually spins. Cheap, dramatic, and all core energy-transformation ideas.',
          cost: '≈ $15 (magnets + wire)',
          time: '1–2 hours',
        },
        {
          tier: 'Medium',
          title: 'Ebike teardown & tune with an adult',
          detail: 'Sit down with his ebike (or a willing shop\'s) and trace the energy path: battery → controller → motor → wheel → heat. Where is energy lost? Do a real maintenance task together — this is engineering design, MS-ETS1, disguised as fun.',
          cost: 'Free',
          time: '2–3 hours',
        },
        {
          tier: 'Large',
          title: 'Snap Circuits + motor/solar build kit',
          detail: 'A Snap Circuits set (or equivalent motor/solar kit) for open-ended building — series vs. parallel, motors, switches, storing and releasing energy. Extends well past this unit and rewards tinkering.',
          cost: '≈ $50–80 (one-time)',
          time: 'Ongoing',
        },
      ],
    },
  ],
};

// Minutes estimate for the parent page's weekly time total.
function estimateMinutes(item) {
  const name = (item['Item name'] || '').toLowerCase();
  const subj = item['Subject'] || '';
  if (name.includes('read for')) return 30;
  if (subj === 'Math') return 35;
  if (subj === 'Science' && name.includes('learn')) return 55;
  if (subj === 'Science' && name.includes('show')) return 55;
  if (subj === 'Science') return 45;
  if (name.includes('writing') || name.includes('write')) return 40;
  if (subj === 'Self-Study' || subj === 'Rabbit Hole') return 40;
  return 30;
}

if (typeof module !== 'undefined') module.exports = { CURRICULUM };
