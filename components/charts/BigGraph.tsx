export function BigGraph() {
  // 4 typed clusters around a foundation-model core. Positions in a 200x120 viewBox
  // so labels have room to breathe.
  type N = { id: string; x: number; y: number; r: number; t: "model" | "startup" | "investor" | "enterprise"; bold?: boolean };
  const nodes: N[] = [
    // Core models
    { id: "OpenAI", x: 100, y: 60, r: 5, t: "model", bold: true },
    { id: "Anthropic", x: 64, y: 36, r: 3.6, t: "model" },
    { id: "Mistral", x: 138, y: 36, r: 3.2, t: "model" },
    { id: "Meta Llama", x: 158, y: 70, r: 2.8, t: "model" },
    // Startups
    { id: "Cursor", x: 78, y: 92, r: 2.6, t: "startup" },
    { id: "Perplexity", x: 116, y: 96, r: 2.6, t: "startup" },
    { id: "ElevenLabs", x: 44, y: 70, r: 2.2, t: "startup" },
    { id: "Runway", x: 156, y: 96, r: 2.2, t: "startup" },
    { id: "Harvey", x: 24, y: 50, r: 2, t: "startup" },
    { id: "Sierra", x: 176, y: 50, r: 2, t: "startup" },
    // Investors
    { id: "Sequoia", x: 16, y: 92, r: 2.4, t: "investor" },
    { id: "a16z", x: 50, y: 104, r: 2.2, t: "investor" },
    { id: "Thrive", x: 96, y: 108, r: 2, t: "investor" },
    { id: "Founders Fund", x: 134, y: 108, r: 2, t: "investor" },
    // Enterprises / hyperscalers
    { id: "Microsoft", x: 50, y: 14, r: 2.8, t: "enterprise" },
    { id: "Amazon", x: 100, y: 8, r: 2.4, t: "enterprise" },
    { id: "Google", x: 150, y: 14, r: 2.6, t: "enterprise" },
    { id: "Nvidia", x: 184, y: 28, r: 2.6, t: "enterprise" },
  ];
  const colors: Record<N["t"], string> = {
    model: "oklch(0.62 0.16 150)",
    startup: "oklch(0.68 0.21 18)",
    investor: "oklch(0.62 0.14 230)",
    enterprise: "oklch(0.55 0.18 300)",
  };
  const by = (id: string) => nodes.find((n) => n.id === id)!;
  // Typed relationships
  const edges: [string, string, "primary" | "secondary"][] = [
    ["OpenAI", "Microsoft", "primary"],
    ["OpenAI", "Thrive", "primary"],
    ["OpenAI", "Cursor", "primary"],
    ["OpenAI", "Perplexity", "secondary"],
    ["OpenAI", "Anthropic", "secondary"],
    ["Anthropic", "Amazon", "primary"],
    ["Anthropic", "Google", "secondary"],
    ["Mistral", "a16z", "primary"],
    ["Mistral", "Google", "secondary"],
    ["Meta Llama", "Sierra", "secondary"],
    ["Cursor", "Thrive", "primary"],
    ["Cursor", "a16z", "secondary"],
    ["Perplexity", "Nvidia", "primary"],
    ["Perplexity", "Founders Fund", "secondary"],
    ["ElevenLabs", "a16z", "primary"],
    ["ElevenLabs", "Sequoia", "secondary"],
    ["Runway", "Nvidia", "primary"],
    ["Runway", "Google", "secondary"],
    ["Harvey", "Sequoia", "primary"],
    ["Sierra", "Founders Fund", "primary"],
  ];
  return (
    <svg viewBox="0 0 200 120" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid meet">
      {edges.map(([a, b, kind], i) => {
        const A = by(a), B = by(b);
        return (
          <line
            key={i}
            x1={A.x} y1={A.y} x2={B.x} y2={B.y}
            stroke={kind === "primary" ? "oklch(0.68 0.21 18 / 0.45)" : "oklch(0.5 0.02 270 / 0.18)"}
            strokeWidth={kind === "primary" ? 0.5 : 0.35}
          />
        );
      })}
      {nodes.map((n) => (
        <g key={n.id}>
          <circle cx={n.x} cy={n.y} r={n.r + 1.2} fill={colors[n.t]} opacity="0.18" />
          <circle cx={n.x} cy={n.y} r={n.r} fill={colors[n.t]} />
          {n.bold && <circle cx={n.x} cy={n.y} r={n.r + 2.4} fill="none" stroke={colors[n.t]} strokeWidth="0.4" opacity="0.6" />}
          <text
            x={n.x}
            y={n.y + n.r + 3.2}
            textAnchor="middle"
            fontSize={n.bold ? 3.4 : 2.6}
            fontWeight={n.bold ? 600 : 500}
            fill="oklch(0.22 0.01 270)"
            style={{ paintOrder: "stroke", stroke: "oklch(0.99 0.01 60)", strokeWidth: 0.6, strokeLinejoin: "round" }}
          >
            {n.id}
          </text>
        </g>
      ))}
    </svg>
  );
}