import { Link } from "wouter";

export function Logo({ className = "", size = "regular" }: { className?: string, size?: "small" | "regular" | "large" }) {
  const sizeClasses = {
    small: "h-8",
    regular: "h-12",
    large: "h-16",
  };

  return (
    <Link href="/">
      <a className={`inline-block ${className}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 600 100"
          className={`${sizeClasses[size]}`}
        >
          <text
            x="20"
            y="70"
            fontFamily="'Playfair Display', serif"
            fontSize="80"
            fontWeight="400"
            fill="#0c8991"
            textAnchor="start"
          >
            Pilates with Fadia
          </text>
        </svg>
      </a>
    </Link>
  );
}
