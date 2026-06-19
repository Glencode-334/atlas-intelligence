import { useMemo } from "react";

export interface BarGroup {
  label: string;
  bars: { name: string; value: number; color: string }[];
}

interface SvgBarChartProps {
  groups: BarGroup[];
  height?: number;
  format?: (n: number) => string;
}

const defaultFormat = (n: number) => (n >= 1000 ? `${(n / 1000).toFixed(1)}k` : Math.round(n).toString());

export function SvgBarChart({ groups, height = 260, format = defaultFormat }: SvgBarChartProps) {
  const width = 720;
  const padding = { top: 16, right: 16, bottom: 36, left: 48 };
  const innerW = width - padding.left - padding.right;
  const innerH = height - padding.top - padding.bottom;

  const { maxY, seriesNames } = useMemo(() => {
    const all = groups.flatMap((g) => g.bars.map((b) => b.value));
    const maxY = niceCeil(Math.max(1, ...all));
    const seriesNames = Array.from(new Set(groups.flatMap((g) => g.bars.map((b) => b.name))));
    return { maxY, seriesNames };
  }, [groups]);

  const groupW = innerW / Math.max(1, groups.length);
  const barCount = groups[0]?.bars.length ?? 1;
  const barW = Math.max(8, (groupW - 16) / barCount);

  const seriesColor = (name: string): string => {
    for (const g of groups) {
      const found = g.bars.find((b) => b.name === name);
      if (found) return found.color;
    }
    return "var(--color-primary)";
  };

  const ticks = 4;
  const yTicks = Array.from({ length: ticks + 1 }, (_, i) => (maxY * i) / ticks);
  const y = (v: number) => padding.top + innerH - (v / maxY) * innerH;

  return (
    <div className="w-full overflow-hidden">
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full" role="img">
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

        {groups.map((g, gi) => {
          const gx = padding.left + gi * groupW + 8;
          return (
            <g key={g.label}>
              {g.bars.map((b, bi) => {
                const h = (b.value / maxY) * innerH;
                const bx = gx + bi * barW;
                const by = padding.top + innerH - h;
                return (
                  <g key={b.name}>
                    <rect x={bx} y={by} width={barW - 2} height={h} rx={4} fill={b.color}>
                      <title>{`${b.name} · ${g.label}: ${format(b.value)}`}</title>
                    </rect>
                  </g>
                );
              })}
              <text
                x={gx + (groupW - 16) / 2}
                y={height - padding.bottom + 18}
                textAnchor="middle"
                className="fill-muted-foreground"
                fontSize={11}
              >
                {g.label}
              </text>
            </g>
          );
        })}
      </svg>

      <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1.5 px-1">
        {seriesNames.map((n) => (
          <div key={n} className="flex items-center gap-2 text-xs text-muted-foreground">
            <span className="h-2.5 w-2.5 rounded-sm" style={{ backgroundColor: seriesColor(n) }} />
            <span className="font-medium text-foreground">{n}</span>
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
