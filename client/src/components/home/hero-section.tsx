import { Link } from "wouter";
import FadiaHeroImage from "../../assets/Fadia-15.jpg";

export function HeroSection() {
  return (
    <section className="relative">
      <div className="bg-cover bg-center h-[20vh] flex items-center justify-center" 
           style={{
             backgroundImage: `url(${FadiaHeroImage})`,
             backgroundPosition: "center"
           }}>
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        
        <div className="relative text-center px-4 sm:px-6 lg:px-8 mx-auto" style={{ maxWidth: "160px" }}>
          <h1 className="text-2xl md:text-3xl font-playfair font-bold text-white leading-tight mb-3">
            Movement to Feel Good
          </h1>
          
          <Link
            href="/classes"
            className="inline-block bg-white text-teal font-medium py-2 px-6 text-sm hover:bg-opacity-90 transition duration-300"
          >
            Start Now For Free
          </Link>
        </div>
      </div>
      
      <div className="py-8 text-center">
        <div className="max-w-xs mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-gray-900 mb-4">
            Welcome to Pilates with Fadia
          </h2>
          <p className="text-lg text-gray-600">
            where progress feels natural and consistency is effortless
          </p>
        </div>
      </div>
    </section>
  );
}
