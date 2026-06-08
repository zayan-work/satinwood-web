import { Container } from "@/components/primitives/Container";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { Reveal } from "@/components/primitives/Reveal";
import { RevealGroup, RevealItem } from "@/components/primitives/RevealGroup";
import { differences } from "@/lib/content";

export function Difference() {
  return (
    <section id="difference" className="bg-forest-deep py-[88px] text-[#EDE7D6]">
      <Container>
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
        <RevealGroup className="mt-12 grid grid-cols-1 border-t border-[#F4EFE2]/15 md:grid-cols-2">
          {differences.map((d, i) => (
            <RevealItem
              key={d.n}
              className={cellBorders(i)}
            >
              <div className="font-display text-[20px] italic text-gold-bright">{d.n}</div>
              <h3 className="mt-2 font-display text-[24px] font-semibold text-[#F4EFE2]">
                {d.title}
              </h3>
              <p className="mt-2.5 text-[14.5px] leading-[1.6] text-[#C5BCA6]">{d.body}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}

/** Right border on odd cells, bottom border on all — collapses to single column on mobile. */
function cellBorders(i: number): string {
  const odd = i % 2 === 0;
  return [
    "border-b border-[#F4EFE2]/15 py-[30px]",
    odd ? "md:border-r md:border-[#F4EFE2]/15 md:pr-10" : "md:pl-10",
  ].join(" ");
}
