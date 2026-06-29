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
      <div className="relative aspect-square w-full max-w-[460px]">
        <Image
          src={globe}
          alt=""
          fill
          priority
          draggable={false}
          sizes="
            (min-width:1536px) 520px,
            (min-width:1280px) 480px,
            (min-width:1024px) 42vw,
            100vw
          "
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
          bg-white
          shadow-[0_10px_24px_rgba(15,23,42,0.08)]
        "
      >
        <Rocket
          className="h-4 w-4 text-[#FF5A4E]"
          strokeWidth={2.2}
        />
      </div>

      {/* Dollar */}
      <div
        className="
          absolute
          left-4
          top-40
          -translate-y-1/2
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-2xl
          border
          border-[#FCE6DF]
          bg-white
          shadow-[0_10px_24px_rgba(15,23,42,0.08)]
        "
      >
        <DollarSign
          className="h-4 w-4 text-[#FF5A4E]"
          strokeWidth={2.2}
        />
      </div>

      {/* Badge */}
      <div
        className="
          absolute
          bottom-10
          right-5
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-2xl
          border
          border-[#FCE6DF]
          bg-white
          shadow-[0_10px_24px_rgba(15,23,42,0.08)]
        "
      >
        <BadgeCheck
          className="h-4 w-4 text-[#FF5A4E]"
          strokeWidth={2.2}
        />
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
        ${chart ? "min-w-[165px]" : "min-w-[135px]"}
        rounded-sm
        border
        border-[#F0F1F3]
        bg-white
        px-3.5
        py-2.5
        shadow-[0_6px_20px_rgba(15,23,42,0.08),0_2px_6px_rgba(15,23,42,0.04)]
        backdrop-blur-sm
        ${chart ? "min-h-[66px]" : "min-h-[62px]"}
        ${className}
      `}
    >
      <p className="text-[9px] font-medium tracking-[0.02em] text-[#6B7280]">
        {label}
      </p>

      <h3
        className="
          mt-1
          text-[20px]
          font-bold
          leading-none
          tracking-[-0.04em]
          text-[#111827]
        "
      >
        {value}
      </h3>
      
      <div className={chart ? "mt-0.5" : "mt-1"}>
        <TrendBadge trend={trend} size="xs" />
      </div>

      {chart && (
        <div className="mt-1">
          <MiniSpark
            data={[10, 14, 12, 18, 16, 22, 26, 24, 30]}
            color="#FF5A4E"
          />
        </div>
      )}
    </div>
  );
}

export function Hero() {
  return (
    <section
      aria-labelledby="funding-hero"
      className="w-full pb-8"
    >
      <div
        className="
          grid
          items-center
          gap-8
          xl:gap-10
          lg:grid-cols-[minmax(0,0.96fr)_minmax(0,1.04fr)]
        "
      >
        {/* LEFT */}
        <div className="min-w-0 w-full">
          <header>
            <h1
              id="funding-hero"
              className="
                font-display
                font-semibold
                leading-[0.95]
                tracking-[-0.045em]
                text-[#0B0B0F]
                text-[34px]
                md:text-[40px]
                xl:text-[46px]
              "
            >
              Follow the capital
              <br />
              behind the AI economy
            </h1>

            <p
              className="
                mt-6
                max-w-[430px]
                text-[14px]
                leading-6
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
            className="relative mt-6 w-full max-w-[430px]"
          >
            <input
              type="search"
              placeholder="Search startups, rounds, investors, sectors..."
              aria-label="Search startups, investors and funding rounds"
              className="
                h-[42px]
                w-full
                rounded-full
                border
                border-[#ECECEC]
                bg-white
                pl-5
                pr-12
                text-[13px]
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
                right-[4px]
                top-[4px]
                flex
                h-[34px]
                w-[34px]
                items-center
                justify-center
                rounded-full
                bg-[#FF5A4E]
                text-white
                transition-colors
                hover:bg-[#F14E42]
              "
            >
              <Search className="h-3.5 w-3.5" />
            </button>
          </form>

          {/* Popular searches */}

          <div className="mt-6 flex flex-wrap items-center gap-2">
            <span className="mr-1 text-[11px] text-[#6B7280]">
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
                  px-2.5
                  py-1
                  text-[11px]
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
            h-[350px]
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
            className="top-6 left-6"
          />

          <HeroStatCard
            label={heroStats.activeInvestors.label}
            value={heroStats.activeInvestors.value}
            trend={heroStats.activeInvestors.trend}
            className="top-30 right-0"
          />

          <HeroStatCard
            label={heroStats.fundingRounds.label}
            value={heroStats.fundingRounds.value}
            trend={heroStats.fundingRounds.trend}
            chart
            className="bottom-8 left-8"
          />
        </div>
      </div>
    </section>
  );
}
