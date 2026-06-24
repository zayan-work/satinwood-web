import { Container } from "@/components/primitives/Container";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { Reveal } from "@/components/primitives/Reveal";
import { BookingEmbed } from "./BookingEmbed";
import { booking, sections } from "@/lib/content";

export function Booking() {
  return (
    <section
      id="cta"
      className="bg-forest-deep py-[88px] text-[#EDE7D6] max-[560px]:py-[60px]"
    >
      <Container>
        <div className="grid grid-cols-1 items-start gap-[clamp(48px,5vw,58px)] lg:grid-cols-2">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <Eyebrow tone="dark">{booking.eyebrow}</Eyebrow>
              <h2 className="mt-3.5 font-display text-[clamp(30px,4vw,46px)] font-semibold leading-[1.05] text-[#F4EFE2]">
                {sections.booking.headingLead}{" "}
                <em className="italic text-gold-bright">{sections.booking.headingEm}</em>
              </h2>
              <p className="mt-4 max-w-[42ch] text-[16px] leading-[1.6] text-[#C5BCA6]">
                {sections.booking.body}
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
              <p className="mt-[26px] text-[14px] leading-[1.9] text-[#C5BCA6]">
                Prefer email?{" "}
                <a
                  href={`mailto:${booking.email}`}
                  className="border-b border-gold-bright/40 text-gold-bright transition-colors hover:border-gold-bright"
                >
                  {booking.email}
                </a>
              </p>
              <div className="mt-6 border-t border-[#F4EFE2]/16 pt-5 text-[11px] font-semibold uppercase tracking-[1.7px] text-[#9a937f]">
                {booking.cities}
              </div>
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
