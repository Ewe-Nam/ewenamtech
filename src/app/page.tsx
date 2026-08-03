import HeroSection from "@/components/ui/glassmorphism-trust-hero";
import WhatWeDoSection from "@/components/site/what-we-do-section";
import ServicesSection from "@/components/site/services-section";
import WorkSection from "@/components/site/work-section";
import ContactSection from "@/components/site/contact-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhatWeDoSection />
      <ServicesSection />
      <WorkSection />
      <ContactSection />
    </>
  );
}
