import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { insertContactMessageSchema } from "@shared/schema";
import { useToast } from "@/hooks/use-toast";
import { ArabicDecoration } from "@/components/ui/arabic-decoration";
import { Loader2 } from "lucide-react";
import { SectionDivider, SectionDividerBottom, StarDivider } from "@/components/ui/section-divider";
import { IslamicPattern } from "@/components/ui/section-divider";

export function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const contactMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      const res = await apiRequest("POST", "/api/contact", data);
      return await res.json();
    },
    onSuccess: () => {
      toast({
        title: "Message sent",
        description: "Thank you for your message. We'll get back to you soon!",
      });
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Failed to send message",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(formData);
  };

  return (
    <section className="relative overflow-hidden">
      <SectionDivider color="teal" />
      
      <div className="relative py-20 teal-light-bg">
        <IslamicPattern color="teal" opacity={15} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-800 relative inline-block">
              <span className="relative z-10">Contact Us</span>
              <div className="absolute -bottom-3 left-0 w-full h-1 bg-teal opacity-30"></div>
            </h2>
            <StarDivider color="teal" className="mt-4" />
            <p className="mt-6 max-w-3xl mx-auto text-gray-600">
              Have questions or want to learn more? Reach out to us and we'll get back to you as soon as possible.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent" 
                    placeholder="Enter your name" 
                    required 
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent" 
                    placeholder="Enter your email" 
                    required 
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent" 
                    placeholder="What is this regarding?" 
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                  <textarea 
                    id="message" 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5} 
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent" 
                    placeholder="Your message..." 
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-teal text-white font-medium py-3 px-6 rounded-md hover:bg-opacity-90 transition duration-300 flex items-center justify-center"
                  disabled={contactMutation.isPending}
                >
                  {contactMutation.isPending ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            </div>
            
            <div>
              <div className="bg-white rounded-lg p-8 h-full shadow-md">
                <h3 className="font-playfair font-bold text-2xl mb-6 text-teal">Connect With Us</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-teal-light p-3 rounded-full mr-4">
                      <i className="fas fa-map-marker-alt text-teal"></i>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Our Studio</h4>
                      <p className="text-gray-600">123 Serenity Lane, Wellness District<br/>Dubai, United Arab Emirates</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-teal-light p-3 rounded-full mr-4">
                      <i className="fas fa-envelope text-teal"></i>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Email Us</h4>
                      <p className="text-gray-600">hello@pilateswithfadia.com</p>
                      <p className="text-gray-500 text-sm mt-1">We aim to respond within 24 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-teal-light p-3 rounded-full mr-4">
                      <i className="fas fa-phone-alt text-teal"></i>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Call Us</h4>
                      <p className="text-gray-600">+971 50 123 4567</p>
                      <p className="text-gray-500 text-sm mt-1">Sunday-Thursday: 9AM-7PM</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-teal-light p-3 rounded-full mr-4">
                      <i className="fas fa-clock text-teal"></i>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Studio Hours</h4>
                      <p className="text-gray-600">
                        Monday-Friday: 7AM-9PM<br/>
                        Saturday: 8AM-6PM<br/>
                        Sunday: 9AM-4PM
                      </p>
                    </div>
                  </div>
                  
                  <div className="pt-6 border-t border-gray-200">
                    <h4 className="font-medium mb-3">Follow Us</h4>
                    <div className="flex space-x-4">
                      <a href="#" className="bg-teal hover:bg-opacity-90 text-white w-10 h-10 rounded-full flex items-center justify-center transition duration-300">
                        <i className="fab fa-instagram"></i>
                      </a>
                      <a href="#" className="bg-teal hover:bg-opacity-90 text-white w-10 h-10 rounded-full flex items-center justify-center transition duration-300">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a href="#" className="bg-teal hover:bg-opacity-90 text-white w-10 h-10 rounded-full flex items-center justify-center transition duration-300">
                        <i className="fab fa-youtube"></i>
                      </a>
                      <a href="#" className="bg-teal hover:bg-opacity-90 text-white w-10 h-10 rounded-full flex items-center justify-center transition duration-300">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <SectionDividerBottom color="teal" />
    </section>
  );
}