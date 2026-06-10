"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { Clock, Video } from "lucide-react";
import { useEffect, useRef } from "react";

const CAL_LINK = process.env.NEXT_PUBLIC_CALCOM_LINK ?? "satinwood/discovery";
const NAMESPACE = "discovery";

// In this narrow column Cal stacks the month grid and the full time-slot list in
// one tall iframe (~2000px). We keep the card a fixed height and scroll inside it
// (so the page never grows and the booking form is never clipped), then nudge the
// scroll to the right spot as Cal moves between steps.
const SLOTS_OFFSET = 488; // px where the slot list begins, just below the month grid
const STACKED_MIN = 1000; // iframe taller than this = month grid + stacked slots

/** Inline Cal.com booking embed, themed to the Satinwood palette. */
export function BookingEmbed() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: NAMESPACE });
      cal("ui", {
        theme: "light",
        cssVarsPerTheme: {
          light: {
            "cal-brand": "#2C3826",
            "cal-text": "#1C1B16",
            "cal-text-emphasis": "#1C1B16",
          },
          dark: {
            "cal-brand": "#C2A24E",
          },
        },
        // Hide Cal's tall stacked header — we render a slim on-brand one above
        // instead, so the card stays a normal size with the full month visible.
        hideEventTypeDetails: true,
        layout: "month_view",
      });
    })();
  }, []);

  // Keep the right content in view as Cal resizes its iframe between steps:
  // after the user picks a date the iframe grows to show the stacked slots, so we
  // scroll the card down to them; the shorter month-grid and booking-form views
  // scroll back to the top. We stay put until the user actually interacts, so the
  // initial (auto-selected) view opens on the calendar, not mid-slot-list.
  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    let armed = false;
    let raf = 0;

    // Focus leaving the window means it entered the Cal iframe — i.e. the user
    // clicked inside the booker. Only then do we start auto-scrolling.
    const arm = () => {
      armed = true;
    };
    window.addEventListener("blur", arm);

    const reposition = () => {
      const iframe = scroller.querySelector("iframe");
      if (!iframe || !armed) return;
      const tall = iframe.getBoundingClientRect().height >= STACKED_MIN;
      scroller.scrollTo({ top: tall ? SLOTS_OFFSET : 0, behavior: "smooth" });
    };

    const observer = new ResizeObserver(() => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(reposition);
    });

    // The iframe is mounted by <Cal> asynchronously — start observing once it's there.
    let tries = 0;
    const attach = () => {
      const iframe = scroller.querySelector("iframe");
      if (iframe) observer.observe(iframe);
      else if (tries++ < 40) setTimeout(attach, 150);
    };
    attach();

    return () => {
      window.removeEventListener("blur", arm);
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="relative overflow-hidden rounded-[20px] border border-hairline bg-white p-3 shadow-[0_30px_70px_-24px_rgba(0,0,0,0.45)] sm:p-4">
      <span
        aria-hidden
        className="absolute inset-x-0 top-0 z-10 h-[3px] bg-gradient-to-r from-gold via-gold-bright to-honey"
      />

      {/* Slim, on-brand meeting header (replaces Cal's bulky details panel). */}
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
              Cal Video
            </span>
          </div>
        </div>
      </div>
      <div className="mb-2 h-px bg-hairline" />

      {/* Fixed-height scroll window. Cal sizes its iframe to content (it ignores a
          fixed height), so we contain that here: the long stacked slot list scrolls
          inside the card instead of pushing the page down, and the booking-form
          step scrolls in full rather than being clipped. The effect above keeps the
          relevant step in view. */}
      <div
        ref={scrollerRef}
        className="h-[560px] w-full overflow-y-auto overscroll-contain rounded-[12px] scrollbar-thin"
      >
        <Cal
          namespace={NAMESPACE}
          calLink={CAL_LINK}
          style={{ width: "100%", height: "auto" }}
          config={{ layout: "month_view", theme: "light" }}
        />
      </div>
    </div>
  );
}
