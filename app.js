/* ══════════════════════════════════════════════════════════
   IHSC HealthPath — app.js
   14 questions · 7 tracks · institutional + size modifiers
   ══════════════════════════════════════════════════════════ */

// ─── Archetype / Track metadata ──────────────────────────────────────────────
const ARCHETYPES = {
  consulting: {
    key: 'consulting',
    emoji: '♟️',
    name: 'The Healthcare Strategist',
    tagline: 'You make healthcare systems think differently.',
    description: 'You\'re drawn to the hardest questions at the intersection of business and medicine. You want to sit across from a hospital CEO, a pharma executive, or a government health minister and tell them what to do differently. Your edge is the ability to translate complex clinical and market dynamics into a clear strategic direction — you can move from oncology market entry on Monday to health system consolidation by Thursday, and you love every minute of it.',
    badge: 'Healthcare consulting',
    heroClass: 'hero-consulting',
    color: '#0D9488',
    strengths: [
      { icon: '🧩', name: 'Structured Problem-Solving', desc: 'You break complex healthcare problems into their logical components and find the signal through the noise.' },
      { icon: '🏥', name: 'Healthcare Systems Thinking', desc: 'You understand how payers, providers, and pharma firms interact — and where the levers are.' },
      { icon: '📣', name: 'Executive Communication', desc: 'You distil clinical and market complexity into the one slide that changes how a leadership team sees the future.' },
      { icon: '⚡', name: 'Cross-Sector Agility', desc: 'You go deep on pharma pricing Monday and hospital consolidation by Thursday without missing a beat.' },
    ],
    playbook: [
      { title: 'Get into the ZS Associates and L.E.K. process early', detail: 'Applications for these firms open in September/October. A warm referral through IHSC mentors significantly improves your chances of a screen — get on the list early.' },
      { title: 'Build a healthcare-specific "why consulting" story', detail: 'Your interest in pharma, payers, or hospital strategy must be specific and credible. Generic consulting motivation doesn\'t land at health-focused firms — firms like ZS and Coactuate look for genuine domain conviction.' },
      { title: 'Prep case interviews with a healthcare lens', detail: 'Practice market entry into a new therapeutic area, hospital profitability diagnosis, and pharma pricing cases. IHSC mentor sessions with alumni at ZS or Deloitte Health are invaluable.' },
      { title: 'Target Coactuate and Invictus for boutique access', detail: 'Both have direct Ivey pipelines and recruit in the December–January window. Small teams, direct client ownership, and deep healthcare specialization — excellent first roles.' },
      { title: 'Use the Big 4 health practices as strong backup targets', detail: 'Deloitte Health, EY Health, and PwC Health Industries all have active HBA pipelines and serious healthcare work — strategy, analytics, and transformation engagements across pharma and payers.' },
    ],
    synthesis: (sizeLabel) => {
      const sizeNote = sizeLabel === 'boutique'
        ? 'Your boutique preference makes Coactuate, Invictus, and Clearview Healthcare Partners your top targets — small teams, deep specialization, and direct ownership from day one.'
        : 'Large-firm environments like Deloitte Health, EY, and PwC give you scale, diverse healthcare client exposure, and structured development pathways.';
      return `Healthcare consulting rewards exactly your profile: structured thinking, executive communication, and the ability to operate across the full breadth of a complex sector. ${sizeNote} Recruiting runs December–January, so your timeline is tight. Get your ZS/L.E.K. applications in by October and lock in IHSC mentor introductions before November.`;
    },
  },

  corporate: {
    key: 'corporate',
    emoji: '🧬',
    name: 'The Corporate Innovator',
    tagline: 'You build strategy from the inside out.',
    description: 'You want to be inside the room where pipeline decisions are made. You\'re drawn to the long game — the 10-year strategic plan of a pharma giant, the integration strategy after a $3B medtech acquisition, or the corporate development arm deciding which biotech to partner with. You bring both business rigour and genuine scientific curiosity. The internal strategy teams at Roche, AstraZeneca, and J&J aren\'t just jobs to you — they\'re a front-row seat to how medicine gets made and brought to market.',
    badge: 'Pharma & MedTech corporate strategy',
    heroClass: 'hero-corporate',
    color: '#1E40AF',
    strengths: [
      { icon: '🔭', name: 'Long-Horizon Strategic Thinking', desc: 'You think in 5-year pipelines and 10-year portfolio strategies, not just quarterly deliverables.' },
      { icon: '🧬', name: 'Scientific Fluency', desc: 'You can hold a real conversation about mechanism of action, clinical endpoints, and pipeline risk — a rare business advantage.' },
      { icon: '🤝', name: 'Corporate Development Instincts', desc: 'You see BD partnerships, licensing deals, and M&A targets through both a scientific and a financial lens.' },
      { icon: '🗺️', name: 'Organizational Navigation', desc: 'Large pharma is a complex matrix — you understand how to build cross-functional alignment and move initiatives forward.' },
    ],
    playbook: [
      { title: 'Start building your pharma/medtech network in October', detail: 'Formal recruiting for corporate rotational programs is January–April, but relationships start months earlier. Connect with Ivey alumni inside J&J, Roche, and AstraZeneca through IHSC networks.' },
      { title: 'Develop a clear "why pharma" story rooted in a specific pipeline or challenge', detail: 'Interviewers at pharma companies want to know what you actually find interesting about their business — whether it\'s oncology pipelines, biosimilar strategy, or medtech M&A. Be specific.' },
      { title: 'Target competitive rotational programs at J&J, Roche, and AstraZeneca', detail: 'All three have structured rotational strategy programs in Canada. These are the premium entry points — competitive but HBA-accessible with the right preparation.' },
      { title: 'Consider starting in healthcare consulting and transitioning after 2–3 years', detail: 'ZS → pharma corporate strategy is one of the most common career pathways in the sector. Starting in consulting builds the analytical toolkit that pharma strategy teams covet.' },
      { title: 'Learn the basics of pharmacoeconomics and health technology assessment', detail: 'Understanding CADTH submissions, pDt listings, and HTA processes differentiates you from pure business candidates in pharma interviews. Even surface-level familiarity signals genuine interest.' },
    ],
    synthesis: (sizeLabel) => {
      const sizeNote = sizeLabel === 'boutique'
        ? 'Healthcare consulting boutiques like Coactuate and L.E.K. can be an excellent first step — many of the best pharma corporate strategists started in health consulting before moving in-house.'
        : 'The rotational programs at J&J, Roche, AstraZeneca, and Novartis are built for your profile — large platform, diverse exposure, and a clear path to senior strategy roles.';
      return `Corporate strategy inside a global pharma or medtech company is one of the highest-leverage roles in healthcare — you work on problems that affect millions of patients and billions in capital simultaneously. ${sizeNote} Recruiting is less structured than consulting but rewards genuine scientific curiosity and a sharp "why this company" story. Build your network inside target companies now — relationships matter here more than almost anywhere.`;
    },
  },

  banking: {
    key: 'banking',
    emoji: '💼',
    name: 'The Life Sciences Banker',
    tagline: 'You execute the deals that fund medicine\'s future.',
    description: 'You love the energy of a live deal. The late nights running an rNPV model on a biotech acquisition target, the M&A process that determines whether a promising oncology drug gets the capital it needs — this is where you want to be. Life sciences investment banking combines your analytical horsepower with one of the most dynamic deal environments in finance. You\'re not just doing M&A; you\'re doing M&A where the outcome matters for patients.',
    badge: 'Healthcare investment banking',
    heroClass: 'hero-banking',
    color: '#92400E',
    strengths: [
      { icon: '📊', name: 'Financial Modelling & Valuation', desc: 'You build life sciences DCFs, rNPV models, and precedent transaction analyses that hold up under scrutiny.' },
      { icon: '⏱️', name: 'Deal Execution Under Pressure', desc: 'Live deal timelines and late-night diligence requests bring out your best work, not your worst.' },
      { icon: '🔬', name: 'Life Sciences Market Intelligence', desc: 'You know the therapeutic area landscape, the key players, and who\'s buying what — and why it matters for valuation.' },
      { icon: '🔍', name: 'Commercial Due Diligence', desc: 'You assess market size, competitive dynamics, and growth sustainability under real deal pressure.' },
    ],
    playbook: [
      { title: 'Healthcare IB recruiting at Ivey runs January–February', detail: 'Start networking aggressively in October via LinkedIn and Ivey finance club channels. Most banks make their summer associate decisions within a compressed January–February window.' },
      { title: 'Build a strong technical foundation in life sciences finance', detail: 'Master biotech-specific DCF (risk-adjusted NPV), comparable company analysis for pharma, and precedent transaction methodology. Know the difference between a platform biotech and a single-asset company.' },
      { title: 'Target Leerink Partners and Jefferies as premier healthcare-focused banks', detail: 'Both recruit Canadian talent and are considered premium platforms for life sciences deal work. Leerink in particular is almost exclusively healthcare — deep specialization and strong culture.' },
      { title: 'Keep RBC and CIBC Capital Markets on your list', detail: 'Both have strong Canadian healthcare M&A franchises and active Ivey recruiting pipelines. Strong deal flow in Canadian pharma and medtech M&A, licensing, and equity capital markets.' },
      { title: 'Develop a view on 2–3 healthcare sub-sectors', detail: 'Bankers who can have a real conversation about oncology deal dynamics, medtech M&A multiples, or digital health capital markets stand out — don\'t just know finance, know the science behind the deals.' },
    ],
    synthesis: (sizeLabel) => {
      const sizeNote = sizeLabel === 'boutique'
        ? 'Boutique-focused healthcare banks like Leerink Partners and Lazard Healthcare offer deep sector specialization with more direct deal exposure than bulge bracket platforms — strong fit for your profile.'
        : 'RBC and CIBC provide strong Canadian platforms — deep deal flow, well-established healthcare practices, and the Ivey brand carries real weight in these recruiting processes.';
      return `Life sciences M&A is one of the most active corners of global investment banking — and being genuinely knowledgeable about the science behind the deals is a real differentiator at the HBA level. ${sizeNote} Your IB recruiting window is January–February, so start financial modelling prep and sub-sector knowledge-building in November. The healthcare bankers who stand out at Ivey know the business of medicine, not just the mechanics of M&A.`;
    },
  },

  pe: {
    key: 'pe',
    emoji: '📈',
    name: 'The Capital Allocator',
    tagline: 'You back the companies that will define healthcare\'s future.',
    description: 'You think like an investor. When you read about a clinical trial, you\'re thinking about what it means for the company\'s pipeline value. When you see a digital health app, you\'re evaluating the TAM, the unit economics, and the exit path. Healthcare VC and PE roles sit at the intersection of scientific conviction and financial discipline — you need both to be great at this. The Canadian healthcare investment community is growing fast, and it\'s hungry for people who can understand both the balance sheet and the biology.',
    badge: 'Healthcare VC & private equity',
    heroClass: 'hero-pe',
    color: '#065F46',
    strengths: [
      { icon: '📋', name: 'Investment Thesis Development', desc: 'You can articulate a clear, defensible view on what\'s fundable in a sub-sector — and what\'s not.' },
      { icon: '🌐', name: 'Sector Pattern Recognition', desc: 'Deep healthcare exposure lets you see trends, valuation signals, and risks that generalist investors miss.' },
      { icon: '💎', name: 'Portfolio Value Creation', desc: 'You don\'t just pick companies — you help them grow. Strategy, BD, and operating support are part of the role.' },
      { icon: '🔬', name: 'Scientific Due Diligence', desc: 'You assess clinical data, pipeline risk, and regulatory pathways with enough rigour to underwrite an investment decision.' },
    ],
    playbook: [
      { title: 'Healthcare VC/PE is largely unstructured at the HBA level — networking is everything', detail: 'Most opportunities come through direct outreach, informational interviews, and warm introductions. Formal recruiting runs January–February but relationships start much earlier.' },
      { title: 'Build a healthcare investment thesis in one sub-sector', detail: 'Pick oncology, digital health, diagnostics, or medtech and develop genuine conviction about what\'s fundable right now. Funds want candidates who know the landscape, not candidates who are learning it in the interview.' },
      { title: 'Target Lumira Ventures, OMERS Ventures, and Sagard Healthcare Partners', detail: 'All three are leading Canadian healthcare investors with distinct mandates — Lumira in life sciences, OMERS in tech-enabled health, Sagard in growth equity. Each has recruited HBAs.' },
      { title: 'BDC Capital and Esplanade Ventures are strong secondary targets', detail: 'BDC has a dedicated life sciences fund and active Ivey relationships. Esplanade focuses on early-stage health and life science companies — boutique culture, high learning curve.' },
      { title: 'Consider healthcare IB as the most reliable on-ramp', detail: 'Most healthcare PE/VC associates come from 2 years in healthcare investment banking. If direct fund access is limited at the HBA level, use banking as a bridge — it\'s the most respected pathway into the sector.' },
    ],
    synthesis: (sizeLabel) => {
      const sizeNote = sizeLabel === 'boutique'
        ? 'Smaller Canadian funds like Lumira, Esplanade, and Real Ventures offer earlier responsibility and direct LP/portfolio interaction — strong for candidates with genuine healthcare conviction and comfort with ambiguity.'
        : 'OMERS Ventures and BDC Capital offer institutional platforms — rigorous processes, strong brands, and access to large healthcare deal flow across Canada.';
      return `Healthcare VC and PE require a combination of financial discipline and genuine sector conviction — you can\'t fake the conviction part in an interview with a fund that lives and breathes this. ${sizeNote} This career path is most accessible post-consulting or post-IB at the HBA level. Use your Ivey years to build the healthcare knowledge, network, and deal intuition that will set you apart when you make the move into investing.`;
    },
  },

  healthtech: {
    key: 'healthtech',
    emoji: '⚙️',
    name: 'The Health Technologist',
    tagline: 'You build the infrastructure that makes better care possible.',
    description: 'You believe the most important healthcare problems are also fundamentally technology problems. Patient access, care coordination, clinical decision support — these all have technology solutions that haven\'t been built well yet. You\'re as comfortable thinking through a product roadmap as a strategy deck. You want to work somewhere building something real: a telehealth platform, a clinical workflow tool, an AI diagnostic. Health tech is the fastest-growing segment in healthcare — and you want to be inside the companies driving it.',
    badge: 'Health tech & digital health',
    heroClass: 'hero-healthtech',
    color: '#4338CA',
    strengths: [
      { icon: '🚀', name: 'Product & Platform Thinking', desc: 'You think in roadmaps, user journeys, and product-market fit — not just strategy slides.' },
      { icon: '🏥', name: 'Health System Literacy', desc: 'You understand the clinical, regulatory, and operational context that determines whether a health tech product actually gets adopted.' },
      { icon: '💡', name: 'Technology Fluency', desc: 'You can translate between clinical teams, engineers, and business stakeholders — a rare and increasingly valuable skill.' },
      { icon: '👥', name: 'User-Centered Problem Solving', desc: 'You start with the patient and clinician experience and work backwards — not the other way around.' },
    ],
    playbook: [
      { title: 'Health tech roles recruit on a startup timeline — March to April and rolling year-round', detail: 'Unlike consulting OCI, health tech internship and full-time opportunities come through direct outreach, warm introductions, and startup job boards. Start reaching out in February.' },
      { title: 'Target Maple, Dialogue, and League as Canada\'s leading digital health platforms', detail: 'All three are growing rapidly and have business, strategy, and operations roles suited to HBA profiles. These aren\'t pure engineering roles — you\'d own go-to-market, business development, or operational problems.' },
      { title: 'Build your digital health literacy portfolio', detail: 'Write a short analysis of a health tech company\'s business model. Know the regulatory landscape — Health Canada\'s Software as a Medical Device (SaMD) guidelines and FDA digital health framework are fair game in interviews.' },
      { title: 'Get involved with MaRS Health and the Canadian health tech community', detail: 'The Canadian health tech ecosystem is small and relationship-driven. MaRS Health events, HITLAB, and IHSC industry nights put you in the room with founders and operators who make hiring decisions.' },
      { title: 'Consider IQVIA\'s technology and data analytics division as a bridge role', detail: 'IQVIA Technologies sits at the intersection of pharma data and health tech — a structured, large-company environment with genuine exposure to digital health at scale. Strong for candidates who want a health tech path with more structure.' },
    ],
    synthesis: (sizeLabel) => {
      const sizeNote = sizeLabel === 'boutique'
        ? 'Early-stage companies like Maple, Dialogue, and League give you the fastest ownership and broadest exposure to building a real healthcare business — you\'ll wear many hats and learn fast.'
        : 'Larger platforms like Well Health and Veeva Systems offer structured career paths and the resources of a scaled company while keeping you close to the health tech innovation curve.';
      return `Digital health is the fastest-growing segment in healthcare — and being at the intersection of technology and care delivery is exactly where the highest-leverage work will happen this decade. ${sizeNote} Recruiting is informal and year-round — reach out directly to business, strategy, and operations teams at target companies. One strong relationship in the Canadian health tech community opens many doors.`;
    },
  },

  policy: {
    key: 'policy',
    emoji: '🏛️',
    name: 'The Policy Architect',
    tagline: 'You redesign the systems, not just the companies.',
    description: 'You\'re not satisfied solving problems for one hospital or one pharma company when the same systemic failures affect millions. You want to work where policy changes are made: the federal health ministry, a provincial health agency, a global health body, or a consulting firm advising governments. You understand that population health, health equity, and system sustainability are the biggest strategic challenges of the next decade — and you want to be at the table where the decisions happen.',
    badge: 'Public health & policy strategy',
    heroClass: 'hero-policy',
    color: '#1E3A5F',
    strengths: [
      { icon: '🔭', name: 'Systems-Level Thinking', desc: 'You see the second and third-order effects that everyone else misses — how a policy change cascades across payers, providers, and patients.' },
      { icon: '📊', name: 'Health Economics Literacy', desc: 'You understand CADTH, HTA submissions, health system financing, and the incentive structures that drive population health outcomes.' },
      { icon: '🤝', name: 'Government & Stakeholder Navigation', desc: 'You know how to build the cross-sector coalitions that are required to move anything in public health.' },
      { icon: '📝', name: 'Policy Analysis & Synthesis', desc: 'You translate evidence into clear recommendations that non-technical decision-makers can act on.' },
    ],
    playbook: [
      { title: 'Government and public health roles have no formal OCI — year-round outreach is essential', detail: 'Health Canada, Ontario Ministry of Health, and PHAC all have student and new graduate programs, but they fill on rolling timelines. Apply early and reach out directly to managers in health strategy teams.' },
      { title: 'Build your health policy literacy aggressively', detail: 'Read federal budget health chapters, Ontario\'s Connected Care strategy, and CIHI annual health system performance reports. In interviews, you need to demonstrate you already understand the landscape — not that you\'re starting to learn it.' },
      { title: 'Target SickKids International for a global health consulting bridge', detail: 'SickKids International is the global health consulting arm of Toronto\'s Hospital for Sick Children — it works across 50+ countries on health system strengthening, capacity building, and public health strategy. Strong Ivey relationships.' },
      { title: 'Consider a post-HBA MPH as a signal investment', detail: 'A Master of Public Health from a strong program (Harvard Chan, Johns Hopkins, Dalla Lana at U of T) significantly opens doors in government, NGOs, and international health organizations. It signals a genuine long-term commitment to the sector.' },
      { title: 'Look at Deloitte\'s public sector health practice as a consulting bridge', detail: 'Deloitte Public Sector Health advises federal and provincial governments on health system strategy and transformation. It combines the structure of consulting with real public health impact — an excellent first role for policy-oriented candidates.' },
    ],
    synthesis: (sizeLabel) => {
      const sizeNote = sizeLabel === 'boutique'
        ? 'Boutique public health organizations like SickKids International and Heart & Stroke give you faster influence per year of experience than large-firm alternatives — close to the mission, direct project ownership.'
        : 'Deloitte Public Sector Health gives you commercial rigour alongside public health impact — combining the best of consulting discipline with a genuine contribution to health systems at the provincial and federal level.';
      return `Public health and health policy strategy sit at the top of the impact pyramid in healthcare — the decisions made at Health Canada, the Ontario Ministry, and global health agencies affect millions of people simultaneously. ${sizeNote} There is no formal OCI for these roles — build your health policy literacy aggressively and reach out to federal and provincial health agencies directly. A post-graduate MPH is a strong credibility signal in this space if you\'re committed to the long-term public health career path.`;
    },
  },

  commercial: {
    key: 'commercial',
    emoji: '🎯',
    name: 'The Commercial Leader',
    tagline: 'You turn scientific breakthroughs into market impact.',
    description: 'You understand that a breakthrough therapy that doesn\'t reach the right patients isn\'t a breakthrough — it\'s a missed opportunity. You sit at the intersection of science and sales, translating clinical evidence into market strategy, HCP engagement programs, and brand positioning. Commercial roles at pharma and medtech companies are among the most strategic in healthcare — you own the revenue engine. Whether it\'s market access, medical affairs, or product marketing, you\'re the person who brings a new drug or device to life in the market.',
    badge: 'Healthcare marketing & commercial strategy',
    heroClass: 'hero-commercial',
    color: '#9D174D',
    strengths: [
      { icon: '🗺️', name: 'Go-to-Market Strategy', desc: 'You build launch plans that make a new therapy or device the standard of care within 12 months.' },
      { icon: '👨‍⚕️', name: 'HCP Engagement & KOL Management', desc: 'You know how to earn the trust of physicians, nurses, and clinical specialists — the people who drive prescription and adoption decisions.' },
      { icon: '⚖️', name: 'Market Access & Pricing', desc: 'You navigate CADTH, pDt, and provincial formulary processes to ensure your product gets to the patients who need it.' },
      { icon: '🎯', name: 'Brand Strategy & Positioning', desc: 'You differentiate a product in a crowded therapeutic area using evidence, insights, and compelling narrative.' },
    ],
    playbook: [
      { title: 'Pharma commercial programs recruit primarily January–April', detail: 'Rotational marketing and commercial leadership programs at major pharma are the most structured entry points. J&J, Novartis, Sanofi, and AstraZeneca all have programs with Canadian operations and HBA recruiting tracks.' },
      { title: 'Build your market access vocabulary before any interview', detail: 'Understand the CADTH Common Drug Review process, pDt submissions, provincial formulary listings, and what a "reimbursement dossier" contains. This signals to commercial teams that you understand the full lifecycle of a drug\'s market entry.' },
      { title: 'Consider Klick Health for a boutique commercial entry point', detail: 'Klick Health is Canada\'s leading healthcare marketing agency — working directly with pharma commercial teams on brand strategy, HCP engagement, and market access communications. Direct client exposure from day one.' },
      { title: 'In interviews, demonstrate command of both the science and the market', detail: '"Why does this drug need a different go-to-market strategy than the existing standard of care?" — be ready to answer this for your target company\'s key products. It separates you from every other business candidate.' },
      { title: 'Explore medical affairs and market access as adjacent entry points', detail: 'Medical affairs (building clinical evidence, KOL programs, medical education) and market access (formulary, pricing, HEOR) are high-growth roles that sit between science and commercial — often easier to access at the HBA level than pure marketing.' },
    ],
    synthesis: (sizeLabel) => {
      const sizeNote = sizeLabel === 'boutique'
        ? 'Healthcare marketing agencies like Klick Health offer boutique culture with direct pharma client exposure — faster ownership, more responsibility early, and a strong foundation for moving in-house to a commercial role.'
        : 'Rotational commercial programs at J&J, Novartis, Sanofi, and AstraZeneca are the premium entry points — structured training, broad brand exposure, and a clear career ladder in the commercial function.';
      return `The commercial function at a pharma or medtech company is where scientific innovation meets business reality — and your ability to hold both in your head simultaneously is what makes a launch successful. ${sizeNote} Recruiting for commercial roles is January–April, so focus now on understanding the Canadian drug reimbursement pathway and building specific "why this company / why this therapy area" stories for each target. The candidates who succeed here know the market as well as the medicine.`;
    },
  },
};

// ─── Firm data ────────────────────────────────────────────────────────────────
const FIRMS = {
  consulting: [
    { name: 'ZS Associates',                  size: 'mid',      tier: 'core',   city: 'Toronto',                      tags: ['pharma','commercial'],        note: 'Global leader in life sciences consulting — 75%+ pharma/biotech focus. Commercial strategy, sales force effectiveness, and market access. Strong HBA pipeline and the most well-known healthcare consulting brand for Ivey students.' },
    { name: 'L.E.K. Consulting',              size: 'mid',      tier: 'core',   city: 'Toronto',                      tags: ['pharma','devices'],            note: 'Top-tier strategy boutique with a renowned life sciences and healthcare practice. Works across pharma, medtech, and health services on commercial diligence, market entry, and portfolio strategy. Highly case-intensive recruiting.' },
    { name: 'Coactuate',                      size: 'boutique', tier: 'core',   city: 'Toronto',                      tags: ['pharma','payer'],              note: 'Canadian healthcare and pharma consulting boutique with direct Ivey access. Comparable to ZS in scope at a smaller, more accessible scale — strong for HBAs who want direct client ownership from day one.' },
    { name: 'Invictus Analytics + Strategy',  size: 'boutique', tier: 'strong', city: 'Toronto',                      tags: ['pharma','digital'],            note: 'Healthcare data and analytics strategy boutique. Combines data science with consulting to serve pharma, biotech, and payer clients. Small team, high technical depth, strong Canadian market focus.' },
    { name: 'Clearview Healthcare Partners',  size: 'boutique', tier: 'strong', city: 'Toronto · Boston',             tags: ['pharma','devices'],            note: 'Strategy consultancy focused exclusively on life sciences and healthcare. Serves pharma, biotech, and medtech clients on market access, commercial strategy, and portfolio decisions. Deep sector specialization, lean teams.' },
    { name: 'Deloitte Health',                size: 'large',    tier: 'strong', city: 'Toronto · Across Canada',      tags: ['pharma','payer','public'],     note: 'Large-scale healthcare advisory across payers, providers, pharma, and government. Health system transformation, digital health strategy, and regulatory advisory. Active HBA pipeline and one of the largest health practices in Canada.' },
    { name: 'EY Health',                      size: 'large',    tier: 'alt',    city: 'Toronto · Across Canada',      tags: ['payer','pharma'],              note: 'Health advisory practice spanning hospital transformation, payer strategy, and life sciences consulting. Broader generalist practice with growing healthcare specialization. Good backup target with strong HBA recruiting.' },
    { name: 'PwC Health Industries',          size: 'large',    tier: 'alt',    city: 'Toronto · Across Canada',      tags: ['payer'],                       note: 'Healthcare advisory spanning health system redesign, digital health, and workforce strategy. Increasing focus on payer and provider transformation in Canada. Large practice with HBA recruiting pipeline.' },
  ],
  corporate: [
    { name: 'Johnson & Johnson',              size: 'large',    tier: 'core',   city: 'Toronto',                      tags: ['pharma','devices'],            note: 'Global healthcare leader spanning Innovative Medicine (oncology, immunology, neuroscience) and MedTech. Corporate strategy, BD, and rotational programs in Toronto. One of the most active large pharma recruiters of Ivey HBAs.' },
    { name: 'Roche',                          size: 'large',    tier: 'core',   city: 'Mississauga',                  tags: ['pharma'],                      note: 'Global leader in oncology, rare disease, and diagnostics. Internal strategy and BD roles in Mississauga with global mobility. Strong science culture — genuine interest in pharma business is essential in interviews.' },
    { name: 'AstraZeneca',                    size: 'large',    tier: 'core',   city: 'Mississauga',                  tags: ['pharma'],                      note: 'One of the fastest-growing pharma companies globally — leadership in oncology, cardiovascular, and respiratory. Active Canadian corporate affairs and strategy team in Mississauga. Strong rotational program for early-career talent.' },
    { name: 'Novartis',                       size: 'large',    tier: 'strong', city: 'Toronto · Dorval',             tags: ['pharma'],                      note: 'Global pharma leader with a significant Canadian commercial and strategy presence. Corporate development, BD, and strategy roles across innovative medicines and generics (Sandoz). Active HBA interest.' },
    { name: 'Pfizer',                         size: 'large',    tier: 'strong', city: 'Kirkland · Toronto',           tags: ['pharma'],                      note: 'One of the world\'s largest biopharmaceutical companies. Canadian headquarters in Kirkland (QC) with strategy, BD, and corporate affairs functions. Rotational programs available for early-career candidates.' },
    { name: 'Sanofi',                         size: 'large',    tier: 'strong', city: 'Toronto · Laval',              tags: ['pharma'],                      note: 'Global pharma with strength in vaccines, immunology, and rare disease. Corporate strategy and BD roles based in Toronto and Laval. Increasingly active in digital health and personalized medicine strategy.' },
    { name: 'Moderna',                        size: 'large',    tier: 'alt',    city: 'Laval',                        tags: ['pharma'],                      note: 'mRNA platform leader expanding rapidly beyond COVID into oncology, rare disease, and respiratory vaccines. Canadian headquarters in Laval (QC). Growing strategy and commercial organization with active early-career recruitment.' },
    { name: 'Siemens Healthineers',           size: 'large',    tier: 'alt',    city: 'Oakville',                     tags: ['devices'],                     note: 'Global leader in medical imaging, diagnostics, and point-of-care testing. Canadian operations in Oakville. Strategy and commercial roles at the intersection of hardware, software, and AI in clinical settings.' },
    { name: 'Abbott',                         size: 'large',    tier: 'alt',    city: 'Toronto · Saint-Laurent',      tags: ['devices'],                     note: 'Diversified MedTech company across diagnostics, cardiovascular devices, diabetes care, and nutrition. Canadian presence in Toronto and Saint-Laurent. Growing strategy and BD teams across device and diagnostics divisions.' },
  ],
  banking: [
    { name: 'Leerink Partners',               size: 'boutique', tier: 'core',   city: 'New York · Toronto',           tags: ['pharma','devices'],            note: 'Premier US healthcare-focused investment bank — almost exclusively life sciences. Strongest deal brand in biopharma M&A, equity capital markets, and strategic advisory. Boutique culture, very high deal quality, actively recruits Canada-based talent.' },
    { name: 'Jefferies Healthcare',           size: 'large',    tier: 'core',   city: 'New York · Toronto',           tags: ['pharma','devices'],            note: 'Top healthcare investment banking franchise with deep coverage across biopharma, medtech, and health services. Active Canadian presence and one of the most active healthcare M&A advisors globally. Strong HBA interest.' },
    { name: 'Goldman Sachs Healthcare',       size: 'large',    tier: 'core',   city: 'Toronto · New York',           tags: ['pharma','devices'],            note: 'Bulge bracket with a powerful healthcare M&A and ECM practice. Canadian healthcare deal flow increasingly active. Brand and deal prestige are unmatched — highly competitive recruiting process.' },
    { name: 'RBC Capital Markets',            size: 'large',    tier: 'strong', city: 'Toronto · New York',           tags: ['pharma','devices'],            note: 'Leading Canadian investment bank with an active healthcare M&A and equity advisory practice. Strong deal flow in Canadian pharma, biotech, and medtech. The Ivey brand carries strong weight here — deep alumni relationships.' },
    { name: 'Lazard Healthcare',              size: 'mid',      tier: 'strong', city: 'New York · Toronto',           tags: ['pharma','devices'],            note: 'Boutique-adjacent advisory firm renowned for independent M&A counsel. Healthcare practice covers large-cap pharma transactions, activist defense, and restructuring. Highly selective but no balance sheet constraint.' },
    { name: 'CIBC Capital Markets',           size: 'large',    tier: 'alt',    city: 'Toronto',                      tags: ['pharma','devices'],            note: 'Strong Canadian healthcare banking franchise with active equity capital markets and M&A advisory for Canadian pharma, biotech, and medtech. Strong Ivey alumni network and accessible recruiting process.' },
  ],
  pe: [
    { name: 'Lumira Ventures',                size: 'boutique', tier: 'core',   city: 'Toronto',                      tags: ['pharma','devices','digital'],  note: 'Leading Canadian healthcare VC firm investing in life sciences — biopharma, medical devices, and diagnostic companies. Deep scientific due diligence culture. Top Canadian fund for life sciences early-stage investing and the most relevant for candidates with pharma/science backgrounds.' },
    { name: 'OMERS Ventures',                 size: 'large',    tier: 'core',   city: 'Toronto',                      tags: ['digital','pharma'],            note: 'Ontario pension\'s venture capital arm with active health tech and digital health investments. Large institutional platform, rigorous process, and strong network. Invests across growth-stage health and technology companies.' },
    { name: 'Sagard Healthcare Partners',     size: 'mid',      tier: 'core',   city: 'Toronto · Montreal',           tags: ['pharma','devices'],            note: 'Healthcare-focused growth equity and royalty fund within Sagard\'s multi-asset platform. Invests in commercial-stage pharma and specialty healthcare companies. Strong Canadian relationships and a growing healthcare focus.' },
    { name: 'BDC Capital',                    size: 'large',    tier: 'strong', city: 'Toronto · Across Canada',      tags: ['pharma','digital','devices'],  note: 'Business Development Bank of Canada with a dedicated life sciences and health technology fund. Crown corporation mandate with broad Canadian deal flow. Active HBA interest and accessible for students who want institutional healthcare investing exposure.' },
    { name: 'Esplanade Ventures',             size: 'boutique', tier: 'strong', city: 'Toronto',                      tags: ['pharma','digital'],            note: 'Early-stage venture firm with meaningful health and life sciences exposure. Boutique culture, high learning curve, and direct portfolio involvement. Strong for candidates who want to be close to founders and early-stage healthcare company building.' },
    { name: 'Real Ventures',                  size: 'boutique', tier: 'alt',    city: 'Montreal · Toronto',           tags: ['digital'],                     note: 'Leading Canadian early-stage VC with increasing health tech exposure in its portfolio. Boutique culture with a strong founder-first ethos. Relevant for candidates interested in digital health venture investing at the earliest stages.' },
  ],
  healthtech: [
    { name: 'Maple',                          size: 'mid',      tier: 'core',   city: 'Toronto',                      tags: ['digital','payer'],             note: 'Canada\'s leading on-demand virtual care platform — serving millions of patients and hundreds of thousands of corporate plan members. Growing strategy, partnerships, and commercial team. High-ownership roles and fast iteration cycles.' },
    { name: 'Dialogue',                       size: 'mid',      tier: 'core',   city: 'Montreal · Toronto',           tags: ['digital','payer'],             note: 'Integrated health and wellness platform serving Canadian employers and insurers. Fastest-growing digital health company in Canada. Strategy, growth, and operations roles with significant HBA fit. Very active employer recruitment.' },
    { name: 'League',                          size: 'mid',      tier: 'strong', city: 'Toronto',                      tags: ['digital'],                     note: 'Health OS platform powering digital health experiences for health plans and enterprise employers. Strategy, platform partnerships, and commercial roles. Strong product-led culture and growing enterprise sales motion.' },
    { name: 'Well Health Technologies',       size: 'large',    tier: 'strong', city: 'Vancouver · Toronto',          tags: ['digital','payer'],             note: 'Canada\'s largest omnichannel health company — primary care clinics, EMR software, and digital health platforms. Acquisitive growth strategy with active corporate development team. Strong for candidates who want digital health at scale.' },
    { name: 'Veeva Systems',                  size: 'large',    tier: 'strong', city: 'Toronto · Columbus',           tags: ['pharma','digital'],            note: 'Cloud software leader for the global life sciences industry — CRM, clinical, regulatory, and commercial cloud platforms. Strategy and business consulting roles sit at the intersection of pharma operations and enterprise software. High compensation, strong culture.' },
    { name: 'IQVIA Technologies',             size: 'large',    tier: 'alt',    city: 'Toronto · Laval',              tags: ['pharma','digital'],            note: 'Technology division of IQVIA providing clinical data platforms, decentralized trial tools, and commercial analytics software. Large-company structure with genuine health tech exposure. Strong for candidates who want pharma tech with institutional support.' },
  ],
  policy: [
    { name: 'Health Canada',                  size: 'large',    tier: 'core',   city: 'Ottawa · Toronto',             tags: ['public','pharma'],             note: 'Federal department responsible for drug regulation, health protection, and national health policy. Strategy and policy analyst roles through student and new graduate programs. The most prestigious federal entry point for health policy careers in Canada.' },
    { name: 'Ontario Ministry of Health',     size: 'large',    tier: 'core',   city: 'Toronto',                      tags: ['public','payer'],              note: 'Provincial ministry overseeing Ontario\'s $75B+ health system. Health system strategy, digital health policy, and OHIP/OHCA reform initiatives. Strong student recruitment through OPS and Queen\'s Park programs. High policy impact, direct provincial exposure.' },
    { name: 'SickKids International',         size: 'mid',      tier: 'strong', city: 'Toronto',                      tags: ['public','payer'],              note: 'Global health consulting arm of the Hospital for Sick Children — working across 50+ countries on health system strengthening, child health strategy, and capacity building. Combines consulting rigour with public health mission. Strong Ivey relationships and HBA interest.' },
    { name: 'Heart & Stroke Foundation',      size: 'mid',      tier: 'strong', city: 'Ottawa · Toronto',             tags: ['public'],                      note: 'Canada\'s largest non-profit funder of cardiovascular and stroke research and advocacy. Strategy, policy, and knowledge translation roles that sit at the intersection of evidence and public health action. Strong mission alignment for policy-oriented candidates.' },
    { name: 'Public Health Agency of Canada', size: 'large',    tier: 'strong', city: 'Ottawa',                       tags: ['public'],                      note: 'Federal agency responsible for infectious disease, chronic disease, and public health emergency preparedness. Policy analyst and strategy roles through student recruitment. High-impact work with a national population health mandate.' },
    { name: 'Deloitte Public Sector Health',  size: 'large',    tier: 'alt',    city: 'Ottawa · Toronto',             tags: ['public','payer'],              note: 'Deloitte\'s federal and provincial government health practice — advising on health system transformation, digital health strategy, and health human resources. Combines consulting discipline with genuine public health impact. Active HBA pipeline.' },
  ],
  commercial: [
    { name: 'Klick Health',                   size: 'boutique', tier: 'core',   city: 'Toronto',                      tags: ['pharma','commercial'],         note: 'Canada\'s leading healthcare marketing and communications agency — working directly with the world\'s top pharma companies on brand strategy, HCP engagement, and digital health marketing. Boutique culture, direct pharma client exposure, and unusually high ownership for a first role.' },
    { name: 'Syneos Health',                  size: 'large',    tier: 'core',   city: 'Toronto · Montreal',           tags: ['pharma','commercial'],         note: 'Integrated pharma solutions company — combining CRO and CSO capabilities with commercial advisory. Large-scale commercial strategy, market access, and medical affairs consulting for pharma clients across North America.' },
    { name: 'Johnson & Johnson (Commercial)', size: 'large',    tier: 'strong', city: 'Toronto',                      tags: ['pharma','devices'],            note: 'J&J\'s commercial and marketing teams in Canada cover both Innovative Medicine and MedTech divisions. Brand management, market access, and hospital commercial roles. One of the strongest commercial training grounds in pharma — rotational programs available.' },
    { name: 'IQVIA Commercial Solutions',     size: 'large',    tier: 'strong', city: 'Toronto · Laval',              tags: ['pharma','commercial'],         note: 'Commercial intelligence, analytics, and go-to-market advisory for pharma clients. IQVIA\'s commercial division sits at the data-meets-strategy intersection — helping drug launches succeed through prescriber analytics, market research, and commercial planning.' },
    { name: 'AstraZeneca (Commercial)',       size: 'large',    tier: 'alt',    city: 'Mississauga',                  tags: ['pharma'],                      note: 'AZ\'s Canadian commercial team covers oncology, cardiovascular, and respiratory portfolios. Marketing, medical affairs, and market access roles in Mississauga. Strong internal training culture and a reputation for developing commercial talent.' },
    { name: 'Sanofi (Commercial)',            size: 'large',    tier: 'alt',    city: 'Toronto · Laval',              tags: ['pharma'],                      note: 'Sanofi\'s Canadian commercial organization spans vaccines, specialty care, and general medicines. Brand management and market access roles across both Toronto and Laval operations. Active rotational program and HBA interest.' },
  ],
};

// ─── Internal orgs (shown when institutionalScore is high) ───────────────────
const INTERNAL_ORGS = [
  { name: 'Johnson & Johnson',   note: 'Corporate Development and Strategy rotational programs in Toronto. Exposure across J&J\'s Innovative Medicine and MedTech divisions with global mobility paths.' },
  { name: 'Roche',               note: 'Internal strategy and business development teams in Mississauga. Oncology, diagnostics, and portfolio strategy roles with access to Roche\'s global organization.' },
  { name: 'Abbott',              note: 'Corporate strategy and M&A roles across Abbott\'s diagnostics, medical devices, and nutrition businesses. Active Canadian recruiting presence in Toronto and Saint-Laurent.' },
  { name: 'Sanofi',              note: 'Canadian corporate affairs, BD, and commercial strategy teams in Toronto and Laval. Strong recruiting pipeline for HBAs with science or business backgrounds.' },
];

// ─── Logo map ─────────────────────────────────────────────────────────────────
const FIRM_LOGO_MAP = {
  'ZS Associates':                  'zs.png',
  'L.E.K. Consulting':              'lek-com-logo.png',
  'Coactuate':                      'coactuate.png',
  'Invictus Analytics + Strategy':  'invictus-analytics.png',
  'Clearview Healthcare Partners':  '',
  'Deloitte Health':                'deloitte.png',
  'EY Health':                      'ey.png',
  'PwC Health Industries':          'pwc.png',
  'Deloitte':                       'deloitte.png',
  'EY':                             'ey.png',
  'PwC':                            'pwc.png',
  'KPMG':                           'kpmg-international.png',
  'Johnson & Johnson':              'jnj-com-logo.png',
  'Roche':                          'roche-com-logo.png',
  'AstraZeneca':                    'astrazeneca-com-logo.png',
  'Novartis':                       'novartis-com-logo-mark.png',
  'Pfizer':                         'pfizer-com-logo.png',
  'Sanofi':                         'sanofi-com-logo.png',
  'Moderna':                        'modernatx-com-logo.png',
  'Siemens Healthineers':           'siemens-com-logo.png',
  'Abbott':                         'abbott-com-logo.png',
  'Leerink Partners':               '',
  'Jefferies Healthcare':           '',
  'Goldman Sachs Healthcare':       '',
  'RBC Capital Markets':            '',
  'Lazard Healthcare':              '',
  'CIBC Capital Markets':           '',
  'Lumira Ventures':                'lumiraventures-com-logo.png',
  'OMERS Ventures':                 'omers-com-logo.png',
  'Sagard Healthcare Partners':     'sagard-com-logo.png',
  'BDC Capital':                    'bdc-ca-logo.png',
  'Esplanade Ventures':             'esplanadeventures-com-logo.png',
  'Real Ventures':                  '',
  'Maple':                          '',
  'Dialogue':                       '',
  'League':                         '',
  'Well Health Technologies':       '',
  'Veeva Systems':                  '',
  'IQVIA Technologies':             'iqvia-com-logo.png',
  'Health Canada':                  'hc-sc-gc-ca-logo.png',
  'Ontario Ministry of Health':     'ontario-ca-logo.png',
  'SickKids International':         'sickkidsinternational-ca-logo.png',
  'Heart & Stroke Foundation':      'heartandstroke-ca-logo.png',
  'Public Health Agency of Canada': '',
  'Deloitte Public Sector Health':  'deloitte.png',
  'Klick Health':                   'klick-com-logo.png',
  'Syneos Health':                  '',
  'Johnson & Johnson (Commercial)': 'jnj-com-logo.png',
  'IQVIA Commercial Solutions':     'iqvia-com-logo.png',
  'AstraZeneca (Commercial)':       'astrazeneca-com-logo.png',
  'Sanofi (Commercial)':            'sanofi-com-logo.png',
};

// ─── URL map ──────────────────────────────────────────────────────────────────
const FIRM_URL_MAP = {
  'ZS Associates':                  'https://www.zs.com',
  'L.E.K. Consulting':              'https://www.lek.com',
  'Coactuate':                      'https://www.coactuate.com',
  'Invictus Analytics + Strategy':  'https://www.invictusas.com',
  'Clearview Healthcare Partners':  'https://www.clearviewhcp.com',
  'Deloitte Health':                'https://www.deloitte.com/ca/en/services/consulting/health.html',
  'EY Health':                      'https://www.ey.com/en_ca/health',
  'PwC Health Industries':          'https://www.pwc.com/ca/en/industries/health-industries.html',
  'Johnson & Johnson':              'https://www.jnj.com',
  'Roche':                          'https://www.roche.com',
  'AstraZeneca':                    'https://www.astrazeneca.ca',
  'Novartis':                       'https://www.novartis.com/ca-en',
  'Pfizer':                         'https://www.pfizer.ca',
  'Sanofi':                         'https://www.sanofi.com/en/our-science/canada',
  'Moderna':                        'https://www.modernatx.com',
  'Siemens Healthineers':           'https://www.siemens-healthineers.com',
  'Abbott':                         'https://www.abbott.com',
  'Leerink Partners':               'https://www.leerinkpartners.com',
  'Jefferies Healthcare':           'https://www.jefferies.com/what-we-do/investment-banking/healthcare',
  'Goldman Sachs Healthcare':       'https://www.goldmansachs.com/services/investment-banking',
  'RBC Capital Markets':            'https://www.rbccm.com/en/expertise/sectors/healthcare.page',
  'Lazard Healthcare':              'https://www.lazard.com/practices/healthcare',
  'CIBC Capital Markets':           'https://cibccm.com',
  'Lumira Ventures':                'https://www.lumiraventures.com',
  'OMERS Ventures':                 'https://www.omersventures.com',
  'Sagard Healthcare Partners':     'https://www.sagard.com',
  'BDC Capital':                    'https://www.bdc.ca/en/bdc-capital',
  'Esplanade Ventures':             'https://www.esplanadeventures.com',
  'Real Ventures':                  'https://www.realventures.com',
  'Maple':                          'https://www.getmaple.ca',
  'Dialogue':                       'https://www.dialogue.co',
  'League':                         'https://www.league.com',
  'Well Health Technologies':       'https://www.well.ca',
  'Veeva Systems':                  'https://www.veeva.com',
  'IQVIA Technologies':             'https://www.iqvia.com/solutions/technologies',
  'Health Canada':                  'https://www.canada.ca/en/health-canada.html',
  'Ontario Ministry of Health':     'https://www.ontario.ca/page/ministry-health',
  'SickKids International':         'https://www.sickkidsinternational.com',
  'Heart & Stroke Foundation':      'https://www.heartandstroke.ca',
  'Public Health Agency of Canada': 'https://www.canada.ca/en/public-health.html',
  'Deloitte Public Sector Health':  'https://www.deloitte.com/ca/en/services/consulting/public-sector.html',
  'Klick Health':                   'https://www.klick.com/health',
  'Syneos Health':                  'https://www.syneoshealth.com',
  'Johnson & Johnson (Commercial)': 'https://www.jnj.com/careers',
  'IQVIA Commercial Solutions':     'https://www.iqvia.com/solutions/commercialization',
  'AstraZeneca (Commercial)':       'https://www.astrazeneca.ca/en/careers.html',
  'Sanofi (Commercial)':            'https://www.sanofi.com/en/our-science/canada',
};

// ─── Partner logo grid ────────────────────────────────────────────────────────
const LOGO_FILES = [
  'zs.png',
  'lek-com-logo.png',
  'coactuate.png',
  'invictus-analytics.png',
  'deloitte.png',
  'ey.png',
  'pwc.png',
  'kpmg-international.png',
  'iqvia-com-logo.png',
  'jnj-com-logo.png',
  'roche-com-logo.png',
  'astrazeneca-com-logo.png',
  'novartis-com-logo-mark.png',
  'pfizer-com-logo.png',
  'sanofi-com-logo.png',
  'modernatx-com-logo.png',
  'siemens-com-logo.png',
  'abbott-com-logo.png',
  'omers-com-logo.png',
  'lumiraventures-com-logo.png',
  'sagard-com-logo.png',
  'bdc-ca-logo.png',
  'esplanadeventures-com-logo.png',
  'hc-sc-gc-ca-logo.png',
  'ontario-ca-logo.png',
  'sickkidsinternational-ca-logo.png',
  'heartandstroke-ca-logo.png',
  'klick-com-logo.png',
];

function getFirmLogo(name) {
  const mapped = FIRM_LOGO_MAP[name];
  if (mapped && LOGO_FILES.includes(mapped)) {
    return `logos/${mapped}`;
  }
  if (mapped === '') return '';
  const slug = name.toLowerCase().replace(/[\s&,+()/]/g, '-').replace(/[^a-z0-9-]/g, '').replace(/-+/g, '-').replace(/(^-|-$)/g, '') + '.png';
  if (LOGO_FILES.includes(slug)) return `logos/${slug}`;
  return '';
}

// ─── Questions ────────────────────────────────────────────────────────────────
const QUESTIONS = [
  {
    id: 1, tag: 'Background',
    text: 'Before Ivey, what best describes your background?',
    options: [
      { emoji: '🔬', main: 'Life sciences, biology, or chemistry',            sub: 'Lab background, pharmacology, or clinical research',          scores: { corporate: 2, consulting: 1 } },
      { emoji: '💻', main: 'STEM, engineering, or computer science',           sub: 'Data, systems, software, technical problem-solving',          scores: { healthtech: 2, corporate: 1 } },
      { emoji: '💰', main: 'Finance, economics, or accounting',                sub: 'Capital markets, investment, or financial analysis',           scores: { banking: 2, pe: 1 } },
      { emoji: '🎨', main: 'Business, humanities, or social science',          sub: 'Marketing, management, communications, liberal arts',          scores: { consulting: 1, commercial: 1 } },
      { emoji: '🌍', main: 'Public policy, global health, or social sector',   sub: 'Government, NGO, health equity, public administration',        scores: { policy: 3 } },
    ],
  },
  {
    id: 2, tag: 'Drive',
    text: 'What draws you most to a career in healthcare?',
    options: [
      { emoji: '♟️', main: 'The business and strategy dimension',              sub: 'Competition, market dynamics, corporate decision-making',       scores: { consulting: 2, banking: 1 } },
      { emoji: '🧬', main: 'Scientific innovation and R&D pipelines',          sub: 'Drug discovery, clinical development, breakthrough therapies',  scores: { corporate: 2, pe: 1 } },
      { emoji: '📈', main: 'The investment and capital markets opportunity',    sub: 'One of the best growth sectors in global finance',             scores: { pe: 3 } },
      { emoji: '🏛️', main: 'Fixing systemic access and equity problems',        sub: 'Making quality healthcare available to everyone',              scores: { policy: 3 } },
      { emoji: '⚙️', main: 'Technology reimagining how care is delivered',      sub: 'Digital platforms, AI diagnostics, care coordination',         scores: { healthtech: 3 } },
      { emoji: '🎯', main: 'Bringing life-changing treatments to patients',     sub: 'Commercial strategy, market access, physician engagement',     scores: { commercial: 3 } },
    ],
  },
  {
    id: 3, tag: 'Work Mode',
    text: 'Where do you see yourself doing your best work?',
    options: [
      { emoji: '🏢', main: 'External advisor across many healthcare clients',   sub: 'New problems, fresh perspectives, varied organizations',        scores: { consulting: 2, banking: 1 } },
      { emoji: '🏠', main: 'Embedded inside a company I believe in',           sub: 'Ownership, continuity, and real implementation impact',         scores: { corporate: 2, commercial: 1 }, institutional: 2 },
      { emoji: '📊', main: 'On the investing side — backing the best companies', sub: 'Evaluating, funding, and growing healthcare businesses',       scores: { pe: 2, banking: 1 } },
      { emoji: '🚀', main: 'Building a healthcare company or product',          sub: 'Startup speed, user impact, technology at the core',           scores: { healthtech: 3 }, institutional: 1 },
      { emoji: '🏛️', main: 'Shaping government or public health strategy',      sub: 'Policy levers, population-level impact, systemic change',      scores: { policy: 3 }, institutional: 3 },
    ],
  },
  {
    id: 4, tag: 'Impact',
    text: 'How do you define making a difference in healthcare?',
    options: [
      { emoji: '♟️', main: 'Reshaping a healthcare company\'s competitive strategy', sub: 'Change how a hospital, pharma firm, or payer competes',     scores: { consulting: 3 } },
      { emoji: '💊', main: 'Helping a drug or device reach the patients who need it',  sub: 'Market access, commercialization, and physician engagement', scores: { commercial: 2, corporate: 1 } },
      { emoji: '📈', main: 'Deploying capital to fund the next health breakthrough',    sub: 'Backing the companies that define healthcare\'s next decade',scores: { pe: 3 } },
      { emoji: '🏛️', main: 'Making healthcare more equitable and accessible',          sub: 'Fixing the systemic gaps that leave populations behind',    scores: { policy: 3 } },
      { emoji: '⚙️', main: 'Building a platform that changes how care is delivered',   sub: 'Technology that millions of patients and providers use daily',scores: { healthtech: 3 } },
      { emoji: '💼', main: 'Executing the deal that funds medicine\'s future',          sub: 'Life sciences M&A, IPOs, and capital raises that matter',    scores: { banking: 3 } },
    ],
  },
  {
    id: 5, tag: 'Output',
    text: 'At the end of a three-month engagement or project, what would make you most proud?',
    options: [
      { emoji: '📄', main: 'A strategy deck that changed how a health system sees its future', sub: 'A recommendation leadership still references 18 months later', scores: { consulting: 3 } },
      { emoji: '💰', main: 'A financial model and deal memo that closed a pharma acquisition', sub: 'Numbers that held up through every round of diligence',       scores: { banking: 3 } },
      { emoji: '📋', main: 'An investment thesis approved by the investment committee',         sub: 'Conviction that led to a term sheet being signed',            scores: { pe: 3 } },
      { emoji: '🚀', main: 'A feature shipped to 50,000 patients',                             sub: 'Something built, tested, and live — not just recommended',    scores: { healthtech: 3 } },
      { emoji: '🧬', main: 'A 5-year corporate strategic plan for a global pharma company',    sub: 'Pipeline prioritization, portfolio decisions, and growth path', scores: { corporate: 3 } },
      { emoji: '🎯', main: 'A drug launch plan that made a therapy the physician-preferred choice', sub: 'Market access strategy and HCP engagement that drove adoption', scores: { commercial: 3 } },
    ],
  },
  {
    id: 6, tag: 'Sub-Sector',
    text: 'Which corner of healthcare excites you most?',
    options: [
      { emoji: '💊', main: 'Biopharma and drug development',                   sub: 'Oncology, biologics, novel therapies, clinical pipelines',     scores: { corporate: 2, consulting: 1 } },
      { emoji: '🩻', main: 'Medical devices and diagnostics',                   sub: 'MedTech, imaging, surgical, in-vitro diagnostics',            scores: { corporate: 2, banking: 1 } },
      { emoji: '📱', main: 'Digital health and health technology',              sub: 'Telehealth, AI diagnostics, care platforms, wearables',        scores: { healthtech: 3 } },
      { emoji: '🏥', main: 'Hospitals, health systems, and insurance',          sub: 'Payers, providers, and health system strategy',               scores: { consulting: 2, policy: 1 } },
      { emoji: '🌍', main: 'Public health and global health',                   sub: 'Government agencies, NGOs, global health programs',           scores: { policy: 3 } },
      { emoji: '💆', main: 'Consumer health and wellness',                      sub: 'OTC products, wellness platforms, health brands',             scores: { commercial: 3 } },
    ],
  },
  {
    id: 7, tag: 'Transactions',
    text: 'When it comes to deals and transactions in healthcare, where do you want to sit?',
    options: [
      { emoji: '💼', main: 'Execute them — build the models and close the deals', sub: 'Pitchbooks, DCF, live deal process, the signing day',         scores: { banking: 3 } },
      { emoji: '♟️', main: 'Advise clients going through them',                  sub: 'Commercial diligence, integration strategy, negotiation support', scores: { consulting: 2, banking: 1 } },
      { emoji: '📈', main: 'Invest — be on the capital side',                   sub: 'Thesis development, term sheets, portfolio management',        scores: { pe: 3 } },
      { emoji: '🚫', main: 'Skip them — I prefer strategy and operating work',  sub: 'Transactions aren\'t my focus; I\'d rather build or advise',   scores: { corporate: 2, commercial: 1, policy: 1 } },
    ],
  },
  {
    id: 8, tag: 'Time Horizon',
    text: 'What kind of work cadence suits you best?',
    options: [
      { emoji: '⚡', main: 'Fast and cyclical — projects or deals every few months', sub: 'Sprint mentality, clear deliverables, then move on',          scores: { banking: 2, consulting: 1 } },
      { emoji: '📅', main: 'Product and launch cycles — 12 to 24 months',      sub: 'Roadmaps, milestones, tangible launch moments',               scores: { commercial: 2, corporate: 1 } },
      { emoji: '🚀', main: 'Startup speed — ship fast, learn faster',           sub: 'Ambiguity as a feature, iteration over perfection',            scores: { healthtech: 3 } },
      { emoji: '🌿', main: 'Long-term systemic change — 5-plus years',          sub: 'Policy shifts, R&D pipelines, institutional transformation',   scores: { policy: 2, corporate: 1 }, institutional: 1 },
    ],
  },
  {
    id: 9, tag: 'Environment',
    text: 'Which type of organization fits where you want to work?',
    options: [
      { emoji: '🏭', main: 'Large pharma or medtech company',                   sub: 'Global scale, structured programs, long-term career ladder',   scores: { corporate: 2, commercial: 1 }, boutique: 0, institutional: 1 },
      { emoji: '🔬', main: 'Specialized healthcare consulting or advisory firm', sub: 'Deep expertise, varied clients, analytical rigor',            scores: { consulting: 2, banking: 1 }, boutique: 2 },
      { emoji: '🌱', main: 'Startup or early-stage health tech company',        sub: 'Speed, ownership, building something from scratch',           scores: { healthtech: 3 }, boutique: 2 },
      { emoji: '🏛️', main: 'Government or public health organization',          sub: 'Mission-driven, population health impact, public service',    scores: { policy: 3 }, boutique: 0, institutional: 3 },
      { emoji: '💰', main: 'Investment firm, fund, or investment bank',         sub: 'Financial returns, deal flow, capital allocation',            scores: { pe: 2, banking: 1 }, boutique: 1 },
    ],
  },
  {
    id: 10, tag: 'Edge',
    text: 'What is your primary edge when attacking a complex healthcare problem?',
    options: [
      { emoji: '📊', main: 'Quantitative and financial analysis',               sub: 'Modelling, valuation, data-driven decision making',            scores: { banking: 2, pe: 1 } },
      { emoji: '🧬', main: 'Scientific or clinical domain knowledge',           sub: 'Deep expertise that pure business people don\'t have',         scores: { corporate: 2, consulting: 1 } },
      { emoji: '🤝', main: 'Relationship-building and stakeholder trust',       sub: 'KOLs, clients, and executives trust you — and follow your lead', scores: { commercial: 2, consulting: 1 } },
      { emoji: '📝', main: 'Structured synthesis and clear storytelling',       sub: 'Complex ideas distilled into crisp, compelling narrative',     scores: { consulting: 2, policy: 1 } },
      { emoji: '💡', main: 'Technology fluency and systems thinking',           sub: 'How platforms, data, and digital tools connect and compound',  scores: { healthtech: 2, corporate: 1 } },
    ],
  },
  {
    id: 11, tag: 'Problem Type',
    text: 'Which type of healthcare problem do you naturally gravitate toward?',
    options: [
      { emoji: '♟️', main: 'Competitive positioning and market dynamics',       sub: 'Who wins, why, and how to move the needle on market share',    scores: { consulting: 3 } },
      { emoji: '🧪', main: 'Pipeline valuation and R&D portfolio decisions',    sub: 'Which programs to fund, partner, or out-license',             scores: { corporate: 2, pe: 1 } },
      { emoji: '💸', main: 'Deal structure and capital allocation',             sub: 'Who buys, who sells, who gets funded, and at what price',      scores: { banking: 3 } },
      { emoji: '⚖️', main: 'Regulatory access and health equity',              sub: 'Drug approvals, formulary listings, care gaps, policy reform', scores: { policy: 3 } },
      { emoji: '📱', main: 'Product experience and user adoption',              sub: 'Why don\'t patients or clinicians use this — and how to fix it', scores: { healthtech: 3 } },
      { emoji: '👨‍⚕️', main: 'HCP engagement and market access strategy',        sub: 'Getting physicians, payers, and patients aligned on a therapy', scores: { commercial: 3 } },
    ],
  },
  {
    id: 12, tag: 'Stakeholder',
    text: 'Who do you most want to work alongside and create value for?',
    options: [
      { emoji: '👔', main: 'C-suite executives and boards of health companies', sub: 'CEOs, CMOs, CFOs — the people who make the big calls',         scores: { consulting: 2, banking: 1 } },
      { emoji: '💼', main: 'Investors, LPs, and fund managers',                sub: 'The capital allocators who determine what gets built',          scores: { pe: 2, banking: 1 } },
      { emoji: '🏛️', main: 'Government officials and public health leaders',    sub: 'Ministers, deputy ministers, agency directors, WHO staff',     scores: { policy: 3 } },
      { emoji: '🏥', main: 'Patients and care delivery teams',                 sub: 'The end users — patients, nurses, care coordinators',          scores: { healthtech: 2, policy: 1 } },
      { emoji: '👨‍⚕️', main: 'Physicians, KOLs, and clinical specialists',        sub: 'The prescribers and influencers who drive treatment decisions', scores: { commercial: 3 } },
      { emoji: '🚀', main: 'Startup founders and innovation teams',             sub: 'Entrepreneurs building the next generation of health companies', scores: { healthtech: 2, pe: 1 } },
    ],
  },
  {
    id: 13, tag: 'Vision',
    text: 'In ten years, where do you see yourself?',
    options: [
      { emoji: '🏆', main: 'Partner at a top healthcare consulting firm',       sub: 'Leading engagements for payers, providers, and pharma',        scores: { consulting: 3 } },
      { emoji: '🧬', main: 'VP of Strategy at a global pharma or medtech company', sub: 'Corporate development, portfolio strategy, pipeline decisions', scores: { corporate: 3 } },
      { emoji: '💼', main: 'Managing Director in healthcare investment banking', sub: 'Leading life sciences M&A and capital raises',                scores: { banking: 3 } },
      { emoji: '📈', main: 'Partner at a healthcare VC or PE fund',             sub: 'Identifying, backing, and growing the best health companies',  scores: { pe: 3 } },
      { emoji: '⚙️', main: 'Founder or CPO of a health tech company',          sub: 'Building the platform that changes how care is delivered',     scores: { healthtech: 3 } },
      { emoji: '🏛️', main: 'Director at a federal or provincial health agency', sub: 'Policy architecture affecting millions of Canadians',          scores: { policy: 3 } },
      { emoji: '🎯', main: 'VP Commercial or CMO at a pharma company',          sub: 'Leading the strategy that brings therapies to market',         scores: { commercial: 3 } },
    ],
  },
  {
    id: 14, tag: 'Science Depth',
    text: 'How would you describe your scientific or clinical background?',
    options: [
      { emoji: '🔬', main: 'Deep bio, chemistry, or clinical background',      sub: 'I read papers, understand mechanism of action, speak with scientists', scores: { corporate: 2, consulting: 1 } },
      { emoji: '📐', main: 'Some life sciences, but primarily business and strategy', sub: 'I know enough to be dangerous — the rest I can learn',       scores: { consulting: 1, banking: 1 } },
      { emoji: '💹', main: 'Primarily finance and quantitative skills',         sub: 'Numbers, models, and markets are my foundation',              scores: { banking: 2, pe: 1 } },
      { emoji: '🌍', main: 'Policy, social science, or public health perspective', sub: 'Systems, equity, social determinants, population health',      scores: { policy: 2 } },
    ],
  },
];

// ─── State ────────────────────────────────────────────────────────────────────
let currentQ           = 0;
let answers            = [];
let scores             = { consulting: 0, corporate: 0, banking: 0, pe: 0, healthtech: 0, policy: 0, commercial: 0 };
let institutionalScore = 0;
let boutiqueScore      = 1; // 0=large, 1=neutral, 2=boutique/startup

// ─── Navigation ───────────────────────────────────────────────────────────────
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function startQuiz() {
  currentQ           = 0;
  answers            = [];
  scores             = { consulting: 0, corporate: 0, banking: 0, pe: 0, healthtech: 0, policy: 0, commercial: 0 };
  institutionalScore = 0;
  boutiqueScore      = 1;
  showScreen('quiz');
  renderQuestion();
}

function restartQuiz() {
  showScreen('landing');
}

function prevQuestion() {
  if (currentQ === 0) return;
  const prev = answers[currentQ - 1];
  if (prev !== undefined) {
    const opt = QUESTIONS[currentQ - 1].options[prev];
    if (opt.scores)       Object.keys(opt.scores).forEach(k => { scores[k] -= opt.scores[k]; });
    if (opt.institutional !== undefined) institutionalScore -= opt.institutional;
    if (opt.boutique      !== undefined) boutiqueScore       = 1;
    answers.pop();
  }
  currentQ--;
  renderQuestion();
}

function selectOption(optIdx) {
  const opt = QUESTIONS[currentQ].options[optIdx];
  if (opt.scores)       Object.keys(opt.scores).forEach(k => { scores[k] += opt.scores[k]; });
  if (opt.institutional !== undefined) institutionalScore  += opt.institutional;
  if (opt.boutique      !== undefined) boutiqueScore        = opt.boutique;
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

  const TRACK_KEYS = ['consulting', 'corporate', 'banking', 'pe', 'healthtech', 'policy', 'commercial'];

  const ranked   = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  const winner   = ranked[0][0];
  const arch     = ARCHETYPES[winner];
  const total    = Object.values(scores).reduce((a, b) => a + b, 0) || 1;
  const sizeLabel = boutiqueScore >= 2 ? 'boutique' : boutiqueScore === 0 ? 'large' : 'neutral';

  // Hybrid: ≥85% of top = full hybrid (all sections blend); ≥70% = partial (firms + playbook reflect secondary)
  const ratio        = ranked.length >= 2 && ranked[1][1] > 0 ? ranked[1][1] / ranked[0][1] : 0;
  const isHybrid     = ratio >= 0.85;
  const hasSecondary = ratio >= 0.70;
  const winner2      = hasSecondary ? ranked[1][0] : null;
  const arch2        = hasSecondary ? ARCHETYPES[winner2] : null;

  // ── Sub-sector signals (Q6 primary, Q1 confirming) ──────────────────────────
  // Q6 is index 5 in answers[], Q1 is index 0
  const Q6_SECTOR_MAP = { 0: 'pharma', 1: 'devices', 2: 'digital', 3: 'payer', 4: 'public', 5: null };
  const Q1_SECTOR_MAP = { 0: 'pharma', 1: 'digital', 2: null, 3: null, 4: 'public' };
  const q6Signal      = Q6_SECTOR_MAP[answers[5]] ?? null;
  const q1Signal      = Q1_SECTOR_MAP[answers[0]] ?? null;
  const sectorSignal  = q6Signal;
  const q1Confirms    = q1Signal && q1Signal === sectorSignal;
  const sectorSlots   = sectorSignal ? (q1Confirms ? 3 : 2) : 0;

  function sortFirms(arr) {
    const sizeOrder = boutiqueScore >= 2 ? { boutique: 0, mid: 1, large: 2 }
                    : boutiqueScore === 0 ? { large: 0, mid: 1, boutique: 2 }
                    : { mid: 0, large: 1, boutique: 2 };
    return [...arr].sort((a, b) => (sizeOrder[a.size] ?? 1) - (sizeOrder[b.size] ?? 1));
  }

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

  const sectorFirms   = sectorSlots > 0 ? sortFirms(getAllSectorFirms(sectorSignal)).slice(0, sectorSlots) : [];
  const archetypeSlots = 6 - sectorFirms.length;
  const excluded       = new Set(sectorFirms.map(f => f.name));

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
      <div class="r-hero-label">Your healthcare career path</div>
      <div class="r-hero-name">${arch.name} · ${arch2.name.replace('The ', '')}</div>
      <p class="r-hero-tagline">Your profile spans two tracks — both are genuine fits worth pursuing in parallel.</p>
      <span class="r-hero-badge">${arch.badge}</span>
      <span class="r-hero-badge" style="margin-left:6px;">${arch2.badge}</span>
    `;
  } else {
    hero.innerHTML = `
      <span class="r-hero-emoji">${arch.emoji}</span>
      <div class="r-hero-label">Your healthcare career path</div>
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
  TRACK_KEYS.forEach(key => {
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

  // ── 4. Organizations to Target ────────────────────────────────────────────
  const sizeNote = hasSecondary
    ? `Showing organizations from both your ${arch.name} and ${arch2.name} paths${sizeLabel === 'boutique' ? ', boutique-first' : sizeLabel === 'large' ? ', large-firm-first' : ''}.`
    : sizeLabel === 'boutique' ? 'Showing boutique and smaller organizations first based on your preferences.'
    : sizeLabel === 'large'    ? 'Showing large organizations first based on your preferences.'
    : 'Showing a mix of large and boutique organizations.';
  const firmSec = el('div', 'r-section');
  firmSec.innerHTML = `
    <div class="r-section-head">
      <div class="r-section-title">Organizations to Target</div>
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

  // ── 5. Internal / Institutional section (conditional) ────────────────────
  if (institutionalScore >= 3) {
    const intSec = el('div', 'internal-banner');
    intSec.innerHTML = `
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:16px;">
        <div style="font-size:0.68rem;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:rgba(255,255,255,0.45);">Internal Corporate Strategy</div>
        <div style="flex:1;height:1px;background:rgba(255,255,255,0.12);"></div>
      </div>
      <div class="internal-head">
        <div>
          <div class="internal-title">You lean internal — also consider these corporate roles</div>
          <div class="internal-sub">Your answers suggest a preference for working inside a large organization. These pharma and health companies have active HBA pipelines for corporate strategy, BD, and corporate development teams — where you own outcomes, not just decks.</div>
        </div>
        <span style="font-size:2.2rem;flex-shrink:0;">🏢</span>
      </div>
      <div class="internal-grid"></div>
    `;
    const intGrid = intSec.querySelector('.internal-grid');
    INTERNAL_ORGS.forEach(f => {
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

  // ── 6. Recruiting Playbook ────────────────────────────────────────────────
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

  // ── 7. Useful Resources ───────────────────────────────────────────────────
  const USEFUL_TOOLS = [
    { name: 'Rock Health Reports',   icon: '🚀', desc: 'Annual digital health funding data, career reports, and market trend analysis', url: 'https://rockhealth.com/reports' },
    { name: 'CIHI Data & Analytics', icon: '🏥', desc: 'Canadian health system performance data, benchmarks, and health analytics',     url: 'https://www.cihi.ca/en' },
    { name: 'HLTH Community',        icon: '💡', desc: 'Healthcare innovation network — industry events, news, and career opportunities', url: 'https://www.hlth.com' },
  ];
  const toolsSec = el('div', 'r-section');
  toolsSec.innerHTML = `
    <div class="r-section-head">
      <div class="r-section-title">Useful Resources</div>
      <div class="r-section-rule"></div>
    </div>
    <div class="tools-grid"></div>
  `;
  const toolsGrid = toolsSec.querySelector('.tools-grid');
  USEFUL_TOOLS.forEach(t => {
    const card = el('a', 'tool-card');
    card.href   = t.url;
    card.target = '_blank';
    card.rel    = 'noopener noreferrer';
    card.innerHTML = `
      <div class="tool-icon">${t.icon}</div>
      <div class="tool-name">${t.name}</div>
      <div class="tool-desc">${t.desc}</div>
    `;
    toolsGrid.appendChild(card);
  });
  body.appendChild(toolsSec);

  // ── 8. Synthesis ──────────────────────────────────────────────────────────
  const synth = el('div', 'r-synthesis');
  synth.innerHTML = `
    <div class="synth-eyebrow">Your Summary</div>
    <div class="synth-title">The Bottom Line</div>
    ${isHybrid
      ? `<p class="synth-text">Your results show a genuine split between ${arch.name} and ${arch2.name} — this isn't indecision, it's a broader fit profile. Pursue both tracks in parallel and let your conversations with organizations sharpen the focus.</p>
         <p class="synth-text" style="margin-top:12px;"><strong>${arch.name.replace('The ', '')}:</strong> ${arch.synthesis(sizeLabel)}</p>
         <p class="synth-text" style="margin-top:12px;"><strong>${arch2.name.replace('The ', '')}:</strong> ${arch2.synthesis(sizeLabel)}</p>`
      : hasSecondary
      ? `<p class="synth-text">${arch.synthesis(sizeLabel)}</p>
         <p class="synth-text" style="margin-top:12px;"><strong>Also worth noting:</strong> Your ${arch2.name} tendencies are real — the ${arch2.name.replace('The ', '')} organizations in your list above reflect that secondary fit. Keep that interest visible in conversations with those organizations.</p>`
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

  // ── 9. Our Partners ───────────────────────────────────────────────────────
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
    img.src     = `logos/${file}`;
    img.alt     = file.replace(/[-_.](png|jpg|jpeg|webp)$/i, '').replace(/[-_]/g, ' ');
    img.loading = 'lazy';
    logoGrid.appendChild(img);
  });
  body.appendChild(logosSec);

  // ── Footer ────────────────────────────────────────────────────────────────
  const foot = el('div', 'r-foot');
  foot.innerHTML = 'Built for HBA1s by the Ivey Health Sector Club &nbsp;·&nbsp; Results are not stored';
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
