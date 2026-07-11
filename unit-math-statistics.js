/**
 * unit-math-statistics.js — Math Unit 6: Statistics & Probability
 *
 * Same build as the other math units (hook → explainer → vocab → our quick check
 * → Khan practice), Khan-scaffolded. Everything lives in one Khan 7th-grade unit
 * ("Statistics and probability", cc-7th-probability-statistics), so K points
 * straight at it. All URLs verified via search (July 2026). track:'math' → gold
 * theme; standards auto-check the 7.RP.B.* and 7.DR.* rows.
 */

window.HS_UNITS = window.HS_UNITS || [];
(function () {
const K = 'https://www.khanacademy.org/math/cc-seventh-grade-math/cc-7th-probability-statistics';

window.HS_UNITS.push({
  id: 'math-statistics',
  short: 'Math · Stats & Prob',
  title: 'Statistics & Probability',
  track: 'math',
  eq: 'How do you measure how likely something is — and make trustworthy claims about a whole group without asking every single member?',

  parent: {
    hotspots: [
      'Every probability is a number from <b>0 to 1</b>: 0 = impossible, 1 = certain, ½ = a coin flip. For equally likely outcomes, P = favorable ÷ total. If he can\'t place an answer on the 0-to-1 scale, that\'s the first thing to shore up.',
      '<b>Theoretical vs. experimental</b> is the key distinction. Theoretical is what SHOULD happen (a die: P(4) = 1/6). Experimental is what DID happen when you actually rolled (say 8 fours in 60 rolls). The more trials, the closer experimental drifts toward theoretical — that\'s the whole reason casinos win.',
      '<b>Compound events</b> (two coins, a die and a spinner) trip kids up on counting outcomes. A tree diagram or a table lists them all; for independent events you can also multiply the probabilities (½ × ⅙).',
      'The statistics half is really one big idea: a <b>random, representative sample</b> lets you make a fair claim about a whole population — and a biased sample (asking only your friends) does not. Comparing two groups means comparing their <b>center</b> (mean/median) and their <b>spread</b> (range/variability).',
    ],
    activities: [
      { tier: 'Small', title: 'Predict, then roll', detail: 'Before rolling a die 30 times, have him predict how many of each number (theoretical: about 5 each). Tally the real results (experimental). Talk about why they don\'t match exactly — and why 300 rolls would match better. Dice, coins, or a card deck all work.', cost: 'Free', time: '30 min' },
      { tier: 'Medium', title: 'Run a real survey — mind the bias', detail: 'Pick a question ("favorite local trail?"). Have him design a sample that\'s actually representative, not just his buddies, and explain WHY his method is fair. Then use the results to estimate the whole group. This is 7.DR.A.1 in the wild.', cost: 'Free', time: '1 hour' },
      { tier: 'Large', title: 'Compare two data sets he cares about', detail: 'Two seasons of a team, two ebike routes\' times, two months of weather. Collect the numbers, find each set\'s mean/median (center) and range (spread), and write a claim comparing them that the data actually supports. Real 7.DR.C.3 / 7.DR.D.4.', cost: 'Free', time: 'Across a week' },
    ],
  },

  vocab: {
    mustOwn: [
      { term: 'probability',            def: 'A number from 0 to 1 telling how likely an event is (0 = never, 1 = always).' },
      { term: 'outcome',                def: 'One possible result of a chance experiment (rolling a 4).' },
      { term: 'event',                  def: 'A result or set of results you\'re interested in (rolling an even number).' },
      { term: 'sample space',           def: 'The list of ALL possible outcomes.' },
      { term: 'theoretical probability',def: 'What should happen based on equally likely outcomes: favorable ÷ total.' },
      { term: 'experimental probability', def: 'What actually happened: (times it occurred) ÷ (number of trials).' },
      { term: 'compound event',         def: 'An event made of two or more simple events (flip a coin AND roll a die).' },
      { term: 'random sample',          def: 'A sample where everyone has an equal chance of being picked.' },
      { term: 'representative sample',  def: 'A sample that fairly reflects the whole population (not biased).' },
      { term: 'center vs. variability', def: 'Center = a typical value (mean/median); variability = how spread out (range).' },
    ],
    frayer: [
      {
        term: 'theoretical vs. experimental probability',
        definition: 'Theoretical probability is what should happen based on equally likely outcomes (favorable ÷ total). Experimental probability is what actually happened in trials (occurrences ÷ trials). With more trials, experimental gets closer to theoretical.',
        examples: ['Theoretical P(heads) = 1/2', 'Flipped 20 times, got 12 heads → experimental 12/20 = 0.6', '10,000 flips would land very near 0.5'],
        nonexamples: ['Assuming 3 heads in a row means heads is "due"', 'Calling one small experiment the "true" probability'],
        sentence: 'Theoretical is the prediction; experimental is the evidence — and lots of trials brings them together.',
      },
      {
        term: 'representative (random) sample',
        definition: 'A subset of a population chosen so it fairly reflects the whole — usually by giving every member an equal chance (random). A representative sample supports valid conclusions; a biased one does not.',
        examples: ['Randomly picking 50 of 800 students', 'Drawing names from a hat', 'Every 10th person on a full class list'],
        nonexamples: ['Only surveying your friends', 'Asking people leaving a gym how much they exercise'],
        sentence: 'A good sample lets you speak about the whole group without asking every single person.',
      },
    ],
  },

  cards: [

    /* ───────────────── LESSON 1 ───────────────── */
    {
      id: 'launch', n: 1, title: 'How likely? The 0-to-1 scale',
      subject: 'Math', minutes: 25, standards: '7.RP.B.4',
      blocks: [
        { type: 'hook', text: 'A weather app says "70% chance of rain." A coin is "50-50." Winning a raffle is "one in a thousand." Every one of those is a <b>probability</b> — a single number between <b>0 (never)</b> and <b>1 (always)</b> — and once you can place any event on that line, the whole unit opens up.' },
        { type: 'prose', body: '<p><b>Probability lives on a scale from 0 to 1:</b></p><ul><li><b>0</b> = impossible (rolling a 7 on a normal die)</li><li><b>1</b> = certain (rolling a number less than 7)</li><li><b>½ (0.5, 50%)</b> = as likely as not (a coin landing heads)</li></ul><p><b>For equally likely outcomes:</b></p><blockquote style="font-size:1.15rem; text-align:center; font-weight:700;">P(event) = favorable outcomes ÷ total outcomes</blockquote><p><b>Example — one die.</b> P(rolling a 4) = 1/6. P(an even number) = 3/6 = <b>1/2</b>. P(a number ≤ 2) = 2/6 = <b>1/3</b>.</p><p><b>The complement.</b> "Not happening" fills the rest of the 1: if P(red) = 3/8, then P(not red) = 1 − 3/8 = <b>5/8</b>. Every probability and its complement add to 1.</p><p class="tie-in">🔗 <b>Tie-in — a Medford forecast:</b> "30% chance of rain" is P = 0.30 — closer to the "unlikely" end of the line. It doesn\'t mean it rains on 30% of your yard; it means, on days that look like this one, it rains about 3 times out of 10.</p>' },
        { type: 'flashcards', title: 'Meet the words first', note: 'Tap a card to flip it. These come back all unit long.' },
        { type: 'kwl', prompt: 'Quick gut-check before we dig in — no wrong answers.',
          klabel: 'Where do I already hear probabilities (games, weather, sports)?',
          wlabel: 'What do I want to be able to figure out by the end?' },
        { type: 'next', text: 'Next: theoretical probability — the "should happen" number.' },
      ],
    },

    /* ───────────────── LESSON 2 ───────────────── */
    {
      id: 'theoretical', n: 2, title: 'Theoretical probability & models',
      subject: 'Math', minutes: 25, standards: '7.RP.B.6',
      blocks: [
        { type: 'hook', text: '<b>Theoretical probability</b> is what math predicts <em>before</em> you touch a single die — the "should happen" number, straight from counting the equally likely outcomes. Build the list of outcomes (the sample space) and probability becomes bookkeeping.' },
        { type: 'prose', body: '<p>The <b>sample space</b> is every possible outcome. Once you have it, theoretical probability is favorable ÷ total.</p><p><b>Example 1 — a bag of marbles.</b> 3 red, 2 blue, 5 total. P(red) = <b>3/5</b>, P(blue) = <b>2/5</b>. They add to 1 (something must be drawn).</p><p><b>Example 2 — a spinner.</b> 8 equal sections, 3 of them red. P(red) = <b>3/8</b>.</p><p><b>A probability model</b> lists each outcome with its probability, and they must total 1. For a fair die: each of 1–6 has probability 1/6, and 6 × (1/6) = 1. ✓ If someone\'s model doesn\'t sum to 1, it\'s wrong.</p><p><b>Fair vs. not.</b> "Equally likely" is the assumption behind favorable ÷ total. A weighted die or a bent spinner breaks it — then you need the <em>experimental</em> approach, which is next.</p>' },
        { type: 'video', title: 'Probability models', url: K + '/cc-7th-theoretical-and-experimental-probability/e/probability-models', label: '▶ Practice on Khan', focus: 'Check that every model\'s probabilities add up to exactly 1.' },
        { type: 'quiz', questions: [
          { q: 'A bag has 4 green and 6 yellow marbles. P(green)?', options: ['4/10', '6/10', '4/6', '1/4'], answer: 0 },
          { q: 'A fair die: P(rolling a number greater than 4)?', options: ['2/6', '4/6', '1/6', '3/6'], answer: 0 },
          { q: 'In a valid probability model, all the probabilities must add to…', options: ['0', '1', '100', 'the number of outcomes'], answer: 1 },
          { q: 'A spinner has 10 equal parts, 7 blue. P(NOT blue)?', options: ['7/10', '3/10', '1/7', '10/7'], answer: 1 },
        ] },
        { type: 'practice', title: 'Now you try — on Khan', links: [
          { url: K + '/cc-7th-basic-prob/e/probability_1', label: 'Simple probability' },
          { url: K + '/cc-7th-theoretical-and-experimental-probability/e/probability-models', label: 'Probability models' },
        ] },
        { type: 'next', text: 'Next: experimental probability — what actually happens when you try it.' },
      ],
    },

    /* ───────────────── LESSON 3 ───────────────── */
    {
      id: 'experimental', n: 3, title: 'Experimental probability & predicting',
      subject: 'Math', minutes: 25, standards: '7.RP.B.5',
      blocks: [
        { type: 'hook', text: 'Theory says a coin is 50-50. But flip it 20 times and you might get 12 heads, not 10. That <b>12/20</b> is the <b>experimental probability</b> — what really happened. Here\'s the magic: the more you flip, the closer experimental creeps toward the theoretical 0.5.' },
        { type: 'prose', body: '<p><b>Experimental probability</b> = (times the event happened) ÷ (number of trials).</p><p><b>Example.</b> You flip a coin 20 times and get 12 heads: experimental P(heads) = 12/20 = <b>0.6</b>. Theoretical is 0.5. The gap is just chance — with 1,000 flips you\'d expect to land very near 0.5. (This is the "law of large numbers.")</p><p><b>Using probability to PREDICT counts.</b> Multiply the probability by the number of trials:</p><ul><li>P(rolling a 4) = 1/6. In 60 rolls, expect about (1/6)(60) = <b>10 fours</b>.</li><li>A factory\'s parts are 2% defective (P = 0.02). In 500 parts, expect 0.02 × 500 = <b>10 defective</b>.</li></ul><p><b>The gambler\'s trap:</b> three heads in a row does NOT make tails "due." Each flip is fresh — still 0.5. Past results don\'t bend a fair coin.</p><p class="tie-in">🔗 <b>Tie-in — quality control (Metals unit):</b> a foundry can\'t test every casting, so it samples. If experience says 3% of bronze bars have a flaw (P = 0.03), then in a batch of 200 they expect about 0.03 × 200 = <b>6 flawed bars</b> — and plan inspections around it.</p>' },
        { type: 'quiz', questions: [
          { q: 'You spin and land on red 9 times out of 30 spins. Experimental P(red)?', options: ['9/30', '9/21', '30/9', '1/9'], answer: 0 },
          { q: 'P(winning a prize) = 1/5. Out of 200 tries, about how many wins?', options: ['40', '20', '5', '100'], answer: 0 },
          { q: 'As you do MORE trials, experimental probability tends to…', options: ['Move away from theoretical', 'Get closer to theoretical', 'Stay exactly the same', 'Always equal 1'], answer: 1 },
          { q: 'A fair coin lands heads 4 times in a row. P(heads) on the next flip?', options: ['1/2', 'Less than 1/2', 'More than 1/2', '0'], answer: 0 },
        ] },
        { type: 'practice', title: 'Now you try — on Khan', links: [
          { url: K + '/cc-7th-theoretical-and-experimental-probability/e/probability-models', label: 'Theoretical & experimental probability' },
          { url: K + '/cc-7th-basic-prob/e/probability_1', label: 'Simple probability (predict counts)' },
        ] },
        { type: 'next', text: 'Next: two things at once — compound events.' },
      ],
    },

    /* ───────────────── LESSON 4 ───────────────── */
    {
      id: 'compound', n: 4, title: 'Compound events — two things at once',
      subject: 'Math', minutes: 30, standards: '7.RP.B.7',
      blocks: [
        { type: 'hook', text: 'Flip a coin AND roll a die. What\'s the chance of heads and a 6? The trick to every compound event is the same: <b>list all the outcomes</b> — with a table or a tree diagram — then count. Miss an outcome and the whole probability is off.' },
        { type: 'prose', body: '<p>A <b>compound event</b> combines two (or more) simple events. First build the full <b>sample space</b>.</p><p><b>Example 1 — two coins.</b> Outcomes: HH, HT, TH, TT — <b>4 total</b>. P(two heads) = <b>1/4</b>. P(exactly one head) = 2/4 = <b>1/2</b>.</p><p><b>Example 2 — coin + die.</b> 2 coin results × 6 die results = <b>12 outcomes</b>. P(heads and a 6) = <b>1/12</b>.</p><p><b>Two ways to count:</b></p><ul><li><b>Tree diagram / table:</b> branch out every possibility and count the ones you want.</li><li><b>Multiply</b> (for independent events): P(heads) × P(6) = ½ × ⅙ = <b>1/12</b>. Same answer, faster.</li></ul><p><b>The counting principle:</b> if one event has m outcomes and another has n, together they have <b>m × n</b> outcomes. That\'s why coin (2) and die (6) give 12.</p>' },
        { type: 'video', title: 'Count outcomes using a tree diagram', url: K + '/cc-7th-compound-events/v/tree-diagram-to-count-outcomes', label: '▶ Watch on Khan', focus: 'Watch the tree branch out — every path is one outcome in the sample space.' },
        { type: 'quiz', questions: [
          { q: 'Flip two coins. How many outcomes are in the sample space?', options: ['2', '3', '4', '8'], answer: 2 },
          { q: 'Roll a die and flip a coin. P(a 3 AND tails)?', options: ['1/12', '1/6', '1/2', '2/12'], answer: 0 },
          { q: 'A menu has 3 mains and 4 drinks. How many main+drink combos?', options: ['7', '12', '34', '1'], answer: 1 },
          { q: 'Flip two coins. P(at least one head)?', options: ['1/4', '2/4', '3/4', '4/4'], answer: 2 },
        ] },
        { type: 'practice', title: 'Now you try — on Khan', links: [
          { url: K + '/cc-7th-compound-events/e/compound-events', label: 'Probabilities of compound events' },
        ] },
        { type: 'next', text: 'Next: switching to statistics — sampling a whole population fairly.' },
      ],
    },

    /* ───────────────── LESSON 5 ───────────────── */
    {
      id: 'sampling', n: 5, title: 'Samples — asking a few to learn about many',
      subject: 'Math', minutes: 25, standards: '7.DR.A.1',
      blocks: [
        { type: 'hook', text: 'You can\'t ask all 800 kids in a district their favorite sport — so you ask some. But WHO you ask decides whether your answer is trustworthy or garbage. Ask only the basketball team, and you\'ll "discover" everyone loves basketball. The fix is a <b>random, representative sample</b>.' },
        { type: 'prose', body: '<p>A <b>population</b> is the whole group you care about. A <b>sample</b> is the part you actually study. A good sample is:</p><ul><li><b>Random</b> — every member has an equal chance of being chosen (names from a hat, every 10th person on a list).</li><li><b>Representative</b> — it mirrors the whole group, so it\'s not <b>biased</b> toward one type.</li></ul><p><b>Biased sample examples (what NOT to do):</b></p><ul><li>Asking people leaving a gym how much they exercise → overstates it.</li><li>Surveying only your friends about the best band → reflects your circle, not the school.</li><li>A call-in poll → only people who feel strongly bother to respond.</li></ul><p><b>Bigger, random samples</b> give more reliable estimates. A random sample of 100 beats a biased sample of 1,000 every time — size doesn\'t rescue bias.</p><p class="tie-in">🔗 <b>Tie-in — the Rogue River (Rivers/Science):</b> to judge the whole river\'s water quality, scientists can\'t test every gallon. They take <b>representative samples</b> — several spots, different depths, different days — so the sample reflects the real river. Same logic as a fair survey, just with test tubes.</p>' },
        { type: 'video', title: 'Reasonable samples', url: K + '/cc-7th-population-sampling/v/reasonable-samples', label: '▶ Watch on Khan', focus: 'Watch what makes a sample fair (random) vs. biased.' },
        { type: 'quiz', questions: [
          { q: 'To learn all students\' favorite subject, the BEST sample is…', options: ['The math club', 'Randomly chosen students from the whole school', 'Only 7th graders', 'Your five best friends'], answer: 1 },
          { q: 'Surveying people at a skate park about the best sport is biased because…', options: ['Skate parks are small', 'The sample favors people who like skating', 'Parks are outdoors', 'It uses too many people'], answer: 1 },
          { q: 'The whole group you want to draw a conclusion about is called the…', options: ['Sample', 'Outcome', 'Population', 'Event'], answer: 2 },
          { q: 'Which makes a sample trustworthy?', options: ['It is random and representative', 'It is only your friends', 'It is very small', 'People opt in themselves'], answer: 0 },
        ] },
        { type: 'practice', title: 'Now you try — on Khan', links: [
          { url: K + '/cc-7th-population-sampling/e/valid-claims', label: 'Valid claims (from samples)' },
        ] },
        { type: 'next', text: 'Next: using a good sample to estimate the whole population.' },
      ],
    },

    /* ───────────────── LESSON 6 ───────────────── */
    {
      id: 'inferences', n: 6, title: 'From a sample to the whole population',
      subject: 'Math', minutes: 25, standards: '7.DR.B.2',
      blocks: [
        { type: 'hook', text: 'Once your sample is fair, you get to make a leap: what\'s true in the sample is probably true, in proportion, for the whole group. Find 30% in your sample of 50, and you can estimate 30% of all 800. That leap — done carefully — is the whole point of sampling.' },
        { type: 'prose', body: '<p>Scale the sample\'s proportion up to the population. It\'s the proportional reasoning from Unit 1, one more time.</p><p><b>Example 1.</b> In a random sample of 50 students, 30 prefer pizza for lunch. That\'s 30/50 = 60%. Estimate for all 500 students: 0.60 × 500 = <b>about 300</b>.</p><p><b>Example 2.</b> A random sample of 40 shows 10 are left-handed → 10/40 = 25%. In a school of 800: 0.25 × 800 = <b>about 200 left-handed</b>.</p><p><b>Set it up as a proportion if you like:</b> sample-part/sample-total = population-part/population-total. 30/50 = x/500 → 50x = 15,000 → x = 300.</p><p><b>Say "about."</b> An estimate from a sample is a best guess, not an exact count — and it\'s only as good as the sample was fair. A biased sample gives a confident, wrong number.</p>' },
        { type: 'quiz', questions: [
          { q: 'In a sample of 20, 8 chose soccer. Estimate the % for the population.', options: ['40%', '8%', '20%', '60%'], answer: 0 },
          { q: 'Sample of 25 → 5 wear glasses. In a school of 500, estimate…', options: ['100 students', '5 students', '25 students', '250 students'], answer: 0 },
          { q: 'A sample estimate should be stated as…', options: ['An exact count', '"About" a number — a best estimate', 'Always too high', 'Always 50%'], answer: 1 },
          { q: 'If the sample was BIASED, the population estimate is…', options: ['Still perfectly reliable', 'Likely misleading', 'Guaranteed exact', 'Automatically doubled'], answer: 1 },
        ] },
        { type: 'practice', title: 'Now you try — on Khan', links: [
          { url: K + '/cc-7th-population-sampling/e/valid-claims', label: 'Making valid claims from samples' },
        ] },
        { type: 'next', text: 'Last skill: comparing two groups fairly.' },
      ],
    },

    /* ───────────────── LESSON 7 ───────────────── */
    {
      id: 'compare', n: 7, title: 'Comparing two groups — center & spread',
      subject: 'Math', minutes: 30, standards: '7.DR.C.3',
      blocks: [
        { type: 'hook', text: 'Two classes both average 80% on a test — so they\'re the same, right? Not necessarily. One might be everyone near 80; the other, half 100s and half 60s. To really compare groups you need two things: a <b>center</b> (typical value) AND a measure of <b>spread</b>.' },
        { type: 'prose', body: '<p><b>Center — a typical value:</b></p><ul><li><b>Mean</b> (average): add them up, divide by how many.</li><li><b>Median</b>: the middle value when they\'re in order (better when there are extreme outliers).</li></ul><p><b>Spread / variability — how bunched or scattered:</b></p><ul><li><b>Range</b>: highest − lowest.</li><li><b>Mean absolute deviation (MAD)</b>: the average distance from the mean (a bigger MAD = more spread out).</li></ul><p><b>Example.</b> Class A scores: 78, 80, 82 (mean 80, range 4 — tightly clustered). Class B: 60, 80, 100 (mean 80, range 40 — all over the place). <b>Same center, very different spread.</b> Class A is more consistent; Class B is more variable.</p><p><b>Making a fair comparison:</b> report BOTH. "Route 1 is faster on average (lower mean time) AND more consistent (smaller range)" is a claim the data can back up. A claim about center alone can hide a big difference in spread.</p><p class="tie-in">🔗 <b>Tie-in — two ebike routes.</b> Time yourself on each a few times. Route A might have a lower average time (better center) but a huge range because of a train crossing; Route B a hair slower but rock-steady. Which is "better" depends on whether you care about speed or predictability — and now you can argue it with numbers.</p>' },
        { type: 'video', title: 'Comparing distributions', url: K + '/cc-7th-population-sampling/e/comparing-populations', label: '▶ Practice on Khan', focus: 'Compare the centers first, then the spreads — you need both.' },
        { type: 'quiz', questions: [
          { q: 'Find the mean of 4, 6, 8, 10.', options: ['7', '6', '8', '28'], answer: 0 },
          { q: 'The median of 3, 5, 9, 12, 20 is…', options: ['9', '5', '12', '10'], answer: 0 },
          { q: 'Two data sets have the same mean but different ranges. They differ in…', options: ['Center', 'Spread (variability)', 'Nothing', 'Sample size only'], answer: 1 },
          { q: 'The range of the set 12, 15, 20, 9, 18 is…', options: ['11', '9', '20', '15'], answer: 0 },
        ] },
        { type: 'practice', title: 'Now you try — on Khan', links: [
          { url: K + '/cc-7th-population-sampling/e/comparing-populations', label: 'Comparing distributions' },
          { url: K + '/cc-7th-population-sampling/e/valid-claims', label: 'Valid claims' },
        ] },
        { type: 'next', text: 'Last stop: pull it together and check you\'re ready.' },
      ],
    },

    /* ───────────────── LESSON 8 · REFLECTION ───────────────── */
    {
      id: 'reflect', n: 8, title: 'Ready for the test?',
      subject: 'Math', minutes: 25, standards: '7.DR.D.4',
      blocks: [
        { type: 'prose', body: '<p>You\'ve covered probability (theoretical, experimental, compound) and statistics (sampling, inference, comparison). This is the last math unit of the year — before the Khan quiz/test, look back at your day-one notes and see how far you\'ve come.</p>' },
        { type: 'kwlback', prompt: 'Here\'s what you wrote on day one:' },
        { type: 'vocabsort', title: 'Which words do you own now?', note: 'Be honest. The fuzzy ones are just your study list.' },
        { type: 'rubric', title: 'Can you do each of these?', items: [
          'Place any probability on the 0-to-1 scale and compute favorable ÷ total.',
          'Tell theoretical from experimental probability — and use either to predict counts.',
          'Find the sample space of a compound event and its probability.',
          'Explain what makes a sample random and representative (not biased).',
          'Use a sample to estimate a whole population.',
          'Compare two data sets by center AND spread, and make a claim the data supports.',
        ] },
        { type: 'practice', title: 'Prove it — the Khan quizzes & unit test', note: 'Khan\'s quizzes and unit test are built into the unit page. Aim for the blue "Mastered" bar.', links: [
          { url: K + '/cc-7th-theoretical-and-experimental-probability/quiz/cc-7th-probability-statistics-quiz-1', label: 'Statistics & probability — Quiz 1' },
          { url: K + '/cc-7th-population-sampling/test/cc-7th-probability-statistics-unit-test', label: 'Statistics & probability — Unit test' },
          { url: K, label: 'Open the full Khan unit' },
        ] },
        { type: 'done', text: 'That\'s the unit — and the last math unit of the year. From proportions all the way to probability, you built the whole 7th-grade toolkit. Seriously nice work.' },
      ],
    },

  ],
});
})();
