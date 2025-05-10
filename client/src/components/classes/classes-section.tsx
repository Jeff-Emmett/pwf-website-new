import { useState } from "react";
import { ClassCard } from "./class-card";
import { BookingCalendar } from "./booking-calendar";
import { useQuery } from "@tanstack/react-query";
import { Class } from "@shared/schema";
import { Skeleton } from "@/components/ui/skeleton";
import FadiaClassImage from "../../assets/Fadia-156.jpg";

export function ClassesSection() {
  const [selectedClassId, setSelectedClassId] = useState<number | null>(null);
  
  const { data: classes, isLoading, error } = useQuery<Class[]>({
    queryKey: ["/api/classes"],
  });
  
  const selectedClass = selectedClassId 
    ? classes?.find(c => c.id === selectedClassId) 
    : null;
  
  const handleBookClick = (classId: number) => {
    setSelectedClassId(classId);
    const element = document.getElementById('booking-calendar');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <section className="py-20 bg-teal bg-opacity-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-gray-800 mb-4">
            Our Classes
          </h2>
          <p className="max-w-3xl mx-auto text-gray-600">
            Join our supportive, personalized classes where you'll discover strength, flexibility, and mindfulness.
          </p>
        </div>
        
        <div className="bg-white p-6 md:p-8 rounded-lg mb-16 border border-gray-100">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h3 className="font-playfair text-xl font-semibold text-gray-800 mb-3">
                ✨ In-Person Classes
              </h3>
              <p className="text-gray-700">Join Fadia for physical classes in the heart of Cairo at the renowned Nun Center, Zamalek</p>
              <p className="text-gray-700 mt-2">📍 Classes every Wednesday & Saturday</p>
            </div>
            <a href="https://nuncenter.com" className="mt-4 md:mt-0 inline-flex items-center text-rose hover:text-rose-600 transition-colors font-medium">
              Contact Nun Center →
            </a>
          </div>
        </div>
        
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <Skeleton className="w-full h-48" />
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <Skeleton className="h-6 w-32" />
                    <Skeleton className="h-6 w-20" />
                  </div>
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-3/4 mb-4" />
                  <Skeleton className="h-8 w-24 mt-4" />
                </div>
              </div>
            ))}
          </div>
        ) : error ? (
          <div className="text-center text-red-500">
            <p>Error loading classes. Please try again later.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {classes?.map((classData) => (
              <ClassCard 
                key={classData.id} 
                classData={classData} 
                onBookClick={handleBookClick} 
              />
            ))}
          </div>
        )}
        
        {selectedClass && (
          <div id="booking-calendar" className="mt-20 pt-10 border-t border-gray-200">
            <h3 className="text-2xl font-playfair font-semibold text-center mb-8">
              Book Your {selectedClass.name} Class
            </h3>
            <BookingCalendar selectedClass={selectedClass} />
            <div className="text-center mt-8">
              <button 
                onClick={() => setSelectedClassId(null)} 
                className="px-6 py-2 text-gray-600 hover:text-gray-900 border border-gray-300 hover:border-gray-500 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}