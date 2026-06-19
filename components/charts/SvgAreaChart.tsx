import { useMemo } from "react";

export interface AreaSeries {
  name: string;
  color: string;
  points: { label: string; value: number }[];
}

interface SvgAreaChartProps {
  series: AreaSeries[];
  height?: number;
  format?: (n: number) => string;
}

const defaultFormat = (n: number) => (n >= 1000 ? `${(n / 1000).toFixed(1)}k` : Math.round(n).toString());

export function SvgAreaChart({ series, height = 240, format = defaultFormat }: SvgAreaChartProps) {
  const width = 720;
  const padding = { top: 16, right: 16, bottom: 32, left: 48 };
  const innerW = width - padding.left - padding.right;
  const innerH = height - padding.top - padding.bottom;

  const { labels, maxY } = useMemo(() => {
    const labels = series[0]?.points.map((p) => p.label) ?? [];
    const all = series.flatMap((s) => s.points.map((p) => p.value));
    const maxY = niceCeil(Math.max(1, ...all));
    return { labels, maxY };
  }, [series]);

  const x = (i: number) => padding.left + (labels.length <= 1 ? 0 : (i * innerW) / (labels.length - 1));
  const y = (v: number) => padding.top + innerH - (v / maxY) * innerH;

  const ticks = 4;
  const yTicks = Array.from({ length: ticks + 1 }, (_, i) => (maxY * i) / ticks);

  return (
    <div className="w-full overflow-hidden">
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full" role="img">
        <defs>
          {series.map((s, idx) => (
            <linearGradient key={idx} id={`area-${idx}-${s.name.replace(/\s+/g, "")}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={s.color} stopOpacity={0.35} />
              <stop offset="100%" stopColor={s.color} stopOpacity={0.02} />
            </linearGradient>
          ))}
        </defs>

        {yTicks.map((t, i) => (
          <g key={i}>
            <line
              x1={padding.left}
              x2={width - padding.right}
              y1={y(t)}
              y2={y(t)}
              stroke="var(--color-border)"
              strokeDasharray={i === 0 ? "" : "3 4"}
              strokeWidth={1}
            />
            <text x={padding.left - 8} y={y(t) + 4} textAnchor="end" className="fill-muted-foreground" fontSize={11}>
              {format(t)}
            </text>
          </g>
        ))}

        {labels.map((label, i) => (
          <text
            key={label}
            x={x(i)}
            y={height - padding.bottom + 18}
            textAnchor="middle"
            className="fill-muted-foreground"
            fontSize={11}
          >
            {label}
          </text>
        ))}

        {series.map((s, idx) => {
          const line = s.points.map((p, i) => `${i === 0 ? "M" : "L"} ${x(i)} ${y(p.value)}`).join(" ");
          const area =
            `M ${x(0)} ${y(0)} ` +
            s.points.map((p, i) => `L ${x(i)} ${y(p.value)}`).join(" ") +
            ` L ${x(s.points.length - 1)} ${y(0)} Z`;
          return (
            <g key={s.name}>
              <path d={area} fill={`url(#area-${idx}-${s.name.replace(/\s+/g, "")})`} />
              <path d={line} fill="none" stroke={s.color} strokeWidth={2} />
            </g>
          );
        })}
      </svg>

      <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1.5 px-1">
        {series.map((s) => (
          <div key={s.name} className="flex items-center gap-2 text-xs text-muted-foreground">
            <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: s.color }} />
            <span className="font-medium text-foreground">{s.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function niceCeil(n: number): number {
  if (n <= 0) return 1;
  const exp = Math.pow(10, Math.floor(Math.log10(n)));
  const frac = n / exp;
  const nice = frac <= 1 ? 1 : frac <= 2 ? 2 : frac <= 5 ? 5 : 10;
  return nice * exp;
}
