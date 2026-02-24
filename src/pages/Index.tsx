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
  const { t } = useLanguage();

  const popularTours = [
    { image: tour1, title: t("nav.tourPackage") === "Paket Wisata" ? "3 Hari 2 Malam Tur Lombok (A)" : "3 Days 2 Nights Lombok Tour (A)", price: "Rp1.250.000", duration: t("nav.tourPackage") === "Paket Wisata" ? "3 Hari 2 Malam" : "3 Days 2 Nights", slug: "3-days-2-nights-lombok-tour-a" },
    { image: tour2, title: t("nav.tourPackage") === "Paket Wisata" ? "3 Hari 2 Malam Tur Lombok (B)" : "3 Days 2 Nights Lombok Tour (B)", price: "Rp1.250.000", duration: t("nav.tourPackage") === "Paket Wisata" ? "3 Hari 2 Malam" : "3 Days 2 Nights", slug: "3-days-2-nights-lombok-tour-b" },
    { image: tour3, title: t("nav.tourPackage") === "Paket Wisata" ? "3 Hari 2 Malam Tur Lombok (C)" : "3 Days 2 Nights Lombok Tour (C)", price: "Rp1.250.000", duration: t("nav.tourPackage") === "Paket Wisata" ? "3 Hari 2 Malam" : "3 Days 2 Nights", slug: "3-days-2-nights-lombok-tour-c" },
  ];

  const features = [
    { icon: Star, title: t("home.why.bestExp"), desc: t("home.why.bestExpDesc") },
    { icon: Shield, title: t("home.why.trusted"), desc: t("home.why.trustedDesc") },
    { icon: MapPin, title: t("home.why.local"), desc: t("home.why.localDesc") },
  ];

  const destinations = [
    { img: tour4, name: t("nav.tourPackage") === "Paket Wisata" ? "Desa Sasak" : "Sasak Village" },
    { img: tour5, name: t("nav.tourPackage") === "Paket Wisata" ? "Air Terjun Tiu Kelep" : "Tiu Kelep Waterfall" },
    { img: tour6, name: t("nav.tourPackage") === "Paket Wisata" ? "Kepulauan Gili" : "Gili Islands" },
    { img: tour1, name: t("nav.tourPackage") === "Paket Wisata" ? "Teluk Rahasia" : "Secret Bay" },
    { img: tour2, name: t("nav.tourPackage") === "Paket Wisata" ? "Gunung Rinjani" : "Mount Rinjani" },
    { img: tour3, name: t("nav.tourPackage") === "Paket Wisata" ? "Pantai Pink" : "Pink Beach" },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="relative h-screen">
        <img src={heroHome} alt="Lombok paradise" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 hero-gradient" />
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground text-shadow animate-fade-in-up font-display">
            {t("home.hero.title")}
          </h1>
          <p className="mt-4 text-lg md:text-xl text-primary-foreground/80 max-w-2xl animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            {t("home.hero.subtitle")}
          </p>
          <Link
            to="/tour-package"
            className="mt-8 inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:bg-teal-dark transition-colors animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            {t("home.hero.cta")} <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
            {t("home.why.title")} <span className="text-primary">Look Lombok</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">{t("home.why.subtitle")}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <div key={i} className="bg-card rounded-xl p-8 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-teal-light flex items-center justify-center">
                  <f.icon size={28} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                {t("home.popular.title")} <span className="text-primary">{t("home.popular.titleAccent")}</span>
              </h2>
              <p className="text-muted-foreground mt-2">{t("home.popular.subtitle")}</p>
            </div>
            <Link to="/tour-package" className="hidden md:inline-flex items-center gap-2 text-primary font-medium hover:text-teal-dark transition-colors">
              {t("home.popular.viewAll")} <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {popularTours.map((tour, i) => (
              <TourCard key={i} {...tour} />
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Link to="/tour-package" className="inline-flex items-center gap-2 text-primary font-medium">
              {t("home.popular.viewAllTours")} <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            {t("home.dest.title")} <span className="text-primary">{t("home.dest.titleAccent")}</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {destinations.map((dest, i) => (
              <div key={i} className="relative rounded-xl overflow-hidden aspect-square group cursor-pointer">
                <img src={dest.img} alt={dest.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-foreground/30 group-hover:bg-foreground/50 transition-colors" />
                <div className="absolute bottom-4 left-4">
                  <p className="text-primary-foreground font-semibold text-shadow">{dest.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">{t("home.cta.title")}</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">{t("home.cta.subtitle")}</p>
          <a
            href={`https://wa.me/6281234567890?text=${encodeURIComponent(t("nav.tourPackage") === "Paket Wisata" ? "Halo, saya tertarik dengan paket wisata Lombok. Mohon informasi lebih lanjut." : "Hello, I'm interested in Lombok tour packages. Please provide more information.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
          >
            {t("home.cta.book")} <ArrowRight size={18} />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
