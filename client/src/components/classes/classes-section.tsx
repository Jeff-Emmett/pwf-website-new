import { useState } from "react";
import { ClassCard } from "./class-card";
import { BookingCalendar } from "./booking-calendar";
import { useQuery } from "@tanstack/react-query";
import { Class } from "@shared/schema";
import { Skeleton } from "@/components/ui/skeleton";
import { SectionDivider, SectionDividerBottom, StarDivider } from "@/components/ui/section-divider";
import { IslamicPattern } from "@/components/ui/section-divider";

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
    <section className="relative overflow-hidden">
      <SectionDivider color="rose" />
      
      <div className="relative py-20 rose-light-bg">
        <IslamicPattern color="rose" opacity={10} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-800 relative inline-block">
              <span className="relative z-10">Class Offerings</span>
              <div className="absolute -bottom-3 left-0 w-full h-1 bg-rose opacity-30"></div>
            </h2>
            <StarDivider color="rose" className="mt-4" />
            <div className="mt-6 max-w-3xl mx-auto space-y-6">
              <div className="flex flex-col md:flex-row gap-4 items-center bg-white bg-opacity-50 p-6 rounded-lg shadow-sm">
                <div className="md:w-1/4 text-center mb-4 md:mb-0">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-rose bg-opacity-20">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-rose" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="font-playfair text-xl font-semibold text-gray-800">Mat Pilates</h3>
                  <p className="text-gray-600">Foundational strength, posture, and mobility</p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-4 items-center bg-white bg-opacity-50 p-6 rounded-lg shadow-sm">
                <div className="md:w-1/4 text-center mb-4 md:mb-0">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-rose bg-opacity-20">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-rose" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="font-playfair text-xl font-semibold text-gray-800">Reformer & Equipment Pilates</h3>
                  <p className="text-gray-600">Deeper resistance, alignment, and control</p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-4 items-center bg-white bg-opacity-50 p-6 rounded-lg shadow-sm">
                <div className="md:w-1/4 text-center mb-4 md:mb-0">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-rose bg-opacity-20">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-rose" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="font-playfair text-xl font-semibold text-gray-800">Beginner Foundations Series</h3>
                  <p className="text-gray-600">For those new to movement or Pilates</p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-4 items-center bg-white bg-opacity-50 p-6 rounded-lg shadow-sm">
                <div className="md:w-1/4 text-center mb-4 md:mb-0">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-rose bg-opacity-20">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-rose" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="font-playfair text-xl font-semibold text-gray-800">Live Online Classes</h3>
                  <p className="text-gray-600">Accessible from anywhere</p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-4 items-center bg-white bg-opacity-50 p-6 rounded-lg shadow-sm">
                <div className="md:w-1/4 text-center mb-4 md:mb-0">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-rose bg-opacity-20">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-rose" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="font-playfair text-xl font-semibold text-gray-800">Workshops & Community Events</h3>
                  <p className="text-gray-600">Special themed sessions and gatherings</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 p-6 bg-rose bg-opacity-10 rounded-lg border border-rose border-opacity-20 max-w-3xl mx-auto">
              <h3 className="font-playfair text-xl font-semibold text-gray-800 flex items-center mb-3">
                <span className="text-2xl mr-2">✨</span> In-Person Classes
              </h3>
              <p className="text-gray-700">Join Fadia for physical classes in the heart of Cairo at the renowned Nun Center, Zamalek</p>
              <p className="text-gray-700 mt-2"><span className="font-medium">📍</span> Classes every Wednesday & Saturday</p>
              <div className="mt-4">
                <a href="https://nuncenter.com" className="inline-flex items-center text-rose hover:text-rose-600 transition-colors">
                  <span className="mr-1">🔗</span> Contact Nun Center
                </a>
              </div>
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
      </div>
      
      <SectionDividerBottom color="rose" />
    </section>
  );
}