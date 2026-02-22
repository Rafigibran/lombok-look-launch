import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TourCard from "@/components/TourCard";
import SearchFilter from "@/components/SearchFilter";
import { useLanguage } from "@/contexts/LanguageContext";
import heroTour from "@/assets/hero-tour.jpg";
import tour1 from "@/assets/tour-1.jpg";
import tour2 from "@/assets/tour-2.jpg";
import tour3 from "@/assets/tour-3.jpg";
import tour4 from "@/assets/tour-4.jpg";
import tour5 from "@/assets/tour-5.jpg";
import tour6 from "@/assets/tour-6.jpg";

const TourPackage = () => {
  const { language, t } = useLanguage();
  const isId = language === "id";

  const tours = [
    { image: tour1, title: isId ? "3 Hari 2 Malam Tur Lombok (A)" : "3 Days 2 Nights Lombok Tour (A)", price: "Rp1.250.000", duration: isId ? "3 Hari 2 Malam" : "3 Days 2 Nights", slug: "3-days-2-nights-lombok-tour-a" },
    { image: tour2, title: isId ? "3 Hari 2 Malam Tur Lombok (B)" : "3 Days 2 Nights Lombok Tour (B)", price: "Rp1.250.000", duration: isId ? "3 Hari 2 Malam" : "3 Days 2 Nights", slug: "3-days-2-nights-lombok-tour-b" },
    { image: tour3, title: isId ? "3 Hari 2 Malam Tur Lombok (C)" : "3 Days 2 Nights Lombok Tour (C)", price: "Rp1.250.000", duration: isId ? "3 Hari 2 Malam" : "3 Days 2 Nights", slug: "3-days-2-nights-lombok-tour-c" },
    { image: tour4, title: isId ? "4 Hari 3 Malam Tur Budaya" : "4 Days 3 Nights Cultural Tour", price: "Rp1.750.000", duration: isId ? "4 Hari 3 Malam" : "4 Days 3 Nights", slug: "4-days-3-nights-cultural-tour" },
    { image: tour5, title: isId ? "Tur Petualangan Air Terjun" : "Waterfall Adventure Tour", price: "Rp950.000", duration: isId ? "1 Hari" : "1 Day", slug: "waterfall-adventure-tour" },
    { image: tour6, title: isId ? "Snorkeling Kepulauan Gili" : "Gili Islands Snorkeling", price: "Rp1.500.000", duration: isId ? "2 Hari 1 Malam" : "2 Days 1 Night", slug: "gili-islands-snorkeling" },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="relative h-[60vh] min-h-[400px]">
        <img src={heroTour} alt="Tour packages" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 hero-gradient" />
        <div className="relative h-full flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground text-shadow text-center animate-fade-in-up font-display">
            {t("tour.hero.title1")}<br />{t("tour.hero.title2")}
          </h1>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-10">
            <div className="lg:sticky lg:top-8 lg:self-start">
              <SearchFilter />
            </div>
            <div className="flex-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {tours.map((tour, i) => (
                  <TourCard key={i} {...tour} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TourPackage;
