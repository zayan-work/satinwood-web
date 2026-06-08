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
        "sticky top-0 z-[60] border-b backdrop-blur-[10px] transition-all duration-300 motion-reduce:transition-none",
        scrolled
          ? "border-hairline bg-cream/95 shadow-[0_8px_30px_rgba(28,27,22,0.06)]"
          : "border-hairline/60 bg-cream/85",
      )}
    >
      <Container className="flex h-20 items-center justify-between">
        <a href="#top" aria-label="Satinwood home" className="flex items-center">
          <Wordmark variant="header" />
        </a>
        <nav className="hidden items-center gap-[34px] md:flex">
          {nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[15px] text-ink transition-colors hover:text-gold"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <Button href={nav.cta.href} variant="primary" className="max-md:hidden">
          {nav.cta.label}
        </Button>
      </Container>
    </header>
  );
}
