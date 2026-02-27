import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Navbar = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { label: t("nav.home"), path: "/" },
    { label: t("nav.tourPackage"), path: "/tour-package" },
    { label: t("nav.transport"), path: "/transport" },
    { label: t("nav.news"), path: "/news" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "glass-dark py-3 shadow-lg" : "py-6"}`}>
      <div className="container mx-auto flex items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex flex-col items-center leading-none">
            <span className="text-2xl font-bold tracking-[0.15em] text-primary-foreground font-display">
              L<span className="text-accent">OO</span>K
            </span>
            <span className="text-[10px] tracking-[0.4em] text-primary-foreground/50 uppercase font-sans font-light">Lombok</span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-12">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-xs tracking-widest uppercase font-medium transition-all duration-300 ${
                location.pathname === item.path
                  ? "text-accent"
                  : "text-primary-foreground/70 hover:text-primary-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <button
            onClick={() => setLanguage(language === "en" ? "id" : "en")}
            className="flex items-center gap-1.5 text-xs tracking-wider font-medium text-primary-foreground/70 hover:text-primary-foreground transition-all duration-300 border border-primary-foreground/20 px-4 py-1.5 rounded-full hover:border-primary-foreground/40"
          >
            <Globe size={12} />
            {language === "en" ? "EN" : "ID"}
          </button>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={() => setLanguage(language === "en" ? "id" : "en")}
            className="text-primary-foreground/70 text-xs font-medium border border-primary-foreground/20 px-3 py-1 rounded-full flex items-center gap-1"
          >
            <Globe size={11} />
            {language === "en" ? "EN" : "ID"}
          </button>
          <button
            className="text-primary-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden glass-dark border-t border-primary-foreground/10 mt-3">
          <div className="flex flex-col items-center gap-6 py-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className={`text-xs tracking-widest uppercase font-medium transition-colors ${
                  location.pathname === item.path
                    ? "text-accent"
                    : "text-primary-foreground/70 hover:text-primary-foreground"
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
