import { Link } from "wouter";
import LogoImage from "../../assets/rectangular-logo.png";

export function Logo({ className = "", size = "regular" }: { className?: string, size?: "small" | "regular" | "large" }) {
  const sizeClasses = {
    small: "h-24", /* twice the size */
    regular: "h-32", /* twice the size */
    large: "h-40", /* twice the size */
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
