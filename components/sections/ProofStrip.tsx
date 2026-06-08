import { Container } from "@/components/primitives/Container";
import { Reveal } from "@/components/primitives/Reveal";
import { proofStrip } from "@/lib/content";

export function ProofStrip() {
  return (
    <div className="border-y border-hairline bg-paper">
      <Container>
        <Reveal>
          <div className="flex flex-wrap items-center justify-between gap-x-[30px] gap-y-4 py-6">
            {proofStrip.map((item) => (
              <div key={item} className="flex items-center gap-2.5 text-[14px] text-grey">
                <span className="text-gold">◆</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </div>
  );
}
