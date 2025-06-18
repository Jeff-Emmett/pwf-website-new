import { useEffect } from "react";

export function PhotoGallery() {
  useEffect(() => {
    // Load Curator.io script
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.charset = "UTF-8";
    script.src = "https://cdn.curator.io/published/1964cded-8962-41c1-b7c1-d36f02707c7a.js";
    
    // Insert script before the closing body tag
    document.body.appendChild(script);
    
    // Cleanup function to remove script when component unmounts
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-rose mb-4">
            Follow My Journey
          </h2>
        </div>
        
        <div className="flex justify-center">
          <div className="w-full max-w-4xl">
            {/* Curator.io Instagram Feed */}
            <div id="curator-feed-default-feed-layout">
              <a href="https://curator.io" target="_blank" className="crt-logo crt-tag">Powered by Curator.io</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}