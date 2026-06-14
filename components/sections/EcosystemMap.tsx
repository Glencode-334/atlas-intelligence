"use client";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { BigGraph } from "@/components/charts/BigGraph";
import {entityData} from "@/lib/atlas-data";

export function EcosystemMap() {
  const [selectedNode, setSelectedNode] =
  useState("OpenAI");

  const focus =
  entityData[
    selectedNode as keyof typeof entityData
  ] || entityData.OpenAI;

  const filters = [
    "All",
    "Founder → Company",
    "Investor → Startup",
    "Startup → Model",
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 pb-14">
      <div className="mb-5 flex items-end justify-between gap-6">
        <div>
          <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
            Atlas knowledge graph
          </p>

          <h2 className="mt-2 text-2xl font-semibold tracking-tight">
            The AI ecosystem, mapped
          </h2>

          <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
            Relationships between startups, founders, investors,
            foundation models and enterprises.
          </p>
        </div>

        <a
          href="#"
          className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
        >
          Open full graph
          <ArrowUpRight className="size-4" />
        </a>
      </div>

      <div className="mb-5 grid gap-3 md:grid-cols-4">
        <div className="rounded-2xl border border-border bg-card p-4">
          <p className="text-xs text-muted-foreground">
            Startups
          </p>

          <p className="mt-1 text-2xl font-semibold">
            26.4K
          </p>
        </div>

        <div className="rounded-2xl border border-border bg-card p-4">
          <p className="text-xs text-muted-foreground">
            Investors
          </p>

          <p className="mt-1 text-2xl font-semibold">
            3.8K
          </p>
        </div>

        <div className="rounded-2xl border border-border bg-card p-4">
          <p className="text-xs text-muted-foreground">
            Relationships
          </p>

          <p className="mt-1 text-2xl font-semibold">
            184K
          </p>
        </div>

        <div className="rounded-2xl border border-border bg-card p-4">
          <p className="text-xs text-muted-foreground">
            Funding Tracked
          </p>

          <p className="mt-1 text-2xl font-semibold">
            $500B+
          </p>
        </div>

      </div>

      <div className="mb-4 flex flex-wrap gap-2">
        {filters.map((f, i) => (
          <button
            key={f}
            className={`rounded-full px-3 py-1.5 text-xs transition-colors ${
              i === 0
                ? "bg-primary text-primary-foreground"
                : "border border-border bg-card text-muted-foreground hover:text-foreground"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid gap-4 lg:grid-cols-[7fr_3fr]">
        {/* GRAPH */}
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
          <div
            className="absolute inset-0"
            style={{ background: "var(--gradient-network)" }}
          />

          <div className="relative h-full min-h-[540px]">
            <BigGraph
              selectedNode={selectedNode}
              setSelectedNode={setSelectedNode}
            />

            <div className="absolute left-4 top-4 rounded-full border border-border bg-background/80 px-3 py-1 text-[10px] text-muted-foreground backdrop-blur">
              26k nodes · 184k links
            </div>

            <div className="absolute bottom-4 left-4 rounded-2xl border border-border bg-background/90 p-3 text-[11px] backdrop-blur">

              <p className="mb-2 font-medium">
                Graph Legend
              </p>

              <div className="space-y-2">

                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-[oklch(0.62_0.16_150)]" />
                  <span>Foundation Models</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-[oklch(0.68_0.21_18)]" />
                  <span>AI Startups</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-[oklch(0.62_0.14_230)]" />
                  <span>Investors</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-[oklch(0.55_0.18_300)]" />
                  <span>Enterprises</span>
                </div>

              </div>

            </div>
          </div>
        </div>

        {/* SIDEBAR */}
        <div className="rounded-3xl border border-border bg-card p-5 shadow-sm">

        {/* HEADER */}

          <div className="border-b border-border pb-4">
            <p className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
              Entity Intelligence
            </p>

        <div className="mt-4 flex items-start justify-between">
          <div className="flex items-center gap-3">
            <span className="grid size-12 place-items-center rounded-2xl bg-primary-soft text-sm font-semibold text-accent-foreground">
              {focus.name
                .split(" ")
                .map((n: string) => n[0])
                .slice(0, 2)
                .join("")}
            </span>

            <div>
              <h3 className="font-semibold tracking-tight">
                {focus.name}
              </h3>

              <p className="text-xs text-muted-foreground">
                {focus.type}
              </p>

              <p className="text-xs text-muted-foreground">
                {focus.location}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          <span className="rounded-full bg-primary-soft px-2.5 py-1 text-[11px] font-medium">
            {focus.nodeCount}
          </span>

          <span className="rounded-full bg-secondary px-2.5 py-1 text-[11px]">
            {focus.rank}
          </span>
        </div>

          </div>

        {/* METRICS */}

          <div className="mt-5 grid grid-cols-2 gap-3">
            <div className="rounded-xl border border-border p-3">
              <p className="text-[10px] uppercase text-muted-foreground">
                Funding
              </p>

          <p className="mt-1 font-semibold text-primary">
            {focus.funding}
          </p>
        </div>

        <div className="rounded-xl border border-border p-3">
          <p className="text-[10px] uppercase text-muted-foreground">
            Network Rank
          </p>

          <p className="mt-1 font-semibold">
            {focus.rank}
          </p>
        </div>

          </div>

        {/* INVESTORS */}

          <div className="mt-5">
            <p className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
              Investors
            </p>

        <div className="mt-2 flex flex-wrap gap-1.5">
          {focus.investors.map((i: string) => (
            <span
              key={i}
              className="rounded-full bg-secondary px-2.5 py-1 text-[11px]"
            >
              {i}
            </span>
          ))}
        </div>

          </div>

        {/* PRODUCTS */}

          <div className="mt-5">
            <p className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
              Products
            </p>

        <div className="mt-2 flex flex-wrap gap-1.5">
          {focus.products.map((p: string) => (
            <span
              key={p}
              className="rounded-full bg-primary-soft px-2.5 py-1 text-[11px]"
            >
              {p}
            </span>
          ))}
        </div>
          </div>

        {/* COMPETITORS */}

          <div className="mt-5">
            <p className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
              Competitors
            </p>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {focus.competitors.map((c: string) => (
            <span
              key={c}
              className="rounded-full border border-border px-2.5 py-1 text-[11px]"
            >
              {c}
            </span>
          ))}
        </div>

          </div>

        {/* CONNECTIONS */}

          <div className="mt-5">
            <p className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
              Network Connections
            </p>

        <div className="mt-2 flex flex-wrap gap-1.5">
          {focus.connections.map((c: string) => (
            <button
              key={c}
              onClick={() => {
                if (entityData[c]) {
                  setSelectedNode(c);
                }
              }}
              className="rounded-full bg-secondary px-2.5 py-1 text-[11px] hover:bg-primary hover:text-white transition"
            >
              {c}
            </button>
          ))}
        </div>

          </div>

        {/* SIGNALS */}

          <div className="mt-5 border-t border-border pt-4">
            <p className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
              Recent Signals
            </p>

        <div className="mt-3 space-y-3">
          {focus.relationships.map((r) => (
            <div
              key={r.text}
              className="rounded-xl border border-border bg-secondary/20 p-3"
            >
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-primary-soft px-2 py-0.5 text-[10px] font-medium">
                  {r.kind}
                </span>

                <span className="text-[10px] text-muted-foreground">
                  {r.date}
                </span>
              </div>

              <p className="mt-2 text-xs leading-relaxed">
                {r.text}
              </p>
            </div>
          ))}
        </div>
          </div>
        </div>
      </div>
    </section>
  );
}