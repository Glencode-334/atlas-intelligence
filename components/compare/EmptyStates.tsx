import { AlertCircle, Inbox, Loader2, SearchX } from "lucide-react";

interface BaseProps {
  title: string;
  description?: string;
  action?: { label: string; onClick: () => void };
}

function Frame({
  icon,
  title,
  description,
  action,
  tone = "neutral",
}: BaseProps & { icon: React.ReactNode; tone?: "neutral" | "error" }) {
  return (
    <div className="rounded-3xl border border-dashed border-border bg-card p-10 text-center shadow-card">
      <div
        className={
          "mx-auto grid h-12 w-12 place-items-center rounded-2xl " +
          (tone === "error" ? "bg-destructive/10 text-destructive" : "bg-secondary text-primary")
        }
      >
        {icon}
      </div>
      <h3 className="mt-4 text-base font-bold text-foreground">{title}</h3>
      {description && <p className="mx-auto mt-1 max-w-md text-sm text-muted-foreground">{description}</p>}
      {action && (
        <button
          type="button"
          onClick={action.onClick}
          className="mt-5 inline-flex items-center justify-center rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-[var(--primary-hover)]"
        >
          {action.label}
        </button>
      )}
    </div>
  );
}

export function NoSelection({ onLoadDemo }: { onLoadDemo: () => void }) {
  return (
    <Frame
      icon={<Inbox className="h-5 w-5" />}
      title="No entities selected"
      description="Add up to four companies above to see overview cards, the full comparison table, intelligence signals and trend charts."
      action={{ label: "Load demo comparison", onClick: onLoadDemo }}
    />
  );
}

export function NoResults({ query }: { query: string }) {
  return (
    <Frame
      icon={<SearchX className="h-5 w-5" />}
      title={`No matches for "${query}"`}
      description="Try a different name, ticker or category. GraphOne tracks 18,000+ AI companies."
    />
  );
}

export function LoadingState() {
  return (
    <div className="rounded-3xl border border-border bg-card p-10 text-center shadow-card">
      <div className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-secondary text-primary">
        <Loader2 className="h-5 w-5 animate-spin" />
      </div>
      <p className="mt-4 text-sm font-semibold text-foreground">Crunching intelligence data…</p>
      <p className="mt-1 text-xs text-muted-foreground">Aggregating funding, hiring and product signals.</p>

      <div className="mx-auto mt-6 grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="h-28 animate-pulse rounded-2xl bg-secondary/60" />
        ))}
      </div>
    </div>
  );
}

export function ErrorState({ onRetry }: { onRetry: () => void }) {
  return (
    <Frame
      icon={<AlertCircle className="h-5 w-5" />}
      title="Something went wrong"
      description="We couldn't load comparison data. Check your connection and try again."
      action={{ label: "Retry", onClick: onRetry }}
      tone="error"
    />
  );
}
