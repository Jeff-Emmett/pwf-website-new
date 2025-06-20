import React from "react";

interface TestimonialProps {
  quote: string;
  author: string;
  memberSince: string;
  initials: string;
  color: "teal" | "purple" | "rose";
}

export function Testimonial({ quote, author, memberSince, initials, color }: TestimonialProps) {
  return (
    <div className="bg-transparent text-left flex flex-col h-full">
      <div className="flex-grow">
        <p className="text-gray-700 mb-6 italic">
          "{quote}"
        </p>
      </div>
      
      <div className="flex items-center mt-auto">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 bg-${color} bg-opacity-20 text-${color}`}>
          <span>{initials}</span>
        </div>
        <div>
          <h5 className="font-playfair">{author}</h5>
          {memberSince && <p className="text-sm text-gray-500">Member since {memberSince}</p>}
        </div>
      </div>
    </div>
  );
}
