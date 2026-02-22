import { Link } from "react-router-dom";
import { Star, Shield, MapPin, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TourCard from "@/components/TourCard";
import heroHome from "@/assets/hero-home.jpg";
import tour1 from "@/assets/tour-1.jpg";
import tour2 from "@/assets/tour-2.jpg";
import tour3 from "@/assets/tour-3.jpg";
import tour4 from "@/assets/tour-4.jpg";
import tour5 from "@/assets/tour-5.jpg";
import tour6 from "@/assets/tour-6.jpg";

const popularTours = [
  { image: tour1, title: "3 Days 2 Nights Lombok Tour (A)", price: "Rp1.250.000", duration: "3 Days 2 Nights" },
  { image: tour2, title: "Mount Rinjani Trekking", price: "Rp2.500.000", duration: "3 Days 2 Nights" },
  { image: tour3, title: "Pink Beach Adventure", price: "Rp1.800.000", duration: "2 Days 1 Night" },
];

const features = [
  { icon: Star, title: "Best Experience", desc: "Curated tours by local experts who know every hidden gem." },
  { icon: Shield, title: "Trusted Service", desc: "Licensed and insured for your peace of mind." },
  { icon: MapPin, title: "Local Guides", desc: "Authentic experiences with knowledgeable local guides." },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative h-screen">
        <img src={heroHome} alt="Lombok paradise" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 hero-gradient" />
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground text-shadow animate-fade-in-up font-display">
            Discover Lombok
          </h1>
          <p className="mt-4 text-lg md:text-xl text-primary-foreground/80 max-w-2xl animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Experience the untouched beauty of Indonesia's hidden paradise
          </p>
          <Link
            to="/tour-package"
            className="mt-8 inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:bg-teal-dark transition-colors animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            Explore Tours <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
            Why Choose <span className="text-primary">Look Lombok</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
            We provide the best travel experience in Lombok with professional service
          </p>
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

      {/* Popular Tours */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Popular <span className="text-primary">Tours</span>
              </h2>
              <p className="text-muted-foreground mt-2">Our most booked tour packages</p>
            </div>
            <Link to="/tour-package" className="hidden md:inline-flex items-center gap-2 text-primary font-medium hover:text-teal-dark transition-colors">
              View All <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {popularTours.map((tour, i) => (
              <TourCard key={i} {...tour} />
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Link to="/tour-package" className="inline-flex items-center gap-2 text-primary font-medium">
              View All Tours <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Destinations Preview */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Top <span className="text-primary">Destinations</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { img: tour4, name: "Sasak Village" },
              { img: tour5, name: "Tiu Kelep Waterfall" },
              { img: tour6, name: "Gili Islands" },
              { img: tour1, name: "Secret Bay" },
              { img: tour2, name: "Mount Rinjani" },
              { img: tour3, name: "Pink Beach" },
            ].map((dest, i) => (
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

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready for Your Lombok Adventure?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">
            Book your dream vacation today and experience the magic of Lombok
          </p>
          <Link
            to="/tour-package"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
          >
            Book Now <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
