import { stats } from "@/lib/content";

export default function StatsBar() {
  return (
    <section className="mx-auto max-w-7xl px-6">
      <div className="grid grid-cols-2 gap-y-10 border-y border-black/5 py-12 sm:grid-cols-4">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={`flex flex-col px-2 ${
              i === 0 ? "" : "sm:border-l sm:border-black/10"
            }`}
          >
            <span className="font-serif text-4xl tracking-tight text-ink">
              {s.value}
            </span>
            <span className="mt-2 max-w-[140px] text-sm font-light leading-snug text-ink/60">
              {s.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
