import { Link } from "wouter";
import FadiaImage from "@assets/Fadia-167-crop_1749865267638.jpg";
import { Testimonial } from "@/components/community/testimonial";

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
              <h3 className="text-2xl font-playfair font-semibold text-purple mb-4">Meet Fadia</h3>
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
        
        {/* Testimonials Section */}
        <div className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-teal-light rounded-lg p-6 shadow-sm transition-transform duration-300 hover:scale-105">
              <Testimonial
                quote="I dropped in at Fadia's Pilates more than two years ago and since then I have tried my utmost not to miss a class. It's not just a workout, it's an amazing vibe created by sweating together, laughing together and pushing the limits together."
                author="Ingrid from Estonia"
                memberSince="2022"
                initials="IE"
                color="teal"
              />
            </div>
            <div className="bg-teal-light rounded-lg p-6 shadow-sm transition-transform duration-300 hover:scale-105">
              <Testimonial
                quote="I've seen incredible improvements in my posture and core strength since joining Fadia's classes. She truly understands how to help each individual."
                author="Ahmed M."
                memberSince="2022"
                initials="AM"
                color="purple"
              />
            </div>
            <div className="bg-teal-light rounded-lg p-6 shadow-sm transition-transform duration-300 hover:scale-105">
              <Testimonial
                quote="The mindful approach to movement has helped my chronic back pain tremendously. I look forward to every class!"
                author="Laila K."
                memberSince="2023"
                initials="LK"
                color="rose"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}