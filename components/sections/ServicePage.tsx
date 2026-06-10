import { Container } from "@/components/primitives/Container";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { Button } from "@/components/primitives/Button";
import { FaqAccordion } from "@/components/primitives/FaqAccordion";
import { Reveal } from "@/components/primitives/Reveal";
import { RevealGroup, RevealItem } from "@/components/primitives/RevealGroup";
import type { servicePages } from "@/lib/content";

type ServicePageData = (typeof servicePages)[keyof typeof servicePages];

/** Renders one SEO service landing page (controller / FP&A / CPG) from data.
 *  Flat editorial layout: hero → "the work" → why → compare → who-it-is-for →
 *  FAQ → CTA. */
export function ServicePage({ data }: { data: ServicePageData }) {
  const { hero, work, why, compare, whoFor, faq, cta } = data;

  return (
    <>
      {/* Page hero */}
      <section className="bg-paper pb-2.5 pt-[66px]">
        <Container>
          <Reveal>
            <Eyebrow>{hero.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-3.5 font-display text-[clamp(32px,4.4vw,50px)] font-semibold leading-[1.04] tracking-[-0.3px] text-ink">
              {hero.titleLead}
              <em className="italic text-gold">{hero.titleEm}</em>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 max-w-[56ch] text-[17px] leading-[1.6] text-grey">{hero.lede}</p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-6 text-[12px] font-semibold uppercase tracking-[1.5px] text-gold">
              {hero.credLine}
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-7">
              <Button href="/#cta" variant="primary">
                Build your team
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* The work / the role */}
      <section className="bg-paper py-[88px] max-[560px]:py-[60px]">
        <Container>
          <Reveal>
            <SectionHeading eyebrow={work.eyebrow} title={work.title} lede={work.lede} />
          </Reveal>
          <RevealGroup className="mt-11 grid grid-cols-1 gap-x-[46px] gap-y-[30px] sm:grid-cols-2 lg:grid-cols-3">
            {work.items.map((it) => (
              <RevealItem key={it.title}>
                <span className="font-display text-[17px] italic text-gold">{it.n}</span>
                <h3 className="mt-1.5 font-display text-[22px] font-semibold text-ink">
                  {it.title}
                </h3>
                <p className="mt-[9px] text-[14.5px] leading-[1.6] text-grey">{it.body}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      {/* Why Satinwood */}
      <section className="bg-forest-deep py-[88px] text-[#EDE7D6] max-[560px]:py-[60px]">
        <Container>
          <Reveal>
            <SectionHeading tone="dark" eyebrow={why.eyebrow} title={why.title} />
          </Reveal>
          <RevealGroup className="mt-11 grid grid-cols-1 gap-x-[46px] gap-y-[30px] md:grid-cols-2">
            {why.items.map((it) => (
              <RevealItem key={it.title}>
                <h3 className="font-display text-[22px] font-semibold text-[#F3EDE2]">{it.title}</h3>
                <p className="mt-[9px] text-[14.5px] leading-[1.6] text-[#EDE7D6]/74">{it.body}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      {/* How we compare */}
      <section className="bg-paper py-[88px] max-[560px]:py-[60px]">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow={compare.eyebrow}
              title={
                <>
                  {compare.titleLead}
                  <em>{compare.titleEm}</em>
                </>
              }
            />
          </Reveal>
          <Reveal
            delay={0.08}
            className="mt-[clamp(36px,4vw,52px)] -mx-[4%] overflow-x-auto px-[4%] sm:mx-0 sm:px-0"
          >
            <table className="w-full min-w-[600px] border-separate border-spacing-0 text-[14.5px]">
              <thead>
                <tr>
                  <th scope="col" className="w-[34%] pb-4 pr-6 text-left" />
                  <th
                    scope="col"
                    className="px-5 pb-4 text-center text-[11.5px] font-semibold uppercase tracking-[1.2px] text-grey-light"
                  >
                    {compare.columns[0]}
                  </th>
                  <th
                    scope="col"
                    className="px-5 pb-4 text-center text-[11.5px] font-semibold uppercase tracking-[1.2px] text-grey-light"
                  >
                    {compare.columns[1]}
                  </th>
                  <th
                    scope="col"
                    className="rounded-t-[14px] bg-forest-deep px-5 pb-5 pt-5 text-center font-display text-[19px] font-semibold text-gold-bright"
                  >
                    {compare.columns[2]}
                  </th>
                </tr>
              </thead>
              <tbody>
                {compare.rows.map((row, i) => {
                  const isLast = i === compare.rows.length - 1;
                  return (
                    <tr key={row.label}>
                      <th
                        scope="row"
                        className="whitespace-nowrap border-b border-hairline py-[17px] pr-6 text-left font-semibold text-ink"
                      >
                        {row.label}
                      </th>
                      <td className="border-b border-hairline px-5 py-[17px] text-center text-grey">
                        {row.a}
                      </td>
                      <td className="border-b border-hairline px-5 py-[17px] text-center text-grey">
                        {row.b}
                      </td>
                      <td
                        className={`bg-forest-deep px-5 py-[17px] text-center font-medium text-[#F4EFE2] ${
                          isLast ? "rounded-b-[14px]" : "border-b border-[#F4EFE2]/12"
                        }`}
                      >
                        {row.sat}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Reveal>
        </Container>
      </section>

      {/* Who it is for */}
      <section className="bg-forest-deep py-[88px] text-[#EDE7D6] max-[560px]:py-[60px]">
        <Container>
          <Reveal>
            <SectionHeading tone="dark" eyebrow={whoFor.eyebrow} title={whoFor.title} />
          </Reveal>
          <RevealGroup className="mt-11 grid grid-cols-1 gap-x-[46px] gap-y-[30px] md:grid-cols-2">
            {whoFor.items.map((it) => (
              <RevealItem key={it.title}>
                <h3 className="font-display text-[22px] font-semibold text-[#F3EDE2]">{it.title}</h3>
                <p className="mt-[9px] text-[14.5px] leading-[1.6] text-[#EDE7D6]/74">{it.body}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      {/* FAQ */}
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

      {/* CTA */}
      <section className="bg-forest-deep py-[88px] text-[#EDE7D6] max-[560px]:py-[60px]">
        <Container>
          <Reveal>
            <Eyebrow tone="dark">{cta.eyebrow}</Eyebrow>
            <h2 className="mt-3.5 font-display text-[clamp(32px,4.4vw,50px)] font-semibold leading-[1.04] tracking-[-0.3px] text-[#F4EFE2]">
              {cta.title}
            </h2>
            <p className="mt-4 max-w-[56ch] text-[17px] leading-[1.6] text-[#C9C0AA]">
              {cta.ledeParts.map((part, i) =>
                typeof part === "string" ? (
                  <span key={i}>{part}</span>
                ) : (
                  <a
                    key={i}
                    href={part.href}
                    className="border-b border-gold-bright/50 text-gold-bright transition-colors hover:border-gold-bright"
                  >
                    {part.text}
                  </a>
                ),
              )}
            </p>
            <div className="mt-7">
              <Button href={cta.button.href} variant="cream" className="px-[30px] py-4 text-[16px]">
                {cta.button.label}
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
