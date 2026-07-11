/**
 * unit-ground-shifts.js — Unit 5: When the Ground Shifts
 *
 * Interdisciplinary (Earth science + world history + ELA) self-paced unit with
 * an embedded CHOICE NOVEL (survival / turning-point). 16 ordered cards; each a
 * standalone session. Rendered by unit.js; progress/answers save to localStorage.
 * NO `track` field → teal theme.
 *
 * Do not add a top-level const/let/var (all unit-*.js share one global scope).
 */

window.HS_UNITS = window.HS_UNITS || [];
window.HS_UNITS.push({
  id: 'ground-shifts',
  short: 'Unit 5 · Ground Shifts',
  title: 'When the Ground Shifts',
  eq: 'We can\'t stop disasters — so what CAN we do?',
  image: 'assets/units/ground-shifts.jpg',

  parent: {
    hotspots: [
      'The whole unit turns on one distinction: a <b>hazard</b> is the natural event; a <b>disaster</b> is what happens when it hits unprepared people. We can\'t stop hazards — but disasters are partly a <i>choice</i>. If he treats them as the same word, the unit\'s hopeful point is lost.',
      '<b>Forecast is not the same as predict.</b> Nobody can say "an earthquake will hit Tuesday." But we can say "this coast has a large chance over the next 50 years" — and that\'s enough to prepare. Watch for him wanting a crystal ball; the real skill is acting well under uncertainty.',
      'The <b>choice novel</b> runs alongside the science. Let him pick a book he actually wants to read (survival or turning-point). The ELA target is <b>theme</b> — not "what happened" but "what it means." Keep nudging from plot summary toward "so what is the author saying about people?"',
      'The <b>Cascadia</b> cards (8–9) are the payoff: the exact same fault outside our door caused a giant quake in 1700, confirmed by Japanese tsunami records, tribal oral accounts, AND drowned "ghost forests" — three kinds of evidence agreeing. It\'s local, it\'s real, and preparing for it is genuinely useful. Don\'t let it read as scary trivia; the response (a go-bag, a plan) is the point.',
    ],
    activities: [
      { tier: 'Small', title: 'Build the family kit — quake + smoke', detail: 'Southern Oregon has two real hazards: a future Cascadia earthquake and, every summer, wildfire smoke. Build (or check) a family kit together: water, food, flashlight, first aid, and N95 masks for smoke season. Pick a meeting spot and an out-of-state contact. This IS the unit\'s answer to its own question, done for real.', cost: '$ supplies', time: '1–2 hours' },
      { tier: 'Medium', title: 'Hazard-hunt your own house', detail: 'Walk the house together looking for what would fall or break in a big quake — the water heater, tall shelves, the heavy mirror over a bed. Make a one-page family plan. Then look up your address on Oregon\'s HazVu / DOGAMI hazard maps and see your real shaking and wildfire risk. Pairs with the design-challenge and local cards.', cost: 'Free', time: 'Half day' },
      { tier: 'Large', title: 'Read the coast', detail: 'Drive to the southern Oregon coast and read it like a hazard map: the blue-and-white tsunami evacuation-route signs, the "entering / leaving tsunami zone" markers, the run-up-to-high-ground routes. If you can reach a ghost forest (drowned tree stumps from the 1700 quake), even better — you\'re standing on the evidence. About 2½–3 hours from Medford.', cost: '$ gas', time: 'Full day' },
    ],
  },

  vocab: {
    mustOwn: [
      { term: 'natural hazard',  def: 'A natural event — quake, flood, fire, storm — that CAN harm people.' },
      { term: 'disaster',        def: 'What happens when a hazard hits people who weren\'t ready for it.' },
      { term: 'fault',           def: 'A crack in the Earth\'s crust where blocks of rock can slip past each other.' },
      { term: 'earthquake',      def: 'The shaking when rock along a fault suddenly slips and releases energy.' },
      { term: 'tsunami',         def: 'A giant sea wave set off by an undersea quake or landslide.' },
      { term: 'subduction zone', def: 'Where one tectonic plate is forced down beneath another — the biggest quakes live here.' },
      { term: 'magnitude',       def: 'A number rating how much energy an earthquake released.' },
      { term: 'forecast',        def: 'Estimating the chance of an event over time — not the exact day.' },
      { term: 'mitigation',      def: 'Steps taken ahead of time to reduce how much harm a hazard does.' },
      { term: 'resilience',      def: 'The ability to take a hit and recover — bend without breaking.' },
      { term: 'evacuate',        def: 'To leave a dangerous area before or during a hazard.' },
      { term: 'theme',           def: 'The deeper message a story reveals about people or life.' },
      { term: 'criteria',        def: 'The goals a design has to meet to count as a success.' },
      { term: 'constraint',      def: 'A limit a design has to work within — cost, time, materials.' },
    ],
    frayer: [
      {
        term: 'natural hazard',
        definition: 'A natural event with the potential to harm people or property. It becomes a "disaster" only when it meets people who aren\'t prepared — so the event is nature, but the damage is partly up to us.',
        examples: ['An earthquake', 'A wildfire', 'A tsunami', 'A flood or a volcanic eruption'],
        nonexamples: ['A quake in an empty desert that hurts no one (a hazard, but not a disaster)', 'A car crash (not a natural event)', 'A scary movie'],
        sentence: 'The earthquake was the natural hazard; the collapsed, unprepared city turned it into a disaster.',
      },
      {
        term: 'resilience',
        definition: 'The ability of a person, building, or community to absorb a shock and bounce back — to bend under stress without breaking, and to recover afterward.',
        examples: ['A house built to sway in a quake instead of cracking', 'A town with an evacuation plan and supplies ready', 'A character who survives loss and keeps going'],
        nonexamples: ['A rigid tower that shatters at the first shake', 'A town with no plan and no supplies', 'Pretending the danger isn\'t there'],
        sentence: 'We can\'t stop the shaking, but resilience decides whether we get back up.',
      },
      {
        term: 'theme',
        definition: 'The deeper idea or message a story reveals about people, life, or the world — not the plot ("what happens") but the meaning ("what it says").',
        examples: ['"Ordinary people can do extraordinary things under pressure"', '"Survival costs something"', '"Community is what saves us"'],
        nonexamples: ['A one-sentence summary of the plot', 'The setting', 'A single character\'s name'],
        sentence: 'The plot is a boy surviving a plane crash; the theme is what the wilderness teaches him about himself.',
      },
    ],
  },

  cards: [

    /* ───────────────── PHASE 1 · HAZARD, NOT FATE ───────────────── */
    {
      id: 'launch', n: 1, title: 'Launch — We can\'t stop it. So what CAN we do?',
      subject: 'Science · Humanities', minutes: 40, standards: '7.ESS3.2 · 7.G.HI.4',
      blocks: [
        { type: 'hook', text: 'On the same day in 2011, two coastal towns in Japan faced the same monster tsunami. One lost hundreds of people. The other, next door, lost almost no one — because decades earlier it had built a taller seawall, drilled its evacuation, and taught its kids where to run. Same wave. Completely different outcome. That gap — between the wave you can\'t stop and the harm you can — is what this whole unit is about.' },
        { type: 'video', title: 'Why some disasters kill thousands and others don\'t', url: 'https://www.youtube.com/results?search_query=how+earthquakes+work+natural+hazards+preparedness', watch: true, focus: 'Watch for the difference between the natural EVENT and the human DAMAGE. They\'re not the same thing.' },
        { type: 'prose', body: '<p>The question under this whole unit:</p><blockquote>We can\'t stop disasters — so what CAN we do?</blockquote><p>Here\'s the key move: a <b>hazard</b> (the quake, the fire, the wave) is nature\'s doing and we can\'t prevent it. But a <b>disaster</b> — the death and destruction — is partly <em>our</em> doing, depending on how ready we were. That\'s not a grim unit. It\'s a hopeful one: it turns out there\'s a lot we can do. And it hits home, because the biggest hazard on Earth runs right past our own coast.</p>' },
        { type: 'flashcards', title: 'Meet the words first', note: 'Tap a card to flip it. You\'ll meet all of these again inside the lessons — this is just a first handshake.' },
        { type: 'kwl', prompt: 'Before we start: what do you already know about earthquakes, tsunamis, or wildfires? What do you want to find out? No wrong answers.' },
        { type: 'next', text: 'Next: pick the novel you\'ll read alongside this unit.' },
      ],
    },
    {
      id: 'novel-pick', n: 2, title: 'Your Choice Novel — Pick It', subject: 'ELA', minutes: 30, standards: '7.RL.2',
      blocks: [
        { type: 'hook', text: 'Every disaster is also a story about people under pressure — who they turn out to be when everything they counted on shifts. So alongside the science, you\'re going to read a whole novel of your choice. Not a worksheet book. One you actually want to read, about someone whose ground shifts under them.' },
        { type: 'prose', body: '<p>Pick a <b>survival or turning-point novel</b> — a character forced to adapt when their world changes. Some strong options (pick one, or choose your own with a thumbs-up):</p><ul><li><i>Hatchet</i> — Gary Paulsen (a boy alone in the wilderness after a crash)</li><li><i>The Cay</i> — Theodore Taylor (shipwreck survival)</li><li><i>A Long Walk to Water</i> — Linda Sue Park (survival + turning points, based on real events)</li><li><i>I Am Malala</i> (young readers ed.) — Malala Yousafzai (a life upended)</li><li><i>Refugee</i> — Alan Gratz (three kids, three crises)</li><li><i>The Boy Who Harnessed the Wind</i> — William Kamkwamba (drought, disaster, engineering — ties right into this unit)</li></ul><p>Set a simple plan: how many pages or chapters per week to finish it by the end of the unit. You\'ll check in on it three times as you go.</p>' },
        { type: 'answers', prompts: [
          'Which novel did you pick, and why that one?',
          'What\'s the disaster or turning point the character faces?',
          'Your reading plan: about how many pages/chapters per week to finish it by the end of the unit?',
        ] },
        { type: 'next', text: 'Next: the science of a hazard — and why we can see it coming even if we can\'t stop it.' },
      ],
    },
    {
      id: 'hazard-a', n: 3, title: 'Hazards & Forecasting · A', subject: 'Science', minutes: 35, standards: '7.ESS3.2',
      blocks: [
        { type: 'hook', text: 'Nobody can tell you an earthquake will hit next Tuesday at 3 p.m. — and anyone who claims they can is selling something. But that does NOT mean we\'re blind. We can say, with real confidence, "this coast has a large chance of a major quake in the next 50 years." That kind of statement isn\'t a prediction. It\'s a <b>forecast</b>, and it\'s enough to save thousands of lives.' },
        { type: 'learn', title: 'Learn how forecasting works — your way', note: 'Read it, or watch a quick explainer. Your pick.', options: [
          { kind: 'read', label: 'Read it', title: 'Forecasting the ground', source: 'clean reading', url: 'reader.html?doc=hazards', body: '<p>Open the clean reading for the full picture. The big ideas:</p><ul><li>A <b>forecast</b> gives the <em>chance</em> of an event over time (like a weather forecast), not the exact moment. Earthquakes can\'t be predicted to the day — but their odds, locations, and likely size can be estimated from the faults and past quakes.</li><li>We map where hazards are worst — fault lines, floodplains, fire-prone forests, tsunami zones — so people know their real risk.</li><li>Knowing the forecast lets us do the one thing that matters: <b>prepare</b>. Building codes, seawalls, warning systems, and evacuation drills all come from taking a forecast seriously.</li></ul>' },
          { kind: 'video', label: 'Watch it', title: 'How earthquakes work & how we forecast them', url: 'https://www.youtube.com/results?search_query=how+do+we+forecast+earthquakes+probability+explained', focus: 'Listen for the difference between forecasting the ODDS and predicting the exact day.' },
        ] },
        { type: 'answers', prompts: [
          'What\'s the difference between a forecast and a prediction? Why does it matter for earthquakes?',
          'If you can\'t know the exact day, why is a forecast still incredibly useful?',
        ] },
        { type: 'next', text: 'Next: read a real hazard map and act on it.' },
      ],
    },
    {
      id: 'hazard-b', n: 4, title: 'Hazards & Forecasting · B', subject: 'Science', minutes: 35, standards: '7.ESS3.2',
      blocks: [
        { type: 'build', title: 'Read a hazard map', minutes: 20, steps: '<p>Look up a real hazard map for where you live — search "Oregon HazVu" or "DOGAMI hazard map" and find your area, or use a tsunami-zone map of the Oregon coast. Then in the boxes below, report what you find: which hazards are rated highest near Medford, and what the map says you\'d do about them.</p>', photo: true, photoLabel: 'Screenshot or photo of the map (optional):' },
        { type: 'answers', prompts: [
          'Which one or two natural hazards are rated highest for our area?',
          'For one of those hazards, what does knowing the forecast let a family actually DO ahead of time?',
        ] },
        { type: 'quiz', questions: [
          { q: 'A forecast tells you…', options: ['The exact day a quake will strike', 'The chance of an event over time', 'That nothing will happen', 'The past only'], answer: 1 },
          { q: 'The biggest earthquakes on Earth happen at…', options: ['Subduction zones', 'The center of plates', 'Mountaintops', 'Rivers'], answer: 0 },
          { q: 'The main payoff of taking a hazard forecast seriously is…', options: ['Panic', 'Preparation', 'Ignoring it', 'Nothing'], answer: 1 },
          { q: 'A hazard becomes a DISASTER mainly when…', options: ['It\'s very loud', 'It hits unprepared people', 'It happens at night', 'Scientists forecast it'], answer: 1 },
        ] },
        { type: 'next', text: 'Next: disasters that changed the course of history.' },
      ],
    },

    /* ───────────────── PHASE 2 · DISASTERS THAT MADE HISTORY ───────────────── */
    {
      id: 'history-a', n: 5, title: 'Disasters That Redirected History · A', subject: 'Humanities · ELA', minutes: 40, standards: '7.H.CH.3 · 7.RI.3',
      blocks: [
        { type: 'hook', text: 'On the morning of November 1, 1755, one of the richest cities in Europe — Lisbon — was packed into its churches for a holy day. In minutes, a massive earthquake, then a tsunami, then fires leveled the city and killed tens of thousands. But the aftershock that really changed the world was an idea: for the first time, Europe\'s greatest thinkers asked <em>why</em> — and started treating disasters as natural events to study, not just punishments to fear.' },
        { type: 'read', title: 'Lisbon 1755: the quake that shook an era', source: 'clean reading', url: 'reader.html?doc=lisbon', body: '<p>Open the clean reading for the whole story. What to hold onto:</p><ul><li>The Lisbon earthquake was one of the deadliest in European history — quake, tsunami, and fire in a single morning.</li><li>It landed in the middle of the <b>Enlightenment</b>, an age of new scientific thinking, and forced a huge question: is a disaster a message from the heavens, or a natural event with natural causes?</li><li>One official, the Marquis of Pombal, responded not with despair but with a plan: survey the damage, rebuild with the first quake-resistant designs in Europe, and study what happened. It\'s an early example of <b>mitigation</b> and <b>resilience</b> — turning catastrophe into preparation.</li></ul>' },
        { type: 'answers', prompts: [
          'How did the Lisbon disaster change the WAY people thought about disasters, not just the city itself?',
          'Pombal\'s response was "bury the dead, feed the living, and rebuild better." How is that an early version of this unit\'s whole question?',
        ] },
        { type: 'next', text: 'Next: trace the ripple effects, and check your novel.' },
      ],
    },
    {
      id: 'history-b', n: 6, title: 'Disasters That Redirected History · B', subject: 'Humanities · ELA', minutes: 35, standards: '7.H.CH.3 · 7.RI.3',
      blocks: [
        { type: 'build', title: 'Map a disaster\'s ripple effects', minutes: 20, steps: '<p>Pick one disaster — Lisbon 1755, the eruption of Thera/Santorini (which may have helped end the Minoan civilization), the 1918 flu, the Dust Bowl, or one you research. Make a cause-and-effect chain: the <b>event</b> → its immediate damage → the longer-term changes it forced (in government, ideas, technology, or where people lived). Use arrows; every box causes the next.</p>', photo: true, photoLabel: 'Photo or link of your ripple-effect map (optional):' },
        { type: 'answers', prompts: [
          'What longer-term change did your disaster force that nobody would have expected on day one?',
          'Does your disaster support the idea that "a hazard becomes a disaster based on how ready people were"? How?',
        ] },
        { type: 'quiz', questions: [
          { q: 'The Lisbon earthquake mattered partly because it pushed people to…', options: ['Study disasters as natural events', 'Stop building cities', 'Ignore science', 'Leave Europe'], answer: 0 },
          { q: 'A disaster "redirecting history" means it…', options: ['Changed nothing', 'Forced long-term changes in how people lived or thought', 'Only affected one family', 'Was quickly forgotten'], answer: 1 },
          { q: 'Taking steps ahead of time to reduce harm is called…', options: ['Mitigation', 'Magnitude', 'A fault', 'Evacuation'], answer: 0 },
        ] },
        { type: 'next', text: 'Next: check in on your novel — how does your character respond?' },
      ],
    },
    {
      id: 'novel-check', n: 7, title: 'Choice Novel — Check-In', subject: 'ELA', minutes: 30, standards: '7.RL.2',
      blocks: [
        { type: 'prose', body: '<p>You should be into your novel by now. Pause and look at your character the way we just looked at Lisbon and Japan: not "what happened," but "how did they <em>respond</em> when their ground shifted?"</p>' },
        { type: 'answers', prompts: [
          'Where are you in the book? Give a quick, spoiler-safe summary of the situation.',
          'What is the "ground shifting" for your character — the hazard, loss, or turning point they face?',
          'How are they responding so far? What does that response reveal about who they are?',
          'Early guess at the THEME: what might the author be saying about people through this story? (Not the plot — the meaning.)',
        ] },
        { type: 'deeper', text: 'Notice a choice your character made under pressure. Would you have made the same one? There are no wrong answers — but hold onto your reasoning for the final write-up.' },
        { type: 'next', text: 'Next: the big one — the fault outside our own door.' },
      ],
    },

    /* ───────────────── PHASE 3 · CASCADIA & DESIGN ───────────────── */
    {
      id: 'cascadia-a', n: 8, title: 'Cascadia · A — The Sleeping Giant', subject: 'Science', minutes: 40, standards: '7.ESS3.2 · 7.ESS2.3',
      blocks: [
        { type: 'hook', text: 'Off the coast of Oregon, an entire tectonic plate is being shoved under North America — slowly, silently, and stuck. It\'s been building up strain for over 300 years. When it finally lets go, it will produce a magnitude-9 earthquake and a tsunami: the largest natural disaster in the history of the Pacific Northwest. Scientists call it "the really big one." And it runs right past us.' },
        { type: 'learn', title: 'Learn the Cascadia zone — your way', note: 'Watch it or read it — either one shows you the sleeping giant.', options: [
          { kind: 'video', label: 'Watch it', title: 'The Cascadia subduction zone explained', url: 'https://www.youtube.com/results?search_query=cascadia+subduction+zone+earthquake+explained', focus: 'Watch for how the stuck, locked plate is storing up energy right now — and what happens when it releases.' },
          { kind: 'read', label: 'Read it', title: 'The Cascadia subduction zone', source: 'clean reading', url: 'reader.html?doc=cascadia', body: '<p>Open the clean reading for the whole story. The essentials:</p><ul><li>Cascadia is a <b>subduction zone</b> running from British Columbia to Northern California — the Juan de Fuca plate diving under the North American plate.</li><li>The plates are <b>locked</b>: instead of sliding smoothly, they stick and store energy for centuries, then release it all at once in a giant (magnitude 8–9) quake.</li><li>The last one struck on <b>January 26, 1700</b> — and we know the date almost to the hour, from evidence on two sides of an ocean. More on that next card.</li></ul>' },
        ] },
        { type: 'answers', prompts: [
          'Why does a "locked" subduction zone produce such enormous earthquakes when it finally slips?',
          'How is Cascadia connected to everything you learned about plate tectonics back in the deep-time unit?',
        ] },
        { type: 'next', text: 'Next: how we know the exact date of a quake nobody wrote down here.' },
      ],
    },
    {
      id: 'cascadia-b', n: 9, title: 'Cascadia · B — Three Kinds of Evidence', subject: 'Humanities · Science · ELA', minutes: 40, standards: '7.H.CC.6 · 7.H.CP.9',
      blocks: [
        { type: 'hook', text: 'No settler with a calendar was on the Oregon coast in 1700 to write down the great quake. And yet we know it happened on the night of January 26, 1700 — because three completely separate kinds of evidence, from two sides of the Pacific, all point to the same night. It\'s one of the greatest detective stories in all of science.' },
        { type: 'read', title: 'The orphan tsunami: how three records agree', source: 'clean reading', url: 'reader.html?doc=cascadia', body: '<p>(Same clean reading — read to the end for this part.) Three independent records, one event:</p><ul><li><b>Japanese records:</b> On January 27–28, 1700, a tsunami with no local earthquake — an "orphan tsunami" — flooded villages across Japan. Officials wrote down the exact dates. Cross the Pacific at the speed of a wave, and it points straight back to Cascadia.</li><li><b>Native oral tradition:</b> Coastal tribes — including the people of the Oregon and Washington coast — carried accounts of a terrible night when the ground shook and the sea rushed in, told across generations before any scientist confirmed it.</li><li><b>Ghost forests:</b> Drowned stumps of ancient cedar still stand in coastal marshes, killed when the land dropped and salt water rushed in. Tree-ring dating shows they died in the winter of 1699–1700.</li></ul>' },
        { type: 'answers', prompts: [
          'The three records — Japanese logs, tribal oral accounts, and ghost forests — are totally independent. Why is it so powerful that they all agree on the same event?',
          'This is the deep-time unit\'s lesson again: a claim ("a giant quake hit in Jan 1700") backed by evidence. Name the claim and all three pieces of evidence.',
          'Native oral tradition carried this accurately for 300 years, just like the Klamath remembered Mazama. What does that say about oral history as real evidence?',
        ] },
        { type: 'quiz', questions: [
          { q: 'The Cascadia subduction zone produces huge quakes because the plates are…', options: ['Sliding smoothly', 'Locked and storing energy for centuries', 'Not moving at all', 'Made of water'], answer: 1 },
          { q: 'An "orphan tsunami" in Japan in 1700 was evidence of…', options: ['A Japanese earthquake', 'A distant quake across the Pacific (Cascadia)', 'A storm', 'Nothing'], answer: 1 },
          { q: 'How many independent kinds of evidence pin down the 1700 Cascadia quake?', options: ['One', 'Two', 'Three', 'None'], answer: 2 },
        ] },
        { type: 'next', text: 'Next: stop worrying, start engineering — the design challenge.' },
      ],
    },
    {
      id: 'design-a', n: 10, title: 'Design Challenge · A — Criteria & Constraints', subject: 'Science · Engineering', minutes: 40, standards: 'MS.ETS1.1',
      blocks: [
        { type: 'hook', text: 'Here\'s the turn from fear to power. We can\'t stop Cascadia — but engineers have gotten astonishingly good at reducing what it can do to us. Buildings that sway instead of snap. Warning systems that give precious seconds. The trick to any of it is starting an engineering problem the right way: nailing down exactly what success means, and what you have to work within.' },
        { type: 'read', title: 'How engineers start: criteria and constraints', source: 'read', body: '<p>Before you design anything, you define the problem precisely. Two words do the work:</p><ul><li><b>Criteria</b> — the goals your design must hit to count as a success. ("Keeps people safe in a magnitude-8 quake." "Warns the town at least 20 seconds ahead.")</li><li><b>Constraints</b> — the limits you have to work within. ("Under a certain budget." "Uses materials we can actually get." "Built before next fire season.")</li></ul><p>A good design isn\'t the fanciest one — it\'s the one that best meets the <b>criteria</b> while respecting the <b>constraints</b>. Real engineering is always this trade-off. A tsunami wall that would work perfectly but costs more than the whole town has isn\'t a solution; it\'s a fantasy.</p>' },
        { type: 'answers', prompts: [
          'In your own words: what\'s the difference between a criterion and a constraint?',
          'Pick a hazard our area faces (quake, wildfire, smoke, or flood). Write TWO criteria (goals) and TWO constraints (limits) for a design that would reduce its harm.',
        ] },
        { type: 'next', text: 'Next: design your own solution.' },
      ],
    },
    {
      id: 'design-b', n: 11, title: 'Design Challenge · B — Your Solution', subject: 'Science · Engineering', minutes: 45, standards: 'MS.ETS1.1',
      blocks: [
        { type: 'build', title: 'Design something that reduces harm', minutes: 35, steps: '<p>Design a solution to one hazard our region faces. It can be a device, a building feature, a warning system, a community plan, or a smoke-season strategy. You don\'t have to build it for real — <b>propose</b> it clearly (sketch it, or make a Canva page). <a href="https://www.canva.com/create/presentations/" target="_blank" rel="noopener" class="choice-link">Open Canva ↗</a></p><p>Your proposal must include: the <b>hazard</b> you\'re tackling · your <b>criteria</b> (goals) · your <b>constraints</b> (limits) · how your design works · and one honest <b>trade-off</b> — what it can\'t do, or what it costs.</p>', photo: true, photoLabel: 'Paste the link or photo of your design (or describe it in the box below):' },
        { type: 'answers', prompts: [
          'Describe your design and how it reduces harm (if you didn\'t link it above):',
          'What\'s the honest trade-off — the thing your design costs, misses, or can\'t do?',
        ] },
        { type: 'quiz', questions: [
          { q: 'The GOALS a design must meet are its…', options: ['Constraints', 'Criteria', 'Faults', 'Themes'], answer: 1 },
          { q: 'The LIMITS a design must work within are its…', options: ['Criteria', 'Constraints', 'Magnitude', 'Forecast'], answer: 1 },
          { q: 'The best design is usually the one that…', options: ['Costs the most', 'Best meets the criteria within the constraints', 'Is the most complex', 'Ignores the budget'], answer: 1 },
        ] },
        { type: 'next', text: 'Next: back to your novel — pin down its theme.' },
      ],
    },

    /* ───────────────── PHASE 4 · MEANING & HOME ───────────────── */
    {
      id: 'novel-theme', n: 12, title: 'Choice Novel — Theme', subject: 'ELA', minutes: 40, standards: '7.RL.2 · 7.RL.9',
      blocks: [
        { type: 'hook', text: 'You\'ve read real accounts of disaster — Lisbon, Japan, the 1700 quake. Now hold your novel up next to them. Fiction and history are two ways of telling the truth about people under pressure, and comparing them is where the deepest reading happens.' },
        { type: 'prose', body: '<p>You should be finishing (or finished with) your novel. Time to move from plot to <b>theme</b> — the deeper thing the author is saying about people or life.</p>' },
        { type: 'answers', prompts: [
          'State the THEME of your novel in one sentence. (Remember: not what happened — what it means.)',
          'What\'s one specific moment or line in the book that shows that theme? Explain how it does.',
          'Compare your novel to a REAL account from this unit (Lisbon, the 2011 tsunami towns, the 1700 quake). What does the fictional story capture that a history book can\'t — and what does the real record capture that the novel can\'t?',
          'Did your character show resilience? Point to one choice that proves it.',
        ] },
        { type: 'next', text: 'Next: write.' },
      ],
    },
    {
      id: 'novel-write', n: 13, title: 'Choice Novel — Write', subject: 'ELA', minutes: 45, standards: '7.W.3',
      blocks: [
        { type: 'choice', title: 'Show what you know — your pick', note: 'You\'ve read real disaster accounts and a whole novel. Now make something. Pick your lane.', options: [
          { kind: 'write', label: 'Write a scene', input: 'text', prompt: 'Write a survival narrative of your own — put a character on the day their ground shifts (a quake, fire, or flood) and show, through their choices, what kind of person they are. Make us feel the pressure, and give it a real ending.' },
          { kind: 'write', label: 'Write on theme', input: 'text', prompt: 'Argue for your novel\'s theme: state it, prove it with at least two specific moments from the book, and connect it to this unit\'s question about how people respond to disaster.' },
          { kind: 'record', label: 'Record a book-talk', input: 'link', prompt: 'Record a 1–2 minute book-talk: what\'s your novel\'s theme, how does the character show resilience, and how does it compare to a real account from this unit (Lisbon, Japan 2011, the 1700 quake)? Paste the link.' },
        ] },
        { type: 'deeper', text: 'If you wrote the narrative: reread it and mark the one sentence where the reader learns who your character really is. If it isn\'t there yet, add it.' },
        { type: 'next', text: 'Next: bring it all home — our own ground.' },
      ],
    },
    {
      id: 'local', n: 14, title: 'Our Ground: Living Ready in the Rogue Valley', subject: 'Humanities · Science', minutes: 35, standards: '7.G.HI.4 · 7.H.CC.6',
      blocks: [
        { type: 'hook', text: 'This is where the whole unit stops being about far-off places and becomes about your own house. Southern Oregon faces two very real hazards: the Cascadia quake that will come someday, and the wildfire smoke that comes almost every single summer. The good news is the unit\'s whole answer — we can\'t stop them, but we can prepare — works right here, this year.' },
        { type: 'read', title: 'Two hazards, one valley', source: 'read', body: '<p><b>Wildfire and smoke</b> are the hazard you already know. The 2020 Almeda Fire burned through Talent and Phoenix, just north of Medford, and smoke season now shows up most summers, turning the sky orange and the air unhealthy to breathe. <b>Cascadia</b> is the slow-motion one: a magnitude-9 quake and tsunami that will strike the coast someday and shake the whole region hard.</p><p>The people who lived here longest already knew this ground shifts. The <b>Takelma</b> and other tribes of this region carried knowledge of fire, flood, and the shaking earth in their traditions — and used controlled, intentional burning to keep forests healthy and fires smaller, a practice now being brought back.</p><p>So what CAN a family do? A <b>go-bag</b> (water, food, first aid, N95 masks for smoke). A <b>plan</b> — a meeting spot, an out-of-state contact, an evacuation route. Sign up for county emergency alerts. Clear brush from around the house before fire season. None of it stops the hazard. All of it shrinks the disaster.</p>' },
        { type: 'choice', title: 'Show what you know — your pick', note: 'Bring the unit home to our own valley. Pick how to show it.', options: [
          { kind: 'write', label: 'Write it', input: 'text', prompt: 'Name the two biggest natural hazards our valley faces and one honest thing your family could do about each. Then: Indigenous people here managed fire on purpose to prevent bigger disasters — how is that an example of this unit\'s answer to its own question?' },
          { kind: 'make', label: 'Make a plan', input: 'link', prompt: 'Make a real one-page family emergency plan or go-bag checklist for a Rogue Valley quake + smoke season (meeting spot, out-of-state contact, supplies, N95s). Snap a photo and paste the link.' },
          { kind: 'record', label: 'Record it', input: 'link', prompt: 'Record a 60-second "living ready in the Rogue Valley" PSA: our two real hazards and what a family actually does about them. Paste the link.' },
        ] },
        { type: 'next', text: 'Last stop: pull the whole unit together.' },
      ],
    },

    /* ───────────────── PHASE 5 · REFLECTION ───────────────── */
    {
      id: 'reflect-a', n: 15, title: 'Reflection · A — Look Back', subject: 'Portfolio', minutes: 35, standards: 'self-assessment',
      blocks: [
        { type: 'prose', body: '<p>You went from "the ground is out to get us" to "here\'s what we do about it" — and read a whole novel along the way. Before your final write-up, look back at where you started and check what stuck.</p>' },
        { type: 'kwlback', prompt: 'Here\'s what you wrote on day one. Read it — notice how your fear has turned into a plan.' },
        { type: 'vocabsort', title: 'Which words do you own now?', note: 'Be honest. Tap each word: "got it cold" or "still fuzzy." The fuzzy ones are just your study list.' },
        { type: 'matching', title: 'Word match', note: 'One more pass on the words. Tap a word, then its meaning.', set: ['natural hazard', 'subduction zone', 'forecast', 'mitigation', 'resilience', 'theme'] },
        { type: 'next', text: 'Last card: your big answer.' },
      ],
    },
    {
      id: 'reflect-b', n: 16, title: 'Reflection · B — Your Answer', subject: 'Portfolio', minutes: 40, standards: '7.RI.3 · synthesis',
      blocks: [
        { type: 'prose', body: '<p>Here\'s the whole unit in one place. Answer the essential question using what you learned — the science of hazards, a disaster from history, Cascadia, your design, your novel, and your own valley. Work in at least <b>five</b> unit words.</p><blockquote>We can\'t stop disasters — so what CAN we do?</blockquote>' },
        { type: 'answers', prompts: [
          'Your answer to the big question (a few strong paragraphs — use real examples and at least 5 unit words):',
        ] },
        { type: 'kwlfinish', prompt: 'Finish your KWL. Now that it\'s over:' },
        { type: 'rubric', title: 'Give yourself an honest check', items: [
          'I can explain the difference between a hazard and a disaster — and why that\'s hopeful.',
          'I can explain forecasting, and why it beats trying to predict the exact day.',
          'I explained how a disaster in history redirected the way people lived or thought.',
          'I can explain the Cascadia zone and the three kinds of evidence for the 1700 quake.',
          'I designed a real solution with clear criteria and constraints.',
          'I read a whole novel, named its theme, and compared it to a real account.',
          'I connected it to my own valley\'s hazards — and used at least five unit words.',
        ] },
        { type: 'done', text: 'That\'s the unit. Nice work turning fear into a plan — you can see everything you made on your reflection any time.' },
      ],
    },

  ],
});
