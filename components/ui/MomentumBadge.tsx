import { Activity, Eye, Flame, TrendingUp } from "lucide-react";
import { type Momentum } from "@/data/market-maps-data";

export function MomentumBadge({ m }: { m: Momentum }) {
  const styles: Record<Momentum, string> = {
    Breakout: "bg-primary-soft text-accent-foreground",
    "Heating up": "bg-[oklch(0.95_0.05_60)] text-[oklch(0.45_0.15_50)]",
    Steady: "bg-secondary text-muted-foreground",
    Watch: "bg-[oklch(0.95_0.03_230)] text-[oklch(0.45_0.12_230)]",
  };
  return (
    <span className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-medium ${styles[m]}`}>
      {m === "Breakout" && <Flame className="size-3" />}
      {m === "Heating up" && <TrendingUp className="size-3" />}
      {m === "Steady" && <Activity className="size-3" />}
      {m === "Watch" && <Eye className="size-3" />}
      {m}
    </span>
  );
}