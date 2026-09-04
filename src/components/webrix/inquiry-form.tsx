import { useState } from "react";
import {
  BRAND,
  BUDGET_RANGES,
  PROJECT_TYPES,
  TIMELINES,
} from "@/lib/site";
import { MagneticLink } from "./magnetic-link";

const fieldClass =
  "w-full border-0 border-b border-hairline bg-transparent px-0 py-3 text-base text-ink placeholder:text-ink-faint focus:border-ink focus:outline-none transition-colors duration-300";

const labelClass =
  "block text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-ink-soft";

export type InquiryPayload = {
  name: string;
  email: string;
  phone: string;
  business: string;
  projectType: string;
  budget: string;
  timeline: string;
  details: string;
};

/**
 * Submission handler.
 * Currently opens a pre-filled WhatsApp message so no lead is lost.
 * Swap the body of this function to POST to Google Sheets / email / an API
 * endpoint when a backend is connected — the payload shape stays the same.
 */
async function submitInquiry(payload: InquiryPayload) {
  const lines = [
    "New project request — Webrix",
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    `Phone: ${payload.phone}`,
    `Business: ${payload.business || "—"}`,
    `Project type: ${payload.projectType}`,
    `Budget: ${payload.budget}`,
    `Timeline: ${payload.timeline}`,
    `Details: ${payload.details}`,
  ];
  const url = `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`;
  window.open(url, "_blank", "noopener");
}

export function InquiryForm() {
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const payload: InquiryPayload = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      business: String(fd.get("business") ?? ""),
      projectType: String(fd.get("projectType") ?? ""),
      budget: String(fd.get("budget") ?? ""),
      timeline: String(fd.get("timeline") ?? ""),
      details: String(fd.get("details") ?? ""),
    };
    setBusy(true);
    try {
      await submitInquiry(payload);
      setSent(true);
    } finally {
      setBusy(false);
    }
  };

  if (sent) {
    return (
      <div className="fade-up border border-hairline bg-surface px-8 py-16 text-center md:px-16 md:py-24">
        <p className="eyebrow">Request received</p>
        <h2 className="display mt-6 text-[clamp(2rem,6vw,4.5rem)] text-ink">
          Thank you.
          <br />
          We&rsquo;ll be in touch.
        </h2>
        <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-ink-soft">
          Your project details are on their way. We usually reply within one working
          day — often much sooner on WhatsApp.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <MagneticLink href={BRAND.whatsappUrl} variant="solid">
            Continue on WhatsApp
          </MagneticLink>
          <MagneticLink to="/work" variant="outline">
            View Our Work
          </MagneticLink>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-x-10 gap-y-9 md:grid-cols-2">
      <div>
        <label className={labelClass} htmlFor="name">
          Name *
        </label>
        <input id="name" name="name" required placeholder="Your full name" className={fieldClass} />
      </div>
      <div>
        <label className={labelClass} htmlFor="email">
          Email *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="you@company.com"
          className={fieldClass}
        />
      </div>
      <div>
        <label className={labelClass} htmlFor="phone">
          WhatsApp / Phone *
        </label>
        <input
          id="phone"
          name="phone"
          required
          placeholder="+880 1XXX XXXXXX"
          className={fieldClass}
        />
      </div>
      <div>
        <label className={labelClass} htmlFor="business">
          Business name
        </label>
        <input id="business" name="business" placeholder="Optional" className={fieldClass} />
      </div>

      <div>
        <label className={labelClass} htmlFor="projectType">
          Project type *
        </label>
        <select id="projectType" name="projectType" required defaultValue="" className={fieldClass}>
          <option value="" disabled>
            Select one
          </option>
          {PROJECT_TYPES.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className={labelClass} htmlFor="budget">
          Budget range *
        </label>
        <select id="budget" name="budget" required defaultValue="" className={fieldClass}>
          <option value="" disabled>
            Select one
          </option>
          {BUDGET_RANGES.map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>
      </div>
      <div className="md:col-span-2">
        <label className={labelClass} htmlFor="timeline">
          Expected timeline *
        </label>
        <select id="timeline" name="timeline" required defaultValue="" className={fieldClass}>
          <option value="" disabled>
            Select one
          </option>
          {TIMELINES.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div className="md:col-span-2">
        <label className={labelClass} htmlFor="details">
          Project details *
        </label>
        <textarea
          id="details"
          name="details"
          required
          rows={4}
          placeholder="What are you building, who is it for, and do you have a current site or references?"
          className={`${fieldClass} resize-none`}
        />
      </div>

      <div className="md:col-span-2">
        <button
          type="submit"
          disabled={busy}
          className="w-full bg-ink px-8 py-5 text-[0.8125rem] font-semibold uppercase tracking-[0.16em] text-background transition-colors duration-300 hover:bg-accent disabled:opacity-60 sm:w-auto"
        >
          {busy ? "Sending…" : "Send Project Request →"}
        </button>
        <p className="mt-4 text-xs text-ink-faint">
          Prefer to talk first? Message us on WhatsApp at {BRAND.phone} or email{" "}
          {BRAND.email}.
        </p>
      </div>
    </form>
  );
}
