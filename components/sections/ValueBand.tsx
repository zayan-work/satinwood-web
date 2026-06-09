import { Container } from "@/components/primitives/Container";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { GrainOverlay } from "@/components/primitives/GrainOverlay";
import { WoodGrain } from "@/components/primitives/WoodGrain";
import { Reveal } from "@/components/primitives/Reveal";

export function ValueBand() {
  return (
    <section className="relative overflow-hidden bg-cream py-[clamp(88px,11vw,144px)]">
      <GrainOverlay tone="dark" />
      <WoodGrain theme="light" id="value" animate={false} className="opacity-70" />
      <Container className="relative">
        <Reveal className="mx-auto max-w-[820px] text-center">
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
          <p className="mt-7 font-display text-[clamp(21px,2.2vw,28px)] italic leading-[1.3] text-gold">
            We will walk you through the numbers for your market on a call.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
