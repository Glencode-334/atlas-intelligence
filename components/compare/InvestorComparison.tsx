import { useMemo } from "react";
import { Landmark, Star, Clock } from "lucide-react";
import type { Company } from "@/data/comparison-fixtures";

interface InvestorComparisonProps {
  companies: Company[];
}

export function InvestorComparison({ companies }: InvestorComparisonProps) {
  const shared = useMemo(() => {
    if (companies.length < 2) return [];
    const sets = companies.map((c) => new Set(c.investors));
    const first = sets[0];
    return [...first].filter((inv) => sets.slice(1).every((s) => s.has(inv)));
  }, [companies]);

  const allInvestors = useMemo(() => {
    const map = new Map<string, string[]>();
    for (const c of companies) {
      for (const inv of c.investors) {
        if (!map.has(inv)) map.set(inv, []);
        map.get(inv)!.push(c.id);
      }
    }
    return [...map.entries()].sort((a, b) => b[1].length - a[1].length);
  }, [companies]);

  return (
    <section>
      <div className="mb-4">
        <h2 className="text-xl font-bold text-foreground sm:text-2xl">Investor overlap</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Shared cap-table relationships, lead investors and recent capital partners.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        <SharedInvestorsCard shared={shared} />
        <div className="lg:col-span-2 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {companies.map((c) => (
            <div key={c.id} className="rounded-2xl border border-border bg-card p-5 shadow-card">
              <div className="flex items-center gap-2.5">
                <span
                  className="grid h-8 w-8 shrink-0 place-items-center rounded-lg text-[11px] font-bold text-white"
                  style={{ backgroundColor: c.logoColor }}
                >
                  {c.monogram}
                </span>
                <h3 className="truncate text-sm font-bold text-foreground">{c.name}</h3>
              </div>

              <InvestorGroup icon={Star} label="Lead investors" items={c.leadInvestors} />
              <InvestorGroup icon={Clock} label="Recent investors" items={c.recentInvestors} />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5 rounded-2xl border border-border bg-card p-5 shadow-card">
        <div className="mb-4">
          <h3 className="text-base font-bold text-foreground">Investor network</h3>
          <p className="text-xs text-muted-foreground">Connections between investors and the selected entities.</p>
        </div>
        <NetworkDiagram companies={companies} investors={allInvestors.slice(0, 10)} />
      </div>
    </section>
  );
}

function SharedInvestorsCard({ shared }: { shared: string[] }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5 shadow-card">
      <div className="flex items-center gap-2.5">
        <span className="grid h-8 w-8 place-items-center rounded-lg bg-secondary text-primary">
          <Landmark className="h-4 w-4" />
        </span>
        <h3 className="text-sm font-bold text-foreground">Shared investors</h3>
      </div>
      {shared.length === 0 ? (
        <p className="mt-4 text-sm text-muted-foreground">No investors appear on every selected cap table.</p>
      ) : (
        <ul className="mt-4 space-y-2">
          {shared.map((inv) => (
            <li
              key={inv}
              className="flex items-center justify-between rounded-xl border border-border bg-background px-3 py-2"
            >
              <span className="truncate text-sm font-semibold text-foreground">{inv}</span>
              <span className="shrink-0 rounded-full bg-secondary px-2 py-0.5 text-[10px] font-semibold text-secondary-foreground">
                Shared
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function InvestorGroup({
  icon: Icon,
  label,
  items,
}: {
  icon: typeof Star;
  label: string;
  items: string[];
}) {
  return (
    <div className="mt-4">
      <p className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
        <Icon className="h-3 w-3" />
        {label}
      </p>
      <div className="mt-2 flex flex-wrap gap-1.5">
        {items.map((inv) => (
          <span
            key={inv}
            className="inline-flex items-center rounded-full border border-border bg-background px-2.5 py-1 text-xs font-medium text-foreground"
          >
            {inv}
          </span>
        ))}
      </div>
    </div>
  );
}

function NetworkDiagram({
  companies,
  investors,
}: {
  companies: Company[];
  investors: [string, string[]][];
}) {
  const width = 720;
  const height = Math.max(240, investors.length * 32 + 40);
  const leftX = 140;
  const rightX = width - 160;

  const companyY = (i: number) => 30 + (i * (height - 60)) / Math.max(1, companies.length - 1);
  const investorY = (i: number) => 24 + (i * (height - 48)) / Math.max(1, investors.length - 1);

  const companyColor = (id: string) => companies.find((c) => c.id === id)?.logoColor ?? "var(--color-primary)";

  return (
    <div className="overflow-x-auto">
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full min-w-[640px]" role="img" aria-label="Investor network diagram">
        {investors.map(([inv, ids], ii) => (
          <g key={inv}>
            {ids.map((cid) => {
              const ci = companies.findIndex((c) => c.id === cid);
              if (ci < 0) return null;
              const y1 = investorY(ii);
              const y2 = companyY(ci);
              const midX = (leftX + rightX) / 2;
              const d = `M ${leftX} ${y1} C ${midX} ${y1}, ${midX} ${y2}, ${rightX} ${y2}`;
              return <path key={cid} d={d} stroke={companyColor(cid)} strokeOpacity={0.4} strokeWidth={1.5} fill="none" />;
            })}
          </g>
        ))}

        {investors.map(([inv], ii) => (
          <g key={inv}>
            <circle cx={leftX} cy={investorY(ii)} r={5} fill="var(--color-card)" stroke="var(--color-foreground)" strokeWidth={1.5} />
            <text
              x={leftX - 12}
              y={investorY(ii) + 4}
              textAnchor="end"
              className="fill-foreground"
              fontSize={11}
              fontWeight={600}
            >
              {inv}
            </text>
          </g>
        ))}

        {companies.map((c, ci) => (
          <g key={c.id}>
            <circle cx={rightX} cy={companyY(ci)} r={9} fill={c.logoColor} />
            <text x={rightX + 14} y={companyY(ci) + 4} className="fill-foreground" fontSize={12} fontWeight={700}>
              {c.name}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
