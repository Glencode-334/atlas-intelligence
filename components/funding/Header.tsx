import Link from "next/link";
import { Search, Star } from "lucide-react";
import { navItems } from "@/data/funding";

export function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white border-b border-line">
      <div className="mx-auto max-w-[1200px] px-6 h-16 flex items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-2 shrink-0" aria-label="Graph1 home">
          <span
            className="grid place-items-center text-white font-extrabold text-[13px]"
            style={{ width: 28, height: 28, borderRadius: 8, background: "var(--brand)" }}
            aria-hidden
          >
            G1
          </span>
          <span className="font-extrabold text-[17px] text-ink tracking-tight">Graph1</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8" aria-label="Primary">
          {navItems.map((item) => {
            const active = item === "Funding";
            return (
              <Link
                key={item}
                href="#"
                className={`relative text-[14px] font-medium py-5 transition-colors ${
                  active ? "text-brand" : "text-ink hover:text-brand"
                }`}
                aria-current={active ? "page" : undefined}
              >
                {item}
                {active && (
                  <span
                    className="absolute left-0 right-0 -bottom-[1px] h-[2px] bg-brand rounded-full"
                    aria-hidden
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3 shrink-0">
          <button
            aria-label="Search"
            className="grid place-items-center w-9 h-9 rounded-full text-ink hover:bg-secondary"
          >
            <Search className="w-[18px] h-[18px]" />
          </button>
          <button
            className="inline-flex items-center gap-1.5 h-9 px-3.5 rounded-full text-[13px] font-semibold text-brand"
            style={{ background: "var(--pink-panel)" }}
          >
            <Star className="w-3.5 h-3.5 fill-brand text-brand" />
            Get Pro Access
          </button>
          <div
            className="w-9 h-9 rounded-full bg-gradient-to-br from-orange-200 to-rose-300 border border-line shrink-0"
            aria-label="Account"
          />
        </div>
      </div>
    </header>
  );
}
