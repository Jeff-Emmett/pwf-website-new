import { Logo } from "@/components/ui/logo";
import { Link } from "wouter";
import SquareLogo from "../../assets/square-logo.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-teal text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img 
              src={SquareLogo} 
              alt="Pilates with Fadia" 
              className="h-48 mb-4"
              style={{ filter: "brightness(1.1)" }}
            />
            <p className="text-white text-opacity-80 mb-4">
              Transforming bodies and minds through the art of Pilates with a touch of cultural elegance.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white text-opacity-70 hover:text-white hover:text-opacity-100 transition duration-300">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-white text-opacity-70 hover:text-white hover:text-opacity-100 transition duration-300">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-white text-opacity-70 hover:text-white hover:text-opacity-100 transition duration-300">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="#" className="text-white text-opacity-70 hover:text-white hover:text-opacity-100 transition duration-300">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-playfair font-bold text-lg mb-4 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/" 
                  className="text-white text-opacity-70 hover:text-white hover:text-opacity-100 transition duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className="text-white text-opacity-70 hover:text-white hover:text-opacity-100 transition duration-300"
                >
                  About Fadia
                </Link>
              </li>
              <li>
                <Link 
                  href="/classes" 
                  className="text-white text-opacity-70 hover:text-white hover:text-opacity-100 transition duration-300"
                >
                  Classes
                </Link>
              </li>
              <li>
                <Link 
                  href="/community" 
                  className="text-white text-opacity-70 hover:text-white hover:text-opacity-100 transition duration-300"
                >
                  Community
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="text-white text-opacity-70 hover:text-white hover:text-opacity-100 transition duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-playfair font-bold text-lg mb-4 text-white">Classes</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/classes" 
                  className="text-white text-opacity-70 hover:text-white hover:text-opacity-100 transition duration-300"
                >
                  Mat Pilates
                </Link>
              </li>
              <li>
                <Link 
                  href="/classes" 
                  className="text-white text-opacity-70 hover:text-white hover:text-opacity-100 transition duration-300"
                >
                  Reformer
                </Link>
              </li>
              <li>
                <Link 
                  href="/classes" 
                  className="text-white text-opacity-70 hover:text-white hover:text-opacity-100 transition duration-300"
                >
                  Private Sessions
                </Link>
              </li>
              <li>
                <Link 
                  href="/classes" 
                  className="text-white text-opacity-70 hover:text-white hover:text-opacity-100 transition duration-300"
                >
                  Group Classes
                </Link>
              </li>
              <li>
                <Link 
                  href="/classes" 
                  className="text-white text-opacity-70 hover:text-white hover:text-opacity-100 transition duration-300"
                >
                  Special Workshops
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-playfair font-bold text-lg mb-4 text-white">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt mt-1 mr-2 text-white"></i>
                <span className="text-white text-opacity-70">123 Serenity Lane, Wellness District<br/>Dubai, UAE</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-envelope mr-2 text-white"></i>
                <a href="mailto:hello@pilateswithfadia.com" className="text-white text-opacity-70 hover:text-white hover:text-opacity-100 transition duration-300">
                  hello@pilateswithfadia.com
                </a>
              </li>
              <li className="flex items-center">
                <i className="fas fa-phone-alt mr-2 text-white"></i>
                <a href="tel:+97150123567" className="text-white text-opacity-70 hover:text-white hover:text-opacity-100 transition duration-300">
                  +971 50 123 4567
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white border-opacity-20 mt-12 pt-8">

          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white text-opacity-70 text-sm mb-4 md:mb-0">
              &copy; {currentYear} Pilates with Fadia. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-white text-opacity-70 hover:text-white hover:text-opacity-100 text-sm transition duration-300">Privacy Policy</a>
              <a href="#" className="text-white text-opacity-70 hover:text-white hover:text-opacity-100 text-sm transition duration-300">Terms of Service</a>
              <a href="#" className="text-white text-opacity-70 hover:text-white hover:text-opacity-100 text-sm transition duration-300">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
