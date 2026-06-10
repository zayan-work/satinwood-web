import Link from "next/link";
import { Container } from "@/components/primitives/Container";
import { Wordmark } from "@/components/primitives/Wordmark";
import { footer } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-[#F4EFE2]/12 bg-forest-deep pb-[46px] pt-[30px] text-[#A9A491]">
      <Container>
        <div className="flex flex-wrap items-center justify-between gap-6">
          <Link href="/" aria-label="Satinwood home" className="inline-flex">
            <Wordmark variant="footer" />
          </Link>
          <nav className="flex flex-wrap gap-6">
            {footer.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[13.5px] text-[#C5BCA6] transition-colors hover:text-gold-bright"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="mt-[22px] text-[12px] text-[#8A8676]">{footer.base}</div>
      </Container>
    </footer>
  );
}
