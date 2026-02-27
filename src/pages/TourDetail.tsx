import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { Clock, Users, MapPin, Globe, ArrowLeft, CheckCircle, XCircle } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import tour1 from "@/assets/tour-1.jpg";
import tour2 from "@/assets/tour-2.jpg";
import tour3 from "@/assets/tour-3.jpg";
import tour4 from "@/assets/tour-4.jpg";
import tour5 from "@/assets/tour-5.jpg";
import tour6 from "@/assets/tour-6.jpg";

const tourData: Record<string, {
  image: string;
  title: { en: string; id: string };
  price: string;
  duration: { en: string; id: string };
  groupSize: string;
  overview: { en: string; id: string };
  itinerary: { day: number; title: { en: string; id: string }; desc: { en: string; id: string } }[];
  includes: { en: string; id: string }[];
  excludes: { en: string; id: string }[];
}> = {
  "3-days-2-nights-lombok-tour-a": {
    image: tour1,
    title: { en: "3 Days 2 Nights Lombok Tour (A)", id: "3 Hari 2 Malam Tur Lombok (A)" },
    price: "Rp1.250.000",
    duration: { en: "3 Days 2 Nights", id: "3 Hari 2 Malam" },
    groupSize: "2-10",
    overview: {
      en: "Explore the best of Lombok in this carefully curated 3-day adventure. Visit stunning beaches, traditional Sasak villages, breathtaking waterfalls, and the famous Gili Islands. Perfect for those who want a comprehensive Lombok experience.",
      id: "Jelajahi yang terbaik dari Lombok dalam petualangan 3 hari yang dikurasi dengan cermat. Kunjungi pantai yang menakjubkan, desa Sasak tradisional, air terjun yang menakjubkan, dan Kepulauan Gili yang terkenal."
    },
    itinerary: [
      { day: 1, title: { en: "Arrival & South Lombok", id: "Kedatangan & Lombok Selatan" }, desc: { en: "Airport pickup, visit Kuta Mandalika Beach, Tanjung Aan, and Merese Hill for sunset.", id: "Jemput bandara, kunjungi Pantai Kuta Mandalika, Tanjung Aan, dan Bukit Merese untuk sunset." } },
      { day: 2, title: { en: "Waterfalls & Culture", id: "Air Terjun & Budaya" }, desc: { en: "Visit Tiu Kelep & Sendang Gile waterfalls, Sasak Village, and local market.", id: "Kunjungi air terjun Tiu Kelep & Sendang Gile, Desa Sasak, dan pasar lokal." } },
      { day: 3, title: { en: "Gili Islands & Departure", id: "Kepulauan Gili & Keberangkatan" }, desc: { en: "Boat trip to Gili Trawangan, snorkeling, free time, then airport transfer.", id: "Perjalanan perahu ke Gili Trawangan, snorkeling, waktu bebas, lalu transfer bandara." } },
    ],
    includes: [
      { en: "Hotel accommodation (2 nights)", id: "Akomodasi hotel (2 malam)" },
      { en: "Private car with driver", id: "Mobil pribadi dengan pengemudi" },
      { en: "Breakfast daily", id: "Sarapan setiap hari" },
      { en: "Entrance fees", id: "Biaya masuk" },
      { en: "Boat ticket to Gili", id: "Tiket perahu ke Gili" },
      { en: "Snorkeling equipment", id: "Peralatan snorkeling" },
    ],
    excludes: [
      { en: "Flight tickets", id: "Tiket pesawat" },
      { en: "Lunch & dinner", id: "Makan siang & malam" },
      { en: "Personal expenses", id: "Pengeluaran pribadi" },
      { en: "Travel insurance", id: "Asuransi perjalanan" },
    ],
  },
  "3-days-2-nights-lombok-tour-b": {
    image: tour2,
    title: { en: "3 Days 2 Nights Lombok Tour (B)", id: "3 Hari 2 Malam Tur Lombok (B)" },
    price: "Rp1.250.000",
    duration: { en: "3 Days 2 Nights", id: "3 Hari 2 Malam" },
    groupSize: "2-10",
    overview: {
      en: "An alternative 3-day Lombok itinerary focusing on the northern and eastern parts of the island.",
      id: "Itinerari alternatif 3 hari Lombok yang berfokus pada bagian utara dan timur pulau."
    },
    itinerary: [
      { day: 1, title: { en: "Arrival & North Lombok", id: "Kedatangan & Lombok Utara" }, desc: { en: "Airport pickup, drive to Senaru village, visit local waterfalls.", id: "Jemput bandara, perjalanan ke desa Senaru, kunjungi air terjun lokal." } },
      { day: 2, title: { en: "East Lombok Exploration", id: "Jelajah Lombok Timur" }, desc: { en: "Visit Sembalun village, strawberry farms, and enjoy panoramic Rinjani views.", id: "Kunjungi desa Sembalun, kebun stroberi, dan nikmati pemandangan Rinjani." } },
      { day: 3, title: { en: "Weaving Villages & Departure", id: "Desa Tenun & Keberangkatan" }, desc: { en: "Visit Sukarara weaving village, Sasak pottery village, then airport transfer.", id: "Kunjungi desa tenun Sukarara, desa gerabah Sasak, lalu transfer bandara." } },
    ],
    includes: [
      { en: "Hotel accommodation (2 nights)", id: "Akomodasi hotel (2 malam)" },
      { en: "Private car with driver", id: "Mobil pribadi dengan pengemudi" },
      { en: "Breakfast daily", id: "Sarapan setiap hari" },
      { en: "Entrance fees", id: "Biaya masuk" },
    ],
    excludes: [
      { en: "Flight tickets", id: "Tiket pesawat" },
      { en: "Lunch & dinner", id: "Makan siang & malam" },
      { en: "Personal expenses", id: "Pengeluaran pribadi" },
    ],
  },
  "3-days-2-nights-lombok-tour-c": {
    image: tour3,
    title: { en: "3 Days 2 Nights Lombok Tour (C)", id: "3 Hari 2 Malam Tur Lombok (C)" },
    price: "Rp1.250.000",
    duration: { en: "3 Days 2 Nights", id: "3 Hari 2 Malam" },
    groupSize: "2-10",
    overview: {
      en: "A beach-focused 3-day tour covering Lombok's most beautiful coastlines. Perfect for beach lovers and water sports enthusiasts.",
      id: "Tur 3 hari berfokus pantai yang mencakup garis pantai terindah Lombok. Sempurna untuk pecinta pantai dan penggemar olahraga air."
    },
    itinerary: [
      { day: 1, title: { en: "Arrival & Beach Hopping", id: "Kedatangan & Pantai" }, desc: { en: "Visit Selong Belanak, Mawun Beach, and Tanjung Aan.", id: "Kunjungi Selong Belanak, Pantai Mawun, dan Tanjung Aan." } },
      { day: 2, title: { en: "Pink Beach Adventure", id: "Petualangan Pantai Pink" }, desc: { en: "Full day trip to Pink Beach with snorkeling and beach picnic.", id: "Perjalanan sehari penuh ke Pantai Pink dengan snorkeling dan piknik pantai." } },
      { day: 3, title: { en: "Surf & Departure", id: "Surfing & Keberangkatan" }, desc: { en: "Morning surf lesson at Gerupuk Bay, then airport transfer.", id: "Pelajaran surfing pagi di Teluk Gerupuk, lalu transfer bandara." } },
    ],
    includes: [
      { en: "Hotel accommodation (2 nights)", id: "Akomodasi hotel (2 malam)" },
      { en: "Private car with driver", id: "Mobil pribadi dengan pengemudi" },
      { en: "Breakfast daily", id: "Sarapan setiap hari" },
      { en: "Snorkeling & surf equipment", id: "Peralatan snorkeling & surfing" },
    ],
    excludes: [
      { en: "Flight tickets", id: "Tiket pesawat" },
      { en: "Lunch & dinner", id: "Makan siang & malam" },
      { en: "Personal expenses", id: "Pengeluaran pribadi" },
    ],
  },
  "4-days-3-nights-cultural-tour": {
    image: tour4,
    title: { en: "4 Days 3 Nights Cultural Tour", id: "4 Hari 3 Malam Tur Budaya" },
    price: "Rp1.750.000",
    duration: { en: "4 Days 3 Nights", id: "4 Hari 3 Malam" },
    groupSize: "2-8",
    overview: {
      en: "Immerse yourself in Lombok's rich Sasak culture over 4 incredible days. Visit traditional villages, witness ancient ceremonies, learn local crafts, and taste authentic cuisine.",
      id: "Benamkan diri Anda dalam budaya Sasak Lombok yang kaya selama 4 hari yang luar biasa."
    },
    itinerary: [
      { day: 1, title: { en: "Arrival & Mataram City", id: "Kedatangan & Kota Mataram" }, desc: { en: "Explore Mataram city, visit Mayura Water Palace and Pura Meru temple.", id: "Jelajahi kota Mataram, kunjungi Istana Air Mayura dan Pura Meru." } },
      { day: 2, title: { en: "Sasak Villages", id: "Desa-desa Sasak" }, desc: { en: "Visit Sade and Ende traditional villages, learn weaving and pottery.", id: "Kunjungi desa tradisional Sade dan Ende, pelajari tenun dan gerabah." } },
      { day: 3, title: { en: "North Lombok Culture", id: "Budaya Lombok Utara" }, desc: { en: "Visit Bayan ancient mosque, traditional markets, and cooking class.", id: "Kunjungi masjid kuno Bayan, pasar tradisional, dan kelas memasak." } },
      { day: 4, title: { en: "Craft Markets & Departure", id: "Pasar Kerajinan & Keberangkatan" }, desc: { en: "Shopping at Sukarara and local craft centers, then airport transfer.", id: "Belanja di Sukarara dan pusat kerajinan lokal, lalu transfer bandara." } },
    ],
    includes: [
      { en: "Hotel accommodation (3 nights)", id: "Akomodasi hotel (3 malam)" },
      { en: "Private car with driver", id: "Mobil pribadi dengan pengemudi" },
      { en: "All meals included", id: "Semua makanan termasuk" },
      { en: "Cultural workshop fees", id: "Biaya workshop budaya" },
      { en: "Local guide", id: "Pemandu lokal" },
    ],
    excludes: [
      { en: "Flight tickets", id: "Tiket pesawat" },
      { en: "Personal expenses", id: "Pengeluaran pribadi" },
      { en: "Souvenir shopping", id: "Belanja suvenir" },
    ],
  },
  "waterfall-adventure-tour": {
    image: tour5,
    title: { en: "Waterfall Adventure Tour", id: "Tur Petualangan Air Terjun" },
    price: "Rp950.000",
    duration: { en: "1 Day", id: "1 Hari" },
    groupSize: "2-15",
    overview: {
      en: "A thrilling one-day adventure to Lombok's most spectacular waterfalls. Trek through lush tropical forests and cool off in crystal-clear natural pools.",
      id: "Petualangan satu hari yang mendebarkan ke air terjun paling spektakuler di Lombok."
    },
    itinerary: [
      { day: 1, title: { en: "Waterfall Trekking", id: "Trekking Air Terjun" }, desc: { en: "Visit Tiu Kelep, Sendang Gile, and Benang Stokel waterfalls with swimming stops.", id: "Kunjungi air terjun Tiu Kelep, Sendang Gile, dan Benang Stokel dengan pemberhentian berenang." } },
    ],
    includes: [
      { en: "Hotel pickup & drop-off", id: "Jemput & antar hotel" },
      { en: "Private car with driver", id: "Mobil pribadi dengan pengemudi" },
      { en: "Lunch box", id: "Kotak makan siang" },
      { en: "Entrance fees", id: "Biaya masuk" },
      { en: "Local trekking guide", id: "Pemandu trekking lokal" },
    ],
    excludes: [
      { en: "Personal expenses", id: "Pengeluaran pribadi" },
      { en: "Tips for guide", id: "Tip untuk pemandu" },
    ],
  },
  "gili-islands-snorkeling": {
    image: tour6,
    title: { en: "Gili Islands Snorkeling", id: "Snorkeling Kepulauan Gili" },
    price: "Rp1.500.000",
    duration: { en: "2 Days 1 Night", id: "2 Hari 1 Malam" },
    groupSize: "2-12",
    overview: {
      en: "Discover the underwater paradise of the Gili Islands. Snorkel with sea turtles, explore vibrant coral reefs, and enjoy the laid-back island atmosphere.",
      id: "Temukan surga bawah laut Kepulauan Gili. Snorkeling dengan penyu laut, jelajahi terumbu karang yang semarak."
    },
    itinerary: [
      { day: 1, title: { en: "Gili Trawangan", id: "Gili Trawangan" }, desc: { en: "Boat to Gili T, snorkeling tour around 3 Gilis, sunset at beach bar.", id: "Perahu ke Gili T, tur snorkeling sekitar 3 Gili, sunset di bar pantai." } },
      { day: 2, title: { en: "Island Hopping & Return", id: "Jelajah Pulau & Kembali" }, desc: { en: "Morning snorkeling at turtle point, free time, then boat back and airport transfer.", id: "Snorkeling pagi di titik penyu, waktu bebas, lalu perahu kembali dan transfer bandara." } },
    ],
    includes: [
      { en: "Hotel accommodation (1 night)", id: "Akomodasi hotel (1 malam)" },
      { en: "Boat tickets", id: "Tiket perahu" },
      { en: "Snorkeling equipment", id: "Peralatan snorkeling" },
      { en: "Breakfast", id: "Sarapan" },
      { en: "Island hopping tour", id: "Tur jelajah pulau" },
    ],
    excludes: [
      { en: "Flight tickets", id: "Tiket pesawat" },
      { en: "Lunch & dinner", id: "Makan siang & malam" },
      { en: "Diving fees (optional)", id: "Biaya menyelam (opsional)" },
    ],
  },
};

const TourDetail = () => {
  const { slug } = useParams();
  const { language, t } = useLanguage();

  const tour = tourData[slug || ""];

  if (!tour) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="pt-40 pb-20 text-center">
          <h1 className="text-2xl font-semibold text-foreground font-display">Tour not found</h1>
          <Link to="/tour-package" className="text-primary mt-4 inline-block text-sm">← Back to Tours</Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="relative h-[55vh] min-h-[400px]">
        <img src={tour.image} alt={tour.title[language]} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 hero-gradient" />
        <div className="relative h-full flex items-end pb-14">
          <div className="container mx-auto px-6">
            <Link to="/tour-package" className="inline-flex items-center gap-2 text-primary-foreground/50 hover:text-primary-foreground mb-4 text-xs uppercase tracking-widest transition-colors duration-300">
              <ArrowLeft size={14} /> {t("nav.tourPackage")}
            </Link>
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-semibold text-primary-foreground text-shadow font-display leading-[0.95]">
              {tour.title[language]}
            </h1>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="flex-1">
              {/* Quick Info */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                {[
                  { icon: Clock, label: t("detail.duration"), value: tour.duration[language] },
                  { icon: Users, label: t("detail.groupSize"), value: `${tour.groupSize} ${t("detail.persons")}` },
                  { icon: MapPin, label: t("detail.pickup"), value: t("detail.allAreas") },
                  { icon: Globe, label: t("detail.language"), value: t("detail.engIndo") },
                ].map((item, i) => (
                  <div key={i} className="bg-secondary rounded-2xl p-5 text-center border border-border/50">
                    <item.icon size={18} className="mx-auto text-primary mb-2" />
                    <p className="text-[10px] text-muted-foreground uppercase tracking-wider">{item.label}</p>
                    <p className="text-sm font-semibold text-foreground mt-1">{item.value}</p>
                  </div>
                ))}
              </div>

              {/* Tabs */}
              <Tabs defaultValue="overview">
                <TabsList className="w-full justify-start bg-transparent border-b border-border rounded-none p-0 h-auto">
                  <TabsTrigger value="overview" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none px-6 py-3 text-xs uppercase tracking-widest">
                    {t("detail.overview")}
                  </TabsTrigger>
                  <TabsTrigger value="itinerary" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none px-6 py-3 text-xs uppercase tracking-widest">
                    {t("detail.itinerary")}
                  </TabsTrigger>
                  <TabsTrigger value="includes" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none px-6 py-3 text-xs uppercase tracking-widest">
                    {t("detail.includes")}
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="pt-8">
                  <p className="text-muted-foreground leading-relaxed font-light">{tour.overview[language]}</p>
                </TabsContent>

                <TabsContent value="itinerary" className="pt-8">
                  <div className="space-y-8">
                    {tour.itinerary.map((item) => (
                      <div key={item.day} className="flex gap-5">
                        <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-foreground text-primary-foreground flex items-center justify-center font-bold text-xs uppercase tracking-wider font-sans">
                          {t("detail.day")} {item.day}
                        </div>
                        <div className="pt-1">
                          <h4 className="font-semibold text-foreground font-display text-lg">{item.title[language]}</h4>
                          <p className="text-sm text-muted-foreground mt-1 font-light">{item.desc[language]}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="includes" className="pt-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div>
                      <h4 className="font-semibold text-foreground mb-5 font-display text-lg">{t("detail.includes")}</h4>
                      <div className="space-y-3">
                        {tour.includes.map((item, i) => (
                          <div key={i} className="flex items-center gap-3">
                            <CheckCircle size={16} className="text-primary flex-shrink-0" />
                            <span className="text-sm text-foreground font-light">{item[language]}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-5 font-display text-lg">{t("detail.excludes")}</h4>
                      <div className="space-y-3">
                        {tour.excludes.map((item, i) => (
                          <div key={i} className="flex items-center gap-3">
                            <XCircle size={16} className="text-destructive/60 flex-shrink-0" />
                            <span className="text-sm text-foreground font-light">{item[language]}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar */}
            <div className="lg:w-80">
              <div className="bg-card rounded-2xl premium-shadow p-8 lg:sticky lg:top-24 border border-border/50">
                <p className="text-[10px] text-muted-foreground uppercase tracking-wider">{t("detail.pricePerPerson")}</p>
                <p className="text-3xl font-bold text-foreground mt-2 font-display">
                  {tour.price}<span className="text-xs font-normal text-muted-foreground ml-1 font-sans">{t("tour.pax")}</span>
                </p>
                <div className="my-7 border-t border-border" />
                <div className="space-y-4 mb-7">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground font-light">{t("detail.duration")}</span>
                    <span className="text-foreground font-medium">{tour.duration[language]}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground font-light">{t("detail.groupSize")}</span>
                    <span className="text-foreground font-medium">{tour.groupSize} {t("detail.persons")}</span>
                  </div>
                </div>
                <a
                  href={`https://wa.me/6281234567890?text=${encodeURIComponent(language === "id" ? `Halo, saya tertarik dengan paket "${tour.title.id}" (${tour.duration.id}) seharga ${tour.price}/orang. Mohon informasi lebih lanjut.` : `Hello, I'm interested in the "${tour.title.en}" package (${tour.duration.en}) at ${tour.price}/person. Please provide more information.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full gold-gradient text-accent-foreground py-3.5 rounded-full text-xs uppercase tracking-[0.15em] font-semibold hover:opacity-90 transition-all duration-300 text-center"
                >
                  {t("detail.contactUs")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TourDetail;
