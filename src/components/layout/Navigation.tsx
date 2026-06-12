"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { nav } from "@/lib/content";
import Button from "@/components/ui/Button";

function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <Link
      href="/"
      onClick={onClick}
      className="flex items-center gap-2.5"
      aria-label="Generate CRM home"
    >
      {/* Circular logo badge — Keep Generating language */}
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-purple text-sm font-extrabold text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.25)]">
        G
      </span>
      <span className="flex items-center gap-1.5 text-[15px] font-extrabold tracking-tight text-white">
        GENERATE CRM
        <span className="h-1.5 w-1.5 rounded-full bg-magenta" aria-hidden />
      </span>
    </Link>
  );
}

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:pt-6">
      {/* Floating rounded dark capsule */}
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-full border bg-bg-card2/95 px-4 py-2.5 backdrop-blur-md transition-all sm:px-5 ${
          scrolled
            ? "border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.45)]"
            : "border-white/[0.07] shadow-[0_4px_20px_rgba(0,0,0,0.25)]"
        }`}
      >
        <Logo />

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {nav.links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="rounded-full px-3.5 py-2 text-sm text-text-sub transition-colors hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Button href={nav.cta.href} className="hidden px-5 sm:inline-flex">
            {nav.cta.label}
          </Button>
          <Button href={nav.cta.href} className="px-4 py-2 text-xs sm:hidden">
            {nav.cta.label}
          </Button>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="flex h-10 w-10 items-center justify-center rounded-full text-white hover:bg-white/5 md:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Mobile full-screen overlay */}
      {open ? (
        <div className="fixed inset-0 z-50 flex flex-col bg-bg-primary md:hidden">
          <div className="flex items-center justify-between px-6 pt-6">
            <Logo onClick={() => setOpen(false)} />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="flex h-11 w-11 items-center justify-center rounded-full text-white hover:bg-white/5"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <ul className="flex flex-1 flex-col gap-2 px-6 pt-8">
            {nav.links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-2xl font-semibold text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="px-6 pb-10">
            <Button
              href={nav.cta.href}
              onClick={() => setOpen(false)}
              className="w-full"
            >
              {nav.cta.label}
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
