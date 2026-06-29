import { Breadcrumb } from "@/components/funding/Breadcrumb";
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
      <main className="mx-auto max-w-7xl px-8 pb-16">
        <div className="pt-5">
          <Breadcrumb />
        </div>
        <div className="mt-6">
          <Hero />
        </div>
        <StatsStrip />
        <RoundsAndFeed />
        <CapitalAndStages />
        <InvestorsUnicornsAcquisitions />
        <Leaderboards />
        <ExploreByCategory />
        <ProCTA />
      </main>
    </div>
  );
}