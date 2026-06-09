import { Container } from "@/components/primitives/Container";
import { CountUp } from "@/components/primitives/CountUp";
import { RevealGroup, RevealItem } from "@/components/primitives/RevealGroup";
import { WoodGrain } from "@/components/primitives/WoodGrain";
import { SectionCurve } from "@/components/primitives/SectionCurve";
import { stats } from "@/lib/content";

export function Stats() {
  return (
    <section className="relative overflow-hidden bg-forest-deep py-[clamp(72px,9vw,112px)]">
      <WoodGrain theme="dark" id="stats" />
      {/* Curved transitions: paper drapes in from above, paper rises below. */}
      <SectionCurve position="top" fill="var(--paper)" variant="wave" />

      <Container className="relative z-10">
        <RevealGroup className="grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-4">
          {stats.map((s, i) => (
            <RevealItem key={s.label} className="relative">
              {/* Hairline separators between figures on wide screens. */}
              {i !== 0 && (
                <span
                  aria-hidden
                  className="absolute -left-4 top-1 hidden h-[72%] w-px bg-gradient-to-b from-transparent via-gold-bright/30 to-transparent md:block"
                />
              )}
              <div className="tnum font-display text-[clamp(44px,4.4vw,60px)] font-semibold leading-none text-gold-bright">
                <CountUp value={s.value} prefix={s.prefix} suffix={s.suffix} />
              </div>
              <div className="mt-3 text-[13.5px] leading-[1.45] text-[#C5BCA6]">
                {s.label}
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>

      <SectionCurve position="bottom" fill="var(--paper)" variant="wave" />
    </section>
  );
}
