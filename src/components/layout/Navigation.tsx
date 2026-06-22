"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { nav, site } from "@/lib/content";
import Button from "@/components/ui/Button";

function Wordmark({ onClick }: { onClick?: () => void }) {
  return (
    <Link
      href="/"
      onClick={onClick}
      className="font-serif text-2xl tracking-tight text-ink"
      aria-label={`${site.name} home`}
    >
      generateCRM
    </Link>
  );
}

export default function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <Wordmark />

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {nav.links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-base font-medium text-ink transition-opacity hover:opacity-70"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <Link
            href={nav.cta.href}
            className="hidden text-base font-medium text-ink transition-opacity hover:opacity-70 sm:block"
          >
            Log in
          </Link>
          <Button href={nav.cta.href} className="hidden sm:inline-flex">
            {nav.cta.label}
          </Button>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="flex h-11 w-11 items-center justify-center rounded-full text-ink hover:bg-black/5 md:hidden"
          >
            <Menu className="h-6 w-6" strokeWidth={1.5} />
          </button>
        </div>
      </nav>

      {/* Mobile full-screen overlay */}
      {open ? (
        <div className="fixed inset-0 z-50 flex flex-col bg-bg md:hidden">
          <div className="flex items-center justify-between px-6 py-6">
            <Wordmark onClick={() => setOpen(false)} />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="flex h-11 w-11 items-center justify-center rounded-full text-ink hover:bg-black/5"
            >
              <X className="h-6 w-6" strokeWidth={1.5} />
            </button>
          </div>
          <ul className="flex flex-1 flex-col gap-2 px-6 pt-6">
            {nav.links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 font-serif text-3xl text-ink"
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
