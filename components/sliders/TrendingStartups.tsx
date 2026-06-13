import { Users } from "lucide-react";
import { HorizontalScroller } from "@/components/ui/HorizontalScroller";
import { MomentumBadge } from "@/components/ui/MomentumBadge";
import { trendingStartups } from "@/lib/atlas-data";

export function TrendingStartups() {
  return (
      <HorizontalScroller cardWidth={320}>
        {trendingStartups.map((s) => (
          <article
            key={s.name}
            className="snap-start shrink-0 w-[320px] rounded-2xl border border-border bg-card p-5 transition hover:shadow-sm"
          >
            <header className="flex items-start gap-3">
              <span
                className="grid h-10 w-10 place-items-center rounded-xl text-sm font-semibold text-foreground"
                style={{ background: s.color, opacity: 0.95 }}
              >
                {s.initials}
              </span>

              <div className="min-w-0 flex-1">
                <h3 className="truncate font-semibold tracking-tight">
                  {s.name}
                </h3>

                <p className="text-xs text-muted-foreground">
                  {s.category} · {s.hq.split(",")[0]}
                </p>
              </div>
            </header>

            <p className="mt-4 text-sm text-muted-foreground">
              {s.tagline}
            </p>

            <div className="mt-4 flex items-center gap-2">
              <MomentumBadge m={s.momentum} />

              <span className="rounded-full bg-secondary px-2 py-1 text-[11px] text-muted-foreground">
                {s.stage}
              </span>
            </div>

            <div className="mt-5 border-t border-border pt-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">
                  Funding
                </span>

                <span className="font-semibold">
                  {s.funding}
                </span>
              </div>

              <div className="mt-3 flex items-center justify-between text-sm">
                <span className="text-muted-foreground">
                  Growth
                </span>

                <span className="font-semibold text-primary">
                  {s.growth}
                </span>
              </div>

              <div className="mt-3 flex items-center justify-between text-sm">
                <span className="text-muted-foreground">
                  Team
                </span>

                <span className="font-semibold">
                  {s.employees}
                </span>
              </div>
            </div>

            <div className="mt-4 border-t border-border pt-3">
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <Users className="h-3 w-3" />
                <span className="truncate">
                  {s.investors.slice(0, 3).join(" · ")}
                  {s.investors.length > 3
                    ? ` +${s.investors.length - 3}`
                    : ""}
                </span>
              </div>
            </div>

            <div className="mt-4 flex justify-between border-t border-border pt-3 text-xs">
              <span className="text-muted-foreground">
                Updated today
              </span>

              <a
                href="#"
                className="font-semibold text-primary hover:underline"
              >
                View startup →
              </a>
            </div>
          </article>
        ))}
      </HorizontalScroller>
  );
}