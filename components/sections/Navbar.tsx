"use client";

import { useEffect, useState } from "react";
import { Container } from "@/components/primitives/Container";
import { Button } from "@/components/primitives/Button";
import { Wordmark } from "@/components/primitives/Wordmark";
import { cn } from "@/lib/cn";
import { nav } from "@/lib/content";

export function Navbar() {
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
        "sticky top-0 z-[60] border-b backdrop-blur-[12px] transition-all duration-300 motion-reduce:transition-none",
        scrolled
          ? "border-hairline bg-cream/95 shadow-[0_8px_30px_rgba(28,27,22,0.07)]"
          : "border-transparent bg-cream/80",
      )}
    >
      <Container
        className={cn(
          "flex items-center justify-between transition-all duration-300",
          scrolled ? "h-[68px]" : "h-20",
        )}
      >
        <a href="#top" aria-label="Satinwood home" className="flex items-center">
          <Wordmark variant="header" />
        </a>
        <nav className="hidden items-center gap-9 md:flex">
          {nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative text-[15px] text-ink transition-colors hover:text-gold"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-gold transition-transform duration-300 group-hover:scale-x-100 motion-reduce:transition-none" />
            </a>
          ))}
        </nav>
        <Button
          href={nav.cta.href}
          variant="primary"
          className="px-5 py-2.5 text-[14px] md:px-6 md:py-3.5 md:text-[15px]"
        >
          {nav.cta.label}
        </Button>
      </Container>
    </header>
  );
}
