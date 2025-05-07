import { Link } from "wouter";
import { ArabicDecoration } from "@/components/ui/arabic-decoration";

export function AboutSection() {
  const certifications = [
    {
      title: "Certified Instructor",
      description: "Comprehensive Pilates Certification",
      icon: "fa-certificate",
      color: "teal",
    },
    {
      title: "Advanced Training",
      description: "Specialized in Rehabilitation",
      icon: "fa-graduation-cap",
      color: "purple",
    },
    {
      title: "Wellness Expert",
      description: "Holistic Approach to Health",
      icon: "fa-heartbeat",
      color: "rose",
    },
    {
      title: "10+ Years Experience",
      description: "Guiding Hundreds of Students",
      icon: "fa-users",
      color: "teal",
    },
  ];

  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <ArabicDecoration>
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-800">About Fadia</h2>
          </ArabicDecoration>
          <p className="mt-8 max-w-3xl mx-auto text-gray-600 font-raleway">
            Discover the journey, philosophy, and passion behind Pilates with Fadia.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0">
            <img 
              src="https://images.unsplash.com/photo-1581122584612-713f89daa8eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=900" 
              alt="Pilates instructor demonstrating a pose with elegant form" 
              className="rounded-lg shadow-lg" 
            />
          </div>
          
          <div className="md:w-1/2">
            <div className="prose max-w-none">
              <h3 className="text-2xl font-playfair font-semibold text-teal mb-4">My Pilates Journey</h3>
              <p className="text-gray-600 mb-4">
                With over a decade of experience in the art of Pilates, I have dedicated my life to understanding the profound connection between movement, breath, and wellness. My journey began in 2010 when I discovered how Pilates transformed not only my physical strength but my entire approach to well-being.
              </p>
              
              <h3 className="text-2xl font-playfair font-semibold text-teal mb-4">My Teaching Philosophy</h3>
              <p className="text-gray-600 mb-4">
                I believe that Pilates is more than exercise—it's a path to self-discovery and inner harmony. My teaching combines classical techniques with modern approaches, always honoring the core principles of concentration, control, centering, flow, precision, and breath.
              </p>
              
              <div className="mt-8">
                <p className="italic text-gray-700 border-l-4 border-teal pl-4 py-2 font-aref text-lg">
                  "Movement is medicine for creating change in a person's physical, emotional, and mental states."
                </p>
              </div>
              
              <div className="mt-8">
                <Link href="/contact">
                  <a className="inline-block bg-teal text-white font-medium py-3 px-6 rounded-full hover:bg-opacity-90 transition duration-300">
                    Connect with Me
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className={`w-16 h-16 bg-${cert.color}-light rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <i className={`fas ${cert.icon} text-${cert.color} text-xl`}></i>
                </div>
                <h4 className="font-playfair font-semibold mb-2">{cert.title}</h4>
                <p className="text-sm text-gray-600">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
