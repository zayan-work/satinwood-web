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
import { WoodGrain } from "@/components/primitives/WoodGrain";
import { SectionCurve } from "@/components/primitives/SectionCurve";
import { pageNav, advisory } from "@/lib/content";

export const metadata: Metadata = {
  title: "Advisory · Satinwood",
  description:
    "Rengan Rajaratnam spent three decades in global finance, including Goldman Sachs and Morgan Stanley. He advises a small number of founders and funds directly on strategy, growth, and capital.",
  alternates: { canonical: "/advisory" },
  openGraph: {
    title: "Advisory · Satinwood",
    description:
      "An operator in your corner. Rengan Rajaratnam advises founders and funds on strategy, growth, and capital.",
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
        <section className="relative overflow-hidden border-b border-[#EDE7D6]/8 bg-forest-deep text-[#EDE7D6]">
          <WoodGrain theme="dark" id="adv-hero" className="opacity-60" />
          <Container className="relative z-10 grid grid-cols-1 items-center gap-[clamp(32px,5vw,60px)] py-[clamp(56px,8vw,96px)] md:grid-cols-[1.06fr_0.94fr]">
            <div>
              <Reveal>
                <Eyebrow tone="dark">{hero.eyebrow}</Eyebrow>
              </Reveal>
              <Reveal delay={0.05}>
                <h1 className="mt-4 font-display text-[clamp(36px,4.8vw,56px)] font-semibold leading-[1.02] tracking-[-0.5px] text-[#F6F1E6]">
                  {hero.titleLead}
                  <em className="italic text-gold-bright">{hero.titleEm}</em>
                </h1>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-5 max-w-[46ch] text-[clamp(15.5px,1.2vw,18px)] leading-[1.62] text-[#EDE7D6]/82">
                  {hero.lede}
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="mt-6 text-[12px] font-semibold uppercase tracking-[1.6px] text-gold-bright">
                  {hero.credLine}
                </div>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="mt-8">
                  <Button href={cta.href} variant="cream">
                    {cta.label}
                  </Button>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.08}>
              <div className="relative mx-auto aspect-[4/5] w-full max-w-[420px] overflow-hidden rounded-[18px] shadow-[0_34px_70px_-34px_rgba(0,0,0,0.6)] md:ml-auto md:mr-0">
                <Image
                  src={hero.photo}
                  alt="Rengan Rajaratnam, Chairman of Satinwood"
                  fill
                  priority
                  sizes="(max-width: 768px) 280px, 420px"
                  className="object-cover object-top"
                />
              </div>
            </Reveal>
          </Container>
        </section>

        {/* Who he works with */}
        <section className="bg-paper py-[clamp(72px,9vw,120px)]">
          <Container>
            <Reveal>
              <SectionHeading eyebrow={who.eyebrow} title={who.title} />
            </Reveal>
            <RevealGroup className="mt-[clamp(36px,4vw,52px)] grid grid-cols-1 gap-[clamp(20px,2.4vw,28px)] md:grid-cols-2">
              {who.cards.map((c) => (
                <RevealItem
                  key={c.title}
                  className="rounded-[16px] border border-hairline bg-white p-[clamp(26px,3vw,36px)] transition-shadow duration-300 hover:shadow-[0_22px_50px_-30px_rgba(28,27,22,0.4)]"
                >
                  <h3 className="font-display text-[clamp(22px,2vw,26px)] font-semibold text-ink">
                    {c.title}
                  </h3>
                  <p className="mt-3 text-[clamp(14.5px,1.1vw,16px)] leading-[1.62] text-grey">
                    {c.body}
                  </p>
                </RevealItem>
              ))}
            </RevealGroup>
          </Container>
        </section>

        {/* What he helps with */}
        <section className="relative overflow-hidden bg-forest-deep py-[clamp(80px,10vw,132px)] text-[#EDE7D6]">
          <WoodGrain theme="dark" id="adv-helps" className="opacity-70" />
          <SectionCurve position="top" fill="var(--paper)" variant="wave" />
          <Container className="relative z-10">
            <Reveal>
              <SectionHeading tone="dark" eyebrow={helps.eyebrow} title={helps.title} />
            </Reveal>
            <RevealGroup className="mt-[clamp(36px,4vw,52px)] grid grid-cols-1 gap-x-[clamp(28px,4vw,52px)] gap-y-[clamp(26px,3vw,38px)] md:grid-cols-2">
              {helps.items.map((item) => (
                <RevealItem key={item.title} className="border-l-2 border-gold-bright/60 pl-5">
                  <h3 className="font-display text-[clamp(20px,1.8vw,24px)] font-semibold text-[#F3EDE2]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[14.5px] leading-[1.6] text-[#EDE7D6]/74">{item.body}</p>
                </RevealItem>
              ))}
            </RevealGroup>
            <Reveal delay={0.1} className="mt-[clamp(32px,4vw,44px)]">
              <Button href={cta.href} variant="cream">
                {cta.label}
              </Button>
            </Reveal>
          </Container>
          <SectionCurve position="bottom" fill="var(--paper)" variant="wave" />
        </section>

        {/* Why Rengan */}
        <section className="bg-paper py-[clamp(72px,9vw,120px)]">
          <Container>
            <Reveal>
              <SectionHeading eyebrow={why.eyebrow} title={why.title} lede={why.body} />
            </Reveal>
          </Container>
        </section>

        {/* How it works */}
        <section className="relative overflow-hidden bg-forest-deep py-[clamp(80px,10vw,132px)] text-[#EDE7D6]">
          <WoodGrain theme="dark" id="adv-how" className="opacity-70" />
          <SectionCurve position="top" fill="var(--paper)" variant="wave" />
          <Container className="relative z-10">
            <Reveal>
              <SectionHeading tone="dark" eyebrow={how.eyebrow} title={how.title} />
            </Reveal>
            <RevealGroup className="mt-[clamp(36px,4vw,52px)] grid grid-cols-1 gap-[clamp(28px,4vw,44px)] sm:grid-cols-3">
              {how.steps.map((s) => (
                <RevealItem key={s.n}>
                  <div className="font-display text-[clamp(30px,3vw,38px)] font-semibold leading-none text-gold-bright">
                    {s.n}
                  </div>
                  <h3 className="mt-3 font-display text-[clamp(19px,1.7vw,22px)] font-semibold text-[#F3EDE2]">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-[14.5px] leading-[1.6] text-[#EDE7D6]/74">{s.body}</p>
                </RevealItem>
              ))}
            </RevealGroup>
          </Container>
          <SectionCurve position="bottom" fill="var(--paper)" variant="wave" />
        </section>

        {/* Final CTA */}
        <section className="bg-paper py-[clamp(80px,10vw,132px)]">
          <Container>
            <Reveal className="mx-auto max-w-[760px] text-center">
              <SectionHeading align="center" eyebrow={final.eyebrow} title={final.title} lede={final.body} />
              <div className="mt-8 flex justify-center">
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
