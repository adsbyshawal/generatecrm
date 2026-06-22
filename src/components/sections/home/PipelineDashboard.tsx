import { pipeline } from "@/lib/content";

const tagTones: Record<string, string> = {
  new: "bg-black/5 text-ink/70",
  booked: "bg-emerald-500/10 text-emerald-700",
  proposal: "bg-black/[0.07] text-ink/70",
  won: "bg-emerald-600/15 text-emerald-800",
};

// Hero product mockup — a clean white pipeline board, framed like a real app.
export default function PipelineDashboard() {
  return (
    <div className="w-full max-w-2xl overflow-hidden rounded-t-2xl border border-black/10 bg-white text-sm shadow-2xl">
      {/* App topbar */}
      <div className="flex items-center justify-between border-b border-black/5 bg-[#FCFAFB] px-5 py-3">
        <span className="flex items-center gap-2 font-medium text-ink">
          <span className="flex h-5 w-5 items-center justify-center rounded bg-ink text-[11px] text-white">
            G
          </span>
          {pipeline.browserTitle}
        </span>
        <span className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-black/10" />
          <span className="h-2.5 w-2.5 rounded-full bg-black/10" />
          <span className="h-2.5 w-2.5 rounded-full bg-black/10" />
        </span>
      </div>

      {/* Board */}
      <div className="grid grid-cols-2 gap-3 p-5 lg:grid-cols-4">
        {pipeline.columns.map((col) => (
          <div key={col.title} className="flex flex-col gap-2">
            <p className="text-[11px] font-medium uppercase tracking-wide text-ink/40">
              {col.title}
            </p>
            {col.cards.map((card) => (
              <div
                key={card.name}
                className="rounded-lg border border-black/5 bg-[#FCFAFB] p-3"
              >
                <p className="text-xs font-medium text-ink">{card.name}</p>
                <p className="mt-0.5 text-[11px] text-ink/50">{card.role}</p>
                <span
                  className={`mt-2 inline-block rounded px-1.5 py-0.5 text-[10px] font-medium ${
                    tagTones[card.tone] ?? "bg-black/5 text-ink/70"
                  }`}
                >
                  {card.tag}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Automation row */}
      <div className="flex items-center gap-2 border-t border-black/5 bg-[#FCFAFB] px-5 py-3">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
        </span>
        <p className="text-[11px] text-ink/60">{pipeline.automation}</p>
      </div>
    </div>
  );
}
