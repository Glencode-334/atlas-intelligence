import { useMemo } from "react";

export interface LineSeries {
  name: string;
  color: string;
  points: { label: string; value: number }[];
}

interface SvgLineChartProps {
  series: LineSeries[];
  height?: number;
  yLabel?: string;
  format?: (n: number) => string;
}

const defaultFormat = (n: number) => (n >= 1000 ? `${(n / 1000).toFixed(1)}k` : n.toFixed(n < 10 ? 1 : 0));

export function SvgLineChart({ series, height = 240, yLabel, format = defaultFormat }: SvgLineChartProps) {
  const width = 720;
  const padding = { top: 16, right: 16, bottom: 32, left: 48 };
  const innerW = width - padding.left - padding.right;
  const innerH = height - padding.top - padding.bottom;

  const { labels, maxY, minY } = useMemo(() => {
    const labels = series[0]?.points.map((p) => p.label) ?? [];
    const all = series.flatMap((s) => s.points.map((p) => p.value));
    const maxRaw = Math.max(1, ...all);
    const maxY = niceCeil(maxRaw);
    return { labels, maxY, minY: 0 };
  }, [series]);

  const x = (i: number) => padding.left + (labels.length <= 1 ? 0 : (i * innerW) / (labels.length - 1));
  const y = (v: number) => padding.top + innerH - ((v - minY) / (maxY - minY || 1)) * innerH;

  const ticks = 4;
  const yTicks = Array.from({ length: ticks + 1 }, (_, i) => minY + ((maxY - minY) * i) / ticks);

  return (
    <div className="w-full overflow-hidden">
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full" role="img" aria-label={yLabel ?? "Line chart"}>
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

        {series.map((s) => {
          const d = s.points
            .map((p, i) => `${i === 0 ? "M" : "L"} ${x(i)} ${y(p.value)}`)
            .join(" ");
          return (
            <g key={s.name}>
              <path d={d} fill="none" stroke={s.color} strokeWidth={2.25} strokeLinecap="round" strokeLinejoin="round" />
              {s.points.map((p, i) => (
                <circle key={i} cx={x(i)} cy={y(p.value)} r={3.5} fill="var(--color-card)" stroke={s.color} strokeWidth={2}>
                  <title>{`${s.name} · ${p.label}: ${format(p.value)}`}</title>
                </circle>
              ))}
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
