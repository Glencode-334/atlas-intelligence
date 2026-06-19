import { Check, X, Package, Sparkles, Users, DollarSign } from "lucide-react";
import type { Product } from "@/data/comparison-fixtures";
import { productCards, productTableRows } from "@/data/comparison-fixtures";
import { ComparisonTable } from "./ComparisonTable";

interface ProductsTabProps {
  products: Product[];
}

export function ProductsTab({ products }: ProductsTabProps) {
  const cards = productCards.filter((c) => products.some((p) => p.id === c.id));

  return (
    <>
      <section>
        <div className="mb-4 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
          <div className="min-w-0">
            <h2 className="truncate text-xl font-bold text-foreground sm:text-2xl">Product snapshot</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Pricing, distribution and feature availability across selected products.
            </p>
          </div>
          <span className="shrink-0 rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
            {products.length} selected
          </span>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {products.map((p) => (
            <article
              key={p.id}
              className="flex flex-col rounded-2xl border border-border bg-card p-5 shadow-card transition-shadow hover:shadow-elevated"
            >
              <div className="flex items-start gap-3">
                <span
                  className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl text-xs font-bold text-white"
                  style={{ backgroundColor: p.logoColor }}
                >
                  {p.monogram}
                </span>
                <div className="min-w-0">
                  <h3 className="truncate text-base font-bold text-foreground">{p.name}</h3>
                  <p className="truncate text-xs font-medium text-muted-foreground">
                    {p.category} · by {p.company}
                  </p>
                </div>
              </div>

              <dl className="mt-5 grid grid-cols-2 gap-x-3 gap-y-3 text-xs">
                <Field icon={Sparkles} label="Latest" value={p.latestVersion} />
                <Field icon={Package} label="Launched" value={p.launched} />
                <Field icon={DollarSign} label="From" value={p.pricingStarts} accent />
                <Field icon={Users} label="MAU" value={p.mau} accent />
              </dl>

              <div className="mt-4 grid grid-cols-3 gap-2 border-t border-border pt-4 text-center">
                <Capability label="Free tier" on={p.freeTier} />
                <Capability label="Public API" on={p.apiAvailable} />
                <Capability label="SOC 2" on={p.soc2} />
              </div>

              <div className="mt-4 rounded-xl border border-border bg-background p-3">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                  Context window
                </p>
                <p className="mt-1 text-sm font-bold text-foreground">{p.contextWindow}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <ComparisonTable
        entities={products}
        cards={cards}
        rows={productTableRows}
        title="Feature & pricing comparison"
        subtitle="Side-by-side capability matrix to evaluate fit for an investment thesis or buying decision."
      />

      <section>
        <div className="mb-4">
          <h2 className="text-xl font-bold text-foreground sm:text-2xl">Release cadence & alternatives</h2>
          <p className="mt-1 text-sm text-muted-foreground">Latest three releases plus the most common alternatives buyers evaluate.</p>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {products.map((p) => (
            <div key={p.id} className="rounded-2xl border border-border bg-card p-5 shadow-card">
              <div className="mb-4 flex items-center gap-2.5">
                <span
                  className="grid h-8 w-8 shrink-0 place-items-center rounded-lg text-[11px] font-bold text-white"
                  style={{ backgroundColor: p.logoColor }}
                >
                  {p.monogram}
                </span>
                <h3 className="truncate text-sm font-bold text-foreground">{p.name}</h3>
              </div>
              <ul className="divide-y divide-border">
                {p.releaseNotes.map((r, i) => (
                  <li key={i} className="grid grid-cols-[auto_minmax(0,1fr)] items-baseline gap-3 py-3 first:pt-0 last:pb-0">
                    <span className="inline-flex shrink-0 items-center rounded-md bg-secondary px-2 py-0.5 text-[10px] font-bold text-secondary-foreground">
                      {r.version}
                    </span>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-foreground">{r.title}</p>
                      <p className="mt-0.5 text-xs text-muted-foreground">{r.date}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-4 border-t border-border pt-4">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                  Buyers also compare against
                </p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {p.alternatives.map((a) => (
                    <span
                      key={a}
                      className="inline-flex items-center rounded-full border border-border bg-background px-2.5 py-0.5 text-xs font-medium text-foreground"
                    >
                      {a}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

function Field({
  icon: Icon,
  label,
  value,
  accent,
}: {
  icon: typeof Package;
  label: string;
  value: string;
  accent?: boolean;
}) {
  return (
    <div className="min-w-0">
      <dt className="flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
        <Icon className="h-3 w-3" />
        {label}
      </dt>
      <dd className={"mt-1 truncate text-sm font-semibold " + (accent ? "text-primary" : "text-foreground")}>
        {value}
      </dd>
    </div>
  );
}

function Capability({ label, on }: { label: string; on: boolean }) {
  return (
    <div className="min-w-0">
      <span
        className={
          "mx-auto grid h-7 w-7 place-items-center rounded-full " +
          (on ? "bg-success/15 text-success" : "bg-muted text-muted-foreground")
        }
      >
        {on ? <Check className="h-3.5 w-3.5" /> : <X className="h-3.5 w-3.5" />}
      </span>
      <p className="mt-1.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">{label}</p>
    </div>
  );
}
