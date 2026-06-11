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
import { FaqAccordion } from "@/components/primitives/FaqAccordion";
import { AdvisoryBooking } from "@/components/sections/AdvisoryBooking";
import { pageNav, advisory } from "@/lib/content";

export const metadata: Metadata = {
  title: "Advisory | Satinwood",
  description:
    "A 15-minute introductory call with Rengan Rajaratnam — business, growth, and operating strategy advisory for founders and funds.",
  alternates: { canonical: "/advisory" },
  openGraph: {
    title: "Advisory | Satinwood",
    description:
      "Fifteen minutes with an operator who has been where you are. A $150 introductory call with Rengan Rajaratnam.",
    url: "/advisory",
    type: "website",
  },
};

// Service + FAQ structured data (matches the FAQ copy below).
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Satinwood Advisory",
      serviceType: "Business and growth strategy advisory",
      provider: {
        "@type": "Organization",
        name: "Satinwood",
        url: "https://www.satinwood.co/",
      },
      description:
        "Business, growth, and operating strategy advisory for founders and funds.",
      areaServed: [
        "United States",
        "Canada",
        "United Kingdom",
        "United Arab Emirates",
        "Australia",
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.satinwood.co/advisory#faq",
      mainEntity: advisory.faq.items.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
  ],
};

/** Price + duration line, e.g. "$150  ·  15-minute introductory call". */
function SessionLine({
  price,
  label,
  tone = "dark",
  className,
}: {
  price: string;
  label: string;
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <div className={`flex flex-wrap items-center gap-x-3.5 gap-y-2.5 ${className ?? ""}`}>
      <span className="font-display text-[30px] font-bold leading-none text-gold-bright">
        {price}
      </span>
      <span
        className={`text-[13px] font-semibold uppercase tracking-[1.2px] ${
          tone === "dark" ? "text-[#EDE7D6]" : "text-grey"
        }`}
      >
        {label}
      </span>
    </div>
  );
}

export default function AdvisoryPage() {
  const { hero, intro, why, questions, longer, how, faq, book } = advisory;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
              <Reveal delay={0.18}>
                <SessionLine price={hero.price} label={hero.priceLabel} className="mt-[26px]" />
              </Reveal>
              <Reveal delay={0.22}>
                <div className="mt-[26px]">
                  <Button
                    href={hero.primaryCta.href}
                    variant="cream"
                    className="px-[30px] py-4 text-[16px]"
                  >
                    {hero.primaryCta.label} →
                  </Button>
                </div>
              </Reveal>
              <Reveal delay={0.26}>
                <p className="mt-4">
                  <a
                    href={hero.subLink.href}
                    className="border-b border-[#EDE7D6]/22 pb-0.5 text-[14px] text-[#EDE7D6]/62 transition-colors hover:border-gold-bright hover:text-gold-bright"
                  >
                    {hero.subLink.label} →
                  </a>
                </p>
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

        {/* The introductory call */}
        <section className="bg-paper py-[88px] max-[560px]:py-[60px]">
          <Container>
            <Reveal>
              <SectionHeading eyebrow={intro.eyebrow} title={intro.title} />
            </Reveal>
            <RevealGroup className="mt-[46px] grid grid-cols-1 gap-7 md:grid-cols-2">
              {intro.cards.map((c) => (
                <RevealItem
                  key={c.title}
                  className="rounded-[16px] border border-hairline bg-white p-8"
                >
                  <h3 className="font-display text-[24px] font-semibold text-ink">{c.title}</h3>
                  <p className="mt-[11px] text-[15px] leading-[1.62] text-grey">{c.body}</p>
                </RevealItem>
              ))}
            </RevealGroup>
            <RevealGroup className="mt-10 grid grid-cols-1 gap-6 border-t border-hairline pt-[30px] sm:grid-cols-3">
              {intro.expect.map((e) => (
                <RevealItem key={e.k} className="flex flex-col gap-1.5">
                  <span className="text-[11px] font-semibold uppercase tracking-[1.3px] text-gold">
                    {e.k}
                  </span>
                  <span className="font-display text-[17px] font-semibold text-ink">{e.v}</span>
                </RevealItem>
              ))}
            </RevealGroup>
          </Container>
        </section>

        {/* Why Rengan */}
        <section className="bg-forest-deep py-[88px] text-[#EDE7D6] max-[560px]:py-[60px]">
          <Container>
            <Reveal>
              <SectionHeading
                tone="dark"
                eyebrow={why.eyebrow}
                title={
                  <>
                    {why.titleLead}
                    <em>{why.titleEm}</em>
                  </>
                }
                lede={why.body}
              />
            </Reveal>
          </Container>
        </section>

        {/* Bring your questions */}
        <section className="bg-paper py-[88px] max-[560px]:py-[60px]">
          <Container>
            <Reveal>
              <SectionHeading eyebrow={questions.eyebrow} title={questions.title} />
            </Reveal>
            <RevealGroup className="mt-[46px] grid grid-cols-1 gap-x-11 gap-y-[30px] md:grid-cols-2">
              {questions.items.map((item) => (
                <RevealItem key={item.title}>
                  <h3 className="font-display text-[23px] font-semibold text-ink">{item.title}</h3>
                  <p className="mt-2 text-[14.5px] leading-[1.6] text-grey">{item.body}</p>
                </RevealItem>
              ))}
            </RevealGroup>
          </Container>
        </section>

        {/* Beyond the introduction */}
        <section
          id="longer"
          className="scroll-mt-24 bg-forest-deep py-[88px] text-[#EDE7D6] max-[560px]:py-[60px]"
        >
          <Container>
            <Reveal>
              <SectionHeading
                tone="dark"
                eyebrow={longer.eyebrow}
                title={
                  <>
                    {longer.titleLead}
                    <em>{longer.titleEm}</em>
                  </>
                }
                lede={longer.body}
              />
            </Reveal>
            <Reveal delay={0.1} className="mt-[30px]">
              <Button href={longer.cta.href} variant="cream" className="px-[30px] py-4 text-[16px]">
                {longer.cta.label} →
              </Button>
            </Reveal>
          </Container>
        </section>

        {/* How it works */}
        <section className="bg-paper py-[88px] max-[560px]:py-[60px]">
          <Container>
            <Reveal>
              <SectionHeading eyebrow={how.eyebrow} title={how.title} />
            </Reveal>
            <RevealGroup className="mt-[46px] grid grid-cols-1 gap-[34px] sm:grid-cols-3">
              {how.steps.map((s) => (
                <RevealItem key={s.n}>
                  <div className="font-display text-[34px] font-semibold leading-none text-gold">
                    {s.n}
                  </div>
                  <h3 className="mt-2 font-display text-[21px] font-semibold text-ink">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-[14.5px] leading-[1.6] text-grey">{s.body}</p>
                </RevealItem>
              ))}
            </RevealGroup>
          </Container>
        </section>

        {/* Common questions */}
        <section className="bg-paper py-[88px] max-[560px]:py-[60px]">
          <Container>
            <Reveal>
              <SectionHeading eyebrow={faq.eyebrow} title={faq.title} />
            </Reveal>
            <Reveal delay={0.05}>
              <FaqAccordion items={faq.items} />
            </Reveal>
          </Container>
        </section>

        {/* Book a call */}
        <section id="book" className="scroll-mt-24 bg-cream py-[88px] max-[560px]:py-[60px]">
          <Container>
            <Reveal className="mx-auto max-w-[760px] text-center">
              <SectionHeading
                align="center"
                eyebrow={book.eyebrow}
                title={book.title}
                lede={book.lede}
              />
              <SessionLine
                price={book.price}
                label={book.priceLabel}
                tone="light"
                className="mt-[22px] justify-center"
              />
            </Reveal>
            <Reveal delay={0.08}>
              <AdvisoryBooking />
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mx-auto mt-[30px] max-w-[1100px] text-center font-display text-[20px] italic leading-[1.5] text-ink text-balance max-[560px]:text-[19px]">
                {book.giving}
              </p>
            </Reveal>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
