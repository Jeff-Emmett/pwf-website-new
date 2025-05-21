import { Link } from "wouter";
import FadiaHeroImage from "../../assets/Fadia-15.jpg";

export function HeroSection() {
  return (
    <section className="relative">
      <div className="bg-cover bg-center h-[90vh] flex items-center justify-center" 
           style={{
             backgroundImage: `url(${FadiaHeroImage})`,
             backgroundPosition: "center"
           }}>
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        
        <div className="relative text-center px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-white leading-tight mb-8">
            Feel at Home in your Body
          </h1>
          
          <Link
            href="/classes"
            className="inline-block bg-teal text-white font-medium py-3 px-10 rounded-full hover:bg-opacity-90 transition duration-300"
            style={{ 
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2), 0 1px 3px rgba(0, 0, 0, 0.08)", 
              textShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
              transform: "translateY(-1px)"
            }}
          >
            Try a Free Class
          </Link>
        </div>
      </div>
      
      <div className="py-16 text-center" style={{ backgroundColor: "#d7b8d6" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-2xl md:text-3xl font-normal text-gray-900">
            Join Fadia for online pilates classes to help you feel stronger and more connected
          </p>
        </div>
      </div>
    </section>
  );
}
