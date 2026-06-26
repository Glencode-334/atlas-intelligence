import { Suspense } from "react";
import { Area, AreaChart, ResponsiveContainer } from "recharts";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import{ type Trend } from "@/data/funding"
 
export function TrendBadge({
  trend,
  size = "sm",
}: {
  trend: Trend;
  size?: "sm" | "xs";
}) {
  const up = trend.direction === "up";
  const Icon = up ? ArrowUpRight : ArrowDownRight;

  return (
    <span
      className={`inline-flex items-center ${
        size === "xs" ? "gap-0.5 text-[11px]" : "gap-1 text-[12px]"
      }`}
    >
      <Icon
        className={`${
          size === "xs" ? "h-3 w-3" : "h-3.5 w-3.5"
        } ${up ? "text-[#10B981]" : "text-[#EF4444]"}`}
        strokeWidth={2.5}
      />

      <span
        className={`font-semibold ${
          up ? "text-[#10B981]" : "text-[#EF4444]"
        }`}
      >
        {trend.pct}
      </span>

      {trend.note && (
        <span className="font-normal text-[#6B7280]">
          {trend.note}
        </span>
      )}
    </span>
  );
}

export function Sparkline({
  data,
  color,
}: {
  data: number[];
  color: string;
}) {
  const chartData = data.map((value, index) => ({
    index,
    value,
  }));

  const gradientId = `gradient-${color.replace("#", "")}`;

  return (
    <div className="h-12 w-full min-w-0">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={chartData}
          margin={{
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
          <defs>
            <linearGradient
              id={gradientId}
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop
                offset="5%"
                stopColor={color}
                stopOpacity={0.22}
              />

              <stop
                offset="95%"
                stopColor={color}
                stopOpacity={0}
              />
            </linearGradient>
          </defs>

          <Area
            type="monotone"
            dataKey="value"
            stroke={color}
            strokeWidth={2.2}
            fill={`url(#${gradientId})`}
            isAnimationActive={false}
            dot={false}
            activeDot={false}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export function MiniSpark({
  data,
  color,
}: {
  data: number[];
  color: string;
}) {
  return (
    <Suspense
      fallback={
        <div className="h-12 w-full rounded bg-[#F7F7F7]" />
      }
    >
      <Sparkline
        data={data}
        color={color}
      />
    </Suspense>
  );
}