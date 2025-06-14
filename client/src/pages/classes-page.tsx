import { ClassesSection } from "@/components/classes/classes-section";
import { TestimonialsSection } from "@/components/testimonials/testimonials-section";
import { PhotoGallery } from "@/components/photo-gallery";
import { useEffect } from "react";

export default function ClassesPage() {
  // Set meta data for SEO
  useEffect(() => {
    document.title = "Classes | Pilates with Fadia";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Book Pilates classes with Fadia. Choose from Mat Pilates, Reformer sessions, or personalized private training.");
    }
  }, []);

  return (
    <main>
      <div className="pt-10"></div>
      <ClassesSection />
      <TestimonialsSection />
      <PhotoGallery />
    </main>
  );
}
