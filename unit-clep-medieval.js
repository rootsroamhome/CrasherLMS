/**
 * unit-clep-medieval.js — CLEP Unit 4: Development of Medieval Europe (Modern States Module 4)
 *
 * The biggest module (21 lessons, ~23–27% of the exam). Same pattern: real content +
 * assessments, NO meta, fun on top. Lessons 4.1–4.18. Quiz-aligned to the real Module 4
 * quiz (24 Qs: fall of Rome, Magna Carta, Black Death, Gothic/flying buttress, feudalism,
 * serfs/manor, 100 Years' War, trade/Venice/guilds, chivalry, investiture, Aquinas,
 * Reconquista, Innocent III, Charlemagne, universities, 1066/William, Papal Schism, the
 * Church). track:'clep'. See docs/BUILDING-CLEP-UNITS.md.
 */

(function () {
const MS = 'https://learn.modernstates.org/d2l/le/discovery/view/course/6858';
const MS_SIGNUP = 'https://register.modernstates.org';

window.HS_UNITS = window.HS_UNITS || [];
window.HS_UNITS.push({
  id: 'clep-medieval',
  short: 'CLEP · Medieval',
  title: 'Development of Medieval Europe (CLEP Western Civ I · Module 4)',
  track: 'clep',
  eq: 'When Rome\'s order vanished, what held Europe together for a thousand years?',
  image: 'assets/units/clep-medieval.jpg',

  parent: {
    hotspots: [
      'Module 4 — the Middle Ages. This is the <b>biggest</b> module (Modern States 4.1–4.18, ~21 lessons) and the heaviest on the exam, so it gets the most time on the calendar (Jan–Mar).',
      'Two things dominate the exam here: <b>feudalism</b> (land + loyalty; serfs; the manor) and <b>the Church</b> (the most powerful institution in Europe — popes, universities, Aquinas). Master those two and most questions fall.',
      'The back half is the medieval crisis: the <b>Black Death</b>, the <b>Hundred Years\' War</b>, and the slow rise of strong kings — which starts pulling feudalism apart and sets up the Renaissance.',
      'Lots of names here. A one-page "who\'s who" (Charlemagne, William the Conqueror, Innocent III, Thomas Aquinas) plus a feudal pyramid diagram (king → lords → knights → serfs) does a lot of work.',
    ],
    activities: [
      { tier: 'Small', title: 'Draw the feudal pyramid', detail: 'King at the top, then lords, then knights, then peasants/serfs at the base — with "land granted down, loyalty and service owed up." One diagram explains half the module.', cost: 'Free', time: '15 min' },
      { tier: 'Medium', title: 'Cathedral engineering', detail: 'Look up a Gothic cathedral together (Notre-Dame, Chartres). Find the pointed arches, tall spires, and flying buttresses, and talk about how those let walls go higher and thinner. Ties the art to the engineering.', cost: 'Free', time: '30 min' },
      { tier: 'Large', title: 'Live in the Middle Ages', detail: 'Hand him The Inquisitor\'s Tale (funny, adventurous, Newbery Honor) or Catherine, Called Birdy. High-interest medieval life that makes the vocabulary real.', cost: 'Library', time: 'Across the module' },
    ],
  },

  vocab: {
    mustOwn: [
      { term: 'feudalism',    def: 'The medieval system built on land and loyalty: lords granted land in exchange for military service and allegiance.' },
      { term: 'manor',        def: 'A self-sufficient farming estate — the economic heart of feudal life.' },
      { term: 'serf',         def: 'A peasant farm worker bound to a manor\'s land; not a slave, but not free to leave.' },
      { term: 'vassal',       def: 'Someone who received land from a lord and owed him loyalty and military service in return.' },
      { term: 'chivalry',     def: 'The knight\'s code of conduct — honor, courage, courtesy, protecting the weak.' },
      { term: 'Magna Carta',  def: 'The 1215 English charter that limited the king\'s power — a milestone for the rule of law.' },
      { term: 'guild',        def: 'An association of craftsmen or merchants that controlled a trade in a medieval town.' },
      { term: 'Crusades',     def: 'Religious wars in which European Christians tried to retake the Holy Land.' },
      { term: 'Black Death',  def: 'The plague that killed a third of Europe in the 1300s, causing massive labor shortages.' },
      { term: 'Gothic',       def: 'The soaring medieval cathedral style — pointed arches, tall spires, flying buttresses.' },
    ],
    frayer: [
      {
        term: 'feudalism',
        definition: 'The way medieval Europe organized power and land after Rome\'s central government vanished. Kings and lords granted land (a "fief") to lesser lords and knights (vassals); in return the vassals owed loyalty and military service. It rested on two things: LAND and LOYALTY. At the bottom, serfs farmed the land.',
        examples: ['A king granting a duke land in exchange for soldiers', 'A knight swearing loyalty to a lord for a manor', 'Serfs farming a manor they cannot leave'],
        nonexamples: ['A paid, salaried government army (that\'s more like Rome)', 'Citizens electing officials (a republic/democracy)', 'A modern renter who can move anytime'],
        sentence: 'Feudalism traded land for loyalty and service — a stopgap for order when no central state existed.',
      },
      {
        term: 'the Black Death',
        definition: 'A catastrophic outbreak of plague that reached Europe through Mediterranean TRADING PORTS around 1347 and killed roughly a third of the population within a few years. Because so many workers died, survivors could demand better pay and conditions — a huge LABOR SHORTAGE that helped unravel feudalism.',
        examples: ['Whole villages emptied in the late 1340s', 'Surviving peasants demanding wages and mobility', 'Trade and ports spreading it city to city'],
        nonexamples: ['A war between kingdoms (that\'s the Hundred Years\' War)', 'A church dispute (the Papal Schism)'],
        sentence: 'By killing a third of Europe, the Black Death made labor scarce and valuable — weakening the lords who depended on cheap serfs.',
      },
    ],
  },

  cards: [

    /* ───────────────── LAUNCH ───────────────── */
    {
      id: 'launch', n: 1, title: 'Module 4: the Middle Ages',
      subject: 'Social Science', minutes: 20, standards: '',
      blocks: [
        { type: 'hook', text: 'Rome\'s government is gone. No emperor, no imperial army, no safe roads. So how does Europe hold together for the next <b>thousand years</b>? Two answers run through this whole module: <b>feudalism</b> (land traded for loyalty) and <b>the Church</b> (the one institution that reached everywhere).' },
        { type: 'prose', body: '<p>This is the <b>biggest</b> module — take it slow. Watch the Modern States lessons (<b>Module 4: Development of Medieval Europe</b>, lessons 4.1–4.18) and use these cards with them. Keep two anchors in mind the whole way: <b>feudalism</b> and <b>the Church</b>.</p>' },
        { type: 'flashcards', title: 'Meet the words first', note: 'Tap to flip. These come back all module long.' },
        { type: 'video', title: 'Open Module 4 on Modern States', url: MS, label: '▶ Open Western Civ I on Modern States', focus: 'Log in, open Module 4, watch the intro and 4.1.' },
        { type: 'kwl', prompt: 'Quick gut-check — no wrong answers.',
          klabel: 'What I already know about the Middle Ages (knights, castles, the Church, the plague):',
          wlabel: 'What I want to be able to explain by the end:' },
        { type: 'next', text: 'Next: what fills the hole Rome left — Byzantium, Islam, and a new emperor named Charlemagne.' },
      ],
    },

    /* ───────────────── 4.1–4.4  After Rome ───────────────── */
    {
      id: 'after-rome', n: 2, title: 'After Rome: Byzantium, Islam, Charlemagne',
      subject: 'Social Science', minutes: 30, standards: '7.H.CH.3',
      blocks: [
        { type: 'hook', text: 'When Rome\'s western government <b>collapsed</b>, three powers grew in the space it left: the surviving Roman East (<b>Byzantium</b>), a fast-rising new faith and empire (<b>Islam</b>), and, in the west, a king crowned emperor by the pope — <b>Charlemagne</b>.' },
        { type: 'prose', body: '<p><b>Government collapsed.</b> In the west, Roman central government fell apart, cities shrank, and power scattered to local strongmen — the setup for feudalism.</p><p><b>The Byzantine Empire.</b> The richer <b>eastern</b> half of Rome survived for another thousand years, centered on Constantinople, keeping Roman law and Greek learning alive.</p><p><b>Islam.</b> In the 600s, a powerful new monotheistic religion, <b>Islam</b>, spread rapidly from Arabia across the Middle East, North Africa, and Spain, building a brilliant civilization of trade, science, and learning.</p><p><b>Charlemagne.</b> In the west, the Frankish king <b>Charlemagne</b> united much of western Europe and, in 800 CE, was crowned "Emperor" — crucially, <b>with the help of the pope</b>. That crowning tied kings and the Church together for centuries.</p>' },
        { type: 'video', title: 'Modern States 4.1–4.4 — Byzantium, Islam, Charlemagne', url: MS, label: '▶ Watch 4.1–4.4 on Modern States', focus: 'What happened to government after Rome; the rise of Islam; and who crowned Charlemagne emperor (the pope).' },
        { type: 'prose', body: '<p><b>🔎 As you watch, see if you can answer:</b></p><ol><li>What happened to <b>government</b> after the fall of Rome?</li><li>Who helped crown <b>Charlemagne</b> emperor?</li></ol>' },
        { type: 'quiz', questions: [
          { q: 'What happened after the fall of Rome?', options: ['libraries grew', 'government collapsed', 'religion disappeared', 'cities expanded'], answer: 1 },
          { q: 'Charlemagne became emperor with help from…', options: ['the Vikings', 'the pope', 'his son', 'the Senate'], answer: 1 },
        ] },
        { type: 'matching', title: 'Vocabulary — match each to its plain meaning', pairs: [
          { term: 'Byzantine Empire', def: 'The surviving eastern half of Rome, centered on Constantinople.' },
          { term: 'Islam', def: 'The monotheistic faith and civilization that spread fast from Arabia after 600 CE.' },
          { term: 'Charlemagne', def: 'The Frankish king crowned emperor by the pope in 800 CE.' },
          { term: 'Constantinople', def: 'The Byzantine capital — the old Roman East\'s great city.' },
        ] },
        { type: 'next', text: 'Next: with no central state, how did anyone stay safe? Land, loyalty, and the manor.' },
      ],
    },

    /* ───────────────── 4.5–4.6  Feudalism & manor life ───────────────── */
    {
      id: 'feudalism', n: 3, title: 'Feudalism and life on the manor',
      subject: 'Social Science', minutes: 30, standards: '7.C.PI.1',
      blocks: [
        { type: 'hook', text: 'No emperor, no police, no army you can call. So you make a deal: a powerful lord gives you <b>land</b> and protection, and in return you owe him <b>loyalty</b> and service. Do that all the way up and down society and you\'ve built <b>feudalism</b> — the operating system of the Middle Ages.' },
        { type: 'prose', body: '<p><b>Feudalism = land + loyalty.</b> A king granted land to great lords; lords granted land to knights (<b>vassals</b>); in return, each owed loyalty and military service upward. It was a pyramid held together not by a central government but by personal oaths.</p><p><b>The manor.</b> The economic engine was the <b>manor</b> — a mostly self-sufficient <b>farming estate</b>. On it lived <b>serfs</b>: peasant <b>farm workers</b> bound to the land. Serfs weren\'t slaves, but they couldn\'t freely leave; they farmed the lord\'s land in exchange for protection and a strip of their own.</p><p><b>Chivalry.</b> Knights followed <b>chivalry</b> — a <b>code of conduct</b> of honor, courage, loyalty, and protecting the weak (at least in ideal).</p>' },
        { type: 'video', title: 'Modern States 4.5–4.6 — Feudal development; agriculture, trade, towns', url: MS, label: '▶ Watch 4.5–4.6 on Modern States', focus: 'Feudalism runs on land + loyalty; serfs are bound farm workers; the manor is a farming estate; chivalry is the knight\'s code.' },
        { type: 'prose', body: '<p><b>🔎 As you watch, see if you can answer:</b></p><ol><li>What two things was <b>feudalism</b> based on?</li><li>Who were <b>serfs</b>?</li><li>What was a <b>manor</b>?</li><li>What was <b>chivalry</b>?</li></ol>' },
        { type: 'quiz', questions: [
          { q: 'Feudalism was based on…', options: ['written laws', 'land and loyalty', 'city councils', 'naval control'], answer: 1 },
          { q: 'Who were serfs?', options: ['royal guards', 'farm workers', 'craftsmen', 'tax collectors'], answer: 1 },
          { q: 'What was a manor?', options: ['a royal army', 'a palace design', 'a church court', 'a farming estate'], answer: 3 },
          { q: 'Chivalry was a…', options: ['legal system', 'peace treaty', 'code of conduct', 'tax rule'], answer: 2 },
        ] },
        { type: 'matching', title: 'Vocabulary — match each to its plain meaning', pairs: [
          { term: 'feudalism', def: 'The medieval system of land granted in exchange for loyalty and service.' },
          { term: 'manor', def: 'A self-sufficient farming estate — the heart of feudal life.' },
          { term: 'serf', def: 'A peasant farm worker bound to the manor\'s land.' },
          { term: 'chivalry', def: 'The knight\'s code of honor, courage, and courtesy.' },
        ] },
        { type: 'answers', prompts: [
          'Put this in your own words: "In the absence of centralized authority, feudal society bound lord and vassal through reciprocal obligations of land tenure and military service."',
        ] },
        { type: 'prose', body: '<p><b>Bring it to life</b></p><ul><li>🎬 <a href="https://www.youtube.com/watch?v=QV7CanyzhZg">The Dark Ages… How Dark Were They, Really? — CrashCourse World History #14</a> — busts the "Dark Ages" myth.</li><li>📚 <i>Catherine, Called Birdy</i> by Karen Cushman — the funny, sharp diary of a 14-year-old girl on a medieval manor. Feudal life from the inside.</li></ul>' },
        { type: 'next', text: 'Next: the one institution more powerful than any king — the Church.' },
      ],
    },

    /* ───────────────── 4.7, 4.9, 4.10  The Church ───────────────── */
    {
      id: 'church', n: 4, title: 'The Church: the superpower of the Middle Ages',
      subject: 'Social Science', minutes: 30, standards: '7.C.PI.1',
      blocks: [
        { type: 'hook', text: 'Kings came and went, but one institution reached every village in Europe, crowned emperors, ran the schools, and could even overrule kings: the <b>Catholic Church</b>. It was the <b>most powerful institution in medieval Europe</b>, full stop.' },
        { type: 'prose', body: '<p><b>Papal power.</b> The pope\'s authority grew until it rivaled and sometimes topped kings\'. It <b>peaked under Pope Innocent III</b> (~1200), who could pressure the mightiest rulers in Europe.</p><p><b>The investiture controversy.</b> A long showdown between popes and kings over who got to appoint <b>church offices</b> (bishops) — really a fight over who held ultimate authority. The Church largely won.</p><p><b>Learning and faith.</b> The first <b>universities</b> grew out of <b>church schools</b>. Their star thinker, <b>Thomas Aquinas</b>, worked to <b>combine faith and reason</b> — showing that Christian belief and Aristotle\'s logic could fit together.</p><p><b>Crusades and Reconquista.</b> The Church launched the <b>Crusades</b> to retake the Holy Land, and backed the <b>Reconquista</b> — the long <b>war in Spain</b> to take the peninsula back from Muslim rule.</p>' },
        { type: 'video', title: 'Modern States 4.7, 4.9, 4.10 — Universities & thought; papal monarchy; Crusades', url: MS, label: '▶ Watch 4.7, 4.9, 4.10 on Modern States', focus: 'The Church as the era\'s superpower: Innocent III (peak papal power), investiture = fight over church offices, universities from church schools, Aquinas (faith + reason), Reconquista = war in Spain.' },
        { type: 'prose', body: '<p><b>🔎 As you watch, see if you can answer:</b></p><ol><li>Under whom did <b>papal power</b> grow most?</li><li>The <b>investiture controversy</b> was about what?</li><li>Where did early <b>universities</b> come from?</li><li>What did <b>Thomas Aquinas</b> try to do? And what was the <b>Reconquista</b>?</li></ol>' },
        { type: 'quiz', questions: [
          { q: 'The most powerful institution in medieval Europe was…', options: ['the universities', 'the king\'s court', 'the merchant class', 'the Catholic Church'], answer: 3 },
          { q: 'Papal power grew most under…', options: ['Leo X', 'Gregory I', 'Urban VI', 'Innocent III'], answer: 3 },
          { q: 'The investiture controversy was about…', options: ['weapons', 'church offices', 'royal marriage', 'taxes'], answer: 1 },
          { q: 'What did Thomas Aquinas try to do?', options: ['study medicine', 'start a war', 'combine faith and reason', 'challenge the Church'], answer: 2 },
          { q: 'What was the Reconquista?', options: ['a religious council', 'a Viking raid', 'a peace treaty', 'a war in Spain'], answer: 3 },
          { q: 'Early universities came from…', options: ['military bases', 'theaters', 'crusader camps', 'church schools'], answer: 3 },
        ] },
        { type: 'matching', title: 'Vocabulary — match each to its plain meaning', pairs: [
          { term: 'Innocent III', def: 'The pope under whom papal power peaked (~1200).' },
          { term: 'investiture controversy', def: 'The pope-vs-king fight over appointing church offices (bishops).' },
          { term: 'Thomas Aquinas', def: 'The thinker who worked to combine faith and reason.' },
          { term: 'Reconquista', def: 'The long war to retake Spain from Muslim rule.' },
        ] },
        { type: 'answers', prompts: [
          'Put this in your own words: "Medieval popes claimed an authority that transcended borders, enabling the Church to discipline kings and dominate learning alike."',
        ] },
        { type: 'next', text: 'Next: kings start pushing back, towns and trade come roaring back, and cathedrals reach for the sky.' },
      ],
    },

    /* ───────────────── 4.8, 4.6, 4.11  Kings, trade, towns, Gothic ───────────────── */
    {
      id: 'kings-trade', n: 5, title: 'Kings, towns, trade, and cathedrals',
      subject: 'Social Science', minutes: 30, standards: '7.H.CH.3',
      blocks: [
        { type: 'hook', text: 'Slowly, the medieval world starts changing. English nobles force their king to sign a charter limiting his power (<b>Magna Carta</b>). A duke named <b>William</b> conquers England in <b>1066</b>. Towns and <b>trade</b> revive, and builders raise <b>cathedrals</b> so tall they seem to defy gravity.' },
        { type: 'prose', body: '<p><b>1066 and the growth of kings.</b> In <b>1066</b>, <b>William</b> the Conqueror led the Norman conquest of England, building one of Europe\'s strongest monarchies. But royal power had limits: in 1215, English barons forced King John to sign <b>Magna Carta</b>, which <b>limited royal power</b> and established that even a king is under the law.</p><p><b>Trade and towns revive.</b> As Europe stabilized, <b>trade</b> came roaring back, opening <b>new markets</b> and reviving towns. <b>Venice</b> grew rich <b>dominating Mediterranean trade</b>. In the towns, <b>guilds</b> — associations of craftsmen and merchants — <b>controlled trade</b>, setting prices, quality, and who could practice a craft.</p><p><b>Gothic cathedrals.</b> Wealth and faith produced the <b>Gothic</b> style: cathedrals with <b>tall spires</b>, pointed arches, and huge stained-glass windows. The key engineering trick was the <b>flying buttress</b> — an <b>architectural innovation</b>, an external support arm that let walls soar higher and thinner than ever before.</p>' },
        { type: 'video', title: 'Modern States 4.8, 4.6, 4.11 — England, trade & towns, Magna Carta', url: MS, label: '▶ Watch 4.8, 4.6, 4.11 on Modern States', focus: '1066 = William; Magna Carta limited royal power; Venice + guilds ran trade; Gothic = tall spires; flying buttress = the engineering breakthrough.' },
        { type: 'prose', body: '<p><b>🔎 As you watch, see if you can answer:</b></p><ol><li>Who led the conquest of England in <b>1066</b>, and what did <b>Magna Carta</b> do?</li><li>Which city <b>dominated Mediterranean trade</b>, and what did <b>guilds</b> do?</li><li>What is a <b>flying buttress</b>, and what do <b>Gothic</b> cathedrals feature?</li></ol>' },
        { type: 'quiz', questions: [
          { q: 'Who led the conquest of England in 1066?', options: ['Harold', 'Alfred', 'Edward', 'William'], answer: 3 },
          { q: 'The Magna Carta…', options: ['created Parliament', 'freed all slaves', 'banned feudal law', 'limited royal power'], answer: 3 },
          { q: 'What city dominated Mediterranean trade?', options: ['Venice', 'Toledo', 'Naples', 'London'], answer: 0 },
          { q: 'What did guilds do?', options: ['rule cities', 'build churches', 'train knights', 'control trade'], answer: 3 },
          { q: 'What was a flying buttress?', options: ['a castle weapon', 'a trade ship', 'an architectural innovation', 'a type of armor'], answer: 2 },
          { q: 'Gothic cathedrals feature…', options: ['low ceilings', 'tall spires', 'circular roofs', 'arched tunnels'], answer: 1 },
        ] },
        { type: 'matching', title: 'Vocabulary — match each to its plain meaning', pairs: [
          { term: 'Magna Carta', def: 'The 1215 charter that limited the English king\'s power.' },
          { term: 'guild', def: 'A town association that controlled a craft or trade.' },
          { term: 'flying buttress', def: 'An external support arm that let Gothic walls soar high and thin.' },
          { term: 'Gothic', def: 'The cathedral style of tall spires, pointed arches, and stained glass.' },
        ] },
        { type: 'answers', prompts: [
          'Put this in your own words: "By compelling the king to accept written limits on his authority, Magna Carta advanced the principle that no ruler stands above the law."',
        ] },
        { type: 'next', text: 'Next: catastrophe — a plague, a hundred-year war, and a split Church.' },
      ],
    },

    /* ───────────────── 4.13–4.18  The medieval crisis ───────────────── */
    {
      id: 'crisis', n: 6, title: 'Crisis: the Black Death and the end of an age',
      subject: 'Social Science', minutes: 30, standards: '7.H.CH.3',
      blocks: [
        { type: 'hook', text: 'In just a few years, a plague wiped out a <b>third of Europe</b>. Fields went unworked, whole villages emptied, and the survivors — suddenly rare and valuable — could demand better lives. The medieval world never fully recovered, and that\'s exactly how it ends and the modern one begins.' },
        { type: 'prose', body: '<p><b>The Black Death.</b> Around 1347 the plague entered Europe through Mediterranean <b>trading ports</b> and killed roughly a third of the population. With so many workers dead, it caused massive <b>labor shortages</b> — survivors could demand wages and freedom, which <b>weakened the lords and helped unravel feudalism</b>.</p><p><b>The Hundred Years\' War.</b> England and France fought on and off for over a century. When it finally ended, <b>England fell into civil war</b> (the Wars of the Roses).</p><p><b>The decline of feudalism.</b> Between the plague, the wars, and reviving towns and trade, power shifted. Increasingly it flowed to <b>stronger kings</b> with professional armies and taxes — draining it away from local feudal lords.</p><p><b>The Papal Schism.</b> The Church hit its own crisis when rival popes claimed the throne at once. It was finally <b>resolved by a church council</b> (the Council of Constance) — a reminder that even the Church could be shaken.</p>' },
        { type: 'video', title: 'Modern States 4.13–4.18 — Black Death, Hundred Years\' War, Papal Schism', url: MS, label: '▶ Watch 4.13–4.18 on Modern States', focus: 'Black Death → labor shortages (entered via trading ports); Hundred Years\' War → England\'s civil war; feudalism declines as kings grow stronger; Papal Schism → fixed by a church council.' },
        { type: 'prose', body: '<p><b>🔎 As you watch, see if you can answer:</b></p><ol><li>What did the <b>Black Death</b> cause, and how did it <b>reach</b> Europe?</li><li>What happened to <b>England</b> after the Hundred Years\' War?</li><li>What was one reason <b>feudalism declined</b>?</li><li>What <b>resolved the Papal Schism</b>?</li></ol>' },
        { type: 'quiz', questions: [
          { q: 'What did the Black Death cause?', options: ['end of kings', 'growth in farming', 'religious peace', 'labor shortages'], answer: 3 },
          { q: 'The Black Death entered Europe through…', options: ['Latin schools', 'desert winds', 'forests', 'trading ports'], answer: 3 },
          { q: 'What happened to England after the 100 Years\' War?', options: ['German invasion', 'more peace', 'new allies', 'civil war'], answer: 3 },
          { q: 'One reason feudalism declined was…', options: ['religious unity', 'fall of cities', 'fewer people', 'stronger kings'], answer: 3 },
          { q: 'What resolved the Papal Schism?', options: ['a new crusade', 'a trial of clergy', 'a church council', 'a royal law'], answer: 2 },
          { q: 'More trade brought about…', options: ['less farming', 'end of cities', 'new markets', 'bigger armies'], answer: 2 },
        ] },
        { type: 'matching', title: 'Vocabulary — match each to its plain meaning', pairs: [
          { term: 'Black Death', def: 'The plague that killed a third of Europe and caused labor shortages.' },
          { term: 'Hundred Years\' War', def: 'The long England–France war; England fell into civil war after it.' },
          { term: 'Papal Schism', def: 'The crisis of rival popes, resolved by a church council.' },
          { term: 'guild', def: 'A town association that controlled a craft or trade.' },
        ] },
        { type: 'answers', prompts: [
          'Put this in your own words: "By making surviving laborers scarce and therefore valuable, the Black Death eroded the manorial system that had bound serfs to their lords."',
        ] },
        { type: 'prose', body: '<p><b>Bring it to life</b></p><ul><li>📚 <i>The Inquisitor\'s Tale</i> by Adam Gidwitz — a funny, gripping medieval adventure (three kids and a holy dog) that\'s soaked in real 1200s life. A Newbery Honor book, and a genuinely great read.</li></ul>' },
        { type: 'next', text: 'Last card: pull the Middle Ages together and take the Modern States quiz.' },
      ],
    },

    /* ───────────────── REFLECTION ───────────────── */
    {
      id: 'reflect', n: 7, title: 'Module 4 check',
      subject: 'Social Science', minutes: 30, standards: 'RI.7.8',
      blocks: [
        { type: 'prose', body: '<p>A thousand years in one breath: Rome\'s government <b>collapses</b> → <b>feudalism</b> (land + loyalty, serfs, manors) and the <b>Church</b> (the era\'s superpower — Innocent III, universities, Aquinas) hold Europe together → kings grow stronger (<b>1066</b>, <b>Magna Carta</b>), <b>trade</b> and towns revive (Venice, guilds), cathedrals soar (<b>Gothic</b>, flying buttresses) → then crisis: the <b>Black Death</b>, the <b>Hundred Years\' War</b>, and the <b>Papal Schism</b> crack the medieval world open — and the Renaissance is next.</p><p>Now take the real thing: open Module 4 on Modern States and do its summary + module quiz. This is the biggest module, so expect to revisit a few lessons — totally normal.</p>' },
        { type: 'practice', title: 'Take the Modern States Module 4 quiz', note: 'Log in, open Module 4, do the Summary and the module quiz. Rewatch any lesson you miss — this one\'s big, so take your time.', links: [
          { url: MS, label: 'Open Module 4 on Modern States' },
        ] },
        { type: 'kwlback', prompt: 'Here\'s what you wrote at the start. Look how much you can hang on it now.' },
        { type: 'vocabsort', title: 'Which words do you own now?', note: 'Tap each: "got it cold" or "still fuzzy." The fuzzy ones are your study list.' },
        { type: 'rubric', title: 'Give yourself an honest check', items: [
          'I can explain feudalism in one line (land + loyalty) and place serfs, manors, and knights in it.',
          'I can explain why the Church was the most powerful institution (popes, universities, Aquinas).',
          'I can say what Magna Carta did and who conquered England in 1066.',
          'I can explain how the Black Death caused labor shortages and helped end feudalism.',
          'I can name the medieval crises: Black Death, Hundred Years\' War, Papal Schism.',
        ] },
        { type: 'done', text: 'Module 4 down — the big one. Next is the Renaissance and Reformation: art explodes, and Europe\'s religious unity shatters.' },
      ],
    },

  ],
});
})();
