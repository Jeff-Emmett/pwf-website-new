import React from "react";

interface SectionDividerProps {
  color?: "teal" | "purple" | "rose";
  className?: string;
  withPattern?: boolean;
}

export function SectionDivider({ 
  color = "teal", 
  className = "",
  withPattern = false
}: SectionDividerProps) {
  
  const colors = {
    teal: "#0c8991",
    purple: "#9D5E9B",
    rose: "#B55076"
  };
  
  const fillColor = colors[color];
  const patternClass = withPattern ? `islamic-pattern-${color}` : "";
  
  return (
    <div className={`relative ${className}`}>
      <div className="islamic-arch-top">
        <svg viewBox="0 0 100 20" preserveAspectRatio="none">
          <path d="M0,20 L100,20 L100,15 C75,0 25,0 0,15 Z" fill={fillColor} fillOpacity="0.15" />
          <path d="M0,15 C25,0 75,0 100,15" fill="none" stroke={fillColor} strokeWidth="0.3" />
        </svg>
      </div>
      
      {withPattern && <div className={`absolute inset-0 ${patternClass}`}></div>}
    </div>
  );
}

export function SectionDividerBottom({ 
  color = "teal", 
  className = "",
  withPattern = false
}: SectionDividerProps) {
  
  const colors = {
    teal: "#0c8991",
    purple: "#9D5E9B",
    rose: "#B55076"
  };
  
  const fillColor = colors[color];
  const patternClass = withPattern ? `islamic-pattern-${color}` : "";
  
  return (
    <div className={`relative ${className}`}>
      <div className="islamic-arch-bottom">
        <svg viewBox="0 0 100 20" preserveAspectRatio="none">
          <path d="M0,20 L100,20 L100,15 C75,0 25,0 0,15 Z" fill={fillColor} fillOpacity="0.15" />
          <path d="M0,15 C25,0 75,0 100,15" fill="none" stroke={fillColor} strokeWidth="0.3" />
        </svg>
      </div>
      
      {withPattern && <div className={`absolute inset-0 ${patternClass}`}></div>}
    </div>
  );
}

export function IslamicPattern({ 
  color = "teal", 
  className = "", 
  opacity = 10
}: { 
  color?: "teal" | "purple" | "rose";
  className?: string; 
  opacity?: number;
}) {
  const patternClass = color === "teal" 
    ? "islamic-pattern-teal" 
    : color === "purple" 
      ? "islamic-pattern" 
      : "islamic-pattern-rose";
      
  return <div className={`absolute inset-0 ${patternClass} opacity-${opacity} ${className}`}></div>;
}

export function ArabesquePattern({ 
  color = "teal", 
  className = "", 
  opacity = 10
}: { 
  color?: "teal" | "purple" | "rose";
  className?: string; 
  opacity?: number;
}) {
  const patternClass = color === "teal" 
    ? "arabesque-pattern" 
    : color === "purple" 
      ? "arabesque-pattern-purple" 
      : "arabesque-pattern-rose";
      
  return <div className={`absolute inset-0 ${patternClass} opacity-${opacity} ${className}`}></div>;
}

export function CrescentDivider({ 
  color = "teal", 
  className = ""
}: { 
  color?: "teal" | "purple" | "rose";
  className?: string; 
}) {
  const colors = {
    teal: "#0c8991",
    purple: "#9D5E9B",
    rose: "#B55076"
  };
  
  const fillColor = colors[color];
  
  return (
    <div className={`flex items-center justify-center py-8 ${className}`}>
      <div className="w-1/3 h-px bg-gray-300"></div>
      <div className="mx-4">
        <svg width="40" height="40" viewBox="0 0 100 100">
          <path
            d="M50,10 A40,40 0 0 1 50,90 A40,40 0 0 1 50,10 A30,30 0 0 0 50,70 A30,30 0 0 0 50,10"
            fill={fillColor}
            fillOpacity="0.8"
          />
          <circle cx="60" cy="40" r="5" fill="#fff" />
        </svg>
      </div>
      <div className="w-1/3 h-px bg-gray-300"></div>
    </div>
  );
}

export function StarDivider({ 
  color = "teal", 
  className = ""
}: { 
  color?: "teal" | "purple" | "rose";
  className?: string; 
}) {
  const colors = {
    teal: "#0c8991",
    purple: "#9D5E9B",
    rose: "#B55076"
  };
  
  const fillColor = colors[color];
  
  return (
    <div className={`flex items-center justify-center py-8 ${className}`}>
      <div className="w-1/3 h-px bg-gray-300"></div>
      <div className="mx-4">
        <svg width="40" height="40" viewBox="0 0 100 100">
          <polygon
            points="50,10 61,35 90,35 65,55 75,80 50,65 25,80 35,55 10,35 39,35"
            fill={fillColor}
            fillOpacity="0.8"
          />
        </svg>
      </div>
      <div className="w-1/3 h-px bg-gray-300"></div>
    </div>
  );
}