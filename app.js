/* =============================================
   CONSULTIQ — QUIZ ENGINE
   ============================================= */

// Archetype keys
const A = { S: 'strategist', D: 'digital', $: 'deal', O: 'ops', N: 'niche' };

// ── QUESTIONS ──────────────────────────────────────────────────────────────
const QUESTIONS = [
  {
    category: 'Problem Solving',
    text: 'When faced with a hard problem, your instinct is to…',
    options: [
      { icon: '🔭', label: 'Build a hypothesis and stress-test it with data', sub: 'Start with an answer, then prove it',  scores: { strategist:2, digital:1, deal:0, ops:0, niche:0 } },
      { icon: '🗺️', label: 'Map the end-to-end process to find the bottleneck', sub: 'Follow the flow until something breaks', scores: { strategist:0, digital:1, deal:0, ops:2, niche:1 } },
      { icon: '💹', label: 'Model the financials and find where value leaks', sub: 'Numbers reveal the real story',          scores: { strategist:1, digital:0, deal:2, ops:0, niche:0 } },
      { icon: '📚', label: 'Go deep into one domain until you know it cold', sub: 'Depth beats breadth, every time',         scores: { strategist:0, digital:0, deal:0, ops:0, niche:2 } },
    ],
  },
  {
    category: 'Proudest Output',
    text: 'The deliverable that would make you feel most proud is…',
    options: [
      { icon: '📄', label: 'A tight strategy memo a CEO acts on immediately', sub: 'Crisp, decisive, board-ready',          scores: { strategist:2, digital:0, deal:0, ops:0, niche:1 } },
      { icon: '📊', label: 'A live dashboard your client checks every morning', sub: 'Always-on, data-driven insight',      scores: { strategist:0, digital:2, deal:0, ops:1, niche:0 } },
      { icon: '🤝', label: 'A deal that closes and creates shareholder value', sub: 'Value captured, not just advised',     scores: { strategist:0, digital:0, deal:2, ops:0, niche:0 } },
      { icon: '🏗️', label: 'A transformation still running 3 years later', sub: 'Sustainable change, not a one-off',      scores: { strategist:0, digital:0, deal:0, ops:2, niche:1 } },
    ],
  },
  {
    category: 'Career Shape',
    text: 'Would you rather gain generalist breadth or specialist depth?',
    options: [
      { icon: '🌍', label: 'Generalist breadth — see every industry and function', sub: 'Variety is the point',            scores: { strategist:2, digital:1, deal:0, ops:1, niche:0 } },
      { icon: '🔬', label: 'Specialist depth — own one vertical inside-out', sub: 'Be the definitive expert',             scores: { strategist:0, digital:1, deal:1, ops:0, niche:2 } },
    ],
  },
  {
    category: 'Project Rhythm',
    text: 'Your ideal project timeline looks like…',
    options: [
      { icon: '⚡', label: '6–8 weeks — fast diagnostic, clear recommendation', sub: 'In, out, impact',                   scores: { strategist:2, digital:0, deal:0, ops:0, niche:0 } },
      { icon: '📅', label: '3–6 months — phased, with implementation milestones', sub: 'Watch the change happen',        scores: { strategist:0, digital:1, deal:0, ops:2, niche:0 } },
      { icon: '🔔', label: 'Deal-driven — 3 weeks of intensity, then close', sub: 'Sprint, close, repeat',               scores: { strategist:0, digital:0, deal:2, ops:0, niche:0 } },
      { icon: '🌱', label: 'Multi-year program — build something that scales', sub: 'Long arc, deep ownership',           scores: { strategist:0, digital:2, deal:0, ops:1, niche:2 } },
    ],
  },
  {
    category: 'Handling Ambiguity',
    text: 'When the problem isn\'t fully defined, you…',
    options: [
      { icon: '🧩', label: 'Love it — structure and clarity emerge through the work', sub: 'Fog is a feature, not a bug', scores: { strategist:2, digital:0, deal:1, ops:0, niche:0 } },
      { icon: '📋', label: 'Reach for proven playbooks and frameworks', sub: 'Don\'t reinvent the wheel',                 scores: { strategist:0, digital:0, deal:0, ops:2, niche:1 } },
      { icon: '💻', label: 'Prefer clear specs — then I execute with precision', sub: 'Clarity unlocks quality',          scores: { strategist:0, digital:2, deal:0, ops:0, niche:1 } },
    ],
  },
  {
    category: 'Sector Pull',
    text: 'Which sector makes you lean forward?',
    options: [
      { icon: '♟️', label: 'Any — the puzzle matters more than the industry', sub: 'Cross-sector curiosity',             scores: { strategist:2, digital:0, deal:0, ops:1, niche:0 } },
      { icon: '🤖', label: 'Tech, AI, and digital products', sub: 'Where the future is being built',                    scores: { strategist:0, digital:2, deal:0, ops:0, niche:1 } },
      { icon: '💰', label: 'Finance, private equity, M&A', sub: 'Capital allocation is power',                          scores: { strategist:0, digital:0, deal:2, ops:0, niche:0 } },
      { icon: '🏥', label: 'Healthcare, life sciences, or pharma', sub: 'Complexity with real human stakes',            scores: { strategist:0, digital:0, deal:0, ops:1, niche:2 } },
    ],
  },
  {
    category: 'Client Interaction',
    text: 'Your dream client interaction is…',
    options: [
      { icon: '🎙️', label: 'Weekly steering committee with the CEO', sub: 'Board-level visibility, high stakes',        scores: { strategist:2, digital:0, deal:0, ops:1, niche:0 } },
      { icon: '🖥️', label: 'Embedded in the product team, shipping daily', sub: 'Hands-on, in the weeds',               scores: { strategist:0, digital:2, deal:0, ops:1, niche:0 } },
      { icon: '⚖️', label: 'Dealroom with bankers, lawyers, and principals', sub: 'High-voltage, high-stakes',          scores: { strategist:0, digital:0, deal:2, ops:0, niche:0 } },
      { icon: '👥', label: 'Running workshops with front-line managers', sub: 'Adoption wins the project',               scores: { strategist:0, digital:0, deal:0, ops:2, niche:1 } },
    ],
  },
  {
    category: 'Team Preference',
    text: 'You do your best work in…',
    options: [
      { icon: '🏆', label: 'A small, elite team of 2–4 sharp minds', sub: 'Dense, fast, no fat',                        scores: { strategist:2, digital:0, deal:1, ops:0, niche:1 } },
      { icon: '🚀', label: 'A mid-size agile squad shipping in sprints', sub: 'Velocity with some structure',            scores: { strategist:1, digital:2, deal:0, ops:1, niche:0 } },
      { icon: '🌐', label: 'A large cross-functional program office', sub: 'Scale requires coordination',                scores: { strategist:0, digital:0, deal:0, ops:2, niche:0 } },
    ],
  },
  {
    category: 'Energy Source',
    text: 'What genuinely gets you fired up at work?',
    options: [
      { icon: '🧠', label: 'Cracking a novel intellectual puzzle no one has solved', sub: 'The thrill of first-principles thinking', scores: { strategist:2, digital:1, deal:0, ops:0, niche:1 } },
      { icon: '🔒', label: 'Watching a complex deal come together and close', sub: 'Structure, negotiate, execute',      scores: { strategist:0, digital:0, deal:2, ops:0, niche:0 } },
      { icon: '📈', label: 'Seeing a team adopt a change you designed', sub: 'Impact that outlasts the project',        scores: { strategist:0, digital:0, deal:0, ops:2, niche:0 } },
      { icon: '🎯', label: 'Being the absolute authority on your niche', sub: 'The person everyone calls',              scores: { strategist:0, digital:1, deal:0, ops:0, niche:2 } },
    ],
  },
  {
    category: 'Travel Appetite',
    text: 'How do you feel about living out of a carry-on?',
    options: [
      { icon: '✈️', label: 'Pack a bag every Monday — I\'m in', sub: 'New city every week is the lifestyle',            scores: { strategist:2, digital:0, deal:0, ops:1, niche:0 } },
      { icon: '🗓️', label: '25–50% travel is a fair trade-off', sub: 'Occasional client site, mostly flexible',         scores: { strategist:1, digital:1, deal:1, ops:1, niche:0 } },
      { icon: '🏠', label: 'Mostly local or remote — city matters to me', sub: 'Presence without the jet lag',          scores: { strategist:0, digital:2, deal:0, ops:0, niche:2 } },
    ],
  },
  {
    category: 'Toolkit',
    text: 'Your natural toolkit leads with…',
    options: [
      { icon: '🗂️', label: 'Frameworks, slide structure, synthesis', sub: 'Minto pyramid, issue trees, 2×2s',          scores: { strategist:2, digital:0, deal:0, ops:1, niche:0 } },
      { icon: '🐍', label: 'Python, SQL, dashboards, ML pipelines', sub: 'Data does the heavy lifting',                 scores: { strategist:0, digital:2, deal:0, ops:0, niche:1 } },
      { icon: '📉', label: 'Financial models, DCF, cap tables, LBO', sub: 'Everything flows from the model',            scores: { strategist:0, digital:0, deal:2, ops:0, niche:0 } },
      { icon: '🔄', label: 'Process maps, RACI charts, change plans', sub: 'Adoption requires a roadmap',               scores: { strategist:0, digital:0, deal:0, ops:2, niche:0 } },
    ],
  },
  {
    category: 'Long-term Vision',
    text: 'In 10 years, you see yourself as…',
    options: [
      { icon: '🏛️', label: 'Partner at a top strategy firm or PE principal', sub: 'Advising CEOs and boards',           scores: { strategist:2, digital:0, deal:1, ops:0, niche:0 } },
      { icon: '⚙️', label: 'Chief Digital or AI Officer at a Fortune 500', sub: 'Running the transformation from inside', scores: { strategist:0, digital:2, deal:0, ops:0, niche:0 } },
      { icon: '💼', label: 'CFO, investment banker, or PE partner', sub: 'Capital and deal-making at the center',      scores: { strategist:0, digital:0, deal:2, ops:0, niche:0 } },
      { icon: '🏭', label: 'VP Operations, COO, or supply-chain executive', sub: 'Making companies run better',        scores: { strategist:0, digital:0, deal:0, ops:2, niche:0 } },
      { icon: '✍️', label: 'Published thought leader and sector authority', sub: 'Books, keynotes, the go-to voice',    scores: { strategist:1, digital:1, deal:0, ops:0, niche:2 } },
    ],
  },
];

// ── ARCHETYPE DEFINITIONS ──────────────────────────────────────────────────
const ARCHETYPES = {
  strategist: {
    key: 'strategist',
    emoji: '♟️',
    name: 'The Strategist',
    tagline: 'You thrive on board-level ambiguity, cross-industry puzzles, and the pressure of delivering a crisp answer fast. MBB is your natural habitat.',
    color: '#4f7ef8',
    colorClass: 'color-strategist',
    bgClass: 'bg-strategist',
    borderClass: 'border-strategist',
    fillClass: 'fill-strategist',
    glowClass: 'glow-strategist',
    badgeClass: 'badge-strategist',
    strengths: [
      { icon: '🧠', name: 'Structured Thinking', desc: 'Break any problem into a mutually exclusive, collectively exhaustive issue tree' },
      { icon: '🎙️', name: 'Executive Presence', desc: 'Synthesize complexity into 30-second elevator answers for C-suite' },
      { icon: '🌍', name: 'Cross-Industry Agility', desc: 'Onboard to a new sector in 2 weeks and sound credible' },
      { icon: '⚡', name: 'Speed Under Pressure', desc: 'Deliver 80% answer in 48 hours rather than a perfect answer in 6 weeks' },
    ],
    firms: [
      { name: 'McKinsey & Company', tier: 'target', note: '#1 brand globally; generalist entry, deep specialization post-2yr. ~$190K all-in MBA offer (2024).' },
      { name: 'Boston Consulting Group', tier: 'target', note: 'Strong on innovation and digital. BCG X is their build arm. Slightly more collaborative culture than McKinsey.' },
      { name: 'Bain & Company', tier: 'target', note: 'Best-known for PE/Bain Capital alumni network. Highest associate retention among MBB (est.).' },
      { name: 'Oliver Wyman', tier: 'stretch', note: 'MBB-caliber strategy in financial services and transport. Less AUM than MBB but serious intellectual rigor.' },
      { name: 'Strategy& (PwC)', tier: 'stretch', note: 'Formerly Booz. Hybrid strategy + execution; good entry point if you want Big 4 resources with strategy DNA.' },
      { name: 'L.E.K. Consulting', tier: 'safety', note: 'Strong in PE due-diligence and healthcare strategy. Rigorous, leaner, and easier to get than MBB.' },
    ],
    playbook: [
      { title: 'Case prep is non-negotiable', detail: 'Target 150+ cases. Use CaseCoach or RocketBlocks. Practice live partner cases, not just solo prep. Interviewers detect solo-practice patterns.' },
      { title: 'Build a 2-min personal story', detail: '"Walk me through your resume" separates offers. Frame every experience as: situation → your action → quantified result. Rehearse until it sounds natural.' },
      { title: 'Apply to diversity programs early', detail: 'McKinsey Insight, BCG STARS, and Bain\'s ACCESS programs recruit for full-time 18 months before campus recruiting opens. Apply in sophomore/junior fall.' },
      { title: 'Network with precision', detail: 'One genuine coffee chat with a consultant beats 10 cold emails. Ask about their worst engagement — it builds real rapport and differentiates you.' },
    ],
    synthesis: 'You are wired for the ambiguity and speed of top-tier strategy. Your edge is synthesis speed — translating chaotic data into a crisp CEO recommendation. Invest your recruiting energy in MBB first, then Oliver Wyman and L.E.K. as intelligent alternatives. The credential gap between MBB and second-tier closes quickly once you have 2 years of deal or PE work; get in the door at the highest tier you can.',
  },

  digital: {
    key: 'digital',
    emoji: '⚙️',
    name: 'The Digital Transformer',
    tagline: 'You bridge strategy and technology — translating business problems into data products, AI systems, and digital platforms that actually get adopted.',
    color: '#22d3a0',
    colorClass: 'color-digital',
    bgClass: 'bg-digital',
    borderClass: 'border-digital',
    fillClass: 'fill-digital',
    glowClass: 'glow-digital',
    badgeClass: 'badge-digital',
    strengths: [
      { icon: '📊', name: 'Data Storytelling', desc: 'Turn a 10M-row dataset into one slide that changes the room' },
      { icon: '🤖', name: 'AI/ML Fluency', desc: 'Speak the language of data scientists and explain it to the board' },
      { icon: '🏗️', name: 'Product Thinking', desc: 'Design solutions for adoption, not just technical correctness' },
      { icon: '🔄', name: 'Agile Delivery', desc: 'Ship incremental value in sprints rather than big-bang launches' },
    ],
    firms: [
      { name: 'BCG X (fmr. BCG Gamma)', tier: 'target', note: 'BCG\'s build-and-operate arm for AI products. Recruits engineers and data scientists at same prestige as MBB strategy.' },
      { name: 'McKinsey QuantumBlack', tier: 'target', note: 'Analytics-first arm. Works on advanced analytics for Fortune 500. Strong AI/ML and data engineering track.' },
      { name: 'Deloitte AI & Data', tier: 'target', note: 'Largest digital consulting practice globally by headcount (~430K). Strong on cloud, SAP, and AI implementation.' },
      { name: 'Accenture Strategy & Consulting', tier: 'stretch', note: '$64B revenue (FY2023). Dominant in large-scale digital transformation. Less prestigious than MBB but unmatched in tech delivery.' },
      { name: 'Capgemini Invent', tier: 'stretch', note: 'European powerhouse in digital transformation. Strong in automotive, energy, and public sector tech.' },
      { name: 'West Monroe Partners', tier: 'safety', note: 'Mid-market digital and operations firm. High people-culture scores. Strong PE-backed tech transformation practice.' },
    ],
    playbook: [
      { title: 'Build a public portfolio', detail: 'Two polished GitHub repos or a Kaggle top-10% finish signal more than a GPA to digital consulting recruiters. Solve a real business problem, not a toy dataset.' },
      { title: 'Get one cloud cert', detail: 'AWS Solutions Architect Associate or GCP Professional Data Engineer takes ~80 hours of prep and signals execution capability. Firms like Deloitte and Accenture track certifications.' },
      { title: 'Target digital practice groups', detail: 'Apply directly to BCG X, McKinsey QuantumBlack, or Deloitte\'s AI practice — separate from the general consulting pool. Requirements differ and competition is less intense.' },
      { title: 'Frame experience in business impact', detail: 'Recruiters don\'t hire for Python skills — they hire for what Python made possible. Always anchor technical projects to a revenue or cost outcome.' },
    ],
    synthesis: 'Digital transformation consulting is the fastest-growing segment in the industry, with the global market projected to reach $3.9T by 2027 (IDC estimate). Your edge is rare: you can both build and advise. Prioritize BCG X and McKinsey QuantumBlack if you want MBB prestige in a technical track, and Deloitte Digital if you want scale and early ownership. A strong GitHub and one cloud certification will do more for your application than another case prep session.',
  },

  deal: {
    key: 'deal',
    emoji: '💼',
    name: 'The Deal Advisor',
    tagline: 'You operate in the high-stakes intersection of finance and strategy — M&A due diligence, restructuring, and transaction advisory, where the pressure is real and the numbers are the argument.',
    color: '#f5c842',
    colorClass: 'color-deal',
    bgClass: 'bg-deal',
    borderClass: 'border-deal',
    fillClass: 'fill-deal',
    glowClass: 'glow-deal',
    badgeClass: 'badge-deal',
    strengths: [
      { icon: '💹', name: 'Financial Modeling', desc: 'Build 3-statement models, LBOs, and DCFs under time pressure' },
      { icon: '⚖️', name: 'Deal Structuring', desc: 'Understand valuation, earn-outs, reps & warranties, and capital structure' },
      { icon: '🔥', name: 'High-Pressure Performance', desc: 'Stay sharp when the timeline compresses to 48 hours before close' },
      { icon: '🔍', name: 'Commercial Due Diligence', desc: 'Separate market signal from noise in a 3-week sprint' },
    ],
    firms: [
      { name: 'AlixPartners', tier: 'target', note: 'Premier restructuring and turnaround firm. Works on distressed situations (Toys R Us, Sears). Comp rivals MBB for seniors.' },
      { name: 'FTI Consulting', tier: 'target', note: '$3.5B revenue (2023). Largest forensic/litigation and corporate finance advisory practice. Strong restructuring and M&A.' },
      { name: 'Houlihan Lokey', tier: 'target', note: 'Top-ranked M&A advisor for deals <$1B. Strong restructuring group. Excellent training for junior deal professionals.' },
      { name: 'PwC Deals / Deloitte Corporate Finance', tier: 'stretch', note: 'Big 4 transaction services — financial due diligence and valuation on 1,000+ deals/year. Volume builds modeling speed fast.' },
      { name: 'EY-Parthenon', tier: 'stretch', note: 'Hybrid strategy + deals. Strong in commercial due diligence for PE. Combines strategy rigor with transaction pace.' },
      { name: 'Kroll / Duff & Phelps', tier: 'safety', note: 'Valuation and financial advisory firm. Strong in fairness opinions and restructuring. Good entry into transaction work.' },
    ],
    playbook: [
      { title: 'Pass CFA Level 1 before recruiting', detail: 'CFA Level 1 signals financial commitment and boosts credibility in deal-side roles. ~300 hours of prep; schedule the exam 6 months out.' },
      { title: 'Build a model from scratch', detail: 'Run through a free LBO model from Macabacus or CFI. Being able to discuss your own model in an interview — its assumptions, sensitivities, breaks — is more impressive than citing a template.' },
      { title: 'Target restructuring for faster responsibility', detail: 'Restructuring groups at AlixPartners or FTI put analysts on creditor committee calls in year one. More responsibility, faster, than traditional M&A.' },
      { title: 'Network through deal databases', detail: 'Use Pitchbook or Mergermarket (free through most university libraries) to research recent transactions, then reference them specifically in networking emails to stand out.' },
    ],
    synthesis: 'Deal advisory is intensely competitive but rewards financial fluency faster than generalist consulting. Global M&A volume hit $3.2T in 2023 (Bloomberg), and restructuring activity rises in every rate cycle. Your recruiting edge is demonstrating that you can build a model, not just read one. AlixPartners and FTI are your highest-leverage targets; Big 4 transaction services is a high-volume training ground that feeds both PE and banking exits.',
  },

  ops: {
    key: 'ops',
    emoji: '🏗️',
    name: 'The Operational Architect',
    tagline: 'You design and implement the systems that make companies actually work — supply chains, org redesigns, large-scale change programs, and ERP transformations.',
    color: '#ff8a65',
    colorClass: 'color-ops',
    bgClass: 'bg-ops',
    borderClass: 'border-ops',
    fillClass: 'fill-ops',
    glowClass: 'glow-ops',
    badgeClass: 'badge-ops',
    strengths: [
      { icon: '🗺️', name: 'Process Architecture', desc: 'Map, diagnose, and redesign end-to-end workflows at enterprise scale' },
      { icon: '👥', name: 'Change Leadership', desc: 'Drive adoption by designing for the human as much as the system' },
      { icon: '📐', name: 'Program Management', desc: 'Coordinate 10+ workstreams without losing track of the critical path' },
      { icon: '🔧', name: 'Lean / Six Sigma', desc: 'Eliminate waste with DMAIC and value-stream mapping' },
    ],
    firms: [
      { name: 'Deloitte Consulting (S&O)', tier: 'target', note: '$26B consulting revenue (2023). Strategy & Operations practice handles some of the largest transformation programs globally.' },
      { name: 'PwC Advisory', tier: 'target', note: 'Strong in finance transformation, operating model design, and shared services. Deep roster of Fortune 500 clients.' },
      { name: 'Kearney', tier: 'target', note: 'Founded on supply chain and operations. Remains the gold standard for supply-chain strategy. Smaller and more specialized than Big 4.' },
      { name: 'KPMG Advisory', tier: 'stretch', note: 'Strong in regulatory and risk transformation. Less glamorous than Deloitte/PwC but solid for operations and finance projects.' },
      { name: 'Huron Consulting', tier: 'stretch', note: 'Specialist in healthcare and higher-ed operations. High responsibility early; recruits heavily from non-target schools.' },
      { name: 'West Monroe Partners', tier: 'safety', note: 'Mid-market operations and technology firm. Best workplace ratings and strong client impact in PE-backed portfolio companies.' },
    ],
    playbook: [
      { title: 'Get Lean Six Sigma Green Belt', detail: 'A 2-day online course plus a practice project yields a Green Belt cert. It\'s a direct signal to operations practices and costs ~$300.' },
      { title: 'Target implementation arms early', detail: 'Most Big 4 have separate applications for their strategy vs. implementation arms. Apply to both. Implementation hires more, pays similarly, and gives real delivery ownership faster.' },
      { title: 'Find a vertical and own it', detail: 'Operations consulting rewards depth. Choose one: supply chain, finance transformation, HR redesign, or healthcare ops. Then frame every experience through that lens.' },
      { title: 'Demonstrate project management credibility', detail: 'A PMP or CAPM cert (~60 study hours) is low-cost evidence of PM fluency. Alternatively, lead a campus project with a real budget and timeline — then quantify what you delivered.' },
    ],
    synthesis: 'Operations consulting is the backbone of the industry — 60% of consulting revenue globally comes from implementation, not strategy slides (Source Capital estimate). Your competitive edge is rare: the ability to design a system AND get humans to adopt it. Deloitte S&O and Kearney are your top targets; Huron and West Monroe offer faster responsibility with high culture scores. An operations specialist who can quantify throughput, cost, or cycle-time improvements wins every interview.',
  },

  niche: {
    key: 'niche',
    emoji: '🔬',
    name: 'The Niche Expert',
    tagline: 'You are drawn to deep domain mastery — becoming the definitive authority in one sector where your technical credibility unlocks access that generalists never get.',
    color: '#c084fc',
    colorClass: 'color-niche',
    bgClass: 'bg-niche',
    borderClass: 'border-niche',
    fillClass: 'fill-niche',
    glowClass: 'glow-niche',
    badgeClass: 'badge-niche',
    strengths: [
      { icon: '🏅', name: 'Domain Credibility', desc: 'Clients trust you because you\'ve solved this exact problem in this exact sector before' },
      { icon: '💡', name: 'Thought Leadership', desc: 'Publish the framework others cite; the best firms find you, not the reverse' },
      { icon: '🔎', name: 'Specialized Problem-Solving', desc: 'See patterns invisible to generalists — because you have 1,000 hours of pattern recognition' },
      { icon: '🤝', name: 'Client Intimacy', desc: 'Long-term sector relationships that generate repeat work and referrals' },
    ],
    firms: [
      { name: 'L.E.K. Consulting', tier: 'target', note: 'Best-in-class for healthcare, life sciences, and media strategy. Rigorous, boutique, and less known — which is why offer rates are higher than MBB.' },
      { name: 'Charles River Associates (CRA)', tier: 'target', note: 'Economic, financial, and strategic consulting for litigation and regulation. Recruits PhDs and specialists heavily.' },
      { name: 'Dalberg Advisors', tier: 'target', note: 'Top-tier boutique for social impact, global health, and development finance. The MBB of the impact space.' },
      { name: 'Health Advances', tier: 'stretch', note: 'Pure-play life sciences strategy boutique. Works on product launches, BD, and portfolio strategy for biopharma. Requires domain knowledge.' },
      { name: 'Roland Berger', tier: 'stretch', note: 'European strategy firm. Strong in automotive, industrial, and energy verticals. Good entry if you have a European language or sector background.' },
      { name: 'Guidehouse', tier: 'safety', note: 'Public sector, energy, and healthcare advisory. Recruits broadly. Strong pipeline to federal and state government consulting projects.' },
    ],
    playbook: [
      { title: 'Build public credibility in your niche', detail: '3–5 LinkedIn articles per year in your target sector compound dramatically. Cite primary sources (PubMed, Bloomberg, USAID data). Recruiters at niche firms search LinkedIn by sector keyword.' },
      { title: 'Get technical experience before you consult', detail: 'Clinical rotations, policy internships, lab work, or startup roles in your sector are worth more than another internship at a generalist firm. Sector boutiques hire for credentials, not just GPA.' },
      { title: 'Research the firm\'s published work', detail: 'L.E.K., CRA, and Dalberg publish sector-specific thought leadership. Reference a specific report in your cover letter — it shows you read the work, not just the website.' },
      { title: 'Target firm recruiting directly', detail: 'Most boutiques don\'t recruit through OCR (on-campus recruiting). Email a principal or partner directly with a specific question about their sector practice. Response rates are higher than you\'d expect.' },
    ],
    synthesis: 'Niche expertise is the most defensible career position in consulting — it compounds over decades while generalist skills face growing AI pressure. Your recruiting advantage is specificity: most candidates compete on GPA and case skills; you compete on a track record in the domain. Prioritize L.E.K. and CRA for structured paths into sector expertise, and Dalberg if impact is the north star. Start building your public voice now — the best boutique firms recruit people they already know.',
  },
};

// ── STATE ──────────────────────────────────────────────────────────────────
let currentQ = 0;
let answers = new Array(QUESTIONS.length).fill(null);
let chartInstance = null;

// ── NAVIGATION ─────────────────────────────────────────────────────────────
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo(0, 0);
}

function startQuiz() {
  currentQ = 0;
  answers = new Array(QUESTIONS.length).fill(null);
  renderQuestion();
  showScreen('quiz');
}

function restartQuiz() {
  if (chartInstance) { chartInstance.destroy(); chartInstance = null; }
  startQuiz();
}

// ── QUIZ RENDER ────────────────────────────────────────────────────────────
function renderQuestion() {
  const q = QUESTIONS[currentQ];
  const total = QUESTIONS.length;

  // Progress
  const pct = Math.round((currentQ / total) * 100);
  document.getElementById('progressFill').style.width = pct + '%';
  document.getElementById('progressLabel').textContent = `${currentQ + 1} / ${total}`;
  document.getElementById('qCounter').textContent = `Question ${currentQ + 1}`;

  // Back button
  document.getElementById('backBtn').style.display = currentQ > 0 ? 'flex' : 'none';

  // Build HTML
  const selected = answers[currentQ];
  const optionsHTML = q.options.map((opt, i) => `
    <button class="option-card ${selected === i ? 'selected' : ''}" onclick="selectOption(${i})">
      <div class="option-icon">${opt.icon}</div>
      <div>
        <div class="option-label">${opt.label}</div>
        ${opt.sub ? `<div class="option-sub">${opt.sub}</div>` : ''}
      </div>
    </button>
  `).join('');

  const area = document.getElementById('questionArea');
  area.style.animation = 'none';
  area.innerHTML = `
    <div class="q-category">${q.category}</div>
    <div class="q-text">${q.text}</div>
    <div class="options-grid">${optionsHTML}</div>
  `;
  // Re-trigger animation
  requestAnimationFrame(() => {
    area.style.animation = 'fadeInUp 0.35s ease both';
  });
}

function selectOption(index) {
  answers[currentQ] = index;

  // Show selection briefly, then advance
  renderQuestion();
  setTimeout(() => {
    if (currentQ < QUESTIONS.length - 1) {
      currentQ++;
      renderQuestion();
    } else {
      computeResults();
    }
  }, 280);
}

function prevQuestion() {
  if (currentQ > 0) {
    currentQ--;
    renderQuestion();
  }
}

// ── SCORING ────────────────────────────────────────────────────────────────
function computeResults() {
  const totals = { strategist: 0, digital: 0, deal: 0, ops: 0, niche: 0 };

  answers.forEach((answerIndex, qIndex) => {
    if (answerIndex === null) return;
    const scores = QUESTIONS[qIndex].options[answerIndex].scores;
    Object.keys(scores).forEach(k => { totals[k] += scores[k]; });
  });

  // Sort by score descending
  const sorted = Object.entries(totals).sort((a, b) => b[1] - a[1]);
  const topKey = sorted[0][0];
  const maxScore = sorted[0][1];

  // Normalize to percentages (relative to max achievable or max observed)
  const maxPossible = Math.max(maxScore, 1);
  const normalised = {};
  sorted.forEach(([k, v]) => { normalised[k] = Math.round((v / maxPossible) * 100); });

  renderResults(topKey, sorted, normalised);
}

// ── RESULTS RENDER ─────────────────────────────────────────────────────────
function renderResults(topKey, sorted, normalised) {
  const arch = ARCHETYPES[topKey];
  const body = document.getElementById('resultsBody');

  const matchScore = normalised[topKey];

  // Score bars HTML
  const archLabels = {
    strategist: { label: 'The Strategist', emoji: '♟️' },
    digital:    { label: 'Digital Transformer', emoji: '⚙️' },
    deal:       { label: 'Deal Advisor', emoji: '💼' },
    ops:        { label: 'Operational Architect', emoji: '🏗️' },
    niche:      { label: 'Niche Expert', emoji: '🔬' },
  };

  const scoreBarsHTML = sorted.map(([k, v]) => {
    const pct = normalised[k];
    return `
      <div class="score-row">
        <div class="score-meta">
          <div class="score-archetype ${ARCHETYPES[k].colorClass}">
            <span>${archLabels[k].emoji}</span> ${archLabels[k].label}
          </div>
          <div class="score-pct">${pct}%</div>
        </div>
        <div class="score-track">
          <div class="score-fill ${ARCHETYPES[k].fillClass}" data-width="${pct}"></div>
        </div>
      </div>
    `;
  }).join('');

  // Strengths HTML
  const strengthsHTML = arch.strengths.map(s => `
    <div class="strength-card ${arch.bgClass}" style="border-color: rgba(255,255,255,0.06)">
      <div class="strength-icon">${s.icon}</div>
      <div class="strength-name">${s.name}</div>
      <div class="strength-desc">${s.desc}</div>
    </div>
  `).join('');

  // Firms HTML
  const tierLabels = { target: 'Best Fit', stretch: 'Stretch', safety: 'Solid Alternative' };
  const tierClasses = { target: 'tier-target', stretch: 'tier-stretch', safety: 'tier-safety' };
  const firmsHTML = arch.firms.map(f => `
    <div class="firm-card">
      <div class="firm-tier ${tierClasses[f.tier]}">${tierLabels[f.tier]}</div>
      <div class="firm-name">${f.name}</div>
      <div class="firm-note">${f.note}</div>
    </div>
  `).join('');

  // Playbook HTML
  const playbookHTML = arch.playbook.map((p, i) => `
    <div class="playbook-card">
      <div class="playbook-step">
        <div class="step-num">${i + 1}</div>
        <div class="playbook-title">${p.title}</div>
      </div>
      <div class="playbook-detail">${p.detail}</div>
    </div>
  `).join('');

  // Chart data (radar)
  const chartLabels = ['Strategist', 'Digital', 'Deal', 'Operations', 'Niche'];
  const chartValues = [
    normalised['strategist'],
    normalised['digital'],
    normalised['deal'],
    normalised['ops'],
    normalised['niche'],
  ];

  body.innerHTML = `
    <!-- HERO -->
    <div class="result-hero ${arch.bgClass} ${arch.glowClass}">
      <span class="archetype-emoji">${arch.emoji}</span>
      <div class="result-eyebrow">Your Consulting Archetype</div>
      <h2 class="archetype-name ${arch.colorClass}">${arch.name}</h2>
      <p class="archetype-tagline">${arch.tagline}</p>
      <div class="match-badge ${arch.badgeClass}">
        <span>✦</span> ${matchScore}% match
      </div>
    </div>

    <!-- SCORE BREAKDOWN -->
    <div class="scores-section">
      <div class="section-title"><span>📊</span> How you scored across all archetypes</div>
      <div class="score-bars">${scoreBarsHTML}</div>
    </div>

    <!-- RADAR CHART -->
    <div class="chart-section">
      <div class="section-title"><span>🕸️</span> Your consulting profile</div>
      <div class="chart-wrap">
        <canvas id="radarChart"></canvas>
      </div>
    </div>

    <!-- STRENGTHS -->
    <div class="strengths-section">
      <div class="section-title"><span>💪</span> Your core strengths</div>
      <div class="strengths-grid">${strengthsHTML}</div>
    </div>

    <!-- FIRMS -->
    <div class="firms-section">
      <div class="section-title"><span>🏢</span> Firms that match your profile</div>
      <div class="firms-grid">${firmsHTML}</div>
    </div>

    <!-- PLAYBOOK -->
    <div class="playbook-section">
      <div class="section-title"><span>🗺️</span> Your recruiting playbook</div>
      <div class="playbook-grid">${playbookHTML}</div>
    </div>

    <!-- SYNTHESIS -->
    <div class="synthesis-section">
      <div class="synthesis-title">Your bottom line</div>
      <p class="synthesis-text">${arch.synthesis}</p>
      <div class="share-row">
        <button class="share-btn" onclick="restartQuiz()">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M1 4v6h6M23 20v-6h-6"/><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"/></svg>
          Retake Quiz
        </button>
        <button class="share-btn" onclick="copyResult('${arch.name}')">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
          Copy My Result
        </button>
      </div>
    </div>
  `;

  showScreen('results');

  // Animate score bars
  setTimeout(() => {
    document.querySelectorAll('.score-fill').forEach(el => {
      el.style.width = el.dataset.width + '%';
    });
  }, 100);

  // Build radar chart
  setTimeout(() => {
    const ctx = document.getElementById('radarChart').getContext('2d');
    if (chartInstance) chartInstance.destroy();
    chartInstance = new Chart(ctx, {
      type: 'radar',
      data: {
        labels: chartLabels,
        datasets: [{
          label: 'Your Profile',
          data: chartValues,
          backgroundColor: `${arch.color}22`,
          borderColor: arch.color,
          borderWidth: 2.5,
          pointBackgroundColor: arch.color,
          pointBorderColor: '#0a0e1a',
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
            grid: { color: 'rgba(255,255,255,0.06)' },
            angleLines: { color: 'rgba(255,255,255,0.06)' },
            pointLabels: {
              color: '#8b9bb8',
              font: { family: 'Inter', size: 12, weight: '600' },
            },
          },
        },
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: ctx => ` ${ctx.raw}%`,
            },
            backgroundColor: '#1a2235',
            borderColor: 'rgba(255,255,255,0.08)',
            borderWidth: 1,
            titleColor: '#f0f4ff',
            bodyColor: '#8b9bb8',
          },
        },
      },
    });
  }, 300);
}

function copyResult(archetypeName) {
  const text = `I just took the ConsultIQ quiz and I'm "${archetypeName}"! Find your consulting path at ConsultIQ.`;
  navigator.clipboard.writeText(text).then(() => {
    alert('Result copied to clipboard!');
  }).catch(() => {
    alert(`Your archetype: ${archetypeName}`);
  });
}
