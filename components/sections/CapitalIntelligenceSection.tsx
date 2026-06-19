"use client";

import { useState } from "react";
import { Investors } from "@/components/sliders/Investors";
import { Acquisitions } from "@/components/sliders/Acquisitions";

export function CapitalIntelligenceSection() {
  const [view, setView] = useState<
    "investors" | "acquisitions"
  >("investors");

  const isInvestors = view === "investors";

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-wider text-muted-foreground">
            {isInvestors
              ? "Investor intelligence"
              : "M&A Intelligence"}
          </p>

          <h2 className="mt-1 text-2xl font-semibold tracking-tight">
            {isInvestors
              ? "Where capital is flowing"
              : "Strategic acquisitions"}
          </h2>

          <p className="mt-1 max-w-xl text-sm text-muted-foreground">
            {isInvestors
              ? "Track the investors shaping the AI ecosystem — deal velocity, sector focus and portfolio momentum."
              : "How hyperscalers and platform companies are absorbing AI talent and technology."}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex rounded-lg border border-border bg-card p-1">
            <button
              onClick={() => setView("investors")}
              className={`rounded-lg px-3 py-1.5 text-sm font-medium transition ${
                isInvestors
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground"
              }`}
            >
              Investors
            </button>

            <button
              onClick={() => setView("acquisitions")}
              className={`rounded-lg px-3 py-1.5 text-sm font-medium transition ${
                !isInvestors
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground"
              }`}
            >
              Acquisitions
            </button>
          </div>

          <a
            href="#"
            className="hidden sm:inline-flex font-semibold text-primary hover:underline"
          >
            {isInvestors
              ? "View all investors →"
              : "View all deals →"}
          </a>
        </div>
      </div>

      {isInvestors ? (
        <Investors />
      ) : (
        <Acquisitions />
      )}
    </section>
  );
}