import { ContactSection } from "@/components/contact/contact-section";
import { useEffect } from "react";

export default function ContactPage() {
  // Set meta data for SEO
  useEffect(() => {
    document.title = "Contact | Pilates with Fadia";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Get in touch with Fadia. Send a message, find studio hours, or book a consultation for your Pilates journey.");
    }
  }, []);

  return (
    <main>
      <div className="pt-10"></div>
      <ContactSection />
    </main>
  );
}
