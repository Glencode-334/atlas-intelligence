"use client";

import Sidebar from "@/components/layout/Sidebar";
import TopBar from "@/components/layout/TopBar";
import ComparePage from "@/components/compare/ComparePage";

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <Sidebar />
      <TopBar />

      <div className="lg:pl-[250px] pt-[52px]">
        <ComparePage />
      </div>
    </div>
  );
}