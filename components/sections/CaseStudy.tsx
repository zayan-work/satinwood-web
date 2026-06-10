import { Container } from "@/components/primitives/Container";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { Reveal } from "@/components/primitives/Reveal";
import { RevealGroup, RevealItem } from "@/components/primitives/RevealGroup";
import { cn } from "@/lib/cn";
import { caseStudy, testimonials } from "@/lib/content";

const avatarStyles: Record<string, string> = {
  a1: "bg-forest text-cream",
  a3: "bg-gold text-white",
};

export function CaseStudy() {
  return (
    <section id="proof" className="bg-paper py-[88px] max-[560px]:py-[60px]">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="Proof" title="What it looks like when finance just runs." />
        </Reveal>

        <div className="mt-[clamp(40px,5vw,64px)] grid grid-cols-1 items-stretch gap-[clamp(32px,4vw,56px)] lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="relative h-full overflow-hidden rounded-[18px] bg-forest-deep p-[clamp(34px,3vw,42px)] text-[#EDE7D6]">
              <div className="relative z-10">
                <div className="font-display text-[clamp(28px,2.6vw,30px)] font-semibold text-[#F4EFE2]">
                  {caseStudy.logo}
                </div>
                <div className="mt-2 text-[13.5px] leading-[1.5] text-[#B9B19C]">
                  {caseStudy.desc}
                </div>
                <q className="mt-8 block font-display text-[clamp(22px,2.2vw,27px)] italic leading-[1.4] text-[#F4EFE2]">
                  {caseStudy.quote}
                </q>
                <div className="mt-5 text-[13.5px] text-[#C5BCA6]">
                  <b className="font-semibold text-[#F4EFE2]">Founder</b>, {caseStudy.who}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="flex h-full flex-col justify-center">
              {caseStudy.blocks.map((b) => (
                <div key={b.label} className="mb-7">
                  <span className="mb-3 inline-block rounded-full border border-tint-edge px-3 py-1 text-[10.5px] font-semibold uppercase tracking-[1.4px] text-gold">
                    {b.label}
                  </span>
                  <p className="text-[clamp(15px,1.2vw,16.5px)] leading-[1.62] text-grey">
                    {b.body}
                  </p>
                </div>
              ))}
              <div>
                <span className="mb-3 inline-block rounded-full border border-tint-edge px-3 py-1 text-[10.5px] font-semibold uppercase tracking-[1.4px] text-gold">
                  The outcome
                </span>
                <p className="font-display text-[clamp(22px,2vw,26px)] leading-[1.34] text-ink">
                  A finance function that runs without the founder, with cleaner books and
                  faster reporting, for{" "}
                  <b className="font-semibold italic text-gold">a fraction of a local hire.</b>
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <RevealGroup className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
          {testimonials.map((t) => (
            <RevealItem
              key={t.initials}
              className="rounded-[14px] border border-hairline bg-white px-[26px] py-6"
            >
              <q className="block font-display text-[18px] italic leading-[1.42] text-ink">
                {t.quote}
              </q>
              <div className="mt-4 flex items-center gap-3">
                <div
                  className={cn(
                    "flex h-[36px] w-[36px] items-center justify-center rounded-full font-display text-[14px] font-semibold",
                    avatarStyles[t.avatar],
                  )}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="text-[13px] font-semibold text-ink">{t.name}</div>
                  <div className="text-[12px] text-grey">{t.role}</div>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
