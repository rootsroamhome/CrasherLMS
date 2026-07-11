/**
 * unit-deep-time.js — Unit 3: Deep Time & the Restless Earth
 *
 * Interdisciplinary (Earth science + world history + ELA) self-paced unit.
 * 16 ordered cards; each a standalone session. Rendered by unit.js; progress
 * and answers save to localStorage. NO `track` field → teal theme.
 *
 * Do not add a top-level const/let/var (all unit-*.js share one global scope).
 */

window.HS_UNITS = window.HS_UNITS || [];
window.HS_UNITS.push({
  id: 'deep-time',
  short: 'Unit 3 · Deep Time',
  title: 'Deep Time & the Restless Earth',
  eq: 'The ground remembers everything — so who can read what it wrote?',
  image: 'assets/units/deep-time.jpg',

  parent: {
    hotspots: [
      '<b>Deep time is almost impossible to feel.</b> Millions and billions of years blur into "a really long time." The timeline builds (cards 2–3) are the fix — make him physically pace out the distance. If human history is the last inch of a football field, that\'s the point that has to land.',
      'He may treat the <b>rock cycle as a one-way trip</b> (lava → rock → done). It\'s a loop: any rock can become any other kind, given enough heat, pressure, or time. If he can only recite one path, have him start from a different rock and go around again.',
      '<b>"Evidence" vs. "claim" is the ELA spine of this unit.</b> Rocks don\'t talk — geologists make <i>claims</i> and back them with <i>evidence</i> (a fossil, a layer, a matching coastline). Push him to say "how do we KNOW?" every time, not just "what happened."',
      'Oral tradition as real evidence can feel strange to him. The Klamath account of Mt. Mazama (card 12) matches the geology of an eruption <b>7,700 years ago</b> — a story carried accurately for hundreds of generations. Treat it as data, not a fairy tale; that\'s the respectful and the scientifically honest read.',
    ],
    activities: [
      { tier: 'Small', title: 'Read a road cut', detail: 'Drive I-5 or Highway 62 and pull over (safely) at a road cut — the sliced-open hillsides where you can see rock layers. Find the strata. Ask which layer is oldest (the bottom, by superposition) and what each layer might have been when it formed. The whole "reading the rocks" card, done on a real hillside.', cost: 'Free', time: '1 hour' },
      { tier: 'Medium', title: 'Hike the Table Rocks', detail: 'Upper or Lower Table Rock outside Medford — the flat-topped mesas are capped by a 7-million-year-old lava flow that protected the softer rock beneath while everything around it eroded away. You are literally standing on deep time, and the view explains the whole valley. Pairs with the "Our Ground" card.', cost: 'Free', time: 'Half day' },
      { tier: 'Large', title: 'Crater Lake — stand in a volcano', detail: 'Crater Lake is the caldera left when Mt. Mazama blew its top and collapsed 7,700 years ago — the exact event in the Klamath story. Drive the rim, look at Wizard Island (a baby volcano inside the old one), and connect the geology to the oral history he read. Two-plus hours from Medford.', cost: '$ park fee + gas', time: 'Full day' },
    ],
  },

  vocab: {
    mustOwn: [
      { term: 'geology',        def: 'The study of the Earth — what it\'s made of and how it changes over time.' },
      { term: 'deep time',      def: 'The mind-bending scale of geologic history — millions and billions of years.' },
      { term: 'rock cycle',     def: 'The never-ending loop that turns any rock into any other kind of rock.' },
      { term: 'igneous',        def: 'Rock formed when melted rock (magma or lava) cools and hardens.' },
      { term: 'sedimentary',    def: 'Rock formed when layers of sediment get pressed and cemented together.' },
      { term: 'metamorphic',    def: 'Rock changed into a new form by intense heat and pressure.' },
      { term: 'magma',          def: 'Melted rock below the surface; once it erupts, we call it lava.' },
      { term: 'strata',         def: 'Layers of rock, stacked oldest-on-the-bottom like pages in a book.' },
      { term: 'superposition',  def: 'The rule that in undisturbed layers, the deeper the layer, the older it is.' },
      { term: 'fossil',         def: 'The preserved trace or remains of ancient life, saved in rock.' },
      { term: 'plate tectonics',def: 'The theory that Earth\'s crust is broken into huge plates that slowly move.' },
      { term: 'caldera',        def: 'The giant crater left when a volcano erupts and its top collapses.' },
      { term: 'evidence',       def: 'The observable facts you point to in order to back up a claim.' },
      { term: 'claim',          def: 'A statement you\'re arguing is true — which then needs evidence.' },
    ],
    frayer: [
      {
        term: 'deep time',
        definition: 'The immense scale of Earth\'s history — 4.6 billion years — so vast that all of human history is a thin sliver at the very end.',
        examples: ['The Earth forming 4.6 billion years ago', 'A canyon carved over millions of years', 'A fossil of a creature that lived 500 million years ago'],
        nonexamples: ['A hundred years', 'The age of the oldest building', 'How long ago the dinosaurs feel like they lived — "a while"'],
        sentence: 'Deep time is why a mountain can be worn flat and a sea can turn to stone — the clock just runs that long.',
      },
      {
        term: 'rock cycle',
        definition: 'The continuous loop in which heat, pressure, weathering, and time turn any one kind of rock into another — igneous, sedimentary, and metamorphic all trading places.',
        examples: ['Lava cooling into igneous basalt', 'Sand pressed into sedimentary sandstone', 'Limestone squeezed into metamorphic marble'],
        nonexamples: ['A rock that can never change', 'A one-way trip from lava to gravel and no further', 'Melting an ice cube'],
        sentence: 'Because of the rock cycle, the stone in your driveway has probably been three different rocks already.',
      },
      {
        term: 'evidence',
        definition: 'The observable, checkable facts — a fossil, a rock layer, a matching coastline — that a scientist points to in order to support a claim about the past.',
        examples: ['Matching fossils on two continents', 'A layer of volcanic ash in the rock', 'Rounded pebbles that prove water once flowed here'],
        nonexamples: ['A guess with nothing behind it', 'Because a book said so', 'It just feels true'],
        sentence: 'The claim is "these continents were once joined"; the evidence is the identical fossils on both shores.',
      },
    ],
  },

  cards: [

    /* ───────────────── PHASE 1 · DEEP TIME ───────────────── */
    {
      id: 'launch', n: 1, title: 'Launch — How old is the ground under you?',
      subject: 'Science · Humanities', minutes: 40, standards: '7.ESS2.2 · 7.G.GR.1',
      blocks: [
        { type: 'hook', text: 'Stand on any patch of ground and you\'re standing on a machine that has been running for <b>4.6 billion years</b>. If you squeezed all of Earth\'s history into a single 24-hour day, the dinosaurs don\'t die until about 11:40 p.m., and <b>all of human history</b> — every pyramid, every war, every person who ever lived — happens in the last <b>two seconds</b> before midnight. The rock under your feet remembers all of it. This unit is about learning to read what it wrote.' },
        { type: 'video', title: 'The history of the Earth in one hour (or: deep time)', url: 'https://www.youtube.com/results?search_query=geologic+time+scale+explained+deep+time', watch: true, focus: 'Watch for how late in the story humans show up. Almost the whole movie is over before we arrive.' },
        { type: 'prose', body: '<p>Here\'s the question that runs under this whole unit. Keep it in the back of your mind the whole way:</p><blockquote>The ground remembers everything — so who can read what it wrote?</blockquote><p>The trick is that rocks don\'t talk. Nobody was there 300 million years ago to write it down. So geologists became detectives: they learned to make a <b>claim</b> about the past and back it with <b>evidence</b> you can actually see and check in the rock. By the end of this unit you\'ll be reading a hillside like a book — and you\'ll see how the ground itself has redirected human history more than once.</p>' },
        { type: 'flashcards', title: 'Meet the words first', note: 'Tap a card to flip it. You\'ll meet all of these again inside the lessons — this is just a first handshake.' },
        { type: 'kwl', prompt: 'Get your own starting point down. What do you already know about how old the Earth is, or how rocks form? What do you want to find out? No wrong answers.' },
        { type: 'next', text: 'Next: just how long is "deep time," really?' },
      ],
    },
    {
      id: 'time-a', n: 2, title: 'Deep Time · A', subject: 'Science', minutes: 30, standards: '7.ESS2.2',
      blocks: [
        { type: 'hook', text: 'Your brain did not evolve to understand a billion of anything. A million seconds is about 11 days. A billion seconds is almost 32 <b>years</b>. That\'s the gap you have to wrestle with: "million" and "billion" sound like neighbors, but one is a coffee break and the other is a childhood-to-adulthood lifetime. Now stretch that to 4.6 billion <em>years</em>, and you\'re starting to feel deep time.' },
        { type: 'read', title: 'The clock that runs in millions', source: 'clean reading', url: 'reader.html?doc=deep-time-scale', body: '<p>Open the clean reading for the full picture. The short version:</p><ul><li>The Earth is about <b>4.6 billion years</b> old. Life shows up early — tiny single cells — but stays microscopic for <em>billions</em> of years.</li><li>Complex animals are recent. Dinosaurs ruled for ~165 million years and vanished 66 million years ago.</li><li><b>Humans</b> (our species) have been around ~300,000 years — less than a tenth of one percent of Earth\'s story.</li><li>Geologists split all this into eras and periods, like chapters. The names (Jurassic, Cambrian) are just labels for chunks of <b>deep time</b>.</li></ul>' },
        { type: 'answers', prompts: [
          'In your own words, why is it so hard for people to picture a billion years?',
          'If all of Earth\'s history were one calendar year, humans show up in the last ~20 minutes of December 31. What does that tell you about our place in the story?',
        ] },
        { type: 'deeper', text: 'Look up the "Cambrian explosion." For billions of years life was basically slime — then, fairly suddenly, almost every animal body plan appears. Why then?' },
        { type: 'next', text: 'Next: measure deep time with your own hands.' },
      ],
    },
    {
      id: 'time-b', n: 3, title: 'Deep Time · B', subject: 'Science', minutes: 35, standards: '7.ESS2.2',
      blocks: [
        { type: 'build', title: 'Build a deep-time timeline', minutes: 25, steps: '<ol><li>Grab a long strip — a roll of receipt tape, a piece of string, or just a hallway. Let the whole length = <b>4.6 billion years</b>, with today at one end and Earth\'s birth at the other.</li><li>If your strip is 460 cm long, then <b>1 cm = 10 million years.</b> Mark these: first life (~3.8 billion years ago), first animals (~600 million), dinosaurs die (66 million), first humans (~300,000 years).</li><li>Now find where <b>all of recorded human history</b> (~5,000 years) lands. On a 460 cm strip that\'s the last <b>half-millimeter</b> — thinner than a pencil line.</li></ol>', photo: true, photoLabel: 'Snap a photo of your timeline (optional):' },
        { type: 'answers', prompts: [
          'Where did "all of human history" end up on your timeline? React to that.',
          'Most of the strip is taken up by which part of the story? What does that say about what "normal" looks like for life on Earth?',
        ] },
        { type: 'quiz', questions: [
          { q: 'About how old is the Earth?', options: ['4.6 million years', '4.6 billion years', '6,000 years', '4.6 trillion years'], answer: 1 },
          { q: 'A million seconds is ~11 days. A billion seconds is about…', options: ['A month', 'A year', '32 years', '1,000 days'], answer: 2 },
          { q: 'On a timeline of all Earth history, human recorded history takes up…', options: ['Roughly half', 'A quarter', 'A thin sliver at the very end', 'The first chapter'], answer: 2 },
          { q: '"Deep time" means…', options: ['The bottom of the ocean', 'The huge scale of geologic history', 'Nighttime', 'A deep cave'], answer: 1 },
        ] },
        { type: 'next', text: 'Next: the rock under you is on the move — meet the rock cycle.' },
      ],
    },
    {
      id: 'rockcycle-a', n: 4, title: 'The Rock Cycle · A', subject: 'Science', minutes: 30, standards: '7.ESS2.1',
      blocks: [
        { type: 'hook', text: 'There is no such thing as a permanent rock. The stone in your driveway might have been molten lava, then a beach, then a mountain, then gravel — and it\'s not done. Every rock on Earth is a temporary arrangement of atoms that will, given enough heat, pressure, or time, become a completely different rock. Earth is constantly recycling its own crust.' },
        { type: 'learn', title: 'Learn the rock cycle — your way', note: 'Watch it or read it, your call. (Both are here if you want them.)', options: [
          { kind: 'video', label: 'Watch it', title: 'The rock cycle explained', url: 'https://www.youtube.com/results?search_query=rock+cycle+igneous+sedimentary+metamorphic+explained', focus: 'Track ONE rock all the way around the loop. Where does it melt? Where does it get squeezed?' },
          { kind: 'read', label: 'Read it', title: 'Three kinds of rock, one loop', source: 'clean reading', url: 'reader.html?doc=rock-cycle', body: '<p>Open the clean reading for the whole cycle. The three players:</p><ul><li><b>Igneous</b> — melted rock (<b>magma</b> underground, lava above) that cools and hardens. Granite, basalt.</li><li><b>Sedimentary</b> — bits of older rock (sediment) that pile up in layers and get pressed and cemented together. Sandstone, limestone. This is the kind that traps <b>fossils</b>.</li><li><b>Metamorphic</b> — any rock that gets buried and cooked by heat and pressure until it changes into something new. Limestone becomes marble; mud-rock becomes slate.</li></ul><p>The key idea: this isn\'t a line, it\'s a <b>cycle</b>. Any of the three can turn into either of the others. Melt a sedimentary rock and it becomes igneous. Weather an igneous rock to sand and it becomes sedimentary. Round and round, forever.</p>' },
        ] },
        { type: 'frayer', title: 'Lock in the big ideas', note: 'These three carry the unit. Study each card.' },
        { type: 'answers', prompts: [
          'Explain the difference between igneous, sedimentary, and metamorphic rock in your own words.',
          'Why do we call it a "cycle" and not a "sequence" or a "line"?',
        ] },
        { type: 'next', text: 'Next: run the whole rock cycle with a box of crayons.' },
      ],
    },
    {
      id: 'rockcycle-b', n: 5, title: 'The Rock Cycle · B', subject: 'Science', minutes: 35, standards: '7.ESS2.1',
      blocks: [
        { type: 'build', title: 'The crayon rock cycle', minutes: 25, steps: '<ol><li>Pick two or three old crayons. Shave off little bits with a dull knife or a peeler (an adult helps). The shavings are your <b>sediment</b>.</li><li>Pile the shavings on a square of foil and press <em>hard</em> with your thumb. You just made a <b>sedimentary</b> "rock" — layers stuck together by pressure.</li><li>Fold the foil over it and press even harder, warming it with your hands. The layers smear and blend: <b>metamorphic</b> rock, changed by heat and pressure.</li><li>(Adult step) Warm the foil packet gently until the wax melts, then let it cool solid. Melted and re-hardened: <b>igneous</b> rock. You just ran the whole cycle.</li></ol>', photo: true, photoLabel: 'Photo of your crayon rocks (optional):' },
        { type: 'answers', prompts: [
          'Which real rock-cycle process did the pressing stand for? Which did the melting stand for?',
          'Your crayon "rock" could go around again. What would you have to do to it to turn it back into sediment?',
        ] },
        { type: 'quiz', questions: [
          { q: 'Rock that forms when magma or lava cools is…', options: ['Sedimentary', 'Metamorphic', 'Igneous', 'Fossilized'], answer: 2 },
          { q: 'Which rock type is most likely to contain fossils?', options: ['Igneous', 'Sedimentary', 'Metamorphic', 'None can'], answer: 1 },
          { q: 'Marble forms when limestone is cooked by heat and pressure. Marble is…', options: ['Igneous', 'Sedimentary', 'Metamorphic', 'Magma'], answer: 2 },
          { q: 'The rock cycle is best described as…', options: ['A one-way trip', 'A loop with no fixed start or end', 'A straight line from lava to sand', 'A single explosion'], answer: 1 },
        ] },
        { type: 'next', text: 'Next: rocks stack in order — and that order is a readable record.' },
      ],
    },

    /* ───────────────── PHASE 2 · READING THE RECORD ───────────────── */
    {
      id: 'layers-a', n: 6, title: 'Reading the Layers · A', subject: 'Science · ELA', minutes: 35, standards: '7.ESS2.3 · 7.RI.1',
      blocks: [
        { type: 'hook', text: 'A cliff face is a stack of pages. The layers of sedimentary rock — the <b>strata</b> — were laid down one on top of the other, oldest at the bottom, youngest at the top. That one simple rule lets a geologist walk up to a hillside they\'ve never seen and read hundreds of millions of years of history in order, like a book you open from the bottom up.' },
        { type: 'read', title: 'How to read a rock like a book', source: 'clean reading', url: 'reader.html?doc=reading-the-rocks', body: '<p>Open the clean reading for the full method. The core tools:</p><ul><li><b>Superposition:</b> in undisturbed layers, deeper = older. The bottom page was written first.</li><li><b>Fossils</b> tell you <em>what lived</em> when that layer formed — and a sea-creature fossil in a layer means that spot was once <b>underwater</b>, even if it\'s a mountaintop today.</li><li>An out-of-place layer is a clue: a band of volcanic <b>ash</b> means an eruption; a layer of rounded pebbles means a river once ran here.</li></ul><p>None of this is guessing. Each reading is a <b>claim</b> ("this was a shallow sea") backed by <b>evidence</b> you can point to in the rock (the clam fossils, the ripple marks). That claim-and-evidence move is exactly what good nonfiction writing does too.</p>' },
        { type: 'answers', prompts: [
          'A geologist finds seashell fossils in a rock layer at the top of a mountain. What can she claim, and what\'s her evidence?',
          'Explain the law of superposition in one sentence a younger kid could understand.',
        ] },
        { type: 'next', text: 'Next: you read a real set of layers yourself.' },
      ],
    },
    {
      id: 'layers-b', n: 7, title: 'Reading the Layers · B', subject: 'Science · ELA', minutes: 35, standards: '7.ESS2.3 · 7.RI.8',
      blocks: [
        { type: 'build', title: 'Read this hillside', minutes: 20, steps: '<p>Sketch (or describe in the boxes below) a cliff with these layers, bottom to top: <b>(1)</b> gray rock full of clam and coral fossils · <b>(2)</b> red sandstone with ripple marks · <b>(3)</b> a thin white band of volcanic ash · <b>(4)</b> loose gravel with no fossils. Then, layer by layer, write what each one tells you happened there — and in what order.</p>', photo: true, photoLabel: 'Photo of your layer sketch (optional):' },
        { type: 'answers', prompts: [
          'Which layer is OLDEST, and how do you know?',
          'Layer 1 has ocean fossils but layer 2 has river ripples. What changed at this spot over time?',
          'The white ash band (layer 3) — what one event does it record? Make the claim and name your evidence.',
        ] },
        { type: 'quiz', questions: [
          { q: 'In undisturbed rock layers, the oldest layer is…', options: ['On top', 'On the bottom', 'In the middle', 'You can\'t tell'], answer: 1 },
          { q: 'Ocean fossils on a mountaintop are evidence that…', options: ['Fish climb mountains', 'That land was once under the sea', 'The rock is fake', 'A flood happened last year'], answer: 1 },
          { q: 'A claim backed by observable facts you can point to is supported by…', options: ['Evidence', 'A guess', 'Opinion', 'Nothing'], answer: 0 },
        ] },
        { type: 'next', text: 'Next: why the layers move at all — the restless Earth.' },
      ],
    },
    {
      id: 'tectonics', n: 8, title: 'The Restless Earth: Plate Tectonics', subject: 'Science', minutes: 40, standards: '7.ESS2.3 · 7.ESS2.2',
      blocks: [
        { type: 'hook', text: 'Right now, without you feeling a thing, the ground under you is moving about as fast as your fingernails grow. The entire surface of the Earth is broken into a few dozen giant slabs — <b>plates</b> — that float on hot, slow-flowing rock beneath. They crash, grind, and pull apart. That slow-motion demolition derby built every mountain range and opened every ocean.' },
        { type: 'learn', title: 'Learn how we know the continents move', note: 'Pick your path — watch or read. Either one gets you the evidence.', options: [
          { kind: 'video', label: 'Watch it', title: 'Plate tectonics explained', url: 'https://www.youtube.com/results?search_query=plate+tectonics+explained+continental+drift', focus: 'Watch for the three ways plates meet: pulling apart, crashing together, and sliding past.' },
          { kind: 'read', label: 'Read it', title: 'How we know the continents move', source: 'clean reading', url: 'reader.html?doc=plate-tectonics', body: '<p>When Alfred Wegener first said the continents drift, scientists laughed. Then the <b>evidence</b> piled up until the claim was undeniable:</p><ul><li>The coastlines of South America and Africa fit together like <b>puzzle pieces</b>.</li><li>The <b>same fossils</b> of the same land animals show up on both sides of the Atlantic — animals that couldn\'t possibly have swum across.</li><li>Matching mountain ranges and rock layers line up when you slide the continents back together into one supercontinent, <b>Pangaea</b>.</li><li>The seafloor is spreading — new rock is being made at ocean ridges, pushing the plates.</li></ul><p>This is a perfect example of science: a wild <b>claim</b> that won because the <b>evidence</b> kept adding up. Where two plates meet is exactly where you get earthquakes and volcanoes — including one that runs right up our own coast.</p>' },
        ] },
        { type: 'answers', prompts: [
          'List two separate pieces of evidence that the continents were once joined.',
          'Wegener\'s idea was mocked at first, then accepted. What changed? (Hint: it wasn\'t the idea.)',
        ] },
        { type: 'quiz', questions: [
          { q: 'Earth\'s outer shell is broken into moving…', options: ['Bubbles', 'Plates', 'Rings', 'Rivers'], answer: 1 },
          { q: 'Matching fossils on two continents are evidence that…', options: ['The animals swam across', 'The continents were once connected', 'Fossils travel', 'The rock is young'], answer: 1 },
          { q: 'Earthquakes and volcanoes happen mostly…', options: ['In the middle of plates', 'Where plates meet', 'Only underwater', 'At random'], answer: 1 },
        ] },
        { type: 'next', text: 'Next: put it all together — become the geologist for one place.' },
      ],
    },
    {
      id: 'portrait-a', n: 9, title: 'Read a Landscape · A', subject: 'Science · ELA', minutes: 35, standards: '7.W.2',
      blocks: [
        { type: 'prose', body: '<p>Time for the project. You\'re going to write the <b>biography of a landscape</b> — pick a dramatic place on Earth and explain, in plain language, the deep-time story the rocks there are telling. Think of it as a nature-documentary script. First pick your place and gather the story; you\'ll write it up in the next card.</p><p>Strong choices: the <b>Grand Canyon</b> (layers + a river), the <b>Hawaiian Islands</b> (a volcanic hotspot), the <b>Himalayas</b> (two continents crashing), the <b>Table Rocks</b> or <b>Crater Lake</b> right here, or the <b>Cascades</b>.</p>' },
        { type: 'answers', prompts: [
          'Which landscape will you do?',
          'What\'s the one thing about it that already grabs you?',
        ] },
        { type: 'answers', prompts: [
          'WHAT ROCKS: what kind(s) of rock is it made of — igneous, sedimentary, metamorphic?',
          'WHAT PROCESS: what built it — volcanoes, layers of sediment, plates crashing, a river carving?',
          'HOW LONG: roughly how much deep time did it take?',
          'THE EVIDENCE: what can you actually SEE there that proves the story (layers, fossils, lava, a fault)?',
          'THE HOOK: the one detail that would make someone go "whoa."',
        ] },
        { type: 'next', text: 'Next: write the biography.' },
      ],
    },
    {
      id: 'portrait-b', n: 10, title: 'Read a Landscape · B', subject: 'Science · ELA', minutes: 45, standards: '7.W.2 · 7.RI.2',
      blocks: [
        { type: 'build', title: 'Write the biography of your landscape', minutes: 40, steps: '<p>Turn your notes into a short <b>explanatory piece</b> — a few strong paragraphs, a narrated slideshow, or a Canva page — that tells your landscape\'s deep-time story to someone who\'s never seen it. <a href="https://www.canva.com/create/presentations/" target="_blank" rel="noopener" class="choice-link">Open Canva ↗</a> if you want visuals.</p><p>Checklist before you call it done: names the rock type(s) · explains the process that built it · gives a sense of the deep time involved · and — most important — for every claim, points to the <b>evidence</b> in the rock. Open with your "whoa" detail.</p>', photo: true, photoLabel: 'Paste the link to your finished piece (or write it in the box below):' },
        { type: 'answers', prompts: [
          'Your biography of the landscape (if you wrote it here rather than in Canva):',
          'In one sentence: what\'s the single strongest piece of evidence for your landscape\'s story?',
        ] },
        { type: 'next', text: 'Next: the ground doesn\'t just record history — sometimes it makes it.' },
      ],
    },

    /* ───────────────── PHASE 3 · WHEN THE GROUND WROTE HISTORY ───────────────── */
    {
      id: 'history-a', n: 11, title: 'When the Ground Wrote History · A', subject: 'Humanities · ELA', minutes: 40, standards: '7.H.CH.3 · 7.RI.1',
      blocks: [
        { type: 'hook', text: 'In 79 CE a Roman city was going about an ordinary afternoon — bread in the ovens, graffiti on the walls — when the mountain above it, Vesuvius, erupted and buried the whole town in ash in a single day. That city, <b>Pompeii</b>, was sealed so fast and so completely that we can still read its shop signs 2,000 years later. Geology didn\'t just shape history here. It <em>froze</em> a moment of it.' },
        { type: 'read', title: 'Eyewitness to Vesuvius: Pliny the Younger', source: 'primary source', url: 'reader.html?doc=pompeii', body: '<p>A 17-year-old named Pliny the Younger watched Vesuvius erupt from across the bay and later wrote it down — the oldest surviving eyewitness account of a volcanic eruption. He describes a cloud "shaped like an umbrella pine," ash falling like snow, and the sea sucked back from the shore.</p><blockquote>"You could hear the shrieks of women, the wailing of infants, and the shouting of men… many raised their hands to the gods, but the greater number believed there were no gods left."</blockquote><p>Open the full letter. As you read, notice: this is a <b>primary source</b> — evidence written by someone who was actually there — and it matches the geologic evidence dug out of the ash. Two kinds of record, one event.</p>' },
        { type: 'answers', prompts: [
          'How does a disaster like Vesuvius end up PRESERVING history instead of destroying it?',
          'Pliny\'s letter and the buried city are two different kinds of evidence for the same event. Why is it powerful when they agree?',
        ] },
        { type: 'quiz', questions: [
          { q: 'Pompeii was preserved so well because it was…', options: ['Underwater', 'Buried in volcanic ash very fast', 'Made of metal', 'Never actually destroyed'], answer: 1 },
          { q: 'An account written by someone who witnessed the event is a…', options: ['Secondary source', 'Primary source', 'Fictional source', 'Rumor'], answer: 1 },
          { q: 'Vesuvius erupting and burying a city is an example of…', options: ['Geology redirecting human history', 'The rock cycle', 'Superposition', 'Erosion'], answer: 0 },
        ] },
        { type: 'next', text: 'Next: a story that carried an eruption for 7,700 years — right here in Oregon.' },
      ],
    },
    {
      id: 'history-b', n: 12, title: 'When the Ground Wrote History · B', subject: 'Humanities · ELA', minutes: 40, standards: '7.H.CP.9 · 7.H.CC.6',
      blocks: [
        { type: 'hook', text: 'About 7,700 years ago, a mountain in southern Oregon called Mt. Mazama erupted so violently that it collapsed into itself and left a giant hole that filled with water — <b>Crater Lake</b>. The <b>Klamath</b> people were here to see it. And they kept the story — carried by voice, generation to generation, for over seven thousand years — until it matched, detail for detail, what geologists dug up in the 20th century.' },
        { type: 'read', title: 'Llao and Skell: the Klamath account of Mazama', source: 'oral tradition', url: 'reader.html?doc=mazama', body: '<p>In the Klamath telling, Llao, spirit of the underworld who lived inside the mountain, battled Skell, spirit of the sky. In the fury of the fight the mountain was thrown down, fire rained from the sky, and the peak collapsed — then filled with the deep blue water that is there today.</p><p>For a long time outsiders dismissed this as "just a legend." Then geologists confirmed Mazama erupted and collapsed ~7,700 years ago. The story wasn\'t a fairy tale — it was an <b>eyewitness account</b>, kept accurate across roughly 300 human generations. Open the full reading. It\'s one of the most powerful examples anywhere that <b>oral tradition can be real historical evidence</b>.</p>' },
        { type: 'choice', title: 'Show what you know — your pick', note: 'The Klamath carried the Mazama eruption by voice for 7,700 years, and it matched the geology. Prove you get why that\'s real evidence — pick how.', options: [
          { kind: 'write', label: 'Write it', input: 'text', prompt: 'Write a short paragraph: what does it take for a spoken story to survive 7,700 years and stay accurate — and why is dismissing the Klamath account as "just a legend" both disrespectful AND bad science?' },
          { kind: 'record', label: 'Record it', input: 'link', prompt: 'Record yourself (60–90 seconds) explaining the Mazama story and why oral tradition counts as real historical evidence, just like Pompeii\'s written record. Upload it and paste the link.' },
          { kind: 'make', label: 'Make a set', input: 'link', prompt: 'Build a small Quizlet or flashcard set for this unit\'s evidence words — primary source, oral tradition, caldera, claim, evidence — each with a definition in your own words. Paste the link.' },
        ] },
        { type: 'next', text: 'Next: pin down the move at the heart of this whole unit — claim vs. evidence.' },
      ],
    },
    {
      id: 'evidence', n: 13, title: 'Claim & Evidence: How We Know', subject: 'ELA · Science', minutes: 35, standards: '7.RI.8 · 7.RI.1',
      blocks: [
        { type: 'hook', text: 'Here\'s a claim: "The Earth is billions of years old." A few hundred years ago almost everyone would have told you it was a few thousand. So what changed their minds? Not a louder argument — <b>evidence</b>. Learning to tell a claim from the evidence behind it is the single most useful thinking skill there is, in science and everywhere else.' },
        { type: 'read', title: 'Telling claims from evidence', source: 'read', body: '<p>A <b>claim</b> is a statement someone is arguing is true. <b>Evidence</b> is the observable, checkable stuff that backs it up. A claim with no evidence is just an opinion; evidence with no claim is just a pile of facts. Good thinking connects the two — and good nonfiction writing does exactly the same thing.</p><p>How geologists know the Earth is ancient (claim → evidence):</p><ul><li><b>Rock layers</b> so thick they\'d take millions of years to build up, one thin layer at a time.</li><li><b>Radioactive dating</b> — certain atoms decay at a known, steady rate, like a built-in stopwatch inside the rock.</li><li><b>Erosion:</b> canyons a mile deep, carved by rivers grain by grain.</li></ul><p>Notice the pattern: every claim is nailed to something you can measure. When you read <em>anything</em> — a news story, an ad, a post — the move is the same: what\'s the claim, and what\'s the evidence? If there isn\'t any, be suspicious.</p>' },
        { type: 'answers', prompts: [
          'In your own words, what\'s the difference between a claim and evidence?',
          'Pick any claim from this unit (about rocks, plates, or deep time) and name the evidence that backs it.',
          'Think of a claim you\'ve seen in an ad or online with weak or no evidence. What made it weak?',
        ] },
        { type: 'quiz', questions: [
          { q: 'A statement someone argues is true is a…', options: ['Claim', 'Evidence', 'Fossil', 'Fact-free zone'], answer: 0 },
          { q: 'Radioactive dating works because certain atoms decay…', options: ['Randomly', 'At a known, steady rate', 'Only in fossils', 'Never'], answer: 1 },
          { q: 'A claim with no evidence behind it is basically…', options: ['Proven', 'Just an opinion', 'A law of nature', 'Impossible to say'], answer: 1 },
        ] },
        { type: 'next', text: 'Next: bring it home — the deep-time story written into our own valley.' },
      ],
    },
    {
      id: 'local', n: 14, title: 'Our Ground: Table Rocks & Crater Lake', subject: 'Humanities · Science', minutes: 35, standards: '7.G.GR.1 · 7.H.CC.6',
      blocks: [
        { type: 'hook', text: 'You don\'t have to go to Pompeii or the Grand Canyon to read deep time. It\'s written into the skyline you see every day. The flat-topped <b>Table Rocks</b> north of Medford and the impossibly blue <b>Crater Lake</b> two hours up the road are both pages of the same story — and the people who lived here read them long before any geologist arrived.' },
        { type: 'read', title: 'The valley\'s deep-time story', source: 'read', body: '<p><b>The Table Rocks</b> are a lesson in erosion you can hike. About 7 million years ago, lava flowed down an ancient river valley and hardened into a tough cap of rock. Over millions of years, water wore away all the softer rock <em>around</em> it — but the hard lava cap protected the ground beneath it. What\'s left are two flat-topped mesas standing above a valley that used to be as high as they are. The land didn\'t rise; everything else wore <b>down</b>.</p><p><b>Crater Lake</b> is the collapsed heart of Mt. Mazama — the <b>caldera</b> from the eruption the Klamath remembered. It\'s the deepest lake in the United States, filled only by rain and snow, which is why it\'s that unreal blue.</p><p>The <b>Takelma</b> lived around the Table Rocks and the Rogue; the <b>Klamath</b> around Mazama. Their history here goes back thousands of years and continues today — the same ground, still being read.</p>' },
        { type: 'choice', title: 'Show what you know — your pick', note: 'Take the deep-time story of your own valley and make it yours. Pick how to show it.', options: [
          { kind: 'draw', label: 'Draw it', input: 'link', prompt: 'Sketch a labeled diagram of how the Table Rocks ended up ABOVE the valley (the lava cap protected the rock while everything around it eroded down). Snap a photo and paste the link.' },
          { kind: 'write', label: 'Write it', input: 'text', prompt: 'Write a short paragraph tying together the science (Crater Lake is a caldera) and the history (the Klamath account of Mazama) — and what it changes to realize deep time is in your own backyard, not just far away.' },
          { kind: 'record', label: 'Record it', input: 'link', prompt: 'Record a 60-second "local geology tour" explaining the Table Rocks OR Crater Lake to someone who\'s never seen it. Paste the link.' },
        ] },
        { type: 'next', text: 'Last stop: pull the whole unit together.' },
      ],
    },

    /* ───────────────── PHASE 4 · REFLECTION ───────────────── */
    {
      id: 'reflect-a', n: 15, title: 'Reflection · A — Look Back', subject: 'Portfolio', minutes: 35, standards: 'self-assessment',
      blocks: [
        { type: 'prose', body: '<p>You made it through the whole unit — from 4.6 billion years to your own backyard. Before your final write-up, look back at where you started and check what stuck.</p>' },
        { type: 'kwlback', prompt: 'Here\'s what you wrote on day one. Read it — you knew less about deep time than you do now.' },
        { type: 'vocabsort', title: 'Which words do you own now?', note: 'Be honest. Tap each word: "got it cold" or "still fuzzy." The fuzzy ones are just your study list.' },
        { type: 'next', text: 'Last card: your big answer.' },
      ],
    },
    {
      id: 'reflect-b', n: 16, title: 'Reflection · B — Your Answer', subject: 'Portfolio', minutes: 40, standards: '7.W.2 · synthesis',
      blocks: [
        { type: 'prose', body: '<p>Here\'s the whole unit in one place. Answer the essential question with what you learned — the science, the history, and your own valley. Every time you make a claim, back it with <b>evidence</b>. Work in at least <b>five</b> unit words.</p><blockquote>The ground remembers everything — so who can read what it wrote?</blockquote>' },
        { type: 'answers', prompts: [
          'Your answer to the big question (a few strong paragraphs — use evidence and at least 5 unit words):',
        ] },
        { type: 'kwlfinish', prompt: 'Finish your KWL. Now that it\'s over:' },
        { type: 'rubric', title: 'Give yourself an honest check', items: [
          'I can explain deep time and why it\'s so hard to picture.',
          'I can explain the rock cycle and the three rock types.',
          'I can read a set of rock layers (superposition, fossils) and say what happened.',
          'I explained plate tectonics with real evidence that continents move.',
          'I connected the science to human history (Pompeii, Mazama) AND to my own valley.',
          'Every claim I made, I backed with evidence — and I used at least five unit words.',
        ] },
        { type: 'done', text: 'That\'s the unit. Nice work reading the ground — you can see everything you made on your reflection any time.' },
      ],
    },

  ],
});
