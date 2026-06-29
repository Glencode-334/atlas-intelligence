import * as React from "react";

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

export interface UnicornProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

export const Unicorn = ({
  size = 64,
  strokeWidth = 2,
  ...props
}: UnicornProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="#ff5a70"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M6.2 9.4c-.8-.2-1.5.2-1.8.8-.2.5-.1 1.2.3 1.6.5.5 1.2.6 1.9.2l1.1-.8" />
    <path d="M7.4 10.4c.7-.8 1.3-1.7 2-2.8l1.2-1.8.6-1.5 1.3 1.1-.3 1.4" />
    <path d="M12.2 5.3c.8.2 1.2.8 1.4 1.6.1.6.5 1 1 1.2l1.4-.5-.6 1.3.7.9-.9.2" />
    <path d="M16.1 9.5c.8.5 1.2 1.4 1.2 2.3 0 .8-.2 1.4-.7 2l.3 1.3-1.3-.2-.6 1.2-1.3-.5-.9 1-1-.8-1.3.2-.2-1.2-1-.7" />
  </svg>
);

export default Unicorn;

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
