import { Container } from "@/components/primitives/Container";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { Reveal } from "@/components/primitives/Reveal";
import { RevealGroup, RevealItem } from "@/components/primitives/RevealGroup";
import { reassurances } from "@/lib/content";

export function Reassurance() {
  return (
    <section className="border-t border-hairline bg-white py-[clamp(80px,10vw,132px)]">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="The fine print, handled"
            title="Built for how finance teams actually work."
          />
        </Reveal>
        <RevealGroup className="mt-[clamp(40px,5vw,60px)] grid grid-cols-1 gap-x-[clamp(24px,3vw,48px)] gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {reassurances.map((r, i) => (
            <RevealItem key={r.title} className="relative pt-6">
              <span
                aria-hidden
                className="absolute left-0 top-0 font-display text-[14px] italic text-gold-bright"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="absolute left-7 top-[11px] h-px w-[calc(100%-2rem)] bg-hairline" />
              <div className="font-display text-[clamp(19px,1.6vw,22px)] font-semibold text-ink">
                {r.title}
              </div>
              <p className="mt-2.5 text-[13.5px] leading-[1.58] text-grey">{r.body}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
