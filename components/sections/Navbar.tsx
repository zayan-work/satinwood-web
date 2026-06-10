"use client";

import { useEffect, useState } from "react";
import { Container } from "@/components/primitives/Container";
import { Button } from "@/components/primitives/Button";
import { Wordmark } from "@/components/primitives/Wordmark";
import { cn } from "@/lib/cn";
import { nav } from "@/lib/content";

type NavLink = { label: string; href: string };

/**
 * Sticky site header. Defaults to the home-page anchor nav; sub-pages pass their
 * own absolute `links`/`cta` and a `homeHref` so the wordmark returns home.
 */
export function Navbar({
  links = nav.links,
  cta = nav.cta,
  homeHref = "#top",
}: {
  links?: readonly NavLink[];
  cta?: NavLink;
  homeHref?: string;
} = {}) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-[60] border-t-2 border-t-gold-bright border-b backdrop-blur-[10px] transition-all duration-300 motion-reduce:transition-none",
        scrolled
          ? "border-b-hairline bg-cream/95 shadow-[0_8px_30px_rgba(28,27,22,0.07)]"
          : "border-b-hairline bg-cream/85",
      )}
    >
      <Container
        className={cn(
          "flex items-center justify-between transition-all duration-300",
          scrolled ? "h-[64px]" : "h-[74px]",
        )}
      >
        <a href={homeHref} aria-label="Satinwood home" className="flex items-center">
          <Wordmark variant="header" />
        </a>
        <nav className="hidden items-center gap-9 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative text-[12px] font-semibold uppercase tracking-[1.3px] text-ink transition-colors hover:text-gold"
            >
              {link.label}
              <span className="absolute -bottom-[7px] left-0 h-[1.5px] w-full origin-left scale-x-0 bg-gold transition-transform duration-200 group-hover:scale-x-100 motion-reduce:transition-none" />
            </a>
          ))}
        </nav>
        <Button
          href={cta.href}
          variant="primary"
          className="px-5 py-2.5 text-[14px] md:px-6 md:py-3.5 md:text-[15px]"
        >
          {cta.label}
        </Button>
      </Container>
    </header>
  );
}
