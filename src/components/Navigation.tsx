import { NavLink } from "@/components/NavLink";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <NavLink to="/" className="text-xl font-bold text-primary">
            Hype Wave Maker
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <NavLink
              to="/"
              className="text-muted-foreground hover:text-foreground transition-colors"
              activeClassName="text-foreground font-medium"
            >
              Home
            </NavLink>
            <NavLink
              to="/features"
              className="text-muted-foreground hover:text-foreground transition-colors"
              activeClassName="text-foreground font-medium"
            >
              Features
            </NavLink>
            <NavLink
              to="/about"
              className="text-muted-foreground hover:text-foreground transition-colors"
              activeClassName="text-foreground font-medium"
            >
              About
            </NavLink>
            <NavLink
              to="/blog"
              className="text-muted-foreground hover:text-foreground transition-colors"
              activeClassName="text-foreground font-medium"
            >
              Blog
            </NavLink>
            <NavLink
              to="/faq"
              className="text-muted-foreground hover:text-foreground transition-colors"
              activeClassName="text-foreground font-medium"
            >
              FAQ
            </NavLink>
            <NavLink
              to="/contact"
              className="text-muted-foreground hover:text-foreground transition-colors"
              activeClassName="text-foreground font-medium"
            >
              Contact
            </NavLink>
            <Button asChild>
              <NavLink to="/">Try it Free</NavLink>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-3 border-t">
            <NavLink
              to="/"
              className="block py-2 text-muted-foreground hover:text-foreground transition-colors"
              activeClassName="text-foreground font-medium"
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/features"
              className="block py-2 text-muted-foreground hover:text-foreground transition-colors"
              activeClassName="text-foreground font-medium"
              onClick={() => setIsOpen(false)}
            >
              Features
            </NavLink>
            <NavLink
              to="/about"
              className="block py-2 text-muted-foreground hover:text-foreground transition-colors"
              activeClassName="text-foreground font-medium"
              onClick={() => setIsOpen(false)}
            >
              About
            </NavLink>
            <NavLink
              to="/blog"
              className="block py-2 text-muted-foreground hover:text-foreground transition-colors"
              activeClassName="text-foreground font-medium"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </NavLink>
            <NavLink
              to="/faq"
              className="block py-2 text-muted-foreground hover:text-foreground transition-colors"
              activeClassName="text-foreground font-medium"
              onClick={() => setIsOpen(false)}
            >
              FAQ
            </NavLink>
            <NavLink
              to="/contact"
              className="block py-2 text-muted-foreground hover:text-foreground transition-colors"
              activeClassName="text-foreground font-medium"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </NavLink>
            <Button asChild className="w-full">
              <NavLink to="/" onClick={() => setIsOpen(false)}>
                Try it Free
              </NavLink>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};
