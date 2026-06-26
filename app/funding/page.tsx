"use client";

import Sidebar from "@/components/layout/Sidebar";
import TopBar from "@/components/layout/TopBar";
import { FundingPage } from "@/components/funding/FundingPage";

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <Sidebar />
      <TopBar />

      <div className="lg:pl-[250px] pt-[52px]">
        <FundingPage />
      </div>
    </div>
  );
}