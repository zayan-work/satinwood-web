import { Container } from "@/components/primitives/Container";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { GrainOverlay } from "@/components/primitives/GrainOverlay";
import { Reveal } from "@/components/primitives/Reveal";
import { sections } from "@/lib/content";

export function ValueBand() {
  const math = sections.math;
  return (
    <section className="relative overflow-hidden bg-cream py-[88px] max-[560px]:py-[60px]">
      <GrainOverlay tone="dark" />
      <Container className="relative">
        <Reveal className="mx-auto max-w-[760px] text-center">
          <SectionHeading
            align="center"
            eyebrow={math.eyebrow}
            title={
              <>
                {math.titleLead}{" "}
                <em>{math.titleEm}</em>
              </>
            }
            lede={math.lede}
          />
          <p className="mt-6 font-display text-[22px] italic leading-[1.3] text-gold">{math.kicker}</p>
        </Reveal>
      </Container>
    </section>
  );
}
