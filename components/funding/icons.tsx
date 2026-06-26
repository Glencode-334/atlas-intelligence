type MarkProps = { size?: number; dark?: boolean };

export function BrandOpenAI({ size = 28 }: MarkProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <g stroke="#0B0B0F" strokeWidth="1.6" strokeLinecap="round">
        <path d="M16 5c4 0 7 2.5 7 6.5 0 1.2-.3 2.3-.8 3.2" />
        <path d="M23 14c3.5 2 4.7 6 2.7 9.4-.6 1-1.5 1.9-2.5 2.4" />
        <path d="M23 26c-2 3.5-6 4.6-9.4 2.6-1-.6-1.9-1.5-2.4-2.5" />
        <path d="M11 26c-3.5-2-4.7-6-2.7-9.4.6-1 1.5-1.9 2.5-2.4" />
        <path d="M11 14C8 12 6.8 8 8.8 4.6c.6-1 1.5-1.9 2.5-2.4" />
        <path d="M11 5c3.5-2 7.5-.8 9.4 2.6.6 1 .8 2.2.8 3.4" />
      </g>
    </svg>
  );
}

export function BrandAnthropic({ size = 28, dark }: MarkProps) {
  const c = dark ? "#0B0B0F" : "#cc785c";
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <path d="M11 26 L16 6 L21 26 M13 20 H19" stroke={c} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

export function BrandCursor({ size = 28 }: MarkProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <path d="M6 9 L16 4 L26 9 L26 23 L16 28 L6 23 Z" fill="#fff" opacity="0.9" />
      <path d="M6 9 L16 14 L26 9 M16 14 L16 28" stroke="#0B0B0F" strokeWidth="1.2" fill="none" />
    </svg>
  );
}

export function BrandPerplexity({ size = 28, dark }: MarkProps) {
  const c = dark ? "#20808d" : "#fff";
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <g stroke={c} strokeWidth="2" strokeLinecap="round" fill="none">
        <path d="M16 5 V27" />
        <path d="M8 9 L24 23" />
        <path d="M24 9 L8 23" />
        <path d="M5 16 H27" />
      </g>
    </svg>
  );
}

export function BrandElevenLabs({ size = 28 }: MarkProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <rect x="10" y="6" width="3.5" height="20" rx="1" fill="#fff" />
      <rect x="18.5" y="6" width="3.5" height="20" rx="1" fill="#fff" />
    </svg>
  );
}

export function BrandHarvey({ size = 16 }: MarkProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <text x="16" y="22" textAnchor="middle" fontSize="16" fontWeight="700" fill="#fff" fontFamily="Georgia, serif">H</text>
      <text x="24" y="26" textAnchor="middle" fontSize="8" fill="#fff" fontFamily="Georgia, serif">2</text>
    </svg>
  );
}

export function BrandSynthesia({ size = 14, dark }: MarkProps) {
  const c = dark ? "#0B0B0F" : "#fff";
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <g stroke={c} strokeWidth="1.6" fill="none" strokeLinejoin="round">
        <path d="M16 4 L20 12 L28 14 L22 20 L24 28 L16 24 L8 28 L10 20 L4 14 L12 12 Z" />
      </g>
    </svg>
  );
}

export function BrandNvidia() {
  return (
    <svg width={16} height={16} viewBox="0 0 32 32" fill="none">
      <path d="M6 10 C10 6 18 6 22 10 L26 22 L20 22 L18 16 C16 12 12 12 10 14 L10 22 L6 22 Z" fill="#fff" />
    </svg>
  );
}

/* Wordmarks for lead-investor row (small, monochrome-ish) */
export function BrandMicrosoft() {
  return (
    <div className="flex items-center gap-1">
      <svg width="10" height="10" viewBox="0 0 10 10"><rect width="4.5" height="4.5" fill="#F25022"/><rect x="5.5" width="4.5" height="4.5" fill="#7FBA00"/><rect y="5.5" width="4.5" height="4.5" fill="#00A4EF"/><rect x="5.5" y="5.5" width="4.5" height="4.5" fill="#FFB900"/></svg>
      <span className="text-[10px] font-semibold text-[#0B0B0F]">Microsoft</span>
    </div>
  );
}
export function BrandAmazon() {
  return (
    <div className="flex flex-col">
      <span className="text-[11px] font-bold tracking-tight text-[#0B0B0F]" style={{ fontFamily: "serif" }}>amazon</span>
      <svg width="28" height="4" viewBox="0 0 28 4"><path d="M1 1 C8 4 20 4 27 1" stroke="#FF9900" strokeWidth="1.4" fill="none" strokeLinecap="round" /></svg>
    </div>
  );
}
export function BrandThrive() {
  return (
    <div className="flex items-center gap-1">
      <svg width="9" height="9" viewBox="0 0 9 9"><circle cx="4.5" cy="4.5" r="4" fill="#FF5A4E" /></svg>
      <span className="text-[8.5px] font-bold leading-none text-[#FF5A4E]">THRIVE<br/>CAPITAL</span>
    </div>
  );
}
export function BrandNEA() {
  return <span className="text-[11px] font-bold tracking-wide text-[#0B0B0F]" style={{ fontFamily: "Georgia, serif" }}>NEA</span>;
}
export function BrandIconiq() {
  return <span className="text-[10px] font-bold tracking-[0.15em] text-[#0B0B0F]">ICONIQ</span>;
}

/* Top-VC marks for "Most active investors" list */
export function InvBox({
  bg,
  children,
}: {
  bg: string;
  children: React.ReactNode;
}) {
  return (
    <span
      className="flex h-8 w-8 items-center justify-center rounded-md"
      style={{ background: bg }}
    >
      {children}
    </span>
  );
}
export function InvSequoia() {
  return <InvBox bg="#1E8A4B"><svg width="16" height="16" viewBox="0 0 16 16"><path d="M8 2 C5 6 5 10 8 14 C11 10 11 6 8 2 Z M8 6 V14" stroke="#fff" strokeWidth="1.2" fill="none"/></svg></InvBox>;
}
export function InvAccel() {
  return <InvBox bg="#0B0B0F"><span className="text-[8px] font-bold tracking-wider text-white">accel</span></InvBox>;
}
export function InvLightspeed() {
  return <InvBox bg="#5B2A8C"><svg width="16" height="16" viewBox="0 0 16 16"><path d="M9 2 L4 9 H7 L6 14 L12 7 H9 Z" fill="#fff"/></svg></InvBox>;
}
export function InvGC() {
  return <InvBox bg="#0B0B0F"><span className="text-[9px] font-bold text-white">GC</span></InvBox>;
}
export function InvA16() {
  return <InvBox bg="#FF5A4E"><span className="text-[9px] font-bold text-white">a16z</span></InvBox>;
}

type IconProps = {
  size?: number;
};

export function StagePreSeed({ size = 22 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path
        d="M12 20V12M12 12C12 8 15 5 19 5C19 9 16 12 12 12ZM12 12C12 9 10 7 7 7C7 10 9 12 12 12ZM12 12C12 10 11 8 9 6"
        stroke="#FF5A4E"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function StageSeed({ size = 22 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path
        d="M12 20V6M8 10H4V20H20V10H16M8 10L12 6L16 10"
        stroke="#27B37E"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function StageSeriesA({ size = 22 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path
        d="M12 4L20 19H4L12 4Z"
        stroke="#8B5CF6"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M9.7 14H14.3M10.7 11H13.3"
        stroke="#8B5CF6"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function StageSeriesB({ size = 22 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path
        d="M12 3L18 6V12C18 16 15.5 19 12 21C8.5 19 6 16 6 12V6L12 3Z"
        stroke="#3B82F6"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M10 8H13.2C14.5 8 15.3 8.7 15.3 9.8C15.3 10.8 14.6 11.5 13.5 11.6M10 11.6H13.6C15 11.6 15.8 12.4 15.8 13.6C15.8 14.8 14.9 15.6 13.3 15.6H10"
        stroke="#3B82F6"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function StageGrowth({ size = 22 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path
        d="M6 18L10 14M10 14L14 10M10 14L7 11M14 10L17 13"
        stroke="#6366F1"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M13 6L18 6L18 11"
        stroke="#6366F1"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function StageIPO({ size = 22 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path
        d="M5 18H19"
        stroke="#3B82F6"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M7 18V13M12 18V9M17 18V5"
        stroke="#3B82F6"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M6 10L10 7L14 8L18 4"
        stroke="#3B82F6"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}