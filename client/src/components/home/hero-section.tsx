import { Link } from "wouter";

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="geometric-pattern absolute inset-0 opacity-30"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-gray-800 leading-tight">
            Find Balance, Strength & Inner Peace
          </h1>
          <div className="w-20 h-1 bg-teal my-6"></div>
          <p className="text-lg text-gray-600 font-raleway mb-8">
            Transform your body and mind through the art of Pilates. Join our serene studio for personalized sessions that promote harmony, flexibility, and strength.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/classes">
              <a className="bg-teal hover:bg-opacity-90 text-white font-medium py-3 px-6 rounded-full transition duration-300 text-center">
                Book a Class
              </a>
            </Link>
            <Link href="/about">
              <a className="bg-purple hover:bg-opacity-90 text-white font-medium py-3 px-6 rounded-full transition duration-300 text-center">
                About Fadia
              </a>
            </Link>
          </div>
        </div>
        <div className="md:w-1/2">
          <img 
            src="https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
            alt="Woman practicing pilates in a bright, airy studio" 
            className="rounded-lg shadow-xl w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
