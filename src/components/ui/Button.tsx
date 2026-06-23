import Link from "next/link";
import type { ComponentProps } from "react";

type Variant = "primary" | "ghost" | "white";

// Pill buttons — bright fintech language, confident blue action color.
const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium text-base px-6 py-3 transition-all duration-200 ease-out min-h-[44px] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-2 focus-visible:ring-offset-bg";

const variants: Record<Variant, string> = {
  // Blue fill (primary CTA)
  primary: "bg-accent text-white shadow-sm shadow-accent/20 hover:bg-accent-strong",
  // Ghost — subtle on the light page
  ghost: "bg-transparent text-ink hover:bg-black/5",
  // On a dark surface (e.g. inside a dark card)
  white: "bg-white text-ink hover:bg-white/90",
};

type ButtonProps = {
  variant?: Variant;
  href?: string;
  className?: string;
} & Omit<ComponentProps<"a">, "href" | "className">;

export default function Button({
  variant = "primary",
  href = "#",
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}
