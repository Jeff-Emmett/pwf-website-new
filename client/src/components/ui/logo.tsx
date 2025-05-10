import { Link } from "wouter";
import LogoImage from "../../assets/Pilates with Fadia.png";

export function Logo({ className = "", size = "regular" }: { className?: string, size?: "small" | "regular" | "large" }) {
  const sizeClasses = {
    small: "h-8",
    regular: "h-12",
    large: "h-16",
  };

  return (
    <Link 
      href="/"
      className={`inline-block ${className}`}
    >
      <img 
        src={LogoImage} 
        alt="Pilates with Fadia" 
        className={`${sizeClasses[size]}`}
      />
    </Link>
  );
}
