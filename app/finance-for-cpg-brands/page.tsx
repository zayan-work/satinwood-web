import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { ServicePage } from "@/components/sections/ServicePage";
import { pageNav, servicePages } from "@/lib/content";
import { serviceJsonLd } from "@/lib/serviceSchema";

const data = servicePages["finance-for-cpg-brands"];

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
  alternates: { canonical: "/finance-for-cpg-brands" },
  openGraph: {
    title: data.metaTitle,
    description: data.metaDescription,
    url: "/finance-for-cpg-brands",
    type: "website",
  },
};

export default function FinanceForCpgBrandsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd("finance-for-cpg-brands")) }}
      />
      <Navbar links={pageNav.links} cta={pageNav.cta} homeHref="/" />
      <main className="flex-1">
        <ServicePage data={data} />
      </main>
      <Footer />
    </>
  );
}
