import { useState, useEffect } from "react";
import { useAuth } from "@/hooks/use-auth";
import { Link } from "wouter";

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
          <p className="max-w-3xl mx-auto text-gray-600 mb-12">
            I curate a growing community of like-minded individuals committed to health, wellness, and positive growth.
          </p>
          

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