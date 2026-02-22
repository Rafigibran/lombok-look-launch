import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "id";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<string, Record<Language, string>> = {
  // Navbar
  "nav.home": { en: "Home", id: "Beranda" },
  "nav.tourPackage": { en: "Tour Package", id: "Paket Wisata" },
  "nav.transport": { en: "Transport", id: "Transportasi" },
  "nav.news": { en: "News", id: "Berita" },

  // Home
  "home.hero.title": { en: "Discover Lombok", id: "Jelajahi Lombok" },
  "home.hero.subtitle": { en: "Experience the untouched beauty of Indonesia's hidden paradise", id: "Rasakan keindahan tersembunyi surga Indonesia" },
  "home.hero.cta": { en: "Explore Tours", id: "Jelajahi Wisata" },
  "home.why.title": { en: "Why Choose", id: "Mengapa Memilih" },
  "home.why.subtitle": { en: "We provide the best travel experience in Lombok with professional service", id: "Kami menyediakan pengalaman wisata terbaik di Lombok dengan layanan profesional" },
  "home.why.bestExp": { en: "Best Experience", id: "Pengalaman Terbaik" },
  "home.why.bestExpDesc": { en: "Curated tours by local experts who know every hidden gem.", id: "Tur pilihan oleh ahli lokal yang mengenal setiap permata tersembunyi." },
  "home.why.trusted": { en: "Trusted Service", id: "Layanan Terpercaya" },
  "home.why.trustedDesc": { en: "Licensed and insured for your peace of mind.", id: "Berlisensi dan berasuransi untuk ketenangan Anda." },
  "home.why.local": { en: "Local Guides", id: "Pemandu Lokal" },
  "home.why.localDesc": { en: "Authentic experiences with knowledgeable local guides.", id: "Pengalaman autentik dengan pemandu lokal berpengalaman." },
  "home.popular.title": { en: "Popular", id: "Wisata" },
  "home.popular.titleAccent": { en: "Tours", id: "Populer" },
  "home.popular.subtitle": { en: "Our most booked tour packages", id: "Paket wisata paling banyak dipesan" },
  "home.popular.viewAll": { en: "View All", id: "Lihat Semua" },
  "home.popular.viewAllTours": { en: "View All Tours", id: "Lihat Semua Wisata" },
  "home.dest.title": { en: "Top", id: "Destinasi" },
  "home.dest.titleAccent": { en: "Destinations", id: "Teratas" },
  "home.cta.title": { en: "Ready for Your Lombok Adventure?", id: "Siap untuk Petualangan Lombok Anda?" },
  "home.cta.subtitle": { en: "Book your dream vacation today and experience the magic of Lombok", id: "Pesan liburan impian Anda hari ini dan rasakan keajaiban Lombok" },
  "home.cta.book": { en: "Book Now", id: "Pesan Sekarang" },

  // Tour Package
  "tour.hero.title1": { en: "Explore Our Exclusive", id: "Jelajahi Paket" },
  "tour.hero.title2": { en: "Tour Packages", id: "Wisata Eksklusif Kami" },

  // Tour Card
  "tour.startFrom": { en: "Start from", id: "Mulai dari" },
  "tour.pax": { en: "/pax", id: "/orang" },

  // Search Filter
  "filter.destination": { en: "Destination", id: "Tujuan" },
  "filter.duration": { en: "Duration", id: "Durasi" },
  "filter.guests": { en: "Guests", id: "Tamu" },
  "filter.search": { en: "Search", id: "Cari" },
  "filter.1-2days": { en: "1-2 Days", id: "1-2 Hari" },
  "filter.3-4days": { en: "3-4 Days", id: "3-4 Hari" },
  "filter.5+days": { en: "5+ Days", id: "5+ Hari" },
  "filter.1-2guests": { en: "1-2 Guests", id: "1-2 Tamu" },
  "filter.3-5guests": { en: "3-5 Guests", id: "3-5 Tamu" },
  "filter.6+guests": { en: "6+ Guests", id: "6+ Tamu" },

  // Transport
  "transport.hero.title": { en: "Reliable Transport\nServices", id: "Layanan Transportasi\nTerpercaya" },
  "transport.hero.subtitle": { en: "Travel around Lombok with comfort and safety", id: "Jelajahi Lombok dengan nyaman dan aman" },
  "transport.fleet.title": { en: "Our", id: "Armada" },
  "transport.fleet.titleAccent": { en: "Fleet", id: "Kami" },
  "transport.fleet.subtitle": { en: "Choose from our wide range of well-maintained vehicles", id: "Pilih dari berbagai kendaraan terawat kami" },
  "transport.passengers": { en: "Passengers", id: "Penumpang" },
  "transport.day": { en: "/day", id: "/hari" },
  "transport.bookNow": { en: "Book Now", id: "Pesan Sekarang" },
  "transport.why.title": { en: "Why Choose Our", id: "Mengapa Memilih" },
  "transport.why.titleAccent": { en: "Transport", id: "Transportasi Kami" },
  "transport.benefit1": { en: "Professional & licensed drivers", id: "Pengemudi profesional & berlisensi" },
  "transport.benefit2": { en: "Well-maintained vehicles", id: "Kendaraan terawat" },
  "transport.benefit3": { en: "Flexible pick-up & drop-off", id: "Jemput & antar fleksibel" },
  "transport.benefit4": { en: "24/7 customer support", id: "Layanan pelanggan 24/7" },
  "transport.benefit5": { en: "Competitive pricing", id: "Harga bersaing" },
  "transport.benefit6": { en: "Airport transfer available", id: "Transfer bandara tersedia" },
  "transport.available": { en: "Available", id: "Tersedia" },
  "transport.insured": { en: "Insured", id: "Diasuransikan" },
  "transport.vehicles": { en: "Vehicles", id: "Kendaraan" },

  // News
  "news.hero.title": { en: "Latest", id: "Berita" },
  "news.hero.titleAccent": { en: "News", id: "Terbaru" },
  "news.hero.subtitle": { en: "Stories, tips, and guides about Lombok", id: "Cerita, tips, dan panduan tentang Lombok" },
  "news.readMore": { en: "Read More", id: "Baca Selengkapnya" },

  // Tour Detail
  "detail.overview": { en: "Overview", id: "Ringkasan" },
  "detail.itinerary": { en: "Itinerary", id: "Itinerari" },
  "detail.includes": { en: "What's Included", id: "Termasuk" },
  "detail.excludes": { en: "What's Excluded", id: "Tidak Termasuk" },
  "detail.bookTour": { en: "Book This Tour", id: "Pesan Tur Ini" },
  "detail.duration": { en: "Duration", id: "Durasi" },
  "detail.groupSize": { en: "Group Size", id: "Ukuran Grup" },
  "detail.pickup": { en: "Pick Up", id: "Jemput" },
  "detail.language": { en: "Language", id: "Bahasa" },
  "detail.day": { en: "Day", id: "Hari" },
  "detail.persons": { en: "persons", id: "orang" },
  "detail.allAreas": { en: "All areas in Lombok", id: "Semua area di Lombok" },
  "detail.engIndo": { en: "English, Indonesian", id: "Inggris, Indonesia" },
  "detail.pricePerPerson": { en: "Price per person", id: "Harga per orang" },
  "detail.contactUs": { en: "Contact Us for Booking", id: "Hubungi Kami untuk Pemesanan" },

  // Footer
  "footer.desc": { en: "Discover the hidden paradise of Lombok with our curated tour packages and reliable transport services.", id: "Temukan surga tersembunyi Lombok dengan paket wisata pilihan dan layanan transportasi terpercaya kami." },
  "footer.quickLinks": { en: "Quick Links", id: "Tautan Cepat" },
  "footer.contactUs": { en: "Contact Us", id: "Hubungi Kami" },
  "footer.followUs": { en: "Follow Us", id: "Ikuti Kami" },
  "footer.rights": { en: "© 2026 Look Lombok. All rights reserved.", id: "© 2026 Look Lombok. Hak cipta dilindungi." },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
