"use client";

import { useEffect, useRef, useState } from "react";

// Calendly slug for Rengan's paid "15-Minute Introductory Call".
// Format: "username/event-slug" (e.g. "rengan-satinwood/satinwood-15-minute-meeting").
// Set this once Rengan's Calendly event (with Stripe "Require payment to book"
// → $150) is live:
//   NEXT_PUBLIC_CALENDLY_LINK=rengan-satinwood/satinwood-15-minute-meeting   (see .env.example)
// While unset it falls back to the placeholder and we render an on-brand notice
// instead of a broken iframe.
const CALENDLY_LINK =
  process.env.NEXT_PUBLIC_CALENDLY_LINK ?? "REPLACE-WITH-RENGAN-EVENT";

const IS_PLACEHOLDER = CALENDLY_LINK.includes("REPLACE");

// Theme the widget to the Satinwood palette (paper bg / ink text / gold accent)
// and hide Calendly's own event-type header. Keep these params when swapping the slug.
const WIDGET_PARAMS =
  "hide_event_type_details=1&hide_gdpr_banner=1" +
  "&background_color=fbfaf5&text_color=1c1b16&primary_color=9c7b2e";

const WIDGET_URL = `https://calendly.com/${CALENDLY_LINK}?${WIDGET_PARAMS}`;
const SCRIPT_SRC = "https://assets.calendly.com/assets/external/widget.js";

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (opts: {
        url: string;
        parentElement: HTMLElement;
      }) => void;
    };
  }
}

/**
 * Inline Calendly booking embed for the paid advisory intro call, themed to the
 * Satinwood palette. Loads Calendly's widget.js once and mounts the live calendar
 * (min-width 320 / height 700 per the spec). Before the slug is set, shows a
 * compact on-brand placeholder reading "Rengan's calendar mounts here".
 */
export function AdvisoryBooking() {
  const hostRef = useRef<HTMLDivElement>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    if (IS_PLACEHOLDER) return;

    const init = () => {
      const host = hostRef.current;
      if (!window.Calendly || !host) return;
      host.innerHTML = "";
      window.Calendly.initInlineWidget({ url: WIDGET_URL, parentElement: host });
    };

    if (window.Calendly) {
      init();
      return;
    }

    let script = document.querySelector<HTMLScriptElement>(
      `script[src="${SCRIPT_SRC}"]`,
    );
    if (!script) {
      script = document.createElement("script");
      script.src = SCRIPT_SRC;
      script.async = true;
      document.body.appendChild(script);
    }
    const onLoad = () => init();
    const onError = () => setFailed(true);
    script.addEventListener("load", onLoad);
    script.addEventListener("error", onError);
    return () => {
      script?.removeEventListener("load", onLoad);
      script?.removeEventListener("error", onError);
    };
  }, []);

  return (
    <div className="mx-auto mt-[34px] max-w-[700px] rounded-[18px] border border-hairline bg-gradient-to-b from-white to-[#FAF6EC] p-2.5 shadow-[0_24px_64px_-30px_rgba(28,27,22,0.5)]">
      {IS_PLACEHOLDER || failed ? (
        <div className="flex min-h-[300px] flex-col items-center justify-center gap-[13px] rounded-[12px] px-7 py-[54px] text-center max-[560px]:px-[18px] max-[560px]:py-9">
          <div className="flex h-[82px] w-[82px] items-center justify-center rounded-full border-[1.5px] border-tint-edge font-display text-[36px] font-bold text-gold">
            15
          </div>
          <p className="font-display text-[24px] text-ink">
            Rengan&rsquo;s calendar mounts here
          </p>
          <p className="max-w-[330px] text-[14px] leading-[1.55] text-grey">
            His available times appear once Calendly is connected. Pay the $150
            and confirm in one step.
          </p>
          <span className="mt-2 h-px w-[42px] bg-tint-edge" />
          <div className="text-[10.5px] font-semibold uppercase tracking-[1.6px] text-grey-light">
            Secured by Stripe · Scheduling by Calendly
          </div>
        </div>
      ) : (
        // Calendly replaces this node with the live calendar. min-width 320 / height 700.
        <div
          ref={hostRef}
          className="overflow-hidden rounded-[12px]"
          style={{ minWidth: 320, height: 700 }}
        />
      )}
    </div>
  );
}
