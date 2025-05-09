import { useState } from "react";
import { ClassCard } from "./class-card";
import { BookingCalendar } from "./booking-calendar";
import { useQuery } from "@tanstack/react-query";
import { Class } from "@shared/schema";
import { Skeleton } from "@/components/ui/skeleton";

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
    
    // Scroll to booking calendar
    const bookingCalendar = document.getElementById("booking-calendar");
    if (bookingCalendar) {
      bookingCalendar.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  if (error) {
    return (
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-red-500">Error loading classes. Please try again later.</p>
        </div>
      </div>
    );
  }

  return (
    <section className="py-20 bg-rose-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-gray-800 mb-4">
            Class Offerings
          </h2>
          <p className="max-w-3xl mx-auto text-gray-600">
            Choose from our variety of class options designed to match your individual needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-16">
          <div className="text-center p-6 bg-white">
            <h3 className="font-playfair text-lg font-semibold text-rose mb-3">Mat Pilates</h3>
            <p className="text-sm text-gray-600">Foundational strength, posture, and mobility</p>
          </div>
          
          <div className="text-center p-6 bg-white">
            <h3 className="font-playfair text-lg font-semibold text-rose mb-3">Reformer & Equipment</h3>
            <p className="text-sm text-gray-600">Deeper resistance, alignment, and control</p>
          </div>
          
          <div className="text-center p-6 bg-white">
            <h3 className="font-playfair text-lg font-semibold text-rose mb-3">Beginner Foundations</h3>
            <p className="text-sm text-gray-600">For those new to movement or Pilates</p>
          </div>
          
          <div className="text-center p-6 bg-white">
            <h3 className="font-playfair text-lg font-semibold text-rose mb-3">Live Online Classes</h3>
            <p className="text-sm text-gray-600">Accessible from anywhere</p>
          </div>
          
          <div className="text-center p-6 bg-white">
            <h3 className="font-playfair text-lg font-semibold text-rose mb-3">Workshops & Events</h3>
            <p className="text-sm text-gray-600">Special themed sessions and gatherings</p>
          </div>
        </div>
        
        <div className="p-8 bg-white mb-16">
          <div className="flex flex-col md:flex-row items-center justify-between">
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
                    <Skeleton className="h-5 w-16 rounded-full" />
                  </div>
                  <Skeleton className="h-4 w-full my-2" />
                  <Skeleton className="h-4 w-full my-2" />
                  <Skeleton className="h-4 w-3/4 my-2" />
                  <div className="flex justify-between items-center mt-4">
                    <Skeleton className="h-4 w-24" />
                    <Skeleton className="h-4 w-20" />
                  </div>
                  <Skeleton className="h-10 w-full mt-4 rounded-md" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {classes?.map(classItem => (
              <ClassCard 
                key={classItem.id} 
                classData={classItem} 
                onBookClick={handleBookClick}
              />
            ))}
          </div>
        )}
        
        <div id="booking-calendar" className="pt-8">
          {selectedClass && (
            <BookingCalendar selectedClass={selectedClass} />
          )}
        </div>
      </div>
    </section>
  );
}