import { Briefcase, GraduationCap, MapPin, Newspaper, Trophy } from "lucide-react";
import type { Founder } from "@/data/comparison-fixtures";
import { founderCards, founderTableRows } from "@/data/comparison-fixtures";
import { ComparisonTable } from "@/components/compare/ComparisonTable";

interface FoundersTabProps {
  founders: Founder[];
}

export function FoundersTab({ founders }: FoundersTabProps) {
  const cards = founderCards.filter((c) => founders.some((f) => f.id === c.id));

  return (
    <>
      <section>
        <div className="mb-4 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
          <div className="min-w-0">
            <h2 className="truncate text-xl font-bold text-foreground sm:text-2xl">Founder profiles</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Backgrounds, operating history and signature work.
            </p>
          </div>
          <span className="shrink-0 rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
            {founders.length} selected
          </span>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {founders.map((f) => (
            <article key={f.id} className="rounded-2xl border border-border bg-card p-5 shadow-card">
              <div className="grid grid-cols-[auto_minmax(0,1fr)] items-start gap-3">
                <span
                  className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl text-base font-bold text-white"
                  style={{ backgroundColor: f.logoColor }}
                >
                  {f.monogram}
                </span>
                <div className="min-w-0">
                  <p className="truncate text-lg font-bold text-foreground">{f.name}</p>
                  <p className="truncate text-xs font-medium text-muted-foreground">
                    {f.currentRole} · {f.currentCompany}
                  </p>
                  <p className="mt-0.5 flex items-center gap-1 text-[11px] text-muted-foreground">
                    <MapPin className="h-3 w-3" />
                    {f.headquarters}
                  </p>
                </div>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{f.background}</p>

              <div className="mt-4 grid grid-cols-3 gap-2 rounded-xl border border-border bg-background p-3 text-center">
                <Stat label="Founded" value={String(f.companiesFounded)} />
                <Stat label="Raised" value={f.totalRaised} accent />
                <Stat label="Years" value={String(f.yearsOperating)} />
              </div>

              <div className="mt-4 space-y-3">
                <FieldRow icon={Briefcase} label="Previous companies">
                  <div className="flex flex-wrap gap-1.5">
                    {f.previousCompanies.map((pc) => (
                      <span
                        key={pc}
                        className="inline-flex items-center rounded-full border border-border bg-background px-2.5 py-0.5 text-xs font-medium text-foreground"
                      >
                        {pc}
                      </span>
                    ))}
                  </div>
                </FieldRow>
                <FieldRow icon={GraduationCap} label="Education">
                  <p className="text-sm text-foreground">{f.education}</p>
                </FieldRow>
                <FieldRow icon={Trophy} label="Notable work">
                  <ul className="space-y-1 text-sm text-foreground">
                    {f.notableWork.map((n) => (
                      <li key={n} className="grid grid-cols-[auto_minmax(0,1fr)] items-baseline gap-2">
                        <span className="h-1 w-1 rounded-full bg-primary" />
                        <span>{n}</span>
                      </li>
                    ))}
                  </ul>
                </FieldRow>
              </div>

              <div className="mt-4 flex flex-wrap gap-2 border-t border-border pt-4">
                {f.social.map((s) => (
                  <span
                    key={s.platform + s.handle}
                    className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground"
                  >
                    <span className="opacity-70">{s.platform}</span>
                    {s.handle}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <ComparisonTable
        entities={founders}
        cards={cards}
        rows={founderTableRows}
        title="Track-record comparison"
        subtitle="Companies founded, capital raised across ventures and operating tenure."
      />

      <section>
        <div className="mb-4 flex items-center gap-2">
          <Newspaper className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-bold text-foreground sm:text-2xl">Recent press</h2>
        </div>
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {founders.map((f) => (
            <div key={f.id} className="rounded-2xl border border-border bg-card p-5 shadow-card">
              <div className="mb-3 flex items-center gap-2.5">
                <span
                  className="grid h-7 w-7 shrink-0 place-items-center rounded-md text-[10px] font-bold text-white"
                  style={{ backgroundColor: f.logoColor }}
                >
                  {f.monogram}
                </span>
                <h3 className="text-sm font-bold text-foreground">{f.name}</h3>
              </div>
              <ul className="divide-y divide-border">
                {f.recentPress.map((p, i) => (
                  <li key={i} className="py-3 first:pt-0 last:pb-0">
                    <p className="line-clamp-2 text-sm font-semibold text-foreground">{p.title}</p>
                    <p className="mt-0.5 text-xs text-muted-foreground">
                      {p.source} · {p.date}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

function Stat({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div className="min-w-0">
      <p className={"truncate text-base font-extrabold " + (accent ? "text-primary" : "text-foreground")}>
        {value}
      </p>
      <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">{label}</p>
    </div>
  );
}

function FieldRow({
  icon: Icon,
  label,
  children,
}: {
  icon: typeof Briefcase;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
        <Icon className="h-3 w-3" />
        {label}
      </p>
      <div className="mt-1.5">{children}</div>
    </div>
  );
}
