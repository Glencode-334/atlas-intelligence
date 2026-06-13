export function FundingCategoryChart() {
  return (
    <div className="flex h-full flex-col rounded-3xl border border-border bg-card p-5">
      <h3 className="font-semibold">
        Funding by category
      </h3>

      <p className="mt-1 text-sm text-muted-foreground">
        Capital concentration by sector.
      </p>

      <div className="mt-5 flex-1 space-y-4">
        {[
          ["AI Coding", 92],
          ["AI Agents", 81],
          ["AI Search", 65],
          ["AI Video", 54],
          ["AI Voice", 42],
        ].map(([label, value]) => (
          <div key={label}>
            <div className="mb-1 flex justify-between text-sm">
              <span>{label}</span>
              <span>{value}%</span>
            </div>

            <div className="h-2 rounded-full bg-secondary">
              <div
                className="h-full rounded-full bg-primary"
                style={{ width: `${value}%` }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-auto border-t border-border pt-4">
  <div className="flex items-center justify-between text-sm">
    <span className="text-muted-foreground">
      Leading sector
    </span>
    <span className="font-semibold text-primary">
      AI Coding
    </span>
  </div>

  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
    Developer tooling continues to attract the largest share of new
    capital as enterprises prioritize productivity gains and workflow
    automation.
  </p>
</div>
    </div>
  );
}