/**
 * unit-math-negatives.js — Math Unit 3: Negative Numbers
 *
 * Same build as the other math units (hook → explainer → vocab → our quick check
 * → Khan practice), Khan-scaffolded. Spans two Khan 7th-grade units, so K is the
 * course root and each link carries its full path:
 *   • add / subtract  → cc-7th-negative-numbers-add-and-subtract
 *   • multiply / divide → cc-7th-negative-numbers-multiply-and-divide
 * All URLs verified via search (July 2026). track:'math' → gold theme; standards
 * auto-check the 7.NS.* rows on the Big Picture checklist.
 */

window.HS_UNITS = window.HS_UNITS || [];
(function () {
const K = 'https://www.khanacademy.org/math/cc-seventh-grade-math';
const KADD = K + '/cc-7th-negative-numbers-add-and-subtract';
const KMUL = K + '/cc-7th-negative-numbers-multiply-and-divide';

window.HS_UNITS.push({
  id: 'math-negatives',
  short: 'Math · Negatives',
  title: 'Negative Numbers',
  track: 'math',
  eq: 'Once numbers can go below zero, how do you add, subtract, multiply, and divide them without second-guessing every sign?',

  parent: {
    hotspots: [
      'The idea under everything: every number has an <b>opposite</b> (the additive inverse), and a number plus its opposite is <b>0</b> (5 + −5 = 0). Adding a negative slides you LEFT on the number line; adding a positive slides RIGHT.',
      'The rule that removes all the fear of subtraction: <b>subtracting is the same as adding the opposite.</b> "Keep–Change–Change": keep the first number, change minus to plus, change the sign of the second. So 3 − 7 becomes 3 + (−7), and −2 − (−6) becomes −2 + 6.',
      'The multiply/divide rule kids memorize but forget WHY: <b>same signs → positive, different signs → negative.</b> (−4)(−3) = +12. The "negative times negative is positive" is the one to over-practice.',
      '<b>Absolute value is a distance, so it is never negative.</b> |−7| = 7. And the distance between two numbers on the line is |a − b|. This trips kids because the word "value" sounds like it could be negative — it can\'t.',
    ],
    activities: [
      { tier: 'Small', title: 'Thermometer & the number line', detail: 'Read a real thermometer (or a weather app on a cold morning) and do the arithmetic out loud: "It was 3° and dropped 8 — what now?" Draw a number line on paper and physically hop left for minus, right for plus. Making it a distance you MOVE beats memorizing rules.', cost: 'Free', time: '20–30 min' },
      { tier: 'Medium', title: 'Elevation on a real ebike ride', detail: 'On a ride with hills, track the ups and downs (a phone app shows elevation). Climb +150 ft, descend −400 ft, climb +100 — what\'s the net change from the start? Signed numbers ARE elevation change. The Rogue Valley has plenty of hills to make the numbers real.', cost: 'Free', time: '1 hour' },
      { tier: 'Large', title: 'Run a pretend checking account', detail: 'Give him a starting balance and a week of deposits (+) and purchases (−), including a couple that overdraw it into the negative. Keep a running total. Debt is a negative number he can feel, and it sneaks in a bit of 7.E.ES.2 (budgeting) too.', cost: 'Free', time: 'Across a week' },
    ],
  },

  vocab: {
    mustOwn: [
      { term: 'integer',           def: 'A whole number and its opposite: …, −3, −2, −1, 0, 1, 2, 3, … (no fractions).' },
      { term: 'negative number',   def: 'A number less than zero — to the left of 0 on the number line.' },
      { term: 'opposite (additive inverse)', def: 'The same distance from 0 on the other side. The opposite of 5 is −5; they add to 0.' },
      { term: 'absolute value',    def: 'A number\'s distance from 0, always zero or positive. |−7| = 7.' },
      { term: 'number line',       def: 'A line where numbers grow to the right and shrink (go negative) to the left.' },
      { term: 'sum',               def: 'The result of adding.' },
      { term: 'difference',        def: 'The result of subtracting.' },
      { term: 'product',           def: 'The result of multiplying.' },
      { term: 'quotient',          def: 'The result of dividing.' },
    ],
    frayer: [
      {
        term: 'opposite (additive inverse)',
        definition: 'The number that is the same distance from 0 but on the other side. A number plus its opposite always equals 0. Subtracting a number is the same as adding its opposite.',
        examples: ['The opposite of 8 is −8', 'The opposite of −3 is 3', '6 + (−6) = 0'],
        nonexamples: ['The reciprocal (that\'s for multiplying: 1/8)', 'Thinking the opposite of −3 is still negative'],
        sentence: 'To subtract, flip the second number to its opposite and add instead.',
      },
      {
        term: 'absolute value',
        definition: 'The distance a number is from zero on the number line. Distance is never negative, so absolute value is always 0 or positive. Written with bars: |x|.',
        examples: ['|−7| = 7', '|7| = 7', 'The distance between −3 and 5 is |5 − (−3)| = 8'],
        nonexamples: ['|−7| = −7 (wrong — it can\'t be negative)', 'Confusing it with the opposite (−7\'s opposite is 7, and its absolute value is also 7 — same here, but for different reasons)'],
        sentence: 'Absolute value strips the sign because it only measures how far from zero you are.',
      },
    ],
  },

  cards: [

    /* ───────────────── LESSON 1 ───────────────── */
    {
      id: 'launch', n: 1, title: 'Below zero — negatives are real',
      subject: 'Math', minutes: 25, standards: '7.NS.A.1',
      blocks: [
        { type: 'hook', text: 'Zero isn\'t the bottom. A thermometer reads <b>−8°</b>. A submarine sits at <b>−200 feet</b>. Your bank account can go to <b>−$30</b> if you overdraw it. Negative numbers aren\'t a math trick — they\'re the language for "below," "before," "owe," and "down."' },
        { type: 'prose', body: '<p>The <b>number line</b> runs both ways from zero: positives to the right, negatives to the left. Every positive has a mirror-image <b>opposite</b> the same distance from 0 on the other side — 5 and −5, 12 and −12.</p><ul><li><b>Temperature:</b> −8° is 8 degrees below zero.</li><li><b>Elevation:</b> +100 ft is a hill; −100 ft is below sea level.</li><li><b>Money:</b> +$50 is a deposit; −$30 is a debt.</li><li><b>Time/score:</b> "3 below par" in golf is −3.</li></ul><p><b>Two numbers, one comparison.</b> On the line, whatever is farther <em>right</em> is bigger. So −2 &gt; −9 (−2 is warmer, higher, less in debt). This surprises people: with negatives, the one that "looks bigger" (9) is actually smaller when it\'s −9.</p><p><b>Opposites add to zero.</b> 5 + (−5) = 0. Earn $5, spend $5 — you\'re back to nothing. That single fact (a number plus its opposite is 0) is the seed of everything in this unit.</p><p class="tie-in">🔗 <b>Tie-in — your ebike:</b> elevation is the perfect negative-number playground. Climbing is +, coasting downhill is −. A ride that climbs 150 ft then drops 400 ft has moved a <em>net</em> −250 ft — you ended up lower than you started. We\'ll do exactly that arithmetic next.</p>' },
        { type: 'flashcards', title: 'Meet the words first', note: 'Tap a card to flip it. These come back all unit long.' },
        { type: 'video', title: 'Adding & subtracting negative numbers', url: KADD + '/cc-7th-sub-neg-intro/v/adding-and-subtracting-negative-number-examples', label: '▶ Watch on Khan', focus: 'Watch the moves as hops LEFT and RIGHT on the number line.' },
        { type: 'kwl', prompt: 'Quick gut-check before we dig in — no wrong answers.',
          klabel: 'Where have I already seen numbers below zero?',
          wlabel: 'Which sign rule do I most want to stop second-guessing?' },
        { type: 'next', text: 'Next: adding negatives without the guesswork.' },
      ],
    },

    /* ───────────────── LESSON 2 ───────────────── */
    {
      id: 'add', n: 2, title: 'Adding negative numbers',
      subject: 'Math', minutes: 25, standards: '7.NS.A.1',
      blocks: [
        { type: 'hook', text: 'Adding is just moving on the number line: <b>+ a positive hops right, + a negative hops left.</b> Start at −5, add 3 (hop right 3), you land on −2. That\'s the whole idea — the "rules" are just shortcuts for the hopping.' },
        { type: 'prose', body: '<p>Two quick shortcuts so you don\'t draw a line every time:</p><ol><li><b>Same signs → add the numbers, keep the sign.</b> −5 + (−3): both negative, 5 + 3 = 8, keep the minus → <b>−8</b>. (Two debts make a bigger debt.)</li><li><b>Different signs → subtract the smaller from the larger, take the bigger one\'s sign.</b> 7 + (−10): 10 − 7 = 3, and 10 "won," so → <b>−3</b>.</li></ol><p><b>Example 3.</b> −4 + 9: different signs, 9 − 4 = 5, positive wins → <b>+5</b>.</p><p><b>Example 4.</b> −6 + (−1) = <b>−7</b> (same sign, add, stay negative).</p><p class="tie-in">🔗 <b>Tie-in — ebike elevation.</b> Start of a ride at elevation 0. Climb +150, coast −400, climb +100. Add them up: 150 + (−400) + 100. Group the ups (150 + 100 = 250) and the down (−400): 250 + (−400) = <b>−150 ft</b>. You finished 150 feet below where you started.</p>' },
        { type: 'video', title: 'Adding negative numbers on the number line', url: KADD + '/cc-7th-sub-neg-intro/v/adding-and-subtracting-negative-number-examples', label: '▶ Watch on Khan', focus: 'Notice: same signs pile up, different signs cancel toward zero.' },
        { type: 'quiz', questions: [
          { q: '−6 + (−4) = ?', options: ['−10', '−2', '10', '2'], answer: 0 },
          { q: '8 + (−5) = ?', options: ['−3', '3', '13', '−13'], answer: 1 },
          { q: '−9 + 2 = ?', options: ['−7', '7', '−11', '11'], answer: 0 },
          { q: 'Climb +200, then descend −500. Net elevation change?', options: ['+700', '−300', '+300', '−700'], answer: 1 },
        ] },
        { type: 'practice', title: 'Now you try — on Khan', links: [
          { url: KADD + '/x6b17ba59:adding-negative-numbers-fluently/e/adding_negative_numbers', label: 'Adding negative numbers' },
        ] },
        { type: 'next', text: 'Next: the rule that makes subtraction easy — add the opposite.' },
      ],
    },

    /* ───────────────── LESSON 3 ───────────────── */
    {
      id: 'subtract', n: 3, title: 'Subtracting — add the opposite',
      subject: 'Math', minutes: 25, standards: '7.NS.A.1',
      blocks: [
        { type: 'hook', text: 'Here\'s the trick that kills all subtraction fear: <b>subtracting is the same as adding the opposite.</b> Some people say "Keep–Change–Change." Once you flip every subtraction into an addition, you\'re back to Lesson 2 — no new rules.' },
        { type: 'prose', body: '<p><b>Keep–Change–Change:</b> KEEP the first number, CHANGE the minus to a plus, CHANGE the second number to its opposite. Then just add.</p><p><b>Example 1.</b> 3 − 7 → 3 + (−7) = <b>−4</b>.</p><p><b>Example 2.</b> −2 − (−6) → −2 + 6 = <b>+4</b>. (Subtracting a negative flips to adding a positive — the two minuses "cancel.")</p><p><b>Example 3.</b> 5 − (−3) → 5 + 3 = <b>8</b>. Taking away a debt makes you richer.</p><p><b>Why it works:</b> subtracting asks "how far apart, and which direction?" Adding the opposite lands you in the exact same place — it\'s the same move, written so the sign rules from Lesson 2 do all the work.</p><p class="tie-in">🔗 <b>Tie-in — temperature.</b> It\'s −4°F at dawn and the forecast says it will drop 9 more degrees. "Drop 9" is subtract 9: −4 − 9 = −4 + (−9) = <b>−13°F</b>. Now warm up to −4 from −13: −4 − (−13) = −4 + 13 = <b>9 degrees of warming</b>.</p>' },
        { type: 'video', title: 'Subtracting integers (find the missing value)', url: KADD + '/cc-7th-add-and-sub-integers/v/subtracting-integers-find-the-missing-value', label: '▶ Watch on Khan', focus: 'Watch every subtraction get rewritten as "+ the opposite."' },
        { type: 'quiz', questions: [
          { q: '4 − 9 = ?', options: ['−5', '5', '13', '−13'], answer: 0 },
          { q: '−3 − (−8) = ?', options: ['−11', '5', '−5', '11'], answer: 1 },
          { q: '6 − (−2) = ?', options: ['4', '8', '−8', '−4'], answer: 1 },
          { q: 'It is −5°C and drops 6 degrees. New temperature?', options: ['−11°C', '1°C', '11°C', '−1°C'], answer: 0 },
        ] },
        { type: 'practice', title: 'Now you try — on Khan', links: [
          { url: KADD + '/x6b17ba59:subtracting-negative-numbers-fluently/e/adding_and_subtracting_negative_numbers', label: 'Adding & subtracting negative numbers' },
          { url: KADD + '/cc-7th-add-and-sub-integers/e/integer-addition-and-subtraction-2', label: 'Integer addition & subtraction' },
        ] },
        { type: 'next', text: 'Next: absolute value and the distance between two numbers.' },
      ],
    },

    /* ───────────────── LESSON 4 ───────────────── */
    {
      id: 'abs', n: 4, title: 'Absolute value & distance',
      subject: 'Math', minutes: 20, standards: '7.NS.A.1',
      blocks: [
        { type: 'hook', text: '<b>Absolute value is a distance</b> — how far a number sits from zero — and a distance is never negative. |−7| and |7| are both <b>7</b>, because both are 7 steps from 0. That\'s it. The bars just say "how far, forget the direction."' },
        { type: 'prose', body: '<p>Write it with bars: <b>|x|</b> = the distance from 0 to x.</p><ul><li>|−7| = 7, |7| = 7, |0| = 0.</li><li>It\'s always ≥ 0. There is no such thing as a negative absolute value.</li></ul><p><b>Distance between two numbers</b> uses it: the gap between a and b is <b>|a − b|</b>. Between −3 and 5: |5 − (−3)| = |5 + 3| = |8| = <b>8</b>. (Count the hops on the line: from −3 to 5 is 8 steps — checks out.)</p><p><b>Watch the difference from "opposite."</b> The <em>opposite</em> of −7 is 7 (flip the sign). The <em>absolute value</em> of −7 is also 7 (its distance from 0). Same answer here, but they\'re asking different questions.</p><p class="tie-in">🔗 <b>Tie-in — money you owe.</b> If your balance is −$30, the absolute value |−30| = 30 is <em>how much debt</em> you have — the size of it, without the "you owe" direction. Banks care about both: the sign (owe vs. have) and the size (absolute value).</p>' },
        { type: 'quiz', questions: [
          { q: 'What is |−12|?', options: ['−12', '12', '0', '−1'], answer: 1 },
          { q: 'What is the distance between −4 and 3 on the number line?', options: ['1', '7', '−7', '12'], answer: 1 },
          { q: 'Which statement is TRUE?', options: ['|−9| = −9', 'Absolute value can be negative', '|−9| = 9', '|0| = 1'], answer: 2 },
        ] },
        { type: 'practice', title: 'Now you try — on Khan', links: [
          { url: KADD + '/cc-7th-add-and-sub-integers/e/integer-addition-and-subtraction-2', label: 'Integers & absolute value practice' },
        ] },
        { type: 'next', text: 'Next: the sign rules for multiplying and dividing.' },
      ],
    },

    /* ───────────────── LESSON 5 ───────────────── */
    {
      id: 'multiply', n: 5, title: 'Multiplying & dividing negatives',
      subject: 'Math', minutes: 25, standards: '7.NS.A.2',
      blocks: [
        { type: 'hook', text: 'Multiplying and dividing signs is even simpler than adding them, because you ignore the number for a second and just count the minus signs: <b>same signs → positive, different signs → negative.</b> The famous one — <b>negative × negative = positive</b> — is the one to burn in.' },
        { type: 'prose', body: '<p>Do the plain multiplication, then decide the sign:</p><ul><li>positive × positive = <b>positive</b> → (4)(3) = 12</li><li>positive × negative = <b>negative</b> → (4)(−3) = −12</li><li>negative × positive = <b>negative</b> → (−4)(3) = −12</li><li>negative × negative = <b>positive</b> → (−4)(−3) = +12</li></ul><p><b>Division follows the exact same rule.</b> −20 ÷ 4 = −5 (different signs). −20 ÷ (−5) = +4 (same signs).</p><p><b>Why does neg × neg = pos?</b> Multiplying by a negative "flips" the direction. −3 groups of 4 is −12 (flipped once). Flip <em>again</em> with a second negative and you\'re back to positive: (−4)(−3) = +12. Two flips = facing forward.</p><p><b>Counting shortcut for long products:</b> an <em>even</em> number of negative factors → positive; an <em>odd</em> number → negative. (−2)(−3)(−1) has three negatives (odd) → the answer is negative (−6).</p><p class="tie-in">🔗 <b>Tie-in — steady loss over time.</b> If a battery loses 2% per day, that\'s −2 each day. Over 5 days: 5 × (−2) = <b>−10</b>. And "3 days <em>ago</em>" is −3 days, so 3 days ago the change was (−3)(−2) = <b>+6</b> — it was 6 higher back then. Two negatives (going back in time, losing charge) make a positive.</p>' },
        { type: 'video', title: 'Dividing positive & negative numbers', url: KMUL + '/cc-7th-mult-div-negatives/v/dividing-positive-and-negative-numbers', label: '▶ Watch on Khan', focus: 'Same-sign vs. different-sign — the rule is identical for × and ÷.' },
        { type: 'quiz', questions: [
          { q: '(−6)(−4) = ?', options: ['−24', '24', '−10', '10'], answer: 1 },
          { q: '(−7)(3) = ?', options: ['21', '−21', '−4', '4'], answer: 1 },
          { q: '−30 ÷ (−5) = ?', options: ['6', '−6', '−35', '35'], answer: 0 },
          { q: '(−2)(−2)(−2) = ?  (count the negatives)', options: ['8', '−8', '6', '−6'], answer: 1 },
        ] },
        { type: 'practice', title: 'Now you try — on Khan', links: [
          { url: KMUL + '/cc-7th-mult-div-negatives/e/multiplying_and_dividing_negative_numbers', label: 'Multiplying & dividing negative numbers' },
          { url: KMUL + '/cc-7th-mult-div-negatives/e/dividing-negative-numbers', label: 'Dividing negative numbers' },
        ] },
        { type: 'next', text: 'Last skill: putting it together in real problems (with order of operations).' },
      ],
    },

    /* ───────────────── LESSON 6 ───────────────── */
    {
      id: 'wordproblems', n: 6, title: 'Real problems & order of operations',
      subject: 'Math', minutes: 30, standards: '7.NS.A.2',
      blocks: [
        { type: 'hook', text: 'The sign rules only matter if you can pull them out of a real sentence: a temperature that drops, a debt paid off, an elevator going down. And when a problem mixes operations, order of operations still rules — you just carry the signs along for the ride.' },
        { type: 'prose', body: '<p><b>Translating a story into signed numbers</b> is half the battle. Down, below, lose, owe, ago, withdraw → <b>negative</b>. Up, above, gain, deposit, from now → <b>positive</b>.</p><p><b>Example 1 — temperature rate.</b> The temperature falls 3°F each hour for 4 hours: 4 × (−3) = <b>−12°F</b> change. From 10°F, that\'s 10 + (−12) = −2°F.</p><p><b>Example 2 — average of losses.</b> Four plays lost 2, 5, 1, and 4 yards: total −12 yards over 4 plays → −12 ÷ 4 = <b>−3 yards per play</b> on average.</p><p><b>Order of operations with signs.</b> Same PEMDAS, keep the signs:</p><blockquote>−3 − 4 × (−2)</blockquote><p>Multiply first: 4 × (−2) = −8. Now −3 − (−8) = −3 + 8 = <b>5</b>. (Do the × before the −, and rewrite the subtraction as adding the opposite.)</p><p class="tie-in">🔗 <b>Tie-in — the checking account.</b> Balance −$30, then two deposits of $25 each and one $10 purchase: −30 + 2(25) + (−10) = −30 + 50 − 10 = <b>$10</b>. You climbed out of the negative. Every deposit and charge is a signed number, and the running total is just their sum.</p>' },
        { type: 'video', title: 'Interpreting multiplication & division of negatives', url: KMUL + '/cc-7th-mult-div-neg-word-problems/v/interpreting-multiplicationa-and-division-of-negative-numbers', label: '▶ Watch on Khan', focus: 'Watch how a real situation decides each sign before any arithmetic.' },
        { type: 'quiz', questions: [
          { q: 'The temp drops 4° per hour for 3 hours. Total change?', options: ['−12°', '+12°', '−7°', '−1°'], answer: 0 },
          { q: 'Balance −$20, then a $50 deposit. New balance?', options: ['−$70', '$30', '$70', '−$30'], answer: 1 },
          { q: 'Evaluate: −2 + 3 × (−4)', options: ['−14', '−4', '4', '−20'], answer: 0 },
          { q: 'Five plays lose a total of 15 yards. Average per play?', options: ['−3 yards', '3 yards', '−10 yards', '−75 yards'], answer: 0 },
        ] },
        { type: 'practice', title: 'Now you try — on Khan', links: [
          { url: KMUL + '/cc-7th-mult-div-neg-word-problems/e/negative-number-word-problems-1', label: 'Negative number word problems' },
          { url: KADD + '/cc-7th-add-and-sub-integers/e/integer-addition-and-subtraction-2', label: 'Mixed integer practice' },
        ] },
        { type: 'next', text: 'Last stop: pull it together and check you\'re ready.' },
      ],
    },

    /* ───────────────── LESSON 7 · REFLECTION ───────────────── */
    {
      id: 'reflect', n: 7, title: 'Ready for the test?',
      subject: 'Math', minutes: 25, standards: '7.NS.A.2',
      blocks: [
        { type: 'prose', body: '<p>You\'ve covered every operation with negative numbers. Before the Khan quiz/test, look back at your day-one notes and check what stuck.</p>' },
        { type: 'kwlback', prompt: 'Here\'s what you wrote on day one:' },
        { type: 'vocabsort', title: 'Which words do you own now?', note: 'Be honest. The fuzzy ones are just your study list.' },
        { type: 'rubric', title: 'Can you do each of these?', items: [
          'Place negatives on a number line and compare them (−2 > −9).',
          'Add signed numbers (same sign vs. different sign).',
          'Subtract by adding the opposite (Keep–Change–Change).',
          'Find absolute value and the distance between two numbers.',
          'Multiply & divide with the sign rules (neg × neg = pos).',
          'Translate a real story into signed numbers and evaluate it.',
        ] },
        { type: 'practice', title: 'Prove it — the Khan quizzes & unit test', note: 'Both Khan units have quizzes and a unit test built in. Aim for the blue "Mastered" bar on each.', links: [
          { url: KADD, label: 'Add & subtract negatives (quizzes + unit test)' },
          { url: KMUL, label: 'Multiply & divide negatives (quizzes + unit test)' },
        ] },
        { type: 'done', text: 'That\'s the unit. Signed numbers are the tools every equation you\'ll solve next is built from — you\'ll use them constantly. Next up: expressions & equations.' },
      ],
    },

  ],
});
})();
