import { HorizontalScroller } from "@/components/ui/HorizontalScroller";
import { founders } from "@/lib/atlas-data";

export function FounderSpotlight() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-20">
      <div className="mb-8 flex items-end justify-between gap-6">
        <div>
          <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
            Founder intelligence
          </p>

          <h2 className="mt-2 text-3xl font-semibold tracking-tight">
            The founders shaping AI
          </h2>

          <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
            Track the entrepreneurs building the most influential AI companies.
          </p>
        </div>

        <a
          href="#"
          className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
        >
          All founders →
        </a>
      </div>

      <HorizontalScroller cardWidth={340}>
        {founders.map((f) => (
          <article
            key={f.name}
            className="w-[340px] shrink-0 snap-start rounded-3xl border border-border bg-card p-5 transition hover:shadow-sm"
          >
            <div className="flex items-start gap-3">
              <span className="grid size-12 place-items-center rounded-2xl bg-primary-soft text-sm font-semibold text-accent-foreground">
                {f.name
                  .split(" ")
                  .map((n) => n[0])
                  .slice(0, 2)
                  .join("")}
              </span>

              <div>
                <h3 className="font-semibold tracking-tight">
                  {f.name}
                </h3>

                <p className="text-sm text-muted-foreground">
                  {f.company}
                </p>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-full bg-primary-soft px-2 py-1 text-[11px] font-medium text-accent-foreground">
                {f.focus}
              </span>

              <span className="rounded-full bg-secondary px-2 py-1 text-[11px]">
                {f.funding}
              </span>
            </div>

            <div className="mt-4 space-y-2 text-sm">
              <div>
                <span className="text-muted-foreground">
                  Previous:
                </span>{" "}
                {f.previous}
              </div>

              <p className="text-muted-foreground">
                {f.note}
              </p>
            </div>

            <div className="mt-4 border-t border-border pt-3">
              <a
                href="#"
                className="text-sm font-medium text-primary hover:underline"
              >
                View profile →
              </a>
            </div>
          </article>
        ))}
      </HorizontalScroller>
    </section>
  );
}