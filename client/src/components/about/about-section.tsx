import { Link } from "wouter";
import { ArabicDecoration } from "@/components/ui/arabic-decoration";
import { SectionDivider, SectionDividerBottom, CrescentDivider } from "@/components/ui/section-divider";
import { ArabesquePattern } from "@/components/ui/section-divider";

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
    <section className="relative overflow-hidden">
      <SectionDivider color="purple" />
      
      <div className="relative py-20 purple-light-bg">
        <ArabesquePattern color="purple" opacity={15} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-800 relative inline-block">
              <span className="relative z-10">About Fadia</span>
              <div className="absolute -bottom-3 left-0 w-full h-1 bg-purple opacity-30"></div>
            </h2>
            <CrescentDivider color="purple" className="mt-4" />
            <p className="mt-6 max-w-3xl mx-auto text-gray-600 font-raleway">
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
                <h3 className="text-2xl font-playfair font-semibold text-purple mb-4">Meet Fadia</h3>
                <p className="text-gray-600 mb-4">
                  Fadia is a former lawyer, community builder, and agile mover with a deep belief in the power of people—and movement—to create change. Her journey weaves between Cairo, Egypt, and Berlin, Germany, where she now teaches movement both online and in-person.
                </p>
                <p className="text-gray-600 mb-4">
                  After years of seeking healing and emotional release through movement, Fadia's path led her from home yoga classes to dance, martial arts, and ultimately, Pilates. What began as a suggestion from a dance teacher soon turned into a life-changing passion.
                </p>
                <p className="text-gray-600 mb-4">
                  She trained in classical Pilates with a program aligned with the German Pilates Association and now teaches both mat and equipment Pilates—including the Reformer, Cadillac, Wunda Chair, and Spine Corrector.
                </p>
                <p className="text-gray-600 mb-4">
                  In every class, her goal is the same: to help people reconnect with their bodies, move with intention, and build deep, functional strength.
                </p>
                
                <h3 className="text-2xl font-playfair font-semibold text-purple mb-4 mt-8">My Story</h3>
                <h4 className="text-xl font-playfair text-purple-dark mb-3">From Healing to Empowerment</h4>
                <p className="text-gray-600 mb-4">
                  I came to movement as a way to feel better in my body and begin healing emotions I hadn't yet processed. What started with yoga at home slowly became something more—a pathway to connection and transformation.
                </p>
                <p className="text-gray-600 mb-4">
                  During a two-year dance program in Berlin, I was introduced to Pilates. My first class? A bit confusing. The simplicity and focused cueing felt foreign. But by the second class, something clicked. Within a month, I was sold—both on the method and the way it made me feel.
                </p>
                <p className="text-gray-600 mb-4">
                  Pilates became my anchor. It grounded me in my body, gave me strength, and helped me move with more confidence and clarity—on the mat, and in life.
                </p>
                
                <h3 className="text-2xl font-playfair font-semibold text-purple mb-4 mt-8">My Philosophy</h3>
                <p className="text-gray-600 mb-4">
                  I believe movement is a game changer—not just physically, but mentally and emotionally. My personal journey includes martial arts like Capoeira and Parkour, in addition to Pilates and dance. This rich background taught me that movement isn't just about exercise—it's about agency, healing, and joy.
                </p>
                <p className="text-gray-600 mb-4">
                  Movement reminds us of our power. It helps us live with more awareness, vitality, and self-trust.
                </p>
                
                <div className="mt-6 bg-white/50 p-6 rounded-lg shadow-sm">
                  <p className="font-medium text-gray-800 mb-2">In my classes, you'll:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-purple font-bold mr-2">✔</span>
                      <span>Move mindfully and with intention</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple font-bold mr-2">✔</span>
                      <span>Build strength from the inside out</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple font-bold mr-2">✔</span>
                      <span>Learn to breathe, connect, and listen to your body</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple font-bold mr-2">✔</span>
                      <span>Be supported—no matter your age or level</span>
                    </li>
                  </ul>
                </div>
                
                <div className="mt-8">
                  <Link href="/contact">
                    <span className="inline-block bg-purple text-white font-medium py-3 px-6 rounded-full hover:bg-opacity-90 transition duration-300">
                      Connect with Me
                    </span>
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
      </div>
      
      <SectionDividerBottom color="purple" />
    </section>
  );
}