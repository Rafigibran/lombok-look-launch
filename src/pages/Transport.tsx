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
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground text-shadow animate-fade-in-up font-display whitespace-pre-line">
              {t("transport.hero.title")}
            </h1>
            <p className="mt-4 text-lg text-primary-foreground/80 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              {t("transport.hero.subtitle")}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
            {t("transport.fleet.title")} <span className="text-primary">{t("transport.fleet.titleAccent")}</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">{t("transport.fleet.subtitle")}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {vehicles.map((v, i) => (
              <div key={i} className="bg-card rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-border">
                <div className="w-14 h-14 rounded-full bg-teal-light flex items-center justify-center mb-4">
                  <Car size={24} className="text-primary" />
                </div>
                <span className="text-xs font-medium text-primary bg-teal-light px-3 py-1 rounded-full">{v.type}</span>
                <h3 className="text-lg font-semibold text-foreground mt-3">{v.name}</h3>
                <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                  <Users size={14} /> <span>{v.capacity}</span>
                </div>
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-xs text-muted-foreground">{t("tour.startFrom")}</p>
                  <p className="text-xl font-bold text-foreground">{v.price}<span className="text-sm font-normal text-muted-foreground">{t("transport.day")}</span></p>
                </div>
                <a
                  href={`https://wa.me/6281234567890?text=${encodeURIComponent(language === "id" ? `Halo, saya ingin memesan ${v.name} (${v.type}) - ${v.capacity} dengan harga ${v.price}/hari. Mohon informasi lebih lanjut.` : `Hello, I would like to book ${v.name} (${v.type}) - ${v.capacity} at ${v.price}/day. Please provide more information.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 block w-full bg-primary text-primary-foreground py-2.5 rounded-full text-sm font-semibold hover:bg-teal-dark transition-colors text-center"
                >
                  {t("transport.bookNow")}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                {t("transport.why.title")} <span className="text-primary">{t("transport.why.titleAccent")}</span>?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((b, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle size={20} className="text-primary flex-shrink-0" />
                    <span className="text-sm text-foreground">{b}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 grid grid-cols-3 gap-4 sm:gap-6">
              <div className="bg-card rounded-xl p-4 sm:p-8 text-center shadow-sm">
                <Clock size={28} className="mx-auto text-primary mb-3" />
                <h4 className="font-bold text-xl sm:text-2xl text-foreground">24/7</h4>
                <p className="text-xs sm:text-sm text-muted-foreground">{t("transport.available")}</p>
              </div>
              <div className="bg-card rounded-xl p-4 sm:p-8 text-center shadow-sm">
                <Shield size={28} className="mx-auto text-primary mb-3" />
                <h4 className="font-bold text-xl sm:text-2xl text-foreground">100%</h4>
                <p className="text-xs sm:text-sm text-muted-foreground">{t("transport.insured")}</p>
              </div>
              <div className="bg-card rounded-xl p-4 sm:p-8 text-center shadow-sm">
                <Car size={28} className="mx-auto text-primary mb-3" />
                <h4 className="font-bold text-xl sm:text-2xl text-foreground">50+</h4>
                <p className="text-xs sm:text-sm text-muted-foreground">{t("transport.vehicles")}</p>
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
