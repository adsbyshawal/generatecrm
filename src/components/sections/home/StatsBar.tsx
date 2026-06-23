import { stats } from "@/lib/content";

export default function StatsBar() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-6">
      <div className="grid grid-cols-2 gap-y-10 rounded-3xl border border-black/[0.06] bg-white py-12 shadow-[0_1px_3px_rgba(20,21,27,0.04)] sm:grid-cols-4">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={`flex flex-col items-center px-4 text-center ${
              i === 0 ? "" : "sm:border-l sm:border-black/[0.08]"
            }`}
          >
            <span className="text-4xl font-extrabold tracking-tight text-accent sm:text-5xl">
              {s.value}
            </span>
            <span className="mt-2 max-w-[150px] text-sm font-medium leading-snug text-ink-sub">
              {s.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
