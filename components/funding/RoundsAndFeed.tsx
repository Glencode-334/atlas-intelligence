import Link from "next/link";
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
    { name: "Cursor", text: "$900M Series C", sub: "Thrive Capital led the round", time: "2h", color: "#0B0B0F", mark: <BrandCursor size={14} /> },
    { name: "Anthropic", text: "$4B Series E", sub: "Amazon led the round", time: "4h", color: "#E8D9C9", mark: <BrandAnthropic size={16} dark /> },
    { name: "Lovable", text: "$45M Series A", sub: "Accel led the round", time: "6h", color: "#FF5A4E", mark: <Heart size={14} fill="#fff" stroke="#fff" /> },
    { name: "Harvey", text: "$300M Series D", sub: "Sequoia led the round", time: "8h", color: "#1A2E2A", mark: <BrandHarvey /> },
    { name: "Synthesia", text: "$180M Series C", sub: "NEA led the round", time: "10h", color: "#0B0B0F", mark: <BrandSynthesia /> },
  ];
  return (
    <section className="mt-6 grid gap-5 lg:grid-cols-[minmax(0,1.65fr)_300px] items-stretch">
  {/* Biggest funding rounds */}
  <div
    className="
      relative
      rounded-[16px]
      border
      border-[#ECECEC]
      bg-white
      p-5
      shadow-[0_1px_2px_rgba(16,24,40,.04),0_1px_3px_rgba(16,24,40,.06)]
    "
  >
    <div className="mb-4 flex items-center justify-between">
      <h2 className="text-[16px] font-semibold tracking-[-0.02em] text-[#0B0B0F]">
        Biggest funding rounds
      </h2>

      <Link
        href="#"
        className="text-[12px] font-medium text-[#FF5A4E] hover:opacity-80"
      >
        View all rounds →
      </Link>
    </div>

    {/* Desktop */}
    <div className="hidden lg:grid grid-cols-5 gap-3">
      {rounds.map((r) => (
        <div
          key={r.name}
          className="
            min-h-[190px]
            rounded-[14px]
            border
            border-[#ECECEC]
            bg-white
            p-3
            flex
            flex-col
            transition-shadow
            hover:shadow-md
          "
        >
          <div
            className="mb-3 flex h-10 items-center justify-center rounded-lg"
            style={{
              background: r.bg,
              border:
                r.bg === "#FFFFFF"
                  ? "1px solid #ECECEC"
                  : undefined,
            }}
          >
            {r.logo}
          </div>

          <h3 className="text-[12px] font-semibold text-[#0B0B0F]">
            {r.name}
          </h3>

          <p className="mt-1 text-[20px] font-bold tracking-[-0.03em] text-[#FF5A4E]">
            {r.amt}
          </p>

          <p className="mt-1 text-[10px] font-medium text-[#0B0B0F]">
            {r.series}
          </p>

          <p className="text-[9px] text-[#9CA3AF]">
            {r.date}
          </p>

          <div className="mt-auto">
            <p className="text-[9px] uppercase tracking-wide text-[#9CA3AF]">
              Lead investor
            </p>

            <div className="mt-1.5 flex h-5 items-center">
              {r.lead}
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Mobile / Tablet */}
    <div className="overflow-x-auto lg:hidden">
      <div className="flex gap-3 pb-1">
        {rounds.map((r) => (
          <div
            key={r.name}
            className="
              w-[150px]
              shrink-0
              rounded-[14px]
              border
              border-[#ECECEC]
              bg-white
              p-3
            "
          >
            <div
              className="mb-3 flex h-10 items-center justify-center rounded-lg"
              style={{
                background: r.bg,
                border:
                  r.bg === "#FFFFFF"
                    ? "1px solid #ECECEC"
                    : undefined,
              }}
            >
              {r.logo}
            </div>

            <h3 className="text-[12px] font-semibold text-[#0B0B0F]">
              {r.name}
            </h3>

            <p className="mt-1 text-[20px] font-bold tracking-[-0.03em] text-[#FF5A4E]">
              {r.amt}
            </p>

            <p className="mt-1 text-[10px] font-medium">
              {r.series}
            </p>

            <p className="text-[9px] text-[#9CA3AF]">
              {r.date}
            </p>

            <p className="mt-3 text-[9px] uppercase tracking-wide text-[#9CA3AF]">
              Lead investor
            </p>

            <div className="mt-1 flex h-5 items-center">
              {r.lead}
            </div>
          </div>
        ))}
      </div>
    </div>

    <button
      aria-label="Previous rounds"
      className="
        absolute
        -left-4
        top-1/2
        hidden
        h-8.5
        w-8.5
        -translate-y-1/2
        items-center
        justify-center
        rounded-full
        border
        border-[#ECECEC]
        bg-white
        text-[#6B7280]
        shadow-[0_6px_16px_rgba(15,23,42,.08)]
        lg:flex
      "
    >
      <ChevronLeft size={16} />
    </button>

    <button
      aria-label="Next rounds"
      className="
        absolute
        -right-4
        top-1/2
        hidden
        h-8.5
        w-8.5
        -translate-y-1/2
        items-center
        justify-center
        rounded-full
        border
        border-[#ECECEC]
        bg-white
        text-[#6B7280]
        shadow-[0_6px_16px_rgba(15,23,42,.08)]
        lg:flex
      "
    >
      <ChevronRight size={16} />
    </button>
  </div>

     {/* Activity feed */}
<div
  className="
    flex
    h-full
    flex-col
    rounded-[16px]
    border
    border-[#ECECEC]
    bg-white
    p-5
    shadow-[0_1px_2px_rgba(16,24,40,.04),0_1px_3px_rgba(16,24,40,.06)]
  "
>
  {/* Header */}
  <div className="mb-2 flex items-center justify-between">
    <h2 className="text-[15px] font-semibold tracking-[-0.02em] text-[#0B0B0F]">
      Funding activity feed
    </h2>

    <Link
      href="#"
      className="text-[10px] font-medium text-[#FF5A4E] hover:opacity-80"
    >
      View all →
    </Link>
  </div>

  <p className="mb-4 text-[10px] font-medium capitalize tracking-[0.08em] text-[#9CA3AF]">
    Today
  </p>

  <ul className="relative flex-1 h-full flex-col border-l border-[#ECECEC] pl-4">
    {feed.map((f) => (
      <li
        key={f.name}
        className="relative mb-3 flex items-start gap-3 last:mb-0"
      >
        {/* Timeline dot */}
        <span
          className="
            absolute
            -left-[19px]
            top-3.5
            h-2
            w-2
            rounded-full
            border-2
            border-white
            bg-[#FF5A4E]
          "
        />

        {/* Avatar */}
        <div
          className="
            flex
            h-7
            w-7
            shrink-0
            items-center
            justify-center
            rounded-lg
            text-white
          "
          style={{ background: f.color }}
        >
          {f.mark}
        </div>

        {/* Content */}
        <div className="min-w-0 flex-1">
          <p className="text-[10px] leading-5">
            <span className="font-bold text-[#0B0B0F]">
              {f.name}
            </span>
            <span className="text-[#6B7280]">{" raised "}</span>
            <span className="font-bold text-[#0B0B0F]">
              {f.text}
            </span>
          </p>

          <p className="mt-0.5 text-[9px] text-[#9CA3AF]">
            {f.sub}
          </p>
        </div>

        {/* Time */}
        <span className="shrink-0 pt-[1px] text-[8px] font-medium text-[#9CA3AF]">
          {f.time}
        </span>
      </li>
    ))}
  </ul>
</div>
    </section>
  );
}