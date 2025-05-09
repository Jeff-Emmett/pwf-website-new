import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { insertNewsletterSchema } from "@shared/schema";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";
import { SectionDivider, SectionDividerBottom, CrescentDivider } from "@/components/ui/section-divider";
import { IslamicPattern } from "@/components/ui/section-divider";

export function NewsletterSection() {
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

  const handleSubmit = (e: React.FormEvent) => {
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
    <section className="relative overflow-hidden">
      <SectionDivider color="teal" />
      
      <div className="relative py-20 bg-teal text-white">
        <IslamicPattern color="teal" opacity={10} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white relative inline-block">
              <span className="relative z-10">Join Our Newsletter</span>
              <div className="absolute -bottom-3 left-0 w-full h-1 bg-white opacity-30"></div>
            </h2>
            <div className="flex items-center justify-center py-6">
              <div className="w-1/3 h-px bg-white opacity-30"></div>
              <div className="mx-4">
                <svg width="40" height="40" viewBox="0 0 100 100">
                  <path
                    d="M50,10 A40,40 0 0 1 50,90 A40,40 0 0 1 50,10 A30,30 0 0 0 50,70 A30,30 0 0 0 50,10"
                    fill="#FFFFFF"
                    fillOpacity="0.8"
                  />
                  <circle cx="60" cy="40" r="5" fill="#0c8991" />
                </svg>
              </div>
              <div className="w-1/3 h-px bg-white opacity-30"></div>
            </div>
            <p className="mt-4 max-w-2xl mx-auto text-white text-opacity-90">
              Stay updated with wellness tips, special class offerings, and community events
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between bg-white/10 p-8 rounded-lg">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-10">
              <form className="mt-6" onSubmit={handleSubmit}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="px-4 py-3 rounded-md bg-white bg-opacity-20 border border-teal-300 placeholder-teal-100 text-white focus:outline-none focus:border-white w-full sm:w-auto flex-grow"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button 
                    type="submit" 
                    className="px-6 py-3 bg-white text-teal font-medium rounded-md hover:bg-opacity-90 transition duration-300 flex items-center justify-center"
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
                </div>
                <div className="mt-3">
                  <label className="inline-flex items-center cursor-pointer">
                    <input 
                      type="checkbox" 
                      className="form-checkbox h-4 w-4 bg-white border-teal-300 text-white"
                      checked={agreedToTerms}
                      onChange={(e) => setAgreedToTerms(e.target.checked)}
                      required
                    />
                    <span className="ml-2 text-sm text-teal-100">I agree to receive emails from Pilates with Fadia</span>
                  </label>
                </div>
              </form>
            </div>
            
            <div className="md:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
                  alt="Peaceful pilates studio" 
                  className="rounded-lg shadow-lg" 
                />
                <img 
                  src="https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
                  alt="Group pilates session" 
                  className="rounded-lg shadow-lg" 
                />
                <img 
                  src="https://images.unsplash.com/photo-1518310383802-640c2de311b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
                  alt="Pilates equipment detail" 
                  className="rounded-lg shadow-lg" 
                />
                <img 
                  src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
                  alt="Wellness space with cultural elements" 
                  className="rounded-lg shadow-lg" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <SectionDividerBottom color="teal" />
    </section>
  );
}