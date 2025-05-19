import { Link } from "wouter";
import LogoImage from "../../assets/rectangular-logo.png";

export function Logo({ className = "", size = "regular" }: { className?: string, size?: "small" | "regular" | "large" }) {
  const sizeClasses = {
    small: "h-20", /* reduced by 20% */
    regular: "h-24", /* reduced by 20% */
    large: "h-32", /* reduced by 20% */
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
