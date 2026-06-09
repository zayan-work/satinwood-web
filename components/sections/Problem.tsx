import { Container } from "@/components/primitives/Container";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { Reveal } from "@/components/primitives/Reveal";
import { RevealGroup, RevealItem } from "@/components/primitives/RevealGroup";
import { problems } from "@/lib/content";

export function Problem() {
  return (
    <section className="bg-paper py-[clamp(80px,10vw,132px)]">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Why now"
            title="Senior finance judgment is expensive and scarce."
          />
        </Reveal>
        <RevealGroup className="mt-[clamp(40px,5vw,64px)] grid grid-cols-1 gap-[clamp(24px,3vw,44px)] md:grid-cols-3">
          {problems.map((p) => (
            <RevealItem key={p.title} className="group relative pt-7">
              {/* Grain-gold top rule that warms on hover. */}
              <span className="absolute left-0 top-0 h-[3px] w-full rounded-full bg-gradient-to-r from-gold to-tint-edge transition-all duration-300 group-hover:from-honey group-hover:to-gold-bright" />
              <h3 className="font-display text-[clamp(22px,2vw,27px)] font-semibold leading-[1.15] text-ink">
                {p.title}
              </h3>
              <p className="mt-3 text-[15px] leading-[1.62] text-grey">{p.body}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
