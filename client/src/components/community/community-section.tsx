import { useState, useEffect } from "react";
import { Testimonial } from "./testimonial";
import { useAuth } from "@/hooks/use-auth";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";

export function CommunitySection() {
  const { user } = useAuth();
  const [iframeLoaded, setIframeLoaded] = useState(false);
  
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
          <p className="max-w-3xl mx-auto text-gray-600">
            I curate a growing community of like-minded individuals committed to health, wellness, and positive growth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              memberSince={testimonial.memberSince}
              initials={testimonial.initials}
              color={testimonial.color as "teal" | "purple" | "rose"}
            />
          ))}
        </div>
        
        <div className="mt-10">
          <h3 className="text-2xl font-playfair font-semibold text-teal text-center mb-8">
            Community Whiteboard
          </h3>
          
          <Card className="mx-auto max-w-4xl">
            <CardContent className="p-6">
              <div className="rounded-md overflow-hidden bg-white" style={{ height: '600px' }}>
                {user ? (
                  iframeLoaded ? (
                    <iframe
                      src="https://www.jeffemmett.com/board/pilateswithfadia"
                      title="Community Whiteboard"
                      onLoad={() => setIframeLoaded(true)}
                      className="w-full h-full border-0" style={{ minHeight: '100%' }}
                    />
                  ) : (
                    <div className="text-center py-16">
                      <i className="fas fa-spinner fa-spin text-5xl text-teal mb-6"></i>
                      <p className="text-gray-600 text-lg">Loading community whiteboard...</p>
                      <p className="text-gray-500 mt-2">This interactive board allows you to share ideas with other community members</p>
                    </div>
                  )
                ) : (
                  <div className="text-center py-16">
                    <i className="fas fa-chalkboard text-5xl text-teal mb-6"></i>
                    <p className="text-gray-600 text-lg">
                      Interactive Community Whiteboard
                    </p>
                    <p className="text-gray-500 mt-2 max-w-lg mx-auto">
                      Our exclusive digital whiteboard allows members to share exercise routines, wellness tips, and more with the Pilates with Fadia community.
                    </p>
                    <p className="text-sm text-gray-500 mt-6 flex items-center justify-center">
                      <i className="fas fa-lock mr-2 text-teal"></i> Please sign in to unlock this feature
                    </p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center mt-12">
          <Link to="/auth">
            <button className="px-8 py-3 bg-teal text-white font-medium rounded hover:bg-opacity-90 transition duration-300">
              {user ? "Access Community Dashboard" : "Join Our Community"}
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}