/**
 * unit-metals.js — Unit 2: Metals & the Rise of Empires
 *
 * Interdisciplinary self-paced unit #2 (science + world history + ELA).
 * Science: matter, atoms, chemical reactions (MS-PS1). History: Bronze/Iron
 * Age trade and empires. ELA: forge myths, argument writing. Same card/block
 * format as Unit 1 — rendered by unit.js, saved to localStorage.
 */

window.HS_UNITS = window.HS_UNITS || [];
window.HS_UNITS.push({
  id: 'metals',
  short: 'Unit 2 · Metals',
  title: 'Metals & the Rise of Empires',
  eq: 'How does changing what things are made of change who has power?',
  image: 'assets/units/metals.jpg',

  parent: {
    hotspots: [
      '<b>Physical vs. chemical change</b> is THE misconception here. Melting copper is physical (it\'s still copper); rusting and smelting are chemical (a new substance appears). If he calls melting a chemical reaction, revisit cards 4–6.',
      '<b>Conservation of mass</b> is counter-intuitive when a gas forms — "where did the mass go when the log burned?" The sealed-bag build (card 7) makes it click; do it on a kitchen scale.',
      'The <b>bronze → tin → trade → empire</b> chain deliberately rhymes with the rivers unit\'s surplus chain. Point out the echo — same story, new material.',
      '<b>Alloy</b> means a mix made <i>on purpose</i>. Check he gets that bronze is engineered (copper + tin), not something you dig out of the ground.',
    ],
    activities: [
      { tier: 'Small', title: 'Kitchen chemistry afternoon', detail: 'Baking soda + vinegar sealed in a zip bag on a kitchen scale (the mass stays the same — conservation of mass). Rust some steel wool. Race a chocolate chip, a pat of butter, and an ice cube melting (different melting points = a property). All from the cupboard.', cost: 'Free', time: '1–2 hours' },
      { tier: 'Medium', title: 'Watch metal get worked — or a battery bench', detail: 'Catch a blacksmith or farrier demo (county fairs, living-history days) to see forging for real. Or visit a Medford ebike/bike shop\'s battery bench and ask how lithium packs are built — that ties straight to the "Our Material: Lithium" card.', cost: 'Free–$', time: '1–2 hours' },
      { tier: 'Large', title: 'ScienceWorks, Ashland — matter & energy', detail: 'ScienceWorks Hands-On Museum (~15 min away) has hands-on matter and energy exhibits that turn the abstract chemistry into something he can touch. A good rainy-day anchor for the whole unit.', cost: '≈ $12–15/person', time: 'Half day' },
    ],
  },

  vocab: {
    mustOwn: [
      { term: 'atom',                 def: 'The smallest piece of an element that is still that element.' },
      { term: 'element',              def: 'A pure substance made of only one kind of atom. There are about 90 natural ones.' },
      { term: 'molecule',             def: 'Two or more atoms bonded together into one unit.' },
      { term: 'compound',             def: 'A substance made of different elements locked together in a fixed pattern.' },
      { term: 'property',             def: 'Anything you can observe or measure about a material: hardness, shine, melting point.' },
      { term: 'chemical reaction',    def: 'Atoms rearranging into new substances with new properties.' },
      { term: 'reactant',             def: 'A substance you start a chemical reaction with.' },
      { term: 'product',              def: 'A new substance a chemical reaction makes.' },
      { term: 'conservation of mass', def: 'Atoms are never created or destroyed in a reaction — the mass before equals the mass after.' },
      { term: 'ore',                  def: 'Rock worth mining because a useful metal is locked inside it.' },
      { term: 'smelting',             def: 'Using heat and a chemical reaction to pull pure metal out of ore.' },
      { term: 'alloy',                def: 'A metal blended from two or more ingredients to be better than either alone.' },
      { term: 'empire',               def: 'One power ruling many different peoples and lands.' },
      { term: 'tribute',              def: 'Wealth that weaker states are made to hand over to an empire.' },
      { term: 'monopoly',             def: 'When one group controls all of something everyone else needs.' },
    ],
    frayer: [
      {
        term: 'chemical reaction',
        definition: 'A process where atoms rearrange into new substances with new properties. The atoms themselves never change or disappear — they just trade partners.',
        examples: ['Wood burning into ash, smoke, and gas', 'Iron rusting orange', 'Baking soda + vinegar fizzing', 'Ore + charcoal becoming metal in a furnace'],
        nonexamples: ['Ice melting (same molecules, new arrangement — physical change)', 'Tearing paper', 'Dissolving sugar in water'],
        sentence: 'Smelting is a chemical reaction: charcoal steals the oxygen out of the ore, and pure metal is left behind.',
      },
      {
        term: 'alloy',
        definition: 'A metal made by melting two or more ingredients together so the mix has better properties than anything you started with. The first engineered material in history.',
        examples: ['Bronze (copper + tin)', 'Steel (iron + a pinch of carbon)', 'Brass (copper + zinc)'],
        nonexamples: ['Pure copper or pure gold (one element, no mix)', 'A pile of copper and tin sitting next to each other, unmelted'],
        sentence: 'Copper is too soft for a sword and tin is too brittle — but melted together, the alloy bronze held an edge for 2,000 years.',
      },
      {
        term: 'empire',
        definition: 'One power ruling many different peoples and lands, usually held together by an army, roads, laws, and a steady supply of the materials that make all three.',
        examples: ['Assyria (the first iron-armed empire)', 'Rome', 'Persia', 'Han China'],
        nonexamples: ['A single city-state ruling only itself', 'A trade partnership between equal kingdoms'],
        sentence: 'An empire runs on stuff — no bronze, no army; no army, no tribute; no tribute, no empire.',
      },
    ],
  },

  cards: [

    /* ───────────────── PHASE 1 · WHAT STUFF IS ───────────────── */
    {
      id: 'launch', n: 1, title: 'Launch — The whole world in 90 letters',
      subject: 'Science · Humanities', minutes: 40, standards: '7.PS1.1 · 7.H.CH.3',
      blocks: [
        { type: 'hook', text: 'Every single thing you have ever touched — your ebike, the ocean, this screen, your own body — is built from the same kit of about <b>90 kinds of atoms</b>. That\'s it. Diamond and pencil lead are the <em>same ingredient</em>, carbon, just arranged differently. The entire history of technology is really one long story: people figuring out how to rearrange the kit. And every time somebody learned a new arrangement — bronze, iron, steel, gunpowder, lithium — the map of who ruled the world got redrawn.' },
        { type: 'video', title: 'TED-Ed — Just How Small Is an Atom?', yt: 'yQP4UJhNn0I', focus: 'Get a real feel for the scale — atoms are absurdly small, and everything is made of them.' },
        { type: 'prose', body: '<p>This unit runs on one big question. Keep it in the back of your mind the whole way through:</p><blockquote>How does changing what things are made of change who has power?</blockquote><p>Here is the first clue. Historians literally name the ages of the ancient world after materials — the Stone Age, the <b>Bronze</b> Age, the <b>Iron</b> Age. Not after kings, not after wars. After <em>stuff</em>. By the end of this unit you\'ll know why the material always comes first and the empire comes second — and you\'ll be able to spot the same story happening right now.</p>' },
        { type: 'flashcards', title: 'Meet the words first', note: 'Tap a card to flip it. You\'ll meet all of these again inside the lessons — this is just a first handshake.' },
        { type: 'kwl', prompt: 'Before we dig in, get your own thoughts down. No wrong answers — this is just you.',
          klabel: 'What I think I already know about atoms, metals, and how ancient empires got powerful:',
          wlabel: 'What I\'m curious about / want to figure out:' },
        { type: 'next', text: 'Next: the 90-letter alphabet everything is written in.' },
      ],
    },
    {
      id: 'atoms-a', n: 2, title: 'Atoms & Elements: The Alphabet of Everything', subject: 'Science', minutes: 30, standards: '7.PS1.1',
      blocks: [
        { type: 'hook', text: 'There are more atoms in one glass of water than there are glasses of water in all the oceans on Earth. Atoms are so small that nobody had ever seen one until 1981 — yet people had been <em>using</em> them to make bronze and steel for 5,000 years without knowing what they were doing. You\'re about to know more about what a sword is than the people who forged them.' },
        { type: 'read', title: 'The alphabet of everything', source: 'read', body: '<p>Think of it like language:</p><ul><li>An <b>atom</b> is a letter. An <b>element</b> is one kind of letter — hydrogen, oxygen, carbon, copper, iron. The periodic table is just the alphabet chart, about 90 natural letters long.</li><li>A <b>molecule</b> is a word: atoms bonded together. Water is H₂O — two hydrogens and an oxygen, always in exactly that combination.</li><li>A <b>compound</b> is a word built from <em>different</em> letters, and here\'s the wild part: a compound\'s <b>properties</b> are nothing like its ingredients\'. Sodium is a metal that explodes in water. Chlorine is a poison gas. Bond them together and you get table salt — the stuff on your fries.</li><li>Some substances aren\'t little separate molecules at all but <b>extended structures</b> — endless repeating patterns. Salt crystals are a 3-D grid of sodium and chlorine. Metals are a lattice of identical atoms packed like oranges in a crate. That packing is <em>why</em> metals bend instead of shattering: the layers can slide.</li></ul>' },
        { type: 'answers', prompts: [
          'In your own words: what\'s the difference between an atom, an element, a molecule, and a compound? Use a real example for each.',
          'Salt is made of an explosive metal and a poison gas. What does that tell you about compounds and their ingredients?',
          'Why can a blacksmith bend metal into a sword shape without it shattering like stone?',
        ] },
        { type: 'deeper', text: 'Every atom of gold on Earth was forged in a collision between two dead stars, long before the sun existed. Look up "neutron star collision gold" — the jewelry store is selling shrapnel.' },
        { type: 'next', text: 'Next: build molecules you can eat.' },
      ],
    },
    {
      id: 'atoms-b', n: 3, title: 'Atoms & Elements: Build the Molecules', subject: 'Science', minutes: 30, standards: '7.PS1.1',
      blocks: [
        { type: 'build', title: 'Build the molecules', minutes: 15, steps: '<ol><li>Grab toothpicks plus anything round in two or three colors — marshmallows, gumdrops, grapes, balled-up foil. Pick one color per element.</li><li>Build <b>water (H₂O)</b>: one oxygen, two hydrogens attached to it in a wide V.</li><li>Build <b>carbon dioxide (CO₂)</b>: one carbon in the middle, an oxygen on each side, in a straight line.</li><li>Now build a chunk of <b>salt</b>: alternate two colors in a 3-D cube grid, like a checkerboard with layers — no "molecule," just a repeating pattern that could go on forever.</li></ol>', photo: true, photoLabel: 'Snap a photo of your molecule models and paste the link (optional):' },
        { type: 'answers', prompts: [
          'How is your salt model fundamentally different from your water model?',
          'If you pulled one hydrogen off your water molecule, would it still be water? Why or why not?',
        ] },
        { type: 'quiz', questions: [
          { q: 'A pure substance made of only one kind of atom is…', options: ['A compound', 'An element', 'A molecule', 'A mixture'], answer: 1 },
          { q: 'Table salt (sodium + chlorine) tastes nothing like its ingredients because…', options: ['The ingredients cancel out', 'Compounds have their own new properties', 'Chlorine evaporates away', 'Sodium is naturally salty'], answer: 1 },
          { q: 'Metals bend instead of shattering because their atoms are…', options: ['Softer than other atoms', 'Packed in layers that can slide', 'Full of air pockets', 'Constantly melting'], answer: 1 },
          { q: 'About how many natural elements make up everything on Earth?', options: ['12', '90', '1,000', 'Millions'], answer: 1 },
        ] },
        { type: 'next', text: 'Next: what heat actually does to stuff — and why that unlocked everything.' },
      ],
    },
    {
      id: 'states-a', n: 4, title: 'What Heat Does: Particle Motion & States', subject: 'Science', minutes: 30, standards: '7.PS1.4',
      blocks: [
        { type: 'hook', text: 'Steel is a liquid. So is rock, and so is glass — just not at the temperature of your house. Every solid on Earth has a temperature where it gives up and flows, and every liquid has one where it locks into place. The entire Bronze Age came down to one skill: getting a fire hot enough to cross that line for metal — and knowing what to do in the seconds before it crossed back.' },
        { type: 'learn', title: 'Learn what heat does — your way', note: 'Watch it or read it, whichever you\'ll get more out of today.', options: [
          { kind: 'video', label: 'Watch it', title: 'States of matter & particle motion', url: 'https://www.youtube.com/results?search_query=states+of+matter+particle+motion+middle+school', focus: 'Watch the particles, not the substance — the whole story is how fast they\'re jiggling.' },
          { kind: 'read', label: 'Read it', title: 'It\'s all about the jiggling', source: 'reading', body: '<p>Every atom and molecule in every substance is vibrating, all the time. Temperature is just the <em>speed</em> of that jiggling.</p><ul><li>In a <b>solid</b>, particles are locked in formation, vibrating in place — that\'s why solids hold their shape.</li><li>Add heat (thermal energy) and they jiggle harder, until they break formation and start sliding past each other: the solid <b>melts</b> into a liquid.</li><li>Keep adding heat and particles fly off entirely: <b>evaporation</b> into a gas.</li><li>Pull heat back out and the whole thing runs in reverse — gas condenses, liquid freezes solid again.</li></ul><p>Here\'s the crucial part for this unit: melting is a <b>physical change</b>. The particles rearrange, but they\'re still the same particles — melt copper and cool it, and you\'ve still got copper, just in a new shape. That one fact is why casting metal in molds works at all. What it is <em>not</em> is a chemical reaction. That comes next, and it\'s a much stranger kind of change.</p>' },
        ] },
        { type: 'answers', prompts: [
          'What actually happens to the particles when a solid melts?',
          'Why does melting copper and pouring it into a sword mold still give you copper — not some new substance?',
        ] },
        { type: 'next', text: 'Next: watch particle speed with your own eyes, in your kitchen.' },
      ],
    },
    {
      id: 'states-b', n: 5, title: 'What Heat Does: See the Jiggling', subject: 'Science', minutes: 30, standards: '7.PS1.4',
      blocks: [
        { type: 'build', title: 'See the jiggling', minutes: 15, steps: '<ol><li>Fill one clear glass with <b>hot</b> tap water and one with <b>ice-cold</b> water. Let them sit still for a minute.</li><li>Drop <b>one drop of food coloring</b> into each at the same moment. Do not stir.</li><li>Watch. The color spreads through the hot water dramatically faster — you are literally watching faster particles knock the dye around.</li><li>Bonus round: set a chocolate chip, a pat of butter, and an ice cube on a plate on the counter. Which melts first? Each substance has its own melting point — that\'s a <b>property</b>.</li></ol>', photo: true, photoLabel: 'Photo of your two glasses mid-spread (optional):' },
        { type: 'answers', prompts: [
          'Explain what you saw in particle terms: why did the color spread faster in the hot glass?',
          'Chocolate, butter, and ice all melt at different temperatures. Why is a melting point useful for telling substances apart?',
        ] },
        { type: 'quiz', questions: [
          { q: 'Temperature is really a measure of…', options: ['How big particles are', 'How fast particles are moving', 'How many particles there are', 'How heavy particles are'], answer: 1 },
          { q: 'When a solid melts, the particles…', options: ['Turn into new particles', 'Break formation and slide past each other', 'Disappear', 'Stop moving'], answer: 1 },
          { q: 'Melting copper and re-cooling it gives you…', options: ['A brand-new substance', 'Copper, reshaped — a physical change', 'Bronze', 'Copper oxide'], answer: 1 },
        ] },
        { type: 'next', text: 'Now the strange kind of change — when stuff actually becomes different stuff.' },
      ],
    },

    /* ───────────────── PHASE 2 · CHANGING STUFF ───────────────── */
    {
      id: 'react-a', n: 6, title: 'Chemical Reactions: When Stuff Becomes New Stuff', subject: 'Science', minutes: 35, standards: '7.PS1.2',
      blocks: [
        { type: 'hook', text: 'Burn a big log and you\'re left with a handful of ash. So… where did the log <em>go</em>? It didn\'t vanish — almost the whole thing left as invisible gas and water vapor. A fire is your log\'s atoms trading partners with oxygen from the air and flying away as something new. That kind of change — where the stuff itself becomes different stuff — is a <b>chemical reaction</b>, and learning to command it is the most powerful trick our species ever pulled.' },
        { type: 'read', title: 'When stuff becomes different stuff', source: 'read', body: '<p>A <b>chemical reaction</b> takes starting substances — the <b>reactants</b> — and rearranges their atoms into new substances — the <b>products</b> — with brand-new <b>properties</b>. Melting didn\'t do that; the copper stayed copper. In a reaction, the identity itself changes.</p><p>How do you know one happened? Look for the evidence:</p><ul><li>Something <b>new</b> shows up with different properties — shiny iron turns to crumbly orange rust.</li><li><b>Gas</b> bubbles out of something that wasn\'t boiling.</li><li>The <b>color</b> changes through and through, or a solid appears in a clear liquid.</li><li><b>Temperature</b> changes on its own — reactions can release heat (fire, hand-warmers) or drink it in (cold packs).</li></ul><p>One more thing to sit with: rust isn\'t iron "decaying." It\'s iron <em>bonding with oxygen</em> from the air — a slow, quiet fire. The same reaction that burns a log is what eats a sword.</p>' },
        { type: 'answers', prompts: [
          'What\'s the difference between melting copper (physical change) and rusting iron (chemical reaction)? Be precise about what happens to the atoms.',
          'List the four kinds of evidence that a chemical reaction happened.',
          'A campfire and a rusting nail are secretly the same reaction. Explain.',
        ] },
        { type: 'deeper', text: 'Hand-warmers are literally iron rusting fast in a pouch — the reaction releases heat on purpose. Look up how a disposable hand-warmer works, and what "exothermic" means.' },
        { type: 'next', text: 'Next: prove that atoms never disappear — with a kitchen scale.' },
      ],
    },
    {
      id: 'react-b', n: 7, title: 'Chemical Reactions: The Sealed-Bag Test', subject: 'Science', minutes: 35, standards: '7.PS1.5',
      blocks: [
        { type: 'hook', text: 'Here is one of the deepest laws in all of science, and you can prove it with a sandwich bag: in a chemical reaction, <b>atoms are never created and never destroyed</b>. They only rearrange. Weigh everything before, weigh everything after — always, always the same. It\'s called the conservation of mass, and once you believe it, "where did the log go?" stops being a mystery.' },
        { type: 'build', title: 'The sealed-bag reaction', minutes: 20, steps: '<ol><li>Put 2 spoonfuls of <b>baking soda</b> in a zip-top bag. Stand a small open cup with a few spoonfuls of <b>vinegar</b> upright inside the bag, then seal the bag with air squeezed out.</li><li>Weigh the whole sealed bag on a kitchen scale. Write the number down.</li><li>Tip the cup over <em>inside the sealed bag</em>. Fizz, inflation, drama — a gas (CO₂) is being produced.</li><li>Weigh it again, still sealed. <b>Same mass.</b> New substances, same atoms.</li><li>Now open the bag, let the gas out, and weigh once more. Lighter — and now you know exactly what left and where it went.</li></ol>', photo: true, photoLabel: 'Photo of your before/after scale readings (optional):' },
        { type: 'answers', prompts: [
          'The bag inflated but the mass didn\'t change. Explain why, using the word "atoms."',
          'A rusted anchor weighs MORE than it did new. Where did the extra mass come from?',
        ] },
        { type: 'matching', title: 'Word match #1', note: 'Lock in the chemistry words. Tap a word, then its meaning.', set: ['element', 'compound', 'property', 'chemical reaction', 'reactant', 'product'] },
        { type: 'quiz', questions: [
          { q: 'In a chemical reaction, atoms are…', options: ['Created as needed', 'Destroyed and replaced', 'Rearranged, never created or destroyed', 'Melted'], answer: 2 },
          { q: 'The substances you start a reaction with are the…', options: ['Products', 'Reactants', 'Properties', 'Elements'], answer: 1 },
          { q: 'Your sealed bag fizzed and inflated but weighed the same. That demonstrates…', options: ['Evaporation', 'Conservation of mass', 'Melting', 'Condensation'], answer: 1 },
          { q: 'Which is a chemical reaction?', options: ['Ice melting', 'Copper being hammered flat', 'Iron rusting', 'Sugar dissolving in tea'], answer: 2 },
        ] },
        { type: 'next', text: 'Now take everything you just learned and aim it at a rock. History is about to start.' },
      ],
    },
    {
      id: 'smelt', n: 8, title: 'From Rock to Metal', subject: 'Science · Humanities', minutes: 45, standards: '7.PS1.2 · 7.H.CH.3',
      blocks: [
        { type: 'hook', text: 'About 7,000 years ago, somewhere in the Middle East, a potter\'s kiln got hotter than usual — and a greenish rock inside it <em>bled shiny metal</em>. Whoever raked those ashes found beads of pure copper and became one of the most important humans who ever lived. They had just run humanity\'s first industrial chemical reaction. They had learned to make a rock give up its metal.' },
        { type: 'read', title: 'Smelting: fire as a chemical weapon', source: 'read', body: '<p>Most metal on Earth doesn\'t sit around pure. It\'s locked in <b>ore</b> — rock where the metal atoms are bonded to oxygen or sulfur as a compound. Malachite, that greenish rock, is a copper compound. You can\'t hammer the copper out. You have to <em>chemically un-bond it</em>.</p><p>That\'s <b>smelting</b>: cook the ore with charcoal in a hot enough fire, and the carbon in the charcoal <em>steals the oxygen away</em> from the metal. Reactants in: ore + charcoal. Products out: pure metal + CO₂ gas. It\'s the sealed-bag reaction\'s big violent cousin, and every sword, plow, coin, and crown in the ancient world came out of it.</p><p>But early copper had a problem: it\'s <b>soft</b>. A copper blade bends on a shield. Then — probably by lucky accident with mixed ore — smiths discovered that melting copper with a little <b>tin</b> (about one part in ten) makes <b>bronze</b>: harder than either ingredient, holds an edge, casts beautifully. Bronze is an <b>alloy</b> — the first material humans ever <em>engineered on purpose</em>. It was such a big deal that we named a thousand years of history after it.</p>' },
        { type: 'frayer', title: 'Three big ideas, up close', note: 'These three carry the whole unit. Study each card.' },
        { type: 'answers', prompts: [
          'Explain smelting as a chemical reaction: what are the reactants, what are the products, and what does the charcoal actually do?',
          'Copper is soft and tin is brittle, but bronze is hard. What does that tell you about alloys?',
          'Why do you think historians named an entire age after bronze?',
        ] },
        { type: 'quiz', questions: [
          { q: 'Ore is…', options: ['Pure metal in the ground', 'Rock with metal chemically locked inside', 'Any heavy rock', 'Melted stone'], answer: 1 },
          { q: 'In smelting, the charcoal\'s job is to…', options: ['Just add heat', 'Steal the oxygen away from the metal', 'Melt into the metal', 'Color the metal'], answer: 1 },
          { q: 'Bronze is…', options: ['An element', 'A pure metal', 'An alloy of copper and tin', 'A kind of ore'], answer: 2 },
        ] },
        { type: 'next', text: 'Next: pick a material and tell its life story.' },
      ],
    },
    {
      id: 'biomat-a', n: 9, title: 'Biography of a Material: Gather Your Facts', subject: 'Science · Humanities · ELA', minutes: 35, standards: '7.W.7 · 7.E.ST.10',
      blocks: [
        { type: 'prose', body: '<p>Time for the project. You\'re going to write the <b>biography of a material</b> — treat a substance like a famous person and tell its life story: where it comes from, the chemistry that creates it, and how it changed who had power in the world. First, pick your subject and gather the facts. You\'ll build the final piece in the next card.</p><p>Pick one:</p><ul><li><b>Bronze</b> — the alloy that armed the first empires</li><li><b>Iron / steel</b> — the metal that made armies huge</li><li><b>Concrete</b> — the stone you can pour, secret of Rome</li><li><b>Gunpowder</b> — the chemical reaction that ended castles</li><li><b>Paper</b> — the material that carried every idea</li><li><b>Lithium</b> — the metal your ebike runs on (sneak preview of card 14)</li></ul>' },
        { type: 'answers', prompts: [
          'Which material are you doing, and what already makes it interesting to you?',
        ] },
        { type: 'read', title: 'Gather your facts', source: 'materials that changed the world', url: 'reader.html?doc=materials', body: '<p>Open the reading on materials that changed the world to get started, then collect notes on these five things. Jot them below as you go — you\'ll turn them into the real thing next time.</p>' },
        { type: 'answers', prompts: [
          'THE RECIPE: what is it made of, and what reaction or process creates it?',
          'THE BIRTHPLACE: where do its raw ingredients come from? Who had them, and who didn\'t?',
          'THE POWERS: what could people suddenly DO once they had it?',
          'THE THRONE: who controlled it, and what did controlling it win them?',
          'ONE AMAZING THING: a fact about it that blows your mind.',
        ] },
        { type: 'next', text: 'Next: build the biography.' },
      ],
    },
    {
      id: 'biomat-b', n: 10, title: 'Biography of a Material: Build It', subject: 'ELA · Humanities', minutes: 45, standards: '7.W.2 · 7.SL.4',
      blocks: [
        { type: 'build', title: 'Build the biography', minutes: 40, steps: '<p>Turn your notes into a <b>Canva presentation</b> (or a poster, or an illustrated write-up) with a slide or section for each: the recipe, the birthplace, the powers, the throne, and your one amazing thing. Tell it like a life story — your material should feel like the main character. <a href="https://www.canva.com/create/presentations/" target="_blank" rel="noopener" class="choice-link">Open Canva ↗</a></p><p>Checklist before you call it done: clear title · all five parts covered · at least one image · it names the actual chemistry (the reaction or process) · it answers "who got power from this?"</p>', photo: true, photoLabel: 'Paste the link to your finished biography:' },
        { type: 'answers', prompts: [
          'In one sentence: how did your material change who had power?',
        ] },
        { type: 'next', text: 'Next: the weirdest supply-chain crisis of the ancient world — the tin problem.' },
      ],
    },

    /* ───────────────── PHASE 3 · POWER ───────────────── */
    {
      id: 'tin', n: 11, title: 'The Tin Problem', subject: 'Humanities', minutes: 35, standards: '7.E.ST.10 · 7.G.HI.4 · 7.C.PI.1',
      blocks: [
        { type: 'hook', text: 'In 1982, a sponge diver off the coast of Turkey found a shipwreck 3,300 years old. Inside: ten tons of copper ingots and one ton of tin — <em>exactly</em> the ten-to-one recipe for bronze, still waiting to be mixed. One ship, carrying enough bronze-to-be to equip a small army, sailing between kings. That wreck, the <b>Uluburun</b>, is the Bronze Age economy frozen in a single snapshot: the whole ancient world, chained to one recipe.' },
        { type: 'read', title: 'The recipe that ran the world', source: 'read', body: '<p>Here\'s the problem with bronze. Copper is reasonably common. But <b>tin is rare</b> — and it almost never occurs anywhere near copper. The tin in Mediterranean bronze came from as far away as Afghanistan and Cornwall, England — thousands of miles from the palaces that needed it.</p><p>Follow the dominoes, just like the river unit:</p><p><b>Bronze needs tin</b> → tin only exists in a few faraway places → kings must run <b>long-distance trade routes</b> to get it → whoever controls the routes and mines holds a <b>monopoly</b> → monopoly on bronze = monopoly on weapons → armies win land and demand <b>tribute</b> → tribute pays for more bronze. That loop, spinning for centuries, is how palace kingdoms became <b>empires</b>.</p><p>And notice who <em>couldn\'t</em> have bronze: ordinary people. A bronze sword cost a fortune. Bronze was the aristocrat\'s metal — power stayed narrow because the material was scarce. Hold that thought; iron is about to blow it wide open.</p><p>One more thing: around 1200 BCE the whole system <b>crashed</b>. Cities burned, trade routes snapped, and the tin stopped moving — historians call it the Bronze Age Collapse, and they still argue about what caused it. Every empire on the recipe went down together. That\'s the hidden weakness of depending on one faraway material.</p>' },
        { type: 'answers', prompts: [
          'Trace the chain in your own words: how does a rare metal end up creating empires?',
          'Why did bronze keep power in the hands of a few?',
          'The Bronze Age Collapse took down every kingdom on the network at once. What does that say about depending on one material with one supply line?',
        ] },
        { type: 'next', text: 'Next: why every ancient culture put a god at the anvil.' },
      ],
    },
    {
      id: 'forge-a', n: 12, title: 'The Forge in Story', subject: 'ELA', minutes: 40, standards: '7.RL.2 · 7.RL.9 · 7.W.3',
      blocks: [
        { type: 'hook', text: 'Nearly every ancient culture put a god at the anvil. The Greeks had Hephaestus, the Norse had dwarven master-smiths, West Africa had Ogun. Why does the blacksmith get a god? Because to everyone watching, smelting looked like sorcery: a man walks into fire with a rock and walks out with a blade. The smith was the one person in the village who could <em>transform matter</em> — and myths are how people explained power they couldn\'t understand.' },
        { type: 'read', title: 'Two forges: Hephaestus and Ogun', source: 'read', body: '<p><b>The Shield of Achilles</b> (Greece, from Homer\'s <em>Iliad</em>): when the hero Achilles loses his armor, his goddess mother goes to <b>Hephaestus</b>, the lame smith-god, who forges him a shield with the whole world hammered into it — cities at peace and war, harvests, dances, the ocean around the rim. Homer spends 130 lines just describing it. The message: a god-forged object is worth more than an army, and the maker at the forge holds power even the war-gods respect.</p><p><b>Ogun</b> (Yoruba, West Africa): the god of iron who cleared the first path through the wilderness with his machete — nothing civilized happens until Ogun cuts the way. Smiths, warriors, and today even drivers and surgeons are under his protection: anyone whose power comes through iron. In some tellings the other gods are helpless until Ogun agrees to forge their tools.</p><p>Two cultures, an ocean apart, same verdict: <b>the one who transforms matter transforms everything else.</b> Sound familiar? It should — it\'s this unit\'s essential question, answered in myth instead of chemistry.</p><p class="read-links">📄 Read the full stories: <a href="reader.html?doc=shield-of-achilles">The Shield of Achilles ↗</a> · <a href="reader.html?doc=ogun">Ogun, God of Iron ↗</a></p>' },
        { type: 'choice', title: 'Show what you know — your pick', note: 'Two forge gods, one idea: whoever transforms matter holds power. Make something of it — your call.', options: [
          { kind: 'write', label: 'Write a myth', input: 'text', prompt: 'Write your own forge myth — a short story explaining where a smith\'s power comes from, or how the first metal came into the world. Give it a character and a cost (myths always charge a price).' },
          { kind: 'write', label: 'Compare the two', input: 'text', prompt: 'Write a paragraph comparing Hephaestus and Ogun: how are they alike and different, and what does each say about how that culture saw the maker?' },
          { kind: 'record', label: 'Record it', input: 'link', prompt: 'Record yourself telling your own forge myth aloud like a storyteller, OR giving a 60-second compare-and-contrast of Hephaestus and Ogun. Paste the link.' },
        ] },
        { type: 'matching', title: 'Word match #2', note: 'Tap a word, then its meaning.', set: ['ore', 'smelting', 'alloy', 'empire', 'tribute', 'monopoly'] },
        { type: 'next', text: 'Next: the metal that broke the monopoly.' },
      ],
    },
    {
      id: 'iron', n: 13, title: 'Iron: The Metal for Everyone', subject: 'Humanities · Science', minutes: 45, standards: '7.H.CH.3 · 7.C.PI.1 · 7.PS1.2',
      blocks: [
        { type: 'hook', text: 'When the Bronze Age collapsed and the tin stopped coming, smiths were forced to work with a metal they\'d mostly ignored: iron. It was a harder puzzle — iron ore needs a hotter furnace and hours of hammering to drive the junk out. But it came with a world-changing catch: <b>iron ore is everywhere.</b> No thousand-mile supply line. No monopoly. Within a few centuries, the most closely guarded material on Earth was replaced by one any village could dig up — and history has never been the same shape since.' },
        { type: 'read', title: 'What happens when the weapon gets cheap', source: 'read', body: '<p>Bronze was rare, so power was narrow. Iron was <b>everywhere</b>, so power got wide — in two directions at once:</p><ul><li><b>Armies got huge.</b> A bronze-armed kingdom could equip its aristocrats. An iron-armed state could equip <em>everyone</em>. <b>Assyria</b> built the first true iron-age war machine — mass-produced iron weapons, siege engines, a professional army — and used it to build the largest empire the world had yet seen, funded by tribute from everyone it conquered.</li><li><b>Farms got bigger.</b> The quieter revolution: an <b>iron plow</b> bites into heavy soil that a wooden one bounces off. Iron axes cleared forests. More farmland → more surplus → more people. (Recognize that chain? It\'s the river unit\'s dominoes, restarted by a metal.)</li></ul><p>And the chemistry kept going. Smiths eventually learned that iron with a <em>pinch of carbon</em> absorbed from the charcoal becomes <b>steel</b> — the alloy trick again, and it\'s still the most-used metal on Earth. You are never more than a few feet from the Iron Age. It never ended.</p>' },
        { type: 'answers', prompts: [
          'Bronze made narrow power and iron made wide power. Explain what that means, using the words monopoly and empire.',
          'The iron plow never gets the glory the iron sword gets. Make the case that the plow mattered more.',
          'Start your argument (you\'ll finish it in the reflection): which single material in this unit changed ordinary people\'s lives the most? Stake your claim and give one reason.',
        ] },
        { type: 'quiz', questions: [
          { q: 'Iron ended the bronze monopoly mainly because…', options: ['It was shinier', 'Iron ore is found almost everywhere', 'It was easier to smelt', 'It never rusts'], answer: 1 },
          { q: 'Steel is…', options: ['A pure element', 'Iron with a little carbon — an alloy', 'Iron with tin', 'Polished iron'], answer: 1 },
          { q: 'Assyria\'s empire ran on…', options: ['Bronze aristocrats', 'Mass-produced iron weapons and tribute', 'Naval power', 'Gold mines'], answer: 1 },
        ] },
        { type: 'next', text: 'Last stop before the reflection: the Bronze Age happening right now, in your garage.' },
      ],
    },
    {
      id: 'lithium', n: 14, title: 'Our Material: Lithium', subject: 'Science · Humanities', minutes: 40, standards: '7.PS1.3 · 7.E.ST.10 · 7.G.HE.6',
      blocks: [
        { type: 'hook', text: 'There is a Bronze Age happening right now, and you own a piece of it. The material is <b>lithium</b> — the lightest metal there is — and it\'s in your ebike battery, your phone, and every electric car on the road. Nations are racing to lock up the supply, just like Bronze Age kings and their tin. Same story, new element. Except this time, one of the biggest deposits on Earth might be under <em>Oregon</em>.' },
        { type: 'read', title: 'The new tin', source: 'read', body: '<p>Your ebike battery is a chemical reaction with a pause button. Charge it, and electricity shoves <b>lithium ions</b> to one side of the cell — reactants loaded, energy stored. Ride, and the ions flow back, releasing that energy as electric current on demand. It\'s the campfire and the hand-warmer all over again — a reaction releasing energy — except this one is rechargeable and rides with you. Lithium gets the job because it\'s featherweight and eager to react: the most energy for the least weight. (It\'s also a <b>synthetic-materials</b> story — nobody digs up a battery; chemists build one out of processed natural resources, the same way ancient smiths turned ore into bronze.)</p><p>Now the geography, and see if it rhymes: lithium is only worth mining in a few places — salt-flat brines in Chile, Argentina, and Bolivia, and hard rock in Australia. A handful of countries and companies control most of it. Sound like the tin problem? It is the tin problem, with the same stakes: whoever controls the material controls what gets built.</p><p>The local twist: the <b>McDermitt Caldera</b>, an ancient collapsed supervolcano straddling the Oregon–Nevada line, may hold one of the largest lithium deposits ever found. But mining it means real costs — scarce desert water, wildlife habitat, and land that Native nations hold sacred; the fight over the Thacker Pass mine on the Nevada side went all the way to federal court. Every material in this unit had a price. This one\'s being argued about right now, a few hours from your house.</p>' },
        { type: 'choice', title: 'Show what you know — your pick', note: 'Lithium is the tin of our age. Bring it home — pick how to show it.', options: [
          { kind: 'write', label: 'Write it', input: 'text', prompt: 'Explain how lithium today "rhymes with" tin in the Bronze Age (at least two parallels). Then: a huge lithium deposit sits partly in Oregon — name two real benefits and two real costs of mining it, and say where you\'d draw the line and why.' },
          { kind: 'record', label: 'Record it', input: 'link', prompt: 'Record a 60–90 second take: is mining Oregon\'s lithium worth it? Argue a side using the tin-and-empire pattern from this unit. Paste the link.' },
          { kind: 'make', label: 'Make a set', input: 'link', prompt: 'Build a small Quizlet/flashcard set connecting this unit\'s power-materials (bronze, iron, tin, lithium) to who they gave power to. Paste the link.' },
        ] },
        { type: 'deeper', text: 'Battery engineers are racing to replace lithium with sodium — the explosive metal from your salt lesson, thousands of times more common. Look up "sodium-ion battery" and ask: if it works, what happens to the lithium monopoly?' },
        { type: 'next', text: 'Last stop: pull the whole unit together.' },
      ],
    },

    /* ───────────────── PHASE 4 · REFLECTION ───────────────── */
    {
      id: 'reflect-a', n: 15, title: 'Reflection: Look Back', subject: 'Portfolio', minutes: 35, standards: 'self-assessment',
      blocks: [
        { type: 'prose', body: '<p>You made it through the whole unit — from atoms you can\'t see to empires you can\'t miss. Before you write your final answer, look back at where you started and check what stuck.</p>' },
        { type: 'kwlback', prompt: 'Here is what you wrote on day one. Read it — you knew less than you think you did.' },
        { type: 'vocabsort', title: 'Which words do you own now?', note: 'Be honest. Tap each word: "got it cold" or "still fuzzy." The fuzzy ones are just your study list.' },
        { type: 'next', text: 'Last card: your big answer.' },
      ],
    },
    {
      id: 'reflect-b', n: 16, title: 'Reflection: Your Answer', subject: 'Portfolio', minutes: 40, standards: '7.W.1 · synthesis',
      blocks: [
        { type: 'prose', body: '<p>This is the whole unit in one place. Answer the essential question using what you learned — the chemistry, the history, a myth, and a material from your own life. Work in at least <b>five</b> of the unit words, and finish the argument you started in the iron lesson: which material changed ordinary people\'s lives the most, and why?</p><blockquote>How does changing what things are made of change who has power?</blockquote>' },
        { type: 'answers', prompts: [
          'Your answer to the big question (a few strong paragraphs — make a claim, back it with evidence, and use at least 5 unit words):',
        ] },
        { type: 'kwlfinish', prompt: 'Finish your KWL. Now that it\'s over:' },
        { type: 'rubric', title: 'Give yourself an honest check', items: [
          'I explained what chemical reactions are and how smelting is one.',
          'I explained how bronze and iron each reshaped who had power.',
          'I used evidence from science AND history AND a myth.',
          'I connected it to a material in my own life (lithium counts).',
          'I made a clear claim and backed it up — not just listed facts.',
          'I used at least five unit vocabulary words correctly.',
        ] },
        { type: 'done', text: 'That\'s the unit. Nice work — you can see everything you made on your reflection any time.' },
      ],
    },

  ],
});
