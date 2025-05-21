import { Class } from "@shared/schema";
import FadiaGroupClassImage from "../../assets/Fadia-15.jpg";
import FadiaSmallGroupClassImage from "../../assets/Fadia-156.jpg";
import FadiaPrivateClassImage from "../../assets/Fadia-132.jpg";

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

  // Get class image based on class type
  const getClassImage = () => {
    switch (classData.classType) {
      case "group": return FadiaGroupClassImage;
      case "small-group": return FadiaSmallGroupClassImage;
      case "private": return FadiaPrivateClassImage;
      case "online": return FadiaSmallGroupClassImage; // Reusing this image for online classes
      default: return FadiaGroupClassImage;
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
        <p className="text-gray-600 mb-4">
          {classData.description}
        </p>
        <div className="flex items-center">
          <span className="text-gray-700">
            <i className="far fa-clock mr-1"></i> {formatDuration(classData.duration)}
          </span>
        </div>
      </div>
    </div>
  );
}
