import { useMemo, useState } from "react";
import { Plus, Search, X } from "lucide-react";
import type { EntityCardLike } from "@/data/comparison-fixtures";

interface EntityBuilderProps {
  entities: EntityCardLike[];
  selectedIds: string[];
  onAdd: (id: string) => void;
  onRemove: (id: string) => void;
  maxEntities?: number;
  entityNoun?: string;
  searchPlaceholder?: string;
}

export function EntityBuilder({
  entities,
  selectedIds,
  onAdd,
  onRemove,
  maxEntities = 4,
  entityNoun = "entities",
  searchPlaceholder = "Search…",
}: EntityBuilderProps) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);

  const selected = selectedIds
    .map((id) => entities.find((c) => c.id === id))
    .filter((c): c is EntityCardLike => Boolean(c));

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return entities
      .filter((c) => !selectedIds.includes(c.id))
      .filter((c) => !q || c.name.toLowerCase().includes(q) || c.category.toLowerCase().includes(q));
  }, [query, selectedIds, entities]);

  const slots: (EntityCardLike | null)[] = [
    ...selected,
    ...Array(Math.max(0, maxEntities - selected.length)).fill(null),
  ];

  return (
    <section className="rounded-3xl border border-border bg-card p-6 shadow-card sm:p-8">
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
        <div className="min-w-0">
          <h2 className="truncate text-lg font-bold text-foreground sm:text-xl">Build your comparison</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Add up to {maxEntities} {entityNoun} to compare side-by-side.
          </p>
        </div>
        <span className="shrink-0 rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
          {selected.length}/{maxEntities}
        </span>
      </div>

      <div className="relative mt-5">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-2 rounded-2xl border border-border bg-background p-2">
          <div className="flex min-w-0 items-center gap-2 pl-3">
            <Search className="h-4 w-4 shrink-0 text-muted-foreground" />
            <input
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setOpen(true);
              }}
              onFocus={() => setOpen(true)}
              onBlur={() => setTimeout(() => setOpen(false), 150)}
              placeholder={searchPlaceholder}
              className="w-full min-w-0 truncate bg-transparent py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
              disabled={selected.length >= maxEntities}
            />
          </div>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            disabled={selected.length >= maxEntities}
            className="inline-flex shrink-0 items-center gap-1.5 rounded-xl bg-foreground px-4 py-2 text-sm font-semibold text-background transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <Plus className="h-4 w-4" />
            Add
          </button>
        </div>

        {open && results.length > 0 && selected.length < maxEntities && (
          <div className="absolute left-0 right-0 top-full z-20 mt-2 overflow-hidden rounded-2xl border border-border bg-card shadow-elevated">
            <ul className="max-h-72 overflow-y-auto">
              {results.map((c) => (
                <li key={c.id}>
                  <button
                    type="button"
                    onMouseDown={(e) => {
                      e.preventDefault();
                      onAdd(c.id);
                      setQuery("");
                      setOpen(false);
                    }}
                    className="flex w-full items-center gap-3 px-4 py-3 text-left transition-colors hover:bg-secondary/60"
                  >
                    <span
                      className="grid h-9 w-9 shrink-0 place-items-center rounded-xl text-xs font-bold text-white"
                      style={{ backgroundColor: c.logoColor }}
                    >
                      {c.monogram}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-semibold text-foreground">{c.name}</p>
                      <p className="truncate text-xs text-muted-foreground">
                        {c.category} · {c.subtitle}
                      </p>
                    </div>
                    <span className="shrink-0 text-xs font-medium text-muted-foreground">
                      {c.primaryMetricValue}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {slots.map((c, i) =>
          c ? (
            <div
              key={c.id}
              className="group relative rounded-2xl border border-border bg-background p-4 transition-shadow hover:shadow-card"
            >
              <button
                type="button"
                onClick={() => onRemove(c.id)}
                aria-label={`Remove ${c.name}`}
                className="absolute right-3 top-3 grid h-7 w-7 place-items-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                <X className="h-3.5 w-3.5" />
              </button>
              <div className="flex items-center gap-3">
                <span
                  className="grid h-11 w-11 shrink-0 place-items-center rounded-xl text-sm font-bold text-white"
                  style={{ backgroundColor: c.logoColor }}
                >
                  {c.monogram}
                </span>
                <div className="min-w-0">
                  <p className="truncate text-sm font-bold text-foreground">{c.name}</p>
                  <p className="truncate text-xs text-muted-foreground">{c.category}</p>
                </div>
              </div>
              <dl className="mt-4 grid grid-cols-2 gap-2 text-xs">
                <div>
                  <dt className="text-muted-foreground">{c.primaryMetricLabel}</dt>
                  <dd className="font-semibold text-foreground">{c.primaryMetricValue}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">{c.secondaryMetricLabel}</dt>
                  <dd className="font-semibold text-foreground">{c.secondaryMetricValue}</dd>
                </div>
              </dl>
            </div>
          ) : (
            <button
              key={`empty-${i}`}
              type="button"
              onClick={() => setOpen(true)}
              className="grid min-h-[140px] place-items-center rounded-2xl border-2 border-dashed border-border bg-background/40 p-4 text-sm font-medium text-muted-foreground transition-colors hover:border-primary hover:bg-secondary/40 hover:text-foreground"
            >
              <div className="flex flex-col items-center gap-2">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-secondary text-primary">
                  <Plus className="h-4 w-4" />
                </span>
                Add {entityNoun.replace(/s$/, "")}
              </div>
            </button>
          ),
        )}
      </div>
    </section>
  );
}
