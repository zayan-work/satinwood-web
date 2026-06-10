"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { Clock, Video } from "lucide-react";
import { useEffect } from "react";

const CAL_LINK = process.env.NEXT_PUBLIC_CALCOM_LINK ?? "satinwood/discovery";
const NAMESPACE = "discovery";

/** Inline Cal.com booking embed, themed to the Satinwood palette. */
export function BookingEmbed() {
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

  return (
    <div className="relative h-[550px] overflow-hidden rounded-[20px] border border-hairline bg-white p-3 shadow-[0_30px_70px_-24px_rgba(0,0,0,0.45)] sm:p-4">
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

      {/* The month grid renders at a normal cell size once the width is capped
          (~480px); without the cap it stretches huge across the wide column.
          The card holds a comfortable height that fits the whole month, and the
          long time-slot list below scrolls inside it rather than being clipped. */}
      <div className="mx-auto h-1200 w-full max-w-[960px] overflow-y-auto rounded-[12px] scrollbar-none">
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
