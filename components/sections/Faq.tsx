"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";
import { Container } from "@/components/primitives/Container";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { Reveal } from "@/components/primitives/Reveal";
import { faqs } from "@/lib/content";

export function Faq() {
  return (
    <section className="bg-paper py-[88px] max-[560px]:py-[60px]">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="Questions" title="The things finance leaders ask first." />
        </Reveal>
        <Reveal delay={0.05}>
          <Accordion.Root type="single" collapsible className="mt-10 max-w-[780px]">
            {faqs.map((item, i) => (
              <Accordion.Item key={i} value={`item-${i}`} className="border-b border-hairline">
                <Accordion.Header>
                  <Accordion.Trigger className="group flex w-full items-center justify-between gap-4 py-[22px] text-left font-display text-[21px] font-semibold text-ink transition-colors hover:text-gold">
                    {item.q}
                    <Plus
                      className="size-[22px] flex-none text-gold transition-transform duration-200 group-data-[state=open]:rotate-45 motion-reduce:transition-none"
                      strokeWidth={1.6}
                    />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden data-[state=closed]:animate-faq-up data-[state=open]:animate-faq-down">
                  <p className="max-w-[68ch] pb-[22px] text-[14.5px] leading-[1.6] text-grey">
                    {item.a}
                  </p>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </Reveal>
      </Container>
    </section>
  );
}
