import type { Metadata } from "next";
import Image from "next/image";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Container } from "@/components/primitives/Container";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { Button } from "@/components/primitives/Button";
import { Reveal } from "@/components/primitives/Reveal";
import { RevealGroup, RevealItem } from "@/components/primitives/RevealGroup";
import { pageNav, advisory } from "@/lib/content";

export const metadata: Metadata = {
  title: "Advisory | Satinwood",
  description:
    "Business, growth, and operating strategy advisory for founders and funds. Work directly with a senior finance operator.",
  alternates: { canonical: "/advisory" },
  openGraph: {
    title: "Advisory | Satinwood",
    description:
      "Business, growth, and operating strategy advisory for founders and funds. Work directly with a senior finance operator.",
    url: "/advisory",
    type: "website",
  },
};

export default function AdvisoryPage() {
  const { hero, who, helps, why, how, final, cta } = advisory;

  return (
    <>
      <Navbar links={pageNav.links} cta={pageNav.cta} homeHref="/" />
      <main className="flex-1">
        {/* Dark hero with portrait */}
        <section className="border-b border-[#EDE7D6]/8 bg-forest-deep text-[#EDE7D6]">
          <Container className="grid grid-cols-1 items-center gap-[clamp(30px,5vw,60px)] py-[84px] max-[860px]:py-[56px] md:grid-cols-[1.06fr_0.94fr]">
            <div>
              <Reveal>
                <Eyebrow tone="dark">{hero.eyebrow}</Eyebrow>
              </Reveal>
              <Reveal delay={0.05}>
                <h1 className="mt-4 font-display text-[clamp(34px,4.6vw,52px)] font-semibold leading-[1.04] tracking-[-0.4px] text-[#F6F1E6]">
                  {hero.titleLead}
                  <em className="italic text-gold-bright">{hero.titleEm}</em>
                </h1>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-4 max-w-[46ch] text-[17px] leading-[1.6] text-[#EDE7D6]/82">
                  {hero.lede}
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="mt-6 text-[12px] font-semibold uppercase tracking-[1.6px] text-gold-bright">
                  {hero.credLine}
                </div>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="mt-[30px]">
                  <Button href={cta.href} variant="cream" className="px-[30px] py-4 text-[16px]">
                    {cta.label}
                  </Button>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.08}>
              <div className="relative mx-auto aspect-[4/5] w-full max-w-[430px] overflow-hidden rounded-[18px] shadow-[0_34px_70px_-34px_rgba(0,0,0,0.6)] md:ml-auto md:mr-0">
                <Image
                  src={hero.photo}
                  alt="Rengan Rajaratnam, Chairman of Satinwood"
                  fill
                  priority
                  sizes="(max-width: 768px) 280px, 430px"
                  className="object-cover object-top"
                />
              </div>
            </Reveal>
          </Container>
        </section>

        {/* Who he works with */}
        <section className="bg-paper py-[88px] max-[560px]:py-[60px]">
          <Container>
            <Reveal>
              <SectionHeading eyebrow={who.eyebrow} title={who.title} />
            </Reveal>
            <RevealGroup className="mt-[46px] grid grid-cols-1 gap-7 md:grid-cols-2">
              {who.cards.map((c) => (
                <RevealItem
                  key={c.title}
                  className="rounded-[16px] border border-hairline bg-white p-8"
                >
                  <h3 className="font-display text-[24px] font-semibold text-ink">{c.title}</h3>
                  <p className="mt-[11px] text-[15px] leading-[1.62] text-grey">{c.body}</p>
                </RevealItem>
              ))}
            </RevealGroup>
          </Container>
        </section>

        {/* What he helps with */}
        <section className="bg-forest-deep py-[88px] text-[#EDE7D6] max-[560px]:py-[60px]">
          <Container>
            <Reveal>
              <SectionHeading tone="dark" eyebrow={helps.eyebrow} title={helps.title} />
            </Reveal>
            <RevealGroup className="mt-[46px] grid grid-cols-1 gap-x-11 gap-y-[30px] md:grid-cols-2">
              {helps.items.map((item) => (
                <RevealItem key={item.title}>
                  <h3 className="font-display text-[23px] font-semibold text-[#F3EDE2]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[14.5px] leading-[1.6] text-[#EDE7D6]/74">{item.body}</p>
                </RevealItem>
              ))}
            </RevealGroup>
            <Reveal delay={0.1} className="mt-[38px]">
              <Button href={cta.href} variant="cream" className="px-[30px] py-4 text-[16px]">
                {cta.label}
              </Button>
            </Reveal>
          </Container>
        </section>

        {/* Why Rengan */}
        <section className="bg-paper py-[88px] max-[560px]:py-[60px]">
          <Container>
            <Reveal>
              <SectionHeading eyebrow={why.eyebrow} title={why.title} lede={why.body} />
            </Reveal>
          </Container>
        </section>

        {/* How it works */}
        <section className="bg-forest-deep py-[88px] text-[#EDE7D6] max-[560px]:py-[60px]">
          <Container>
            <Reveal>
              <SectionHeading tone="dark" eyebrow={how.eyebrow} title={how.title} />
            </Reveal>
            <RevealGroup className="mt-[46px] grid grid-cols-1 gap-[34px] sm:grid-cols-3">
              {how.steps.map((s) => (
                <RevealItem key={s.n}>
                  <div className="font-display text-[34px] font-semibold leading-none text-gold-bright">
                    {s.n}
                  </div>
                  <h3 className="mt-2 font-display text-[21px] font-semibold text-[#F3EDE2]">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-[14.5px] leading-[1.6] text-[#EDE7D6]/74">{s.body}</p>
                </RevealItem>
              ))}
            </RevealGroup>
          </Container>
        </section>

        {/* Final CTA */}
        <section className="bg-paper py-[88px] max-[560px]:py-[60px]">
          <Container>
            <Reveal className="mx-auto max-w-[760px] text-center">
              <SectionHeading align="center" eyebrow={final.eyebrow} title={final.title} lede={final.body} />
              <div className="mt-[26px] flex justify-center">
                <Button href={cta.href} variant="primary">
                  {cta.label}
                </Button>
              </div>
            </Reveal>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
