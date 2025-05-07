import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/use-auth";
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger,
  SheetClose
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function Header() {
  const [location] = useLocation();
  const { user, logoutMutation } = useAuth();
  
  const isActive = (path: string) => {
    return location === path 
      ? "text-teal" 
      : "text-gray-700 hover:text-teal";
  };
  
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Classes", path: "/classes" },
    { name: "Community", path: "/community" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 bg-white bg-opacity-95 shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Logo />
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                href={link.path} 
                className={`transition-colors duration-200 font-raleway font-medium ${isActive(link.path)}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <>
                <span className="text-gray-700 font-raleway">
                  Hi, {user.fullName || user.username}
                </span>
                <Button
                  variant="outline"
                  className="text-teal hover:text-teal-600 hover:bg-gray-50"
                  onClick={() => logoutMutation.mutate()}
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Link 
                  href="/auth" 
                  className="text-teal hover:text-teal-600 transition-colors duration-200 font-raleway font-medium"
                >
                  Login
                </Link>
                <Link 
                  href="/auth" 
                  className="bg-teal text-white px-4 py-2 rounded-full hover:bg-opacity-90 transition-colors duration-200 font-raleway font-medium"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
          
          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <button type="button" className="text-gray-700 hover:text-teal">
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
                  <div className="border-t border-gray-200 my-2"></div>
                  {user ? (
                    <>
                      <div className="px-3 py-2 text-base font-medium text-gray-700">
                        Hi, {user.fullName || user.username}
                      </div>
                      <SheetClose asChild>
                        <Button
                          variant="outline"
                          className="w-full justify-start px-3 py-2 text-base font-medium text-teal hover:text-teal-600"
                          onClick={() => logoutMutation.mutate()}
                        >
                          Logout
                        </Button>
                      </SheetClose>
                    </>
                  ) : (
                    <>
                      <SheetClose asChild>
                        <Link 
                          href="/auth"
                          className="block px-3 py-2 text-base font-medium text-teal hover:text-teal-600"
                        >
                          Login
                        </Link>
                      </SheetClose>
                      <SheetClose asChild>
                        <Link 
                          href="/auth"
                          className="block px-3 py-2 text-base font-medium text-white bg-teal rounded-full text-center hover:bg-opacity-90"
                        >
                          Sign Up
                        </Link>
                      </SheetClose>
                    </>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
