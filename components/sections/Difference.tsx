import { Container } from "@/components/primitives/Container";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { Reveal } from "@/components/primitives/Reveal";
import { RevealGroup, RevealItem } from "@/components/primitives/RevealGroup";
import { cn } from "@/lib/cn";
import { differences } from "@/lib/content";

export function Difference() {
  return (
    <section id="difference" className="bg-forest-deep py-[88px] text-[#EDE7D6] max-[560px]:py-[60px]">
      <Container>
        <Reveal>
          <SectionHeading
            tone="dark"
            eyebrow="The difference"
            title={
              <>
                Finance that <em>runs without you.</em>
              </>
            }
            lede="Plenty of services will rent you an offshore generalist. We are built for one thing, and we are built by the people who actually do the job."
          />
        </Reveal>
        <RevealGroup className="mt-12 grid grid-cols-1 border-t border-[#F4EFE2]/15 md:grid-cols-2">
          {differences.map((d, i) => (
            <RevealItem
              key={d.n}
              className={cn(
                "border-b border-[#F4EFE2]/15 py-[30px] pr-0 max-[560px]:pb-1.5 max-[560px]:pt-6 md:pr-9",
                i % 2 === 0 ? "md:border-r md:border-[#F4EFE2]/15 md:pr-10" : "md:pl-10",
              )}
            >
              <span className="font-display text-[20px] italic text-gold-bright">{d.n}</span>
              <h3 className="mt-2 font-display text-[clamp(22px,2vw,24px)] font-semibold text-[#F4EFE2]">
                {d.title}
              </h3>
              <p className="mt-[9px] text-[14.5px] leading-[1.6] text-[#C5BCA6]">{d.body}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
