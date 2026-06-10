import { Container } from "@/components/primitives/Container";
import { Button } from "@/components/primitives/Button";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { GrainOverlay } from "@/components/primitives/GrainOverlay";
import { Reveal } from "@/components/primitives/Reveal";
import { RevealGroup, RevealItem } from "@/components/primitives/RevealGroup";
import { cn } from "@/lib/cn";
import { hero } from "@/lib/content";

const avatarStyles: Record<string, string> = {
  a1: "bg-forest text-cream",
  a2: "bg-tint text-forest",
  a3: "bg-gold text-white",
  a4: "bg-forest-deep text-cream",
};

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-cream pb-[60px] pt-[62px]"
      style={{
        backgroundImage:
          "radial-gradient(120% 90% at 92% 6%, rgba(194,162,78,.12) 0%, rgba(194,162,78,0) 55%)," +
          "radial-gradient(80% 70% at 0% 0%, rgba(44,56,42,.05) 0%, rgba(44,56,42,0) 50%)," +
          "linear-gradient(180deg,var(--cream) 0%, #F4EEE0 100%)",
      }}
    >
      <GrainOverlay tone="dark" />

      <Container className="relative grid grid-cols-1 items-center gap-[54px] md:grid-cols-[1.15fr_0.85fr]">
        <div>
          <Reveal>
            <Eyebrow>{hero.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-[26px] font-display text-[clamp(40px,4.7vw,63px)] font-semibold leading-[1.04] tracking-[-0.5px] text-ink">
              A controller-grade finance team,{" "}
              <em className="italic text-gold">embedded in your business.</em>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-[47ch] text-[18.5px] leading-[1.55] text-grey">
              Satinwood is a senior finance talent firm. We embed finance operators from
              Sri Lanka full-time to own the close, reporting, and controls, for a
              fraction of building the same seat at home.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-[34px] flex flex-wrap items-center gap-3.5">
              <Button href="#cta" variant="primary">
                Build your team
              </Button>
              <Button href="#how" variant="ghost">
                See how it works
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-3.5 text-[13px] text-grey-light">{hero.note}</p>
          </Reveal>
          <Reveal delay={0.25}>
            <div className="mt-7 grid max-w-[440px] grid-cols-2 gap-x-5 gap-y-3 text-[13px] text-grey">
              {hero.trust.map((t) => (
                <span key={t} className="inline-flex items-center gap-2">
                  <span className="h-[5px] w-[5px] rounded-full bg-gold" />
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        {/* The senior bench — a white dossier panel matching the reference. */}
        <Reveal delay={0.08}>
          <aside className="rounded-[18px] border border-hairline bg-white px-6 pb-[18px] pt-1 shadow-[0_22px_56px_rgba(28,27,22,0.08)]">
            <div className="flex items-center justify-between border-b border-hairline py-[18px] pb-3.5">
              <span className="font-display text-[19px] font-semibold tracking-[0.2px] text-ink">
                Your senior bench
              </span>
              <span className="inline-flex items-center gap-2 text-[10.5px] font-semibold uppercase tracking-[0.8px] text-forest">
                <span className="relative flex h-[7px] w-[7px]">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#4a8a5b]/40 motion-reduce:hidden" />
                  <span className="relative inline-flex h-[7px] w-[7px] rounded-full bg-[#4a8a5b] shadow-[0_0_0_3px_rgba(74,138,91,0.16)]" />
                </span>
                Available now
              </span>
            </div>

            <RevealGroup className="flex flex-col">
              {hero.people.map((p) => (
                <RevealItem
                  key={p.initials}
                  className="flex items-center gap-3.5 border-b border-hairline py-[15px] last:border-b-0"
                >
                  <div
                    className={cn(
                      "flex h-[46px] w-[46px] flex-none items-center justify-center rounded-full font-display text-[19px] font-semibold",
                      avatarStyles[p.avatar],
                    )}
                  >
                    {p.initials}
                  </div>
                  <div className="min-w-0">
                    <div className="text-[14.5px] font-semibold leading-tight text-ink">
                      {p.name}
                    </div>
                    <div className="mt-0.5 text-[12.5px] text-grey">{p.role}</div>
                  </div>
                  <span className="ml-auto whitespace-nowrap rounded-full border border-tint-edge px-[9px] py-[3px] text-[10px] font-semibold tracking-[0.5px] text-gold">
                    {p.tag}
                  </span>
                </RevealItem>
              ))}
            </RevealGroup>

            <p className="pt-3.5 text-[12px] italic text-grey-light">
              Hand-selected for your business in about two weeks.
            </p>
          </aside>
        </Reveal>
      </Container>
    </section>
  );
}
