import { Link } from "wouter";
import { useAuth } from "@/hooks/use-auth";

export function CTASection() {
  const { user } = useAuth();
  
  return (
    <section className="py-16 text-white" style={{ backgroundColor: '#B55076' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-8 md:mb-0 md:w-2/3 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-playfair font-semibold mb-4">
              Create Your Personal Account
            </h3>
            <p className="text-white text-opacity-90 max-w-xl">
              Join our community to book classes, track your progress, and connect with other Pilates enthusiasts.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <Link
              href="/auth"
              className="bg-white text-rose-500 font-bold py-3 px-8 rounded-md shadow-md hover:bg-opacity-90 transition duration-300"
            >
              {user ? "My Account" : "Sign Up"}
            </Link>
            <Link
              href="/classes"
              className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-md hover:bg-white hover:bg-opacity-20 transition duration-300"
            >
              Book a Class
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}