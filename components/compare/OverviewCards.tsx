import { Building2, Calendar, MapPin, Users, Briefcase, TrendingUp } from "lucide-react";
import type { Company } from "@/data/comparison-fixtures";

interface OverviewCardsProps {
  companies: Company[];
}

export function OverviewCards({ companies }: OverviewCardsProps) {
  return (
    <section>
      <div className="mb-4 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
        <div className="min-w-0">
          <h2 className="truncate text-xl font-bold text-foreground sm:text-2xl">Overview</h2>
          <p className="mt-1 text-sm text-muted-foreground">Premium snapshots across the selected entities.</p>
        </div>
        <span className="shrink-0 rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
          {companies.length} selected
        </span>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {companies.map((c) => (
          <article
            key={c.id}
            className="flex flex-col rounded-2xl border border-border bg-card p-5 shadow-card transition-shadow hover:shadow-elevated"
          >
            <div className="flex items-start gap-3">
              <span
                className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl text-sm font-bold text-white"
                style={{ backgroundColor: c.logoColor }}
              >
                {c.monogram}
              </span>
              <div className="min-w-0">
                <h3 className="truncate text-base font-bold text-foreground">{c.name}</h3>
                <p className="truncate text-xs font-medium text-muted-foreground">{c.category}</p>
              </div>
            </div>

            <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-muted-foreground">{c.description}</p>

            <dl className="mt-5 grid grid-cols-2 gap-x-3 gap-y-3 text-xs">
              <Field icon={Calendar} label="Founded" value={String(c.founded)} />
              <Field icon={MapPin} label="HQ" value={c.headquarters} />
              <Field icon={TrendingUp} label="Funding" value={c.funding} accent />
              <Field icon={Building2} label="Valuation" value={c.valuation} accent />
              <Field icon={Users} label="Employees" value={c.employees} />
              <Field icon={Briefcase} label="Open Jobs" value={String(c.openRoles)} />
            </dl>
          </article>
        ))}
      </div>
    </section>
  );
}

interface FieldProps {
  icon: typeof Calendar;
  label: string;
  value: string;
  accent?: boolean;
}

function Field({ icon: Icon, label, value, accent }: FieldProps) {
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
