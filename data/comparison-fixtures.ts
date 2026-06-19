export type EntityMode = "companies" | "investors" | "founders" | "products";

export interface TimePoint {
  label: string;
  value: number;
}

export interface FounderProfile {
  name: string;
  role: string;
  background: string;
  previousCompanies: string[];
  education: string;
  social: { platform: string; handle: string }[];
  trackRecord: string;
}

export interface IntelligenceMetric {
  label: string;
  value: string;
  delta: number;
  status: "positive" | "neutral" | "warning";
  sparkline: number[];
}

export interface NewsItem {
  date: string;
  source: string;
  title: string;
}

export interface FundingRound {
  date: string;
  stage: string;
  amount: string;
  leadInvestor: string;
}

export interface Company {
  id: string;
  name: string;
  monogram: string;
  logoColor: string;
  category: string;
  industry: string;
  founded: number;
  headquarters: string;
  website: string;
  funding: string;
  fundingNumeric: number;
  valuation: string;
  valuationNumeric: number;
  revenue: string;
  revenueNumeric: number;
  employees: string;
  employeesNumeric: number;
  openRoles: number;
  productCount: number;
  fundingRounds: number;
  lastFundingDate: string;
  marketCategory: string;
  description: string;
  investors: string[];
  leadInvestors: string[];
  recentInvestors: string[];
  founders: FounderProfile[];
  fundingHistory: TimePoint[];
  hiringGrowth: TimePoint[];
  valuationGrowth: TimePoint[];
  productExpansion: TimePoint[];
  marketPresence: TimePoint[];
  intelligence: IntelligenceMetric[];
  recentRounds: FundingRound[];
  news: NewsItem[];
  competitors: string[];
}

const years = ["2019", "2020", "2021", "2022", "2023", "2024", "2025"];

const mkSeries = (vals: number[]): TimePoint[] =>
  vals.map((value, i) => ({ label: years[i], value }));

export const companies: Company[] = [
  {
    id: "openai",
    name: "OpenAI",
    monogram: "OA",
    logoColor: "oklch(0.7 0.15 162)",
    category: "Foundation Models",
    industry: "Artificial Intelligence",
    founded: 2015,
    headquarters: "San Francisco, USA",
    website: "openai.com",
    funding: "$21.9B",
    fundingNumeric: 21900,
    valuation: "$157B",
    valuationNumeric: 157000,
    revenue: "$3.7B",
    revenueNumeric: 3700,
    employees: "3,500+",
    employeesNumeric: 3500,
    openRoles: 412,
    productCount: 9,
    fundingRounds: 11,
    lastFundingDate: "Oct 2024",
    marketCategory: "Generative AI",
    description:
      "Research lab and product company behind ChatGPT, GPT-4o and the Realtime API. Operates the most-used AI assistant on the consumer internet.",
    investors: [
      "Microsoft",
      "Thrive Capital",
      "Khosla Ventures",
      "Sequoia Capital",
      "Tiger Global",
      "Andreessen Horowitz",
      "Founders Fund",
    ],
    leadInvestors: ["Thrive Capital", "Microsoft"],
    recentInvestors: ["Thrive Capital", "Nvidia", "SoftBank", "MGX"],
    founders: [
      {
        name: "Sam Altman",
        role: "Chief Executive Officer",
        background:
          "Former president of Y Combinator (2014–2019). Operator-investor with deep ties across consumer and infrastructure AI.",
        previousCompanies: ["Y Combinator", "Loopt", "Worldcoin"],
        education: "Stanford University (Computer Science, did not finish)",
        social: [
          { platform: "X", handle: "@sama" },
          { platform: "LinkedIn", handle: "/in/samaltman" },
        ],
        trackRecord: "Scaled YC from 75 → 1,900 funded startups; led OpenAI from research lab to $157B platform.",
      },
      {
        name: "Greg Brockman",
        role: "President",
        background: "Former CTO of Stripe; built OpenAI's infrastructure and training stack from scratch.",
        previousCompanies: ["Stripe", "MIT"],
        education: "Harvard University, MIT (Computer Science)",
        social: [{ platform: "X", handle: "@gdb" }],
        trackRecord: "Architected the systems that trained GPT-3, GPT-4 and the o-series reasoning models.",
      },
    ],
    fundingHistory: mkSeries([1, 1, 1, 10, 11.3, 13.7, 21.9]),
    hiringGrowth: mkSeries([120, 180, 300, 500, 1200, 2400, 3500]),
    valuationGrowth: mkSeries([1, 14, 20, 29, 86, 157, 157]),
    productExpansion: mkSeries([1, 2, 3, 4, 6, 8, 9]),
    marketPresence: mkSeries([5, 12, 22, 38, 70, 88, 94]),
    intelligence: [
      { label: "Funding Momentum", value: "$6.6B / 12mo", delta: 38, status: "positive", sparkline: [10, 12, 14, 18, 22, 28, 33] },
      { label: "Hiring Momentum", value: "+1,100 / yr", delta: 46, status: "positive", sparkline: [20, 28, 40, 55, 70, 88, 100] },
      { label: "Product Launches", value: "12 in 2024", delta: 33, status: "positive", sparkline: [3, 4, 6, 7, 9, 11, 12] },
      { label: "Investor Interest", value: "Very High", delta: 22, status: "positive", sparkline: [40, 50, 60, 72, 85, 92, 96] },
      { label: "Media Visibility", value: "98 / 100", delta: 4, status: "neutral", sparkline: [88, 90, 91, 93, 95, 97, 98] },
      { label: "Market Growth", value: "A+", delta: 12, status: "positive", sparkline: [60, 66, 72, 78, 84, 90, 96] },
    ],
    recentRounds: [
      { date: "Oct 2024", stage: "Series", amount: "$6.6B", leadInvestor: "Thrive Capital" },
      { date: "Jan 2024", stage: "Tender Offer", amount: "$1.5B", leadInvestor: "Thrive Capital" },
      { date: "Jan 2023", stage: "Strategic", amount: "$10B", leadInvestor: "Microsoft" },
    ],
    news: [
      { date: "Mar 18, 2025", source: "Bloomberg", title: "OpenAI closes $40B round at $300B valuation, led by SoftBank" },
      { date: "Feb 02, 2025", source: "The Information", title: "OpenAI plans consumer hardware push with Jony Ive" },
      { date: "Dec 12, 2024", source: "Reuters", title: "Sora video model rolls out to ChatGPT Pro subscribers" },
    ],
    competitors: ["Anthropic", "Google DeepMind", "xAI", "Mistral", "Cohere"],
  },
  {
    id: "anthropic",
    name: "Anthropic",
    monogram: "AN",
    logoColor: "oklch(0.7 0.19 22)",
    category: "Foundation Models",
    industry: "AI Safety & Research",
    founded: 2021,
    headquarters: "San Francisco, USA",
    website: "anthropic.com",
    funding: "$13.7B",
    fundingNumeric: 13700,
    valuation: "$61.5B",
    valuationNumeric: 61500,
    revenue: "$1.0B",
    revenueNumeric: 1000,
    employees: "950+",
    employeesNumeric: 950,
    openRoles: 184,
    productCount: 5,
    fundingRounds: 8,
    lastFundingDate: "Jan 2025",
    marketCategory: "Frontier Models",
    description:
      "Safety-focused AI lab founded by former OpenAI leadership. Maker of Claude — the flagship enterprise assistant family.",
    investors: [
      "Google",
      "Amazon",
      "Spark Capital",
      "Lightspeed Venture Partners",
      "Menlo Ventures",
      "Salesforce Ventures",
      "Bessemer Venture Partners",
    ],
    leadInvestors: ["Amazon", "Google"],
    recentInvestors: ["Amazon", "Lightspeed", "Menlo Ventures", "Salesforce Ventures"],
    founders: [
      {
        name: "Dario Amodei",
        role: "Chief Executive Officer",
        background: "Former VP of Research at OpenAI; led the GPT-2 and GPT-3 research efforts.",
        previousCompanies: ["OpenAI", "Google Brain", "Baidu"],
        education: "Princeton (PhD, Biophysics), Stanford (Physics)",
        social: [{ platform: "X", handle: "@DarioAmodei" }],
        trackRecord: "Co-authored GPT-3; built Anthropic into the #2 frontier lab in under 4 years.",
      },
      {
        name: "Daniela Amodei",
        role: "President",
        background: "Former VP of Operations at OpenAI; previously at Stripe and Surveymonkey.",
        previousCompanies: ["OpenAI", "Stripe", "SurveyMonkey"],
        education: "UC Santa Cruz (Politics)",
        social: [{ platform: "LinkedIn", handle: "/in/daniela-amodei" }],
        trackRecord: "Scaled Anthropic from 7 → 950 employees while sustaining research velocity.",
      },
    ],
    fundingHistory: mkSeries([0, 0, 0.124, 0.704, 4.7, 9.4, 13.7]),
    hiringGrowth: mkSeries([0, 0, 35, 160, 380, 700, 950]),
    valuationGrowth: mkSeries([0, 0, 0.7, 4.4, 18, 40, 61.5]),
    productExpansion: mkSeries([0, 0, 1, 2, 3, 4, 5]),
    marketPresence: mkSeries([0, 0, 8, 22, 48, 70, 82]),
    intelligence: [
      { label: "Funding Momentum", value: "$4.3B / 12mo", delta: 31, status: "positive", sparkline: [4, 6, 9, 14, 20, 26, 31] },
      { label: "Hiring Momentum", value: "+250 / yr", delta: 36, status: "positive", sparkline: [10, 18, 28, 42, 55, 70, 85] },
      { label: "Product Launches", value: "6 in 2024", delta: 50, status: "positive", sparkline: [1, 2, 2, 3, 4, 5, 6] },
      { label: "Investor Interest", value: "Very High", delta: 28, status: "positive", sparkline: [30, 40, 55, 68, 80, 90, 94] },
      { label: "Media Visibility", value: "84 / 100", delta: 18, status: "positive", sparkline: [50, 58, 64, 72, 78, 82, 84] },
      { label: "Market Growth", value: "A", delta: 22, status: "positive", sparkline: [40, 50, 58, 66, 74, 82, 88] },
    ],
    recentRounds: [
      { date: "Jan 2025", stage: "Series E", amount: "$2B", leadInvestor: "Lightspeed" },
      { date: "Nov 2024", stage: "Strategic", amount: "$4B", leadInvestor: "Amazon" },
      { date: "Mar 2024", stage: "Series D", amount: "$2.75B", leadInvestor: "Amazon" },
    ],
    news: [
      { date: "Feb 24, 2025", source: "The Verge", title: "Anthropic releases Claude 3.7 Sonnet with extended thinking" },
      { date: "Jan 08, 2025", source: "Bloomberg", title: "Anthropic in talks for $60B valuation round" },
      { date: "Oct 22, 2024", source: "Wired", title: "Claude gains computer-use capability for autonomous agents" },
    ],
    competitors: ["OpenAI", "Google DeepMind", "Mistral", "Cohere", "xAI"],
  },
  {
    id: "perplexity",
    name: "Perplexity",
    monogram: "PX",
    logoColor: "oklch(0.62 0.19 259)",
    category: "Answer Engines",
    industry: "AI Search",
    founded: 2022,
    headquarters: "San Francisco, USA",
    website: "perplexity.ai",
    funding: "$1.04B",
    fundingNumeric: 1040,
    valuation: "$9B",
    valuationNumeric: 9000,
    revenue: "$80M",
    revenueNumeric: 80,
    employees: "180+",
    employeesNumeric: 180,
    openRoles: 64,
    productCount: 4,
    fundingRounds: 7,
    lastFundingDate: "Dec 2024",
    marketCategory: "Conversational Search",
    description:
      "Answer engine built on retrieval-augmented generation. Challenges Google with an ad-free, citation-first search experience.",
    investors: [
      "IVP",
      "NEA",
      "Jeff Bezos",
      "Nvidia",
      "Databricks",
      "Bessemer Venture Partners",
      "B Capital",
    ],
    leadInvestors: ["IVP", "NEA"],
    recentInvestors: ["IVP", "Nvidia", "Bessemer Venture Partners", "Jeff Bezos"],
    founders: [
      {
        name: "Aravind Srinivas",
        role: "Chief Executive Officer",
        background: "Former research scientist at OpenAI, Google and DeepMind working on RLHF and large models.",
        previousCompanies: ["OpenAI", "Google", "DeepMind"],
        education: "UC Berkeley (PhD, Computer Science), IIT Madras",
        social: [{ platform: "X", handle: "@AravSrinivas" }],
        trackRecord: "Scaled Perplexity from 0 → 20M weekly users in under 3 years.",
      },
      {
        name: "Denis Yarats",
        role: "Chief Technology Officer",
        background: "Former research scientist at Meta AI focused on reinforcement learning.",
        previousCompanies: ["Meta AI", "Quora"],
        education: "NYU (PhD, Computer Science)",
        social: [{ platform: "X", handle: "@denisyarats" }],
        trackRecord: "Built Perplexity's retrieval stack serving 500M+ queries / month.",
      },
    ],
    fundingHistory: mkSeries([0, 0, 0, 0.003, 0.099, 0.165, 1.04]),
    hiringGrowth: mkSeries([0, 0, 0, 12, 45, 110, 180]),
    valuationGrowth: mkSeries([0, 0, 0, 0.15, 0.52, 3, 9]),
    productExpansion: mkSeries([0, 0, 0, 1, 2, 3, 4]),
    marketPresence: mkSeries([0, 0, 0, 4, 18, 42, 68]),
    intelligence: [
      { label: "Funding Momentum", value: "$875M / 12mo", delta: 88, status: "positive", sparkline: [1, 2, 4, 8, 18, 38, 60] },
      { label: "Hiring Momentum", value: "+70 / yr", delta: 64, status: "positive", sparkline: [5, 10, 18, 30, 50, 68, 80] },
      { label: "Product Launches", value: "5 in 2024", delta: 25, status: "positive", sparkline: [0, 1, 1, 2, 3, 4, 5] },
      { label: "Investor Interest", value: "High", delta: 41, status: "positive", sparkline: [20, 30, 42, 55, 68, 78, 88] },
      { label: "Media Visibility", value: "76 / 100", delta: 29, status: "positive", sparkline: [30, 40, 50, 58, 66, 72, 76] },
      { label: "Market Growth", value: "A−", delta: 18, status: "positive", sparkline: [35, 45, 55, 62, 70, 78, 84] },
    ],
    recentRounds: [
      { date: "Dec 2024", stage: "Series C", amount: "$500M", leadInvestor: "IVP" },
      { date: "Jun 2024", stage: "Series B+", amount: "$250M", leadInvestor: "IVP" },
      { date: "Apr 2024", stage: "Series B", amount: "$73.6M", leadInvestor: "Daniel Gross" },
    ],
    news: [
      { date: "Mar 04, 2025", source: "TechCrunch", title: "Perplexity launches Comet, an agentic browser for research" },
      { date: "Dec 19, 2024", source: "Bloomberg", title: "Perplexity triples valuation to $9B on $500M round" },
      { date: "Nov 12, 2024", source: "The Verge", title: "Perplexity Shopping rolls out with one-click checkout" },
    ],
    competitors: ["OpenAI (ChatGPT Search)", "Google", "You.com", "Phind", "Brave Search"],
  },
  {
    id: "cursor",
    name: "Cursor",
    monogram: "CR",
    logoColor: "oklch(0.76 0.16 70)",
    category: "AI Coding",
    industry: "Developer Tools",
    founded: 2022,
    headquarters: "San Francisco, USA",
    website: "cursor.com",
    funding: "$173M",
    fundingNumeric: 173,
    valuation: "$2.6B",
    valuationNumeric: 2600,
    revenue: "$100M",
    revenueNumeric: 100,
    employees: "60+",
    employeesNumeric: 60,
    openRoles: 38,
    productCount: 2,
    fundingRounds: 4,
    lastFundingDate: "Dec 2024",
    marketCategory: "AI Code Editors",
    description:
      "The AI-first IDE built on top of VS Code. Default code editor for a generation of LLM-native developers, hit $100M ARR in 21 months.",
    investors: [
      "Andreessen Horowitz",
      "Thrive Capital",
      "Benchmark",
      "OpenAI Startup Fund",
      "Jeff Dean",
      "Patrick Collison",
      "Nat Friedman",
    ],
    leadInvestors: ["Thrive Capital", "Andreessen Horowitz"],
    recentInvestors: ["Thrive Capital", "Andreessen Horowitz", "Benchmark"],
    founders: [
      {
        name: "Michael Truell",
        role: "Chief Executive Officer",
        background: "MIT mathematician turned founder. Built Cursor with three classmates after seeing GitHub Copilot's limits.",
        previousCompanies: ["Google (intern)", "Anysphere"],
        education: "MIT (Mathematics & Computer Science)",
        social: [{ platform: "X", handle: "@mntruell" }],
        trackRecord: "Took Cursor from prototype to $100M ARR in under two years.",
      },
      {
        name: "Sualeh Asif",
        role: "Chief Product Officer",
        background: "MIT classmate of Truell; previously at Google researching distributed systems.",
        previousCompanies: ["Google", "Anysphere"],
        education: "MIT (Computer Science)",
        social: [{ platform: "X", handle: "@sualehasif" }],
        trackRecord: "Owns the editor surface used by 1M+ developers daily.",
      },
    ],
    fundingHistory: mkSeries([0, 0, 0, 0.008, 0.011, 0.06, 0.173]),
    hiringGrowth: mkSeries([0, 0, 0, 4, 12, 30, 60]),
    valuationGrowth: mkSeries([0, 0, 0, 0.04, 0.4, 0.9, 2.6]),
    productExpansion: mkSeries([0, 0, 0, 1, 1, 2, 2]),
    marketPresence: mkSeries([0, 0, 0, 2, 12, 38, 62]),
    intelligence: [
      { label: "Funding Momentum", value: "$113M / 12mo", delta: 65, status: "positive", sparkline: [0, 1, 2, 4, 12, 30, 50] },
      { label: "Hiring Momentum", value: "+30 / yr", delta: 100, status: "positive", sparkline: [0, 2, 4, 8, 18, 38, 60] },
      { label: "Product Launches", value: "3 in 2024", delta: 50, status: "positive", sparkline: [0, 0, 1, 1, 2, 2, 3] },
      { label: "Investor Interest", value: "Very High", delta: 56, status: "positive", sparkline: [10, 20, 32, 48, 62, 78, 92] },
      { label: "Media Visibility", value: "68 / 100", delta: 34, status: "positive", sparkline: [15, 22, 32, 44, 54, 62, 68] },
      { label: "Market Growth", value: "A", delta: 28, status: "positive", sparkline: [20, 32, 44, 54, 64, 74, 84] },
    ],
    recentRounds: [
      { date: "Dec 2024", stage: "Series B", amount: "$100M", leadInvestor: "Thrive Capital" },
      { date: "Aug 2024", stage: "Series A", amount: "$60M", leadInvestor: "Andreessen Horowitz" },
      { date: "Oct 2023", stage: "Seed", amount: "$8M", leadInvestor: "OpenAI Startup Fund" },
    ],
    news: [
      { date: "Feb 28, 2025", source: "TechCrunch", title: "Cursor crosses $100M ARR, fastest SaaS to the mark on record" },
      { date: "Dec 11, 2024", source: "Forbes", title: "Anysphere raises $100M at $2.6B valuation for Cursor" },
      { date: "Oct 01, 2024", source: "The Pragmatic Engineer", title: "How Cursor's tab-completion model became a developer addiction" },
    ],
    competitors: ["GitHub Copilot", "Windsurf", "Replit", "Cognition (Devin)", "Tabnine"],
  },
];

export const companiesById: Record<string, Company> = Object.fromEntries(
  companies.map((c) => [c.id, c]),
);

// ===== Generic entity card shape used by the EntityBuilder =====
export interface EntityCardLike {
  id: string;
  name: string;
  monogram: string;
  logoColor: string;
  category: string;
  subtitle: string;
  primaryMetricLabel: string;
  primaryMetricValue: string;
  secondaryMetricLabel: string;
  secondaryMetricValue: string;
}

export const companyCards: EntityCardLike[] = companies.map((c) => ({
  id: c.id,
  name: c.name,
  monogram: c.monogram,
  logoColor: c.logoColor,
  category: c.category,
  subtitle: c.headquarters,
  primaryMetricLabel: "Funding",
  primaryMetricValue: c.funding,
  secondaryMetricLabel: "Employees",
  secondaryMetricValue: c.employees,
}));

// ===== Popular comparisons per mode =====
export const popularComparisonsByMode: Record<
  EntityMode,
  { id: string; ids: string[]; label: string }[]
> = {
  companies: [
    { id: "openai-anthropic", ids: ["openai", "anthropic"], label: "OpenAI vs Anthropic" },
    { id: "perplexity-openai", ids: ["perplexity", "openai"], label: "Perplexity vs ChatGPT" },
    { id: "cursor-anthropic", ids: ["cursor", "anthropic"], label: "Cursor vs Anthropic" },
    { id: "all-four", ids: ["openai", "anthropic", "perplexity", "cursor"], label: "Top 4 AI labs" },
  ],
  investors: [
    { id: "sequoia-a16z", ids: ["sequoia", "a16z"], label: "Sequoia vs a16z" },
    { id: "thrive-founders", ids: ["thrive", "foundersfund"], label: "Thrive vs Founders Fund" },
    { id: "all-investors", ids: ["sequoia", "a16z", "thrive", "foundersfund"], label: "Top 4 AI investors" },
  ],
  founders: [
    { id: "altman-amodei", ids: ["altman", "amodei"], label: "Sam Altman vs Dario Amodei" },
    { id: "srinivas-truell", ids: ["srinivas", "truell"], label: "Aravind Srinivas vs Michael Truell" },
    { id: "all-founders", ids: ["altman", "amodei", "srinivas", "truell"], label: "Founders of the top 4" },
  ],
  products: [
    { id: "chatgpt-claude", ids: ["chatgpt", "claude"], label: "ChatGPT vs Claude" },
    { id: "perplexity-chatgpt-p", ids: ["perplexity-p", "chatgpt"], label: "Perplexity vs ChatGPT" },
    { id: "cursor-claude", ids: ["cursor-p", "claude"], label: "Cursor vs Claude" },
  ],
};

export const defaultSelectedIdsByMode: Record<EntityMode, string[]> = {
  companies: ["openai", "anthropic", "perplexity", "cursor"],
  investors: ["sequoia", "a16z", "thrive", "foundersfund"],
  founders: ["altman", "amodei", "srinivas", "truell"],
  products: ["chatgpt", "claude", "perplexity-p", "cursor-p"],
};

// Backwards-compat (still imported by route)
export const defaultSelectedIds = defaultSelectedIdsByMode.companies;
export const popularComparisons = popularComparisonsByMode.companies;

// ===== Table rows =====
export interface TrendInfo {
  delta: number;
  status: "positive" | "neutral" | "warning";
}

export interface TableRow<T = Company> {
  key: string;
  label: string;
  get: (e: T) => string;
  numeric?: (e: T) => number;
  betterWhen?: "higher" | "lower";
  trend?: (e: T) => TrendInfo | null;
}

const intel = (c: Company, label: string) => c.intelligence.find((i) => i.label === label);

export const tableRows: TableRow<Company>[] = [
  { key: "founded", label: "Founded", get: (c) => String(c.founded), numeric: (c) => c.founded, betterWhen: "lower" },
  { key: "hq", label: "Headquarters", get: (c) => c.headquarters },
  { key: "industry", label: "Industry", get: (c) => c.industry },
  { key: "funding", label: "Total Funding", get: (c) => c.funding, numeric: (c) => c.fundingNumeric, betterWhen: "higher" },
  { key: "valuation", label: "Valuation", get: (c) => c.valuation, numeric: (c) => c.valuationNumeric, betterWhen: "higher" },
  { key: "revenue", label: "Revenue (est.)", get: (c) => c.revenue, numeric: (c) => c.revenueNumeric, betterWhen: "higher" },
  { key: "employees", label: "Employees", get: (c) => c.employees, numeric: (c) => c.employeesNumeric, betterWhen: "higher" },
  { key: "open_roles", label: "Open Roles", get: (c) => String(c.openRoles), numeric: (c) => c.openRoles, betterWhen: "higher" },
  { key: "product_count", label: "Product Count", get: (c) => String(c.productCount), numeric: (c) => c.productCount, betterWhen: "higher" },
  { key: "funding_rounds", label: "Funding Rounds", get: (c) => String(c.fundingRounds), numeric: (c) => c.fundingRounds, betterWhen: "higher" },
  { key: "last_round", label: "Last Funding Date", get: (c) => c.lastFundingDate },
  { key: "investors", label: "Investors on Cap Table", get: (c) => `${c.investors.length}`, numeric: (c) => c.investors.length, betterWhen: "higher" },
  // ===== Momentum signals (folded in from the old Market Intelligence section) =====
  {
    key: "fund_momentum",
    label: "Funding Momentum (12mo)",
    get: (c) => intel(c, "Funding Momentum")?.value ?? "—",
    numeric: (c) => intel(c, "Funding Momentum")?.delta ?? 0,
    betterWhen: "higher",
    trend: (c) => {
      const m = intel(c, "Funding Momentum");
      return m ? { delta: m.delta, status: m.status } : null;
    },
  },
  {
    key: "hiring_momentum",
    label: "Hiring Momentum",
    get: (c) => intel(c, "Hiring Momentum")?.value ?? "—",
    numeric: (c) => intel(c, "Hiring Momentum")?.delta ?? 0,
    betterWhen: "higher",
    trend: (c) => {
      const m = intel(c, "Hiring Momentum");
      return m ? { delta: m.delta, status: m.status } : null;
    },
  },
  {
    key: "product_launches",
    label: "Product Launches (2024)",
    get: (c) => intel(c, "Product Launches")?.value ?? "—",
    numeric: (c) => intel(c, "Product Launches")?.delta ?? 0,
    betterWhen: "higher",
    trend: (c) => {
      const m = intel(c, "Product Launches");
      return m ? { delta: m.delta, status: m.status } : null;
    },
  },
  {
    key: "investor_interest",
    label: "Investor Interest",
    get: (c) => intel(c, "Investor Interest")?.value ?? "—",
    numeric: (c) => intel(c, "Investor Interest")?.delta ?? 0,
    betterWhen: "higher",
    trend: (c) => {
      const m = intel(c, "Investor Interest");
      return m ? { delta: m.delta, status: m.status } : null;
    },
  },
  {
    key: "media_visibility",
    label: "Media Visibility",
    get: (c) => intel(c, "Media Visibility")?.value ?? "—",
    numeric: (c) => intel(c, "Media Visibility")?.delta ?? 0,
    betterWhen: "higher",
    trend: (c) => {
      const m = intel(c, "Media Visibility");
      return m ? { delta: m.delta, status: m.status } : null;
    },
  },
  {
    key: "market_growth",
    label: "Market Growth Grade",
    get: (c) => intel(c, "Market Growth")?.value ?? "—",
    numeric: (c) => intel(c, "Market Growth")?.delta ?? 0,
    betterWhen: "higher",
    trend: (c) => {
      const m = intel(c, "Market Growth");
      return m ? { delta: m.delta, status: m.status } : null;
    },
  },
  { key: "market", label: "Market Category", get: (c) => c.marketCategory },
  { key: "website", label: "Website", get: (c) => c.website },
];

export const relatedStartups = [
  { name: "Mistral AI", category: "Foundation Models", funding: "$1.04B", hq: "Paris, FR" },
  { name: "Cohere", category: "Enterprise LLMs", funding: "$970M", hq: "Toronto, CA" },
  { name: "xAI", category: "Foundation Models", funding: "$12B", hq: "Palo Alto, USA" },
  { name: "Together AI", category: "AI Infrastructure", funding: "$229M", hq: "San Francisco, USA" },
  { name: "Glean", category: "Enterprise Search", funding: "$615M", hq: "Palo Alto, USA" },
  { name: "Harvey", category: "Vertical AI — Legal", funding: "$206M", hq: "San Francisco, USA" },
];

export const marketReports = [
  { title: "State of Generative AI 2025", source: "GraphOne Research", date: "Mar 2025", pages: 142 },
  { title: "AI Coding Tools Market Map", source: "GraphOne Intelligence", date: "Feb 2025", pages: 38 },
  { title: "Foundation Model Pricing Trends", source: "GraphOne Analyst Note", date: "Jan 2025", pages: 22 },
  { title: "Enterprise LLM Adoption Survey", source: "GraphOne Data", date: "Dec 2024", pages: 64 },
];

// =====================================================================
// ===== INVESTORS =====================================================
// =====================================================================
export interface Investor {
  id: string;
  name: string;
  monogram: string;
  logoColor: string;
  category: string;
  headquarters: string;
  founded: number;
  aum: string;
  aumNumeric: number;
  dryPowder: string;
  stageFocus: string;
  sectorFocus: string[];
  portfolioSize: number;
  unicorns: number;
  aiDeals12mo: number;
  medianCheck: string;
  medianCheckNumeric: number;
  leadPct: number;
  notableExits: string[];
  notableInvestments: string[];
  recentDeals: { date: string; company: string; stage: string; amount: string }[];
  coInvestors: string[];
}

export const investors: Investor[] = [
  {
    id: "sequoia",
    name: "Sequoia Capital",
    monogram: "SQ",
    logoColor: "oklch(0.62 0.2 25)",
    category: "Multi-stage Venture",
    headquarters: "Menlo Park, USA",
    founded: 1972,
    aum: "$85B",
    aumNumeric: 85000,
    dryPowder: "$12B",
    stageFocus: "Seed → Growth",
    sectorFocus: ["Foundation Models", "AI Infrastructure", "Enterprise AI", "Consumer AI"],
    portfolioSize: 1450,
    unicorns: 78,
    aiDeals12mo: 34,
    medianCheck: "$18M",
    medianCheckNumeric: 18,
    leadPct: 62,
    notableExits: ["NVIDIA", "Stripe (sec.)", "WhatsApp", "YouTube"],
    notableInvestments: ["OpenAI", "Hugging Face", "Glean", "Harvey"],
    recentDeals: [
      { date: "Feb 2025", company: "Glean", stage: "Series E", amount: "$260M" },
      { date: "Jan 2025", company: "Harvey", stage: "Series D", amount: "$300M" },
      { date: "Nov 2024", company: "Hugging Face", stage: "Series D ext.", amount: "$235M" },
    ],
    coInvestors: ["a16z", "Thrive", "Founders Fund", "Lightspeed", "Bessemer"],
  },
  {
    id: "a16z",
    name: "Andreessen Horowitz",
    monogram: "A16",
    logoColor: "oklch(0.65 0.18 250)",
    category: "Multi-stage Venture",
    headquarters: "Menlo Park, USA",
    founded: 2009,
    aum: "$44B",
    aumNumeric: 44000,
    dryPowder: "$9B",
    stageFocus: "Seed → Growth",
    sectorFocus: ["Foundation Models", "AI Apps", "Crypto", "Bio + AI"],
    portfolioSize: 920,
    unicorns: 54,
    aiDeals12mo: 41,
    medianCheck: "$14M",
    medianCheckNumeric: 14,
    leadPct: 58,
    notableExits: ["GitHub", "Coinbase", "Lyft", "Okta"],
    notableInvestments: ["Mistral", "Character.AI", "Cursor", "ElevenLabs"],
    recentDeals: [
      { date: "Mar 2025", company: "ElevenLabs", stage: "Series C", amount: "$180M" },
      { date: "Dec 2024", company: "Cursor", stage: "Series B", amount: "$100M" },
      { date: "Oct 2024", company: "Mistral", stage: "Series B", amount: "$640M" },
    ],
    coInvestors: ["Sequoia", "Thrive", "Lightspeed", "Index", "General Catalyst"],
  },
  {
    id: "thrive",
    name: "Thrive Capital",
    monogram: "TH",
    logoColor: "oklch(0.66 0.16 145)",
    category: "Growth-stage Venture",
    headquarters: "New York, USA",
    founded: 2010,
    aum: "$25B",
    aumNumeric: 25000,
    dryPowder: "$6B",
    stageFocus: "Series B → Pre-IPO",
    sectorFocus: ["Foundation Models", "Developer Tools", "Fintech AI"],
    portfolioSize: 320,
    unicorns: 42,
    aiDeals12mo: 22,
    medianCheck: "$45M",
    medianCheckNumeric: 45,
    leadPct: 71,
    notableExits: ["Instagram", "Spotify (sec.)", "Slack", "Robinhood"],
    notableInvestments: ["OpenAI", "Cursor", "Stripe", "Ramp"],
    recentDeals: [
      { date: "Oct 2024", company: "OpenAI", stage: "Series", amount: "$1.2B" },
      { date: "Dec 2024", company: "Cursor", stage: "Series B", amount: "$60M" },
      { date: "Sep 2024", company: "Ramp", stage: "Series D-2", amount: "$150M" },
    ],
    coInvestors: ["Sequoia", "a16z", "Founders Fund", "Khosla"],
  },
  {
    id: "foundersfund",
    name: "Founders Fund",
    monogram: "FF",
    logoColor: "oklch(0.58 0.14 290)",
    category: "Multi-stage Venture",
    headquarters: "San Francisco, USA",
    founded: 2005,
    aum: "$19B",
    aumNumeric: 19000,
    dryPowder: "$5B",
    stageFocus: "Seed → Growth",
    sectorFocus: ["Frontier Tech", "Defense AI", "Foundation Models"],
    portfolioSize: 480,
    unicorns: 38,
    aiDeals12mo: 18,
    medianCheck: "$22M",
    medianCheckNumeric: 22,
    leadPct: 64,
    notableExits: ["Palantir", "SpaceX (sec.)", "Stripe (sec.)", "Airbnb"],
    notableInvestments: ["OpenAI", "Anduril", "Scale AI", "Ramp"],
    recentDeals: [
      { date: "Feb 2025", company: "Anduril", stage: "Series F", amount: "$1.5B" },
      { date: "Jan 2025", company: "Scale AI", stage: "Series F ext.", amount: "$400M" },
      { date: "Nov 2024", company: "Ramp", stage: "Series D-2", amount: "$50M" },
    ],
    coInvestors: ["Sequoia", "Thrive", "a16z", "Khosla", "Lux"],
  },
];

export const investorsById: Record<string, Investor> = Object.fromEntries(investors.map((i) => [i.id, i]));

export const investorCards: EntityCardLike[] = investors.map((i) => ({
  id: i.id,
  name: i.name,
  monogram: i.monogram,
  logoColor: i.logoColor,
  category: i.category,
  subtitle: i.headquarters,
  primaryMetricLabel: "AUM",
  primaryMetricValue: i.aum,
  secondaryMetricLabel: "Portfolio",
  secondaryMetricValue: String(i.portfolioSize),
}));

export const investorTableRows: TableRow<Investor>[] = [
  { key: "founded", label: "Founded", get: (i) => String(i.founded), numeric: (i) => i.founded, betterWhen: "lower" },
  { key: "hq", label: "Headquarters", get: (i) => i.headquarters },
  { key: "stage", label: "Stage Focus", get: (i) => i.stageFocus },
  { key: "sectors", label: "Sector Focus", get: (i) => i.sectorFocus.join(", ") },
  { key: "aum", label: "Assets Under Management", get: (i) => i.aum, numeric: (i) => i.aumNumeric, betterWhen: "higher" },
  { key: "dry", label: "Dry Powder", get: (i) => i.dryPowder },
  { key: "portfolio", label: "Portfolio Companies", get: (i) => String(i.portfolioSize), numeric: (i) => i.portfolioSize, betterWhen: "higher" },
  { key: "unicorns", label: "Unicorns in Portfolio", get: (i) => String(i.unicorns), numeric: (i) => i.unicorns, betterWhen: "higher" },
  { key: "ai_deals", label: "AI Deals (12mo)", get: (i) => String(i.aiDeals12mo), numeric: (i) => i.aiDeals12mo, betterWhen: "higher" },
  { key: "median_check", label: "Median Check Size", get: (i) => i.medianCheck, numeric: (i) => i.medianCheckNumeric, betterWhen: "higher" },
  { key: "lead_pct", label: "Lead Rate", get: (i) => `${i.leadPct}%`, numeric: (i) => i.leadPct, betterWhen: "higher" },
  { key: "exits", label: "Notable Exits", get: (i) => i.notableExits.join(", ") },
];

// =====================================================================
// ===== FOUNDERS ======================================================
// =====================================================================
export interface Founder {
  id: string;
  name: string;
  monogram: string;
  logoColor: string;
  currentRole: string;
  currentCompany: string;
  headquarters: string;
  companiesFounded: number;
  totalRaised: string;
  totalRaisedNumeric: number;
  exits: number;
  yearsOperating: number;
  education: string;
  background: string;
  previousCompanies: string[];
  social: { platform: string; handle: string }[];
  notableWork: string[];
  recentPress: { date: string; source: string; title: string }[];
}

export const founders: Founder[] = [
  {
    id: "altman",
    name: "Sam Altman",
    monogram: "SA",
    logoColor: "oklch(0.7 0.15 162)",
    currentRole: "Chief Executive Officer",
    currentCompany: "OpenAI",
    headquarters: "San Francisco, USA",
    companiesFounded: 3,
    totalRaised: "$24.8B",
    totalRaisedNumeric: 24800,
    exits: 1,
    yearsOperating: 20,
    education: "Stanford (CS, did not finish)",
    background:
      "Operator-investor with deep ties across consumer and infrastructure AI. Scaled YC from 75 to 1,900 funded startups before leading OpenAI to a $157B platform.",
    previousCompanies: ["Y Combinator", "Loopt", "Worldcoin"],
    social: [
      { platform: "X", handle: "@sama" },
      { platform: "LinkedIn", handle: "/in/samaltman" },
    ],
    notableWork: ["Founded Loopt (acquired by Green Dot, $43M)", "President of Y Combinator 2014–2019", "Co-founded OpenAI (2015)"],
    recentPress: [
      { date: "Mar 18, 2025", source: "Bloomberg", title: "Altman closes $40B OpenAI round at $300B valuation" },
      { date: "Feb 02, 2025", source: "The Information", title: "Altman and Jony Ive partner on AI hardware" },
    ],
  },
  {
    id: "amodei",
    name: "Dario Amodei",
    monogram: "DA",
    logoColor: "oklch(0.7 0.19 22)",
    currentRole: "Chief Executive Officer",
    currentCompany: "Anthropic",
    headquarters: "San Francisco, USA",
    companiesFounded: 1,
    totalRaised: "$13.7B",
    totalRaisedNumeric: 13700,
    exits: 0,
    yearsOperating: 12,
    education: "Princeton (PhD Biophysics), Stanford (Physics)",
    background:
      "Former VP of Research at OpenAI; led GPT-2 and GPT-3 research. Co-authored foundational scaling-laws work. Built Anthropic into the #2 frontier lab in under 4 years.",
    previousCompanies: ["OpenAI", "Google Brain", "Baidu"],
    social: [{ platform: "X", handle: "@DarioAmodei" }],
    notableWork: ["Co-authored GPT-3 paper", "Founded Anthropic (2021)", "Claude 3 / 3.5 / 3.7 release lead"],
    recentPress: [
      { date: "Feb 24, 2025", source: "The Verge", title: "Amodei unveils Claude 3.7 with extended thinking" },
      { date: "Jan 08, 2025", source: "Bloomberg", title: "Anthropic in talks at $60B led by Amodei" },
    ],
  },
  {
    id: "srinivas",
    name: "Aravind Srinivas",
    monogram: "AS",
    logoColor: "oklch(0.62 0.19 259)",
    currentRole: "Chief Executive Officer",
    currentCompany: "Perplexity",
    headquarters: "San Francisco, USA",
    companiesFounded: 1,
    totalRaised: "$1.04B",
    totalRaisedNumeric: 1040,
    exits: 0,
    yearsOperating: 6,
    education: "UC Berkeley (PhD CS), IIT Madras",
    background:
      "Former research scientist at OpenAI, Google and DeepMind working on RLHF and retrieval. Scaled Perplexity from 0 to 20M weekly users in under 3 years.",
    previousCompanies: ["OpenAI", "Google", "DeepMind"],
    social: [{ platform: "X", handle: "@AravSrinivas" }],
    notableWork: ["Founded Perplexity (2022)", "Launched Perplexity Pages", "Shipped Comet agentic browser"],
    recentPress: [
      { date: "Mar 04, 2025", source: "TechCrunch", title: "Srinivas launches Comet, the agentic browser" },
      { date: "Dec 19, 2024", source: "Bloomberg", title: "Perplexity hits $9B led by Srinivas" },
    ],
  },
  {
    id: "truell",
    name: "Michael Truell",
    monogram: "MT",
    logoColor: "oklch(0.76 0.16 70)",
    currentRole: "Chief Executive Officer",
    currentCompany: "Cursor (Anysphere)",
    headquarters: "San Francisco, USA",
    companiesFounded: 1,
    totalRaised: "$173M",
    totalRaisedNumeric: 173,
    exits: 0,
    yearsOperating: 3,
    education: "MIT (Mathematics & CS)",
    background:
      "MIT mathematician turned founder. Built Cursor with three classmates after seeing GitHub Copilot's limits — took it to $100M ARR in under two years.",
    previousCompanies: ["Google (intern)", "Anysphere"],
    social: [{ platform: "X", handle: "@mntruell" }],
    notableWork: ["Founded Anysphere / Cursor (2022)", "Shipped Cursor Composer + Tab model"],
    recentPress: [
      { date: "Feb 28, 2025", source: "TechCrunch", title: "Truell's Cursor crosses $100M ARR" },
      { date: "Dec 11, 2024", source: "Forbes", title: "Anysphere raises $100M at $2.6B" },
    ],
  },
];

export const foundersById: Record<string, Founder> = Object.fromEntries(founders.map((f) => [f.id, f]));

export const founderCards: EntityCardLike[] = founders.map((f) => ({
  id: f.id,
  name: f.name,
  monogram: f.monogram,
  logoColor: f.logoColor,
  category: `${f.currentRole}, ${f.currentCompany}`,
  subtitle: f.headquarters,
  primaryMetricLabel: "Raised",
  primaryMetricValue: f.totalRaised,
  secondaryMetricLabel: "Years",
  secondaryMetricValue: String(f.yearsOperating),
}));

export const founderTableRows: TableRow<Founder>[] = [
  { key: "role", label: "Current Role", get: (f) => `${f.currentRole}, ${f.currentCompany}` },
  { key: "hq", label: "Based In", get: (f) => f.headquarters },
  { key: "companies", label: "Companies Founded", get: (f) => String(f.companiesFounded), numeric: (f) => f.companiesFounded, betterWhen: "higher" },
  { key: "raised", label: "Total Capital Raised", get: (f) => f.totalRaised, numeric: (f) => f.totalRaisedNumeric, betterWhen: "higher" },
  { key: "exits", label: "Realized Exits", get: (f) => String(f.exits), numeric: (f) => f.exits, betterWhen: "higher" },
  { key: "years", label: "Years Operating", get: (f) => `${f.yearsOperating} yrs`, numeric: (f) => f.yearsOperating, betterWhen: "higher" },
  { key: "edu", label: "Education", get: (f) => f.education },
  { key: "prev", label: "Previous Companies", get: (f) => f.previousCompanies.join(", ") },
];

// =====================================================================
// ===== PRODUCTS ======================================================
// =====================================================================
export interface Product {
  id: string;
  name: string;
  monogram: string;
  logoColor: string;
  category: string;
  company: string;
  launched: string;
  pricingTier: string;
  pricingStarts: string;
  pricingStartsNumeric: number;
  freeTier: boolean;
  apiAvailable: boolean;
  soc2: boolean;
  contextWindow: string;
  contextWindowNumeric: number;
  mau: string;
  mauNumeric: number;
  githubStars: string;
  integrations: number;
  npsScore: number;
  latestVersion: string;
  releaseNotes: { date: string; version: string; title: string }[];
  alternatives: string[];
}

export const products: Product[] = [
  {
    id: "chatgpt",
    name: "ChatGPT",
    monogram: "GPT",
    logoColor: "oklch(0.7 0.15 162)",
    category: "Conversational AI Assistant",
    company: "OpenAI",
    launched: "Nov 2022",
    pricingTier: "Free / Plus / Pro / Team / Enterprise",
    pricingStarts: "$20/mo",
    pricingStartsNumeric: 20,
    freeTier: true,
    apiAvailable: true,
    soc2: true,
    contextWindow: "128K tokens",
    contextWindowNumeric: 128,
    mau: "400M",
    mauNumeric: 400000000,
    githubStars: "—",
    integrations: 1200,
    npsScore: 64,
    latestVersion: "GPT-4o / o3",
    releaseNotes: [
      { date: "Mar 12, 2025", version: "o3-mini high", title: "Reasoning model with tools enabled by default" },
      { date: "Jan 24, 2025", version: "Operator", title: "Agentic browsing for Pro subscribers" },
      { date: "Dec 12, 2024", version: "Sora", title: "Video generation in ChatGPT Pro" },
    ],
    alternatives: ["Claude", "Gemini", "Perplexity", "Meta AI"],
  },
  {
    id: "claude",
    name: "Claude",
    monogram: "CL",
    logoColor: "oklch(0.7 0.19 22)",
    category: "Conversational AI Assistant",
    company: "Anthropic",
    launched: "Mar 2023",
    pricingTier: "Free / Pro / Team / Enterprise",
    pricingStarts: "$20/mo",
    pricingStartsNumeric: 20,
    freeTier: true,
    apiAvailable: true,
    soc2: true,
    contextWindow: "200K tokens",
    contextWindowNumeric: 200,
    mau: "30M",
    mauNumeric: 30000000,
    githubStars: "—",
    integrations: 480,
    npsScore: 71,
    latestVersion: "Claude 3.7 Sonnet",
    releaseNotes: [
      { date: "Feb 24, 2025", version: "3.7 Sonnet", title: "Extended thinking with controllable budgets" },
      { date: "Oct 22, 2024", version: "Computer Use", title: "Beta agent capability for desktop tasks" },
      { date: "Jun 20, 2024", version: "Claude 3.5", title: "Sonnet leapfrogs GPT-4o on coding benchmarks" },
    ],
    alternatives: ["ChatGPT", "Gemini", "Mistral", "Llama"],
  },
  {
    id: "perplexity-p",
    name: "Perplexity",
    monogram: "PX",
    logoColor: "oklch(0.62 0.19 259)",
    category: "AI Answer Engine",
    company: "Perplexity",
    launched: "Aug 2022",
    pricingTier: "Free / Pro / Enterprise",
    pricingStarts: "$20/mo",
    pricingStartsNumeric: 20,
    freeTier: true,
    apiAvailable: true,
    soc2: true,
    contextWindow: "32K tokens",
    contextWindowNumeric: 32,
    mau: "20M",
    mauNumeric: 20000000,
    githubStars: "—",
    integrations: 90,
    npsScore: 58,
    latestVersion: "Comet / Sonar Pro",
    releaseNotes: [
      { date: "Mar 04, 2025", version: "Comet", title: "Agentic research browser launches in beta" },
      { date: "Nov 12, 2024", version: "Shopping", title: "One-click checkout from answers" },
      { date: "May 30, 2024", version: "Pages", title: "Citation-first long-form publishing" },
    ],
    alternatives: ["ChatGPT Search", "You.com", "Google AI Overviews", "Phind"],
  },
  {
    id: "cursor-p",
    name: "Cursor",
    monogram: "CR",
    logoColor: "oklch(0.76 0.16 70)",
    category: "AI Code Editor",
    company: "Anysphere",
    launched: "Mar 2023",
    pricingTier: "Free / Pro / Business",
    pricingStarts: "$20/mo",
    pricingStartsNumeric: 20,
    freeTier: true,
    apiAvailable: false,
    soc2: true,
    contextWindow: "Composer (multi-file)",
    contextWindowNumeric: 1000,
    mau: "1.2M",
    mauNumeric: 1200000,
    githubStars: "28k",
    integrations: 40,
    npsScore: 76,
    latestVersion: "0.46 (Composer)",
    releaseNotes: [
      { date: "Feb 18, 2025", version: "0.46", title: "Agentic Composer with full repo edits" },
      { date: "Dec 02, 2024", version: "0.43", title: "Tab model rewrite, 2× faster suggestions" },
      { date: "Aug 21, 2024", version: "0.40", title: "Multi-file Cmd-K refactors" },
    ],
    alternatives: ["GitHub Copilot", "Windsurf", "Continue.dev", "Cody"],
  },
];

export const productsById: Record<string, Product> = Object.fromEntries(products.map((p) => [p.id, p]));

export const productCards: EntityCardLike[] = products.map((p) => ({
  id: p.id,
  name: p.name,
  monogram: p.monogram,
  logoColor: p.logoColor,
  category: p.category,
  subtitle: `by ${p.company}`,
  primaryMetricLabel: "MAU",
  primaryMetricValue: p.mau,
  secondaryMetricLabel: "From",
  secondaryMetricValue: p.pricingStarts,
}));

const yesNo = (b: boolean) => (b ? "Yes" : "No");
export const productTableRows: TableRow<Product>[] = [
  { key: "company", label: "Maker", get: (p) => p.company },
  { key: "launched", label: "Launched", get: (p) => p.launched },
  { key: "category", label: "Category", get: (p) => p.category },
  { key: "version", label: "Latest Version", get: (p) => p.latestVersion },
  { key: "pricing_tier", label: "Pricing Tiers", get: (p) => p.pricingTier },
  { key: "price", label: "Paid Plan From", get: (p) => p.pricingStarts, numeric: (p) => p.pricingStartsNumeric, betterWhen: "lower" },
  { key: "free", label: "Free Tier", get: (p) => yesNo(p.freeTier), numeric: (p) => (p.freeTier ? 1 : 0), betterWhen: "higher" },
  { key: "api", label: "Public API", get: (p) => yesNo(p.apiAvailable), numeric: (p) => (p.apiAvailable ? 1 : 0), betterWhen: "higher" },
  { key: "soc2", label: "SOC 2 Compliant", get: (p) => yesNo(p.soc2), numeric: (p) => (p.soc2 ? 1 : 0), betterWhen: "higher" },
  { key: "context", label: "Context Window", get: (p) => p.contextWindow, numeric: (p) => p.contextWindowNumeric, betterWhen: "higher" },
  { key: "mau", label: "Monthly Active Users", get: (p) => p.mau, numeric: (p) => p.mauNumeric, betterWhen: "higher" },
  { key: "integrations", label: "Integrations", get: (p) => String(p.integrations), numeric: (p) => p.integrations, betterWhen: "higher" },
  { key: "nps", label: "User NPS", get: (p) => String(p.npsScore), numeric: (p) => p.npsScore, betterWhen: "higher" },
];

