/**
 * lessons.js — 7th grade science lesson content.
 *
 * Keyed by a phrase in the To-Do item name (lesson.html matches it).
 *
 * Each lesson has a hook + learnIt (a Read, an interactive Explore, and/or a
 * Watch), and ONE of two "Show It" styles so days feel varied:
 *   quiz + short — auto-checked multiple choice ({q, options[], answer}) + a
 *                  written prompt.
 *   showIt       — open-ended "pick one" options (summarize / teach it / make
 *                  something / design it); he writes a response, no auto-grade.
 *
 * Reading + interactives are emphasized (no Khan science). Video links use
 * YouTube title-search so they always resolve; reads use CK-12 / BBC Bitesize /
 * Britannica Kids search; interactives use PhET sims and USGS live tools.
 */

const yt       = (q) => `https://www.youtube.com/results?search_query=${encodeURIComponent(q)}`;
const ck12     = (q) => `https://www.ck12.org/search/?q=${encodeURIComponent(q)}`;
const bitesize = (q) => `https://www.bbc.co.uk/bitesize/search?q=${encodeURIComponent(q)}`;
const brit     = (q) => `https://kids.britannica.com/search?query=${encodeURIComponent(q)}`;
const usgs     = (q) => `https://www.usgs.gov/search?query=${encodeURIComponent(q)}`;
const phet     = (slug) => `https://phet.colorado.edu/en/simulations/${slug}`;
const commonlit = (q) => `https://www.commonlit.org/en/search?query=${encodeURIComponent(q)}`;
const CANVA = 'https://www.canva.com/create/presentations/';
const canvaOpt = (what) => `Make a Canva presentation ${what}. <a href="${CANVA}" target="_blank" rel="noopener" class="choice-link">Open Canva ↗</a>`;

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
    showIt: [
      { type: 'Draw it', prompt: 'Draw the particles in a solid, a liquid, and a gas. Show the spacing AND the motion (use arrows). One sentence each on what the particles are doing.' },
      { type: 'Answer these', prompt: '(1) You heat a solid until it melts, then boils — what happens to the particles at each step? (2) Why does a gas fill its whole container but a solid keeps its shape?' },
      { type: 'Teach it', prompt: 'Explain to a parent (or the camera) what temperature really is, in terms of particles.' },
    ],
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
    hook: 'Nearly everything you own started as something dug, pumped, or grown — then transformed by chemistry. Plastic was oil. Glass was sand. A battery was rock. Synthetic materials are natural resources in disguise.',
    learnIt: [
      { type: 'Read', desc: 'CK-12 — Natural resources & synthetic materials', meta: '~8 min', link: ck12('natural and synthetic materials') },
      { type: 'Read', desc: 'Britannica Kids — Plastics (from oil to everyday stuff)', meta: '~6 min', link: brit('plastic') },
      { type: 'Watch', desc: 'How everyday materials are made', meta: '~6 min', link: yt('how plastic is made from oil explained') },
    ],
    showIt: [
      { type: 'Trace it', prompt: 'Pick one synthetic thing you use daily (a plastic bottle, a phone screen, a battery). Trace it back: what natural resource did it start as, and what had to happen to it?' },
      { type: 'Diagram it', prompt: 'Make a simple flow diagram: natural resource → processing → synthetic product.' },
      { type: 'Sort it', prompt: 'Find 5 objects near you and sort them into "mostly natural" and "mostly synthetic." Explain two of your calls.' },
    ],
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
    showIt: [
      { type: 'Do + explain', prompt: 'Run the sealed-bag experiment (or watch it). Write what the scale showed and explain WHY, using atoms.' },
      { type: 'Answer this', prompt: 'You fizz baking soda + vinegar in an OPEN cup and it weighs less afterward. Where did the mass go? Is that a problem for conservation of mass? Explain.' },
      { type: 'Teach it', prompt: 'State the law of conservation of mass and explain to someone why it MUST be true if atoms only rearrange.' },
    ],
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
    showIt: [
      { type: 'Design it', prompt: 'Design (on paper) a device that gets warm OR cold using a chemical reaction. What is it for? Which type of reaction (endo/exo)? How would you make it hotter or colder?' },
      { type: 'Compare', prompt: 'Explain the difference between endothermic and exothermic, with a real example of each you\'ve actually seen.' },
      { type: 'Make something', prompt: 'Draw a labeled diagram of a hand warmer OR a cold pack showing where the heat goes (in or out).' },
    ],
  },

  'Batteries — Chemistry to Electricity': {
    title: 'Batteries — Chemistry You Can Hold',
    unit: 'Unit 2 — Chemical Reactions',
    standards: 'MS-PS1-2',
    hook: 'A battery is a chemical reaction on a leash. The reaction WANTS to happen, but the only path is through your circuit — so the electrons do work on the way, spinning a motor or lighting a screen. (Yes, that includes the pack on your bike.)',
    learnIt: [
      { type: 'Read', desc: 'Britannica Kids — How a battery works', meta: '~7 min', link: brit('battery') },
      { type: 'Explore', desc: 'PhET — Circuit Construction Kit (build a battery + bulb)', meta: '~15 min · interactive', link: phet('circuit-construction-kit-dc-virtual-lab') },
      { type: 'Do', desc: 'Build a lemon or potato battery and light an LED', meta: '~20 min', link: '#' },
    ],
    quiz: [
      { q: 'A battery turns ___ energy into electrical energy.', options: ['Chemical', 'Nuclear', 'Sound', 'Light'], answer: 0 },
      { q: 'Electrons only flow when the battery is connected in a…', options: ['Broken wire', 'Complete circuit', 'Block of glass', 'Magnet'], answer: 1 },
      { q: 'A bigger battery pack stores more energy because it…', options: ['Is one giant cell', 'Uses no chemistry', 'Combines many cells together', 'Never needs charging'], answer: 2 },
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
      { type: 'Explore', desc: 'CK-12 — Rock cycle (interactive practice)', meta: '~10 min', link: ck12('rock cycle') },
      { type: 'Do', desc: 'Model it with crayon shavings (sediment → press → heat → melt)', meta: '~15 min', link: '#' },
    ],
    showIt: [
      { type: 'Draw it', prompt: 'Draw the rock cycle as a LOOP (not a line). Start at igneous and get all the way back to igneous. Label each arrow with the process (heat, pressure, weathering, melting…).' },
      { type: 'Do it', prompt: 'Do the crayon-shaving model and photograph/describe your three "rocks." Which real rock type does each represent?' },
      { type: 'Explain', prompt: 'Explain how a sedimentary rock could become an igneous rock. What has to happen, and where?' },
    ],
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
    hook: 'Most of the world\'s lithium sits under a few salt flats in South America. Most cobalt is in one country. The reason phones, EVs, and yes — bikes — have supply drama is 100-million-year-old geology deciding where the good stuff ended up.',
    learnIt: [
      { type: 'Read', desc: 'CK-12 — Distribution of natural resources', meta: '~8 min', link: ck12('distribution of natural resources') },
      { type: 'Explore', desc: 'USGS — Where minerals & energy resources are found', meta: '~10 min', link: usgs('mineral resources') },
      { type: 'Watch', desc: 'SciShow — Where does lithium come from?', meta: '~7 min', link: yt('SciShow where does lithium come from mining') },
    ],
    showIt: [
      { type: 'Connect it', prompt: 'Pick one resource a modern gadget needs (lithium, copper, aluminum, oil). Find out where most of it comes from, and explain WHY it ended up there.' },
      { type: 'Explain', prompt: 'Explain why a resource like oil or lithium is concentrated in certain places instead of spread out evenly. (Hint: past geologic processes.)' },
      { type: 'Argue it', prompt: 'Renewable vs. nonrenewable: pick one resource and argue whether we\'re using it faster than Earth can replace it.' },
    ],
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
    showIt: [
      { type: 'Build + reflect', prompt: 'Make your scale timeline, then write 3 sentences on what surprised you most about WHEN things happened.' },
      { type: 'Teach it', prompt: 'Explain "deep time" to someone and why it\'s so hard for humans to actually picture.' },
      { type: 'Make something', prompt: 'Make a "clock of Earth" (24 hours = 4.6 billion years) and mark when life, dinosaurs, and humans appear.' },
    ],
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
    showIt: [
      { type: 'Explain', prompt: 'Explain what a subduction zone is and why the Cascadia one produces very large earthquakes.' },
      { type: 'Investigate', prompt: 'How did scientists figure out the EXACT date (January 1700) of an earthquake nobody here recorded? Look up "orphan tsunami" and "ghost forests," then explain it.' },
      { type: 'Make it useful', prompt: 'Make a short "what our family should have ready" earthquake plan for a Cascadia event.' },
    ],
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
    showIt: [
      { type: 'Design + test', prompt: 'Build a tower, shake-test it, and note what failed first. Redesign it once — what did you change, and did it survive longer?' },
      { type: 'List it', prompt: 'List 3 design tricks engineers use to help buildings survive earthquakes, and why each one works.' },
      { type: 'Make something', prompt: 'Draw your best earthquake-safe building and label the features that help it survive.' },
    ],
  },

  'Human Impact & Solutions': {
    title: 'Human Impact & Designing Solutions',
    unit: 'Unit 5 — Human Impacts & Natural Hazards',
    standards: 'MS-ESS3-2',
    hook: 'Swapping a car trip for a bike ride is a tiny climate decision — but multiply it by millions of people and it\'s a real dent in emissions. Human impact isn\'t only damage; it\'s also every clever fix people design.',
    learnIt: [
      { type: 'Read', desc: 'Britannica Kids — Humans & the environment', meta: '~8 min', link: brit('human environment impact') },
      { type: 'Explore', desc: 'iNaturalist — log real observations near you (citizen science)', meta: 'ongoing · interactive', link: 'https://www.inaturalist.org/observations' },
      { type: 'Watch', desc: 'Crash Course — Humans & the environment', meta: '~11 min', link: yt('crash course humans and the environment') },
    ],
    showIt: [
      { type: 'Argue it', prompt: 'Pick one way humans reduce their impact (biking, recycling, solar, habitat restoration). Make the case for it with evidence — and name one honest downside.' },
      { type: 'Explain', prompt: 'Explain one way humans harm an ecosystem AND one designed solution that helps.' },
      { type: 'Investigate', prompt: 'Walk or look around your neighborhood and find one example of human impact (good or bad). Describe it and propose one improvement.' },
    ],
  },

  /* ===================== UNIT 6 — ENERGY & ELECTRICITY ===================== */

  'Kinetic & Potential Energy': {
    title: 'Kinetic & Potential Energy',
    unit: 'Unit 6 — Energy & Electricity',
    standards: 'MS-PS3-1',
    hook: 'At the top of a hill, a bike — or a skateboard, or a roller-coaster car — is loaded like a slingshot: pure stored (potential) energy. Let go and it all converts to motion (kinetic). The heavier and faster you are, the more energy is in play.',
    learnIt: [
      { type: 'Read', desc: 'BBC Bitesize — Kinetic & potential (stored) energy', meta: '~8 min', link: bitesize('kinetic and potential energy stores') },
      { type: 'Explore', desc: 'PhET — Energy Skate Park (watch energy trade back and forth)', meta: '~12 min · interactive', link: phet('energy-skate-park-basics') },
      { type: 'Watch', desc: 'Kinetic vs. potential energy', meta: '~6 min', link: yt('kinetic and potential energy explained') },
    ],
    quiz: [
      { q: 'At the TOP of a hill, a coasting bike has the most…', options: ['Potential energy', 'Kinetic energy', 'No energy', 'Heat energy'], answer: 0 },
      { q: 'Kinetic energy depends on…', options: ['Mass and speed', 'Color and size', 'Time of day', 'Height only'], answer: 0 },
      { q: 'Two riders coast down the same hill; the heavier one at the bottom has…', options: ['Less kinetic energy', 'More kinetic energy', 'Exactly the same', 'None'], answer: 1 },
    ],
    short: 'Explain the difference between potential and kinetic energy using a real example (a hill, a swing, a drawn bow…).',
  },

  'Energy Transformations': {
    title: 'Energy Transformations',
    unit: 'Unit 6 — Energy & Electricity',
    standards: 'MS-PS3-5',
    hook: 'Energy never gets used up — it just changes clothes. In a flashlight: chemical (battery) → electrical → light + heat. In anything with a motor: electrical → motion → heat. Follow the energy and you\'ll find it every time, even the part that leaks out as warmth.',
    learnIt: [
      { type: 'Read', desc: 'CK-12 — Energy transformation & conservation of energy', meta: '~8 min', link: ck12('conservation of energy transformation') },
      { type: 'Explore', desc: 'PhET — Energy Forms & Changes', meta: '~12 min · interactive', link: phet('energy-forms-and-changes') },
      { type: 'Watch', desc: 'Conservation of energy explained', meta: '~8 min', link: yt('conservation of energy transformations explained') },
    ],
    showIt: [
      { type: 'Trace it', prompt: 'Pick any machine you use (flashlight, blender, phone, e-bike, toaster) and trace its energy through every form it takes — including where energy is "lost" as heat.' },
      { type: 'Correct it', prompt: 'A friend says a motor "uses up" energy. Explain why that\'s wrong, using the word "transformed."' },
      { type: 'Make something', prompt: 'Draw an energy-flow arrow diagram for one device, labeling each form (chemical, electrical, kinetic, light, heat…).' },
    ],
  },

  'Electricity & Circuits': {
    title: 'Electricity & Circuits',
    unit: 'Unit 6 — Energy & Electricity',
    standards: 'MS-PS3-2',
    hook: 'Electricity is just electrons taking a lap. Give them a complete loop and a push (voltage) and they\'ll do work — spin a motor, make light, make heat. Break the loop anywhere and everything stops. That\'s a switch.',
    learnIt: [
      { type: 'Read', desc: 'BBC Bitesize — Electric circuits', meta: '~8 min', link: bitesize('electric circuits series parallel') },
      { type: 'Explore', desc: 'PhET — Circuit Construction Kit (build & test real circuits)', meta: '~15 min · interactive', link: phet('circuit-construction-kit-dc-virtual-lab') },
      { type: 'Do', desc: 'Light an LED, then build an electromagnet or homopolar motor', meta: '~30 min', link: '#' },
    ],
    showIt: [
      { type: 'Build + explain', prompt: 'Build a working circuit (LED, electromagnet, or motor). Draw it and label the source, the path, and the load. What happens when you break the loop?' },
      { type: 'Answer these', prompt: '(1) What\'s the difference between voltage and current, in plain words? (2) Series vs. parallel — how are string lights wired so one dead bulb doesn\'t kill them all?' },
      { type: 'Teach it', prompt: 'Explain to a parent how a light switch works, in terms of a circuit being completed or broken.' },
    ],
  },

  'E-Bike Engineering Challenge': {
    title: 'The E-Bike Engineering Challenge',
    unit: 'Unit 6 — Energy & Electricity',
    standards: 'MS-ETS1-1',
    hook: 'Time to put the whole unit to work on something fun. Real engineering is choosing between things you can\'t all have: more range OR less weight, more speed OR more battery life, cheaper OR tougher. Design your dream build and you\'ll hit every trade-off a real engineer fights. <a class="hook-link" href="https://en.wikipedia.org/wiki/Electric_bicycle" target="_blank" rel="noopener">🔗 Electric bicycle</a>',
    learnIt: [
      { type: 'Read', desc: 'CK-12 — The engineering design process', meta: '~8 min', link: ck12('engineering design process criteria constraints') },
      { type: 'Watch', desc: 'How electric motors & controllers actually work', meta: '~10 min', link: yt('how electric motor controller battery works explained') },
      { type: 'Do', desc: 'Spec your dream build within a set budget', meta: '~30 min', link: '#' },
    ],
    showIt: [
      { type: 'Engineer it', prompt: 'Design your ideal e-bike (or any electric machine) on paper within a budget. List your top 3 requirements — range? speed? weight? price? — and show one real trade-off you had to make.' },
      { type: 'Defend it', prompt: 'Present your design to a parent and defend one choice where you gave something up to get something better.' },
    ],
  },

  /* =========================================================================
     HUMANITIES — integrated ELA + World History (Oregon SS + CCSS ELA)
     Reading + writing skills taught through world-history content. Short
     texts most weeks; one choice-novel unit. "Show It" leans on products:
     build a model, make a diagram, make a Canva presentation, write, present.
     ========================================================================= */

  /* ---------------- Humanities 1 — Reading the Ancient World ---------------- */

  'Why Civilizations Started by Rivers': {
    title: 'Why Civilizations Started by Rivers',
    unit: 'Humanities 1 — Reading the Ancient World',
    standards: 'RI.7.2 · OR World History (geography)',
    hook: 'The first cities on Earth all popped up next to the same thing: a big muddy river. The Nile, the Tigris and Euphrates, the Indus, the Yellow River — flood, farm, feast, repeat. Geography basically decided where humanity would grow up.',
    learnIt: [
      { type: 'Read', desc: 'Britannica Kids — Ancient civilizations & river valleys', meta: '~9 min', link: brit('ancient civilization river valley') },
      { type: 'Read', desc: 'CommonLit — text set on early civilizations (with questions)', meta: '~12 min', link: commonlit('ancient civilizations') },
      { type: 'Watch', desc: 'Crash Course World History — the Agricultural Revolution', meta: '~11 min', link: yt('Crash Course World History agricultural revolution') },
    ],
    showIt: [
      { type: 'Make a diagram', prompt: 'Map the four great river-valley civilizations (Mesopotamia, Egypt, Indus, China) and label WHY the river made each one possible (water, floods, soil, transport).' },
      { type: 'Build a model', prompt: 'Build a small model of a river-valley settlement (blocks, clay, cardboard) showing how people used the river.' },
      { type: 'Make a Canva', prompt: canvaOpt('explaining how geography shaped where the first cities grew') },
      { type: 'Write it', prompt: 'Write a paragraph stating the CENTRAL IDEA of what you read, backed by two details from the text (RI.7.2).' },
    ],
  },

  'Cracking Ancient Writing': {
    title: 'Cracking Ancient Writing',
    unit: 'Humanities 1 — Reading the Ancient World',
    standards: 'RI.7.1 · OR World History (primary sources)',
    hook: 'For 1,400 years nobody on Earth could read Egyptian hieroglyphs — the knowledge was just gone. Then a slab of rock (the Rosetta Stone) with the same message in three scripts cracked the code. Writing is a technology, and someone had to invent it.',
    learnIt: [
      { type: 'Read', desc: 'Britannica Kids — Hieroglyphics & cuneiform', meta: '~8 min', link: brit('hieroglyphics writing system') },
      { type: 'Explore', desc: 'The Rosetta Stone — how the code was cracked', meta: '~8 min · primary source', link: brit('Rosetta Stone') },
      { type: 'Watch', desc: 'TED-Ed — How writing changed the world', meta: '~5 min', link: yt('TED-Ed history of writing cuneiform') },
    ],
    showIt: [
      { type: 'Make a diagram', prompt: 'Design your own writing system: invent 8–10 symbols, show what each means, then write a short secret message and a "key" so someone could decode it.' },
      { type: 'Make a Canva', prompt: canvaOpt('on how ancient writing worked and how the Rosetta Stone cracked it') },
      { type: 'Teach it', prompt: 'Explain to a parent why the invention of writing was such a huge deal for civilization — give two reasons.' },
    ],
  },

  "Hammurabi's Code": {
    title: "Hammurabi's Code — The First Written Laws",
    unit: 'Humanities 1 — Reading the Ancient World',
    standards: 'RI.7.1 (cite evidence) · OR World History (law & government)',
    hook: '"An eye for an eye" isn\'t just a saying — it\'s roughly 3,800 years old, carved into a stone pillar by a Babylonian king named Hammurabi. Some of his 282 laws are surprisingly fair. Others are… rough. It\'s the world\'s oldest argument about justice.',
    learnIt: [
      { type: 'Read', desc: "Britannica Kids — Hammurabi & his code", meta: '~8 min', link: brit('Hammurabi code of laws') },
      { type: 'Read', desc: 'CommonLit — primary source: laws & justice', meta: '~10 min · with questions', link: commonlit('Hammurabi code law') },
    ],
    showIt: [
      { type: 'Write an argument', prompt: 'Pick two of Hammurabi\'s actual laws. Argue whether each is FAIR or UNFAIR, using evidence from the text and your own reasoning (RI.7.1).' },
      { type: 'Make a diagram', prompt: 'Make a "then vs. now" chart comparing 3 of Hammurabi\'s laws to a modern law about the same thing.' },
      { type: 'Make a Canva', prompt: canvaOpt('called "If I Made the Laws" — write your own 5 laws and defend them') },
    ],
  },

  'Ancient World Showcase': {
    title: 'Ancient World Showcase',
    unit: 'Humanities 1 — Reading the Ancient World',
    standards: 'RI.7.2 · W.7.2 · OR World History',
    hook: 'You\'ve met the ancient world — now pick your favorite corner of it and make something that shows what you know. Curator mode: what\'s the ONE thing about this civilization everyone should understand?',
    learnIt: [
      { type: 'Choose', desc: 'Pick one ancient civilization to go deeper on', meta: 'Egypt, Mesopotamia, Indus, China, or another', link: brit('ancient civilization') },
      { type: 'Read', desc: 'Gather 2–3 facts from a solid source', meta: '~10 min', link: commonlit('ancient civilization') },
    ],
    showIt: [
      { type: 'Make a Canva', prompt: canvaOpt('presenting one ancient civilization: where, when, why it mattered, and one amazing thing about it') },
      { type: 'Build a model', prompt: 'Build a model of something from your civilization (a ziggurat, a pyramid, a city wall) and write a caption card explaining it.' },
      { type: 'Write it', prompt: 'Write an informational piece (W.7.2) on your civilization with a clear main idea and organized facts.' },
    ],
  },

  /* ---------------- Humanities 2 — Myths, Legends & the Hero's Journey ---------------- */

  'What Myths Are For': {
    title: 'What Myths Are For',
    unit: "Humanities 2 — Myths, Legends & the Hero's Journey",
    standards: 'RL.7.2 (theme) · OR World History (culture & belief)',
    hook: 'Almost every ancient culture — with no way to talk to each other — invented a giant flood story and a creation story. Myths were how humans explained thunder, death, love, and where the world came from before science existed.',
    learnIt: [
      { type: 'Read', desc: 'Britannica Kids — World mythology (Greek, Norse, Egyptian)', meta: '~10 min', link: brit('mythology gods') },
      { type: 'Watch', desc: 'Crash Course Mythology — what myths do', meta: '~11 min', link: yt('Crash Course Mythology what is myth') },
    ],
    showIt: [
      { type: 'Make a diagram', prompt: 'Compare two creation or flood myths from different cultures (a Venn diagram or chart). What\'s the same? What\'s different? What THEME do they share?' },
      { type: 'Make a Canva', prompt: canvaOpt('introducing a mythology you find cool (Norse, Greek, Egyptian…) and its most interesting god or monster') },
      { type: 'Write it', prompt: 'In a paragraph, explain the THEME (the big idea about life) in one myth you read, with evidence (RL.7.2).' },
    ],
  },

  "The Hero's Journey": {
    title: "The Hero's Journey",
    unit: "Humanities 2 — Myths, Legends & the Hero's Journey",
    standards: 'RL.7.3 (plot & structure) · OR World History (culture)',
    hook: 'Star Wars, Harry Potter, Moana, and a 4,000-year-old Babylonian poem are secretly the SAME story: an ordinary person gets a call, faces trials, hits a low point, and comes back changed. It\'s called the Hero\'s Journey, and once you see it you can\'t unsee it.',
    learnIt: [
      { type: 'Watch', desc: 'TED-Ed — What makes a hero? (the Hero\'s Journey)', meta: '~5 min', link: yt('TED-Ed what makes a hero heros journey') },
      { type: 'Read', desc: 'The stages of the Hero\'s Journey', meta: '~8 min', link: brit('hero journey monomyth') },
    ],
    showIt: [
      { type: 'Make a diagram', prompt: 'Map a movie or book you love onto the Hero\'s Journey stages (call, trials, low point, return). Label each stage with what happens.' },
      { type: 'Make a Canva', prompt: canvaOpt('breaking down the Hero\'s Journey using examples from movies you like') },
      { type: 'Plan it', prompt: 'Sketch the outline of your OWN hero\'s journey story (you\'ll write it later this unit).' },
    ],
  },

  'Gilgamesh': {
    title: 'Gilgamesh — The Oldest Story on Earth',
    unit: "Humanities 2 — Myths, Legends & the Hero's Journey",
    standards: 'RL.7.1 · RL.7.3 · OR World History',
    hook: 'The oldest written story we have is about a bored, kind of arrogant king named Gilgamesh who befriends a wild man, fights a monster, and then loses his best friend and freaks out about death. It was written on clay tablets ~4,000 years ago and it still hits.',
    learnIt: [
      { type: 'Read', desc: 'The Epic of Gilgamesh — a young-reader retelling', meta: '~12 min', link: brit('Epic of Gilgamesh') },
      { type: 'Watch', desc: 'Crash Course / TED-Ed — Gilgamesh', meta: '~8 min', link: yt('TED-Ed Gilgamesh epic') },
    ],
    quiz: [
      { q: 'Who becomes Gilgamesh\'s close friend?', options: ['Enkidu', 'Humbaba', 'Ishtar', 'Utnapishtim'], answer: 0 },
      { q: 'What sends Gilgamesh on his big quest after the adventures?', options: ['Winning a war', 'The death of his friend and his fear of dying', 'Finding gold', 'Becoming king'], answer: 1 },
      { q: 'Why does Gilgamesh matter to historians?', options: ['It is the oldest known great story', 'It invented writing', 'It is a science textbook', 'It is completely made up recently'], answer: 0 },
    ],
    short: 'What is Gilgamesh really about, underneath the monsters? Name one theme and back it with something that happens in the story.',
  },

  'Write Your Own Myth': {
    title: 'Write Your Own Myth',
    unit: "Humanities 2 — Myths, Legends & the Hero's Journey",
    standards: 'W.7.3 (narrative writing)',
    hook: 'Your turn to be the ancient storyteller. Explain something real — why cats ignore us, why it rains, why volcanoes erupt — with a myth. Gods, monsters, and a hero optional but encouraged.',
    learnIt: [
      { type: 'Review', desc: 'Look back at the myth patterns you read (a lesson, gods, an explanation)', meta: '~5 min', link: brit('mythology') },
    ],
    showIt: [
      { type: 'Write a myth', prompt: 'Write an original myth (W.7.3): it should have characters, a problem, and EXPLAIN something about the world. Use vivid description and dialogue.' },
      { type: 'Make a model', prompt: 'Build or draw the world of your myth (a diorama, a map, illustrated pages) to go with your story.' },
      { type: 'Make a Canva', prompt: canvaOpt('turning your myth into an illustrated story or comic') },
    ],
  },

  /* ---------------- Humanities 3 — Empires & Power ---------------- */

  'What Makes an Empire': {
    title: 'What Makes an Empire',
    unit: 'Humanities 3 — Empires & Power',
    standards: 'RI.7.2 · OR World History (governance)',
    hook: 'An empire is what happens when one group ends up running a LOT of other groups across a huge area. Rome pulled it off for centuries. So did Persia, Han China, and the Mongols. How do you hold together something that big without phones, cars, or the internet?',
    learnIt: [
      { type: 'Read', desc: 'Britannica Kids — What is an empire?', meta: '~9 min', link: brit('empire history') },
      { type: 'Watch', desc: 'Crash Course World History — the Roman Empire', meta: '~11 min', link: yt('Crash Course World History Roman Empire') },
    ],
    showIt: [
      { type: 'Make a diagram', prompt: 'Diagram the "ingredients" of an empire (army, roads, laws, money, communication). Show how each one helps hold it together.' },
      { type: 'Make a Canva', prompt: canvaOpt('explaining what it takes to build and run an empire') },
      { type: 'Write it', prompt: 'State the central idea of what you read about empires and support it with two details (RI.7.2).' },
    ],
  },

  'Rome: Rise': {
    title: 'Rome: From Village to Superpower',
    unit: 'Humanities 3 — Empires & Power',
    standards: 'RI.7.3 (cause & effect) · OR World History',
    hook: 'Rome started as a nothing little town on a river and spent centuries turning into the most powerful state the western world had ever seen — through roads, legions, law, and a serious amount of ambition. Then it changed from a republic (people vote) into an empire (one guy runs it).',
    learnIt: [
      { type: 'Watch', desc: 'OverSimplified / Crash Course — the rise of Rome', meta: '~12 min', link: yt('OverSimplified rise of Rome history') },
      { type: 'Read', desc: 'Britannica Kids — Ancient Rome', meta: '~10 min', link: brit('ancient Rome republic empire') },
    ],
    showIt: [
      { type: 'Build a timeline', prompt: 'Make a timeline (drawn or a model) of Rome\'s rise with 6–8 key moments. Show at least one CAUSE → EFFECT link (RI.7.3).' },
      { type: 'Make a Canva', prompt: canvaOpt('telling the story of how Rome went from a village to an empire') },
      { type: 'Explain it', prompt: 'Explain the difference between the Roman Republic and the Roman Empire, and why the switch happened.' },
    ],
  },

  'Why Empires Fall': {
    title: 'Why Empires Fall',
    unit: 'Humanities 3 — Empires & Power',
    standards: 'RI.7.8 · W.7.1 (argument) · OR World History',
    hook: 'Rome didn\'t fall in a day — and historians STILL argue about why it fell at all. Too big to defend? Broke? Bad leaders? Invasions? Lead poisoning? This is a real unsolved debate, and you get to weigh in.',
    learnIt: [
      { type: 'Read', desc: 'The many theories for why Rome fell', meta: '~10 min', link: brit('fall of the Roman Empire') },
      { type: 'Read', desc: 'CommonLit — cause & effect / argument text set', meta: '~10 min · with questions', link: commonlit('fall of Rome empire') },
    ],
    showIt: [
      { type: 'Write an argument', prompt: 'Take a side: what MOST caused Rome to fall? Write an argument (W.7.1) with a clear claim, at least two pieces of evidence, and address one other theory you disagree with.' },
      { type: 'Debate it', prompt: 'Argue your theory out loud to a parent; have them push back, and respond with evidence.' },
      { type: 'Make a diagram', prompt: 'Make a cause-and-effect map showing several forces that weakened Rome and how they connect.' },
    ],
  },

  'Empire Showcase': {
    title: 'Empire Showcase — Pick Your Own',
    unit: 'Humanities 3 — Empires & Power',
    standards: 'RI.7.2 · W.7.2 · OR World History',
    hook: 'Rome gets all the fame, but Persia, Han China, the Mongols, Mali, and the Ottomans were every bit as wild. Pick one that isn\'t Rome and put it in the spotlight.',
    learnIt: [
      { type: 'Choose', desc: 'Pick an empire other than Rome', meta: 'Persia, Han China, Mongols, Mali, Ottomans…', link: brit('Mongol empire') },
      { type: 'Read', desc: 'Gather facts from a solid source', meta: '~12 min', link: commonlit('empire history') },
    ],
    showIt: [
      { type: 'Make a Canva', prompt: canvaOpt('presenting your empire: where/when, how it got powerful, one incredible fact, and how it ended') },
      { type: 'Build a model', prompt: 'Build or draw something iconic from your empire (the Great Wall, a Mongol war camp, a Persian road) with an explanation card.' },
      { type: 'Write it', prompt: 'Write an informational report (W.7.2) on your empire with a clear structure.' },
    ],
  },

  /* ---------------- Humanities 4 — A Connected World ---------------- */

  'The Silk Road': {
    title: 'The Silk Road',
    unit: 'Humanities 4 — A Connected World',
    standards: 'RI.7.1 · OR World History (trade & geography)',
    hook: 'Long before "global," a web of routes stretched 4,000+ miles across deserts and mountains connecting China to the Mediterranean. Silk went west, ideas and inventions went every direction — and almost nobody traveled the whole thing. Stuff did.',
    learnIt: [
      { type: 'Read', desc: 'Britannica Kids — The Silk Road', meta: '~9 min', link: brit('Silk Road trade') },
      { type: 'Watch', desc: 'Crash Course World History — the Silk Road', meta: '~11 min', link: yt('Crash Course World History Silk Road') },
    ],
    showIt: [
      { type: 'Make a diagram', prompt: 'Draw a map of the Silk Road and label what traveled each way — goods, ideas, inventions, and (spoiler for next lesson) diseases.' },
      { type: 'Make a Canva', prompt: canvaOpt('explaining what the Silk Road was and why it mattered for the whole world') },
      { type: 'Write it', prompt: 'Using evidence from the text (RI.7.1), explain how the Silk Road changed the places it connected.' },
    ],
  },

  'Ideas That Spread': {
    title: 'Ideas & Religions That Spread',
    unit: 'Humanities 4 — A Connected World',
    standards: 'RI.7.3 · OR World History (belief systems)',
    hook: 'Trade routes didn\'t just move silk and spices — they moved beliefs. The world\'s major religions and biggest ideas spread along the same roads as the merchants, reshaping whole continents.',
    learnIt: [
      { type: 'Read', desc: 'Britannica Kids — World religions overview', meta: '~10 min', link: brit('world religions') },
      { type: 'Watch', desc: 'Crash Course — how belief systems spread', meta: '~11 min', link: yt('Crash Course World History belief systems religions') },
    ],
    showIt: [
      { type: 'Make a diagram', prompt: 'Make a comparison chart of 3 major world religions: where each began, one core idea, and how it spread.' },
      { type: 'Make a Canva', prompt: canvaOpt('showing how ideas and religions traveled along trade routes') },
      { type: 'Write it', prompt: 'Explain how the movement of people along trade routes caused ideas to spread (RI.7.3 cause & effect).' },
    ],
  },

  'The Black Death': {
    title: 'The Black Death',
    unit: 'Humanities 4 — A Connected World',
    standards: 'RI.7.3 · OR World History · (overlaps Science)',
    hook: 'A bacterium living on fleas on rats rode the trade routes into Europe and killed something like a THIRD to a HALF of everyone in a few years. It also cracked the whole social order open. This is history and biology holding hands.',
    learnIt: [
      { type: 'Read', desc: 'Britannica Kids — The Black Death', meta: '~9 min', link: brit('Black Death plague') },
      { type: 'Watch', desc: 'OverSimplified / Crash Course — the Black Death', meta: '~12 min', link: yt('OverSimplified the Black Death') },
    ],
    showIt: [
      { type: 'Make a diagram', prompt: 'Diagram HOW the plague spread (rats → fleas → people → trade routes → cities). This is a science + history crossover — show the chain.' },
      { type: 'Write cause & effect', prompt: 'Explain two ways the Black Death CHANGED the world after it passed (workers, religion, cities) using evidence (RI.7.3).' },
      { type: 'Make a Canva', prompt: canvaOpt('on the Black Death: what caused it, how it spread, and how it changed the world') },
    ],
  },

  'Research & Report': {
    title: 'Research & Report — What Traveled the World',
    unit: 'Humanities 4 — A Connected World',
    standards: 'W.7.7 (research) · W.7.2 · OR World History',
    hook: 'Pick one thing that traveled the trade routes — a spice, paper, gunpowder, a religion, a disease, a number system — and follow it. Where did it start? Where did it go? What did it change?',
    learnIt: [
      { type: 'Choose', desc: 'Pick your traveler (a good, idea, invention, or disease)', meta: 'paper, gunpowder, spices, numerals…', link: brit('inventions history') },
      { type: 'Research', desc: 'Find 2–3 solid sources and take notes', meta: '~15 min', link: commonlit('trade inventions history') },
    ],
    showIt: [
      { type: 'Write a report', prompt: 'Write a short research report (W.7.7): what it is, where it came from, how it spread, and what it changed. Name your sources.' },
      { type: 'Make an infographic', prompt: 'Turn your research into a diagram/infographic that tells the story visually.' },
      { type: 'Make a Canva', prompt: canvaOpt('presenting your research on one thing that traveled the world') },
    ],
  },

  /* ---------------- Humanities 5 — Turning Points (choice novel) ---------------- */

  'Pick Your Novel': {
    title: 'Pick Your Novel',
    unit: 'Humanities 5 — Turning Points',
    standards: 'RL.7.1 · reading a full novel',
    hook: 'History hits different when you live it through one person. For this unit you\'ll read a whole novel set in a real time and place — YOUR pick from the list. (This is separate from your daily 30-minute reading, which is still whatever you want.)',
    learnIt: [
      { type: 'Choose your novel', desc: 'Pick ONE (ask a parent to grab it from the library):', meta: 'The Boy Who Harnessed the Wind · Refugee (Alan Gratz) · A Long Walk to Water · The Bronze Bow · Chains', link: 'https://www.commonlit.org/en/booktracks' },
      { type: 'Learn', desc: 'How to read a novel actively (track characters, note questions)', meta: '~6 min', link: commonlit('active reading strategies') },
    ],
    showIt: [
      { type: 'Make a reading plan', prompt: 'Write which novel you picked and why, and set a simple plan (about how many pages per reading day to finish in ~3 weeks).' },
      { type: 'Start a character map', prompt: 'Start a diagram of the main characters and how they\'re connected — you\'ll add to it as you read.' },
    ],
  },

  'Novel — Characters & Conflict': {
    title: 'Your Novel — Characters & Conflict',
    unit: 'Humanities 5 — Turning Points',
    standards: 'RL.7.3 (story elements)',
    hook: 'Every good story runs on a problem. Who\'s your main character, what do they want, and what\'s standing in the way? Keep reading — and watch how the character changes.',
    learnIt: [
      { type: 'Read your novel', desc: 'Keep to your reading plan; jot notes as you go', meta: 'ongoing', link: '#' },
    ],
    showIt: [
      { type: 'Make a character map', prompt: 'Build/expand a diagram of the characters, their relationships, and the main conflict (RL.7.3).' },
      { type: 'Keep a journal', prompt: 'Write 2–3 short journal entries reacting to what\'s happening and predicting what\'s next.' },
      { type: 'Make a Canva', prompt: canvaOpt('introducing your novel\'s main character and the problem they face') },
    ],
  },

  'Novel & Its World': {
    title: 'Your Novel & Its Real World',
    unit: 'Humanities 5 — Turning Points',
    standards: 'RL.7.9 · RI.7.1 · OR World History',
    hook: 'Your novel is set in a real time and place. How much of it actually happened? Time to fact-check your own book — where does the fiction stop and the history start?',
    learnIt: [
      { type: 'Research the setting', desc: 'Look up the real history behind your novel', meta: '~12 min', link: brit('history') },
    ],
    showIt: [
      { type: 'Make a diagram', prompt: 'Make a "fiction vs. fact" chart: list things from your novel and mark which were real historical events/places and which the author invented.' },
      { type: 'Write it', prompt: 'Write a paragraph on how the real history shaped your novel\'s story (RL.7.9 / RI.7.1).' },
      { type: 'Make a Canva', prompt: canvaOpt('showing the real history behind your novel') },
    ],
  },

  'Book Talk': {
    title: 'Book Talk',
    unit: 'Humanities 5 — Turning Points',
    standards: 'SL.7.4 (present) · RL.7.2 (theme)',
    hook: 'Finished the book? Now sell it — or roast it. A book talk is a short, punchy pitch: what it\'s about, the big theme, and whether someone should read it.',
    learnIt: [
      { type: 'Plan', desc: 'Decide your take: what\'s the theme, and would you recommend it?', meta: '~8 min', link: '#' },
    ],
    showIt: [
      { type: 'Make a Canva', prompt: canvaOpt('as a book talk: title, one-line hook, the theme, and your honest recommendation') },
      { type: 'Record it', prompt: 'Record a 2–3 minute book talk (video or voice) and present it to a parent (SL.7.4).' },
      { type: 'Build a model', prompt: 'Build a model or diorama of a key scene and use it to explain the book\'s big moment.' },
    ],
  },

  /* ---------------- Humanities 6 — Your Voice ---------------- */

  'How Arguments Work': {
    title: 'How Arguments Actually Work',
    unit: 'Humanities 6 — Your Voice',
    standards: 'RI.7.8 (evaluate claims) · SL.7.3',
    hook: 'A good argument isn\'t the loudest one — it\'s a CLAIM backed by EVIDENCE and REASONING. Learn the parts (and the sneaky tricks people use instead) and you\'ll never be fooled by a weak argument again.',
    learnIt: [
      { type: 'Watch', desc: 'TED-Ed — spotting logical fallacies', meta: '~5 min', link: yt('TED-Ed logical fallacies') },
      { type: 'Read', desc: 'CommonLit — paired opinion texts (argument & evidence)', meta: '~12 min · with questions', link: commonlit('argument opinion paired texts') },
    ],
    quiz: [
      { q: 'The three parts of a solid argument are…', options: ['Claim, evidence, reasoning', 'Volume, anger, repetition', 'Intro, body, snack', 'Who, what, when'], answer: 0 },
      { q: 'Attacking the person instead of their point is which mistake?', options: ['A logical fallacy (ad hominem)', 'Good evidence', 'A strong claim', 'A citation'], answer: 0 },
      { q: 'The best support for a claim is…', options: ['Relevant evidence and reasoning', 'Saying it louder', 'Everyone agrees', 'A cool font'], answer: 0 },
    ],
    short: 'Find a claim in one of the texts and judge it: is the evidence strong or weak? Why (RI.7.8)?',
  },

  'Pick a Fight': {
    title: 'Pick a Fight (Worth Having)',
    unit: 'Humanities 6 — Your Voice',
    standards: 'W.7.1 (argument writing) · W.7.7',
    hook: 'Choose something you\'d actually argue about — should ebikes be allowed on trails? Should school start later? Should zoos exist? — and build the strongest case you can. Real topic, real stakes.',
    learnIt: [
      { type: 'Choose + research', desc: 'Pick your issue and find 2–3 pieces of real evidence', meta: '~15 min', link: commonlit('debate issues argument') },
      { type: 'Learn', desc: 'How to build a claim, evidence, and a counterargument', meta: '~6 min', link: brit('persuasive writing argument') },
    ],
    showIt: [
      { type: 'Write an argument', prompt: 'Write an argument essay (W.7.1): clear claim, at least two pieces of evidence, reasoning, AND a counterargument you answer.' },
      { type: 'Make a diagram', prompt: 'Map your argument first: claim in the middle, evidence branching out, and the other side\'s best point with your response.' },
    ],
  },

  'Being a Citizen': {
    title: 'Being a Citizen — How Decisions Get Made',
    unit: 'Humanities 6 — Your Voice',
    standards: 'RI.7.2 · OR Civics & Economics',
    hook: 'Who actually decides the rules you live by — from your town all the way up? Civics is the cheat code for understanding how power and money really move, and how a regular person can push on it.',
    learnIt: [
      { type: 'Watch', desc: 'Crash Course — how government/decisions work (short)', meta: '~10 min', link: yt('Crash Course government how a bill becomes law') },
      { type: 'Read', desc: 'Britannica Kids — Citizenship & government', meta: '~9 min', link: brit('citizenship government') },
    ],
    showIt: [
      { type: 'Make a diagram', prompt: 'Diagram how a decision or law actually gets made (local, state, or national) — from idea to rule.' },
      { type: 'Make a Canva', prompt: canvaOpt('explaining how an ordinary person can influence a decision that affects them') },
      { type: 'Write it', prompt: 'Explain the central idea of what you learned about how civic decisions get made (RI.7.2).' },
    ],
  },

  'Make Your Case': {
    title: 'Make Your Case',
    unit: 'Humanities 6 — Your Voice',
    standards: 'SL.7.4 (present) · W.7.1',
    hook: 'You built an argument on paper — now deliver it. A presentation forces you to be clear, confident, and ready for pushback. This is the whole year of reading and thinking, out loud.',
    learnIt: [
      { type: 'Prep', desc: 'Turn your argument essay into talking points', meta: '~10 min', link: '#' },
    ],
    showIt: [
      { type: 'Make a Canva', prompt: canvaOpt('presenting your argument: your claim, your best evidence, and your answer to the other side') },
      { type: 'Present it', prompt: 'Present your case to a parent (or on camera), then take one challenge question and answer it (SL.7.4).' },
    ],
  },

};

if (typeof module !== 'undefined') module.exports = { LESSONS };
