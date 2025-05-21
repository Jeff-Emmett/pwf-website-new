import { Testimonial } from "@/components/community/testimonial";

export function TestimonialsSection() {
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
  
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-gray-800 mb-4">
            What My Clients Say
          </h2>
          <p className="max-w-3xl mx-auto text-gray-600">
            Read about the experiences and transformations of people who practice with me
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div className="bg-purple bg-opacity-10 rounded-lg p-6 shadow-sm transition-transform duration-300 hover:scale-105" key={index}>
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