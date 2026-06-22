import { testimonial } from "@/lib/content";

// Placeholder until a real client quote exists. No invented names or results.
// {/* ADD REAL TESTIMONIAL HERE: quote, name, business type, specific result */}
export default function Testimonial() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-28 text-center">
      <p className="font-serif text-3xl leading-[1.15] tracking-tight text-ink sm:text-4xl">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <p className="mt-8 text-base font-light text-ink/50">
        {testimonial.attribution}
      </p>
    </section>
  );
}
