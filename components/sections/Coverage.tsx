import { Container } from "@/components/primitives/Container";
import { RevealGroup, RevealItem } from "@/components/primitives/RevealGroup";
import { coverage, continuity } from "@/lib/content";

/**
 * Pre-booking objection handlers (added in the v2 changes doc): working-hours
 * overlap and the continuity guarantee, as a two-up band. Bracketed figures in
 * the copy are placeholders to confirm in the CMS before publishing.
 */
export function Coverage() {
  const items = [coverage, continuity];
  return (
    <section className="bg-cream py-[88px] max-[560px]:py-[60px]">
      <Container>
        <RevealGroup className="grid grid-cols-1 gap-x-11 gap-y-[42px] md:grid-cols-2">
          {items.map((it) => (
            <RevealItem key={it.eyebrow} className="border-t-2 border-gold pt-5">
              <div className="text-[11px] font-semibold uppercase tracking-[1.5px] text-gold">
                {it.eyebrow}
              </div>
              <h3 className="mt-3 font-display text-[clamp(23px,2.2vw,27px)] font-semibold leading-[1.12] text-ink">
                {it.title}
              </h3>
              <p className="mt-3 text-[15px] leading-[1.62] text-grey">{it.body}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
