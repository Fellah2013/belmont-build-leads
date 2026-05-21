import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, HardHat, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "How We Work", path: "/how-we-work" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="p-2 bg-navy rounded-lg">
              <HardHat className="h-8 w-8 text-orange" />
            </div>
            <span className="text-2xl font-heading font-extrabold text-navy tracking-tight">
              BELMONT
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-semibold transition-colors duration-200 hover:text-orange ${
                  isActive(link.path) ? "text-orange" : "text-navy"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact">
              <Button className="bg-orange hover:bg-orange/90 text-white font-bold">
                Get a Quote
              </Button>
            </Link>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6 text-navy" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetTitle className="text-left font-heading font-bold text-navy">
                  Navigation
                </SheetTitle>
                <SheetDescription className="text-left">
                  Explore Belmont Construction services and projects.
                </SheetDescription>
                <div className="flex flex-col space-y-4 mt-8">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`text-lg font-bold transition-colors duration-200 ${
                        isActive(link.path) ? "text-orange" : "text-navy"
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                  <div className="pt-4 border-t border-gray-100">
                    <Button className="w-full bg-orange hover:bg-orange/90 text-white font-bold py-6 text-lg">
                      Request a Quote
                    </Button>
                  </div>
                  <div className="flex items-center space-x-2 text-navy font-bold">
                    <Phone className="h-5 w-5 text-orange" />
                    <span>+254 700 000 000</span>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;