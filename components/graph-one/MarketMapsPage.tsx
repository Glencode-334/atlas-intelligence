import {Hero} from "@/components/sections/Hero";
import {DiscoverSection} from "@/components/sections/DiscoverSection";
import {EcosystemMap} from "@/components/sections/EcosystemMap";
import {FundingAndMarket} from "@/components/sections/FundingAndMarket";
import {Reports} from "@/components/sections/Reports";
import {MarketSignals} from "@/components/sections/MarketSignals";
import { CapitalIntelligenceSection } from "@/components/sections/CapitalIntelligenceSection";
import {FounderSpotlight} from "@/components/sections/FounderSpotlight";

export default function MarketMapsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main>
        <Hero />
        <DiscoverSection />
        <FounderSpotlight />  
        <EcosystemMap />
        <FundingAndMarket />
        <MarketSignals />
        <CapitalIntelligenceSection />
        <Reports />
      </main>
    </div>
  );
}
