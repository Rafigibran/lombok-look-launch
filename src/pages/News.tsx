import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import tour1 from "@/assets/tour-1.jpg";
import tour2 from "@/assets/tour-2.jpg";
import tour3 from "@/assets/tour-3.jpg";
import tour4 from "@/assets/tour-4.jpg";
import tour5 from "@/assets/tour-5.jpg";

const News = () => {
  const { language, t } = useLanguage();
  const isId = language === "id";

  const articles = [
    {
      image: tour1,
      title: isId ? "10 Pantai Tersembunyi di Lombok yang Wajib Dikunjungi" : "Top 10 Hidden Beaches in Lombok You Must Visit",
      excerpt: isId ? "Temukan pantai-pantai paling menakjubkan dan terpencil yang ditawarkan Lombok." : "Discover the most stunning and secluded beaches that Lombok has to offer.",
      date: "Feb 15, 2026",
      category: isId ? "Tips Perjalanan" : "Travel Tips",
    },
    {
      image: tour2,
      title: isId ? "Panduan Lengkap Trekking Gunung Rinjani" : "Complete Guide to Mount Rinjani Trekking",
      excerpt: isId ? "Semua yang perlu Anda ketahui sebelum menaklukkan puncak tertinggi Lombok." : "Everything you need to know before conquering Lombok's highest peak.",
      date: "Feb 10, 2026",
      category: isId ? "Petualangan" : "Adventure",
    },
    {
      image: tour4,
      title: isId ? "Menjelajahi Budaya dan Tradisi Sasak" : "Exploring Sasak Culture and Traditions",
      excerpt: isId ? "Selami warisan budaya kaya suku Sasak dan tradisi berabad-abad mereka." : "Dive deep into the rich cultural heritage of the Sasak people.",
      date: "Feb 5, 2026",
      category: isId ? "Budaya" : "Culture",
    },
    {
      image: tour5,
      title: isId ? "Air Terjun Terbaik di Lombok Utara" : "Best Waterfalls to Visit in North Lombok",
      excerpt: isId ? "Panduan lengkap air terjun paling memukau di hutan Lombok utara." : "A guide to the most breathtaking waterfalls in northern Lombok.",
      date: "Jan 28, 2026",
      category: isId ? "Alam" : "Nature",
    },
    {
      image: tour3,
      title: isId ? "Panduan Kuliner Lombok: Makanan Khas yang Wajib Dicoba" : "Lombok Food Guide: Local Delicacies You Must Try",
      excerpt: isId ? "Dari Ayam Taliwang hingga Plecing Kangkung, jelajahi cita rasa unik masakan Lombok." : "From Ayam Taliwang to Plecing Kangkung, explore Lombok's cuisine.",
      date: "Jan 20, 2026",
      category: isId ? "Makanan" : "Food",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="relative h-[40vh] min-h-[300px] bg-foreground">
        <div className="absolute inset-0 bg-gradient-to-b from-foreground to-foreground/90" />
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground animate-fade-in-up font-display">
              {t("news.hero.title")} <span className="text-accent">{t("news.hero.titleAccent")}</span>
            </h1>
            <p className="mt-4 text-primary-foreground/60 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              {t("news.hero.subtitle")}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div className="rounded-xl overflow-hidden">
              <img src={articles[0].image} alt={articles[0].title} className="w-full h-full object-cover min-h-[300px]" />
            </div>
            <div className="flex flex-col justify-center">
              <span className="inline-block text-xs font-semibold text-primary bg-teal-light px-3 py-1 rounded-full w-fit mb-4">
                {articles[0].category}
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">{articles[0].title}</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">{articles[0].excerpt}</p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                <Calendar size={14} />
                <span>{articles[0].date}</span>
              </div>
              <button className="inline-flex items-center gap-2 text-primary font-medium hover:text-teal-dark transition-colors w-fit">
                {t("news.readMore")} <ArrowRight size={16} />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {articles.slice(1).map((article, i) => (
              <article key={i} className="bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group cursor-pointer border border-border">
                <div className="aspect-video overflow-hidden">
                  <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <span className="text-xs font-medium text-primary">{article.category}</span>
                  <h3 className="text-sm font-semibold text-foreground mt-1 mb-2 line-clamp-2">{article.title}</h3>
                  <p className="text-xs text-muted-foreground line-clamp-2 mb-3">{article.excerpt}</p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar size={12} />
                    <span>{article.date}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default News;
