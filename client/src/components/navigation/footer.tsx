import { Logo } from "@/components/ui/logo";
import { Link } from "wouter";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Logo className="mb-4" />
            <p className="text-gray-400 mb-4">
              Transforming bodies and minds through the art of Pilates with a touch of cultural elegance.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-playfair font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/">
                  <a className="text-gray-400 hover:text-white transition duration-300">Home</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="text-gray-400 hover:text-white transition duration-300">About Fadia</a>
                </Link>
              </li>
              <li>
                <Link href="/classes">
                  <a className="text-gray-400 hover:text-white transition duration-300">Classes</a>
                </Link>
              </li>
              <li>
                <Link href="/community">
                  <a className="text-gray-400 hover:text-white transition duration-300">Community</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="text-gray-400 hover:text-white transition duration-300">Contact</a>
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-playfair font-bold text-lg mb-4">Classes</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/classes">
                  <a className="text-gray-400 hover:text-white transition duration-300">Mat Pilates</a>
                </Link>
              </li>
              <li>
                <Link href="/classes">
                  <a className="text-gray-400 hover:text-white transition duration-300">Reformer</a>
                </Link>
              </li>
              <li>
                <Link href="/classes">
                  <a className="text-gray-400 hover:text-white transition duration-300">Private Sessions</a>
                </Link>
              </li>
              <li>
                <Link href="/classes">
                  <a className="text-gray-400 hover:text-white transition duration-300">Group Classes</a>
                </Link>
              </li>
              <li>
                <Link href="/classes">
                  <a className="text-gray-400 hover:text-white transition duration-300">Special Workshops</a>
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-playfair font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt mt-1 mr-2 text-teal"></i>
                <span className="text-gray-400">123 Serenity Lane, Wellness District<br/>Dubai, UAE</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-envelope mr-2 text-teal"></i>
                <a href="mailto:hello@pilateswithfadia.com" className="text-gray-400 hover:text-white transition duration-300">
                  hello@pilateswithfadia.com
                </a>
              </li>
              <li className="flex items-center">
                <i className="fas fa-phone-alt mr-2 text-teal"></i>
                <a href="tel:+97150123567" className="text-gray-400 hover:text-white transition duration-300">
                  +971 50 123 4567
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Pilates with Fadia. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition duration-300">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition duration-300">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition duration-300">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
