export function FundingTrendChart() {
  return (
      <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-4">
            <div className="mb-4">
        <p className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
          Market Momentum
        </p>

        <h3 className="mt-1 text-lg font-semibold">
          Funding Velocity
        </h3>

        <p className="mt-1 text-sm text-muted-foreground">
          Capital deployment accelerated after major foundation-model and AI coding rounds.
        </p>
      </div>

      <div className="mt-6 flex min-h-[220px] flex-1 items-end gap-3">
        {[42, 56, 48, 74, 89, 112].map((v, i) => (
          <div
            key={i}
            className="flex-1 rounded-t-xl bg-primary/80"
            style={{
              height: `${v}%`,
            }}
          />
        ))}
      </div>

      <div className="mt-2 flex justify-between text-xs text-muted-foreground">
        <span>Jan</span>
        <span>Feb</span>
        <span>Mar</span>
        <span>Apr</span>
        <span>May</span>
        <span>Jun</span>
      </div>
      <div className="mt-auto border-t border-border pt-4">
  <div className="flex items-center justify-between">
    <div>
      <p className="text-xs text-muted-foreground">
        6-month growth
      </p>

      <p className="text-lg font-semibold text-primary">
        +167%
      </p>
    </div>

    <div className="text-right">
      <p className="text-xs text-muted-foreground">
        Capital deployed
      </p>

      <p className="font-semibold">
        $24.8B
      </p>
    </div>
  </div>

  <p className="mt-2 text-xs text-muted-foreground">
    Funding activity accelerated sharply during Q2, driven primarily by
    foundation model infrastructure and AI coding platforms.
  </p>
</div>
    </div>
  );
}