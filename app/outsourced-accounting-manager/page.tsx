import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { ServicePage } from "@/components/sections/ServicePage";
import { pageNav, servicePages } from "@/lib/content";
import { serviceJsonLd } from "@/lib/serviceSchema";

const data = servicePages["outsourced-accounting-manager"];

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
  alternates: { canonical: "/outsourced-accounting-manager" },
  openGraph: {
    title: data.metaTitle,
    description: data.metaDescription,
    url: "/outsourced-accounting-manager",
    type: "website",
  },
};

export default function OutsourcedAccountingManagerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceJsonLd("outsourced-accounting-manager")),
        }}
      />
      <Navbar links={pageNav.links} cta={pageNav.cta} homeHref="/" />
      <main className="flex-1">
        <ServicePage data={data} />
      </main>
      <Footer />
    </>
  );
}
