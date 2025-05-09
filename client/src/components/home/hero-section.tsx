import { Link } from "wouter";
import { IslamicPattern, ArabesquePattern, SectionDividerBottom } from "@/components/ui/section-divider";

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden bg-teal py-16 md:py-24">
      <ArabesquePattern color="teal" opacity={15} />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
          <div className="relative">
            <span className="absolute -left-4 -top-4 text-4xl text-white opacity-30 font-aref">بسم الله</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-white leading-tight">
            Find Balance, Strength & Inner Peace
          </h1>
          
          <div className="flex items-center my-6">
            <div className="h-px w-8 bg-white opacity-50"></div>
            <div className="w-16 h-1 mx-2 bg-white"></div>
            <div className="h-px flex-grow bg-white opacity-50"></div>
          </div>
          
          <p className="text-lg text-white text-opacity-90 font-raleway mb-8">
            Transform your body and mind through the art of Pilates. Join our serene studio for personalized sessions that promote harmony, flexibility, and strength.
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              href="/classes"
              className="bg-white text-teal font-medium py-3 px-8 rounded-full transition duration-300 text-center hover:bg-opacity-90"
            >
              Book a Class
            </Link>
            <Link
              href="/about"
              className="bg-transparent border-2 border-white text-white font-medium py-3 px-8 rounded-full transition duration-300 text-center hover:bg-white hover:bg-opacity-10"
            >
              About Fadia
            </Link>
          </div>
        </div>
        
        <div className="md:w-1/2 relative">
          <div className="absolute -bottom-4 -right-4 w-full h-full border-4 border-white border-opacity-20 rounded-lg"></div>
          <div className="relative overflow-hidden rounded-lg shadow-xl bg-white">
            <img 
              src="https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Woman practicing pilates in a bright, airy studio" 
              className="w-full h-auto"
            />
            <div className="absolute inset-0 border-[12px] border-white border-opacity-50 rounded-lg"></div>
          </div>
        </div>
      </div>
      
      <div className="mt-12">
        <SectionDividerBottom color="teal" />
      </div>
    </section>
  );
}
