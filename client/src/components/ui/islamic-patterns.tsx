import React from "react";

interface PatternProps {
  className?: string;
  fillColor?: string;
}

export function GeometricPattern({ className = "", fillColor = "#0c8991" }: PatternProps) {
  return (
    <div className={`absolute inset-0 opacity-10 overflow-hidden ${className}`}>
      <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
        <pattern id="islamic-geometric" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <path
            d="M10,0 L20,10 L10,20 L0,10 Z"
            fill="none"
            stroke={fillColor}
            strokeWidth="0.5"
          />
          <circle cx="10" cy="10" r="2" fill={fillColor} fillOpacity="0.3" />
          <path
            d="M0,0 L20,0 M0,10 L20,10 M0,20 L20,20 M0,0 L0,20 M10,0 L10,20 M20,0 L20,20"
            stroke={fillColor}
            strokeWidth="0.2"
            strokeDasharray="1,1"
          />
        </pattern>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#islamic-geometric)" />
      </svg>
    </div>
  );
}

export function ArabicArch({ className = "", fillColor = "#0c8991" }: PatternProps) {
  return (
    <div className={`w-full overflow-hidden ${className}`}>
      <svg viewBox="0 0 100 30" preserveAspectRatio="none">
        <path
          d="M0,30 L100,30 L100,10 C75,30 25,30 0,10 Z"
          fill={fillColor}
          fillOpacity="0.1"
        />
        <path
          d="M0,10 C25,30 75,30 100,10"
          fill="none"
          stroke={fillColor}
          strokeWidth="0.5"
          strokeDasharray="1,1"
        />
      </svg>
    </div>
  );
}

export function CrescentMoon({ className = "", fillColor = "#0c8991" }: PatternProps) {
  return (
    <div className={`${className}`}>
      <svg viewBox="0 0 24 24" width="24" height="24">
        <path
          d="M12,2 A10,10 0 0 1 12,22 A10,10 0 0 1 12,2 A8,8 0 0 0 12,18 A8,8 0 0 0 12,2"
          fill={fillColor}
        />
      </svg>
    </div>
  );
}

export function DividerPattern({ className = "", fillColor = "#0c8991" }: PatternProps) {
  return (
    <div className={`w-full flex items-center justify-center py-8 ${className}`}>
      <div className="w-1/3 h-px bg-gray-300"></div>
      <div className="mx-4">
        <svg width="40" height="40" viewBox="0 0 100 100">
          <polygon
            points="50,10 61,35 90,35 65,55 75,80 50,65 25,80 35,55 10,35 39,35"
            fill={fillColor}
            fillOpacity="0.7"
          />
          <circle cx="50" cy="50" r="10" fill={fillColor} />
        </svg>
      </div>
      <div className="w-1/3 h-px bg-gray-300"></div>
    </div>
  );
}

export function ArabicPattern({ className = "", fillColor = "#0c8991" }: PatternProps) {
  return (
    <div className={`absolute inset-0 opacity-10 overflow-hidden ${className}`}>
      <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
        <pattern id="arabesqueTile" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <path
            d="M0,0 C5,5 15,5 20,0 C15,-5 5,-5 0,0 Z
               M0,20 C5,15 15,15 20,20 C15,25 5,25 0,20 Z
               M10,10 C15,5 15,15 10,10 Z"
            fill="none"
            stroke={fillColor}
            strokeWidth="0.5"
          />
        </pattern>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#arabesqueTile)" />
      </svg>
    </div>
  );
}