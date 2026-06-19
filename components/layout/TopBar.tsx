"use client";
import Link from "next/link";
import Image from "next/image";
import { useRef} from "react";

const SIDEBAR_W = 250;

export default function TopBar() {
  const searchRef = useRef<HTMLInputElement>(null);
  return (
    <div
      className="fixed top-0 right-0 z-30 flex items-center justify-between gap-4 px-4 lg:px-8 py-3 bg-white/90 backdrop-blur-md border-b border-[#F0F0F0] h-[64px]"
      style={{ left: 0 }}
      suppressHydrationWarning
    >
      {/* Spacer that fills the sidebar width on desktop */}
      <div className="hidden lg:block flex-shrink-0" style={{ width: SIDEBAR_W - 32 }} />

      {/* Global Search Bar (centered/left in main area) */}
      <div className="flex-1 max-w-[600px] relative flex items-center pl-10 lg:pl-0">
        <span className="absolute left-3 lg:left-3.5 text-slate-400 pointer-events-none">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </span>
        <input
          ref={searchRef}
          type="text"
          placeholder="Search startups, products, investors, jobs and news"
          className="w-full bg-[#F7F7F7] border border-[#EBEBEB] focus:border-[#FF385C] focus:bg-white text-[13px] font-medium text-[#222222] placeholder-slate-400 rounded-xl pl-9 pr-10 py-2 outline-none transition-all duration-200"
        />
        <span className="absolute right-3 hidden sm:flex items-center justify-center text-[10px] text-slate-400 font-bold border border-slate-200 bg-white rounded-md w-5 h-5 shadow-2xs select-none">
          /
        </span>
      </div>

      {/* Right Elements: Notification Bell & User Profile Dropdown */}
      <div className="flex items-center gap-4 flex-shrink-0">
        
        {/* Watchlist Link */}
        <Link
          href="/watchlist"
          className="hidden md:flex items-center gap-1.5 text-[13px] font-semibold text-[#484848] hover:text-[#222] transition-colors"
        >
          <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
          </svg>
          Watchlist
        </Link>

        {/* Divider */}
        <div className="hidden md:block w-[1px] h-4 bg-slate-200" />

        {/* Notification Bell */}
        <button
          className="relative w-9 h-9 flex items-center justify-center rounded-xl hover:bg-slate-50 transition-colors cursor-pointer"
          aria-label="Notifications"
        >
          <svg className="w-[19px] h-[19px] text-[#484848]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
          </svg>
          {/* Notification Count Badge */}
          <span className="absolute -top-0.5 -right-0.5 bg-[#FF385C] text-white font-extrabold text-[9px] w-4.5 h-4.5 rounded-full flex items-center justify-center border-2 border-white">
            12
          </span>
        </button>

        {/* User Profile Dropdown */}
        <button
          className="flex items-center gap-1.5 hover:bg-slate-50 p-1 rounded-xl transition-all cursor-pointer"
          aria-label="User profile"
        >
          <Image
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80"
            alt="User Avatar"
            width={32}
            height={32}
            className="rounded-full object-cover border border-slate-100"
          />
          <svg className="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </button>

      </div>
    </div>
  );
}
