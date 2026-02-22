import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Car, Users, Clock, Shield, CheckCircle } from "lucide-react";
import transportHero from "@/assets/transport-hero.jpg";

const vehicles = [
  { name: "Toyota Avanza", capacity: "6 Passengers", price: "Rp500.000", type: "MPV" },
  { name: "Toyota Innova", capacity: "6 Passengers", price: "Rp700.000", type: "MPV Premium" },
  { name: "Hiace Commuter", capacity: "14 Passengers", price: "Rp1.200.000", type: "Minibus" },
  { name: "Bus Medium", capacity: "30 Passengers", price: "Rp2.500.000", type: "Bus" },
];

const benefits = [
  "Professional & licensed drivers",
  "Well-maintained vehicles",
  "Flexible pick-up & drop-off",
  "24/7 customer support",
  "Competitive pricing",
  "Airport transfer available",
];

const Transport = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px]">
        <img src={transportHero} alt="Transport" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 hero-gradient" />
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground text-shadow animate-fade-in-up font-display">
              Reliable Transport<br />Services
            </h1>
            <p className="mt-4 text-lg text-primary-foreground/80 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              Travel around Lombok with comfort and safety
            </p>
          </div>
        </div>
      </section>

      {/* Vehicles */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
            Our <span className="text-primary">Fleet</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
            Choose from our wide range of well-maintained vehicles
          </p>

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
                  <p className="text-xs text-muted-foreground">Start from</p>
                  <p className="text-xl font-bold text-foreground">{v.price}<span className="text-sm font-normal text-muted-foreground">/day</span></p>
                </div>
                <button className="mt-4 w-full bg-primary text-primary-foreground py-2.5 rounded-full text-sm font-semibold hover:bg-teal-dark transition-colors">
                  Book Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why Choose Our <span className="text-primary">Transport</span>?
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
            <div className="flex-1 flex justify-center gap-6">
              <div className="bg-card rounded-xl p-8 text-center shadow-sm">
                <Clock size={32} className="mx-auto text-primary mb-3" />
                <h4 className="font-bold text-2xl text-foreground">24/7</h4>
                <p className="text-sm text-muted-foreground">Available</p>
              </div>
              <div className="bg-card rounded-xl p-8 text-center shadow-sm">
                <Shield size={32} className="mx-auto text-primary mb-3" />
                <h4 className="font-bold text-2xl text-foreground">100%</h4>
                <p className="text-sm text-muted-foreground">Insured</p>
              </div>
              <div className="bg-card rounded-xl p-8 text-center shadow-sm">
                <Car size={32} className="mx-auto text-primary mb-3" />
                <h4 className="font-bold text-2xl text-foreground">50+</h4>
                <p className="text-sm text-muted-foreground">Vehicles</p>
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
