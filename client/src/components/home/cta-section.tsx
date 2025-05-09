import { Link } from "wouter";
import { SectionDivider, SectionDividerBottom } from "@/components/ui/section-divider";
import { IslamicPattern } from "@/components/ui/section-divider";

export function CTASection() {
  return (
    <section className="relative overflow-hidden">
      <SectionDivider color="purple" />
      
      <div className="relative py-20 bg-purple text-white">
        <IslamicPattern color="purple" opacity={10} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-6">
            Ready to feel stronger, more connected, and at home in your body?
          </h2>
          
          <p className="text-xl text-white text-opacity-90 font-raleway mb-10 max-w-3xl mx-auto">
            Start with your breath. Start today.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link
              href="/classes"
              className="bg-white text-purple font-medium py-3 px-8 rounded-full transition duration-300 text-center hover:bg-opacity-90"
            >
              Join a Class
            </Link>
            <Link
              href="/contact"
              className="bg-transparent border-2 border-white text-white font-medium py-3 px-8 rounded-full transition duration-300 text-center hover:bg-white hover:bg-opacity-10"
            >
              Contact Fadia
            </Link>
          </div>
        </div>
      </div>
      
      <SectionDividerBottom color="purple" />
    </section>
  );
}