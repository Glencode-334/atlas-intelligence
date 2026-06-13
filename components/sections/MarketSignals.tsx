import { FundingCategoryChart } from "@/components/charts/FundingCategoryChart";
import { FundingTrendChart } from "@/components/charts/FundingTrendChart";
import { StartupRegionChart } from "@/components/charts/StartupRegionChart";

export function MarketSignals() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-20">
      <div className="mb-8">
        <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
          Market signals
        </p>

        <h2 className="mt-2 text-3xl font-semibold tracking-tight">
          Where the AI market is moving
        </h2>

        <p className="mt-2 text-sm text-muted-foreground">
          Funding, startup formation and geographic concentration across the AI ecosystem.
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">

        <FundingCategoryChart />

        <FundingTrendChart />

        <StartupRegionChart />

      </div>
    </section>
  );
}