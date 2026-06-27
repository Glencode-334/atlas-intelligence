import {
  Target,
  TrendingUp,
  Users,
  Rocket,
  Trophy,
  Building2,
} from "lucide-react";

export function Leaderboards() {
  const items = [
    {
      icon: <Target size={15} />,
      name: "Largest funding rounds",
      sub: "Explore the biggest rounds in AI",
    },
    {
      icon: <TrendingUp size={15} />,
      name: "Most funded companies",
      sub: "Companies that raised the most capital",
    },
    {
      icon: <Users size={15} />,
      name: "Most active investors",
      sub: "Investors making the most moves",
    },
    {
      icon: <Rocket size={15} />,
      name: "Fastest growing categories",
      sub: "Categories attracting the most capital",
    },
    {
      icon: <Trophy size={15} />,
      name: "New unicorns",
      sub: "Track the newest AI unicorns",
    },
    {
      icon: <Building2 size={15} />,
      name: "Largest acquisitions",
      sub: "Biggest acquisitions in AI space",
    },
  ];

  return (
    <section className="relative mt-5 overflow-hidden rounded-[16px] bg-[#0B0B0F] p-4 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_60%,rgba(255,90,78,.25),transparent_55%)]" />

      <div className="relative mb-4 flex items-center justify-between">
        <h3 className="text-[14px] font-semibold">
          Explore funding leaderboards
        </h3>

        <a
          href="#"
          className="text-[11px] text-[#FF5A4E]"
        >
          View all leaderboards →
        </a>
      </div>

      <div className="relative grid grid-cols-2 gap-x-4 gap-y-4 md:grid-cols-3 lg:grid-cols-6">
        {items.map((i) => (
          <div key={i.name}>
            <div className="mb-2 flex h-7 w-7 items-center justify-center rounded-md bg-white/5 text-[#FF5A4E]">
              {i.icon}
            </div>

            <div className="text-[11px] font-semibold">
              {i.name}
            </div>

            <div className="mt-1 text-[10px] text-white/60">
              {i.sub}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}