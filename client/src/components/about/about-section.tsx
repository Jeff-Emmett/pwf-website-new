import { Link } from "wouter";
import FadiaImage from "../../assets/Fadia-167-crop.jpg";
import FadiaBridgeImage from "@assets/fadia-bridge3_1749866400701.jpg";
import FadiaStretchImage from "@assets/fadia-stretch_1749866078708.jpg";

export function AboutSection() {
  return (
    <section className="py-20 bg-purple-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0">
            {/* Top image */}
            <div className="mb-6">
              <img 
                src={FadiaBridgeImage} 
                alt="Fadia demonstrating bridge pose in a beautiful studio setting" 
                className="w-full h-auto rounded-md" 
              />
            </div>
            
            {/* Main center image */}
            <div className="mb-6">
              <img 
                src={FadiaImage} 
                alt="Fadia smiling" 
                className="w-full h-auto rounded-md" 
              />
            </div>
            
            {/* Bottom image */}
            <div>
              <img 
                src={FadiaStretchImage} 
                alt="Fadia performing a stretching movement during practice" 
                className="w-full h-auto rounded-md" 
              />
            </div>
          </div>
          
          <div className="md:w-1/2">
            <div className="prose max-w-none">
              <h3 className="text-2xl font-playfair font-semibold text-purple mb-4">My Pilates Story</h3>
              <p className="text-gray-600 mb-4">
                I came to movement as a way to feel good in my body and begin healing emotions I hadn't yet processed. It started simply—with home yoga classes—and slowly turned into something much deeper.
              </p>
              <p className="text-gray-600 mb-4">
                Eventually, I joined a two-year foundational dance program at a dance school in Berlin, where I was first introduced to Pilates. One of my teachers recommended it to help me build strength and develop the kind of body awareness that could support my dancing.
              </p>
              <p className="text-gray-600 mb-4">
                My first Pilates class was... okay. I wasn't sure what to expect, and I was surprised by the minimalist approach and the detailed verbal cueing. But by the second class, something shifted—I was hooked. Within a month, I was completely sold, not just by the method but by the transformation I saw and felt in my own body.
              </p>
              <p className="text-gray-600 mb-4">
                That experience led me to enrol in a comprehensive teacher training program rooted in the classical repertoire and as close as possible to the original method, aligned with the German Pilates Association. Today, I teach both mat and equipment Pilates—including the Reformer, Wunda Chair, Cadillac, and Spine Corrector.
              </p>
              <p className="text-gray-600 mb-4">
                My goal is to help others reconnect with their bodies, build deep, functional strength, and move with more ease and confidence in their daily lives.
              </p>
              <p className="text-gray-600">
                Having had movement as an integral part of my healing and personal development for the past 8 years, I've explored not only Pilates, but also martial arts like Capoeira and Parkour, alongside dance. Through this journey, I came to realize that movement is a powerful game changer—not just for the body, but also on a psychological and neurological level. It transforms us from passive observers into people who feel grounded in their strength and capable of taking agency in different areas of life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}