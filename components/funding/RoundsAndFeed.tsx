import {
  ChevronLeft, ChevronRight, Heart,
} from "lucide-react";
import { BrandAmazon,BrandAnthropic,BrandCursor,BrandElevenLabs,BrandHarvey,
  BrandIconiq,BrandMicrosoft,BrandNEA,BrandOpenAI,BrandPerplexity,BrandSynthesia,BrandThrive } from "./icons";
export function RoundsAndFeed() {
  const rounds = [
    { name: "OpenAI", amt: "$40B", series: "Series F", date: "Mar 2025", lead: <BrandMicrosoft />, logo: <BrandOpenAI />, bg: "#F3EFEA" },
    { name: "Anthropic", amt: "$4B", series: "Series E", date: "Mar 2025", lead: <BrandAmazon />, logo: <BrandAnthropic />, bg: "#E8D9C9" },
    { name: "Cursor", amt: "$900M", series: "Series C", date: "Feb 2025", lead: <BrandThrive />, logo: <BrandCursor />, bg: "#0B0B0F" },
    { name: "Perplexity", amt: "$500M", series: "Series D", date: "Jan 2025", lead: <BrandNEA />, logo: <BrandPerplexity dark />, bg: "#FFFFFF" },
    { name: "ElevenLabs", amt: "$180M", series: "Series C", date: "Jan 2025", lead: <BrandIconiq />, logo: <BrandElevenLabs />, bg: "#0B0B0F" },
  ];
  const feed = [
    { name: "Cursor", text: "raised $900M Series C", sub: "Thrive Capital led the round", time: "2h", color: "#0B0B0F", mark: <BrandCursor size={14} /> },
    { name: "Anthropic", text: "raised $4B Series E", sub: "Amazon led the round", time: "4h", color: "#E8D9C9", mark: <BrandAnthropic size={16} dark /> },
    { name: "Lovable", text: "raised $45M Series A", sub: "Accel led the round", time: "6h", color: "#FF5A4E", mark: <Heart size={14} fill="#fff" stroke="#fff" /> },
    { name: "Harvey", text: "raised $300M Series D", sub: "Sequoia led the round", time: "8h", color: "#1A2E2A", mark: <BrandHarvey /> },
    { name: "Synthesia", text: "raised $180M Series C", sub: "NEA led the round", time: "10h", color: "#0B0B0F", mark: <BrandSynthesia /> },
  ];
  return (
    <section className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_360px]">
      {/* Biggest funding rounds */}
      <div className="relative rounded-2xl border border-[#EFEDE8] bg-white p-5">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-[14px] font-semibold">Biggest funding rounds</h3>
          <a href="#" className="text-[12px] text-[#FF5A4E]">View all rounds →</a>
        </div>
        <div className="grid grid-cols-5 gap-3">
          {rounds.map((r) => (
            <div key={r.name} className="rounded-xl border border-[#EFEDE8] p-3">
              <div className="mb-3 flex h-14 w-full items-center justify-center rounded-lg" style={{ background: r.bg, border: r.bg === "#FFFFFF" ? "1px solid #EFEDE8" : undefined }}>
                {r.logo}
              </div>
              <div className="text-[12.5px] font-semibold">{r.name}</div>
              <div className="mt-1 text-[16px] font-bold text-[#FF5A4E]">{r.amt}</div>
              <div className="mt-1 text-[11px] text-[#0B0B0F]">{r.series}</div>
              <div className="text-[10.5px] text-[#8A8A92]">{r.date}</div>
              <div className="mt-2 text-[10px] text-[#8A8A92]">Lead investor</div>
              <div className="mt-1 flex h-4 items-center">{r.lead}</div>
            </div>
          ))}
        </div>
        <button className="absolute -left-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-[#EFEDE8] bg-white text-[#6B6B73] shadow-sm">
          <ChevronLeft size={16} />
        </button>
        <button className="absolute -right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-[#EFEDE8] bg-[#FF5A4E] text-white shadow-sm">
          <ChevronRight size={16} />
        </button>
      </div>

      {/* Activity feed */}
      <div className="rounded-2xl border border-[#EFEDE8] bg-white p-5">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-[14px] font-semibold">Funding activity feed</h3>
          <a href="#" className="text-[12px] text-[#FF5A4E]">View all →</a>
        </div>
        <div className="mb-2 text-[11px] text-[#8A8A92]">Today</div>
        <ul className="relative space-y-3 border-l border-dashed border-[#ECECEC] pl-4">
          {feed.map((f) => (
            <li key={f.name} className="relative flex items-start gap-3">
              <span className="absolute -left-[22px] top-3 h-1.5 w-1.5 rounded-full bg-[#FF5A4E]" />
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-white" style={{ background: f.color }}>{f.mark}</div>
              <div className="flex-1">
                <div className="text-[12.5px]"><span className="font-semibold">{f.name}</span> <span className="text-[#6B6B73]">{f.text}</span></div>
                <div className="text-[11px] text-[#8A8A92]">{f.sub}</div>
              </div>
              <span className="text-[11px] text-[#8A8A92]">{f.time}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}