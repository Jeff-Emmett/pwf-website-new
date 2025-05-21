import { HeroSection } from "@/components/home/hero-section";

import { AboutSection } from "@/components/about/about-section";
import { ClassesSection } from "@/components/classes/classes-section";
import { CommunitySection } from "@/components/community/community-section";
import { ContactSection } from "@/components/contact/contact-section";
import { CTASection } from "@/components/home/cta-section";
import { useEffect } from "react";

export default function HomePage() {
  // Set meta data for SEO
  useEffect(() => {
    document.title = "Pilates with Fadia | Find Balance, Strength & Inner Peace";
  }, []);

  return (
    <main>
      <HeroSection />
      <ClassesSection />
      <AboutSection />
      <CommunitySection />
      <CTASection />
      <ContactSection />
    </main>
  );
}
