/**
 * unit-clep-early-civ.js — CLEP Unit 1: Ancient Near East (Modern States Module 1)
 *
 * The FIRST college-credit elective. Structured like the Khan math units — our
 * hook + explainer + pre-taught vocab + our own quick checks — but the videos and
 * readings DEEP-LINK to the matching Modern States course (CLEP Western Civ I,
 * "Module 1: Pre-History — Early Civilizations", lessons 1.1–1.7).
 *
 * ⚠️ Deep-link note: unlike Khan, Modern States gates its lessons behind a free
 * login (Brightspace at learn.modernstates.org, course 6858). There are no clean
 * per-video public URLs, so every link lands at the course; each card names the
 * exact lesson number (e.g. "watch 1.2") to open once he's in. He signs up free
 * once at register.modernstates.org, then "Continue To Course."
 *
 * Marked `track: 'clep'` → brown theme, its own switcher group + Big Picture column
 * (CLEP_PLAN), kept out of the daily interdisciplinary + math slots. This pairs
 * deliberately with the year: Module 1 = Mesopotamia + Bronze/Iron, so it reinforces
 * Unit 1 (Rivers) and Unit 2 (Metals). Taken slow — one CLEP course start to Feb,
 * when Crasher turns 13 and can sit the exam.
 */

(function () {
const MS = 'https://learn.modernstates.org/d2l/le/discovery/view/course/6858';   // Module 1 lives here (log in first)
const MS_SIGNUP = 'https://register.modernstates.org';                            // free account, no card

window.HS_UNITS = window.HS_UNITS || [];
window.HS_UNITS.push({
  id: 'clep-early-civ',
  short: 'CLEP · Ancient Near East',
  title: 'The First Civilizations (CLEP Western Civ I · Module 1)',
  track: 'clep',
  eq: 'Where does "Western civilization" actually begin — and how do we know?',
  image: 'assets/units/clep-early-civ.jpg',

  parent: {
    hotspots: [
      'This is the <b>college-credit elective</b>, taken slowly. It follows Modern States\' free <b>CLEP Western Civilization I</b> course. Finish the whole course by February, when he turns 13 and is old enough to sit the CLEP exam — a passing score is worth real college credit, at no cost.',
      'One-time setup: make a <b>free</b> Modern States account together at <code>register.modernstates.org</code> (no credit card), then open the Western Civ I course. Each card here tells him which numbered lesson to watch there — <b>1.1, 1.2</b>, and so on.',
      'The point of these HomeSkewl cards is the same as the math ones: he does the <b>videos + reading on Modern States</b>, but he <b>reads, predicts, and self-checks here first</b> so he\'s not passively watching. Do the quick check before moving on.',
      'It <b>double-counts</b> with the year on purpose. Module 1 is Mesopotamia and the Bronze/Iron Ages — the exact ground of <b>Unit 1 (Rivers)</b> and <b>Unit 2 (Metals)</b>. He\'s not adding a subject; he\'s going deeper on one he\'s already in.',
      'Pace: roughly <b>one Modern States lesson per sitting, one module a month</b>. Module 1 is ~1h40m of video across 7 short lessons. No rush — the exam voucher and the birthday set the finish line, not us.',
    ],
    activities: [
      { tier: 'Small', title: 'Make the account together', detail: 'Sit down for ten minutes and set up the free Modern States login at register.modernstates.org, then click into Western Civilization I and find "Module 1." Bookmark it. That\'s the whole barrier to entry — do it once and he\'s in.', cost: 'Free', time: '10 min' },
      { tier: 'Medium', title: 'Timeline on the wall', detail: 'As he goes, build a paper timeline of the Ancient Near East: Sumer → Akkad → Babylon (Hammurabi) → Assyria → Persia, with Egypt running alongside. Seeing the order beats memorizing dates cold — and it\'s exactly how the CLEP tests it.', cost: 'Free', time: 'Across the module' },
      { tier: 'Large', title: 'Aim at the free exam', detail: 'When he finishes the whole course, Modern States gives a voucher that covers the CLEP exam fee. Register him for the test the month he turns 13. Passing = college credit before high school. That\'s the real prize — keep it visible.', cost: 'Free (voucher)', time: 'By February' },
    ],
  },

  vocab: {
    mustOwn: [
      { term: 'civilization',   def: 'A large, settled society with cities, a food surplus, specialized jobs, writing, and organized government.' },
      { term: 'Fertile Crescent', def: 'The arc of good farmland from the Nile up through the Levant and down the Tigris–Euphrates — the cradle of the first Near Eastern civilizations.' },
      { term: 'Mesopotamia',    def: 'Greek for "land between the rivers" — the Tigris and Euphrates valley, home to Sumer, Akkad, and Babylon.' },
      { term: 'city-state',     def: 'A self-governing city plus the farmland around it — the basic political unit of early Sumer (e.g. Ur, Uruk).' },
      { term: 'cuneiform',      def: 'The wedge-shaped writing pressed into clay tablets in Mesopotamia — one of the world\'s first writing systems.' },
      { term: 'ziggurat',       def: 'A giant stepped temple-tower at the center of a Mesopotamian city, built to honor its god.' },
      { term: 'Epic of Gilgamesh', def: 'Mesopotamia\'s great story — a king\'s failed quest for immortality; it\'s about mortality and kingship, and contains a great flood.' },
      { term: 'polytheism',     def: 'Belief in many gods — the norm across Mesopotamia and Egypt.' },
      { term: 'monotheism',     def: 'Belief in one god — the distinctive idea of the ancient Hebrews (Israel and Judah).' },
      { term: 'empire',         def: 'One state that rules over many other peoples and territories, usually by conquest and tribute.' },
      { term: 'primary source', def: 'Evidence made at the time by someone who was there — a law code, a letter, an inscription — as opposed to a later account.' },
    ],
    frayer: [
      {
        term: 'civilization',
        definition: 'A complex, city-based society. Historians look for a cluster of features together: dependable food surplus, cities, specialized labor, social classes, organized government/religion, and writing.',
        examples: ['Sumer, with Uruk\'s temples, kings, scribes, and cuneiform records', 'Old Kingdom Egypt: pharaoh, priests, tax records, hieroglyphs', 'Babylon under Hammurabi: a written law code binding a whole realm'],
        nonexamples: ['A single nomadic hunting band (no cities, no surplus, no writing)', 'A farming village with no specialists, classes, or records — settled, but not yet a civilization'],
        sentence: 'Surplus food frees some people from farming, and from that specialization comes everything else we call civilization.',
      },
      {
        term: 'primary source',
        definition: 'A record produced at the time of the events by a participant or eyewitness. It is the raw evidence historians reason FROM — always shaped by its author\'s viewpoint and purpose.',
        examples: ['Hammurabi\'s Law Code carved on a stone stele', 'A Sumerian clay tablet recording a grain sale', 'A royal Assyrian inscription boasting of a conquest'],
        nonexamples: ['A modern textbook chapter about Hammurabi (that\'s a secondary source)', 'This lesson card (also secondary — it explains, it isn\'t evidence)'],
        sentence: 'A primary source tells you what happened AND whose interests the author was serving — read it for both.',
      },
    ],
  },

  cards: [

    /* ───────────────── LAUNCH ───────────────── */
    {
      id: 'launch', n: 1, title: 'College credit — starting now, one lesson at a time',
      subject: 'Social Science', minutes: 20, standards: '',
      blocks: [
        { type: 'hook', text: 'Here\'s the deal almost no 12-year-old knows about: there\'s a real college exam called <b>CLEP</b>, and if you pass it, colleges give you actual credit — a class you never have to take (or pay for) later. This one is <b>Western Civilization I</b>, and it starts exactly where you already are: the first cities, on the first rivers. You can take the test once you\'re 13 — no rush at all, one short lesson at a time.' },
        { type: 'prose', body: '<p>The videos and reading for this live on a free site called <b>Modern States</b>. Get in once, with your parent:</p><ol><li>Make a free account at <b>register.modernstates.org</b> — no credit card, ever.</li><li>Open <b>"Western Civilization I: Ancient Near East to 1648."</b></li><li>Go to <b>Module 1: Pre-History — Early Civilizations.</b></li></ol><p>Each card here points you to the exact lesson to watch — <b>"1.1," "1.2,"</b> and so on. Seven short lessons, about a movie\'s worth of video, and you go at whatever pace you like.</p><p class="tie-in">🔗 You\'ve already been here: Module 1 is Mesopotamia and the Bronze and Iron Ages — the same world as your <b>Rivers</b> and <b>Metals</b> units.</p>' },
        { type: 'flashcards', title: 'Meet the words first', note: 'Tap a card to flip it. These come back all module long.' },
        { type: 'video', title: 'Open the course (Module 1)', url: MS, label: '▶ Open Western Civ I on Modern States', focus: 'First time? Sign up free at register.modernstates.org, then come back and open this. Find "Module 1" and watch the short intro (lesson 1) and 1.1.' },
        { type: 'kwl', prompt: 'Quick gut-check before we start — no wrong answers, this is just you.',
          klabel: 'What I already know about the first cities, Mesopotamia, or the Bronze Age (from Rivers & Metals):',
          wlabel: 'What I want to be able to do by the time I take the exam:' },
        { type: 'next', text: 'Next: why historians slice the deep past into a Stone, Bronze, and Iron Age — and what that has to do with your Metals unit.' },
      ],
    },

    /* ───────────────── 1.1 ───────────────── */
    {
      id: 'ages', n: 2, title: 'Stone, Bronze, Iron: how we cut up the deep past',
      subject: 'Social Science', minutes: 25, standards: '7.H.CH.3',
      blocks: [
        { type: 'hook', text: 'We name whole ages of humanity after <b>what people made their sharpest tools out of</b> — Stone Age, then Bronze Age, then Iron Age. That\'s not an accident. The material you can work decides what you can farm, build, trade, and conquer. You argued almost exactly this in your Metals unit.' },
        { type: 'prose', body: '<p>Historians break the long stretch before written records into ages named for tool material:</p><ul><li><b>Paleolithic (Old Stone Age)</b> — chipped stone tools, hunting and gathering, no farming.</li><li><b>Neolithic (New Stone Age)</b> — the huge turn: <b>farming and herding</b> begin (~10,000 BCE). People settle, food surplus appears, villages grow.</li><li><b>Bronze Age</b> (~3300 BCE in the Near East) — people alloy <b>copper + tin → bronze</b>. Harder tools and weapons; the first cities and writing show up in this age.</li><li><b>Iron Age</b> (~1200 BCE) — iron is harder and, crucially, its ore is <b>common</b>, so weapons and tools spread far beyond the rich few.</li></ul><p>The single most important line here is the <b>Neolithic Revolution</b>: once farming makes a surplus, not everyone has to farm. Some people become potters, priests, soldiers, scribes, kings. <b>Specialization</b> is the seed of civilization — the exact domino chain you built in Unit 1.</p><p class="tie-in">🔗 <b>Tie-in — Metals:</b> you already made the argument that "changing what things are made of changes who has power." The CLEP just wants the vocabulary and rough dates attached to it. Bronze = exclusive (tin is rare); iron = democratizing (ore is everywhere). Same idea, exam words.</p>' },
        { type: 'video', title: 'Modern States 1.1 — Stone, Neolithic, Bronze, Iron Ages', url: MS, label: '▶ Watch 1.1 on Modern States', focus: 'Watch for the ORDER and roughly when each age starts. You don\'t need exact dates — you need the sequence and why each material mattered.' },
        { type: 'prose', body: '<p><b>🔎 As you watch 1.1, see if you can answer:</b></p><ol><li>The <b>order</b>: Stone → Bronze → Iron, and roughly when each began.</li><li>What actually changed at the <b>Neolithic Revolution</b>?</li><li><b>Why did iron spread power more widely</b> than bronze?</li></ol>' },
        { type: 'prose', body: '<p><b>Bring it to life</b></p><ul><li>🎬 <a href="https://www.youtube.com/watch?v=xVf5kZA0HtQ">Ancient Mesopotamia 101 (National Geographic)</a> — 12 minutes, and the shots of the first cities are unreal.</li><li>📚 <i>The Cartoon History of the Universe, Vol. 1</i> by Larry Gonick — a hilarious graphic history that tears from the Stone Age into the first civilizations. If one book hooks you on this whole thing, it\'s this one.</li></ul>' },
        { type: 'quiz', questions: [
          { q: 'Which change defines the Neolithic Revolution?', options: ['The invention of iron weapons', 'The beginning of farming and herding', 'The building of the first empires', 'The invention of writing'], answer: 1 },
          { q: 'Why did the Iron Age spread power more widely than the Bronze Age?', options: ['Iron is prettier than bronze', 'Iron ore is common, so more people could arm themselves', 'Iron was invented by kings', 'Bronze cannot hold an edge'], answer: 1 },
          { q: 'A food surplus mattered most because it…', options: ['made people taller', 'freed some people from farming to specialize in other work', 'ended all warfare', 'was required to make bronze'], answer: 1 },
        ] },
        { type: 'matching', title: 'Vocabulary — match each to its plain meaning', pairs: [
          { term: 'Paleolithic', def: 'The Old Stone Age — people hunting and gathering, before any farming.' },
          { term: 'Neolithic', def: 'The New Stone Age — when farming and settled villages began.' },
          { term: 'alloy', def: 'A metal made by mixing two others (bronze = copper + tin).' },
          { term: 'artifact', def: 'An object made by people that we dig up and read as evidence.' },
          { term: 'a "revolution" (to historians)', def: 'A deep, lasting change in how people live — not always fast or violent.' },
        ] },
        { type: 'answers', prompts: [
          'Put it in your own words, like you\'re explaining it to a younger kid: "The mastery of metallurgy restructured early societies, for control over scarce alloys conferred disproportionate power on a small elite."',
        ] },
        { type: 'next', text: 'Next: zoom into the land between two rivers, where the first cities actually rose.' },
      ],
    },

    /* ───────────────── 1.2 ───────────────── */
    {
      id: 'mesopotamia', n: 3, title: 'Mesopotamia: the first cities and empires',
      subject: 'Social Science', minutes: 25, standards: '7.C.PI.1',
      blocks: [
        { type: 'hook', text: 'The world\'s first cities didn\'t appear just anywhere — they clustered in a hot, flood-prone valley between the <b>Tigris and Euphrates</b>. The rivers made the farming possible; the surplus made the cities possible; the cities, sitting close together and competing, made the first <b>empires</b> possible.' },
        { type: 'prose', body: '<p><b>Sumer</b> (southern Mesopotamia, ~3000 BCE) is the first civilization on the exam. It wasn\'t one country — it was a scatter of <b>city-states</b> like <b>Uruk, Ur, and Lagash</b>, each a city plus its farmland, each with its own king and patron god, often at war with the next.</p><p>Then comes the pattern the CLEP wants you to recognize — one city conquers the rest:</p><ul><li><b>Sargon of Akkad</b> (~2334 BCE) conquers the Sumerian city-states into the <b>first empire</b> in history.</li><li><b>Babylon</b> rises, and under <b>Hammurabi</b> (~1750 BCE) rules most of Mesopotamia — famous for a written law code (next card).</li><li>Much later, the <b>Assyrians</b> build a brutal, iron-armed empire, then the <b>Persians</b> the largest of all (you\'ll meet them in 1.7).</li></ul><p>Key idea: <b>city-state → empire</b>. Small competing cities get swallowed by whoever can field the biggest army and tax the most farmland.</p><p class="tie-in">🔗 <b>Tie-in — Rivers:</b> this is your Mesopotamia lesson, exam-flavored. The science of <em>why</em> the rivers made surplus (flood, silt, irrigation) you already have; the CLEP adds the political names — Sumer, Sargon, Babylon.</p>' },
        { type: 'video', title: 'Modern States 1.2 — Early Empires in Mesopotamia', url: MS, label: '▶ Watch 1.2 on Modern States', focus: 'Track the sequence: Sumerian city-states → Sargon/Akkad (first empire) → Babylon. That progression is a classic exam question.' },
        { type: 'prose', body: '<p><b>🔎 As you watch 1.2, trace one storyline:</b></p><ol><li>What was a <b>city-state</b>, and why were Sumer\'s cities always fighting?</li><li>How did <b>Sargon of Akkad</b> turn many cities into the first <b>empire</b>?</li><li>Where does <b>Babylon</b> come in?</li></ol>' },
        { type: 'prose', body: '<p><b>Bring it to life</b></p><ul><li>🎬 <a href="https://www.youtube.com/watch?v=sohXPx_XZ6Y">Mesopotamia — CrashCourse World History #3</a> — fast, funny, and it runs from the first city-states all the way to the Assyrians.</li><li>📚 <i>The Golden Bull</i> by Marjorie Cowley — a novel about a teenager sent to work in the ancient city of Ur; Sumer through a kid\'s eyes.</li></ul>' },
        { type: 'quiz', questions: [
          { q: 'The basic political unit of early Sumer was the…', options: ['nation-state', 'empire', 'city-state', 'colony'], answer: 2 },
          { q: 'Sargon of Akkad is remembered for creating…', options: ['the first written law code', 'the first empire in history', 'the alphabet', 'monotheism'], answer: 1 },
          { q: '"Mesopotamia" refers to the land between which two rivers?', options: ['The Nile and the Jordan', 'The Tigris and the Euphrates', 'The Indus and the Ganges', 'The Rhine and the Danube'], answer: 1 },
        ] },
        { type: 'matching', title: 'Vocabulary — match each to its plain meaning', pairs: [
          { term: 'dynasty', def: 'A line of rulers who come from the same family.' },
          { term: 'tribute', def: 'Wealth a conquered people is forced to pay its conqueror.' },
          { term: 'hierarchy', def: 'A ranking of people by power, from the top down.' },
          { term: 'scribe', def: 'A trained person who could read and write — a rare, powerful skill.' },
        ] },
        { type: 'answers', prompts: [
          'Put this in your own words for a younger kid: "The shift from independent city-states to a centralized empire meant local cities lost their self-rule to a single higher authority."',
        ] },
        { type: 'next', text: 'Next: your first real primary source — the actual words of Hammurabi\'s law.' },
      ],
    },

    /* ───────────────── 1.3 ───────────────── */
    {
      id: 'hammurabi', n: 4, title: 'Reading a primary source: Hammurabi\'s Code',
      subject: 'Social Science', minutes: 30, standards: 'RI.7.1',
      blocks: [
        { type: 'hook', text: 'Around 1750 BCE, King Hammurabi had 282 laws carved into a black stone pillar taller than a person, for everyone to see. It\'s one of the oldest written law codes on Earth — and because he wrote it himself, it\'s a <b>primary source</b>: real evidence you can read and reason from, the exact skill the CLEP tests.' },
        { type: 'read', title: 'From the Code of Hammurabi (selected laws)', body: '<blockquote><p>"If a man puts out the eye of another man, his eye shall be put out. [an eye for an eye]</p><p>If he breaks another man\'s bone, his bone shall be broken.</p><p>If a man puts out the eye of a freed man… he shall pay one gold mina.</p><p>If he puts out the eye of a man\'s slave… he shall pay one-half of its value.</p><p>If a builder builds a house and does not make it solid, and the house collapses and kills its owner, that builder shall be put to death."</p></blockquote><p class="src">— Code of Hammurabi, c. 1754 BCE (translation, abridged)</p>' },
        { type: 'answers', prompts: [
          'The punishment changes depending on whether the victim is a free man, a freed man, or a slave. What does that tell you about how this society was organized?',
          '"An eye for an eye" — how is that different from how punishment usually works today? Name one way it\'s harsh and one way it might have felt fair at the time.',
          'The last law makes a builder responsible with his life. What was Hammurabi trying to protect, and who did the law favor?',
          'This is a PRIMARY SOURCE. What can it prove that a modern textbook can\'t — and what is it NOT good evidence for?',
        ] },
        { type: 'video', title: 'Modern States 1.3 — Hammurabi\'s Law Code', url: MS, label: '▶ Watch 1.3 on Modern States', focus: 'Listen for WHY a written, public law code was such a big deal — everyone could see the same rules, and the king was bound to them too.' },
        { type: 'prose', body: '<p><b>🔎 As you watch 1.3, see if you can answer:</b></p><ol><li>Why was a <b>written, public</b> law code such a big deal?</li><li>How did punishments differ by <b>social class</b>, and what does that reveal about the society?</li><li>What was Hammurabi trying to hold together across his empire?</li></ol>' },
        { type: 'prose', body: '<p><b>Bring it to life</b></p><ul><li>🎬 <a href="https://www.youtube.com/watch?v=sohXPx_XZ6Y">CrashCourse World History #3</a> — has a great riff on the world\'s first law codes.</li><li>🏛️ <a href="https://www.worldhistory.org/hammurabi/">Hammurabi — World History Encyclopedia</a> — the story of the man behind the stone.</li></ul>' },
        { type: 'quiz', questions: [
          { q: 'Because Hammurabi\'s Code was made at the time by people who were there, historians call it a…', options: ['secondary source', 'primary source', 'legend', 'biography'], answer: 1 },
          { q: 'That the Code sets different penalties for free men, freed men, and slaves shows the society was…', options: ['completely equal', 'divided into social classes', 'a democracy', 'ruled by priests only'], answer: 1 },
        ] },
        { type: 'matching', title: 'Vocabulary — match each to its plain meaning', pairs: [
          { term: 'stele', def: 'A tall stone slab carved with writing, set up in public for all to see.' },
          { term: 'code (legal)', def: 'An organized, written set of laws.' },
          { term: 'retribution', def: 'Punishment meant to pay back a wrong — "an eye for an eye."' },
          { term: 'social class', def: 'A group in society ranked by wealth, birth, or power.' },
        ] },
        { type: 'answers', prompts: [
          'Put this in your own words: "Hammurabi\'s code established a system of retributive justice in which the severity of the punishment depended on the victim\'s social rank."',
        ] },
        { type: 'next', text: 'Next: the invention that made all of this recordable — writing — plus religion, and Egypt on the Nile.' },
      ],
    },

    /* ───────────────── 1.4  (Religion, Society & Literacy) ───────────────── */
    {
      id: 'belief', n: 5, title: 'Gods, temples, and the Epic of Gilgamesh',
      subject: 'Social Science', minutes: 30, standards: '7.C.PI.1',
      blocks: [
        { type: 'hook', text: 'Imagine a world where the flood that drowns your fields, the sun that burns your crops, and the disease that takes your child are each a <b>god</b> with a temper — and your job is to keep them happy. That was Mesopotamia. The gods weren\'t safe or fair; they <b>controlled nature and were unpredictable</b>, so people spent enormous effort keeping them fed, flattered, and calm.' },
        { type: 'prose', body: '<p><b>Polytheism (lesson 1.4).</b> Almost every ancient society was <b>polytheistic</b> — many gods and goddesses, each assigned to a force of nature: the storm, the sun, the river, fertility. Because nature (especially Mesopotamia\'s violent, surprise floods) felt dangerous and out of control, the gods were seen as powerful and <b>unpredictable</b>. People had to <b>appease</b> them — keep them happy — through ritual, sacrifice, offerings, and a paid class of <b>priests</b>. Prof. Flaten\'s blunt version: the gods had to be "bribed," and humans were made to feel small.</p><p><b>Ziggurats.</b> Each Mesopotamian city built a <b>ziggurat</b> — a giant stepped temple-tower, the tallest thing for miles — to <b>honor and house its city\'s god</b>. Religion wasn\'t a side activity; the temple was the center of the city.</p><p><b>Writing &amp; literacy.</b> The <b>Sumerians</b> are credited with the first writing system: <b>cuneiform</b>, wedge-shaped marks a trained <b>scribe</b> pressed into wet clay. It began as simple pictures (a sun = a circle with rays) and was mostly used for <em>accounting, records, and law</em> — not poetry. Baked hard, the clay tablets survived thousands of years, which is exactly why we know so much about Mesopotamia.</p><p><b>The rare exception — monotheism.</b> One idea stood out as strange: <b>monotheism</b>, one single all-powerful God. It was a tiny minority view in the ancient world — and you\'ll meet the people who held it (the Hebrews) two cards from now.</p>' },
        { type: 'prose', body: '<p><b>The Epic of Gilgamesh.</b> Mesopotamia\'s great story — one of the oldest in the world. <b>Gilgamesh</b> is a king, part-god, who rules (and bullies) his people. When his only friend dies, he\'s terrified of dying too, and sets off to win <b>immortality</b> — but at the last second a snake steals the magic plant, and he goes home still mortal. The whole epic is really about two things the exam wants you to name: <b>kingship</b> (what a ruler owes his people) and <b>mortality</b> (humans die; only the gods live forever). It even contains a <b>great flood</b> the gods send to wipe out humanity — with one man told to build an ark.</p><p class="tie-in">🔗 <b>Tie-in — Rivers:</b> you already met this flood in your Rivers unit! Gilgamesh\'s flood-and-ark is the <em>same story family</em> as Noah\'s — Flaten literally says "you might hear this story again when we get back to the Hebrews." That\'s <b>cultural borrowing</b>: one story traveling between peoples.</p>' },
        { type: 'video', title: 'Modern States 1.4 — Religion, Society and Literacy', url: MS, label: '▶ Watch 1.4 on Modern States', focus: 'Listen for WHY the gods had to be "appeased," and for how Flaten reads the Epic of Gilgamesh as being about immortality and kingship.' },
        { type: 'prose', body: '<p><b>🔎 As you watch 1.4, see if you can answer:</b></p><ol><li>What\'s the difference between <b>polytheism</b> and <b>monotheism</b> — and which was normal in the ancient world?</li><li>What were <b>ziggurats</b> for?</li><li>In the <b>Epic of Gilgamesh</b>, what is Gilgamesh chasing, and what does he learn about being human?</li></ol>' },
        { type: 'prose', body: '<p><b>Bring it to life</b></p><ul><li>📚 <i>Gilgamesh the King</i>, <i>The Revenge of Ishtar</i>, and <i>The Last Quest of Gilgamesh</i> by Ludmila Zeman — a stunning graphic-novel trilogy that tells the whole epic. Gorgeous, and the fastest way to actually <em>know</em> the story.</li><li>🎬 <a href="https://www.khanacademy.org/humanities/world-history/world-history-beginnings/ancient-mesopotamia/v/ancient-history-and-the-old-testament">Mesopotamia &amp; the Hebrew Bible (Khan Academy)</a> — connects the Gilgamesh flood to the one you already met in Rivers.</li></ul>' },
        { type: 'quiz', questions: [
          { q: 'Most Mesopotamian religions pictured the gods as…', options: ['distant and uninvolved', 'controlling nature and unpredictable — so they had to be kept happy', 'a single loving God', 'ordinary human rulers'], answer: 1 },
          { q: 'What was the purpose of a ziggurat?', options: ['storing grain', 'housing soldiers', 'honoring the gods (a temple-tower)', 'hosting athletic games'], answer: 2 },
          { q: 'What writing system are the Sumerians credited with inventing?', options: ['the alphabet', 'hieroglyphs', 'cuneiform', 'paper scrolls'], answer: 2 },
          { q: 'The Epic of Gilgamesh is important because it…', options: ['lists royal taxes', 'describes mortality and kingship', 'explains farming methods', 'teaches arithmetic'], answer: 1 },
        ] },
        { type: 'matching', title: 'Vocabulary — match each to its plain meaning', pairs: [
          { term: 'polytheism', def: 'Belief in many gods, each tied to a force of nature.' },
          { term: 'monotheism', def: 'Belief in one all-powerful God — rare in the ancient world.' },
          { term: 'ziggurat', def: 'A giant stepped temple-tower in a Mesopotamian city, built to honor its god.' },
          { term: 'appease', def: 'To keep the gods happy with rituals and offerings so they don\'t send disaster.' },
          { term: 'Epic of Gilgamesh', def: 'The oldest great story: a king\'s failed quest for immortality; includes a great flood.' },
          { term: 'cuneiform', def: 'Sumerian wedge-shaped writing pressed into clay — the first writing system.' },
        ] },
        { type: 'answers', prompts: [
          'Put this in your own words: "The Epic of Gilgamesh, in which a part-divine king fails to win immortality, dramatizes both the nature of kingship and humanity\'s confrontation with mortality."',
        ] },
        { type: 'next', text: 'Next: a second river, a very different mood — Egypt, where the water behaved and the desert stood guard.' },
      ],
    },

    /* ───────────────── 1.5  (Ancient Egypt) ───────────────── */
    {
      id: 'egypt', n: 6, title: 'Egypt: the Nile, the pharaoh, and the afterlife',
      subject: 'Social Science', minutes: 30, standards: '7.H.CH.3',
      blocks: [
        { type: 'hook', text: 'Mesopotamia\'s rivers flooded like an angry god — no one knew when. Egypt\'s Nile flooded <b>like clockwork</b>, every year, dropping rich black soil right where farmers needed it. And on both sides of that green ribbon: hundreds of miles of deadly desert. Predictable water plus natural walls = a civilization that lasted <b>three thousand years</b>.' },
        { type: 'prose', body: '<p><b>The gift of the Nile (lesson 1.5).</b> The Nile\'s flood was <b>predictable</b>, so Egyptians could plan irrigation and grow dependable surpluses — the Nile <b>allowed productive farming</b>, and almost everyone lived within a couple of miles of its banks. (Contrast Mesopotamia\'s unpredictable Tigris and Euphrates.)</p><p><b>Natural barriers protected Egypt.</b> Step a few miles off the river either way and you hit <b>brutal Sahara desert</b>; the only ways in were up the Nile or through the sea at its mouth. Those <b>natural barriers</b> — deserts and seas — walled Egypt off from invasion, so it stayed <b>unusually stable and unified</b> for millennia while Mesopotamia changed hands over and over.</p><p><b>The pharaoh — a god-king.</b> Egypt\'s ruler, the <b>pharaoh</b>, wasn\'t just a king. He was seen as a <b>living link between the gods and the people</b> — part man, part divine.</p><p><b>The afterlife.</b> Egyptian religion (also <b>polytheistic</b>) was obsessed with what comes after death. The god <b>Osiris</b> was murdered, put back together, and reborn as lord of the underworld — a <b>resurrection</b> story. At <b>Judgment</b>, your heart was <b>weighed against a feather</b>: light and pure, you passed on; heavy with wrongdoing, a monster ate it. The pharaoh\'s soul, the <b>Ka</b>, lived on forever.</p><p class="tie-in">🔗 <b>Tie-in — Rivers:</b> this is your Rivers essential question, exam-flavored — the Nile\'s <em>gentle, predictable</em> flood vs. the Tigris–Euphrates\' <em>harsh, surprising</em> one shaped two very different civilizations. That contrast is a favorite CLEP comparison.</p>' },
        { type: 'video', title: 'Modern States 1.5 — Ancient Egypt: Pharaoh and the Nile', url: MS, label: '▶ Watch 1.5 on Modern States', focus: 'Catch the two reasons Egypt was so stable: the Nile\'s predictable flood, AND the deserts and seas that protected it from invasion.' },
        { type: 'prose', body: '<p><b>🔎 As you watch 1.5, see if you can answer:</b></p><ol><li>Why did the Nile make <b>farming</b> so dependable? (predictable flood + irrigation)</li><li>What <b>natural barriers</b> protected Egypt, and how did that keep it stable?</li><li>Why was the <b>pharaoh</b> more than an ordinary king?</li><li>How did Egyptians picture the <b>afterlife</b> (Osiris, the weighing of the heart)?</li></ol>' },
        { type: 'prose', body: '<p><b>Bring it to life</b></p><ul><li>🎬 <a href="https://www.youtube.com/watch?v=Z3Wvw6BivVI">Ancient Egypt — CrashCourse World History #4</a> — the Nile, the pyramids, the pharaohs.</li><li>📚 <i>The Red Pyramid</i> by Rick Riordan (The Kane Chronicles) — a wild adventure where Osiris, Set, and the Egyptian gods are real. Not a textbook — it just makes the mythology stick.</li><li>📚 <i>Tales of Ancient Egypt</i> by Roger Lancelyn Green — the actual myths, retold to read like stories.</li></ul>' },
        { type: 'quiz', questions: [
          { q: 'Which best describes the role of the Nile River in Egypt?', options: ['It caused frequent famines', 'It allowed productive farming', 'It divided tribal kingdoms', 'It was mainly a mining route'], answer: 1 },
          { q: 'Which factor best protected Egypt from invasion?', options: ['A large cavalry', 'Trade alliances', 'Natural barriers (deserts and seas)', 'Bronze tools'], answer: 2 },
          { q: 'To the Egyptians, the pharaoh was…', options: ['just a general', 'a divine link between the gods and the people', 'an elected official', 'a foreign ruler'], answer: 1 },
        ] },
        { type: 'matching', title: 'Vocabulary — match each to its plain meaning', pairs: [
          { term: 'pharaoh', def: 'Egypt\'s king, seen as a living link between the gods and the people.' },
          { term: 'natural barriers', def: 'Deserts and seas that walled Egypt off and protected it from invasion.' },
          { term: 'silt', def: 'The rich soil the Nile\'s flood leaves behind — the source of Egypt\'s farming.' },
          { term: 'dynasty', def: 'A line of rulers from the same family (Egypt counted time by them).' },
          { term: 'hieroglyphs', def: 'Egypt\'s sacred picture-writing, carved in stone.' },
        ] },
        { type: 'answers', prompts: [
          'Put this in your own words: "Flanked by deserts and reached only by sea or river, Egypt enjoyed a natural isolation that spared it the constant invasions Mesopotamia suffered."',
        ] },
        { type: 'next', text: 'Next: two small peoples with two enormous ideas — one god, and the alphabet — plus the empires that swallowed everyone.' },
      ],
    },

    /* ───────────────── 1.6 + 1.7 ───────────────── */
    {
      id: 'hebrews-empires', n: 7, title: 'One God, the alphabet, and the great empires',
      subject: 'Social Science', minutes: 30, standards: '7.C.PI.1',
      blocks: [
        { type: 'hook', text: 'Some of the ideas that shaped the entire Western world came not from the biggest empires but from small peoples caught between them. The <b>Hebrews</b> gave the West <b>monotheism</b>. The <b>Phoenicians</b> gave it the <b>alphabet</b>. Then the iron-armed <b>Assyrians</b> and the vast <b>Persians</b> swallowed nearly all of it.' },
        { type: 'prose', body: '<p><b>The Hebrews (lesson 1.6).</b> In the kingdoms of <b>Israel and Judah</b>, a small people held a radical idea in a polytheistic world: <b>one</b> God, universal and moral — <b>monotheism</b>. That idea outlived their kingdoms and became a root of Judaism, Christianity, and Islam. On the exam, the Hebrews matter for the <em>idea</em>, not the size of the state.</p><p><b>Phoenicians (lesson 1.7).</b> Master traders and sailors on the Levant coast, they spread an early <b>alphabet</b> — far simpler than cuneiform or hieroglyphs, only a couple dozen symbols for sounds. The Greeks adapted it; our own alphabet descends from it.</p><p><b>The empires (1.7).</b> Two to know:</p><ul><li><b>Assyria</b> — an early <b>Iron Age</b> empire that expanded through <b>advanced military tactics</b>: iron weapons, siege warfare, cavalry, a professional army, and deliberate terror (ruthless conquest and mass deportations). On the exam: the Assyrians grew their empire by <em>military</em> means, not farming or trade.</li><li><b>Persia</b> (Achaemenid) — the <b>largest empire</b> the world had yet seen, and comparatively <b>tolerant</b>: it let conquered peoples keep their customs and religions, connected by roads and a postal system. It sets up the Greek–Persian clash you\'ll meet in Module 2.</li></ul><p class="tie-in">🔗 <b>Tie-in — Metals:</b> Assyria is your Iron-Age argument in the flesh — cheap, hard iron let one people arm a huge army and dominate. "Change what things are made of, change who has power," exactly.</p>' },
        { type: 'video', title: 'Modern States 1.6 & 1.7 — Hebrews; Phoenicians, Assyrians, Persians', url: MS, label: '▶ Watch 1.6 and 1.7 on Modern States', focus: 'Pin one big contribution to each people: Hebrews → monotheism, Phoenicians → alphabet, Assyria → iron military empire, Persia → huge but tolerant.' },
        { type: 'prose', body: '<p><b>🔎 As you watch 1.6 &amp; 1.7, pin one big thing to each:</b></p><ul><li><b>Hebrews</b> → ?</li><li><b>Phoenicians</b> → ?</li><li><b>Assyrians</b> → ?</li><li><b>Persians</b> → ?</li></ul>' },
        { type: 'prose', body: '<p><b>Bring it to life</b></p><ul><li>🎬 <a href="https://www.youtube.com/watch?v=sohXPx_XZ6Y">CrashCourse World History #3</a> — its back half is all Assyrians and Persians.</li><li>📚 <i>The Cartoon History of the Universe, Vol. 1</i> by Larry Gonick — its chapters on the Hebrews and the great empires are a fast, funny way in.</li></ul>' },
        { type: 'quiz', questions: [
          { q: 'How did the Assyrians expand their empire?', options: ['Through farming', 'With advanced military tactics', 'Using sea trade', 'By marrying into noble families'], answer: 1 },
          { q: 'What set the Hebrews apart in the ancient world?', options: ['Building the largest empire', 'Inventing iron weapons', 'Belief in one God (monotheism)', 'Monumental architecture'], answer: 2 },
          { q: 'The Phoenicians spread which world-changing tool?', options: ['cuneiform', 'the alphabet', 'the wheel', 'gunpowder'], answer: 1 },
          { q: 'Compared with the Assyrians, the Persian Empire was known for being…', options: ['smaller and weaker', 'larger and relatively tolerant of conquered peoples', 'purely a trading league with no army', 'the first democracy'], answer: 1 },
        ] },
        { type: 'matching', title: 'Vocabulary — match each to its plain meaning', pairs: [
          { term: 'covenant', def: 'A binding promise or agreement — for the Hebrews, between God and the people.' },
          { term: 'alphabet', def: 'A small set of symbols for sounds — far simpler than picture-writing.' },
          { term: 'deportation', def: 'Forcing a conquered people to move far away from their home.' },
          { term: 'tolerance (imperial)', def: 'Letting conquered peoples keep their own customs and religion.' },
        ] },
        { type: 'answers', prompts: [
          'Put this in your own words: "Though politically minor, the Hebrews\' monotheism proved historically decisive, becoming a foundation of three world religions."',
        ] },
        { type: 'next', text: 'Last card: pull Module 1 together, take the Modern States quiz, and see how much you already own.' },
      ],
    },

    /* ───────────────── REFLECTION / MODULE CHECK ───────────────── */
    {
      id: 'reflect', n: 8, title: 'Module 1 check — and how far you\'ve come',
      subject: 'Social Science', minutes: 30, standards: 'RI.7.8',
      blocks: [
        { type: 'prose', body: '<p>That\'s all of Module 1. Zoom out and you can tell the whole story in one breath: rivers made <b>surplus</b>, surplus made <b>cities</b>, cities made <b>writing, law, and empires</b> — Sumer to Akkad to Babylon to Assyria to Persia, with Egypt on the Nile alongside, and two small peoples handing the future <b>the alphabet</b> and <b>one God</b>.</p><p><b>Now take the real thing.</b> Open Module 1 on Modern States and do its <b>summary + module quiz</b>. That quiz is written in CLEP style — it\'s your honest read on whether Module 1 is solid before you move to Greece (Module 2). Anything you miss just tells you which lesson to rewatch. No grade, just information.</p>' },
        { type: 'practice', title: 'Take the Modern States Module 1 quiz', note: 'Log in, open Module 1, and do the "Summary" and the module quiz. Redo any lesson you miss questions on — that\'s the whole point of a practice quiz.', links: [
          { url: MS, label: 'Open Module 1 on Modern States' },
        ] },
        { type: 'kwlback', prompt: 'Here\'s what you wrote on the launch card. Read it — you knew the science of this world already; look how many names and ideas you can hang on it now.' },
        { type: 'vocabsort', title: 'Which words do you own now?', note: 'Be honest — tap each: "got it cold" or "still fuzzy." The fuzzy ones are just your study list before the exam.' },
        { type: 'rubric', title: 'Give yourself an honest check', items: [
          'I can put these in order: Sumerian city-states → Akkad → Babylon → Assyria → Persia.',
          'I can explain the Neolithic Revolution and why surplus leads to civilization.',
          'I can read a primary source like Hammurabi\'s Code and say what it shows AND what it doesn\'t.',
          'I can explain Mesopotamian religion (unpredictable gods, ziggurats) and what the Epic of Gilgamesh is about.',
          'I can explain why Egypt was so stable — the Nile\'s predictable flood AND its natural barriers.',
          'I can name one big contribution each: Hebrews (monotheism), Phoenicians (alphabet), Egyptians, Assyrians, Persians.',
          'I connected this to my Rivers and Metals units.',
        ] },
        { type: 'done', text: 'Module 1 down. When you\'re ready, Module 2 is Ancient Greece — the polis, Sparta and Athens, and the war with those same Persians. Take it slow; the exam waits until you turn 13.' },
      ],
    },

  ],
});
})();
