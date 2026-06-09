"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";
import { Container } from "@/components/primitives/Container";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { Reveal } from "@/components/primitives/Reveal";
import { faqs } from "@/lib/content";

export function Faq() {
  return (
    <section className="bg-paper py-[clamp(80px,10vw,132px)]">
      <Container>
        <div className="grid grid-cols-1 gap-[clamp(32px,4vw,72px)] lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <div className="lg:sticky lg:top-28 lg:self-start">
              <SectionHeading eyebrow="Questions" title="The things finance leaders ask first." />
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <Accordion.Root type="single" collapsible className="w-full">
              {faqs.map((item, i) => (
                <Accordion.Item
                  key={i}
                  value={`item-${i}`}
                  className="border-b border-hairline first:border-t"
                >
                  <Accordion.Header>
                    <Accordion.Trigger className="group flex w-full items-center justify-between gap-5 py-[clamp(20px,1.8vw,26px)] text-left font-display text-[clamp(19px,1.7vw,24px)] font-semibold text-ink transition-colors hover:text-gold">
                      {item.q}
                      <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full border border-hairline transition-colors duration-300 group-hover:border-gold group-data-[state=open]:border-gold group-data-[state=open]:bg-gold">
                        <Plus
                          className="size-[18px] text-gold transition-transform duration-300 group-data-[state=open]:rotate-45 group-data-[state=open]:text-white motion-reduce:transition-none"
                          strokeWidth={1.8}
                        />
                      </span>
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content className="overflow-hidden data-[state=closed]:animate-faq-up data-[state=open]:animate-faq-down">
                    <p className="max-w-[72ch] pb-[clamp(20px,1.8vw,26px)] text-[clamp(14px,1.1vw,15.5px)] leading-[1.65] text-grey">
                      {item.a}
                    </p>
                  </Accordion.Content>
                </Accordion.Item>
              ))}
            </Accordion.Root>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
