import { useState, useEffect } from "react";
import { Testimonial } from "./testimonial";
import { useAuth } from "@/hooks/use-auth";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { SectionDivider, SectionDividerBottom, StarDivider } from "@/components/ui/section-divider";
import { IslamicPattern } from "@/components/ui/section-divider";

export function CommunitySection() {
  const { user } = useAuth();
  const [iframeLoaded, setIframeLoaded] = useState(false);
  
  const testimonials = [
    {
      quote: "Fadia's approach to Pilates has completely transformed my relationship with my body. The community she's built is supportive and encouraging.",
      author: "Sarah H.",
      memberSince: "2021",
      initials: "SH",
      color: "teal" as const,
    },
    {
      quote: "As someone recovering from back surgery, I was hesitant to try Pilates. Fadia's expertise made me feel safe and I've gained strength I never thought possible.",
      author: "Michael K.",
      memberSince: "2022",
      initials: "MK",
      color: "purple" as const,
    },
    {
      quote: "The community aspect of Pilates with Fadia sets it apart. I've not only improved my physical health but have made wonderful connections with fellow members.",
      author: "Amina L.",
      memberSince: "2020",
      initials: "AL",
      color: "rose" as const,
    },
  ];
  
  // This function would load the actual whiteboard in a real implementation
  // For now, we're simulating the load timing
  useEffect(() => {
    if (user) {
      const timer = setTimeout(() => {
        setIframeLoaded(true);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, [user]);

  return (
    <section className="relative overflow-hidden">
      <SectionDivider color="rose" />
      
      <div className="relative py-20 bg-rose">
        <IslamicPattern color="rose" opacity={15} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white relative inline-block">
              <span className="relative z-10">Our Community</span>
              <div className="absolute -bottom-3 left-0 w-full h-1 bg-white opacity-30"></div>
            </h2>
            <div className="flex items-center justify-center py-6">
              <div className="w-1/3 h-px bg-white opacity-30"></div>
              <div className="mx-4">
                <svg width="40" height="40" viewBox="0 0 100 100">
                  <polygon
                    points="50,10 61,35 90,35 65,55 75,80 50,65 25,80 35,55 10,35 39,35"
                    fill="#FFFFFF"
                    fillOpacity="0.8"
                  />
                </svg>
              </div>
              <div className="w-1/3 h-px bg-white opacity-30"></div>
            </div>
            <p className="mt-6 max-w-3xl mx-auto text-white text-opacity-90">
              A Global Space for Movement & Connection
            </p>
            <p className="mt-3 max-w-3xl mx-auto text-white text-opacity-80">
              Whether you're joining from your living room in Cairo or your studio in Berlin, you're part of a larger collective—a community that values strength, softness, breath, and belonging.
            </p>
            <p className="mt-3 max-w-3xl mx-auto text-white text-opacity-80">
              Here, we move to feel good. To age with agency. To grow stronger with grace.
            </p>
          </div>
          
          <Card className="rounded-xl overflow-hidden shadow-xl">
            <div className="border-b border-gray-200 py-4 px-6 bg-gray-50">
              <h3 className="font-playfair font-semibold text-xl">Community Digital Whiteboard</h3>
            </div>
            
            <CardContent className="p-0">
              <div className="h-96 bg-gray-100 flex items-center justify-center">
                {user ? (
                  iframeLoaded ? (
                    <iframe 
                      src="https://miro.com/app/board/uXjVKEqwAH8=/"
                      title="Community Whiteboard"
                      className="w-full h-full border-0"
                    />
                  ) : (
                    <div className="text-center">
                      <i className="fas fa-spinner fa-spin text-5xl text-gray-400 mb-4"></i>
                      <p className="text-gray-500">Loading whiteboard content...</p>
                    </div>
                  )
                ) : (
                  <div className="text-center">
                    <i className="fas fa-chalkboard text-5xl text-gray-400 mb-4"></i>
                    <p className="text-gray-500">
                      Digital whiteboard content will be available after login
                    </p>
                    <p className="text-sm text-gray-400 mt-2">
                      <i className="fas fa-info-circle mr-1"></i> Please sign in to access community features
                    </p>
                  </div>
                )}
              </div>
            </CardContent>
            
            <div className="p-6 border-t border-gray-200">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="mb-4 md:mb-0">
                  <h4 className="font-playfair font-medium text-lg mb-1">Join Our Community</h4>
                  <p className="text-gray-600 text-sm">Share your journey, ask questions, and connect with others.</p>
                </div>
                {!user && (
                  <Link href="/auth">
                    <span className="bg-rose text-white font-medium py-2 px-6 rounded-full hover:bg-opacity-90 transition duration-300 cursor-pointer">
                      Sign Up to Participate
                    </span>
                  </Link>
                )}
              </div>
            </div>
          </Card>
          
          <div className="mt-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Testimonial key={index} {...testimonial} />
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <SectionDividerBottom color="rose" />
    </section>
  );
}