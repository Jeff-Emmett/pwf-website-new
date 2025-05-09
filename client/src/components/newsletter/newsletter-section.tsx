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
    <section className="py-20 bg-teal text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-4">
            Join Our Newsletter
          </h2>
          <p className="max-w-3xl mx-auto">
            Stay updated with wellness tips, special class offerings, and community events
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <form className="bg-white/10 p-8" onSubmit={handleSubmit}>
            <div className="flex flex-col mb-6">
              <label htmlFor="email" className="mb-2 text-white font-medium">Email Address</label>
              <input 
                id="email"
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 placeholder-white placeholder-opacity-60 text-white focus:outline-none focus:border-white"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            
            <div className="mb-6">
              <label className="flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  className="form-checkbox h-4 w-4 border-white text-teal"
                  checked={agreedToTerms}
                  onChange={(e) => setAgreedToTerms(e.target.checked)}
                  required
                />
                <span className="ml-2 text-white">I agree to receive emails from Pilates with Fadia</span>
              </label>
            </div>
            
            <button 
              type="submit" 
              className="w-full px-6 py-3 bg-white text-teal font-medium hover:bg-opacity-90 transition duration-300 flex items-center justify-center"
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
    </section>
  );
}