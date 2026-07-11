/**
 * unit-connected-world.js — Unit 4: A Connected World
 *
 * Interdisciplinary (Earth/life science + world history + ELA) self-paced unit.
 * 16 ordered cards; each a standalone session. Rendered by unit.js; progress
 * and answers save to localStorage. NO `track` field → teal theme.
 *
 * Do not add a top-level const/let/var (all unit-*.js share one global scope).
 */

window.HS_UNITS = window.HS_UNITS || [];
window.HS_UNITS.push({
  id: 'connected-world',
  short: 'Unit 4 · Connected World',
  title: 'A Connected World',
  eq: 'What really travels when strangers trade?',
  image: 'assets/units/connected-world.jpg',

  parent: {
    hotspots: [
      'He may think trade is only about <b>stuff</b> — silk, spices, gold. The whole point of this unit is that <b>ideas, technology, religions, and germs</b> travel the exact same roads. If he only lists goods, push him: "what else moved along that road?"',
      'The <b>"why trade at all"</b> logic (cards 2–3) is the economic engine of the unit and reuses the surplus→specialization chain from the rivers unit. If a place has salt but no silk, and another has silk but no salt, both come out ahead by trading. Make sure he can explain <i>why both sides win</i>, not just that they swap.',
      '<b>The Black Death is the hinge.</b> It\'s the clearest proof that connection has a cost — the same trade routes that carried silk carried the plague that killed a third of a continent. Don\'t let it become just a gross-out; the point is cause and effect (cards 9–10).',
      'Research writing (card 11–12) is the ELA target, and the trap is <b>copy-paste</b>. The skill is following ONE thing across the world <i>in his own words</i>, naming where each fact came from. If he can\'t say which source told him what, slow down.',
    ],
    activities: [
      { tier: 'Small', title: 'Where did your stuff come from?', detail: 'Do a kitchen or bedroom scavenger hunt: read the "Made in ___" labels and food origins on ten things. Pull up a world map and mark each one. Then ask the unit\'s question standing in his own room: what traveled to get here, and why here?', cost: 'Free', time: '30–45 min' },
      { tier: 'Medium', title: 'Follow a Rogue Valley pear', detail: 'Medford\'s pears (Harry & David, Bear Creek) ship all over the world. Visit an orchard, a packing operation, or even just the Harry & David store, and trace the route: valley orchard → packing house → truck/plane → someone\'s table in another country. Our valley is a node on a global trade map. Pairs with the "Our Valley Trades" card.', cost: 'Free–$', time: 'Half day' },
      { tier: 'Large', title: 'Map his ebike\'s supply chain', detail: 'Spend a day being a trade detective on one object he owns — ideally the ebike or a phone. Where was the lithium mined, the chips made, the frame welded, the whole thing assembled? Research each part, mark it on a world map, and add up the miles. A modern Silk Road, drawn for one machine.', cost: 'Free', time: 'Full day' },
    ],
  },

  vocab: {
    mustOwn: [
      { term: 'natural resource',   def: 'Something useful that comes from the Earth — water, metal, soil, oil, timber.' },
      { term: 'specialization',     def: 'Focusing on making one thing well, then trading for the rest.' },
      { term: 'supply and demand',  def: 'How much of a thing exists versus how much people want it — it sets the price.' },
      { term: 'trade route',        def: 'A regular path that goods, people, and ideas travel between places.' },
      { term: 'Silk Road',          def: 'The web of overland routes that linked China to the Mediterranean.' },
      { term: 'caravan',            def: 'A group traveling together — often with camels — for safety across long distances.' },
      { term: 'monsoon',            def: 'Seasonal winds that reverse direction, powering sailing across the Indian Ocean.' },
      { term: 'merchant',           def: 'A person whose job is buying and selling goods, often far from home.' },
      { term: 'import',             def: 'A good brought IN from somewhere else.' },
      { term: 'export',             def: 'A good sent OUT to somewhere else.' },
      { term: 'commodity',          def: 'A basic traded good, like salt, grain, or metal, that\'s the same wherever it comes from.' },
      { term: 'cultural diffusion', def: 'The spread of ideas, beliefs, and technology from one people to another.' },
      { term: 'interdependence',    def: 'When places rely on each other because no one has everything.' },
      { term: 'pandemic',           def: 'A disease outbreak that spreads across countries and continents.' },
    ],
    frayer: [
      {
        term: 'cultural diffusion',
        definition: 'The spread of ideas, beliefs, inventions, foods, and technologies from one group of people to another — usually carried along the same routes as trade goods.',
        examples: ['Buddhism spreading from India along the Silk Road', 'Paper-making moving from China to the Islamic world to Europe', 'The number system we use arriving from India via Arab merchants'],
        nonexamples: ['A group that invents something entirely on its own with no outside contact', 'Trading a bag of salt for a bag of grain (that\'s goods, not ideas)'],
        sentence: 'Cultural diffusion is why a religion born in India ended up carved into cliffs in China — it traveled the trade roads.',
      },
      {
        term: 'supply and demand',
        definition: 'The tug-of-war between how much of something exists (supply) and how badly people want it (demand); together they set the price.',
        examples: ['Pepper being worth its weight in silver because it grew in few places', 'A rare thing costing more than a common one', 'A flood of cheap goods dropping the price'],
        nonexamples: ['A price set by rolling dice', 'Everything costing the same no matter how rare'],
        sentence: 'Spices had huge demand and tiny supply, so a few peppercorns could make a merchant rich.',
      },
      {
        term: 'interdependence',
        definition: 'A relationship where separate places rely on one another because no single place has everything it needs — so each specializes and trades.',
        examples: ['A valley that grows pears but buys its steel', 'China wanting Mediterranean glass while Rome wanted Chinese silk', 'A phone built from materials on five continents'],
        nonexamples: ['A village that makes and grows everything it uses', 'A country that trades with no one'],
        sentence: 'Interdependence means your morning depends on people you\'ll never meet on the other side of the planet.',
      },
    ],
  },

  cards: [

    /* ───────────────── PHASE 1 · WHY TRADE ───────────────── */
    {
      id: 'launch', n: 1, title: 'Launch — Everything in your pocket came from everywhere',
      subject: 'Humanities · Science', minutes: 40, standards: '7.G.GR.1 · 7.E.ST.10',
      blocks: [
        { type: 'hook', text: 'Empty your pockets, or just look around your room. The phone in your hand holds metals from Africa, chips from Taiwan, lithium maybe from Australia or Nevada, glass, oil-based plastic, and labor from a dozen countries — assembled somewhere else entirely. <b>Not one person on Earth knows how to make it alone.</b> That web of strangers cooperating without ever meeting is one of the oldest and strangest things humans do. It started on foot and camelback thousands of years ago, and this unit follows it.' },
        { type: 'video', title: 'Why do humans trade?', url: 'https://www.youtube.com/results?search_query=history+of+trade+silk+road+explained', watch: true, focus: 'Watch for the idea that trade lets people have things their own land could never make.' },
        { type: 'prose', body: '<p>The question under this whole unit:</p><blockquote>What really travels when strangers trade?</blockquote><p>The obvious answer is "goods" — silk, salt, spices. But the surprising answer is <em>everything else that rides along</em>: inventions, religions, alphabets, foods, and — the dark side — diseases. By the end you\'ll follow one thing across the whole world yourself, and you\'ll see our own valley sitting on the modern version of these ancient roads.</p>' },
        { type: 'flashcards', title: 'Meet the words first', note: 'Tap a card to flip it. You\'ll meet all of these again inside the lessons — this is just a first handshake.' },
        { type: 'kwl', prompt: 'Before we start: what do you already know about the Silk Road or world trade? What do you want to find out? No wrong answers.' },
        { type: 'next', text: 'Next: the simple reason trade exists at all.' },
      ],
    },
    {
      id: 'why-a', n: 2, title: 'Why Trade at All? · A', subject: 'Science · Humanities', minutes: 30, standards: '7.ESS3.1',
      blocks: [
        { type: 'hook', text: 'The Earth is unfair on purpose — geologically. Tin is buried in only a few places. Salt sits where ancient seas dried up. Good farmland follows rivers and rainfall. Oil, copper, jade, and the soil for growing pepper all landed where the planet happened to put them, not where people happened to live. That uneven scattering of <b>natural resources</b> is the entire reason trade had to be invented.' },
        { type: 'read', title: 'Why resources are unevenly spread', source: 'clean reading', url: 'reader.html?doc=why-trade', body: '<p>Open the clean reading for the whole idea. The core of it:</p><ul><li>Geologic processes — volcanoes, plate collisions, dried-up seas, river deposits — put metals, minerals, and good soil in <b>specific places</b>, not everywhere.</li><li>So every society ends up with a <b>surplus</b> of some things and a <b>shortage</b> of others. (There\'s that word from the rivers unit again — surplus is still doing the work.)</li><li>The fix is <b>trade</b>: give away what you have too much of, get what you can\'t make. Both sides come out ahead.</li></ul>' },
        { type: 'answers', prompts: [
          'Why aren\'t resources like tin, salt, and jade spread evenly across the Earth? (Think back to the deep-time unit.)',
          'How does having a surplus of one thing and a shortage of another push people toward trade?',
        ] },
        { type: 'deeper', text: 'Look up "salt" in history — why was a common white mineral once so valuable that soldiers were sometimes paid in it? (The word "salary" comes from it.)' },
        { type: 'next', text: 'Next: the surprising math that makes BOTH sides win.' },
      ],
    },
    {
      id: 'why-b', n: 3, title: 'Why Trade at All? · B', subject: 'Humanities', minutes: 35, standards: '7.E.ST.10 · 7.E.ST.11',
      blocks: [
        { type: 'hook', text: 'Here\'s the part that feels like a trick but isn\'t: in a fair trade, <b>both</b> sides end up richer, even though no new stuff was created. How? Because value isn\'t fixed — a barrel of salt is worth little where salt is everywhere and a fortune where there is none. Move it, and you\'ve created value out of nothing but distance.' },
        { type: 'read', title: 'Specialization, and why both sides win', source: 'read', body: '<p>Say your valley grows amazing grain but has no metal. Over the mountains, a town mines copper but can barely grow food. If you each try to do everything, you both struggle. But if you <b>specialize</b> — you grow extra grain, they mine extra copper — and then trade, you both end up with grain <em>and</em> copper. Neither of you made anything new; you just each did what your land is good at and swapped the surplus.</p><p>This is why <b>supply and demand</b> sets prices: a thing that\'s rare where you are but common where it\'s made carries a huge markup for whoever moves it. That gap is exactly where <b>merchants</b> live — and it\'s worth risking a two-year journey across a desert for.</p>' },
        { type: 'frayer', title: 'Lock in the big ideas', note: 'These three carry the unit. Study each card.' },
        { type: 'answers', prompts: [
          'Explain in your own words how two towns can BOTH get richer by trading, without anyone making new stuff.',
          'Why would a merchant risk a dangerous two-year trip to carry pepper or silk? (Use the words supply and demand.)',
        ] },
        { type: 'quiz', questions: [
          { q: 'Natural resources are spread unevenly across Earth mainly because of…', options: ['Geologic processes', 'Government rules', 'Random luck each year', 'Trade routes'], answer: 0 },
          { q: 'When each place makes what its land is best at and trades for the rest, that\'s…', options: ['A shortage', 'Specialization', 'A pandemic', 'A caravan'], answer: 1 },
          { q: 'A spice that\'s rare where you live but common where it grows will usually be…', options: ['Cheap everywhere', 'Expensive where it\'s rare', 'Free', 'Worthless'], answer: 1 },
          { q: 'When places rely on each other because no one has everything, that\'s…', options: ['Independence', 'Interdependence', 'Isolation', 'A monopoly'], answer: 1 },
        ] },
        { type: 'next', text: 'Next: the most famous trade route in history opens.' },
      ],
    },

    /* ───────────────── PHASE 2 · THE ROADS ───────────────── */
    {
      id: 'silk-a', n: 4, title: 'The Silk Road · A', subject: 'Humanities', minutes: 35, standards: '7.G.MM.3 · 7.H.CC.4',
      blocks: [
        { type: 'hook', text: 'The Silk Road wasn\'t a road, and it wasn\'t mostly about silk. It was a 4,000-mile web of dusty tracks, mountain passes, and oasis towns linking China to the Mediterranean — and almost no single trader traveled the whole thing. Goods were passed hand to hand, town to town, like a bucket brigade across half the world. A bolt of silk might take years and a hundred owners to reach Rome.' },
        { type: 'learn', title: 'Learn the Silk Road — your way', note: 'Watch it or read it, whichever you\'ll get more out of today.', options: [
          { kind: 'video', label: 'Watch it', title: 'The Silk Road explained', url: 'https://www.youtube.com/results?search_query=silk+road+history+explained+goods+ideas', focus: 'Watch for the oasis towns and caravans — the road was really a chain of short trips.' },
          { kind: 'read', label: 'Read it', title: 'The road that wasn\'t a road', source: 'clean reading', url: 'reader.html?doc=silk-road', body: '<p>Open the clean reading for the full story. Hold onto these:</p><ul><li>It ran roughly from Chang\'an (China) across Central Asia to the Mediterranean, active for over 1,500 years.</li><li>Travel was by <b>caravan</b> — camels crossing deserts between <b>oasis towns</b> that grew rich hosting, feeding, and taxing the traders.</li><li><b>China</b> sent silk, paper, and porcelain west; the west sent gold, glass, wool, and horses east. Each side thought the other\'s goods were magical.</li></ul>' },
        ] },
        { type: 'answers', prompts: [
          'Why is it misleading to picture the Silk Road as one road that traders drove end to end?',
          'How did the oasis towns in the middle get rich without making silk or glass themselves?',
        ] },
        { type: 'next', text: 'Next: map the road and everything that moved on it.' },
      ],
    },
    {
      id: 'silk-b', n: 5, title: 'The Silk Road · B', subject: 'Humanities', minutes: 35, standards: '7.G.MM.3 · 7.H.CH.3',
      blocks: [
        { type: 'build', title: 'Map the Silk Road', minutes: 20, steps: '<p>Draw (or build in Canva) a rough map from China to the Mediterranean. Mark a few oasis towns along the way. Then, with two colors of arrows, show what traveled <b>west</b> (silk, paper, porcelain, gunpowder later) and what traveled <b>east</b> (gold, glass, horses, wool). Add one more color for things that weren\'t goods at all — religions, inventions, and, later, disease.</p>', photo: true, photoLabel: 'Link or photo of your map (optional):' },
        { type: 'matching', title: 'Word match #1', note: 'Lock in the trade words. Tap a word, then its meaning.', set: ['natural resource', 'specialization', 'caravan', 'trade route', 'commodity', 'merchant'] },
        { type: 'answers', prompts: [
          'Look at your third color — the non-goods. Why is it a big deal that IDEAS traveled the same road as silk?',
        ] },
        { type: 'quiz', questions: [
          { q: 'Most Silk Road goods traveled by…', options: ['One trader going the whole way', 'Being passed town to town in stages', 'Ship only', 'Airplane'], answer: 1 },
          { q: 'China\'s most famous export west was…', options: ['Glass', 'Silk', 'Wool', 'Horses'], answer: 1 },
          { q: 'Oasis towns in the middle grew rich by…', options: ['Making silk', 'Hosting and taxing the caravans', 'Farming the desert', 'Mining gold'], answer: 1 },
        ] },
        { type: 'next', text: 'Next: the bigger, wetter network — the Indian Ocean.' },
      ],
    },
    {
      id: 'ocean-a', n: 6, title: 'The Indian Ocean World · A', subject: 'Humanities · Science', minutes: 35, standards: '7.G.GR.1 · 7.H.CC.5',
      blocks: [
        { type: 'hook', text: 'While camels crawled across the deserts, an even bigger trade network was running on wind. Twice a year the <b>monsoon</b> winds over the Indian Ocean completely reverse direction — blow you toward India for half the year, then home again the other half. Sailors who learned that rhythm could cross an ocean and back like clockwork, carrying far more cargo than any camel. The Indian Ocean was the busiest highway on Earth for a thousand years.' },
        { type: 'read', title: 'Trading on the monsoon', source: 'clean reading', url: 'reader.html?doc=indian-ocean', body: '<p>Open the clean reading for the whole picture. The key ideas:</p><ul><li>The <b>monsoon</b> is a giant seasonal wind that flips direction with the seasons — a free, predictable engine for sailing ships.</li><li>It linked East Africa, Arabia, India, Southeast Asia, and China into one connected world of <b>port cities</b>, centuries before Europeans arrived.</li><li>Ships carried bulk goods camels never could — timber, grain, pottery, and enslaved people, alongside spices, cloth, and gold.</li></ul>' },
        { type: 'answers', prompts: [
          'How did the monsoon winds make long-distance sailing predictable instead of a gamble?',
          'Why could a ship move types of cargo that a camel caravan never could?',
        ] },
        { type: 'next', text: 'Next: step inside one of these port cities.' },
      ],
    },
    {
      id: 'ocean-b', n: 7, title: 'The Indian Ocean World · B', subject: 'Humanities · ELA', minutes: 40, standards: '7.H.CC.5 · 7.RI.1',
      blocks: [
        { type: 'hook', text: 'Imagine a market where you hear ten languages before breakfast, where an African gold trader, an Arab shipowner, an Indian weaver, and a Chinese porcelain merchant all haggle in the same square. That was a Swahili coast port like Kilwa, or an Indian port like Calicut — cities that existed <em>because</em> the world came to them. A traveler named Ibn Battuta wandered this whole world in the 1300s and wrote down what he saw.' },
        { type: 'read', title: 'Ibn Battuta sees the trading world', source: 'primary source', url: 'reader.html?doc=ibn-battuta', body: '<p>Ibn Battuta was a young scholar from Morocco who set out on one pilgrimage and ended up traveling for nearly 30 years — across Africa, Arabia, India, and China — farther than Marco Polo. His book, the <em>Rihla</em>, is one of history\'s great eyewitness records of the connected world. Open the reading for his descriptions of the rich port cities, the goods, and the mix of peoples. As you read, remember: this is a <b>primary source</b>, one man\'s testimony — powerful, but also just his point of view.</p>' },
        { type: 'answers', prompts: [
          'From the reading, what surprised Ibn Battuta most about the places he visited?',
          'Ibn Battuta\'s account is a primary source — an eyewitness. What\'s the strength of that, and what\'s one reason to read it carefully rather than take every word as fact?',
        ] },
        { type: 'quiz', questions: [
          { q: 'The Indian Ocean trade ran on…', options: ['Rivers', 'Seasonal monsoon winds', 'Steam engines', 'Camels'], answer: 1 },
          { q: 'Port cities like Kilwa and Calicut were wealthy because…', options: ['They mined gold', 'The trading world met there', 'They grew silk', 'They were capitals'], answer: 1 },
          { q: 'Ibn Battuta\'s Rihla is valuable as a…', options: ['Novel', 'Primary-source eyewitness account', 'Government law', 'Modern textbook'], answer: 1 },
        ] },
        { type: 'next', text: 'Next: the biggest cargo of all — ideas.' },
      ],
    },
    {
      id: 'ideas', n: 8, title: 'Ideas on the Move', subject: 'Humanities · ELA', minutes: 40, standards: '7.H.CC.4 · 7.RI.3',
      blocks: [
        { type: 'hook', text: 'The most valuable thing that ever crossed the Silk Road weighed nothing. A religion born in India — Buddhism — walked the trade roads all the way to China and got carved into thousand-year-old cliff temples. The paper this idea traveled on was itself a Chinese invention that spread west the same way. The number you\'d write that year in came from India through Arab merchants. Trade routes were the internet of the ancient world.' },
        { type: 'read', title: 'How ideas rode the trade roads', source: 'read', body: '<p>This is <b>cultural diffusion</b> — the spread of beliefs, inventions, and knowledge from one people to another. Ride the roads and watch it happen:</p><ul><li><b>Religions</b> traveled with merchants and missionaries: Buddhism from India into Central Asia and China; later Islam across the Indian Ocean world; Christianity along Roman roads.</li><li><b>Technology</b> moved too: paper-making left China, reached the Islamic world, and centuries later hit Europe — where it eventually made the printing press possible.</li><li><b>Knowledge</b> pooled in trading hubs: the "Arabic" numerals you use every day were developed in India, spread by Arab scholars and merchants, and reached Europe through trade.</li></ul><p>Here\'s the pattern that matters for your own thinking: when people connect, ideas <em>combine</em>. Almost nothing is invented from scratch. It\'s remixed from things that traveled.</p>' },
        { type: 'choice', title: 'Show what you know — your pick', note: 'Ideas traveled the trade roads just like silk did. Show you get how — pick your way.', options: [
          { kind: 'write', label: 'Write it', input: 'text', prompt: 'Pick one idea, religion, or invention (Buddhism, paper, the number system…) and trace its journey across the world in your own words. Then answer: why does almost nothing get invented "from scratch"?' },
          { kind: 'record', label: 'Record it', input: 'link', prompt: 'Record a 60-second explainer: "How is a trade route like the internet — and how is it different?" Use one real example of an idea that traveled. Paste the link.' },
          { kind: 'make', label: 'Make a set', input: 'link', prompt: 'Build a small Quizlet/flashcard set matching three traveled ideas to where they started and where they ended up (e.g., paper — China → Europe). Paste the link.' },
        ] },
        { type: 'next', text: 'Next: the dark side of connection — something else that traveled.' },
      ],
    },

    /* ───────────────── PHASE 3 · THE COST OF CONNECTION ───────────────── */
    {
      id: 'plague-a', n: 9, title: 'When Germs Travel · A', subject: 'Science', minutes: 35, standards: '7.LS2.1',
      blocks: [
        { type: 'hook', text: 'In the 1300s, the same roads and ships that carried silk and ideas carried something invisible: a bacterium living in the guts of fleas riding on rats. When trade connected the world, it connected the world\'s germs too. The result, the Black Death, killed perhaps a third of everyone in Europe in a few years — one of the deadliest events in human history, delivered by the trade network itself.' },
        { type: 'learn', title: 'Learn how a disease rides a trade route', note: 'Your call — watch the chain or read it.', options: [
          { kind: 'video', label: 'Watch it', title: 'The science of the Black Death', url: 'https://www.youtube.com/results?search_query=black+death+plague+how+it+spread+science', focus: 'Watch for the chain: bacterium → flea → rat → ship → city. Trade is every link.' },
          { kind: 'read', label: 'Read it', title: 'How a disease rides a trade route', source: 'reading', body: '<p>The plague was caused by a bacterium (<em>Yersinia pestis</em>) that lived in fleas, which lived on rats, which lived on grain ships and in caravan cargo. Every piece of the trade network — the crowded ports, the food stores, the rats that followed the grain — was also a perfect highway for disease.</p><p>This is really an <b>ecosystem</b> story, straight out of life science: change one part of a system and the whole thing shifts. Connect distant populations that had never shared germs, and a disease one region had partly adapted to becomes a catastrophe somewhere with no resistance at all. More connection meant faster spread. The very thing that made the world rich made it vulnerable.</p>' },
        ] },
        { type: 'answers', prompts: [
          'Trace the chain that let the plague travel: bacterium → ? → ? → ? → city.',
          'Why did MORE trade and connection make the disease spread faster and farther?',
          'How is this an ecosystem story — how does changing one part of a system change the whole thing?',
        ] },
        { type: 'next', text: 'Next: what a pandemic does to history.' },
      ],
    },
    {
      id: 'plague-b', n: 10, title: 'When Germs Travel · B', subject: 'Humanities · ELA', minutes: 40, standards: '7.H.CH.3 · 7.RI.3',
      blocks: [
        { type: 'hook', text: 'A disaster that kills a third of the people should just be an ending. Instead, the Black Death rewrote the rules. With so many workers dead, the ones who survived suddenly had something they\'d never had: bargaining power. A plague, of all things, helped crack the rigid system that had frozen peasants in place for centuries.' },
        { type: 'read', title: 'How the plague reshaped the world', source: 'read', body: '<p>Before the plague, most of Europe ran on <b>feudalism</b>: peasants were bound to the land and to a lord, with little freedom and no leverage. Then a third of the workforce died in a few years.</p><p>Suddenly labor was scarce. Surviving workers could <b>demand</b> wages and better conditions — and if one lord said no, another would say yes. Wages rose. Old bonds loosened. It\'s <b>supply and demand</b> again, but the "commodity" is human labor: when workers became scarce, their value shot up.</p><p>The plague didn\'t cause all of this by itself, but it was a massive shove. Historians see it as one of the hinges between the medieval world and the modern one — proof that a single event carried by trade can bend the whole course of history.</p>' },
        { type: 'answers', prompts: [
          'Explain how a disease that KILLED so many people ended up giving surviving workers more power. (Use supply and demand.)',
          'This is a cause-and-effect chain: plague → ? → ? → the old system weakens. Fill it in.',
          'Connect it back to the essential question: the plague is proof that WHAT travels when strangers trade?',
        ] },
        { type: 'quiz', questions: [
          { q: 'The Black Death spread so fast mainly because of…', options: ['Bad weather', 'Trade routes and ships', 'Wars', 'Poor farming'], answer: 1 },
          { q: 'After the plague killed many workers, surviving workers could…', options: ['Demand higher wages', 'Do nothing', 'Only farm', 'Leave Earth'], answer: 0 },
          { q: 'The plague weakening feudalism shows that a single event can…', options: ['Change nothing', 'Bend the whole course of history', 'Only affect one town', 'Be forgotten instantly'], answer: 1 },
        ] },
        { type: 'next', text: 'Next: your turn — follow ONE thing across the whole world.' },
      ],
    },
    {
      id: 'research-a', n: 11, title: 'Follow One Thing · A', subject: 'ELA · Humanities', minutes: 40, standards: '7.W.7',
      blocks: [
        { type: 'prose', body: '<p>Time for the project — and it\'s the ELA heart of this unit: a real <b>research</b> piece. You\'re going to pick <b>one thing that traveled the world</b> and follow it, using several sources, in your own words. Not silk in general — one thing, traced.</p><p>Great choices: <b>paper</b>, <b>the number system</b>, <b>gunpowder</b>, <b>silk</b>, <b>pepper or another spice</b>, <b>tea</b>, <b>the horse</b>, <b>Buddhism</b>, <b>porcelain</b>, or a modern one like <b>the microchip</b> or <b>lithium</b> (tie it to the ebike). First pick it and gather your sources; you\'ll write it in the next card.</p>' },
        { type: 'answers', prompts: [
          'What one thing will you follow?',
          'What\'s your first guess about where it started and how far it traveled?',
        ] },
        { type: 'answers', prompts: [
          'SOURCE 1 — where did you look, and what\'s one fact it gave you?',
          'SOURCE 2 — a different source, and one fact from it.',
          'ORIGIN: where and roughly when does your thing start?',
          'THE JOURNEY: what routes or people carried it, and where did it end up?',
          'THE CHANGE: how did your thing change the places it reached?',
        ] },
        { type: 'deeper', text: 'Good research uses more than one source and notices when they DISAGREE. Did any two of your sources say different things? That\'s not a problem — that\'s the interesting part.' },
        { type: 'next', text: 'Next: write it up.' },
      ],
    },
    {
      id: 'research-b', n: 12, title: 'Follow One Thing · B', subject: 'ELA · Humanities', minutes: 45, standards: '7.W.7 · 7.RI.1',
      blocks: [
        { type: 'build', title: 'Write your research piece', minutes: 40, steps: '<p>Turn your notes into a short <b>research piece</b> — a few strong paragraphs, or a narrated Canva — that follows your one thing across the world. <a href="https://www.canva.com/create/presentations/" target="_blank" rel="noopener" class="choice-link">Open Canva ↗</a> if you want visuals and a map.</p><p>Checklist before you call it done: it\'s <b>in your own words</b> (no copy-paste) · it uses at least <b>two</b> sources · it traces origin → journey → impact · and it names <b>where your facts came from</b>. Open with the most surprising thing you found.</p>', photo: true, photoLabel: 'Paste the link to your finished piece (or write it in the box below):' },
        { type: 'answers', prompts: [
          'Your research piece (if you wrote it here rather than in Canva):',
          'Which of your sources did you trust most, and why?',
        ] },
        { type: 'next', text: 'Next: connection has winners and losers — the price of it all.' },
      ],
    },
    {
      id: 'price', n: 13, title: 'The Price of Connection', subject: 'Humanities · ELA', minutes: 35, standards: '7.E.MI.4',
      blocks: [
        { type: 'hook', text: 'Trade makes the whole world richer — and it never makes everyone richer <em>equally</em>. For every merchant who struck it rich on pepper, there were farmers who grew it for almost nothing, sailors who died at sea, and whole peoples who were raided or enslaved to feed the network. Connection is powerful and it is not free. A clear-eyed thinker holds both of those at once.' },
        { type: 'read', title: 'Winners, losers, and the honest ledger', source: 'read', body: '<p><b>Supply and demand</b> decides who profits. The person who <em>controls</em> a scarce, wanted good — the merchant who moves it, the ruler who taxes the road, the port that everyone must pass through — captures most of the value. The person who simply grows or digs it, at the far end of the chain, often gets the least.</p><p>And some cargo was human. The same Indian Ocean and, later, Atlantic routes that carried spices and gold also carried enslaved people. Trade spread food, medicine, and ideas that saved lives — and spread disease, conquest, and slavery that destroyed them. Both are true at once.</p><p>So the honest question isn\'t "is trade good or bad?" It\'s the sharper one: <b>who wins, who loses, and who decides?</b> That question works on the Silk Road and on your ebike\'s supply chain alike.</p>' },
        { type: 'answers', prompts: [
          'In a long trade chain, who tends to capture the most value, and who the least? Why?',
          'Name one clearly good thing and one clearly harmful thing that traveled the same trade routes.',
          'Rewrite the question "is trade good or bad?" into the sharper three-part question from the reading, and answer it about one trade you know.',
        ] },
        { type: 'quiz', questions: [
          { q: 'In a trade chain, the biggest profit usually goes to whoever…', options: ['Grows the raw good', 'Controls or moves the scarce good', 'Lives farthest away', 'Works the hardest'], answer: 1 },
          { q: 'The best question to ask about any trade is…', options: ['Is it good or bad?', 'Who wins, who loses, and who decides?', 'Is it fast?', 'Is it old?'], answer: 1 },
          { q: 'The trade routes carried…', options: ['Only good things', 'Only bad things', 'Both benefits and harms at once', 'Nothing important'], answer: 2 },
        ] },
        { type: 'next', text: 'Next: bring it home — our valley on the world map.' },
      ],
    },
    {
      id: 'local', n: 14, title: 'Our Valley Trades With the World', subject: 'Humanities · Science', minutes: 35, standards: '7.G.GR.1 · 7.E.ST.10',
      blocks: [
        { type: 'hook', text: 'The Rogue Valley isn\'t off the trade map — it\'s a node on it, exactly like an oasis town. The pears grown a few miles from your house get boxed and shipped to tables in Asia and Europe. The timber off these hills builds houses far away. And almost everything in your own home rode a modern Silk Road to get here.' },
        { type: 'read', title: 'The valley\'s imports and exports', source: 'read', body: '<p>Southern Oregon <b>exports</b> what its land and climate are good at: <b>pears</b> (Harry & David and Bear Creek ship Rogue Valley pears worldwide — a luxury <em>commodity</em>, just like Silk Road spices), <b>timber</b> and wood products, wine, and increasingly high-tech goods. It <b>imports</b> nearly everything else — cars, electronics, fuel, most manufactured goods.</p><p>Look at the pattern and it\'s the whole unit: the valley <b>specializes</b> in what it does best, trades for the rest, and sits <b>interdependent</b> with places it will never see. Your ebike is the clearest example — lithium, chips, aluminum, and rubber from four continents, assembled elsewhere, ridden here. It\'s a caravan\'s worth of trade rolled into one machine.</p>' },
        { type: 'choice', title: 'Show what you know — your pick', note: 'Put the Rogue Valley on the world trade map. Pick how to show it.', options: [
          { kind: 'draw', label: 'Map it', input: 'link', prompt: 'Make a map or diagram: trace one object in your house (or your ebike) back to where each of its materials came from. Count the places. Snap a photo and paste the link.' },
          { kind: 'write', label: 'Write it', input: 'text', prompt: 'Name one thing the Rogue Valley exports and one it imports, explain how the valley is like a Silk Road oasis town, and use the words specialization and interdependence.' },
          { kind: 'record', label: 'Record it', input: 'link', prompt: 'Record a short "trade detective" video following one Rogue Valley export (pears? timber?) out into the world, or one import back to its source. Paste the link.' },
        ] },
        { type: 'next', text: 'Last stop: pull the whole unit together.' },
      ],
    },

    /* ───────────────── PHASE 4 · REFLECTION ───────────────── */
    {
      id: 'reflect-a', n: 15, title: 'Reflection · A — Look Back', subject: 'Portfolio', minutes: 35, standards: 'self-assessment',
      blocks: [
        { type: 'prose', body: '<p>You followed trade from a camel caravan to your own ebike. Before your final write-up, look back at where you started and check what stuck.</p>' },
        { type: 'kwlback', prompt: 'Here\'s what you wrote on day one. Read it — you know a lot more about how the world connects now.' },
        { type: 'vocabsort', title: 'Which words do you own now?', note: 'Be honest. Tap each word: "got it cold" or "still fuzzy." The fuzzy ones are just your study list.' },
        { type: 'matching', title: 'Word match #2', note: 'One more pass on the words. Tap a word, then its meaning.', set: ['monsoon', 'import', 'export', 'cultural diffusion', 'interdependence', 'pandemic'] },
        { type: 'next', text: 'Last card: your big answer.' },
      ],
    },
    {
      id: 'reflect-b', n: 16, title: 'Reflection · B — Your Answer', subject: 'Portfolio', minutes: 40, standards: '7.W.7 · synthesis',
      blocks: [
        { type: 'prose', body: '<p>Here\'s the whole unit in one place. Answer the essential question using what you learned — the goods, the ideas, the germs, and your own valley. Back your points with real examples from the unit, and work in at least <b>five</b> unit words.</p><blockquote>What really travels when strangers trade?</blockquote>' },
        { type: 'answers', prompts: [
          'Your answer to the big question (a few strong paragraphs — use examples and at least 5 unit words):',
        ] },
        { type: 'kwlfinish', prompt: 'Finish your KWL. Now that it\'s over:' },
        { type: 'rubric', title: 'Give yourself an honest check', items: [
          'I can explain WHY trade exists (uneven resources, specialization, both sides win).',
          'I can describe the Silk Road and the Indian Ocean network and what moved on them.',
          'I explained that ideas, technology, and religions traveled the trade roads (cultural diffusion).',
          'I explained how the Black Death rode the trade network and reshaped history.',
          'I followed one thing across the world using more than one source, in my own words.',
          'I connected world trade to my own valley — and I used at least five unit words.',
        ] },
        { type: 'done', text: 'That\'s the unit. Nice work tracing the connected world — you can see everything you made on your reflection any time.' },
      ],
    },

  ],
});
