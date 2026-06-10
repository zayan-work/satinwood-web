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

const SITE = "https://www.satinwood.co";
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
      name: "Satinwood",
      url: `${SITE}/`,
      logo: `${SITE}/logo.png`,
      email: "hello@satinwood.co",
      description:
        "Satinwood is a senior finance talent firm that embeds finance operators from Sri Lanka full-time, exclusively, and dedicated in growing companies in the United States, Canada, the United Kingdom, the United Arab Emirates, and Australia. Satinwood places controller, FP&A, accounting manager, and senior accountant level talent, for a fraction of a local hire. It is not a staffing marketplace or a bookkeeping provider.",
      foundingLocation: { "@type": "Place", name: "Sri Lanka" },
      parentOrganization: { "@type": "Organization", name: "MAC Holdings" },
      contactPoint: { "@type": "ContactPoint", email: "hello@satinwood.co", contactType: "sales" },
    },
    {
      "@type": "ProfessionalService",
      "@id": `${SITE}/#business`,
      name: "Satinwood",
      url: `${SITE}/`,
      image: `${SITE}/og-image.png`,
      parentOrganization: { "@id": `${SITE}/#organization` },
      description:
        "Satinwood embeds senior finance operators from Sri Lanka full-time, exclusively, and dedicated in growing companies. It places controller, FP&A, accounting manager, and senior accountant level talent, for a fraction of a local hire.",
      serviceType: "Outsourced finance and accounting",
      areaServed,
    },
    {
      "@type": "WebSite",
      "@id": `${SITE}/#website`,
      url: `${SITE}/`,
      name: "Satinwood",
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
        "Satinwood embeds a senior finance operator from Sri Lanka full-time and exclusively in your business to own the close, reporting, and controls, for a fraction of building the same seat at home.",
      areaServed,
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
      <Navbar />
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
