import { Link } from "wouter";
import FadiaHeroImage from "../../assets/Fadia-15.jpg";

export function HeroSection() {
  return (
    <section className="relative bg-transparent">
      <div className="relative bg-cover bg-center h-[90vh] flex items-center justify-center bg-transparent" 
           style={{
             backgroundImage: `url(${FadiaHeroImage})`,
             backgroundPosition: "center",
             backgroundColor: "transparent"
           }}>
        <div className="absolute inset-0 bg-black bg-opacity-20 z-10"></div>
        
        <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-white leading-tight mb-48">
            Feel at Home in your Body
          </h1>
          
          <a
            href="https://pilateswithfadia.setmore.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white font-bold py-6 px-20 rounded-full hover:bg-opacity-90 transition duration-300 text-xl bg-[#916398]"
            style={{ 
              boxShadow: "0 6px 10px rgba(0, 0, 0, 0.25), 0 3px 6px rgba(0, 0, 0, 0.12)", 
              textShadow: "0 1px 3px rgba(0, 0, 0, 0.15)",
              transform: "translateY(-2px)"
            }}
          >
            Book a Class
          </a>
        </div>
      </div>
      <div className="py-8 text-center bg-[#7ebdc5] text-[#ffffff]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg md:text-xl text-[#ffffff] font-bold">
            Online pilates classes to help you feel stronger and more connected to your body and breath
          </p>
        </div>
      </div>
    </section>
  );
}
