import Link from "next/link";
import { ArrowRight, Check, X } from "lucide-react";
import Icon from "@/components/ui/Icon";

type Industry = {
  id: string;
  icon: string;
  name: string;
  hook: string;
  pains: readonly string[];
  body: string;
  uses: readonly string[];
  hookLine: string;
  cta: { label: string; href: string };
};

export default function IndustrySection({ item }: { item: Industry }) {
  return (
    <div id={item.id} className="scroll-mt-28">
      <div className="flex items-center gap-4">
        <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-accent-soft text-accent">
          <Icon name={item.icon} className="h-7 w-7" strokeWidth={1.75} />
        </span>
        <div>
          <h2 className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
            {item.name}
          </h2>
          <p className="text-base font-semibold text-accent">{item.hook}</p>
        </div>
      </div>

      <p className="mt-6 max-w-3xl text-lg font-light leading-relaxed text-ink-sub">
        {item.body}
      </p>

      <div className="mt-8 grid gap-5 lg:grid-cols-2">
        {/* Pains */}
        <div className="rounded-2xl border border-black/[0.06] bg-white p-7 shadow-sm">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-ink/45">
            The problem today
          </h3>
          <ul className="mt-4 space-y-3">
            {item.pains.map((p) => (
              <li
                key={p}
                className="flex items-start gap-3 text-base font-light leading-snug text-ink/80"
              >
                <X className="mt-0.5 h-4 w-4 shrink-0 text-rose-400" strokeWidth={2} />
                {p}
              </li>
            ))}
          </ul>
        </div>

        {/* Uses */}
        <div className="rounded-2xl border border-black/[0.06] bg-white p-7 shadow-sm">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">
            What Generate CRM does
          </h3>
          <ul className="mt-4 space-y-3">
            {item.uses.map((u) => (
              <li
                key={u}
                className="flex items-start gap-3 text-base font-light leading-snug text-ink/80"
              >
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-soft">
                  <Check className="h-3 w-3 text-accent" strokeWidth={2.5} />
                </span>
                {u}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-6 flex flex-col items-start justify-between gap-4 rounded-2xl bg-accent-soft/60 px-6 py-5 sm:flex-row sm:items-center">
        <p className="text-base font-medium text-ink">{item.hookLine}</p>
        <Link
          href={item.cta.href}
          className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-accent transition-opacity hover:opacity-70"
        >
          {item.cta.label}
          <ArrowRight className="h-4 w-4" strokeWidth={2} />
        </Link>
      </div>
    </div>
  );
}
