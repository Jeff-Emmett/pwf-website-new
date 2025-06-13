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
            href="/calendar"
            className="inline-block bg-teal text-white font-bold py-3 px-10 rounded-full hover:bg-opacity-90 transition duration-300"
            style={{ 
              boxShadow: "0 6px 10px rgba(0, 0, 0, 0.25), 0 3px 6px rgba(0, 0, 0, 0.12)", 
              textShadow: "0 1px 3px rgba(0, 0, 0, 0.15)",
              transform: "translateY(-2px)"
            }}
          >
            Book a Class
          </Link>
        </div>
      </div>
      
      <div className="py-16 text-center bg-purple">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-2xl md:text-3xl font-normal" style={{ color: "#ffffff" }}>
            Online pilates classes to help you feel stronger and more connected to your body and breath
          </p>
        </div>
      </div>
    </section>
  );
}
