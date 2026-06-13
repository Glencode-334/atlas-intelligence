import { Activity, Bookmark } from "lucide-react";
import { intelligenceBrief, recentFunding } from "@/lib/atlas-data";

export function FundingAndMarket() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-20">
      <div className="grid items-stretch gap-4 lg:grid-cols-[1.55fr_1fr]">
        {/* RECENT FUNDING */}
        <div className="flex h-[580px] flex-col rounded-3xl border border-border bg-card p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                Live ecosystem activity
              </p>

              <h3 className="mt-1 text-xl font-semibold tracking-tight">
                Recent funding
              </h3>

              <p className="text-sm text-muted-foreground">
                Investments tracked over the past 7 days.
              </p>
            </div>

            <a
              href="#"
              className="text-sm font-medium text-primary hover:underline"
            >
              View all →
            </a>
          </div>

          <div className="mt-5 flex-1 overflow-y-auto pr-2 no-scrollbar divide-y divide-border/70">
            {recentFunding.map((r) => (
              <div
                key={r.company}
                className="group grid grid-cols-12 items-center gap-3 rounded-xl py-3 text-sm transition-colors hover:bg-secondary/40"
              >
                <div className="col-span-4 flex min-w-0 items-center gap-3">
                  <span className="grid size-9 place-items-center rounded-xl bg-primary-soft text-[11px] font-semibold text-accent-foreground">
                    {r.company.slice(0, 2)}
                  </span>

                  <div className="min-w-0">
                    <p className="truncate font-semibold tracking-tight">
                      {r.company}
                    </p>

                    <p className="truncate text-xs text-muted-foreground">
                      {r.category} · {r.valuation} valuation
                    </p>
                  </div>
                </div>

                <div className="col-span-2 font-semibold text-primary tabular-nums">
                  {r.amount}
                </div>

                <div className="col-span-2">
                  <span className="rounded-full bg-secondary px-2 py-0.5 text-[11px] text-foreground/80">
                    {r.round}
                  </span>
                </div>

                <div className="col-span-2 flex min-w-0 items-center gap-2 text-xs text-muted-foreground">
                  <span className="size-5 rounded-full bg-primary/15 ring-1 ring-primary/20" />
                  <span className="truncate">{r.lead}</span>
                </div>

                <div className="col-span-2 flex items-center justify-end gap-2">
                  <span className="text-xs text-muted-foreground">
                    {r.date}
                  </span>

                  <button
                    aria-label={`Save ${r.company} funding round`}
                    title={`Save ${r.company} funding round`}
                    className="rounded-md p-1 text-muted-foreground transition hover:bg-secondary hover:text-primary"
                  >
                    <Bookmark className="size-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 flex flex-wrap gap-2 border-t border-border pt-4 text-[11px]">
            <span className="rounded-full bg-secondary px-2.5 py-1 text-muted-foreground">
              AI coding startups dominated Series A activity
            </span>

            <span className="rounded-full bg-secondary px-2.5 py-1 text-muted-foreground">
              Voice AI funding +42% QoQ
            </span>

            <span className="rounded-full bg-secondary px-2.5 py-1 text-muted-foreground">
              Enterprise copilots lead Series B
            </span>
          </div>
        </div>

        {/* INTELLIGENCE BRIEF */}
        <div className="flex h-[580px] flex-col rounded-3xl border border-border bg-card p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                Atlas Intelligence Brief
              </p>

              <h3 className="mt-1 text-xl font-semibold tracking-tight">
                What the data is telling us
              </h3>

              <p className="text-sm text-muted-foreground">
                Six ecosystem observations from our research desk this week.
              </p>
            </div>

            <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-secondary px-2 py-1 text-[11px] text-primary">
              <Activity className="size-3" />
              Daily
            </span>
          </div>

          <ul className="mt-5 flex-1 overflow-y-auto no-scrollbar space-y-3 pr-2">
            {intelligenceBrief.map((b) => (
              <li
                key={b.text}
                className="group flex gap-3 rounded-2xl border border-border bg-secondary/20 p-3 transition hover:border-primary/20 hover:bg-secondary/40"
              >
                <span className="shrink-0 text-lg font-semibold tracking-tight text-primary tabular-nums">
                  {b.stat}
                </span>

                <div className="min-w-0">
                  <span className="text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
                    {b.tag}
                  </span>

                  <p className="mt-1 text-[13px] leading-snug text-foreground/85">
                    {b.text}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}