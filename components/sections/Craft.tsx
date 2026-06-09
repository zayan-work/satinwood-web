import { Container } from "@/components/primitives/Container";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { GrainOverlay } from "@/components/primitives/GrainOverlay";
import { Reveal } from "@/components/primitives/Reveal";
import { RevealGroup, RevealItem } from "@/components/primitives/RevealGroup";
import { craftPoints } from "@/lib/content";

export function Craft() {
  return (
    <section className="relative overflow-hidden bg-cream py-[clamp(80px,10vw,132px)]">
      <GrainOverlay tone="dark" />
      <Container className="relative">
        <div className="grid grid-cols-1 items-start gap-[clamp(44px,5vw,80px)] lg:grid-cols-[1fr_1.05fr]">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <Eyebrow>The craft</Eyebrow>
              <h2 className="mt-4 font-display text-[clamp(34px,4.4vw,54px)] font-semibold leading-[1.03] tracking-[-0.4px] text-ink">
                Why the standard is different.
              </h2>
              <p className="mt-5 text-[clamp(15px,1.15vw,16.5px)] leading-[1.68] text-grey">
                Sri Lanka has a deep, internationally trained finance profession, the same
                people the global firms recruit. We do not just place them. We hold them to a
                finance-only standard, train them on the tools your business runs on, and give
                them real ownership.
              </p>
              <p className="mt-4 font-display text-[19px] italic text-gold">
                Crafted in Ceylon is not a tagline. It is where the standard comes from.
              </p>
            </div>
          </Reveal>

          <RevealGroup className="flex flex-col gap-3">
            {craftPoints.map((c) => (
              <RevealItem
                key={c.title}
                className="group relative rounded-[14px] border border-transparent bg-white/50 p-[clamp(18px,1.6vw,24px)] pl-6 transition-all duration-300 hover:border-hairline hover:bg-white"
              >
                <span className="absolute left-0 top-[clamp(18px,1.6vw,24px)] h-[calc(100%-2*clamp(18px,1.6vw,24px))] w-[3px] rounded-full bg-gradient-to-b from-gold to-tint-edge transition-all duration-300 group-hover:from-honey group-hover:to-gold-bright" />
                <div className="font-display text-[clamp(19px,1.5vw,22px)] font-semibold text-ink">
                  {c.title}
                </div>
                <p className="mt-1.5 text-[14px] leading-[1.58] text-grey">{c.body}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </Container>
    </section>
  );
}
