import { Container } from "@/components/primitives/Container";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { GrainOverlay } from "@/components/primitives/GrainOverlay";
import { Reveal } from "@/components/primitives/Reveal";
import { RevealGroup, RevealItem } from "@/components/primitives/RevealGroup";
import { operators, sections } from "@/lib/content";

export function Operators() {
  return (
    <section id="team" className="border-y border-hairline bg-white py-[88px] max-[560px]:py-[60px]">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={sections.operators.eyebrow}
            title={sections.operators.title}
            lede={sections.operators.lede}
          />
        </Reveal>
        <RevealGroup className="mt-[clamp(40px,5vw,60px)] grid grid-cols-2 gap-[clamp(16px,1.8vw,26px)] lg:grid-cols-4">
          {operators.map((op) => (
            <RevealItem key={op.name} className="group">
              <div
                className="relative flex aspect-[4/5] items-center justify-center overflow-hidden rounded-[18px]"
                style={{ background: op.gradient }}
              >
                <GrainOverlay tone="light" />
                {/* Satin sheen rises across the portrait on hover. */}
                <span className="pointer-events-none absolute inset-0 translate-y-full bg-[linear-gradient(0deg,rgba(221,196,136,0.22),transparent_60%)] transition-transform duration-500 ease-out group-hover:translate-y-0 motion-reduce:transition-none" />
                <span className="font-display text-[clamp(54px,5vw,72px)] font-semibold text-[#F2EBDB]/90 transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100">
                  {op.initials}
                </span>
                <span className="absolute right-3 top-3 rounded-full border border-[#F4EFE2]/45 bg-[#1C1B16]/25 px-2.5 py-1 text-[10px] font-semibold tracking-[0.6px] text-[#F4EFE2] backdrop-blur-sm">
                  {op.cred}
                </span>
              </div>
              <div className="mt-4 font-display text-[clamp(20px,1.7vw,23px)] font-semibold leading-[1.1] text-ink">
                {op.name}
              </div>
              <div className="mt-0.5 text-[13px] font-semibold text-gold">{op.role}</div>
              <p className="mt-2 text-[12.5px] leading-[1.52] text-grey">{op.meta}</p>
            </RevealItem>
          ))}
        </RevealGroup>
        <Reveal>
          <p className="mt-7 text-[12px] italic text-grey-light">{sections.operators.note}</p>
        </Reveal>
      </Container>
    </section>
  );
}
