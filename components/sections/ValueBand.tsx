import { Container } from "@/components/primitives/Container";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { GrainOverlay } from "@/components/primitives/GrainOverlay";
import { Reveal } from "@/components/primitives/Reveal";

export function ValueBand() {
  return (
    <section className="relative overflow-hidden bg-cream py-[88px] max-[560px]:py-[60px]">
      <GrainOverlay tone="dark" />
      <Container className="relative">
        <Reveal className="mx-auto max-w-[760px] text-center">
          <SectionHeading
            align="center"
            eyebrow="The math"
            title={
              <>
                A full finance team, for a fraction of <em>one local hire.</em>
              </>
            }
            lede="Senior ownership of your close, controls, and reporting at a fraction of the cost of building the same seat at home. Most clients save well into six figures a year."
          />
          <p className="mt-6 font-display text-[22px] italic leading-[1.3] text-gold">
            We will walk you through the numbers for your market on a call.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
