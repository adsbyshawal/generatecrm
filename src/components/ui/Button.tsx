import Link from "next/link";
import type { ComponentProps } from "react";

type Variant = "primary" | "ghost" | "white";

// Pill shape + glossy inset top highlight = Keep Generating button language.
const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold text-sm px-7 py-3 transition-all duration-200 ease-out min-h-[44px] hover:scale-[1.01] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-magenta focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary";

const variants: Record<Variant, string> = {
  // Purple fill, glossy top highlight
  primary:
    "bg-purple text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.25)] hover:bg-[#5a00aa]",
  // Ghost pill — white border on dark
  ghost:
    "bg-transparent text-white font-medium border border-white/20 hover:border-white/40 hover:bg-white/5",
  // White on purple — for CTA sections with purple bg
  white:
    "bg-white text-purple shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)] hover:bg-purple-50",
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
