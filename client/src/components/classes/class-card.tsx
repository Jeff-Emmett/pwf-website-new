import { Class } from "@shared/schema";
import { Link } from "wouter";
import FadiaGardenImage from "@assets/fadia-garden_1749836720986.jpg";
import PilatesClassImage from "@assets/pilates_class_1749837680834.jpeg";
import FadiaPrivateImage from "@assets/Fadia-7_1749842141071.jpg";
import FadiaBallImage from "@assets/fadia-ball_1749842241591.jpg";

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
      case "online": return FadiaBallImage; // Ball pose for online classes
      default: return FadiaGardenImage;
    }
  };

  // Get link based on class type
  const getClassLink = () => {
    switch (classData.classType) {
      case "group": return "https://nuncenter.com/";
      case "small-group": return "https://nuncenter.com/";
      case "private": return "/contact";
      case "online": return "https://www.momoyoga.com/pilates-with-fadia/schedule";
      default: return "#";
    }
  };

  // Determine if link should open in new tab
  const shouldOpenNewTab = (classType: string) => {
    return classType === "group" || classType === "small-group" || classType === "online";
  };

  const linkProps = shouldOpenNewTab(classData.classType) 
    ? { href: getClassLink(), target: "_blank", rel: "noopener noreferrer" }
    : { href: getClassLink() };

  return (
    <a {...linkProps} className="block">
      <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:transform hover:scale-105">
        <img 
          src={getClassImage()} 
          alt={classData.name} 
          className="w-full h-48 object-cover" 
        />
        <div className="p-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-playfair font-bold text-lg leading-tight">{classData.name}</h3>
            <span className={`${badgeColor()} text-xs px-2 py-1 rounded-full font-semibold ml-2 flex-shrink-0`}>
              {formatClassType(classData.classType)}
            </span>
          </div>
          <p className="text-gray-600 text-sm leading-snug">
            {classData.description}
          </p>
        </div>
      </div>
    </a>
  );
}
