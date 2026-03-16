/* ══════════════════════════════════════════════
   ICC ConsultPath — app.js
   13 questions · 5 archetypes · internal + size modifiers
   ══════════════════════════════════════════════ */

// ─── Archetype metadata ──────────────────────────────────────────────────────
const ARCHETYPES = {
  strategist: {
    key: 'strategist',
    emoji: '♟️',
    name: 'The Strategist',
    tagline: 'You think at 30,000 feet — and love it.',
    description: 'You\'re drawn to the hardest, most ambiguous questions. You want to sit across from a CEO and tell them what to do next. Your edge is structured thinking, crisp communication, and the ability to synthesize complexity into a one-pager that changes how leaders see their business. Strategy consulting is where your interests and instincts naturally align.',
    badge: 'Strategy consulting',
    heroClass: 'hero-strategist',
    color: '#7B1818',
    strengths: [
      { icon: '🧩', name: 'Structured Problem-Solving', desc: 'You break any problem into its logical components and find the signal in the noise.' },
      { icon: '📣', name: 'Executive Communication', desc: 'You distil complexity into the one slide that changes the room\'s direction.' },
      { icon: '🔭', name: 'Big-Picture Thinking', desc: 'You zoom out when others are stuck in the details — and that\'s your superpower.' },
      { icon: '⚡', name: 'Intellectual Agility', desc: 'You can go deep on fintech Monday and telecom by Thursday without missing a beat.' },
    ],
    playbook: [
      { title: 'Network through ICC mentors first', detail: 'Get on the mentor list in September — a warm referral from someone already at a firm significantly improves your chances of a resume screen.' },
      { title: 'Master the case interview early', detail: 'Start case prep by October. Aim for 60+ cases with a mix of solo and partner practice before first-round season.' },
      { title: 'Build a sharp "why consulting" story', detail: 'Firms like McKinsey and Bain screen hard on motivation. Have a crisp, personal 60-second answer to "why us, why now."' },
      { title: 'Leverage Ivey\'s case competition ecosystem', detail: 'Compete in at least two case comps. They\'re free case practice with real stakes — and recruiters watch the results.' },
      { title: 'Consider Monitor Deloitte and EY-Parthenon', detail: 'These firms offer rigorous strategy work with an Ivey-friendly recruiting process — strong options if they align with your interests.' },
    ],
    synthesis: (sizeLabel) => {
      const sizeNote = sizeLabel === 'boutique'
        ? 'Given your preference for leaner teams, boutique firms like Oliver Wyman, Roland Berger, or PMP Strategy may offer faster ownership and more direct client exposure.'
        : 'Your comfort with large-firm environments makes McKinsey, BCG, Bain, Monitor Deloitte, and EY-Parthenon natural fits to explore.';
      return `You thrive on ambiguity, communicate with precision, and think in frameworks naturally — the profile strategy consulting firms look for. ${sizeNote} Double down on case prep and ICC mentor relationships. Your profile is strong — now it's an execution problem.`;
    },
  },

  digital: {
    key: 'digital',
    emoji: '⚙️',
    name: 'The Digital Transformer',
    tagline: 'You build the future while advising it.',
    description: 'You believe the most important business problems today are fundamentally technology problems. You want to help clients reinvent how they operate, serve customers, and compete — using data, platforms, and AI. You\'re equally comfortable in a strategy deck and a product roadmap, and you see technology as a lever for real business impact.',
    badge: 'Tech & digital consulting',
    heroClass: 'hero-digital',
    color: '#1D4ED8',
    strengths: [
      { icon: '💡', name: 'Technology Fluency', desc: 'You speak both business and tech — rare, valuable, and increasingly essential.' },
      { icon: '🗺️', name: 'Systems Thinking', desc: 'You see how platforms, data, and people connect — and where the bottlenecks hide.' },
      { icon: '🚀', name: 'Execution-Oriented', desc: 'You don\'t just recommend — you want to help build. Roadmaps, prototypes, MVPs.' },
      { icon: '🔄', name: 'Change Leadership', desc: 'You understand that digital transformation is 20% tech and 80% people change.' },
    ],
    playbook: [
      { title: 'Lead with a tech-meets-business narrative', detail: 'In every interview, show you can translate between technical teams and executive stakeholders. That\'s the killer skill.' },
      { title: 'Get a data or product project on your resume', detail: 'A personal project using Python, Tableau, or no-code tools signals genuine interest — not just keyword matching.' },
      { title: 'Target Accenture, IBM Consulting, and Deloitte digital arms', detail: 'These are the premium digital arms of large consulting firms — strategy-grade work with a tech-forward culture.' },
      { title: 'Consider Slalom and Konrad for boutique culture', detail: 'Slalom and Konrad offer faster growth, smaller teams, and direct client ownership compared to the megafirms.' },
      { title: 'Network through tech industry events, not just consulting ones', detail: 'This practice area is still building its Ivey network. LinkedIn outreach to recent grads at target firms converts well.' },
    ],
    synthesis: (sizeLabel) => {
      const sizeNote = sizeLabel === 'boutique'
        ? 'Your boutique preference makes Konrad and Slalom standout targets — both offer real ownership and strong culture without the bureaucracy of Accenture or IBM.'
        : 'Large firm environments suit you well — Accenture, IBM Consulting, and Deloitte give you global client exposure and deep practice specialization.';
      return `The consulting market is shifting toward digital-first engagements — and you\'re already wired for it. Your ability to bridge strategy and technology puts you in the fastest-growing part of the industry. ${sizeNote} Build your technical credibility early: even one hands-on data or digital project before OCI will set you apart.`;
    },
  },

  deal: {
    key: 'deal',
    emoji: '💼',
    name: 'The Deal Advisor',
    tagline: 'You thrive where the stakes are highest.',
    description: 'Transactions light you up. You want to be in the room when a company is acquired, restructured, or repositioned — and you want to be the person who ran the numbers that made it happen. You think in value drivers, synergies, and returns. Deal advisory is where analytical rigour meets real-world urgency.',
    badge: 'M&A · PE diligence · transactions',
    heroClass: 'hero-deal',
    color: '#92400E',
    strengths: [
      { icon: '📊', name: 'Financial Modelling', desc: 'You\'re comfortable building a model from scratch and defending every assumption in it.' },
      { icon: '🎯', name: 'Value Driver Focus', desc: 'You zero in on what actually moves the needle in a deal — revenue, cost, or multiple expansion.' },
      { icon: '⏱️', name: 'High-Stakes Performance', desc: 'Tight deadlines and live deal pressure bring out your best work, not your worst.' },
      { icon: '🔍', name: 'Commercial Due Diligence', desc: 'You can assess market size, competitive dynamics, and growth sustainability under pressure.' },
    ],
    playbook: [
      { title: 'Know your deal mechanics cold', detail: 'SATOV, EY-Parthenon, and KPMG Deal Advisory will test commercial DD logic. Understand how PE firms assess quality of earnings, market attractiveness, and management teams.' },
      { title: 'Target SATOV early — it\'s the most HBA-friendly PE boutique', detail: 'SATOV exclusively focuses on mid-market PE diligence and value creation. Small team, direct exposure, and a strong HBA alumni presence.' },
      { title: 'Build your financial narrative', detail: 'Have one compelling story of building or interpreting a financial model. Even an Ivey course project counts if you tell it well.' },
      { title: 'Consider Alpha FMC for asset management strategy', detail: 'If you\'re interested in the wealth/asset management space, Alpha FMC is a specialized boutique with a growing Toronto presence.' },
      { title: 'Pair deal targets with a generalist backup strategy', detail: 'Deal volumes are cyclical. Keep one or two large-firm advisory practices (KPMG, PwC Deals) on your list for stability.' },
    ],
    synthesis: (sizeLabel) => {
      const sizeNote = sizeLabel === 'boutique'
        ? 'SATOV and Alpha FMC are your highest-priority targets — both are boutiques offering the type of direct PE and financial services work you\'re wired for.'
        : 'KPMG Deal Advisory, EY-Parthenon, and PwC Deals give you the brand, deal flow, and global platform that large-firm environments provide.';
      return `You have the analytical instincts and pressure tolerance that deal work demands. The ability to synthesize financial and commercial insight under live deal conditions is rare at the HBA level — and firms know it. ${sizeNote} Start networking in September; deal advisory teams are small and relationships matter.`;
    },
  },

  ops: {
    key: 'ops',
    emoji: '🏗️',
    name: 'The Operational Architect',
    tagline: 'You make organizations actually work better.',
    description: 'You\'re fascinated by how large organizations function — and dysfunction. You want to redesign the processes, teams, and systems that determine whether a strategy succeeds or stalls. Your work creates visible, lasting change. Operations consulting is where strategy meets execution — and increasingly, the two are inseparable.',
    badge: 'Operations & transformation',
    heroClass: 'hero-ops',
    color: '#065F46',
    strengths: [
      { icon: '🔧', name: 'Process Redesign', desc: 'You see inefficiency as an invitation. You map, challenge, and rebuild how work gets done.' },
      { icon: '🤝', name: 'Stakeholder Management', desc: 'You know that change only sticks when the people affected believe in it — and you build that belief.' },
      { icon: '📋', name: 'Implementation Rigour', desc: 'You don\'t just recommend — you track, adjust, and see it through to measurable results.' },
      { icon: '🏢', name: 'Organizational Insight', desc: 'You read the informal power structures and culture dynamics that formal org charts miss.' },
    ],
    playbook: [
      { title: 'Lead with change management and implementation stories', detail: 'In interviews, frame experiences around what changed as a result of your work — not just what you analyzed.' },
      { title: 'Target PwC Advisory and EY for operations practices', detail: 'Both have strong operations transformation practices in Canada with active HBA recruiting pipelines.' },
      { title: 'Consider isaac for boutique operations consulting', detail: 'isaac is a lean, Toronto-based operations firm with direct client exposure and a strong culture. Great for HBA1s who want immediate impact.' },
      { title: 'Position yourself as a strategy-to-execution bridge', detail: 'The best operational consultants can also do strategy. Frame yourself as someone who builds the plan AND can run the execution.' },
      { title: 'Explore Accenture Operations for scale', detail: 'Accenture\'s operations practice is one of the largest in Canada — diverse projects, global exposure, and clear promotion tracks.' },
    ],
    synthesis: (sizeLabel) => {
      const sizeNote = sizeLabel === 'boutique'
        ? 'isaac is your top boutique pick — a lean team doing serious operations work with direct client ownership from day one.'
        : 'Large firms like PwC Advisory, EY, and Accenture Operations offer the breadth of industries and scale of transformation projects that suit your ambitions.';
      return `Operations consulting is having a moment — every post-COVID strategy has stalled on execution, and firms need people who can bridge the gap. Your strengths in process, people, and implementation make you exactly that person. ${sizeNote} In interviews, show you understand that the real risk in consulting isn\'t the strategy — it\'s the change management.`;
    },
  },

  niche: {
    key: 'niche',
    emoji: '🔬',
    name: 'The Niche Specialist',
    tagline: 'Your expertise is your edge.',
    description: 'You don\'t want to be a generalist. You want to become the go-to expert in a sector you care about — whether that\'s life sciences, financial services, aerospace, brand strategy, or sports. You\'ll go deeper, learn faster, and create more value within your domain than a generalist ever could. The boutique specialists are where genuine domain expertise is built.',
    badge: 'Sector specialist consulting',
    heroClass: 'hero-niche',
    color: '#6D28D9',
    strengths: [
      { icon: '🎓', name: 'Domain Depth', desc: 'You go deep — and clients pay a premium for someone who genuinely knows their world.' },
      { icon: '🗣️', name: 'Sector Credibility', desc: 'You can walk into a pharma board meeting or a PE deal room and speak the language.' },
      { icon: '🌐', name: 'Pattern Recognition', desc: 'Deep sector exposure lets you see trends, risks, and opportunities that generalists miss.' },
      { icon: '💎', name: 'Hard-to-Replicate Value', desc: 'Generalists are replaceable. Genuine domain experts are not.' },
    ],
    playbook: [
      { title: 'Identify your sector conviction early', detail: 'The best niche candidates have a clear "why this sector" story — rooted in a pre-Ivey experience, personal connection, or genuine intellectual passion.' },
      { title: 'Target ZS, Coactuate, or Invictus for healthcare/life sciences', detail: 'ZS is the global leader in life sciences consulting. Coactuate and Invictus are growing Toronto-based alternatives with direct HBA access.' },
      { title: 'Explore Jackman and Bond for brand and loyalty strategy', detail: 'Both are top Canadian boutiques in consumer/brand consulting. Jackman focuses on transformation strategy; Bond on loyalty and CX.' },
      { title: 'Consider Level5 for retail/consumer strategy', detail: 'Level5 is a leading boutique in retail and consumer strategy — ideal if you have a consumer goods or retail background.' },
      { title: 'Use your domain expertise as a differentiator at large firms too', detail: 'Firms like Deloitte, EY, and PwC have sector-specific practices. Coming in with genuine domain knowledge accelerates placement into specialized teams.' },
    ],
    synthesis: (sizeLabel) => {
      const sizeNote = sizeLabel === 'boutique'
        ? 'Boutique specialists like ZS, Coactuate, Invictus, Jackman, Bond, Level5, and Wasserman are your highest-priority targets — smaller teams, faster expertise, and direct sector impact.'
        : 'Sector-specialist practices within large firms (Deloitte Life Sciences, EY Financial Services, PwC Operations) let you build domain expertise with the resources of a global brand.';
      return `The consulting landscape is consolidating around specialists. Clients no longer want a generalist who learned their industry last month — they want someone who understands their competitive dynamics from day one. Your genuine sector conviction is your edge. ${sizeNote} Lead every application and conversation with your domain story. It\'s what sets you apart.`;
    },
  },
};

// ─── Firm data (36 ICC partner firms) ────────────────────────────────────────
const FIRMS = {
  strategist: [
    { name: 'McKinsey & Company',   size: 'large',    tier: 'core',   city: 'Toronto · Montreal · Calgary', tags: [],                          note: 'The global benchmark. Recruits HBAs for generalist associate roles. Extremely case-intensive process.' },
    { name: 'BCG',                  size: 'large',    tier: 'core',   city: 'Toronto · Montreal · Calgary', tags: [],                          note: 'Generalist strategy firm with a strong culture of intellectual rigour and associate autonomy.' },
    { name: 'Bain & Company',       size: 'large',    tier: 'core',   city: 'Toronto · Montreal',           tags: [],                          note: 'Known for PE-friendly culture and implementation-oriented strategy. Strong HBA pipeline.' },
    { name: 'Kearney',              size: 'large',    tier: 'core',   city: 'Toronto',                      tags: ['industrial'],              note: 'Operations-rooted strategy firm with strong manufacturing and supply chain practices.' },
    { name: 'Monitor Deloitte',     size: 'large',    tier: 'strong', city: 'Toronto · Vancouver',          tags: [],                          note: 'Deloitte\'s strategy arm — rigorous strategy work with a larger recruiting class and an Ivey-friendly process.' },
    { name: 'Oliver Wyman',         size: 'large',    tier: 'strong', city: 'Toronto',                      tags: ['financial'],               note: 'Deep financial services and risk strategy focus. Excellent for those with FS backgrounds.' },
    { name: 'Roland Berger',        size: 'mid',      tier: 'strong', city: 'Toronto',                      tags: ['industrial'],              note: 'European strategy heritage with a strong Canadian industrial and automotive practice.' },
    { name: 'EY-Parthenon',         size: 'large',    tier: 'strong', city: 'Toronto',                      tags: ['financial'],               note: 'EY\'s dedicated strategy practice — sits at the intersection of strategy and transactions.' },
    { name: 'Simon-Kucher',         size: 'mid',      tier: 'alt',    city: 'Toronto',                      tags: ['consumer', 'financial'],   note: 'Global pricing and growth strategy leader. Rare and high-value specialization for HBAs.' },
    { name: 'PMP Strategy',         size: 'boutique', tier: 'alt',    city: 'Toronto',                      tags: ['consumer'],                note: 'Boutique strategy firm focused on purposeful growth. Strong culture and direct ownership.' },
  ],
  digital: [
    { name: 'Accenture',            size: 'large',    tier: 'core',   city: 'Toronto · Montreal · Vancouver', tags: ['tech'],  note: 'Largest technology and digital consulting firm globally. Broad practice areas, fast-growing AI/data work.' },
    { name: 'IBM Consulting',       size: 'large',    tier: 'core',   city: 'Toronto · Montreal',             tags: ['tech'],  note: 'Deep enterprise tech and AI transformation. Strong Red Hat and cloud platform practices.' },
    { name: 'Deloitte',             size: 'large',    tier: 'core',   city: 'Toronto · Across Canada',        tags: ['tech'],  note: 'Deloitte\'s tech consulting arm is one of the largest in Canada — broad sector coverage and strong HBA track.' },
    { name: 'Cognizant',            size: 'large',    tier: 'strong', city: 'Toronto',                        tags: ['tech'],  note: 'Global digital engineering and IT services firm. Growing strategy-led transformation practice.' },
    { name: 'Slalom',               size: 'mid',      tier: 'strong', city: 'Toronto',                        tags: ['tech'],  note: 'Consulting-meets-technology firm known for strong culture, local focus, and direct client work.' },
    { name: 'Konrad',               size: 'boutique', tier: 'alt',    city: 'Toronto',                        tags: ['tech'],  note: 'Tech and digital consulting boutique. Strong design-thinking, product, and engineering culture.' },
  ],
  deal: [
    { name: 'SATOV Consultants',              size: 'boutique', tier: 'core',   city: 'Toronto',                 tags: [],                  note: 'Canada\'s leading boutique for mid-market PE diligence and value creation. Highly HBA-friendly and direct.' },
    { name: 'EY-Parthenon',                   size: 'large',    tier: 'core',   city: 'Toronto',                 tags: ['financial'],       note: 'Straddles strategy and transactions — commercial DD, integration strategy, and carve-out work.' },
    { name: 'KPMG Advisory',                  size: 'large',    tier: 'core',   city: 'Toronto · Across Canada', tags: ['tech'],            note: 'Large deals advisory practice with strong M&A transaction services and integration capability.' },
    { name: 'PwC Deals',                      size: 'large',    tier: 'strong', city: 'Toronto · Across Canada', tags: [],                  note: 'PwC\'s transactions practice covers M&A strategy, commercial DD, and post-merger integration.' },
    { name: 'Alpha Financial Markets',        size: 'boutique', tier: 'strong', city: 'Toronto',                 tags: ['financial'],       note: 'Global boutique specializing in asset and wealth management strategy. Growing Canadian presence.' },
    { name: 'Capco',                          size: 'mid',      tier: 'alt',    city: 'Toronto',                 tags: ['financial', 'tech'], note: 'Financial services-focused consulting on tech, operations, and regulatory transformation. Deep FS niche.' },
    { name: 'BDO',                            size: 'large',    tier: 'strong', city: 'Toronto · Across Canada', tags: ['financial'],         note: 'Mid-market advisory firm with a growing deals and restructuring practice. Strong access for HBAs outside Big 4.' },
  ],
  ops: [
    { name: 'PwC Advisory',         size: 'large',    tier: 'core',   city: 'Toronto · Across Canada', tags: ['tech'],       note: 'Strong Canadian operations and business transformation practice. Excellent HBA recruiting pipeline.' },
    { name: 'EY',                   size: 'large',    tier: 'core',   city: 'Toronto · Across Canada', tags: ['tech'],       note: 'EY\'s consulting practice focuses on business transformation, supply chain, and technology-led ops.' },
    { name: 'Deloitte',             size: 'large',    tier: 'core',   city: 'Toronto · Across Canada', tags: ['tech'],       note: 'Broad operations consulting practice — workforce, finance transformation, and supply chain.' },
    { name: 'Accenture',            size: 'large',    tier: 'strong', city: 'Toronto · Across Canada', tags: ['tech'],       note: 'Accenture Operations is one of the largest transformation practices globally, with strong Canadian projects.' },
    { name: 'IBM Consulting',       size: 'large',    tier: 'strong', city: 'Toronto · Montreal',      tags: ['tech'],       note: 'Process automation, enterprise resource planning, and AI-driven operations transformation.' },
    { name: 'isaac',                size: 'boutique', tier: 'alt',    city: 'Toronto',                 tags: ['industrial'], note: 'Boutique operations consulting firm. Lean team, fast ownership, and a strong operations-first culture.' },
    { name: 'Carpedia',             size: 'boutique', tier: 'strong', city: 'Toronto',                 tags: ['industrial'], note: 'Specialist in operational performance improvement. Known for implementation-heavy engagements and measurable results.' },
  ],
  niche: [
    { name: 'ZS Associates',                  size: 'mid',      tier: 'core',   city: 'Toronto', tags: ['health'],              note: 'Global leader in life sciences consulting — commercial, pricing, and go-to-market for pharma and biotech.' },
    { name: 'Coactuate',                      size: 'boutique', tier: 'core',   city: 'Toronto', tags: ['health'],              note: 'Healthcare and pharma consulting boutique. Comparable to ZS at a smaller, more accessible scale.' },
    { name: 'Invictus Analytics + Strategy',  size: 'boutique', tier: 'core',   city: 'Toronto', tags: ['health'],              note: 'Analytics-driven healthcare and pharma strategy. Strong on data science meets consulting model.' },
    { name: 'Avascent',                       size: 'boutique', tier: 'strong', city: 'Toronto', tags: ['industrial'],          note: 'Strategy and management consulting focused exclusively on aerospace, defence, and government.' },
    { name: 'Hugessen Consulting',            size: 'boutique', tier: 'strong', city: 'Toronto', tags: ['financial'],           note: 'Executive compensation and HR strategy boutique. Unique niche with strong C-suite access.' },
    { name: 'Jackman',                        size: 'boutique', tier: 'strong', city: 'Toronto', tags: ['consumer'],            note: 'Brand, customer, and transformation strategy boutique. Known for bold creative-meets-strategic thinking.' },
    { name: 'Bond Brand Loyalty',             size: 'boutique', tier: 'strong', city: 'Toronto', tags: ['consumer'],            note: 'Loyalty program design, CX strategy, and brand engagement consulting. Consumer-facing strategy focus.' },
    { name: 'Level5 Strategy',                size: 'boutique', tier: 'alt',    city: 'Toronto', tags: ['consumer'],            note: 'Boutique focused on retail and consumer strategy. Strong Canadian market knowledge.' },
    { name: 'Wasserman',                      size: 'mid',      tier: 'alt',    city: 'Toronto', tags: ['consumer', 'sports'],  note: 'Sports marketing and talent management firm. Niche but powerful for sports/entertainment strategy roles.' },
    { name: 'Simon-Kucher',                   size: 'mid',      tier: 'alt',    city: 'Toronto', tags: ['consumer', 'financial'],  note: 'Pricing and growth strategy specialist. Deep expertise in monetization across industries.' },
    { name: 'Synpulse',                       size: 'boutique', tier: 'strong', city: 'Toronto', tags: ['financial', 'tech'],       note: 'Boutique management consulting firm specializing in banking, insurance, and wealth management. Strong tech-enabled transformation practice.' },
    { name: 'Mastercard',                     size: 'large',    tier: 'strong', city: 'Toronto', tags: ['financial', 'tech'],       note: 'Mastercard\'s external consulting arm advises banks, merchants, fintechs, and governments on payments strategy, digital transformation, and credit card economics.' },
  ],
};

const INTERNAL_FIRMS = [
  { name: 'Capital One',                note: 'Robust in-house strategy and analytics teams across cards, auto, and enterprise. Active HBA recruiter.' },
  { name: 'Scotiabank',                 note: 'Corporate Strategy and Business Development teams. Strong pipeline for HBAs interested in banking strategy.' },
  { name: 'MLSE',                       note: 'Strategy, analytics, and business operations at Canada\'s largest sports and entertainment company.' },
  { name: 'Birch Hill Equity Partners', note: 'Mid-market Canadian PE firm. In-house strategy and technology roles sit at the intersection of deal execution and portfolio value creation.' },
];

const FIRM_LOGO_MAP = {
  'McKinsey & Company': 'mckinsey-company.png',
  'BCG': 'boston-consulting.png',
  'Bain & Company': 'bain-company.png',
  'Kearney': 'kearney.png',
  'Monitor Deloitte': 'monitor-deloitte.png',
  'Oliver Wyman': 'oliver-wyman.png',
  'Roland Berger': 'roland-berger.png',
  'EY-Parthenon': 'contrast-ernst-young-management-consulting.png',
  'Simon-Kucher': 'simon.png',
  'PMP Strategy': 'pmp-strategy.png',
  'Accenture': 'accenture.png',
  'IBM Consulting': 'ibm.png',
  'Deloitte': 'deloitte.png',
  'Cognizant': 'cognizant.png',
  'Slalom': 'slalom.png',
  'Konrad': 'konrad-group.png',
  'SATOV Consultants': 'satov-consultants.png',
  'KPMG Advisory': 'kpmg-international.png',
  'PwC Deals': 'pwc.png',
  'Alpha Financial Markets': 'alpha-fmc.png',
  'Capco': 'capco.png',
  'PwC Advisory': 'pwc.png',
  'EY': 'ey.png',
  'isaac': 'issac operations.webp',
  'ZS Associates': 'zs.png',
  'Coactuate': 'coactuate.png',
  'Invictus Analytics + Strategy': 'invictus-analytics.png',
  'Avascent': 'Avascent.jpg',
  'Hugessen Consulting': 'hugessen-consulting-inc.png',
  'Jackman': 'jackman.png',
  'Bond Brand Loyalty': 'bond-brand-loyalty.png',
  'Level5 Strategy': 'level5-strategy.png',
  'Wasserman': 'wasserman.png',
  'Capital One': 'capital-one.png',
  'Mastercard': 'mastercard.png',
  'Scotiabank': 'scotiabank.png',
  'MLSE': 'mlse.png',
  'Birch Hill Equity Partners': 'birch-hill-equity-partners.png',
  'BDO': 'bdo-global.png',
  'Carpedia': 'carpedia-international.png',
  'Synpulse': 'synpulse.png',
};

const FIRM_URL_MAP = {
  'McKinsey & Company':          'https://www.mckinsey.com/ca-en',
  'BCG':                         'https://www.bcg.com/en-ca',
  'Bain & Company':              'https://www.bain.com/offices/toronto/',
  'Kearney':                     'https://www.kearney.com',
  'Monitor Deloitte':            'https://www.deloitte.com/ca/en/services/consulting/monitor-deloitte.html',
  'Oliver Wyman':                'https://www.oliverwyman.com',
  'Roland Berger':               'https://www.rolandberger.com',
  'EY-Parthenon':                'https://www.ey.com/en_ca/strategy/parthenon',
  'Simon-Kucher':                'https://www.simon-kucher.com',
  'PMP Strategy':                'https://www.pmpstrategy.com',
  'Accenture':                   'https://www.accenture.com/ca-en',
  'IBM Consulting':              'https://www.ibm.com/ca-en/consulting',
  'Deloitte':                    'https://www.deloitte.com/ca/en.html',
  'Cognizant':                   'https://www.cognizant.com',
  'Slalom':                      'https://www.slalom.com/en-ca',
  'Konrad':                      'https://www.konrad.com',
  'SATOV Consultants':           'https://satov.com',
  'KPMG Advisory':               'https://kpmg.com/ca/en/home.html',
  'PwC Deals':                   'https://www.pwc.com/ca/en/deals.html',
  'Alpha Financial Markets':     'https://www.alpha-fmc.com',
  'Capco':                       'https://www.capco.com',
  'PwC Advisory':                'https://www.pwc.com/ca/en/consulting.html',
  'EY':                          'https://www.ey.com/en_ca',
  'isaac':                       'https://www.isaacconsulting.ca',
  'ZS Associates':               'https://www.zs.com',
  'Coactuate':                   'https://www.coactuate.com',
  'Invictus Analytics + Strategy': 'https://www.invictusas.com',
  'Avascent':                    'https://www.avascent.com',
  'Hugessen Consulting':         'https://hugessen.com',
  'Jackman':                     'https://www.jackman.com',
  'Bond Brand Loyalty':          'https://bondbrandloyalty.com',
  'Level5 Strategy':             'https://www.level5strategy.com',
  'Wasserman':                   'https://www.teamwasserman.com',
  'Capital One':                 'https://www.capitalone.ca',
  'Mastercard':                  'https://www.mastercardservices.com/en/advisors',
  'Scotiabank':                  'https://www.scotiabank.com',
  'MLSE':                        'https://www.mlse.com',
  'Birch Hill Equity Partners':  'https://www.birchhillequity.com',
  'BDO':                         'https://www.bdo.ca',
  'Carpedia':                    'https://www.carpedia.com',
  'Synpulse':                    'https://www.synpulse.com',
};

const LOGO_FILES = [
  'accenture.png',
  'alpha-fmc.png',
  'bain-company.png',
  'bdo-global.png',
  'birch-hill-equity-partners.png',
  'boston-consulting.png',
  'capco.png',
  'carpedia-international.png',
  'coactuate.png',
  'cognizant.png',
  'contrast-ernst-young-management-consulting.png',
  'deloitte.png',
  'ey.png',
  'hugessen-consulting-inc.png',
  'ibm.png',
  'invictus-analytics.png',
  'jackman.png',
  'kearney.png',
  'konrad-group.png',
  'kpmg-international.png',
  'level5-strategy.png',
  'mastercard.png',
  'mckinsey-company.png',
  'monitor-deloitte.png',
  'oliver-wyman.png',
  'pwc.png',
  'roland-berger.png',
  'satov-consultants.png',
  'scotiabank.png',
  'Avascent.jpg',
  'simon.png',
  'slalom.png',
  'synpulse.png',
  'wasserman.png',
  'zs.png',
  'bond-brand-loyalty.png',
  'pmp-strategy.png',
  'capital-one.png',
  'mlse.png',
  'issac operations.webp',
];

function getFirmLogo(name) {
  const mapped = FIRM_LOGO_MAP[name];
  if (mapped && LOGO_FILES.includes(mapped)) {
    return `logos/${mapped}`;
  }

  if (mapped === '') {
    return '';
  }

  const slug = name.toLowerCase().replace(/[\s&,+]/g, '-').replace(/[^a-z0-9-]/g, '').replace(/-+/g, '-').replace(/(^-|-$)/g, '') + '.png';
  if (LOGO_FILES.includes(slug)) {
    return `logos/${slug}`;
  }

  return '';
}

// ─── Questions ────────────────────────────────────────────────────────────────
const QUESTIONS = [
  {
    id: 1, tag: 'Background',
    text: 'Before Ivey, what best describes your background?',
    options: [
      { emoji: '📐', main: 'STEM, engineering, or computer science',       sub: 'Data, systems, technical problem-solving',        scores: { digital: 2, ops: 1 } },
      { emoji: '💰', main: 'Finance, economics, or accounting',            sub: 'Numbers, markets, capital allocation',             scores: { deal: 2, strategist: 1 } },
      { emoji: '🌿', main: 'Life sciences, health, or natural science',    sub: 'Biology, chemistry, pharma, or medicine',         scores: { niche: 3 } },
      { emoji: '🎨', main: 'Humanities, social science, or business',      sub: 'Liberal arts, comm, marketing, or policy',        scores: { strategist: 1, niche: 1 } },
    ],
  },
  {
    id: 2, tag: 'Case Work',
    text: 'Which Ivey case type energizes you most?',
    options: [
      { emoji: '♟️', main: 'Corporate strategy and competitive positioning', sub: 'Market entry, growth strategy, portfolio decisions', scores: { strategist: 3 } },
      { emoji: '📉', main: 'Turnarounds, restructuring, and cost transformation', sub: 'Fixing broken businesses through operations',    scores: { ops: 3 } },
      { emoji: '📲', main: 'Digital transformation and platform strategy',  sub: 'New business models, data, and technology change',   scores: { digital: 3 } },
      { emoji: '🔄', main: 'M&A, private equity, and deal evaluation',      sub: 'Buying, selling, merging, and valuing businesses',   scores: { deal: 3 } },
      { emoji: '🎯', main: 'Marketing, brand strategy, and customer growth', sub: 'Positioning, loyalty, pricing, and consumer insight', scores: { niche: 2, strategist: 1 } },
    ],
  },
  {
    id: 3, tag: 'Orientation',
    text: 'Do you prefer building broad expertise across industries or going deep into one domain?',
    options: [
      { emoji: '🌍', main: 'Broad generalist — new industry every project',    sub: 'I want diverse exposure and fast learning cycles',   scores: { strategist: 2, digital: 1 } },
      { emoji: '🔭', main: 'Deep specialist — become the sector authority',    sub: 'I want to be the expert clients call by name',        scores: { niche: 3 } },
      { emoji: '⚙️', main: 'Functional expert applied across many industries', sub: 'Operations, finance, or tech — applied everywhere',  scores: { ops: 2, digital: 1 } },
      { emoji: '🤝', main: 'Somewhere in between — sector generalist',        sub: 'I\'d pick two or three industries and go deeper there', scores: { deal: 2, strategist: 1 } },
    ],
  },
  {
    id: 4, tag: 'Work Setting',
    text: 'Would you rather advise many different clients, or go deep at one company you believe in?',
    options: [
      { emoji: '🏢', main: 'External consulting — advise many different clients', sub: 'New problems, fresh perspectives, varied industries',    scores: { strategist: 1 }, internal: 0 },
      { emoji: '🏠', main: 'Internal strategy — go deep at one company',         sub: 'Ownership, continuity, and real implementation impact',  scores: {}, internal: 3 },
      { emoji: '↔️', main: 'Either — role quality matters more than the setting', sub: 'I\'m open to both paths',                               scores: {}, internal: 1 },
    ],
  },
  {
    id: 5, tag: 'Ambiguity',
    text: 'You\'re given a blank slide and told: "Figure out what\'s wrong with our business." Your first instinct is to…',
    options: [
      { emoji: '🗂️', main: 'Build a structured issue tree and hypothesis-test it', sub: 'MECE frameworks, logic-first',              scores: { strategist: 3 } },
      { emoji: '📊', main: 'Pull every dataset and let the data guide me',         sub: 'Quantitative-first, evidence-driven',         scores: { digital: 2, deal: 1 } },
      { emoji: '👥', main: 'Interview the frontline — they know what\'s broken',  sub: 'People and process insights first',            scores: { ops: 3 } },
      { emoji: '🔬', main: 'Research the industry and competitive landscape',     sub: 'Context before conclusions',                   scores: { niche: 2, strategist: 1 } },
    ],
  },
  {
    id: 6, tag: 'Output',
    text: 'At the end of an engagement, what would make you most proud?',
    options: [
      { emoji: '📄', main: 'A strategy deck that changed how leadership sees their future', sub: 'A recommendation that sticks in the boardroom', scores: { strategist: 3 } },
      { emoji: '🏭', main: 'A redesigned process that runs 30% faster',                    sub: 'Visible, measurable operational improvement',   scores: { ops: 3 } },
      { emoji: '💸', main: 'A deal that closed at the right valuation',                    sub: 'Numbers that held up — no regrets',              scores: { deal: 3 } },
      { emoji: '🤖', main: 'A new platform or data product the client now runs daily',    sub: 'Something built, not just recommended',           scores: { digital: 3 } },
      { emoji: '🗣️', main: 'A sector brief or brand insight the client still references', sub: 'Deep domain knowledge turned into a lasting edge', scores: { niche: 3 } },
    ],
  },
  {
    id: 7, tag: 'Sector',
    text: 'Which industry pulls you most?',
    options: [
      { emoji: '💊', main: 'Healthcare, pharma, or life sciences',          sub: 'Drug development, hospital systems, biotech',    scores: { niche: 3 } },
      { emoji: '🏦', main: 'Financial services, banking, or PE/investment', sub: 'Capital markets, insurance, wealth, private equity', scores: { deal: 2, niche: 1 } },
      { emoji: '📱', main: 'Technology, media, or telecommunications',      sub: 'Digital platforms, AI, consumer tech, telecoms',  scores: { digital: 3 } },
      { emoji: '✈️', main: 'Airlines & aviation',                            sub: 'Network strategy, ops, fleet, route economics',  scores: { ops: 2, strategist: 1 } },
      { emoji: '🏭', main: 'Industrials & manufacturing',                    sub: 'Supply chain, engineering, heavy industry',       scores: { ops: 3 } },
      { emoji: '🛒', main: 'Consumer goods & retail',                        sub: 'Brands, CPG, e-commerce, customer strategy',      scores: { strategist: 2, ops: 1 } },
      { emoji: '⚡', main: 'Energy & resources',                             sub: 'Oil & gas, renewables, utilities, mining',        scores: { ops: 2, niche: 1 } },
    ],
  },
  {
    id: 8, tag: 'Firm Size',
    text: 'Which work environment appeals to you more?',
    options: [
      { emoji: '🌐', main: 'Large multinational — global platform and resources', sub: 'Brand, scale, structured training, international mobility', scores: {}, boutique: 0 },
      { emoji: '🚀', main: 'Smaller, leaner boutique — direct ownership from day one', sub: 'More responsibility early, tighter culture, faster growth', scores: {}, boutique: 2 },
      { emoji: '🤷', main: 'No strong preference — the work matters more',        sub: 'I\'ll go where the best opportunity is',                   scores: {}, boutique: 1 },
    ],
  },
  {
    id: 9, tag: 'Client Work',
    text: 'What kind of client interaction excites you most?',
    options: [
      { emoji: '🎙️', main: 'Presenting and defending recommendations to senior executives', sub: 'The boardroom, C-suite, steerco',                       scores: { strategist: 2, deal: 1 } },
      { emoji: '🔧', main: 'Working side-by-side with client teams to implement change',    sub: 'On-the-ground, sleeves rolled up',                       scores: { ops: 2, digital: 1 } },
      { emoji: '🔎', main: 'Deep research to uncover insights clients haven\'t seen',       sub: 'Analytical horsepower first',                            scores: { niche: 2, deal: 1 } },
      { emoji: '💬', main: 'Building long-term trusted advisor relationships',              sub: 'Becoming the partner they call first',                   scores: { strategist: 1, niche: 1 } },
    ],
  },
  {
    id: 10, tag: 'Team Dynamic',
    text: 'What\'s your ideal team size and structure?',
    options: [
      { emoji: '⚡', main: '2–4 people — small, focused, fast-moving',          sub: 'Everyone knows the whole picture, high individual ownership', scores: { strategist: 2, deal: 1 } },
      { emoji: '🏢', main: '10–20 people — structured practice, clear roles',  sub: 'Deep expertise, clear career ladder, mentorship',              scores: { digital: 2, ops: 1 } },
      { emoji: '🏗️', main: 'Cross-functional project teams — varies by engagement', sub: 'Different mix every time, depends on the problem',        scores: { ops: 2, strategist: 1 } },
      { emoji: '🔬', main: 'Small specialist pod inside a larger firm',        sub: 'Deep domain team within a bigger platform',                    scores: { niche: 2, deal: 1 } },
    ],
  },
  {
    id: 11, tag: 'Energy Source',
    text: 'What fires you up intellectually?',
    options: [
      { emoji: '🧠', main: 'Cracking a strategic problem no one has solved before', sub: 'Novel frameworks, first-principles thinking',    scores: { strategist: 3 } },
      { emoji: '📈', main: 'Understanding how a market or business creates value',  sub: 'Business model economics, competitive dynamics',  scores: { deal: 2, strategist: 1 } },
      { emoji: '⚙️', main: 'Untangling why a complex system is failing',           sub: 'Root cause analysis, process flows, org design',  scores: { ops: 3 } },
      { emoji: '🌱', main: 'Going so deep in a field that generalists can\'t follow', sub: 'Sector mastery, expert credibility',            scores: { niche: 3 } },
    ],
  },
  {
    id: 12, tag: 'Toolkit',
    text: 'What\'s your most natural tool when attacking a hard problem?',
    options: [
      { emoji: '🖊️', main: 'Structured storytelling and narrative strategy', sub: 'Pyramid principle, slide logic, executive comms', scores: { strategist: 3 } },
      { emoji: '📊', main: 'Financial modelling and quantitative analysis',  sub: 'Excel, scenario analysis, valuation',              scores: { deal: 3 } },
      { emoji: '🤖', main: 'Data analysis, SQL, Python, or visualization',  sub: 'Dashboards, analytics, code-assisted insight',     scores: { digital: 3 } },
      { emoji: '📋', main: 'Process mapping and operational diagnostics',   sub: 'Swim lanes, root cause, Lean / Six Sigma thinking', scores: { ops: 3 } },
      { emoji: '📚', main: 'Domain research, expert interviews, and sector synthesis', sub: 'Deep knowledge that generalists simply don\'t have', scores: { niche: 3 } },
    ],
  },
  {
    id: 13, tag: 'Vision',
    text: 'In ten years, where do you see yourself?',
    options: [
      { emoji: '🏆', main: 'Partner at a strategy or management consulting firm',          sub: 'Leading high-stakes engagements, building a client roster',       scores: { strategist: 3 } },
      { emoji: '🦄', main: 'Chief Strategy Officer or founder of a tech company',          sub: 'Building or running a business using digital as the moat',        scores: { digital: 3 } },
      { emoji: '🎯', main: 'Operating partner at a private equity fund',                   sub: 'Owning the strategic and operational agenda of portfolio companies', scores: { deal: 2, ops: 1 } },
      { emoji: '🌍', main: 'World-class expert in my industry or functional area',         sub: 'The name people mention when your sector comes up',               scores: { niche: 3 } },
    ],
  },
];

// ─── State ────────────────────────────────────────────────────────────────────
let currentQ      = 0;
let answers       = [];
let scores        = { strategist: 0, digital: 0, deal: 0, ops: 0, niche: 0 };
let internalScore = 0;
let boutiqueScore = 1; // 0=large, 1=neutral, 2=boutique

// ─── Navigation ───────────────────────────────────────────────────────────────
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function startQuiz() {
  currentQ      = 0;
  answers       = [];
  scores        = { strategist: 0, digital: 0, deal: 0, ops: 0, niche: 0 };
  internalScore = 0;
  boutiqueScore = 1;
  showScreen('quiz');
  renderQuestion();
}

function restartQuiz() {
  showScreen('landing');
}

function prevQuestion() {
  if (currentQ === 0) return;
  // undo last answer
  const prev = answers[currentQ - 1];
  if (prev !== undefined) {
    const opt = QUESTIONS[currentQ - 1].options[prev];
    if (opt.scores)   Object.keys(opt.scores).forEach(k => { scores[k] -= opt.scores[k]; });
    if (opt.internal !== undefined) internalScore -= opt.internal;
    if (opt.boutique !== undefined) boutiqueScore  = 1; // reset to neutral
    answers.pop();
  }
  currentQ--;
  renderQuestion();
}

function selectOption(optIdx) {
  const opt = QUESTIONS[currentQ].options[optIdx];
  if (opt.scores)   Object.keys(opt.scores).forEach(k => { scores[k] += opt.scores[k]; });
  if (opt.internal !== undefined) internalScore  += opt.internal;
  if (opt.boutique !== undefined) boutiqueScore   = opt.boutique;
  answers.push(optIdx);

  if (currentQ < QUESTIONS.length - 1) {
    currentQ++;
    renderQuestion();
  } else {
    buildResults();
  }
}

// ─── Render question ─────────────────────────────────────────────────────────
function renderQuestion() {
  const q     = QUESTIONS[currentQ];
  const total = QUESTIONS.length;
  const pct   = Math.round((currentQ / total) * 100);

  document.getElementById('progressFill').style.width  = pct + '%';
  document.getElementById('progressLabel').textContent = `${currentQ + 1} / ${total}`;
  document.getElementById('qCounter').textContent      = `Question ${currentQ + 1} of ${total}`;
  document.getElementById('backBtn').style.display     = currentQ > 0 ? 'flex' : 'none';

  const area = document.getElementById('questionArea');
  area.innerHTML = `
    <div class="q-tag">${q.tag} · Q${q.id}</div>
    <div class="q-text">${q.text}</div>
    <div class="opts" id="optsList"></div>
  `;

  const list = document.getElementById('optsList');
  q.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'opt';
    btn.innerHTML = `
      <div class="opt-ic">${opt.emoji}</div>
      <div>
        <div class="opt-main">${opt.main}</div>
        ${opt.sub ? `<div class="opt-sub">${opt.sub}</div>` : ''}
      </div>
    `;
    btn.onclick = () => selectOption(i);
    list.appendChild(btn);
  });

  document.getElementById('quiz').scrollTop = 0;
}

// ─── Build results ────────────────────────────────────────────────────────────
function buildResults() {
  showScreen('results');

  const ranked   = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  const winner   = ranked[0][0];
  const arch     = ARCHETYPES[winner];
  const total    = Object.values(scores).reduce((a, b) => a + b, 0) || 1;
  const sizeLabel = boutiqueScore >= 2 ? 'boutique' : boutiqueScore === 0 ? 'large' : 'neutral';

  // Full hybrid (≥85% of top): all sections blend both archetypes
  // Partial hybrid (≥60% of top): firms, playbook, and synthesis reflect secondary
  const ratio    = ranked.length >= 2 && ranked[1][1] > 0 ? ranked[1][1] / ranked[0][1] : 0;
  const isHybrid = ratio >= 0.85;
  const hasSecondary = ratio >= 0.60;
  const winner2  = hasSecondary ? ranked[1][0] : null;
  const arch2    = hasSecondary ? ARCHETYPES[winner2] : null;

  // ── Sector signals ────────────────────────────────────────────────────────
  // Q1 background, Q7 sector, and Q2 marketing answer each contribute a signal.
  // These drive firm injection DIRECTLY, independent of the archetype winner.
  const Q1_SECTOR_MAP = { 0: 'tech', 1: 'financial', 2: 'health', 3: null };
  const Q7_SECTOR_MAP = { 0: 'health', 1: 'financial', 2: 'tech', 3: 'industrial', 4: 'industrial', 5: 'consumer', 6: 'industrial' };
  const q1Signal     = Q1_SECTOR_MAP[answers[0]] ?? null;
  const q7Signal     = Q7_SECTOR_MAP[answers[6]] ?? null;
  const q2Signal     = answers[1] === 4 ? 'consumer' : null; // marketing/brand case option
  const sectorSignal = q2Signal || q7Signal; // Q2 marketing takes precedence over Q7

  // How many of the 6 firm slots are reserved for sector-matched firms:
  //   Q1 background AND Q7 sector both agree → 3 slots (strong double signal)
  //   Only Q7 sector (or Q2 marketing) → 2 slots
  const q1MatchesSector = q1Signal && q1Signal === sectorSignal;
  const sectorSlots     = sectorSignal ? (q1MatchesSector ? 3 : 2) : 0;

  function sortFirms(arr) {
    const order = boutiqueScore >= 2 ? { boutique: 0, mid: 1, large: 2 }
                : boutiqueScore === 0 ? { large: 0, mid: 1, boutique: 2 }
                : { mid: 0, large: 1, boutique: 2 };
    return [...arr].sort((a, b) => (order[a.size] ?? 1) - (order[b.size] ?? 1));
  }

  // Pull sector-matched firms from ALL archetype buckets (not just the winner's)
  function getAllSectorFirms(signal) {
    const seen = new Set();
    const result = [];
    for (const bucket of Object.values(FIRMS)) {
      for (const f of bucket) {
        if (f.tags?.includes(signal) && !seen.has(f.name)) {
          seen.add(f.name);
          result.push(f);
        }
      }
    }
    return result;
  }

  const sectorFirms = sectorSlots > 0
    ? sortFirms(getAllSectorFirms(sectorSignal)).slice(0, sectorSlots)
    : [];

  // Fill remaining slots from the archetype winner (and secondary if hybrid)
  const archetypeSlots = 6 - sectorFirms.length;
  const excluded = new Set(sectorFirms.map(f => f.name));

  let archetypeFirms;
  if (hasSecondary) {
    const total12 = ranked[0][1] + ranked[1][1];
    const n1 = Math.ceil(archetypeSlots * ranked[0][1] / total12);
    const n2 = archetypeSlots - n1;
    const pool1 = sortFirms(FIRMS[winner]).filter(f => !excluded.has(f.name)).slice(0, n1);
    const pool2 = sortFirms(FIRMS[winner2]).filter(f => !excluded.has(f.name) && !pool1.some(p => p.name === f.name)).slice(0, n2);
    archetypeFirms = [...pool1, ...pool2];
  } else {
    archetypeFirms = sortFirms(FIRMS[winner]).filter(f => !excluded.has(f.name)).slice(0, archetypeSlots);
  }

  const firms = [...sectorFirms, ...archetypeFirms];

  const body = document.getElementById('resultsBody');
  body.innerHTML = '';

  // ── 1. Hero ────────────────────────────────────────────────────────────────
  const hero = el('div', `r-hero ${arch.heroClass}`);
  if (isHybrid) {
    hero.innerHTML = `
      <span class="r-hero-emoji">${arch.emoji} · ${arch2.emoji}</span>
      <div class="r-hero-label">Your consulting archetype</div>
      <div class="r-hero-name">${arch.name} · ${arch2.name.replace('The ', '')}</div>
      <p class="r-hero-tagline">Your profile spans two paths — both are genuine fits worth pursuing.</p>
      <span class="r-hero-badge">${arch.badge}</span>
      <span class="r-hero-badge" style="margin-left:6px;">${arch2.badge}</span>
    `;
  } else {
    hero.innerHTML = `
      <span class="r-hero-emoji">${arch.emoji}</span>
      <div class="r-hero-label">Your consulting archetype</div>
      <div class="r-hero-name">${arch.name}</div>
      <p class="r-hero-tagline">${arch.tagline}</p>
      <span class="r-hero-badge">${arch.badge}</span>
    `;
  }
  body.appendChild(hero);

  // ── 2. Profile + Scores ───────────────────────────────────────────────────
  const twoCol = el('div', '');
  twoCol.style.cssText = 'display:grid;grid-template-columns:1fr 1fr;gap:16px;';
  if (window.innerWidth < 640) twoCol.style.gridTemplateColumns = '1fr';

  const profCard = el('div', 'surface');
  if (isHybrid) {
    profCard.innerHTML = `
      <div style="font-size:0.68rem;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:var(--subtle);margin-bottom:14px;">Your Profile</div>
      <p style="font-size:0.85rem;font-weight:600;color:var(--ink);margin-bottom:4px;">${arch.emoji} ${arch.name}</p>
      <p style="font-size:0.9rem;line-height:1.75;color:var(--body);margin-bottom:14px;">${arch.description}</p>
      <p style="font-size:0.85rem;font-weight:600;color:var(--ink);margin-bottom:4px;">${arch2.emoji} ${arch2.name}</p>
      <p style="font-size:0.9rem;line-height:1.75;color:var(--body);">${arch2.description}</p>
    `;
  } else {
    profCard.innerHTML = `
      <div style="font-size:0.68rem;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:var(--subtle);margin-bottom:14px;">Your Profile</div>
      <p style="font-size:0.9rem;line-height:1.75;color:var(--body);">${arch.description}</p>
    `;
  }

  const scoreCard = el('div', 'surface');
  scoreCard.innerHTML = `
    <div style="font-size:0.68rem;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:var(--subtle);margin-bottom:16px;">Score Breakdown</div>
    <div class="score-list" id="scoreList"></div>
  `;
  twoCol.appendChild(profCard);
  twoCol.appendChild(scoreCard);
  body.appendChild(twoCol);

  const scoreList = scoreCard.querySelector('#scoreList');
  ['strategist','digital','deal','ops','niche'].forEach(key => {
    const a   = ARCHETYPES[key];
    const pct = Math.round((scores[key] / total) * 100);
    const row = el('div', 'score-row');
    row.innerHTML = `
      <div class="score-meta">
        <span class="score-name">${a.emoji} ${a.name}</span>
        <span class="score-pct">${pct}%</span>
      </div>
      <div class="score-track">
        <div class="score-fill fill-${key}" data-pct="${pct}"></div>
      </div>
    `;
    scoreList.appendChild(row);
  });

  // ── 3. Strengths ──────────────────────────────────────────────────────────
  const strSec = el('div', 'r-section');
  strSec.innerHTML = `
    <div class="r-section-head">
      <div class="r-section-title">Core Strengths</div>
      <div class="r-section-rule"></div>
    </div>
    <div class="grid-2"></div>
  `;
  const strGrid = strSec.querySelector('.grid-2');
  const strengths = isHybrid
    ? [...arch.strengths.slice(0, 2), ...arch2.strengths.slice(0, 2)]
    : arch.strengths;
  strengths.forEach(s => {
    const c = el('div', 'card');
    c.innerHTML = `<div class="str-icon">${s.icon}</div><div class="str-name">${s.name}</div><div class="str-desc">${s.desc}</div>`;
    strGrid.appendChild(c);
  });
  body.appendChild(strSec);

  // ── 4. Firms ──────────────────────────────────────────────────────────────
  const sizeNote = hasSecondary
    ? `Showing firms from both your ${arch.name} and ${arch2.name} paths${sizeLabel === 'boutique' ? ', boutique-first' : sizeLabel === 'large' ? ', large-firm-first' : ''}.`
    : sizeLabel === 'boutique' ? 'Showing boutique-first based on your preferences.'
    : sizeLabel === 'large'    ? 'Showing large firms first based on your preferences.'
    : 'Showing a mix of large and boutique firms.';
  const firmSec = el('div', 'r-section');
  firmSec.innerHTML = `
    <div class="r-section-head">
      <div class="r-section-title">Firms to Target</div>
      <div class="r-section-rule"></div>
    </div>
    <p style="font-size:0.78rem;color:var(--subtle);margin-bottom:14px;">${sizeNote}</p>
    <div class="grid-3"></div>
  `;
  const firmGrid = firmSec.querySelector('.grid-3');
  firms.forEach(f => {
    const tierLabel = f.tier === 'core' ? 'Core Target' : f.tier === 'strong' ? 'Strong Fit' : 'Also Consider';
    const tierClass = f.tier === 'core' ? 't-core' : f.tier === 'strong' ? 't-strong' : 't-alt';
    const sizeTag   = f.size === 'large' ? 'Large' : f.size === 'mid' ? 'Mid-size' : 'Boutique';
    const url       = FIRM_URL_MAP[f.name] || '';
    const c = el('div', 'card');
    c.innerHTML = `
      <div class="firm-logo-wrap">
        <img src="${getFirmLogo(f.name)}" alt="${f.name} logo" onerror="this.style.display='none'" />
        ${url ? `<a href="${url}" target="_blank" rel="noopener noreferrer" class="firm-learn-more">Learn More ↗</a>` : ''}
      </div>
      <div><span class="firm-tier ${tierClass}">${tierLabel}</span></div>
      <div class="firm-name">${f.name} <span class="firm-size-tag">${sizeTag}</span></div>
      <div class="firm-city">📍 ${f.city}</div>
      <div class="firm-note">${f.note}</div>
    `;
    firmGrid.appendChild(c);
  });
  body.appendChild(firmSec);

  // ── 5. Internal section (conditional) ────────────────────────────────────
  if (internalScore >= 2) {
    const intSec = el('div', 'internal-banner');
    intSec.innerHTML = `
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:16px;">
        <div style="font-size:0.68rem;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:rgba(255,255,255,0.45);">In-House Strategy Roles</div>
        <div style="flex:1;height:1px;background:rgba(255,255,255,0.12);"></div>
      </div>
      <div class="internal-head">
        <div>
          <div class="internal-title">You lean internal — also consider these</div>
          <div class="internal-sub">Your answers suggest a preference for in-house strategy work. These firms have active HBA pipelines for corporate strategy, analytics, and business development teams — where you'd own outcomes, not just decks.</div>
        </div>
        <span style="font-size:2.2rem;flex-shrink:0;">🏢</span>
      </div>
      <div class="internal-grid"></div>
    `;
    const intGrid = intSec.querySelector('.internal-grid');
    INTERNAL_FIRMS.forEach(f => {
      const url = FIRM_URL_MAP[f.name] || '';
      const c = el('div', 'internal-card');
      c.innerHTML = `
        <div style="display:flex;align-items:center;justify-content:space-between;gap:8px;margin-bottom:4px;">
          <div class="internal-card-name" style="margin-bottom:0;">${f.name}</div>
          ${url ? `<a href="${url}" target="_blank" rel="noopener noreferrer" class="firm-learn-more" style="border-color:rgba(255,255,255,0.3);color:#fff;">Learn More ↗</a>` : ''}
        </div>
        <div class="internal-card-note">${f.note}</div>
      `;
      intGrid.appendChild(c);
    });
    body.appendChild(intSec);
  }

  // ── 6. Playbook ───────────────────────────────────────────────────────────
  const playSec = el('div', 'r-section');
  playSec.innerHTML = `
    <div class="r-section-head">
      <div class="r-section-title">Your Recruiting Playbook</div>
      <div class="r-section-rule"></div>
    </div>
    <div class="surface"></div>
  `;
  const playCard = playSec.querySelector('.surface');
  if (hasSecondary) {
    const steps1 = arch.playbook.slice(0, isHybrid ? 3 : 4);
    const steps2 = arch2.playbook.slice(0, isHybrid ? 2 : 1);
    const addDivider = (label) => {
      const d = el('div', '');
      d.style.cssText = 'font-size:0.68rem;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:var(--subtle);padding:10px 0 4px;';
      d.textContent = label;
      playCard.appendChild(d);
    };
    addDivider(`${arch.emoji} ${arch.name}`);
    steps1.forEach((p, i) => {
      const step = el('div', 'play-step');
      step.innerHTML = `<div class="play-num">${i + 1}</div><div><div class="play-title">${p.title}</div><div class="play-detail">${p.detail}</div></div>`;
      playCard.appendChild(step);
    });
    addDivider(`${arch2.emoji} ${arch2.name}`);
    steps2.forEach((p, i) => {
      const step = el('div', 'play-step');
      step.innerHTML = `<div class="play-num">${i + 4}</div><div><div class="play-title">${p.title}</div><div class="play-detail">${p.detail}</div></div>`;
      playCard.appendChild(step);
    });
  } else {
    arch.playbook.forEach((p, i) => {
      const step = el('div', 'play-step');
      step.innerHTML = `<div class="play-num">${i + 1}</div><div><div class="play-title">${p.title}</div><div class="play-detail">${p.detail}</div></div>`;
      playCard.appendChild(step);
    });
  }
  body.appendChild(playSec);

  // ── 6.5 Useful Tools ──────────────────────────────────────────────────────
  const USEFUL_TOOLS = [
    { name: 'RocketBlocks',          logo: 'logos/rocketblocks.png',            url: 'https://www.rocketblocks.me' },
    { name: 'Management Consulted',  logo: 'logos/managementconsulted-com.png', url: 'https://managementconsulted.com' },
    { name: 'CaseCoach',             logo: 'logos/casecoach.png',               url: 'https://casecoach.com' },
  ];
  const toolsSec = el('div', 'r-section');
  toolsSec.innerHTML = `
    <div class="r-section-head">
      <div class="r-section-title">Useful Tools</div>
      <div class="r-section-rule"></div>
    </div>
    <div class="tools-grid"></div>
  `;
  const toolsGrid = toolsSec.querySelector('.tools-grid');
  USEFUL_TOOLS.forEach(t => {
    const card = el('a', 'tool-card');
    card.href = t.url;
    card.target = '_blank';
    card.rel = 'noopener noreferrer';
    card.innerHTML = `
      <img src="${t.logo}" alt="${t.name} logo" />
      <div class="tool-name">${t.name}</div>
    `;
    toolsGrid.appendChild(card);
  });
  body.appendChild(toolsSec);

  // ── 7. Synthesis ──────────────────────────────────────────────────────────
  const synth = el('div', 'r-synthesis');
  synth.innerHTML = `
    <div class="synth-eyebrow">Your Summary</div>
    <div class="synth-title">The Bottom Line</div>
    ${isHybrid
      ? `<p class="synth-text">Your results show a genuine split between ${arch.name} and ${arch2.name} — this isn't indecision, it's a broader fit profile. Pursue both paths in parallel and let your conversations with firms sharpen the focus.</p>
         <p class="synth-text" style="margin-top:12px;"><strong>${arch.name.replace('The ', '')}:</strong> ${arch.synthesis(sizeLabel)}</p>
         <p class="synth-text" style="margin-top:12px;"><strong>${arch2.name.replace('The ', '')}:</strong> ${arch2.synthesis(sizeLabel)}</p>`
      : hasSecondary
      ? `<p class="synth-text">${arch.synthesis(sizeLabel)}</p>
         <p class="synth-text" style="margin-top:12px;"><strong>Also worth noting:</strong> Your ${arch2.name} tendencies are real — the ${arch2.name.replace('The ', '')} firms in your list above reflect that. Keep that interest visible in your conversations with those firms.</p>`
      : `<p class="synth-text">${arch.synthesis(sizeLabel)}</p>`
    }
    <div class="synth-actions">
      <button class="synth-btn synth-btn-primary" onclick="window.print()">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 9V2h12v7M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2M6 14h12v8H6z"/></svg>
        Save Results
      </button>
      <button class="synth-btn synth-btn-secondary" onclick="restartQuiz()">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M1 4v6h6M23 20v-6h-6"/><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4-4.64 4.36A9 9 0 0 1 3.51 15"/></svg>
        Retake Quiz
      </button>
    </div>
  `;
  body.appendChild(synth);

  // ── 8. Our Partners ───────────────────────────────────────────────────────
  const logosSec = el('div', 'r-section');
  logosSec.innerHTML = `
    <div class="r-section-head">
      <div class="r-section-title">Our Partners</div>
      <div class="r-section-rule"></div>
    </div>
    <div class="logo-grid" id="logoGrid"></div>
  `;
  const logoGrid = logosSec.querySelector('#logoGrid');
  LOGO_FILES.forEach(file => {
    const img = document.createElement('img');
    img.src = `logos/${file}`;
    img.alt = `${file.replace(/\.(png|jpg)$/i, '').replace(/[-]/g, ' ')} logo`;
    img.loading = 'lazy';
    logoGrid.appendChild(img);
  });
  body.appendChild(logosSec);

  // Footer
  const foot = el('div', 'r-foot');
  foot.innerHTML = 'Built for HBA1s by the Ivey Consulting Club &nbsp;·&nbsp; icc@ivey.ca &nbsp;·&nbsp; Results are not stored';
  body.appendChild(foot);

  // Animate score bars
  requestAnimationFrame(() => requestAnimationFrame(() => {
    document.querySelectorAll('.score-fill[data-pct]').forEach(el => {
      el.style.width = el.dataset.pct + '%';
    });
  }));

  document.getElementById('results').scrollTop = 0;
}

// ─── Utility ──────────────────────────────────────────────────────────────────
function el(tag, className) {
  const e = document.createElement(tag);
  if (className) e.className = className;
  return e;
}
