import { useEffect, useRef } from "react";

export function ContactSection() {
  const formContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Define the Mailchimp form HTML
    const mailchimpFormHTML = `
      <!-- Begin Mailchimp Contact Form -->
      <div id="mc_embed_contact_form" class="bg-gray-50 p-8 rounded-lg shadow-sm">
        <form action="https://us5.list-manage.com/contact-form?u=1d139a47cd1264b937687c37e&form_id=570823f6e3a6f36704ea241f7201c8ac" 
              method="post" 
              id="mc-embedded-contact-form" 
              name="mc-embedded-contact-form" 
              target="_self"
              novalidate>

          <div class="mb-4">
            <label for="FNAME" class="block text-gray-700 font-medium mb-2">Name *</label>
            <input 
              type="text" 
              id="FNAME" 
              name="FNAME" 
              class="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-teal rounded-md" 
              required
            />
          </div>
          
          <div class="mb-4">
            <label for="EMAIL" class="block text-gray-700 font-medium mb-2">Email *</label>
            <input 
              type="email" 
              id="EMAIL" 
              name="EMAIL" 
              class="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-teal rounded-md" 
              required
            />
          </div>
          
          <div class="mb-4">
            <label for="SUBJECT" class="block text-gray-700 font-medium mb-2">Subject</label>
            <input 
              type="text" 
              id="SUBJECT" 
              name="SUBJECT" 
              class="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-teal rounded-md"
            />
          </div>
          
          <div class="mb-4">
            <label for="MMERGE3" class="block text-gray-700 font-medium mb-2">Message *</label>
            <textarea 
              id="MMERGE3" 
              name="MMERGE3" 
              rows="5" 
              class="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-teal rounded-md"
              required
            ></textarea>
          </div>
          
          <!-- Submit button styled to match our site design -->
          <button 
            type="submit" 
            name="submitForm"
            class="w-full px-6 py-3 bg-purple text-white font-bold hover:bg-opacity-90 transition duration-300 rounded-full flex items-center justify-center"
          >
            Send Message
          </button>
        </form>
      </div>
      <!-- End Mailchimp Contact Form -->
    `;

    // Insert the form into the DOM
    if (formContainerRef.current) {
      formContainerRef.current.innerHTML = mailchimpFormHTML;
    }
  }, []);

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-gray-800 mb-4">
            Get In Touch
          </h2>
          <p className="max-w-3xl mx-auto text-gray-600">
            Have a question, or want to schedule a private session? Reach out below.
          </p>
        </div>
        
        <div className="flex justify-center">
          <div className="max-w-xl w-full" ref={formContainerRef}>
            {/* Mailchimp form will be inserted here by the useEffect hook */}
          </div>
        </div>
      </div>
    </section>
  );
}