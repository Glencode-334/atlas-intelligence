import { useMemo, useState } from "react";
import Link  from "next/link";
import {
  Briefcase,
  Building2,
  GitCompare,
  Home,
  Landmark,
  Newspaper,
  Package,
  X,
} from "lucide-react";

import { HeroSection } from "@/components/compare/HeroSection";
import { ComparisonModeTabs } from "@/components/compare/ComparisonModeTabs";
import { EntityBuilder } from "@/components/compare/EntityBuilder";
import { OverviewCards } from "@/components/compare/OverviewCards";
import { ComparisonTable } from "@/components/compare/ComparisonTable";
import { ComparisonCharts } from "@/components/compare/ComparisonCharts";
import { InvestorComparison } from "@/components/compare/InvestorComparison";
import { RelatedIntelligence } from "@/components/compare/RelatedIntelligence";
import { InvestorsTab } from "@/components/compare/InvestorsTab";
import { FoundersTab } from "@/components/compare/FoundersTab";
import { ProductsTab } from "@/components/compare/ProductsTab";
import { NoSelection } from "@/components/compare/EmptyStates";

import {
  companies,
  companiesById,
  companyCards,
  investorsById,
  investorCards,
  foundersById,
  founderCards,
  productsById,
  productCards,
  popularComparisonsByMode,
  defaultSelectedIdsByMode,
  tableRows,
  type EntityMode,
  type EntityCardLike,
} from "@/data/comparison-fixtures";

export const Route = {
  head: () => ({
    meta: [
      { title: "Compare AI Startups, Investors & Products — GraphOne" },
      {
        name: "description",
        content:
          "GraphOne Comparison: investor-grade side-by-side analysis of AI startups, investors, founders and products with funding, hiring and market intelligence.",
      },
      { property: "og:title", content: "Compare AI Startups, Investors & Products — GraphOne" },
      {
        property: "og:description",
        content:
          "Side-by-side AI ecosystem intelligence: funding, hiring, valuations, founders and investor overlap.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ComparisonPage,
};

interface NavItem {
  label: string;
  icon: typeof Home;
  href: string;
  active?: boolean;
}

const navItems: NavItem[] = [
  { label: "Home", icon: Home, href: "/" },
  { label: "AI Startups", icon: Building2, href: "/" },
  { label: "AI Products", icon: Package, href: "/" },
  { label: "Investors", icon: Landmark, href: "/" },
  { label: "Jobs", icon: Briefcase, href: "/" },
  { label: "News", icon: Newspaper, href: "/" },
  { label: "Comparison", icon: GitCompare, href: "/comparison", active: true },
];

const searchPlaceholderByMode: Record<EntityMode, string> = {
  companies: "Search OpenAI, Anthropic, Perplexity…",
  investors: "Search Sequoia, a16z, Thrive…",
  founders: "Search Sam Altman, Dario Amodei…",
  products: "Search ChatGPT, Claude, Cursor…",
};

const entityNounByMode: Record<EntityMode, string> = {
  companies: "companies",
  investors: "investors",
  founders: "founders",
  products: "products",
};

export default function ComparisonPage() {
  const [mode, setMode] = useState<EntityMode>("companies");
  const [selectedByMode, setSelectedByMode] = useState<Record<EntityMode, string[]>>(defaultSelectedIdsByMode);
  const [heroQuery, setHeroQuery] = useState("");
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const selectedIds = selectedByMode[mode];

  const { entityCards, byId } = useMemo(() => {
    switch (mode) {
      case "investors":
        return { entityCards: investorCards, byId: investorsById as Record<string, unknown> };
      case "founders":
        return { entityCards: founderCards, byId: foundersById as Record<string, unknown> };
      case "products":
        return { entityCards: productCards, byId: productsById as Record<string, unknown> };
      default:
        return { entityCards: companyCards, byId: companiesById as Record<string, unknown> };
    }
  }, [mode]);

  const setSelectedIds = (updater: (prev: string[]) => string[]) =>
    setSelectedByMode((p) => ({ ...p, [mode]: updater(p[mode]) }));

  const handleAdd = (id: string) =>
    setSelectedIds((prev) => (prev.includes(id) || prev.length >= 4 ? prev : [...prev, id]));
  const handleRemove = (id: string) => setSelectedIds((prev) => prev.filter((x) => x !== id));
  const handlePreset = (ids: string[]) => {
    const valid = ids.filter((id) => byId[id]).slice(0, 4);
    if (valid.length > 0) setSelectedByMode((p) => ({ ...p, [mode]: valid }));
  };
  const handleLoadDemo = () => setSelectedByMode((p) => ({ ...p, [mode]: defaultSelectedIdsByMode[mode] }));

  return (
    <div className="min-h-screen bg-background">
      <div className="flex">

        <div className="flex min-w-0 flex-1 flex-col">

          <main className="mx-auto w-full max-w-[1440px] flex-1 px-4 py-6 sm:px-6 sm:py-8 lg:px-10">
            <div className="space-y-10">
              <HeroSection
                query={heroQuery}
                onQueryChange={setHeroQuery}
                onSelectPreset={handlePreset}
                presets={popularComparisonsByMode[mode]}
              />

              <ComparisonModeTabs mode={mode} onChange={setMode} />

              <EntityBuilder
                entities={entityCards}
                selectedIds={selectedIds}
                onAdd={handleAdd}
                onRemove={handleRemove}
                entityNoun={entityNounByMode[mode]}
                searchPlaceholder={searchPlaceholderByMode[mode]}
              />

              {selectedIds.length === 0 ? (
                <NoSelection onLoadDemo={handleLoadDemo} />
              ) : (
                <TabContent mode={mode} selectedIds={selectedIds} entityCards={entityCards} />
              )}
            </div>

            <footer className="mt-16 border-t border-border pt-6 text-xs text-muted-foreground">
              <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
                <p className="truncate">
                  GraphOne Intelligence · Data current as of Q1 2025 · {companies.length} entities indexed in this view
                </p>
                <p className="shrink-0">© {new Date().getFullYear()} GraphOne</p>
              </div>
            </footer>
          </main>
        </div>
      </div>

      <MobileNav open={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />
    </div>
  );
}

function TabContent({
  mode,
  selectedIds,
  entityCards,
}: {
  mode: EntityMode;
  selectedIds: string[];
  entityCards: EntityCardLike[];
}) {
  if (mode === "companies") {
    const selected = selectedIds.map((id) => companiesById[id]).filter(Boolean);
    const selectedCards = entityCards.filter((c) => selectedIds.includes(c.id));
    return (
      <>
        <OverviewCards companies={selected} />
        <ComparisonTable
          entities={selected}
          cards={selectedCards}
          rows={tableRows}
        />
        <ComparisonCharts companies={selected} />
        <InvestorComparison companies={selected} />
        <RelatedIntelligence companies={selected} />
      </>
    );
  }

  if (mode === "investors") {
    const selected = selectedIds.map((id) => investorsById[id]).filter(Boolean);
    return <InvestorsTab investors={selected} />;
  }

  if (mode === "founders") {
    const selected = selectedIds.map((id) => foundersById[id]).filter(Boolean);
    return <FoundersTab founders={selected} />;
  }

  const selected = selectedIds.map((id) => productsById[id]).filter(Boolean);
  return <ProductsTab products={selected} />;
}

function MobileNav({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true">
      <div className="absolute inset-0 bg-foreground/30 backdrop-blur-sm" onClick={onClose} />
      <aside className="absolute left-0 top-0 flex h-full w-72 flex-col border-r border-border bg-card shadow-elevated">
        <div className="flex h-16 items-center justify-between border-b border-border px-5">
          <div className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-primary-foreground">
              <GitCompare className="h-4 w-4" />
            </span>
            <p className="text-sm font-extrabold text-foreground">GraphOne</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close navigation"
            className="grid h-9 w-9 place-items-center rounded-xl border border-border bg-background text-foreground"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto px-3 py-5">
          <ul className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className={
                      "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold transition-colors " +
                      (item.active
                        ? "bg-secondary text-primary"
                        : "text-muted-foreground hover:bg-secondary/60 hover:text-foreground")
                    }
                  >
                    <Icon className="h-4 w-4 shrink-0" />
                    <span className="truncate">{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>
    </div>
  );
}
