/**
 * unit-clep-renaissance.js — CLEP Unit 5: Renaissance and Reformation (Modern States Module 5)
 *
 * Same pattern: real content + assessments, NO meta, fun on top. Lessons 5.1–5.10.
 * Quiz-aligned to the real Module 5 quiz (Council of Trent, Petrarch/humanism, why Italy,
 * Calvin/predestination, Elizabeth's via media, ancient texts, 95 Theses, church abuses,
 * new Christian groups, human potential, Medici, Henry VIII, Machiavelli, printing press,
 * realistic art). track:'clep'. See docs/BUILDING-CLEP-UNITS.md.
 */

(function () {
const MS = 'https://learn.modernstates.org/d2l/le/discovery/view/course/6858';
const MS_SIGNUP = 'https://register.modernstates.org';

window.HS_UNITS = window.HS_UNITS || [];
window.HS_UNITS.push({
  id: 'clep-renaissance',
  short: 'CLEP · Renaissance',
  title: 'Renaissance and Reformation (CLEP Western Civ I · Module 5)',
  track: 'clep',
  eq: 'How did Europe rediscover the ancient world — and then split its own Church in two?',
  image: 'assets/units/clep-renaissance.jpg',

  parent: {
    hotspots: [
      'Module 5 — the Renaissance and Reformation (Modern States 5.1–5.10). Two big movements: a rebirth of art and learning, then a religious revolution.',
      'The <b>Renaissance</b> half is about <b>humanism</b> (human potential, ancient texts, realistic art) and <b>why it started in Italy</b> (wealthy trading cities like Florence, funded by families like the Medici).',
      'The <b>Reformation</b> half: <b>Luther\'s 95 Theses</b> attack Church <b>abuses</b> → the Church splits into <b>new Christian groups</b> (Lutherans, Calvinists, Church of England). Know Luther, Calvin (predestination), and Henry VIII.',
      'This module lands over winter — a lighter one. OverSimplified\'s "Henry VIII" video is a perfect, genuinely funny fit for the English Reformation.',
    ],
    activities: [
      { tier: 'Small', title: 'Before / after portrait', detail: 'Compare a flat medieval painting with a realistic Renaissance one (a Madonna vs. a da Vinci). Ask "what changed?" — depth, real faces, real bodies. That\'s Renaissance art in one look.', cost: 'Free', time: '15 min' },
      { tier: 'Medium', title: 'Follow the money', detail: 'Trace it: Italian cities get rich on trade → rich families (Medici) fund artists → the Renaissance. Then ask why that couldn\'t happen in a poor feudal village. Wealth explains "why Italy."', cost: 'Free', time: '20 min' },
      { tier: 'Large', title: 'Meet Leonardo (and Henry VIII)', detail: 'Let him read The Second Mrs. Giaconda (Leonardo, through his young apprentice), and watch OverSimplified\'s Henry VIII on YouTube for the Reformation. Both are a blast and stick hard.', cost: 'Library / free', time: 'Across the module' },
    ],
  },

  vocab: {
    mustOwn: [
      { term: 'Renaissance',      def: 'The "rebirth" (~1300s–1500s) of art and learning in Europe, inspired by ancient Greece and Rome.' },
      { term: 'humanism',         def: 'The core Renaissance idea: focus on human potential, achievement, and the study of ancient texts.' },
      { term: 'Reformation',      def: 'The 1500s movement that split Western Christianity, creating Protestant churches.' },
      { term: 'indulgence',       def: 'A payment to the Church said to reduce punishment for sins — an abuse that sparked Luther\'s protest.' },
      { term: '95 Theses',        def: 'Martin Luther\'s 1517 list of arguments against Church abuses — the spark of the Reformation.' },
      { term: 'predestination',   def: 'John Calvin\'s teaching that God has already decided who will be saved.' },
      { term: 'printing press',   def: 'Gutenberg\'s machine (~1450) that mass-produced books and spread new ideas fast.' },
      { term: 'Counter-Reformation', def: 'The Catholic Church\'s response, reforming its own practices (e.g. the Council of Trent).' },
      { term: 'secular',          def: 'Worldly rather than religious — a growing Renaissance emphasis alongside faith.' },
    ],
    frayer: [
      {
        term: 'humanism',
        definition: 'The intellectual heart of the Renaissance: a renewed focus on human beings — their potential, dignity, and achievements — grounded in the study of ancient Greek and Roman texts. Humanists believed people could shape their world and were worth studying for their own sake.',
        examples: ['Scholars recovering and studying ancient Roman writers', 'Petrarch, the "Father of Humanism"', 'Art and writing celebrating individual human achievement'],
        nonexamples: ['A purely religious focus with no interest in the worldly (more medieval)', 'Rejecting all ancient learning', 'Believing individuals can\'t change anything'],
        sentence: 'Humanism put human potential and the classical past at the center — the mindset behind the whole Renaissance.',
      },
      {
        term: 'the Reformation',
        definition: 'The 1500s religious revolution that broke Western Christianity apart. Sparked by anger at Church ABUSES (like selling indulgences), Martin Luther\'s protest spread — helped by the printing press — and produced multiple NEW CHRISTIAN GROUPS (Lutheran, Calvinist, Church of England) instead of one Catholic Church.',
        examples: ['Luther posting the 95 Theses (1517)', 'Calvin teaching predestination in Geneva', 'Henry VIII breaking England from Rome'],
        nonexamples: ['The Renaissance (art/learning, not a church split)', 'The Crusades (medieval religious wars)', 'A reform that kept everyone in one church'],
        sentence: 'The Reformation turned one Western Church into many — driven by protest against abuses and spread by print.',
      },
    ],
  },

  cards: [

    /* ───────────────── LAUNCH ───────────────── */
    {
      id: 'launch', n: 1, title: 'Module 5: Renaissance & Reformation',
      subject: 'Social Science', minutes: 20, standards: '',
      blocks: [
        { type: 'hook', text: 'Two explosions, back to back. First a <b>rebirth</b> of art and ideas so brilliant we still name an era after it — the <b>Renaissance</b>. Then a monk nails a list of complaints to a church door and accidentally <b>shatters the unity of Christianity</b> — the <b>Reformation</b>.' },
        { type: 'prose', body: '<p>Watch the Modern States lessons (<b>Module 5: Renaissance and Reformation</b>, lessons 5.1–5.10) and use these cards with them. Two movements, in order: the <b>Renaissance</b> (rebirth of art and learning) → the <b>Reformation</b> (Europe\'s Church splits apart).</p>' },
        { type: 'flashcards', title: 'Meet the words first', note: 'Tap to flip. These come back all module long.' },
        { type: 'video', title: 'Open Module 5 on Modern States', url: MS, label: '▶ Open Western Civ I on Modern States', focus: 'Log in, open Module 5, watch the intro and 5.1.' },
        { type: 'kwl', prompt: 'Quick gut-check — no wrong answers.',
          klabel: 'What I already know about the Renaissance or the Reformation (da Vinci, Michelangelo, Martin Luther, Henry VIII):',
          wlabel: 'What I want to be able to explain by the end:' },
        { type: 'next', text: 'Next: why Europe suddenly "reborn" — and why it happened in Italy first.' },
      ],
    },

    /* ───────────────── 5.1–5.4  The Renaissance ───────────────── */
    {
      id: 'renaissance', n: 2, title: 'The Renaissance: rebirth in Italy',
      subject: 'Social Science', minutes: 30, standards: '7.H.CH.3',
      blocks: [
        { type: 'hook', text: 'Rich Italian cities. Rediscovered ancient books. A machine that could print thousands of copies. Put them together and you get the <b>Renaissance</b> — an outpouring of art and ideas built on one belief: that <b>humans can achieve extraordinary things</b>.' },
        { type: 'prose', body: '<p><b>Why Italy?</b> The Renaissance began in Italy because of its <b>wealthy trading cities</b> (Florence, Venice) — money to fund artists, plus ruins and trade links to the classical past. Rich families like the <b>Medici</b> of Florence <b>funded much of the art</b>.</p><p><b>Humanism.</b> The core idea was <b>humanism</b>: a focus on <b>human potential</b> and the study of <b>ancient (Greek and Roman) texts</b>. <b>Petrarch</b> is often called the "<b>Father of Humanism</b>."</p><p><b>New art.</b> Renaissance art broke from flat medieval style — it was newly <b>realistic</b>, with depth, perspective, and lifelike human bodies (da Vinci, Michelangelo).</p><p><b>Machiavelli and the printing press.</b> <b>Machiavelli</b>, in <i>The Prince</i>, argued that a ruler should <b>keep power by any means necessary</b> — a coldly practical view of politics. And <b>Gutenberg\'s printing press</b> (~1450) mass-produced books, spreading <b>new ideas</b> across Europe faster than ever.</p>' },
        { type: 'video', title: 'Modern States 5.1–5.4 — Humanism, art, Machiavelli', url: MS, label: '▶ Watch 5.1–5.4 on Modern States', focus: 'Why Italy (wealthy cities, Medici); humanism (human potential, ancient texts, Petrarch); realistic art; Machiavelli (power by any means); printing press spreads ideas.' },
        { type: 'prose', body: '<p><b>🔎 As you watch, see if you can answer:</b></p><ol><li>Why did the Renaissance <b>begin in Italy</b>, and which family funded Florentine art?</li><li>Who is the "<b>Father of Humanism</b>," and what did Renaissance thinkers study?</li><li>What made Renaissance <b>art</b> different?</li><li>What did <b>Machiavelli</b> argue, and what did the <b>printing press</b> spread?</li></ol>' },
        { type: 'quiz', questions: [
          { q: 'Why did the Renaissance begin in Italy?', options: ['wealthy cities', 'high birth rates', 'military victories', 'religious isolation'], answer: 0 },
          { q: 'Which family funded much Renaissance art in Florence?', options: ['Sforzas', 'Medicis', 'Habsburgs', 'Tudors'], answer: 1 },
          { q: 'Petrarch is often called the "Father of"…', options: ['commerce', 'feudalism', 'humanism', 'astronomy'], answer: 2 },
          { q: 'A key ideal of the Renaissance was…', options: ['human potential', 'tribal loyalty', 'military conquest', 'religious obedience'], answer: 0 },
          { q: 'What made Renaissance art different?', options: ['abstract designs', 'lack of detail', 'realistic depictions', 'focus on animals'], answer: 2 },
          { q: 'What did Machiavelli argue in The Prince?', options: ['peasants should lead', 'rulers should maintain power by any means possible', 'religion must control the state', 'kings should be elected'], answer: 1 },
          { q: 'The printing press helped spread…', options: ['gold coins', 'hand-copied books', 'new ideas', 'Greek pottery'], answer: 2 },
        ] },
        { type: 'matching', title: 'Vocabulary — match each to its plain meaning', pairs: [
          { term: 'humanism', def: 'Focus on human potential and the study of ancient texts.' },
          { term: 'Petrarch', def: 'The "Father of Humanism."' },
          { term: 'Medici', def: 'The Florentine family that funded much Renaissance art.' },
          { term: 'printing press', def: 'Gutenberg\'s machine that mass-produced books and spread ideas.' },
          { term: 'Machiavelli', def: 'Wrote The Prince — rulers should keep power by any means.' },
        ] },
        { type: 'answers', prompts: [
          'Put this in your own words: "Renaissance humanism recovered classical learning and placed renewed confidence in human reason and achievement."',
        ] },
        { type: 'prose', body: '<p><b>Bring it to life</b></p><ul><li>🎬 <a href="https://www.youtube.com/watch?v=Vufba_ZcoR0">The Renaissance: Was It a Thing? — CrashCourse World History #22</a> — argues it was less a sudden "rebirth" than it sounds.</li><li>📚 <i>The Second Mrs. Giaconda</i> by E.L. Konigsburg — the story of the Mona Lisa, told through Leonardo da Vinci\'s mischievous young apprentice.</li></ul>' },
        { type: 'next', text: 'Next: a monk\'s list of complaints blows the Church apart.' },
      ],
    },

    /* ───────────────── 5.5–5.9  The Reformation ───────────────── */
    {
      id: 'reformation', n: 3, title: 'The Reformation: one Church becomes many',
      subject: 'Social Science', minutes: 30, standards: '7.H.CH.3',
      blocks: [
        { type: 'hook', text: 'In 1517, a German monk named <b>Martin Luther</b> got fed up with the Church selling forgiveness for money. He wrote up <b>95 complaints</b> — and thanks to the printing press, they went viral across Europe. Within a lifetime, Western Christianity had shattered into rival churches.' },
        { type: 'prose', body: '<p><b>The spark: Church abuses.</b> A major cause of the Reformation was anger at Church <b>abuses</b> — especially selling <b>indulgences</b> (paying to reduce punishment for sin). <b>Luther\'s 95 Theses</b> (1517) were <b>arguments for reform</b> aimed at those abuses.</p><p><b>The result: new Christian groups.</b> Instead of reforming one Church, the movement produced <b>new Christian groups</b> (Protestants) — no longer a single Catholic Europe.</p><p><b>Calvin.</b> <b>John Calvin</b> built a strict Protestant movement in Geneva emphasizing <b>predestination</b> — the idea that God has already chosen who will be saved.</p><p><b>England breaks away.</b> <b>Henry VIII</b> broke with the Catholic Church mainly to get an <b>annulment</b> (to end his marriage), creating the <b>Church of England</b>. His daughter <b>Elizabeth I</b> settled it as a middle path — the Church of England ended up doctrinally <b>a mix of ideas</b> (Catholic and Protestant), the famous "via media."</p>' },
        { type: 'video', title: 'Modern States 5.5–5.9 — Luther, Calvin, the English Reformation', url: MS, label: '▶ Watch 5.5–5.9 on Modern States', focus: '95 Theses = arguments for reform against abuses; result = new Christian groups; Calvin = predestination; Henry VIII = annulment; Elizabeth = a mix of ideas.' },
        { type: 'prose', body: '<p><b>🔎 As you watch, see if you can answer:</b></p><ol><li>What were the <b>95 Theses</b>, and what <b>caused</b> the Reformation?</li><li>What did the Reformation <b>result</b> in?</li><li>What did <b>Calvin</b> emphasize?</li><li>Why did <b>Henry VIII</b> break with Rome, and how did <b>Elizabeth I</b> settle it?</li></ol>' },
        { type: 'quiz', questions: [
          { q: 'The 95 Theses were…', options: ['military plans', 'tax rules', 'sermons', 'arguments for reform'], answer: 3 },
          { q: 'One cause of the Reformation was…', options: ['poor harvests', 'Roman invasions', 'church abuses', 'new trade routes'], answer: 2 },
          { q: 'One result of the Reformation was…', options: ['Roman expansion', 'new Christian groups', 'fewer wars', 'unified Europe'], answer: 1 },
          { q: 'What did John Calvin emphasize?', options: ['loyalty to Rome', 'free will', 'predestination', 'tolerance'], answer: 2 },
          { q: 'Which ruler broke with the Catholic Church to get an annulment?', options: ['Charles V', 'Henry VIII', 'Philip II', 'Francis I'], answer: 1 },
          { q: 'Doctrinally, Elizabeth I\'s Church of England was…', options: ['fully Catholic', 'a mix of ideas', 'strictly Calvinist', 'only Lutheran'], answer: 1 },
        ] },
        { type: 'matching', title: 'Vocabulary — match each to its plain meaning', pairs: [
          { term: '95 Theses', def: 'Luther\'s 1517 arguments against Church abuses.' },
          { term: 'indulgence', def: 'A payment claimed to reduce punishment for sin — an abuse Luther attacked.' },
          { term: 'predestination', def: 'Calvin\'s teaching that God has already chosen who is saved.' },
          { term: 'Henry VIII', def: 'The king who broke England from Rome to get an annulment.' },
        ] },
        { type: 'answers', prompts: [
          'Put this in your own words: "Luther\'s protest against ecclesiastical abuses, amplified by the printing press, fractured Western Christendom into competing confessions."',
        ] },
        { type: 'prose', body: '<p><b>Bring it to life</b></p><ul><li>🎬 <b>OverSimplified — "Henry VIII"</b> (search it on YouTube) — a hilarious, surprisingly accurate romp through the English Reformation. Perfect for this card.</li></ul>' },
        { type: 'next', text: 'Next: the Catholic Church fights back — and reforms itself.' },
      ],
    },

    /* ───────────────── 5.10  Catholic Reformation ───────────────── */
    {
      id: 'counter', n: 4, title: 'The Catholic comeback: the Council of Trent',
      subject: 'Social Science', minutes: 25, standards: '7.H.CH.3',
      blocks: [
        { type: 'hook', text: 'The Catholic Church didn\'t just watch Protestantism spread — it counterattacked, and it cleaned house. That response, the <b>Counter-Reformation</b>, is why the Church survived the storm.' },
        { type: 'prose', body: '<p><b>The Council of Trent.</b> The Catholic Church\'s great response was the <b>Council of Trent</b> (1545–1563), which <b>reformed Catholic practices</b> — cracking down on the abuses Luther had attacked (like the sale of indulgences), tightening the training of priests, and clearly restating Catholic doctrine. This "Counter-Reformation" re-energized the Church.</p><p><b>The result of it all.</b> Europe was now permanently split: a Protestant north and a Catholic south, a division that would fuel wars for the next century (which you\'ll see in Module 6).</p>' },
        { type: 'video', title: 'Modern States 5.10 — Roman Catholicism and the Council of Trent', url: MS, label: '▶ Watch 5.10 on Modern States', focus: 'The Council of Trent reformed Catholic practices — the Church\'s answer to the Reformation.' },
        { type: 'prose', body: '<p><b>🔎 As you watch, see if you can answer:</b></p><ol><li>What did the <b>Council of Trent</b> do?</li><li>How was Europe religiously divided by the end?</li></ol>' },
        { type: 'quiz', questions: [
          { q: 'The Council of Trent…', options: ['removed all clergy', 'ended all sacraments', 'joined Protestants', 'reformed Catholic practices'], answer: 3 },
          { q: 'By the end of the Reformation era, Europe was…', options: ['religiously unified under the pope', 'split into Protestant and Catholic regions', 'entirely Protestant', 'no longer Christian'], answer: 1 },
        ] },
        { type: 'matching', title: 'Vocabulary — match each to its plain meaning', pairs: [
          { term: 'Counter-Reformation', def: 'The Catholic Church\'s reforming response to Protestantism.' },
          { term: 'Council of Trent', def: 'The council that reformed Catholic practices and restated doctrine.' },
        ] },
        { type: 'next', text: 'Last card: pull the module together and take the Modern States quiz.' },
      ],
    },

    /* ───────────────── REFLECTION ───────────────── */
    {
      id: 'reflect', n: 5, title: 'Module 5 check',
      subject: 'Social Science', minutes: 30, standards: 'RI.7.8',
      blocks: [
        { type: 'prose', body: '<p>In one breath: rich Italian cities + rediscovered ancient texts + the printing press spark the <b>Renaissance</b> — <b>humanism</b>, realistic art, the Medici, Machiavelli. Then <b>Luther\'s 95 Theses</b> attack Church <b>abuses</b>, the printing press spreads the fight, and Christianity splits into <b>new groups</b> — <b>Calvin</b> (predestination), <b>Henry VIII</b> (England), <b>Elizabeth</b> (a middle way). The Catholic Church answers with the <b>Council of Trent</b>, leaving Europe split Protestant vs. Catholic.</p><p>Now take the real thing: open Module 5 on Modern States and do its summary + module quiz.</p>' },
        { type: 'practice', title: 'Take the Modern States Module 5 quiz', note: 'Log in, open Module 5, do the Summary and the module quiz. Rewatch any lesson you miss.', links: [
          { url: MS, label: 'Open Module 5 on Modern States' },
        ] },
        { type: 'kwlback', prompt: 'Here\'s what you wrote at the start. Look how much you can hang on it now.' },
        { type: 'vocabsort', title: 'Which words do you own now?', note: 'Tap each: "got it cold" or "still fuzzy." The fuzzy ones are your study list.' },
        { type: 'rubric', title: 'Give yourself an honest check', items: [
          'I can explain humanism and why the Renaissance started in Italy.',
          'I can name what made Renaissance art new (realistic) and who the Medici were.',
          'I can explain what the 95 Theses were and what caused the Reformation.',
          'I can tell apart Luther, Calvin (predestination), and Henry VIII (annulment).',
          'I can say what the Council of Trent did.',
        ] },
        { type: 'done', text: 'Module 5 down. Last one: Early Modern Europe — exploration, the Scientific Revolution, and powerful kings, right up to 1648.' },
      ],
    },

  ],
});
})();
