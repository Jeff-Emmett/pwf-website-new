import { useEffect, useState } from "react";
import { ClassCard } from "./class-card";
import { BookingCalendar } from "./booking-calendar";
import { useQuery } from "@tanstack/react-query";
import { Class } from "@shared/schema";
import { ArabicDecoration } from "@/components/ui/arabic-decoration";
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
      <div className="py-16 islamic-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-red-500">Error loading classes. Please try again later.</p>
        </div>
      </div>
    );
  }

  return (
    <section id="classes" className="py-16 islamic-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <ArabicDecoration>
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-800">Our Classes</h2>
          </ArabicDecoration>
          <p className="mt-8 max-w-3xl mx-auto text-gray-600">
            Discover the perfect Pilates class tailored to your needs and wellness goals.
          </p>
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
