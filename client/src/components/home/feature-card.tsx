import React from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
  color: "teal" | "purple" | "rose";
}

export function FeatureCard({ title, description, icon, color }: FeatureCardProps) {
  const colorMap = {
    teal: "#0c8991",
    purple: "#9D5E9B",
    rose: "#B55076"
  };
  
  return (
    <div className="text-center p-8 transition duration-300 hover:shadow-md">
      <i className={`fas ${icon} text-2xl`} style={{ color: colorMap[color] }}></i>
      <h3 className="text-xl font-playfair font-semibold mt-4 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export function FeaturesSection() {
  const features = [
    {
      title: "Balance",
      description: "Find harmony between body and mind through mindful movement.",
      icon: "fa-align-center",
      color: "teal" as const,
    },
    {
      title: "Strength",
      description: "Build core power and muscular endurance through controlled exercises.",
      icon: "fa-dumbbell",
      color: "purple" as const,
    },
    {
      title: "Flexibility",
      description: "Enhance your range of motion and release tension throughout your body.",
      icon: "fa-wind",
      color: "rose" as const,
    },
  ];

  return (
    <section className="py-16 bg-purple">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-playfair font-semibold text-white mb-4">
            Core Benefits
          </h2>
          <p className="text-white text-opacity-90 max-w-2xl mx-auto">
            Experience the transformative power of Pilates through these foundational principles
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-white p-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
