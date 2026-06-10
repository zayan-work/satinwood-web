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
import { WoodGrain } from "@/components/primitives/WoodGrain";
import { SectionCurve } from "@/components/primitives/SectionCurve";
import { pageNav, team } from "@/lib/content";

export const metadata: Metadata = {
  title: "Team · Satinwood",
  description:
    "Meet the operators behind Satinwood. The people who built the firm have run finance functions and scaled businesses themselves, and hold the Sri Lanka bench to that standard.",
  alternates: { canonical: "/team" },
  openGraph: {
    title: "Team · Satinwood",
    description:
      "The operators behind Satinwood. Built and run by people who have run finance functions and scaled businesses themselves.",
    url: "/team",
    type: "website",
  },
};

export default function TeamPage() {
  return (
    <>
      <Navbar links={pageNav.links} cta={pageNav.cta} homeHref="/" />
      <main className="flex-1">
        {/* Page hero */}
        <section className="relative overflow-hidden bg-paper pb-[clamp(28px,4vw,48px)] pt-[clamp(48px,7vw,88px)]">
          <WoodGrain theme="light" id="team-hero" className="opacity-70" />
          <Container className="relative z-10">
            <Reveal>
              <Eyebrow>{team.eyebrow}</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-4 max-w-[18ch] font-display text-[clamp(36px,5vw,58px)] font-semibold leading-[1.02] tracking-[-0.5px] text-ink">
                {team.title}
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-[58ch] text-[clamp(15.5px,1.2vw,18px)] leading-[1.62] text-grey">
                {team.lede}
              </p>
            </Reveal>
          </Container>
        </section>

        {/* Roster */}
        <section className="bg-paper pb-[clamp(64px,9vw,120px)] pt-[clamp(24px,3vw,40px)]">
          <Container>
            <RevealGroup className="flex flex-col">
              {team.members.map((m) => (
                <RevealItem
                  key={m.name}
                  className="grid grid-cols-1 items-start gap-7 border-t border-hairline py-[clamp(32px,4vw,48px)] last:border-b sm:grid-cols-[180px_1fr] sm:gap-[clamp(28px,4vw,52px)] lg:grid-cols-[200px_1fr]"
                >
                  <div className="relative aspect-square w-[150px] overflow-hidden rounded-[16px] border border-hairline shadow-[0_18px_44px_-22px_rgba(28,27,22,0.4)] sm:w-full">
                    <Image
                      src={m.photo}
                      alt={`${m.name}, ${m.role} at Satinwood`}
                      fill
                      sizes="(max-width: 640px) 150px, 200px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h2 className="font-display text-[clamp(26px,2.6vw,32px)] font-semibold leading-[1.04] text-ink">
                      {m.name}
                    </h2>
                    <div className="mt-2 text-[12.5px] font-semibold uppercase tracking-[1.4px] text-gold">
                      {m.role}
                    </div>
                    <p className="mt-4 max-w-[64ch] text-[clamp(15px,1.1vw,16px)] leading-[1.64] text-grey">
                      {m.bio}
                    </p>
                    {"link" in m && m.link && (
                      <a
                        href={m.link.href}
                        className="group mt-4 inline-flex items-center gap-1.5 border-b border-forest/30 pb-0.5 text-[14px] font-semibold text-forest transition-colors hover:border-forest hover:text-forest-deep"
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
        <section className="relative overflow-hidden bg-forest-deep py-[clamp(72px,9vw,120px)] text-[#EDE7D6]">
          <WoodGrain theme="dark" id="team-podcast" className="opacity-70" />
          <SectionCurve position="top" fill="var(--paper)" variant="wave" />
          <Container className="relative z-10">
            <Reveal>
              <Eyebrow tone="dark">{team.podcast.eyebrow}</Eyebrow>
              <h2 className="mt-4 font-display text-[clamp(32px,4.4vw,52px)] font-semibold leading-[1.03] text-[#F4EFE2]">
                {team.podcast.title}
              </h2>
              <p className="mt-5 max-w-[58ch] text-[clamp(15.5px,1.2vw,18px)] leading-[1.62] text-[#C9C0AA]">
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
          <SectionCurve position="bottom" fill="var(--paper)" variant="wave" />
        </section>

        {/* Work with us */}
        <section className="bg-paper py-[clamp(72px,9vw,120px)]">
          <Container>
            <Reveal>
              <SectionHeading eyebrow={team.cta.eyebrow} title={team.cta.title} lede={team.cta.body} />
            </Reveal>
            <Reveal delay={0.08} className="mt-8">
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
