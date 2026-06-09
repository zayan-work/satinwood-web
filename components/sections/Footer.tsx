import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/primitives/Container";
import { Wordmark } from "@/components/primitives/Wordmark";
import { WoodGrain } from "@/components/primitives/WoodGrain";
import { booking, footer } from "@/lib/content";

export function Footer() {
  return (
    <footer
      className="relative overflow-hidden border-t border-[#F4EFE2]/12 bg-forest-shadow pb-[clamp(28px,3vw,40px)] pt-[clamp(48px,6vw,76px)] text-[#C5BCA6]"
      style={{ backgroundColor: "var(--forest-shadow)" }}
    >
      <WoodGrain theme="dark" id="footer" animate={false} className="opacity-40" />

      <Container className="relative z-10">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-[34ch]">
            <Wordmark variant="footer" />
            <p className="mt-4 text-[14px] leading-[1.6] text-[#B7AF99]">
              Senior finance teams, embedded in your business. Crafted in Ceylon.
            </p>
            <a
              href={`mailto:${booking.email}`}
              className="group mt-5 inline-flex items-center gap-1.5 text-[14px] font-medium text-gold-bright transition-colors hover:text-satin"
            >
              {booking.email}
              <ArrowUpRight
                className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none"
                strokeWidth={2}
              />
            </a>
          </div>

          <nav className="grid grid-cols-2 gap-x-10 gap-y-3 sm:flex sm:flex-wrap sm:gap-x-8">
            {footer.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[13.5px] text-[#D8D0BB] transition-colors hover:text-gold-bright"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-12 h-px w-full bg-gradient-to-r from-transparent via-[#F4EFE2]/15 to-transparent" />

        <div className="mt-6 flex flex-col gap-2 text-[12px] text-[#9C9786] sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 Satinwood. All rights reserved.</span>
          <span className="inline-flex items-center gap-2 text-[#B7AF99]">
            Crafted in Ceylon
            <span className="text-gold-bright/70">◆</span>
          </span>
        </div>
      </Container>
    </footer>
  );
}
