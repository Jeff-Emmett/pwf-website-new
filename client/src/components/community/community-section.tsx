import { useState, useEffect } from "react";
import { Testimonial } from "./testimonial";
import { useAuth } from "@/hooks/use-auth";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

export function CommunitySection() {
  const { user } = useAuth();
  const { toast } = useToast();
  const [iframeLoaded, setIframeLoaded] = useState(false);
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
      // Reset form
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
  
  const testimonials = [
    {
      quote: "Fadia's approach to Pilates has completely transformed my relationship with my body. The community she's built is supportive and encouraging.",
      author: "Sarah H.",
      memberSince: "2021",
      initials: "SH",
      color: "teal",
    },
    {
      quote: "I've seen incredible improvements in my posture and core strength since joining Fadia's classes. She truly understands how to help each individual.",
      author: "Ahmed M.",
      memberSince: "2022", 
      initials: "AM",
      color: "purple",
    },
    {
      quote: "The mindful approach to movement has helped my chronic back pain tremendously. I look forward to every class!",
      author: "Laila K.",
      memberSince: "2023",
      initials: "LK", 
      color: "rose",
    }
  ];

  // Handle the iframe loading
  useEffect(() => {
    if (user) {
      const timer = setTimeout(() => {
        setIframeLoaded(true);
      }, 1500);
      
      return () => clearTimeout(timer);
    }
  }, [user]);
  
  return (
    <section className="py-20" style={{ backgroundColor: 'rgba(157, 94, 155, 0.1)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-gray-800 mb-4">
            Join the Pilates with Fadia Community
          </h2>
          <p className="max-w-3xl mx-auto text-gray-600 mb-12">
            I curate a growing community of like-minded individuals committed to health, wellness, and positive growth.
          </p>
          
          {/* Newsletter Section */}
          <div className="max-w-2xl mx-auto bg-transparent p-6 mb-16 border border-purple border-opacity-20 rounded-lg">
            <h3 className="text-2xl font-playfair font-semibold mb-4">
              Sign up for my Newsletter
            </h3>
            <form onSubmit={handleNewsletterSubmit}>
              <div className="flex flex-col mb-6">
                <input 
                  id="newsletter-email"
                  type="email" 
                  placeholder="Your email address" 
                  className="px-4 py-3 bg-white bg-opacity-80 border border-purple border-opacity-30 placeholder-gray-500 text-gray-800 focus:outline-none focus:border-teal rounded-md"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              
              <div className="mb-6">
                <label className="flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    className="form-checkbox h-4 w-4 border-gray-300 text-purple"
                    checked={agreedToTerms}
                    onChange={(e) => setAgreedToTerms(e.target.checked)}
                    required
                  />
                  <span className="ml-2 text-gray-700">I agree to receive emails from Pilates with Fadia</span>
                </label>
              </div>
              
              <button 
                type="submit" 
                className="w-full px-6 py-3 bg-rose text-white font-medium hover:bg-opacity-90 transition duration-300 rounded-full flex items-center justify-center"
                disabled={newsletterMutation.isPending}
              >
                {newsletterMutation.isPending ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Subscribing...
                  </>
                ) : (
                  "Subscribe for Updates"
                )}
              </button>
            </form>
          </div>
        </div>
        
        {/* Testimonials moved to a separate section */}
        
        {/* Whiteboard removed from homepage and moved to community page */}
        
        <div className="text-center mt-12">
          <Link to="/auth">
            <button className="px-8 py-3 bg-teal text-white font-bold rounded-full hover:bg-opacity-90 transition duration-300 shadow-md">
              {user ? "Access Community Dashboard" : "Join My Community"}
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}