import {
  Target, TrendingUp, Users, Rocket, Trophy, Building2,
} from "lucide-react";

export function Leaderboards() {
  const items = [
    { icon: <Target size={18} />, name: "Largest funding rounds", sub: "Explore the biggest rounds in AI" },
    { icon: <TrendingUp size={18} />, name: "Most funded companies", sub: "Companies that raised the most capital" },
    { icon: <Users size={18} />, name: "Most active investors", sub: "Investors making the most moves" },
    { icon: <Rocket size={18} />, name: "Fastest growing categories", sub: "Categories attracting the most capital" },
    { icon: <Trophy size={18} />, name: "New unicorns", sub: "Track the newest AI unicorns" },
    { icon: <Building2 size={18} />, name: "Largest acquisitions", sub: "Biggest acquisitions in AI space" },
  ];
  return (
    <section className="relative mt-6 overflow-hidden rounded-2xl bg-[#0B0B0F] p-6 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_60%,rgba(255,90,78,.25),transparent_55%)]" />
      <div className="relative mb-5 flex items-center justify-between">
        <h3 className="text-[15px] font-semibold">Explore funding leaderboards</h3>
        <a href="#" className="text-[12px] text-[#FF5A4E]">View all leaderboards →</a>
      </div>
      <div className="relative grid grid-cols-2 gap-x-6 gap-y-5 md:grid-cols-3 lg:grid-cols-6">
        {items.map((i) => (
          <div key={i.name}>
            <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 text-[#FF5A4E]">{i.icon}</div>
            <div className="text-[12.5px] font-semibold">{i.name}</div>
            <div className="mt-1 text-[11px] text-white/60">{i.sub}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
