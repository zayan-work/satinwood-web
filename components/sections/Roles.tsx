import { Container } from "@/components/primitives/Container";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { Reveal } from "@/components/primitives/Reveal";
import { RevealGroup, RevealItem } from "@/components/primitives/RevealGroup";
import { roles } from "@/lib/content";

export function Roles() {
  return (
    <section className="bg-paper py-[clamp(80px,10vw,132px)]">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Finance roles we place"
            title="The seat you need, owned end to end."
          />
        </Reveal>
        <RevealGroup className="mt-[clamp(40px,5vw,60px)] grid grid-cols-1 gap-[clamp(16px,1.6vw,24px)] sm:grid-cols-2 lg:grid-cols-4">
          {roles.map((r, i) => (
            <RevealItem
              key={r.name}
              className="group relative overflow-hidden rounded-[16px] border border-hairline bg-white p-[clamp(22px,1.8vw,28px)] transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-tint-edge hover:shadow-[0_22px_44px_rgba(28,27,22,0.09)] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
            >
              {/* Heartwood wash blooms from the corner on hover. */}
              <span className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[radial-gradient(circle,rgba(194,162,78,0.16),transparent_70%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="font-display text-[13px] italic text-gold">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="mt-2 font-display text-[clamp(21px,1.7vw,24px)] font-semibold text-ink">
                {r.name}
              </div>
              <p className="mt-2.5 text-[13.5px] leading-[1.56] text-grey">{r.body}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
