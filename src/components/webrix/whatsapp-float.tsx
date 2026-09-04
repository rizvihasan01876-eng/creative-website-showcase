import { useEffect, useState } from "react";
import { BRAND } from "@/lib/site";
import { cn } from "@/lib/utils";

export function WhatsAppFloat() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={BRAND.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Webrix on WhatsApp"
      onClick={(e) => {
        e.preventDefault();
        const w = window.open(BRAND.whatsappUrl, "_blank", "noopener,noreferrer");
        if (!w) window.top!.location.href = BRAND.whatsappUrl;
      }}
      className={cn(
        "group fixed right-4 bottom-4 z-40 flex items-center gap-3 rounded-full bg-whatsapp py-3 pr-5 pl-3 text-background shadow-[var(--shadow-lift)] transition-all duration-600 md:right-8 md:bottom-8",
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0",
      )}
      style={{ transitionTimingFunction: "var(--ease-out-quint)" }}
    >

      <svg viewBox="0 0 24 24" aria-hidden className="h-6 w-6 shrink-0 fill-current">
        <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.470 0 1.45 1.06 2.86 1.21 3.06.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.69.25-1.28.17-1.41-.07-.13-.27-.2-.57-.35zM12.05 21.5h-.01a9.42 9.42 0 0 1-4.8-1.32l-.35-.2-3.57.94.95-3.48-.22-.36a9.4 9.4 0 0 1-1.44-5.02c0-5.2 4.24-9.43 9.45-9.43a9.4 9.4 0 0 1 6.68 2.77 9.35 9.35 0 0 1 2.76 6.67c0 5.2-4.24 9.43-9.45 9.43zM20.13 3.87A11.32 11.32 0 0 0 12.05.53C5.78.53.68 5.62.68 11.88c0 1.99.52 3.94 1.51 5.66L.59 23.47l6.07-1.59a11.35 11.35 0 0 0 5.39 1.37h.01c6.26 0 11.36-5.09 11.36-11.35 0-3.03-1.18-5.88-3.29-8.03z" />
      </svg>
      <span className="text-[0.75rem] font-semibold uppercase tracking-[0.12em]">
        Chat on WhatsApp
      </span>
    </a>
  );
}
