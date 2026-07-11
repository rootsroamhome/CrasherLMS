/**
 * unit-math-expressions.js — Math Unit 4: Expressions & Equations
 *
 * Same build as the other math units (hook → explainer → vocab → our quick check
 * → Khan practice), Khan-scaffolded. Everything lives in one Khan 7th-grade unit
 * ("Expressions, equations, & inequalities", cc-7th-variables-expressions), so K
 * points straight at it. All URLs verified via search (July 2026).
 * track:'math' → gold theme; standards auto-check the 7.AEE.* rows.
 */

window.HS_UNITS = window.HS_UNITS || [];
(function () {
const K = 'https://www.khanacademy.org/math/cc-seventh-grade-math/cc-7th-variables-expressions';

window.HS_UNITS.push({
  id: 'math-expressions',
  short: 'Math · Expressions',
  title: 'Expressions & Equations',
  track: 'math',
  eq: 'How do you turn a real-world situation into an expression or equation — and then solve it to find the number you didn\'t know?',

  parent: {
    hotspots: [
      'The big shift this unit: a <b>letter stands for a number you don\'t know yet</b>. An <em>expression</em> (like 3x + 5) is a recipe with no equals sign; an <em>equation</em> (3x + 5 = 20) is a balance you can SOLVE. Keeping those two straight prevents a lot of confusion.',
      '<b>Combining like terms:</b> you can add 3x + 5x = 8x, but 3x + 5 stays 3x + 5 (an x-term and a plain number aren\'t "like"). The distributive property, 3(x + 4) = 3x + 12, is the other workhorse — and watch the signs when it\'s a negative out front: −2(x − 5) = −2x + 10.',
      'Solving equations is <b>"undo, and keep the scale balanced."</b> Whatever you do to one side, do to the other. Undo in reverse order (undo + and − first, then × and ÷). Always have him <b>check</b> by plugging the answer back in — it catches most mistakes.',
      'The one inequality rule that\'s different: <b>when you multiply or divide both sides by a NEGATIVE, flip the inequality sign.</b> −3x &gt; 12 becomes x &lt; −4. Everything else works exactly like solving an equation.',
    ],
    activities: [
      { tier: 'Small', title: 'Translate life into expressions', detail: 'Play a quick back-and-forth: you say a phrase ("7 more than double a number," "the cost of g grips at $8 each"), he writes the expression (2n + 7, 8g). Then flip it — you write 5x − 2 and he invents a story for it. Ties language to symbols, which is the whole unit.', cost: 'Free', time: '20 min' },
      { tier: 'Medium', title: 'Solve a real savings equation', detail: 'He wants something specific (an ebike part, a game). Set up the equation: starting money + weekly savings × weeks = goal, e.g. 30 + 15w = 180. Solve for the number of weeks, then actually track it. This is also 7.E.ES.3 — a plan to save for a big purchase.', cost: 'Free', time: '30–45 min' },
      { tier: 'Large', title: 'Budget as an inequality', detail: 'Give a real spending limit for an outing or a project. Write it as an inequality (8g + 12 ≤ 100, "how many can we afford?"), solve it, and use it to make the actual decision. Living inside a ≤ makes inequalities click.', cost: 'Varies', time: 'Across a week' },
    ],
  },

  vocab: {
    mustOwn: [
      { term: 'variable',        def: 'A letter that stands for a number you don\'t know yet (like x or n).' },
      { term: 'expression',      def: 'A math phrase with numbers, variables & operations — but NO equals sign (3x + 5).' },
      { term: 'term',            def: 'A single piece of an expression, separated by + or −. In 3x + 5, the terms are 3x and 5.' },
      { term: 'coefficient',     def: 'The number multiplying a variable. In 3x, the coefficient is 3.' },
      { term: 'constant',        def: 'A plain number with no variable, like the 5 in 3x + 5.' },
      { term: 'like terms',      def: 'Terms with the exact same variable part, so they can be combined (3x and 5x).' },
      { term: 'equation',        def: 'A statement that two expressions are equal — it has an equals sign (3x + 5 = 20).' },
      { term: 'inequality',      def: 'A statement using <, >, ≤, or ≥ instead of =.' },
      { term: 'solution',        def: 'The value of the variable that makes an equation or inequality true.' },
      { term: 'inverse operation', def: 'The operation that undoes another: + undoes −, × undoes ÷.' },
    ],
    frayer: [
      {
        term: 'like terms',
        definition: 'Terms that have the identical variable part (same letter, same power), which means they can be added or subtracted into one term. Plain numbers are like terms with each other.',
        examples: ['3x and 5x → combine to 8x', '7 and −2 → combine to 5', '4n and n → combine to 5n'],
        nonexamples: ['3x and 5 (one has x, one doesn\'t)', '2x and 2x² (different powers)'],
        sentence: 'You can only add or subtract terms that are "like" — otherwise leave them separate.',
      },
      {
        term: 'inverse operation',
        definition: 'An operation that undoes another. Solving an equation means peeling away operations from the variable using their inverses, one at a time, keeping both sides equal.',
        examples: ['To undo +7, subtract 7', 'To undo ×3, divide by 3', 'To undo −5, add 5'],
        nonexamples: ['Doing the same thing to only ONE side', 'Undoing × before undoing + in a two-step equation'],
        sentence: 'Whatever you do to one side of the equation, do to the other — that keeps the scale balanced.',
      },
    ],
  },

  cards: [

    /* ───────────────── LESSON 1 ───────────────── */
    {
      id: 'launch', n: 1, title: 'Letters that stand for numbers',
      subject: 'Math', minutes: 25, standards: '7.AEE.A.1',
      blocks: [
        { type: 'hook', text: 'A phone game says "earn 8 coins per level." How many coins for 12 levels? For 100? You don\'t want a new sentence each time — you want one rule: <b>8 × (levels)</b>. Swap in a letter for "levels" and you get <b>8ℓ</b>, a machine that answers <em>any</em> version of the question. That\'s all a variable is.' },
        { type: 'prose', body: '<p>A <b>variable</b> is a letter holding a number you don\'t know (or that can change). Build it into an <b>expression</b> — a recipe with no equals sign:</p><ul><li>"8 coins per level" → <b>8ℓ</b></li><li>"$5 plus $3 per topping" → <b>5 + 3t</b></li><li>"7 less than a number" → <b>n − 7</b></li></ul><p><b>Parts of an expression.</b> In <b>3x + 5</b>: the <em>terms</em> are 3x and 5; the <em>coefficient</em> is 3; the <em>constant</em> is 5.</p><p><b>Evaluating</b> means plugging in a value. Evaluate 3x + 5 when x = 4: 3(4) + 5 = 12 + 5 = <b>17</b>. When x = 10: 3(10) + 5 = <b>35</b>. Same recipe, different inputs.</p><p><b>Watch the language traps:</b> "7 less than a number" is n − 7, <em>not</em> 7 − n. "Twice a number, plus 3" is 2n + 3, not 2(n + 3). Read slowly and the order matters.</p><p class="tie-in">🔗 <b>Tie-in — negatives (last unit):</b> variables can hold negative numbers too. Evaluate 2x − 1 when x = −3: 2(−3) − 1 = −6 − 1 = <b>−7</b>. All those sign rules you drilled show up the second you plug numbers in.</p>' },
        { type: 'flashcards', title: 'Meet the words first', note: 'Tap a card to flip it. These come back all unit long.' },
        { type: 'kwl', prompt: 'Quick gut-check before we dig in — no wrong answers.',
          klabel: 'Where have I already used a letter to stand for a number?',
          wlabel: 'What do I want to be able to solve by the end?' },
        { type: 'next', text: 'Next: cleaning up expressions by combining like terms.' },
      ],
    },

    /* ───────────────── LESSON 2 ───────────────── */
    {
      id: 'like-terms', n: 2, title: 'Combining like terms',
      subject: 'Math', minutes: 25, standards: '7.AEE.A.1',
      blocks: [
        { type: 'hook', text: 'You can add 3 apples + 5 apples = 8 apples, but you can\'t add 3 apples + 5 oranges into one thing. Algebra is identical: <b>3x + 5x = 8x</b>, but <b>3x + 5</b> stays put. "Like terms" are just matching fruit.' },
        { type: 'prose', body: '<p><b>Like terms</b> have the exact same variable part. Combine them by adding/subtracting their coefficients; leave the variable alone.</p><ul><li>3x + 5x = <b>8x</b></li><li>9y − 2y = <b>7y</b></li><li>7 + 4 = <b>11</b> (plain numbers are like terms too)</li></ul><p><b>Example — a longer one.</b> Simplify 4x + 7 + 2x − 3. Group the x\'s: 4x + 2x = 6x. Group the numbers: 7 − 3 = 4. Result: <b>6x + 4</b>.</p><p><b>Example with negatives.</b> 5a − 8 − 9a + 2: the a-terms 5a − 9a = −4a; the numbers −8 + 2 = −6. Result: <b>−4a − 6</b>. (Sign rules from last unit, again.)</p><p><b>The trap:</b> 3x + 5 is <em>already</em> simplified — you cannot mash an x-term and a constant together. Writing "8x" or "8" there is the classic error.</p>' },
        { type: 'video', title: 'Combining like terms', url: K + '/cc-7th-manipulating-expressions/v/combining-like-terms', label: '▶ Watch on Khan', focus: 'Watch how only matching variable parts get merged.' },
        { type: 'quiz', questions: [
          { q: 'Simplify: 6x + 3x', options: ['9x', '9x²', '18x', '9'], answer: 0 },
          { q: 'Simplify: 4a + 7 + 2a', options: ['13a', '6a + 7', '6a + 7a', '4a + 9'], answer: 1 },
          { q: 'Simplify: 8m − 3 − 5m + 1', options: ['3m − 2', '3m + 4', '13m − 2', '3m − 4'], answer: 0 },
          { q: 'Which is ALREADY fully simplified?', options: ['2x + 3x', '5y − y', '4x + 7', '6 + 2'], answer: 2 },
        ] },
        { type: 'practice', title: 'Now you try — on Khan', note: 'Do the quick check first, then practice on Khan\'s "Manipulating expressions" topic.', links: [
          { url: K + '/cc-7th-manipulating-expressions', label: 'Manipulating expressions (combine like terms)' },
        ] },
        { type: 'next', text: 'Next: the distributive property — multiplying into parentheses.' },
      ],
    },

    /* ───────────────── LESSON 3 ───────────────── */
    {
      id: 'distribute', n: 3, title: 'The distributive property & factoring',
      subject: 'Math', minutes: 25, standards: '7.AEE.A.2',
      blocks: [
        { type: 'hook', text: 'Buying 3 combo meals, each a burger ($5) and fries ($4)? You can total one combo and triple it — 3 × $9 — or buy 3 burgers and 3 fries — 3×5 + 3×4. Same cost. That everyday choice IS the <b>distributive property</b>: 3(5 + 4) = 3·5 + 3·4.' },
        { type: 'prose', body: '<p><b>Distributing</b> means multiplying the outside number by <em>each</em> term inside the parentheses:</p><blockquote style="font-size:1.15rem; text-align:center; font-weight:700;">a(b + c) = a·b + a·c</blockquote><ul><li>3(x + 4) = <b>3x + 12</b></li><li>5(2x − 1) = <b>10x − 5</b></li></ul><p><b>Mind the negative sign</b> (straight from the last unit): −2(x − 5) = (−2)(x) + (−2)(−5) = <b>−2x + 10</b>. The second sign flips because negative × negative = positive.</p><p><b>Factoring is distributing in reverse</b> — pull out the common factor: 6x + 9 = <b>3(2x + 3)</b> (both terms share a 3). Check by re-distributing: 3·2x + 3·3 = 6x + 9. ✓</p><p><b>Full clean-up example.</b> Simplify 2(x + 3) + 4x: distribute → 2x + 6 + 4x, then combine like terms → <b>6x + 6</b>.</p>' },
        { type: 'video', title: 'Distributive property with variables', url: K + '/cc-7th-manipulating-expressions/v/combining-like-terms-and-the-distributive-property', label: '▶ Watch on Khan', focus: 'Watch the outside number hit BOTH terms — signs included.' },
        { type: 'quiz', questions: [
          { q: 'Distribute: 4(x + 2)', options: ['4x + 2', '4x + 8', 'x + 8', '4x + 6'], answer: 1 },
          { q: 'Distribute: −3(x − 5)', options: ['−3x − 15', '−3x + 15', '3x − 15', '−3x + 5'], answer: 1 },
          { q: 'Factor: 10x + 15', options: ['5(2x + 3)', '5(2x + 15)', '10(x + 15)', '5(x + 3)'], answer: 0 },
          { q: 'Simplify: 3(x + 1) + 2x', options: ['5x + 1', '5x + 3', '6x + 3', '5x + 6'], answer: 1 },
        ] },
        { type: 'practice', title: 'Now you try — on Khan', links: [
          { url: K + '/cc-7th-manipulating-expressions', label: 'Manipulating expressions (distribute & factor)' },
        ] },
        { type: 'next', text: 'Next: the payoff — solving equations to find the unknown.' },
      ],
    },

    /* ───────────────── LESSON 4 ───────────────── */
    {
      id: 'equations-intro', n: 4, title: 'Solving equations — keep it balanced',
      subject: 'Math', minutes: 25, standards: '7.AEE.B.3',
      blocks: [
        { type: 'hook', text: 'An equation is a balance scale: the two sides weigh the same. To find x, <b>peel operations off the variable using their inverses — and do the exact same thing to both sides</b> so the scale stays level. That\'s the entire method.' },
        { type: 'prose', body: '<p>Goal: get the variable alone. Use <b>inverse operations</b> (+ undoes −, × undoes ÷), same move on both sides.</p><p><b>One-step examples:</b></p><ul><li>x + 7 = 12 → subtract 7 from both sides → <b>x = 5</b></li><li>3x = 18 → divide both sides by 3 → <b>x = 6</b></li><li>x/4 = 5 → multiply both sides by 4 → <b>x = 20</b></li><li>x − 3 = −2 → add 3 → <b>x = 1</b></li></ul><p><b>Always check.</b> Put the answer back in: for 3x = 18, is 3(6) = 18? Yes. Checking catches almost every slip, so make it a habit.</p><p><b>Why "both sides"?</b> If a scale balances and you add 7 grams to only one pan, it tips. Add 7 to both, or take 7 from both, and it stays balanced — and still true.</p>' },
        { type: 'video', title: 'Solving equations (worked example)', url: K + '/cc-7th-2-step-equations-intro/v/solving-equations-1', label: '▶ Watch on Khan', focus: 'Watch the same operation land on BOTH sides, every step.' },
        { type: 'quiz', questions: [
          { q: 'Solve: x + 9 = 15', options: ['x = 6', 'x = 24', 'x = 135', 'x = 6.5'], answer: 0 },
          { q: 'Solve: 5x = 45', options: ['x = 40', 'x = 9', 'x = 50', 'x = 225'], answer: 1 },
          { q: 'Solve: x/3 = 7', options: ['x = 21', 'x = 10', 'x = 4', 'x = 2.3'], answer: 0 },
          { q: 'Solve: x − 6 = −2', options: ['x = −8', 'x = 4', 'x = 8', 'x = −4'], answer: 1 },
        ] },
        { type: 'practice', title: 'Now you try — on Khan', links: [
          { url: K + '/cc-7th-2-step-equations-intro/e/linear_equations_2', label: 'Solving equations' },
        ] },
        { type: 'next', text: 'Next: two moves at once — two-step equations.' },
      ],
    },

    /* ───────────────── LESSON 5 ───────────────── */
    {
      id: 'two-step', n: 5, title: 'Two-step equations',
      subject: 'Math', minutes: 30, standards: '7.AEE.B.3',
      blocks: [
        { type: 'hook', text: 'Most real equations take two moves, like 2x + 3 = 11. The order is the secret: <b>undo the + or − first, then undo the × or ÷.</b> It\'s "reverse PEMDAS" — you unwrap the variable in the opposite order it was built.' },
        { type: 'prose', body: '<p><b>Example 1.</b> 2x + 3 = 11. Undo +3 first (subtract 3 both sides): 2x = 8. Then undo ×2 (divide by 2): <b>x = 4</b>. Check: 2(4) + 3 = 11. ✓</p><p><b>Example 2 — with a negative.</b> 3x − 5 = 16. Add 5: 3x = 21. Divide by 3: <b>x = 7</b>. Check: 3(7) − 5 = 16. ✓</p><p><b>Example 3 — division form.</b> x/2 + 4 = 10. Subtract 4: x/2 = 6. Multiply by 2: <b>x = 12</b>.</p><p><b>Example 4 — negative solution.</b> 4x + 18 = 2. Subtract 18: 4x = −16. Divide by 4: <b>x = −4</b>. (Solutions can be negative or fractions — the method never changes.)</p><p><b>Why undo + before ×?</b> The variable was wrapped: first multiplied, then had a number added. To unwrap, you reverse it — peel the outside layer (the + or −) first.</p>' },
        { type: 'video', title: 'Two-step equations with decimals & fractions', url: K + '/cc-8th-two-step-equations-dec-frac/v/two-step-equations-with-decimals-and-fractions', label: '▶ Watch on Khan', focus: 'Watch the + / − come undone before the × / ÷.' },
        { type: 'read', title: 'Two-step equations review', url: K + '/cc-8th-two-step-equations-dec-frac/a/two-step-equations-review' },
        { type: 'quiz', questions: [
          { q: 'Solve: 2x + 5 = 17', options: ['x = 6', 'x = 11', 'x = 4', 'x = 22'], answer: 0 },
          { q: 'Solve: 3x − 4 = 20', options: ['x = 8', 'x = 5.3', 'x = 16', 'x = 24'], answer: 0 },
          { q: 'Solve: x/5 + 2 = 6', options: ['x = 20', 'x = 40', 'x = 4', 'x = 0.8'], answer: 0 },
          { q: 'Solve: 4x + 20 = 4', options: ['x = 6', 'x = −4', 'x = −6', 'x = 4'], answer: 1 },
        ] },
        { type: 'practice', title: 'Now you try — on Khan', links: [
          { url: K + '/cc-7th-2-step-equations-intro/e/linear_equations_2', label: 'Two-step equations' },
          { url: K + '/cc-8th-two-step-equations-dec-frac/e/two-step-equations-with-decimals-and-fractions', label: 'Two-step equations with decimals & fractions' },
        ] },
        { type: 'next', text: 'Next: building the equation yourself, from a word problem.' },
      ],
    },

    /* ───────────────── LESSON 6 ───────────────── */
    {
      id: 'word-eq', n: 6, title: 'Writing equations from word problems',
      subject: 'Math', minutes: 30, standards: '7.AEE.B.3',
      blocks: [
        { type: 'hook', text: 'The hard part of a word problem was never the algebra — it\'s turning English into an equation. Once you\'ve written it, you already know how to solve it. The skill is spotting "what\'s the unknown?" and "what\'s the relationship?"' },
        { type: 'prose', body: '<p><b>A reliable recipe:</b></p><ol><li>Let a letter be the thing you don\'t know ("let w = weeks").</li><li>Translate the sentence into an equation, piece by piece.</li><li>Solve it.</li><li>Answer in words, and check it makes sense.</li></ol><p><b>Example 1 — saving up.</b> You have $30 and save $15 a week. How many weeks to reach $180? Equation: 30 + 15w = 180. Subtract 30: 15w = 150. Divide by 15: <b>w = 10 weeks</b>.</p><p><b>Example 2 — a number puzzle.</b> "5 less than 3 times a number is 16." Equation: 3n − 5 = 16. Add 5: 3n = 21. Divide by 3: <b>n = 7</b>.</p><p><b>Example 3 — splitting a cost.</b> A $52 bill split by some friends after a $12 delivery fee is $8 each: 8f + 12 = 52 → 8f = 40 → <b>f = 5 friends</b>.</p><p class="tie-in">🔗 <b>Tie-in — budgeting (7.E.ES.3):</b> that first example is a real savings plan. Want an ebike part that costs $180 and you\'ve got $30? 30 + 15w = 180 tells you it\'s 10 weeks of saving $15. The equation turns a wish into a date.</p>' },
        { type: 'video', title: 'Two-step equation word problem', url: K + '/cc-7th-linear-eq-word-probs/v/basic-linear-equation-word-problem', label: '▶ Watch on Khan', focus: 'Watch them name the unknown BEFORE writing the equation.' },
        { type: 'quiz', questions: [
          { q: 'You have $20 and save $6/week. Which equation reaches $50?', options: ['20 + 6w = 50', '6w − 20 = 50', '20w + 6 = 50', '50 + 6w = 20'], answer: 0 },
          { q: 'Solve that one: how many weeks?', options: ['5 weeks', '6 weeks', '3 weeks', '10 weeks'], answer: 0 },
          { q: '"4 more than twice a number is 18." The equation is…', options: ['2n + 4 = 18', '4n + 2 = 18', '2(n + 4) = 18', '2n − 4 = 18'], answer: 0 },
          { q: 'A cart holds some $3 items plus a flat $5 fee, totaling $32. Solve 3c + 5 = 32 for the number of items c.', options: ['c = 9', 'c = 12', 'c = 11', 'c = 3'], answer: 0 },
        ] },
        { type: 'practice', title: 'Now you try — on Khan', links: [
          { url: K + '/cc-7th-linear-eq-word-probs/e/linear-equation-world-problems-2', label: 'Two-step equation word problems' },
          { url: K + '/cc-7th-linear-eq-word-probs/e/interpret-two-step-equation-word-problems', label: 'Interpret two-step equation word problems' },
        ] },
        { type: 'next', text: 'Last skill: inequalities — when the answer is a whole range.' },
      ],
    },

    /* ───────────────── LESSON 7 ───────────────── */
    {
      id: 'inequalities', n: 7, title: 'Inequalities (and the flip rule)',
      subject: 'Math', minutes: 30, standards: '7.AEE.B.4',
      blocks: [
        { type: 'hook', text: 'Sometimes the answer isn\'t one number — it\'s a whole range. "You need <b>at least</b> $50." "You can bring <b>up to</b> 8 friends." That\'s an inequality, and you solve it just like an equation — with <b>one</b> special rule that trips everyone.' },
        { type: 'prose', body: '<p>The symbols: <b>&gt;</b> greater than, <b>&lt;</b> less than, <b>≥</b> at least (greater or equal), <b>≤</b> at most (less or equal).</p><p><b>Solve like an equation</b> — inverse operations, both sides:</p><ul><li>x + 4 &gt; 10 → subtract 4 → <b>x &gt; 6</b></li><li>2x + 3 &gt; 11 → subtract 3 → 2x &gt; 8 → divide by 2 → <b>x &gt; 4</b></li></ul><p><b>THE flip rule (the whole reason inequalities are their own lesson):</b> when you multiply or divide <em>both sides by a negative number</em>, reverse the inequality sign.</p><ul><li>−3x &gt; 12 → divide by −3 AND flip → <b>x &lt; −4</b></li><li>−2x + 1 ≤ 7 → subtract 1: −2x ≤ 6 → divide by −2 and flip → <b>x ≥ −3</b></li></ul><p><b>Why flip?</b> 2 &lt; 5 is true. Multiply both by −1: −2 and −5 — and now −2 &gt; −5. Multiplying by a negative reverses the order on the number line, so the sign has to flip to stay true.</p><p class="tie-in">🔗 <b>Tie-in — a real budget.</b> Grips cost $8 and shipping is $12; you have $100. How many can you buy? 8g + 12 ≤ 100 → 8g ≤ 88 → <b>g ≤ 11</b>. The answer is a range — "11 or fewer" — which is exactly how spending limits actually work.</p>' },
        { type: 'video', title: 'Solving two-step inequalities', url: K + '/cc-7th-two-step-inequalities/v/solving-inequalities', label: '▶ Watch on Khan', focus: 'Watch for the moment they divide by a negative and flip the sign.' },
        { type: 'quiz', questions: [
          { q: 'Solve: x + 5 > 12', options: ['x > 7', 'x > 17', 'x < 7', 'x > 60'], answer: 0 },
          { q: 'Solve: 2x − 4 ≤ 10', options: ['x ≤ 7', 'x ≤ 3', 'x ≥ 7', 'x ≤ 14'], answer: 0 },
          { q: 'Solve: −4x > 20', options: ['x > −5', 'x < −5', 'x > 5', 'x < 5'], answer: 1 },
          { q: 'You have $60; tickets are $9 plus a $6 fee: 9t + 6 ≤ 60. Most tickets?', options: ['t ≤ 6', 't ≤ 7', 't ≤ 5', 't ≤ 11'], answer: 0 },
        ] },
        { type: 'practice', title: 'Now you try — on Khan', links: [
          { url: K + '/cc-7th-inequalities/e/one_step_inequalities', label: 'One-step inequalities' },
          { url: K + '/cc-7th-two-step-inequalities/e/solving-2-step-inequalities', label: 'Two-step inequalities' },
          { url: K + '/cc-7th-two-step-inequalities/e/interpretting-solving-linear-inequalities', label: 'Two-step inequality word problems' },
        ] },
        { type: 'next', text: 'Last stop: pull it together and check you\'re ready.' },
      ],
    },

    /* ───────────────── LESSON 8 · REFLECTION ───────────────── */
    {
      id: 'reflect', n: 8, title: 'Ready for the test?',
      subject: 'Math', minutes: 25, standards: '7.AEE.B.4',
      blocks: [
        { type: 'prose', body: '<p>You\'ve gone from "a letter is a number" to solving equations and inequalities. Before the Khan quiz/test, look back at your day-one notes and check what stuck.</p>' },
        { type: 'kwlback', prompt: 'Here\'s what you wrote on day one:' },
        { type: 'vocabsort', title: 'Which words do you own now?', note: 'Be honest. The fuzzy ones are just your study list.' },
        { type: 'rubric', title: 'Can you do each of these?', items: [
          'Write and evaluate an expression from a real situation.',
          'Combine like terms and use the distributive property (and factor).',
          'Solve one- and two-step equations, and check the answer.',
          'Turn a word problem into an equation and solve it.',
          'Solve inequalities — including the flip when dividing by a negative.',
        ] },
        { type: 'practice', title: 'Prove it — the Khan quizzes & unit test', note: 'Khan\'s quizzes and unit test are built into the unit page. Aim for the blue "Mastered" bar.', links: [
          { url: K, label: 'Open the Khan unit (quizzes + unit test)' },
        ] },
        { type: 'done', text: 'That\'s the unit. Expressions and equations are the grammar of algebra — every math class after this speaks it. Next up: geometry.' },
      ],
    },

  ],
});
})();
