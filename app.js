/* ══════════════════════════════════════════════════════════
   ICC CONSULTPATH — QUIZ ENGINE
   Ivey Consulting Club · HBA1 Edition
   ══════════════════════════════════════════════════════════ */

// ── QUESTIONS ──────────────────────────────────────────────
// Scoring vectors: [strategist, digital, deal, ops, niche]
const QUESTIONS = [
  {
    tag: 'Your Background',
    text: 'What did you study before Ivey?',
    options: [
      {
        icon: '⚗️',
        label: 'STEM — engineering, computer science, or a hard science',
        sub: 'You built things, coded, or ran experiments',
        scores: { strategist: 0, digital: 2, deal: 0, ops: 1, niche: 2 },
      },
      {
        icon: '📜',
        label: 'Humanities or social sciences — politics, philosophy, sociology',
        sub: 'You argued ideas, analysed systems, wrote a lot',
        scores: { strategist: 2, digital: 0, deal: 0, ops: 0, niche: 1 },
      },
      {
        icon: '💹',
        label: 'Business or economics',
        sub: 'You already spoke the language of markets and firms',
        scores: { strategist: 1, digital: 0, deal: 2, ops: 1, niche: 0 },
      },
      {
        icon: '🎨',
        label: 'Arts, media, or something else entirely',
        sub: 'You came at this from a creative or unconventional angle',
        scores: { strategist: 1, digital: 1, deal: 0, ops: 0, niche: 2 },
      },
    ],
  },
  {
    tag: 'At Ivey',
    text: 'Which type of Ivey case gets you most locked in?',
    options: [
      {
        icon: '♟️',
        label: 'A CEO deciding whether to enter a new market or acquire a rival',
        sub: 'Strategy, competitive dynamics, big calls',
        scores: { strategist: 2, digital: 0, deal: 1, ops: 0, niche: 0 },
      },
      {
        icon: '📊',
        label: 'A company drowning in data that needs a digital solution',
        sub: 'Analytics, tech, building something that scales',
        scores: { strategist: 0, digital: 2, deal: 0, ops: 1, niche: 0 },
      },
      {
        icon: '💰',
        label: 'A private equity firm evaluating a $200M acquisition',
        sub: 'Valuation, due diligence, deal logic',
        scores: { strategist: 0, digital: 0, deal: 2, ops: 0, niche: 0 },
      },
      {
        icon: '🔄',
        label: 'A manufacturer whose supply chain is bleeding money',
        sub: 'Operations, process, getting the shop floor to work',
        scores: { strategist: 0, digital: 1, deal: 0, ops: 2, niche: 0 },
      },
      {
        icon: '🏥',
        label: 'A hospital system or pharma company navigating a complex market',
        sub: 'Deep industry context, regulation, specialized expertise',
        scores: { strategist: 0, digital: 0, deal: 0, ops: 0, niche: 2 },
      },
    ],
  },
  {
    tag: 'Career Shape',
    text: 'Would you rather gain generalist breadth or specialist depth?',
    options: [
      {
        icon: '🌐',
        label: 'Breadth — I want to see every industry and function',
        sub: 'Keep the options open, learn everything',
        scores: { strategist: 2, digital: 1, deal: 0, ops: 1, niche: 0 },
      },
      {
        icon: '🔬',
        label: 'Depth — I want to become the definitive expert in one area',
        sub: 'Go deep, build a moat, be the person everyone calls',
        scores: { strategist: 0, digital: 1, deal: 1, ops: 0, niche: 2 },
      },
    ],
  },
  {
    tag: 'Working Style',
    text: 'When you\'re given a vague, half-formed problem, you…',
    options: [
      {
        icon: '🧩',
        label: 'Dive in — structure will emerge once you start pulling threads',
        sub: 'Ambiguity is where the interesting work happens',
        scores: { strategist: 2, digital: 0, deal: 1, ops: 0, niche: 0 },
      },
      {
        icon: '📋',
        label: 'Reach for a proven framework and adapt it',
        sub: 'Smart people figured this out already — use their playbook',
        scores: { strategist: 0, digital: 0, deal: 0, ops: 2, niche: 1 },
      },
      {
        icon: '💻',
        label: 'Ask for the data first — the answer lives in the numbers',
        sub: 'Clean spec, clean output',
        scores: { strategist: 0, digital: 2, deal: 1, ops: 0, niche: 1 },
      },
    ],
  },
  {
    tag: 'What Excites You',
    text: 'Which output would make you proudest?',
    options: [
      {
        icon: '📄',
        label: 'A 10-slide deck a CEO acts on the next morning',
        sub: 'Tight, decisive, no fluff',
        scores: { strategist: 2, digital: 0, deal: 0, ops: 0, niche: 0 },
      },
      {
        icon: '📈',
        label: 'A live dashboard your client checks every single day',
        sub: 'Built it, deployed it, they can\'t live without it',
        scores: { strategist: 0, digital: 2, deal: 0, ops: 1, niche: 0 },
      },
      {
        icon: '🤝',
        label: 'A deal that closes and creates shareholder value',
        sub: 'Captured, not just advised',
        scores: { strategist: 0, digital: 0, deal: 2, ops: 0, niche: 0 },
      },
      {
        icon: '🏗️',
        label: 'A transformation your client is still running three years later',
        sub: 'Outlasting the engagement is the real win',
        scores: { strategist: 0, digital: 0, deal: 0, ops: 2, niche: 1 },
      },
    ],
  },
  {
    tag: 'Client Interaction',
    text: 'Your dream client interaction looks like…',
    options: [
      {
        icon: '🎙️',
        label: 'Weekly steering committee with the CEO and board',
        sub: 'High stakes, high visibility, no safety net',
        scores: { strategist: 2, digital: 0, deal: 0, ops: 1, niche: 0 },
      },
      {
        icon: '🖥️',
        label: 'Embedded with the product team, shipping code daily',
        sub: 'Hands-on, in the weeds, building things',
        scores: { strategist: 0, digital: 2, deal: 0, ops: 1, niche: 0 },
      },
      {
        icon: '⚖️',
        label: 'Dealroom with bankers, lawyers, and PE principals',
        sub: 'Complex structure, high pressure, close the deal',
        scores: { strategist: 0, digital: 0, deal: 2, ops: 0, niche: 0 },
      },
      {
        icon: '👥',
        label: 'Running change workshops with frontline managers',
        sub: 'Adoption is what makes the project real',
        scores: { strategist: 0, digital: 0, deal: 0, ops: 2, niche: 1 },
      },
    ],
  },
  {
    tag: 'Sector Pull',
    text: 'Which Canadian industry makes you lean forward?',
    options: [
      {
        icon: '♟️',
        label: 'Any — the problem matters more than the sector',
        sub: 'Cross-industry curiosity is the whole point',
        scores: { strategist: 2, digital: 0, deal: 0, ops: 1, niche: 0 },
      },
      {
        icon: '🏦',
        label: 'Financial services — big banks, insurance, capital markets',
        sub: 'Canada\'s biggest industry, and it\'s transforming fast',
        scores: { strategist: 0, digital: 1, deal: 1, ops: 0, niche: 2 },
      },
      {
        icon: '🛢️',
        label: 'Energy, mining, or natural resources',
        sub: 'Alberta, sustainability transitions, commodity cycles',
        scores: { strategist: 0, digital: 0, deal: 1, ops: 1, niche: 2 },
      },
      {
        icon: '🏥',
        label: 'Healthcare or life sciences',
        sub: 'Pharma, devices, hospital systems, policy',
        scores: { strategist: 0, digital: 0, deal: 0, ops: 0, niche: 2 },
      },
      {
        icon: '🤖',
        label: 'Tech, AI, or digital products',
        sub: 'Where the next decade is being built',
        scores: { strategist: 0, digital: 2, deal: 0, ops: 0, niche: 1 },
      },
    ],
  },
  {
    tag: 'Team & Pace',
    text: 'You do your best work in…',
    options: [
      {
        icon: '🏆',
        label: 'A tight team of 2–4 very sharp people',
        sub: 'Small, fast, no filler roles',
        scores: { strategist: 2, digital: 0, deal: 1, ops: 0, niche: 1 },
      },
      {
        icon: '🚀',
        label: 'A mid-size agile squad shipping in two-week sprints',
        sub: 'Velocity with just enough structure',
        scores: { strategist: 0, digital: 2, deal: 0, ops: 1, niche: 0 },
      },
      {
        icon: '🌐',
        label: 'A large cross-functional program office across multiple workstreams',
        sub: 'Scale and coordination are the challenge',
        scores: { strategist: 0, digital: 0, deal: 0, ops: 2, niche: 0 },
      },
    ],
  },
  {
    tag: 'Energy Source',
    text: 'What genuinely fires you up at work?',
    options: [
      {
        icon: '🧠',
        label: 'Cracking a novel intellectual puzzle nobody has solved cleanly',
        sub: 'First-principles thinking from a blank page',
        scores: { strategist: 2, digital: 1, deal: 0, ops: 0, niche: 1 },
      },
      {
        icon: '🔒',
        label: 'Watching a complex deal come together and close',
        sub: 'Structure, negotiate, execute, celebrate',
        scores: { strategist: 0, digital: 0, deal: 2, ops: 0, niche: 0 },
      },
      {
        icon: '📈',
        label: 'Seeing a team genuinely adopt a change you designed',
        sub: 'Impact that outlasts your invoice',
        scores: { strategist: 0, digital: 0, deal: 0, ops: 2, niche: 0 },
      },
      {
        icon: '🎯',
        label: 'Becoming the absolute authority in a niche everyone else ignores',
        sub: 'The person who gets called when nobody else can answer',
        scores: { strategist: 0, digital: 1, deal: 0, ops: 0, niche: 2 },
      },
    ],
  },
  {
    tag: 'Toolkit',
    text: 'Your natural analytical toolkit leads with…',
    options: [
      {
        icon: '🗂️',
        label: 'Frameworks, synthesis, and slide logic',
        sub: 'Minto pyramid, issue trees, 2×2 matrices',
        scores: { strategist: 2, digital: 0, deal: 0, ops: 1, niche: 0 },
      },
      {
        icon: '🐍',
        label: 'Python, SQL, dashboards, or machine learning',
        sub: 'Data does the heavy analytical lifting',
        scores: { strategist: 0, digital: 2, deal: 0, ops: 0, niche: 1 },
      },
      {
        icon: '📉',
        label: 'Financial models — DCF, comps, LBOs, cap tables',
        sub: 'Everything flows from the model',
        scores: { strategist: 0, digital: 0, deal: 2, ops: 0, niche: 0 },
      },
      {
        icon: '🔄',
        label: 'Process maps, RACI charts, and change management plans',
        sub: 'Adoption requires a roadmap, not just a recommendation',
        scores: { strategist: 0, digital: 0, deal: 0, ops: 2, niche: 0 },
      },
    ],
  },
  {
    tag: 'Geography',
    text: 'Where in Canada would you most want to be based?',
    options: [
      {
        icon: '🏙️',
        label: 'Toronto — Canada\'s consulting hub',
        sub: 'All five archetypes hire heavily here',
        scores: { strategist: 1, digital: 1, deal: 1, ops: 1, niche: 1 },
      },
      {
        icon: '🎿',
        label: 'Calgary or Edmonton — energy and natural resources capital',
        sub: 'McKinsey Calgary, Deloitte, KPMG all recruit here',
        scores: { strategist: 1, digital: 0, deal: 1, ops: 1, niche: 2 },
      },
      {
        icon: '🍁',
        label: 'Montreal — bilingual market with a distinct consulting scene',
        sub: 'McKinsey and BCG have strong Montreal offices; French is an asset',
        scores: { strategist: 2, digital: 1, deal: 0, ops: 0, niche: 1 },
      },
      {
        icon: '🌊',
        label: 'Vancouver or open to any city',
        sub: 'Accenture, Deloitte, EY operate nationally',
        scores: { strategist: 0, digital: 2, deal: 0, ops: 1, niche: 1 },
      },
    ],
  },
  {
    tag: 'Ten-Year Vision',
    text: 'In ten years, where do you picture yourself?',
    options: [
      {
        icon: '🏛️',
        label: 'Partner at a top-tier strategy firm or PE principal',
        sub: 'Advising CEOs and boards on the biggest calls',
        scores: { strategist: 2, digital: 0, deal: 1, ops: 0, niche: 0 },
      },
      {
        icon: '⚙️',
        label: 'Chief Digital or AI Officer at a Canadian bank or enterprise',
        sub: 'Running the technology transformation from the inside',
        scores: { strategist: 0, digital: 2, deal: 0, ops: 0, niche: 0 },
      },
      {
        icon: '💼',
        label: 'CFO, investment banker, or private equity partner',
        sub: 'Capital allocation and deal-making at the centre',
        scores: { strategist: 0, digital: 0, deal: 2, ops: 0, niche: 0 },
      },
      {
        icon: '🏭',
        label: 'VP Operations, COO, or supply-chain executive at a major firm',
        sub: 'Making companies actually run better at scale',
        scores: { strategist: 0, digital: 0, deal: 0, ops: 2, niche: 0 },
      },
      {
        icon: '✍️',
        label: 'Published thought leader and go-to authority in my sector',
        sub: 'Books, keynotes, the definitive voice in your space',
        scores: { strategist: 1, digital: 1, deal: 0, ops: 0, niche: 2 },
      },
    ],
  },
];

// ── ARCHETYPES ──────────────────────────────────────────────
const ARCHETYPES = {
  strategist: {
    key: 'strategist',
    emoji: '♟️',
    name: 'The Strategist',
    heroClass: 'hero-strategist',
    fillClass: 'fill-strategist',
    chartColor: '#034638',
    tagline: 'You are wired for board-level ambiguity, cross-industry puzzles, and the pressure of delivering a crisp answer fast. MBB in Toronto or Montreal is your natural habitat.',
    strengths: [
      { icon: '🧠', name: 'Structured Thinking', desc: 'Build an issue tree from any problem in 10 minutes and stress-test it fast' },
      { icon: '🎙️', name: 'Executive Presence', desc: 'Synthesize chaos into a 30-second elevator recommendation for a CEO' },
      { icon: '🌍', name: 'Cross-Industry Agility', desc: 'Onboard credibly to any sector in two weeks — because the frameworks travel' },
      { icon: '⚡', name: 'Speed Under Pressure', desc: 'Deliver an 80% answer in 48 hours rather than a perfect answer in six weeks' },
    ],
    firms: [
      { name: 'McKinsey & Company', tier: 'core', cities: 'Toronto · Calgary · Montreal', note: 'Ivey is a designated target school. Recruits annually for BA analyst roles. Toronto office is the largest Canadian hub.' },
      { name: 'Boston Consulting Group (BCG)', tier: 'core', cities: 'Toronto · Montreal', note: 'BCG actively hosts ICC-partnered events on campus. Toronto and Montreal offices recruit HBA grads directly into Associate roles.' },
      { name: 'Bain & Company', tier: 'core', cities: 'Toronto', note: 'Bain's Toronto office has recruited from Ivey since 1989. Smaller class than McKinsey/BCG but strong alumni network into PE.' },
      { name: 'Oliver Wyman', tier: 'strong', cities: 'Toronto', note: 'MBB-calibre strategy work focused on financial services, aviation, and energy. Toronto office is serious; less crowded than MBB.' },
      { name: 'Monitor Deloitte', tier: 'strong', cities: 'Toronto', note: 'Deloitte\'s strategy arm. Hosts the "Explore Monitor Deloitte" event specifically for Ivey students. Hybrid strategy + implementation.' },
      { name: 'Strategy& (PwC)', tier: 'alt', cities: 'Toronto', note: 'Formerly Booz & Company. Good entry point if you want MBB-style strategy work with Big 4 resources and broader exit options.' },
    ],
    playbook: [
      { title: 'Case prep starts in September of HBA1', detail: 'Most MBB first-round interviews at Ivey fall between January and March. Starting in September gives you four months for 100+ cases. Use ICC\'s free RocketBlocks access and the 35 casebooks on the resources portal.' },
      { title: 'Nail the "walk me through your resume" before anything else', detail: 'Interviewers form a view of you in 90 seconds. Frame every pre-Ivey and summer experience as: context → your action → quantified outcome. Practice until it sounds natural, not rehearsed.' },
      { title: 'Attend every ICC firm event, especially McKinsey Insight and BCG STARS', detail: 'These diversity and early-access programs recruit for full-time 12–18 months before standard HBA recruiting opens. Check ICC\'s event calendar in September — many deadlines are in October.' },
      { title: 'One real coffee chat beats ten cold emails', detail: 'Ask an ICC mentor who went to MBB for a 20-minute intro call. Then ask them for one warm introduction. That chain gets you to a real conversation with a recruiter faster than applying cold.' },
    ],
    synthesis: 'You are built for the speed and intellectual intensity of top-tier strategy. Ivey is one of fewer than a dozen Canadian schools where McKinsey, BCG, and Bain recruit actively — you are already at the right starting line. Invest your energy in ICC resources and firm events first, case prep second, and cold applications last. The credential gap between MBB and second-tier closes fast once you have two years of deal or PE work; get in the door at the highest tier you can.',
  },

  digital: {
    key: 'digital',
    emoji: '⚙️',
    name: 'The Digital Transformer',
    heroClass: 'hero-digital',
    fillClass: 'fill-digital',
    chartColor: '#0097A0',
    tagline: 'You sit at the intersection of strategy and technology — translating business problems into data products, AI systems, and digital platforms that actually get adopted by real organizations.',
    strengths: [
      { icon: '📊', name: 'Data Storytelling', desc: 'Turn a 10M-row dataset into one slide that changes the room\'s direction' },
      { icon: '🤖', name: 'Tech & AI Fluency', desc: 'Speak the language of engineers and translate it for the CFO' },
      { icon: '🏗️', name: 'Product Thinking', desc: 'Design for adoption, not just technical correctness' },
      { icon: '🔄', name: 'Agile Delivery', desc: 'Ship incremental value in sprints rather than big-bang launches' },
    ],
    firms: [
      { name: 'Deloitte Digital / Monitor Deloitte', tier: 'core', cities: 'Toronto · Montreal · Vancouver', note: 'Canada\'s largest consulting practice. Deloitte Digital handles AI, cloud, and platform transformation. Strong track from Ivey into their tech and strategy arms.' },
      { name: 'Accenture Strategy & Consulting', tier: 'core', cities: 'Toronto · Montreal · Vancouver · Calgary', note: 'National presence with deep digital transformation practice. $64B global revenue (FY2023). Good early ownership on large-scale Canadian clients (banks, telcos, government).' },
      { name: 'McKinsey QuantumBlack', tier: 'core', cities: 'Toronto (via McKinsey)', note: 'McKinsey\'s advanced analytics and AI arm. Recruits strong quant backgrounds at the same prestige level as the core strategy track. Stand out by pairing a technical background with Ivey business credentials.' },
      { name: 'BCG X (formerly BCG Gamma)', tier: 'strong', cities: 'Toronto (via BCG)', note: 'BCG\'s build-and-operate arm for AI products. Separate recruiting track from BCG strategy. Engineers and data scientists hired alongside business analysts.' },
      { name: 'Capgemini Invent', tier: 'strong', cities: 'Toronto · Montreal', note: 'Strong in digital and data transformation for Canadian financial services and public sector. Growing rapidly in Canada.' },
      { name: 'EY Technology Consulting', tier: 'alt', cities: 'Toronto · Across Canada', note: 'EY\'s technology advisory practice handles large-scale cloud, ERP, and AI implementation. High volume of work; faster responsibility than larger strategy arms.' },
    ],
    playbook: [
      { title: 'Build two polished GitHub projects before applying', detail: 'A Kaggle top-10% finish or two clean repos solving a real business problem signals far more than a GPA to digital consulting recruiters. Frame each project around a business outcome, not just the code.' },
      { title: 'Get one cloud certification', detail: 'AWS Solutions Architect Associate (~80 hours of prep) or GCP Professional Data Engineer is a direct credibility signal. Deloitte and Accenture actively track certifications for junior hires in their digital arms.' },
      { title: 'Apply directly to digital practice groups, not just general consulting pools', detail: 'BCG X, McKinsey QuantumBlack, and Deloitte Digital have separate application processes from the generalist track. Requirements differ, and competition is less intense because fewer candidates know these tracks exist.' },
      { title: 'Always anchor technical work to a business number', detail: 'Recruiters hire for what your Python skills made possible — not for the Python itself. Every technical project on your resume should end with a revenue, cost, or efficiency outcome.' },
    ],
    synthesis: 'Digital transformation is the fastest-growing segment in Canadian consulting — every major Canadian bank, telco, and retailer is mid-transformation. Your edge is rare: you can build and advise. Prioritize Monitor Deloitte and Accenture for scale and early responsibility, and McKinsey QuantumBlack or BCG X if you want MBB prestige in a technical track. A strong portfolio and one cloud certification will do more for your candidacy than another case prep session.',
  },

  deal: {
    key: 'deal',
    emoji: '💼',
    name: 'The Deal Advisor',
    heroClass: 'hero-deal',
    fillClass: 'fill-deal',
    chartColor: '#9a7100',
    tagline: 'You operate in the high-stakes intersection of finance and strategy — M&A due diligence, restructuring, and transaction advisory, where the financial model is the argument and the deadline is always tomorrow.',
    strengths: [
      { icon: '💹', name: 'Financial Modelling', desc: 'Build a three-statement model, LBO, or DCF under time pressure and defend every assumption' },
      { icon: '⚖️', name: 'Deal Structuring', desc: 'Understand valuation, earn-outs, reps & warranties, and capital structure trade-offs' },
      { icon: '🔥', name: 'High-Pressure Performance', desc: 'Stay sharp when the timeline compresses to 36 hours before close' },
      { icon: '🔍', name: 'Commercial Due Diligence', desc: 'Separate market signal from noise in a three-week sprint' },
    ],
    firms: [
      { name: 'EY-Parthenon', tier: 'core', cities: 'Toronto', note: 'Strategy + transactions. Strong in commercial due diligence for PE-backed deals and corporate M&A. Combines strategy rigor with deal pace. Actively recruits Ivey HBAs.' },
      { name: 'PwC Deals Advisory', tier: 'core', cities: 'Toronto · Across Canada', note: 'One of Canada\'s largest transaction services practices. Financial due diligence and valuation on hundreds of deals per year. High volume builds modelling speed fast.' },
      { name: 'Alvarez & Marsal (A&M)', tier: 'core', cities: 'Toronto', note: 'Premier performance improvement and restructuring firm. Worked on notable Canadian restructurings. Analyst responsibility rivals that of investment banking.' },
      { name: 'FTI Consulting', tier: 'strong', cities: 'Toronto', note: 'Economic, financial, and forensic advisory. Strong in restructuring and M&A advisory. $3.5B global revenue (2023). Toronto office recruits from Canadian universities.' },
      { name: 'KPMG Deal Advisory', tier: 'strong', cities: 'Toronto · Across Canada', note: 'KPMG has 40 Canadian offices and 7,000 employees. Deal Advisory covers M&A, valuations, and restructuring. Good for breadth of deal exposure early.' },
      { name: 'Deloitte Corporate Finance', tier: 'alt', cities: 'Toronto · Across Canada', note: 'Deloitte\'s M&A and transaction advisory arm. Complements Monitor Deloitte on the strategic side. Broad access to Canadian corporate and PE clients.' },
    ],
    playbook: [
      { title: 'Pass CFA Level 1 before summer recruiting', detail: 'CFA Level 1 signals financial commitment and boosts credibility in deal-side roles. ~300 hours of prep; register six months out. Deloitte and PwC Deals recruiters specifically look for it on HBA resumes.' },
      { title: 'Build a model from scratch — then explain it in an interview', detail: 'Work through a free LBO or DCF model from Macabacus or CFI. Being able to walk through your own model — its assumptions, sensitivities, where it breaks — is more impressive than describing a template you used.' },
      { title: 'Target restructuring groups for faster junior responsibility', detail: 'A&M and FTI put junior hires on creditor committee calls in year one. More responsibility, faster, than traditional M&A advisory. The exit paths into PE are strong from both firms.' },
      { title: 'Use Pitchbook through the Ivey library to research Canadian deals', detail: 'Research two or three recent Canadian transactions in your target sector. Referencing a specific deal ("I noticed you advised on the X acquisition of Y last fall…") in a networking email doubles response rates.' },
    ],
    synthesis: 'Deal advisory in Canada is intensely competitive but rewards financial fluency faster than generalist consulting. Canadian M&A volume remains robust in financial services, energy, and tech. Your recruiting edge is demonstrating you can build a model and defend it — not just read one. EY-Parthenon and A&M offer the best combination of deal intensity and learning. Big 4 transaction services is a high-volume training ground that feeds both PE and banking exits within two years.',
  },

  ops: {
    key: 'ops',
    emoji: '🏗️',
    name: 'The Operational Architect',
    heroClass: 'hero-ops',
    fillClass: 'fill-ops',
    chartColor: '#4F2D7F',
    tagline: 'You design and implement the systems that make Canadian companies actually work — supply chains, operating model redesigns, large-scale change programs, and ERP transformations that stick.',
    strengths: [
      { icon: '🗺️', name: 'Process Architecture', desc: 'Map, diagnose, and redesign end-to-end workflows at enterprise scale' },
      { icon: '👥', name: 'Change Leadership', desc: 'Design for the human as much as the system — adoption is the real deliverable' },
      { icon: '📐', name: 'Program Management', desc: 'Coordinate 10+ workstreams without losing the critical path' },
      { icon: '🔧', name: 'Lean / Operational Excellence', desc: 'Eliminate waste with DMAIC, value-stream mapping, and structured kaizen' },
    ],
    firms: [
      { name: 'Monitor Deloitte / Deloitte Consulting', tier: 'core', cities: 'Toronto · Across Canada', note: 'Canada\'s largest consulting practice. Strategy & Operations handles some of the biggest transformation programs nationally. Ivey is a target school for multiple practices.' },
      { name: 'Kearney', tier: 'core', cities: 'Toronto', note: 'Founded on supply chain and operations. Gold standard for supply-chain strategy globally. Smaller and more specialized than Big 4; faster access to client leadership.' },
      { name: 'PwC Advisory', tier: 'core', cities: 'Toronto · Across Canada', note: 'Finance transformation, operating model design, and shared services. Deep roster of Canadian bank and government clients. Strong HBA hiring track.' },
      { name: 'Accenture Operations', tier: 'strong', cities: 'Toronto · Montreal · Vancouver', note: 'Large-scale operational outsourcing and transformation. Strong in Canadian financial services and telecommunications. Early ownership on national programs.' },
      { name: 'KPMG Advisory', tier: 'strong', cities: 'Toronto · Across Canada', note: 'Regulatory and risk transformation plus operations. 40 Canadian offices. Recruits broadly and offers fast responsibility in public sector and financial services operations.' },
      { name: 'IBM Consulting', tier: 'alt', cities: 'Toronto · Montreal · Calgary', note: 'Significant Canadian footprint. Strong in SAP, cloud, and operational transformation for Canadian enterprises and government. Less prestigious but deep technical delivery.' },
    ],
    playbook: [
      { title: 'Get Lean Six Sigma Green Belt certified before recruiting', detail: 'A two-day online course plus one practice project yields a Green Belt certification for ~$300. It\'s a direct signal to operations practices and frequently shows up on Deloitte and Kearney JDs for junior hires.' },
      { title: 'Apply to implementation arms and strategy arms separately', detail: 'Most Big 4 firms have distinct applications for their strategy vs. implementation practices. Apply to both. The implementation arm hires more, pays comparably, and gives real delivery ownership faster.' },
      { title: 'Pick one operational vertical and own it', detail: 'Operations consulting rewards depth. Choose one: supply chain, finance transformation, HR operating model, or healthcare operations. Frame every Ivey case and summer experience through that lens in your cover letter.' },
      { title: 'Quantify every operational outcome you\'ve ever touched', detail: 'Operations interviewers love numbers: throughput improvement %, cost per unit reduction, cycle time cut. If you ran a campus club or team, express it as: managed X people, delivered Y event, reduced cost by Z%.' },
    ],
    synthesis: 'Operations consulting is the backbone of the industry — the majority of Canadian consulting revenue comes from implementation, not strategy slides. Your competitive edge is rare: the ability to design a system and get humans to adopt it. Deloitte and Kearney are your top targets; KPMG and Accenture offer faster responsibility and strong national networks. An operations candidate who can quantify throughput, cost, or cycle-time improvements wins interviews at every tier.',
  },

  niche: {
    key: 'niche',
    emoji: '🔬',
    name: 'The Niche Expert',
    heroClass: 'hero-niche',
    fillClass: 'fill-niche',
    chartColor: '#c05c2a',
    tagline: 'You are drawn to deep domain mastery — becoming the definitive authority in one Canadian sector where your technical credibility unlocks access that generalists never earn.',
    strengths: [
      { icon: '🏅', name: 'Domain Credibility', desc: 'Clients hire you because you\'ve solved this exact problem in this exact sector before' },
      { icon: '💡', name: 'Thought Leadership', desc: 'Publish the framework others cite — the best firms find you, not the reverse' },
      { icon: '🔎', name: 'Specialized Problem-Solving', desc: 'See patterns invisible to generalists from 1,000 hours of sector pattern recognition' },
      { icon: '🤝', name: 'Client Intimacy', desc: 'Long-term sector relationships that generate repeat work and referrals across Canada' },
    ],
    firms: [
      { name: 'L.E.K. Consulting', tier: 'core', cities: 'Toronto', note: 'Best-in-class for life sciences, healthcare strategy, and media. Rigorous, boutique, and less known than MBB — which is exactly why offer rates are higher and the work is more specialized from day one.' },
      { name: 'ZS Associates', tier: 'core', cities: 'Toronto', note: 'Pure-play life sciences and pharma consulting. Works on commercial strategy, pricing, and digital health for major Canadian and global pharma clients. Recruits STEM and business grads.' },
      { name: 'Oliver Wyman (Financial Services)', tier: 'core', cities: 'Toronto', note: 'If your niche is Canadian banking, insurance, or capital markets, Oliver Wyman\'s Toronto office does MBB-calibre work in a concentrated sector practice.' },
      { name: 'IQVIA', tier: 'strong', cities: 'Toronto · Across Canada', note: 'Life sciences data and consulting giant. Strong Canadian pharma practice. Entry point into healthcare consulting with deep proprietary data and modelling.' },
      { name: 'Guidehouse', tier: 'strong', cities: 'Toronto · Ottawa', note: 'Public sector, energy, and healthcare advisory. Ottawa office serves federal government clients. Strong for students interested in policy-adjacent consulting.' },
      { name: 'Dalberg Advisors', tier: 'alt', cities: 'Toronto (regional)', note: 'Top-tier boutique for social impact, global health, and development finance. The MBB of the impact space. Selects for domain passion and pre-Ivey experience in the sector.' },
    ],
    playbook: [
      { title: 'Start building public credibility in your sector now — not at graduation', detail: '3–5 LinkedIn articles per year on your target sector compound dramatically. Cite primary sources (CIHI for healthcare, NEB for energy, OSFI for financial services). Boutique recruiters search LinkedIn by sector keyword.' },
      { title: 'Get technical experience before you consult', detail: 'Clinical rotations, policy internships, lab work, or startup roles in your sector are worth more to a niche firm than another generalist internship. L.E.K. and ZS hire for credentials, not just GPA.' },
      { title: 'Read the firm\'s published work before you apply', detail: 'L.E.K., ZS, and Oliver Wyman all publish sector-specific thought leadership. Reference a specific report in your cover letter — it demonstrates you engaged with the work, not just the careers page.' },
      { title: 'Email a principal or associate directly — most boutiques don\'t do OCR', detail: 'L.E.K. Toronto, ZS, and Guidehouse often recruit outside of on-campus recruiting timelines. A specific, well-researched cold email to a senior consultant in your target practice has a surprisingly high response rate.' },
    ],
    synthesis: 'Niche expertise is the most defensible consulting career position — it compounds over decades while generalist skills face growing AI pressure on routine analysis. Your recruiting advantage is specificity: most Ivey candidates compete on GPA and case skills; you compete on a track record in a domain. Prioritize L.E.K. and ZS Associates for structured sector paths, and Dalberg if impact is your north star. The best boutique firms recruit people they already know — start building your public voice in HBA1.',
  },
};

// ── STATE ──────────────────────────────────────────────────
let currentQ  = 0;
let answers   = new Array(QUESTIONS.length).fill(null);
let chartInst = null;

// ── NAVIGATION ─────────────────────────────────────────────
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo(0, 0);
}

function startQuiz() {
  currentQ = 0;
  answers  = new Array(QUESTIONS.length).fill(null);
  renderQuestion();
  showScreen('quiz');
}

function restartQuiz() {
  if (chartInst) { chartInst.destroy(); chartInst = null; }
  startQuiz();
}

// ── QUIZ ───────────────────────────────────────────────────
function renderQuestion() {
  const q     = QUESTIONS[currentQ];
  const total = QUESTIONS.length;
  const pct   = Math.round((currentQ / total) * 100);

  document.getElementById('progressFill').style.width  = pct + '%';
  document.getElementById('progressLabel').textContent = `${currentQ + 1} / ${total}`;
  document.getElementById('qCounter').textContent      = `Question ${currentQ + 1} of ${total}`;
  document.getElementById('backBtn').style.display     = currentQ > 0 ? 'flex' : 'none';

  const selected   = answers[currentQ];
  const optionsHTML = q.options.map((opt, i) => `
    <button class="opt-card ${selected === i ? 'selected' : ''}" onclick="selectOption(${i})">
      <div class="opt-icon">${opt.icon}</div>
      <div>
        <div class="opt-main">${opt.label}</div>
        ${opt.sub ? `<div class="opt-sub">${opt.sub}</div>` : ''}
      </div>
    </button>
  `).join('');

  const area = document.getElementById('questionArea');
  area.style.animation = 'none';
  area.innerHTML = `
    <div class="q-tag">${q.tag}</div>
    <div class="q-text">${q.text}</div>
    <div class="options-grid">${optionsHTML}</div>
  `;
  requestAnimationFrame(() => { area.style.animation = 'slideUp 0.3s ease both'; });
}

function selectOption(index) {
  answers[currentQ] = index;
  renderQuestion();
  setTimeout(() => {
    if (currentQ < QUESTIONS.length - 1) {
      currentQ++;
      renderQuestion();
    } else {
      computeResults();
    }
  }, 260);
}

function prevQuestion() {
  if (currentQ > 0) { currentQ--; renderQuestion(); }
}

// ── SCORING ────────────────────────────────────────────────
function computeResults() {
  const totals = { strategist: 0, digital: 0, deal: 0, ops: 0, niche: 0 };
  answers.forEach((ansIdx, qIdx) => {
    if (ansIdx === null) return;
    const sc = QUESTIONS[qIdx].options[ansIdx].scores;
    Object.keys(sc).forEach(k => { totals[k] += sc[k]; });
  });
  const sorted    = Object.entries(totals).sort((a, b) => b[1] - a[1]);
  const topKey    = sorted[0][0];
  const maxScore  = Math.max(sorted[0][1], 1);
  const normed    = {};
  sorted.forEach(([k, v]) => { normed[k] = Math.round((v / maxScore) * 100); });
  renderResults(topKey, sorted, normed);
}

// ── RESULTS ────────────────────────────────────────────────
const ARCH_LABELS = {
  strategist: { label: 'The Strategist',       emoji: '♟️' },
  digital:    { label: 'Digital Transformer',  emoji: '⚙️' },
  deal:       { label: 'Deal Advisor',          emoji: '💼' },
  ops:        { label: 'Operational Architect', emoji: '🏗️' },
  niche:      { label: 'Niche Expert',          emoji: '🔬' },
};

function renderResults(topKey, sorted, normed) {
  const arch = ARCHETYPES[topKey];
  const matchPct = normed[topKey];

  // Score bars
  const scoreBarsHTML = sorted.map(([k]) => {
    const pct = normed[k];
    return `
      <div class="score-row">
        <div class="score-meta">
          <div class="score-arch">${ARCH_LABELS[k].emoji} ${ARCH_LABELS[k].label}</div>
          <div class="score-pct">${pct}%</div>
        </div>
        <div class="score-track">
          <div class="score-fill ${ARCHETYPES[k].fillClass}" data-w="${pct}"></div>
        </div>
      </div>`;
  }).join('');

  // Strengths
  const strengthsHTML = arch.strengths.map(s => `
    <div class="white-card">
      <div class="strength-icon">${s.icon}</div>
      <div class="strength-name">${s.name}</div>
      <div class="strength-desc">${s.desc}</div>
    </div>`).join('');

  // Firms
  const tierLabel = { core: 'Core Target', strong: 'Strong Fit', alt: 'Good Alternative' };
  const tierClass = { core: 'tier-core', strong: 'tier-strong', alt: 'tier-alt' };
  const firmsHTML = arch.firms.map(f => `
    <div class="white-card">
      <div class="tier-pill ${tierClass[f.tier]}">${tierLabel[f.tier]}</div>
      <div class="firm-name">${f.name}</div>
      <div class="firm-city">📍 ${f.cities}</div>
      <div class="firm-note">${f.note}</div>
    </div>`).join('');

  // Playbook
  const playbookHTML = arch.playbook.map((p, i) => `
    <div class="white-card">
      <div class="play-step">
        <div class="play-num">${i + 1}</div>
        <div class="play-title">${p.title}</div>
      </div>
      <div class="play-detail">${p.detail}</div>
    </div>`).join('');

  // Chart data
  const chartOrder  = ['strategist', 'digital', 'deal', 'ops', 'niche'];
  const chartLabels = ['Strategist', 'Digital', 'Deal', 'Operations', 'Niche'];
  const chartVals   = chartOrder.map(k => normed[k] || 0);

  document.getElementById('resultsBody').innerHTML = `
    <!-- HERO -->
    <div class="r-hero ${arch.heroClass}">
      <span class="r-emoji">${arch.emoji}</span>
      <div class="r-eyebrow">Your Consulting Archetype</div>
      <h2 class="r-name">${arch.name}</h2>
      <p class="r-tagline">${arch.tagline}</p>
      <div class="r-badge">${matchPct}% match with this archetype</div>
    </div>

    <!-- SCORE BREAKDOWN -->
    <div class="r-section">
      <div class="r-section-title">How you scored across all five archetypes</div>
      <div class="white-card" style="padding: 28px 32px;">
        <div class="score-list">${scoreBarsHTML}</div>
      </div>
    </div>

    <!-- RADAR CHART -->
    <div class="chart-container r-section">
      <div class="r-section-title">Your consulting profile</div>
      <div class="chart-wrap"><canvas id="radarChart"></canvas></div>
    </div>

    <!-- STRENGTHS -->
    <div class="r-section">
      <div class="r-section-title">Your core strengths</div>
      <div class="card-grid-2">${strengthsHTML}</div>
    </div>

    <!-- FIRMS -->
    <div class="r-section">
      <div class="r-section-title">Canadian firms that match your profile</div>
      <div class="card-grid-3">${firmsHTML}</div>
    </div>

    <!-- PLAYBOOK -->
    <div class="r-section">
      <div class="r-section-title">Your ICC recruiting playbook</div>
      <div class="card-grid-3">${playbookHTML}</div>
    </div>

    <!-- SYNTHESIS -->
    <div class="r-synthesis">
      <div class="r-synth-label">ICC Bottom Line</div>
      <div class="r-synth-title">What this means for your HBA1 recruiting</div>
      <p class="r-synth-text">${arch.synthesis}</p>
      <div class="synth-actions">
        <button class="synth-btn" onclick="restartQuiz()">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M1 4v6h6M23 20v-6h-6"/><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"/></svg>
          Retake Quiz
        </button>
        <button class="synth-btn" onclick="copyResult('${arch.name}')">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
          Share My Result
        </button>
      </div>
    </div>

    <div class="r-footer">
      Published by Ivey Consulting Club · Ivey Business School · Western University<br>
      For more resources, visit <strong>iveyconsultingclub.com</strong>
    </div>
  `;

  showScreen('results');

  // Animate bars
  setTimeout(() => {
    document.querySelectorAll('.score-fill').forEach(el => {
      el.style.width = el.dataset.w + '%';
    });
  }, 120);

  // Radar chart
  setTimeout(() => {
    const ctx = document.getElementById('radarChart').getContext('2d');
    if (chartInst) chartInst.destroy();
    chartInst = new Chart(ctx, {
      type: 'radar',
      data: {
        labels: chartLabels,
        datasets: [{
          label: 'Your Profile',
          data: chartVals,
          backgroundColor: arch.chartColor + '1a',
          borderColor: arch.chartColor,
          borderWidth: 2.5,
          pointBackgroundColor: arch.chartColor,
          pointBorderColor: '#fff',
          pointBorderWidth: 2,
          pointRadius: 5,
        }],
      },
      options: {
        responsive: true,
        scales: {
          r: {
            beginAtZero: true,
            max: 100,
            ticks: { display: false, stepSize: 25 },
            grid:         { color: 'rgba(0,0,0,0.06)' },
            angleLines:   { color: 'rgba(0,0,0,0.06)' },
            pointLabels:  { color: '#6c757d', font: { family: 'Inter', size: 12, weight: '600' } },
          },
        },
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: { label: ctx => ` ${ctx.raw}%` },
            backgroundColor: '#1a1a2e',
            titleColor: '#fff',
            bodyColor: '#adb5bd',
            borderColor: 'rgba(255,255,255,0.1)',
            borderWidth: 1,
          },
        },
      },
    });
  }, 350);
}

function copyResult(archetypeName) {
  const text = `I just took the ICC ConsultPath quiz and I'm "${archetypeName}"! Find your consulting path at iveyconsultingclub.com`;
  navigator.clipboard.writeText(text)
    .then(() => alert('Result copied — share it with your HBA1 cohort!'))
    .catch(() => alert(`Your archetype: ${archetypeName} — share with your cohort!`));
}
