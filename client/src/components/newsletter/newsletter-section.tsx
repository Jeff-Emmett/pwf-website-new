import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { insertNewsletterSchema } from "@shared/schema";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

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
    <section className="py-16 bg-teal text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-10">
            <h2 className="text-3xl font-playfair font-bold mb-4">Join Our Newsletter</h2>
            <p className="text-teal-100 mb-4">
              Stay updated with wellness tips, special class offerings, and community events. We promise to respect your inbox.
            </p>
            
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
    </section>
  );
}
