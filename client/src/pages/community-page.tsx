import { CommunitySection } from "@/components/community/community-section";
import { EnhancedTestimonials } from "@/components/enhanced-testimonials";
import { PhotoGallery } from "@/components/photo-gallery";
import { useEffect } from "react";

export default function CommunityPage() {
  // Set meta data for SEO
  useEffect(() => {
    document.title = "Community | Pilates with Fadia";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Join our supportive Pilates community. Connect with like-minded individuals on your wellness journey.");
    }
  }, []);

  return (
    <main>
      <div className="pt-10"></div>
      <CommunitySection />
      <EnhancedTestimonials />
      <PhotoGallery />
    </main>
  );
}
