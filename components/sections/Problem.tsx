import { Container } from "@/components/primitives/Container";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { Reveal } from "@/components/primitives/Reveal";
import { RevealGroup, RevealItem } from "@/components/primitives/RevealGroup";
import { problems, sections } from "@/lib/content";

export function Problem() {
  return (
    <section className="bg-paper py-[88px] max-[560px]:py-[60px]">
      <Container>
        <Reveal>
          <SectionHeading eyebrow={sections.problem.eyebrow} title={sections.problem.title} />
        </Reveal>
        <RevealGroup className="mt-[46px] grid grid-cols-1 gap-[30px] md:grid-cols-3">
          {problems.map((p) => (
            <RevealItem key={p.title} className="border-t-2 border-gold pt-5">
              <h3 className="font-display text-[23px] font-semibold leading-[1.15] text-ink">
                {p.title}
              </h3>
              <p className="mt-2.5 text-[14.5px] leading-[1.6] text-grey">{p.body}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
