import { Container } from "@/components/primitives/Container";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { Reveal } from "@/components/primitives/Reveal";
import { RevealGroup, RevealItem } from "@/components/primitives/RevealGroup";
import { cn } from "@/lib/cn";
import { steps } from "@/lib/content";

export function HowItWorks() {
  return (
    <section id="how" className="bg-paper py-[88px] max-[560px]:py-[60px]">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="How it works"
            title="From first call to embedded, in weeks."
          />
        </Reveal>
        <RevealGroup className="mt-11 grid grid-cols-1 border-t border-hairline sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <RevealItem
              key={s.n}
              className={cn(
                "pb-2.5 pr-0 pt-7 lg:pr-[26px]",
                i !== 0 && "lg:border-l lg:border-hairline lg:pl-[26px]",
                i !== steps.length - 1 && "max-lg:border-b max-lg:border-hairline max-lg:pb-1.5",
              )}
            >
              <span className="font-display text-[18px] italic text-gold">{s.n}</span>
              <h3 className="mt-1.5 font-display text-[22px] font-semibold text-ink">
                {s.title}
              </h3>
              <p className="mt-[9px] text-[13.5px] leading-[1.55] text-grey">{s.body}</p>
            </RevealItem>
          ))}
        </RevealGroup>
        <Reveal>
          <div className="mt-[34px] rounded-[13px] border border-hairline bg-white px-6 py-5 text-[14.5px] leading-[1.55] text-grey">
            <b className="text-ink">Low risk by design.</b> Start with a trial period, and if a
            match is not right, we replace it. Flexible rolling terms, no long lock-in.
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
