import { reports } from "@/data/market-maps-data";
import { ReportCard } from "@/components/cards/ReportCard";

export function Reports() {
  const small = reports.filter((r) => !r.featured);
  const featured = reports.find((r) => r.featured)!;

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-8 flex items-end justify-between gap-6">
        <div>
          <p className="text-xs uppercase tracking-wider text-muted-foreground">
            GraphOne Research
          </p>

          <h2 className="mt-2 text-3xl font-semibold tracking-tight">
            Reports &amp; Deep Dives
          </h2>

          <p className="mt-2 text-sm text-muted-foreground">
            In-house intelligence from the GraphOne research desk.
          </p>
        </div>

        <a
          href="#"
          className="hidden sm:inline-flex font-semibold text-primary hover:underline"
        >
          View all reports →
        </a>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <ReportCard r={featured} featured />

        {small.map((r) => (
          <ReportCard
            key={r.title}
            r={r}
          />
        ))}
      </div>
    </section>
  );
}