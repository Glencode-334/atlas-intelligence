import Image from "next/image";
import BrandAnthropic from "@/assets/icons/anthropic.webp";
import BrandCursor from "@/assets/icons/cursor.webp"
import BrandElevenLabs from "@/assets/icons/elevenlabs.png";
import BrandOpenAI from "@/assets/icons/openai.png";
import BrandPerplexity from "@/assets/icons/perplexity.png";
import BrandSynthesia from "@/assets/icons/synthesia.png";
import BrandNvidia from "@/assets/icons/nvidia.webp";
import BrandHarvey from "@/assets/icons/Harvey.webp";
import InvAccel from "@/assets/icons/aceel.png";
import InvLightspeed from "@/assets/icons/Lightspeed.jpg";
import InvGC from "@/assets/icons/general.jpeg";
import InvA16 from "@/assets/icons/Andreessen-Horowitz.jpeg";
import InvSequoia from "@/assets/icons/sequoia.png";

export function InvestorsUnicornsAcquisitions() {
  const investors = [
    { name: "Sequoia Capital", deals: "32 ", img: InvSequoia },
    { name: "Accel", deals: "28 ", img: InvAccel },
    { name: "Lightspeed", deals: "24 ", img: InvLightspeed },
    { name: "General Catalyst", deals: "22 ", img: InvGC },
    { name: "Andreessen Horowitz", deals: "20 ", img: InvA16 },
  ];
  const unicorns = [
    { name: "Cursor", val: "$10B+", date: "Feb 2025", bg: "#0B0B0F", img: BrandCursor },
    { name: "Perplexity", val: "$18B+", date: "Jan 2025", bg: "#FFFFFF", img: BrandPerplexity },
    { name: "ElevenLabs", val: "$3B+", date: "Jan 2025", bg: "#0B0B0F", img: BrandElevenLabs },
    { name: "Harvey", val: "$5B+", date: "Dec 2024", bg: "#1A2E2A", img: BrandHarvey },
    { name: "Synthesia", val: "$2B+", date: "Dec 2024", bg: "#FFFFFF", img: BrandSynthesia },
  ];
  const acq = [
    { buyer: "OpenAI", target: "Global Illumination", date: "Mar 2025", bg: "#F3EFEA", img: BrandOpenAI },
    { buyer: "Perplexity", target: "Read.cv", date: "Feb 2025", bg: "#FFFFFF", img: BrandPerplexity },
    { buyer: "Anthropic", target: "Quill", date: "Jan 2025", bg: "#E8D9C9", img: BrandAnthropic },
    { buyer: "NVIDIA", target: "Run:ai", date: "Dec 2024", bg: "#0B6B2E", img: BrandNvidia },
  ];

  return (
    <section className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-3">
      <div className="rounded-[12px] border border-[#EFEDE8] bg-white px-4 py-3">
        <div className="mb-2.5 flex items-center justify-between">
          <h3 className="text-[14px] font-semibold text-[#111]">
            Most active investors
          </h3>

          <a
            href="#"
            className="text-[11px] font-semibold text-[#FF5A4E] hover:opacity-80"
          >
            View all investors →
          </a>
        </div>

        <ul className="space-y-3">
          {investors.map((inv, i) => (
            <li
              key={inv.name}
              className="flex h-[18px] items-center"
            >
              {/* Rank */}
              <span className="w-5 text-[11px] font-medium text-[#8E8E93]">
                {i + 1}
              </span>

              {/* Logo */}
              <div className="relative ml-1 h-5 w-7 overflow-hidden">
                <Image
                  src={inv.img}
                  alt={inv.name}
                  fill
                  sizes="50px"
                  className="object-contain rounded-[3px]"
                />
              </div>

              {/* Name */}
              <span className="ml-2.5 flex-1 text-[12px] font-medium text-[#222]">
                {inv.name}
              </span>

              {/* Deals */}
              <span className="text-[12px] font-semibold text-[#444]">
                {inv.deals}
              </span>

              <span className="ml-1 text-[11px] text-[#9A9A9A]">
                deals
              </span>
            </li>
          ))}
        </ul>

        <button
          className="
            mt-4
            w-full
            rounded-lg
            border
            border-[#ECEAE5]
            bg-white
            py-2
            text-[11px]
            font-medium
            text-[#333]
            transition
            hover:bg-[#FAFAF8]
          "
        >
          Explore all investors
        </button>
      </div>

      <div className="rounded-[12px] border border-[#EFEDE8] bg-white px-4 py-3">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-[14px] font-semibold text-[#111]">
            New AI unicorns
          </h3>

          <a
            href="#"
            className="text-[11px] font-semibold text-[#FF5A4E] transition hover:opacity-80"
          >
            View all unicorns →
          </a>
        </div>

        <div className="grid grid-cols-5 gap-3">
          {unicorns.map((u) => (
            <div
              key={u.name}
              className="flex flex-col items-center rounded-[12px] border border-[#F3F3F1] bg-[#FCFCFC] px-2.5 py-3"
            >
              <div
                className="relative mb-2 p-2 h-10 w-10 rounded-lg border border-[#ECEAE5]"
              >
                <Image
                  src={u.img}
                  alt={u.name}
                  fill
                  sizes="28px"
                  className="object-contain rounded-[12px]"
                />
              </div>

              <h4 className="text-center text-[9px] font-semibold text-[#111]">
                {u.name}
              </h4>

              <div className="mt-2 text-[13px] font-bold leading-none text-[#FF5A4E]">
                {u.val}
              </div>

              <span className="mt-2 text-[9px] font-medium text-[#FF8B82]">
                Valuation
              </span>

              <span className="mt-2 text-[9px] text-[#8E8E93] whitespace-nowrap">
                {u.date}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-[12px] border border-[#EFEDE8] bg-white px-4 py-3">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-[13px] font-semibold text-[#111]">
            Latest acquisitions
          </h3>

          <a
            href="#"
            className="text-[10px] font-semibold text-[#FF5A4E] transition hover:opacity-80"
          >
            View all acquisitions →
          </a>
        </div>

        <ul className="space-y-3">
          {acq.map((a) => (
            <li
              key={a.buyer + a.target}
              className="flex items-center gap-3"
            >
              <div className="relative h-7 w-7 shrink-0 overflow-hidden rounded-[5px] border border-[#ECEAE5] bg-white">
                <Image
                  src={a.img}
                  alt={a.buyer}
                  fill
                  sizes="28px"
                  className="object-contain p-1"
                />
              </div>

              <p className="min-w-0 flex-1 truncate text-[11px] font-medium text-[#111]">
                <span>{a.buyer}</span>
                <span> acquired </span>
                <span>{a.target}</span>
              </p>

              <span className="shrink-0 text-[10px] text-[#8E8E93]">
                {a.date}
              </span>
            </li>
          ))}
        </ul>

        <button
          className="
            mt-5
            h-9
            w-full
            rounded-xl
            border border-[#E8E6E1]
            bg-white
            text-[11px]
            font-medium
            text-[#444]
            transition
            hover:bg-[#FAFAF8]
          "
        >
          Explore all acquisitions
        </button>
      </div>
    </section>
  );
}