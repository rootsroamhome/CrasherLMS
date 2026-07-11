/**
 * unit-math-rates.js — Math Unit 2: Rates & Percentages
 *
 * Same build as unit-math-proportions.js (hook → explainer → vocab → our quick
 * check → Khan practice), Khan-scaffolded. This unit spans two Khan 7th-grade
 * areas, so K is the course root and each link carries its full path:
 *   • rates / unit rates  → cc-7th-ratio-proportion
 *   • percents            → cc-7th-fractions-decimals / cc-7th-percent-word-problems
 * All URLs below were verified via search (July 2026), not guessed.
 * track:'math' → gold theme; standards auto-check the 7.RP.* / 7.NS.* rows.
 */

window.HS_UNITS = window.HS_UNITS || [];
(function () {
const K = 'https://www.khanacademy.org/math/cc-seventh-grade-math';
const KRATE = K + '/cc-7th-ratio-proportion';
const KPCT  = K + '/cc-7th-fractions-decimals/cc-7th-percent-word-problems';

window.HS_UNITS.push({
  id: 'math-rates',
  short: 'Math · Rates & %',
  title: 'Rates & Percentages',
  track: 'math',
  eq: 'How does one skill — "per 100" — let you handle sales, tips, taxes, and every "what percent?" question life throws at you?',

  parent: {
    hotspots: [
      'A <b>percent is just a fraction out of 100</b>. 30% means 30/100 means 0.30. If he can slide between percent → decimal → fraction in his head, the whole unit gets easy. The move to drill: <b>"of" means multiply</b>, and to use a percent you turn it into a decimal first (30% → 0.30).',
      'The single most useful trick: <b>percent OF a number = decimal × number.</b> 30% of 40 is 0.30 × 40 = 12. Everything — tax, tip, discount, markup — is a version of this.',
      'The classic trap in <b>percent change</b>: you divide by the <b>original</b> amount, not the new one. Went from 20 to 25? The change is 5, and 5 ÷ <b>20</b> = 25% increase. Dividing by 25 is the mistake to catch.',
      'Reverse problems ("15 is 25% of what?") flip kids up. The fix is a proportion or one division: <b>part ÷ percent-as-decimal = whole</b>, so 15 ÷ 0.25 = 60. Have him ask "am I looking for the part, the percent, or the whole?" first.',
    ],
    activities: [
      { tier: 'Small', title: 'Oregon has no sales tax — so use California', detail: 'Oregon charges no sales tax, which is a great fact to exploit. Plan a pretend shopping trip across the border (or an online order that ships to CA) and add the ~7.25%+ tax. Then figure a 18–20% tip on a restaurant bill here in Medford. Real numbers, real reasons.', cost: 'Free', time: '30 min' },
      { tier: 'Medium', title: 'Best-deal detective at the store', detail: 'At WinCo or the co-op, have him find unit prices (price ÷ ounces) on three versions of the same thing and crown the real winner — bigger isn\'t always cheaper. Then hunt a "% off" tag and compute the actual sale price before you get to the register.', cost: 'Free', time: '1 hour' },
      { tier: 'Large', title: 'Price a real purchase, all in', detail: 'Pick something he actually wants (ebike part, game). Find the sticker price, apply any discount, add shipping, and — if it ships from a taxed state — the tax, to get the true out-the-door number. Compare two sellers and decide. This is 7.E.ES.3 (budget for a large purchase), too.', cost: 'Varies', time: 'Across a week' },
    ],
  },

  vocab: {
    mustOwn: [
      { term: 'percent',          def: 'A number "out of 100." 30% means 30 per 100, which is 0.30.' },
      { term: 'rate',             def: 'A ratio comparing two different units — like $6 for 3 pounds.' },
      { term: 'unit rate',        def: 'A rate written "per 1" — $2 per pound, 55 miles per hour.' },
      { term: 'percent increase', def: 'How much something grew, as a percent of the ORIGINAL amount.' },
      { term: 'percent decrease', def: 'How much something shrank, as a percent of the ORIGINAL amount.' },
      { term: 'discount',         def: 'An amount taken OFF a price, usually given as a percent.' },
      { term: 'markup',           def: 'An amount ADDED to a cost to set a selling price.' },
      { term: 'sales tax',        def: 'A percent added at the register (Oregon has none; most states do).' },
      { term: 'tip (gratuity)',   def: 'A percent of a bill you add for service — usually 15–20%.' },
      { term: 'commission',       def: 'Pay that is a percent of the sales someone makes.' },
    ],
    frayer: [
      {
        term: 'percent',
        definition: 'A way of writing a part-to-whole comparison as a number out of 100. To use it in arithmetic you rewrite it as a decimal (divide by 100) or a fraction (over 100).',
        examples: ['45% = 0.45 = 45/100', '7% sales tax = 0.07', '100% = the whole thing = 1'],
        nonexamples: ['Using 30% as "30" in a calculation (you must make it 0.30)', 'A raw count like "30 students" (that is not out of 100)'],
        sentence: 'To take a percent of something, turn the percent into a decimal and multiply.',
      },
      {
        term: 'percent change (increase/decrease)',
        definition: 'The size of a change compared to the ORIGINAL amount, written as a percent. Formula: change ÷ original × 100. Positive means increase, negative means decrease.',
        examples: ['20 → 25 is 5/20 = 25% increase', '50 → 40 is 10/50 = 20% decrease', 'A price that doubles went up 100%'],
        nonexamples: ['Dividing the change by the NEW amount', 'Just saying "it went up by 5" (that is the change, not the percent)'],
        sentence: 'Always divide the change by where you STARTED, not where you ended up.',
      },
    ],
  },

  cards: [

    /* ───────────────── LESSON 1 ───────────────── */
    {
      id: 'launch', n: 1, title: 'What a percent really is',
      subject: 'Math', minutes: 25, standards: '7.NS.A.3',
      blocks: [
        { type: 'hook', text: 'A store sign says <b>"25% OFF."</b> A menu says <b>"20% gratuity added."</b> A phone battery reads <b>82%.</b> All three are the same idea wearing different clothes: a number <b>out of 100</b>. Crack that one idea and every percent problem for the rest of your life turns into simple multiplication.' },
        { type: 'prose', body: '<p><b>Percent means "per 100."</b> The word literally comes from <em>per centum</em> — Latin for "by the hundred." So 30% is 30 out of every 100, which is the fraction 30/100, which is the decimal <b>0.30</b>. Same number, three outfits:</p><table style="border-collapse:collapse; margin:8px 0;"><tr><td style="border:1px solid #ccc; padding:6px 14px;"><b>Percent</b></td><td style="border:1px solid #ccc; padding:6px 14px;">30%</td><td style="border:1px solid #ccc; padding:6px 14px;">7%</td><td style="border:1px solid #ccc; padding:6px 14px;">150%</td><td style="border:1px solid #ccc; padding:6px 14px;">4.5%</td></tr><tr><td style="border:1px solid #ccc; padding:6px 14px;"><b>Decimal</b></td><td style="border:1px solid #ccc; padding:6px 14px;">0.30</td><td style="border:1px solid #ccc; padding:6px 14px;">0.07</td><td style="border:1px solid #ccc; padding:6px 14px;">1.50</td><td style="border:1px solid #ccc; padding:6px 14px;">0.045</td></tr></table><p><b>To go percent → decimal, slide the point two places left</b> (divide by 100). To go back, slide it two places right. That\'s the whole conversion.</p><p><b>The one move that runs the unit:</b> the word "<b>of</b>" means <b>multiply</b>, and you multiply with the <em>decimal</em>. So "25% of 80" = 0.25 × 80 = <b>20</b>.</p><p><b>Example 2.</b> A phone at 82% battery, and each percent is worth about 6 minutes of video. How long can it play? 82% = 0.82, and 0.82 × (100% time)… you\'ll build that into real money problems next.</p><p class="tie-in">🔗 <b>Tie-in — Metals unit:</b> alloys are described in percents. <b>Sterling silver is 92.5% silver</b> (the rest copper). <b>Bronze is about 88% copper.</b> So a 200-gram sterling bracelet holds 0.925 × 200 = <b>185 grams</b> of pure silver. Percents are just how metalworkers state a recipe.</p>' },
        { type: 'flashcards', title: 'Meet the words first', note: 'Tap a card to flip it. These come back all unit long.' },
        { type: 'video', title: 'Solving percent problems', url: KPCT + '/v/solving-percent-problems', label: '▶ Watch on Khan', focus: 'Watch how every percent gets turned into a decimal before anything is multiplied.' },
        { type: 'kwl', prompt: 'Quick gut-check before we dig in — no wrong answers.',
          klabel: 'Where do I already see percents in real life?',
          wlabel: 'What do I want to be able to do fast by the end?' },
        { type: 'next', text: 'Next: rates and unit rates — how to crown the real best deal.' },
      ],
    },

    /* ───────────────── LESSON 2 ───────────────── */
    {
      id: 'unit-rate', n: 2, title: 'Rates & unit rates — find the best deal',
      subject: 'Math', minutes: 25, standards: '7.RP.A.1',
      blocks: [
        { type: 'hook', text: 'Two bags of the same trail mix: one is $6 for 3 pounds, the other $10 for 4 pounds. The bigger bag looks like the deal — but is it? The only way to know for sure is to get both down to the <b>same "per 1"</b> and compare.' },
        { type: 'prose', body: '<p>A <b>rate</b> compares two different units ($6 for 3 lb). A <b>unit rate</b> rewrites it "per 1" by dividing:</p><ul><li>Bag A: $6 ÷ 3 lb = <b>$2.00 per pound</b>.</li><li>Bag B: $10 ÷ 4 lb = <b>$2.50 per pound</b>.</li></ul><p>So Bag A is actually the better deal — cheaper per pound — even though Bag B is bigger. <b>Unit rate is the great equalizer:</b> once everything is "per 1," you can compare anything.</p><p><b>Example 2 — speed.</b> A car goes 150 miles on 3 gallons → 150 ÷ 3 = <b>50 miles per gallon</b>. Another goes 120 on 2 gallons → 60 mpg. The second is more efficient.</p><p><b>Example 3 — ratios of fractions.</b> Unit rates work even with fractions: if you walk ½ mile in ¼ hour, your speed is ½ ÷ ¼ = <b>2 miles per hour</b>. (Dividing by a fraction = multiply by its flip.)</p><p class="tie-in">🔗 <b>Tie-in — your ebike:</b> "miles per charge" is a unit rate. If one battery gives 40 miles per charge and another gives 25, the first goes farther on every single charge. Same math as the trail mix — just divide to get "per 1."</p>' },
        { type: 'quiz', questions: [
          { q: '$12 for 4 pounds of apples. What is the unit rate?', options: ['$4 per pound', '$3 per pound', '$48 per pound', '$8 per pound'], answer: 1 },
          { q: 'Which is the better deal? A: $8 for 2 lb.  B: $15 for 5 lb.', options: ['A ($4/lb)', 'B ($3/lb)', 'They are equal', 'Cannot tell'], answer: 1 },
          { q: 'You bike ½ mile in ¼ hour. Your unit rate (speed) is…', options: ['2 miles per hour', '½ mile per hour', '¼ mile per hour', '8 miles per hour'], answer: 0 },
        ] },
        { type: 'practice', title: 'Now you try — on Khan', note: 'Unit rates live in Khan\'s Proportional relationships unit. Do the quick check first.', links: [
          { url: KRATE, label: 'Rates & proportional relationships (unit rates)' },
        ] },
        { type: 'next', text: 'Next: the core move — finding a percent OF a number.' },
      ],
    },

    /* ───────────────── LESSON 3 ───────────────── */
    {
      id: 'percent-of', n: 3, title: 'Finding a percent of a number',
      subject: 'Math', minutes: 25, standards: '7.RP.A.3',
      blocks: [
        { type: 'hook', text: 'Here is the engine of the whole unit, and it is one line: <b>percent OF a number = (decimal) × (number).</b> "18% of 50" is just 0.18 × 50 = 9. Master this and tax, tip, and discounts are the same problem in a costume.' },
        { type: 'prose', body: '<p>Two steps, every time:</p><ol><li>Turn the percent into a decimal (slide the point two left).</li><li>Multiply it by the number. ("of" = ×.)</li></ol><p><b>Example 1.</b> 25% of 80 → 0.25 × 80 = <b>20</b>.</p><p><b>Example 2.</b> 8% of 50 → 0.08 × 50 = <b>4</b>. (That\'s what an 8% sales tax on a $50 order adds.)</p><p><b>Example 3 — mental-math shortcut.</b> 10% is easy: just move the decimal one place (10% of 70 = 7). Then build from it: 20% is double that (14), 5% is half (3.5), 15% = 10% + 5% (10.5). This is exactly how people tip in their heads.</p><p><b>Sanity check:</b> a percent under 100% always gives you <em>less</em> than you started with; over 100% gives you more. If 25% of 80 came out bigger than 80, you slipped a decimal.</p><p class="tie-in">🔗 <b>Tie-in — no sales tax in Oregon:</b> here your total <em>is</em> the sticker price. But order something shipped to a friend in California (~7.25% tax) and 0.0725 × the price is tacked on. Oregon\'s missing tax is worth real money.</p>' },
        { type: 'video', title: 'Percent word problem (worked example)', url: KPCT + '/v/percent-word-problem-examples', label: '▶ Watch on Khan', focus: 'Watch the percent become a decimal before any multiplying happens.' },
        { type: 'quiz', questions: [
          { q: 'What is 20% of 60?', options: ['12', '3', '120', '40'], answer: 0 },
          { q: 'A $50 order has 8% sales tax. How many dollars is the tax?', options: ['$0.40', '$4', '$8', '$58'], answer: 1 },
          { q: 'Quick mental math: what is 10% of 130?', options: ['1.3', '13', '130', '1300'], answer: 1 },
          { q: '15% tip on a $40 meal (10% is $4, 5% is $2)…', options: ['$4', '$6', '$8', '$60'], answer: 1 },
        ] },
        { type: 'practice', title: 'Now you try — on Khan', links: [
          { url: KPCT + '/e/equivalent-expressions-with-percent-problems', label: 'Equivalent expressions with percent problems' },
        ] },
        { type: 'next', text: 'Next: when a price goes UP or DOWN — percent change.' },
      ],
    },

    /* ───────────────── LESSON 4 ───────────────── */
    {
      id: 'percent-change', n: 4, title: 'Percent increase & decrease',
      subject: 'Math', minutes: 30, standards: '7.RP.A.3',
      blocks: [
        { type: 'hook', text: 'A game was $60, now it\'s $45. "How big a deal is that?" isn\'t the $15 — it\'s the <b>percent</b>. And there\'s one trap almost everyone falls into: you divide by where you <b>started</b>, never where you ended.' },
        { type: 'prose', body: '<p><b>Percent change formula:</b></p><blockquote style="font-size:1.15rem; text-align:center; font-weight:700;">percent change = (change ÷ ORIGINAL) × 100</blockquote><p><b>Example 1 — increase.</b> A plant goes from 20 cm to 25 cm. Change = 5. 5 ÷ <b>20</b> = 0.25 = <b>25% increase</b>.</p><p><b>Example 2 — decrease.</b> That $60 game is now $45. Change = 15. 15 ÷ <b>60</b> = 0.25 = <b>25% decrease</b>. (Notice: same 25%, but off the original 60.)</p><p><b>The fast way for the new price — multipliers.</b> A 25% discount means you keep 75%, so new = 0.75 × 60 = <b>$45</b>. A 25% <em>increase</em> means new = 1.25 × original. Turning "up 25%" into "×1.25" and "down 25%" into "×0.75" saves a whole step.</p><p><b>The trap, spelled out:</b> for the game, dividing 15 ÷ 45 (the new price) gives 33% — wrong. Percent change is always measured against the <b>starting</b> amount.</p>' },
        { type: 'video', title: 'Percent word problem: guavas', url: KPCT + '/v/another-percent-word-problem', label: '▶ Watch on Khan', focus: 'Watch which number they treat as the "whole" to divide by.' },
        { type: 'quiz', questions: [
          { q: 'A price goes from $40 to $50. What is the percent increase?', options: ['20%', '25%', '10%', '80%'], answer: 1 },
          { q: 'A $80 jacket is 25% off. Using the multiplier, the sale price is…', options: ['0.75 × 80 = $60', '0.25 × 80 = $20', '1.25 × 80 = $100', '$55'], answer: 0 },
          { q: 'Attendance dropped from 200 to 150. The percent DECREASE is…', options: ['50%', '25%', '33%', '75%'], answer: 1 },
          { q: 'The single most common mistake in percent change is…', options: ['Adding instead of subtracting', 'Dividing by the NEW amount instead of the original', 'Forgetting to multiply by 100', 'Using a fraction'], answer: 1 },
        ] },
        { type: 'practice', title: 'Now you try — on Khan', links: [
          { url: KPCT + '/a/multi-step-ratio-and-proportion-problems', label: 'Multi-step ratio & percent problems (review + practice)' },
          { url: KPCT + '/e/equivalent-expressions-with-percent-problems', label: 'Percent as a multiplier (equivalent expressions)' },
        ] },
        { type: 'next', text: 'Next: the real-money version — tax, tip, discount, markup, commission.' },
      ],
    },

    /* ───────────────── LESSON 5 ───────────────── */
    {
      id: 'money', n: 5, title: 'Tax, tip, discount, markup & commission',
      subject: 'Math', minutes: 30, standards: '7.RP.A.3',
      blocks: [
        { type: 'hook', text: 'Tax, tip, discount, markup, commission — five scary-sounding words, one skill. Every single one is "find a percent of a number, then add it on or take it off." You already know how. This lesson just names them.' },
        { type: 'prose', body: '<p>They split into two families:</p><p><b>ADD it on:</b></p><ul><li><b>Sales tax</b> — a percent added at the register. $50 meal, 8% tax → +$4 → <b>$54</b>.</li><li><b>Tip (gratuity)</b> — a percent you add for service, usually 15–20%. 20% of $50 = $10.</li><li><b>Markup</b> — what a store adds to its cost to make a profit. A shop pays $20, marks it up 60% → +$12 → sells for <b>$32</b>.</li><li><b>Commission</b> — pay that is a percent of sales. Sell $2,000 of gear at 5% commission → earn 0.05 × 2000 = <b>$100</b>.</li></ul><p><b>TAKE it off:</b></p><ul><li><b>Discount</b> — a percent off. $80 boots, 30% off → −$24 → pay <b>$56</b> (or just 0.70 × 80).</li></ul><p><b>Multi-step warning (tests love this):</b> a $40 shirt, 25% off, <em>then</em> add tax. Do the discount FIRST (0.75 × 40 = $30), then tax on the $30 — not on the original $40.</p><p class="tie-in">🔗 <b>Tie-in — economics (7.E.IC.8):</b> a sales tax is a government adding a percent to what you buy. Oregon chose not to have one; most states did. When you shop online or travel, that policy choice shows up as real dollars on your receipt.</p>' },
        { type: 'video', title: 'Percent problems: tax, discount & tip', url: KPCT + '/v/tax-discount-and-tip-examples', label: '▶ Watch on Khan', focus: 'Watch the order of operations when a problem has more than one percent step.' },
        { type: 'quiz', questions: [
          { q: 'A $25 meal with a 20% tip. Total to pay?', options: ['$30', '$45', '$27', '$20'], answer: 0 },
          { q: '$120 boots at 40% off. Sale price?', options: ['$48', '$72', '$80', '$160'], answer: 1 },
          { q: 'You sell $3,000 in product at 5% commission. You earn…', options: ['$15', '$150', '$300', '$1,500'], answer: 1 },
          { q: 'A $40 shirt is 25% off, then 10% tax is added. You pay…', options: ['$30.00', '$33.00', '$34.00', '$26.00'], answer: 1 },
        ] },
        { type: 'practice', title: 'Now you try — on Khan', links: [
          { url: KPCT + '/e/discount_tax_and_tip_word_problems', label: 'Discount, tax & tip word problems' },
          { url: KPCT + '/e/tax-and-tip-word-problems', label: 'Tax and tip word problems' },
          { url: KPCT + '/e/markup_and_commission_word_problems', label: 'Markup & commission word problems' },
        ] },
        { type: 'next', text: 'Last skill: the backwards questions — "___ is what percent of ___?"' },
      ],
    },

    /* ───────────────── LESSON 6 ───────────────── */
    {
      id: 'reverse', n: 6, title: 'Working backwards — find the whole or the percent',
      subject: 'Math', minutes: 30, standards: '7.RP.A.3',
      blocks: [
        { type: 'hook', text: '"You got 18 out of 24 — what percent is that?" "A $12 tip was 20% of the bill — so how much was dinner?" These flip the problem around. The move: figure out which piece is missing — the <b>part</b>, the <b>percent</b>, or the <b>whole</b> — then solve.' },
        { type: 'prose', body: '<p>Every percent problem hides the same equation:</p><blockquote style="font-size:1.15rem; text-align:center; font-weight:700;">part = percent × whole</blockquote><p>Whichever one is missing, you solve for it.</p><p><b>Missing the PERCENT.</b> "18 is what percent of 24?" → percent = part ÷ whole = 18 ÷ 24 = 0.75 = <b>75%</b>.</p><p><b>Missing the WHOLE.</b> "A $12 tip is 20% of the bill." → whole = part ÷ percent = 12 ÷ 0.20 = <b>$60</b>. (Dinner was $60.)</p><p><b>Missing the PART</b> is just Lesson 3: percent × whole.</p><p><b>Proportion version</b> (some people like this better): part/whole = percent/100. For "18 is what percent of 24?": 18/24 = x/100, cross-multiply → 24x = 1800 → x = 75.</p><p><b>Reasonableness:</b> if "15 is 25% of what?" gave you an answer <em>smaller</em> than 15, stop — the whole has to be bigger than a 25% part. (It\'s 60.)</p>' },
        { type: 'video', title: 'Percent word problem (finding the whole)', url: KPCT + '/v/percent-word-problem-examples', label: '▶ Watch on Khan', focus: 'Watch them decide which quantity is unknown before writing anything.' },
        { type: 'quiz', questions: [
          { q: '12 is what percent of 48?', options: ['25%', '4%', '40%', '400%'], answer: 0 },
          { q: 'A $9 tip was 15% of the bill. The bill was…', options: ['$60', '$135', '$24', '$1.35'], answer: 0 },
          { q: '30 is 20% of what number?', options: ['6', '150', '50', '600'], answer: 1 },
          { q: 'You answered 21 of 25 questions right. What percent is that?', options: ['84%', '75%', '80%', '4%'], answer: 0 },
        ] },
        { type: 'practice', title: 'Now you try — on Khan', links: [
          { url: KPCT + '/e/markup_and_commission_word_problems', label: 'Percent word problems (mixed)' },
          { url: KPCT, label: 'Open the full Percent word problems topic' },
        ] },
        { type: 'next', text: 'Last stop: pull it together and check you\'re ready.' },
      ],
    },

    /* ───────────────── LESSON 7 · REFLECTION ───────────────── */
    {
      id: 'reflect', n: 7, title: 'Ready for the test?',
      subject: 'Math', minutes: 25, standards: '7.RP.A.3',
      blocks: [
        { type: 'prose', body: '<p>You\'ve covered rates and the whole percent toolkit. Before the Khan quiz/test, look back at your day-one notes and check what stuck.</p>' },
        { type: 'kwlback', prompt: 'Here\'s what you wrote on day one:' },
        { type: 'vocabsort', title: 'Which words do you own now?', note: 'Be honest. The fuzzy ones are just your study list.' },
        { type: 'rubric', title: 'Can you do each of these?', items: [
          'Switch a percent to a decimal and back.',
          'Find a unit rate and use it to pick the better deal.',
          'Find a percent of a number (tax, tip, discount, markup, commission).',
          'Compute a percent increase or decrease — dividing by the ORIGINAL.',
          'Work backwards to find the whole or the percent.',
        ] },
        { type: 'practice', title: 'Prove it — the Khan quizzes & unit test', note: 'Khan\'s quizzes and unit test are built into the unit page. Aim for the blue "Mastered" bar.', links: [
          { url: KPCT, label: 'Percent word problems (quizzes + practice)' },
          { url: K + '/cc-7th-fractions-decimals', label: 'Open the full Khan unit' },
        ] },
        { type: 'done', text: 'That\'s the unit. Percents are proportional reasoning in disguise — the same y = kx idea from last unit, now doing your taxes and tips. Next up: negative numbers.' },
      ],
    },

  ],
});
})();
