/**
 * unit-power.js — Unit 6: Power (capstone)
 *
 * The year's capstone. Interdisciplinary (physical science + world history +
 * ELA) self-paced unit that closes the loop back to rivers (hydropower) and
 * metals (batteries). 16 ordered cards; each a standalone session. Rendered by
 * unit.js; progress/answers save to localStorage. NO `track` field → teal theme.
 *
 * Do not add a top-level const/let/var (all unit-*.js share one global scope).
 * NOTE: this unit tags 7.PS3.1/.2/.5 — those were added to standards.js.
 */

window.HS_UNITS = window.HS_UNITS || [];
window.HS_UNITS.push({
  id: 'power',
  short: 'Unit 6 · Power',
  title: 'Power',
  eq: 'Where does power actually come from?',
  image: 'assets/units/power.jpg',

  parent: {
    hotspots: [
      'The whole capstone rides on one <b>double meaning</b>: "power" is both a physics word (energy per second) and a political word (control over people). The unit\'s big claim is that the two are linked — whoever controls the energy controls the age. If he only hears one meaning, the payoff is lost.',
      'He may think energy gets "used up." It doesn\'t — energy is never destroyed, only <b>transformed</b> from one form to another (conservation of energy). The pendulum and ramp builds (cards 2–3) make this visible. Watch for "the battery ran out of energy" and gently correct to "the battery\'s chemical energy turned into motion and heat."',
      'This unit deliberately <b>closes the year\'s loop</b>: hydropower reconnects to the very first rivers unit, and batteries reconnect to the metals/lithium unit. If he can retell the through-line — water, materials, deep time, trade, hazards, and now energy, all as "what does controlling this let people do?" — that\'s the capstone landing.',
      'The final product (cards 13–14) is a <b>persuasive argument delivered aloud</b>. The hardest part isn\'t the claim — it\'s honestly handling the <b>counterargument</b>. A strong case names the other side\'s best point and answers it. And he has to actually <i>say it out loud</i>; presenting is the graded skill, not just writing.',
    ],
    activities: [
      { tier: 'Small', title: 'Energy scavenger hunt', detail: 'Walk the house and, for ten things that use energy, name the transformation: the toaster turns electrical energy into heat; the ebike turns chemical (battery) into motion; a lamp turns electrical into light and heat. Then find where the house\'s energy comes from in the first place (the meter, the panel) and trace it back toward its source.', cost: 'Free', time: '30–45 min' },
      { tier: 'Medium', title: 'Ebike teardown (safe version)', detail: 'With the ebike safely off, trace the energy path together: battery → controller → motor → wheel. Look up the battery\'s watt-hours and what that means. Talk through the whole chain — from lithium mined out of the ground, to chemical energy stored, to the motion that carries him around Medford. Pairs with the battery and design-challenge cards.', cost: 'Free', time: 'Half day' },
      { tier: 'Large', title: 'See where our power comes from', detail: 'Take a drive to a real energy site: a hydro dam on the Rogue or nearby (falling water → electricity, full circle to the rivers unit), a solar array, or a substation. Connect the thing humming in front of you to the whole year — water, materials, and energy, and who controls them. A great capstone field trip.', cost: '$ gas', time: 'Full day' },
    ],
  },

  vocab: {
    mustOwn: [
      { term: 'energy',                def: 'The capacity to make something happen — to move, heat, light, or change matter.' },
      { term: 'kinetic energy',        def: 'The energy of motion — anything moving has it.' },
      { term: 'potential energy',      def: 'Stored energy, waiting — held by position (up high) or by chemistry (a battery).' },
      { term: 'energy transformation', def: 'Energy changing from one form into another — chemical to motion, motion to heat.' },
      { term: 'conservation of energy',def: 'Energy is never created or destroyed, only transformed. The total always stays the same.' },
      { term: 'circuit',               def: 'A complete loop that electric current can flow around.' },
      { term: 'current',               def: 'The flow of electric charge through a circuit.' },
      { term: 'voltage',               def: 'The "push" that drives current around a circuit.' },
      { term: 'power',                 def: 'How fast energy is used or delivered — and, in history, control over people and resources.' },
      { term: 'fossil fuel',           def: 'Coal, oil, or gas — ancient stored sunlight we burn for energy.' },
      { term: 'renewable',             def: 'An energy source that naturally refills — sun, wind, falling water.' },
      { term: 'battery',               def: 'A device that stores energy as chemistry and releases it as electricity.' },
      { term: 'turbine',               def: 'A spinning wheel that turns moving water, steam, or wind into electricity.' },
      { term: 'counterargument',       def: 'The strongest point the OTHER side would make against your claim.' },
    ],
    frayer: [
      {
        term: 'energy transformation',
        definition: 'The changing of energy from one form to another. Energy is never used up — it just moves between forms: chemical, motion (kinetic), stored (potential), heat, light, and electrical.',
        examples: ['A battery: chemical → electrical → motion', 'A dam: potential (water up high) → kinetic → electrical', 'Your body: chemical (food) → motion + heat'],
        nonexamples: ['Energy "disappearing" when a battery dies', 'Creating energy out of nothing', 'A machine that runs forever with no input'],
        sentence: 'The whole story of energy is transformation — the ebike doesn\'t make energy, it transforms the battery\'s chemical energy into motion.',
      },
      {
        term: 'conservation of energy',
        definition: 'The law that energy can\'t be created or destroyed, only transformed. In any process, if you add up every form of energy before and after, the totals match.',
        examples: ['A pendulum trading potential for kinetic and back', 'A phone battery\'s energy ending up as light, sound, and heat', 'Food energy becoming motion plus body heat'],
        nonexamples: ['Energy vanishing into nothing', 'A perpetual-motion machine', 'Getting more energy out than you put in'],
        sentence: 'Because of conservation of energy, "the battery ran out" really means its energy left as motion and heat — none of it was destroyed.',
      },
      {
        term: 'power',
        definition: 'In physics, how fast energy is delivered or used (energy per second). In history, control over energy and resources — and therefore over people. This unit\'s big idea is that the two meanings are deeply connected.',
        examples: ['A watt — a rate of energy use', 'A kingdom that controls the only water and grain', 'Whoever controls the oil, the coal, or the grid'],
        nonexamples: ['A single unit of stored energy (that\'s just energy)', 'Being physically strong for a moment', 'A word with only one meaning'],
        sentence: 'Across the whole year, "power" has meant the same thing twice: whoever controls the energy controls the age.',
      },
    ],
  },

  cards: [

    /* ───────────────── PHASE 1 · WHAT ENERGY IS ───────────────── */
    {
      id: 'launch', n: 1, title: 'Launch — Where does power actually come from?',
      subject: 'Science · Humanities', minutes: 40, standards: '7.PS3.1 · 7.C.PI.1',
      blocks: [
        { type: 'hook', text: 'Here\'s a word that\'s been hiding a secret all year: <b>power</b>. To a scientist it means energy delivered per second. To a historian it means control over people. This unit\'s claim is that those aren\'t two different words — they\'re the same story. Whoever controls the energy has always controlled the age: the kings who owned the rivers, the empires that owned the metals, the nations that own the oil. To finish the year, we\'re going to figure out where power — both kinds — actually comes from.' },
        { type: 'video', title: 'What is energy?', url: 'https://www.youtube.com/results?search_query=what+is+energy+kinetic+potential+explained', watch: true, focus: 'Watch for the idea that energy never disappears — it only changes form.' },
        { type: 'prose', body: '<p>The capstone question — and it\'s the whole year in disguise:</p><blockquote>Where does power actually come from?</blockquote><p>All year you\'ve circled this. Rivers: control the water, control the food, control the people. Metals: control the bronze, control the empire. Now we make it explicit. First the physics of energy, then the history of who controlled it, then you\'ll take a stand on where our energy <em>should</em> come from next — and argue it out loud. This unit closes the loop back to the very first river.</p>' },
        { type: 'flashcards', title: 'Meet the words first', note: 'Tap a card to flip it. You\'ll meet all of these again inside the lessons — this is just a first handshake.' },
        { type: 'kwl', prompt: 'Before we start: what do you already know about energy, electricity, or where our power comes from? What do you want to find out? No wrong answers.' },
        { type: 'next', text: 'Next: the two basic flavors of energy.' },
      ],
    },
    {
      id: 'energy-a', n: 2, title: 'Energy Basics · A', subject: 'Science', minutes: 30, standards: '7.PS3.1 · 7.PS3.2',
      blocks: [
        { type: 'hook', text: 'A boulder resting at the top of a cliff looks like it\'s doing nothing. But it\'s loaded — full of stored energy, just waiting for a nudge to unleash it. A boulder rolling downhill is that same energy, unlocked and on the move. Those are the two basic flavors of energy, and everything else is a remix of them.' },
        { type: 'read', title: 'Kinetic and potential energy', source: 'clean reading', url: 'reader.html?doc=energy-basics', body: '<p>Open the clean reading for the full picture. The two flavors:</p><ul><li><b>Kinetic energy</b> is the energy of <b>motion</b>. Anything moving has it — a rolling boulder, flowing water, a spinning wheel, wind. The more <b>mass</b> and the more <b>speed</b>, the more kinetic energy.</li><li><b>Potential energy</b> is <b>stored</b> energy, waiting to be released. A boulder up high has it (position). A stretched rubber band has it. A battery and a tank of gasoline have it (chemistry).</li></ul><p>The magic move is that these two constantly trade back and forth — and that trade is where all the useful work gets done.</p>' },
        { type: 'answers', prompts: [
          'In your own words, what\'s the difference between kinetic and potential energy?',
          'A ball at the top of a ramp vs. a ball rolling down it: which has more potential energy, which has more kinetic? What happens as it rolls?',
        ] },
        { type: 'deeper', text: 'Two things have the same speed but one has twice the mass. Which has more kinetic energy? Now same mass, but one moves twice as fast — does doubling speed just double the energy, or more? (Look up the formula.)' },
        { type: 'next', text: 'Next: watch energy trade forms with your own hands.' },
      ],
    },
    {
      id: 'energy-b', n: 3, title: 'Energy Basics · B', subject: 'Science', minutes: 35, standards: '7.PS3.2 · 7.PS3.5',
      blocks: [
        { type: 'build', title: 'The pendulum trade', minutes: 20, steps: '<ol><li>Tie a small weight (a heavy washer, a fishing sinker) to a string and hang it so it swings freely — a pendulum.</li><li>Pull it to one side and hold. Right there, it\'s all <b>potential</b> energy (position, up high).</li><li>Let go. At the very bottom of the swing it\'s moving fastest — all <b>kinetic</b>. Then it climbs the other side, trading kinetic back into potential.</li><li>Watch it swing again and again, a little lower each time. Where is the "lost" energy going? (Hint: it isn\'t lost — feel the air, the string, the friction.)</li></ol>', photo: true, photoLabel: 'Photo or video link of your pendulum (optional):' },
        { type: 'answers', prompts: [
          'At which points in the swing is the pendulum all potential? All kinetic? How do you know?',
          'The swings get smaller and eventually stop. Energy is never destroyed — so where did it actually go?',
        ] },
        { type: 'quiz', questions: [
          { q: 'The energy of motion is…', options: ['Potential energy', 'Kinetic energy', 'Stored energy', 'Chemical energy'], answer: 1 },
          { q: 'A rock held up high has a lot of…', options: ['Kinetic energy', 'Potential energy', 'Current', 'Voltage'], answer: 1 },
          { q: 'A pendulum slows and stops because its energy is transformed mostly into…', options: ['Nothing — it\'s destroyed', 'Heat and sound from friction and air', 'More potential energy', 'Light'], answer: 1 },
          { q: 'Kinetic energy increases most when you increase an object\'s…', options: ['Color', 'Mass and especially its speed', 'Age', 'Temperature only'], answer: 1 },
        ] },
        { type: 'next', text: 'Next: the rule that ties it all together — energy is never lost.' },
      ],
    },
    {
      id: 'transform', n: 4, title: 'Energy Transforms, Never Vanishes', subject: 'Science', minutes: 35, standards: '7.PS3.5',
      blocks: [
        { type: 'hook', text: 'Nothing you own actually "makes" energy. Not the outlet, not the battery, not your own body. Every machine and every living thing is just a device for <b>transforming</b> energy from one form to another — and a shocking amount of it always slips out as heat. The total never changes. That single rule, conservation of energy, is one of the deepest laws in all of science.' },
        { type: 'read', title: 'The law of conservation of energy', source: 'read', body: '<p><b>Energy transformation</b> is energy changing form: chemical → motion, motion → heat, electrical → light. Trace anything and you\'ll find a chain of these:</p><ul><li>Your <b>body</b>: chemical energy in food → motion (muscles) + heat.</li><li>An <b>ebike</b>: chemical (battery) → electrical → motion (motor) → and always some heat.</li><li>A <b>dam</b>: potential (water held high) → kinetic (falling water) → electrical.</li></ul><p>The iron law behind all of it is <b>conservation of energy</b>: energy is never created or destroyed, only transformed. When a battery "dies," its energy didn\'t vanish — it left as motion, light, and heat. This is why a machine that runs forever on nothing (a "perpetual motion machine") is impossible: there\'s no free energy, only borrowed-and-transformed energy.</p><p>And here\'s the historian\'s version of the same law: since you can\'t make energy from nothing, you have to <em>get it from somewhere</em> — and whoever controls that somewhere holds the power.</p>' },
        { type: 'answers', prompts: [
          'Explain conservation of energy in one sentence a younger kid would get.',
          'Pick any device and trace its energy transformations from start to finish (include where heat sneaks out).',
          'The reading says the science law has a "historian\'s version." What is it?',
        ] },
        { type: 'quiz', questions: [
          { q: 'Conservation of energy says energy is…', options: ['Created by batteries', 'Never created or destroyed, only transformed', 'Used up and gone', 'Made by outlets'], answer: 1 },
          { q: 'When a battery "dies," its energy has…', options: ['Vanished', 'Been transformed into motion, light, and heat', 'Been destroyed', 'Turned into mass'], answer: 1 },
          { q: 'A machine that runs forever with no energy input is…', options: ['Common', 'Impossible', 'Cheap', 'Renewable'], answer: 1 },
        ] },
        { type: 'next', text: 'Next: the form of energy that changed everything — electricity.' },
      ],
    },
    {
      id: 'circuits-a', n: 5, title: 'Circuits & Electricity · A', subject: 'Science', minutes: 30, standards: '7.PS3.5',
      blocks: [
        { type: 'hook', text: 'Electricity is just energy on the move through a wire — and it went from a party trick to the thing that runs civilization in about a hundred years. The trick that made it useful was the <b>circuit</b>: a complete loop for the energy to flow around. Break the loop anywhere and everything stops. That\'s all a light switch is — a tiny drawbridge in the loop.' },
        { type: 'learn', title: 'Learn how circuits work — your way', note: 'Watch it or read it, your call.', options: [
          { kind: 'video', label: 'Watch it', title: 'How electric circuits work', url: 'https://www.youtube.com/results?search_query=how+electric+circuits+work+current+voltage+explained', focus: 'Watch for the loop — current only flows when the circuit is complete.' },
          { kind: 'read', label: 'Read it', title: 'Current, voltage, and the loop', source: 'clean reading', url: 'reader.html?doc=circuits', body: '<p>Open the clean reading for the full picture. Three ideas:</p><ul><li>A <b>circuit</b> is a complete loop of conducting material (usually wire) that electric charge can flow around. No complete loop, no flow.</li><li><b>Current</b> is the <em>flow</em> of charge through the circuit — like the amount of water moving through a pipe.</li><li><b>Voltage</b> is the <em>push</em> that drives the current — like the water pressure. A battery provides the push; the wire provides the path; a bulb or motor is the thing that puts the energy to work.</li></ul>' },
        ] },
        { type: 'answers', prompts: [
          'Why does breaking a circuit anywhere stop the whole thing?',
          'Use the water-in-a-pipe comparison: which part is the current, and which part is the voltage?',
        ] },
        { type: 'next', text: 'Next: build a circuit and see it for yourself.' },
      ],
    },
    {
      id: 'circuits-b', n: 6, title: 'Circuits & Electricity · B', subject: 'Science', minutes: 35, standards: '7.PS3.5',
      blocks: [
        { type: 'build', title: 'Light it up', minutes: 25, steps: '<p>Build a simple circuit (a battery, some wire, and a small bulb or LED — a kit works great), <b>or</b> draw a clear circuit diagram. Make a working loop, then break it and see the light go out. Try adding a second bulb.</p><p>If you\'re drawing it: label the battery (the push/voltage), the wire (the path), the switch (the drawbridge), and the bulb (where energy becomes light + heat). Show the complete loop.</p>', photo: true, photoLabel: 'Photo of your circuit or diagram (optional):' },
        { type: 'answers', prompts: [
          'Trace the energy transformation in your circuit: the battery\'s stored ___ energy becomes ___, which the bulb turns into ___.',
          'What happened when you broke the loop? Why?',
        ] },
        { type: 'matching', title: 'Word match #1', note: 'Lock in the energy words. Tap a word, then its meaning.', set: ['kinetic energy', 'potential energy', 'circuit', 'current', 'voltage', 'conservation of energy'] },
        { type: 'quiz', questions: [
          { q: 'Electric charge can only flow when the circuit is…', options: ['Broken', 'A complete loop', 'Very long', 'Hot'], answer: 1 },
          { q: 'The "push" that drives current around a circuit is…', options: ['Voltage', 'Mass', 'Heat', 'Kinetic energy'], answer: 0 },
          { q: 'In a flashlight, energy transforms from chemical (battery) to electrical to…', options: ['Sound only', 'Light and heat', 'Potential energy', 'Nothing'], answer: 1 },
        ] },
        { type: 'next', text: 'Next: rewind history and watch power change hands, one energy source at a time.' },
      ],
    },

    /* ───────────────── PHASE 2 · WHO CONTROLS ENERGY ───────────────── */
    {
      id: 'ladder-a', n: 7, title: 'The Energy Ladder of History · A', subject: 'Humanities', minutes: 35, standards: '7.H.CH.3 · 7.E.MI.5',
      blocks: [
        { type: 'hook', text: 'For almost all of human history, there was really only one source of power: <b>muscle</b>. Human muscle and animal muscle did nearly all the work — plowing, building, carrying, fighting. That single fact shaped everything, including who was rich and who was enslaved, because for thousands of years the main way to get more energy was to control more bodies.' },
        { type: 'read', title: 'From muscle to water to wind', source: 'clean reading', url: 'reader.html?doc=energy-history', body: '<p>Open the clean reading for the whole ladder. The first rungs:</p><ul><li><b>Muscle</b> (people and animals) powered the ancient and medieval world. More power meant more workers — which is one grim reason slavery and empire went hand in hand.</li><li><b>Water and wind</b> were the first big upgrade. The water wheel and later the windmill let a river or a breeze do the work of dozens of people — grinding grain, sawing wood, pumping water. Whoever owned the mill on the river held real economic power. (Sound familiar? That\'s the rivers unit.)</li></ul><p>Notice the pattern already forming: each new energy source lets a smaller number of people do a larger amount of work — and reshuffles who holds the <b>power</b>.</p>' },
        { type: 'answers', prompts: [
          'For most of history, what was the main source of "power" to do work — and how did that shape who held control over others?',
          'How did the water wheel change what one person (or one river) could accomplish?',
        ] },
        { type: 'next', text: 'Next: the rungs that built the modern world — and its problems.' },
      ],
    },
    {
      id: 'ladder-b', n: 8, title: 'The Energy Ladder of History · B', subject: 'Humanities · Science', minutes: 40, standards: '7.H.CH.3 · 7.E.MI.5',
      blocks: [
        { type: 'hook', text: 'Around 250 years ago, humans learned to unlock a battery that had been charging for 300 million years: <b>fossil fuels</b>. Coal, then oil, is really ancient sunlight — energy from prehistoric plants, stored in the ground across deep time (there\'s that idea again). Burning it released more power than any civilization had ever had, and it rebuilt the entire world in a couple of centuries.' },
        { type: 'read', title: 'Coal, oil, and the modern age', source: 'read', body: '<p>Keep climbing the ladder:</p><ul><li><b>Coal</b> powered the steam engine and the Industrial Revolution. Factories, railroads, and steamships all ran on it. For the first time, a nation\'s power depended on the fuel under its ground.</li><li><b>Oil</b> did it again, bigger: cars, planes, plastics, and modern war all run on it. In the 1900s, whoever controlled the oil could shape the whole world — and nations fought wars over it.</li><li><b>Electricity</b> became the flexible middleman: we now burn fuel (or use water, wind, sun, or nuclear) to make electricity, then send it anywhere down a wire to do anything.</li><li><b>Batteries</b> are the newest rung — storing energy so it\'s portable. Your ebike, your phone, and electric cars all live here. And batteries need <b>lithium</b> — which is exactly the metals unit, come back around.</li></ul><p>Every rung tells the same story: a new energy source appears, and <b>power</b> — economic and political — shifts to whoever controls it. Muscle → water → coal → oil → electricity → batteries. The question of this unit is simply: what\'s the next rung, and who should control it?</p>' },
        { type: 'answers', prompts: [
          'Why does the reading call coal and oil "ancient sunlight"? (Connect it to deep time.)',
          'Pick coal, oil, or batteries and explain how controlling it gave some people or nations power over others.',
          'Trace the whole ladder in your own words: muscle → ? → ? → ? → ? → batteries. What stays the same at every rung?',
        ] },
        { type: 'quiz', questions: [
          { q: 'For most of human history, the main source of power to do work was…', options: ['Electricity', 'Coal', 'Muscle (human and animal)', 'Oil'], answer: 2 },
          { q: 'Fossil fuels are essentially…', options: ['Fresh sunlight', 'Ancient stored sunlight (energy from prehistoric life)', 'Made in factories', 'A kind of metal'], answer: 1 },
          { q: 'The repeating pattern of the energy ladder is that a new energy source…', options: ['Changes nothing', 'Shifts power to whoever controls it', 'Always helps everyone equally', 'Runs out instantly'], answer: 1 },
        ] },
        { type: 'next', text: 'Next: nail down the big idea — why energy IS power.' },
      ],
    },
    {
      id: 'power-idea', n: 9, title: 'Why Energy Is Power', subject: 'Humanities · ELA', minutes: 35, standards: '7.C.PI.1 · 7.RI.8',
      blocks: [
        { type: 'hook', text: 'Now the two meanings of "power" snap together. All year, control of an energy source has meant control over people. The Mesopotamian king who owned the irrigation canals. The empire that cornered the tin. The nation that controls the oil. It\'s never really been about the water, the metal, or the oil for their own sake — it\'s about the <b>energy and work</b> they unlock, and therefore the people who depend on them.' },
        { type: 'read', title: 'The double meaning of power', source: 'read', body: '<p>In physics, <b>power</b> is the rate of delivering energy. In history, power is control over people. This unit\'s claim is that they\'re the same story: <b>whoever controls the energy controls the age.</b></p><p>Walk it back through the year:</p><ul><li><b>Rivers:</b> control the water → control the food → control the people.</li><li><b>Metals:</b> control the bronze and iron → arm the army → rule the empire.</li><li><b>Trade:</b> control the route the goods (and energy) flow along → get rich and set the rules.</li><li><b>Now:</b> control the coal, the oil, the grid, the lithium → hold power over everyone who needs to move, heat, and light their lives.</li></ul><p>This is also where reading like a critic matters. Anyone arguing about energy — a company, a politician, an activist — is making a <b>claim</b> and hoping you won\'t check the <b>evidence</b> or notice the <b>counterargument</b>. The same claim-and-evidence habit from the deep-time unit is your defense.</p>' },
        { type: 'choice', title: 'Show what you know — your pick', note: 'The two meanings of "power" are one story. Prove you see it — pick how.', options: [
          { kind: 'write', label: 'Write it', input: 'text', prompt: 'In your own words, how are the two meanings of "power" — the physics one and the political one — actually the same story? Then pick two units from this year (rivers, metals, trade, hazards) and show how each was secretly about controlling energy or resources.' },
          { kind: 'record', label: 'Record it', input: 'link', prompt: 'Record a 60–90 second explainer: "Whoever controls the energy controls the age." Use two real examples from this year to prove it. Paste the link.' },
          { kind: 'draw', label: 'Map it', input: 'link', prompt: 'Make a diagram linking each unit this year (rivers → metals → trade → hazards → power) to the energy or resource whose control gave someone power. Snap a photo and paste the link.' },
        ] },
        { type: 'next', text: 'Next: zoom all the way in — the battery in your own ebike.' },
      ],
    },

    /* ───────────────── PHASE 3 · YOUR MACHINE, YOUR RIVER ───────────────── */
    {
      id: 'battery-a', n: 10, title: 'Batteries & the Ebike · A', subject: 'Science', minutes: 35, standards: '7.PS1.3 · 7.PS3.5',
      blocks: [
        { type: 'hook', text: 'Your ebike carries a little chemistry set that stores enough energy to haul you across town — and it\'s the same lithium you met in the metals unit. A battery is one of the cleverest energy tricks humans have: it holds energy as <b>chemical potential</b> and releases it as <b>electric current</b>, on demand, then (if it\'s rechargeable) runs the whole reaction backward to fill up again.' },
        { type: 'learn', title: 'Learn how batteries work — your way', note: 'Watch it or read it — either shows you the chemistry-to-current trick.', options: [
          { kind: 'video', label: 'Watch it', title: 'How batteries work', url: 'https://www.youtube.com/results?search_query=how+lithium+batteries+work+explained', focus: 'Watch for the energy transformation: stored chemistry becoming electric current, and back again when charging.' },
          { kind: 'read', label: 'Read it', title: 'Chemical energy on demand', source: 'clean reading', url: 'reader.html?doc=batteries', body: '<p>Open the clean reading for the full picture. The key ideas:</p><ul><li>A <b>battery</b> stores <b>potential energy</b> in the form of chemistry — atoms and electrons arranged so they "want" to react.</li><li>Complete a <b>circuit</b> and the reaction runs: electrons flow out as <b>current</b>, doing work (spinning the ebike\'s motor) before returning.</li><li>A <b>rechargeable</b> battery is reversible: plug it in and you push energy back in, resetting the chemistry to store it again.</li><li>Lithium is the star because it\'s the lightest metal — lots of stored energy for very little weight. That\'s a synthetic-material story, straight out of the metals unit: a natural resource, refined into technology that reshapes society.</li></ul>' },
        ] },
        { type: 'answers', prompts: [
          'Trace the energy in your ebike: from chemical energy in the battery all the way to you moving down the street. Name each form it passes through.',
          'Why is lithium — a metal you met back in the metals unit — so useful for a battery?',
        ] },
        { type: 'next', text: 'Next: take it apart (safely) and make it better.' },
      ],
    },
    {
      id: 'battery-b', n: 11, title: 'Ebike Design Challenge · B', subject: 'Science · Engineering', minutes: 45, standards: 'MS.ETS1.1',
      blocks: [
        { type: 'hook', text: 'You know how the energy flows now. So become the engineer: how would you make an electric ride better? Real design isn\'t magic — it\'s naming what you\'re trying to achieve and what you have to work within, then making smart trade-offs. Same criteria-and-constraints move from the last unit, aimed at a machine you actually use.' },
        { type: 'build', title: 'Trace it, then improve it', minutes: 35, steps: '<p><b>Part 1 — trace it.</b> With the ebike safely OFF, map the whole energy path in a diagram: battery (chemical/potential) → controller → motor (electrical → kinetic) → wheels → you moving. Label each energy transformation, and mark where energy leaks out as heat.</p><p><b>Part 2 — improve it.</b> Propose ONE improvement to an ebike (or design your ideal electric ride). Sketch it or make a Canva page. State your <b>criteria</b> (goals: more range? lighter? safer? cheaper?) and your <b>constraints</b> (limits: battery weight, cost, what materials exist), and name one honest <b>trade-off</b>. <a href="https://www.canva.com/create/presentations/" target="_blank" rel="noopener" class="choice-link">Open Canva ↗</a></p>', photo: true, photoLabel: 'Paste the link or photo of your energy map + design (or describe it below):' },
        { type: 'answers', prompts: [
          'Your improvement, its criteria, and its constraints (if not linked above):',
          'What\'s the honest trade-off — what does your improvement cost or give up?',
        ] },
        { type: 'quiz', questions: [
          { q: 'A battery stores energy as…', options: ['Kinetic energy', 'Chemical potential energy', 'Heat', 'Light'], answer: 1 },
          { q: 'The GOALS a design must meet are its…', options: ['Constraints', 'Criteria', 'Currents', 'Circuits'], answer: 1 },
          { q: 'Lithium is prized for batteries because it…', options: ['Is the heaviest metal', 'Stores lots of energy for very little weight', 'Never runs out', 'Glows'], answer: 1 },
        ] },
        { type: 'next', text: 'Next: full circle — back to the very first river.' },
      ],
    },
    {
      id: 'hydro', n: 12, title: 'Full Circle: Rogue Hydropower', subject: 'Humanities · Science', minutes: 35, standards: '7.C.PI.1 · 7.PS3.5',
      blocks: [
        { type: 'hook', text: 'The whole year started on a river, and it ends on one. A hydroelectric dam is the entire energy story in a single machine: water held high has <b>potential energy</b>, falling water becomes <b>kinetic</b>, a spinning <b>turbine</b> turns that into electricity — and whoever owns the dam owns the power, in both senses. The Rogue, right outside, has lived every part of this argument.' },
        { type: 'read', title: 'The river, one more time', source: 'read', body: '<p>Remember the rivers unit\'s last lesson? Dams on the Rogue — like Gold Ray and Savage Rapids — were built for power and irrigation, then removed to bring the salmon back. Look at that same story now, with everything you\'ve learned about energy:</p><ul><li>A dam is a pure <b>energy-transformation</b> machine: potential (water up high) → kinetic (falling) → electrical (turbine + generator). It\'s <b>renewable</b> — the water cycle refills it for free, forever (the very first thing you studied all year).</li><li>But it\'s a <b>trade-off</b>, exactly like the rivers unit said: the power comes at the cost of the salmon runs and the silt. Removing the dam brings back the fish but gives up the electricity.</li><li>And it\'s <b>power</b> in both senses: whoever controls the dam controls the electricity AND makes the call about the salmon, the water, and everyone downstream.</li></ul><p>That\'s the whole year in one river: water, energy, trade-offs, and control, all braided together. Where power comes from was never just a physics question.</p>' },
        { type: 'choice', title: 'Show what you know — your pick', note: 'The dam closes the loop back to the very first river. Show you see the whole circle — pick how.', options: [
          { kind: 'draw', label: 'Diagram it', input: 'link', prompt: 'Draw a labeled diagram of a hydroelectric dam\'s energy path — potential (water up high) → kinetic (falling) → electrical (turbine) — and mark the trade-off (salmon, silt). Snap a photo and paste the link.' },
          { kind: 'write', label: 'Write it', input: 'text', prompt: 'Trace the energy transformations in a hydro dam from the water behind it to the electricity in a wire. Then connect it back to the rivers unit: what\'s the trade-off, and how is a dam "power" in BOTH meanings of the word?' },
          { kind: 'record', label: 'Record it', input: 'link', prompt: 'Record a short clip standing at (or describing) a real Rogue-area dam: the energy path, the trade-off, and why controlling it is "power" both ways. Paste the link.' },
        ] },
        { type: 'quiz', questions: [
          { q: 'In a hydroelectric dam, the energy path is…', options: ['Electrical → chemical → kinetic', 'Potential (water up high) → kinetic (falling) → electrical', 'Heat → light → sound', 'Nuclear → potential'], answer: 1 },
          { q: 'Hydropower is considered renewable because…', options: ['Dams last forever', 'The water cycle refills the reservoir for free', 'It uses no water', 'It burns fuel'], answer: 1 },
          { q: 'The trade-off of a Rogue River dam is power vs…', options: ['Salmon runs and silt', 'Nothing', 'More rain', 'Cheaper fuel'], answer: 0 },
        ] },
        { type: 'next', text: 'Next: your capstone — take a stand on our energy future.' },
      ],
    },

    /* ───────────────── PHASE 4 · THE CAPSTONE ARGUMENT ───────────────── */
    {
      id: 'capstone-a', n: 13, title: 'Your Voice · A — Build the Argument', subject: 'ELA · Humanities', minutes: 45, standards: '7.W.1 · 7.RI.8',
      blocks: [
        { type: 'prose', body: '<p>This is the capstone of the whole year: a <b>persuasive argument</b> that you\'ll write and then <b>deliver out loud</b>. The question:</p><blockquote>Where SHOULD our power come from next — and why?</blockquote><p>Pick a real position. Should the Rogue Valley (or the country) lean into solar? Wind? Hydro? Nuclear? A mix? Should we remove more dams, or keep them? There\'s no "right" answer the teacher wants — there\'s a <em>well-argued</em> answer. First build the case; you\'ll write and present it next.</p>' },
        { type: 'answers', prompts: [
          'Your CLAIM: where should our power come from next? State it in one clear sentence.',
          'REASON 1 + evidence: one strong reason, backed by a fact from this unit or your own research.',
          'REASON 2 + evidence: a second reason, with evidence.',
          'The COUNTERARGUMENT: what\'s the strongest point someone on the OTHER side would make?',
          'Your ANSWER to that counterargument: why does your position still hold up?',
        ] },
        { type: 'deeper', text: 'The strongest arguments don\'t hide the other side — they name the best counterargument and answer it honestly. A position that can\'t survive the strongest objection isn\'t ready yet.' },
        { type: 'next', text: 'Next: write it, then say it out loud.' },
      ],
    },
    {
      id: 'capstone-b', n: 14, title: 'Your Voice · B — Write It & Deliver It', subject: 'ELA · Humanities', minutes: 50, standards: '7.W.1 · 7.SL.4',
      blocks: [
        { type: 'build', title: 'Write and present your argument', minutes: 45, steps: '<p><b>Write</b> your persuasive piece: open with your claim, give your reasons with evidence, honestly handle the counterargument, and close with a strong call to action. Aim for a few tight paragraphs, or a short slide deck. <a href="https://www.canva.com/create/presentations/" target="_blank" rel="noopener" class="choice-link">Open Canva ↗</a></p><p>Then <b>deliver it out loud</b> — to a parent, to the camera, to anyone. Speak clearly, make eye contact, and sound like you mean it. Presenting is the skill being graded here, not just the writing. Practice once, then do it for real.</p>', photo: true, photoLabel: 'Paste a link to your written argument and/or a recording of your delivery:' },
        { type: 'answers', prompts: [
          'Your written argument (if you wrote it here rather than in Canva):',
          'How did delivering it OUT LOUD go? What was harder or different than just writing it?',
        ] },
        { type: 'rubric', title: 'Rate your own argument', items: [
          'I made a clear claim about where our power should come from.',
          'I gave at least two reasons, each backed by real evidence.',
          'I named the strongest counterargument and answered it honestly.',
          'I delivered it out loud, clearly and with conviction.',
        ] },
        { type: 'next', text: 'Last stop: pull the whole unit — and the whole year — together.' },
      ],
    },

    /* ───────────────── PHASE 5 · REFLECTION ───────────────── */
    {
      id: 'reflect-a', n: 15, title: 'Reflection · A — Look Back', subject: 'Portfolio', minutes: 35, standards: 'self-assessment',
      blocks: [
        { type: 'prose', body: '<p>You made it to the end — of the unit and of the whole year. Before your final answer, look back at where you started and check what stuck.</p>' },
        { type: 'kwlback', prompt: 'Here\'s what you wrote on day one of this unit. Read it — see how much of the machine you can explain now.' },
        { type: 'vocabsort', title: 'Which words do you own now?', note: 'Be honest. Tap each word: "got it cold" or "still fuzzy." The fuzzy ones are just your study list.' },
        { type: 'matching', title: 'Word match #2', note: 'One more pass. Tap a word, then its meaning.', set: ['energy transformation', 'power', 'fossil fuel', 'renewable', 'battery', 'turbine'] },
        { type: 'next', text: 'Last card: your big answer — and the whole year.' },
      ],
    },
    {
      id: 'reflect-b', n: 16, title: 'Reflection · B — Your Answer', subject: 'Portfolio', minutes: 45, standards: '7.W.1 · synthesis',
      blocks: [
        { type: 'prose', body: '<p>The last answer of the year. Respond to the capstone question with everything — the physics of energy, the history of who controlled it, your ebike, the Rogue, and your own argument. Then zoom all the way out: this whole year had one hidden question underneath every unit. Use at least <b>five</b> unit words.</p><blockquote>Where does power actually come from?</blockquote>' },
        { type: 'answers', prompts: [
          'Your answer to the big question (a few strong paragraphs — use evidence and at least 5 unit words):',
          'THE WHOLE YEAR: Rivers, Metals, Deep Time, Trade, Hazards, Power. Each one asked "what does controlling this let people do?" In your own words, what\'s the one big idea that ran through the entire year?',
        ] },
        { type: 'kwlfinish', prompt: 'Finish your KWL. Now that it\'s over:' },
        { type: 'rubric', title: 'Give yourself an honest check', items: [
          'I can explain kinetic and potential energy and how they trade off.',
          'I can explain conservation of energy — that energy transforms and is never destroyed.',
          'I can explain how a circuit and a battery work.',
          'I can tell the history of power: muscle → water → coal → oil → batteries.',
          'I explained why "whoever controls the energy controls the age," in both meanings of power.',
          'I built and delivered a persuasive argument with evidence and a counterargument.',
          'I connected this unit back to the whole year — and used at least five unit words.',
        ] },
        { type: 'done', text: 'That\'s the unit — and the year. Incredible work. You started on a river and ended on one, and now you can see the whole system. You can revisit everything you made on your reflection any time.' },
      ],
    },

  ],
});
