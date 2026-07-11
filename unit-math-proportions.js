/**
 * unit-math-proportions.js — Math Unit 1: Proportional Relationships
 *
 * Structured the same way as the other units (hook → explainer → vocab → quick
 * check → practice), but the instructional videos and practice DEEP-LINK to the
 * matching Khan Academy 7th-grade content (Unit: "Proportional relationships",
 * cc-7th-ratio-proportion) so we use Khan's videos/exercises without him just
 * wandering the site. Marked `track: 'math'` so it lives beside the daily math,
 * not in the interdisciplinary "Today's lesson" slot. Standards auto-check the
 * 7.RP.* rows on the Big Picture checklist as lessons get done.
 */

const K = 'https://www.khanacademy.org/math/cc-seventh-grade-math/cc-7th-ratio-proportion';

window.HS_UNITS = window.HS_UNITS || [];
window.HS_UNITS.push({
  id: 'math-proportions',
  short: 'Math · Proportions',
  title: 'Proportional Relationships',
  track: 'math',
  eq: 'How can you tell when two things grow together at a steady rate — and use that to predict any amount?',
  image: 'assets/units/reading3.jpg',

  parent: {
    hotspots: [
      'The whole unit rests on one idea: a proportional relationship is <b>y = k·x</b> — one quantity is always the same number (k) times the other. If he can say what <b>k</b> is and find it, everything else follows.',
      'The classic trap: <b>y = 2x + 3 is NOT proportional.</b> Proportional graphs must pass through the <b>origin (0,0)</b>. "Straight line" isn\'t enough — it has to start at zero.',
      'Finding <b>k</b> is just <b>y ÷ x</b> (divide a y-value by its x-value). From a graph, k is the y-value when x = 1 — the point (1, k). Practice reading it three ways: table, equation, graph.',
      'He does the videos and practice on Khan (deep-linked in each lesson). The point of these cards is to make him <b>read, predict, and self-check first</b> — not passively watch. Do the quick check before the Khan practice.',
    ],
    activities: [
      { tier: 'Small', title: 'Proportions in the kitchen', detail: 'Double or triple a recipe together and write the ratios (2 cups flour : 1 cup sugar → 4 : 2 → 6 : 3). Ask "what\'s the constant?" Then find unit prices at the store (price ÷ ounces) and pick the better deal — that\'s a unit rate.', cost: 'Free', time: '30–60 min' },
      { tier: 'Medium', title: 'Ebike speed & the constant', detail: 'On a flat ride, note distance every minute for a few minutes and make a little table. Is distance proportional to time? What\'s k (his speed)? Graph it — does it go through the origin? Ties his favorite thing to y = kx.', cost: 'Free', time: '1 hour' },
      { tier: 'Large', title: 'Khan mastery goal', detail: 'Set a goal to hit "Mastered" on this whole Khan unit (the blue mastery bar). The unit test + quizzes are built into Khan; the HomeSkewl lessons walk him there one skill at a time.', cost: 'Free', time: 'Across the unit' },
    ],
  },

  vocab: {
    mustOwn: [
      { term: 'ratio',                       def: 'A comparison of two quantities — like 3 to 2, written 3:2 or 3/2.' },
      { term: 'rate',                        def: 'A ratio comparing two different units — like 60 miles for every 1 hour.' },
      { term: 'unit rate',                   def: 'A rate written "per 1" — 60 miles per hour, $2.50 per pound.' },
      { term: 'proportional relationship',   def: 'When two quantities always keep the same ratio: as one grows, the other grows by the same factor.' },
      { term: 'constant of proportionality', def: 'The number k you multiply x by to get y. Find it with k = y ÷ x.' },
      { term: 'equation (y = kx)',           def: 'The rule every proportional relationship follows: y equals k times x.' },
      { term: 'origin',                      def: 'The point (0, 0). Every proportional graph passes straight through it.' },
      { term: 'proportion',                  def: 'An equation saying two ratios are equal, like 3/2 = 12/8.' },
    ],
    frayer: [
      {
        term: 'constant of proportionality (k)',
        definition: 'The fixed number you multiply the input (x) by to get the output (y). It is the same for every pair in a proportional relationship, and you find it by dividing y by x.',
        examples: ['$8 per ticket → k = 8', 'A table where y ÷ x is always 3 → k = 3', 'The point (1, 5) on the graph → k = 5'],
        nonexamples: ['A relationship where y ÷ x keeps changing', 'The "+3" in y = 2x + 3 (that\'s a starting amount, not k)'],
        sentence: 'Once you know k, you can predict any y just by multiplying: y = kx.',
      },
      {
        term: 'proportional relationship',
        definition: 'A relationship between two quantities where their ratio never changes — double one and the other doubles. It always fits y = kx and its graph is a straight line through the origin.',
        examples: ['Cost of movie tickets vs. number of tickets', 'Distance vs. time at a steady speed', 'A table where every y ÷ x is the same'],
        nonexamples: ['Your age vs. your height (ratio keeps changing)', 'y = 2x + 3 (doesn\'t pass through the origin)'],
        sentence: 'If the graph is a straight line through (0,0) and y ÷ x is always the same, it\'s proportional.',
      },
    ],
  },

  cards: [

    /* ───────────────── LESSON 1 ───────────────── */
    {
      id: 'launch', n: 1, title: 'What makes a relationship "proportional"?',
      subject: 'Math', minutes: 25, standards: '7.RP.A.2',
      blocks: [
        { type: 'hook', text: 'One movie ticket costs $8. So 2 tickets cost $16, 3 cost $24, 10 cost $80. Notice what stays the same: the price always <b>multiplies the number of tickets by 8</b>. That steady, same-every-time growth is a <b>proportional relationship</b> — and once you spot it, you can predict any amount instantly, no table needed.' },
        { type: 'prose', body: '<p>Two quantities are <b>proportional</b> when one is always the <em>same number</em> times the other. That number is the <b>constant of proportionality</b>, and we call it <b>k</b>. The whole unit is really one equation:</p><blockquote style="font-size:1.3rem; text-align:center; font-weight:700;">y = k · x</blockquote><p><b>Example 1 — movie tickets.</b> k = 8 (dollars per ticket), so cost = 8 × (number of tickets). 5 tickets → $40, 12 tickets → $96.</p><p><b>Example 2 — bananas.</b> If 3 pounds cost $2.40, then the price is always $0.80 per pound. Here k = 0.80, and cost = 0.80 × (pounds). 10 pounds → $8.00.</p><p>Every proportional relationship has its own k. Your job this unit: <b>find k</b> from a table, an equation, or a graph — and use it to predict.</p><p>Not everything is proportional. Your age and your height both go up, but not by the same factor every year — so that\'s <em>not</em> proportional. You\'ll learn to tell the difference.</p><p class="tie-in">🔗 <b>Tie-in — Metals unit:</b> the bronze recipe is a proportional relationship. Bronze is always about <b>10 parts copper to 1 part tin</b>. Double the copper, you double the tin — the ratio never changes. We\'ll actually solve a bronze problem in Lesson 7.</p>' },
        { type: 'flashcards', title: 'Meet the words first', note: 'Tap a card to flip it. These come back all unit long.' },
        { type: 'video', title: 'Intro to proportional relationships', url: K + '/cc-7th-proportional-rel/v/introduction-to-proportional-relationships', label: '▶ Watch on Khan', focus: 'Watch how the ratio stays the same the whole way down the table.' },
        { type: 'kwl', prompt: 'Quick gut-check before we dig in — no wrong answers.',
          klabel: 'What I already know about ratios, rates, or "per" (like miles per hour):',
          wlabel: 'What I want to be able to do by the end:' },
        { type: 'next', text: 'Next: how to actually find k — the constant of proportionality.' },
      ],
    },

    /* ───────────────── LESSON 2 ───────────────── */
    {
      id: 'k-tables', n: 2, title: 'Finding k — from tables & equations',
      subject: 'Math', minutes: 25, standards: '7.RP.A.2',
      blocks: [
        { type: 'hook', text: 'Here is the one move that unlocks the whole unit: to find the constant k, <b>divide y by x</b>. That\'s it. Pick any pair of numbers that go together, do y ÷ x, and you\'ve got the rule.' },
        { type: 'prose', body: '<p><b>From a table:</b> divide each y by its x. If you always get the same number, that number is <b>k</b> — and the relationship is proportional.</p><table style="border-collapse:collapse; margin:8px 0;"><tr><td style="border:1px solid #ccc; padding:6px 14px;"><b>x</b></td><td style="border:1px solid #ccc; padding:6px 14px;">2</td><td style="border:1px solid #ccc; padding:6px 14px;">5</td><td style="border:1px solid #ccc; padding:6px 14px;">8</td></tr><tr><td style="border:1px solid #ccc; padding:6px 14px;"><b>y</b></td><td style="border:1px solid #ccc; padding:6px 14px;">6</td><td style="border:1px solid #ccc; padding:6px 14px;">15</td><td style="border:1px solid #ccc; padding:6px 14px;">24</td></tr></table><p>6÷2 = 3, 15÷5 = 3, 24÷8 = 3. Same every time, so <b>k = 3</b> and <b>y = 3x</b>.</p><p><b>From an equation:</b> it\'s even easier — in <b>y = kx</b>, k is just the number in front of x. So y = 3x has k = 3; y = 0.5x has k = 0.5.</p><p><b>One more:</b> a table with x = 3, 6, 9 and y = 7.5, 15, 22.5. Check: 7.5÷3 = 2.5, 15÷6 = 2.5, 22.5÷9 = 2.5. So <b>k = 2.5</b> and y = 2.5x. (k doesn\'t have to be a whole number.)</p><p class="tie-in">🔗 <b>Tie-in — Metals unit:</b> bronze is 10 copper to 1 tin. If you make a table of copper (x) vs. tin (y): 10→1, 20→2, 30→3, then y ÷ x = 0.1 every time. The constant of proportionality for tin is <b>k = 0.1</b> (one-tenth as much tin as copper).</p>' },
        { type: 'video', title: 'Constant of proportionality', url: K + '/7th-constant-of-proportionality/v/introduction-proportional-relationships', label: '▶ Watch on Khan', focus: 'Watch how dividing y by x gives the same answer every row.' },
        { type: 'quiz', questions: [
          { q: 'A table shows x = 4 with y = 20. If the relationship is proportional, what is k?', options: ['4', '5', '16', '80'], answer: 1 },
          { q: 'In the equation y = 7x, the constant of proportionality is…', options: ['1', '7', 'x', 'y'], answer: 1 },
          { q: 'A table gives y ÷ x = 2, then 3, then 2. Is it proportional?', options: ['Yes, the numbers are small', 'No — y ÷ x must be the SAME every time', 'Yes, because y is bigger than x', 'Not enough info'], answer: 1 },
        ] },
        { type: 'practice', title: 'Now you try — on Khan', note: 'Do the quick check above first, then level up on Khan.', links: [
          { url: K + '/7th-constant-of-proportionality/e/constant-of-proportionality-from-equations', label: 'Constant of proportionality from equations' },
        ] },
        { type: 'next', text: 'Next: find k straight off a graph.' },
      ],
    },

    /* ───────────────── LESSON 3 ───────────────── */
    {
      id: 'k-graphs', n: 3, title: 'Finding k — from a graph',
      subject: 'Math', minutes: 25, standards: '7.RP.A.2',
      blocks: [
        { type: 'hook', text: 'On a graph, the constant k is hiding in one special spot: look at where <b>x = 1</b>. The y-value right there IS k. The point <b>(1, k)</b> gives you the whole rule.' },
        { type: 'prose', body: '<p>A proportional relationship graphs as a <b>straight line through the origin (0,0)</b>. To read the constant:</p><ul><li>Find the point where <b>x = 1</b>. Its height is <b>k</b>. Example: if the line passes through (1, 4), then k = 4.</li><li>No nice point at x = 1? Use any point and divide: <b>k = y ÷ x</b>. The point (2, 8) gives k = 8 ÷ 2 = 4.</li></ul><p><b>Steeper line = bigger k.</b> A line through (1, 6) is steeper than one through (1, 2), because it climbs faster.</p>' },
        { type: 'video', title: 'Constant of proportionality from a graph', url: K + '/7th-constant-of-proportionality/v/example-identifying-a-proportional-relatioship-given-a-constant-of-proportionality', label: '▶ Watch on Khan', focus: 'Watch them read k off the point where x = 1.' },
        { type: 'quiz', questions: [
          { q: 'A proportional line passes through (1, 9). What is k?', options: ['1', '9', '10', '0.11'], answer: 1 },
          { q: 'A proportional line passes through (3, 12). What is k?', options: ['3', '4', '12', '36'], answer: 1 },
          { q: 'Two proportional lines: A through (1, 2) and B through (1, 5). Which is steeper?', options: ['A', 'B', 'They are the same', 'Neither is proportional'], answer: 1 },
        ] },
        { type: 'practice', title: 'Now you try — on Khan', links: [
          { url: K + '/7th-constant-of-proportionality/e/constant-of-proportionality-from-graphs', label: 'Constant of proportionality from graphs' },
        ] },
        { type: 'next', text: 'Next: what k actually MEANS, and comparing two of them.' },
      ],
    },

    /* ───────────────── LESSON 4 ───────────────── */
    {
      id: 'k-interpret', n: 4, title: 'Compare & interpret the constant',
      subject: 'Math', minutes: 25, standards: '7.RP.A.2',
      blocks: [
        { type: 'hook', text: 'k is never just a number — it\'s a rate with a meaning. "$8 per ticket." "55 miles per gallon." "40 words per minute." Read k out loud with its units and a table of numbers turns into a real-world story.' },
        { type: 'prose', body: '<p>The constant of proportionality is a <b>unit rate</b> — the amount of y for <em>one</em> x. So always ask: <b>k of what per what?</b></p><ul><li>Cost vs. tickets → k is <b>dollars per ticket</b>.</li><li>Distance vs. time → k is <b>miles per hour</b> (a speed).</li><li>Pay vs. hours → k is <b>dollars per hour</b> (a wage).</li></ul><p><b>Comparing two proportional relationships</b> is just comparing their k\'s. If Car A goes y = 55x and Car B goes y = 60x, Car B is faster because its k is bigger. Careful — the relationships might be shown in different forms (one a table, one a graph, one an equation). Get each one down to its k, then compare.</p><p><b>Second example.</b> Store A sells 4 apples for $3 (k ≈ $0.75 each). Store B sells 6 apples for $4 (k ≈ $0.67 each). Store B is the better deal because its k — the price per apple — is smaller.</p><p class="tie-in">🔗 <b>Tie-in — your ebike:</b> "miles per battery charge" is a constant of proportionality too. An ebike that gets k = 40 miles per charge goes farther on each charge than one that gets k = 25. Same idea as comparing k\'s — bigger k, more range.</p>' },
        { type: 'video', title: 'Comparing & interpreting constants', url: K + '/constant-of-proportionality/v/comparing-constants-of-proportionality', label: '▶ Watch on Khan', focus: 'Watch them boil each relationship down to its k, then compare.' },
        { type: 'quiz', questions: [
          { q: 'A printer prints y = 12x (pages vs. minutes). What does k = 12 mean?', options: ['12 minutes total', '12 pages per minute', '12 pages total', '12 minutes per page'], answer: 1 },
          { q: 'Runner A: y = 6x. Runner B: y = 8x (meters per second). Who is faster?', options: ['A', 'B', 'Same speed', "Can't tell"], answer: 1 },
          { q: 'k is best described as…', options: ['A total amount', 'A unit rate (amount per 1)', 'A starting value', 'A guess'], answer: 1 },
        ] },
        { type: 'practice', title: 'Now you try — on Khan', links: [
          { url: K + '/constant-of-proportionality/e/compare-constants-of-proportionality', label: 'Compare constants of proportionality' },
          { url: K + '/constant-of-proportionality/e/interpret-constants-of-proportionality-', label: 'Interpret constants of proportionality' },
        ] },
        { type: 'next', text: 'Next: the big skill — telling proportional from NOT proportional.' },
      ],
    },

    /* ───────────────── LESSON 5 ───────────────── */
    {
      id: 'identify', n: 5, title: 'Is it proportional, or not?',
      subject: 'Math', minutes: 25, standards: '7.RP.A.2',
      blocks: [
        { type: 'hook', text: 'This is the skill tests love. Given a table, a graph, or an equation — decide fast: proportional, or not? There\'s a three-part checklist that never fails.' },
        { type: 'prose', body: '<p>It\'s proportional only if it passes <b>all three</b> tests:</p><ol><li><b>Table:</b> is y ÷ x the <em>same</em> for every pair? (If one row breaks it, it\'s out.)</li><li><b>Graph:</b> is it a <em>straight line through the origin (0,0)</em>?</li><li><b>Equation:</b> does it fit <b>y = kx</b> with nothing added on?</li></ol><p>The famous trap: <b>y = 2x + 3</b>. It graphs a straight line — but it crosses the y-axis at 3, not at the origin. That "+3" means it\'s <b>not proportional</b>. Straight line is not enough; it must start at zero.</p>' },
        { type: 'video', title: 'Identifying proportional relationships', url: K + '/cc-7th-proportional-rel/v/introduction-to-proportional-relationships', label: '▶ Watch on Khan', focus: 'Watch which relationships pass the "same ratio" test and which fail.' },
        { type: 'quiz', questions: [
          { q: 'Which equation is proportional?', options: ['y = 4x + 1', 'y = 4x', 'y = x + 4', 'y = 4/x'], answer: 1 },
          { q: 'A straight-line graph crosses the y-axis at 5 (not the origin). Is it proportional?', options: ['Yes, it\'s straight', 'No — it must pass through (0,0)', 'Yes, 5 is the constant', 'Only if k = 5'], answer: 1 },
          { q: 'A table: x=1,y=3; x=2,y=6; x=3,y=10. Proportional?', options: ['Yes, k = 3', 'No — 10 ÷ 3 isn\'t 3', 'Yes, the numbers grow', 'Not enough info'], answer: 1 },
        ] },
        { type: 'practice', title: 'Now you try — on Khan', links: [
          { url: K + '/cc-7th-proportional-rel/e/analyzing-and-identifying-proportional-relationships-2', label: 'Identify proportional relationships' },
          { url: K + '/cc-7th-proportional-rel/e/analyzing-and-identifying-proportional-relationships', label: 'Proportional relationships' },
        ] },
        { type: 'next', text: 'Next: what proportional graphs look like, up close.' },
      ],
    },

    /* ───────────────── LESSON 6 ───────────────── */
    {
      id: 'graphs', n: 6, title: 'Graphs of proportional relationships',
      subject: 'Math', minutes: 20, standards: '7.RP.A.2',
      blocks: [
        { type: 'hook', text: 'Every proportional relationship draws the exact same shape: a <b>straight line that starts at the origin</b> and climbs steadily. If it curves, or if it misses (0,0), it isn\'t proportional — no exceptions.' },
        { type: 'prose', body: '<p>Two things to check on any graph:</p><ul><li><b>Straight line?</b> Proportional graphs are always straight, never curved.</li><li><b>Through the origin?</b> It must pass through <b>(0, 0)</b>. (Makes sense: 0 tickets cost $0.)</li></ul><p>And to pull out the constant, use the trick from Lesson 3: the point at <b>x = 1</b> is <b>(1, k)</b>. Steeper line, bigger k.</p>' },
        { type: 'video', title: 'Graphs of proportional relationships', url: K + '/cc-7th-graphs-proportions/v/identifying-proportional-relationships-from-graphs', label: '▶ Watch on Khan', focus: 'Watch them reject the lines that miss the origin.' },
        { type: 'quiz', questions: [
          { q: 'A proportional graph is always…', options: ['A curve', 'A straight line through the origin', 'A straight line anywhere', 'A U-shape'], answer: 1 },
          { q: 'A graph is a straight line but passes through (0, 4). It is…', options: ['Proportional, k = 4', 'Not proportional — misses the origin', 'Proportional if x > 0', 'A curve'], answer: 1 },
        ] },
        { type: 'practice', title: 'Now you try — on Khan', links: [
          { url: K + '/cc-7th-graphs-proportions/e/identify-proportional-relationships-from-graphs', label: 'Identify proportional relationships from graphs' },
        ] },
        { type: 'next', text: 'Last skill: writing and solving proportions to answer real questions.' },
      ],
    },

    /* ───────────────── LESSON 7 ───────────────── */
    {
      id: 'solve', n: 7, title: 'Writing & solving proportions',
      subject: 'Math', minutes: 30, standards: '7.RP.A.3',
      blocks: [
        { type: 'hook', text: 'Real question: 3 cookies cost $2. How much for 12 cookies? Set the two ratios equal, and the unknown falls right out. This is where proportional thinking pays off.' },
        { type: 'prose', body: '<p>A <b>proportion</b> is two equal ratios: <b>a/b = c/d</b>. To set one up for a word problem, keep the <em>same units on top and bottom on both sides</em>.</p><p><b>Example:</b> 3 cookies cost $2. How much for 12 cookies?</p><blockquote>cookies/dollars: 3/2 = 12/x</blockquote><p><b>Solve by scaling:</b> 3 × 4 = 12, so do the same to the bottom: 2 × 4 = <b>$8</b>. <b>Or cross-multiply:</b> 3·x = 2·12 → 3x = 24 → x = <b>8</b>. Both give $8.</p><p>Tip: many of these are just "find the unit rate, then multiply." $2 for 3 cookies is about $0.67 each; ×12 ≈ $8. Same answer, and it\'s the constant of proportionality doing the work again.</p><p class="tie-in">🔗 <b>Tie-in — Metals unit, the bronze recipe.</b> Bronze is 10 parts copper to 1 part tin. You have <b>45 pounds of copper</b> — how much tin do you need? Set up the proportion, copper on top, tin on bottom:<br><b>10/1 = 45/x</b>. Cross-multiply: 10·x = 1·45 → 10x = 45 → x = <b>4.5 pounds of tin</b>. (Check with the constant: tin = 0.1 × copper = 0.1 × 45 = 4.5. ✓)</p>' },
        { type: 'video', title: 'Writing & solving proportions', url: K + '/cc-7th-write-and-solve-proportions/v/writing-proportions', label: '▶ Watch on Khan', focus: 'Watch how they line up the units before solving.' },
        { type: 'quiz', questions: [
          { q: '2 apples cost $3. Using 2/3 = 6/x, how much do 6 apples cost?', options: ['$4', '$9', '$6', '$12'], answer: 1 },
          { q: 'Solve the proportion 4/10 = x/5.', options: ['x = 2', 'x = 8', 'x = 20', 'x = 1'], answer: 0 },
          { q: 'A car goes 120 miles on 4 gallons. How far on 10 gallons? (Find the unit rate first.)', options: ['200 miles', '300 miles', '48 miles', '124 miles'], answer: 1 },
          { q: 'Bronze is 10 parts copper to 1 part tin. For 30 pounds of copper, how much tin? (10/1 = 30/x)', options: ['3 pounds', '300 pounds', '20 pounds', '40 pounds'], answer: 0 },
        ] },
        { type: 'practice', title: 'Now you try — on Khan', links: [
          { url: K + '/cc-7th-write-and-solve-proportions/e/proportions_1', label: 'Solving proportions' },
          { url: K + '/cc-7th-write-and-solve-proportions/e/writing_proportions', label: 'Writing proportions' },
          { url: K + '/cc-7th-write-and-solve-proportions/e/constructing-proportions-to-solve-application-problems', label: 'Proportion word problems' },
        ] },
        { type: 'next', text: 'Last stop: pull it together and check you\'re ready.' },
      ],
    },

    /* ───────────────── LESSON 8 · REFLECTION ───────────────── */
    {
      id: 'reflect', n: 8, title: 'Ready for the test?',
      subject: 'Math', minutes: 25, standards: '7.RP.A.3',
      blocks: [
        { type: 'prose', body: '<p>You\'ve covered the whole first math unit. Before the Khan quiz/test, look back at your day-one notes and check what stuck.</p>' },
        { type: 'kwlback', prompt: 'Here\'s what you wrote on day one:' },
        { type: 'vocabsort', title: 'Which words do you own now?', note: 'Be honest. The fuzzy ones are just your study list.' },
        { type: 'rubric', title: 'Can you do each of these?', items: [
          'Find the constant of proportionality (k) from a table.',
          'Find k from an equation and from a graph (the point at x = 1).',
          'Explain what k means in a real situation (a unit rate).',
          'Tell a proportional relationship from one that isn\'t (three tests).',
          'Write and solve a proportion for a word problem.',
        ] },
        { type: 'practice', title: 'Prove it — the Khan quizzes & unit test', note: 'Khan\'s quizzes and unit test are built into the unit page. Aim for the blue "Mastered" bar.', links: [
          { url: K, label: 'Open the Khan unit (quizzes + unit test)' },
        ] },
        { type: 'done', text: 'That\'s the unit. Nice work — this is the same proportional reasoning that runs through percents, rates, and a lot of what\'s coming next.' },
      ],
    },

  ],
});
