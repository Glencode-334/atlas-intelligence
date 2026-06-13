export function StartupRegionChart() {
  return (
    <div className="flex h-full flex-col rounded-3xl border border-border bg-card p-5">
      <h3 className="font-semibold">
        Startup distribution
      </h3>

      <p className="mt-1 text-sm text-muted-foreground">
        Share of active AI startups.
      </p>

      <div className="mt-6 flex flex-1 flex-col">
        {[
          ["United States", 48],
          ["Europe", 22],
          ["Asia", 18],
          ["Middle East", 7],
          ["Other", 5],
        ].map(([region, value]) => (
          <div
            key={region}
            className="flex items-center justify-between"
          >
            <span className="text-sm">{region}</span>

            <span className="font-semibold text-primary">
              {value}%
            </span>
          </div>
        ))}
      </div>

      <div className="mt-auto flex justify-center">
        <div className="relative h-40 w-40 rounded-full border-[16px] border-primary/20">
          <div className="absolute inset-0 rounded-full border-[16px] border-primary border-r-transparent border-b-transparent" />
        </div>
      </div>
      <div className="mt-auto border-t border-border pt-4">
  <div className="flex items-center justify-between text-sm">
    <span className="text-muted-foreground">
      Fastest growing region
    </span>

    <span className="font-semibold text-primary">
      Asia
    </span>
  </div>

  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
    Asia continues to gain market share through strong activity in AI
    agents, robotics, semiconductor design, and enterprise automation.
  </p>
</div>
    </div>
  );
}