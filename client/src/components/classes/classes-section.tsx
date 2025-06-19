import React from "react";
import { ClassCard } from "./class-card";
import { STATIC_CLASSES } from "@/lib/static-data";

export function ClassesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-rose mb-4">
            Available Classes
          </h2>
          <p className="max-w-3xl mx-auto text-gray-600">Join personalized pilates classes where you'll discover strength, flexibility, and mindfulness.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATIC_CLASSES.map((classData) => (
            <ClassCard 
              key={classData.id} 
              classData={classData} 
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="https://www.momoyoga.com/pilates-with-fadia/schedule" target="_blank" rel="noopener noreferrer" className="inline-block">
            <button className="px-12 py-5 bg-rose text-white font-bold rounded-full hover:bg-rose-700 transition duration-300 shadow-md text-xl">Book a Class</button>
          </a>
        </div>
      </div>
    </section>
  );
}