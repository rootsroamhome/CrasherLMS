/**
 * unit-clep-rome.js — CLEP Unit 3: Rome, Republic to Empire (Modern States Module 3)
 *
 * Same pattern as Modules 1–2: real content + assessments, NO meta, fun on top.
 * Lessons 3.1–3.11 on Modern States. Quiz-aligned to the real Module 3 quiz
 * (roads, Augustus/one-man rule, civil codes, civitas, 476 CE, Colosseum, 509 BCE
 * Republic, Germanic tribes, war-captive slaves, Pax Romana, Caesar, struggle of the
 * orders, Christianity, Diocletian). track:'clep'. See docs/BUILDING-CLEP-UNITS.md.
 */

(function () {
const MS = 'https://learn.modernstates.org/d2l/le/discovery/view/course/6858';
const MS_SIGNUP = 'https://register.modernstates.org';

window.HS_UNITS = window.HS_UNITS || [];
window.HS_UNITS.push({
  id: 'clep-rome',
  short: 'CLEP · Rome',
  title: 'Rome: Republic to Empire (CLEP Western Civ I · Module 3)',
  track: 'clep',
  eq: 'How did one city end up ruling the whole Mediterranean — and was it a republic or an empire?',
  image: 'assets/units/clep-rome.jpg',

  parent: {
    hotspots: [
      'Module 3 of the CLEP course — Rome. He watches Modern States 3.1–3.11 and does these cards (~14 short lessons).',
      'The spine is one arc: <b>Monarchy → Republic (509 BCE) → Empire (Augustus) → decline and fall (476 CE)</b>. If he can tell that story in order, the details hang on it.',
      'Two dates the exam really wants: <b>509 BCE</b> (Republic begins) and <b>476 CE</b> (Western Empire falls). Worth memorizing.',
      'Rome\'s lasting legacy is practical: <b>roads, law (civil codes), and the idea of the citizen (civitas / civic duty)</b> — plus the rise of Christianity inside a pagan empire.',
    ],
    activities: [
      { tier: 'Small', title: 'One timeline, four dates', detail: 'Put four cards on the wall: 753 BCE (legend of Rome\'s founding), 509 BCE (Republic), 27 BCE (Augustus/Empire), 476 CE (fall). Everything else slots between them.', cost: 'Free', time: '15 min' },
      { tier: 'Medium', title: 'Republic vs. Empire debate', detail: 'Ask him: was Rome better as a republic (shared power, messy) or an empire (one ruler, orderly)? Make him argue both sides. That IS the module\'s big question — the CrashCourse title even asks it.', cost: 'Free', time: '30 min' },
      { tier: 'Large', title: 'A Roman mystery', detail: 'Hand him the first Roman Mysteries book (The Thieves of Ostia) — a fun detective series set in a real Roman port town. History soaks in sideways.', cost: 'Library', time: 'Across the module' },
    ],
  },

  vocab: {
    mustOwn: [
      { term: 'republic',       def: 'A government where citizens elect officials to rule for them — no king. Rome founded one in 509 BCE.' },
      { term: 'patrician',      def: 'A member of Rome\'s wealthy noble class.' },
      { term: 'plebeian',       def: 'An ordinary Roman commoner — the majority.' },
      { term: 'civitas',        def: 'Roman "citizenship" and the civic duty that came with it — belonging to and serving the state.' },
      { term: 'Pax Romana',     def: 'The "Roman Peace" — about 200 years of relative stability and prosperity across the empire.' },
      { term: 'Augustus',       def: 'Rome\'s first emperor; ended the Republic and established one-man rule (the Principate).' },
      { term: 'Colosseum',      def: 'Rome\'s giant arena, where the public watched gladiator games.' },
      { term: 'Christianity',   def: 'The monotheistic faith that spread through Rome and eventually became the empire\'s religion.' },
      { term: 'civil law',      def: 'Rome\'s written legal codes — a foundation of Western law ever since.' },
    ],
    frayer: [
      {
        term: 'republic (Roman)',
        definition: 'A government without a king, in which citizens elect officials (like consuls and senators) to govern on their behalf, with power deliberately split so no one person can seize it all. Rome ran as a republic from 509 BCE until Augustus.',
        examples: ['Two consuls elected each year, checking each other', 'The Senate debating and passing laws', 'Plebeians winning their own representatives (tribunes)'],
        nonexamples: ['A king ruling for life (the monarchy Rome overthrew)', 'Augustus ruling alone as emperor (that\'s the Empire)', 'A direct democracy where every citizen votes on everything (that was Athens)'],
        sentence: 'A republic spreads power among elected officials so no single person can hold it all — which is exactly what Augustus later undid.',
      },
      {
        term: 'Pax Romana',
        definition: 'The "Roman Peace": roughly 200 years (starting with Augustus) of relative stability, safe roads and seas, booming trade, and expanding cities across the whole empire. Not literally war-free, but unusually secure for the ancient world.',
        examples: ['Merchants moving goods safely from Britain to Egypt', 'New roads, aqueducts, and cities being built', 'A common law and coinage across the Mediterranean'],
        nonexamples: ['The civil wars that killed the Republic (before it)', 'The chaotic invasions of the 400s CE (after it)'],
        sentence: 'The Pax Romana was the payoff of one-man rule — stability bought at the price of the Republic\'s shared power.',
      },
    ],
  },

  cards: [

    /* ───────────────── LAUNCH ───────────────── */
    {
      id: 'launch', n: 1, title: 'Module 3: Rome',
      subject: 'Social Science', minutes: 20, standards: '',
      blocks: [
        { type: 'hook', text: 'Rome started as one city on a river and ended up ruling everything from Britain to Egypt. Along the way it threw out its king, built the world\'s best roads and laws, argued for centuries about who should be in charge, and slowly turned from a <b>republic</b> run by citizens into an <b>empire</b> run by one man.' },
        { type: 'prose', body: '<p>Same setup: watch the short Modern States lessons (<b>Module 3: Rome — Republic to Empire</b>, lessons 3.1–3.11) and use these cards with them. The whole module is one storyline, so hold onto the order:</p><p style="text-align:center;"><b>Kings → Republic (509 BCE) → Empire (Augustus) → Fall (476 CE).</b></p>' },
        { type: 'flashcards', title: 'Meet the words first', note: 'Tap to flip. These come back all module long.' },
        { type: 'video', title: 'Open Module 3 on Modern States', url: MS, label: '▶ Open Western Civ I on Modern States', focus: 'Log in, open Module 3, watch the intro and 3.1.' },
        { type: 'kwl', prompt: 'Quick gut-check — no wrong answers.',
          klabel: 'What I already know about ancient Rome (gladiators, emperors, roads, the fall):',
          wlabel: 'What I want to be able to explain by the end:' },
        { type: 'next', text: 'Next: Rome kicks out its king and builds a republic — and how it ran.' },
      ],
    },

    /* ───────────────── 3.1–3.4  The Republic ───────────────── */
    {
      id: 'republic', n: 2, title: 'The Republic and how Rome was built',
      subject: 'Social Science', minutes: 30, standards: '7.C.PI.1',
      blocks: [
        { type: 'hook', text: 'In <b>509 BCE</b>, Rome threw out its last king and swore never to let one person rule again. In its place they built a <b>republic</b> — power split among elected officials — plus the roads, laws, and idea of citizenship that outlasted Rome by two thousand years.' },
        { type: 'prose', body: '<p><b>The Republic (from 509 BCE).</b> Instead of a king, Romans elected officials (two <b>consuls</b> a year, a <b>Senate</b>, and more), with power deliberately divided so no one could grab it all.</p><p><b>The struggle of the orders.</b> Early Rome was split between <b>patricians</b> (wealthy nobles) and <b>plebeians</b> (ordinary commoners). For generations the plebeians pushed for rights — this "struggle of the orders" was a fight of <b>elites vs. commoners</b>, and the plebeians slowly won representation.</p><p><b>Rome\'s practical genius (its lasting legacy):</b></p><ul><li><b>Roads</b> — an enormous network that <b>connected the empire\'s cities</b>, moving armies, trade, and messages ("all roads lead to Rome").</li><li><b>Law</b> — written <b>civil codes</b> that became a foundation of Western law.</li><li><b>Civitas</b> — citizenship, and the <b>civic duty</b> that came with belonging to Rome.</li></ul><p><b>The Punic Wars</b> (vs. Carthage) then made Rome the master of the whole Mediterranean.</p>' },
        { type: 'video', title: 'Modern States 3.1–3.4 — Roman society, government, the Punic Wars', url: MS, label: '▶ Watch 3.1–3.4 on Modern States', focus: 'Lock in: 509 BCE = Republic; roads/law/civitas = Rome\'s legacy; struggle of the orders = patricians vs. plebeians.' },
        { type: 'prose', body: '<p><b>🔎 As you watch, see if you can answer:</b></p><ol><li>What government <b>replaced the monarchy in 509 BCE</b>?</li><li>What did Roman <b>roads</b> do?</li><li>The <b>struggle of the orders</b> was between which two groups?</li><li>What did <b>civitas</b> mean?</li></ol>' },
        { type: 'quiz', questions: [
          { q: 'What government replaced the Roman monarchy in 509 BCE?', options: ['dictatorship', 'confederacy', 'empire', 'republic'], answer: 3 },
          { q: 'Roman roads helped by…', options: ['stopping uprisings', 'blocking armies', 'connecting cities', 'limiting travel'], answer: 2 },
          { q: 'The struggle of the orders involved…', options: ['tribes vs. priests', 'elites vs. commoners', 'cities vs. provinces', 'emperors vs. consuls'], answer: 1 },
          { q: 'The Roman idea of civitas meant…', options: ['absolute rule', 'slave labor', 'civic duty', 'military ranks'], answer: 2 },
        ] },
        { type: 'matching', title: 'Vocabulary — match each to its plain meaning', pairs: [
          { term: 'republic', def: 'A government where citizens elect officials — no king (Rome, from 509 BCE).' },
          { term: 'patrician', def: 'A member of Rome\'s wealthy noble class.' },
          { term: 'plebeian', def: 'An ordinary Roman commoner.' },
          { term: 'civitas', def: 'Roman citizenship and the civic duty that came with it.' },
        ] },
        { type: 'answers', prompts: [
          'Put this in your own words: "The Roman Republic distributed authority among elected magistrates and the Senate specifically to prevent any individual from monopolizing power."',
        ] },
        { type: 'prose', body: '<p><b>Bring it to life</b></p><ul><li>🎬 <a href="https://www.youtube.com/watch?v=oPf27gAup9U">The Roman Empire. Or Republic. Or… Which Was It? — CrashCourse World History #10</a> — the exact question this module asks.</li><li>📚 <i>The Thieves of Ostia</i> (The Roman Mysteries) by Caroline Lawrence — a detective adventure set in a real Roman port; daily Roman life without a textbook.</li></ul>' },
        { type: 'next', text: 'Next: the Republic wins everything — then tears itself apart over one ambitious general.' },
      ],
    },

    /* ───────────────── 3.5–3.8  Fall of the Republic → Augustus ───────────────── */
    {
      id: 'caesar', n: 3, title: 'Caesar, the Republic\'s fall, and Augustus',
      subject: 'Social Science', minutes: 30, standards: '7.H.CH.3',
      blocks: [
        { type: 'hook', text: 'Winning the whole Mediterranean made a few Romans fabulously rich and powerful — and broke the Republic. One general, <b>Julius Caesar</b>, grabbed so much power the Senate stabbed him to death to save the Republic. It didn\'t work: his heir <b>Augustus</b> became Rome\'s first <b>emperor</b>.' },
        { type: 'prose', body: '<p><b>Cracks in the Republic.</b> Conquest brought floods of wealth and <b>enslaved war captives</b> (how most Romans became slaves — through <b>war captivity</b>), widening the gap between rich and poor and fueling civil wars.</p><p><b>Julius Caesar.</b> A brilliant, wildly popular general, Caesar accumulated so much personal power that senators feared he\'d make himself king — so in 44 BCE they <b>assassinated him because he had gained too much power</b>.</p><p><b>Augustus.</b> Caesar\'s adopted heir won the civil wars that followed and, in 27 BCE, took sole control — carefully keeping republican <em>appearances</em> while actually <b>establishing one-man rule</b> (the Principate). Rome was now an <b>empire</b>. His reign opened the <b>Pax Romana</b> — the "Roman Peace," ~200 years of stability and prosperity.</p>' },
        { type: 'video', title: 'Modern States 3.5–3.8 — Decline of the Republic; Augustus', url: MS, label: '▶ Watch 3.5–3.8 on Modern States', focus: 'Why the Senate killed Caesar (too much power); how Augustus turned the Republic into one-man rule; what the Pax Romana was.' },
        { type: 'prose', body: '<p><b>🔎 As you watch, see if you can answer:</b></p><ol><li>Why did senators kill <b>Julius Caesar</b>?</li><li>How did <b>Augustus</b> change Rome?</li><li>What does <b>Pax Romana</b> mean?</li><li>How did most people become Roman <b>slaves</b>?</li></ol>' },
        { type: 'quiz', questions: [
          { q: 'Why did senators kill Julius Caesar?', options: ['he raised taxes', 'he gained too much power', 'he moved the capital', 'he lost a war'], answer: 1 },
          { q: 'Augustus changed Rome by…', options: ['abolishing law', 'joining Persia', 'removing taxes', 'establishing one-man rule'], answer: 3 },
          { q: 'What does Pax Romana mean?', options: ['Roman peace', 'border war', 'imperial rule', 'Roman trade'], answer: 0 },
          { q: 'How did most people become Roman slaves?', options: ['legal punishment', 'birthright', 'war captivity', 'religious choice'], answer: 2 },
        ] },
        { type: 'matching', title: 'Vocabulary — match each to its plain meaning', pairs: [
          { term: 'Augustus', def: 'Rome\'s first emperor; ended the Republic and set up one-man rule.' },
          { term: 'Pax Romana', def: 'The "Roman Peace" — ~200 years of stability and prosperity.' },
          { term: 'Julius Caesar', def: 'The general killed by senators for gaining too much power.' },
          { term: 'Senate', def: 'Rome\'s council of leading men — powerful under the Republic.' },
        ] },
        { type: 'answers', prompts: [
          'Put this in your own words: "Augustus retained the outward forms of the Republic while concentrating real authority in himself, inaugurating the imperial era."',
        ] },
        { type: 'next', text: 'Next: the empire at its height — and the slow slide to 476.' },
      ],
    },

    /* ───────────────── 3.9–3.11  Empire, Christianity, Fall ───────────────── */
    {
      id: 'fall', n: 4, title: 'Empire, Christianity, and the fall of Rome',
      subject: 'Social Science', minutes: 30, standards: '7.H.CH.3',
      blocks: [
        { type: 'hook', text: 'At its peak, Rome fed 50,000 roaring fans into the <b>Colosseum</b> to watch gladiators. Within a few centuries, that same empire had split in two, adopted a once-outlawed religion — <b>Christianity</b> — and, in the west, collapsed under invasion in <b>476 CE</b>.' },
        { type: 'prose', body: '<p><b>Bread and circuses.</b> Emperors kept the city happy with free grain and spectacle — most famously <b>gladiator games</b> in the <b>Colosseum</b>.</p><p><b>Christianity.</b> A new <b>monotheistic</b> faith spread through the empire despite persecution. Because it worshipped <b>one God</b> and refused to worship the emperor, it directly <b>challenged Roman beliefs</b> — yet it kept growing, and eventually became the empire\'s official religion.</p><p><b>Reorganizing a struggling empire.</b> Facing crisis, the emperor <b>Diocletian divided the empire</b> (east and west) to make it governable; <b>Constantine</b> later reunited it, legalized Christianity, and founded Constantinople.</p><p><b>The fall (476 CE).</b> The wealthier <b>eastern</b> half survived (as the Byzantine Empire), but the <b>western</b> half weakened and was overrun by <b>Germanic tribes</b>; the last western emperor was deposed in <b>476 CE</b>. When Roman government collapsed in the west, Europe entered the Middle Ages — Module 4.</p>' },
        { type: 'video', title: 'Modern States 3.9–3.11 — Diocletian & Constantine; invasions & Christianity', url: MS, label: '▶ Watch 3.9–3.11 on Modern States', focus: 'Diocletian divided the empire; Christianity challenged Roman religion with one God; Germanic tribes brought down the West in 476 CE.' },
        { type: 'prose', body: '<p><b>🔎 As you watch, see if you can answer:</b></p><ol><li>What did the <b>Colosseum</b> host?</li><li>Which religion <b>challenged Roman beliefs with one God</b>?</li><li>What did <b>Diocletian</b> do to the empire?</li><li>Which groups weakened the West, and in what year did it end?</li></ol>' },
        { type: 'quiz', questions: [
          { q: 'The Colosseum hosted…', options: ['political trials', 'public debates', 'gladiator games', 'Senate meetings'], answer: 2 },
          { q: 'What religion challenged Roman beliefs with one god?', options: ['Mithraism', 'Buddhism', 'Christianity', 'Zoroastrianism'], answer: 2 },
          { q: 'What did Diocletian do to the empire?', options: ['outlawed trade', 'closed roads', 'divided it', 'moved it to Asia'], answer: 2 },
          { q: 'The Western Roman Empire ended in…', options: ['1066 CE', '1492 CE', '476 CE', '313 CE'], answer: 2 },
          { q: 'Which groups weakened the Western Empire?', options: ['Mongols', 'Egyptians', 'Persians', 'Germanic tribes'], answer: 3 },
        ] },
        { type: 'matching', title: 'Vocabulary — match each to its plain meaning', pairs: [
          { term: 'Colosseum', def: 'Rome\'s great arena for gladiator games.' },
          { term: 'Christianity', def: 'The one-God faith that spread through Rome and challenged its religion.' },
          { term: 'Diocletian', def: 'The emperor who divided the empire to make it governable.' },
          { term: '476 CE', def: 'The year the last Western Roman emperor was deposed — the "fall" of Rome.' },
        ] },
        { type: 'answers', prompts: [
          'Put this in your own words: "Weakened by internal strain and repeated Germanic incursions, the Western Roman Empire ceased to function as a unified state by 476 CE."',
        ] },
        { type: 'prose', body: '<p><b>Bring it to life</b></p><ul><li>📚 <i>Asterix</i> (comics) by Goscinny &amp; Uderzo — a tiny Gaulish village holds out against Rome. Hilarious, and soaked in real Roman detail (legions, roads, Caesar himself).</li></ul>' },
        { type: 'next', text: 'Last card: pull Rome together and take the Modern States quiz.' },
      ],
    },

    /* ───────────────── REFLECTION ───────────────── */
    {
      id: 'reflect', n: 5, title: 'Module 3 check',
      subject: 'Social Science', minutes: 30, standards: 'RI.7.8',
      blocks: [
        { type: 'prose', body: '<p>The arc, start to finish: Rome dumps its king and builds a <b>Republic (509 BCE)</b> → conquers the Mediterranean and gives the world <b>roads, law, and citizenship</b> → the wealth breaks the Republic, <b>Caesar</b> is killed, and <b>Augustus</b> makes himself emperor → the <b>Pax Romana</b> → <b>Christianity</b> rises, <b>Diocletian</b> splits the empire → the West falls to <b>Germanic tribes</b> in <b>476 CE</b>.</p><p>Now take the real thing: open Module 3 on Modern States and do its summary + module quiz.</p>' },
        { type: 'practice', title: 'Take the Modern States Module 3 quiz', note: 'Log in, open Module 3, do the Summary and the module quiz. Rewatch any lesson you miss.', links: [
          { url: MS, label: 'Open Module 3 on Modern States' },
        ] },
        { type: 'kwlback', prompt: 'Here\'s what you wrote at the start. Look how much you can hang on it now.' },
        { type: 'vocabsort', title: 'Which words do you own now?', note: 'Tap each: "got it cold" or "still fuzzy." The fuzzy ones are your study list.' },
        { type: 'rubric', title: 'Give yourself an honest check', items: [
          'I can put the four big moments in order: monarchy → Republic (509 BCE) → Empire (Augustus) → fall (476 CE).',
          'I can explain the struggle of the orders (patricians vs. plebeians).',
          'I can name Rome\'s big legacies: roads, civil law, and civitas.',
          'I can explain why Caesar was killed and how Augustus changed Rome.',
          'I can explain how Christianity and Germanic invasions reshaped the empire.',
        ] },
        { type: 'done', text: 'Module 3 down. Next is the Middle Ages — what grows in the wreckage of Rome: knights, castles, the Church, and the Black Death.' },
      ],
    },

  ],
});
})();
