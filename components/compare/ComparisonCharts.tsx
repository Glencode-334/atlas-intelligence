import type { Company } from "@/data/comparison-fixtures";
import { SvgLineChart, type LineSeries } from "@/components/charts/SvgLineChart";
import { SvgAreaChart, type AreaSeries } from "@/components/charts/SvgAreaChart";
import { SvgBarChart, type BarGroup } from "@/components/charts/SvgBarChart";

interface ComparisonChartsProps {
  companies: Company[];
}

export function ComparisonCharts({ companies }: ComparisonChartsProps) {
  if (companies.length === 0) return null;

  const fundingSeries: LineSeries[] = companies.map((c) => ({
    name: c.name,
    color: c.logoColor,
    points: c.fundingHistory,
  }));

  const hiringSeries: AreaSeries[] = companies.map((c) => ({
    name: c.name,
    color: c.logoColor,
    points: c.hiringGrowth,
  }));

  const valuationSeries: LineSeries[] = companies.map((c) => ({
    name: c.name,
    color: c.logoColor,
    points: c.valuationGrowth,
  }));

  // Product expansion as grouped bars across years
  const years = companies[0]?.productExpansion.map((p) => p.label) ?? [];
  const productGroups: BarGroup[] = years.map((year, yi) => ({
    label: year,
    bars: companies.map((c) => ({
      name: c.name,
      value: c.productExpansion[yi]?.value ?? 0,
      color: c.logoColor,
    })),
  }));

  const presenceGroups: BarGroup[] = [
    {
      label: "Market presence (current)",
      bars: companies.map((c) => ({
        name: c.name,
        value: c.marketPresence[c.marketPresence.length - 1]?.value ?? 0,
        color: c.logoColor,
      })),
    },
    {
      label: "12 months ago",
      bars: companies.map((c) => ({
        name: c.name,
        value: c.marketPresence[c.marketPresence.length - 2]?.value ?? 0,
        color: c.logoColor,
      })),
    },
    {
      label: "24 months ago",
      bars: companies.map((c) => ({
        name: c.name,
        value: c.marketPresence[c.marketPresence.length - 3]?.value ?? 0,
        color: c.logoColor,
      })),
    },
  ];

  return (
    <section>
      <div className="mb-4">
        <h2 className="text-xl font-bold text-foreground sm:text-2xl">Trend comparison</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Funding, hiring, valuation, product surface and market presence trajectories.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        <ChartCard title="Funding history" subtitle="Cumulative capital raised ($M)">
          <SvgLineChart series={fundingSeries} format={(n) => fmtMoney(n)} />
        </ChartCard>

        <ChartCard title="Hiring growth" subtitle="Total headcount by year">
          <SvgAreaChart series={hiringSeries} />
        </ChartCard>

        <ChartCard title="Valuation growth" subtitle="Post-money valuation ($M)">
          <SvgLineChart series={valuationSeries} format={(n) => fmtMoney(n)} />
        </ChartCard>

        <ChartCard title="Product expansion" subtitle="Shipped products in market">
          <SvgBarChart groups={productGroups} />
        </ChartCard>

        <ChartCard title="Market presence" subtitle="Share-of-voice index, 0–100" className="lg:col-span-2">
          <SvgBarChart groups={presenceGroups} />
        </ChartCard>
      </div>
    </section>
  );
}

function ChartCard({
  title,
  subtitle,
  children,
  className,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={"rounded-2xl border border-border bg-card p-5 shadow-card " + (className ?? "")}>
      <div className="mb-3 grid grid-cols-[minmax(0,1fr)_auto] items-start gap-2">
        <div className="min-w-0">
          <h3 className="truncate text-base font-bold text-foreground">{title}</h3>
          <p className="truncate text-xs text-muted-foreground">{subtitle}</p>
        </div>
        <span className="shrink-0 rounded-full bg-secondary px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-secondary-foreground">
          7yr
        </span>
      </div>
      {children}
    </div>
  );
}

function fmtMoney(n: number): string {
  if (n >= 1000) return `$${(n / 1000).toFixed(n >= 10000 ? 0 : 1)}B`;
  if (n >= 1) return `$${n.toFixed(n < 10 ? 1 : 0)}M`;
  if (n > 0) return `$${(n * 1000).toFixed(0)}K`;
  return "$0";
}
