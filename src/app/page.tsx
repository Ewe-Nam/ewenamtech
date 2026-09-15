import HeroSection from "@/components/site/hero";
import WhatWeDoSection from "@/components/site/what-we-do-section";
import SecuritySection from "@/components/site/security-section";
import WorkSection from "@/components/site/work-section";
import WhySection from "@/components/site/why-section";
import AboutSection from "@/components/site/about-section";
import ContactSection from "@/components/site/contact-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhatWeDoSection />
      <SecuritySection />
      <WorkSection />
      <WhySection />
      <AboutSection />
      <ContactSection />
    </>
  );
}
