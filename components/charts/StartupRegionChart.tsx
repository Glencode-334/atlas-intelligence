const regions = [
  { name: "North America", value: 48 },
  { name: "Europe", value: 22 },
  { name: "Asia", value: 18 },
  { name: "Middle East", value: 7 },
  { name: "Other", value: 5 },
];

export function StartupRegionChart() {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-4">

      {/* Header */}
      <div>
          <p className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
            Global Ecosystem
          </p>

          <h3 className="mt-1 font-semibold">
            Startup Distribution
          </h3>

          <p className="mt-1 text-sm text-muted-foreground">
            AI startup activity remains concentrated in North America while Asia continues to gain momentum.
          </p>
      </div>

      <div className="mt-6 flex justify-center">
        <div className="relative flex h-44 w-44 items-center justify-center">

          <div
            className="absolute inset-0 rounded-full"
            style={{
              background:
                "conic-gradient(var(--primary) 0% 48%, oklch(0.72 0.12 250) 48% 70%, oklch(0.72 0.15 150) 70% 88%, oklch(0.72 0.15 40) 88% 95%, oklch(0.88 0.02 250) 95% 100%)",
            }}
          />

          <div className="absolute inset-[18px] rounded-full bg-card" />

          <div className="relative z-10 text-center">
            <p className="text-3xl font-bold">
              48%
            </p>

            <p className="text-xs text-muted-foreground">
              North America
            </p>
          </div>

        </div>
      </div>

      <div className="mt-5 space-y-2">
        {regions.map((r) => (
          <div
            key={r.name}
            className="flex items-center justify-between text-sm"
          >
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-primary" />
              <span>{r.name}</span>
            </div>

            <span className="font-semibold">
              {r.value}%
            </span>
          </div>
        ))}
      </div>

      <div className="mt-4 border-t border-border pt-4">
        <p className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
          Key Insight
        </p>

        <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
          Paris, Singapore and Bangalore are emerging as the fastest-growing AI ecosystems outside North America.
        </p>
      </div>

    </div>
  );
}