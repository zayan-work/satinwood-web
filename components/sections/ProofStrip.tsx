"use client";

import { useRef, useState } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
  useTransform,
  wrap,
} from "framer-motion";
import { proofStrip } from "@/lib/content";

/**
 * Seamless credential marquee. Two identical tracks translate left together;
 * `wrap(-50, 0, v)` keeps the offset in [-50%, 0) so the loop is perfectly
 * continuous. Pauses on hover. Under reduced motion it renders a static,
 * centred row instead of animating. (Marquee technique seeded via Magic MCP,
 * rebuilt on framer-motion's own `wrap` and the Satinwood palette.)
 */
function Track({ paused }: { paused: boolean }) {
  const baseX = useMotionValue(0);
  const x = useTransform(baseX, (v) => `${wrap(-50, 0, v)}%`);
  const velocity = 1.6; // % per second feel, tuned slow + stately

  useAnimationFrame((_, delta) => {
    if (paused) return;
    baseX.set(baseX.get() - velocity * (delta / 1000));
  });

  return (
    <motion.div className="flex w-max flex-nowrap" style={{ x }}>
      {[0, 1].map((copy) => (
        <div key={copy} className="flex shrink-0" aria-hidden={copy === 1}>
          {proofStrip.map((item) => (
            <div key={item} className="flex items-center whitespace-nowrap px-8">
              <span className="text-[14.5px] font-medium tracking-[0.2px] text-grey">
                {item}
              </span>
              <span className="ml-8 text-[13px] text-gold/70">◆</span>
            </div>
          ))}
        </div>
      ))}
    </motion.div>
  );
}

export function ProofStrip() {
  const reduce = useReducedMotion();
  const [paused, setPaused] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div className="relative border-b border-hairline bg-paper py-6">
      {/* Hairline gold rule, fading at both ends. */}
      <span
        aria-hidden
        className="rule-gold absolute inset-x-0 top-0 h-px opacity-40"
      />

      {reduce ? (
        // Static, wrapped fallback — no motion, still legible and on-brand.
        <div className="mx-auto flex w-[90%] max-w-[1600px] flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {proofStrip.map((item) => (
            <div key={item} className="flex items-center gap-3 text-[14px] text-grey">
              <span className="text-[12px] text-gold/70">◆</span>
              <span className="font-medium">{item}</span>
            </div>
          ))}
        </div>
      ) : (
        <div
          ref={ref}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
        >
          <Track paused={paused} />
        </div>
      )}
    </div>
  );
}
