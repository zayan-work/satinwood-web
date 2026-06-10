import { Check } from "lucide-react";
import { Container } from "@/components/primitives/Container";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { Reveal } from "@/components/primitives/Reveal";
import { comparison } from "@/lib/content";

/**
 * "How we compare" — a three-column table with the Satinwood column lifted onto
 * a dark forest panel so it reads as the answer. Scrolls horizontally on small
 * screens rather than squashing, per the design system's wide editorial measure.
 */
export function Comparison() {
  const { eyebrow, title, lede, rows } = comparison;
  const lastIndex = rows.length - 1;

  return (
    <section className="bg-paper py-[clamp(80px,10vw,132px)]">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={eyebrow}
            title={
              <>
                {title.lead}
                <em>{title.em}</em>
              </>
            }
            lede={lede}
          />
        </Reveal>

        <Reveal delay={0.08} className="mt-[clamp(36px,4vw,52px)] -mx-[4%] overflow-x-auto px-[4%] sm:mx-0 sm:px-0">
          <table className="w-full min-w-[600px] border-separate border-spacing-0 text-[14.5px]">
            <caption className="sr-only">
              How Satinwood compares with a local hire and a typical offshore provider
            </caption>
            <thead>
              <tr>
                <th scope="col" className="w-[34%] pb-4 pr-6 text-left" />
                <th
                  scope="col"
                  className="px-5 pb-4 text-center text-[11.5px] font-semibold uppercase tracking-[1.2px] text-grey-light"
                >
                  Local hire
                </th>
                <th
                  scope="col"
                  className="px-5 pb-4 text-center text-[11.5px] font-semibold uppercase tracking-[1.2px] text-grey-light"
                >
                  Typical offshore
                </th>
                <th
                  scope="col"
                  className="rounded-t-[14px] bg-forest-deep px-5 pb-5 pt-5 text-center font-display text-[19px] font-semibold text-gold-bright"
                >
                  Satinwood
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => {
                const isLast = i === lastIndex;
                return (
                  <tr key={row.label}>
                    <th
                      scope="row"
                      className="whitespace-nowrap border-b border-hairline py-[17px] pr-6 text-left font-semibold text-ink"
                    >
                      {row.label}
                    </th>
                    <td className="border-b border-hairline px-5 py-[17px] text-center text-grey">
                      {row.local}
                    </td>
                    <td className="border-b border-hairline px-5 py-[17px] text-center text-grey">
                      {row.offshore}
                    </td>
                    <td
                      className={`bg-forest-deep px-5 py-[17px] text-center font-medium text-[#F4EFE2] ${
                        isLast ? "rounded-b-[14px]" : "border-b border-[#F4EFE2]/12"
                      }`}
                    >
                      <span className="inline-flex items-center justify-center gap-2">
                        <Check
                          aria-hidden
                          className="size-4 flex-none text-gold-bright"
                          strokeWidth={2.4}
                        />
                        {row.satinwood}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Reveal>
      </Container>
    </section>
  );
}
