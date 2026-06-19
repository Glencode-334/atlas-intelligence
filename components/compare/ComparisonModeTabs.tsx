import { Building2, Landmark, User, Box } from "lucide-react";
import type { EntityMode } from "@/data/comparison-fixtures";

interface ComparisonModeTabsProps {
  mode: EntityMode;
  onChange: (m: EntityMode) => void;
}

const tabs: { id: EntityMode; label: string; icon: typeof Building2 }[] = [
  { id: "companies", label: "Companies", icon: Building2 },
  { id: "investors", label: "Investors", icon: Landmark },
  { id: "founders", label: "Founders", icon: User },
  { id: "products", label: "Products", icon: Box },
];

export function ComparisonModeTabs({ mode, onChange }: ComparisonModeTabsProps) {
  return (
    <div className="flex w-full items-center justify-center">
      <div
        role="tablist"
        aria-label="Comparison mode"
        className="inline-flex w-full max-w-2xl items-center gap-1 rounded-2xl border border-border bg-card p-1 shadow-card sm:w-auto"
      >
        {tabs.map((t) => {
          const Icon = t.icon;
          const active = mode === t.id;
          return (
            <button 
              key={t.id}
              role="tab"
              aria-selected={active}
              onClick={() => onChange(t.id)}
              className={
                "inline-flex flex-1 items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition-all sm:flex-none " +
                (active
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground")
              }
            >
              <Icon className="h-4 w-4" />
              <span>{t.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
