"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
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
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    // Strict, fixed-height box. Without a defined height the embed expands to fit
    // every slot and blows out the page — so we cap it and let Cal scroll inside.
    <div className="h-[600px] overflow-hidden rounded-2xl bg-white p-3 shadow-[0_18px_50px_rgba(0,0,0,0.25)] sm:h-[680px] sm:p-4">
      <Cal
        namespace={NAMESPACE}
        calLink={CAL_LINK}
        style={{ width: "100%", height: "100%", overflow: "scroll" }}
        config={{ layout: "month_view", theme: "light" }}
      />
    </div>
  );
}
