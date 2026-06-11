import Link from "next/link";
import {
  Search, Bookmark, Bell, ChevronRight, ArrowUpRight, TrendingUp,
  Bot, Brain, Server, Code2, Film, Mic, HeartPulse, Cpu, ShieldCheck,
  Scale, LineChart, Microscope, GitBranch, Sparkles, Building2,
  MapPin, Users, Wallet, Filter, ArrowRight, Flame, Activity,
  Eye, BookOpen, FileText, Network, Plus,
} from "lucide-react";
import {
  categories, trendingStartups, recentFunding, insights, reports, watchlistStats,
  intelligenceBrief, investors, founders, acquisitions, emergingCategories, weeklyNarratives,
  type Momentum,
} from "@/lib/atlas-data";
const reportAgents = "/reports/report-agents.jpg";
const reportTop100 = "/reports/report-top100.jpg";
const reportHiring = "/reports/report-hiring.jpg";
const reportFunding = "/reports/report-funding.jpg";
const reportLandscape = "/reports/report-landscape.jpg";

const reportImages = {
  agents: reportAgents,
  top100: reportTop100,
  hiring: reportHiring,
  funding: reportFunding,
  landscape: reportLandscape,
} as const;

const iconMap: Record<string, typeof Bot> = {
  Bot, Brain, Server, Code2, Film, Mic, Search, HeartPulse, Cpu, ShieldCheck,
  Scale, LineChart, Microscope, GitBranch, Sparkles, Building2,
};

function MomentumBadge({ m }: { m: Momentum }) {
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

let __sparkUid = 0;

function Nav() {
  const links = ["Startups", "Founders", "Investors", "Sectors", "Reports", "Jobs"];
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-10">
          <Link href="/" className="flex items-center gap-2">
            <span className="grid size-7 place-items-center rounded-full bg-primary text-primary-foreground">
              <Sparkles className="size-3.5" />
            </span>
            <span className="text-[15px] font-semibold tracking-tight">Atlas Intelligence</span>
          </Link>
          <nav className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
            {links.map((l) => (
              <a key={l} href="#" className="transition-colors hover:text-foreground">{l}</a>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <button className="hidden items-center gap-1.5 rounded-full px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground md:inline-flex">
            <Bookmark className="size-4" /> Saved
          </button>
          <button className="hidden rounded-full px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground md:inline-flex">
            Sign in
          </button>
          <button className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90">
            Get started
          </button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
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
      <div className="mx-auto grid max-w-7xl items-end gap-10 px-6 pb-10 pt-14 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground">
            <span className="size-1.5 rounded-full bg-primary" />
            AI ecosystem intelligence · updated daily
          </div>
          <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
            Discover AI startups
            <br />
            <span className="text-primary">building the future</span>
          </h1>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
            Track startups, funding rounds, acquisitions,emerging categories, investor activity and market signals across the global AI ecosystem.
          </p>

          <div className="mt-7 rounded-2xl border border-border bg-card p-2 shadow-[var(--shadow-card)]">
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
              <button className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground">
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

          <div className="mt-5 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
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
    <div className="relative aspect-[5/4] overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-card)]">
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
        <a href="#" className="inline-flex items-center gap-1 font-medium text-foreground hover:text-primary">
          Explore full graph <ArrowUpRight className="size-3.5" />
        </a>
      </div>
    </div>
  );
}

function CategoryGrid() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="mb-8 flex items-end justify-between gap-6">
        <div>
          <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">Category discovery</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight">Track emerging AI categories</h2>
          <p className="mt-2 max-w-xl text-sm text-muted-foreground">
            Sixteen live sectors of the AI economy, ranked by momentum across funding, hiring, and product velocity.
          </p>
        </div>
        <a href="#" className="inline-flex shrink-0 items-center gap-1 text-sm font-medium text-foreground hover:text-primary">
          All categories <ArrowRight className="size-4" />
        </a>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((c) => {
          const Icon = iconMap[c.icon];
          return (
            <a key={c.name} href="#"
              className="group rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-[var(--shadow-card)]">
              <div className="flex items-start justify-between">
                <span className="grid size-9 place-items-center rounded-xl bg-primary-soft text-accent-foreground">
                  <Icon className="size-4" />
                </span>
                <ArrowUpRight className="size-4 text-muted-foreground/50 transition-colors group-hover:text-primary" />
              </div>
              <h3 className="mt-4 text-[15px] font-semibold tracking-tight">{c.name}</h3>
              <p className="mt-1 line-clamp-1 text-xs text-muted-foreground">{c.notable}</p>
              <div className="mt-4 flex items-center justify-between text-xs">
                <span className="text-muted-foreground">{c.count.toLocaleString()} startups</span>
                <span className="inline-flex items-center gap-1 font-medium text-[oklch(0.55_0.15_150)]">
                  <TrendingUp className="size-3" /> {c.growth}
                </span>
              </div>
              <div className="mt-3">
                <MomentumBadge m={c.momentum} />
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}

function TrendingStartups() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-20">
      <div className="mb-8 flex items-end justify-between gap-6">
        <div>
          <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">Trending now</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight">The startups everyone is watching</h2>
          <p className="mt-2 text-sm text-muted-foreground">Curated by the Atlas research desk — refreshed every 24 hours.</p>
        </div>
        <a href="#" className="inline-flex shrink-0 items-center gap-1 text-sm font-medium text-foreground hover:text-primary">
          See all 240 <ArrowRight className="size-4" />
        </a>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {trendingStartups.map((s) => (
          <article key={s.name} className="group rounded-2xl border border-border bg-card p-5 transition-shadow hover:shadow-[var(--shadow-card)]">
            <header className="flex items-start gap-3">
              <span className="grid size-10 place-items-center rounded-xl text-sm font-semibold text-foreground/90"
                style={{ background: s.color, opacity: 0.95 }}>
                {s.initials}
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="truncate text-[15px] font-semibold tracking-tight">{s.name}</h3>
                  <ArrowUpRight className="size-3.5 text-muted-foreground/50 transition-colors group-hover:text-primary" />
                </div>
                <p className="text-xs text-muted-foreground">{s.category} · {s.hq.split(",")[0]}</p>
              </div>
              <button className="rounded-md p-1 text-muted-foreground hover:text-primary" aria-label="Save">
                <Bookmark className="size-4" />
              </button>
            </header>
            <p className="mt-3 line-clamp-2 text-sm text-foreground/80">{s.tagline}</p>
            <div className="mt-3 flex flex-wrap items-center gap-1.5">
              <MomentumBadge m={s.momentum} />
              <span className="rounded-full bg-secondary px-2 py-0.5 text-[11px] text-muted-foreground">{s.stage}</span>
            </div>
            <div className="mt-4">
            </div>
            <dl className="mt-3 grid grid-cols-3 gap-2 border-t border-border pt-3 text-[11px]">
              <div>
                <dt className="text-muted-foreground">Raised</dt>
                <dd className="font-semibold">{s.funding}</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Growth</dt>
                <dd className="font-semibold text-[oklch(0.55_0.15_150)]">{s.growth}</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Team</dt>
                <dd className="font-semibold">{s.employees}</dd>
              </div>
            </dl>
            <div className="mt-3 flex items-center gap-1 text-[11px] text-muted-foreground">
              <Users className="size-3" />
              <span className="truncate">{s.investors.slice(0, 3).join(" · ")}{s.investors.length > 3 ? ` +${s.investors.length - 3}` : ""}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function EcosystemMap() {
  const focus = {
    name: "OpenAI",
    type: "Foundation model lab · San Francisco",
    connections: ["Microsoft (strategic)", "Cursor (model)", "Thrive (investor)", "Perplexity (model)", "Sam Altman (founder)"],
    relationships: [
      { kind: "Acquisition", text: "Microsoft acquires Inflection AI team — Suleyman joins Microsoft AI", date: "Mar 2024" },
      { kind: "Partnership", text: "Anthropic deepens AWS partnership for Trainium-based inference", date: "5d ago" },
      { kind: "Investor", text: "Thrive Capital leads Cursor's $900M Series C at $9.9B", date: "Jun 6" },
      { kind: "Talent", text: "Cursor hires 24% of new senior engineers from OpenAI alumni", date: "Jun 1" },
    ],
  };
  const filters = ["All", "Founder → Company", "Investor → Startup", "Startup → Model", "Acquisitions", "Partnerships"];
  return (
    <section className="mx-auto max-w-7xl px-6 pb-20">
      <div className="mb-8 flex items-end justify-between gap-6">
        <div>
          <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">Atlas knowledge graph</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight">The AI ecosystem, mapped</h2>
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
            Explore relationships between founders, startups, investors, foundation models, infrastructure providers,
            and the enterprises acquiring them.
          </p>
        </div>
        <a href="#" className="inline-flex shrink-0 items-center gap-1 text-sm font-medium text-foreground hover:text-primary">
          Open full graph <ArrowUpRight className="size-4" />
        </a>
      </div>

      <div className="mb-4 flex flex-wrap gap-2">
        {filters.map((f, i) => (
          <button key={f}
            className={`rounded-full px-3 py-1.5 text-xs transition-colors ${
              i === 0 ? "bg-foreground text-background" : "border border-border bg-card text-muted-foreground hover:text-foreground"
            }`}>
            {f}
          </button>
        ))}
      </div>

      <div className="grid gap-4 lg:grid-cols-[1.4fr_1fr]">
        <div className="relative aspect-[1.7/1] overflow-hidden rounded-3xl border border-border bg-card">
          <div className="absolute inset-0" style={{ background: "var(--gradient-network)" }} />
          <BigGraph />
          <div className="absolute left-5 top-5 inline-flex items-center gap-1.5 rounded-full bg-background/80 px-2.5 py-1 text-[11px] text-muted-foreground backdrop-blur">
            <Network className="size-3" /> 16 sectors · 26,482 entities · 184k relationships
          </div>
          <div className="absolute bottom-5 left-5 right-5 flex flex-wrap items-center justify-between gap-3 rounded-xl bg-background/80 px-3 py-2 text-[11px] text-muted-foreground backdrop-blur">
            <div className="flex flex-wrap items-center gap-3">
              {[
                ["Model", "oklch(0.62 0.16 150)"],
                ["Startup", "oklch(0.68 0.21 18)"],
                ["Investor", "oklch(0.62 0.14 230)"],
                ["Enterprise", "oklch(0.55 0.18 300)"],
              ].map(([k, c]) => (
                <span key={k} className="inline-flex items-center gap-1.5">
                  <span className="size-2 rounded-full" style={{ background: c }} /> {k}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5">
                <span className="h-px w-4 bg-[oklch(0.68_0.21_18/0.7)]" /> Investment
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="h-px w-4 bg-[oklch(0.5_0.02_270/0.4)]" /> Partnership
              </span>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-border bg-card p-5">
          <p className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground">In focus today</p>
          <div className="mt-3 flex items-center gap-3">
            <span className="grid size-10 place-items-center rounded-xl bg-[oklch(0.78_0.16_145)] text-sm font-semibold">OA</span>
            <div>
              <h3 className="text-base font-semibold tracking-tight">{focus.name}</h3>
              <p className="text-xs text-muted-foreground">{focus.type}</p>
            </div>
          </div>
          <p className="mt-5 text-[11px] uppercase tracking-[0.14em] text-muted-foreground">Connections</p>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {focus.connections.map((c) => (
              <span key={c} className="rounded-full bg-secondary px-2 py-0.5 text-[11px] text-foreground/80">· {c}</span>
            ))}
          </div>
          <p className="mt-5 text-[11px] uppercase tracking-[0.14em] text-muted-foreground">Recent signals</p>
          <ul className="mt-2 space-y-2">
            {focus.relationships.map((r) => (
              <li key={r.text} className="rounded-xl border border-border bg-background/50 p-3">
                <div className="flex items-center justify-between text-[10px] uppercase tracking-wide">
                  <span className="rounded-full bg-primary-soft px-2 py-0.5 text-accent-foreground">{r.kind}</span>
                  <span className="text-muted-foreground">{r.date}</span>
                </div>
                <p className="mt-1.5 text-[13px] text-foreground/85">{r.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function BigGraph() {
  // 4 typed clusters around a foundation-model core. Positions in a 200x120 viewBox
  // so labels have room to breathe.
  type N = { id: string; x: number; y: number; r: number; t: "model" | "startup" | "investor" | "enterprise"; bold?: boolean };
  const nodes: N[] = [
    // Core models
    { id: "OpenAI", x: 100, y: 60, r: 5, t: "model", bold: true },
    { id: "Anthropic", x: 64, y: 36, r: 3.6, t: "model" },
    { id: "Mistral", x: 138, y: 36, r: 3.2, t: "model" },
    { id: "Meta Llama", x: 158, y: 70, r: 2.8, t: "model" },
    // Startups
    { id: "Cursor", x: 78, y: 92, r: 2.6, t: "startup" },
    { id: "Perplexity", x: 116, y: 96, r: 2.6, t: "startup" },
    { id: "ElevenLabs", x: 44, y: 70, r: 2.2, t: "startup" },
    { id: "Runway", x: 156, y: 96, r: 2.2, t: "startup" },
    { id: "Harvey", x: 24, y: 50, r: 2, t: "startup" },
    { id: "Sierra", x: 176, y: 50, r: 2, t: "startup" },
    // Investors
    { id: "Sequoia", x: 16, y: 92, r: 2.4, t: "investor" },
    { id: "a16z", x: 50, y: 104, r: 2.2, t: "investor" },
    { id: "Thrive", x: 96, y: 108, r: 2, t: "investor" },
    { id: "Founders Fund", x: 134, y: 108, r: 2, t: "investor" },
    // Enterprises / hyperscalers
    { id: "Microsoft", x: 50, y: 14, r: 2.8, t: "enterprise" },
    { id: "Amazon", x: 100, y: 8, r: 2.4, t: "enterprise" },
    { id: "Google", x: 150, y: 14, r: 2.6, t: "enterprise" },
    { id: "Nvidia", x: 184, y: 28, r: 2.6, t: "enterprise" },
  ];
  const colors: Record<N["t"], string> = {
    model: "oklch(0.62 0.16 150)",
    startup: "oklch(0.68 0.21 18)",
    investor: "oklch(0.62 0.14 230)",
    enterprise: "oklch(0.55 0.18 300)",
  };
  const by = (id: string) => nodes.find((n) => n.id === id)!;
  // Typed relationships
  const edges: [string, string, "primary" | "secondary"][] = [
    ["OpenAI", "Microsoft", "primary"],
    ["OpenAI", "Thrive", "primary"],
    ["OpenAI", "Cursor", "primary"],
    ["OpenAI", "Perplexity", "secondary"],
    ["OpenAI", "Anthropic", "secondary"],
    ["Anthropic", "Amazon", "primary"],
    ["Anthropic", "Google", "secondary"],
    ["Mistral", "a16z", "primary"],
    ["Mistral", "Google", "secondary"],
    ["Meta Llama", "Sierra", "secondary"],
    ["Cursor", "Thrive", "primary"],
    ["Cursor", "a16z", "secondary"],
    ["Perplexity", "Nvidia", "primary"],
    ["Perplexity", "Founders Fund", "secondary"],
    ["ElevenLabs", "a16z", "primary"],
    ["ElevenLabs", "Sequoia", "secondary"],
    ["Runway", "Nvidia", "primary"],
    ["Runway", "Google", "secondary"],
    ["Harvey", "Sequoia", "primary"],
    ["Sierra", "Founders Fund", "primary"],
  ];
  return (
    <svg viewBox="0 0 200 120" className="relative h-full w-full" preserveAspectRatio="xMidYMid meet">
      {edges.map(([a, b, kind], i) => {
        const A = by(a), B = by(b);
        return (
          <line
            key={i}
            x1={A.x} y1={A.y} x2={B.x} y2={B.y}
            stroke={kind === "primary" ? "oklch(0.68 0.21 18 / 0.45)" : "oklch(0.5 0.02 270 / 0.18)"}
            strokeWidth={kind === "primary" ? 0.5 : 0.35}
          />
        );
      })}
      {nodes.map((n) => (
        <g key={n.id}>
          <circle cx={n.x} cy={n.y} r={n.r + 1.2} fill={colors[n.t]} opacity="0.18" />
          <circle cx={n.x} cy={n.y} r={n.r} fill={colors[n.t]} />
          {n.bold && <circle cx={n.x} cy={n.y} r={n.r + 2.4} fill="none" stroke={colors[n.t]} strokeWidth="0.4" opacity="0.6" />}
          <text
            x={n.x}
            y={n.y + n.r + 3.2}
            textAnchor="middle"
            fontSize={n.bold ? 3.4 : 2.6}
            fontWeight={n.bold ? 600 : 500}
            fill="oklch(0.22 0.01 270)"
            style={{ paintOrder: "stroke", stroke: "oklch(0.99 0.01 60)", strokeWidth: 0.6, strokeLinejoin: "round" }}
          >
            {n.id}
          </text>
        </g>
      ))}
    </svg>
  );
}

function FundingAndMarket() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-20">
      <div className="grid gap-4 lg:grid-cols-[1.55fr_1fr]">
        <div className="rounded-3xl border border-border bg-card p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground">Live ecosystem activity</p>
              <h3 className="mt-1 text-xl font-semibold tracking-tight">Recent funding</h3>
              <p className="text-sm text-muted-foreground">Investments tracked over the past 7 days.</p>
            </div>
            <a href="#" className="text-sm font-medium text-foreground hover:text-primary">View all →</a>
          </div>
          <div className="mt-5 divide-y divide-border">
            {recentFunding.map((r) => (
              <div key={r.company} className="grid grid-cols-12 items-center gap-3 py-3 text-sm">
                <div className="col-span-4 flex items-center gap-3 min-w-0">
                  <span className="grid size-8 place-items-center rounded-lg bg-primary-soft text-[11px] font-semibold text-accent-foreground">
                    {r.company.slice(0, 2)}
                  </span>
                  <div className="min-w-0">
                    <p className="truncate font-medium">{r.company}</p>
                    <p className="truncate text-xs text-muted-foreground">{r.category} · {r.valuation} val.</p>
                  </div>
                </div>
                <div className="col-span-2 font-semibold tabular-nums">{r.amount}</div>
                <div className="col-span-2">
                  <span className="rounded-full bg-secondary px-2 py-0.5 text-[11px] text-foreground/80">{r.round}</span>
                </div>
                <div className="col-span-3 flex items-center gap-1.5 text-xs text-muted-foreground min-w-0">
                  <span className="size-5 rounded-full bg-foreground/85" />
                  <span className="truncate">Led by {r.lead}</span>
                </div>
                <div className="col-span-1 text-right text-xs text-muted-foreground">{r.date}</div>
              </div>
            ))}
          </div>
          <div className="mt-4 flex flex-wrap gap-2 border-t border-border pt-4 text-[11px] text-muted-foreground">
            <span className="rounded-full bg-secondary px-2 py-1">AI coding startups dominated Series A activity</span>
            <span className="rounded-full bg-secondary px-2 py-1">Voice AI funding +42% QoQ</span>
            <span className="rounded-full bg-secondary px-2 py-1">Enterprise copilots lead Series B</span>
          </div>
        </div>

        <div className="rounded-3xl border border-border bg-card p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground">Atlas Intelligence Brief</p>
              <h3 className="mt-1 text-xl font-semibold tracking-tight">What the data is telling us</h3>
              <p className="text-sm text-muted-foreground">Six ecosystem observations from our research desk this week.</p>
            </div>
            <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-secondary px-2 py-1 text-[11px] text-muted-foreground">
              <Activity className="size-3" /> Daily
            </span>
          </div>
          <ul className="mt-5 space-y-3">
            {intelligenceBrief.map((b) => (
              <li key={b.text} className="flex gap-3 rounded-2xl border border-border bg-background/40 p-3">
                <span className="shrink-0 text-lg font-semibold tracking-tight text-primary tabular-nums">{b.stat}</span>
                <div className="min-w-0">
                  <span className="text-[10px] font-medium uppercase tracking-wide text-muted-foreground">{b.tag}</span>
                  <p className="mt-0.5 text-[13px] leading-snug text-foreground/85">{b.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Insights() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-20">
      <div className="mb-6">
        <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">Market signals this week</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight">What's moving the AI economy</h2>
      </div>
      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
        {insights.map((i) => (
          <article key={i.text} className="rounded-2xl border border-border bg-card p-5">
            <span className="inline-flex items-center gap-1 rounded-full bg-secondary px-2 py-0.5 text-[11px] text-muted-foreground">
              {i.tag}
            </span>
            <p className="mt-3 text-3xl font-semibold tracking-tight text-primary tabular-nums">{i.stat}</p>
            <p className="mt-2 text-sm text-foreground/80">{i.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function ReportCard({
  r,
  featured = false,
}: {
  r: (typeof reports)[number];
  featured?: boolean;
}) {
  const tones: Record<string, { tint: string; chip: string; text: string }> = {
    pink: { tint: "linear-gradient(180deg, oklch(0.78 0.18 10 / 0.05) 0%, oklch(0.45 0.22 10 / 0.85) 100%)", chip: "bg-[oklch(1_0_0/0.85)] text-[oklch(0.35_0.18_10)]", text: "text-white" },
    orange: { tint: "linear-gradient(180deg, oklch(0.82 0.16 50 / 0.05) 0%, oklch(0.4 0.18 35 / 0.85) 100%)", chip: "bg-[oklch(1_0_0/0.85)] text-[oklch(0.4_0.18_35)]", text: "text-white" },
    blue: { tint: "linear-gradient(180deg, oklch(0.78 0.12 240 / 0.05) 0%, oklch(0.35 0.14 240 / 0.85) 100%)", chip: "bg-[oklch(1_0_0/0.85)] text-[oklch(0.35_0.14_240)]", text: "text-white" },
    teal: { tint: "linear-gradient(180deg, oklch(0.78 0.12 175 / 0.05) 0%, oklch(0.35 0.1 180 / 0.85) 100%)", chip: "bg-[oklch(1_0_0/0.85)] text-[oklch(0.35_0.1_180)]", text: "text-white" },
  };
  const tone = tones[r.tone] ?? tones.pink;
  const img = reportImages[r.image];
  return (
    <article
      className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl ${tone.text} ${
        featured ? "row-span-2 min-h-[480px] p-6" : "min-h-[260px] p-5"
      }`}
    >
      <img
        src={img}
        alt=""
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0" style={{ background: tone.tint }} />
      <div className="relative flex items-start justify-between">
        <span className={`inline-flex w-fit items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-medium backdrop-blur ${tone.chip}`}>
          {featured ? <FileText className="size-3" /> : null}
          {featured ? "Flagship" : r.category}
        </span>
      </div>
      <div className="relative">
        <p className="text-[11px] uppercase tracking-[0.14em] text-white/80">
          {r.date} · {r.author}
        </p>
        <h3
          className={`mt-2 font-semibold leading-tight tracking-tight ${
            featured ? "text-3xl" : "text-lg"
          }`}
        >
          {r.title}
        </h3>
        <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-white/80">
          <span className="inline-flex items-center gap-1"><FileText className="size-3" /> {r.pages} pages</span>
          <span className="inline-flex items-center gap-1"><BookOpen className="size-3" /> {r.readTime}</span>
          <span className="inline-flex items-center gap-1"><TrendingUp className="size-3" /> {r.downloads} downloads</span>
        </div>
        <div className="mt-4 flex items-center justify-between text-sm">
          <span className="inline-flex items-center gap-1.5 text-white/80">
            <BookOpen className="size-4" /> {r.date}
          </span>
          <a href="#" className="inline-flex items-center gap-1 font-medium text-white">
            Read <ChevronRight className="size-4" />
          </a>
        </div>
      </div>
    </article>
  );
}

function Reports() {
  const small = reports.filter((r) => !r.featured);
  const featured = reports.find((r) => r.featured)!;

  return (
    <section className="mx-auto max-w-7xl px-6 pb-24">
      <div className="mb-8 flex items-end justify-between gap-6">
        <div>
          <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">Atlas Research</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight">Reports &amp; deep dives</h2>
          <p className="mt-2 text-sm text-muted-foreground">In-house intelligence from the Atlas research desk.</p>
        </div>
        <a href="#" className="inline-flex shrink-0 items-center gap-1 text-sm font-medium text-foreground hover:text-primary">
          All reports <ArrowRight className="size-4" />
        </a>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <ReportCard r={featured} featured />
        {small.map((r) => (
          <ReportCard key={r.title} r={r} />
        ))}
      </div>
    </section>
  );
}

function Investors() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-20">
      <div className="mb-8 flex items-end justify-between gap-6">
        <div>
          <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">Investor intelligence</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight">Where capital is flowing</h2>
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
            Track the investors shaping the AI ecosystem — deal velocity, sector focus and portfolio momentum.
          </p>
        </div>
        <a href="#" className="inline-flex shrink-0 items-center gap-1 text-sm font-medium text-foreground hover:text-primary">
          All investors <ArrowRight className="size-4" />
        </a>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {investors.map((inv) => (
          <article key={inv.name} className="group rounded-2xl border border-border bg-card p-5 transition-shadow hover:shadow-[var(--shadow-card)]">
            <header className="flex items-start gap-3">
              <span className="grid size-10 place-items-center rounded-xl text-sm font-semibold text-foreground/90"
                style={{ background: inv.color, opacity: 0.95 }}>
                {inv.initials}
              </span>
              <div className="min-w-0 flex-1">
                <h3 className="truncate text-[15px] font-semibold tracking-tight">{inv.name}</h3>
                <p className="text-xs text-muted-foreground">{inv.aum} AUM · {inv.dealsYtd} AI deals YTD</p>
              </div>
              <ArrowUpRight className="size-3.5 text-muted-foreground/50 transition-colors group-hover:text-primary" />
            </header>
            <div className="mt-3">
              <MomentumBadge m={inv.momentum} />
            </div>
            <p className="mt-3 text-[11px] uppercase tracking-[0.14em] text-muted-foreground">Sector focus</p>
            <div className="mt-1.5 flex flex-wrap gap-1">
              {inv.sectors.map((s) => (
                <span key={s} className="rounded-full bg-secondary px-2 py-0.5 text-[11px] text-foreground/80">{s}</span>
              ))}
            </div>
            <p className="mt-3 text-[11px] uppercase tracking-[0.14em] text-muted-foreground">Recent investments</p>
            <p className="mt-1 text-sm text-foreground/85">{inv.recent.join(" · ")}</p>
            <div className="mt-3 border-t border-border pt-3">
              <p className="mt-2 text-[11px] leading-snug text-muted-foreground">{inv.note}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Founders() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-20">
      <div className="mb-8 flex items-end justify-between gap-6">
        <div>
          <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">Founder intelligence</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight">Founders to watch</h2>
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
            The builders driving the next wave of AI innovation — ranked by ecosystem influence.
          </p>
        </div>
        <a href="#" className="inline-flex shrink-0 items-center gap-1 text-sm font-medium text-foreground hover:text-primary">
          All founders <ArrowRight className="size-4" />
        </a>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {founders.map((f) => (
          <article key={f.name} className="group rounded-2xl border border-border bg-card p-5 transition-shadow hover:shadow-[var(--shadow-card)]">
            <header className="flex items-start gap-3">
              <span className="grid size-11 place-items-center rounded-full text-sm font-semibold text-foreground/90"
                style={{ background: f.color, opacity: 0.95 }}>
                {f.initials}
              </span>
              <div className="min-w-0 flex-1">
                <h3 className="truncate text-[15px] font-semibold tracking-tight">{f.name}</h3>
                <p className="text-xs text-muted-foreground">{f.role} · {f.company}</p>
              </div>
              <div className="shrink-0 rounded-lg bg-primary-soft px-2 py-1 text-center">
                <p className="text-[9px] uppercase tracking-wide text-accent-foreground/80">Influence</p>
                <p className="text-sm font-semibold tabular-nums text-accent-foreground">{f.influence}</p>
              </div>
            </header>
            <p className="mt-3 text-sm text-foreground/85">{f.achievements}</p>
            <div className="mt-3 grid grid-cols-1 gap-2 text-[11px]">
              <div>
                <span className="text-muted-foreground">Previously: </span>
                <span className="text-foreground/85">{f.previous.join(" · ")}</span>
              </div>
              <div>
                <span className="text-muted-foreground">Backers: </span>
                <span className="text-foreground/85">{f.backers.join(" · ")}</span>
              </div>
              <div className="flex items-start gap-1">
                <Network className="mt-0.5 size-3 shrink-0 text-muted-foreground" />
                <span className="text-foreground/75">{f.connections.join(" → ")}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Acquisitions() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-20">
      <div className="mb-8 flex items-end justify-between gap-6">
        <div>
          <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">M&amp;A intelligence</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight">Strategic acquisitions</h2>
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
            How hyperscalers and platform companies are absorbing AI talent and technology.
          </p>
        </div>
        <a href="#" className="inline-flex shrink-0 items-center gap-1 text-sm font-medium text-foreground hover:text-primary">
          All deals <ArrowRight className="size-4" />
        </a>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {acquisitions.map((a) => (
          <article key={`${a.acquirer}-${a.target}`} className="rounded-2xl border border-border bg-card p-5">
            <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
              <span>{a.type}</span>
              <span>{a.date}</span>
            </div>
            <div className="mt-3 flex items-center gap-2 text-[15px] font-semibold tracking-tight">
              <span>{a.acquirer}</span>
              <ArrowRight className="size-4 text-muted-foreground" />
              <span>{a.target}</span>
            </div>
            <div className="mt-2 flex items-center gap-2">
              <span className="rounded-full bg-primary-soft px-2 py-0.5 text-[11px] font-medium text-accent-foreground tabular-nums">{a.size}</span>
              <span className="rounded-full bg-secondary px-2 py-0.5 text-[11px] text-muted-foreground">{a.sector}</span>
            </div>
            <p className="mt-3 text-sm text-foreground/85">{a.reason}</p>
            <p className="mt-2 border-t border-border pt-2 text-[11px] text-muted-foreground">
              <span className="font-medium text-foreground/70">Sector impact: </span>{a.impact}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Emerging() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-20">
      <div className="mb-8 flex items-end justify-between gap-6">
        <div>
          <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">Sector intelligence</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight">Emerging AI categories</h2>
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
            The fastest-growing sub-sectors of the AI economy — measured by funding, founding rate, and momentum.
          </p>
        </div>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {emergingCategories.map((c) => (
          <article key={c.name} className="rounded-2xl border border-border bg-card p-5">
            <div className="flex items-start justify-between gap-2">
              <h3 className="text-[15px] font-semibold tracking-tight">{c.name}</h3>
              <span className="inline-flex items-center gap-1 rounded-full bg-primary-soft px-2 py-0.5 text-[11px] font-medium text-accent-foreground tabular-nums">
                <TrendingUp className="size-3" /> {c.growth}
              </span>
            </div>
            <dl className="mt-3 grid grid-cols-2 gap-2 text-[11px]">
              <div>
                <dt className="text-muted-foreground">Startups</dt>
                <dd className="font-semibold tabular-nums">{c.startups}</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Funding</dt>
                <dd className="font-semibold tabular-nums">{c.funding}</dd>
              </div>
            </dl>
            <p className="mt-3 border-t border-border pt-3 text-[11px] uppercase tracking-[0.14em] text-muted-foreground">Key companies</p>
            <p className="mt-1 text-sm text-foreground/85">{c.companies.join(" · ")}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Narratives() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-20">
      <div className="mb-8 flex items-end justify-between gap-6">
        <div>
          <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">Weekly market narratives</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight">What changed this week</h2>
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
            Short editorial notes from the Atlas research desk — the stories behind the data.
          </p>
        </div>
        <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-secondary px-2 py-1 text-[11px] text-muted-foreground">
          <Activity className="size-3" /> Week of Jun 9
        </span>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {weeklyNarratives.map((n) => (
          <article key={n.title} className="rounded-2xl border border-border bg-card p-5">
            <span className="inline-flex items-center gap-1 rounded-full bg-secondary px-2 py-0.5 text-[11px] text-muted-foreground">
              {n.tag}
            </span>
            <h3 className="mt-3 text-[15px] font-semibold leading-snug tracking-tight">{n.title}</h3>
            <p className="mt-2 text-sm text-foreground/80">{n.body}</p>
            <a href="#" className="mt-3 inline-flex items-center gap-1 text-[12px] font-medium text-foreground hover:text-primary">
              Read brief <ChevronRight className="size-3.5" />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}


function Footer() {
  const cols = [
    { h: "Discover", links: ["Startups", "Categories", "Trending", "Stealth"] },
    { h: "People", links: ["Investors", "Founders", "Jobs", "Watchlists"] },
    { h: "Research", links: ["Reports", "Funding data", "Hiring trends", "Newsletter"] },
    { h: "Platform", links: ["API access", "Pricing", "Changelog", "Login"] },
  ];
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-[1.2fr_2fr]">
        <div>
          <Link href="/" className="flex items-center gap-2">
            <span className="grid size-7 place-items-center rounded-full bg-primary text-primary-foreground">
              <Sparkles className="size-3.5" />
            </span>
            <span className="text-[15px] font-semibold tracking-tight">Atlas Intelligence</span>
          </Link>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">
            The daily map of the AI economy — for investors, founders, recruiters and operators.
          </p>
          <div className="mt-4 flex gap-2 text-xs text-muted-foreground">
            <a href="#" className="hover:text-foreground">X</a> ·
            <a href="#" className="hover:text-foreground">LinkedIn</a> ·
            <a href="#" className="hover:text-foreground">RSS</a>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {cols.map((c) => (
            <div key={c.h}>
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground">{c.h}</p>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {c.links.map((l) => (
                  <li key={l}><a href="#" className="hover:text-foreground">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-2 px-6 py-5 text-xs text-muted-foreground md:flex-row md:items-center">
          <p>© 2026 Atlas Intelligence — research desk in San Francisco.</p>
          <p className="inline-flex items-center gap-2">
            <Bell className="size-3" /> Subscribe to the Atlas brief — weekly, free.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function AtlasHome() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <CategoryGrid />
        <TrendingStartups />
        <EcosystemMap />
        <Investors />
        <Founders />
        <FundingAndMarket />
        <Acquisitions />
        <Emerging />
        <Insights />
        <Narratives />
        <Reports />
      </main>
      <Footer />
    </div>
  );
}
