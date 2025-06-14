import { AboutSection } from "@/components/about/about-section";
import { TestimonialsSection } from "@/components/testimonials/testimonials-section";
import { PhotoGallery } from "@/components/photo-gallery";
import { useEffect } from "react";

export default function AboutPage() {
  // Set meta data for SEO
  useEffect(() => {
    document.title = "About Fadia | Pilates with Fadia";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Learn about Fadia's journey and philosophy as a dedicated Pilates instructor with over a decade of experience.");
    }
  }, []);

  return (
    <main>
      <div className="pt-10"></div>
      <AboutSection />
      <TestimonialsSection />
      <PhotoGallery />
    </main>
  );
}
