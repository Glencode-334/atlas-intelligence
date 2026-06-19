import { Newspaper, TrendingUp, Building2, Swords, FileText } from "lucide-react";
import type { Company } from "@/data/comparison-fixtures";
import { relatedStartups, marketReports } from "@/data/comparison-fixtures";

interface RelatedIntelligenceProps {
  companies: Company[];
}

export function RelatedIntelligence({ companies }: RelatedIntelligenceProps) {
  const allRounds = companies
    .flatMap((c) => c.recentRounds.map((r) => ({ ...r, company: c })))
    .sort((a, b) => Date.parse(`01 ${b.date}`) - Date.parse(`01 ${a.date}`))
    .slice(0, 6);

  const allNews = companies
    .flatMap((c) => c.news.map((n) => ({ ...n, company: c })))
    .sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
    .slice(0, 6);

  const competitors = Array.from(new Set(companies.flatMap((c) => c.competitors))).slice(0, 12);

  return (
    <section>
      <div className="mb-4">
        <h2 className="text-xl font-bold text-foreground sm:text-2xl">Related intelligence</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Adjacent activity across the AI ecosystem connected to your comparison.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        <Card title="Recent funding rounds" icon={TrendingUp}>
          <ul className="divide-y divide-border">
            {allRounds.map((r, i) => (
              <li key={i} className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 py-3 first:pt-0 last:pb-0">
                <span
                  className="grid h-9 w-9 shrink-0 place-items-center rounded-lg text-[11px] font-bold text-white"
                  style={{ backgroundColor: r.company.logoColor }}
                >
                  {r.company.monogram}
                </span>
                <div className="min-w-0">
                  <p className="truncate text-sm font-bold text-foreground">
                    {r.company.name} · {r.stage}
                  </p>
                  <p className="truncate text-xs text-muted-foreground">
                    Led by {r.leadInvestor} · {r.date}
                  </p>
                </div>
                <span className="shrink-0 text-sm font-bold text-primary">{r.amount}</span>
              </li>
            ))}
          </ul>
        </Card>

        <Card title="Recent news" icon={Newspaper}>
          <ul className="divide-y divide-border">
            {allNews.map((n, i) => (
              <li key={i} className="grid grid-cols-[auto_minmax(0,1fr)] items-start gap-3 py-3 first:pt-0 last:pb-0">
                <span
                  className="grid h-9 w-9 shrink-0 place-items-center rounded-lg text-[11px] font-bold text-white"
                  style={{ backgroundColor: n.company.logoColor }}
                >
                  {n.company.monogram}
                </span>
                <div className="min-w-0">
                  <p className="line-clamp-2 text-sm font-semibold text-foreground">{n.title}</p>
                  <p className="mt-0.5 truncate text-xs text-muted-foreground">
                    {n.source} · {n.date}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </Card>

        <Card title="Related startups" icon={Building2}>
          <ul className="divide-y divide-border">
            {relatedStartups.map((s) => (
              <li key={s.name} className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 py-3 first:pt-0 last:pb-0">
                <div className="min-w-0">
                  <p className="truncate text-sm font-bold text-foreground">{s.name}</p>
                  <p className="truncate text-xs text-muted-foreground">
                    {s.category} · {s.hq}
                  </p>
                </div>
                <span className="shrink-0 text-sm font-semibold text-foreground">{s.funding}</span>
              </li>
            ))}
          </ul>
        </Card>

        <Card title="Competitor landscape" icon={Swords}>
          <div className="flex flex-wrap gap-2">
            {competitors.map((c) => (
              <span
                key={c}
                className="inline-flex items-center rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-foreground"
              >
                {c}
              </span>
            ))}
          </div>
        </Card>

        <Card title="Market reports" icon={FileText} className="lg:col-span-2">
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {marketReports.map((r) => (
              <li
                key={r.title}
                className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 rounded-xl border border-border bg-background p-3"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-secondary text-primary">
                  <FileText className="h-4 w-4" />
                </span>
                <div className="min-w-0">
                  <p className="truncate text-sm font-bold text-foreground">{r.title}</p>
                  <p className="truncate text-xs text-muted-foreground">
                    {r.source} · {r.date}
                  </p>
                </div>
                <span className="shrink-0 text-xs font-semibold text-muted-foreground">{r.pages}p</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </section>
  );
}

function Card({
  title,
  icon: Icon,
  children,
  className,
}: {
  title: string;
  icon: typeof Newspaper;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={"rounded-2xl border border-border bg-card p-5 shadow-card " + (className ?? "")}>
      <div className="mb-4 flex items-center gap-2.5">
        <span className="grid h-8 w-8 place-items-center rounded-lg bg-secondary text-primary">
          <Icon className="h-4 w-4" />
        </span>
        <h3 className="text-sm font-bold text-foreground">{title}</h3>
      </div>
      {children}
    </div>
  );
}
