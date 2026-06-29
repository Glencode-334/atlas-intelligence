import Image from "next/image";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import { StagePreSeed,StageSeed, StageGrowth, StageSeriesA, StageSeriesB, StageIPO } from "./icons";
import capInfra from "@/assets/sectors/infrastructure.jpg";
import capAgents from "@/assets/sectors/agents.jpg";
import capCoding from "@/assets/sectors/coding.jpg";
import capSearch from "@/assets/sectors/search.jpg";
import capHealth from "@/assets/sectors/healthcare.jpg";
import capRobotics from "@/assets/sectors/robotics.jpg";

export function CapitalAndStages() {
  const capital = [
    { name: "AI Infrastructure", amt: "$12.1B", delta: "28% vs last year", img: capInfra, overlay: "linear-gradient(180deg,rgba(0,0,0,0) 30%,rgba(0,0,0,.75) 100%)" },
    { name: "AI Agents", amt: "$8.4B", delta: "32% vs last year", img: capAgents, overlay: "linear-gradient(180deg,rgba(0,0,0,.05) 20%,rgba(0,0,0,.7) 100%)" },
    { name: "AI Coding", amt: "$4.3B", delta: "24% vs last year", img: capCoding, overlay: "linear-gradient(180deg,rgba(0,0,0,0) 30%,rgba(40,10,80,.75) 100%)" },
    { name: "AI Search", amt: "$3.8B", delta: "18% vs last year", img: capSearch, overlay: "linear-gradient(180deg,rgba(0,0,0,0) 30%,rgba(0,0,0,.8) 100%)" },
    { name: "AI Healthcare", amt: "$2.9B", delta: "22% vs last year", img: capHealth, overlay: "linear-gradient(180deg,rgba(0,0,0,0) 30%,rgba(0,0,0,.8) 100%)" },
    { name: "AI Robotics", amt: "$1.7B", delta: "15% vs last year", img: capRobotics, overlay: "linear-gradient(180deg,rgba(0,0,0,0) 30%,rgba(0,0,0,.85) 100%)" },
  ];
  const stages = [
  {
    icon: <StagePreSeed />,
    name: "Pre-Seed",
    rounds: "2,840",
    total: "$1.2B",
    bg: "#FFF2EF",
  },
  {
    icon: <StageSeed />,
    name: "Seed",
    rounds: "5,120",
    total: "$6.1B",
    bg: "#EDF9F3",
  },
  {
    icon: <StageSeriesA />,
    name: "Series A",
    rounds: "2,340",
    total: "$9.8B",
    bg: "#F4EEFF",
  },
  {
    icon: <StageSeriesB />,
    name: "Series B",
    rounds: "1,420",
    total: "$7.2B",
    bg: "#EEF6FF",
  },
  {
    icon: <StageGrowth />,
    name: "Growth",
    rounds: "620",
    total: "$8.3B",
    bg: "#EEF2FF",
  },
  {
    icon: <StageIPO />,
    name: "IPO",
    rounds: "18",
    total: "$24.5B",
    subLabel: "Events",
    bg: "#EEF6FF",
  },
];

  const movement = [
    { name: "AI Agents", amt: "$2.3B", d: "34%", up: true },
    { name: "AI Coding", amt: "$1.4B", d: "18%", up: true },
    { name: "AI Healthcare", amt: "$320M", d: "12%", up: false },
    { name: "AI Infrastructure", amt: "$5.1B", d: "41%", up: true },
  ];

  return (
    <section className="mt-5 grid grid-cols-1 gap-4 lg:grid-cols-2">
  {/* Where capital is flowing */}
  <div
    className="
      rounded-[14px]
      border
      border-[#ECECEC]
      bg-white
      p-4
      shadow-[0_1px_2px_rgba(16,24,40,.04),0_1px_3px_rgba(16,24,40,.05)]
    "
  >
    <div className="mb-3 flex items-center justify-between">
      <h2 className="text-[15px] font-semibold tracking-[-0.02em] text-[#0B0B0F]">
        Where capital is flowing
      </h2>

      <a
        href="#"
        className="text-[11px] font-medium text-[#FF5A4E] hover:opacity-80"
      >
        View all →
      </a>
    </div>

    <div className="grid grid-cols-3 gap-2">
      {capital.map((c) => (
        <div
          key={c.name}
          className="
            group
            relative
            aspect-[0.9]
            overflow-hidden
            rounded-sm
            cursor-pointer
          "
        >
          <Image
            src={c.img}
            alt={c.name}
            width={400}
            height={400}
            sizes="(min-width:1280px) 180px,
                  (min-width:1024px) 16vw,
                  33vw"
            className="
              h-full
              w-full
              object-cover
              transition-transform
              duration-500
              group-hover:scale-105
            "
          />

          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg,rgba(0,0,0,0.02) 10%,rgba(0,0,0,.72) 100%)",
            }}
          />

          <div className="absolute inset-x-0 bottom-0 p-2.5">
            <p className="text-[11px] font-medium text-white">
              {c.name}
            </p>

            <h3
              className="
                mt-0.5
                text-[18px]
                font-bold
                leading-none
                tracking-[-0.03em]
                text-white
              "
            >
              {c.amt}
            </h3>

            <div className="mt-1 flex items-center gap-1 text-[9px] font-medium text-[#FFD4CC]">
              <ArrowUpRight size={10} />
              {c.delta}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>

  <div className="space-y-4">
    {/* Funding by stage */}
    <div className="rounded-[18px] border border-[#EFEDE8] bg-white p-[14px]">
      <div className="mb-5 flex items-center justify-between">
        <h3 className="text-[14px] font-semibold">
          Funding by stage
        </h3>

        <a
          href="#"
          className="text-[12px] text-[#FF5A4E]"
        >
          View all stages →
        </a>
      </div>

      <div className="grid grid-cols-6 gap-3">
        {stages.map((s) => (
          <div
            key={s.name}
            className="text-center bg-[#FBFBFB] p-2 rounded-[8px]"
          >
            <div
              className="mx-auto mb-2.5 flex h-11 w-11 items-center justify-center rounded-xl text-[18px]"
              style={{ background: s.bg }}
            >
              {s.icon}
            </div>

            <div className="text-[11px] font-semibold">
              {s.name}
            </div>

            <div className="mt-2 text-[14px] font-bold">
              {s.rounds}
            </div>

            <div className="text-[10px] text-[#8A8A92]">
              {s.subLabel ?? "Rounds"}
            </div>

            <div className="mt-2 text-[12px] font-bold">
              {s.total}
            </div>

            <div className="text-[10px] text-[#8A8A92]">
              Total raised
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Capital movement */}
    <div className="rounded-[18px] border border-[#FFD9D3] bg-[#FFF5F3] p-[14px]">
      <div className="mb-5 flex items-center justify-between">
        <h3 className="text-[14px] font-semibold">
          Capital movement this month
        </h3>

        <a
          href="#"
          className="text-[12px] text-[#FF5A4E]"
        >
          View trends →
        </a>
      </div>

      <div className="grid grid-cols-4 gap-3">
        {movement.map((m) => (
          <div key={m.name}>
            <div className="text-[11px] text-[#6B6B73]">
              {m.name}
            </div>

            <div className="mt-1 text-[15px] font-bold">
              {m.amt}
            </div>

            <div className="flex items-center">
              <div
                className={`mt-1 flex items-center gap-1 text-[12px] font-semibold ${
                  m.up ? "text-[#1E8A4B]" : "text-[#FF5A4E]"
                }`}
              >
                {m.up ? (
                  <ArrowUpRight size={11} />
                ) : (
                  <ArrowDownRight size={11} />
                )}
                {m.d}
              </div>

              <svg
                viewBox="0 0 100 24"
                className="mt-1 ml-2 h-[18px] w-full"
              >
                <polyline
                  fill="none"
                  stroke={m.up ? "#1E8A4B" : "#FF5A4E"}
                  strokeWidth="1.75"
                  points={
                    m.up
                      ? "0,20 20,14 40,16 60,8 80,10 100,4"
                      : "0,6 20,10 40,8 60,14 80,16 100,20"
                  }
                />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
    </section>
  );
}