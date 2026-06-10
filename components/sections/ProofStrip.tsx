import { Container } from "@/components/primitives/Container";
import { proofStrip } from "@/lib/content";

/**
 * Static credential strip between bands — a thin row of proof points on a
 * hairline-bordered paper band, matching the reference `.proof-row`.
 */
export function ProofStrip() {
  return (
    <div className="border-y border-hairline bg-paper">
      <Container className="flex flex-wrap items-center justify-between gap-x-[30px] gap-y-3 py-6">
        {proofStrip.map((item) => (
          <div key={item} className="flex items-center gap-2.5 text-[14px] text-grey">
            <span className="text-gold">◆</span>
            {item}
          </div>
        ))}
      </Container>
    </div>
  );
}
