import { Link } from "react-router-dom";
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
      slug: "top-10-hidden-beaches",
    },
    {
      image: tour2,
      title: isId ? "Panduan Lengkap Trekking Gunung Rinjani" : "Complete Guide to Mount Rinjani Trekking",
      excerpt: isId ? "Semua yang perlu Anda ketahui sebelum menaklukkan puncak tertinggi Lombok." : "Everything you need to know before conquering Lombok's highest peak.",
      date: "Feb 10, 2026",
      category: isId ? "Petualangan" : "Adventure",
      slug: "mount-rinjani-trekking-guide",
    },
    {
      image: tour4,
      title: isId ? "Menjelajahi Budaya dan Tradisi Sasak" : "Exploring Sasak Culture and Traditions",
      excerpt: isId ? "Selami warisan budaya kaya suku Sasak dan tradisi berabad-abad mereka." : "Dive deep into the rich cultural heritage of the Sasak people.",
      date: "Feb 5, 2026",
      category: isId ? "Budaya" : "Culture",
      slug: "sasak-culture-traditions",
    },
    {
      image: tour5,
      title: isId ? "Air Terjun Terbaik di Lombok Utara" : "Best Waterfalls to Visit in North Lombok",
      excerpt: isId ? "Panduan lengkap air terjun paling memukau di hutan Lombok utara." : "A guide to the most breathtaking waterfalls in northern Lombok.",
      date: "Jan 28, 2026",
      category: isId ? "Alam" : "Nature",
      slug: "best-waterfalls-north-lombok",
    },
    {
      image: tour3,
      title: isId ? "Panduan Kuliner Lombok: Makanan Khas yang Wajib Dicoba" : "Lombok Food Guide: Local Delicacies You Must Try",
      excerpt: isId ? "Dari Ayam Taliwang hingga Plecing Kangkung, jelajahi cita rasa unik masakan Lombok." : "From Ayam Taliwang to Plecing Kangkung, explore Lombok's cuisine.",
      date: "Jan 20, 2026",
      category: isId ? "Makanan" : "Food",
      slug: "lombok-food-guide",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="relative h-[45vh] min-h-[350px] bg-foreground">
        <div className="absolute inset-0 bg-gradient-to-b from-foreground to-foreground/95" />
        <div className="relative h-full flex items-center justify-center text-center px-6">
          <div>
            <p className="text-[11px] uppercase tracking-[0.5em] text-primary-foreground/30 mb-4 font-sans font-light animate-fade-in">
              {isId ? "Cerita & Panduan" : "Stories & Guides"}
            </p>
            <h1 className="text-4xl md:text-6xl font-semibold text-primary-foreground animate-fade-in-up font-display">
              {t("news.hero.title")} <span className="text-accent italic">{t("news.hero.titleAccent")}</span>
            </h1>
            <p className="mt-4 text-primary-foreground/40 animate-fade-in-up text-sm font-light" style={{ animationDelay: "0.2s" }}>
              {t("news.hero.subtitle")}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          {/* Featured article */}
          <Link to={`/news/${articles[0].slug}`} className="block">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20 group cursor-pointer">
              <div className="rounded-2xl overflow-hidden">
                <img src={articles[0].image} alt={articles[0].title} className="w-full h-full object-cover min-h-[300px] group-hover:scale-105 transition-transform duration-700 ease-out" />
              </div>
              <div className="flex flex-col justify-center">
                <span className="inline-block text-[10px] font-semibold text-primary uppercase tracking-widest w-fit mb-5">
                  {articles[0].category}
                </span>
                <h2 className="text-2xl md:text-4xl font-semibold text-foreground mb-5 font-display leading-tight">{articles[0].title}</h2>
                <p className="text-muted-foreground leading-relaxed mb-5 font-light">{articles[0].excerpt}</p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-6">
                  <Calendar size={12} />
                  <span>{articles[0].date}</span>
                </div>
                <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-foreground/60 group-hover:text-primary transition-colors duration-300 font-medium w-fit">
                  {t("news.readMore")} <ArrowRight size={14} />
                </span>
              </div>
            </div>
          </Link>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {articles.slice(1).map((article, i) => (
              <Link key={i} to={`/news/${article.slug}`}>
                <article className="bg-card rounded-2xl overflow-hidden premium-shadow hover:-translate-y-1 transition-all duration-500 group cursor-pointer border border-border/50 h-full">
                  <div className="aspect-video overflow-hidden">
                    <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                  </div>
                  <div className="p-6">
                    <span className="text-[10px] font-medium text-primary uppercase tracking-widest">{article.category}</span>
                    <h3 className="text-sm font-semibold text-foreground mt-2 mb-3 line-clamp-2 font-display">{article.title}</h3>
                    <p className="text-xs text-muted-foreground line-clamp-2 mb-4 font-light">{article.excerpt}</p>
                    <div className="flex items-center gap-2 text-[11px] text-muted-foreground/60">
                      <Calendar size={11} />
                      <span>{article.date}</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default News;
