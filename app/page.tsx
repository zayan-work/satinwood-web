import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { ProofStrip } from "@/components/sections/ProofStrip";
import { Problem } from "@/components/sections/Problem";
import { Difference } from "@/components/sections/Difference";
import { Roles } from "@/components/sections/Roles";
import { ValueBand } from "@/components/sections/ValueBand";
import { Comparison } from "@/components/sections/Comparison";
import { Operators } from "@/components/sections/Operators";
import { CaseStudy } from "@/components/sections/CaseStudy";
import { Stats } from "@/components/sections/Stats";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Craft } from "@/components/sections/Craft";
import { Reassurance } from "@/components/sections/Reassurance";
import { Faq } from "@/components/sections/Faq";
import { Booking } from "@/components/sections/Booking";
import { Footer } from "@/components/sections/Footer";
import { faqs } from "@/lib/content";

const SITE = "https://www.satinwoodtalent.com";
const COUNTRIES = ["United States", "Canada", "United Kingdom", "United Arab Emirates", "Australia"];
const areaServed = COUNTRIES.map((name) => ({ "@type": "Country", name }));

// Entity + service + FAQ structured data. The FAQ node is generated from the
// visible FAQ copy so the markup always mirrors the page (Rich Results safe).
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE}/#organization`,
      name: "Satinwood Talent",
      url: `${SITE}/`,
      logo: `${SITE}/logo.png`,
      email: "hello@satinwoodtalent.com",
      description:
        "Satinwood Talent is a senior finance talent firm that embeds finance operators from Sri Lanka full-time, exclusively, and dedicated in growing companies in the United States, Canada, the United Kingdom, the United Arab Emirates, and Australia. Satinwood Talent places controller, FP&A, accounting manager, and senior accountant level talent, for a fraction of a local hire. It is not a staffing marketplace or a bookkeeping provider.",
      foundingLocation: { "@type": "Place", name: "Sri Lanka" },
      parentOrganization: { "@type": "Organization", name: "MAC Holdings" },
      contactPoint: { "@type": "ContactPoint", email: "hello@satinwoodtalent.com", contactType: "sales" },
    },
    {
      "@type": "ProfessionalService",
      "@id": `${SITE}/#business`,
      name: "Satinwood Talent",
      url: `${SITE}/`,
      image: `${SITE}/opengraph-image`,
      parentOrganization: { "@id": `${SITE}/#organization` },
      description:
        "Satinwood Talent embeds senior finance operators from Sri Lanka full-time, exclusively, and dedicated in growing companies. It places controller, FP&A, accounting manager, and senior accountant level talent, for a fraction of a local hire.",
      // `serviceType` is only valid on schema.org/Service, not on a
      // ProfessionalService (a LocalBusiness). Express the focus with
      // `knowsAbout` instead; the dedicated Service node below carries serviceType.
      knowsAbout: [
        "Outsourced controller",
        "Outsourced FP&A",
        "Outsourced accounting manager",
        "Senior accountant",
        "Month-end close",
        "Financial controls",
      ],
      areaServed,
    },
    {
      "@type": "WebSite",
      "@id": `${SITE}/#website`,
      url: `${SITE}/`,
      name: "Satinwood Talent",
      publisher: { "@id": `${SITE}/#organization` },
      inLanguage: "en",
    },
    {
      "@type": "Service",
      "@id": `${SITE}/#service`,
      name: "Embedded senior finance operators from Sri Lanka",
      serviceType: "Outsourced finance and accounting",
      provider: { "@id": `${SITE}/#business` },
      description:
        "Satinwood Talent embeds a senior finance operator from Sri Lanka full-time and exclusively in your business to own the close, reporting, and controls, for a fraction of building the same seat at home.",
      areaServed,
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Finance roles Satinwood Talent places",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Outsourced Controller",
              url: `${SITE}/outsourced-controller`,
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Outsourced FP&A",
              url: `${SITE}/outsourced-fpa`,
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Outsourced Accounting Manager",
              url: `${SITE}/outsourced-accounting-manager`,
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Outsourced Senior Accountant",
              url: `${SITE}/outsourced-senior-accountant`,
            },
          },
        ],
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE}/#faq`,
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar homeHref="/" />
      <main className="flex-1">
        <Hero />
        <ProofStrip />
        <Problem />
        <Difference />
        <Roles />
        <ValueBand />
        <Comparison />
        <Operators />
        <CaseStudy />
        <Stats />
        <HowItWorks />
        <Craft />
        <Reassurance />
        <Faq />
        <Booking />
      </main>
      <Footer />
    </>
  );
}
