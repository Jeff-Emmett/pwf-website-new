import { Link } from "wouter";

export function CTASection() {
  return (
    <section className="py-16 pb-8 text-white" style={{ backgroundColor: '#0c8991' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-2xl md:text-3xl font-playfair font-semibold mb-8">
          Ready to feel stronger, more connected, and at home in your body?
        </h3>
        
        <div className="flex justify-center mb-6">
          <a
            href="https://pilateswithfadia.as.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-rose text-white font-bold py-4 px-10 rounded-full shadow-md hover:bg-opacity-90 transition duration-300 text-lg"
          >
            Book a Class
          </a>
        </div>
      </div>
      
      <div className="w-full">
        <hr className="border-white border-opacity-30" />
      </div>
    </section>
  );
}