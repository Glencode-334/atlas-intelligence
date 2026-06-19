import { Search, Sparkles } from "lucide-react";

interface HeroSectionProps {
  query: string;
  onQueryChange: (q: string) => void;
  onSelectPreset: (ids: string[]) => void;
  presets: { id: string; ids: string[]; label: string }[];
}

export function HeroSection({ query, onQueryChange, onSelectPreset, presets }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-10 shadow-card sm:px-10 sm:py-14">
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-secondary blur-3xl opacity-70" />
      <div className="pointer-events-none absolute -left-16 bottom-0 h-56 w-56 rounded-full bg-secondary blur-3xl opacity-50" />

      <div className="relative mx-auto max-w-4xl text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted-foreground">
          <Sparkles className="h-3.5 w-3.5 text-primary" />
          GraphOne Intelligence · Comparison
        </div>

        <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl">
          Compare the AI Ecosystem{" "}
          <span className="bg-gradient-to-r from-primary to-[oklch(0.66_0.22_25)] bg-clip-text text-transparent">
            Side-by-Side
          </span>
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Compare startups, investors, founders, products, funding activity, hiring trends and market intelligence
          from a single interface.
        </p>

        <div className="mx-auto mt-8 grid w-full max-w-2xl grid-cols-[minmax(0,1fr)_auto] items-center gap-2 rounded-2xl border border-border bg-background p-2 shadow-card">
          <div className="flex min-w-0 items-center gap-2 pl-3">
            <Search className="h-4 w-4 shrink-0 text-muted-foreground" />
            <input
              value={query}
              onChange={(e) => onQueryChange(e.target.value)}
              type="text"
              placeholder="Search a company, investor, founder or product…"
              className="w-full min-w-0 truncate bg-transparent py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
            />
          </div>
          <button
            type="button"
            className="inline-flex shrink-0 items-center justify-center rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-[var(--primary-hover)]"
          >
            Compare
          </button>
        </div>

        <div className="mt-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Popular comparisons</p>
          <div className="mt-3 flex flex-wrap justify-center gap-2">
            {presets.map((p) => (
              <button
                key={p.id}
                onClick={() => p.ids.length > 0 && onSelectPreset(p.ids)}
                className="inline-flex items-center rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium text-foreground transition-colors hover:border-primary hover:bg-secondary"
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
