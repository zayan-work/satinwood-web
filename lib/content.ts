/**
 * Single source of truth for all landing-page copy.
 * Copy is taken verbatim from the reference design (satinwood-draft.html).
 */

export const nav = {
  links: [
    { label: "The difference", href: "#difference" },
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
    "Senior by default",
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
    title: "Finance only, senior only",
    body: "We place finance leaders and nothing else. No assistants, no marketing pool. Senior by default, never junior staff relabelled.",
  },
  {
    n: "02",
    title: "Built by operators, not recruiters",
    body: "Satinwood is run by people who own finance functions themselves. We hire the way an operator hires, because we are operators.",
  },
  {
    n: "03",
    title: "Backed by an established group",
    body: "Delivered with MAC Holdings, a long-standing Sri Lankan group. Institutional weight behind every placement, not a venture experiment.",
  },
  {
    n: "04",
    title: "Built to own the work",
    body: "Embedded, exclusive, full-time, and fluent in modern finance tooling and AI. A teammate who owns outcomes, not a queue that processes tasks.",
  },
];

export const roles = [
  {
    name: "Controller",
    body: "Owns the close, the controls, the reporting package, and the integrity of your numbers.",
  },
  {
    name: "FP&A Lead",
    body: "Budgets, forecasts, board decks, and the analysis behind every decision.",
  },
  {
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
    q: "How are you different from other offshore providers?",
    a: "Most are generalist marketplaces placing assistants, marketers, and junior bookkeepers. We place senior finance operators only, we are run by people who own finance functions, and we are delivered with an established group rather than a venture-backed staffing app.",
  },
  {
    q: "How senior are these people, really?",
    a: "Controller, FP&A, accounting manager, and senior accountant level. CA Sri Lanka, ACCA, CIMA, or CFA qualified, with real ownership experience inside global firms, not junior staff relabelled as senior.",
  },
  {
    q: "Are your operators fluent in AI and modern tools?",
    a: "Yes. They work in QuickBooks, NetSuite, Xero and the rest of the modern finance stack, and they use AI tooling where it makes the work faster and sharper. Judgment first, tools to amplify it.",
  },
  {
    q: "How do you handle our financial data?",
    a: "Secure, company-issued devices, signed NDAs, role-based access, and documented handling standards. Your data is treated as if our own books depended on it.",
  },
  {
    q: "Is the operator exclusive to us?",
    a: "Yes. Full-time and dedicated to your business, embedded in your tools and team. Not shared, not a pooled queue.",
  },
  {
    q: "What is the contract and trial?",
    a: "Start with a trial period to confirm fit, then a flexible rolling engagement. If the match is not right, we replace it.",
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
};

export const footer = {
  links: [
    { label: "The difference", href: "#difference" },
    { label: "The team", href: "#team" },
    { label: "Proof", href: "#proof" },
    { label: "How it works", href: "#how" },
    { label: "Build your team", href: "#cta" },
  ],
  base: "Senior finance teams, embedded in your business. Crafted in Ceylon. © 2026 Satinwood.",
};
