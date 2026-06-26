export type Trend = { direction: "up" | "down"; pct: string; note?: string };

export const popularSearches = [
  "AI Agents",
  "Series A",
  "Seed Rounds",
  "AI Infrastructure",
  "YC Companies",
];

export const heroStats = {
  totalFunding: { label: "Total Funding Tracked", value: "$542B", trend: { direction: "up", pct: "18%", note: "vs last year" } as Trend },
  activeInvestors: { label: "Active Investors", value: "7,320", trend: { direction: "up", pct: "12%", note: "vs last year" } as Trend },
  fundingRounds: { label: "Funding Rounds", value: "18,420", trend: { direction: "up", pct: "16%", note: "vs last year" } as Trend },
};

export const navItems = [
  "Startups",
  "Investors",
  "Funding",
  "Products",
  "Jobs",
  "News",
  "Research",
] as const;
