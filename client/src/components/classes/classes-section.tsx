import { ClassCard } from "./class-card";
import { useQuery } from "@tanstack/react-query";
import { Class } from "@shared/schema";
import { Skeleton } from "@/components/ui/skeleton";
import FadiaClassImage from "../../assets/Fadia-156.jpg";

export function ClassesSection() {
  const { data: classes, isLoading, error } = useQuery<Class[]>({
    queryKey: ["/api/classes"],
  });
  
  return (
    <section className="py-20" style={{ backgroundColor: 'rgba(181, 80, 118, 0.1)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-gray-800 mb-4">
            Available Classes
          </h2>
          <p className="max-w-3xl mx-auto text-gray-600">
            Join personalized classes where you'll discover strength, flexibility, and mindfulness.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="bg-white p-6 md:p-8 rounded-lg border border-gray-100">
            <div className="flex flex-col justify-between h-full">
              <div>
                <h3 className="font-playfair text-xl font-semibold text-gray-800 mb-3">
                  ✨ In-Person Classes
                </h3>
                <p className="text-gray-700">Join Fadia for physical classes in the heart of Cairo at the renowned Nun Center, Zamalek</p>
                <p className="text-gray-700 mt-2">📍 Classes every Wednesday & Saturday</p>
              </div>
              <a href="https://nuncenter.com" className="mt-4 inline-flex items-center text-rose hover:text-rose-600 transition-colors font-medium">
                Contact Nun Center →
              </a>
            </div>
          </div>
          
          <div className="bg-white p-6 md:p-8 rounded-lg border border-gray-100">
            <div className="flex flex-col justify-between h-full">
              <div>
                <h3 className="font-playfair text-xl font-semibold text-gray-800 mb-3">
                  🖥️ Online Classes
                </h3>
                <p className="text-gray-700">Experience Fadia's classes from anywhere in the world with live-streamed and on-demand sessions</p>
                <p className="text-gray-700 mt-2">⏰ Flexible scheduling to fit your lifestyle</p>
              </div>
              <a href="/classes" className="mt-4 inline-flex items-center text-purple hover:text-purple-600 transition-colors font-medium">
                Learn More →
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
                    <Skeleton className="h-6 w-20" />
                  </div>
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-3/4 mb-4" />
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
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}