import { BrandAnthropic,BrandCursor,BrandElevenLabs,BrandHarvey,
  BrandOpenAI,BrandPerplexity,BrandSynthesia, BrandNvidia, InvAccel, InvSequoia, InvLightspeed, InvGC, InvA16 } from "./icons";

export function InvestorsUnicornsAcquisitions() {
  const investors = [
    { name: "Sequoia Capital", deals: "32 deals", mark: <InvSequoia /> },
    { name: "Accel", deals: "28 deals", mark: <InvAccel /> },
    { name: "Lightspeed", deals: "24 deals", mark: <InvLightspeed /> },
    { name: "General Catalyst", deals: "22 deals", mark: <InvGC /> },
    { name: "Andreessen Horowitz", deals: "20 deals", mark: <InvA16 /> },
  ];
  const unicorns = [
    { name: "Cursor", val: "$10B+", date: "Feb 2025", bg: "#0B0B0F", mark: <BrandCursor size={18} /> },
    { name: "Perplexity", val: "$18B+", date: "Jan 2025", bg: "#FFFFFF", mark: <BrandPerplexity dark size={18} /> },
    { name: "ElevenLabs", val: "$3B+", date: "Jan 2025", bg: "#0B0B0F", mark: <BrandElevenLabs size={18} /> },
    { name: "Harvey", val: "$5B+", date: "Dec 2024", bg: "#1A2E2A", mark: <BrandHarvey size={18} /> },
    { name: "Synthesia", val: "$2B+", date: "Dec 2024", bg: "#FFFFFF", mark: <BrandSynthesia dark size={18} /> },
  ];
  const acq = [
    { buyer: "OpenAI", target: "Global Illumination", date: "Mar 2025", bg: "#F3EFEA", mark: <BrandOpenAI size={16} /> },
    { buyer: "Perplexity", target: "Read.cv", date: "Feb 2025", bg: "#FFFFFF", mark: <BrandPerplexity dark size={14} /> },
    { buyer: "Anthropic", target: "Quill", date: "Jan 2025", bg: "#E8D9C9", mark: <BrandAnthropic size={14} dark /> },
    { buyer: "NVIDIA", target: "Run:ai", date: "Dec 2024", bg: "#0B6B2E", mark: <BrandNvidia /> },
  ];

  return (
    <section className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
      <div className="rounded-2xl border border-[#EFEDE8] bg-white p-5">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-[14px] font-semibold">Most active investors</h3>
          <a href="#" className="text-[12px] text-[#FF5A4E]">View all investors →</a>
        </div>
        <ul className="space-y-3">
          {investors.map((inv, i) => (
            <li key={inv.name} className="flex items-center gap-3">
              <span className="w-4 text-[11px] text-[#8A8A92]">{i + 1}</span>
              <span className="flex h-7 w-7 items-center justify-center overflow-hidden rounded-md">{inv.mark}</span>
              <span className="flex-1 text-[12.5px] font-medium">{inv.name}</span>
              <span className="text-[11.5px] text-[#8A8A92]">{inv.deals}</span>
            </li>
          ))}
        </ul>
        <button className="mt-4 w-full rounded-lg border border-[#EFEDE8] py-2 text-[12px] font-medium hover:bg-[#FAFAF8]">Explore all investors</button>
      </div>

      <div className="rounded-2xl border border-[#EFEDE8] bg-white p-5">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-[14px] font-semibold">New AI unicorns</h3>
          <a href="#" className="text-[12px] text-[#FF5A4E]">View all unicorns →</a>
        </div>
        <div className="grid grid-cols-5 gap-2">
          {unicorns.map((u) => (
            <div key={u.name} className="text-center">
              <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-lg border border-[#EFEDE8]" style={{ background: u.bg }}>{u.mark}</div>
              <div className="text-[10.5px] font-semibold">{u.name}</div>
              <div className="mt-1 text-[12px] font-bold text-[#FF5A4E]">{u.val}</div>
              <div className="text-[9.5px] text-[#8A8A92]">Valuation</div>
              <div className="mt-0.5 text-[9.5px] text-[#8A8A92]">{u.date}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-[#EFEDE8] bg-white p-5">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-[14px] font-semibold">Latest acquisitions</h3>
          <a href="#" className="text-[12px] text-[#FF5A4E]">View all acquisitions →</a>
        </div>
        <ul className="space-y-3">
          {acq.map((a) => (
            <li key={a.buyer + a.target} className="flex items-center gap-3">
              <span className="flex h-7 w-7 items-center justify-center overflow-hidden rounded-md border border-[#EFEDE8]" style={{ background: a.bg }}>{a.mark}</span>
              <span className="flex-1 text-[12.5px]"><span className="font-semibold">{a.buyer}</span> <span className="text-[#6B6B73]">acquired</span> <span className="font-semibold">{a.target}</span></span>
              <span className="text-[11px] text-[#8A8A92]">{a.date}</span>
            </li>
          ))}
        </ul>
        <button className="mt-4 w-full rounded-lg border border-[#EFEDE8] py-2 text-[12px] font-medium hover:bg-[#FAFAF8]">Explore all acquisitions</button>
      </div>
    </section>
  );
}