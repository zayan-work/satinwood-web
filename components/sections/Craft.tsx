import { Container } from "@/components/primitives/Container";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { Reveal } from "@/components/primitives/Reveal";
import { RevealGroup, RevealItem } from "@/components/primitives/RevealGroup";
import { craftPoints } from "@/lib/content";

export function Craft() {
  return (
    <section className="relative bg-cream py-[88px]">
      <Container>
        <div className="grid grid-cols-1 items-start gap-[50px] lg:grid-cols-2">
          <Reveal>
            <div>
              <Eyebrow>The craft</Eyebrow>
              <h2 className="mt-3.5 font-display text-[clamp(32px,4.4vw,50px)] font-semibold leading-[1.04] tracking-[-0.3px] text-ink">
                Why the standard is different.
              </h2>
              <p className="mt-[18px] text-[15.5px] leading-[1.65] text-grey">
                Sri Lanka has a deep, internationally trained finance profession, the same
                people the global firms recruit. We do not just place them. We hold them to a
                finance-only standard, train them on the tools your business runs on, and give
                them real ownership.
              </p>
              <p className="mt-3.5 text-[15.5px] leading-[1.65] text-grey">
                Crafted in Ceylon is not a tagline. It is where the standard comes from.
              </p>
            </div>
          </Reveal>

          <RevealGroup className="flex flex-col gap-4">
            {craftPoints.map((c) => (
              <RevealItem key={c.title} className="border-l-2 border-gold pl-[18px]">
                <div className="font-display text-[19px] font-semibold text-ink">{c.title}</div>
                <p className="mt-1 text-[13.5px] leading-[1.55] text-grey">{c.body}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </Container>
    </section>
  );
}
