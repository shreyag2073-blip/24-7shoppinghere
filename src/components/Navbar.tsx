import { Link, useLocation } from "react-router-dom";
import { Search, ShoppingCart, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { useCart } from "@/context/CartContext";

const navLinks = [
  { name: "Shop", href: "/shop" },
  { name: "Collections", href: "/collections" },
  { name: "Blog", href: "/blog" },
  { name: "Support", href: "/support" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { totalItems } = useCart();

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md">
      <nav className="container-main">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
  <Link to="/file.png" className="flex items-center gap-2">
  <img src="/file.png" alt="24-7Shoppinghere" className="h-8 w-8" />
  <span className="text-xl font-semibold tracking-tight">
   Shoppinghere
  </span>
</Link>


          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            <div className="flex items-center bg-muted/50 rounded-full px-2 py-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                    location.pathname === link.href
                      ? "bg-background shadow-sm"
                      : "hover:text-foreground/80"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            
            <div className="flex items-center gap-2 ml-4">
              <button className="p-2 hover:bg-muted rounded-full transition-colors">
                <Search className="w-5 h-5" />
              </button>
              <Link to="/cart" className="p-2 hover:bg-muted rounded-full transition-colors relative">
                <ShoppingCart className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-primary text-primary-foreground text-[10px] font-medium rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                    location.pathname === link.href
                      ? "bg-muted"
                      : "hover:bg-muted/50"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex items-center gap-4 px-4 pt-4 border-t border-border mt-2">
                <button className="p-2 hover:bg-muted rounded-full transition-colors">
                  <Search className="w-5 h-5" />
                </button>
                <Link to="/cart" className="p-2 hover:bg-muted rounded-full transition-colors relative">
                  <ShoppingCart className="w-5 h-5" />
                  {totalItems > 0 && (
                    <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-primary text-primary-foreground text-[10px] font-medium rounded-full flex items-center justify-center">
                      {totalItems}
                    </span>
                  )}
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
