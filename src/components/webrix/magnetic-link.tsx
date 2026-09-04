import { useRef, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

type Variant = "solid" | "outline" | "accent";

const base =
  "group relative inline-flex items-center justify-center gap-2 px-7 py-4 text-[0.8125rem] font-semibold uppercase tracking-[0.14em] transition-colors duration-300 will-change-transform";

const variants: Record<Variant, string> = {
  solid: "bg-ink text-background hover:bg-accent",
  outline: "border border-ink/20 text-ink hover:border-ink hover:bg-ink hover:text-background",
  accent: "bg-accent text-accent-foreground hover:bg-ink",
};

function useMagnet(strength = 0.28) {
  const ref = useRef<HTMLElement | null>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - (r.left + r.width / 2)) * strength;
    const y = (e.clientY - (r.top + r.height / 2)) * strength;
    el.style.transform = `translate(${x}px, ${y}px)`;
  };

  const onLeave = () => {
    const el = ref.current;
    if (el) el.style.transform = "translate(0,0)";
  };

  return { ref, onMove, onLeave };
}

type Props = {
  to?: string;
  href?: string;
  hash?: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  onClick?: () => void;
};

export function MagneticLink({
  to,
  href,
  hash,
  children,
  variant = "solid",
  className,
  onClick,
}: Props) {
  const { ref, onMove, onLeave } = useMagnet();
  const classes = cn(base, variants[variant], "duration-500", className);
  const style = { transition: "transform 0.45s var(--ease-out-quint), background-color 0.3s, color 0.3s, border-color 0.3s" };

  if (href) {
    return (
      <a
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noreferrer" : undefined}
        className={classes}
        style={style}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      ref={ref as React.Ref<HTMLAnchorElement>}
      to={to ?? "/"}
      {...(hash ? { hash } : {})}
      className={classes}
      style={style}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
