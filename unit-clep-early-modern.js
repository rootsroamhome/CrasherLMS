/**
 * unit-clep-early-modern.js — CLEP Unit 6: Early Modern Europe (Modern States Module 6)
 *
 * Final module — takes the course to 1648. Same pattern: real content + assessments,
 * NO meta, fun on top. Lessons 6.1–6.9. Quiz-aligned to the real Module 6 quiz (Thirty
 * Years' War/Germany, Cromwell, Newton, Columbus→colonization, absolutism, France gains,
 * Las Casas, heliocentric, Ivan/Tsar, Galileo, Prince Henry, Columbian Exchange, corn,
 * Columbus→Asia, Cortés/Aztecs). track:'clep'. See docs/BUILDING-CLEP-UNITS.md.
 */

(function () {
const MS = 'https://learn.modernstates.org/d2l/le/discovery/view/course/6858';
const MS_SIGNUP = 'https://register.modernstates.org';

window.HS_UNITS = window.HS_UNITS || [];
window.HS_UNITS.push({
  id: 'clep-early-modern',
  short: 'CLEP · Early Modern',
  title: 'Early Modern Europe (CLEP Western Civ I · Module 6)',
  track: 'clep',
  eq: 'How did Europe burst out into the whole world — and start to see it in a brand-new way?',
  image: 'assets/units/clep-early-modern.jpg',

  parent: {
    hotspots: [
      'Module 6 — the last one (Modern States 6.1–6.9). It carries the course to its end date, 1648, and pulls together three big stories.',
      'Three threads: the <b>Age of Exploration</b> (Portugal, Columbus, Cortés, the Columbian Exchange), the <b>Scientific Revolution</b> (Copernicus, Galileo, Newton), and rising <b>absolutism</b> (kings with total power) ending with the Thirty Years\' War in 1648.',
      'The course literally ends at <b>1648</b> (the end of the Thirty Years\' War). After this module + a review, he\'s ready for the whole CLEP exam.',
      'Good moment to zoom all the way out with him: the exam covers Ancient Near East → 1648, so a quick pass back through all six modules is the best review.',
    ],
    activities: [
      { tier: 'Small', title: 'Columbian Exchange T-chart', detail: 'Two columns: "Old World → New World" (horses, wheat, guns, diseases) and "New World → Old World" (corn, potatoes, tomatoes, chocolate). It makes the whole idea concrete in five minutes.', cost: 'Free', time: '15 min' },
      { tier: 'Medium', title: 'Earth vs. Sun debate', detail: 'Have him argue the old view (Earth at the center, it "looks" still) vs. the new one (Sun at the center, proven by evidence). That tension — tradition vs. proof — IS the Scientific Revolution.', cost: 'Free', time: '20 min' },
      { tier: 'Large', title: 'Meet the scientists', detail: 'The Giants of Science biographies (Kathleen Krull\'s Isaac Newton, Leonardo, Galileo) are short, funny, and vivid. Great high-interest reading for the science half.', cost: 'Library', time: 'Across the module' },
    ],
  },

  vocab: {
    mustOwn: [
      { term: 'Age of Exploration', def: 'The 1400s–1600s era when European ships explored, traded with, and colonized the wider world.' },
      { term: 'colonization',       def: 'Settling and controlling foreign lands — which exploded after Columbus reached the Americas.' },
      { term: 'Columbian Exchange', def: 'The vast movement of plants, animals, people, and diseases between the Old World and the New.' },
      { term: 'conquistador',       def: 'A Spanish conqueror in the Americas (e.g. Cortés, who defeated the Aztecs).' },
      { term: 'Scientific Revolution', def: 'The 1500s–1600s shift to explaining nature through observation, math, and proof.' },
      { term: 'heliocentric',       def: 'The model with the Sun (not the Earth) at the center of the solar system.' },
      { term: 'absolutism',         def: 'A system in which a ruler holds total, unchecked power (often claiming "divine right").' },
      { term: 'Thirty Years\' War',  def: 'A devastating 1618–1648 war centered in Germany; it ended in 1648, the course\'s endpoint.' },
      { term: 'tsar',               def: 'The title of the Russian monarch — first taken by Ivan the Terrible.' },
    ],
    frayer: [
      {
        term: 'the Columbian Exchange',
        definition: 'The enormous, world-changing movement of plants, animals, people, and diseases between the Old World (Europe, Africa, Asia) and the New World (the Americas) after Columbus\'s 1492 voyage. It reshaped diets, populations, and economies on every continent — often devastatingly for Native Americans, through disease.',
        examples: ['Corn, potatoes, and tomatoes going to Europe', 'Horses, wheat, and cattle coming to the Americas', 'Old World diseases killing millions of Native Americans'],
        nonexamples: ['Trade only within Europe', 'A single explorer\'s voyage (that\'s just one trip)', 'The Silk Road (Old World only, and much earlier)'],
        sentence: 'The Columbian Exchange linked two halves of the world into one — moving goods and people, and unleashing disease.',
      },
      {
        term: 'absolutism',
        definition: 'A form of government in which a single ruler holds total, unchecked power, often justified by "divine right" (the claim that God chose the king). Early modern monarchs like Louis XIV of France and the Russian tsars pushed toward absolute rule, concentrating authority in themselves rather than sharing it with nobles or assemblies.',
        examples: ['A king making law by himself, with no parliament to check him', 'Louis XIV: "I am the state"', 'Russian tsars ruling as autocrats'],
        nonexamples: ['A republic with elected officials', 'England after Parliament and Cromwell limited the crown', 'Athenian democracy'],
        sentence: 'Absolutism concentrated all power in one ruler — the opposite of shared or limited government.',
      },
    ],
  },

  cards: [

    /* ───────────────── LAUNCH ───────────────── */
    {
      id: 'launch', n: 1, title: 'Module 6: Early Modern Europe',
      subject: 'Social Science', minutes: 20, standards: '',
      blocks: [
        { type: 'hook', text: 'This is the finish line — the module that carries the whole course to <b>1648</b>. In it, Europe does three astonishing things at once: sails out to <b>the entire globe</b>, starts explaining the universe with <b>math and proof</b>, and hands a few kings <b>absolute power</b>.' },
        { type: 'prose', body: '<p>Last one. Watch the Modern States lessons (<b>Module 6: Early Modern Europe</b>, lessons 6.1–6.9) and use these cards with them. Three threads: <b>exploration</b> → the <b>Scientific Revolution</b> → <b>absolutism</b> and the wars that end in 1648. Finish this and you\'ve done the whole course.</p>' },
        { type: 'flashcards', title: 'Meet the words first', note: 'Tap to flip. These come back all module long.' },
        { type: 'video', title: 'Open Module 6 on Modern States', url: MS, label: '▶ Open Western Civ I on Modern States', focus: 'Log in, open Module 6, watch the intro and 6.1.' },
        { type: 'kwl', prompt: 'Quick gut-check — no wrong answers.',
          klabel: 'What I already know about this era (Columbus, explorers, Galileo, Newton, powerful kings):',
          wlabel: 'What I want to be able to explain by the end:' },
        { type: 'next', text: 'Next: Europe sets sail — and two halves of the world collide.' },
      ],
    },

    /* ───────────────── 6.1–6.5  Age of Exploration ───────────────── */
    {
      id: 'exploration', n: 2, title: 'The Age of Exploration',
      subject: 'Social Science', minutes: 30, standards: '7.H.CH.3',
      blocks: [
        { type: 'hook', text: 'A Portuguese prince funds sailors to push down the coast of Africa. An Italian captain sails west hoping to reach Asia — and bumps into two continents nobody in Europe knew existed. Within decades, the Old World and the New are joined forever, for better and (for millions) much worse.' },
        { type: 'prose', body: '<p><b>Portugal leads.</b> <b>Prince Henry</b> of Portugal is known for <b>funding exploration</b> — backing the voyages and navigation that opened the sea routes.</p><p><b>Columbus.</b> In 1492, <b>Columbus</b> sailed west believing he could <b>reach Asia</b>. He reached the Americas instead — and that mistake launched European <b>colonization</b> of the New World.</p><p><b>Conquest.</b> <b>Cortés</b> is remembered for <b>conquering the Aztecs</b> in Mexico. Not everyone approved: the priest <b>Las Casas</b> became famous for <b>defending indigenous peoples</b> against Spanish cruelty.</p><p><b>The Columbian Exchange.</b> Contact set off the <b>Columbian Exchange</b> — a massive two-way <b>movement of goods and people</b> (and animals and diseases) between the hemispheres. One example the exam loves: <b>corn (maize)</b> came to Europe <b>from the Americas</b> (along with potatoes and tomatoes), while horses and wheat — and deadly diseases — went the other way.</p>' },
        { type: 'video', title: 'Modern States 6.1–6.5 — Portugal, Columbus, conquest, Atlantic trade', url: MS, label: '▶ Watch 6.1–6.5 on Modern States', focus: 'Prince Henry funded exploration; Columbus aimed for Asia → colonization; Cortés beat the Aztecs; Las Casas defended natives; Columbian Exchange moved goods + people (corn came FROM the Americas).' },
        { type: 'prose', body: '<p><b>🔎 As you watch, see if you can answer:</b></p><ol><li>What was <b>Prince Henry</b> known for, and what did <b>Columbus</b> believe he could do?</li><li>What happened after Columbus arrived, and what is <b>Cortés</b> remembered for?</li><li>What is <b>Las Casas</b> known for?</li><li>What did the <b>Columbian Exchange</b> involve, and which crop came to Europe from the Americas?</li></ol>' },
        { type: 'quiz', questions: [
          { q: 'What was Prince Henry of Portugal known for?', options: ['funding exploration', 'sailing to Asia', 'building cathedrals', 'fighting in Italy'], answer: 0 },
          { q: 'Columbus believed he could…', options: ['defeat the Spanish', 'sail around Africa', 'find Atlantis', 'reach Asia'], answer: 3 },
          { q: 'What happened after Columbus arrived in the Americas?', options: ['Spain left the area', 'gold was banned', 'Portugal ruled', 'colonization began'], answer: 3 },
          { q: 'Cortés is remembered for…', options: ['ending slavery', 'settling Canada', 'becoming pope', 'conquering the Aztecs'], answer: 3 },
          { q: 'Las Casas is best known for…', options: ['trading with Africa', 'colonizing Brazil', 'defending indigenous peoples', 'building ships'], answer: 2 },
          { q: 'The Columbian Exchange involved…', options: ['military treaties', 'movement of goods and people', 'slave rebellions', 'isolation of Europe'], answer: 1 },
          { q: 'Which crop came to Europe from the Americas?', options: ['corn', 'grapes', 'wheat', 'olives'], answer: 0 },
        ] },
        { type: 'matching', title: 'Vocabulary — match each to its plain meaning', pairs: [
          { term: 'Prince Henry', def: 'The Portuguese prince known for funding exploration.' },
          { term: 'Columbus', def: 'Sailed west to reach Asia in 1492 — reached the Americas instead.' },
          { term: 'Cortés', def: 'The conquistador who conquered the Aztecs.' },
          { term: 'Columbian Exchange', def: 'The two-way movement of goods, people, animals, and disease between the hemispheres.' },
        ] },
        { type: 'answers', prompts: [
          'Put this in your own words: "Columbus\'s voyages inaugurated a transatlantic exchange of crops, livestock, peoples, and pathogens that transformed both hemispheres."',
        ] },
        { type: 'prose', body: '<p><b>Bring it to life</b></p><ul><li>🎬 <a href="https://www.youtube.com/watch?v=HQPA5oNpfM4">The Columbian Exchange — CrashCourse World History #23</a> — how contact remade the diets and populations of the whole world.</li><li>📚 <i>The Cartoon History of the Modern World, Part 1</i> by Larry Gonick — picks up right here with Columbus and the age of exploration. Funny and dense in the best way.</li></ul>' },
        { type: 'next', text: 'Next: while ships crossed the ocean, a few thinkers rewrote the universe itself.' },
      ],
    },

    /* ───────────────── 6.9  Scientific Revolution ───────────────── */
    {
      id: 'science', n: 3, title: 'The Scientific Revolution',
      subject: 'Social Science', minutes: 30, standards: 'RI.7.8',
      blocks: [
        { type: 'hook', text: 'For thousands of years, everyone "knew" the Earth sat still at the center of the universe. Then a handful of thinkers did something radical: instead of trusting old authority, they <b>looked, measured, and proved</b>. That switch — from tradition to evidence — is the <b>Scientific Revolution</b>.' },
        { type: 'prose', body: '<p><b>A new center.</b> The <b>heliocentric</b> theory (Copernicus) proposed that the <b>Sun, not the Earth, is at the center</b> of the solar system — overturning the old Earth-centered view.</p><p><b>Galileo.</b> Using a telescope and experiments, <b>Galileo supported</b> the new model with <b>scientific proof</b> — observation and evidence rather than tradition. (The Church put him on trial for it.)</p><p><b>Newton.</b> <b>Isaac Newton</b> tied it all together with his <b>laws of motion</b> and gravity — showing that the same simple rules govern a falling apple and an orbiting planet. This is the birth of modern science: nature explained by math and proof.</p>' },
        { type: 'video', title: 'Modern States 6.9 — Intellectual Developments: Science to 1648', url: MS, label: '▶ Watch 6.9 on Modern States', focus: 'Heliocentric = Sun at the center; Galileo backed it with proof; Newton gave the laws of motion. Tradition → evidence.' },
        { type: 'prose', body: '<p><b>🔎 As you watch, see if you can answer:</b></p><ol><li>What did the <b>heliocentric</b> theory propose?</li><li>What did <b>Galileo</b> support?</li><li>What is <b>Isaac Newton</b> known for?</li></ol>' },
        { type: 'quiz', questions: [
          { q: 'What did the heliocentric theory propose?', options: ['sun at center of universe', 'Earth was divine', 'stars never moved', 'Earth was flat'], answer: 0 },
          { q: 'Galileo supported…', options: ['Earth-centered models', 'war with the Church', 'magic', 'scientific proof'], answer: 3 },
          { q: 'Isaac Newton is known for…', options: ['conquering France', 'inventing the clock', 'laws of motion', 'writing poetry'], answer: 2 },
        ] },
        { type: 'matching', title: 'Vocabulary — match each to its plain meaning', pairs: [
          { term: 'heliocentric', def: 'The model with the Sun at the center of the solar system.' },
          { term: 'Galileo', def: 'Backed the Sun-centered model with telescopes and proof.' },
          { term: 'Isaac Newton', def: 'Gave us the laws of motion and gravity.' },
          { term: 'Scientific Revolution', def: 'The shift to explaining nature through observation, math, and proof.' },
        ] },
        { type: 'answers', prompts: [
          'Put this in your own words: "The Scientific Revolution replaced reliance on ancient authority with conclusions drawn from observation, experiment, and mathematics."',
        ] },
        { type: 'prose', body: '<p><b>Bring it to life</b></p><ul><li>📚 <i>Isaac Newton</i> by Kathleen Krull (Giants of Science) — a short, funny, vivid biography of a genuinely strange genius.</li></ul>' },
        { type: 'next', text: 'Next: the kings grab total power — and Europe fights the war that ends the course.' },
      ],
    },

    /* ───────────────── 6.6–6.8  Absolutism & 1648 ───────────────── */
    {
      id: 'absolutism', n: 4, title: 'Absolute kings and the war that ends in 1648',
      subject: 'Social Science', minutes: 30, standards: '7.C.PI.1',
      blocks: [
        { type: 'hook', text: 'As the modern world dawns, power piles up in a few hands. Kings claim <b>total, God-given authority</b> — <b>absolutism</b> — while a brutal religious war tears through Germany and finally ends in <b>1648</b>, the year the course closes.' },
        { type: 'prose', body: '<p><b>Absolutism.</b> Many early-modern rulers pushed toward <b>absolutism</b> — the idea that a monarch should hold <b>all power</b>, unchecked (often claiming "divine right"). In <b>Russia</b>, <b>Ivan the Terrible</b> became the first ruler crowned <b>Tsar</b>, ruling as an absolute autocrat.</p><p><b>England pushes back.</b> Not everywhere. In England, king and Parliament clashed until civil war broke out; King <b>Charles I was executed</b>, and <b>Oliver Cromwell</b> ruled England in his place — a dramatic check on royal power.</p><p><b>The Thirty Years\' War (1618–1648).</b> The Protestant–Catholic split (from Module 5) finally exploded into the <b>Thirty Years\' War</b>, centered in <b>Germany</b> and horrifically destructive. It ended in <b>1648</b> — the endpoint of this whole course — and left <b>France</b> as the big winner, the new dominant power in Europe.</p>' },
        { type: 'video', title: 'Modern States 6.6–6.8 — Thirty Years\' War, England, absolutism in France & Russia', url: MS, label: '▶ Watch 6.6–6.8 on Modern States', focus: 'Thirty Years\' War = Germany, ends 1648, France gains; absolutism = ruler holds all power; England: Charles I executed → Cromwell; Ivan = first Tsar.' },
        { type: 'prose', body: '<p><b>🔎 As you watch, see if you can answer:</b></p><ol><li>Where did the <b>Thirty Years\' War</b> begin, and who <b>gained power</b> after it?</li><li>What did <b>absolutism</b> mean?</li><li>Who ruled England after <b>Charles I</b> was executed?</li><li>What title was <b>Ivan the Terrible</b> the first to take?</li></ol>' },
        { type: 'quiz', questions: [
          { q: 'The Thirty Years\' War began in…', options: ['Turkey', 'Spain', 'Italy', 'Germany'], answer: 3 },
          { q: 'Who gained power after the Thirty Years\' War?', options: ['France', 'Portugal', 'the pope', 'Spain'], answer: 0 },
          { q: 'Absolutism meant that…', options: ['Parliament dominated', 'rulers held all power', 'religion was law', 'kings shared rule'], answer: 1 },
          { q: 'Who ruled England after Charles I was executed?', options: ['Henry VII', 'Mary I', 'Edward VI', 'Oliver Cromwell'], answer: 3 },
          { q: 'Ivan the Terrible was the first ruler to be called…', options: ['Emperor', 'King', 'Regent', 'Tsar'], answer: 3 },
        ] },
        { type: 'matching', title: 'Vocabulary — match each to its plain meaning', pairs: [
          { term: 'absolutism', def: 'A system where a ruler holds total, unchecked power.' },
          { term: 'Thirty Years\' War', def: 'The 1618–1648 war centered in Germany; ended the course\'s era.' },
          { term: 'Oliver Cromwell', def: 'Ruled England after Charles I was executed.' },
          { term: 'tsar', def: 'The Russian monarch\'s title — first taken by Ivan the Terrible.' },
        ] },
        { type: 'answers', prompts: [
          'Put this in your own words: "Whereas absolutist monarchs concentrated unchecked authority in the crown, England moved toward limiting royal power through Parliament."',
        ] },
        { type: 'next', text: 'Last card: pull the module — and the whole course — together, then take the Modern States quiz.' },
      ],
    },

    /* ───────────────── REFLECTION ───────────────── */
    {
      id: 'reflect', n: 5, title: 'Module 6 check — and the whole course',
      subject: 'Social Science', minutes: 30, standards: 'RI.7.8',
      blocks: [
        { type: 'prose', body: '<p>This module in one breath: Europe sails out (<b>Prince Henry</b>, <b>Columbus</b>, <b>Cortés</b>, the <b>Columbian Exchange</b>) → rethinks the universe (<b>heliocentric</b>, <b>Galileo</b>, <b>Newton</b>) → and concentrates power (<b>absolutism</b>, <b>Ivan/Tsar</b>, England\'s <b>Cromwell</b>) until the <b>Thirty Years\' War</b> ends in <b>1648</b> — where the course stops.</p><p><b>And that\'s the whole course.</b> Ancient Near East → Greece → Rome → the Middle Ages → Renaissance &amp; Reformation → Early Modern, first cities to 1648. Take Module 6\'s quiz, then do a slow pass back through all six modules before the exam.</p>' },
        { type: 'practice', title: 'Take the Modern States Module 6 quiz', note: 'Log in, open Module 6, do the Summary and the module quiz. Then you\'re ready to review the whole course.', links: [
          { url: MS, label: 'Open Module 6 on Modern States' },
        ] },
        { type: 'kwlback', prompt: 'Here\'s what you wrote at the start. Look how much you can hang on it now.' },
        { type: 'vocabsort', title: 'Which words do you own now?', note: 'Tap each: "got it cold" or "still fuzzy." The fuzzy ones are your study list.' },
        { type: 'rubric', title: 'Give yourself an honest check', items: [
          'I can explain the Columbian Exchange and name something that traveled each way.',
          'I can explain the Scientific Revolution (heliocentric, Galileo, Newton).',
          'I can define absolutism and give an example (Ivan/Tsar).',
          'I can say where the Thirty Years\' War was fought, when it ended, and who gained.',
          'I can tell the whole course\'s story from the first cities to 1648.',
        ] },
        { type: 'done', text: 'That\'s the entire course — all six modules, first cities to 1648. Do a relaxed review pass, and whenever you\'re ready, the CLEP exam is waiting. Huge accomplishment.' },
      ],
    },

  ],
});
})();
