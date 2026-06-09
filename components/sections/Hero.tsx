import { BadgeCheck } from "lucide-react";
import { Container } from "@/components/primitives/Container";
import { Button } from "@/components/primitives/Button";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { GrainOverlay } from "@/components/primitives/GrainOverlay";
import { WoodGrain } from "@/components/primitives/WoodGrain";
import { SectionCurve } from "@/components/primitives/SectionCurve";
import { Parallax } from "@/components/primitives/Parallax";
import { Reveal } from "@/components/primitives/Reveal";
import { RevealGroup, RevealItem } from "@/components/primitives/RevealGroup";
import { cn } from "@/lib/cn";
import { hero } from "@/lib/content";

const avatarStyles: Record<string, string> = {
  a1: "bg-forest text-cream",
  a2: "bg-tint text-forest",
  a3: "bg-gold text-white",
  a4: "bg-forest-deep text-cream",
};

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-cream pb-[clamp(96px,12vw,150px)] pt-[clamp(40px,5vw,64px)]"
      style={{
        backgroundImage:
          "radial-gradient(120% 90% at 92% 6%, rgba(194,162,78,.12) 0%, rgba(194,162,78,0) 55%)," +
          "radial-gradient(80% 70% at 0% 0%, rgba(44,56,42,.05) 0%, rgba(44,56,42,0) 50%)," +
          "linear-gradient(180deg,var(--cream) 0%, #F4EEE0 100%)",
      }}
    >
      <GrainOverlay tone="dark" />

      {/* Satinwood figure, anchored upper-right — the material motif that
          replaces the old 3D ring canvas. */}
      <WoodGrain theme="light" id="hero" className="opacity-90" />

      <Container className="relative grid grid-cols-1 items-center gap-[clamp(48px,5vw,84px)] md:grid-cols-[1.12fr_0.88fr]">
        <div>
          <Reveal>
            <Eyebrow>{hero.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-7 font-display text-[clamp(46px,6.4vw,84px)] font-semibold leading-[1.0] tracking-[-0.6px] text-ink">
              A controller-grade finance team,{" "}
              <em className="italic text-gold">embedded in your business.</em>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-7 max-w-[50ch] text-[clamp(17px,1.3vw,20px)] leading-[1.55] text-grey">
              Satinwood places senior, fully embedded finance operators who own your
              close, reconciliations, reporting, and controls. A full finance function,
              for a fraction of building it at home.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-9 flex flex-wrap items-center gap-3.5">
              <Button href="#cta" variant="primary">
                Build your team
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
            <div className="mt-8 flex flex-wrap gap-x-[22px] gap-y-2.5 text-[13px] text-grey">
              {hero.trust.map((t) => (
                <span key={t} className="inline-flex items-center gap-2">
                  <span className="h-[5px] w-[5px] rounded-full bg-gold" />
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        {/* The senior bench — a single dossier panel instead of loose cards. */}
        <Parallax distance={40}>
          <Reveal delay={0.08}>
            <div className="relative overflow-hidden rounded-[24px] border border-hairline bg-[linear-gradient(180deg,#ffffff,rgba(255,255,255,0.86))] shadow-[0_30px_70px_-26px_rgba(28,27,22,0.32)] backdrop-blur-sm">
              <span aria-hidden className="rule-gold absolute inset-x-0 top-0 h-[3px]" />

              <div className="flex items-start justify-between gap-3 px-6 pt-6">
                <div>
                  <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[1.6px] text-gold">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#3f7d4f]/50 motion-reduce:hidden" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-[#3f7d4f]" />
                    </span>
                    Available now
                  </div>
                  <div className="mt-1.5 font-display text-[21px] font-semibold leading-none text-ink">
                    Your senior bench
                  </div>
                </div>
                <span className="whitespace-nowrap rounded-full border border-tint-edge bg-cream/60 px-3 py-1 text-[11px] font-semibold text-forest">
                  4 ready to embed
                </span>
              </div>

              <RevealGroup className="mt-4 flex flex-col px-2 pb-2">
                {hero.people.map((p) => (
                  <RevealItem
                    key={p.initials}
                    className="group flex items-center gap-3.5 rounded-[14px] px-4 py-3 transition-colors duration-200 hover:bg-cream/70"
                  >
                    <div
                      className={cn(
                        "flex h-[46px] w-[46px] flex-none items-center justify-center rounded-[12px] font-display text-[18px] font-semibold shadow-[0_4px_12px_rgba(28,27,22,0.12)] transition-transform duration-300 group-hover:scale-105 motion-reduce:group-hover:scale-100",
                        avatarStyles[p.avatar],
                      )}
                    >
                      {p.initials}
                    </div>
                    <div className="min-w-0">
                      <div className="text-[14.5px] font-semibold leading-tight text-ink">
                        {p.name}
                      </div>
                      <div className="mt-0.5 text-[12.5px] text-grey">{p.role}</div>
                    </div>
                    <span className="ml-auto whitespace-nowrap rounded-full border border-tint-edge px-2.5 py-[3px] text-[10px] font-semibold tracking-[0.5px] text-gold transition-colors duration-200 group-hover:border-gold group-hover:bg-gold group-hover:text-white">
                      {p.tag}
                    </span>
                  </RevealItem>
                ))}
              </RevealGroup>

              <div className="flex items-center gap-2.5 border-t border-hairline bg-cream/40 px-6 py-3.5 text-[12.5px] text-grey">
                <BadgeCheck className="size-4 flex-none text-gold" strokeWidth={2} />
                Hand-selected and matched to your stack.
              </div>
            </div>
          </Reveal>
        </Parallax>
      </Container>

      {/* Organic sweep into the proof band below. */}
      <SectionCurve position="bottom" fill="var(--paper)" variant="wave" />
    </section>
  );
}
