import { Container } from "@/components/primitives/Container";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { WoodGrain } from "@/components/primitives/WoodGrain";
import { SectionCurve } from "@/components/primitives/SectionCurve";
import { Reveal } from "@/components/primitives/Reveal";
import { RevealGroup, RevealItem } from "@/components/primitives/RevealGroup";
import { differences } from "@/lib/content";

export function Difference() {
  return (
    <section
      id="difference"
      className="relative overflow-hidden bg-forest-deep py-[clamp(96px,11vw,150px)] text-[#EDE7D6]"
    >
      <WoodGrain theme="dark" id="difference" className="opacity-80" />
      <SectionCurve position="top" fill="var(--paper)" variant="wave" />

      <Container className="relative z-10">
        <Reveal>
          <SectionHeading
            tone="dark"
            eyebrow="The difference"
            title={
              <>
                Not a staffing marketplace. <em>A finance firm.</em>
              </>
            }
            lede="Plenty of services will rent you an offshore generalist. We are built for one thing, and we are built by the people who actually do the job."
          />
        </Reveal>
        <RevealGroup className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-[20px] border border-[#F4EFE2]/12 bg-[#F4EFE2]/8 md:grid-cols-2">
          {differences.map((d) => (
            <RevealItem
              key={d.n}
              className="group relative bg-forest-deep p-[clamp(26px,2.4vw,38px)] transition-colors duration-300 hover:bg-forest"
            >
              <div className="flex items-baseline gap-3">
                <span className="font-display text-[20px] italic text-gold-bright">
                  {d.n}
                </span>
                <span className="h-px flex-1 bg-gradient-to-r from-gold-bright/40 to-transparent" />
              </div>
              <h3 className="mt-4 font-display text-[clamp(22px,2vw,27px)] font-semibold text-[#F4EFE2]">
                {d.title}
              </h3>
              <p className="mt-3 text-[14.5px] leading-[1.62] text-[#C5BCA6]">{d.body}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>

      <SectionCurve position="bottom" fill="var(--paper)" variant="wave" />
    </section>
  );
}
