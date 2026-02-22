import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <div className="mb-4">
              <span className="text-2xl font-bold font-display">
                L<span className="text-accent">OO</span>K
              </span>
              <span className="block text-xs tracking-[0.3em] text-primary-foreground/60">Lombok</span>
            </div>
            <p className="text-sm text-primary-foreground/60 leading-relaxed">{t("footer.desc")}</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">{t("footer.quickLinks")}</h4>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">{t("nav.home")}</Link>
              <Link to="/tour-package" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">{t("nav.tourPackage")}</Link>
              <Link to="/transport" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">{t("nav.transport")}</Link>
              <Link to="/news" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">{t("nav.news")}</Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">{t("footer.contactUs")}</h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-sm text-primary-foreground/60">
                <Phone size={14} className="text-accent" />
                <span>+62 812 3456 7890</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-primary-foreground/60">
                <Mail size={14} className="text-accent" />
                <span>info@looklombok.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-primary-foreground/60">
                <MapPin size={14} className="text-accent" />
                <span>Mataram, Lombok, NTB</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">{t("footer.followUs")}</h4>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Facebook size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-6 text-center">
          <p className="text-xs text-primary-foreground/40">{t("footer.rights")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
