/**
 * Single source of truth for all landing-page copy.
 * Copy is taken verbatim from the reference design (Satinwood Updated for Team.html).
 */

/** The six service landing pages — shared by the nav dropdown and footer. */
export const serviceLinks = [
  { label: "Outsourced Controller", href: "/outsourced-controller" },
  { label: "Outsourced FP&A", href: "/outsourced-fpa" },
  { label: "Outsourced Accounting Manager", href: "/outsourced-accounting-manager" },
  { label: "Outsourced Senior Accountant", href: "/outsourced-senior-accountant" },
  { label: "Finance for CPG brands", href: "/finance-for-cpg-brands" },
  { label: "Finance for ecommerce brands", href: "/finance-for-ecommerce-brands" },
];

export const nav = {
  links: [
    { label: "The difference", href: "#difference" },
    { label: "Services", children: serviceLinks },
    { label: "The team", href: "#team" },
    { label: "Proof", href: "#proof" },
    { label: "How it works", href: "#how" },
  ],
  cta: { label: "Build your team", href: "#cta" },
};

export const hero = {
  eyebrow: "Senior finance teams · Crafted in Ceylon",
  trust: [
    "Finance only",
    "Always senior",
    "Full-time & embedded",
    "Fluent in modern tooling & AI",
  ],
  note: "No long lock-in. Every match starts on a trial.",
  people: [
    { initials: "SR", name: "Sohaib R.", role: "Financial Controller", tag: "CIMA", avatar: "a1" },
    { initials: "DP", name: "Dilani P.", role: "FP&A Lead", tag: "ACCA · CFA", avatar: "a2" },
    { initials: "NF", name: "Nuwan F.", role: "Accounting Manager", tag: "ACCA", avatar: "a3" },
    { initials: "AH", name: "Amaya H.", role: "Senior Accountant", tag: "CA SL", avatar: "a4" },
  ],
} as const;

export const proofStrip = [
  "Finance, and only finance",
  "Senior operators, embedded full-time",
  "Matched in 2 weeks",
  "Backed by an established group",
];

export const problems = [
  {
    title: "A strong controller runs six figures",
    body: "The best finance leaders cost a fortune and are hard to find, harder to keep, and slow to hire.",
  },
  {
    title: "Offshore usually means bookkeeping",
    body: "Most providers give you junior transaction processing, not ownership of the close, the controls, or the reporting.",
  },
  {
    title: "You should not overpay for judgment",
    body: "The senior finance talent you want already exists. It is simply in the wrong place, at the wrong price.",
  },
];

export const differences = [
  {
    n: "01",
    title: "Finance is all we place",
    body: "We place finance leaders and nothing else. No assistants, no marketing pool, no junior staff with a senior title.",
  },
  {
    n: "02",
    title: "Run by people who've scaled finance teams and businesses",
    body: "The people who built Satinwood trained at Deloitte, Ernst & Young, Goldman Sachs, and Stanford, and have scaled finance functions themselves. We hire for that.",
  },
  {
    n: "03",
    title: "From one seat to a full finance function",
    body: "Start with the role you need most, a controller or an FP&A lead, and scale to a full outsourced finance function at the same senior standard as you grow.",
  },
  {
    n: "04",
    title: "Embedded like a teammate",
    body: "Embedded, exclusive, full-time, and fluent in modern finance tools and AI. They own outcomes the way a teammate does.",
  },
];

export const roles = [
  {
    name: "Controller",
    href: "/outsourced-controller",
    body: "Owns the close, the controls, the reporting package, and the integrity of your numbers.",
  },
  {
    name: "FP&A Lead",
    href: "/outsourced-fpa",
    body: "Budgets, forecasts, board decks, and the analysis behind every decision.",
  },
  {
    // Page not built yet — stays unlinked so it can't 404.
    name: "Accounting Manager",
    body: "Runs the day-to-day function, reconciliations, AP and AR, and the monthly cadence.",
  },
  {
    name: "Senior Accountant",
    body: "Hands-on ownership of the ledger, journals, and clean, investor-ready books.",
  },
];

export const operators = [
  {
    initials: "S",
    name: "Sohaib R.",
    role: "Financial Controller",
    cred: "CIMA · MBA",
    gradient: "linear-gradient(160deg,#27301F,#3A4A31)",
    meta: "15 years · ex-HSBC, WNS Global · led a 20-person reconciliation team for a US annuities book.",
  },
  {
    initials: "D",
    name: "Dilani P.",
    role: "FP&A Lead",
    cred: "ACCA · CFA L1",
    gradient: "linear-gradient(160deg,#2C3826,#4a5a3d)",
    meta: "12 years · ex-Virtusa, LSEG · global budgeting, forecasting, and board reporting.",
  },
  {
    initials: "N",
    name: "Nuwan F.",
    role: "Accounting Manager",
    cred: "ACCA",
    gradient: "linear-gradient(160deg,#3a3320,#5a4f2e)",
    meta: "12 years · ex-WNS Global · ran AP, AR, and month-end across UK and EU clients.",
  },
  {
    initials: "A",
    name: "Amaya H.",
    role: "Senior Accountant",
    cred: "CA Sri Lanka",
    gradient: "linear-gradient(160deg,#27301F,#46402a)",
    meta: "8 years · Big Four trained · GL, journals, and audit-ready financials end to end.",
  },
];

export const caseStudy = {
  logo: "Flourish",
  desc: "CPG brand across major North American retailers, including Costco, Loblaws, and Amazon.",
  quote:
    "I stopped doing the books and started running the business. The numbers are cleaner than they have ever been.",
  who: "Flourish",
  attribution: { name: "Jenson Sada", role: "CFO and COO, Flourish" },
  blocks: [
    {
      label: "The problem",
      body: "Finance ran on the founder. Month-end, retailer deductions and chargebacks, GL coding, and investor reporting all landed on one person. It did not scale, and the numbers were always a step behind.",
    },
    {
      label: "The solution",
      body: "Flourish embedded a Satinwood controller and a senior accountant. They took ownership of the close, reconciliations, retailer settlements, and the monthly reporting pack, running it inside the company's own tools.",
    },
  ],
  outcome:
    "A finance function that runs without the founder, with cleaner books and faster reporting, for a fraction of a local hire.",
};

export const testimonials = [
  {
    quote:
      "Our controller owns the close end to end. I stopped checking the numbers months ago. That is the highest compliment I can give.",
    initials: "JM",
    name: "Founder",
    role: "Consumer brand, North America",
    avatar: "a1",
  },
  {
    quote:
      "We were paying a US firm three times as much for less ownership. The judgment we get now is what we were missing.",
    initials: "KR",
    name: "Operating Partner",
    role: "Family office",
    avatar: "a3",
  },
];

export const stats = [
  { value: 15, prefix: "", suffix: "+ yrs", label: "Average senior experience on our bench" },
  { value: 2, prefix: "", suffix: " weeks", label: "From first call to matched" },
  { value: 100, prefix: "", suffix: "%", label: "Finance, and nothing else" },
  { value: 50, prefix: "", suffix: "%+", label: "Typical saving vs a local hire" },
];

export const steps = [
  {
    n: "01",
    title: "Discovery",
    body: "We learn your close, your stack, your reporting cadence, and the seat you actually need filled.",
  },
  {
    n: "02",
    title: "Match",
    body: "We hand-select a senior operator for your business. A considered match, not a stack of resumes.",
  },
  {
    n: "03",
    title: "Embed",
    body: "A structured 90-day onboarding into your tools, your team, and your monthly rhythm.",
  },
  {
    n: "04",
    title: "Grow",
    body: "Scale from one seat to a full finance function, at the same standard, as you grow.",
  },
];

export const craftPoints = [
  {
    title: "Operator-built",
    body: "Run by people who own finance functions, so we hire for judgment and ownership, not keywords on a resume.",
  },
  {
    title: "Finance-only bar",
    body: "One vetting standard, built for finance. No generalist pool to dilute it.",
  },
  {
    title: "Modern and AI-fluent",
    body: "Fluent in QuickBooks, NetSuite, Xero, and the AI tools that now run alongside them.",
  },
  {
    title: "Retained, not rented",
    body: "Real career paths mean our people stay, so your finance function has memory.",
  },
];

export const reassurances = [
  {
    title: "Time-zone overlap",
    body: "Real working hours that overlap your day, agreed up front, so the close never waits.",
  },
  {
    title: "Data security",
    body: "Secure devices, NDAs, access controls, and clear handling standards for financial data.",
  },
  {
    title: "Trial and replacement",
    body: "Start on a trial. If it is not the right fit, we replace the match. The risk is ours.",
  },
  {
    title: "Flexible terms",
    body: "Rolling engagement, scale up or down. No multi-year lock-in to get started.",
  },
];

export const faqs = [
  {
    q: "What is Satinwood?",
    a: "Satinwood is a senior finance talent firm. We embed finance operators from Sri Lanka full-time and exclusively in your business to own the close, reporting, and controls, for a fraction of building the same seat at home. We serve growing companies in the United States, Canada, the United Kingdom, the United Arab Emirates, and Australia, placing controller, FP&A, accounting manager, and senior accountant level talent. We are not a staffing marketplace or a bookkeeping provider.",
  },
  {
    q: "How is Satinwood different from other offshore finance providers and staffing marketplaces?",
    a: "Satinwood places senior finance operators only, never generalists. Most offshore providers are generalist marketplaces staffing assistants, marketers, and junior bookkeepers from a shared pool. We place finance and nothing else, we are run by people who own finance functions themselves, and we are delivered with MAC Holdings, an established Sri Lankan group, not a venture-backed app.",
  },
  {
    q: "What is an outsourced controller?",
    a: "An outsourced controller is a senior finance professional who owns your month-end close, reconciliations, financial controls, and reporting from outside your local payroll. With Satinwood the controller is embedded full-time in your business and tools, so you get ownership of the numbers, not a task queue. It is the same seniority as a local controller, at a fraction of the cost.",
  },
  {
    q: "What is the difference between outsourced bookkeeping and a controller-level finance hire?",
    a: "Bookkeeping records transactions; a controller owns the integrity of your numbers. A bookkeeper handles data entry, AP, and AR. A controller owns the close, the controls, the reporting package, and the judgment behind the numbers. Satinwood places controller, FP&A, accounting manager, and senior accountant level talent, not junior bookkeeping.",
  },
  {
    q: "Can an offshore finance team run our month-end close?",
    a: "Yes. A senior offshore finance operator can own your full month-end close, reconciliations, customer or retailer settlements, and the monthly reporting pack, working inside your own tools. Satinwood operators run the close end to end with real ownership, with working hours that overlap your day so the close never waits. Most finance work, from the ledger to board reporting, runs remotely.",
  },
  {
    q: "Why Sri Lanka for finance talent?",
    a: "Sri Lanka has a deep, internationally trained finance profession, the same people the global firms recruit. Operators are CA Sri Lanka, ACCA, CIMA, or CFA qualified, with real ownership experience inside global banks, Big Four firms, and listed groups. The talent already exists at the standard you want. It is simply in a market where the cost of the same seat is far lower.",
  },
  {
    q: "How senior are Satinwood's operators?",
    a: "Controller, FP&A, accounting manager, and senior accountant level. Operators are CA Sri Lanka, ACCA, CIMA, or CFA qualified, with real ownership experience inside global firms, not junior staff relabelled as senior. The average senior operator on our bench has 15 or more years of experience.",
  },
  {
    q: "What accounting tools do your operators use?",
    a: "Satinwood operators work in QuickBooks, NetSuite, Xero, and the rest of the modern finance stack, and they use AI tooling where it makes the work faster and sharper. We train every operator on the tools your business already runs on. Judgment first, tools to amplify it.",
  },
  {
    q: "Are your operators full-time and exclusive to us?",
    a: "Yes. Each operator is full-time, dedicated, and exclusive to your business, embedded in your tools and team. Not shared, not a pooled queue, not a task marketplace.",
  },
  {
    q: "Which countries does Satinwood serve?",
    a: "Satinwood serves growing companies in the United States, Canada, the United Kingdom, the United Arab Emirates, and Australia. Operators work hours that overlap your day, agreed up front, so the close never waits.",
  },
  {
    q: "How fast can you match someone, and is there a trial?",
    a: "About two weeks from the first call to a hand-selected senior match. Every match starts on a trial period to confirm fit, and if it is not right we replace it. Terms are flexible and rolling, with no long lock-in to get started.",
  },
  {
    q: "How does Satinwood handle our financial data?",
    a: "Secure, company-issued devices, signed NDAs, role-based access, and documented handling standards. Your financial data is treated as if our own books depended on it.",
  },
];

export const booking = {
  eyebrow: "Get started",
  bullets: [
    "A 15-minute discovery call to understand the role",
    "A hand-selected senior match in about two weeks",
    "A trial period on every match. If it is not right, we replace it.",
  ],
  email: "hello@satinwood.co",
  cities: "Washington DC · Miami · Toronto · Colombo",
};

export const footer = {
  links: [
    ...serviceLinks,
    { label: "Team", href: "/team" },
    { label: "Advisory", href: "/advisory" },
    { label: "Build your team", href: "/#cta" },
  ],
  base: "Senior finance teams, embedded in your business. Crafted in Ceylon. © 2026 Satinwood.",
};

/**
 * "How we compare" table. Three columns; the Satinwood column is highlighted.
 * `satinwood` values render in the dark, emphasized column.
 */
export const comparison = {
  eyebrow: "How we compare",
  title: { lead: "The seniority of a local hire, ", em: "at a fraction of the cost." },
  lede: "The seniority and ownership of a local hire, the speed and cost of offshore, without the usual trade-offs of either.",
  columns: ["Local hire", "Typical offshore", "Satinwood"] as const,
  rows: [
    {
      label: "Seniority",
      local: "Senior",
      offshore: "Often junior",
      satinwood: "Always senior",
    },
    {
      label: "Owns the close and controls",
      local: "Yes",
      offshore: "Task processing",
      satinwood: "Yes, end to end",
    },
    {
      label: "Embedded and exclusive",
      local: "Yes",
      offshore: "Often pooled",
      satinwood: "Yes, full-time",
    },
    {
      label: "Time to hire",
      local: "Two to three months",
      offshore: "Weeks",
      satinwood: "About two weeks",
    },
    {
      label: "Relative cost",
      local: "Six figures",
      offshore: "Low, but limited",
      satinwood: "A fraction of a local hire",
    },
  ],
};

/** Sub-page navigation — absolute links so they resolve from any sub-page. */
export const pageNav = {
  links: [
    { label: "The difference", href: "/#difference" },
    { label: "Services", children: serviceLinks },
    { label: "Team", href: "/team" },
    { label: "Advisory", href: "/advisory" },
    { label: "How it works", href: "/#how" },
  ],
  cta: { label: "Build your team", href: "/#cta" },
};

/** /team — the people who built and run Satinwood. Photos live in /public/team. */
export const team = {
  eyebrow: "The team",
  title: "The people behind Satinwood.",
  lede: "Operators, not recruiters. The people who built Satinwood have run finance functions and scaled businesses themselves, and they hold the bench to the same standard.",
  members: [
    {
      name: "Rengan Rajaratnam",
      role: "Chairman",
      photo: "/team/rengan.jpg",
      bio: "Rengan chairs Satinwood and opens the doors. Three decades in global finance, including Morgan Stanley, Point72, and Mercer, a Stanford MBA, and a deep network across founders, funds, and operators. He sets direction and brings the relationships that put senior finance talent in front of the companies that need it.",
      link: { label: "Advisory with Rengan", href: "/advisory" },
    },
    {
      name: "Tilak Gunawardena",
      role: "Head of Sri Lanka Operations",
      photo: "/team/tilak.jpg",
      bio: "Tilak runs Satinwood on the ground in Sri Lanka. Group Director and Chief Financial Controller at MAC Holdings, with over twenty years in finance leadership. Prior VP Finance at Aitken Spence, a listed Colombo group, plus Acuity Knowledge Partners and Ernst & Young across Colombo and New York. He hires and holds the bench to the standard he was trained in.",
    },
    {
      name: "Imu Moorthy",
      role: "Advisor, Digital Assets & Web3",
      photo: "/team/imu.jpg",
      bio: "Imu advises Satinwood on clients building in blockchain and web3.",
    },
  ],
  podcast: {
    eyebrow: "Listen",
    title: "The podcast.",
    // DEV TODO: drop in the real podcast name and link/embed.
    body: "Rengan hosts a podcast for founders and investors on capital, markets, and building.",
    cta: { label: "Listen and subscribe", href: "#" },
  },
  cta: {
    eyebrow: "Work with us",
    title: "Build your finance team.",
    body: "Tell us the seat you need and we will hand-select a senior match, embedded full-time in your business.",
    button: { label: "Build your team", href: "/#cta" },
  },
} as const;

/**
 * /advisory — Rengan's advisory page.
 * BOOKING DEV TODO: point every "Request a call with Rengan" CTA at Rengan's
 * real calendar link once it exists. Defaults to the home booking section.
 * LEGAL NOTE: keep wording to business, growth, and operating advisory only —
 * not investment advice, securities advice, or fund/money management.
 */
export const advisory = {
  cta: { label: "Request a call with Rengan", href: "/#cta" },
  hero: {
    eyebrow: "Advisory",
    titleLead: "An operator ",
    titleEm: "in your corner.",
    lede: "Rengan Rajaratnam spent three decades in global finance, including Morgan Stanley, Point72, and Mercer. He now advises a small number of founders and funds directly, on strategy, growth, and capital.",
    credLine: "Morgan Stanley · Point72 · Mercer · Stanford",
    photo: "/team/rengan.jpg",
  },
  who: {
    eyebrow: "Who he works with",
    title: "Built for founders and funds.",
    cards: [
      {
        title: "Founders",
        body: "Scaling past the early days and want a sharper read on growth, capital, and what to build next, from someone who has sat in the operating seat, not just advised from the outside.",
      },
      {
        title: "Funds and investors",
        body: "Want an operator's view on a company, a market, or a thesis, and the network to act on it. He has spent three decades doing exactly that.",
      },
    ],
  },
  helps: {
    eyebrow: "What he helps with",
    title: "Strategy, capital, and scale.",
    items: [
      {
        title: "Growth strategy",
        body: "Where to focus, what to build next, and how to get there without breaking the model.",
      },
      {
        title: "Capital strategy",
        body: "Getting the business ready to raise and to talk to capital, on the operating and reporting side.",
      },
      {
        title: "Scaling and go-to-market",
        body: "Turning early traction into a repeatable engine, with the network to open doors.",
      },
      {
        title: "The finance function",
        body: "Bringing reporting and controls up to the standard investors expect, with a senior team to run it.",
      },
    ],
  },
  why: {
    eyebrow: "Why Rengan",
    title: "He has been on both sides of the table.",
    body: "Three decades in global finance, including Morgan Stanley, Point72, Mercer, and Robertson Stephens, a Stanford MBA, and years building and backing companies. A network across founders, funds, and operators that is hard to reach from the outside. He advises a small number of people at a time, directly, not through a junior team.",
  },
  how: {
    eyebrow: "How it works",
    title: "Three steps.",
    steps: [
      { n: "01", title: "Request a call", body: "A short introduction to see whether it is a fit, both ways." },
      { n: "02", title: "Talk it through", body: "What you need, how he can help, and how the two of you work together." },
      { n: "03", title: "Get to work", body: "Direct access, focused on the things that actually move your company." },
    ],
  },
  final: {
    eyebrow: "Get started",
    title: "Request a call with Rengan.",
    body: "He works with a small number of founders and funds at a time.",
  },
} as const;


/**
 * SEO service landing pages. One template (two-column hero with an "At a glance"
 * panel → "the work" → why → compare → who-it-is-for → FAQ → CTA), rendered by
 * <ServicePage> and keyed by slug. Copy + titles/meta are verbatim from the
 * reference mockups in tmp/update-v4 (use the titles/meta exactly — sized for SERPs).
 */
export const servicePages = {
  "outsourced-controller": {
    slug: "outsourced-controller",
    metaTitle: "Outsourced Controller Services | Satinwood",
    metaDescription:
      "Outsourced controller services for US and Canadian companies. A senior controller embedded full-time to own your month-end close, reporting, and controls.",
    serviceName: "Outsourced Controller Services",
    serviceType: "Outsourced controller",
    breadcrumb: "Outsourced Controller",
    hero: {
      eyebrow: "Outsourced controller",
      titleLead: "Outsourced controller services, ",
      titleEm: "embedded in your business.",
      lede: "An outsourced controller, sometimes called a fractional controller, is a senior finance professional who owns your month-end close, reporting, and controls. Satinwood embeds one full-time in your business, with the seniority of a local hire, at a fraction of the cost.",
      credLine: "Serving the US and Canada · CA Sri Lanka, ACCA, CIMA, CFA qualified",
      atAGlance: [
        { k: "Seniority", v: "Controller level and up" },
        { k: "Model", v: "Full-time, embedded, dedicated" },
        { k: "Owns", v: "Close, reporting, controls" },
        { k: "Time to match", v: "About two weeks" },
        { k: "Cost", v: "A fraction of a local hire" },
      ],
    },
    work: {
      eyebrow: "The role",
      title: "What an outsourced controller does.",
      lede: "A controller owns the integrity of your numbers, not just the data entry. A Satinwood controller runs the following end to end, inside your own tools.",
      items: [
        { n: "01", title: "Month-end close", body: "Owns the full close on a fixed cadence, with reconciliations done and the books locked on time, every month." },
        { n: "02", title: "Financial reporting", body: "Builds the monthly reporting pack leadership and investors can trust, with the judgment behind the numbers." },
        { n: "03", title: "Controls and compliance", body: "Sets and runs the internal controls that keep the numbers clean and the business audit-ready." },
        { n: "04", title: "Cash and working capital", body: "Tracks cash, AR, AP, and working capital so you always know your position and runway." },
        { n: "05", title: "Budgeting and forecasting", body: "Supports the budget and forecast, and the variance analysis that explains what actually happened." },
        { n: "06", title: "Audit and raise prep", body: "Gets the books and the file ready for an audit, a raise, or diligence, without the last-minute scramble." },
      ],
    },
    why: {
      eyebrow: "Why Satinwood",
      title: "A controller who owns your numbers.",
      items: [
        { title: "Always senior", body: "Controller level and above, qualified and experienced, with real ownership inside global firms." },
        { title: "Dedicated and embedded", body: "Full-time and exclusive to you, inside your tools and team. Not a shared pool and not a pooled task queue." },
        { title: "Finance only", body: "We place finance and nothing else. Most offshore providers are generalist marketplaces. We are a finance firm." },
        { title: "A fraction of the cost", body: "The same seniority as a local controller, for far less, because the talent sits in a lower-cost market, not because the work is junior." },
      ],
    },
    compare: {
      eyebrow: "How we compare",
      titleLead: "The seniority of a local hire, ",
      titleEm: "at a fraction of the cost.",
      columns: ["Local hire", "Typical offshore", "Satinwood"],
      rows: [
        { label: "Seniority", a: "Senior", b: "Often junior", sat: "Always senior" },
        { label: "Owns the close and controls", a: "Yes", b: "Task processing", sat: "Yes, end to end" },
        { label: "Embedded and exclusive", a: "Yes", b: "Often pooled", sat: "Yes, full-time" },
        { label: "Time to hire", a: "Two to three months", b: "Weeks", sat: "About two weeks" },
        { label: "Relative cost", a: "Six figures", b: "Low, but limited", sat: "A fraction of a local hire" },
      ],
    },
    whoFor: {
      eyebrow: "Who it is for",
      title: "Built for growing US and Canadian companies.",
      items: [
        { title: "Your first finance leader", body: "You have outgrown a bookkeeper and need someone to own the numbers, but it is not time for a full-time controller's salary." },
        { title: "Replacing a departing controller", body: "Your controller left and the close cannot wait two or three months for a local hire to start." },
        { title: "Scaling past spreadsheets", body: "The business has gotten complex and the reporting and controls need a senior hand to hold the standard." },
        { title: "Getting ready to raise or sell", body: "You need clean books and an audit-ready file before diligence, and you need it handled now." },
      ],
    },
    faq: {
      eyebrow: "Questions",
      title: "Outsourced controller, answered.",
      items: [
        { q: "What is an outsourced controller?", a: "An outsourced controller is a senior finance professional who owns your month-end close, reconciliations, financial controls, and reporting from outside your local payroll. With Satinwood the controller is embedded full-time in your business and your tools, so you get ownership of the numbers, not a task queue. It is the same seniority as a local controller, at a fraction of the cost." },
        { q: "What does an outsourced controller do?", a: "A controller owns the integrity of your numbers. That means running the month-end close, reconciliations, the financial reporting pack, cash and working-capital reporting, budgeting and forecasting support, internal controls, and audit preparation. Satinwood controllers run this end to end inside your own tools." },
        { q: "What is the difference between an outsourced controller and a bookkeeper?", a: "A bookkeeper records transactions; a controller owns the numbers. A bookkeeper handles data entry, AP, and AR. A controller owns the close, the controls, the reporting package, and the judgment behind the figures. Satinwood places controller-level talent, not junior bookkeeping." },
        { q: "Outsourced controller or fractional CFO, which do I need?", a: "A controller owns the accuracy and the close; a CFO owns strategy, capital, and the board. Most growing companies need the close owned long before they need a full-time CFO. A Satinwood controller gives you reliable numbers and clean reporting, and you add CFO-level help when the business calls for it." },
        { q: "Is an outsourced controller the same as a fractional controller?", a: "Close. A fractional controller usually means part-time hours; an outsourced controller can be part-time or full-time, often from a lower-cost market. Satinwood places a full-time, dedicated controller, so you get full ownership of the close and controls, not a few hours a week." },
        { q: "Can an offshore controller run our month-end close?", a: "Yes. A senior offshore controller can own your full month-end close, reconciliations, settlements, and the monthly reporting pack, working inside your own tools, with hours that overlap your day so the close never waits." },
        { q: "How senior are Satinwood's controllers?", a: "Controller level and above. Operators are CA Sri Lanka, ACCA, CIMA, or CFA qualified, with real ownership experience inside global firms, Big Four, and listed groups. The average senior operator on our bench has 15 or more years of experience." },
        { q: "Is the controller dedicated and full-time, or shared?", a: "Dedicated, full-time, and exclusive to your business, embedded in your tools and your team. Not a shared pool, not a pooled task queue, not a marketplace match." },
        { q: "How much does an outsourced controller cost compared with a local hire?", a: "A fraction of a local controller, who in the US or Canada typically runs well into six figures with benefits. You get the same seniority and ownership for far less, because the talent sits in a lower-cost market, not because the work is junior." },
        { q: "Do you work with US and Canadian companies?", a: "Yes. Satinwood serves growing companies across the United States and Canada, as well as the United Kingdom, the United Arab Emirates, and Australia. Operators work hours that overlap your day, agreed up front." },
        { q: "How fast can you place a controller, and is there a trial?", a: "About two weeks from the first call to a hand-selected senior match. Every match starts on a trial to confirm fit, and if it is not right we replace it. Terms are flexible and rolling, with no long lock-in." },
        { q: "How is our financial data handled?", a: "Secure, company-issued devices, signed NDAs, role-based access, and documented handling standards. Your financial data is treated as if our own books depended on it." },
      ],
    },
    cta: {
      eyebrow: "Get started",
      title: "Get a senior controller, embedded.",
      ledeParts: [
        "Tell us about your close and your stack. We hand-select a senior controller and embed them full-time, usually within about two weeks. We also place ",
        { text: "outsourced FP&A", href: "/outsourced-fpa" },
        " and full finance teams for ",
        { text: "CPG and consumer brands", href: "/finance-for-cpg-brands" },
        ".",
      ],
      button: { label: "Build your team", href: "/#cta" },
    },
  },

  "outsourced-fpa": {
    slug: "outsourced-fpa",
    metaTitle: "Outsourced FP&A Services | Satinwood",
    metaDescription:
      "Outsourced FP&A services for US and Canadian companies. A senior FP&A operator embedded full-time for budgeting, forecasting, and decision analysis.",
    serviceName: "Outsourced FP&A Services",
    serviceType: "Outsourced financial planning and analysis",
    breadcrumb: "Outsourced FP&A",
    hero: {
      eyebrow: "Outsourced FP&A",
      titleLead: "Outsourced FP&A services, ",
      titleEm: "embedded in your business.",
      lede: "Outsourced FP&A, sometimes called FP&A as a service or fractional FP&A, gives you budgeting, forecasting, and the analysis behind your decisions, without a full-time hire. Satinwood embeds a dedicated FP&A operator full-time in your business, with the seniority of a local hire, at a fraction of the cost.",
      credLine: "Serving the US and Canada · CA Sri Lanka, ACCA, CIMA, CFA qualified",
      atAGlance: [
        { k: "Talent", v: "Senior FP&A operator" },
        { k: "Model", v: "Full-time, embedded, dedicated" },
        { k: "Owns", v: "Budget, forecast, reporting" },
        { k: "Time to match", v: "About two weeks" },
        { k: "Cost", v: "A fraction of a local hire" },
      ],
    },
    work: {
      eyebrow: "The role",
      title: "What an outsourced FP&A operator does.",
      lede: "FP&A owns what happens next, the plan and the analysis behind it. A Satinwood operator runs the following end to end, inside your own tools.",
      items: [
        { n: "01", title: "Budgeting and planning", body: "Builds the annual budget and the operating plan, and keeps them connected to what the business is actually doing." },
        { n: "02", title: "Forecasting", body: "Owns the rolling forecast so leadership always has a current view of where the numbers are heading." },
        { n: "03", title: "Variance analysis", body: "Explains the gap between plan and actual, in plain terms, so decisions are based on why, not just what." },
        { n: "04", title: "KPIs and dashboards", body: "Sets the metrics that matter and builds the dashboards leadership and the board actually use." },
        { n: "05", title: "Scenario modeling", body: "Models the big decisions, hiring, pricing, raises, so you can see the outcome before you commit." },
        { n: "06", title: "Board and investor reporting", body: "Prepares the reporting pack investors expect, on time, with the story behind the numbers." },
      ],
    },
    why: {
      eyebrow: "Why Satinwood",
      title: "A dedicated FP&A operator, full-time.",
      items: [
        { title: "Always senior", body: "FP&A operators qualified and experienced, with real ownership inside global firms." },
        { title: "Dedicated to you", body: "Full-time and dedicated to your business, with the time to own the planning, not a few hours a week across ten clients." },
        { title: "Finance only", body: "We place finance and nothing else. A finance firm, not a generalist marketplace." },
        { title: "A fraction of the cost", body: "The seniority you need for far less, because the talent sits in a lower-cost market, not because the work is junior." },
      ],
    },
    compare: {
      eyebrow: "How we compare",
      titleLead: "A senior FP&A operator, ",
      titleEm: "without the fractional-CFO hourly.",
      columns: ["In-house hire", "Fractional CFO", "Satinwood"],
      rows: [
        { label: "Seniority", a: "Senior", b: "Senior", sat: "Always senior" },
        { label: "Dedicated to you", a: "Full-time", b: "Part-time, split", sat: "Full-time, dedicated" },
        { label: "Owns the model and reporting", a: "Yes", b: "Advises", sat: "Yes, owns it" },
        { label: "Time to hire", a: "Two to three months", b: "Weeks", sat: "About two weeks" },
        { label: "Relative cost", a: "Six figures", b: "High hourly", sat: "A fraction of a local hire" },
      ],
    },
    whoFor: {
      eyebrow: "Who it is for",
      title: "Built for growing US and Canadian companies.",
      items: [
        { title: "You raised and need real reporting", body: "Investors expect a forecast and a reporting pack, and the founder cannot keep building it in a spreadsheet." },
        { title: "The model lives in one person's head", body: "Planning depends on a founder or a CFO who has no time, and the business needs it owned." },
        { title: "Scaling and flying blind", body: "The business is growing fast and decisions are being made without a forecast you can trust." },
        { title: "Preparing to raise or sell", body: "You need a model and a reporting pack that stand up to diligence, built before you are in the room." },
      ],
    },
    faq: {
      eyebrow: "Questions",
      title: "Outsourced FP&A, answered.",
      items: [
        { q: "What is outsourced FP&A?", a: "Outsourced FP&A, also called FP&A as a service, gives you budgeting, forecasting, variance analysis, and the reporting behind your decisions, without a full-time hire. Satinwood embeds a dedicated FP&A operator full-time in your business and your tools, at the seniority of a local hire and a fraction of the cost." },
        { q: "What does an outsourced FP&A operator do?", a: "An FP&A operator builds and owns the budget and forecast, runs variance analysis, sets the KPIs and dashboards leadership watches, models scenarios for big decisions, and prepares the board and investor reporting. Satinwood operators run this end to end inside your own tools." },
        { q: "Is outsourced FP&A the same as a fractional CFO?", a: "No. A fractional CFO is a part-time strategist split across many clients. An outsourced FP&A operator is dedicated to your business and owns the planning, forecasting, and analysis day to day. Satinwood places a full-time, dedicated operator, so the work is owned, not advised a few hours a week." },
        { q: "FP&A or a controller, which do I need?", a: "A controller owns the accuracy of what already happened, the close and the controls. FP&A owns what happens next, the budget, the forecast, and the analysis. Many growing companies need both, and Satinwood places either or both at the same senior standard." },
        { q: "Can an offshore FP&A operator own our forecasting and reporting?", a: "Yes. A senior offshore FP&A operator can own your budget, rolling forecast, variance analysis, and board reporting, working inside your own tools, with hours that overlap your day." },
        { q: "How senior are Satinwood's FP&A operators?", a: "Senior FP&A level. Operators are CA Sri Lanka, ACCA, CIMA, or CFA qualified, with real ownership experience inside global firms, Big Four, and listed groups. The average senior operator on our bench has 15 or more years of experience." },
        { q: "Is the FP&A operator dedicated and full-time, or shared?", a: "Dedicated, full-time, and exclusive to your business, embedded in your tools and team. Not a shared pool, not a pooled task queue, not a marketplace match." },
        { q: "How much does outsourced FP&A cost compared with a hire or a fractional CFO?", a: "A fraction of a full-time FP&A hire, which runs well into six figures, and without the high hourly of a fractional CFO. You get a dedicated senior operator for far less, because the talent sits in a lower-cost market." },
        { q: "Do you work with US and Canadian companies?", a: "Yes. Satinwood serves growing companies across the United States and Canada, as well as the United Kingdom, the United Arab Emirates, and Australia. Operators work hours that overlap your day, agreed up front." },
        { q: "How fast can you place an FP&A operator, and is there a trial?", a: "About two weeks from the first call to a hand-selected senior match. Every match starts on a trial to confirm fit, and if it is not right we replace it. Terms are flexible and rolling, with no long lock-in." },
        { q: "How is our financial data handled?", a: "Secure, company-issued devices, signed NDAs, role-based access, and documented handling standards. Your financial data is treated as if our own books depended on it." },
      ],
    },
    cta: {
      eyebrow: "Get started",
      title: "Get a dedicated FP&A operator.",
      ledeParts: [
        "Tell us about your planning and your stack. We hand-select a senior FP&A operator and embed them full-time, usually within about two weeks. We also place ",
        { text: "outsourced controllers", href: "/outsourced-controller" },
        " and full finance teams for ",
        { text: "CPG and consumer brands", href: "/finance-for-cpg-brands" },
        ".",
      ],
      button: { label: "Build your team", href: "/#cta" },
    },
  },

  "outsourced-accounting-manager": {
    slug: "outsourced-accounting-manager",
    metaTitle: "Outsourced Accounting Manager | Satinwood",
    metaDescription:
      "Outsourced accounting manager for US and Canadian companies. A senior manager embedded full-time to run your close, AP, AR, and reconciliations.",
    serviceName: "Outsourced Accounting Manager",
    serviceType: "Outsourced accounting manager",
    breadcrumb: "Outsourced Accounting Manager",
    hero: {
      eyebrow: "Outsourced accounting manager",
      titleLead: "Outsourced accounting manager, ",
      titleEm: "embedded in your business.",
      lede: "An outsourced accounting manager is a senior finance professional who runs the day-to-day finance function, reconciliations, AP, AR, payroll coordination, and month-end close. Satinwood embeds one full-time and exclusively in your business, at the seniority of a local hire, at a fraction of the cost.",
      credLine: "Serving the US and Canada · CA Sri Lanka, ACCA, CIMA qualified",
      atAGlance: [
        { k: "Seniority", v: "Accounting manager level" },
        { k: "Model", v: "Full-time, embedded, dedicated" },
        { k: "Owns", v: "Close, AP and AR, reconciliations" },
        { k: "Time to match", v: "About two weeks" },
        { k: "Cost", v: "A fraction of a local hire" },
      ],
    },
    work: {
      eyebrow: "The role",
      title: "What an outsourced accounting manager does.",
      lede: "An accounting manager runs the engine of your finance function day to day. A Satinwood operator owns the following end to end, inside your own tools.",
      items: [
        { n: "01", title: "Month-end close", body: "Drives the monthly close on a fixed cadence, with reconciliations done and the books locked on time, every month." },
        { n: "02", title: "Accounts payable and receivable", body: "Owns AP and AR end to end, from coding and approvals to collections and vendor management, so cash flow is never a surprise." },
        { n: "03", title: "Bank and account reconciliations", body: "Reconciles every account monthly so the books tie out to the bank and nothing slips through." },
        { n: "04", title: "Payroll coordination", body: "Coordinates payroll inputs and reconciliations, making sure what gets paid ties to what gets recorded." },
        { n: "05", title: "General ledger and journals", body: "Owns the GL, posting adjusting entries, accruals, and prepayments so the books reflect reality." },
        { n: "06", title: "Supporting the controller or CFO", body: "Handles the production work that frees your controller or CFO to focus on reporting, controls, and strategy." },
      ],
    },
    why: {
      eyebrow: "Why Satinwood",
      title: "A dedicated accounting manager, full-time in your business.",
      items: [
        { title: "Always senior", body: "Accounting manager level and above, qualified and experienced. Not a junior bookkeeper handling volume." },
        { title: "Dedicated to you", body: "Full-time and exclusive to your business, embedded in your tools and team. Not a shared task queue spread across ten clients." },
        { title: "Finance only", body: "We place finance and nothing else. A finance firm, not a generalist staffing marketplace." },
        { title: "A fraction of the cost", body: "The seniority you need for far less, because the talent sits in a lower-cost market, not because the work is junior." },
      ],
    },
    compare: {
      eyebrow: "How we compare",
      titleLead: "Senior day-to-day ownership, ",
      titleEm: "at a fraction of the cost.",
      columns: ["Local hire", "Typical offshore", "Satinwood"],
      rows: [
        { label: "Seniority", a: "Senior", b: "Often junior", sat: "Always senior" },
        { label: "Owns close and reconciliations", a: "Yes", b: "Task processing", sat: "Yes, end to end" },
        { label: "Dedicated and exclusive", a: "Yes", b: "Often shared pool", sat: "Yes, full-time" },
        { label: "Time to hire", a: "Two to three months", b: "Weeks", sat: "About two weeks" },
        { label: "Relative cost", a: "Six figures", b: "Low, but limited", sat: "A fraction of a local hire" },
      ],
    },
    whoFor: {
      eyebrow: "Who it is for",
      title: "Built for growing US and Canadian companies.",
      items: [
        { title: "The bookkeeper is not enough", body: "Transactions are getting complex and you need someone who owns the reconciliations and the close, not just the data entry." },
        { title: "The controller is buried", body: "Your controller or CFO is spending too much time on production work and not enough on reporting and strategy." },
        { title: "The close is always late", body: "Month-end runs long because nobody owns the process. You need someone dedicated to making it run on time." },
        { title: "Scaling past manual processes", body: "The business is growing and the finance function needs a senior operator to hold the standard as it gets more complex." },
      ],
    },
    faq: {
      eyebrow: "Questions",
      title: "Outsourced accounting manager, answered.",
      items: [
        { q: "What is an outsourced accounting manager?", a: "An outsourced accounting manager is a senior finance professional who runs the day-to-day finance function from outside your local payroll, owning reconciliations, AP, AR, payroll coordination, the month-end close, and the GL. Satinwood embeds one full-time and exclusively in your business, at the seniority of a local hire and a fraction of the cost." },
        { q: "What does an outsourced accounting manager do?", a: "An accounting manager runs the engine of your day-to-day finance function. That means owning the month-end close, AP and AR, bank reconciliations, payroll coordination, general ledger entries, and supporting the controller or CFO on reporting. Satinwood operators run this end to end inside your own tools." },
        { q: "What is the difference between an accounting manager and a bookkeeper?", a: "A bookkeeper records transactions; an accounting manager owns the function. A bookkeeper handles data entry. An accounting manager owns the close, the reconciliations, the AP and AR process, the GL integrity, and the production work the controller depends on. Satinwood places accounting manager level talent, not junior bookkeeping." },
        { q: "What is the difference between an accounting manager and a controller?", a: "A controller owns financial reporting, controls, and the integrity of the numbers. An accounting manager runs the day-to-day operations, the close, reconciliations, and AP and AR, that make the controller's work possible. Many growing companies need both, and Satinwood places either or both at the same senior standard." },
        { q: "Can an offshore accounting manager run our month-end close?", a: "Yes. A senior offshore accounting manager can own your full month-end close, reconciliations, AP and AR, and GL entries, working inside your own tools, with hours that overlap your day so the close never waits." },
        { q: "How senior are Satinwood's accounting managers?", a: "Accounting manager level and above, CA Sri Lanka, ACCA, or CIMA qualified, with real ownership experience inside global firms, Big Four, and listed groups. The average senior operator on our bench has 12 or more years of experience." },
        { q: "Is the accounting manager dedicated and full-time, or shared?", a: "Dedicated, full-time, and exclusive to your business, embedded in your tools and team. Not a shared pool, not a pooled task queue, not a marketplace match." },
        { q: "How much does an outsourced accounting manager cost compared with a local hire?", a: "A fraction of a local accounting manager, who in the US or Canada typically costs well into six figures with benefits and payroll taxes. You get the same seniority and day-to-day ownership for far less, because the talent sits in a lower-cost market, not because the work is junior." },
        { q: "Do you work with US and Canadian companies?", a: "Yes. Satinwood serves growing companies across the United States and Canada, as well as the United Kingdom, the United Arab Emirates, and Australia. Operators work hours that overlap your day, agreed up front." },
        { q: "How fast can you place an accounting manager, and is there a trial?", a: "About two weeks from the first call to a hand-selected senior match. Every match starts on a trial to confirm fit, and if it is not right we replace it. Terms are flexible and rolling, with no long lock-in." },
        { q: "How is our financial data handled?", a: "Secure, company-issued devices, signed NDAs, role-based access, and documented handling standards. Your financial data is treated as if our own books depended on it." },
      ],
    },
    cta: {
      eyebrow: "Get started",
      title: "Get a senior accounting manager, embedded.",
      ledeParts: [
        "Tell us about your close and your stack. We hand-select a senior accounting manager and embed them full-time, usually within about two weeks. We also place ",
        { text: "outsourced controllers", href: "/outsourced-controller" },
        ", ",
        { text: "outsourced FP&A", href: "/outsourced-fpa" },
        ", and full finance teams for ",
        { text: "CPG", href: "/finance-for-cpg-brands" },
        " and ",
        { text: "ecommerce brands", href: "/finance-for-ecommerce-brands" },
        ".",
      ],
      button: { label: "Build your team", href: "/#cta" },
    },
  },

  "outsourced-senior-accountant": {
    slug: "outsourced-senior-accountant",
    metaTitle: "Outsourced Senior Accountant | Satinwood",
    metaDescription:
      "Outsourced senior accountant for US and Canadian companies. A qualified senior accountant embedded full-time to own your GL, reconciliations, and books.",
    serviceName: "Outsourced Senior Accountant",
    serviceType: "Outsourced senior accountant",
    breadcrumb: "Outsourced Senior Accountant",
    hero: {
      eyebrow: "Outsourced senior accountant",
      titleLead: "Outsourced senior accountant, ",
      titleEm: "embedded in your business.",
      lede: "An outsourced senior accountant is a qualified finance professional who owns your general ledger, reconciliations, and month-end production work. Satinwood embeds one full-time and exclusively in your business, at a fraction of the cost of a local hire.",
      credLine: "Serving the US and Canada · CA Sri Lanka, ACCA, CIMA qualified",
      atAGlance: [
        { k: "Qualified", v: "CA SL, ACCA, CIMA" },
        { k: "Model", v: "Full-time, embedded, dedicated" },
        { k: "Owns", v: "GL, reconciliations, books" },
        { k: "Time to match", v: "About two weeks" },
        { k: "Cost", v: "A fraction of a local hire" },
      ],
    },
    work: {
      eyebrow: "The role",
      title: "What an outsourced senior accountant does.",
      lede: "A senior accountant owns the accuracy and integrity of your books, the production work that makes everything else possible. A Satinwood operator handles the following inside your own tools.",
      items: [
        { n: "01", title: "General ledger", body: "Owns the GL, posting journal entries, accruals, prepayments, and adjustments so the books always reflect reality." },
        { n: "02", title: "Bank reconciliations", body: "Reconciles every account monthly so the books tie out to the bank and nothing is missed." },
        { n: "03", title: "AP and AR support", body: "Codes, processes, and tracks payables and receivables to keep the function running cleanly and on time." },
        { n: "04", title: "Month-end production", body: "Runs the production work that closes the books, from reconciliations to the trial balance, so the controller can report." },
        { n: "05", title: "Fixed assets and depreciation", body: "Maintains the fixed asset register and posts depreciation accurately so the balance sheet stays clean." },
        { n: "06", title: "Audit-ready workpapers", body: "Keeps the files, schedules, and reconciliations organised so audits and investor reviews do not become a scramble." },
      ],
    },
    why: {
      eyebrow: "Why Satinwood",
      title: "Senior, qualified, and dedicated to your books.",
      items: [
        { title: "Always senior", body: "CA Sri Lanka, ACCA, or CIMA qualified. Big Four and listed-group trained. Not a junior clerk with a senior title." },
        { title: "Dedicated to you", body: "Full-time and exclusive to your business, embedded in your tools and your close cadence. Not a shared bookkeeping pool." },
        { title: "Finance only", body: "We place finance and nothing else. Every operator is vetted to a single, finance-only standard." },
        { title: "A fraction of the cost", body: "The qualification and ownership of a local senior accountant, for far less, because the talent sits in a lower-cost market." },
      ],
    },
    compare: {
      eyebrow: "How we compare",
      titleLead: "Qualified senior ownership, ",
      titleEm: "at a fraction of the cost.",
      columns: ["Local hire", "Typical offshore", "Satinwood"],
      rows: [
        { label: "Qualification", a: "CA, CPA, ACCA", b: "Often unverified", sat: "CA SL, ACCA, CIMA" },
        { label: "Owns GL and reconciliations", a: "Yes", b: "Task processing", sat: "Yes, end to end" },
        { label: "Dedicated and exclusive", a: "Yes", b: "Often shared pool", sat: "Yes, full-time" },
        { label: "Time to hire", a: "Two to three months", b: "Weeks", sat: "About two weeks" },
        { label: "Relative cost", a: "Six figures", b: "Low, but limited", sat: "A fraction of a local hire" },
      ],
    },
    whoFor: {
      eyebrow: "Who it is for",
      title: "Built for growing US and Canadian companies.",
      items: [
        { title: "Your first proper hire", body: "You have outgrown spreadsheets and a part-time bookkeeper and need someone who can own the books to a real standard." },
        { title: "Supporting a controller or CFO", body: "Your controller needs a qualified operator to handle the production work so they can focus on reporting and controls." },
        { title: "Getting books investor-ready", body: "You need clean, reconciled books and organised workpapers before a raise or audit, and you need them handled properly." },
        { title: "Replacing a departing accountant", body: "Someone left and the close cannot wait two or three months for a local hire to go through the full hiring process." },
      ],
    },
    faq: {
      eyebrow: "Questions",
      title: "Outsourced senior accountant, answered.",
      items: [
        { q: "What is an outsourced senior accountant?", a: "An outsourced senior accountant is a qualified finance professional who owns your general ledger, reconciliations, and month-end production work from outside your local payroll. Satinwood embeds one full-time and exclusively in your business, at a standard that holds up to audit and investor review, at a fraction of the cost of a local hire." },
        { q: "What does a senior accountant do, compared with a bookkeeper?", a: "A bookkeeper records transactions. A senior accountant owns the integrity of the books. That means owning the GL, posting adjusting entries and accruals, reconciling every account, preparing audit-ready workpapers, and making sure the books are clean and accurate at month-end. Satinwood places senior accountant level talent, not bookkeeping." },
        { q: "What qualifications do Satinwood's senior accountants hold?", a: "CA Sri Lanka, ACCA, or CIMA qualified, with experience inside global firms, Big Four, and listed groups. These are the same credentials global firms recruit from Sri Lanka's internationally recognised finance profession." },
        { q: "What is the difference between a senior accountant and an accounting manager?", a: "A senior accountant owns the production work, the GL, reconciliations, journal entries, and workpapers. An accounting manager also owns the production work but adds management of the close process, AP and AR oversight, and coordination of the finance function. Satinwood places both at the same senior standard." },
        { q: "Can an offshore senior accountant own our GL and reconciliations?", a: "Yes. A qualified offshore senior accountant can own your GL, bank reconciliations, journal entries, and month-end production work, inside your own tools, with hours that overlap your day." },
        { q: "Is the senior accountant dedicated and full-time, or shared?", a: "Dedicated, full-time, and exclusive to your business. Not a shared bookkeeping pool, not a marketplace match, not a task queue." },
        { q: "How much does an outsourced senior accountant cost compared with a local hire?", a: "A fraction of a local senior accountant, who in the US or Canada typically costs well into six figures with benefits and payroll taxes. You get the same qualification and ownership for far less, because the talent sits in a lower-cost market, not because the work is junior." },
        { q: "Do you work with US and Canadian companies?", a: "Yes. Satinwood serves growing companies across the United States and Canada, as well as the United Kingdom, the United Arab Emirates, and Australia. Operators work hours that overlap your day, agreed up front." },
        { q: "How fast can you place a senior accountant, and is there a trial?", a: "About two weeks from the first call to a hand-selected match. Every match starts on a trial to confirm fit, and if it is not right we replace it. Terms are flexible and rolling, with no long lock-in." },
        { q: "How is our financial data handled?", a: "Secure, company-issued devices, signed NDAs, role-based access, and documented handling standards. Your financial data is treated as if our own books depended on it." },
      ],
    },
    cta: {
      eyebrow: "Get started",
      title: "Get a qualified senior accountant, embedded.",
      ledeParts: [
        "Tell us about your books and your stack. We hand-select a qualified senior accountant and embed them full-time, usually within about two weeks. We also place ",
        { text: "outsourced accounting managers", href: "/outsourced-accounting-manager" },
        ", ",
        { text: "controllers", href: "/outsourced-controller" },
        ", and full finance teams for ",
        { text: "ecommerce", href: "/finance-for-ecommerce-brands" },
        " and ",
        { text: "CPG brands", href: "/finance-for-cpg-brands" },
        ".",
      ],
      button: { label: "Build your team", href: "/#cta" },
    },
  },

  "finance-for-cpg-brands": {
    slug: "finance-for-cpg-brands",
    metaTitle: "Outsourced Finance for CPG Brands | Satinwood",
    metaDescription:
      "Outsourced finance for CPG and consumer brands. A senior operator who understands trade spend, retailer deductions, and margin by SKU, embedded full-time.",
    serviceName: "Outsourced Finance for CPG and Consumer Brands",
    serviceType: "Outsourced finance and accounting for consumer brands",
    breadcrumb: "Finance for CPG brands",
    hero: {
      eyebrow: "Finance for consumer brands",
      titleLead: "Outsourced finance for ",
      titleEm: "CPG and consumer brands.",
      lede: "Outsourced finance for CPG brands means a senior operator who understands the economics that actually run a consumer business, trade spend, retailer deductions, landed cost, and margin by SKU, embedded full-time in your business. Satinwood places finance built for consumer and ecommerce brands, at the seniority of a local hire and a fraction of the cost.",
      credLine: "Built for consumer brands across the US and Canada",
      atAGlance: [
        { k: "Talent", v: "Controller and senior accountant" },
        { k: "Model", v: "Full-time, embedded, dedicated" },
        { k: "Knows", v: "Deductions, trade spend, SKU margin" },
        { k: "Time to match", v: "About two weeks" },
        { k: "Cost", v: "A fraction of a local hire" },
      ],
    },
    work: {
      eyebrow: "The work",
      title: "What we handle for consumer brands.",
      lede: "Consumer brands have economics a generalist accountant misses. A Satinwood operator owns the following, inside your own tools.",
      items: [
        { n: "01", title: "Margin and landed cost by SKU", body: "Builds COGS and landed cost by SKU, including freight, duties, and components, so you see real margin by product, not a blended average." },
        { n: "02", title: "Retailer and distributor deductions", body: "Reconciles retailer and distributor settlements and tracks deductions and chargebacks to the dollar, so margin stops leaking quietly." },
        { n: "03", title: "Trade spend and promotions", body: "Tracks trade spend and promotional allowances against the lift they actually drive, so you know the true margin on every program." },
        { n: "04", title: "Inventory and COGS", body: "Owns inventory accounting and COGS so the books reflect what is really on the shelf and in transit." },
        { n: "05", title: "Channel reconciliation", body: "Reconciles Amazon, Shopify, and retail channels to the bank, including fees, returns, and settlements, so every channel ties out." },
        { n: "06", title: "Cash flow through the cycle", body: "Tracks the cash tied up in inventory and the buying cycle, so you can plan production without running dry." },
      ],
    },
    why: {
      eyebrow: "Why Satinwood",
      title: "Finance from people who have run a consumer brand.",
      items: [
        { title: "Built by operators", body: "The people behind Satinwood run a consumer brand sold in thousands of stores across North America. We have closed the books, fought the deductions, and modeled the margin ourselves." },
        { title: "Speaks retail and ecommerce", body: "Deductions, trade spend, landed cost, Amazon and Shopify. We know the economics that run a consumer business, not just generic accounting." },
        { title: "Senior and embedded", body: "Controller and FP&A level talent, full-time and dedicated to your brand, inside your own tools and team." },
        { title: "A fraction of the cost", body: "Senior finance on a consumer brand's budget, because the talent sits in a lower-cost market, not because the work is junior." },
      ],
    },
    compare: {
      eyebrow: "How we compare",
      titleLead: "Finance that ",
      titleEm: "speaks consumer brand.",
      columns: ["Generalist accountant", "Typical outsourced", "Satinwood"],
      rows: [
        { label: "Seniority", a: "Senior", b: "Often junior", sat: "Always senior" },
        { label: "Knows CPG economics", a: "Generic", b: "No", sat: "Built for it" },
        { label: "Owns close and margin reporting", a: "Sometimes", b: "Task processing", sat: "Yes, end to end" },
        { label: "Embedded and exclusive", a: "Maybe", b: "Often pooled", sat: "Yes, full-time" },
        { label: "Relative cost", a: "Six figures", b: "Low, but limited", sat: "A fraction of a local hire" },
      ],
    },
    whoFor: {
      eyebrow: "Who it is for",
      title: "Built for the brands that live on margin.",
      items: [
        { title: "Scaling into retail", body: "You are moving from DTC into retail and the deductions, chargebacks, and trade spend are getting away from you." },
        { title: "Amazon and Shopify brands", body: "Your channels do not tie out to the bank and you cannot see true margin after fees, returns, and ad spend." },
        { title: "Food, beverage, and CPG", body: "Landed cost, shelf life, and inventory make your numbers harder than a typical services business." },
        { title: "Founders flying on gut", body: "The brand is growing but you are guessing at margin by SKU and cash through the buying cycle." },
      ],
    },
    faq: {
      eyebrow: "Questions",
      title: "Finance for consumer brands, answered.",
      items: [
        { q: "What is outsourced finance for CPG brands?", a: "Outsourced finance for CPG and consumer brands is a senior finance operator who understands the economics that run a consumer business, trade spend, retailer deductions, landed cost, and margin by SKU, embedded full-time in your business. Satinwood places finance built for consumer and ecommerce brands, at the seniority of a local hire and a fraction of the cost." },
        { q: "Do you understand retailer and distributor deductions and chargebacks?", a: "Yes. Deductions, chargebacks, and short-pays are where consumer-brand margin quietly leaks. Satinwood operators reconcile retailer and distributor settlements, track deductions to the dollar, and flag what should be disputed." },
        { q: "Can you handle trade spend and promotions?", a: "Yes. We track trade spend and promotional allowances against the lift they actually drive, so you know the true margin on every program, not just gross sales." },
        { q: "Do you track margin and landed cost by SKU?", a: "Yes. We build COGS and landed cost by SKU, including freight, duties, and components, so you see real margin by product and channel, not a blended average." },
        { q: "Do you reconcile Amazon, Shopify, and retail channels?", a: "Yes. We reconcile Amazon, Shopify, and retail or distributor channels to the bank, including fees, returns, and settlements, so every channel ties out." },
        { q: "Do you understand inventory and cash flow for a product business?", a: "Yes. Inventory ties up cash, and consumer brands live and die on the cycle. We track inventory, COGS, and the cash flow through your buying cycle so you can plan production without running dry." },
        { q: "Who is behind Satinwood's CPG finance?", a: "The people behind Satinwood run a consumer brand sold in thousands of stores across North America. We have closed the books, fought the deductions, and modeled the margin ourselves. This is finance from operators who have done it, not theory." },
        { q: "How senior are your operators?", a: "Controller and FP&A level. Operators are CA Sri Lanka, ACCA, CIMA, or CFA qualified, with real ownership experience inside global firms, Big Four, and listed groups. The average senior operator on our bench has 15 or more years of experience." },
        { q: "Is the operator dedicated and full-time, or shared?", a: "Dedicated, full-time, and exclusive to your brand, embedded in your tools and team. Not a shared pool, not a pooled task queue, not a marketplace match." },
        { q: "Do you work with US and Canadian brands?", a: "Yes. Satinwood serves growing brands across the United States and Canada, as well as the United Kingdom, the United Arab Emirates, and Australia. Operators work hours that overlap your day." },
        { q: "How fast can you place someone, and is there a trial?", a: "About two weeks from the first call to a hand-selected senior match. Every match starts on a trial to confirm fit, and if it is not right we replace it. Terms are flexible and rolling, with no long lock-in." },
      ],
    },
    cta: {
      eyebrow: "Get started",
      title: "Finance that speaks consumer brand.",
      ledeParts: [
        "Tell us about your brand, your channels, and your stack. We hand-select a senior operator who knows consumer economics and embed them full-time. We also place ",
        { text: "outsourced controllers", href: "/outsourced-controller" },
        " and ",
        { text: "outsourced FP&A", href: "/outsourced-fpa" },
        ".",
      ],
      button: { label: "Build your team", href: "/#cta" },
    },
  },

  "finance-for-ecommerce-brands": {
    slug: "finance-for-ecommerce-brands",
    metaTitle: "Outsourced Finance for Ecommerce Brands | Satinwood",
    metaDescription:
      "Outsourced finance for ecommerce brands on Amazon and Shopify. A senior operator who reconciles every channel and owns true COGS, embedded full-time.",
    serviceName: "Outsourced Finance for Ecommerce Brands",
    serviceType: "Outsourced finance and accounting for ecommerce brands",
    breadcrumb: "Finance for ecommerce brands",
    hero: {
      eyebrow: "Finance for ecommerce brands",
      titleLead: "Outsourced finance for ",
      titleEm: "ecommerce brands.",
      lede: "Ecommerce brands carry financial complexity a generalist accountant misses. Amazon payouts speak a different language to Shopify settlements, and COGS without FBA fees and duties is fiction. Satinwood embeds a senior finance operator full-time in your brand, one who has worked inside these numbers.",
      credLine: "Built for Amazon, Shopify, DTC, and multi-channel brands across the US and Canada",
      atAGlance: [
        { k: "Talent", v: "Senior finance operator" },
        { k: "Model", v: "Full-time, embedded, dedicated" },
        { k: "Knows", v: "Amazon, Shopify, COGS, inventory" },
        { k: "Time to match", v: "About two weeks" },
        { k: "Cost", v: "A fraction of a local hire" },
      ],
    },
    work: {
      eyebrow: "The work",
      title: "What we handle for ecommerce brands.",
      lede: "Ecommerce financials have complexity that breaks generic accounting. A Satinwood operator owns the following inside your own tools.",
      items: [
        { n: "01", title: "Channel reconciliation", body: "Reconciles Amazon settlements, Shopify payouts, and every other channel to the bank, including fees, returns, and reserves, so every dollar accounts for itself." },
        { n: "02", title: "True COGS and landed cost", body: "Builds cost of goods including purchase price, freight, duties, FBA fees, and storage, so your margin by SKU reflects what you actually made, not what you hoped." },
        { n: "03", title: "Inventory accounting", body: "Owns inventory valuation and COGS so the books reflect what is actually on hand, in transit, and at fulfillment centres, not a number that drifts from reality." },
        { n: "04", title: "Cash flow through the buying cycle", body: "Tracks the cash tied up in inventory and the buying cycle, so you can place the next PO without running out of runway." },
        { n: "05", title: "Ad spend and returns reconciliation", body: "Reconciles ad spend, platform fees, and returns against revenue by channel so you see contribution margin, not just top-line sales." },
        { n: "06", title: "Month-end close and reporting", body: "Closes the books monthly and builds the reporting pack so you always know where the business stands, by channel, by SKU, and in total." },
      ],
    },
    why: {
      eyebrow: "Why Satinwood",
      title: "Finance from people who understand ecommerce.",
      items: [
        { title: "Speaks Amazon and Shopify", body: "We know that Amazon settlement reports and Shopify payouts are completely different data formats, and we reconcile both cleanly to the bank every month." },
        { title: "Owned by operators", body: "The people behind Satinwood run a consumer brand sold across major North American retailers. We have closed the books, tracked the deductions, and managed inventory cash flow ourselves." },
        { title: "Senior and embedded", body: "Controller and senior accountant level talent, full-time and dedicated to your brand, inside your own tools and reporting cadence." },
        { title: "A fraction of the cost", body: "Senior finance on an ecommerce brand's budget, because the talent sits in a lower-cost market, not because the work is junior." },
      ],
    },
    compare: {
      eyebrow: "How we compare",
      titleLead: "Finance that ",
      titleEm: "understands ecommerce.",
      columns: ["Generalist accountant", "Typical outsourced", "Satinwood"],
      rows: [
        { label: "Reconciles Amazon and Shopify", a: "Rarely", b: "Often incomplete", sat: "Yes, channel by channel" },
        { label: "True COGS with FBA fees and duties", a: "Sometimes", b: "Often missing", sat: "Built from scratch" },
        { label: "Inventory cash flow tracking", a: "Generic", b: "No", sat: "Owns it" },
        { label: "Dedicated and embedded", a: "Maybe", b: "Often shared pool", sat: "Yes, full-time" },
        { label: "Relative cost", a: "Six figures", b: "Low, but limited", sat: "A fraction of a local hire" },
      ],
    },
    whoFor: {
      eyebrow: "Who it is for",
      title: "Built for the brands selling across channels.",
      items: [
        { title: "Amazon and Shopify sellers", body: "You sell on multiple platforms and cannot get a clean number because each channel reports differently and nobody reconciles them properly." },
        { title: "DTC brands moving into wholesale", body: "You are adding retail or wholesale on top of DTC and the financial complexity is outpacing what a bookkeeper can handle." },
        { title: "Brands flying blind on margin", body: "Revenue is growing but you do not know your true margin by SKU because COGS is missing FBA fees, duties, and the real cost of returns." },
        { title: "Founders stuck managing the numbers", body: "Finance is still running on the founder and every month-end is a scramble. You need someone who owns it so you can run the business." },
      ],
    },
    faq: {
      eyebrow: "Questions",
      title: "Finance for ecommerce brands, answered.",
      items: [
        { q: "What is outsourced finance for ecommerce brands?", a: "Outsourced finance for ecommerce brands is a senior finance operator who understands the specific economics of selling across Amazon, Shopify, and multiple channels, embedded full-time in your business. Satinwood places operators who reconcile channel settlements, build true COGS, track inventory cash flow, and close the books monthly, at a fraction of the cost of a local hire." },
        { q: "Can you reconcile Amazon and Shopify?", a: "Yes. Amazon settlement reports and Shopify payouts are completely different data formats, and most generalist accountants do not handle them properly. We reconcile both, plus any other channels, to the bank every month, including fees, returns, reserves, and adjustments, so every dollar accounts for itself." },
        { q: "Can you build true COGS including FBA fees and duties?", a: "Yes. COGS without FBA fees, fulfillment costs, duties, freight, and storage is fiction for an ecommerce brand. We build cost of goods from the ground up by SKU, so your margin reflects what you actually made on each product, not what you hoped." },
        { q: "Do you track inventory and cash flow through the buying cycle?", a: "Yes. Inventory ties up cash, and ecommerce brands live and die by the buying cycle. We track inventory valuation, COGS, and the cash flow through the cycle so you can plan the next purchase order without running dry." },
        { q: "Can you handle a multi-channel brand selling on Amazon, Shopify, and wholesale?", a: "Yes. Multi-channel complexity is exactly what we are built for. We reconcile each channel, consolidate the reporting, and give you a clear view of the business by channel and in total, every month." },
        { q: "Who is behind Satinwood's ecommerce finance capability?", a: "The people behind Satinwood run a consumer brand sold across major North American retailers. We have closed the books, tracked the deductions, and managed inventory cash flow ourselves. This is finance from operators who have done it, not theory." },
        { q: "How senior are your operators?", a: "Controller and senior accountant level. CA Sri Lanka, ACCA, CIMA, or CFA qualified, with real ownership experience inside global firms, Big Four, and listed groups. The average senior operator on our bench has 12 or more years of experience." },
        { q: "Is the operator dedicated and full-time, or shared?", a: "Dedicated, full-time, and exclusive to your brand, embedded in your tools and reporting cadence. Not a shared pool, not a pooled task queue, not a marketplace match." },
        { q: "Do you work with US and Canadian brands?", a: "Yes. Satinwood serves growing brands across the United States and Canada, as well as the United Kingdom, the United Arab Emirates, and Australia. Operators work hours that overlap your day." },
        { q: "How fast can you place someone, and is there a trial?", a: "About two weeks from the first call to a hand-selected senior match. Every match starts on a trial to confirm fit, and if it is not right we replace it. Terms are flexible and rolling, with no long lock-in." },
        { q: "How is our financial data handled?", a: "Secure, company-issued devices, signed NDAs, role-based access, and documented handling standards. Your financial data is treated as if our own books depended on it." },
      ],
    },
    cta: {
      eyebrow: "Get started",
      title: "Finance that speaks ecommerce.",
      ledeParts: [
        "Tell us about your channels and your stack. We hand-select a senior operator who understands ecommerce economics and embed them full-time. We also place ",
        { text: "outsourced controllers", href: "/outsourced-controller" },
        ", ",
        { text: "accounting managers", href: "/outsourced-accounting-manager" },
        ", and full finance teams for ",
        { text: "CPG brands", href: "/finance-for-cpg-brands" },
        ".",
      ],
      button: { label: "Build your team", href: "/#cta" },
    },
  },
} as const;
