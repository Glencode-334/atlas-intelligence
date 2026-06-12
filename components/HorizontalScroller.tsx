"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, type ReactNode } from "react";

interface HorizontalScrollerProps {
  children: ReactNode;
  cardWidth?: number;
}

export function HorizontalScroller({
  children,
  cardWidth = 280,
}: HorizontalScrollerProps) {
  const ref = useRef<HTMLDivElement>(null);

  const scrollByAmount = (dir: 1 | -1) => {
    ref.current?.scrollBy({
      left: dir * (cardWidth + 16) * 2,
      behavior: "smooth",
    });
  };

  return (
    <div className="group relative">
      <div
        ref={ref}
        className="no-scrollbar flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-1"
      >
        {children}
      </div>

      <button
        onClick={() => scrollByAmount(-1)}
        className="absolute left-0 top-1/2 z-10 hidden h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-border bg-background shadow-sm transition-opacity hover:bg-muted md:grid md:opacity-0 md:group-hover:opacity-100"
        aria-label="Scroll left"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>

      <button
        onClick={() => scrollByAmount(1)}
        className="absolute right-0 top-1/2 z-10 hidden h-10 w-10 translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-border bg-background shadow-sm transition-opacity hover:bg-muted md:grid md:opacity-0 md:group-hover:opacity-100"
        aria-label="Scroll right"
      >
        <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  );
}