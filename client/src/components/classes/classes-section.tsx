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
        
        {/* Class description boxes removed */}
        
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
        
        <div className="text-center mt-12">
          <a href="/calendar" className="inline-block">
            <button className="px-8 py-3 bg-rose-800 text-white font-bold rounded-full hover:bg-rose-900 transition duration-300 shadow-md">
              Book a Class Now
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}