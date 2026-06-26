import { Breadcrumb } from "@/components/funding/Header";
import { Hero } from "@/components/funding/Hero";
import { StatsStrip } from "@/components/funding/StatsStrip";
import { RoundsAndFeed } from "@/components/funding/RoundsAndFeed";
import { CapitalAndStages } from "@/components/funding/CapitalAndStages";
import { InvestorsUnicornsAcquisitions } from "@/components/funding/InvestorsUnicornsAcquisitions";
import { Leaderboards } from "@/components/funding/Leaderboards";
import { ExploreByCategory } from "@/components/funding/ExploreByCategory";
import { ProCTA } from "@/components/funding/ProCTA";

export function FundingPage() {
  return (
    <div
      className="min-h-screen bg-white font-sans text-[#0B0B0F] antialiased"
      data-page="funding"
    >
      <main
        id="main-content"
        className="mx-auto max-w-[1200px] px-6 pb-16"
      >
        <Breadcrumb />
        <section aria-labelledby="funding-hero">
            <Hero />
        </section>

        <section aria-labelledby="market-snapshot">
            <StatsStrip />
        </section>

        <section aria-labelledby="largest-rounds">
            <RoundsAndFeed />
        </section>

        <section aria-labelledby="capital-flow">
            <CapitalAndStages />
        </section>

        <section aria-labelledby="market-participants">
            <InvestorsUnicornsAcquisitions />
        </section>

        <section aria-labelledby="leaderboards">
            <Leaderboards />
        </section>

        <section aria-labelledby="categories">
            <ExploreByCategory />
        </section>

        <section aria-labelledby="pro">
            <ProCTA />
        </section>
      </main>
    </div>
  );
}