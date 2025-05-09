import { Link } from "wouter";

export function HeroSection() {
  return (
    <section className="relative">
      <div className="bg-cover bg-center h-[90vh] flex items-center justify-center" 
           style={{
             backgroundImage: "url('https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')",
             backgroundPosition: "center"
           }}>
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        
        <div className="relative text-center px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-white leading-tight mb-8">
            Where Strength Meets Serenity
          </h1>
          
          <Link
            href="/classes"
            className="inline-block bg-white text-teal font-medium py-3 px-10 hover:bg-opacity-90 transition duration-300"
          >
            Start Now For Free
          </Link>
        </div>
      </div>
      
      <div className="py-16 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-gray-900 mb-4">
            Welcome to Pilates with Fadia
          </h2>
          <p className="text-lg text-gray-600">
            where progress feels natural and consistency is effortless
          </p>
        </div>
      </div>
    </section>
  );
}
