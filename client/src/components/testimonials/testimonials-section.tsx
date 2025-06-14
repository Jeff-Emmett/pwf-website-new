import { Testimonial } from "@/components/community/testimonial";

export function TestimonialsSection() {
  const testimonials = [
    {
      quote: "I dropped in at Fadia's Pilates more than two years ago and since then I have tried my utmost not to miss a class. It's not just a workout, it's an amazing vibe created by sweating together, laughing together and pushing the limits together.",
      author: "Ingrid from Estonia",
      memberSince: "2022",
      initials: "IE",
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
  
  return (
    <section className="pt-6 pb-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div className="rounded-lg p-6 shadow-sm transition-transform duration-300 hover:scale-105 bg-[#92bbc45c]" key={index}>
              <Testimonial
                quote={testimonial.quote}
                author={testimonial.author}
                memberSince={testimonial.memberSince}
                initials={testimonial.initials}
                color={testimonial.color as "teal" | "purple" | "rose"}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}