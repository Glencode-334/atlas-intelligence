import { Bell, Sparkles } from "lucide-react";
import Link from "next/link";

export function Footer() {
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