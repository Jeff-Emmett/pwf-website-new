import { HeroSection } from "@/components/home/hero-section";

import { AboutSection } from "@/components/about/about-section";
import { ClassesSection } from "@/components/classes/classes-section";
import { TestimonialsSection } from "@/components/testimonials/testimonials-section";

import { ContactSection } from "@/components/contact/contact-section";
import { CTASection } from "@/components/home/cta-section";
import { useEffect } from "react";

export default function HomePage() {
  // Set meta data for SEO
  useEffect(() => {
    document.title = "Pilates with Fadia - Feel at Home in Your Body";
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Online pilates classes to help you feel stronger and more connected to your body and breath.');
    
    // Add Open Graph tags for better social sharing
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute('content', 'Pilates with Fadia - Feel at Home in Your Body');
    
    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (!ogDescription) {
      ogDescription = document.createElement('meta');
      ogDescription.setAttribute('property', 'og:description');
      document.head.appendChild(ogDescription);
    }
    ogDescription.setAttribute('content', 'Online pilates classes to help you feel stronger and more connected to your body and breath.');
  }, []);

  return (
    <main>
      <HeroSection />
      <ClassesSection />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
      <CTASection />
    </main>
  );
}
