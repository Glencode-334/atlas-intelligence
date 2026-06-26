import Image from "next/image";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

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
    { icon: "🌱", name: "Pre-Seed", rounds: "2,840", total: "$1.2B", bg: "#FFE9E6", color: "#FF5A4E" },
    { icon: "🌲", name: "Seed", rounds: "5,120", total: "$6.1B", bg: "#E6F4EC", color: "#1E8A4B" },
    { icon: "Ⓐ", name: "Series A", rounds: "2,340", total: "$9.8B", bg: "#EFEAFB", color: "#6E4FE3" },
    { icon: "🛡", name: "Series B", rounds: "1,420", total: "$7.2B", bg: "#E6F0FB", color: "#2F6FD6" },
    { icon: "🚀", name: "Growth", rounds: "620", total: "$8.3B", bg: "#FFE9E6", color: "#FF5A4E" },
    { icon: "📈", name: "IPO", rounds: "18", total: "$24.5B", bg: "#E6F0FB", color: "#2F6FD6", subLabel: "Events" },
  ];
  const movement = [
    { name: "AI Agents", amt: "$2.3B", d: "34%", up: true },
    { name: "AI Coding", amt: "$1.4B", d: "18%", up: true },
    { name: "AI Healthcare", amt: "$320M", d: "12%", up: false },
    { name: "AI Infrastructure", amt: "$5.1B", d: "41%", up: true },
  ];

  return (
    <section className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
      {/* Where capital is flowing */}
      <div className="rounded-2xl border border-[#EFEDE8] bg-white p-5">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-[14px] font-semibold">Where capital is flowing</h3>
          <a href="#" className="text-[12px] text-[#FF5A4E]">View all categories →</a>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {capital.map((c) => (
            <div key={c.name} className="relative h-[150px] overflow-hidden rounded-xl p-3 text-white">
              <Image src={c.img} alt="" loading="lazy" width={512} height={512} className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0" style={{ background: c.overlay }} />
              <div className="relative flex h-full flex-col justify-end">
                <div className="text-[11.5px] opacity-95 drop-shadow">{c.name}</div>
                <div className="text-[20px] font-bold drop-shadow">{c.amt}</div>
                <div className="mt-1 flex items-center gap-1 text-[10.5px] text-[#FFB5AC]">
                  <ArrowUpRight size={10} /> {c.delta}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Funding by stage */}
      <div className="space-y-6">
        <div className="rounded-2xl border border-[#EFEDE8] bg-white p-5">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-[14px] font-semibold">Funding by stage</h3>
            <a href="#" className="text-[12px] text-[#FF5A4E]">View all stages →</a>
          </div>
          <div className="grid grid-cols-6 gap-3">
            {stages.map((s) => (
              <div key={s.name} className="text-center">
                <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-xl text-[18px]" style={{ background: s.bg, color: s.color }}>{s.icon}</div>
                <div className="text-[11px] font-semibold">{s.name}</div>
                <div className="mt-2 text-[14px] font-bold">{s.rounds}</div>
                <div className="text-[10px] text-[#8A8A92]">{s.subLabel ?? "Rounds"}</div>
                <div className="mt-2 text-[12px] font-semibold text-[#FF5A4E]">{s.total}</div>
                <div className="text-[10px] text-[#8A8A92]">Total raised</div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-[#FFD9D3] bg-[#FFF5F3] p-5">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-[14px] font-semibold">Capital movement this month</h3>
            <a href="#" className="text-[12px] text-[#FF5A4E]">View trends →</a>
          </div>
          <div className="grid grid-cols-4 gap-3">
            {movement.map((m) => (
              <div key={m.name}>
                <div className="text-[11px] text-[#6B6B73]">{m.name}</div>
                <div className="mt-1 text-[16px] font-bold">{m.amt}</div>
                <div className={`mt-1 flex items-center gap-1 text-[10.5px] ${m.up ? "text-[#1E8A4B]" : "text-[#FF5A4E]"}`}>
                  {m.up ? <ArrowUpRight size={11} /> : <ArrowDownRight size={11} />} {m.d}
                </div>
                <svg viewBox="0 0 100 24" className="mt-1 h-5 w-full">
                  <polyline fill="none" stroke={m.up ? "#1E8A4B" : "#FF5A4E"} strokeWidth="1.5" points={m.up ? "0,20 20,14 40,16 60,8 80,10 100,4" : "0,6 20,10 40,8 60,14 80,16 100,20"} />
                </svg>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}