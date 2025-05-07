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
    <div className="bg-white p-6 rounded-lg shadow-md relative">
      <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2 text-4xl">
        <i className={`fas fa-quote-right ${colorClasses[color].opacity}`}></i>
      </div>
      <p className="text-gray-600 mb-4 italic">
        "{quote}"
      </p>
      <div className="flex items-center">
        <div className={`w-10 h-10 ${colorClasses[color].bg} rounded-full flex items-center justify-center mr-3`}>
          <span className={`${colorClasses[color].text} font-semibold`}>{initials}</span>
        </div>
        <div>
          <h5 className="font-medium">{author}</h5>
          <p className="text-sm text-gray-500">Member since {memberSince}</p>
        </div>
      </div>
    </div>
  );
}
