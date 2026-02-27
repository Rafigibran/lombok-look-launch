import { Link } from "react-router-dom";
import { Star, Shield, MapPin, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TourCard from "@/components/TourCard";
import { useLanguage } from "@/contexts/LanguageContext";
import heroHome from "@/assets/hero-home.jpg";
import tour1 from "@/assets/tour-1.jpg";
import tour2 from "@/assets/tour-2.jpg";
import tour3 from "@/assets/tour-3.jpg";
import tour4 from "@/assets/tour-4.jpg";
import tour5 from "@/assets/tour-5.jpg";
import tour6 from "@/assets/tour-6.jpg";

const Index = () => {
  const { t, language } = useLanguage();

  const popularTours = [
    { image: tour1, title: language === "id" ? "3 Hari 2 Malam Tur Lombok (A)" : "3 Days 2 Nights Lombok Tour (A)", price: "Rp1.250.000", duration: language === "id" ? "3 Hari 2 Malam" : "3 Days 2 Nights", slug: "3-days-2-nights-lombok-tour-a" },
    { image: tour2, title: language === "id" ? "3 Hari 2 Malam Tur Lombok (B)" : "3 Days 2 Nights Lombok Tour (B)", price: "Rp1.250.000", duration: language === "id" ? "3 Hari 2 Malam" : "3 Days 2 Nights", slug: "3-days-2-nights-lombok-tour-b" },
    { image: tour3, title: language === "id" ? "3 Hari 2 Malam Tur Lombok (C)" : "3 Days 2 Nights Lombok Tour (C)", price: "Rp1.250.000", duration: language === "id" ? "3 Hari 2 Malam" : "3 Days 2 Nights", slug: "3-days-2-nights-lombok-tour-c" },
  ];

  const features = [
    { icon: Star, title: t("home.why.bestExp"), desc: t("home.why.bestExpDesc") },
    { icon: Shield, title: t("home.why.trusted"), desc: t("home.why.trustedDesc") },
    { icon: MapPin, title: t("home.why.local"), desc: t("home.why.localDesc") },
  ];

  const destinations = [
    { img: tour4, name: language === "id" ? "Desa Sasak" : "Sasak Village" },
    { img: tour5, name: language === "id" ? "Air Terjun Tiu Kelep" : "Tiu Kelep Waterfall" },
    { img: tour6, name: language === "id" ? "Kepulauan Gili" : "Gili Islands" },
    { img: tour1, name: language === "id" ? "Teluk Rahasia" : "Secret Bay" },
    { img: tour2, name: language === "id" ? "Gunung Rinjani" : "Mount Rinjani" },
    { img: tour3, name: language === "id" ? "Pantai Pink" : "Pink Beach" },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative h-screen">
        <img src={heroHome} alt="Lombok paradise" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 hero-gradient" />
        <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
          <p className="text-[11px] uppercase tracking-[0.5em] text-primary-foreground/50 mb-6 animate-fade-in font-sans font-light">
            {language === "id" ? "Surga Tersembunyi Indonesia" : "Indonesia's Hidden Paradise"}
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold text-primary-foreground text-shadow animate-fade-in-up font-display leading-[0.95]">
            {t("home.hero.title")}
          </h1>
          <p className="mt-6 text-base md:text-lg text-primary-foreground/60 max-w-xl animate-fade-in-up font-light" style={{ animationDelay: "0.2s" }}>
            {t("home.hero.subtitle")}
          </p>
          <Link
            to="/tour-package"
            className="mt-10 inline-flex items-center gap-3 border border-primary-foreground/30 text-primary-foreground px-10 py-4 rounded-full text-xs uppercase tracking-[0.2em] font-medium hover:bg-primary-foreground hover:text-foreground transition-all duration-500 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            {t("home.hero.cta")} <ArrowRight size={14} />
          </Link>
        </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in" style={{ animationDelay: "1s" }}>
          <div className="w-[1px] h-12 bg-gradient-to-b from-transparent to-primary-foreground/40" />
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-28 bg-background">
        <div className="container mx-auto px-6">
          <p className="text-[11px] uppercase tracking-[0.4em] text-muted-foreground text-center mb-4 font-sans">
            {language === "id" ? "Keunggulan Kami" : "Our Excellence"}
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold text-center text-foreground mb-6 font-display">
            {t("home.why.title")} <span className="text-primary italic">Look Lombok</span>
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-lg mx-auto text-sm font-light leading-relaxed">{t("home.why.subtitle")}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <div key={i} className="bg-card rounded-2xl p-10 text-center premium-shadow hover:-translate-y-1 transition-all duration-500 border border-border/50">
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-teal-light flex items-center justify-center">
                  <f.icon size={24} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3 font-display">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-light">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Tours */}
      <section className="py-28 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="flex items-end justify-between mb-16">
            <div>
              <p className="text-[11px] uppercase tracking-[0.4em] text-muted-foreground mb-4 font-sans">
                {language === "id" ? "Koleksi Unggulan" : "Featured Collection"}
              </p>
              <h2 className="text-3xl md:text-5xl font-semibold text-foreground font-display">
                {t("home.popular.title")} <span className="text-primary italic">{t("home.popular.titleAccent")}</span>
              </h2>
            </div>
            <Link to="/tour-package" className="hidden md:inline-flex items-center gap-2 text-xs uppercase tracking-widest text-foreground/60 hover:text-primary transition-colors duration-300 font-medium">
              {t("home.popular.viewAll")} <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {popularTours.map((tour, i) => (
              <TourCard key={i} {...tour} />
            ))}
          </div>
          <div className="mt-10 text-center md:hidden">
            <Link to="/tour-package" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-foreground/60 font-medium">
              {t("home.popular.viewAllTours")} <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section className="py-28 bg-background">
        <div className="container mx-auto px-6">
          <p className="text-[11px] uppercase tracking-[0.4em] text-muted-foreground text-center mb-4 font-sans">
            {language === "id" ? "Destinasi Pilihan" : "Curated Destinations"}
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold text-center text-foreground mb-16 font-display">
            {t("home.dest.title")} <span className="text-primary italic">{t("home.dest.titleAccent")}</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {destinations.map((dest, i) => (
              <div key={i} className="relative rounded-2xl overflow-hidden aspect-square group cursor-pointer">
                <img src={dest.img} alt={dest.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                <div className="absolute inset-0 bg-foreground/20 group-hover:bg-foreground/40 transition-colors duration-500" />
                <div className="absolute bottom-5 left-5">
                  <p className="text-xs uppercase tracking-widest text-primary-foreground/80 font-medium text-shadow">{dest.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={heroHome} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative container mx-auto px-6 text-center">
          <p className="text-[11px] uppercase tracking-[0.4em] text-primary-foreground/40 mb-6 font-sans">
            {language === "id" ? "Mulai Petualangan" : "Start Your Journey"}
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold text-primary-foreground mb-6 font-display">{t("home.cta.title")}</h2>
          <p className="text-primary-foreground/40 mb-10 max-w-md mx-auto text-sm font-light leading-relaxed">{t("home.cta.subtitle")}</p>
          <a
            href={`https://wa.me/6281234567890?text=${encodeURIComponent(language === "id" ? "Halo, saya tertarik dengan paket wisata Lombok. Mohon informasi lebih lanjut." : "Hello, I'm interested in Lombok tour packages. Please provide more information.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 gold-gradient text-accent-foreground px-10 py-4 rounded-full text-xs uppercase tracking-[0.2em] font-semibold hover:opacity-90 transition-all duration-300"
          >
            {t("home.cta.book")} <ArrowRight size={14} />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
