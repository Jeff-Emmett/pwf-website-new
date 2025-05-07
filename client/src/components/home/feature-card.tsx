import React from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
  color: "teal" | "purple" | "rose";
}

export function FeatureCard({ title, description, icon, color }: FeatureCardProps) {
  const colorClasses = {
    teal: {
      bg: "bg-teal-light",
      iconBg: "bg-teal",
      text: "text-teal",
    },
    purple: {
      bg: "bg-purple-light",
      iconBg: "bg-purple",
      text: "text-purple",
    },
    rose: {
      bg: "bg-rose-light",
      iconBg: "bg-rose",
      text: "text-rose",
    },
  };

  return (
    <div className={`${colorClasses[color].bg} rounded-lg p-6 text-center`}>
      <div className={`w-16 h-16 ${colorClasses[color].iconBg} rounded-full flex items-center justify-center mx-auto mb-4`}>
        <i className={`fas ${icon} text-white text-2xl`}></i>
      </div>
      <h3 className="text-xl font-playfair font-bold mb-2">{title}</h3>
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </div>
  );
}
