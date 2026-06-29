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

import {
  Layers,
  Rocket,
  Users,
  TrendingUp,
  BarChart3,
} from "lucide-react";
import { Unicorn } from "@/components/funding/icons";

export const stats = [
  {
    icon: BarChart3,
    value: "$542B",
    label: "Funding Tracked",
    delta: "18%",
  },
  {
    icon: Layers,
    value: "18,420",
    label: "Funding Rounds",
    delta: "15%",
  },
  {
    icon: Rocket,
    value: "4,800",
    label: "Funded Startups",
    delta: "16%",
  },
  {
    icon: Users,
    value: "7,320",
    label: "Active Investors",
    delta: "12%",
  },
  {
    icon: TrendingUp,
    value: "214",
    label: "Acquisitions",
    delta: "20%",
  },
  {
    icon: Unicorn,
    value: "38",
    label: "AI Unicorns",
    delta: "19%",
  },
];