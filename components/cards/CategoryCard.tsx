import { HorizontalScroller } from "@/components/ui/HorizontalScroller";
import { MomentumBadge } from "@/components/ui/MomentumBadge";
import { categories} from "@/data/market-maps-data";
import { Bot, Brain, Server, Code2, Film, Mic, Search, HeartPulse, Cpu,
     ShieldCheck, Scale, LineChart, Microscope, GitBranch, Sparkles, Building2 } from "lucide-react";

const iconMap: Record<string, typeof Bot> = {
  Bot, Brain, Server, Code2, Film, Mic, Search, HeartPulse, Cpu, ShieldCheck,
  Scale, LineChart, Microscope, GitBranch, Sparkles, Building2,
};

export function CategoryCard() {
  return (
      <HorizontalScroller cardWidth={280}>
        {categories.map((c) => {
          const Icon = iconMap[c.icon];

          return (
            <article
              key={c.name}
              className="snap-start shrink-0 w-[280px] rounded-2xl border border-border bg-card p-4 transition hover:shadow-sm"
            >
              <div className="flex items-center justify-between">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary-soft text-accent-foreground">
                  <Icon className="h-4 w-4" />
                </span>

                <MomentumBadge m={c.momentum} />
              </div>

              <h3 className="mt-4 text-base font-semibold tracking-tight">
                {c.name}
              </h3>

              <p className="mt-2 text-sm text-muted-foreground">
                {c.notable}
              </p>

              <div className="mt-5 border-t border-border pt-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">
                    Startups
                  </span>

                  <span className="font-semibold">
                    {c.count.toLocaleString()}
                  </span>
                </div>

                <div className="mt-3 flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">
                    Growth
                  </span>

                  <span className="font-semibold text-primary">
                    {c.growth}
                  </span>
                </div>
              </div>

              <div className="mt-4 flex justify-between border-t border-border pt-3 text-xs">
                <span className="text-muted-foreground">
                  Updated daily
                </span>

                <a
                  href="#"
                  className="font-semibold text-primary hover:underline"
                >
                  Explore →
                </a>
              </div>
            </article>
          );
        })}
      </HorizontalScroller>
  );
}