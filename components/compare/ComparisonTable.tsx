import { ArrowDownRight, ArrowUpRight, Crown, Minus } from "lucide-react";
import type { EntityCardLike, TableRow, TrendInfo } from "@/data/comparison-fixtures";

interface ComparisonTableProps<T> {
  entities: T[];
  cards: EntityCardLike[];
  rows: TableRow<T>[];
  title?: string;
  subtitle?: string;
}

export function ComparisonTable<T>({
  entities,
  cards,
  rows,
  title = "Side-by-side comparison",
  subtitle = "Investor-grade breakdown. Scroll horizontally on smaller screens — the first column stays in place.",
}: ComparisonTableProps<T>) {
  if (entities.length === 0) return null;

  return (
    <section>
      <div className="mb-4">
        <h2 className="text-xl font-bold text-foreground sm:text-2xl">{title}</h2>
        <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>
      </div>

      <div className="rounded-2xl border border-border bg-card shadow-card">
        <div className="relative max-h-[640px] overflow-auto rounded-2xl">
          <table className="w-full min-w-[720px] border-separate border-spacing-0 text-sm">
            <thead className="sticky top-0 z-20">
              <tr>
                <th
                  scope="col"
                  className="sticky left-0 z-30 border-b border-r border-border bg-card px-5 py-4 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                >
                  Attribute
                </th>
                {cards.map((c) => (
                  <th key={c.id} scope="col" className="border-b border-border bg-card px-5 py-4 text-left">
                    <div className="flex items-center gap-2.5">
                      <span
                        className="grid h-8 w-8 shrink-0 place-items-center rounded-lg text-[11px] font-bold text-white"
                        style={{ backgroundColor: c.logoColor }}
                      >
                        {c.monogram}
                      </span>
                      <div className="min-w-0">
                        <p className="truncate text-sm font-bold text-foreground">{c.name}</p>
                        <p className="truncate text-[11px] font-medium text-muted-foreground">{c.category}</p>
                      </div>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, rIdx) => {
                let bestIdx = -1;
                if (row.numeric && row.betterWhen) {
                  const values = entities.map((e) => row.numeric!(e));
                  const best = row.betterWhen === "higher" ? Math.max(...values) : Math.min(...values);
                  if (values.filter((v) => v === best).length === 1) {
                    bestIdx = values.indexOf(best);
                  }
                }
                return (
                  <tr key={row.key} className={rIdx % 2 === 0 ? "bg-card" : "bg-background/60"}>
                    <th
                      scope="row"
                      className={
                        "sticky left-0 z-10 border-b border-r border-border px-5 py-3.5 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground " +
                        (rIdx % 2 === 0 ? "bg-card" : "bg-background")
                      }
                    >
                      {row.label}
                    </th>
                    {entities.map((e, ci) => {
                      const isBest = ci === bestIdx;
                      const trend = row.trend ? row.trend(e) : null;
                      return (
                        <td key={cards[ci].id} className="border-b border-border px-5 py-3.5 align-top">
                          <div className="flex flex-wrap items-center gap-2">
                            <span
                              className={
                                "text-sm " +
                                (isBest ? "font-bold text-foreground" : "font-medium text-foreground")
                              }
                            >
                              {row.get(e)}
                            </span>
                            {trend && <TrendBadge trend={trend} />}
                            {isBest && (
                              <span className="inline-flex items-center gap-1 rounded-full bg-secondary px-2 py-0.5 text-[10px] font-semibold text-secondary-foreground">
                                <Crown className="h-2.5 w-2.5" />
                                Top
                              </span>
                            )}
                          </div>
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function TrendBadge({ trend }: { trend: TrendInfo }) {
  const positive = trend.delta > 0 && trend.status !== "warning";
  const negative = trend.delta < 0 || trend.status === "warning";
  const Icon = negative ? ArrowDownRight : positive ? ArrowUpRight : Minus;
  const cls =
    trend.status === "warning"
      ? "bg-warning/10 text-warning"
      : trend.status === "positive"
        ? "bg-success/10 text-success"
        : "bg-muted text-muted-foreground";
  return (
    <span className={`inline-flex items-center gap-0.5 rounded-full px-1.5 py-0.5 text-[10px] font-bold ${cls}`}>
      <Icon className="h-3 w-3" />
      {trend.delta > 0 ? "+" : ""}
      {trend.delta}%
    </span>
  );
}
