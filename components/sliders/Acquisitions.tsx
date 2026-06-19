import { HorizontalScroller } from "../ui/HorizontalScroller";
import { acquisitions } from "@/data/market-maps-data";

export function Acquisitions() {
  return (
      <HorizontalScroller cardWidth={360}>
        {acquisitions.map((a) => (
          <article
            key={`${a.acquirer}-${a.target}`}
            className="snap-start shrink-0 w-[360px] rounded-2xl border border-border bg-card p-4 transition hover:shadow-sm"
          >
            <div className="flex items-center justify-between text-[11px] uppercase tracking-wider text-muted-foreground">
              <span>{a.type}</span>
              <span>{a.date}</span>
            </div>

            <h3 className="mt-4 text-lg font-semibold tracking-tight">
              <span className="text-primary">{a.acquirer}</span>
              <span className="mx-2 text-muted-foreground">→</span>
              {a.target}
            </h3>

            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-full bg-primary-soft px-2.5 py-1 text-[11px] font-medium text-accent-foreground">
                {a.size}
              </span>

              <span className="rounded-full bg-secondary px-2.5 py-1 text-[11px] text-muted-foreground">
                {a.sector}
              </span>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {a.reason}
            </p>

            <div className="mt-5 border-t border-border pt-4">
              <p className="text-xs leading-relaxed text-muted-foreground">
                <span className="font-medium text-foreground">
                  Sector impact:
                </span>{" "}
                {a.impact}
              </p>
            </div>

            <div className="mt-4 flex justify-between border-t border-border pt-3 text-xs">
              <span className="text-muted-foreground">
                Updated this week
              </span>

              <a
                href="#"
                className="font-semibold text-primary hover:underline"
              >
                View deal →
              </a>
            </div>
          </article>
        ))}
      </HorizontalScroller>
  );
}