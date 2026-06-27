import {
  BarChart3,
  Star,
} from "lucide-react";

export function ProCTA() {
  return (
    <section className="mt-6 flex items-center justify-between rounded-[16px] border border-[#FFD9D3] bg-[#FFF5F3] p-4">
      <div className="flex items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-[#FF5A4E] shadow-sm">
          <BarChart3 size={16} />
        </div>

        <div>
          <div className="text-[13px] font-semibold">
            Unlock deeper insights with Graph1 Pro
          </div>

          <div className="text-[11px] text-[#6B6B73]">
            Advanced filters, custom alerts, export data and exclusive market
            intelligence.
          </div>
        </div>
      </div>

      <button
        className="
          flex
          items-center
          gap-1.5
          rounded-full
          bg-[#FF5A4E]
          px-4
          py-2
          text-[12px]
          font-semibold
          text-white
          shadow-[0_3px_10px_rgba(255,90,78,.30)]
        "
      >
        <Star
          size={12}
          className="fill-white"
        />
        Get Pro Access
      </button>
    </section>
  );
}