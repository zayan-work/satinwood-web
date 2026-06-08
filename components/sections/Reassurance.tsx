import { Container } from "@/components/primitives/Container";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { Reveal } from "@/components/primitives/Reveal";
import { RevealGroup, RevealItem } from "@/components/primitives/RevealGroup";
import { reassurances } from "@/lib/content";

export function Reassurance() {
  return (
    <section className="border-t border-hairline bg-white py-[88px]">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="The fine print, handled"
            title="Built for how finance teams actually work."
          />
        </Reveal>
        <RevealGroup className="mt-11 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {reassurances.map((r) => (
            <RevealItem key={r.title}>
              <div className="font-display text-[19px] font-semibold text-ink">{r.title}</div>
              <p className="mt-[7px] text-[13px] leading-[1.55] text-grey">{r.body}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
