import { ScrollProgress } from "@/components/primitives/ScrollProgress";
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { ProofStrip } from "@/components/sections/ProofStrip";
import { Problem } from "@/components/sections/Problem";
import { Difference } from "@/components/sections/Difference";
import { Roles } from "@/components/sections/Roles";
import { ValueBand } from "@/components/sections/ValueBand";
import { Operators } from "@/components/sections/Operators";
import { CaseStudy } from "@/components/sections/CaseStudy";
import { Stats } from "@/components/sections/Stats";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Craft } from "@/components/sections/Craft";
import { Reassurance } from "@/components/sections/Reassurance";
import { Faq } from "@/components/sections/Faq";
import { Booking } from "@/components/sections/Booking";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ProofStrip />
        <Problem />
        <Difference />
        <Roles />
        <ValueBand />
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
