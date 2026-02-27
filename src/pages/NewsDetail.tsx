import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, ArrowLeft, User } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import tour1 from "@/assets/tour-1.jpg";
import tour2 from "@/assets/tour-2.jpg";
import tour3 from "@/assets/tour-3.jpg";
import tour4 from "@/assets/tour-4.jpg";
import tour5 from "@/assets/tour-5.jpg";

const newsData: Record<string, {
  image: string;
  title: { en: string; id: string };
  category: { en: string; id: string };
  date: string;
  author: string;
  content: { en: string[]; id: string[] };
}> = {
  "top-10-hidden-beaches": {
    image: tour1,
    title: { en: "Top 10 Hidden Beaches in Lombok You Must Visit", id: "10 Pantai Tersembunyi di Lombok yang Wajib Dikunjungi" },
    category: { en: "Travel Tips", id: "Tips Perjalanan" },
    date: "Feb 15, 2026",
    author: "Look Lombok Team",
    content: {
      en: [
        "Lombok is home to some of the most breathtaking and secluded beaches in Indonesia. While many tourists flock to the popular Gili Islands, the island itself hides pristine stretches of sand that remain largely undiscovered.",
        "1. Selong Belanak Beach — A crescent-shaped bay with powdery white sand and gentle waves, perfect for beginner surfers and sunbathers alike.",
        "2. Mawun Beach — Nestled between two hills, this beach offers a dramatic landscape with crystal-clear water.",
        "3. Tanjung Aan — Famous for its unique pepper-grain sand, this double-bay beach is a favorite among photographers.",
        "4. Pink Beach (Tangsi) — One of only a few pink-sand beaches in the world, located on Lombok's eastern coast.",
        "5. Semeti Beach — A rugged, wild beach with dramatic rock formations and powerful waves.",
        "6. Tampah Beach — Hidden below cliffs, this small cove offers complete privacy and stunning scenery.",
        "7. Mekaki Beach — A surfer's paradise with consistent waves and a remote, untouched feel.",
        "8. Sekotong Beaches — The Sekotong peninsula hosts a series of quiet beaches with views of small offshore islands.",
        "9. Belongas Bay — Known for its world-class diving spots, this bay also features a beautiful beach with dark sand.",
        "10. Kuta Mandalika — While becoming more developed, the beach itself remains stunning with its white sand.",
        "Each of these beaches offers a unique experience, from surfing and snorkeling to simply relaxing under the tropical sun.",
      ],
      id: [
        "Lombok memiliki beberapa pantai paling menakjubkan dan terpencil di Indonesia.",
        "1. Pantai Selong Belanak — Teluk berbentuk bulan sabit dengan pasir putih halus dan ombak yang lembut.",
        "2. Pantai Mawun — Terletak di antara dua bukit, pantai ini menawarkan lanskap dramatis dengan air jernih.",
        "3. Tanjung Aan — Terkenal dengan pasir unik berbentuk butiran merica.",
        "4. Pantai Pink (Tangsi) — Salah satu dari sedikit pantai berpasir merah muda di dunia.",
        "5. Pantai Semeti — Pantai yang kasar dan liar dengan formasi batu dramatis.",
        "6. Pantai Tampah — Tersembunyi di bawah tebing, teluk kecil ini menawarkan privasi total.",
        "7. Pantai Mekaki — Surga peselancar dengan ombak yang konsisten.",
        "8. Pantai Sekotong — Semenanjung Sekotong memiliki serangkaian pantai yang tenang.",
        "9. Teluk Belongas — Dikenal karena spot menyelam kelas dunia.",
        "10. Kuta Mandalika — Meskipun semakin berkembang, pantai ini tetap menakjubkan.",
        "Setiap pantai ini menawarkan pengalaman unik.",
      ],
    },
  },
  "mount-rinjani-trekking-guide": {
    image: tour2,
    title: { en: "Complete Guide to Mount Rinjani Trekking", id: "Panduan Lengkap Trekking Gunung Rinjani" },
    category: { en: "Adventure", id: "Petualangan" },
    date: "Feb 10, 2026",
    author: "Look Lombok Team",
    content: {
      en: [
        "Mount Rinjani, standing at 3,726 meters, is Indonesia's second-highest volcano and one of the most popular trekking destinations in Southeast Asia.",
        "The trek typically takes 2-4 days depending on your route and fitness level.",
        "Day 1 usually involves a 6-7 hour trek from Senaru to the crater rim at Plawangan Senaru (2,641m).",
        "Day 2 offers the option to descend to Segara Anak Lake, a beautiful crater lake at 2,000m.",
        "The summit push typically starts around 2-3 AM to reach the peak for sunrise.",
        "Essential items to bring: warm layers, headlamp, trekking poles, rain gear, sunscreen, and plenty of water.",
        "The best time to trek Rinjani is during the dry season from April to November.",
      ],
      id: [
        "Gunung Rinjani, berdiri di ketinggian 3.726 meter, adalah gunung berapi tertinggi kedua di Indonesia.",
        "Trekking biasanya memakan waktu 2-4 hari tergantung rute dan tingkat kebugaran Anda.",
        "Hari pertama biasanya melibatkan trekking 6-7 jam dari Senaru ke bibir kawah.",
        "Hari kedua menawarkan opsi untuk turun ke Danau Segara Anak.",
        "Pendakian puncak biasanya dimulai sekitar pukul 2-3 pagi.",
        "Barang penting yang harus dibawa: pakaian hangat, headlamp, tongkat trekking, jas hujan.",
        "Waktu terbaik untuk trekking Rinjani adalah selama musim kering dari April hingga November.",
      ],
    },
  },
  "sasak-culture-traditions": {
    image: tour4,
    title: { en: "Exploring Sasak Culture and Traditions", id: "Menjelajahi Budaya dan Tradisi Sasak" },
    category: { en: "Culture", id: "Budaya" },
    date: "Feb 5, 2026",
    author: "Look Lombok Team",
    content: {
      en: [
        "The Sasak people are the indigenous inhabitants of Lombok, making up about 85% of the island's population.",
        "Traditional Sasak villages like Sade and Ende offer visitors a glimpse into a way of life that has remained largely unchanged.",
        "Weaving is one of the most important Sasak traditions. Women create intricate textiles using backstrap looms.",
        "Sasak cuisine is known for its bold, spicy flavors. Ayam Taliwang and Plecing Kangkung are must-try dishes.",
        "Traditional music and dance play important roles in Sasak ceremonies.",
        "Visiting a traditional Sasak village is one of the most enriching experiences you can have in Lombok.",
      ],
      id: [
        "Suku Sasak adalah penduduk asli Lombok, membentuk sekitar 85% populasi pulau ini.",
        "Desa-desa Sasak tradisional seperti Sade dan Ende menawarkan sekilas tentang cara hidup yang tidak berubah.",
        "Tenun adalah salah satu tradisi Sasak yang paling penting.",
        "Masakan Sasak dikenal dengan rasa yang kuat dan pedas.",
        "Musik dan tari tradisional memainkan peran penting dalam upacara Sasak.",
        "Mengunjungi desa Sasak tradisional adalah pengalaman paling memperkaya di Lombok.",
      ],
    },
  },
  "best-waterfalls-north-lombok": {
    image: tour5,
    title: { en: "Best Waterfalls to Visit in North Lombok", id: "Air Terjun Terbaik di Lombok Utara" },
    category: { en: "Nature", id: "Alam" },
    date: "Jan 28, 2026",
    author: "Look Lombok Team",
    content: {
      en: [
        "North Lombok is a treasure trove of stunning waterfalls hidden within lush tropical forests.",
        "Tiu Kelep Waterfall is the most famous, featuring a 42-meter cascade surrounded by tropical vegetation.",
        "Sendang Gile Waterfall is located near Tiu Kelep and is easily accessible.",
        "Benang Stokel and Benang Kelambu are twin waterfalls that look like curtains of water.",
        "For a less crowded experience, visit Mangku Sakti waterfall.",
        "Best tips: wear water shoes, bring a waterproof bag, visit early morning.",
      ],
      id: [
        "Lombok Utara adalah harta karun air terjun menakjubkan yang tersembunyi di hutan tropis.",
        "Air Terjun Tiu Kelep adalah yang paling terkenal, setinggi 42 meter.",
        "Air Terjun Sendang Gile terletak dekat Tiu Kelep dan mudah diakses.",
        "Benang Stokel dan Benang Kelambu adalah air terjun kembar yang memukau.",
        "Untuk pengalaman yang lebih sepi, kunjungi air terjun Mangku Sakti.",
        "Tips: kenakan sepatu air, bawa tas tahan air, kunjungi pagi-pagi.",
      ],
    },
  },
  "lombok-food-guide": {
    image: tour3,
    title: { en: "Lombok Food Guide: Local Delicacies You Must Try", id: "Panduan Kuliner Lombok: Makanan Khas yang Wajib Dicoba" },
    category: { en: "Food", id: "Makanan" },
    date: "Jan 20, 2026",
    author: "Look Lombok Team",
    content: {
      en: [
        "Lombok's culinary scene is a spicy, flavorful adventure that reflects the island's Sasak heritage.",
        "Ayam Taliwang — The island's signature dish, featuring grilled chicken marinated in fiery chili sauce.",
        "Plecing Kangkung — Blanched water spinach served with a spicy tomato sambal.",
        "Sate Rembiga — Minced beef satay seasoned with a blend of spices, grilled over charcoal.",
        "Nasi Balap Puyung — A rice dish with shredded chicken, fried soybeans, and chili sauce.",
        "Beberuk Terong — A traditional Sasak salad made from grilled eggplant.",
        "For the best local food experience, visit the traditional markets in Mataram.",
      ],
      id: [
        "Kuliner Lombok adalah petualangan rasa yang pedas dan lezat.",
        "Ayam Taliwang — Hidangan khas pulau ini dengan ayam panggang saus cabai.",
        "Plecing Kangkung — Kangkung rebus dengan sambal tomat pedas.",
        "Sate Rembiga — Sate daging sapi cincang yang dibumbui rempah.",
        "Nasi Balap Puyung — Nasi dengan ayam suwir, kedelai goreng, dan saus cabai.",
        "Beberuk Terong — Salad Sasak tradisional dari terong bakar.",
        "Kunjungi pasar tradisional di Mataram untuk pengalaman kuliner terbaik.",
      ],
    },
  },
};

const NewsDetail = () => {
  const { slug } = useParams();
  const { language, t } = useLanguage();

  const article = newsData[slug || ""];

  if (!article) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="pt-40 pb-20 text-center">
          <h1 className="text-2xl font-semibold text-foreground font-display">{language === "id" ? "Artikel tidak ditemukan" : "Article not found"}</h1>
          <Link to="/news" className="text-primary mt-4 inline-block text-sm">← {t("nav.news")}</Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="relative h-[55vh] min-h-[400px]">
        <img src={article.image} alt={article.title[language]} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 hero-gradient" />
        <div className="relative h-full flex items-end pb-14">
          <div className="container mx-auto px-6">
            <Link to="/news" className="inline-flex items-center gap-2 text-primary-foreground/50 hover:text-primary-foreground mb-4 text-xs uppercase tracking-widest transition-colors duration-300">
              <ArrowLeft size={14} /> {t("nav.news")}
            </Link>
            <span className="block text-[10px] font-semibold text-accent uppercase tracking-widest mb-4">{article.category[language]}</span>
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-semibold text-primary-foreground text-shadow font-display max-w-4xl leading-[0.95]">
              {article.title[language]}
            </h1>
            <div className="flex items-center gap-5 mt-6 text-primary-foreground/40 text-xs">
              <span className="flex items-center gap-2"><User size={12} /> {article.author}</span>
              <span className="flex items-center gap-2"><Calendar size={12} /> {article.date}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            {article.content[language].map((paragraph, i) => (
              <p key={i} className="text-muted-foreground leading-[1.85] mb-6 font-light text-base">{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NewsDetail;
