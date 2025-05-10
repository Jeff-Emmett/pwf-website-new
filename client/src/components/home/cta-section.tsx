import { Link } from "wouter";

export function CTASection() {
  return (
    <section className="py-20 text-white" style={{ backgroundColor: '#9D5E9B' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-6">
          Ready to feel stronger, more connected, and at home in your body?
        </h2>
        
        <p className="text-xl text-white text-opacity-90 font-raleway mb-10 max-w-3xl mx-auto">
          Start with your breath. Start today.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <Link
            href="/classes"
            className="bg-white text-purple font-medium py-3 px-10 hover:bg-opacity-90 transition duration-300"
          >
            Join a Class
          </Link>
          <Link
            href="/contact"
            className="bg-transparent border border-white text-white font-medium py-3 px-10 hover:bg-white hover:text-purple transition duration-300"
          >
            Contact Fadia
          </Link>
        </div>
      </div>
    </section>
  );
}