import { BrandAnthropic,BrandCursor,BrandElevenLabs,BrandHarvey,
  BrandOpenAI,BrandPerplexity,BrandSynthesia, BrandNvidia, InvAccel, InvSequoia, InvLightspeed, InvGC, InvA16 } from "./icons";

export function InvestorsUnicornsAcquisitions() {
  const investors = [
    { name: "Sequoia Capital", deals: "32 ", mark: <InvSequoia /> },
    { name: "Accel", deals: "28 ", mark: <InvAccel /> },
    { name: "Lightspeed", deals: "24 ", mark: <InvLightspeed /> },
    { name: "General Catalyst", deals: "22 ", mark: <InvGC /> },
    { name: "Andreessen Horowitz", deals: "20 ", mark: <InvA16 /> },
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
      <div className="rounded-2xl border border-[#EFEDE8] bg-white p-6">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-[15px] font-semibold text-[#111]">
            Most active investors
          </h3>

          <a
            href="#"
            className="text-[12px] font-semibold text-[#FF5A4E] hover:opacity-80"
          >
            View all investors →
          </a>
        </div>

        <ul className="space-y-4">
          {investors.map((inv, i) => (
            <li key={inv.name} className="flex items-center h-[20px]">
              {/* Rank */}
              <span className="w-6 text-[12px] font-medium text-[#8E8E93]">
                {i + 1}
              </span>

              {/* Logo */}
              <div className="ml-1 flex h-8 w-8 items-center justify-center overflow-hidden rounded-md">
                {inv.mark}
              </div>

              {/* Name */}
              <span className="ml-3 flex-1 text-[13px] font-medium text-[#222]">
                {inv.name}
              </span>

              {/* Deals */}
              <span className="text-[13px] font-semibold text-[#444]">
                {inv.deals}
              </span>

              <span className="ml-1 text-[12px] text-[#9A9A9A]">
                deals
              </span>
            </li>
          ))}
        </ul>

        <button
          className="mt-6 w-full rounded-xl border border-[#ECEAE5] bg-white py-2.5 text-[12px] font-medium text-[#333] transition hover:bg-[#FAFAF8]"
        >
          Explore all investors
        </button>
      </div>

      <div className="rounded-2xl border border-[#EFEDE8] bg-white p-6">
        <div className="mb-5 flex items-center justify-between">
          <h3 className="text-[15px] font-semibold text-[#111]">
            New AI unicorns
          </h3>

          <a
            href="#"
            className="text-[12px] font-semibold text-[#FF5A4E] transition hover:opacity-80"
          >
            View all unicorns →
          </a>
        </div>

        <div className="grid grid-cols-5 gap-5">
          {unicorns.map((u) => (
            <div
              key={u.name}
              className="flex flex-col items-center rounded-xl border border-[#F3F3F1] bg-[#FCFCFC] px-3 py-4"
            >
              <div
                className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl border border-[#ECEAE5]"
                style={{ background: u.bg }}
              >
                {u.mark}
              </div>

              <h4 className="text-[10px] font-semibold text-[#111]">
                {u.name}
              </h4>

              <div className="mt-3 text-[16px] font-bold leading-none text-[#FF5A4E]">
                {u.val}
              </div>

              <span className="mt-1 text-[10px] font-medium text-[#FF8B82]">
                Valuation
              </span>

              <span className="mt-3 text-[10px] text-[#8E8E93]">
                {u.date}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-[#EFEDE8] bg-white p-5">
        <div className="mb-5 flex items-center justify-between">
          <h3 className="text-[14px] font-semibold">Latest acquisitions</h3>
          <a href="#" className="text-[12px] font-semibold text-[#FF5A4E]">View all acquisitions →</a>
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
        <button className="mt-6 w-full rounded-lg border border-[#EFEDE8] py-2 text-[12px] font-medium hover:bg-[#FAFAF8]">Explore all acquisitions</button>
      </div>
    </section>
  );
}