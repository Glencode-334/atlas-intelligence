import { ArrowUpRight, Filter, Network, Search } from "lucide-react";
export function Hero() {
  const tabs = ["Startups", "Founders", "Investors", "Sectors", "Jobs"];
  const chips = [
    ["Sector", "AI Agents"],
    ["Stage", "Series A"],
    ["Location", "Anywhere"],
    ["Timeframe", "30 days"],
  ];
  const quick = ["AI Agents", "Cursor", "Andreessen Horowitz", "Voice AI", "Open Source Models", "Acquisitions"];

  return (
    <section className="border-b border-border/60">
      <div className="mx-auto grid max-w-7xl items-end gap-8 px-6 pb-8 pt-10 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground">
            <span className="size-1.5 rounded-full bg-primary" />
            AI ecosystem intelligence · updated daily
          </div>
          <h1 className="text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl">
            AI Market Intelligence
            <br />
            <span className="text-primary">for founders and investors</span>
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Track startups, funding rounds, acquisitions,emerging categories, investor activity and market signals across the global AI ecosystem.
          </p>

          <div className="mt-5 rounded-2xl border border-border bg-card p-2 shadow-[var(--shadow-card)]">
            <div className="flex items-center gap-1 border-b border-border px-2 pb-2">
              {tabs.map((t, i) => (
                <button
                  key={t}
                  className={`rounded-full px-3 py-1.5 text-sm transition-colors ${
                    i === 0 ? "bg-primary-soft text-accent-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {t}
                </button>
              ))}
              <span className="ml-auto inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm text-muted-foreground">
                <Filter className="size-4" /> Filters
              </span>
            </div>
            <div className="flex items-center gap-2 p-2">
              <Search className="ml-2 size-4 text-muted-foreground" />
              <input
                className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
                placeholder="Search startups, investors, founders, funding rounds, acquisitions, reports, and AI categories…"
              />
              <button className="rounded-full bg-primary px-4 py-1.5 text-sm font-medium text-primary-foreground">
                Search
              </button>
            </div>
            <div className="flex flex-wrap gap-2 px-2 pt-2 text-[11px] uppercase tracking-wide text-muted-foreground">
              {chips.map(([k, v]) => (
                <span key={k} className="inline-flex items-center gap-1 rounded-md bg-secondary px-2 py-1">
                  <span className="text-muted-foreground/70">{k}</span>
                  <span className="font-medium text-foreground">{v}</span>
                </span>
              ))}
            </div>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground">
            <span className="uppercase tracking-wide">Trending</span>
            {quick.map((q) => (
              <a key={q} href="#" className="rounded-full border border-border bg-card px-2.5 py-1 transition-colors hover:border-primary/40 hover:text-foreground">
                {q}
              </a>
            ))}
          </div>
        </div>

        <NetworkVisual />
      </div>
    </section>
  );
}

function NetworkVisual() {
  // Coordinates in a 200x150 viewBox. Labels are embedded in the SVG so they
  // stay perfectly aligned with their nodes at any size.
  type N = { id: string; x: number; y: number; r: number; t: "model" | "startup" | "investor"; bold?: boolean };
  const nodes: N[] = [
    { id: "OpenAI", x: 100, y: 70, r: 6.5, t: "model", bold: true },
    { id: "Anthropic", x: 150, y: 44, r: 4.2, t: "model" },
    { id: "Mistral", x: 46, y: 46, r: 3.8, t: "model" },
    { id: "Cursor", x: 70, y: 102, r: 3.2, t: "startup" },
    { id: "Perplexity", x: 132, y: 106, r: 3.2, t: "startup" },
    { id: "ElevenLabs", x: 32, y: 92, r: 2.8, t: "startup" },
    { id: "Runway", x: 172, y: 92, r: 2.8, t: "startup" },
    { id: "xAI", x: 86, y: 30, r: 2.6, t: "startup" },
    { id: "Cohere", x: 118, y: 28, r: 2.6, t: "startup" },
    { id: "Sequoia", x: 178, y: 132, r: 2.8, t: "investor" },
    { id: "a16z", x: 24, y: 130, r: 2.8, t: "investor" },
  ];
  const colors: Record<N["t"], string> = {
    model: "oklch(0.68 0.21 18)",
    startup: "oklch(0.62 0.14 230)",
    investor: "oklch(0.55 0.18 300)",
  };
  const by = (id: string) => nodes.find((n) => n.id === id)!;
  const edges: [string, string][] = [
    ["OpenAI", "Anthropic"], ["OpenAI", "Mistral"], ["OpenAI", "Cursor"],
    ["OpenAI", "Perplexity"], ["OpenAI", "xAI"], ["OpenAI", "Cohere"],
    ["Anthropic", "Cohere"], ["Mistral", "ElevenLabs"], ["Mistral", "a16z"],
    ["Cursor", "a16z"], ["Perplexity", "Sequoia"], ["Runway", "Anthropic"],
    ["ElevenLabs", "a16z"], ["Anthropic", "Runway"],
  ];

  return (
    <div className="relative aspect-[5/4] max-h-[500px] overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)]">
      <div className="absolute inset-0" style={{ background: "var(--gradient-network)" }} />
      <svg viewBox="0 0 200 150" className="relative h-full w-full" preserveAspectRatio="xMidYMid meet">
        {edges.map(([a, b], i) => {
          const A = by(a), B = by(b);
          return (
            <line key={i} x1={A.x} y1={A.y} x2={B.x} y2={B.y}
              stroke="oklch(0.68 0.21 18 / 0.32)" strokeWidth="0.35" />
          );
        })}
        {nodes.map((n) => (
          <g key={n.id}>
            <circle cx={n.x} cy={n.y} r={n.r + 1.4} fill={colors[n.t]} opacity="0.16" />
            <circle cx={n.x} cy={n.y} r={n.r} fill={colors[n.t]} />
            {n.bold && (
              <circle cx={n.x} cy={n.y} r={n.r + 3} fill="none"
                stroke={colors[n.t]} strokeWidth="0.4" opacity="0.55" />
            )}
            <text
              x={n.x}
              y={n.y + n.r + 4.2}
              textAnchor="middle"
              fontSize={n.bold ? 4 : 3.2}
              fontWeight={n.bold ? 600 : 500}
              fill="oklch(0.22 0.01 270)"
              style={{ paintOrder: "stroke", stroke: "oklch(0.99 0.01 60)", strokeWidth: 0.8, strokeLinejoin: "round" }}
            >
              {n.id}
            </text>
          </g>
        ))}
      </svg>
      <div className="absolute inset-x-5 bottom-5 flex items-center justify-between rounded-xl bg-card/85 px-3 py-2 text-xs text-muted-foreground backdrop-blur">
        <span className="inline-flex items-center gap-1.5"><Network className="size-3.5" /> Live ecosystem map · 26,482 nodes</span>
        <a href="#map" className="inline-flex items-center gap-1 font-medium text-foreground hover:text-primary">
          Explore full graph <ArrowUpRight className="size-3.5" />
        </a>
      </div>
    </div>
  );
}