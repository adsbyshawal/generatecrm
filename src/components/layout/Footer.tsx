import Link from "next/link";
import { footer, site } from "@/lib/content";
import Button from "@/components/ui/Button";

export default function Footer() {
  return (
    <footer className="mt-auto">
      {/* 1. Pre-footer CTA row */}
      <div className="border-t border-white/[0.07] bg-bg-primary px-6 py-16 text-center sm:px-8">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6">
          <h2 className="text-[clamp(24px,3vw,36px)] font-extrabold text-white">
            {footer.preCta.label}
          </h2>
          <Button variant="primary" href={footer.preCta.cta.href}>
            {footer.preCta.cta.label}
          </Button>
        </div>
      </div>

      {/* 2. Footer columns */}
      <div className="border-t border-white/[0.07] bg-bg-secondary px-6 py-14 sm:px-8">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-10 md:grid-cols-5">
          <div className="col-span-2">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-purple text-sm font-extrabold text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.25)]">
                G
              </span>
              <span className="text-[15px] font-extrabold tracking-tight text-white">
                GENERATE CRM
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm font-light leading-relaxed text-text-sub">
              {footer.tagline}
            </p>
            <p className="mt-4 text-xs text-text-muted">{footer.marketsServed}</p>
          </div>

          {footer.columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-[11px] font-bold uppercase tracking-[0.12em] text-text-muted">
                {col.title}
              </h3>
              <ul className="mt-4 flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-text-sub transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Copyright bar */}
      <div className="border-t border-white/[0.07] bg-bg-primary px-6 py-6 sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-xs text-text-muted sm:flex-row">
          <p>{footer.copyright}</p>
          <p className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400" aria-hidden />
            {footer.location}
          </p>
        </div>
      </div>

      <span className="sr-only">{site.domain}</span>
    </footer>
  );
}
