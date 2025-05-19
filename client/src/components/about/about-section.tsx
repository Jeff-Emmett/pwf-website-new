import { Link } from "wouter";
import FadiaImage from "../../assets/fadia-profile.jpg";

export function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-gray-800 mb-4">
            About Fadia
          </h2>
          <p className="mt-2 max-w-3xl mx-auto text-gray-600">
            Discover the journey, philosophy, and passion behind Pilates with Fadia.
          </p>
        </div>
          
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0">
            <img 
              src={FadiaImage} 
              alt="Fadia teaching a pilates class" 
              className="w-full h-auto" 
            />
          </div>
          
          <div className="md:w-1/2">
            <div className="prose max-w-none">
              <h3 className="text-2xl font-playfair font-semibold text-purple mb-4">Meet Fadia</h3>
              <p className="text-gray-600 mb-4">
                Fadia is a former lawyer, community builder, and agile mover with a deep belief in the power of people—and movement—to create change. Her journey weaves between Cairo, Egypt, and Berlin, Germany, where she now teaches movement both online and in-person.
              </p>
              <p className="text-gray-600 mb-4">
                After years of seeking healing and emotional release through movement, Fadia's path led her from home yoga classes to dance, martial arts, and ultimately, Pilates. What began as a suggestion from a dance teacher soon turned into a life-changing passion.
              </p>
              
              <h3 className="text-2xl font-playfair font-semibold text-purple mb-4 mt-8">My Story</h3>
              <h4 className="text-xl font-playfair text-purple-dark mb-3">From Healing to Empowerment</h4>
              <p className="text-gray-600 mb-4">
                I came to movement as a way to feel better in my body and begin healing emotions I hadn't yet processed. What started with yoga at home slowly became something more—a pathway to connection and transformation.
              </p>
              <p className="text-gray-600 mb-4">
                During a two-year dance program in Berlin, I was introduced to Pilates. My first class? A bit confusing. The simplicity and focused cueing felt foreign. But by the second class, something clicked. Within a month, I was sold—both on the method and the way it made me feel.
              </p>
              
              <div className="mt-8">
                <Link href="/about">
                  <span className="inline-block border border-purple text-purple font-medium py-2 px-6 hover:bg-purple hover:text-white transition duration-300">
                    Learn More About Me
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-white">
            <i className="fas fa-certificate text-purple text-xl mb-3"></i>
            <h4 className="font-playfair font-semibold mb-2">Certified Instructor</h4>
            <p className="text-sm text-gray-600">Comprehensive Pilates Certification</p>
          </div>
          
          <div className="text-center p-6 bg-white">
            <i className="fas fa-graduation-cap text-purple text-xl mb-3"></i>
            <h4 className="font-playfair font-semibold mb-2">Advanced Training</h4>
            <p className="text-sm text-gray-600">Specialized in Rehabilitation</p>
          </div>
          
          <div className="text-center p-6 bg-white">
            <i className="fas fa-heartbeat text-purple text-xl mb-3"></i>
            <h4 className="font-playfair font-semibold mb-2">Wellness Expert</h4>
            <p className="text-sm text-gray-600">Holistic Approach to Health</p>
          </div>
          
          <div className="text-center p-6 bg-white">
            <i className="fas fa-users text-purple text-xl mb-3"></i>
            <h4 className="font-playfair font-semibold mb-2">10+ Years Experience</h4>
            <p className="text-sm text-gray-600">Guiding Hundreds of Students</p>
          </div>
        </div>
      </div>
    </section>
  );
}