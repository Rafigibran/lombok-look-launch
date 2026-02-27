import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <div className="mb-6">
              <span className="text-3xl font-bold font-display tracking-[0.15em]">
                L<span className="text-accent">OO</span>K
              </span>
              <span className="block text-[10px] tracking-[0.4em] text-primary-foreground/40 uppercase font-light mt-1">Lombok</span>
            </div>
            <p className="text-sm text-primary-foreground/40 leading-relaxed">{t("footer.desc")}</p>
          </div>

          <div>
            <h4 className="text-[11px] font-semibold mb-6 uppercase tracking-[0.2em] text-primary-foreground/60">{t("footer.quickLinks")}</h4>
            <div className="flex flex-col gap-3">
              <Link to="/" className="text-sm text-primary-foreground/40 hover:text-accent transition-colors duration-300">{t("nav.home")}</Link>
              <Link to="/tour-package" className="text-sm text-primary-foreground/40 hover:text-accent transition-colors duration-300">{t("nav.tourPackage")}</Link>
              <Link to="/transport" className="text-sm text-primary-foreground/40 hover:text-accent transition-colors duration-300">{t("nav.transport")}</Link>
              <Link to="/news" className="text-sm text-primary-foreground/40 hover:text-accent transition-colors duration-300">{t("nav.news")}</Link>
            </div>
          </div>

          <div>
            <h4 className="text-[11px] font-semibold mb-6 uppercase tracking-[0.2em] text-primary-foreground/60">{t("footer.contactUs")}</h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 text-sm text-primary-foreground/40">
                <Phone size={14} className="text-accent" />
                <span>+62 812 3456 7890</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-primary-foreground/40">
                <Mail size={14} className="text-accent" />
                <span>info@looklombok.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-primary-foreground/40">
                <MapPin size={14} className="text-accent" />
                <span>Mataram, Lombok, NTB</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-[11px] font-semibold mb-6 uppercase tracking-[0.2em] text-primary-foreground/60">{t("footer.followUs")}</h4>
            <div className="flex gap-3">
              <a href="#" className="w-11 h-11 rounded-full border border-primary-foreground/10 flex items-center justify-center hover:border-accent hover:text-accent transition-all duration-300">
                <Instagram size={16} />
              </a>
              <a href="#" className="w-11 h-11 rounded-full border border-primary-foreground/10 flex items-center justify-center hover:border-accent hover:text-accent transition-all duration-300">
                <Facebook size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/8 mt-16 pt-8 text-center">
          <p className="text-xs text-primary-foreground/30 tracking-wider">{t("footer.rights")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
