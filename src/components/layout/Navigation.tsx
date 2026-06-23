"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { nav, site } from "@/lib/content";

function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <Link
      href="/"
      onClick={onClick}
      aria-label={`${site.name} home`}
      className="flex shrink-0 items-center"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo.png"
        alt=""
        width={40}
        height={40}
        className="h-10 w-10 rounded-full object-cover"
      />
    </Link>
  );
}

export default function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      {/* Floating dark capsule — Keep Generating language. Compact: hugs content. */}
      <nav className="mx-auto flex w-full items-center justify-between gap-6 rounded-full border border-white/10 bg-dark/95 py-2.5 pl-4 pr-3 shadow-lg shadow-black/20 backdrop-blur-md sm:gap-7 md:w-fit md:pl-3 md:pr-2.5">
        <Logo />

        {/* Desktop links — just Solutions + Pricing */}
        <ul className="hidden items-center gap-7 md:flex">
          {nav.primary.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-base font-medium text-white/75 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Link
            href={nav.login.href}
            className="hidden px-2 text-base font-medium text-white/75 transition-colors hover:text-white sm:block"
          >
            {nav.login.label}
          </Link>
          <Link
            href={nav.cta.href}
            className="hidden rounded-full border border-white/80 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-ink sm:inline-flex"
          >
            {nav.cta.label}
          </Link>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="flex h-10 w-10 items-center justify-center rounded-full text-white hover:bg-white/10 md:hidden"
          >
            <Menu className="h-6 w-6" strokeWidth={1.5} />
          </button>
        </div>
      </nav>

      {/* Mobile full-screen overlay */}
      {open ? (
        <div className="fixed inset-0 z-50 flex flex-col bg-bg md:hidden">
          <div className="flex items-center justify-between px-6 py-6">
            <Logo onClick={() => setOpen(false)} />
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
            {nav.primary.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-3xl font-semibold tracking-tight text-ink"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href={nav.login.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-3xl font-semibold tracking-tight text-ink"
              >
                {nav.login.label}
              </Link>
            </li>
          </ul>
          <div className="px-6 pb-10">
            <Link
              href={nav.cta.href}
              onClick={() => setOpen(false)}
              className="flex min-h-[48px] w-full items-center justify-center rounded-full bg-accent px-6 py-3.5 text-base font-semibold text-white"
            >
              {nav.cta.label}
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
