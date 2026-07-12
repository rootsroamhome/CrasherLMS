/**
 * unit-clep-greece.js — CLEP Unit 2: Greece and Its Legacy (Modern States Module 2)
 *
 * Built like Module 1: real content + assessments, NO meta (he never sees scaffolding),
 * fun on top. Videos/readings deep-link to the Modern States course (log in once); each
 * card names the exact lesson (2.1, 2.2 …). Quiz-aligned to the real Module 2 quiz
 * (democracy/Solon, Aristotle, Hellenistic, Pericles, Socratic questions, Philip II,
 * Peloponnesian War, Sparta, tragedy, Stoicism, Alexandria, Thucydides, Delian League).
 * track:'clep' → brown theme. See docs/BUILDING-CLEP-UNITS.md.
 */

(function () {
const MS = 'https://learn.modernstates.org/d2l/le/discovery/view/course/6858';
const MS_SIGNUP = 'https://register.modernstates.org';

window.HS_UNITS = window.HS_UNITS || [];
window.HS_UNITS.push({
  id: 'clep-greece',
  short: 'CLEP · Greece',
  title: 'Greece and Its Legacy (CLEP Western Civ I · Module 2)',
  track: 'clep',
  eq: 'How did a handful of quarrelsome Greek cities end up inventing so much of the Western world?',
  image: 'assets/units/clep-greece.jpg',

  parent: {
    hotspots: [
      'Module 2 of the CLEP course — Ancient Greece. Same routine as Module 1: he watches the short Modern States lessons (2.1–2.11) and does these cards. It\'s ~14 short lessons.',
      'The exam leans hard on <b>politics</b> (Athenian democracy: Solon → Cleisthenes → Pericles) and <b>philosophy</b> (Socrates, Plato, Aristotle, plus Stoicism). If he owns those two threads, he owns most of the module.',
      'Sparta vs. Athens and the two big wars (Persian Wars, Peloponnesian War) are the backbone. A simple wall chart — "Sparta = army / Athens = democracy + culture" — pays off.',
      'Alexander the Great is the hinge: Philip II unites Greece, Alexander conquers east, and Greek culture blends across the world (the "Hellenistic" age) — capped by the great Library of Alexandria.',
    ],
    activities: [
      { tier: 'Small', title: 'Two-column Sparta vs. Athens', detail: 'On one sheet, list what each city valued (Sparta: military, discipline, obedience; Athens: democracy, philosophy, drama, trade). The whole module snaps into place around this contrast.', cost: 'Free', time: '20 min' },
      { tier: 'Medium', title: 'Argue like Socrates', detail: 'Pick any claim he believes ("video games are good for you"). You only ask questions — never state your view — until he refines or defends it. That IS the Socratic method, and he\'ll never forget what it means.', cost: 'Free', time: '20–30 min' },
      { tier: 'Large', title: 'Read a myth, then the philosophy', detail: 'Let him binge Percy Jackson or D\'Aulaires\' Greek Myths for fun, then point out that the same Greeks who told those stories also invented democracy and philosophy. High interest first, rigor second.', cost: 'Library', time: 'Across the module' },
    ],
  },

  vocab: {
    mustOwn: [
      { term: 'polis',           def: 'A Greek city-state — an independent city plus its countryside (e.g. Athens, Sparta), each with its own government.' },
      { term: 'democracy',       def: 'Rule by the people; in Athens, male citizens voted directly on laws.' },
      { term: 'oligarchy',       def: 'Rule by a small group (Sparta was closer to this) — the opposite of democracy.' },
      { term: 'philosophy',      def: 'Greek for "love of wisdom" — using reason to ask how we should live and what is true.' },
      { term: 'Socratic method', def: 'Teaching by relentless questioning (Socrates) to expose weak thinking and reach better ideas.' },
      { term: 'tragedy',         def: 'A Greek dramatic form about human suffering, fate, and downfall — performed at religious festivals.' },
      { term: 'Delian League',   def: 'An alliance of Greek city-states led by Athens, formed to resist Persia.' },
      { term: 'Hellenistic',     def: 'The age after Alexander when Greek culture blended with Egyptian, Persian, and Asian cultures across his old empire.' },
      { term: 'Stoicism',        def: 'A Hellenistic philosophy: stay calm and virtuous by accepting what you cannot control (fate).' },
    ],
    frayer: [
      {
        term: 'democracy (Athenian)',
        definition: 'A system where citizens themselves — not a king — hold political power. Athens built the first large direct democracy: male citizens debated and voted on laws in person. Reformers Solon and Cleisthenes opened it up; Pericles widened participation further.',
        examples: ['Citizens voting directly in the Assembly', 'Solon canceling debts and loosening the grip of the rich', 'Pericles paying poor citizens so they could serve in office'],
        nonexamples: ['A Spartan council of a few elders (that\'s oligarchy)', 'A god-king like Egypt\'s pharaoh', 'A modern country where you only elect representatives — Athens\' was direct'],
        sentence: 'Athenian democracy was direct and limited to male citizens — radical for its time, but not universal.',
      },
      {
        term: 'Hellenistic age',
        definition: 'The period (after Alexander the Great\'s conquests, ~323 BCE) when Greek language, art, and ideas mixed with the cultures of Egypt, Persia, and the East across his former empire. "Hellenistic" = Greek-influenced blending, not pure Greek.',
        examples: ['The Library of Alexandria in Egypt, a Greek-founded city', 'Stoic and Epicurean philosophy spreading widely', 'Greek-style statues made from Egypt to India'],
        nonexamples: ['Classical Athens BEFORE Alexander (that\'s "Hellenic," pure Greek)', 'The Roman Republic (comes later, though it borrows heavily)'],
        sentence: 'Alexander\'s conquests turned Greek culture into a shared world culture — that blend is the Hellenistic age.',
      },
    ],
  },

  cards: [

    /* ───────────────── LAUNCH ───────────────── */
    {
      id: 'launch', n: 1, title: 'Module 2: the Greeks',
      subject: 'Social Science', minutes: 20, standards: '',
      blocks: [
        { type: 'hook', text: 'A few small, rocky, constantly-fighting Greek cities came up with <b>democracy</b>, <b>philosophy</b>, <b>theater</b>, the <b>Olympics</b>, and the idea that you should <b>question everything</b>. Then one 20-something — Alexander — spread all of it from Egypt to India. Module 2 is how that happened.' },
        { type: 'prose', body: '<p>Same setup as Module 1: watch the short lessons on <b>Modern States</b> (this is <b>Module 2: Greece and Its Legacy</b>, lessons 2.1–2.11), and use these cards alongside them. Two threads run through the whole module — keep an eye on both:</p><ul><li><b>Politics:</b> Sparta (a war machine) vs. Athens (the first big democracy).</li><li><b>Ideas:</b> philosophy (Socrates → Plato → Aristotle) and drama.</li></ul>' },
        { type: 'flashcards', title: 'Meet the words first', note: 'Tap to flip. These come back all module long.' },
        { type: 'video', title: 'Open Module 2 on Modern States', url: MS, label: '▶ Open Western Civ I on Modern States', focus: 'Log in, open Module 2, and watch the short intro plus 2.1. (First time? Free signup at register.modernstates.org.)' },
        { type: 'kwl', prompt: 'Quick gut-check — no wrong answers.',
          klabel: 'What I already know about ancient Greece (myths, the Olympics, Sparta, philosophers):',
          wlabel: 'What I want to be able to explain by the end:' },
        { type: 'next', text: 'Next: two cities, two totally different ideas of the good life — Sparta and Athens.' },
      ],
    },

    /* ───────────────── 2.1–2.3  Sparta & Athens ───────────────── */
    {
      id: 'polis', n: 2, title: 'The polis: Sparta vs. Athens',
      subject: 'Social Science', minutes: 30, standards: '7.C.PI.1',
      blocks: [
        { type: 'hook', text: 'Two Greek cities, a few days\' walk apart, built opposite worlds. <b>Sparta</b> turned every boy into a soldier from age seven. <b>Athens</b> let its citizens argue and vote on the laws themselves. One valued <b>obedience</b>; the other, <b>participation</b>.' },
        { type: 'prose', body: '<p>Greece wasn\'t a country — it was a scatter of independent city-states called the <b>polis</b> (Athens, Sparta, Thebes, Corinth…), each with its own government, often at war with the next. Two matter most on the exam:</p><ul><li><b>Sparta</b> — a society built around its <b>army</b>. Boys entered brutal military training at seven; the whole state existed to produce disciplined soldiers. Ruled by a few (closer to an <b>oligarchy</b>). What Sparta was <em>most known for: military training.</em></li><li><b>Athens</b> — the birthplace of <b>democracy</b>. It didn\'t start that way: the reformer <b>Solon</b> canceled crushing debts and cracked the nobles\' monopoly on power, <b>strengthening democracy</b>; <b>Cleisthenes</b> then reorganized the citizens so more of them could take part. Athenian democracy was <em>direct</em> (citizens voted in person) but limited to free adult men.</li></ul>' },
        { type: 'video', title: 'Modern States 2.1–2.3 — Early Greece, Sparta, Athens', url: MS, label: '▶ Watch 2.1–2.3 on Modern States', focus: 'Nail the contrast: Sparta = military discipline; Athens = citizens sharing power. And what Solon actually changed.' },
        { type: 'prose', body: '<p><b>🔎 As you watch, see if you can answer:</b></p><ol><li>What was Sparta organized around, above everything else?</li><li>What did <b>Solon\'s</b> reforms do to Athenian democracy?</li><li>What does <b>polis</b> mean, and why were the Greek cities always fighting?</li></ol>' },
        { type: 'quiz', questions: [
          { q: 'Solon\'s reforms in Athens helped…', options: ['reduce taxes', 'spread slavery', 'strengthen democracy', 'encourage monarchy'], answer: 2 },
          { q: 'What was Sparta most known for?', options: ['military training', 'drama festivals', 'scientific study', 'sea trade'], answer: 0 },
          { q: 'A "polis" was…', options: ['a Greek god', 'an independent Greek city-state', 'a type of pottery', 'a Persian army'], answer: 1 },
        ] },
        { type: 'matching', title: 'Vocabulary — match each to its plain meaning', pairs: [
          { term: 'polis', def: 'An independent Greek city-state — a city plus its countryside.' },
          { term: 'democracy', def: 'Rule by the people; Athenian male citizens voted directly on laws.' },
          { term: 'oligarchy', def: 'Rule by a small group — closer to how Sparta worked.' },
          { term: 'Solon', def: 'The Athenian reformer who canceled debts and opened up democracy.' },
        ] },
        { type: 'answers', prompts: [
          'Put this in your own words: "Whereas Sparta subordinated the individual to the needs of the military state, Athens extended a measure of political participation to its citizens."',
        ] },
        { type: 'prose', body: '<p><b>Bring it to life</b></p><ul><li>🎬 <a href="https://www.youtube.com/watch?v=Q-mkVSasZIM">The Persians &amp; Greeks — CrashCourse World History #5</a> — sets up Sparta, Athens, and the fight with Persia.</li><li>📚 <i>The Lightning Thief</i> (Percy Jackson &amp; the Olympians) by Rick Riordan — a modern kid discovers the Greek gods are real. Pure fun, and it makes all the names stick.</li></ul>' },
        { type: 'next', text: 'Next: all these squabbling cities suddenly team up — because Persia is coming.' },
      ],
    },

    /* ───────────────── 2.4–2.6  Persian Wars, Golden Age, Peloponnesian War ───────────────── */
    {
      id: 'wars', n: 3, title: 'Persia, the Golden Age, and the war that ended it',
      subject: 'Social Science', minutes: 30, standards: '7.H.CH.3',
      blocks: [
        { type: 'hook', text: 'The mightiest empire on Earth — <b>Persia</b> — invaded tiny, divided Greece twice… and lost twice. Athens rode that victory into a <b>Golden Age</b>. Then the Greeks turned on each other, and the golden age burned itself out.' },
        { type: 'prose', body: '<p><b>The Persian Wars.</b> When Persia invaded (~490–479 BCE), the Greek city-states banded together and beat it back (Marathon, Salamis). Afterward Athens organized the <b>Delian League</b> — an alliance <b>to resist Persia</b> — but gradually ran it like its own empire.</p><p><b>The Golden Age of Athens.</b> Under the leader <b>Pericles</b>, Athens hit its peak: the Parthenon was built, drama and philosophy flourished, and Pericles <b>expanded participation in politics</b> (even paying poorer citizens so they could afford to serve). This is the classic image of Athenian democracy and culture.</p><p><b>Two historians to know.</b> <b>Herodotus</b> (the "Father of History") wrote colorful accounts of the Persian Wars, myths and all. <b>Thucydides</b>, writing about the next war, was different: he <b>focused on facts</b>, evidence, and cause-and-effect — closer to how we do history now.</p><p><b>The Peloponnesian War.</b> Athens and Sparta finally went to war with each other (431–404 BCE). It dragged on for a generation and ended with <b>Sparta defeating Athens</b> — leaving all of Greece exhausted and open to a new power from the north.</p>' },
        { type: 'video', title: 'Modern States 2.4–2.6 — Persian Wars, Peloponnesian War, Golden Age', url: MS, label: '▶ Watch 2.4–2.6 on Modern States', focus: 'Two wars, don\'t mix them up: Persian Wars = Greeks vs. Persia (Greeks win). Peloponnesian War = Athens vs. Sparta (Sparta wins).' },
        { type: 'prose', body: '<p><b>🔎 As you watch, see if you can answer:</b></p><ol><li>Why was the <b>Delian League</b> created?</li><li>What did <b>Pericles</b> expand?</li><li>How was <b>Thucydides</b> different from <b>Herodotus</b>?</li><li>Who won the <b>Peloponnesian War</b>?</li></ol>' },
        { type: 'quiz', questions: [
          { q: 'Why was the Delian League created?', options: ['to trade with India', 'to resist Persia', 'to defend against Sparta', 'to build temples'], answer: 1 },
          { q: 'Pericles expanded…', options: ['slave ownership', 'participation in politics', 'military service for women', 'Persian alliances'], answer: 1 },
          { q: 'Thucydides was different from Herodotus because he…', options: ['supported myth', 'wrote plays', 'focused on facts', 'praised kings'], answer: 2 },
          { q: 'The Peloponnesian War ended with…', options: ['the rise of Rome', 'Athens becoming an empire', 'Sparta defeating Athens', 'Persia invading Greece'], answer: 2 },
        ] },
        { type: 'matching', title: 'Vocabulary — match each to its plain meaning', pairs: [
          { term: 'Delian League', def: 'An Athens-led alliance formed to resist Persia.' },
          { term: 'Pericles', def: 'The leader of Athens\' Golden Age, who widened political participation.' },
          { term: 'Herodotus', def: 'The "Father of History" — vivid stories, myths and all.' },
          { term: 'Thucydides', def: 'The historian who stuck to facts, evidence, and cause-and-effect.' },
        ] },
        { type: 'answers', prompts: [
          'Put this in your own words: "Though allied against Persia, Athens increasingly administered the Delian League as an instrument of its own imperial power."',
        ] },
        { type: 'next', text: 'Next: the Greeks\' biggest export wasn\'t soldiers or ships — it was a way of thinking.' },
      ],
    },

    /* ───────────────── 2.7  Philosophy & drama ───────────────── */
    {
      id: 'thought', n: 4, title: 'Big ideas: philosophy and tragedy',
      subject: 'Social Science', minutes: 30, standards: 'RI.7.8',
      blocks: [
        { type: 'hook', text: 'One Athenian never wrote a book. He just walked around asking people annoying questions until their confident opinions fell apart. His name was <b>Socrates</b> — and that habit of questioning everything became the root of Western <b>philosophy</b>.' },
        { type: 'prose', body: '<p><b>The big three philosophers</b> — a chain of teacher-to-student:</p><ul><li><b>Socrates</b> — taught by <b>questioning</b>. His "Socratic dialogues" were conversations built entirely out of <b>questions</b> that exposed sloppy thinking. (Athens executed him for it.)</li><li><b>Plato</b> — Socrates\' student; wrote the dialogues down and founded a school, the Academy.</li><li><b>Aristotle</b> — Plato\'s student; a walking encyclopedia who studied logic, science, ethics — and personally <b>tutored a young prince named Alexander the Great</b>.</li></ul><p><b>Greek tragedy.</b> The Greeks also invented theater. Their <b>tragedies</b> (by writers like Sophocles) weren\'t light entertainment — they explored <b>human suffering</b>: fate, pride, and downfall. Watching a hero fall was meant to move and teach the whole city at once.</p>' },
        { type: 'video', title: 'Modern States 2.7 — Philosophy and Religion', url: MS, label: '▶ Watch 2.7 on Modern States', focus: 'Pin the chain Socrates → Plato → Aristotle, and remember who tutored Alexander. Note what Greek tragedy was really about.' },
        { type: 'prose', body: '<p><b>🔎 As you watch, see if you can answer:</b></p><ol><li>What did <b>Socratic dialogues</b> run on?</li><li>Which philosopher <b>tutored Alexander the Great</b>?</li><li>What theme did Greek <b>tragedies</b> explore?</li></ol>' },
        { type: 'quiz', questions: [
          { q: 'Socratic dialogues used…', options: ['epic myths', 'maps', 'questions', 'poetry'], answer: 2 },
          { q: 'Who taught logic and tutored Alexander the Great?', options: ['Herodotus', 'Socrates', 'Pericles', 'Aristotle'], answer: 3 },
          { q: 'What theme did Greek tragedies explore?', options: ['farming techniques', 'scientific theories', 'human suffering', 'trade routes'], answer: 2 },
        ] },
        { type: 'matching', title: 'Vocabulary — match each to its plain meaning', pairs: [
          { term: 'Socratic method', def: 'Teaching by relentless questioning to expose weak thinking.' },
          { term: 'Aristotle', def: 'Plato\'s student who studied everything — and tutored Alexander.' },
          { term: 'philosophy', def: '"Love of wisdom" — using reason to ask how to live and what is true.' },
          { term: 'tragedy', def: 'Greek drama about human suffering, fate, and downfall.' },
        ] },
        { type: 'answers', prompts: [
          'Put this in your own words: "Rather than asserting his own conclusions, Socrates interrogated his listeners\' assumptions until their contradictions became apparent."',
        ] },
        { type: 'prose', body: '<p><b>Bring it to life</b></p><ul><li>📚 <i>The Odyssey</i>, the graphic novel by Gareth Hinds — Homer\'s epic, gorgeously drawn. The same Greek storytelling world the tragedies grew out of.</li><li>📚 <i>D\'Aulaires\' Book of Greek Myths</i> — the classic illustrated collection; every god and hero in one beautiful book.</li></ul>' },
        { type: 'next', text: 'Next: a prince taught by Aristotle conquers the known world — and spreads Greek everything with him.' },
      ],
    },

    /* ───────────────── 2.8–2.11  Alexander & the Hellenistic world ───────────────── */
    {
      id: 'alexander', n: 5, title: 'Alexander and the Hellenistic world',
      subject: 'Social Science', minutes: 30, standards: '7.H.CH.3',
      blocks: [
        { type: 'hook', text: 'By age 30, <b>Alexander the Great</b> had conquered from Greece to Egypt to the edge of India — never losing a battle. He died young, his empire split apart… but everywhere his armies went, they left <b>Greek</b> behind: Greek cities, Greek ideas, Greek art, blended into every local culture.' },
        { type: 'prose', body: '<p><b>Philip II of Macedonia</b> — Alexander\'s father — did what no Greek had: he <b>united the Greek city-states under Macedonia</b> (they\'d never have united on their own). <b>Alexander</b> then took that combined army east and conquered the Persian Empire and beyond.</p><p><b>The Hellenistic age.</b> After Alexander died, his generals carved up the empire — but the lasting result was cultural: Greek language, art, and thought <b>blended with Egyptian, Persian, and Asian cultures</b>. That blend is what "<b>Hellenistic</b>" means. Its showpiece was <b>Alexandria</b> in Egypt (a city Alexander founded), famous above all for its <b>Library</b> — the greatest collection of knowledge in the ancient world.</p><p><b>New philosophies for a bigger world.</b> As people lived in a vast, uncertain empire instead of a cozy city-state, new philosophies spread. The big one on the exam is <b>Stoicism</b>: stay calm and good by <b>accepting fate</b> — focus only on what you can control. (Alongside it: Epicureanism and Skepticism.)</p>' },
        { type: 'video', title: 'Modern States 2.8–2.11 — Macedonia, Alexander, Hellenistic culture', url: MS, label: '▶ Watch 2.8–2.11 on Modern States', focus: 'Philip II united Greece; Alexander spread Greek culture; "Hellenistic" = that blending; Alexandria\'s Library; Stoicism = accept what you can\'t control.' },
        { type: 'prose', body: '<p><b>🔎 As you watch, see if you can answer:</b></p><ol><li>Who <b>united the Greek city-states</b> under Macedonia?</li><li>What does "<b>Hellenistic</b>" mean?</li><li>What was <b>Alexandria</b> most famous for?</li><li>What did <b>Stoicism</b> teach?</li></ol>' },
        { type: 'quiz', questions: [
          { q: 'Who united the Greek city-states under Macedonia?', options: ['Themistocles', 'Pericles', 'Darius I', 'Philip II'], answer: 3 },
          { q: 'The term "Hellenistic" refers to…', options: ['Roman law', 'Greek cultural blending', 'Spartan politics', 'Athenian comedy'], answer: 1 },
          { q: 'Alexandria in Egypt became famous for its…', options: ['naval bases', 'temples', 'Library', 'gold mines'], answer: 2 },
          { q: 'What did Stoicism teach?', options: ['political protest', 'acceptance of fate', 'worship of nature', 'pursuit of pleasure'], answer: 1 },
        ] },
        { type: 'matching', title: 'Vocabulary — match each to its plain meaning', pairs: [
          { term: 'Philip II', def: 'Alexander\'s father, who united the Greek city-states under Macedonia.' },
          { term: 'Hellenistic', def: 'The age when Greek culture blended with Egyptian, Persian, and Asian cultures.' },
          { term: 'Alexandria', def: 'Alexander\'s Egyptian city, famous for its great Library.' },
          { term: 'Stoicism', def: 'A philosophy of staying calm and virtuous by accepting fate.' },
        ] },
        { type: 'answers', prompts: [
          'Put this in your own words: "Alexander\'s conquests diffused Greek culture across three continents, producing the hybrid civilization historians call Hellenistic."',
        ] },
        { type: 'prose', body: '<p><b>Bring it to life</b></p><ul><li>🎬 <a href="https://www.youtube.com/watch?v=0LsrkWDCvxg">Alexander the Great — CrashCourse World History #8</a> — funny, fast, and honest about the "Great" part.</li></ul>' },
        { type: 'next', text: 'Last card: pull Greece together and take the Modern States quiz.' },
      ],
    },

    /* ───────────────── REFLECTION ───────────────── */
    {
      id: 'reflect', n: 6, title: 'Module 2 check',
      subject: 'Social Science', minutes: 30, standards: 'RI.7.8',
      blocks: [
        { type: 'prose', body: '<p>The whole module in one breath: quarreling city-states (<b>Sparta</b> the army, <b>Athens</b> the democracy) → they unite to beat <b>Persia</b> → Athens\' <b>Golden Age</b> under <b>Pericles</b>, with <b>Socrates, Plato, Aristotle</b> and the tragedians → Athens and Sparta wreck each other in the <b>Peloponnesian War</b> → <b>Philip</b> and <b>Alexander</b> unite Greece and spread it across the world (the <b>Hellenistic</b> age, capped by <b>Alexandria</b>).</p><p>Now take the real thing: open Module 2 on Modern States and do its summary + module quiz. Anything you miss just points you back to a lesson.</p>' },
        { type: 'practice', title: 'Take the Modern States Module 2 quiz', note: 'Log in, open Module 2, do the Summary and the module quiz. Rewatch any lesson you miss.', links: [
          { url: MS, label: 'Open Module 2 on Modern States' },
        ] },
        { type: 'kwlback', prompt: 'Here\'s what you wrote at the start. Look how much you can hang on it now.' },
        { type: 'vocabsort', title: 'Which words do you own now?', note: 'Tap each: "got it cold" or "still fuzzy." The fuzzy ones are your study list.' },
        { type: 'rubric', title: 'Give yourself an honest check', items: [
          'I can contrast Sparta and Athens in a sentence each.',
          'I can explain what Solon and Pericles did for Athenian democracy.',
          'I can tell the Persian Wars apart from the Peloponnesian War (who fought, who won).',
          'I can line up Socrates → Plato → Aristotle and say what each is known for.',
          'I can explain what "Hellenistic" means and why Alexander caused it.',
        ] },
        { type: 'done', text: 'Module 2 down. Next up is Rome — how a single city conquered the whole Mediterranean and then argued about whether it was a republic or an empire.' },
      ],
    },

  ],
});
})();
