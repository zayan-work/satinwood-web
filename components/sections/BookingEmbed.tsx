"use client";

import { Clock, Video } from "lucide-react";
import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// Calendly slug for the homepage "Get started" discovery call. This is the free
// Satinwood Talent event (no payment required) — distinct from the paid intro
// call on /advisory. Format: "username/event-slug" from
// calendly.com/<username>/<event-slug>.
const CALENDLY_LINK = process.env.NEXT_PUBLIC_CALENDLY_DISCOVERY_CALL || "rengan-satinwoodtalent/satinwood-talent";

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
 * Inline Calendly booking embed for the homepage "Get started" discovery call,
 * themed to the Satinwood palette and wrapped in a white card with a slim
 * on-brand meeting header (it sits on the dark forest band). Loads Calendly's
 * widget.js once and mounts the live calendar. Mirrors the /advisory embed; if
 * the slug is unset or the script fails it shows a graceful on-brand notice.
 */
export function BookingEmbed() {
  const cardRef = useRef<HTMLDivElement>(null);
  const hostRef = useRef<HTMLDivElement>(null);
  const [failed, setFailed] = useState(false);
  // Defer Calendly's widget.js (+ ~1.2 MB CSS) until the booking card nears the
  // viewport. The card sits at the bottom of the page, so this keeps that weight
  // off the initial load entirely for most visits.
  const inView = useInView(cardRef, { once: true, margin: "400px" });

  useEffect(() => {
    if (IS_PLACEHOLDER || !inView) return;

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
  }, [inView]);

  return (
    <div
      ref={cardRef}
      className="relative overflow-hidden rounded-[20px] border border-hairline bg-white p-3 shadow-[0_30px_70px_-24px_rgba(0,0,0,0.45)] sm:p-4"
    >
      <span
        aria-hidden
        className="absolute inset-x-0 top-0 z-10 h-[3px] bg-gradient-to-r from-gold via-gold-bright to-honey"
      />

      {/* Slim, on-brand meeting header (replaces Calendly's bulky details panel). */}
      <div className="flex items-center gap-3 px-1 pb-3 pt-1.5">
        <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-forest/10 text-forest">
          <Video className="size-[18px]" strokeWidth={1.8} />
        </span>
        <div>
          <div className="font-display text-[18px] font-semibold leading-tight text-ink">
            15-minute discovery call
          </div>
          <div className="mt-1 flex items-center gap-2 text-[12.5px] text-grey">
            <span className="inline-flex items-center gap-1">
              <Clock className="size-3.5 text-gold" strokeWidth={2} />
              15 min
            </span>
            <span className="text-tint-edge">·</span>
            <span className="inline-flex items-center gap-1">
              <Video className="size-3.5 text-gold" strokeWidth={2} />
              Video call
            </span>
          </div>
        </div>
      </div>
      <div className="mb-2 h-px bg-hairline" />

      {IS_PLACEHOLDER || failed ? (
        <div className="flex h-[560px] flex-col items-center justify-center gap-[13px] rounded-[12px] px-7 py-[54px] text-center max-[560px]:px-[18px]">
          <div className="flex h-[82px] w-[82px] items-center justify-center rounded-full border-[1.5px] border-tint-edge font-display text-[36px] font-bold text-gold">
            15
          </div>
          <p className="font-display text-[24px] text-ink">
            The calendar mounts here
          </p>
          <p className="max-w-[330px] text-[14px] leading-[1.55] text-grey">
            Available times appear once Calendly is connected. Pick a slot and
            confirm in one step.
          </p>
          <span className="mt-2 h-px w-[42px] bg-tint-edge" />
          <div className="text-[10.5px] font-semibold uppercase tracking-[1.6px] text-grey-light">
            Scheduling by Calendly
          </div>
        </div>
      ) : inView ? (
        // Calendly replaces this node with the live calendar. min-width 320.
        <div
          ref={hostRef}
          className="w-full overflow-hidden rounded-[12px]"
          style={{ minWidth: 320, height: 560 }}
        />
      ) : (
        // Reserve the calendar's height before it loads (no layout shift).
        <div
          className="flex w-full items-center justify-center rounded-[12px]"
          style={{ minWidth: 320, height: 560 }}
        >
          <span className="text-[13px] text-grey-light">Loading calendar…</span>
        </div>
      )}
    </div>
  );
}
