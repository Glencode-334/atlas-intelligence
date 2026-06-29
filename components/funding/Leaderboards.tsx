import {
  Target,
  TrendingUp,
  Users,
  Rocket,
  Building2,
} from "lucide-react";
import Unicorn from "./icons";

export function Leaderboards() {
  const items = [
    {
      icon: <Target size={19} />,
      name: "Largest funding rounds",
      sub: "Explore the biggest rounds in AI",
    },
    {
      icon: <TrendingUp size={19} />,
      name: "Most funded companies",
      sub: "Companies that raised the most capital",
    },
    {
      icon: <Users size={19} />,
      name: "Most active investors",
      sub: "Investors making the most moves",
    },
    {
      icon: <Rocket size={19} />,
      name: "Fastest growing categories",
      sub: "Categories attracting the most capital",
    },
    {
      icon: <Unicorn size={29} />,
      name: "New unicorns",
      sub: "Track the newest AI unicorns",
    },
    {
      icon: <Building2 size={19} />,
      name: "Largest acquisitions",
      sub: "Biggest acquisitions in AI space",
    },
  ];

  return (
    <section className="relative mt-6 overflow-hidden rounded-[14px] bg-[#0B0B0F] px-5 py-5 text-white">

      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_55%,rgba(255,90,78,.22),transparent_38%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_78%_70%,rgba(255,90,78,.35),transparent_30%)]" />

      <div className="relative mb-3 flex items-center justify-between">
        <h3 className="text-[17px] font-semibold">
          Explore funding leaderboards
        </h3>

        <a
          href="#"
          className="text-[12px] font-medium text-[#FF5A4E] hover:opacity-80"
        >
          View all leaderboards →
        </a>
      </div>

      <div className="relative grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">

        {items.map((i, index) => (
          <div
            key={i.name}
            className={`flex flex-col items-center px-5 text-center ${
              index !== items.length - 1
                ? "border-r border-white/10"
                : ""
            }`}
          >
            <div className="mb-2 text-[#FF786C]">
              {i.icon}
            </div>

            <h4 className="text-[13px] font-semibold leading-tight">
              {i.name}
            </h4>

            <p className="mt-2 max-w-[150px] text-[11px] leading-5 text-white/65">
              {i.sub}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}