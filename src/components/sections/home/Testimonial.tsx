import { testimonial } from "@/lib/content";

// Placeholder until a real client quote exists. No invented names or results.
// {/* ADD REAL TESTIMONIAL HERE: quote, name, business type, specific result */}
export default function Testimonial() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-24 text-center sm:py-28">
      <p className="font-sans text-6xl leading-none text-accent/30">&ldquo;</p>
      <p className="-mt-6 text-2xl font-medium leading-[1.3] tracking-tight text-ink sm:text-3xl">
        {testimonial.quote}
      </p>
      <p className="mt-8 text-base font-medium text-ink-sub">
        {testimonial.attribution}
      </p>
    </section>
  );
}
