"use client";

import dynamic from "next/dynamic";
import { useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/cn";
import type { RingsTheme } from "./RingsScene";

// WebGL must never run on the server; load the scene client-side only.
const RingsScene = dynamic(() => import("./RingsScene"), { ssr: false });

/**
 * Decorative 3D concentric-rings background layer (full-bleed so the rings are
 * never clipped by a narrow box — placement is done in 3D via `offsetX`).
 * - Mounts the WebGL canvas only while the section is in view (frees GPU contexts).
 * - Falls back to a soft static gradient before mount.
 */
export function RingsBackground({
  theme = "dark",
  offsetX = 0,
  className,
}: {
  theme?: RingsTheme;
  /** Horizontal placement of the motif, in world units (+ = right, − = left). */
  offsetX?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "240px 0px 240px 0px" });
  const reduce = useReducedMotion() ?? false;

  const fallback =
    theme === "dark"
      ? "radial-gradient(50% 60% at 50% 45%, rgba(194,162,78,0.10), transparent 70%)"
      : "radial-gradient(50% 55% at 50% 40%, rgba(194,162,78,0.10), transparent 70%)";

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        theme === "dark" ? "opacity-80" : "opacity-60",
        className,
      )}
    >
      {/* Static atmosphere — always present, also the pre-mount fallback. */}
      <div className="absolute inset-0" style={{ backgroundImage: fallback }} />
      {inView && <RingsScene theme={theme} reduce={reduce} offsetX={offsetX} />}
    </div>
  );
}
