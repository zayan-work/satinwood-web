import { Container } from "@/components/primitives/Container";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { Reveal } from "@/components/primitives/Reveal";
import { RingsBackground } from "@/components/three/RingsBackground";
import { BookingEmbed } from "./BookingEmbed";
import { booking } from "@/lib/content";

export function Booking() {
  return (
    <section
      id="cta"
      className="relative overflow-hidden bg-forest-deep py-[88px] text-[#EDE7D6]"
    >
      <div className="absolute inset-2 mt-18 pt-8">
        <RingsBackground theme="dark" offsetX={-2.4} className="opacity-50" />
      </div>
      <Container className="relative z-10">
        <div className="grid grid-cols-1 items-start gap-[54px] lg:grid-cols-2">
          <Reveal>
            <div>
              <Eyebrow tone="dark">{booking.eyebrow}</Eyebrow>
              <h2 className="mt-3.5 font-display text-[clamp(30px,4vw,46px)] font-semibold leading-[1.05] text-[#F4EFE2]">
                Build a finance team <em className="italic text-gold-bright">crafted in Ceylon.</em>
              </h2>
              <p className="mt-4 max-w-[42ch] text-[16px] text-[#C5BCA6]">
                Tell us the seat you need. We will come back with a hand-selected senior match.
              </p>
              <ul className="mt-6 flex flex-col gap-3">
                {booking.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-[14.5px] text-[#D8D0BB]">
                    <span className="mt-[7px] h-1.5 w-1.5 flex-none rounded-full bg-gold-bright" />
                    {b}
                  </li>
                ))}
              </ul>
              <p className="mt-[26px] text-[14px] leading-[1.9] text-[#C5BCA6]">
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
