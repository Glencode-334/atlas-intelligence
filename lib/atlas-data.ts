// Editorial data for Atlas Intelligence — believable AI ecosystem content.

export type Momentum = "Breakout" | "Heating up" | "Steady" | "Watch";

export const categories = [
  { name: "AI Agents", count: 2840, growth: "+74%", notable: "OpenAI, Adept, Cognition", momentum: "Breakout" as Momentum, icon: "Bot" },
  { name: "Foundation Models", count: 142, growth: "+38%", notable: "OpenAI, Anthropic, Mistral", momentum: "Heating up" as Momentum, icon: "Brain" },
  { name: "AI Infrastructure", count: 1240, growth: "+46%", notable: "CoreWeave, Modal, Together", momentum: "Heating up" as Momentum, icon: "Server" },
  { name: "AI Coding", count: 1062, growth: "+91%", notable: "Cursor, Cognition, Magic", momentum: "Breakout" as Momentum, icon: "Code2" },
  { name: "AI Video", count: 480, growth: "+52%", notable: "Runway, Pika, Luma", momentum: "Breakout" as Momentum, icon: "Film" },
  { name: "AI Voice", count: 612, growth: "+41%", notable: "ElevenLabs, Cartesia, Sesame", momentum: "Heating up" as Momentum, icon: "Mic" },
  { name: "AI Search", count: 318, growth: "+29%", notable: "Perplexity, Exa, You.com", momentum: "Steady" as Momentum, icon: "Search" },
  { name: "AI Healthcare", count: 2150, growth: "+27%", notable: "Abridge, Hippocratic, OpenEvidence", momentum: "Steady" as Momentum, icon: "HeartPulse" },
  { name: "AI Robotics", count: 720, growth: "+58%", notable: "Figure, Physical Intelligence, Skild", momentum: "Heating up" as Momentum, icon: "Cpu" },
  { name: "AI Security", count: 910, growth: "+33%", notable: "Protect AI, Lakera, HiddenLayer", momentum: "Steady" as Momentum, icon: "ShieldCheck" },
  { name: "AI Legal", count: 264, growth: "+44%", notable: "Harvey, EvenUp, Eve", momentum: "Heating up" as Momentum, icon: "Scale" },
  { name: "AI Finance", count: 540, growth: "+31%", notable: "Hebbia, Rogo, Linq", momentum: "Steady" as Momentum, icon: "LineChart" },
  { name: "AI Research", count: 188, growth: "+22%", notable: "Elicit, Consensus, Scite", momentum: "Watch" as Momentum, icon: "Microscope" },
  { name: "Open Source AI", count: 1620, growth: "+63%", notable: "Hugging Face, Mistral, Nous", momentum: "Heating up" as Momentum, icon: "GitBranch" },
  { name: "Synthetic Media", count: 392, growth: "+36%", notable: "Synthesia, HeyGen, Captions", momentum: "Steady" as Momentum, icon: "Sparkles" },
  { name: "Enterprise AI", count: 1980, growth: "+48%", notable: "Glean, Writer, Sierra", momentum: "Heating up" as Momentum, icon: "Building2" },
];

export const trendingStartups = [
  {
    initials: "OA", name: "OpenAI", category: "Foundation Models", color: "oklch(0.78 0.16 145)",
    tagline: "Frontier reasoning models, ChatGPT, and the GPT API.",
    stage: "Late stage", hq: "San Francisco, US", funding: "$57.9B", growth: "+44%", employees: "1,700",
    momentum: "Breakout" as Momentum,
    investors: ["Microsoft", "Thrive", "Sequoia", "Khosla"],
  },
  {
    initials: "An", name: "Anthropic", category: "Foundation Models", color: "oklch(0.82 0.13 60)",
    tagline: "Claude — safety-first frontier models for the enterprise.",
    stage: "Late stage", hq: "San Francisco, US", funding: "$14.4B", growth: "+58%", employees: "950",
    momentum: "Breakout" as Momentum,
    investors: ["Google", "Amazon", "Spark", "Lightspeed"],
  },
  {
    initials: "Px", name: "Perplexity", category: "AI Search", color: "oklch(0.78 0.12 200)",
    tagline: "Conversational answer engine for daily research.",
    stage: "Series C", hq: "San Francisco, US", funding: "$500M", growth: "+212%", employees: "180",
    momentum: "Breakout" as Momentum,
    investors: ["IVP", "NEA", "Nvidia", "Bezos Expeditions"],
  },
  {
    initials: "Cu", name: "Cursor", category: "AI Coding", color: "oklch(0.78 0.14 280)",
    tagline: "The AI-first code editor loved by senior engineers.",
    stage: "Series B", hq: "San Francisco, US", funding: "$175M", growth: "+440%", employees: "60",
    momentum: "Breakout" as Momentum,
    investors: ["Thrive", "a16z", "Benchmark", "OpenAI Startup Fund"],
  },
  {
    initials: "El", name: "ElevenLabs", category: "AI Voice", color: "oklch(0.78 0.12 30)",
    tagline: "Studio-grade voice synthesis, dubbing, and agents.",
    stage: "Series C", hq: "London, UK", funding: "$281M", growth: "+138%", employees: "225",
    momentum: "Breakout" as Momentum,
    investors: ["a16z", "ICONIQ", "Sequoia", "NEA"],
  },
  {
    initials: "Mi", name: "Mistral", category: "Open Source AI", color: "oklch(0.78 0.13 18)",
    tagline: "Open-weight models for builders who need full control.",
    stage: "Series B", hq: "Paris, FR", funding: "$1.2B", growth: "+106%", employees: "140",
    momentum: "Heating up" as Momentum,
    investors: ["General Catalyst", "a16z", "Lightspeed", "Bpifrance"],
  },
  {
    initials: "Mj", name: "Midjourney", category: "Synthetic Media", color: "oklch(0.78 0.14 320)",
    tagline: "Aesthetic-first image and video model for creators.",
    stage: "Bootstrapped", hq: "San Francisco, US", funding: "Self-funded", growth: "+62%", employees: "60",
    momentum: "Heating up" as Momentum,
    investors: ["—"],
  },
  {
    initials: "Sc", name: "Scale AI", category: "AI Infrastructure", color: "oklch(0.78 0.12 230)",
    tagline: "Data foundry powering frontier labs and the US DoD.",
    stage: "Late stage", hq: "San Francisco, US", funding: "$1.6B", growth: "+34%", employees: "900",
    momentum: "Heating up" as Momentum,
    investors: ["Accel", "Index", "Founders Fund", "Tiger Global"],
  },
  {
    initials: "Ru", name: "Runway", category: "AI Video", color: "oklch(0.78 0.13 350)",
    tagline: "Gen-4 video models shipping in real production pipelines.",
    stage: "Series D", hq: "New York, US", funding: "$545M", growth: "+88%", employees: "200",
    momentum: "Breakout" as Momentum,
    investors: ["Google", "Nvidia", "Salesforce", "Coatue"],
  },
];

export const recentFunding = [
  { company: "Cursor", category: "AI Coding", amount: "$900M", round: "Series C", date: "Jun 6", lead: "Thrive Capital", valuation: "$9.9B", note: "Largest pure-AI coding round to date." },
  { company: "Sierra", category: "Enterprise AI", amount: "$350M", round: "Series C", date: "Jun 4", lead: "Greenoaks", valuation: "$4.5B", note: "Bret Taylor's agent platform doubles in 6 months." },
  { company: "Cognition", category: "AI Agents", amount: "$175M", round: "Series A2", date: "Jun 3", lead: "Founders Fund", valuation: "$2.0B", note: "Devin pushes into Fortune 500 dev orgs." },
  { company: "Figure", category: "AI Robotics", amount: "$675M", round: "Series B", date: "May 30", lead: "Microsoft", valuation: "$2.6B", note: "Humanoid pilots ship inside BMW plants." },
  { company: "Harvey", category: "AI Legal", amount: "$300M", round: "Series D", date: "May 28", lead: "Sequoia", valuation: "$3.0B", note: "Now used by 235 of the AmLaw 500." },
  { company: "Glean", category: "Enterprise AI", amount: "$260M", round: "Series E", date: "May 24", lead: "Altimeter", valuation: "$4.6B", note: "Workplace search becomes the agent runtime." },
];

// Editorial brief — replaces the dashboard-style "Market at a glance" block.
export const intelligenceBrief = [
  { stat: "3.2×", tag: "Funding", text: "AI coding startups raised 3.2× more capital this quarter vs. last — Cursor, Cognition and Magic absorbed two-thirds of it." },
  { stat: "42%", tag: "Series A", text: "Enterprise AI copilots account for 42% of all Series A rounds closed YTD, the largest single-sector share since 2021." },
  { stat: "+31%", tag: "Open source", text: "Investor participation in open-source AI rounds is up 31% — Mistral, Nous and Black Forest Labs lead the wave." },
  { stat: "+41%", tag: "Talent", text: "Voice AI is the fastest-growing hiring category, led by ElevenLabs, Cartesia and Sesame doubling research headcount." },
  { stat: "$118B", tag: "Capital", text: "AI infrastructure remains the largest funding category by total capital deployed YTD — driven by Nvidia-adjacent compute rounds." },
  { stat: "11", tag: "M&A", text: "Eleven notable AI talent or technology acquisitions closed in the last 90 days — Microsoft, Google and Amazon led activity." },
];

export const insights = [
  { stat: "3.2x", text: "AI coding startups grew funding 3.2× quarter over quarter — the fastest-moving sub-sector.", tag: "Funding" },
  { stat: "+41%", text: "Voice AI hiring increased 41% YoY, led by ElevenLabs, Cartesia and Sesame.", tag: "Talent" },
  { stat: "62%", text: "62% of new Series B rounds in May went to enterprise copilots and vertical agents.", tag: "Stage" },
  { stat: "+118%", text: "Open-source model downloads on Hugging Face are up 118% since January.", tag: "Open source" },
];

export const reports = [
  { title: "State of AI Agents 2026", category: "Research · Trending", pages: 92, date: "Jun 2026", author: "Atlas Research Desk", readTime: "18 min read", downloads: "24.1k", image: "agents" as const, tone: "pink" as const, featured: false },
  { title: "Top 100 AI Startups of 2026", category: "Rankings", pages: 64, date: "Q2 2026", author: "Editorial Team", readTime: "12 min read", downloads: "41.6k", image: "top100" as const, tone: "orange" as const, featured: false },
  { title: "AI Hiring Trends — Q2 2026", category: "Talent", pages: 48, date: "Jun 2026", author: "People & Talent Desk", readTime: "9 min read", downloads: "8.3k", image: "hiring" as const, tone: "blue" as const, featured: false },
  { title: "The AI Funding Report — H1 2026", category: "Flagship", pages: 132, date: "Jul 2026", author: "Atlas Research Desk", readTime: "26 min read", downloads: "62.4k", image: "funding" as const, tone: "pink" as const, featured: true },
  { title: "The AI Agent Landscape", category: "Landscape", pages: 56, date: "May 2026", author: "Sector Research", readTime: "11 min read", downloads: "19.7k", image: "landscape" as const, tone: "teal" as const, featured: false },
];

export const watchlistStats = [
  { label: "Tracked startups", value: "26,482", note: "Across 16 active sectors" },
  { label: "Funding tracked YTD", value: "$612B", note: "Across 4,180 rounds" },
  { label: "Active investors", value: "12,840", note: "VCs, corporates & angels" },
  { label: "Open AI roles", value: "48,920", note: "From 3,200 hiring companies" },
];

// Investor intelligence
export const investors = [
  {
    name: "Andreessen Horowitz", short: "a16z", initials: "a16",
    color: "oklch(0.78 0.14 18)",
    deals: 124, dealsYtd: 38, aum: "$45B",
    sectors: ["AI Agents", "AI Infrastructure", "Developer Tools"],
    recent: ["Cursor", "Harvey", "Character AI"],
    momentum: "Breakout" as Momentum,
    note: "Largest cheque writer into agent and dev-tool layers YTD.",
  },
  {
    name: "Sequoia Capital", short: "Sequoia", initials: "Sq",
    color: "oklch(0.78 0.13 35)",
    deals: 96, dealsYtd: 29, aum: "$85B",
    sectors: ["Foundation Models", "AI Legal", "Enterprise AI"],
    recent: ["Harvey", "ElevenLabs", "OpenAI"],
    momentum: "Heating up" as Momentum,
    note: "Doubled down on vertical agents — Harvey, Sierra, Hebbia.",
  },
  {
    name: "Accel", short: "Accel", initials: "Ac",
    color: "oklch(0.78 0.12 240)",
    deals: 71, dealsYtd: 22, aum: "$32B",
    sectors: ["Enterprise AI", "AI Security", "AI Infrastructure"],
    recent: ["Scale AI", "Synthesia", "Browserbase"],
    momentum: "Steady" as Momentum,
    note: "European AI leadership: Synthesia, ElevenLabs, Hugging Face.",
  },
  {
    name: "Lightspeed", short: "Lightspeed", initials: "Ls",
    color: "oklch(0.74 0.13 285)",
    deals: 64, dealsYtd: 19, aum: "$25B",
    sectors: ["Open Source AI", "Foundation Models", "AI Voice"],
    recent: ["Mistral", "Anthropic", "Stability"],
    momentum: "Heating up" as Momentum,
    note: "Biggest non-US backer of open-weight model labs.",
  },
  {
    name: "General Catalyst", short: "GC", initials: "GC",
    color: "oklch(0.78 0.12 165)",
    deals: 58, dealsYtd: 17, aum: "$30B",
    sectors: ["AI Healthcare", "Enterprise AI", "AI Agents"],
    recent: ["Mistral", "Hippocratic AI", "Glean"],
    momentum: "Heating up" as Momentum,
    note: "Health-system buyouts feed direct AI distribution.",
  },
  {
    name: "Coatue", short: "Coatue", initials: "Co",
    color: "oklch(0.74 0.12 220)",
    deals: 49, dealsYtd: 14, aum: "$70B",
    sectors: ["Foundation Models", "AI Infrastructure", "AI Video"],
    recent: ["Runway", "Lambda", "Hugging Face"],
    momentum: "Steady" as Momentum,
    note: "Lead investor in three of the five largest infra rounds YTD.",
  },
  {
    name: "Thrive Capital", short: "Thrive", initials: "Th",
    color: "oklch(0.78 0.14 350)",
    deals: 38, dealsYtd: 16, aum: "$15B",
    sectors: ["Foundation Models", "AI Coding", "AI Agents"],
    recent: ["OpenAI", "Cursor", "Cognition"],
    momentum: "Breakout" as Momentum,
    note: "Highest deal velocity at $1B+ valuations in the cohort.",
  },
  {
    name: "Founders Fund", short: "Founders Fund", initials: "FF",
    color: "oklch(0.7 0.14 30)",
    deals: 42, dealsYtd: 13, aum: "$18B",
    sectors: ["AI Agents", "AI Robotics", "Defense AI"],
    recent: ["Cognition", "Anduril", "Physical Intelligence"],
    momentum: "Heating up" as Momentum,
    note: "Concentrated bets in autonomy, defense and physical AI.",
  },
];

// Founders to watch
export const founders = [
  {
    name: "Sam Altman", initials: "SA", color: "oklch(0.78 0.16 145)",
    role: "Co-founder & CEO", company: "OpenAI",
    previous: ["Y Combinator (President)", "Loopt"],
    achievements: "Shipped ChatGPT, GPT-4 and Sora. Most-cited operator in frontier AI.",
    backers: ["Microsoft", "Thrive", "Sequoia"],
    influence: 98,
    connections: ["Greg Brockman", "Ilya Sutskever", "Brad Lightcap"],
  },
  {
    name: "Dario Amodei", initials: "DA", color: "oklch(0.82 0.13 60)",
    role: "Co-founder & CEO", company: "Anthropic",
    previous: ["OpenAI (VP Research)", "Google Brain"],
    achievements: "Author of scaling-laws research; Claude is the default enterprise frontier model.",
    backers: ["Google", "Amazon", "Spark", "Lightspeed"],
    influence: 94,
    connections: ["Daniela Amodei", "Chris Olah", "Tom Brown"],
  },
  {
    name: "Alexandr Wang", initials: "AW", color: "oklch(0.78 0.12 230)",
    role: "Founder & CEO", company: "Scale AI",
    previous: ["Quora", "MIT"],
    achievements: "Built the data foundry behind every major frontier lab and the US DoD.",
    backers: ["Accel", "Index", "Founders Fund", "Tiger Global"],
    influence: 89,
    connections: ["Lucy Guo", "Vinod Khosla", "Eric Schmidt"],
  },
  {
    name: "Aravind Srinivas", initials: "AS", color: "oklch(0.78 0.12 200)",
    role: "Co-founder & CEO", company: "Perplexity",
    previous: ["OpenAI", "DeepMind", "Google Brain"],
    achievements: "Built the answer engine challenging Google in daily research workflows.",
    backers: ["IVP", "NEA", "Nvidia", "Bezos Expeditions"],
    influence: 86,
    connections: ["Denis Yarats", "Jensen Huang", "Jeff Bezos"],
  },
  {
    name: "Mustafa Suleyman", initials: "MS", color: "oklch(0.74 0.14 310)",
    role: "CEO of Microsoft AI", company: "Microsoft AI",
    previous: ["Inflection AI (Co-founder)", "DeepMind (Co-founder)"],
    achievements: "Built Pi, sold Inflection's IP to Microsoft, now leads Copilot research.",
    backers: ["Microsoft", "Reid Hoffman", "Greylock"],
    influence: 90,
    connections: ["Satya Nadella", "Reid Hoffman", "Karén Simonyan"],
  },
  {
    name: "Arthur Mensch", initials: "AM", color: "oklch(0.78 0.13 18)",
    role: "Co-founder & CEO", company: "Mistral",
    previous: ["DeepMind"],
    achievements: "Europe's flag-bearer for open-weight frontier models — Mistral, Mixtral, Codestral.",
    backers: ["General Catalyst", "a16z", "Lightspeed", "Bpifrance"],
    influence: 84,
    connections: ["Timothée Lacroix", "Guillaume Lample", "Cédric O"],
  },
];

// Strategic acquisitions
export const acquisitions = [
  {
    acquirer: "Microsoft", target: "Inflection AI", size: "$650M",
    type: "Talent + IP licence", date: "Mar 2024",
    reason: "Acquihired Mustafa Suleyman and Karén Simonyan to lead Copilot research.",
    impact: "Reset the consumer-AI competitive map; Pi shuttered, Copilot accelerated.",
    sector: "Foundation Models",
  },
  {
    acquirer: "Google", target: "Character.AI", size: "$2.7B",
    type: "Licence + reverse acquihire", date: "Aug 2024",
    reason: "Brought Noam Shazeer and the original Transformer co-author back into Google DeepMind.",
    impact: "Re-anchored Google's consumer-agent talent stack pre-Gemini 2.",
    sector: "AI Agents",
  },
  {
    acquirer: "Amazon", target: "Adept", size: "Undisclosed",
    type: "Team acquisition", date: "Jun 2024",
    reason: "Acquired the agent-research team to seed AWS's Bedrock Agents roadmap.",
    impact: "Validated browser-agent thesis; left enterprise customers in transition.",
    sector: "AI Agents",
  },
  {
    acquirer: "Nvidia", target: "Run:ai", size: "$700M",
    type: "Strategic acquisition", date: "Apr 2024",
    reason: "GPU orchestration layer to deepen the moat around CUDA + DGX Cloud.",
    impact: "Tightened Nvidia's grip on the AI-cluster software stack.",
    sector: "AI Infrastructure",
  },
  {
    acquirer: "Databricks", target: "MosaicML", size: "$1.3B",
    type: "Strategic acquisition", date: "Jul 2023",
    reason: "Owned model-training stack for enterprise customers building proprietary models.",
    impact: "Created the leading 'own your AI' alternative to OpenAI + Azure.",
    sector: "AI Infrastructure",
  },
  {
    acquirer: "OpenAI", target: "Multi", size: "~$50M",
    type: "Team acquisition", date: "Jun 2024",
    reason: "Brought collaborative-desktop primitives in-house for ChatGPT agents.",
    impact: "Foreshadowed OpenAI's push into screen-sharing agent UX.",
    sector: "AI Agents",
  },
];

// Emerging categories
export const emergingCategories = [
  { name: "Agentic Workflows", growth: "+184%", startups: 412, funding: "$2.1B YTD", companies: ["Sierra", "Cognition", "/dev/agents"] },
  { name: "AI Browsers", growth: "+220%", startups: 38, funding: "$420M YTD", companies: ["Arc Search", "Dia", "Perplexity"] },
  { name: "AI Operating Systems", growth: "+96%", startups: 27, funding: "$610M YTD", companies: ["Rabbit", "Humane (assets)", "MultiOn"] },
  { name: "AI Scientists", growth: "+71%", startups: 64, funding: "$340M YTD", companies: ["Sakana AI", "FutureHouse", "Isomorphic Labs"] },
  { name: "Voice Infrastructure", growth: "+138%", startups: 92, funding: "$780M YTD", companies: ["Cartesia", "LiveKit", "Vapi"] },
  { name: "Synthetic Employees", growth: "+162%", startups: 156, funding: "$1.4B YTD", companies: ["Sierra", "11x", "Decagon"] },
  { name: "Autonomous Coding", growth: "+248%", startups: 88, funding: "$1.9B YTD", companies: ["Cursor", "Cognition", "Magic"] },
  { name: "AI World Models", growth: "+114%", startups: 22, funding: "$520M YTD", companies: ["World Labs", "Decart", "Odyssey"] },
];

// Weekly narratives
export const weeklyNarratives = [
  { tag: "Open source", title: "Open-weight labs capture record investor interest", body: "Mistral, Nous and Black Forest Labs each closed up-rounds — open-weight is now the contrarian-but-consensus bet." },
  { tag: "Enterprise", title: "Enterprise copilots continue dominating Series A", body: "Six of last week's nine Series A rounds went to vertical agent companies — legal, finance and field-service led." },
  { tag: "Europe", title: "European foundation models gain funding momentum", body: "Mistral, Black Forest Labs and Poolside between them attracted $1.1B in commitments — Paris is now the #2 AI capital." },
  { tag: "Talent", title: "Voice AI is the fastest-growing hiring category", body: "ElevenLabs, Cartesia and Sesame collectively grew research headcount 41% YoY — strong signal for voice-infra plays." },
  { tag: "M&A", title: "Hyperscalers return to talent acquisitions", body: "Microsoft, Google and Amazon all closed AI-team deals this quarter — the acquihire wave is back at frontier-lab prices." },
];
