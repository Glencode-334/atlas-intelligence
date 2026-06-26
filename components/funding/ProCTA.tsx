import {
  BarChart3, Star,
} from "lucide-react";

export function ProCTA() {
  return (
    <section className="mt-8 flex items-center justify-between rounded-2xl border border-[#FFD9D3] bg-[#FFF5F3] p-5">
      <div className="flex items-center gap-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#FF5A4E] shadow-sm">
          <BarChart3 size={20} />
        </div>
        <div>
          <div className="text-[14px] font-semibold">Unlock deeper insights with Graph1 Pro</div>
          <div className="text-[12px] text-[#6B6B73]">Advanced filters, custom alerts, export data and exclusive market intelligence.</div>
        </div>
      </div>
      <button className="flex items-center gap-2 rounded-full bg-[#FF5A4E] px-5 py-2.5 text-[13px] font-semibold text-white shadow-[0_4px_12px_rgba(255,90,78,.35)]">
        <Star size={14} className="fill-white" /> Get Pro Access
      </button>
    </section>
  );
}
