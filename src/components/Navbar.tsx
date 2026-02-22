import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Tour Package", path: "/tour-package" },
  { label: "Transport", path: "/transport" },
  { label: "News", path: "/news" },
];

const Navbar = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-5 px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="flex flex-col items-center leading-none">
            <span className="text-2xl font-bold tracking-wider text-primary-foreground font-display">
              L<span className="text-accent">OO</span>K
            </span>
            <span className="text-xs tracking-[0.3em] text-primary-foreground/80">Lombok</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-medium transition-colors ${
                location.pathname === item.path
                  ? "text-accent"
                  : "text-primary-foreground hover:text-accent"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-primary-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-foreground/95 backdrop-blur-sm">
          <div className="flex flex-col items-center gap-4 py-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? "text-accent"
                    : "text-primary-foreground hover:text-accent"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
