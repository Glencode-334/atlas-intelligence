import { ArrowUpRight } from "lucide-react";
import { BigGraph } from "@/components/charts/BigGraph";

export function EcosystemMap() {
  const focus = {
    name: "OpenAI",
    type: "Foundation model lab · San Francisco",
    connections: [
      "Microsoft",
      "Cursor",
      "Thrive",
      "Perplexity",
    ],
    relationships: [
      {
        kind: "Acquisition",
        text: "Microsoft acquires Inflection AI team.",
        date: "Mar 2024",
      },
      {
        kind: "Investor",
        text: "Thrive leads Cursor's $900M Series C.",
        date: "Jun 6",
      },
    ],
  };

  const filters = [
    "All",
    "Founder → Company",
    "Investor → Startup",
    "Startup → Model",
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 pb-14">
      <div className="mb-5 flex items-end justify-between gap-6">
        <div>
          <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
            Atlas knowledge graph
          </p>

          <h2 className="mt-2 text-2xl font-semibold tracking-tight">
            The AI ecosystem, mapped
          </h2>

          <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
            Relationships between startups, founders, investors,
            foundation models and enterprises.
          </p>
        </div>

        <a
          href="#"
          className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
        >
          Open full graph
          <ArrowUpRight className="size-4" />
        </a>
      </div>

      <div className="mb-4 flex flex-wrap gap-2">
        {filters.map((f, i) => (
          <button
            key={f}
            className={`rounded-full px-3 py-1.5 text-xs transition-colors ${
              i === 0
                ? "bg-primary text-primary-foreground"
                : "border border-border bg-card text-muted-foreground hover:text-foreground"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid gap-4 lg:grid-cols-[7fr_3fr]">
        {/* GRAPH */}
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
          <div
            className="absolute inset-0"
            style={{ background: "var(--gradient-network)" }}
          />

          <div className="relative h-full min-h-[280px]">
            <BigGraph />

            <div className="absolute left-4 top-4 rounded-full border border-border bg-background/80 px-3 py-1 text-[10px] text-muted-foreground backdrop-blur">
              26k nodes · 184k links
            </div>

            <div className="absolute bottom-4 left-4 rounded-full border border-border bg-background/80 px-3 py-1 text-[10px] text-muted-foreground backdrop-blur">
              Model · Startup · Investor · Enterprise
            </div>
          </div>
        </div>

        {/* SIDEBAR */}
        <div className="rounded-3xl border border-border bg-card p-4 shadow-sm">
          <p className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
            In Focus
          </p>

          <div className="mt-3 flex items-center gap-3">
            <span className="grid size-10 place-items-center rounded-xl bg-primary-soft text-sm font-semibold text-accent-foreground">
              OA
            </span>

            <div>
              <h3 className="font-semibold tracking-tight">
                {focus.name}
              </h3>

              <p className="text-xs text-muted-foreground">
                {focus.type}
              </p>
            </div>
          </div>

          <p className="mt-5 text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
            Connections
          </p>

          <div className="mt-2 flex flex-wrap gap-1.5">
            {focus.connections.map((c) => (
              <span
                key={c}
                className="rounded-full bg-secondary px-2.5 py-1 text-[11px] text-foreground/80"
              >
                {c}
              </span>
            ))}
          </div>

          <p className="mt-5 text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
            Recent Signals
          </p>

          <div className="mt-2 space-y-2">
            {focus.relationships.map((r) => (
              <div
                key={r.text}
                className="rounded-xl border border-border bg-secondary/40 p-2.5"
              >
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-primary-soft px-2 py-0.5 text-[10px] font-medium text-accent-foreground">
                    {r.kind}
                  </span>

                  <span className="text-[10px] text-muted-foreground">
                    {r.date}
                  </span>
                </div>

                <p className="mt-2 text-xs leading-relaxed text-foreground/85">
                  {r.text}
                </p>
              </div>
            ))}
          </div>

          <a
            href="#"
            className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline"
          >
            View entity profile
            <ArrowUpRight className="size-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}