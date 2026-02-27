import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Car, Users, Clock, Shield, CheckCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import transportHero from "@/assets/transport-hero.jpg";

const Transport = () => {
  const { language, t } = useLanguage();

  const vehicles = [
    { name: "Toyota Avanza", capacity: `6 ${t("transport.passengers")}`, price: "Rp500.000", type: "MPV" },
    { name: "Toyota Innova", capacity: `6 ${t("transport.passengers")}`, price: "Rp700.000", type: "MPV Premium" },
    { name: "Hiace Commuter", capacity: `14 ${t("transport.passengers")}`, price: "Rp1.200.000", type: "Minibus" },
    { name: "Bus Medium", capacity: `30 ${t("transport.passengers")}`, price: "Rp2.500.000", type: "Bus" },
  ];

  const benefits = [
    t("transport.benefit1"), t("transport.benefit2"), t("transport.benefit3"),
    t("transport.benefit4"), t("transport.benefit5"), t("transport.benefit6"),
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="relative h-[60vh] min-h-[400px]">
        <img src={transportHero} alt="Transport" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 hero-gradient" />
        <div className="relative h-full flex items-center justify-center text-center px-6">
          <div>
            <p className="text-[11px] uppercase tracking-[0.5em] text-primary-foreground/50 mb-4 font-sans font-light animate-fade-in">
              {language === "id" ? "Layanan Premium" : "Premium Service"}
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold text-primary-foreground text-shadow animate-fade-in-up font-display whitespace-pre-line leading-[0.95]">
              {t("transport.hero.title")}
            </h1>
            <p className="mt-6 text-base text-primary-foreground/50 animate-fade-in-up font-light" style={{ animationDelay: "0.2s" }}>
              {t("transport.hero.subtitle")}
            </p>
          </div>
        </div>
      </section>

      <section className="py-28">
        <div className="container mx-auto px-6">
          <p className="text-[11px] uppercase tracking-[0.4em] text-muted-foreground text-center mb-4 font-sans">
            {language === "id" ? "Pilihan Kendaraan" : "Vehicle Selection"}
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold text-center text-foreground mb-6 font-display">
            {t("transport.fleet.title")} <span className="text-primary italic">{t("transport.fleet.titleAccent")}</span>
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-lg mx-auto text-sm font-light">{t("transport.fleet.subtitle")}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {vehicles.map((v, i) => (
              <div key={i} className="bg-card rounded-2xl p-7 premium-shadow hover:-translate-y-1 transition-all duration-500 border border-border/50">
                <div className="w-12 h-12 rounded-2xl bg-teal-light flex items-center justify-center mb-5">
                  <Car size={20} className="text-primary" />
                </div>
                <span className="text-[10px] font-medium text-primary uppercase tracking-widest">{v.type}</span>
                <h3 className="text-lg font-semibold text-foreground mt-2 font-display">{v.name}</h3>
                <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                  <Users size={13} /> <span className="text-xs">{v.capacity}</span>
                </div>
                <div className="mt-5 pt-5 border-t border-border">
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wider">{t("tour.startFrom")}</p>
                  <p className="text-xl font-bold text-foreground mt-1">{v.price}<span className="text-xs font-normal text-muted-foreground">{t("transport.day")}</span></p>
                </div>
                <a
                  href={`https://wa.me/6281234567890?text=${encodeURIComponent(language === "id" ? `Halo, saya ingin memesan ${v.name} (${v.type}) - ${v.capacity} dengan harga ${v.price}/hari. Mohon informasi lebih lanjut.` : `Hello, I would like to book ${v.name} (${v.type}) - ${v.capacity} at ${v.price}/day. Please provide more information.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 block w-full bg-foreground text-primary-foreground py-3 rounded-full text-xs uppercase tracking-[0.15em] font-semibold hover:bg-primary transition-colors duration-300 text-center"
                >
                  {t("transport.bookNow")}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1">
              <p className="text-[11px] uppercase tracking-[0.4em] text-muted-foreground mb-4 font-sans">
                {language === "id" ? "Keunggulan" : "Why Us"}
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-8 font-display">
                {t("transport.why.title")} <span className="text-primary italic">{t("transport.why.titleAccent")}</span>?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((b, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle size={18} className="text-primary flex-shrink-0" />
                    <span className="text-sm text-foreground font-light">{b}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 grid grid-cols-3 gap-4">
              <div className="bg-card rounded-2xl p-6 text-center premium-shadow border border-border/50">
                <Clock size={24} className="mx-auto text-primary mb-3" />
                <h4 className="font-bold text-2xl text-foreground font-display">24/7</h4>
                <p className="text-xs text-muted-foreground mt-1">{t("transport.available")}</p>
              </div>
              <div className="bg-card rounded-2xl p-6 text-center premium-shadow border border-border/50">
                <Shield size={24} className="mx-auto text-primary mb-3" />
                <h4 className="font-bold text-2xl text-foreground font-display">100%</h4>
                <p className="text-xs text-muted-foreground mt-1">{t("transport.insured")}</p>
              </div>
              <div className="bg-card rounded-2xl p-6 text-center premium-shadow border border-border/50">
                <Car size={24} className="mx-auto text-primary mb-3" />
                <h4 className="font-bold text-2xl text-foreground font-display">50+</h4>
                <p className="text-xs text-muted-foreground mt-1">{t("transport.vehicles")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Transport;
