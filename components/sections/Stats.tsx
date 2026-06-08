import { Container } from "@/components/primitives/Container";
import { CountUp } from "@/components/primitives/CountUp";
import { RevealGroup, RevealItem } from "@/components/primitives/RevealGroup";
import { RingsBackground } from "@/components/three/RingsBackground";
import { stats } from "@/lib/content";

export function Stats() {
  return (
    <section className="relative overflow-hidden bg-forest-deep py-14">
      <RingsBackground theme="dark" offsetX={15.0} />
      <Container className="relative z-10">
        <RevealGroup className="grid grid-cols-2 gap-[30px] md:grid-cols-4">
          {stats.map((s) => (
            <RevealItem key={s.label}>
              <div className="font-display text-[44px] font-semibold leading-none text-gold-bright">
                <CountUp value={s.value} prefix={s.prefix} suffix={s.suffix} />
              </div>
              <div className="mt-2.5 text-[13px] leading-[1.45] text-[#C5BCA6]">{s.label}</div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
