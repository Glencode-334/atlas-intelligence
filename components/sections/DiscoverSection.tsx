"use client";
import { useState } from "react";
import { TrendingStartups } from "@/components/sliders/TrendingStartups";
import { CategoryCard } from "@/components/cards/CategoryCard";

export function DiscoverSection() {
  const [view, setView] = useState<"startups" | "categories">(
    "startups"
  );

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-wider text-muted-foreground">
            {view === "startups"
              ? "Trending now"
              : "Category discovery"}
          </p>

          <h2 className="mt-1 text-2xl font-semibold tracking-tight">
            {view === "startups"
              ? "The startups everyone is watching"
              : "Track emerging AI categories"}
          </h2>

          <p className="mt-1 max-w-xl text-sm text-muted-foreground">
            {view === "startups"
              ? "Curated by the GraphOne research desk — refreshed every 24 hours."
              : "Sixteen live sectors of the AI economy, ranked by momentum across funding, hiring and product velocity."}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex rounded-lg border border-border bg-card p-1">
            <button
              onClick={() => setView("startups")}
              className={`rounded-lg px-3 py-1.5 text-sm font-medium transition ${
                view === "startups"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground"
              }`}
            >
              Trending Startups
            </button>

            <button
              onClick={() => setView("categories")}
              className={`rounded-lg px-3 py-1.5 text-sm font-medium transition ${
                view === "categories"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground"
              }`}
            >
              Categories
            </button>
          </div>

          <a
            href="#"
            className="hidden sm:inline-flex font-semibold text-primary hover:underline"
          >
            {view === "startups"
              ? "View all startups →"
              : "View all categories →"}
          </a>
        </div>
      </div>

      {/* Content */}
      {view === "startups" ? (
        <TrendingStartups />
      ) : (
        <CategoryCard />
      )}
    </section>
  );
}