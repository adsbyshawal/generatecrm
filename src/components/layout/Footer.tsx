import Link from "next/link";
import { footer, site } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="mt-10 border-t border-black/5 bg-surface pb-12 pt-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-20 grid grid-cols-2 gap-8 md:grid-cols-5">
          {/* Brand */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo.png"
                alt=""
                width={36}
                height={36}
                className="h-9 w-9 rounded-full object-cover"
              />
              <span className="text-xl font-semibold tracking-tight text-ink">
                generateCRM
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-base font-light leading-relaxed text-ink/60">
              {footer.tagline}
            </p>
            <p className="mt-4 text-sm text-ink/50">{footer.marketsServed}</p>
          </div>

          {footer.columns.map((col) => (
            <div key={col.title}>
              <div className="mb-6 text-base font-medium text-ink">
                {col.title}
              </div>
              <ul className="space-y-4">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-base font-light text-ink/60 transition-colors hover:text-ink"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col justify-between gap-3 text-sm font-light text-ink/50 sm:flex-row">
          <p>{footer.copyright}</p>
          <p>
            {site.name} · {footer.location}
          </p>
        </div>
      </div>
    </footer>
  );
}
