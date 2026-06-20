import { ctaBlock } from "@/lib/content";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";

// Section 10 — Full-width purple CTA block.
export default function CtaBlock() {
  return (
    <section className="bg-purple">
      <FadeIn className="mx-auto flex max-w-3xl flex-col items-center gap-6 px-6 py-20 text-center sm:px-8 lg:py-24">
        <h2 className="text-[clamp(32px,4vw,50px)] font-extrabold leading-[1.1] text-white">
          {ctaBlock.title}
        </h2>
        <p className="max-w-[520px] text-[17px] font-light leading-relaxed text-white/75">
          {ctaBlock.subtitle}
        </p>
        <Button variant="white" href={ctaBlock.cta.href}>
          {ctaBlock.cta.label}
        </Button>
        <p className="text-xs font-light text-white/45">{ctaBlock.trust}</p>
      </FadeIn>
    </section>
  );
}
