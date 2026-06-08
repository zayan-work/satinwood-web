import { Container } from "@/components/primitives/Container";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { Reveal } from "@/components/primitives/Reveal";
import { RevealGroup, RevealItem } from "@/components/primitives/RevealGroup";
import { roles } from "@/lib/content";

export function Roles() {
  return (
    <section className="py-[88px]">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Finance roles we place"
            title="The seat you need, owned end to end."
          />
        </Reveal>
        <RevealGroup className="mt-11 grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-4">
          {roles.map((r) => (
            <RevealItem
              key={r.name}
              className="rounded-[13px] border border-hairline bg-white p-[22px_20px] transition-all duration-200 hover:-translate-y-0.5 hover:border-gold hover:shadow-[0_12px_30px_rgba(28,27,22,0.07)] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
            >
              <div className="font-display text-[21px] font-semibold text-ink">{r.name}</div>
              <p className="mt-2 text-[13px] leading-[1.55] text-grey">{r.body}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
