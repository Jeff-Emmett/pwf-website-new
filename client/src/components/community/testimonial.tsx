interface TestimonialProps {
  quote: string;
  author: string;
  memberSince: string;
  initials: string;
  color: "teal" | "purple" | "rose";
}

export function Testimonial({ quote, author, memberSince, initials, color }: TestimonialProps) {
  const colorClasses = {
    teal: {
      bg: "bg-teal-light",
      text: "text-teal",
      opacity: "text-teal opacity-30",
    },
    purple: {
      bg: "bg-purple-light",
      text: "text-purple",
      opacity: "text-purple opacity-30",
    },
    rose: {
      bg: "bg-rose-light",
      text: "text-rose",
      opacity: "text-rose opacity-30",
    },
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg relative overflow-hidden">
      <div className="absolute -top-4 -right-4 w-16 h-16 opacity-10">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path 
            d="M95,30 L85,10 C80,0 65,0 60,10 L50,30 L40,10 C35,0 20,0 15,10 L5,30 C0,40 5,50 15,55 L50,70 L85,55 C95,50 100,40 95,30z" 
            fill={color === "teal" ? "#0c8991" : color === "purple" ? "#9D5E9B" : "#B55076"} 
          />
        </svg>
      </div>
      
      <div className="mb-6 text-right">
        <i className={`fas fa-quote-right text-4xl ${colorClasses[color].opacity}`}></i>
      </div>
      
      <p className="text-gray-700 mb-6 italic relative z-10 font-raleway">
        "{quote}"
      </p>
      
      <div className="flex items-center border-t pt-4 border-gray-100">
        <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-3 bg-white border-2 ${color === "teal" ? "border-teal" : color === "purple" ? "border-purple" : "border-rose"}`}>
          <span className={`${colorClasses[color].text} font-semibold`}>{initials}</span>
        </div>
        <div>
          <h5 className="font-playfair font-medium">{author}</h5>
          <p className="text-sm text-gray-500">Member since {memberSince}</p>
        </div>
      </div>
    </div>
  );
}
