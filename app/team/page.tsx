import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Container } from "@/components/primitives/Container";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { Button } from "@/components/primitives/Button";
import { Reveal } from "@/components/primitives/Reveal";
import { RevealGroup, RevealItem } from "@/components/primitives/RevealGroup";
import { pageNav, team } from "@/lib/content";

export const metadata: Metadata = {
  title: "Team · Satinwood Talent",
  description:
    "Meet the operators behind Satinwood Talent. The people who built the firm have run finance functions and scaled businesses themselves, and hold the Sri Lanka bench to that standard.",
  alternates: { canonical: "/team" },
  openGraph: {
    title: "Team · Satinwood Talent",
    description:
      "The operators behind Satinwood Talent. Built and run by people who have run finance functions and scaled businesses themselves.",
    url: "/team",
    type: "website",
  },
};

export default function TeamPage() {
  return (
    <>
      <Navbar links={pageNav.links} cta={pageNav.cta} homeHref="/" />
      <main className="flex-1">
        {/* Page hero + roster (one band, matching the reference page-hero) */}
        <section className="bg-paper pb-[88px] pt-[64px] max-[560px]:pb-[60px]">
          <Container>
            <Reveal>
              <Eyebrow>{team.eyebrow}</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-3.5 font-display text-[clamp(32px,4.4vw,50px)] font-semibold leading-[1.04] tracking-[-0.3px] text-ink">
                {team.title}
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-4 max-w-[56ch] text-[17px] leading-[1.6] text-grey">{team.lede}</p>
            </Reveal>

            <RevealGroup className="mt-[50px] flex flex-col">
              {team.members.map((m) => (
                <RevealItem
                  key={m.name}
                  className="grid grid-cols-1 items-start gap-[18px] border-t border-hairline py-[42px] last:border-b sm:grid-cols-[200px_1fr] sm:gap-[42px]"
                >
                  <div className="relative aspect-square w-[150px] overflow-hidden rounded-[16px] sm:w-[200px]">
                    <Image
                      src={m.photo}
                      alt={`${m.name}, ${m.role} at Satinwood Talent`}
                      fill
                      sizes="(max-width: 640px) 150px, 200px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h2 className="font-display text-[30px] font-semibold leading-[1.05] text-ink">
                      {m.name}
                    </h2>
                    <div className="mt-2 text-[12.5px] font-semibold uppercase tracking-[1.4px] text-gold">
                      {m.role}
                    </div>
                    <p className="mt-4 max-w-[64ch] text-[15.5px] leading-[1.64] text-grey">
                      {m.bio}
                    </p>
                    {"link" in m && m.link && (
                      <a
                        href={m.link.href}
                        className="group mt-3.5 inline-flex items-center gap-1.5 border-b border-forest/30 pb-0.5 text-[14px] font-semibold text-forest transition-colors hover:border-forest hover:text-forest-deep"
                      >
                        {m.link.label}
                        <ArrowRight
                          aria-hidden
                          className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 motion-reduce:transition-none"
                          strokeWidth={2.2}
                        />
                      </a>
                    )}
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </Container>
        </section>

        {/* Podcast */}
        <section className="bg-forest-deep py-[88px] text-[#EDE7D6] max-[560px]:py-[60px]">
          <Container>
            <Reveal>
              <Eyebrow tone="dark">{team.podcast.eyebrow}</Eyebrow>
              <h2 className="mt-3.5 font-display text-[clamp(32px,4.4vw,50px)] font-semibold leading-[1.04] tracking-[-0.3px] text-[#F4EFE2]">
                {team.podcast.title}
              </h2>
              <p className="mt-4 max-w-[56ch] text-[17px] leading-[1.6] text-[#C9C0AA]">
                {team.podcast.body}{" "}
                <a
                  href={team.podcast.cta.href}
                  className="group inline-flex items-center gap-1 border-b border-gold-bright/40 text-gold-bright transition-colors hover:border-gold-bright"
                >
                  {team.podcast.cta.label}
                  <ArrowUpRight
                    aria-hidden
                    className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none"
                    strokeWidth={2}
                  />
                </a>
              </p>
            </Reveal>
          </Container>
        </section>

        {/* Work with us */}
        <section className="bg-paper py-[88px] max-[560px]:py-[60px]">
          <Container>
            <Reveal>
              <SectionHeading eyebrow={team.cta.eyebrow} title={team.cta.title} lede={team.cta.body} />
            </Reveal>
            <Reveal delay={0.08} className="mt-[26px]">
              <Button href={team.cta.button.href} variant="primary">
                {team.cta.button.label}
              </Button>
            </Reveal>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
