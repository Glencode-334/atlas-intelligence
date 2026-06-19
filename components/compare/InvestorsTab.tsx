import { Landmark, Banknote, Target, Award, Calendar, MapPin } from "lucide-react";
import type { Investor } from "@/data/comparison-fixtures";
import { investorCards, investorTableRows } from "@/data/comparison-fixtures";
import { ComparisonTable } from "./ComparisonTable";

interface InvestorsTabProps {
  investors: Investor[];
}

export function InvestorsTab({ investors }: InvestorsTabProps) {
  const cards = investorCards.filter((c) => investors.some((i) => i.id === c.id));

  return (
    <>
      <section>
        <div className="mb-4 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
          <div className="min-w-0">
            <h2 className="truncate text-xl font-bold text-foreground sm:text-2xl">Firm overview</h2>
            <p className="mt-1 text-sm text-muted-foreground">AUM, dry powder and AI deployment momentum.</p>
          </div>
          <span className="shrink-0 rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
            {investors.length} selected
          </span>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {investors.map((i) => (
            <article
              key={i.id}
              className="flex flex-col rounded-2xl border border-border bg-card p-5 shadow-card transition-shadow hover:shadow-elevated"
            >
              <div className="flex items-start gap-3">
                <span
                  className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl text-xs font-bold text-white"
                  style={{ backgroundColor: i.logoColor }}
                >
                  {i.monogram}
                </span>
                <div className="min-w-0">
                  <h3 className="truncate text-base font-bold text-foreground">{i.name}</h3>
                  <p className="truncate text-xs font-medium text-muted-foreground">{i.category}</p>
                </div>
              </div>

              <dl className="mt-5 grid grid-cols-2 gap-x-3 gap-y-3 text-xs">
                <Field icon={Banknote} label="AUM" value={i.aum} accent />
                <Field icon={Target} label="Dry powder" value={i.dryPowder} accent />
                <Field icon={Award} label="Unicorns" value={String(i.unicorns)} />
                <Field icon={Landmark} label="AI deals 12mo" value={String(i.aiDeals12mo)} />
                <Field icon={Calendar} label="Founded" value={String(i.founded)} />
                <Field icon={MapPin} label="HQ" value={i.headquarters} />
              </dl>

              <div className="mt-4 border-t border-border pt-4">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Sector focus</p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {i.sectorFocus.map((s) => (
                    <span
                      key={s}
                      className="inline-flex items-center rounded-full border border-border bg-background px-2.5 py-0.5 text-[11px] font-medium text-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <ComparisonTable
        entities={investors}
        cards={cards}
        rows={investorTableRows}
        title="Firm-by-firm comparison"
        subtitle="Capital deployed, portfolio depth and check-size discipline across selected investors."
      />

      <section>
        <div className="mb-4">
          <h2 className="text-xl font-bold text-foreground sm:text-2xl">Recent deal activity</h2>
          <p className="mt-1 text-sm text-muted-foreground">Last three reported AI rounds led or co-led by each firm.</p>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {investors.map((i) => (
            <div key={i.id} className="rounded-2xl border border-border bg-card p-5 shadow-card">
              <div className="mb-4 flex items-center gap-2.5">
                <span
                  className="grid h-8 w-8 shrink-0 place-items-center rounded-lg text-[11px] font-bold text-white"
                  style={{ backgroundColor: i.logoColor }}
                >
                  {i.monogram}
                </span>
                <h3 className="truncate text-sm font-bold text-foreground">{i.name}</h3>
              </div>
              <ul className="divide-y divide-border">
                {i.recentDeals.map((d, idx) => (
                  <li key={idx} className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 py-3 first:pt-0 last:pb-0">
                    <div className="min-w-0">
                      <p className="truncate text-sm font-bold text-foreground">
                        {d.company} · {d.stage}
                      </p>
                      <p className="truncate text-xs text-muted-foreground">{d.date}</p>
                    </div>
                    <span className="shrink-0 text-sm font-bold text-primary">{d.amount}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 border-t border-border pt-4">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                  Frequent co-investors
                </p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {i.coInvestors.map((co) => (
                    <span
                      key={co}
                      className="inline-flex items-center rounded-full bg-secondary px-2.5 py-0.5 text-[11px] font-semibold text-secondary-foreground"
                    >
                      {co}
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
  icon: typeof Calendar;
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
