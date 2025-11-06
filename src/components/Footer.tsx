import { NavLink } from "@/components/NavLink";

export const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Hype Wave Maker</h3>
            <p className="text-sm text-muted-foreground">
              AI-powered video optimization for YouTube creators
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <NavLink to="/features" className="text-muted-foreground hover:text-foreground">
                  Features
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="text-muted-foreground hover:text-foreground">
                  Pricing
                </NavLink>
              </li>
              <li>
                <NavLink to="/faq" className="text-muted-foreground hover:text-foreground">
                  FAQ
                </NavLink>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <NavLink to="/about" className="text-muted-foreground hover:text-foreground">
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/blog" className="text-muted-foreground hover:text-foreground">
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="text-muted-foreground hover:text-foreground">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <NavLink to="/privacy" className="text-muted-foreground hover:text-foreground">
                  Privacy Policy
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="text-muted-foreground hover:text-foreground">
                  Terms of Service
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Hype Wave Maker. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
