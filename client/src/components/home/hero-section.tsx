import { Link } from "wouter";
import { IslamicPattern, ArabesquePattern, SectionDividerBottom } from "@/components/ui/section-divider";

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden teal-light-bg py-16 md:py-24">
      <ArabesquePattern color="teal" opacity={15} />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
          <div className="relative">
            <span className="absolute -left-4 -top-4 text-4xl text-teal opacity-20 font-aref">بسم الله</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-gray-800 leading-tight">
            Find Balance, Strength & Inner Peace
          </h1>
          
          <div className="flex items-center my-6">
            <div className="h-px w-8 bg-teal opacity-30"></div>
            <div className="w-16 h-1 mx-2 bg-teal"></div>
            <div className="h-px flex-grow bg-teal opacity-30"></div>
          </div>
          
          <p className="text-lg text-gray-600 font-raleway mb-8">
            Transform your body and mind through the art of Pilates. Join our serene studio for personalized sessions that promote harmony, flexibility, and strength.
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              href="/classes"
              className="bg-teal hover:bg-opacity-90 text-white font-medium py-3 px-6 rounded-full transition duration-300 text-center"
            >
              Book a Class
            </Link>
            <Link
              href="/about"
              className="bg-purple hover:bg-opacity-90 text-white font-medium py-3 px-6 rounded-full transition duration-300 text-center"
            >
              About Fadia
            </Link>
          </div>
        </div>
        
        <div className="md:w-1/2 relative">
          <div className="absolute -bottom-4 -right-4 w-full h-full border-4 border-teal border-opacity-10 rounded-lg"></div>
          <div className="relative overflow-hidden rounded-lg shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Woman practicing pilates in a bright, airy studio" 
              className="w-full h-auto"
            />
            <div className="absolute inset-0 border-[12px] border-white border-opacity-20 rounded-lg"></div>
          </div>
        </div>
      </div>
      
      <div className="mt-12">
        <SectionDividerBottom color="teal" />
      </div>
    </section>
  );
}
