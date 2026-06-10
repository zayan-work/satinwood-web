import { Container } from "@/components/primitives/Container";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { Reveal } from "@/components/primitives/Reveal";
import { RevealGroup, RevealItem } from "@/components/primitives/RevealGroup";
import { roles } from "@/lib/content";

export function Roles() {
  return (
    <section className="bg-paper py-[88px] max-[560px]:py-[60px]">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Finance roles we place"
            title="The seat you need, owned end to end."
          />
        </Reveal>
        <RevealGroup className="mt-11 grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-4">
          {roles.map((r) => {
            const href = "href" in r ? r.href : undefined;
            const inner = (
              <>
                <div className="font-display text-[21px] font-semibold text-ink transition-colors group-hover:text-gold">
                  {r.name}
                </div>
                <p className="mt-2 text-[13px] leading-[1.55] text-grey">{r.body}</p>
              </>
            );
            return (
              <RevealItem key={r.name}>
                {href ? (
                  <a
                    href={href}
                    className="group block h-full rounded-[13px] border border-hairline bg-white px-5 py-[22px] transition-colors hover:border-tint-edge"
                  >
                    {inner}
                  </a>
                ) : (
                  <div className="h-full rounded-[13px] border border-hairline bg-white px-5 py-[22px]">
                    {inner}
                  </div>
                )}
              </RevealItem>
            );
          })}
        </RevealGroup>
      </Container>
    </section>
  );
}
