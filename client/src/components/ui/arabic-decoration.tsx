import React from "react";

interface ArabicDecorationProps {
  children: React.ReactNode;
  className?: string;
}

export function ArabicDecoration({ children, className = "" }: ArabicDecorationProps) {
  return (
    <div className={`relative arabic-decoration ${className}`} style={{ paddingBottom: "2rem" }}>
      {children}
      <div 
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[100px] h-[10px]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='10' viewBox='0 0 100 10'%3E%3Cpath d='M0,5 C20,15 30,-5 50,5 C70,15 80,-5 100,5' stroke='%230c8991' fill='none' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center"
        }}
      />
    </div>
  );
}
