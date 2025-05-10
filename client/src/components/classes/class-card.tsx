import { Class } from "@shared/schema";
import { useAuth } from "@/hooks/use-auth";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useLocation } from "wouter";
import FadiaClassImage from "../../assets/Fadia-156.jpg";

interface ClassCardProps {
  classData: Class;
  onBookClick: (classId: number) => void;
}

export function ClassCard({ classData, onBookClick }: ClassCardProps) {
  const { user } = useAuth();
  const { toast } = useToast();
  const [_, setLocation] = useLocation();
  
  const formatPrice = (price: number) => {
    return `$${(price / 100).toFixed(2)}`;
  };
  
  const formatDuration = (minutes: number) => {
    return `${minutes} minutes`;
  };
  
  const handleBookNow = () => {
    if (!user) {
      toast({
        title: "Authentication required",
        description: "Please login or sign up to book a class",
        variant: "destructive"
      });
      setLocation("/auth");
      return;
    }
    
    onBookClick(classData.id);
  };
  
  // Determine badge color based on class type
  const badgeColor = () => {
    switch (classData.classType) {
      case "group": return "bg-teal-light text-teal";
      case "small-group": return "bg-purple-light text-purple";
      case "private": return "bg-rose-light text-rose";
      default: return "bg-gray-100 text-gray-800";
    }
  };
  
  // Determine button color based on class type
  const buttonColor = () => {
    switch (classData.classType) {
      case "group": return "bg-teal text-white";
      case "small-group": return "bg-purple text-white";
      case "private": return "bg-rose text-white";
      default: return "bg-gray-500 text-white";
    }
  };
  
  // Format class type for display
  const formatClassType = (type: string) => {
    switch (type) {
      case "group": return "Group";
      case "small-group": return "Small Group";
      case "private": return "1-on-1";
      default: return type;
    }
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:transform hover:scale-105">
      <img 
        src={FadiaClassImage} 
        alt={classData.name} 
        className="w-full h-48 object-cover" 
      />
      <div className="p-6">
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-playfair font-bold text-xl">{classData.name}</h3>
          <span className={`${badgeColor()} text-xs px-3 py-1 rounded-full font-semibold`}>
            {formatClassType(classData.classType)}
          </span>
        </div>
        <p className="text-gray-600 mb-4">
          {classData.description}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-gray-700">
            <i className="far fa-clock mr-1"></i> {formatDuration(classData.duration)}
          </span>
          <span className="text-gray-700">{formatPrice(classData.price)} / class</span>
        </div>
        <button 
          className={`mt-4 w-full ${buttonColor()} font-medium py-2 px-4 rounded-md hover:bg-opacity-90 transition duration-300`}
          onClick={handleBookNow}
        >
          Book Now
        </button>
      </div>
    </div>
  );
}
