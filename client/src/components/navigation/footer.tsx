import { Logo } from "@/components/ui/logo";
import { Link } from "wouter";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";
import SquareLogo from "@assets/PwF Logo (square).png";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const newsletterMutation = useMutation({
    mutationFn: async (newsletterData: { email: string, agreedToTerms: boolean }) => {
      const res = await apiRequest("POST", "/api/newsletter", newsletterData);
      return await res.json();
    },
    onSuccess: () => {
      toast({
        title: "Subscription successful",
        description: "Thank you for subscribing to our newsletter!",
      });
      setEmail("");
      setAgreedToTerms(false);
    },
    onError: (error: Error) => {
      toast({
        title: "Subscription failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Email required",
        description: "Please enter your email address",
        variant: "destructive",
      });
      return;
    }
    
    if (!agreedToTerms) {
      toast({
        title: "Consent required",
        description: "Please agree to receive emails from Pilates with Fadia",
        variant: "destructive",
      });
      return;
    }
    
    newsletterMutation.mutate({ email, agreedToTerms });
  };
  
  return (
    <footer className="bg-teal text-white pt-6 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <img 
              src={SquareLogo} 
              alt="Pilates with Fadia" 
              className="w-80 mb-4"
              style={{ filter: "brightness(1.1)" }}
            />
            <p className="text-white text-opacity-80 mb-4">Online pilates classes to help you feel stronger and more connected to your body and breath</p>
            
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/fadia.elgharib/" target="_blank" rel="noopener noreferrer" className="text-white text-opacity-70 hover:text-white hover:text-opacity-100 transition duration-300">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.youtube.com/channel/UCUbMEjCowuRroSFzkP31Jlw" target="_blank" rel="noopener noreferrer" className="text-white text-opacity-70 hover:text-white hover:text-opacity-100 transition duration-300">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="https://www.momoyoga.com/pilates-with-fadia/schedule" target="_blank" rel="noopener noreferrer" className="text-white text-opacity-70 hover:text-white hover:text-opacity-100 transition duration-300">
                <i className="fas fa-calendar-alt"></i>
              </a>
            </div>
          </div>
          
          {/* Quick Links and Contact at top */}
          <div className="md:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-playfair font-bold text-lg mb-4 text-white">Quick Links</h3>
                <ul className="space-y-3">
                  <li>
                    <Link 
                      href="/calendar" 
                      className="text-white text-opacity-70 hover:text-white hover:text-opacity-100 transition duration-300"
                    >Book a Class</Link>
                  </li>
                  <li>
                    <Link 
                      href="/about" 
                      className="text-white text-opacity-70 hover:text-white hover:text-opacity-100 transition duration-300"
                    >
                      Meet Fadia
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
                <h3 className="font-playfair font-bold text-lg mb-4 text-white">Find Me Here</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <i className="fas fa-map-marker-alt mt-1 mr-2 text-white"></i>
                    <span className="text-white text-opacity-70">Nun Center<br/>Zamalek, Cairo, Egypt</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-envelope mr-2 text-white"></i>
                    <a href="mailto:hello@pilateswithfadia.com" className="text-white text-opacity-70 hover:text-white hover:text-opacity-100 transition duration-300">
                      hello@pilateswithfadia.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Newsletter Signup below links and contact */}
            <div className="mt-8 pt-6 pb-4 border-t border-white border-opacity-20">
              <h4 className="font-playfair font-bold text-base mb-4 text-white">Stay in touch with my newsletter</h4>
              <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full px-4 py-3 text-sm bg-white bg-opacity-90 border border-white border-opacity-30 placeholder-gray-500 text-gray-800 focus:outline-none focus:border-white rounded-md"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                
                <div className="flex items-start gap-2">
                  <input 
                    type="checkbox" 
                    className="mt-1 flex-shrink-0"
                    checked={agreedToTerms}
                    onChange={(e) => setAgreedToTerms(e.target.checked)}
                    required
                  />
                  <span className="text-white text-opacity-80 text-sm">I agree to receive emails from Pilates with Fadia</span>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full px-6 py-3 text-sm bg-purple text-white font-bold hover:bg-opacity-90 transition duration-300 rounded-full flex items-center justify-center"
                  disabled={newsletterMutation.isPending}
                >
                  {newsletterMutation.isPending ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Subscribing...
                    </>
                  ) : (
                    "Subscribe"
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
        

        
        <div className="border-t border-white border-opacity-20 pt-8">
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
