import { useEffect, useState } from "react";
import { Container } from "./sections";
import { MagneticLink } from "./magnetic-link";
import luxaShot from "@/assets/luxa.jpg";
import pureBlissShot from "@/assets/purebliss.jpg";
import portfolioShot from "@/assets/portfolio.jpg";

function BrowserFrame({
  src,
  alt,
  label,
  className,
  style,
}: {
  src: string;
  alt: string;
  label: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <figure
      className={`overflow-hidden border border-hairline bg-background shadow-[var(--shadow-lift)] ${className ?? ""}`}
      style={style}
    >
      <div className="flex items-center gap-1.5 border-b border-hairline bg-surface px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-ink-faint/60" />
        <span className="h-2 w-2 rounded-full bg-ink-faint/60" />
        <span className="h-2 w-2 rounded-full bg-ink-faint/60" />
        <span className="ml-2 truncate text-[0.5625rem] tracking-wide text-ink-faint">
          {label}
        </span>
      </div>
      <img
        src={src}
        alt={alt}
        width={1440}
        height={900}
        decoding="async"
        className="block aspect-[16/10] w-full object-cover object-top"
      />
    </figure>
  );
}

export function Hero() {
  const [y, setY] = useState(0);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setY(window.scrollY));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24" aria-label="Introduction">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-6">
            <p className="eyebrow fade-up">Digital Web Studio</p>

            <h1 className="display mt-6 text-[clamp(3.25rem,13vw,9.5rem)] text-ink">
              <span className="fade-up block" style={{ animationDelay: "80ms" }}>
                Build.
              </span>
              <span className="fade-up block" style={{ animationDelay: "180ms" }}>
                Design.
              </span>
              <span
                className="fade-up block text-accent"
                style={{ animationDelay: "280ms" }}
              >
                Grow.
              </span>
            </h1>

            <p
              className="fade-up mt-8 max-w-md text-lg leading-relaxed text-ink-soft"
              style={{ animationDelay: "380ms" }}
            >
              We build modern websites that turn ideas into digital experiences.
            </p>

            <div
              className="fade-up mt-10 flex flex-wrap gap-3"
              style={{ animationDelay: "460ms" }}
            >
              <MagneticLink to="/start-project" variant="solid">
                Start a Project
              </MagneticLink>
              <MagneticLink to="/work" variant="outline">
                View Our Work
              </MagneticLink>
            </div>

            <p
              className="fade-up mt-8 flex items-center gap-2.5 text-xs tracking-[0.1em] text-ink-soft uppercase"
              style={{ animationDelay: "540ms" }}
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              2 project slots open this month
            </p>
          </div>

          {/* Hero visual */}
          <div className="relative lg:col-span-6" aria-hidden>
            <div
              className="relative mx-auto max-w-xl lg:max-w-none"
              style={{ transform: `translateY(${Math.min(y, 400) * -0.05}px)` }}
            >
              <BrowserFrame
                src={luxaShot}
                alt=""
                label="luxabd.vercel.app"
                className="float-slow"
              />
              <BrowserFrame
                src={pureBlissShot}
                alt=""
                label="pure-bliss-nu.vercel.app"
                className="float-slower absolute -bottom-12 -left-4 w-[54%] sm:-left-10 sm:-bottom-16"
                style={{ transform: `translateY(${Math.min(y, 400) * 0.06}px)` }}
              />
              <BrowserFrame
                src={portfolioShot}
                alt=""
                label="rizvi-hasan-protfolio.vercel.app"
                className="absolute -top-10 -right-3 hidden w-[38%] sm:block sm:-right-8"
                style={{ transform: `translateY(${Math.min(y, 400) * -0.09}px)` }}
              />
              <svg
                viewBox="0 0 24 24"
                className="cursor-drift absolute top-1/2 left-1/3 h-6 w-6 drop-shadow-sm"
                fill="none"
              >
                <path
                  d="M5 3l14 9-6.2 1.4L10.4 20 5 3z"
                  className="fill-ink stroke-background"
                  strokeWidth="1.2"
                />
              </svg>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
