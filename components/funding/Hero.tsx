import { Search, Rocket, DollarSign, BadgeCheck } from "lucide-react";
import { popularSearches, heroStats } from "@/data/funding";
import { TrendBadge, MiniSpark } from "./shared";
function Globe() {
  // SVG sphere built from dots inside a circle clip, with curved meridians/parallels.
  const R = 220;
  const cx = 220;
  const cy = 220;
  const dots: { x: number; y: number; o: number }[] = [];
  const step = 7;
  for (let y = cy - R; y <= cy + R; y += step) {
    for (let x = cx - R; x <= cx + R; x += step) {
      const dx = x - cx;
      const dy = y - cy;
      const d = Math.sqrt(dx * dx + dy * dy);
      if (d <= R) {
        // fade dots near the edge for sphere illusion
        const o = Math.max(0.15, 1 - Math.pow(d / R, 2.2));
        dots.push({ x, y, o });
      }
    }
  }
  return (
    <div className="relative w-full max-w-[500px] aspect-square mx-auto" aria-hidden>
      <svg viewBox="0 0 480 480" className="absolute inset-0 w-full h-full">
        <defs>
          <clipPath id="sphere">
            <circle cx={cx} cy={cy} r={R} />
          </clipPath>
        </defs>
        <g clipPath="url(#sphere)">
          {dots.map((d, i) => (
            <circle key={i} cx={d.x} cy={d.y} r={1.1} fill="#ff5a4e" opacity={d.o * 0.85} />
          ))}
          {/* latitude arcs */}
          {[-150, -110, -65, -22, 22, 65, 110, 150].map((oy, i) => (
            <ellipse
              key={`lat-${i}`}
              cx={cx}
              cy={cy + oy}
              rx={Math.sqrt(Math.max(0, R * R - oy * oy))}
              ry={Math.max(4, 12 - Math.abs(oy) / 20)}
              fill="none"
              stroke="#ff5a4e"
              strokeOpacity="0.45"
              strokeWidth="1"
            />
          ))}
          {/* longitude arcs */}
          {[30, 70, 115, 160, 195].map((rx, i) => (
            <ellipse
              key={`lng-${i}`}
              cx={cx}
              cy={cy}
              rx={rx}
              ry={R}
              fill="none"
              stroke="#ff5a4e"
              strokeOpacity="0.32"
              strokeWidth="1"
            />
          ))}
        </g>
        <circle cx={cx} cy={cy} r={R} fill="none" stroke="#ff5a4e" strokeOpacity="0.18" strokeWidth="1" />
      </svg>
      {/* floating decorative icons */}
      <div className="absolute -top-2 right-4 grid place-items-center w-9 h-9 rounded-xl bg-[#ffe5dd] text-brand">
        <Rocket className="w-4 h-4" />
      </div>
      <div className="absolute top-[38%] -left-3 grid place-items-center w-9 h-9 rounded-xl bg-[#ffe5dd] text-brand">
        <DollarSign className="w-4 h-4" />
      </div>
      <div className="absolute bottom-4 -right-2 grid place-items-center w-9 h-9 rounded-xl bg-[#ffe5dd] text-brand">
        <DollarSign className="w-4 h-4" />
      </div>
      <BadgeCheck className="hidden" />
    </div>
  );
}

function HeroStatCard({
  label,
  value,
  trend,
  chart = false,
  className = "",
}: {
  label: string;
  value: string;
  trend: { direction: "up" | "down"; pct: string; note?: string };
  chart?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`bg-white border border-line rounded-2xl p-3.5 w-[180px] ${className}`}
      style={{ boxShadow: "0 8px 24px -10px rgba(16,24,40,.12)" }}
    >
      <div className="text-[11px] text-muted-ink">{label}</div>
      <div className="text-[22px] font-bold text-ink mt-0.5 tracking-tight">{value}</div>
      {chart && (
        <div className="mt-1 -mx-1">
          <MiniSpark data={[10, 14, 12, 18, 16, 22, 26, 24, 30]} color="#ff5a4e" />
        </div>
      )}
      <div className="mt-1">
        <TrendBadge trend={trend} size="xs" />
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="mx-auto max-w-[1200px] px-6 pt-8 pb-10">
      <div className="grid lg:grid-cols-[1fr_540px] gap-10 items-center">
        {/* Left */}
        <div className="min-w-0">
          <h1 className="text-[44px] md:text-[52px] leading-[1.05] font-extrabold text-ink tracking-tight">
            Follow the capital<br />behind the AI economy
          </h1>
          <p className="mt-5 text-[15px] text-muted-ink max-w-[480px] leading-relaxed">
            Track every funding round, acquisition, investor activity and
            capital trend shaping the future of artificial intelligence.
          </p>

          {/* Search */}
          <form
            role="search"
            onSubmit={(e) => e.preventDefault()}
            className="mt-7 relative max-w-[520px]"
          >
            <input
              type="search"
              placeholder="Search startups, rounds, investors, sectors…"
              className="w-full h-12 pl-5 pr-14 rounded-full bg-white border border-line text-[14px] placeholder:text-muted-ink focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
              aria-label="Search startups, rounds, investors, sectors"
            />
            <button
              type="submit"
              aria-label="Submit search"
              className="absolute right-1.5 top-1.5 grid place-items-center w-9 h-9 rounded-full bg-brand text-white hover:bg-brand-soft transition-colors"
            >
              <Search className="w-4 h-4" />
            </button>
          </form>

          {/* Popular */}
          <div className="mt-5 flex items-center gap-2 flex-wrap">
            <span className="text-[12px] text-muted-ink mr-1">Popular searches:</span>
            {popularSearches.map((p) => (
              <button
                key={p}
                className="h-7 px-3 rounded-full border border-line bg-white text-[12px] text-ink hover:border-brand hover:text-brand transition-colors"
              >
                {p}
              </button>
            ))}
          </div>
        </div>

        {/* Right: globe + floating stat cards */}
        <div className="relative h-[460px] hidden lg:block">
          <Globe />
          <HeroStatCard
            label={heroStats.totalFunding.label}
            value={heroStats.totalFunding.value}
            trend={heroStats.totalFunding.trend}
            className="absolute top-2 left-2"
          />
          <HeroStatCard
            label={heroStats.activeInvestors.label}
            value={heroStats.activeInvestors.value}
            trend={heroStats.activeInvestors.trend}
            className="absolute top-24 right-0"
          />
          <HeroStatCard
            label={heroStats.fundingRounds.label}
            value={heroStats.fundingRounds.value}
            trend={heroStats.fundingRounds.trend}
            chart
            className="absolute bottom-6 left-10"
          />
        </div>
      </div>
    </section>
  );
}
