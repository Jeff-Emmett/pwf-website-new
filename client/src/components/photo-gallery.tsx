import FadiaGardenImage from "@assets/fadia-garden_1749836720986.jpg";
import FadiaPoseImage from "@assets/fadia pose_1749838215401.jpg";
import FadiaBridgeImage from "@assets/fadia-bridge_1749838118611.jpg";
import FadiaBallImage from "@assets/fadia-ball_1749842241591.jpg";
import PilatesClassImage from "@assets/pilates_class_1749837680834.jpeg";
import PilatesCommunityImage from "@assets/pilates-community_1749840293503.jpeg";
import Fadia132Image from "@assets/Fadia-132.jpg";
import Fadia156Image from "@assets/Fadia-156.jpg";
import DSC01368Image from "@assets/DSC01368 2.jpeg";
import DSC01380Image from "@assets/DSC01380.jpeg";
import DSC01394Image from "@assets/DSC01394 2.jpeg";
import DSC01466Image from "@assets/DSC01466 2.jpeg";

export function PhotoGallery() {
  const galleryImages = [
    { src: FadiaGardenImage, alt: "Outdoor Pilates session in the garden" },
    { src: FadiaPoseImage, alt: "Fadia demonstrating a Pilates pose" },
    { src: FadiaBridgeImage, alt: "Bridge pose demonstration" },
    { src: FadiaBallImage, alt: "Pilates ball exercise" },
    { src: PilatesClassImage, alt: "Group Pilates class" },
    { src: PilatesCommunityImage, alt: "Pilates community gathering" },
    { src: Fadia132Image, alt: "Fadia in a focused pose" },
    { src: Fadia156Image, alt: "Pilates stretching demonstration" },
    { src: DSC01368Image, alt: "Professional Pilates session" },
    { src: DSC01380Image, alt: "Pilates equipment demonstration" },
    { src: DSC01394Image, alt: "Advanced Pilates pose" },
    { src: DSC01466Image, alt: "Pilates class in session" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-rose mb-4">
            Gallery
          </h2>
          <p className="max-w-3xl mx-auto text-gray-600">
            Discover the beauty of Pilates through moments captured in our classes and sessions
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className="relative overflow-hidden rounded-lg aspect-square hover:transform hover:scale-105 transition-transform duration-300"
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}