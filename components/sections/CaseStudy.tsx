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
    <section id="proof" className="bg-paper py-[88px]">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="Proof" title="What it looks like when finance just runs." />
        </Reveal>

        <div className="mt-[46px] grid grid-cols-1 items-center gap-[50px] lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="rounded-[18px] bg-forest-deep p-[42px_40px] text-[#EDE7D6]">
              <div className="font-display text-[30px] font-semibold text-[#F4EFE2]">
                {caseStudy.logo}
              </div>
              <div className="mt-1.5 text-[13.5px] text-[#B9B19C]">{caseStudy.desc}</div>
              <q className="mt-[26px] block font-display text-[23px] italic leading-[1.4] text-[#F4EFE2]">
                {caseStudy.quote}
              </q>
              <div className="mt-4 text-[13.5px] text-[#C5BCA6]">
                <b className="font-semibold text-[#F4EFE2]">Founder</b>, {caseStudy.who}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div>
              {caseStudy.blocks.map((b) => (
                <div key={b.label} className="mb-6">
                  <span className="mb-2.5 inline-block rounded-full border border-tint-edge px-3 py-1 text-[10.5px] font-semibold uppercase tracking-[1.4px] text-gold">
                    {b.label}
                  </span>
                  <p className="text-[15px] leading-[1.6] text-grey">{b.body}</p>
                </div>
              ))}
              <div>
                <span className="mb-2.5 inline-block rounded-full border border-tint-edge px-3 py-1 text-[10.5px] font-semibold uppercase tracking-[1.4px] text-gold">
                  The outcome
                </span>
                <p className="font-display text-[22px] leading-[1.35] text-ink">
                  A finance function that runs without the founder, with cleaner books and
                  faster reporting, for{" "}
                  <b className="italic font-semibold text-gold">a fraction of a local hire.</b>
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <RevealGroup className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
          {testimonials.map((t) => (
            <RevealItem
              key={t.initials}
              className="rounded-[14px] border border-hairline bg-white p-[24px_26px] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(28,27,22,0.07)] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
            >
              <q className="block font-display text-[18px] italic leading-[1.42] text-ink">
                {t.quote}
              </q>
              <div className="mt-[15px] flex items-center gap-2.5">
                <div
                  className={cn(
                    "flex h-[34px] w-[34px] items-center justify-center rounded-full font-display text-[14px] font-semibold",
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
