import { Container } from "@/components/primitives/Container";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { Reveal } from "@/components/primitives/Reveal";
import { RevealGroup, RevealItem } from "@/components/primitives/RevealGroup";
import { cn } from "@/lib/cn";
import { steps } from "@/lib/content";

export function HowItWorks() {
  return (
    <section id="how" className="bg-paper py-[clamp(80px,10vw,132px)]">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="How it works"
            title="From first call to embedded, in weeks."
          />
        </Reveal>
        <RevealGroup className="relative mt-[clamp(40px,5vw,60px)] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {/* A continuous gold thread joins the four steps on wide screens. */}
          <span
            aria-hidden
            className="absolute left-0 top-[14px] hidden h-px w-full bg-gradient-to-r from-tint-edge via-gold/60 to-tint-edge lg:block"
          />
          {steps.map((s, i) => (
            <RevealItem
              key={s.n}
              className={cn(
                "group relative py-7 lg:pr-7",
                i !== 0 && "lg:pl-7",
                i !== steps.length - 1 && "max-lg:border-b max-lg:border-hairline",
              )}
            >
              <div className="relative flex items-center gap-3">
                <span className="relative z-10 flex h-9 w-9 flex-none items-center justify-center rounded-full border border-tint-edge bg-paper font-display text-[20px] font-semibold text-gold transition-colors duration-300 group-hover:border-gold group-hover:bg-gold group-hover:text-white">
                  {i + 1}
                </span>
              </div>
              <h3 className="mt-4 font-display text-[clamp(21px,1.7vw,25px)] font-semibold text-ink">
                {s.title}
              </h3>
              <p className="mt-2 text-[14px] leading-[1.58] text-grey">{s.body}</p>
            </RevealItem>
          ))}
        </RevealGroup>
        <Reveal>
          <div className="mt-9 flex items-start gap-3 rounded-[14px] border border-hairline bg-white p-[clamp(18px,1.6vw,24px)] text-[14.5px] leading-[1.55] text-grey">
            <span className="mt-[3px] h-2 w-2 flex-none rounded-full bg-gold" />
            <span>
              <b className="text-ink">Low risk by design.</b> Start with a trial period, and if
              a match is not right, we replace it. Flexible rolling terms, no long lock-in.
            </span>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
