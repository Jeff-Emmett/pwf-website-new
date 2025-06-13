import { Class } from "@shared/schema";
import FadiaGardenImage from "@assets/fadia-garden_1749836720986.jpg";
import PilatesClassImage from "@assets/pilates_class_1749837680834.jpeg";
import FadiaStudioImage from "@assets/Fadia-156.jpg";
import FadiaPrivateImage from "@assets/Fadia-6_1749838606834.jpg";
import FadiaPoseImage from "@assets/fadia pose_1749838215401.jpg";

interface ClassCardProps {
  classData: Class;
}

export function ClassCard({ classData }: ClassCardProps) {
  const formatDuration = (minutes: number) => {
    return `${minutes} minutes`;
  };
  
  // Determine badge color based on class type
  const badgeColor = () => {
    switch (classData.classType) {
      case "group": return "bg-teal-light text-teal";
      case "small-group": return "bg-purple-light text-purple";
      case "private": return "bg-rose-light text-rose";
      case "online": return "bg-blue-100 text-blue-700";
      default: return "bg-gray-100 text-gray-800";
    }
  };
  
  // Format class type for display
  const formatClassType = (type: string) => {
    switch (type) {
      case "group": return "Group";
      case "small-group": return "Small Group";
      case "private": return "1-on-1";
      case "online": return "Online";
      default: return type;
    }
  };

  // Get class image based on class type - using four different images
  const getClassImage = () => {
    switch (classData.classType) {
      case "group": return FadiaGardenImage; // Garden outdoor class
      case "small-group": return PilatesClassImage; // New uploaded class image
      case "private": return FadiaPrivateImage; // Studio private session
      case "online": return FadiaPoseImage; // Elegant pose for online classes
      default: return FadiaGardenImage;
    }
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:transform hover:scale-105">
      <img 
        src={getClassImage()} 
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
        <p className="text-gray-600">
          {classData.description}
        </p>
      </div>
    </div>
  );
}
