import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { NAV_LINKS } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={cn("display text-ink leading-none", className)}>
      WEBRIX
    </span>
  );
}

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b bg-background/85 backdrop-blur-md transition-all duration-500",
        scrolled ? "border-hairline" : "border-transparent",
      )}
      style={{ transitionTimingFunction: "var(--ease-out-quint)" }}
    >
      <div
        className={cn(
          "mx-auto grid max-w-[1440px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 transition-all duration-500 md:px-10",
          scrolled ? "h-14" : "h-20",
        )}
      >
        <Link to="/" className="flex min-w-0 items-center gap-3" aria-label="Webrix home">
          <Wordmark
            className={cn(
              "transition-all duration-500",
              scrolled ? "text-xl" : "text-2xl",
            )}
          />
          <span className="hidden text-[0.625rem] font-medium uppercase tracking-[0.2em] text-ink-faint lg:inline">
            Build. Design. Grow.
          </span>
        </Link>

        <div className="flex shrink-0 items-center gap-8">
          <nav className="hidden items-center gap-7 md:flex">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="link-underline text-[0.8125rem] font-medium uppercase tracking-[0.12em] text-ink-soft transition-colors hover:text-ink"
                activeProps={{ className: "text-ink" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <Link
            to="/start-project"
            className="hidden bg-ink px-5 py-3 text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-background transition-colors duration-300 hover:bg-accent sm:inline-flex"
          >
            Start a Project ↗
          </Link>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="relative grid h-10 w-10 shrink-0 place-items-center md:hidden"
          >
            <span
              className={cn(
                "absolute h-px w-6 bg-ink transition-all duration-400",
                open ? "rotate-45" : "-translate-y-1.5",
              )}
              style={{ transitionTimingFunction: "var(--ease-out-quint)" }}
            />
            <span
              className={cn(
                "absolute h-px w-6 bg-ink transition-all duration-400",
                open ? "-rotate-45" : "translate-y-1.5",
              )}
              style={{ transitionTimingFunction: "var(--ease-out-quint)" }}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-x-0 top-14 bottom-0 z-40 overflow-hidden bg-background transition-[clip-path] duration-600 md:hidden",
        )}
        style={{
          clipPath: open ? "inset(0 0 0 0)" : "inset(0 0 100% 0)",
          transitionTimingFunction: "var(--ease-out-quint)",
          pointerEvents: open ? "auto" : "none",
        }}
        aria-hidden={!open}
      >
        <nav className="flex h-full flex-col justify-between px-5 pt-8 pb-10">
          <ul className="space-y-1">
            {NAV_LINKS.map((l, i) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="display block border-b border-hairline py-5 text-4xl text-ink"
                  style={{
                    opacity: open ? 1 : 0,
                    transform: open ? "none" : "translateY(14px)",
                    transition: `all 0.6s var(--ease-out-quint) ${120 + i * 60}ms`,
                  }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="space-y-4">
            <Link
              to="/start-project"
              className="block bg-ink py-4 text-center text-[0.8125rem] font-semibold uppercase tracking-[0.14em] text-background"
            >
              Start a Project ↗
            </Link>
            <Link
              to="/work"
              className="block border border-ink/20 py-4 text-center text-[0.8125rem] font-semibold uppercase tracking-[0.14em] text-ink"
            >
              View Our Work
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
