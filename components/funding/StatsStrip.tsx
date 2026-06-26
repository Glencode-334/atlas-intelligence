import {
  Layers, Rocket, Users, TrendingUp, BarChart3, Award, ArrowUpRight,
} from "lucide-react";


export function StatsStrip() {
  const items = [
    { icon: <BarChart3 size={18} />, value: "$542B", label: "Funding Tracked", delta: "18% vs last year" },
    { icon: <Layers size={18} />, value: "18,420", label: "Funding Rounds", delta: "15% vs last year" },
    { icon: <Rocket size={18} />, value: "4,800", label: "Funded Startups", delta: "16% vs last year" },
    { icon: <Users size={18} />, value: "7,320", label: "Active Investors", delta: "12% vs last year" },
    { icon: <TrendingUp size={18} />, value: "214", label: "Acquisitions", delta: "20% vs last year" },
    { icon: <Award size={18} />, value: "38", label: "AI Unicorns", delta: "19% vs last year" },
  ];
  return (
    <section className="mt-10 grid grid-cols-2 gap-x-6 gap-y-6 rounded-2xl border border-[#EFEDE8] bg-white px-6 py-5 md:grid-cols-3 lg:grid-cols-6">
      {items.map((s) => (
        <div key={s.label} className="flex gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#FFE9E6] text-[#FF5A4E]">{s.icon}</div>
          <div>
            <div className="text-[18px] font-bold tracking-tight">{s.value}</div>
            <div className="text-[11.5px] text-[#6B6B73]">{s.label}</div>
            <div className="mt-1 flex items-center gap-1 text-[10.5px] text-[#FF5A4E]">
              <ArrowUpRight size={10} /> {s.delta}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}