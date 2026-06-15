import { servicePages } from "@/lib/content";

const SITE = "https://www.satinwoodtalent.com";
const COUNTRIES = ["United States", "Canada", "United Kingdom", "United Arab Emirates", "Australia"];

/**
 * Structured data for a service landing page: a Service node (provider points at
 * the homepage business entity), the page FAQ as a FAQPage, and a BreadcrumbList.
 * Generated from the same copy the page renders, so markup mirrors the page.
 */
export function serviceJsonLd(slug: keyof typeof servicePages) {
  const p = servicePages[slug];
  const url = `${SITE}/${slug}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: p.serviceName,
        serviceType: p.serviceType,
        url,
        provider: { "@id": `${SITE}/#business` },
        areaServed: COUNTRIES.map((name) => ({ "@type": "Country", name })),
        description: p.metaDescription,
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: p.faq.items.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
          { "@type": "ListItem", position: 2, name: p.breadcrumb, item: url },
        ],
      },
    ],
  };
}
