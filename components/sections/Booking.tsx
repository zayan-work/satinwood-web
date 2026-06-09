import { Container } from "@/components/primitives/Container";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { Reveal } from "@/components/primitives/Reveal";
import { WoodGrain } from "@/components/primitives/WoodGrain";
import { SectionCurve } from "@/components/primitives/SectionCurve";
import { BookingEmbed } from "./BookingEmbed";
import { booking } from "@/lib/content";

export function Booking() {
  return (
    <section
      id="cta"
      className="relative overflow-hidden bg-forest-deep pb-[clamp(72px,9vw,104px)] pt-[clamp(96px,12vw,150px)] text-[#EDE7D6]"
    >
      <WoodGrain theme="dark" id="booking" className="opacity-70" />
      {/* The Ceylon heartwood swells up from the close. */}
      <SectionCurve position="top" fill="var(--paper)" variant="swell" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 items-start gap-[clamp(48px,5vw,80px)] lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <Eyebrow tone="dark">{booking.eyebrow}</Eyebrow>
              <h2 className="mt-4 font-display text-[clamp(34px,4.6vw,56px)] font-semibold leading-[1.03] text-[#F4EFE2]">
                Build a finance team{" "}
                <em className="italic text-gold-bright">crafted in Ceylon.</em>
              </h2>
              <p className="mt-5 max-w-[44ch] text-[clamp(15px,1.1vw,17px)] leading-[1.6] text-[#C5BCA6]">
                Tell us the seat you need. We will come back with a hand-selected senior
                match.
              </p>
              <ul className="mt-7 flex flex-col gap-3.5">
                {booking.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-3 text-[14.5px] leading-[1.5] text-[#D8D0BB]"
                  >
                    <span className="mt-[7px] h-1.5 w-1.5 flex-none rounded-full bg-gold-bright shadow-[0_0_0_4px_rgba(194,162,78,0.12)]" />
                    {b}
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-[14px] leading-[1.9] text-[#C5BCA6]">
                Pick a time that suits you, or email{" "}
                <a
                  href={`mailto:${booking.email}`}
                  className="border-b border-gold-bright/40 text-gold-bright transition-colors hover:border-gold-bright"
                >
                  {booking.email}
                </a>
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <BookingEmbed />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
