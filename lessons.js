/**
 * lessons.js — 7th grade science lesson content.
 *
 * One object, keyed by a phrase that appears in the To-Do item name.
 * lesson.html matches the record's "Item name" against these keys
 * (first substring match wins), so item names look like:
 *   "Atoms & Molecules — Learn It"  /  "Atoms & Molecules — Show It"
 *
 * Video links use YouTube title-search URLs on purpose: they always
 * resolve to the right episode even if a channel re-uploads. Khan
 * links point at stable topic pages.
 */

const yt = (q) => `https://www.youtube.com/results?search_query=${encodeURIComponent(q)}`;

const CHECKS_DEFAULT = (topic) => ([
  { type: 'Summary', prompt: `Write 2–3 sentences in your own words explaining ${topic}. No copying — say it how you'd say it to a friend.` },
  { type: 'Teach it back', prompt: `Explain ${topic} out loud to a parent (or the dog, or the camera). If you can teach it, you know it.` },
  { type: 'Make something', prompt: `Draw, diagram, meme, or build something that shows ${topic}. Label the important parts.` },
]);

const LESSONS = {

  /* ===================== UNIT 1 — STRUCTURE & PROPERTIES OF MATTER ===================== */

  'Atoms & Molecules': {
    title: 'Atoms & Molecules — The Particle Model',
    unit: 'Unit 1 — Structure & Properties of Matter',
    standards: 'MS-PS1-1',
    hook: 'If you blew an atom up to the size of a football stadium, the nucleus would be a marble on the 50-yard line and the electrons would be dust in the nosebleeds. Matter is almost entirely empty space — including you. <a class="hook-link" href="https://en.wikipedia.org/wiki/Atom" target="_blank" rel="noopener">🔗 Atom — Wikipedia</a>',
    learnIt: [
      { type: 'Watch', desc: 'Crash Course Chemistry #1 — The Nucleus', meta: '~11 min · what atoms actually are', link: yt('Crash Course Chemistry 1 The Nucleus') },
      { type: 'Watch', desc: 'SciShow — What Is An Atom?', meta: '~5 min · quick and clear', link: yt('SciShow what is an atom') },
      { type: 'Explore', desc: 'Khan Academy — Atoms, elements & the periodic table', meta: '~15 min · read + practice', link: 'https://www.khanacademy.org/science/ms-chemistry' },
    ],
    checks: CHECKS_DEFAULT('the difference between an atom, a molecule, and a compound (with a real example of each)'),
  },

  'States of Matter': {
    title: 'States of Matter & Particle Motion',
    unit: 'Unit 1 — Structure & Properties of Matter',
    standards: 'MS-PS1-4',
    hook: 'The same water molecules can be ice, a puddle, or steam — nothing was added or removed. All that changed is how fast the particles are jiggling. Temperature is really just a measure of that jiggle. <a class="hook-link" href="https://en.wikipedia.org/wiki/State_of_matter" target="_blank" rel="noopener">🔗 States of Matter — Wikipedia</a>',
    learnIt: [
      { type: 'Watch', desc: 'Crash Course Kids / Crash Course — States of Matter', meta: '~5–10 min', link: yt('crash course states of matter particles') },
      { type: 'Explore', desc: 'PhET — States of Matter simulation', meta: '~10 min · heat the particles and watch', link: 'https://phet.colorado.edu/en/simulations/states-of-matter-basics' },
      { type: 'Read', desc: 'Khan Academy — States of matter & particle motion', meta: '~10 min', link: 'https://www.khanacademy.org/science/ms-chemistry' },
    ],
    checks: [
      { type: 'Draw it', prompt: 'Draw the particles in a solid, a liquid, and a gas. Show the spacing AND the motion (use arrows). One sentence each on what the particles are doing.' },
      { type: 'Questions', questions: [
        '1. You heat a solid until it melts, then boils. What is happening to the particles at each step?',
        '2. Why does a gas fill its whole container but a solid keeps its shape?',
      ] },
      { type: 'Summary', prompt: 'In your own words: what is temperature, really, in terms of particles?' },
    ],
  },

  'Thermal Energy & Changes of State': {
    title: 'Thermal Energy & Changes of State',
    unit: 'Unit 1 — Structure & Properties of Matter',
    standards: 'MS-PS1-4',
    hook: 'Sweat cools you down because the fastest-moving water molecules leave first, taking their energy with them — the ones left behind are literally colder. Your body uses physics to run its own AC. <a class="hook-link" href="https://en.wikipedia.org/wiki/Evaporative_cooler" target="_blank" rel="noopener">🔗 Evaporative cooling — Wikipedia</a>',
    learnIt: [
      { type: 'Watch', desc: 'SciShow — Why does sweating cool you down?', meta: '~5 min', link: yt('SciShow why does sweat cool you down') },
      { type: 'Explore', desc: 'Khan Academy — Thermal energy & temperature', meta: '~12 min', link: 'https://www.khanacademy.org/science/ms-physics' },
    ],
    checks: CHECKS_DEFAULT('how adding or removing thermal energy changes a substance between solid, liquid, and gas'),
  },

  'Natural & Synthetic Materials': {
    title: 'Natural vs. Synthetic Materials',
    unit: 'Unit 1 — Structure & Properties of Matter',
    standards: 'MS-PS1-3',
    hook: 'The lithium in an ebike battery starts as rock in the ground. Getting from a dusty mineral to a rechargeable cell is a chain of chemistry — and every synthetic material you own came from a natural resource somewhere. <a class="hook-link" href="https://en.wikipedia.org/wiki/Lithium" target="_blank" rel="noopener">🔗 Lithium — Wikipedia</a>',
    learnIt: [
      { type: 'Watch', desc: 'SciShow — How lithium-ion batteries work / are made', meta: '~6 min', link: yt('SciShow how lithium ion batteries work') },
      { type: 'Read', desc: 'Khan Academy — Natural resources & synthetic materials', meta: '~10 min', link: 'https://www.khanacademy.org/science/ms-chemistry' },
    ],
    checks: [
      { type: 'Trace it', prompt: 'Pick one synthetic material you use every day (plastic, a battery, nylon). Trace it back: what natural resource did it start as? What had to happen to it?' },
      { type: 'Summary', prompt: 'Explain the difference between a natural and a synthetic material, with an example of each.' },
      { type: 'Make something', prompt: 'Make a simple flow diagram: natural resource → processing → synthetic product. Use the battery if you want.' },
    ],
  },

  /* ===================== UNIT 2 — CHEMICAL REACTIONS ===================== */

  'Signs of a Chemical Reaction': {
    title: 'Signs of a Chemical Reaction',
    unit: 'Unit 2 — Chemical Reactions',
    standards: 'MS-PS1-2',
    hook: 'A firework is a chemical reaction with a schedule. Color, light, heat, sound, gas — a good explosion hits almost every sign that a chemical change just happened. Learn the signs and you can spot chemistry everywhere. <a class="hook-link" href="https://en.wikipedia.org/wiki/Chemical_reaction" target="_blank" rel="noopener">🔗 Chemical reaction — Wikipedia</a>',
    learnIt: [
      { type: 'Watch', desc: 'Crash Course Chemistry — Chemical Reactions', meta: '~11 min', link: yt('Crash Course Chemistry chemical reactions and equations') },
      { type: 'Explore', desc: 'Khan Academy — Chemical reactions (MS)', meta: '~12 min · read + practice', link: 'https://www.khanacademy.org/science/ms-chemistry' },
    ],
    checks: [
      { type: 'Questions', questions: [
        '1. List 4 signs that a chemical reaction (not just a physical change) has happened.',
        '2. Melting ice vs. burning toast — which is a chemical change? How do you know?',
      ] },
      { type: 'Summary', prompt: 'In your own words, how can you tell a chemical change from a physical change?' },
      { type: 'Hunt', prompt: 'Find 3 chemical reactions happening in your own house/kitchen. Write what sign told you.' },
    ],
  },

  'Conservation of Mass': {
    title: 'Conservation of Mass',
    unit: 'Unit 2 — Chemical Reactions',
    standards: 'MS-PS1-5',
    hook: 'Burn a log and it seems to mostly vanish into ash — but weigh the gases that floated away and the mass is exactly the same as before. Atoms never disappear. They just move and rearrange. <a class="hook-link" href="https://en.wikipedia.org/wiki/Conservation_of_mass" target="_blank" rel="noopener">🔗 Conservation of mass — Wikipedia</a>',
    learnIt: [
      { type: 'Watch', desc: 'SciShow / Crash Course — Conservation of mass', meta: '~6 min', link: yt('conservation of mass chemical reaction explained') },
      { type: 'Do', desc: 'Home lab: weigh baking soda + vinegar in a sealed zip bag', meta: '~15 min · mass before = mass after', link: '#' },
    ],
    checks: [
      { type: 'Questions', questions: [
        '1. You fizz baking soda + vinegar in an OPEN cup and the mass drops. Where did it go?',
        '2. In a SEALED bag the mass stays the same. Explain why, using atoms.',
      ] },
      { type: 'Summary', prompt: 'State the law of conservation of mass and explain why it must be true if atoms are just rearranging.' },
    ],
  },

  'Endothermic & Exothermic': {
    title: 'Endothermic & Exothermic — Designing with Heat',
    unit: 'Unit 2 — Chemical Reactions',
    standards: 'MS-PS1-6',
    hook: 'A hand warmer and an instant cold pack are the same idea run in opposite directions: one reaction dumps heat out, the other soaks it up. Engineers pick the reaction to get the temperature they want. <a class="hook-link" href="https://en.wikipedia.org/wiki/Endothermic_process" target="_blank" rel="noopener">🔗 Endothermic vs. exothermic — Wikipedia</a>',
    learnIt: [
      { type: 'Watch', desc: 'SciShow — How do hand warmers work?', meta: '~5 min', link: yt('SciShow how do hand warmers work') },
      { type: 'Read', desc: 'Khan Academy — Endothermic & exothermic reactions', meta: '~10 min', link: 'https://www.khanacademy.org/science/ms-chemistry' },
    ],
    checks: [
      { type: 'Design', prompt: 'Design (on paper) a device that gets warm or cold using a chemical reaction. What reaction? What is it FOR? How would you make it hotter/colder?' },
      { type: 'Summary', prompt: 'Explain the difference between endothermic and exothermic, with a real example of each.' },
    ],
  },

  'Batteries — Chemistry to Electricity': {
    title: 'Batteries — Chemistry You Can Ride',
    unit: 'Unit 2 — Chemical Reactions',
    standards: 'MS-PS1-2',
    hook: 'A battery is a chemical reaction held on a leash. The reaction WANTS to happen, but the only path for it is through your circuit — so the electrons do work on the way, spinning a motor or lighting a screen. Your ebike is chemistry with wheels. <a class="hook-link" href="https://en.wikipedia.org/wiki/Lithium-ion_battery" target="_blank" rel="noopener">🔗 Lithium-ion battery — Wikipedia</a>',
    learnIt: [
      { type: 'Watch', desc: 'Crash Course / SciShow — How batteries work', meta: '~8 min', link: yt('how batteries work chemistry electrons') },
      { type: 'Do', desc: 'Home lab: build a lemon or potato battery, light an LED', meta: '~20 min', link: '#' },
    ],
    checks: [
      { type: 'Explain', prompt: 'Explain how a battery turns a chemical reaction into electricity. Use the words electrons and circuit.' },
      { type: 'Connect', prompt: 'How is an ebike battery different from a single AA? (Think: voltage, rechargeable, many cells.) Why does that matter for range?' },
      { type: 'Make something', prompt: 'Diagram your lemon/potato battery and label where the reaction happens and where the electrons flow.' },
    ],
  },

  /* ===================== UNIT 3 — EARTH'S SYSTEMS ===================== */

  'The Rock Cycle': {
    title: 'The Rock Cycle',
    unit: "Unit 3 — Earth's Systems",
    standards: 'MS-ESS2-1',
    hook: 'The rock in your driveway might have been a volcano, then a beach, then a mountain, then mud, over hundreds of millions of years — and it isn\'t done. Earth has no landfill. It recycles everything, just very slowly. <a class="hook-link" href="https://en.wikipedia.org/wiki/Rock_cycle" target="_blank" rel="noopener">🔗 Rock cycle — Wikipedia</a>',
    learnIt: [
      { type: 'Watch', desc: 'Crash Course — The rock cycle / types of rock', meta: '~10 min', link: yt('crash course rock cycle igneous sedimentary metamorphic') },
      { type: 'Explore', desc: 'Khan Academy — Rock cycle', meta: '~10 min', link: 'https://www.khanacademy.org/science/ms-earth-and-space-science' },
    ],
    checks: [
      { type: 'Draw it', prompt: 'Draw the rock cycle as a loop (not a line). Start with igneous and get all the way back to igneous. Label the process on each arrow (heat, pressure, weathering, melting…).' },
      { type: 'Summary', prompt: 'Explain how a sedimentary rock could become an igneous rock. What has to happen?' },
    ],
  },

  'The Water Cycle & Earth': {
    title: "The Water Cycle & Earth's Energy",
    unit: "Unit 3 — Earth's Systems",
    standards: 'MS-ESS2-1',
    hook: 'The water in your glass has almost certainly been inside a dinosaur, a cloud, and the ocean — probably more than once. Earth has run the same water through the same cycle for billions of years, powered by the sun. <a class="hook-link" href="https://en.wikipedia.org/wiki/Water_cycle" target="_blank" rel="noopener">🔗 Water cycle — Wikipedia</a>',
    learnIt: [
      { type: 'Watch', desc: 'Crash Course — The hydrologic (water) cycle', meta: '~10 min', link: yt('crash course water cycle hydrologic') },
      { type: 'Read', desc: 'Khan Academy — Water cycle & Earth systems', meta: '~10 min', link: 'https://www.khanacademy.org/science/ms-earth-and-space-science' },
    ],
    checks: CHECKS_DEFAULT('how the sun powers the water cycle, and where the energy comes from at each step (evaporation, condensation, precipitation)'),
  },

  'Uneven Distribution of Resources': {
    title: 'Why Resources Aren\'t Spread Evenly',
    unit: "Unit 3 — Earth's Systems",
    standards: 'MS-ESS3-1',
    hook: 'Most of the world\'s lithium sits under a few salt flats in South America. Most cobalt is in one country. The reason ebikes, phones, and EVs have supply drama is 100-million-year-old geology deciding where the good stuff ended up. <a class="hook-link" href="https://en.wikipedia.org/wiki/Lithium#Occurrence" target="_blank" rel="noopener">🔗 Where lithium comes from — Wikipedia</a>',
    learnIt: [
      { type: 'Watch', desc: 'SciShow — Where do we get lithium / rare earth metals?', meta: '~7 min', link: yt('SciShow where does lithium come from mining') },
      { type: 'Read', desc: 'Khan Academy — Distribution of natural resources', meta: '~10 min', link: 'https://www.khanacademy.org/science/ms-earth-and-space-science' },
    ],
    checks: [
      { type: 'Explain', prompt: 'Explain WHY a resource like oil, lithium, or groundwater ends up concentrated in certain places instead of spread out evenly. (Hint: it\'s about past geologic processes.)' },
      { type: 'Connect', prompt: 'Pick one resource an ebike needs (lithium, copper, aluminum). Where does most of it come from, and why there?' },
    ],
  },

  /* ===================== UNIT 4 — HISTORY OF EARTH ===================== */

  'Geologic Time': {
    title: 'Geologic Time & Deep Time',
    unit: 'Unit 4 — History of Earth',
    standards: 'MS-ESS2-2',
    hook: 'If all of Earth\'s history were one 24-hour day, humans show up in the last 2 seconds before midnight. Dinosaurs get a solid hour. Almost everything you\'ve ever heard of happened in the final blink. <a class="hook-link" href="https://en.wikipedia.org/wiki/Geologic_time_scale" target="_blank" rel="noopener">🔗 Geologic time scale — Wikipedia</a>',
    learnIt: [
      { type: 'Watch', desc: 'Crash Course — Deep time / geologic time', meta: '~11 min', link: yt('crash course geologic time deep time') },
      { type: 'Do', desc: 'Build a scale timeline of Earth (paper roll or driveway)', meta: '~20 min', link: '#' },
    ],
    checks: [
      { type: 'Build + reflect', prompt: 'After making your scale timeline: what surprised you most about WHEN things happened? Write 3 sentences.' },
      { type: 'Summary', prompt: 'Explain what "deep time" means and why it\'s so hard for humans to picture.' },
    ],
  },

  'Reading Rock Strata': {
    title: 'Rock Strata & Fossils — Earth\'s Record Book',
    unit: 'Unit 4 — History of Earth',
    standards: 'MS-ESS2-3',
    hook: 'The Grand Canyon is a mile-deep stack of pages, oldest at the bottom, and you can read almost 2 billion years by climbing down it. Every layer is a chapter of what Earth was doing at the time. <a class="hook-link" href="https://en.wikipedia.org/wiki/Law_of_superposition" target="_blank" rel="noopener">🔗 Law of superposition — Wikipedia</a>',
    learnIt: [
      { type: 'Watch', desc: 'SciShow / Crash Course — Reading rock layers & fossils', meta: '~8 min', link: yt('how to read rock layers strata fossils superposition') },
      { type: 'Read', desc: 'Khan Academy — Rock strata & the fossil record', meta: '~10 min', link: 'https://www.khanacademy.org/science/ms-earth-and-space-science' },
    ],
    checks: [
      { type: 'Questions', questions: [
        '1. In undisturbed layers, which is older — top or bottom? What is that rule called?',
        '2. You find the same fossil in rock layers on two different continents. What might that tell you?',
      ] },
      { type: 'Draw it', prompt: 'Draw a set of rock layers with 2–3 fossils and tell the "story" of that place from oldest to youngest.' },
    ],
  },

  'Plate Tectonics': {
    title: 'Plate Tectonics — The Evidence',
    unit: 'Unit 4 — History of Earth',
    standards: 'MS-ESS2-3',
    hook: 'South America and Africa fit together like torn paper because they were once the same landmass. Matching coastlines, matching fossils, matching rock — the continents are still moving right now, about as fast as your fingernails grow. <a class="hook-link" href="https://en.wikipedia.org/wiki/Plate_tectonics" target="_blank" rel="noopener">🔗 Plate tectonics — Wikipedia</a>',
    learnIt: [
      { type: 'Watch', desc: 'Crash Course — Plate tectonics', meta: '~11 min', link: yt('crash course plate tectonics evidence') },
      { type: 'Explore', desc: 'Khan Academy — Plate tectonics evidence', meta: '~12 min', link: 'https://www.khanacademy.org/science/ms-earth-and-space-science' },
    ],
    checks: [
      { type: 'Evidence list', prompt: 'List 3 different kinds of evidence that the continents move. For each, explain what it shows.' },
      { type: 'Summary', prompt: 'Explain in your own words what drives the plates to move (hint: heat inside the Earth).' },
    ],
  },

  'Cascadia': {
    title: 'Cascadia — The Fault Under the Northwest',
    unit: 'Unit 4 — History of Earth',
    standards: 'MS-ESS2-3',
    hook: 'Off the Oregon coast, one tectonic plate is sliding under another. Roughly every few hundred years it slips all at once — the last time was January 1700, and we know the date because it sent a tsunami all the way to Japan. This is your backyard. <a class="hook-link" href="https://en.wikipedia.org/wiki/Cascadia_subduction_zone" target="_blank" rel="noopener">🔗 Cascadia Subduction Zone — Wikipedia</a>',
    learnIt: [
      { type: 'Watch', desc: 'The 1700 Cascadia earthquake & tsunami (documentary clip)', meta: '~10 min', link: yt('Cascadia subduction zone 1700 earthquake tsunami') },
      { type: 'Read', desc: 'What a Cascadia quake means for Oregon', meta: '~10 min', link: 'https://en.wikipedia.org/wiki/Cascadia_subduction_zone' },
    ],
    checks: [
      { type: 'Explain', prompt: 'Explain what a subduction zone is and why the Cascadia one produces big earthquakes.' },
      { type: 'Connect', prompt: 'How did scientists figure out the exact date (Jan 1700) of an earthquake with no one recording it here? (Look up "orphan tsunami" + ghost forests.)' },
    ],
  },

  /* ===================== UNIT 5 — HUMAN IMPACTS & NATURAL HAZARDS ===================== */

  'Forecasting Natural Hazards': {
    title: 'Forecasting Natural Hazards',
    unit: 'Unit 5 — Human Impacts & Natural Hazards',
    standards: 'MS-ESS3-2',
    hook: 'Nobody can tell you the day the next big earthquake or wildfire hits. But we CAN map where they\'re likely, how bad, and how often — and that forecast is the difference between a disaster and a drill. Prediction and preparation are different jobs. <a class="hook-link" href="https://en.wikipedia.org/wiki/Natural_hazard" target="_blank" rel="noopener">🔗 Natural hazards — Wikipedia</a>',
    learnIt: [
      { type: 'Watch', desc: 'SciShow — Can we predict earthquakes / wildfires?', meta: '~7 min', link: yt('SciShow can we predict earthquakes') },
      { type: 'Read', desc: 'Khan Academy — Natural hazards & forecasting', meta: '~10 min', link: 'https://www.khanacademy.org/science/ms-earth-and-space-science' },
    ],
    checks: [
      { type: 'Explain', prompt: 'Explain the difference between PREDICTING the exact time of a hazard and FORECASTING its risk. Why can we do one but not the other?' },
      { type: 'Map it', prompt: 'Name 2 natural hazards that could hit the Rogue Valley. For each, how could people forecast and prepare?' },
    ],
  },

  'Earthquake Engineering': {
    title: 'Designing for the Shake',
    unit: 'Unit 5 — Human Impacts & Natural Hazards',
    standards: 'MS-ESS3-2',
    hook: 'You can\'t stop an earthquake, but you can build a bridge that dances with it instead of snapping. Engineers in earthquake country design buildings to bend, slide, and absorb — turning a physics problem into a survival tool. <a class="hook-link" href="https://en.wikipedia.org/wiki/Earthquake_engineering" target="_blank" rel="noopener">🔗 Earthquake engineering — Wikipedia</a>',
    learnIt: [
      { type: 'Watch', desc: 'How engineers make buildings earthquake-proof', meta: '~8 min', link: yt('how do earthquake proof buildings work engineering') },
      { type: 'Do', desc: 'Build + shake-test a tower (spaghetti/marshmallow or LEGO)', meta: '~30 min', link: '#' },
    ],
    checks: [
      { type: 'Design + test', prompt: 'Build a tower and shake-test it. What failed first? Redesign it once. What did you change and did it help?' },
      { type: 'Summary', prompt: 'List 3 design tricks engineers use to help buildings survive earthquakes.' },
    ],
  },

  'Human Impact & Solutions': {
    title: 'Human Impact & Designing Solutions',
    unit: 'Unit 5 — Human Impacts & Natural Hazards',
    standards: 'MS-ESS3-2',
    hook: 'An ebike instead of a car is a tiny climate decision — but multiply it by millions of riders and it\'s a real dent in emissions. Human impact isn\'t only damage; it\'s also every clever fix people design. <a class="hook-link" href="https://en.wikipedia.org/wiki/Environmental_impact_of_transport" target="_blank" rel="noopener">🔗 Transport & the environment — Wikipedia</a>',
    learnIt: [
      { type: 'Watch', desc: 'Crash Course — Humans & the environment', meta: '~11 min', link: yt('crash course humans and the environment') },
      { type: 'Read', desc: 'Khan Academy — Human impact on the environment', meta: '~10 min', link: 'https://www.khanacademy.org/science/ms-earth-and-space-science' },
    ],
    checks: [
      { type: 'Argue it', prompt: 'Pick one way humans reduce their impact (ebikes, recycling, solar, restoration). Make the case for it with evidence — and name one downside honestly.' },
      { type: 'Summary', prompt: 'Explain one way humans harm an ecosystem AND one designed solution that helps.' },
    ],
  },

  /* ===================== UNIT 6 — ENERGY, ELECTRICITY & THE E-BIKE ===================== */

  'Kinetic & Potential Energy': {
    title: 'Kinetic & Potential Energy',
    unit: 'Unit 6 — Energy, Electricity & the E-Bike',
    standards: 'MS-PS3-1',
    hook: 'At the top of a hill your ebike is loaded like a slingshot — pure stored (potential) energy. Let go and it converts to motion (kinetic). The heavier and faster you are, the more energy is in play, which is exactly why speed feels so different at the bottom. <a class="hook-link" href="https://en.wikipedia.org/wiki/Kinetic_energy" target="_blank" rel="noopener">🔗 Kinetic energy — Wikipedia</a>',
    learnIt: [
      { type: 'Watch', desc: 'Crash Course — Kinetic & potential energy', meta: '~10 min', link: yt('crash course kinetic and potential energy') },
      { type: 'Explore', desc: 'PhET — Energy Skate Park simulation', meta: '~12 min · watch energy trade back and forth', link: 'https://phet.colorado.edu/en/simulations/energy-skate-park-basics' },
    ],
    checks: [
      { type: 'Questions', questions: [
        '1. Where on a hill does your bike have the most potential energy? The most kinetic?',
        '2. Two riders coast down the same hill; one weighs more. Who has more kinetic energy at the bottom? Why?',
      ] },
      { type: 'Summary', prompt: 'Explain the difference between kinetic and potential energy using your bike as the example.' },
    ],
  },

  'Energy Transformations': {
    title: 'Energy Transformations',
    unit: 'Unit 6 — Energy, Electricity & the E-Bike',
    standards: 'MS-PS3-5',
    hook: 'Energy is never used up — it just changes clothes. On your ebike: chemical (battery) → electrical (wires) → kinetic (motion) → and always some heat. Follow the energy and you\'ll find it every time, even the part that "leaks" as warmth. <a class="hook-link" href="https://en.wikipedia.org/wiki/Energy_transformation" target="_blank" rel="noopener">🔗 Energy transformation — Wikipedia</a>',
    learnIt: [
      { type: 'Watch', desc: 'Crash Course — Conservation of energy / transformations', meta: '~10 min', link: yt('crash course conservation of energy transformations') },
      { type: 'Read', desc: 'Khan Academy — Energy transfer & transformation', meta: '~12 min', link: 'https://www.khanacademy.org/science/ms-physics' },
    ],
    checks: [
      { type: 'Trace it', prompt: 'Trace the energy on an ebike ride from battery to motion, naming every form it takes — including where energy is "lost" as heat.' },
      { type: 'Explain', prompt: 'A friend says the motor "uses up" the energy. Correct them using the word transformed.' },
    ],
  },

  'Electricity & Circuits': {
    title: 'Electricity & Circuits',
    unit: 'Unit 6 — Energy, Electricity & the E-Bike',
    standards: 'MS-PS3-2',
    hook: 'Electricity is just electrons taking a lap. Give them a complete loop and a push (voltage) and they\'ll do work — spin a motor, make light, make heat. Break the loop anywhere and everything stops. That\'s a switch. <a class="hook-link" href="https://en.wikipedia.org/wiki/Electrical_network" target="_blank" rel="noopener">🔗 Circuits — Wikipedia</a>',
    learnIt: [
      { type: 'Watch', desc: 'Crash Course — Electric circuits', meta: '~10 min', link: yt('crash course electric circuits voltage current') },
      { type: 'Do', desc: 'Home build: light an LED, then build an electromagnet + homopolar motor', meta: '~30 min', link: '#' },
    ],
    checks: [
      { type: 'Build + explain', prompt: 'Build a working circuit (LED, electromagnet, or motor). Draw it and label the source, the path, and the load. What happens if you break the loop?' },
      { type: 'Questions', questions: [
        '1. What\'s the difference between voltage and current, in plain words?',
        '2. Series vs. parallel — how are string lights wired so one dead bulb doesn\'t kill them all?',
      ] },
    ],
  },

  'E-Bike Engineering Challenge': {
    title: 'The E-Bike Engineering Challenge',
    unit: 'Unit 6 — Energy, Electricity & the E-Bike',
    standards: 'MS-ETS1-1',
    hook: 'Real engineering is choosing between things you can\'t have all of: more range OR less weight, more speed OR more battery life, cheaper OR tougher. Design your dream build and you\'ll run into every trade-off a real ebike engineer fights. <a class="hook-link" href="https://en.wikipedia.org/wiki/Electric_bicycle" target="_blank" rel="noopener">🔗 Electric bicycle — Wikipedia</a>',
    learnIt: [
      { type: 'Watch', desc: 'How ebike motors & controllers actually work', meta: '~10 min', link: yt('how ebike motor controller battery works explained') },
      { type: 'Do', desc: 'Spec your dream ebike build within a budget', meta: '~30 min', link: '#' },
    ],
    checks: [
      { type: 'Engineer it', prompt: 'Design your ideal ebike on paper with a set budget. List your top 3 requirements (range? speed? weight? price?) and show one real trade-off you had to make.' },
      { type: 'Defend it', prompt: 'Present your design to a parent and defend one choice where you gave something up to get something better.' },
    ],
  },

};

if (typeof module !== 'undefined') module.exports = { LESSONS };
