import Image from "next/image";
import globe from "@/assets/globe.png";
import { Search, Rocket, DollarSign, BadgeCheck } from "lucide-react";
import { popularSearches, heroStats } from "@/data/funding";
import { TrendBadge, MiniSpark } from "./shared";

function Globe() {
  return (
    <div
      className="relative flex h-full w-full items-center justify-center pointer-events-none"
      aria-hidden="true"
    >
      {/* Globe */}
      <div className="relative aspect-square w-full max-w-[560px]">
        <Image
          src={globe}
          alt=""
          fill
          priority
          draggable={false}
          sizes="(min-width: 1536px) 560px,
                 (min-width: 1280px) 520px,
                 (min-width: 1024px) 42vw,
                 100vw"
          className="select-none object-contain opacity-95"
        />
      </div>

      {/* Rocket */}
      <div
        className="
          absolute
          top-8
          right-8
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-2xl
          border
          border-[#FCE6DF]
          bg-white/95
          shadow-[0_6px_20px_rgba(15,23,42,0.06)]
        "
      >
        <Rocket className="h-4 w-4 text-[#FF5A4E]" strokeWidth={2.2} />
      </div>

      {/* Dollar */}
      <div
        className="
          absolute
          left-4
          top-1/2
          -translate-y-1/2
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-2xl
          border
          border-[#FCE6DF]
          bg-white/95
          shadow-[0_6px_20px_rgba(15,23,42,0.06)]
        "
      >
        <DollarSign className="h-4 w-4 text-[#FF5A4E]" strokeWidth={2.2} />
      </div>

      {/* Badge */}
      <div
        className="
          absolute
          bottom-8
          right-10
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-2xl
          border
          border-[#FCE6DF]
          bg-white/95
          shadow-[0_6px_20px_rgba(15,23,42,0.06)]
        "
      >
        <BadgeCheck className="h-4 w-4 text-[#FF5A4E]" strokeWidth={2.2} />
      </div>
    </div>
  );
}

function HeroStatCard({
  label,
  value,
  trend,
  chart = false,
  className = "",
}: {
  label: string;
  value: string;
  trend: {
    direction: "up" | "down";
    pct: string;
    note?: string;
  };
  chart?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`
        absolute
        w-[185px]
        rounded-[18px]
        border
        border-[#ECECEC]
        bg-white
        px-5
        py-4
        shadow-[0_1px_2px_rgba(16,24,40,0.04),0_8px_24px_rgba(16,24,40,0.06)]
        ${chart ? "min-h-[146px]" : "min-h-[108px]"}
        ${className}
      `}
    >
      <p className="text-[11px] font-medium leading-none text-[#6B7280]">
        {label}
      </p>

      <h3
        className="
          mt-2
          text-[26px]
          font-extrabold
          leading-none
          tracking-[-0.03em]
          text-[#0B0B0F]
        "
      >
        {value}
      </h3>

      {chart && (
        <div className="mt-2.5">
          <MiniSpark
            data={[10, 14, 12, 18, 16, 22, 26, 24, 30]}
            color="#FF5A4E"
          />
        </div>
      )}

      <div className={chart ? "mt-2" : "mt-3"}>
        <TrendBadge
          trend={trend}
          size="xs"
        />
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section
      aria-labelledby="funding-hero"
      className="w-full pt-8 pb-10"
    >
      <div
        className="
          grid
          items-center
          gap-10
          xl:gap-14
          lg:grid-cols-[minmax(0,0.96fr)_minmax(0,1.04fr)]
        "
      >
        {/* LEFT */}
        <div className="min-w-0 max-w-[560px]">
          <header>
            <h1
              id="funding-hero"
              className="
                font-display
                font-extrabold
                leading-[0.95]
                tracking-[-0.045em]
                text-[#0B0B0F]

                text-[42px]
                md:text-[50px]
                xl:text-[58px]
              "
            >
              Follow the capital
              <br />
              behind the AI economy
            </h1>

            <p
              className="
                mt-5
                max-w-[500px]
                text-[15px]
                leading-7
                text-[#6B7280]
              "
            >
              Track every funding round, acquisition, investor activity,
              and capital trends shaping the future of artificial
              intelligence.
            </p>
          </header>

          {/* Search */}

          <form
            role="search"
            action="#"
            className="relative mt-8 w-full max-w-[500px]"
          >
            <input
              type="search"
              placeholder="Search startups, rounds, investors, sectors..."
              aria-label="Search startups, investors and funding rounds"
              className="
                h-[50px]
                w-full
                rounded-full
                border
                border-[#ECECEC]
                bg-white
                pl-6
                pr-14
                text-[14px]
                text-[#0B0B0F]
                placeholder:text-[#9CA3AF]
                outline-none
                transition
                focus:border-[#FF5A4E]
                focus:ring-4
                focus:ring-[#FF5A4E]/10
              "
            />

            <button
              type="submit"
              aria-label="Search"
              className="
                absolute
                right-[6px]
                top-[5px]
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                bg-[#FF5A4E]
                text-white
                transition-colors
                hover:bg-[#F14E42]
              "
            >
              <Search className="h-4 w-4" />
            </button>
          </form>

          {/* Popular searches */}

          <div className="mt-5 flex flex-wrap items-center gap-2">
            <span className="mr-1 text-[12px] text-[#6B7280]">
              Popular searches:
            </span>

            {popularSearches.map((item) => (
              <button
                key={item}
                className="
                  rounded-full
                  border
                  border-[#ECECEC]
                  bg-white
                  px-3
                  py-[6px]
                  text-[12px]
                  text-[#374151]
                  transition-colors
                  hover:border-[#FF5A4E]
                  hover:text-[#FF5A4E]
                "
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT */}

        <div
          className="
            relative
            hidden
            lg:flex
            h-[460px]
            w-full
            items-center
            justify-center
          "
        >
          <Globe />

          <HeroStatCard
            label={heroStats.totalFunding.label}
            value={heroStats.totalFunding.value}
            trend={heroStats.totalFunding.trend}
            className="top-3 left-0"
          />

          <HeroStatCard
            label={heroStats.activeInvestors.label}
            value={heroStats.activeInvestors.value}
            trend={heroStats.activeInvestors.trend}
            className="top-28 right-0"
          />

          <HeroStatCard
            label={heroStats.fundingRounds.label}
            value={heroStats.fundingRounds.value}
            trend={heroStats.fundingRounds.trend}
            chart
            className="bottom-6 left-6"
          />
        </div>
      </div>
    </section>
  );
}
