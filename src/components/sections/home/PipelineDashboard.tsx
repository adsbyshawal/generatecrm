import { pipeline } from "@/lib/content";

const tagTones: Record<string, string> = {
  new: "bg-purple/30 text-purple-200",
  booked: "bg-emerald-500/20 text-emerald-300",
  proposal: "bg-magenta/20 text-magenta",
  won: "bg-yellow-500/20 text-yellow-300",
};

// Hero visual mockup — a fake pipeline board inside a browser chrome.
export default function PipelineDashboard() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/[0.07] bg-bg-card p-5">
      {/* Top gradient edge */}
      <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-purple to-magenta" />

      {/* Browser topbar */}
      <div className="mb-4 flex items-center gap-2">
        <span className="h-3 w-3 rounded-full bg-red-500" />
        <span className="h-3 w-3 rounded-full bg-yellow-500" />
        <span className="h-3 w-3 rounded-full bg-green-500" />
        <span className="ml-3 text-xs text-text-muted">{pipeline.browserTitle}</span>
      </div>

      {/* 4-column board */}
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {pipeline.columns.map((col) => (
          <div key={col.title} className="flex flex-col gap-2">
            <p className="text-[11px] font-bold uppercase tracking-wide text-text-muted">
              {col.title}
            </p>
            {col.cards.map((card) => (
              <div
                key={card.name}
                className="rounded-lg border border-white/[0.07] bg-bg-card2 p-3"
              >
                <p className="text-xs font-semibold text-white">{card.name}</p>
                <p className="mt-0.5 text-[11px] text-text-muted">{card.role}</p>
                <span
                  className={`mt-2 inline-block rounded px-1.5 py-0.5 text-[10px] font-semibold ${
                    tagTones[card.tone] ?? "bg-white/10 text-white"
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
      <div className="mt-4 flex items-center gap-2 rounded-lg border border-border-purple bg-purple/10 px-3 py-2.5">
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple opacity-75" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-purple" />
        </span>
        <p className="text-[11px] font-light text-text-sub">{pipeline.automation}</p>
      </div>
    </div>
  );
}
