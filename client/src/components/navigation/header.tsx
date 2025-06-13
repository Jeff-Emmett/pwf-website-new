import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Logo } from "@/components/ui/logo";

import { 
  Sheet, 
  SheetContent, 
  SheetTrigger,
  SheetClose
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function Header() {
  const [location] = useLocation();
  
  const isActive = (path: string) => {
    return location === path 
      ? "text-white" 
      : "text-white text-opacity-80 hover:text-white";
  };
  
  const navLinks = [
    { name: "Class Calendar", path: "/calendar" },
    { name: "Meet Fadia", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 bg-teal shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-3 lg:px-4">
        <div className="flex justify-between items-center py-1">
          <div className="flex items-center">
            <Logo />
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                href={link.path} 
                className={`transition-colors duration-200 font-raleway font-bold text-lg ${isActive(link.path)}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          

          
          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <button type="button" className="text-white hover:text-opacity-80">
                  <span className="sr-only">Open main menu</span>
                  <Menu className="h-6 w-6" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
                  {navLinks.map((link) => (
                    <SheetClose asChild key={link.path}>
                      <Link 
                        href={link.path}
                        className={`block px-3 py-2 text-base font-medium ${isActive(link.path)}`}
                      >
                        {link.name}
                      </Link>
                    </SheetClose>
                  ))}

                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
