import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Navbar = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { label: t("nav.home"), path: "/" },
    { label: t("nav.tourPackage"), path: "/tour-package" },
    { label: t("nav.transport"), path: "/transport" },
    { label: t("nav.news"), path: "/news" },
  ];

  return (
    <nav className="absolute top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-5 px-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex flex-col items-center leading-none">
            <span className="text-2xl font-bold tracking-wider text-primary-foreground font-display">
              L<span className="text-accent">OO</span>K
            </span>
            <span className="text-xs tracking-[0.3em] text-primary-foreground/80">Lombok</span>
          </div>
        </Link>

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
          {/* Language Switcher */}
          <button
            onClick={() => setLanguage(language === "en" ? "id" : "en")}
            className="flex items-center gap-1.5 text-sm font-medium text-primary-foreground hover:text-accent transition-colors bg-primary-foreground/10 px-3 py-1.5 rounded-full"
          >
            <Globe size={14} />
            {language === "en" ? "EN" : "ID"}
          </button>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={() => setLanguage(language === "en" ? "id" : "en")}
            className="text-primary-foreground text-xs font-medium bg-primary-foreground/10 px-2.5 py-1 rounded-full flex items-center gap-1"
          >
            <Globe size={12} />
            {language === "en" ? "EN" : "ID"}
          </button>
          <button
            className="text-primary-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

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
