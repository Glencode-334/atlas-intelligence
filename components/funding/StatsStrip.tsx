import {
  Layers,
  Rocket,
  Users,
  TrendingUp,
  BarChart3,
  Award,
  ArrowUpRight,
} from "lucide-react";

const stats = [
  {
    icon: BarChart3,
    value: "$542B",
    label: "Funding Tracked",
    delta: "18%",
  },
  {
    icon: Layers,
    value: "18,420",
    label: "Funding Rounds",
    delta: "15%",
  },
  {
    icon: Rocket,
    value: "4,800",
    label: "Funded Startups",
    delta: "16%",
  },
  {
    icon: Users,
    value: "7,320",
    label: "Active Investors",
    delta: "12%",
  },
  {
    icon: TrendingUp,
    value: "214",
    label: "Acquisitions",
    delta: "20%",
  },
  {
    icon: Award,
    value: "38",
    label: "AI Unicorns",
    delta: "19%",
  },
];

export function StatsStrip() {
  return (
    <section className="mt-8">
      <div
        className="
          overflow-hidden
          rounded-[20px]
          border
          border-[#ECECEC]
          bg-white
          shadow-[0_1px_2px_rgba(16,24,40,0.04),0_1px_4px_rgba(16,24,40,0.05)]
        "
      >
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className={`
                  flex
                  items-center
                  gap-3
                  px-5
                  py-4

                  ${
                    index !== stats.length - 1
                      ? "lg:border-r border-[#F3F3F3]"
                      : ""
                  }

                  ${
                    index < 4
                      ? "border-b border-[#F3F3F3] lg:border-b-0"
                      : ""
                  }
                `}
              >
                <div
                  className="
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#FFF1ED]
                    text-[#FF5A4E]
                  "
                >
                  <Icon
                    size={18}
                    strokeWidth={2}
                  />
                </div>

                <div className="min-w-0">
                  <div
                    className="
                      text-[24px]
                      font-bold
                      leading-none
                      tracking-[-0.03em]
                      text-[#0B0B0F]
                    "
                  >
                    {item.value}
                  </div>

                  <div
                    className="
                      mt-1
                      whitespace-nowrap
                      text-[11px]
                      leading-4
                      text-[#6B7280]
                    "
                  >
                    {item.label}
                  </div>

                  <div
                    className="
                      mt-1.5
                      flex
                      items-center
                      gap-1
                      whitespace-nowrap
                      text-[10px]
                    "
                  >
                    <ArrowUpRight
                      size={11}
                      strokeWidth={2.5}
                      className="text-[#10B981]"
                    />

                    <span className="font-semibold text-[#10B981]">
                      {item.delta}
                    </span>

                    <span className="text-[#9CA3AF]">
                      vs last year
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}