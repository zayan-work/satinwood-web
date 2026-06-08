"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/primitives/Container";
import { Button } from "@/components/primitives/Button";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { GrainOverlay } from "@/components/primitives/GrainOverlay";
import { Parallax } from "@/components/primitives/Parallax";
import { Reveal } from "@/components/primitives/Reveal";
import { RevealGroup, RevealItem } from "@/components/primitives/RevealGroup";
import { RingsBackground } from "@/components/three/RingsBackground";
import { cn } from "@/lib/cn";
import { hero } from "@/lib/content";

const avatarStyles: Record<string, string> = {
  a1: "bg-forest text-cream",
  a2: "bg-tint text-forest",
  a3: "bg-gold text-white",
  a4: "bg-forest-deep text-cream",
};

const cardOffset = ["", "md:ml-[34px]", "md:ml-3", "md:ml-[44px]"];

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-cream py-[70px] pt-[42px]"
      style={{
        backgroundImage:
          "radial-gradient(120% 90% at 92% 6%, rgba(194,162,78,.12) 0%, rgba(194,162,78,0) 55%)," +
          "radial-gradient(80% 70% at 0% 0%, rgba(44,56,42,.05) 0%, rgba(44,56,42,0) 50%)," +
          "linear-gradient(180deg,var(--cream) 0%, #F4EEE0 100%)",
      }}
    >
      <GrainOverlay tone="dark" />

      {/* 3D concentric rings (the wordmark motif), offset to the right */}
      <RingsBackground theme="light" offsetX={2.4} />

      {/* Slow drifting gold glow (disabled under reduced motion) */}
      {!reduce && (
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-24 h-[460px] w-[460px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(194,162,78,0.18) 0%, rgba(194,162,78,0) 65%)",
          }}
          animate={{ opacity: [0.55, 0.9, 0.55], scale: [1, 1.06, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      )}

      <Container className="relative grid grid-cols-1 items-center gap-[54px] md:grid-cols-[1.15fr_0.85fr]">
        <div>
          <Reveal>
            <Eyebrow>{hero.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-6 font-display text-[clamp(44px,6vw,74px)] font-semibold leading-[1.01] tracking-[-0.5px] text-ink">
              A controller-grade finance team,{" "}
              <em className="italic text-gold">embedded in your business.</em>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-[47ch] text-[18.5px] leading-[1.55] text-grey">
              Satinwood places senior, fully embedded finance operators who own your
              close, reconciliations, reporting, and controls. A full finance function,
              for a fraction of building it at home.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-[34px] flex flex-wrap gap-3.5">
              <Button href="#cta" variant="primary">
                Build your team →
              </Button>
              <Button href="#how" variant="ghost">
                See how it works
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-3.5 text-[13px] text-grey-light">{hero.note}</p>
          </Reveal>
          <Reveal delay={0.25}>
            <div className="mt-[30px] flex flex-wrap gap-x-[22px] gap-y-2.5 text-[13px] text-grey">
              {hero.trust.map((t) => (
                <span key={t} className="inline-flex items-center gap-2">
                  <span className="h-[5px] w-[5px] rounded-full bg-gold" />
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        <Parallax distance={46}>
          <RevealGroup className="flex flex-col gap-3.5">
            {hero.people.map((p, i) => (
            <RevealItem
              key={p.initials}
              className={cn(
                "flex items-center gap-3.5 rounded-[14px] border border-hairline bg-white p-[13px_16px] shadow-[0_6px_22px_rgba(28,27,22,0.05)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(28,27,22,0.09)] motion-reduce:transition-none motion-reduce:hover:translate-y-0",
                cardOffset[i],
              )}
            >
              <div
                className={cn(
                  "flex h-[46px] w-[46px] flex-none items-center justify-center rounded-full font-display text-[19px] font-semibold",
                  avatarStyles[p.avatar],
                )}
              >
                {p.initials}
              </div>
              <div>
                <div className="text-[14.5px] font-semibold leading-[1.15] text-ink">
                  {p.name}
                </div>
                <div className="mt-px text-[12.5px] text-grey">{p.role}</div>
              </div>
              <span className="ml-auto whitespace-nowrap rounded-full border border-tint-edge px-2 py-[3px] text-[10px] font-semibold tracking-[0.5px] text-gold">
                {p.tag}
              </span>
            </RevealItem>
            ))}
          </RevealGroup>
        </Parallax>
      </Container>
    </section>
  );
}
