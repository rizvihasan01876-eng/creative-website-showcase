import { Link } from "@tanstack/react-router";
import { BRAND, NAV_LINKS } from "@/lib/site";
import { Wordmark } from "./nav";

export function SiteFooter() {
  return (
    <footer className="rule-top bg-background">
      <div className="mx-auto max-w-[1440px] px-5 py-16 md:px-10 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Wordmark className="text-5xl md:text-6xl" />
            <p className="mt-3 text-sm uppercase tracking-[0.22em] text-ink-soft">
              {BRAND.tagline}
            </p>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-ink-soft">
              A digital web studio building modern, responsive, conversion-focused
              websites for businesses, brands and creators.
            </p>
          </div>

          <nav aria-label="Footer">
            <h2 className="eyebrow">Navigate</h2>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="link-underline text-sm text-ink-soft transition-colors hover:text-ink"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/start-project"
                  className="link-underline text-sm text-ink-soft transition-colors hover:text-ink"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <div className="space-y-8">
            <div>
              <h2 className="eyebrow">Contact</h2>
              <ul className="mt-5 space-y-3 text-sm">
                <li>
                  <a
                    href={`mailto:${BRAND.email}`}
                    className="link-underline break-all text-ink-soft transition-colors hover:text-ink"
                  >
                    {BRAND.email}
                  </a>
                </li>
                <li>
                  <a
                    href={BRAND.whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="link-underline text-ink-soft transition-colors hover:text-ink"
                  >
                    WhatsApp {BRAND.phone}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="eyebrow">Social</h2>
              <ul className="mt-5 space-y-3 text-sm">
                <li>
                  <a href={BRAND.facebook} target="_blank" rel="noreferrer" className="link-underline text-ink-soft transition-colors hover:text-ink">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href={BRAND.instagram} target="_blank" rel="noreferrer" className="link-underline text-ink-soft transition-colors hover:text-ink">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href={BRAND.linkedin} target="_blank" rel="noreferrer" className="link-underline text-ink-soft transition-colors hover:text-ink">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="rule-top mt-14 flex flex-col gap-4 pt-6 text-xs text-ink-faint sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Webrix. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="transition-colors hover:text-ink">
              Privacy Policy
            </Link>
            <Link to="/terms" className="transition-colors hover:text-ink">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
