/**
 * unit-math-geometry.js — Math Unit 5: Geometry
 *
 * Same build as the other math units (hook → explainer → vocab → our quick check
 * → Khan practice), Khan-scaffolded. Everything lives in one Khan 7th-grade unit
 * ("Geometry", cc-7th-geometry), so K points straight at it. All URLs verified
 * via search (July 2026). track:'math' → gold theme; standards auto-check 7.GM.*.
 */

window.HS_UNITS = window.HS_UNITS || [];
(function () {
const K = 'https://www.khanacademy.org/math/cc-seventh-grade-math/cc-7th-geometry';

window.HS_UNITS.push({
  id: 'math-geometry',
  short: 'Math · Geometry',
  title: 'Geometry',
  track: 'math',
  eq: 'How do scale, angles, π, and volume let you measure and build real things — from a map to a wheel to a box?',

  parent: {
    hotspots: [
      'Scale is just proportional reasoning (last-and-first units) wearing a ruler: a <b>scale factor</b> multiplies every length. The subtle part: when you scale lengths by k, <b>area</b> scales by <b>k²</b>. Double a drawing and its area quadruples — that surprises almost everyone.',
      'The two circle formulas are worth memorizing cold: <b>circumference = π·d</b> (or 2πr) and <b>area = π·r²</b>. The classic mix-ups: using the diameter where the radius belongs (area needs the radius), and forgetting area gets <em>squared</em> units.',
      'Angle relationships are mostly two facts: <b>complementary angles add to 90°, supplementary add to 180°</b>, and <b>vertical angles are equal</b>. Once he sees those, "find the missing angle" becomes an equation — which connects straight back to the equations unit.',
      'Volume vs. surface area is the perennial confusion. <b>Volume</b> is the space inside (cubic units — how much it holds); <b>surface area</b> is the skin (square units — how much wrapping paper). Ask "filling it or wrapping it?" every time.',
    ],
    activities: [
      { tier: 'Small', title: 'Measure a wheel, find π in the wild', detail: 'Wrap a string around a bike wheel or a can (circumference), then measure straight across (diameter). Divide C ÷ d — you\'ll get about 3.14 every time, on every round object. Discovering π himself beats being told it.', cost: 'Free', time: '20–30 min' },
      { tier: 'Medium', title: 'Draw the house (or garden) to scale', detail: 'Pick a room or a garden bed, measure it, choose a scale (say 1 inch = 2 feet), and draw it on graph paper. Then compute the real area from the drawing. Great lead-in to any building or planting project around the house.', cost: 'Free', time: '1 hour' },
      { tier: 'Large', title: 'How far does one pedal stroke take you?', detail: 'His ebike wheel is about 26–27" across. Find the circumference (π·d), then figure how many wheel rotations make a mile (5,280 ft ÷ circumference). A little surprising, very real, and pure 7.GM.B.3.', cost: 'Free', time: '45–60 min' },
    ],
  },

  vocab: {
    mustOwn: [
      { term: 'scale factor',   def: 'The number every length is multiplied by to enlarge or shrink a figure.' },
      { term: 'scale drawing',  def: 'A drawing that keeps the same shape as the real thing, at a set ratio.' },
      { term: 'radius',         def: 'The distance from the center of a circle to its edge (half the diameter).' },
      { term: 'diameter',       def: 'The distance all the way across a circle through the center (twice the radius).' },
      { term: 'circumference',  def: 'The distance around a circle — its "perimeter." C = π·d.' },
      { term: 'pi (π)',         def: 'The constant ratio circumference ÷ diameter, about 3.14, for every circle.' },
      { term: 'area',           def: 'The space inside a 2-D shape, measured in square units.' },
      { term: 'volume',         def: 'The space inside a 3-D solid, measured in cubic units.' },
      { term: 'surface area',   def: 'The total area of all the faces (the "skin") of a 3-D solid.' },
      { term: 'complementary / supplementary', def: 'Two angles that add to 90° (complementary) or 180° (supplementary).' },
    ],
    frayer: [
      {
        term: 'pi (π)',
        definition: 'The ratio of a circle\'s circumference to its diameter — the same number (≈ 3.14159) for every circle, no matter its size. It links a circle\'s width to its distance-around and its area.',
        examples: ['C = π·d', 'A = π·r²', 'C ÷ d ≈ 3.14 for any round object'],
        nonexamples: ['A whole number (it never ends or repeats)', 'Something that changes for bigger circles (it doesn\'t)'],
        sentence: 'Because π is constant, one measurement of a circle lets you find the rest.',
      },
      {
        term: 'volume vs. surface area',
        definition: 'Volume is the amount of space inside a 3-D solid (cubic units — what it holds). Surface area is the combined area of all its faces (square units — the skin you\'d paint or wrap).',
        examples: ['Volume of a box = length × width × height', 'Surface area of a box = 2(lw + lh + wh)', 'Water a tank holds = volume'],
        nonexamples: ['Measuring volume in square units', 'Using surface area to find how much a container holds'],
        sentence: 'Ask "am I filling it (volume) or wrapping it (surface area)?" before you pick a formula.',
      },
    ],
  },

  cards: [

    /* ───────────────── LESSON 1 ───────────────── */
    {
      id: 'launch', n: 1, title: 'Scale drawings — shrinking the world to fit',
      subject: 'Math', minutes: 25, standards: '7.GM.A.1',
      blocks: [
        { type: 'hook', text: 'A map of the whole Rogue Valley fits in your pocket. A blueprint of a house fits on one page. Neither lies about the shape — they just shrink every distance by the <b>same factor</b>. That\'s a scale drawing, and it\'s the proportional reasoning from Unit 1 with a ruler attached.' },
        { type: 'prose', body: '<p>A <b>scale drawing</b> keeps a figure\'s shape but changes its size by a fixed ratio, the <b>scale</b> — like "1 inch = 4 feet." Every real length is the drawing length times the same number.</p><p><b>Example 1 — reading a scale.</b> Scale: 1 in = 4 ft. A wall measures 3 in on the blueprint. Real length = 3 × 4 = <b>12 ft</b>.</p><p><b>Example 2 — going the other way.</b> Same scale, a real fence is 20 ft long. On the drawing: 20 ÷ 4 = <b>5 in</b>.</p><p><b>It\'s a proportion.</b> You can always set it up as one: drawing/real = 1/4 = 3/x. That\'s the exact skill from the Proportional Relationships unit — scale is just a constant of proportionality (here k = 4 ft per inch).</p><p class="tie-in">🔗 <b>Tie-in — Proportional Relationships (Unit 1):</b> the "scale factor" IS a constant of proportionality. On a 1 in = 4 ft map, real distance = 4 × (map distance), i.e. y = 4x. Every map you\'ve ever read runs on y = kx.</p>' },
        { type: 'flashcards', title: 'Meet the words first', note: 'Tap a card to flip it. These come back all unit long.' },
        { type: 'video', title: 'Scale drawings (worked examples)', url: K + '/cc-7th-scale-drawings/v/scaled-drawings-worked-examples', label: '▶ Watch on Khan', focus: 'Watch them convert between drawing length and real length with the scale.' },
        { type: 'kwl', prompt: 'Quick gut-check before we dig in — no wrong answers.',
          klabel: 'Where have I used a map, blueprint, or model?',
          wlabel: 'What do I want to be able to measure or build by the end?' },
        { type: 'next', text: 'Next: the twist — what scaling does to AREA.' },
      ],
    },

    /* ───────────────── LESSON 2 ───────────────── */
    {
      id: 'scale-area', n: 2, title: 'Scale & area — the squared surprise',
      subject: 'Math', minutes: 25, standards: '7.GM.A.1',
      blocks: [
        { type: 'hook', text: 'Double every side of a drawing and you might guess the area doubles. It doesn\'t — it <b>quadruples</b>. Scale the lengths by 3 and the area jumps by 9. Area scales by the factor <b>squared</b>, and that catches nearly everyone.' },
        { type: 'prose', body: '<p>If lengths scale by a factor <b>k</b>, then <b>area scales by k²</b> (because area is length × width, and both got multiplied by k).</p><p><b>Example.</b> A rectangle is 2 cm × 3 cm, area 6 cm². Scale it by k = 2 → it becomes 4 cm × 6 cm, area <b>24 cm²</b>. Check: 6 × 2² = 6 × 4 = 24. ✓</p><p><b>Example 2 — a scale factor of 3.</b> A shape with area 5 in² scaled by 3 has area 5 × 3² = 5 × 9 = <b>45 in²</b>.</p><p><b>Why it matters in real life:</b> a pizza with double the diameter isn\'t twice the food — it\'s four times. A map at half the scale shows one-quarter the area on the page.</p>' },
        { type: 'video', title: 'Scale drawings & area', url: K + '/cc-7th-scale-drawings/v/scaled-drawings-worked-examples', label: '▶ Watch on Khan', focus: 'Watch how the area changes by the square of the length factor.' },
        { type: 'quiz', questions: [
          { q: 'Scale: 1 in = 5 ft. A room is 4 in wide on the plan. Real width?', options: ['20 ft', '9 ft', '1.25 ft', '45 ft'], answer: 0 },
          { q: 'You scale a figure\'s lengths by 3. Its area is multiplied by…', options: ['3', '6', '9', '12'], answer: 2 },
          { q: 'A 2 cm × 4 cm rectangle (area 8 cm²) is scaled by 2. New area?', options: ['16 cm²', '32 cm²', '24 cm²', '64 cm²'], answer: 1 },
          { q: 'A real fence is 30 ft. Scale is 1 in = 6 ft. Drawing length?', options: ['5 in', '180 in', '24 in', '36 in'], answer: 0 },
        ] },
        { type: 'practice', title: 'Now you try — on Khan', links: [
          { url: K + '/cc-7th-scale-drawings/e/interpreting-scale-drawings', label: 'Interpret scale drawings' },
          { url: K + '/cc-7th-scale-drawings/e/relate-scale-drawings-to-area', label: 'Relate scale drawings to area' },
        ] },
        { type: 'next', text: 'Next: when do three measurements actually make a triangle?' },
      ],
    },

    /* ───────────────── LESSON 3 ───────────────── */
    {
      id: 'triangles', n: 3, title: 'Building triangles — one, many, or none',
      subject: 'Math', minutes: 25, standards: '7.GM.A.2',
      blocks: [
        { type: 'hook', text: 'Give someone three side lengths and say "make a triangle." Sometimes there\'s exactly one triangle, sometimes many, sometimes it\'s <b>impossible</b>. Three sticks of 2, 2, and 10 inches will never close into a triangle — and there\'s a rule for why.' },
        { type: 'prose', body: '<p><b>The Triangle Inequality:</b> any two sides must add up to MORE than the third side, or the triangle can\'t close.</p><ul><li>3, 4, 5 → 3 + 4 = 7 &gt; 5 ✓ (works)</li><li>2, 2, 10 → 2 + 2 = 4, which is not &gt; 10 ✗ (impossible — the short sides can\'t reach)</li></ul><p><b>How much info pins down ONE triangle?</b></p><ul><li>All <b>three sides</b> (SSS), or two sides and the angle between them (SAS), or two angles and a side (ASA) → usually <b>exactly one</b> triangle.</li><li><b>Three angles only</b> (like 60°-60°-60°) → <b>infinitely many</b> — all the same shape, different sizes (that\'s similarity, not one triangle).</li><li>Measurements that break the triangle inequality, or three angles that don\'t sum to 180° → <b>none</b>.</li></ul><p><b>Remember:</b> a triangle\'s three angles always add to <b>180°</b>. If someone hands you 100°, 50°, and 40° (sum 190°), no triangle exists.</p>' },
        { type: 'quiz', questions: [
          { q: 'Can sides 5, 6, 12 form a triangle?', options: ['Yes', 'No — 5 + 6 is not greater than 12', 'Only if it\'s right', 'Not enough info'], answer: 1 },
          { q: 'Three angles 50°, 60°, 70° describe…', options: ['Exactly one triangle', 'No triangle', 'Many triangles of the same shape, different sizes', 'A square'], answer: 2 },
          { q: 'A triangle\'s angles are 90° and 55°. The third angle is…', options: ['35°', '45°', '145°', '35.5°'], answer: 0 },
          { q: 'Which set of sides makes a valid triangle?', options: ['1, 2, 3', '4, 4, 9', '6, 8, 10', '2, 2, 5'], answer: 2 },
        ] },
        { type: 'practice', title: 'Now you try — on Khan', note: 'Explore constructing figures in Khan\'s Geometry unit (scale drawings & constructions).', links: [
          { url: K + '/cc-7th-scale-drawings/e/constructing-scale-drawings', label: 'Constructing scale drawings' },
          { url: K, label: 'Geometry unit (constructions & triangles)' },
        ] },
        { type: 'next', text: 'Next: angle relationships that let you find a missing angle instantly.' },
      ],
    },

    /* ───────────────── LESSON 4 ───────────────── */
    {
      id: 'angles', n: 4, title: 'Angle pairs — complementary, supplementary, vertical',
      subject: 'Math', minutes: 25, standards: '7.GM.B.4',
      blocks: [
        { type: 'hook', text: 'You almost never need a protractor to find a missing angle — you need three facts. Angles that form a right angle add to 90°. Angles on a straight line add to 180°. And when two lines cross, the angles across from each other are <b>equal</b>. That\'s it.' },
        { type: 'prose', body: '<p><b>Complementary</b> — two angles that add to <b>90°</b>. If one is 65°, the other is 90 − 65 = <b>25°</b>.</p><p><b>Supplementary</b> — two angles that add to <b>180°</b> (they form a straight line). If one is 110°, the other is 180 − 110 = <b>70°</b>.</p><p><b>Vertical angles</b> — when two lines cross, the pairs of angles opposite each other are <b>equal</b>. If one is 50°, the angle straight across is also 50°.</p><p><b>Adjacent angles</b> sit next to each other sharing a side; along a straight line they\'re supplementary.</p><p><b>Example.</b> Two lines cross. One angle is 130°. The vertical angle is also 130°; each angle next to it (supplementary) is 180 − 130 = 50°.</p><p class="tie-in">🔗 <b>Tie-in — the Rogue River (Rivers unit):</b> where two straight roads or a bridge truss cross the river, the crossing makes vertical angle pairs — the angle upstream-left equals the angle downstream-right. Engineers use exactly this to lay out intersections and trusses.</p>' },
        { type: 'video', title: 'Complementary & supplementary angles', url: K + '/cc-7th-angles/v/complementary-and-supplementary-angles', label: '▶ Watch on Khan', focus: 'Watch which pairs sum to 90° vs. 180°.' },
        { type: 'quiz', questions: [
          { q: 'Two complementary angles: one is 30°. The other is…', options: ['60°', '150°', '90°', '30°'], answer: 0 },
          { q: 'Two supplementary angles: one is 115°. The other is…', options: ['65°', '75°', '245°', '115°'], answer: 0 },
          { q: 'Two lines cross; one angle is 72°. Its vertical angle is…', options: ['18°', '108°', '72°', '90°'], answer: 2 },
          { q: 'Angles on a straight line always add to…', options: ['90°', '180°', '360°', '45°'], answer: 1 },
        ] },
        { type: 'practice', title: 'Now you try — on Khan', links: [
          { url: K + '/cc-7th-angles/e/identifying-supplementary-complementary-vertical', label: 'Identify complementary, supplementary & vertical angles' },
          { url: K + '/cc-7th-angles/e/vertical_angles', label: 'Vertical angles' },
        ] },
        { type: 'next', text: 'Next: turn those angle facts into equations to solve for x.' },
      ],
    },

    /* ───────────────── LESSON 5 ───────────────── */
    {
      id: 'angle-algebra', n: 5, title: 'Missing angles → equations',
      subject: 'Math', minutes: 25, standards: '7.GM.B.4',
      blocks: [
        { type: 'hook', text: 'Here\'s where geometry and last unit\'s algebra shake hands. If two angles are supplementary and one is labeled (2x + 10) and the other 50°, you don\'t guess — you write <b>(2x + 10) + 50 = 180</b> and solve. Angle facts become equations.' },
        { type: 'prose', body: '<p>Set up the equation from the relationship, then solve it like any equation from Unit 4.</p><p><b>Example 1 — complementary.</b> Two complementary angles are x and 2x. They add to 90: x + 2x = 90 → 3x = 90 → <b>x = 30°</b> (so the angles are 30° and 60°).</p><p><b>Example 2 — supplementary.</b> Angles x and (x + 40) are supplementary: x + (x + 40) = 180 → 2x + 40 = 180 → 2x = 140 → <b>x = 70°</b>.</p><p><b>Example 3 — vertical.</b> Vertical angles are equal, so (2x + 10) = 50 → 2x = 40 → <b>x = 20</b>.</p><p><b>Same toolkit as Unit 4:</b> combine like terms, undo with inverse operations, check by plugging back in. Geometry just hands you the equation.</p>' },
        { type: 'video', title: 'Using algebra to find angle measures', url: K + '/cc-7th-unknown-angle-algebra/v/using-algebra-to-find-the-measures-of-vertical-angles', label: '▶ Watch on Khan', focus: 'Watch the angle relationship become an equation before it\'s solved.' },
        { type: 'quiz', questions: [
          { q: 'Complementary angles x and 4x. Solve for x.', options: ['x = 18°', 'x = 22.5°', 'x = 36°', 'x = 90°'], answer: 0 },
          { q: 'Supplementary angles x and (x + 20). Find x.', options: ['x = 80°', 'x = 70°', 'x = 90°', 'x = 100°'], answer: 0 },
          { q: 'Vertical angles (3x) and 60°. Solve for x.', options: ['x = 20', 'x = 30', 'x = 180', 'x = 57'], answer: 0 },
          { q: 'Two complementary angles are equal. Each measures…', options: ['45°', '90°', '30°', '60°'], answer: 0 },
        ] },
        { type: 'practice', title: 'Now you try — on Khan', links: [
          { url: K + '/cc-7th-angles/e/complementary_and_supplementary_angles', label: 'Complementary & supplementary angles' },
          { url: K + '/cc-7th-angles/e/complementary-and-supplementary-angles--no-visual-', label: 'Missing angles (no picture — set up the equation)' },
        ] },
        { type: 'next', text: 'Next: circles — circumference, area, and the constant π.' },
      ],
    },

    /* ───────────────── LESSON 6 ───────────────── */
    {
      id: 'circles', n: 6, title: 'Circles — π, circumference & area',
      subject: 'Math', minutes: 30, standards: '7.GM.B.3',
      blocks: [
        { type: 'hook', text: 'Wrap a string around <em>any</em> circle and lay it against the distance across: the string is always about <b>3.14</b> times longer. Every circle in the universe shares that ratio. It has a name — <b>π</b> — and it powers both circle formulas.' },
        { type: 'prose', body: '<p><b>The parts:</b> the <b>radius (r)</b> reaches from center to edge; the <b>diameter (d)</b> crosses the whole circle through the center, so <b>d = 2r</b>.</p><p><b>The two formulas:</b></p><blockquote style="font-size:1.1rem; text-align:center; font-weight:700;">Circumference: C = π·d = 2π·r  &nbsp;&nbsp;|&nbsp;&nbsp; Area: A = π·r²</blockquote><p><b>Example 1 — circumference.</b> A circle with radius 5 cm: C = 2π(5) = 10π ≈ <b>31.4 cm</b>.</p><p><b>Example 2 — area.</b> Same circle: A = π(5²) = 25π ≈ <b>78.5 cm²</b>. (Area uses the <em>radius</em>, and it gets squared — square units.)</p><p><b>Example 3 — friendly numbers.</b> A wheel with diameter 14 in, using π ≈ 22/7: C = (22/7)(14) = <b>44 in</b>; radius 7, A = (22/7)(7²) = (22/7)(49) = <b>154 in²</b>.</p><p><b>The #1 mistake:</b> plugging the diameter into the area formula. Area needs the <em>radius</em>. If you\'re given the diameter, halve it first.</p><p class="tie-in">🔗 <b>Tie-in — your ebike wheel.</b> A 26-inch wheel (that\'s the diameter) rolls C = π·26 ≈ <b>81.7 inches</b> forward per full rotation. A mile is 5,280 ft = 63,360 in, so one mile ≈ 63,360 ÷ 81.7 ≈ <b>776 rotations</b>. Circumference literally measures how far each pedal push carries you.</p>' },
        { type: 'video', title: 'Area of a circle', url: K + '/cc-7th-area-circumference/v/area-of-a-circle', label: '▶ Watch on Khan', focus: 'Watch them use the radius (not the diameter) and square it.' },
        { type: 'read', title: 'Area of circles review', url: K + '/cc-7th-area-circumference/a/area-of-circles-review' },
        { type: 'quiz', questions: [
          { q: 'A circle has diameter 10. Its circumference is…', options: ['10π ≈ 31.4', '100π', '5π', '20π'], answer: 0 },
          { q: 'A circle has radius 3. Its area is…', options: ['6π ≈ 18.8', '9π ≈ 28.3', '3π', '9'], answer: 1 },
          { q: 'To find AREA, which measurement do you square?', options: ['The diameter', 'The circumference', 'The radius', 'π'], answer: 2 },
          { q: 'Radius 7, using π ≈ 22/7. The area is…', options: ['154', '44', '22', '49'], answer: 0 },
        ] },
        { type: 'practice', title: 'Now you try — on Khan', links: [
          { url: K + '/cc-7th-area-circumference/e/radius_diameter_and_circumference', label: 'Radius, diameter & circumference' },
          { url: K + '/cc-7th-area-circumference/e/area_of_a_circle', label: 'Area of a circle' },
          { url: K + '/cc-7th-area-circ-challenge/e/area-and-circumference-of-circles', label: 'Area & circumference challenge' },
        ] },
        { type: 'next', text: 'Last skill: 3-D — volume and surface area.' },
      ],
    },

    /* ───────────────── LESSON 7 ───────────────── */
    {
      id: 'volume-surface', n: 7, title: 'Volume & surface area of solids',
      subject: 'Math', minutes: 30, standards: '7.GM.B.5',
      blocks: [
        { type: 'hook', text: 'Two different questions about the same box: "how much does it HOLD?" and "how much wrapping paper covers it?" The first is <b>volume</b> (space inside, cubic units); the second is <b>surface area</b> (the skin, square units). Never mix them up.' },
        { type: 'prose', body: '<p><b>Volume of a rectangular prism (a box):</b></p><blockquote style="font-size:1.1rem; text-align:center; font-weight:700;">V = length × width × height</blockquote><p><b>Example.</b> A box 2 × 3 × 4 cm holds V = 2·3·4 = <b>24 cm³</b> (cubic — three dimensions multiplied).</p><p><b>Surface area</b> = add up the areas of all the faces. A box has 3 pairs of matching faces:</p><blockquote style="font-size:1.05rem; text-align:center; font-weight:700;">SA = 2(lw + lh + wh)</blockquote><p>For that same 2 × 3 × 4 box: 2(2·3 + 2·4 + 3·4) = 2(6 + 8 + 12) = 2(26) = <b>52 cm²</b> (square units — it\'s area).</p><p><b>Volume of a prism in general</b> = (area of the base) × (its length/height). A triangular prism whose triangular end has area 6 cm² and length 10 cm holds 6 × 10 = <b>60 cm³</b>.</p><p><b>The tell:</b> cubic units (cm³) → you found volume; square units (cm²) → you found surface area. If your units don\'t match the question, you used the wrong one.</p><p class="tie-in">🔗 <b>Tie-in — Metals unit:</b> to cast a bronze bar you need its <b>volume</b> (how much molten metal fills the mold) — and bronze\'s density then tells you the weight. To know how much it\'ll tarnish, you\'d want its <b>surface area</b> (only the skin meets the air). Same bar, two different measurements for two different questions.</p>' },
        { type: 'video', title: 'Volume & surface area word problems', url: K + '/cc-7th-area-volume-surface-area/e/volume-and-surface-area-word-problems', label: '▶ Practice on Khan', focus: 'For each problem, decide first: filling it (volume) or wrapping it (surface area)?' },
        { type: 'quiz', questions: [
          { q: 'A box is 3 × 4 × 5. Its volume is…', options: ['60 cubic units', '12 cubic units', '47 cubic units', '60 square units'], answer: 0 },
          { q: 'Which is measured in SQUARE units?', options: ['Volume', 'Surface area', 'Length', 'Weight'], answer: 1 },
          { q: 'Surface area of a 2 × 2 × 2 cube: 2(4 + 4 + 4) = ?', options: ['24 square units', '8 cubic units', '12 square units', '6 square units'], answer: 0 },
          { q: 'A prism\'s base area is 9 cm² and it is 5 cm long. Volume?', options: ['45 cm³', '14 cm³', '90 cm³', '45 cm²'], answer: 0 },
        ] },
        { type: 'practice', title: 'Now you try — on Khan', links: [
          { url: K + '/cc-7th-area-volume-surface-area/e/volume-and-surface-area-word-problems', label: 'Volume & surface area word problems' },
        ] },
        { type: 'next', text: 'Last stop: pull it together and check you\'re ready.' },
      ],
    },

    /* ───────────────── LESSON 8 · REFLECTION ───────────────── */
    {
      id: 'reflect', n: 8, title: 'Ready for the test?',
      subject: 'Math', minutes: 25, standards: '7.GM.B.5',
      blocks: [
        { type: 'prose', body: '<p>You\'ve covered scale, triangles, angles, circles, and 3-D solids. Before the Khan quiz/test, look back at your day-one notes and check what stuck.</p>' },
        { type: 'kwlback', prompt: 'Here\'s what you wrote on day one:' },
        { type: 'vocabsort', title: 'Which words do you own now?', note: 'Be honest. The fuzzy ones are just your study list.' },
        { type: 'rubric', title: 'Can you do each of these?', items: [
          'Use a scale to go between drawing lengths and real lengths.',
          'Explain why area scales by the factor squared.',
          'Decide when side/angle info gives one triangle, many, or none.',
          'Find missing angles using complementary, supplementary & vertical pairs.',
          'Use C = π·d and A = π·r² correctly (radius vs. diameter).',
          'Find volume (cubic) and surface area (square) of a prism.',
        ] },
        { type: 'practice', title: 'Prove it — the Khan quizzes & unit test', note: 'Khan\'s quizzes and unit test are built into the unit page. Aim for the blue "Mastered" bar.', links: [
          { url: K, label: 'Open the Khan unit (quizzes + unit test)' },
        ] },
        { type: 'done', text: 'That\'s the unit. Geometry is where the algebra you\'ve built starts measuring the real world — maps, wheels, and boxes. Next up: the last unit, statistics & probability.' },
      ],
    },

  ],
});
})();
