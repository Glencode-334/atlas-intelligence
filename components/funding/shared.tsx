import { Suspense } from "react";
import { Area, AreaChart, ResponsiveContainer } from "recharts";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import{ type Trend } from "@/data/funding"
 
export function TrendBadge({ trend, size = "sm" }: { trend: Trend; size?: "sm" | "xs" }) {
  const up = trend.direction === "up";
  const Icon = up ? ArrowUpRight : ArrowDownRight;
  const color = up ? "text-up" : "text-down";
  const text = size === "xs" ? "text-[11px]" : "text-[12px]";
  return (
    <span className={`inline-flex items-center gap-1 ${text} ${color}`}>
      <Icon className="w-3 h-3" strokeWidth={2.5} />
      <span className="font-medium">{trend.pct}</span>
      {trend.note && <span className="text-muted-ink font-normal">{trend.note}</span>}
    </span>
  );
}

export function Sparkline({
  data,
  color,
}: {
  data: number[];
  color: string;
  height?: number;
}) {
  const chartData = data.map((v, i) => ({ i, v }));
  const id = `g-${color.replace("#", "")}`;
  return (
    <div className="w-full h-12 min-w-0">
      <ResponsiveContainer width="100%" height={44}>
        <AreaChart data={chartData} margin={{ top: 2, right: 0, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={color} stopOpacity={0.25} />
              <stop offset="100%" stopColor={color} stopOpacity={0} />
            </linearGradient>
          </defs>
          <Area
            type="monotone"
            dataKey="v"
            stroke={color}
            strokeWidth={2}
            fill={`url(#${id})`}
            isAnimationActive={false}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}


export function MiniSpark({ data, color }: { data: number[]; color: string }) {
  return (
    <Suspense fallback={<div className="h-10" />}>
      <Sparkline data={data} color={color} />
    </Suspense>
  );
}