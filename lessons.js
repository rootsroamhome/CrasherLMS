/**
 * lessons.js — 7th grade science lesson content.
 *
 * Keyed by a phrase in the To-Do item name (lesson.html matches it).
 *
 * Each lesson has:
 *   hook     — a curiosity grabber (may contain a link)
 *   learnIt  — 2–3 ways in: a Read, an interactive Explore, and/or a Watch
 *   quiz     — auto-checked multiple choice ({ q, options[], answer index })
 *   short    — one short written prompt submitted with the quiz score
 *
 * Resource strategy: reading + interactives are emphasized (no Khan science,
 * which he doesn't like). Video links use YouTube title-search so they always
 * resolve. Reads use CK-12 / BBC Bitesize / Britannica Kids search pages.
 * Interactives use PhET sims (direct) and USGS live tools.
 */

const yt       = (q) => `https://www.youtube.com/results?search_query=${encodeURIComponent(q)}`;
const ck12     = (q) => `https://www.ck12.org/search/?q=${encodeURIComponent(q)}`;
const bitesize = (q) => `https://www.bbc.co.uk/bitesize/search?q=${encodeURIComponent(q)}`;
const brit     = (q) => `https://kids.britannica.com/search?query=${encodeURIComponent(q)}`;
const usgs     = (q) => `https://www.usgs.gov/search?query=${encodeURIComponent(q)}`;
const phet     = (slug) => `https://phet.colorado.edu/en/simulations/${slug}`;

const LESSONS = {

  /* ===================== UNIT 1 — STRUCTURE & PROPERTIES OF MATTER ===================== */

  'Atoms & Molecules': {
    title: 'Atoms & Molecules — The Particle Model',
    unit: 'Unit 1 — Structure & Properties of Matter',
    standards: 'MS-PS1-1',
    hook: 'If you blew an atom up to the size of a football stadium, the nucleus would be a marble on the 50-yard line and the electrons would be dust in the nosebleeds. Matter is almost entirely empty space — including you. <a class="hook-link" href="https://kids.britannica.com/students/article/atom/272796" target="_blank" rel="noopener">🔗 Atom — Britannica</a>',
    learnIt: [
      { type: 'Read', desc: 'Britannica Kids — Atoms & molecules', meta: '~8 min read with diagrams', link: brit('atom') },
      { type: 'Explore', desc: 'PhET — Build an Atom (drag protons/electrons and watch)', meta: '~12 min · interactive', link: phet('build-an-atom') },
      { type: 'Watch', desc: 'TED-Ed — Just how small is an atom?', meta: '~5 min', link: yt('TED-Ed just how small is an atom') },
    ],
    quiz: [
      { q: 'What is the smallest unit of an element that still has that element\'s properties?', options: ['An atom', 'A molecule', 'A cell', 'A grain'], answer: 0 },
      { q: 'Water (H₂O) is an example of a…', options: ['Single atom', 'Molecule / compound', 'Mixture', 'Pure element'], answer: 1 },
      { q: 'Which statement is TRUE about atoms?', options: ['They are solid little balls', 'They are alive', 'They are mostly empty space', 'They can never combine'], answer: 2 },
    ],
    short: 'In your own words, what is the difference between an atom and a molecule? Give an example of each.',
  },

  'States of Matter': {
    title: 'States of Matter & Particle Motion',
    unit: 'Unit 1 — Structure & Properties of Matter',
    standards: 'MS-PS1-4',
    hook: 'The same water molecules can be ice, a puddle, or steam — nothing added, nothing removed. All that changed is how fast the particles are jiggling. Temperature is really just a measure of that jiggle.',
    learnIt: [
      { type: 'Read', desc: 'BBC Bitesize — Particle model & states of matter', meta: '~8 min', link: bitesize('particle model states of matter') },
      { type: 'Explore', desc: 'PhET — States of Matter (heat the particles, watch them change)', meta: '~12 min · interactive', link: phet('states-of-matter-basics') },
      { type: 'Watch', desc: 'Solids, liquids & gases — the particle view', meta: '~6 min', link: yt('states of matter particle model explained') },
    ],
    quiz: [
      { q: 'In which state are particles most spread out and moving fastest?', options: ['Solid', 'Liquid', 'Gas', 'They are all the same'], answer: 2 },
      { q: 'Temperature is basically a measure of…', options: ['How fast particles move', 'How heavy something is', 'What color it is', 'How big it is'], answer: 0 },
      { q: 'A solid keeps its shape because its particles are…', options: ['Flying around freely', 'Locked in place, only vibrating', 'Disappearing', 'Melting'], answer: 1 },
    ],
    short: 'Describe what happens to the particles as you heat ice → water → steam.',
  },

  'Thermal Energy & Changes of State': {
    title: 'Thermal Energy & Changes of State',
    unit: 'Unit 1 — Structure & Properties of Matter',
    standards: 'MS-PS1-4',
    hook: 'Sweat cools you down because the fastest-moving water molecules leave first, carrying their energy away — the ones left behind are literally colder. Your body runs its own AC using physics.',
    learnIt: [
      { type: 'Read', desc: 'CK-12 — Thermal energy & changes of state', meta: '~8 min read + images', link: ck12('thermal energy changes of state') },
      { type: 'Explore', desc: 'PhET — Energy Forms & Changes (add heat, watch energy move)', meta: '~12 min · interactive', link: phet('energy-forms-and-changes') },
      { type: 'Watch', desc: 'SciShow — Why does sweating cool you down?', meta: '~5 min', link: yt('SciShow why does sweat cool you down') },
    ],
    quiz: [
      { q: 'Sweating cools you because…', options: ['Sweat is icy cold', 'Fast molecules evaporate and carry energy away', 'Your skin freezes', 'Water is heavy'], answer: 1 },
      { q: 'Adding thermal energy to a solid makes its particles…', options: ['Move faster and spread apart', 'Slow down', 'Stop moving', 'Get heavier'], answer: 0 },
      { q: 'Melting and boiling both happen when you…', options: ['Remove energy', 'Add thermal energy', 'Add mass', 'Add color'], answer: 1 },
    ],
    short: 'Give a real example of a change of state and say whether energy was added or removed.',
  },

  'Natural & Synthetic Materials': {
    title: 'Natural vs. Synthetic Materials',
    unit: 'Unit 1 — Structure & Properties of Matter',
    standards: 'MS-PS1-3',
    hook: 'The lithium in an ebike battery starts as rock in the ground. Getting from a dusty mineral to a rechargeable cell is a chain of chemistry — and every synthetic material you own began as a natural resource somewhere.',
    learnIt: [
      { type: 'Read', desc: 'CK-12 — Natural resources & synthetic materials', meta: '~8 min', link: ck12('natural and synthetic materials') },
      { type: 'Read', desc: 'Britannica Kids — Lithium (where battery metal comes from)', meta: '~6 min', link: brit('lithium') },
      { type: 'Do', desc: 'Trace one thing you own (a battery, plastic, nylon) back to its raw natural resource', meta: '~10 min', link: '#' },
    ],
    quiz: [
      { q: 'A synthetic material is one that is…', options: ['Found ready-made in nature', 'Made by people from natural resources', 'Always alive', 'Always a metal'], answer: 1 },
      { q: 'The lithium in a battery originally comes from…', options: ['Plants', 'The air', 'Rock and minerals in the ground', 'Rainwater'], answer: 2 },
      { q: 'Which of these is a synthetic material?', options: ['Plastic', 'Wood', 'Cotton', 'Stone'], answer: 0 },
    ],
    short: 'Pick something you use every day and trace it back to the natural resource it started as.',
  },

  /* ===================== UNIT 2 — CHEMICAL REACTIONS ===================== */

  'Signs of a Chemical Reaction': {
    title: 'Signs of a Chemical Reaction',
    unit: 'Unit 2 — Chemical Reactions',
    standards: 'MS-PS1-2',
    hook: 'A firework is a chemical reaction with a schedule — color, light, heat, sound, and gas all at once. Learn the signs of a reaction and you can spot chemistry happening everywhere.',
    learnIt: [
      { type: 'Read', desc: 'BBC Bitesize — Chemical vs. physical changes', meta: '~8 min', link: bitesize('chemical and physical changes') },
      { type: 'Explore', desc: 'PhET — Reactants, Products & Leftovers', meta: '~12 min · interactive', link: phet('reactants-products-and-leftovers') },
      { type: 'Watch', desc: 'Crash Course — Chemical reactions', meta: '~11 min', link: yt('Crash Course Chemistry chemical reactions and equations') },
    ],
    quiz: [
      { q: 'Which is a sign that a chemical reaction (a NEW substance) happened?', options: ['Ice melting', 'Water boiling', 'A color change, gas, or heat being produced', 'Cutting paper'], answer: 2 },
      { q: 'Burning toast is a…', options: ['Physical change', 'Chemical change', 'Change of state only', 'Not a change at all'], answer: 1 },
      { q: 'Which is a PHYSICAL change (not chemical)?', options: ['Rusting iron', 'Melting ice', 'Baking a cake', 'A firework'], answer: 1 },
    ],
    short: 'List two signs that tell you a chemical reaction — not just a physical change — has happened.',
  },

  'Conservation of Mass': {
    title: 'Conservation of Mass',
    unit: 'Unit 2 — Chemical Reactions',
    standards: 'MS-PS1-5',
    hook: 'Burn a log and it seems to mostly vanish into ash — but weigh the gases that floated away and the mass is exactly the same as before. Atoms never disappear; they just rearrange.',
    learnIt: [
      { type: 'Read', desc: 'CK-12 — Conservation of mass', meta: '~7 min', link: ck12('conservation of mass') },
      { type: 'Explore', desc: 'PhET — Balancing Chemical Equations (atoms in = atoms out)', meta: '~12 min · interactive', link: phet('balancing-chemical-equations') },
      { type: 'Do', desc: 'Weigh baking soda + vinegar in a sealed zip bag — before vs. after', meta: '~15 min', link: '#' },
    ],
    quiz: [
      { q: 'In a chemical reaction, the total mass…', options: ['Stays the same', 'Always increases', 'Always decreases', 'Disappears'], answer: 0 },
      { q: 'Fizz baking soda + vinegar in an OPEN cup and it weighs less after because…', options: ['Mass was destroyed', 'Gas escaped into the air', 'Atoms vanished', 'It turned into energy'], answer: 1 },
      { q: 'In a reaction, atoms are…', options: ['Created from nothing', 'Destroyed', 'Rearranged, never created or destroyed', 'Turned into pure energy'], answer: 2 },
    ],
    short: 'Explain why mass stays the same in a sealed bag but seems to drop in an open cup.',
  },

  'Endothermic & Exothermic': {
    title: 'Endothermic & Exothermic — Designing with Heat',
    unit: 'Unit 2 — Chemical Reactions',
    standards: 'MS-PS1-6',
    hook: 'A hand warmer and an instant cold pack are the same idea run in opposite directions: one dumps heat out, the other soaks it up. Engineers pick the reaction to get the temperature they want.',
    learnIt: [
      { type: 'Read', desc: 'BBC Bitesize — Exothermic & endothermic reactions', meta: '~8 min', link: bitesize('exothermic endothermic reactions') },
      { type: 'Explore', desc: 'PhET — Energy Forms & Changes', meta: '~10 min · interactive', link: phet('energy-forms-and-changes') },
      { type: 'Watch', desc: 'SciShow — How do hand warmers work?', meta: '~5 min', link: yt('SciShow how do hand warmers work') },
    ],
    quiz: [
      { q: 'An exothermic reaction…', options: ['Releases heat (gets warm)', 'Absorbs heat (gets cold)', 'Makes no heat', 'Only freezes'], answer: 0 },
      { q: 'An instant cold pack is…', options: ['Exothermic', 'Endothermic — it absorbs heat', 'Neither', 'A physical change only'], answer: 1 },
      { q: 'A hand warmer uses a reaction that…', options: ['Releases thermal energy', 'Absorbs thermal energy', 'Makes light', 'Makes sound'], answer: 0 },
    ],
    short: 'Describe a device that uses a chemical reaction to get hot or cold — what is it for, and how would you make it hotter or colder?',
  },

  'Batteries — Chemistry to Electricity': {
    title: 'Batteries — Chemistry You Can Ride',
    unit: 'Unit 2 — Chemical Reactions',
    standards: 'MS-PS1-2',
    hook: 'A battery is a chemical reaction on a leash. The reaction WANTS to happen, but the only path is through your circuit — so the electrons do work on the way, spinning a motor or lighting a screen. Your ebike is chemistry with wheels.',
    learnIt: [
      { type: 'Read', desc: 'Britannica Kids — How a battery works', meta: '~7 min', link: brit('battery') },
      { type: 'Explore', desc: 'PhET — Circuit Construction Kit (build a battery + bulb)', meta: '~15 min · interactive', link: phet('circuit-construction-kit-dc-virtual-lab') },
      { type: 'Do', desc: 'Build a lemon or potato battery and light an LED', meta: '~20 min', link: '#' },
    ],
    quiz: [
      { q: 'A battery turns ___ energy into electrical energy.', options: ['Chemical', 'Nuclear', 'Sound', 'Light'], answer: 0 },
      { q: 'Electrons only flow when the battery is connected in a…', options: ['Broken wire', 'Complete circuit', 'Block of glass', 'Magnet'], answer: 1 },
      { q: 'An ebike battery gets long range because it…', options: ['Is one giant AA', 'Uses no chemistry', 'Combines many cells for more stored energy', 'Never needs charging'], answer: 2 },
    ],
    short: 'Explain how a battery turns a chemical reaction into electricity. Use the words "electrons" and "circuit".',
  },

  /* ===================== UNIT 3 — EARTH'S SYSTEMS ===================== */

  'The Rock Cycle': {
    title: 'The Rock Cycle',
    unit: "Unit 3 — Earth's Systems",
    standards: 'MS-ESS2-1',
    hook: 'The rock in your driveway might have been a volcano, then a beach, then a mountain, then mud, over hundreds of millions of years — and it isn\'t done. Earth has no landfill. It recycles everything, slowly.',
    learnIt: [
      { type: 'Read', desc: 'Britannica Kids — The rock cycle & rock types', meta: '~8 min', link: brit('rock cycle') },
      { type: 'Explore', desc: 'CK-12 — Rock cycle (interactive PLIX / practice)', meta: '~10 min', link: ck12('rock cycle') },
      { type: 'Do', desc: 'Model it with crayon shavings (sediment → press → heat → melt)', meta: '~15 min', link: '#' },
    ],
    quiz: [
      { q: 'The three main rock types are igneous, sedimentary, and…', options: ['Metamorphic', 'Plastic', 'Crystal', 'Liquid'], answer: 0 },
      { q: 'The rock cycle is powered by…', options: ['Electricity', "Earth's internal heat and the sun", 'The moon only', 'Nothing — rocks never change'], answer: 1 },
      { q: 'Sediment that gets squeezed and cemented over time becomes…', options: ['Sedimentary rock', 'Igneous rock', 'Lava', 'Metal'], answer: 0 },
    ],
    short: 'Explain how an igneous rock could eventually become a sedimentary rock. What has to happen?',
  },

  'The Water Cycle & Earth': {
    title: "The Water Cycle & Earth's Energy",
    unit: "Unit 3 — Earth's Systems",
    standards: 'MS-ESS2-1',
    hook: 'The water in your glass has almost certainly been inside a dinosaur, a cloud, and the ocean — probably more than once. Earth has run the same water through the same cycle for billions of years, powered by the sun.',
    learnIt: [
      { type: 'Explore', desc: 'USGS — Interactive water cycle diagram', meta: '~10 min · click each step', link: 'https://www.usgs.gov/special-topics/water-science-school/science/water-cycle' },
      { type: 'Read', desc: 'Britannica Kids — The water cycle', meta: '~7 min', link: brit('water cycle') },
      { type: 'Watch', desc: 'The hydrologic (water) cycle explained', meta: '~8 min', link: yt('water cycle hydrologic cycle explained') },
    ],
    quiz: [
      { q: "The sun's main job in the water cycle is to…", options: ['Evaporate water', 'Freeze water', 'Make rocks', 'Stop the rain'], answer: 0 },
      { q: 'Water vapor cooling into cloud droplets is called…', options: ['Evaporation', 'Condensation', 'Precipitation', 'Collection'], answer: 1 },
      { q: 'The water cycle mostly recycles…', options: ['The same water, over and over', 'Brand-new water each time', 'Only rainwater', 'Nothing'], answer: 0 },
    ],
    short: 'Trace a single drop of water through the whole cycle, naming each step.',
  },

  'Uneven Distribution of Resources': {
    title: 'Why Resources Aren\'t Spread Evenly',
    unit: "Unit 3 — Earth's Systems",
    standards: 'MS-ESS3-1',
    hook: 'Most of the world\'s lithium sits under a few salt flats in South America. Most cobalt is in one country. The reason ebikes and phones have supply drama is 100-million-year-old geology deciding where the good stuff ended up.',
    learnIt: [
      { type: 'Read', desc: 'CK-12 — Distribution of natural resources', meta: '~8 min', link: ck12('distribution of natural resources') },
      { type: 'Explore', desc: 'USGS — Where minerals & energy resources are found', meta: '~10 min', link: usgs('mineral resources') },
      { type: 'Watch', desc: 'SciShow — Where does lithium come from?', meta: '~7 min', link: yt('SciShow where does lithium come from mining') },
    ],
    quiz: [
      { q: 'Resources like oil and lithium are found in certain places because of…', options: ['Past geologic processes', 'Random luck', 'A human decision', "Today's weather"], answer: 0 },
      { q: 'Why do batteries cause "supply drama"?', options: ['Key minerals are concentrated in just a few places', 'They are everywhere', 'Nobody wants them', 'They grow on trees'], answer: 0 },
      { q: 'A renewable resource is one that…', options: ['Runs out forever', 'Replenishes naturally in a human lifetime', 'Is always a metal', "Can't be used"], answer: 1 },
    ],
    short: 'Name one resource an ebike needs and explain why it is found in only certain parts of the world.',
  },

  /* ===================== UNIT 4 — HISTORY OF EARTH ===================== */

  'Geologic Time': {
    title: 'Geologic Time & Deep Time',
    unit: 'Unit 4 — History of Earth',
    standards: 'MS-ESS2-2',
    hook: 'If all of Earth\'s history were one 24-hour day, humans show up in the last 2 seconds before midnight. Dinosaurs get a solid hour. Almost everything you\'ve heard of happened in the final blink.',
    learnIt: [
      { type: 'Read', desc: 'Britannica Kids — Geologic time', meta: '~8 min', link: brit('geologic time') },
      { type: 'Explore', desc: 'CK-12 — Geologic time scale (practice + visuals)', meta: '~10 min', link: ck12('geologic time scale') },
      { type: 'Do', desc: 'Build a scale timeline of Earth down a hallway or the driveway', meta: '~20 min', link: '#' },
    ],
    quiz: [
      { q: 'About how old is the Earth?', options: ['~6,000 years', '~1 million years', '~4.6 billion years', '~100 billion years'], answer: 2 },
      { q: "On a 24-hour clock of Earth's history, humans appear…", options: ['At the very start', 'At noon', 'In the last couple of seconds', 'Never'], answer: 2 },
      { q: '"Deep time" means…', options: ['The deep ocean', 'The huge span of geologic history', 'Nighttime', 'Deep caves'], answer: 1 },
    ],
    short: 'After building your timeline: what surprised you most about WHEN things happened?',
  },

  'Reading Rock Strata': {
    title: 'Rock Strata & Fossils — Earth\'s Record Book',
    unit: 'Unit 4 — History of Earth',
    standards: 'MS-ESS2-3',
    hook: 'The Grand Canyon is a mile-deep stack of pages, oldest at the bottom, and you can read almost 2 billion years by climbing down it. Every layer is a chapter of what Earth was doing at the time.',
    learnIt: [
      { type: 'Read', desc: 'CK-12 — Relative dating & the law of superposition', meta: '~8 min', link: ck12('law of superposition relative dating rock layers') },
      { type: 'Read', desc: 'Britannica Kids — Fossils & the rock record', meta: '~7 min', link: brit('fossil') },
      { type: 'Watch', desc: 'How to read rock layers', meta: '~7 min', link: yt('how to read rock layers strata superposition') },
    ],
    quiz: [
      { q: 'In undisturbed rock layers, the OLDEST layer is…', options: ['At the top', 'At the bottom', 'In the middle', 'Missing'], answer: 1 },
      { q: 'The "oldest-on-the-bottom" rule is called the law of…', options: ['Superposition', 'Gravity', 'Motion', 'Reflection'], answer: 0 },
      { q: 'Finding the same fossil in layers on two continents suggests they…', options: ['Were once connected or the same age', 'Are fake', 'Move around', 'Mean nothing'], answer: 0 },
    ],
    short: 'Draw or describe a set of rock layers with a couple fossils, and tell their story oldest → youngest.',
  },

  'Plate Tectonics': {
    title: 'Plate Tectonics — The Evidence',
    unit: 'Unit 4 — History of Earth',
    standards: 'MS-ESS2-3',
    hook: 'South America and Africa fit together like torn paper because they were once the same landmass. Matching coastlines, fossils, and rock — the continents are still moving right now, about as fast as your fingernails grow.',
    learnIt: [
      { type: 'Read', desc: 'Britannica Kids — Plate tectonics', meta: '~8 min', link: brit('plate tectonics') },
      { type: 'Explore', desc: 'USGS — Live earthquake map (plate boundaries light up)', meta: '~10 min · interactive', link: 'https://earthquake.usgs.gov/earthquakes/map/' },
      { type: 'Watch', desc: 'Crash Course — Plate tectonics', meta: '~11 min', link: yt('crash course plate tectonics evidence') },
    ],
    quiz: [
      { q: 'Evidence that continents move includes matching coastlines and…', options: ['Matching fossils and rocks across oceans', 'Matching flags', 'Matching cities', 'Nothing'], answer: 0 },
      { q: 'Plates move because of…', options: ['Wind', 'Ocean tides', 'Heat and convection inside Earth', 'The moon'], answer: 2 },
      { q: 'About how fast do tectonic plates move?', options: ['60 mph', 'Roughly as fast as fingernails grow', 'Not at all', 'The speed of light'], answer: 1 },
    ],
    short: 'List two pieces of evidence that Earth\'s plates move, and say what each one shows.',
  },

  'Cascadia': {
    title: 'Cascadia — The Fault Under the Northwest',
    unit: 'Unit 4 — History of Earth',
    standards: 'MS-ESS2-3',
    hook: 'Off the Oregon coast, one tectonic plate is sliding under another. Roughly every few hundred years it slips all at once — the last time was January 1700, and we know the date because it sent a tsunami all the way to Japan. This is your backyard. <a class="hook-link" href="https://en.wikipedia.org/wiki/Cascadia_subduction_zone" target="_blank" rel="noopener">🔗 Cascadia Subduction Zone</a>',
    learnIt: [
      { type: 'Read', desc: 'Cascadia Subduction Zone — the local fault', meta: '~10 min', link: 'https://en.wikipedia.org/wiki/Cascadia_subduction_zone' },
      { type: 'Explore', desc: 'USGS — Live earthquakes in the Pacific Northwest', meta: '~10 min · interactive map', link: 'https://earthquake.usgs.gov/earthquakes/map/' },
      { type: 'Watch', desc: 'The 1700 Cascadia earthquake & orphan tsunami', meta: '~10 min', link: yt('Cascadia subduction zone 1700 earthquake tsunami') },
    ],
    quiz: [
      { q: 'Cascadia is a ___ zone off the Oregon coast.', options: ['Subduction', 'Desert', 'Rainforest', 'Time'], answer: 0 },
      { q: 'The last great Cascadia earthquake happened in…', options: ['2011', 'January 1700', '1906', 'It never has'], answer: 1 },
      { q: 'Scientists pinned down the exact date using…', options: ['A diary', 'A photograph', 'A tsunami recorded in Japan + ghost forests', 'A lucky guess'], answer: 2 },
    ],
    short: 'Explain what a subduction zone is and why the Cascadia one produces very large earthquakes.',
  },

  /* ===================== UNIT 5 — HUMAN IMPACTS & NATURAL HAZARDS ===================== */

  'Forecasting Natural Hazards': {
    title: 'Forecasting Natural Hazards',
    unit: 'Unit 5 — Human Impacts & Natural Hazards',
    standards: 'MS-ESS3-2',
    hook: 'Nobody can tell you the day the next big earthquake or wildfire hits. But we CAN map where they\'re likely, how bad, and how often — and that forecast is the difference between a disaster and a drill.',
    learnIt: [
      { type: 'Read', desc: 'Britannica Kids — Natural hazards', meta: '~8 min', link: brit('natural hazard') },
      { type: 'Explore', desc: 'USGS — Natural hazards maps (quakes, volcanoes, more)', meta: '~10 min · interactive', link: 'https://www.usgs.gov/programs/natural-hazards' },
      { type: 'Watch', desc: 'SciShow — Can we predict earthquakes?', meta: '~7 min', link: yt('SciShow can we predict earthquakes') },
    ],
    quiz: [
      { q: 'What CAN scientists actually do?', options: ['Predict the exact day of a quake', 'Forecast the risk and likelihood of hazards', 'Stop earthquakes', 'Control volcanoes'], answer: 1 },
      { q: 'Forecasting a hazard means…', options: ['Naming the exact minute it will hit', 'Estimating where, how likely, and how bad', 'Preventing it entirely', 'Ignoring it'], answer: 1 },
      { q: 'The smartest response to hazard risk is to…', options: ['Panic', 'Prepare and design for it', 'Do nothing', 'Move right onto the fault'], answer: 1 },
    ],
    short: 'Name a natural hazard that could hit the Rogue Valley and one way to forecast or prepare for it.',
  },

  'Earthquake Engineering': {
    title: 'Designing for the Shake',
    unit: 'Unit 5 — Human Impacts & Natural Hazards',
    standards: 'MS-ESS3-2',
    hook: 'You can\'t stop an earthquake, but you can build a tower that dances with it instead of snapping. Engineers in earthquake country design buildings to bend, slide, and absorb — turning a physics problem into a survival tool.',
    learnIt: [
      { type: 'Read', desc: 'CK-12 — Reducing earthquake damage / engineering', meta: '~8 min', link: ck12('earthquake engineering reducing damage') },
      { type: 'Watch', desc: 'How do earthquake-proof buildings work?', meta: '~8 min', link: yt('how do earthquake proof buildings work engineering') },
      { type: 'Do', desc: 'Build a tower and shake-test it (cookie sheet on tennis balls)', meta: '~30 min', link: '#' },
    ],
    quiz: [
      { q: 'Earthquake-safe buildings are designed to…', options: ['Bend, sway, and absorb the motion', 'Be perfectly rigid', 'Be as tall as possible', 'Have no foundation'], answer: 0 },
      { q: 'A wider, lower base makes a structure…', options: ['Less stable', 'More stable when shaken', 'Heavier only', 'Invisible'], answer: 1 },
      { q: 'Engineers improve designs by…', options: ['Guessing', 'Shaking models and redesigning', 'Never testing', 'Painting them'], answer: 1 },
    ],
    short: 'After your shake test: what failed first, and what did you change to make it survive longer?',
  },

  'Human Impact & Solutions': {
    title: 'Human Impact & Designing Solutions',
    unit: 'Unit 5 — Human Impacts & Natural Hazards',
    standards: 'MS-ESS3-2',
    hook: 'An ebike instead of a car is a tiny climate decision — but multiply it by millions of riders and it\'s a real dent in emissions. Human impact isn\'t only damage; it\'s also every clever fix people design.',
    learnIt: [
      { type: 'Read', desc: 'Britannica Kids — Humans & the environment', meta: '~8 min', link: brit('human environment impact') },
      { type: 'Explore', desc: 'iNaturalist — log real observations near you (citizen science)', meta: 'ongoing · interactive', link: 'https://www.inaturalist.org/observations' },
      { type: 'Watch', desc: 'Crash Course — Humans & the environment', meta: '~11 min', link: yt('crash course humans and the environment') },
    ],
    quiz: [
      { q: 'Riding an ebike instead of driving mainly reduces…', options: ['Exercise', 'Emissions and pollution', 'Battery use', 'Nothing'], answer: 1 },
      { q: 'Human impact on the environment can be…', options: ['Only harmful', 'Only good', 'Both harm and helpful solutions', 'Nonexistent'], answer: 2 },
      { q: 'Restoring a stream or planting native plants is an example of…', options: ['A designed solution', 'Pollution', 'A natural hazard', 'A chemical reaction'], answer: 0 },
    ],
    short: 'Describe one way humans harm an ecosystem AND one designed solution that helps.',
  },

  /* ===================== UNIT 6 — ENERGY, ELECTRICITY & THE E-BIKE ===================== */

  'Kinetic & Potential Energy': {
    title: 'Kinetic & Potential Energy',
    unit: 'Unit 6 — Energy, Electricity & the E-Bike',
    standards: 'MS-PS3-1',
    hook: 'At the top of a hill your ebike is loaded like a slingshot — pure stored (potential) energy. Let go and it converts to motion (kinetic). The heavier and faster you are, the more energy is in play — which is why speed feels so different at the bottom.',
    learnIt: [
      { type: 'Read', desc: 'BBC Bitesize — Kinetic & potential (stored) energy', meta: '~8 min', link: bitesize('kinetic and potential energy stores') },
      { type: 'Explore', desc: 'PhET — Energy Skate Park (watch energy trade back and forth)', meta: '~12 min · interactive', link: phet('energy-skate-park-basics') },
      { type: 'Watch', desc: 'Kinetic vs. potential energy', meta: '~6 min', link: yt('kinetic and potential energy explained') },
    ],
    quiz: [
      { q: 'At the TOP of a hill, your bike has the most…', options: ['Potential energy', 'Kinetic energy', 'No energy', 'Heat energy'], answer: 0 },
      { q: 'Kinetic energy depends on…', options: ['Mass and speed', 'Color and size', 'Time of day', 'Height only'], answer: 0 },
      { q: 'Two riders coast down the same hill; the heavier one at the bottom has…', options: ['Less kinetic energy', 'More kinetic energy', 'Exactly the same', 'None'], answer: 1 },
    ],
    short: 'Explain the difference between potential and kinetic energy using your bike on a hill.',
  },

  'Energy Transformations': {
    title: 'Energy Transformations',
    unit: 'Unit 6 — Energy, Electricity & the E-Bike',
    standards: 'MS-PS3-5',
    hook: 'Energy is never used up — it just changes clothes. On your ebike: chemical (battery) → electrical (wires) → kinetic (motion) → and always some heat. Follow the energy and you\'ll find it every time, even the part that leaks out as warmth.',
    learnIt: [
      { type: 'Read', desc: 'CK-12 — Energy transformation & conservation of energy', meta: '~8 min', link: ck12('conservation of energy transformation') },
      { type: 'Explore', desc: 'PhET — Energy Forms & Changes', meta: '~12 min · interactive', link: phet('energy-forms-and-changes') },
      { type: 'Watch', desc: 'Conservation of energy explained', meta: '~8 min', link: yt('conservation of energy transformations explained') },
    ],
    quiz: [
      { q: 'On an ebike, energy goes chemical → electrical → ___ → heat.', options: ['Kinetic (motion)', 'Nuclear', 'Sound only', 'Light only'], answer: 0 },
      { q: 'Energy is…', options: ['Used up and gone', 'Transformed, never destroyed', 'Created by the motor', 'Made of atoms'], answer: 1 },
      { q: 'The energy that seems "lost" in a machine usually becomes…', options: ['Heat', 'Nothing', 'More fuel', 'Light only'], answer: 0 },
    ],
    short: 'Trace the energy of an ebike ride, naming every form it takes — including where energy is lost as heat.',
  },

  'Electricity & Circuits': {
    title: 'Electricity & Circuits',
    unit: 'Unit 6 — Energy, Electricity & the E-Bike',
    standards: 'MS-PS3-2',
    hook: 'Electricity is just electrons taking a lap. Give them a complete loop and a push (voltage) and they\'ll do work — spin a motor, make light, make heat. Break the loop anywhere and everything stops. That\'s a switch.',
    learnIt: [
      { type: 'Read', desc: 'BBC Bitesize — Electric circuits', meta: '~8 min', link: bitesize('electric circuits series parallel') },
      { type: 'Explore', desc: 'PhET — Circuit Construction Kit (build & test real circuits)', meta: '~15 min · interactive', link: phet('circuit-construction-kit-dc-virtual-lab') },
      { type: 'Do', desc: 'Light an LED, then build an electromagnet or homopolar motor', meta: '~30 min', link: '#' },
    ],
    quiz: [
      { q: 'Electric current is a flow of…', options: ['Electrons', 'Water', 'Air', 'Light'], answer: 0 },
      { q: 'To light a bulb you need a…', options: ['Complete circuit', 'Broken wire', 'Single wire end', 'A magnet only'], answer: 0 },
      { q: 'In a simple series circuit, if one bulb breaks…', options: ['They all go out', 'Nothing happens', 'The others get brighter', 'It catches fire'], answer: 0 },
    ],
    short: 'Describe a circuit you built — the source, the path, and the load — and what happens when you break the loop.',
  },

  'E-Bike Engineering Challenge': {
    title: 'The E-Bike Engineering Challenge',
    unit: 'Unit 6 — Energy, Electricity & the E-Bike',
    standards: 'MS-ETS1-1',
    hook: 'Real engineering is choosing between things you can\'t all have: more range OR less weight, more speed OR more battery life, cheaper OR tougher. Design your dream build and you\'ll hit every trade-off a real ebike engineer fights. <a class="hook-link" href="https://en.wikipedia.org/wiki/Electric_bicycle" target="_blank" rel="noopener">🔗 Electric bicycle</a>',
    learnIt: [
      { type: 'Read', desc: 'CK-12 — The engineering design process', meta: '~8 min', link: ck12('engineering design process criteria constraints') },
      { type: 'Watch', desc: 'How ebike motors, controllers & batteries work', meta: '~10 min', link: yt('how ebike motor controller battery works explained') },
      { type: 'Do', desc: 'Spec your dream ebike build within a set budget', meta: '~30 min', link: '#' },
    ],
    quiz: [
      { q: 'Engineering design always involves…', options: ['Trade-offs — you can\'t have everything', 'Perfect solutions', 'No limits at all', 'Only money'], answer: 0 },
      { q: '"Criteria and constraints" mean…', options: ['What it must do + the limits it must fit', 'Just the price', 'The color', 'The brand name'], answer: 0 },
      { q: 'More battery range usually costs you…', options: ['More weight and price', 'Nothing', 'Less safety only', 'More speed always'], answer: 0 },
    ],
    short: 'Spec your dream ebike within a budget. Name your top requirement and one real trade-off you had to make.',
  },

};

if (typeof module !== 'undefined') module.exports = { LESSONS };
