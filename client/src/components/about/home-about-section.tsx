import { Link } from "wouter";
import FadiaImage from "@assets/Fadia-167-crop.jpg";

export function HomeAboutSection() {
  return (
    <section className="py-20 bg-purple-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img 
              src={FadiaImage} 
              alt="Fadia demonstrating Pilates pose" 
              className="w-full h-auto rounded-md" 
            />
          </div>
          
          <div className="md:w-1/2">
            <div className="prose max-w-none">
              <h3 className="text-3xl font-playfair font-semibold text-purple mb-6 text-center">Meet Fadia</h3>
              <p className="text-gray-600 mb-4">
                Fadia is a certified Pilates instructor, former lawyer, and community builder with a passion for helping people connect with their bodies through mindful movement.
              </p>
              <p className="text-gray-600 mb-4">
                Based between Cairo and Berlin, she brings a unique approach to her teaching, combining precision with playfulness to create classes that build strength, awareness, and joy.
              </p>
              
              <div className="mt-8 text-center">
                <Link href="/about">
                  <span 
                    className="inline-block bg-purple text-white font-bold py-2 px-6 hover:bg-opacity-90 transition duration-300 rounded-full"
                    style={{ 
                      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)", 
                      textShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
                      transform: "translateY(-1px)"
                    }}
                  >
                    Learn More About Me
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}