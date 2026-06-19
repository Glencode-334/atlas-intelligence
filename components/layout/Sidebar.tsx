"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV = [
  {
    href: "/",
    label: "Home",
    icon: (
      <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
  },
  {
    href: "/startups",
    label: "AI Startups",
    icon: (
      <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.63 8.41a14.98 14.98 0 00-2.58 5.84m8.54.12L12.5 16.5m-5.45-2.23L4 12.5m17.5-6.5a1 1 0 11-2 0 1 1 0 012 0zM3.75 20.25h.008v.008H3.75v-.008z" />
      </svg>
    ),
  },
  {
    href: "/products",
    label: "AI Products",
    icon: (
      <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
      </svg>
    ),
  },
  {
    href: "/investors",
    label: "Investors",
    icon: (
      <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    href: "/jobs",
    label: "Jobs",
    icon: (
      <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 .621-.504 1.125-1.125 1.125H4.875c-.621 0-1.125-.504-1.125-1.125v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.45.258-.717.258H5.64c-.266 0-.523-.093-.717-.257a2.18 2.18 0 01-.75-1.661V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25c0-.621-.504-1.125-1.125-1.125h-4.875c-.621 0-1.125.504-1.125 1.125v1.125m7.5 0a48.567 48.567 0 01-7.5 0" />
      </svg>
    ),
  },
  {
    href: "/news",
    label: "News",
    icon: (
      <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
      </svg>
    ),
  },
];

const SIDEBAR_W = 250;

export default function Sidebar() {
  const path = usePathname();
  return (
    <aside
      className="fixed left-0 top-0 h-screen bg-white z-40"
      style={{ width: SIDEBAR_W }}
    >
      <div className="flex flex-col h-full bg-white overflow-y-auto overflow-x-hidden border-r border-[#F0F0F0]">
      {/* Brand Logo Header */}
      <Link
        href="/"
        className="flex items-center gap-2.5 px-6 pt-6 pb-6 flex-shrink-0 hover:opacity-90 transition-opacity select-none"
      >
        <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-[#FF385C] shadow-sm shadow-[#FF385C]/20">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L2 7l10 5 10-5-10-5z" fill="white" />
            <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="white" strokeWidth="1.8" />
          </svg>
        </div>
        <div>
          <p className="text-[16px] font-extrabold tracking-tight text-[#222222]">GraphOne</p>
        </div>
      </Link>

      {/* Main Navigation List */}
      <nav className="flex-1 px-3 space-y-[4px]">
        {NAV.map((item) => {
          const active = item.href === "/" ? path === "/" : path ? path.startsWith(item.href) : false;
          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3.5 px-4 py-3 rounded-xl text-[14px] font-semibold transition-all duration-200"
              style={{
                background: active ? "#FFEBEF" : "transparent",
                color: active ? "#FF385C" : "#484848",
              }}
            >
              <span
                style={{
                  color: active ? "#FF385C" : "#9CA3AF",
                  display: "flex",
                  flexShrink: 0,
                }}
              >
                {item.icon}
              </span>
              {item.label}
            </Link>
          );
        })}

        {/* Contribute Section Header */}
        <div className="px-4 pt-6 pb-2 select-none">
          <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">Contribute</p>
        </div>

        {/* Contribute Links */}
        <Link
          href="/submit?type=startup"
          className="flex items-center gap-3.5 px-4 py-2.5 rounded-xl text-[14px] font-semibold text-[#484848] hover:bg-slate-50 transition-all duration-200"
        >
          <span className="text-[#FF385C] flex flex-shrink-0">
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.63 8.41a14.98 14.98 0 00-2.58 5.84m8.54.12L12.5 16.5m-5.45-2.23L4 12.5m17.5-6.5a1 1 0 11-2 0 1 1 0 012 0zM3.75 20.25h.008v.008H3.75v-.008z" />
            </svg>
          </span>
          Submit Startup
        </Link>

        <Link
          href="/submit?type=product"
          className="flex items-center gap-3.5 px-4 py-2.5 rounded-xl text-[14px] font-semibold text-[#484848] hover:bg-slate-50 transition-all duration-200"
        >
          <span className="text-[#4F46E5] flex flex-shrink-0">
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </span>
          Submit Product
        </Link>
      </nav>

      {/* Footer Branding or Info in Sidebar */}
      <div className="p-5 border-t border-[#F5F5F5] flex-shrink-0 select-none">
        <p className="text-[11px] text-[#A0A0A0] leading-normal font-medium">
          One platform. <br />
          <span className="text-[#484848] font-bold">Complete intelligence.</span>
        </p>
      </div>
    </div>
    </aside>
  );
}
