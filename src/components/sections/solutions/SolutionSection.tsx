import { Check } from "lucide-react";
import Icon from "@/components/ui/Icon";

type Solution = {
  num: string;
  icon: string;
  name: string;
  hook: string;
  desc: string;
  benefits: readonly string[];
};

// Alternating left/right solution block. `flip` swaps copy and graphic.
export default function SolutionSection({
  item,
  flip,
}: {
  item: Solution;
  flip?: boolean;
}) {
  return (
    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      {/* Copy */}
      <div className={flip ? "lg:order-2" : ""}>
        <span className="text-sm font-bold text-accent">{item.num}</span>
        <h3 className="mt-2 text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
          {item.name}
        </h3>
        <p className="mt-3 text-lg font-medium text-ink">{item.hook}</p>
        <p className="mt-3 text-base font-light leading-relaxed text-ink-sub">
          {item.desc}
        </p>
        <ul className="mt-6 space-y-3">
          {item.benefits.map((b) => (
            <li
              key={b}
              className="flex items-start gap-3 text-base font-light text-ink/80"
            >
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-soft">
                <Check className="h-3 w-3 text-accent" strokeWidth={2.5} />
              </span>
              {b}
            </li>
          ))}
        </ul>
      </div>

      {/* Graphic placeholder */}
      <div className={flip ? "lg:order-1" : ""}>
        <div className="flex aspect-[4/3] items-center justify-center rounded-3xl border border-black/[0.06] bg-gradient-to-br from-accent-soft via-lavender to-cream">
          <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-white shadow-md">
            <Icon name={item.icon} className="h-10 w-10 text-accent" strokeWidth={1.5} />
          </div>
        </div>
      </div>
    </div>
  );
}
