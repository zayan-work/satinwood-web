import { Container } from "@/components/primitives/Container";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { FaqAccordion } from "@/components/primitives/FaqAccordion";
import { Reveal } from "@/components/primitives/Reveal";
import { faqs, sections } from "@/lib/content";

export function Faq() {
  return (
    <section className="bg-paper py-[88px] max-[560px]:py-[60px]">
      <Container>
        <Reveal>
          <SectionHeading eyebrow={sections.faq.eyebrow} title={sections.faq.title} />
        </Reveal>
        <Reveal delay={0.05}>
          <FaqAccordion items={faqs} />
        </Reveal>
      </Container>
    </section>
  );
}
