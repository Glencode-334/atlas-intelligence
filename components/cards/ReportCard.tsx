import { BookOpen, ChevronRight, FileText, TrendingUp } from "lucide-react";
import { reports, reportImages } from "@/lib/atlas-data";
import Image from "next/image";

export function ReportCard({
  r,
  featured = false,
}: {
  r: (typeof reports)[number];
  featured?: boolean;
}) {
  const tones: Record<string, { tint: string; chip: string; text: string }> = {
    pink: { tint: "linear-gradient(180deg, oklch(0.78 0.18 10 / 0.05) 0%, oklch(0.45 0.22 10 / 0.85) 100%)", chip: "bg-[oklch(1_0_0/0.85)] text-[oklch(0.35_0.18_10)]", text: "text-white" },
    orange: { tint: "linear-gradient(180deg, oklch(0.82 0.16 50 / 0.05) 0%, oklch(0.4 0.18 35 / 0.85) 100%)", chip: "bg-[oklch(1_0_0/0.85)] text-[oklch(0.4_0.18_35)]", text: "text-white" },
    blue: { tint: "linear-gradient(180deg, oklch(0.78 0.12 240 / 0.05) 0%, oklch(0.35 0.14 240 / 0.85) 100%)", chip: "bg-[oklch(1_0_0/0.85)] text-[oklch(0.35_0.14_240)]", text: "text-white" },
    teal: { tint: "linear-gradient(180deg, oklch(0.78 0.12 175 / 0.05) 0%, oklch(0.35 0.1 180 / 0.85) 100%)", chip: "bg-[oklch(1_0_0/0.85)] text-[oklch(0.35_0.1_180)]", text: "text-white" },
  };
  const tone = tones[r.tone] ?? tones.pink;
  const img = reportImages[r.image];
  return (
    <article
      className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl ${tone.text} ${
        featured ? "row-span-2 min-h-[480px] p-6" : "min-h-[260px] p-5"
      }`}
    >
      <Image
        src={img}
        alt={r.title}
        fill
        sizes="(max-width: 768px) 100vw, 400px"
        priority
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0" style={{ background: tone.tint }} />
      <div className="relative flex items-start justify-between">
        <span className={`inline-flex w-fit items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-medium backdrop-blur ${tone.chip}`}>
          {featured ? <FileText className="size-3" /> : null}
          {featured ? "Flagship" : r.category}
        </span>
      </div>
      <div className="relative">
        <p className="text-[11px] uppercase tracking-[0.14em] text-white/80">
          {r.date} · {r.author}
        </p>
        <h3
          className={`mt-2 font-semibold leading-tight tracking-tight ${
            featured ? "text-3xl" : "text-lg"
          }`}
        >
          {r.title}
        </h3>
        <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-white/80">
          <span className="inline-flex items-center gap-1"><FileText className="size-3" /> {r.pages} pages</span>
          <span className="inline-flex items-center gap-1"><BookOpen className="size-3" /> {r.readTime}</span>
          <span className="inline-flex items-center gap-1"><TrendingUp className="size-3" /> {r.downloads} downloads</span>
        </div>
        <div className="mt-4 flex items-center justify-between text-sm">
          <span className="inline-flex items-center gap-1.5 text-white/80">
            <BookOpen className="size-4" /> {r.date}
          </span>
          <a href="#" className="inline-flex items-center gap-1 font-medium text-white">
            Read <ChevronRight className="size-4" />
          </a>
        </div>
      </div>
    </article>
  );
}
