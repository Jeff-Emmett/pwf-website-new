import { Link } from "wouter";
import LogoImage from "../../assets/pilates-with-fadia-logo.png";

export function Logo({ className = "", size = "regular" }: { className?: string, size?: "small" | "regular" | "large" }) {
  const sizeClasses = {
    small: "h-48", /* 3x bigger */
    regular: "h-60", /* 3x bigger */
    large: "h-84", /* 3x bigger */
  };

  return (
    <Link 
      href="/"
      className={`inline-block ${className}`}
    >
      <img 
        src={LogoImage} 
        alt="Pilates with Fadia" 
        className={`${sizeClasses[size]} object-contain object-center`}
        style={{ 
          padding: "0", 
          margin: "0", 
          filter: "drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.1))",
          maxWidth: "100%"
        }}
      />
    </Link>
  );
}
