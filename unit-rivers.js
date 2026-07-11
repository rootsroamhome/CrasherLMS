/**
 * unit-rivers.js — Unit 1: Rivers & the Rise of Civilization
 *
 * A self-paced, progression-based interdisciplinary unit (science + world
 * history + ELA). 16 ordered cards; each is one standalone session. Content
 * is rendered by unit.js. Answers/quizzes/progress save to localStorage so
 * everything is contained in-app and flows into the final reflection.
 *
 * Block types the renderer understands:
 *   hook, video {yt|url}, read, answers {prompts[]}, build, quiz, flashcards,
 *   matching, frayer, kwl, reflection, prose, deeper, next
 */

window.HS_UNITS = window.HS_UNITS || [];
window.HS_UNITS.push({
  id: 'rivers',
  short: 'Unit 1 · Rivers',
  title: 'Rivers & the Rise of Civilization',
  eq: 'How do rivers shape the way people live — and how do people shape rivers back?',

  vocab: {
    mustOwn: [
      { term: 'water cycle',    def: 'The nonstop journey water takes between the ocean, the sky, and the land.' },
      { term: 'evaporation',    def: 'Water turning into vapor and rising into the air.' },
      { term: 'condensation',   def: 'Water vapor cooling back into liquid droplets — clouds.' },
      { term: 'precipitation',  def: 'Water falling from clouds: rain, snow, or hail.' },
      { term: 'groundwater',    def: 'Fresh water stored underground in soil and rock.' },
      { term: 'erosion',        def: 'The wearing away and carrying off of rock and soil by water, wind, or ice.' },
      { term: 'silt',           def: 'Fine, fertile soil a river drops when it floods.' },
      { term: 'floodplain',     def: 'Flat land beside a river that floods and gets richer each year.' },
      { term: 'watershed',      def: 'All the land whose water drains into one river or lake.' },
      { term: 'civilization',   def: 'A complex society with cities, government, and specialized jobs.' },
      { term: 'agriculture',    def: 'Growing food on purpose — farming.' },
      { term: 'surplus',        def: 'Extra food beyond what you need to survive.' },
      { term: 'specialization', def: 'When people focus on one specific job instead of doing everything.' },
      { term: 'irrigation',     def: 'Bringing river water to crops through channels or ditches.' },
      { term: 'city-state',     def: 'A city that runs itself like its own little country.' },
    ],
    frayer: [
      {
        term: 'hydrologic cycle',
        definition: 'The technical name for the water cycle — the continuous movement of water between ocean, atmosphere, and land, driven by the sun\'s energy and gravity.',
        examples: ['Rain filling a river', 'A puddle drying up in the sun', 'Snow melting into a mountain stream', 'Fog rising off a lake'],
        nonexamples: ['Water piped into your house (that\'s plumbing)', 'A pool filled from a hose', 'Water bottled at a factory'],
        sentence: 'The hydrologic cycle is why the same water can be ocean, cloud, and river all in the same year.',
      },
      {
        term: 'specialization',
        definition: 'When people focus on one kind of work instead of doing everything themselves — something only possible once farming makes extra food.',
        examples: ['A potter who only makes pots', 'A scribe who only keeps records', 'A soldier, a priest, a metalworker'],
        nonexamples: ['A lone farmer who grows food, builds his house, and makes his own tools', 'Everyone in a group doing the exact same job'],
        sentence: 'Once farming produced a surplus, people could specialize — that\'s how cities got scribes, priests, and metalworkers.',
      },
      {
        term: 'civilization',
        definition: 'A complex society with cities, a government, specialized jobs, social classes, and usually a writing system.',
        examples: ['Sumer / Mesopotamia', 'Ancient Egypt', 'The Indus Valley', 'Shang China'],
        nonexamples: ['A small band of hunter-gatherers', 'A single farming village with no cities or government'],
        sentence: 'A surplus of food is the seed; a civilization is what grows from it.',
      },
    ],
  },

  cards: [

    /* ───────────────── PHASE 1 · WATER & LAND ───────────────── */
    {
      id: 'launch', n: 1, title: 'Launch — Where would you build a city?',
      subject: 'Science · Humanities', minutes: 40, standards: 'MS-ESS3-1 · 7.G.GR.1',
      blocks: [
        { type: 'hook', text: 'Fill a gallon jug. That is every drop of water on Earth. Now pour off the oceans, the ice caps, and the water buried too deep to reach — and what you can actually drink is about <b>one tablespoon</b>. That tiny amount is always on the move, and for four billion years people have chased it. Almost every great city in history was built on the same thing: a river.' },
        { type: 'video', title: 'NASA — The Water Cycle', yt: '0_c0ZzZfC8c', focus: 'Watch how water never sits still — it is always going somewhere.' },
        { type: 'prose', body: '<p>This unit runs on one big question. Keep it in the back of your mind the whole way through:</p><blockquote>How do rivers shape the way people live — and how do people shape rivers back?</blockquote><p>Here is the first clue. If you put a map of the world\'s cities next to a map of its rivers, they line up almost perfectly. People cluster on water. By the end of this unit you will know exactly why — and what people did to the rivers in return.</p>' },
        { type: 'flashcards', title: 'Meet the words first', note: 'Tap a card to flip it. You will see all of these again inside the lessons — this is just a first handshake.' },
        { type: 'kwl', prompt: 'Before we dig in, get your own thoughts down. No wrong answers — this is just you.' },
        { type: 'next', text: 'Next: the water cycle, and why fresh water is so precious.' },
      ],
    },
    {
      id: 'cycle-a', n: 2, title: 'Water Cycle · A', subject: 'Science', minutes: 30, standards: 'MS-ESS2-4',
      blocks: [
        { type: 'hook', text: 'Every day, the sun lifts about a trillion tons of water off Earth\'s surface into the sky — no pumps, no wires, just sunlight. The water cycle is the biggest solar-powered machine on the planet, and it has run the same loop for four billion years. The rain on your window has been ocean, cloud, and river before — probably more than once.' },
        { type: 'video', title: 'NASA — Earth\'s Water Cycle', yt: 'c_M9qp3lwcU', focus: 'One thing to figure out: where does the water go, and what is pushing it?' },
        { type: 'read', title: 'The Water Cycle', source: 'clean reading', url: 'reader.html?doc=water-cycle', body: '<p>Open the clean reading for the full version. The short of it: the whole cycle is really just <b>two forces trading off</b>:</p><ul><li>The <b>sun</b> adds energy and lifts water up as vapor — <b>evaporation</b> from oceans and lakes, and <em>transpiration</em> breathed out by plants.</li><li>Up high it cools, and <b>condensation</b> turns that vapor into cloud droplets.</li><li><b>Gravity</b> takes over and pulls it back down as <b>precipitation</b> — rain, snow, hail.</li><li>It collects: some soaks in as <b>groundwater</b>, some runs downhill to rivers and back to the sea. Then the loop starts over.</li></ul>' },
        { type: 'answers', prompts: [
          'What lifts water up? What brings it back down?',
          'Two ways water gets into the air — one from oceans, one from plants. Name both.',
          'Almost none of Earth\'s water is drinkable and reachable. After this, where would you look for the fresh water people actually use?',
        ] },
        { type: 'deeper', text: 'Look up "residence time" — a water molecule might spend 9 days in the sky, or 10,000 years frozen in a glacier. Why the huge difference?' },
        { type: 'next', text: 'Next: build the whole cycle on your kitchen counter.' },
      ],
    },
    {
      id: 'cycle-b', n: 3, title: 'Water Cycle · B', subject: 'Science', minutes: 30, standards: 'MS-ESS2-4',
      blocks: [
        { type: 'build', title: 'Make it rain', minutes: 15, steps: '<ol><li>Pour <b>hot</b> water into a clear jar or glass until it is about a third full.</li><li>Rest a plate on top and pile a few <b>ice cubes</b> on the plate.</li><li>Watch for a couple of minutes. Warm vapor rises (evaporation), hits the cold plate and turns to droplets (condensation), and "rains" back down (precipitation).</li></ol>', photo: true, photoLabel: 'Snap a photo of your rain-in-a-jar and paste the link (optional):' },
        { type: 'answers', prompts: [
          'In your jar, which real part of the water cycle is the ice cube standing in for?',
          'Where is the "sun" in your model — what is supplying the energy?',
        ] },
        { type: 'quiz', questions: [
          { q: 'What supplies the energy that drives the water cycle?', options: ['The sun', 'Gravity', 'The wind', 'The ocean'], answer: 0 },
          { q: 'Condensation is water going from…', options: ['Liquid to gas', 'Gas to liquid', 'Solid to gas', 'Liquid to solid'], answer: 1 },
          { q: 'About how much of Earth\'s water is drinkable and reachable?', options: ['About half', 'About a quarter', 'Roughly 1% — a tablespoon per gallon', 'Almost all of it'], answer: 2 },
          { q: 'What force pulls precipitation back down to Earth?', options: ['Gravity', 'The sun', 'Evaporation', 'Magnetism'], answer: 0 },
        ] },
        { type: 'next', text: 'Next: watch that same water carve the land — and build the richest farmland on Earth.' },
      ],
    },
    {
      id: 'land-a', n: 4, title: 'Water Shapes Land · A', subject: 'Science', minutes: 30, standards: 'MS-ESS2-2 · MS-ESS2-1',
      blocks: [
        { type: 'hook', text: 'A river is a sculptor and a farmer at the same time. Moving water is soft, but given enough time it cuts through solid rock — the Grand Canyon is a mile deep because a river spent millions of years sawing downward. And everything it carves away, it carries downstream and drops somewhere else, building the flattest, richest farmland on the planet.' },
        { type: 'video', title: 'How rivers shape the land (erosion & deposition)', url: 'https://www.youtube.com/results?search_query=rivers+erosion+deposition+landforms+geography', watch: true, focus: 'Watch for two opposite jobs: carving (erosion) and dropping (deposition).' },
        { type: 'read', title: 'Erosion, deposition, and why floodplains are gold', source: 'read', body: '<p><b>Erosion</b> is the wearing-away: fast-moving water scrapes up rock and soil and carries it downstream as <em>sediment</em>. Where the water slows down — on a flat plain or where a river meets the sea — it drops that load. The finest, richest particles are called <b>silt</b>.</p><p>Every time a river floods, it spreads a fresh layer of silt across the flat land beside it. That land is the <b>floodplain</b>, and it is some of the most fertile soil on Earth — re-fertilized for free, every single year. Where a river fans out into the ocean it dumps so much sediment it builds new land: a <em>delta</em>.</p><p>Zoom out and every river is the drain for a huge area of land called its <b>watershed</b> — all the ground whose rain flows into that one river.</p>' },
        { type: 'answers', prompts: [
          'Explain the difference between erosion and deposition in your own words.',
          'Why is the land right next to a river (the floodplain) so good for farming?',
        ] },
        { type: 'next', text: 'Next: carve your own river in a tray and watch it happen.' },
      ],
    },
    {
      id: 'land-b', n: 5, title: 'Water Shapes Land · B', subject: 'Science', minutes: 35, standards: 'MS-ESS2-2',
      blocks: [
        { type: 'build', title: 'Build a river (stream table)', minutes: 25, steps: '<ol><li>Fill a baking pan or plastic tray with a few inches of <b>sand or soil</b>. Prop one end up on a book so it slopes.</li><li>Slowly pour water at the <b>high</b> end and watch it carve a channel down the slope — that is erosion.</li><li>Watch what happens at the <b>low</b> end: the water slows and drops its load, building a little fan of sediment. That is a delta forming.</li><li>Try pouring faster, then slower. Does the river carve differently?</li></ol>', photo: true, photoLabel: 'Photo of your stream table (optional):' },
        { type: 'answers', prompts: [
          'Where in your tray did erosion happen? Where did deposition happen?',
          'You just built a tiny delta. What real-world farmland does that fan of fine soil become?',
        ] },
        { type: 'quiz', questions: [
          { q: 'Fast-moving water mostly causes…', options: ['Deposition (dropping sediment)', 'Erosion (carving and carrying)', 'Evaporation', 'Nothing'], answer: 1 },
          { q: 'A river floods and leaves fine, fertile soil behind. That soil is called…', options: ['Silt', 'Sand', 'Gravel', 'Clay pipe'], answer: 0 },
          { q: 'All the land that drains into one river is its…', options: ['Delta', 'Floodplain', 'Watershed', 'Channel'], answer: 2 },
        ] },
        { type: 'next', text: 'Now the big turn: free, refreshed farmland every year. Who shows up?' },
      ],
    },

    /* ───────────────── PHASE 2 · PEOPLE & CIVILIZATION ───────────────── */
    {
      id: 'cities-a', n: 6, title: 'Floodplains → Cities · A', subject: 'Humanities · Science', minutes: 35, standards: '7.G.HI.4 · 7.H.CH.3 · MS-LS2-1',
      blocks: [
        { type: 'hook', text: 'Here is the most important chain reaction in human history. A river floods and lays down fresh silt. The floodplain grows so much food that, for the first time ever, a family can grow <b>more than it needs</b>. That extra food is called a surplus — and it changes everything.' },
        { type: 'read', title: 'The chain that built the first cities', source: 'read', body: '<p>Follow the dominoes:</p><p><b>Fertile floodplain</b> → so much food that farmers grow a <b>surplus</b> → not everyone has to farm anymore → freed-up people take <b>specialized</b> jobs (potters, priests, scribes, soldiers, metalworkers) → those specialists gather together → you get <b>cities</b>, a <b>government</b> to organize it all, and <b>writing</b> to keep track. That whole package is a <b>civilization</b>.</p><p>It happened independently in four river valleys: the <b>Tigris and Euphrates</b> (Mesopotamia), the <b>Nile</b> (Egypt), the <b>Indus</b> (Pakistan/India), and the <b>Huang He</b> or Yellow River (China). Same recipe, four different rivers. The river came first. The civilization grew out of it.</p>' },
        { type: 'frayer', title: 'Three big ideas, up close', note: 'These three carry the whole unit. Study each card.' },
        { type: 'answers', prompts: [
          'Explain the chain in your own words: how does a flooding river end up producing a city?',
          'Why couldn\'t you have scribes, priests, and metalworkers before farming made a surplus?',
        ] },
        { type: 'next', text: 'Next: draw the chain, then a word-match to lock in the vocab.' },
      ],
    },
    {
      id: 'cities-b', n: 7, title: 'Floodplains → Cities · B', subject: 'Humanities', minutes: 30, standards: '7.G.HI.4',
      blocks: [
        { type: 'build', title: 'Map the chain reaction', minutes: 15, steps: '<p>Make a concept map (draw it, or build it in Canva) that shows the chain from a river to a civilization. Use arrows. Every box should <em>cause</em> the next one. Start with <b>river floods → silt</b> and end with <b>civilization</b>. Include: surplus, specialization, cities, government, writing.</p>', photo: true, photoLabel: 'Link to your concept map (optional):' },
        { type: 'matching', title: 'Word match #1', note: 'Lock in the words from Phase 1 and 2. Tap a word, then its meaning.', set: ['water cycle', 'floodplain', 'silt', 'surplus', 'specialization', 'civilization'] },
        { type: 'answers', prompts: [
          'Which link in the chain do you think was the most important? Defend your pick.',
        ] },
        { type: 'next', text: 'Next: zoom in on one civilization up close — Mesopotamia.' },
      ],
    },
    {
      id: 'mesopotamia', n: 8, title: 'A Civilization Up Close: Mesopotamia', subject: 'Humanities · ELA', minutes: 45, standards: '7.H.CH.3 · 7.C.PI.1 · RI.7.1',
      blocks: [
        { type: 'hook', text: 'The very first writing was not poetry or history — it was receipts. In Mesopotamia, so much grain was moving around that people needed a way to keep track, so they pressed marks into clay with a reed. That system, <b>cuneiform</b>, started as accounting and ended up recording the oldest stories on Earth.' },
        { type: 'read', title: 'Mesopotamia: the land between the rivers', source: 'clean reading', url: 'reader.html?doc=mesopotamia', body: '<p>Read the clean version for the whole story. Hold these in your head:</p><ul><li>Cities like Uruk ran as <b>city-states</b> — each city was its own little country with its own ruler and god.</li><li>They dug <b>irrigation</b> canals to spread river water to fields farther from the banks — engineering their way to more surplus.</li><li>They invented the wheel, the plow, written law, and the 60-minute hour (that is why an hour still has 60 minutes).</li></ul>' },
        { type: 'read', title: 'Primary source: the Code of Hammurabi', source: 'full code', url: 'reader.html?doc=hammurabi', body: '<p>Around 1750 BCE, King Hammurabi carved 282 laws into a stone pillar — one of the first times a society wrote its rules down for everyone. A famous one:</p><blockquote>"If a builder builds a house and the house collapses and kills the owner, the builder shall be put to death."</blockquote><p>Rough — but notice what it means: the rules are public, written, and the same for a whole society. That is government you can point to. Open the full code to read more of the actual laws.</p>' },
        { type: 'quiz', questions: [
          { q: 'The first writing (cuneiform) was invented mainly to…', options: ['Write poems', 'Keep track of grain and goods', 'Send letters', 'Draw pictures'], answer: 1 },
          { q: 'A city that runs itself like its own country is a…', options: ['Watershed', 'City-state', 'Delta', 'Surplus'], answer: 1 },
          { q: 'Why did Mesopotamians build irrigation canals?', options: ['To travel faster', 'To spread river water to more fields', 'To stop floods completely', 'For decoration'], answer: 1 },
        ] },
        { type: 'next', text: 'Next: pick a river civilization and make it yours.' },
      ],
    },
    {
      id: 'portrait-a', n: 9, title: 'Portrait of a Civilization · A', subject: 'Humanities · ELA', minutes: 35, standards: '7.H.CH.3 · W.7.2',
      blocks: [
        { type: 'prose', body: '<p>Time for the project. You are going to build a <b>Portrait of a River Civilization</b> — a Canva presentation, a poster, or a model — that teaches someone else what made your civilization tick. First, pick one and gather your facts. You will build it in the next card.</p>' },
        { type: 'answers', prompts: [
          'Which river civilization will you do? (Mesopotamia, Egypt, the Indus Valley, or Shang China)',
          'What is one thing about it that already sounds interesting to you?',
        ] },
        { type: 'read', title: 'Gather your facts', source: 'four river civilizations', url: 'reader.html?doc=river-civs', body: '<p>Open the reading on the four river civilizations to get started, then collect notes on these five things. Jot them below as you go.</p>' },
        { type: 'answers', prompts: [
          'WHERE and WHEN: which river, and roughly how long ago?',
          'FOOD: how did the river let them farm a surplus?',
          'JOBS: what specialized jobs did they have?',
          'GOVERNMENT: who was in charge, and how did they rule?',
          'ONE AMAZING THING: an invention, building, or fact that blows your mind.',
        ] },
        { type: 'next', text: 'Next: build the portrait.' },
      ],
    },
    {
      id: 'portrait-b', n: 10, title: 'Portrait of a Civilization · B', subject: 'Humanities · ELA', minutes: 45, standards: 'W.7.2 · SL.7.4',
      blocks: [
        { type: 'build', title: 'Build your portrait', minutes: 40, steps: '<p>Turn your notes into a <b>Canva presentation</b> (or a poster/model) with a slide or section for each: where &amp; when, food &amp; the river, jobs, government, and your one amazing thing. Make it something you would actually want to look at. <a href="https://www.canva.com/create/presentations/" target="_blank" rel="noopener" class="choice-link">Open Canva ↗</a></p><p>Checklist before you call it done: clear title · all five parts covered · at least one image · it connects the civilization back to its river.</p>', photo: true, photoLabel: 'Paste the link to your finished portrait:' },
        { type: 'answers', prompts: [
          'In one sentence: how did the river make your civilization possible?',
        ] },
        { type: 'next', text: 'Next: the river gives life — and takes it. Flood myths.' },
      ],
    },

    /* ───────────────── PHASE 3 · POWER & HOME ───────────────── */
    {
      id: 'myths-a', n: 11, title: 'Flood Myths · A', subject: 'ELA', minutes: 35, standards: 'RL.7.2 · RL.7.9',
      blocks: [
        { type: 'hook', text: 'The same flood that fed a civilization could also drown it. That terror shows up in the oldest stories humans ever wrote — nearly every river culture has a great-flood myth. They are not just scary tales; they are how people made sense of a force they could not control.' },
        { type: 'read', title: 'Two floods: Gilgamesh and Yu the Great', source: 'read', body: '<p><b>The Flood in the Epic of Gilgamesh</b> (Mesopotamia, ~4,000 years old): the gods, annoyed with noisy humans, send a flood to wipe them out. One man is warned to build a giant boat and save his family and animals. Sound familiar? It is centuries older than the Noah story and almost certainly related.</p><p><b>Yu the Great</b> (China): instead of a hero who just <em>survives</em> the flood, Yu <b>engineers</b> his way out of it — he spends 13 years digging channels to drain the floodwaters to the sea. For taming the river, he is made the first emperor. Two cultures, two totally different answers to the same river.</p><p class="read-links">📄 Read the full stories: <a href="reader.html?doc=gilgamesh-flood">The Flood of Gilgamesh ↗</a> · <a href="reader.html?doc=yu-the-great">Yu the Great ↗</a></p>' },
        { type: 'answers', prompts: [
          'What is the big theme both flood stories share about people and rivers?',
          'Gilgamesh\'s hero survives the flood; Yu controls it. What does that difference say about how each culture saw its river?',
        ] },
        { type: 'next', text: 'Next: write your own — or compare the two.' },
      ],
    },
    {
      id: 'myths-b', n: 12, title: 'Flood Myths · B', subject: 'ELA', minutes: 35, standards: 'W.7.3 · RL.7.9',
      blocks: [
        { type: 'prose', body: '<p>Pick one:</p><ul><li><b>Write your own river myth</b> — a short story that explains a flood, a drought, or why a river bends where it does. Give it characters and a lesson.</li><li><b>Compare the two</b> — write a paragraph on how Gilgamesh\'s flood and Yu the Great are alike and different, and what each says about its people.</li></ul>' },
        { type: 'answers', prompts: [
          'Your myth, or your comparison, goes here:',
        ] },
        { type: 'matching', title: 'Word match #2', note: 'Tap a word, then its meaning.', set: ['erosion', 'groundwater', 'agriculture', 'irrigation', 'city-state', 'watershed'] },
        { type: 'next', text: 'Next: people stop just surviving rivers and start controlling them.' },
      ],
    },
    {
      id: 'harness', n: 13, title: 'Harnessing Rivers: Dams & Power', subject: 'Humanities · Science', minutes: 45, standards: '7.C.PI.1 · MS-ESS3',
      blocks: [
        { type: 'hook', text: 'Yu the Great became emperor for controlling a river — and that is the whole back half of this story. Whoever controls the water controls the food, and whoever controls the food controls the people. Rivers did not just grow civilizations; they became the ultimate source of power. And with modern dams, a river can literally power a city.' },
        { type: 'video', title: 'How hydroelectric dams work', url: 'https://www.youtube.com/results?search_query=how+hydroelectric+dam+works+explained', watch: true, focus: 'Watch how falling water gets turned into electricity.' },
        { type: 'read', title: 'From irrigation ditches to hydropower', source: 'read', body: '<p>People have re-engineered rivers for 6,000 years. It started with <b>irrigation</b> canals to water more fields. Ancient rulers who controlled the canals controlled the kingdom. Today we build <b>dams</b> — walls that hold back a river to store water, prevent floods, and spin turbines that make electricity (hydropower). One dam can light up an entire city.</p><p>But every dam is a trade-off. It blocks the river. Fish that swim upstream to spawn — like salmon — can be stopped cold. The silt that used to fertilize the floodplain piles up behind the wall instead. So a dam is never just an engineering question. It is a question about who wins and who loses.</p>' },
        { type: 'answers', prompts: [
          'Name two things a dam gives people, and two things it costs.',
          'Start your argument: should a river be dammed, or left wild? Take a side and give one reason. (You\'ll use this at the end.)',
        ] },
        { type: 'next', text: 'Next: bring it home — our own Rogue River.' },
      ],
    },
    {
      id: 'rogue', n: 14, title: 'Our River: The Rogue', subject: 'Humanities · Science', minutes: 35, standards: '7.G.HE.6 · Tribal history',
      blocks: [
        { type: 'hook', text: 'You do not have to go to the Nile to see all of this. It is running through your own backyard. The Rogue River has carved the valley you live in, fed the people here for thousands of years, and been dammed, fought over, and — recently — set partly free again.' },
        { type: 'read', title: 'The Rogue: salmon, dams, and the Takelma', source: 'read', body: '<p>Long before Medford, the <b>Takelma</b> people lived along the Rogue and built their year around its <b>salmon</b> runs — the river was food, road, and home. When settlers arrived, dams went up for power and irrigation, and the salmon runs crashed as fish were blocked from swimming upstream to spawn.</p><p>Here is the twist: in the last 20 years, several Rogue dams — like Gold Ray and Savage Rapids — were actually <b>removed</b>, and the salmon started coming back. The same argument you just met about the Nile and hydropower played out right here, and this time the river won some of it back.</p>' },
        { type: 'answers', prompts: [
          'How is the Rogue like the Nile in this unit? How is it different?',
          'The Rogue\'s dams were removed and salmon returned. Does that change your argument about damming rivers? Why or why not?',
        ] },
        { type: 'next', text: 'Last stop: pull the whole unit together.' },
      ],
    },

    /* ───────────────── PHASE 4 · REFLECTION ───────────────── */
    {
      id: 'reflect-a', n: 15, title: 'Reflection · A — Look Back', subject: 'Portfolio', minutes: 35, standards: 'self-assessment',
      blocks: [
        { type: 'prose', body: '<p>You made it through the whole unit. Before you write your final answer, look back at where you started and check what stuck.</p>' },
        { type: 'kwlback', prompt: 'Here is what you wrote on day one. Read it — you knew less than you think you did.' },
        { type: 'vocabsort', title: 'Which words do you own now?', note: 'Be honest. Tap each word: "got it cold" or "still fuzzy." The fuzzy ones are just your study list.' },
        { type: 'next', text: 'Last card: your big answer.' },
      ],
    },
    {
      id: 'reflect-b', n: 16, title: 'Reflection · B — Your Answer', subject: 'Portfolio', minutes: 40, standards: 'W.7.2 · synthesis',
      blocks: [
        { type: 'prose', body: '<p>This is the whole unit in one place. Answer the essential question using what you learned — the science, the history, a myth, and the Rogue. Work in at least <b>five</b> of the unit words.</p><blockquote>How do rivers shape the way people live — and how do people shape rivers back?</blockquote>' },
        { type: 'answers', prompts: [
          'Your answer to the big question (a few strong paragraphs — use evidence and at least 5 unit words):',
        ] },
        { type: 'kwlfinish', prompt: 'Finish your KWL. Now that it\'s over:' },
        { type: 'rubric', title: 'Give yourself an honest check', items: [
          'I explained how the water cycle and rivers shape the land.',
          'I explained how rivers led to farming, surplus, and the first civilizations.',
          'I used evidence from science AND history AND a myth.',
          'I connected it to a real river (the Nile, or the Rogue).',
          'I used at least five unit vocabulary words correctly.',
        ] },
        { type: 'done', text: 'That\'s the unit. Nice work — you can see everything you made on your reflection any time.' },
      ],
    },

  ],
});
