import { Testimonial } from "./community/testimonial";

export function EnhancedTestimonials() {
  const testimonials = [
    {
      quote: "Fadia's classes have transformed my relationship with my body. Her gentle guidance and cultural sensitivity create such a welcoming space for everyone.",
      author: "Sarah M.",
      memberSince: "Member since 2023",
      initials: "SM",
      color: "teal" as const
    },
    {
      quote: "I've never felt stronger or more connected to my breath. The community Fadia has built is incredible - we support each other through every challenge.",
      author: "Ingrid from Estonia",
      memberSince: "Member since 2022",
      initials: "IE",
      color: "purple" as const
    },
    {
      quote: "As someone who was intimidated by fitness, Fadia made Pilates accessible and enjoyable. Her classes focus on mindful movement, not perfection.",
      author: "Maya K.",
      memberSince: "Member since 2023",
      initials: "MK",
      color: "rose" as const
    },
    {
      quote: "The online classes are fantastic! Fadia's clear instructions and encouraging presence make it feel like she's right there with you.",
      author: "Jennifer L.",
      memberSince: "Member since 2024",
      initials: "JL",
      color: "teal" as const
    },
    {
      quote: "Fadia understands that wellness isn't one-size-fits-all. Her personalized approach has helped me manage chronic pain while building strength.",
      author: "Amira H.",
      memberSince: "Member since 2022",
      initials: "AH",
      color: "purple" as const
    },
    {
      quote: "The small group sessions are perfect - intimate enough for personal attention but with the energy of a supportive community.",
      author: "Lisa T.",
      memberSince: "Member since 2023",
      initials: "LT",
      color: "rose" as const
    }
  ];

  return (
    <section className="py-20" style={{ backgroundColor: 'rgba(12, 137, 145, 0.1)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-gray-800 mb-4">
            What Our Community Says
          </h2>
          <p className="max-w-3xl mx-auto text-gray-600">
            Real stories from real people who have found strength, flexibility, and community through Pilates
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              memberSince={testimonial.memberSince}
              initials={testimonial.initials}
              color={testimonial.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
}