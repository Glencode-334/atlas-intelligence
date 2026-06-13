import { MomentumBadge } from "@/components/ui/MomentumBadge";
import { HorizontalScroller } from "@/components/ui/HorizontalScroller";
import { investors } from "@/lib/atlas-data";

export function Investors() {
  return (
      <HorizontalScroller cardWidth={360}>
        {investors.map((inv) => (
          <article
            key={inv.name}
            className="snap-start shrink-0 w-[360px] rounded-2xl border border-border bg-card p-5 transition hover:shadow-sm"
          >
            <header className="flex items-start gap-3">
              <span
                className="grid h-10 w-10 place-items-center rounded-xl text-sm font-semibold text-foreground"
                style={{ background: inv.color, opacity: 0.95 }}
              >
                {inv.initials}
              </span>

              <div className="min-w-0 flex-1">
                <h3 className="truncate font-semibold tracking-tight">
                  {inv.name}
                </h3>

                <p className="text-xs text-muted-foreground">
                  {inv.aum} AUM · {inv.dealsYtd} AI deals YTD
                </p>
              </div>
            </header>

            <div className="mt-4">
              <MomentumBadge m={inv.momentum} />
            </div>

            <div className="mt-5 border-t border-border pt-4">
              <p className="text-[11px] uppercase tracking-wider text-muted-foreground">
                Sector focus
              </p>

              <div className="mt-2 flex flex-wrap gap-1">
                {inv.sectors.map((s) => (
                  <span
                    key={s}
                    className="rounded-full bg-secondary px-2 py-1 text-[11px] text-muted-foreground"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-4">
              <p className="text-[11px] uppercase tracking-wider text-muted-foreground">
                Recent investments
              </p>

              <p className="mt-2 text-sm text-muted-foreground">
                {inv.recent.join(" · ")}
              </p>
            </div>

            <div className="mt-4 border-t border-border pt-4">
              <p className="text-xs leading-relaxed text-muted-foreground">
                {inv.note}
              </p>
            </div>

            <div className="mt-4 flex justify-between border-t border-border pt-3 text-xs">
              <span className="text-muted-foreground">
                Updated today
              </span>

              <a
                href="#"
                className="font-semibold text-primary hover:underline"
              >
                View investor →
              </a>
            </div>
          </article>
        ))}
      </HorizontalScroller>
  );
}