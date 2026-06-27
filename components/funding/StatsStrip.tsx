import { ArrowUpRight } from "lucide-react";
import { stats } from "@/data/funding";

export function StatsStrip() {
  return (
    <section className="mt-0.5">
      <div
        className="
          overflow-hidden
          rounded-[16px]
          border
          border-[#ECECEC]
          bg-white
          shadow-[0_1px_2px_rgba(16,24,40,0.04),0_1px_3px_rgba(16,24,40,0.05)]
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
                  gap-2.5
                  px-4
                  py-3

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
                    h-8
                    w-8
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#FFF1ED]
                    text-[#FF5A4E]
                  "
                >
                  <Icon
                    size={15}
                    strokeWidth={2}
                  />
                </div>

                <div className="min-w-0">
                  <div
                    className="
                      text-[20px]
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
                      mt-0.5
                      whitespace-nowrap
                      text-[10px]
                      leading-4
                      text-[#6B7280]
                    "
                  >
                    {item.label}
                  </div>

                  <div
                    className="
                      mt-1
                      flex
                      items-center
                      gap-1
                      whitespace-nowrap
                      text-[9px]
                    "
                  >
                    <ArrowUpRight
                      size={10}
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