import { ClassCard } from "./class-card";
import { useQuery } from "@tanstack/react-query";
import { Class } from "@/lib/schema";
import { Skeleton } from "@/components/ui/skeleton";
import { apiRequest } from "@/lib/queryClient";
import FadiaClassImage from "../../assets/Fadia-156.jpg";


export function ClassesSection() {
  const { data: classes, isLoading, error } = useQuery<Class[]>({
    queryKey: ["/api/classes"],
    queryFn: async () => {
      const res = await apiRequest("GET", "/api/classes");
      return await res.json();
    },
  });
  
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-rose mb-4">
            Available Classes
          </h2>
          <p className="max-w-3xl mx-auto text-gray-600">Join personalized pilates classes where you'll discover strength, flexibility, and mindfulness.</p>
        </div>
        
        {/* Class description boxes removed */}
        
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((_, i) => (
              <div key={i} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <Skeleton className="w-full h-36" />
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <Skeleton className="h-5 w-24" />
                    <Skeleton className="h-5 w-16" />
                  </div>
                  <Skeleton className="h-4 w-full mb-1" />
                  <Skeleton className="h-4 w-full mb-1" />
                  <Skeleton className="h-4 w-3/4" />
                </div>
              </div>
            ))}
          </div>
        ) : error ? (
          <div className="text-center text-red-500">
            <p>Error loading classes. Please try again later.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {classes?.map((classData) => (
              <ClassCard 
                key={classData.id} 
                classData={classData} 
              />
            ))}
          </div>
        )}
        
        <div className="text-center mt-12">
          <a href="https://www.momoyoga.com/pilates-with-fadia/schedule" target="_blank" rel="noopener noreferrer" className="inline-block">
            <button className="px-12 py-5 bg-rose text-white font-bold rounded-full hover:bg-rose-700 transition duration-300 shadow-md text-xl">Book a Class</button>
          </a>
        </div>
      </div>
    </section>
  );
}