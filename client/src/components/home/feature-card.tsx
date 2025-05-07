import React from "react";
import { SectionDividerBottom, CrescentDivider } from "@/components/ui/section-divider";

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
      pattern: "islamic-pattern-teal",
    },
    purple: {
      bg: "bg-purple-light",
      iconBg: "bg-purple",
      text: "text-purple",
      pattern: "islamic-pattern",
    },
    rose: {
      bg: "bg-rose-light",
      iconBg: "bg-rose",
      text: "text-rose",
      pattern: "islamic-pattern-rose",
    },
  };

  return (
    <div className="group relative rounded-lg p-6 text-center transition-all duration-300 hover:shadow-lg overflow-hidden">
      <div className={`absolute inset-0 ${colorClasses[color].bg} opacity-40`}></div>
      <div className={`absolute inset-0 ${colorClasses[color].pattern} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
      
      {/* Icon container with geometric border */}
      <div className="relative">
        <div className={`w-20 h-20 ${colorClasses[color].iconBg} rounded-full flex items-center justify-center mx-auto mb-5 transform transition-transform group-hover:scale-110 duration-300`}>
          <i className={`fas ${icon} text-white text-2xl`}></i>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-9 left-1/2 transform -translate-x-1/2 -z-10">
          <svg width="120" height="120" viewBox="0 0 120 120" className="absolute top-0 left-0 -mt-10 -ml-10">
            <polygon 
              points="60,0 77.8,42.2 120,42.2 85.1,68.2 97.1,110.3 60,86.3 22.9,110.3 34.9,68.2 0,42.2 42.2,42.2" 
              fill="none" 
              stroke={color === "teal" ? "#0c8991" : color === "purple" ? "#9D5E9B" : "#B55076"} 
              strokeWidth="1"
              strokeOpacity="0.2"
              className="transform scale-75 origin-center"
            />
          </svg>
        </div>
      </div>
      
      <h3 className={`text-xl font-playfair font-bold mb-3 ${colorClasses[color].text}`}>{title}</h3>
      <p className="text-gray-600 relative z-10">{description}</p>
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
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-white"></div>
      
      <div className="relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-800 relative inline-block">
            <span className="relative z-10">Core Benefits</span>
            <div className="absolute -bottom-3 left-0 w-full h-1 bg-purple opacity-20"></div>
          </h2>
          <CrescentDivider color="purple" className="mt-4" />
          <p className="mt-4 max-w-2xl mx-auto text-gray-600">
            Experience the transformative power of Pilates through these foundational principles
          </p>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </div>
      
      <div className="mt-16">
        <SectionDividerBottom color="purple" />
      </div>
    </section>
  );
}
