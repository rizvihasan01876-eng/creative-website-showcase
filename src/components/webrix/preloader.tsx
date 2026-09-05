import { useEffect, useState } from "react";
import { BRAND } from "@/lib/site";
import { cn } from "@/lib/utils";

const LETTER_STAGGER = 60;
const REVEAL_DURATION = 900;
const HOLD_DURATION = 700;

export function Preloader() {
  const [mounted, setMounted] = useState(false);
  const [lettersRevealed, setLettersRevealed] = useState(false);
  const [exited, setExited] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setExited(true);
      return;
    }

    setMounted(true);

    const revealTimer = window.setTimeout(() => {
      setLettersRevealed(true);
    }, 100);

    const exitTimer = window.setTimeout(() => {
      setExited(true);
    }, REVEAL_DURATION + HOLD_DURATION);

    return () => {
      window.clearTimeout(revealTimer);
      window.clearTimeout(exitTimer);
    };
  }, []);

  if (exited) return null;

  const letters = BRAND.name.split("");

  return (
    <div
      aria-hidden="true"
      className={cn(
        "fixed inset-0 z-[100] flex items-center justify-center bg-background transition-[transform,opacity] duration-700",
        mounted ? "opacity-100" : "opacity-0"
      )}
      style={{
        transitionTimingFunction: "var(--ease-out-quint)",
        transform: lettersRevealed ? "translateY(-100%)" : "translateY(0)",
        transitionDelay: lettersRevealed ? `${HOLD_DURATION}ms` : "0ms",
      }}
    >
      <div className="flex overflow-hidden">
        {letters.map((letter, i) => (
          <span
            key={i}
            className="display text-[clamp(3rem,12vw,8rem)] text-ink"
            style={{
              transform: lettersRevealed ? "translateY(0)" : "translateY(100%)",
              opacity: lettersRevealed ? 1 : 0,
              transition:
                "transform 0.7s var(--ease-out-quint), opacity 0.7s var(--ease-out-quint)",
              transitionDelay: lettersRevealed
                ? `${i * LETTER_STAGGER}ms`
                : "0ms",
            }}
          >
            {letter}
          </span>
        ))}
      </div>

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        style={{
          opacity: lettersRevealed ? 1 : 0,
          transition: "opacity 0.5s ease",
          transitionDelay: lettersRevealed ? `${letters.length * LETTER_STAGGER}ms` : "0ms",
        }}
      >
        <span className="eyebrow text-ink-faint">{BRAND.tagline}</span>
      </div>
    </div>
  );
}
