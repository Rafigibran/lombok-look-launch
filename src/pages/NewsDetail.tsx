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
    title: {
      en: "Top 10 Hidden Beaches in Lombok You Must Visit",
      id: "10 Pantai Tersembunyi di Lombok yang Wajib Dikunjungi",
    },
    category: { en: "Travel Tips", id: "Tips Perjalanan" },
    date: "Feb 15, 2026",
    author: "Look Lombok Team",
    content: {
      en: [
        "Lombok is home to some of the most breathtaking and secluded beaches in Indonesia. While many tourists flock to the popular Gili Islands, the island itself hides pristine stretches of sand that remain largely undiscovered.",
        "1. Selong Belanak Beach — A crescent-shaped bay with powdery white sand and gentle waves, perfect for beginner surfers and sunbathers alike. The turquoise waters here are incredibly calm and inviting.",
        "2. Mawun Beach — Nestled between two hills, this beach offers a dramatic landscape with crystal-clear water. It's one of the most photogenic spots on the island.",
        "3. Tanjung Aan — Famous for its unique pepper-grain sand, this double-bay beach is a favorite among photographers. The surrounding hills provide excellent vantage points for sunset views.",
        "4. Pink Beach (Tangsi) — One of only a few pink-sand beaches in the world, located on Lombok's eastern coast. The pinkish hue comes from microscopic organisms called Foraminifera.",
        "5. Semeti Beach — A rugged, wild beach with dramatic rock formations and powerful waves. It's less visited but incredibly beautiful for those seeking adventure.",
        "6. Tampah Beach — Hidden below cliffs, this small cove offers complete privacy and stunning scenery. Access requires a short hike, but the reward is worth every step.",
        "7. Mekaki Beach — A surfer's paradise with consistent waves and a remote, untouched feel. The beach is surrounded by lush green hills.",
        "8. Sekotong Beaches — The Sekotong peninsula hosts a series of quiet beaches with views of small offshore islands. Perfect for snorkeling and kayaking.",
        "9. Belongas Bay — Known for its world-class diving spots, this bay also features a beautiful beach with dark sand and dramatic cliffs.",
        "10. Kuta Mandalika — While becoming more developed, the beach itself remains stunning with its white sand and world-class surf breaks. Visit early morning for a peaceful experience.",
        "Each of these beaches offers a unique experience, from surfing and snorkeling to simply relaxing under the tropical sun. We recommend renting a scooter or hiring a private driver to explore these hidden gems at your own pace.",
      ],
      id: [
        "Lombok memiliki beberapa pantai paling menakjubkan dan terpencil di Indonesia. Sementara banyak wisatawan berbondong-bondong ke Kepulauan Gili yang populer, pulau ini sendiri menyembunyikan hamparan pasir yang masih alami.",
        "1. Pantai Selong Belanak — Teluk berbentuk bulan sabit dengan pasir putih halus dan ombak yang lembut, sempurna untuk peselancar pemula dan penggemar berjemur. Air biru kehijauan di sini sangat tenang dan mengundang.",
        "2. Pantai Mawun — Terletak di antara dua bukit, pantai ini menawarkan lanskap dramatis dengan air jernih. Ini adalah salah satu spot paling fotogenik di pulau ini.",
        "3. Tanjung Aan — Terkenal dengan pasir unik berbentuk butiran merica, pantai dua teluk ini menjadi favorit para fotografer. Bukit-bukit sekitarnya memberikan titik pandang yang sangat baik untuk pemandangan matahari terbenam.",
        "4. Pantai Pink (Tangsi) — Salah satu dari sedikit pantai berpasir merah muda di dunia, terletak di pantai timur Lombok. Warna merah muda berasal dari organisme mikroskopis bernama Foraminifera.",
        "5. Pantai Semeti — Pantai yang kasar dan liar dengan formasi batu dramatis dan ombak yang kuat. Jarang dikunjungi tapi sangat indah bagi mereka yang mencari petualangan.",
        "6. Pantai Tampah — Tersembunyi di bawah tebing, teluk kecil ini menawarkan privasi total dan pemandangan yang menakjubkan. Akses memerlukan pendakian singkat, tapi hasilnya sepadan.",
        "7. Pantai Mekaki — Surga peselancar dengan ombak yang konsisten dan nuansa terpencil yang masih alami. Pantai ini dikelilingi oleh bukit hijau yang subur.",
        "8. Pantai Sekotong — Semenanjung Sekotong memiliki serangkaian pantai yang tenang dengan pemandangan pulau-pulau kecil. Sempurna untuk snorkeling dan kayak.",
        "9. Teluk Belongas — Dikenal karena spot menyelam kelas dunia, teluk ini juga menampilkan pantai indah dengan pasir gelap dan tebing dramatis.",
        "10. Kuta Mandalika — Meskipun semakin berkembang, pantai ini tetap menakjubkan dengan pasir putih dan ombak kelas dunia. Kunjungi pagi-pagi untuk pengalaman yang damai.",
        "Setiap pantai ini menawarkan pengalaman unik, dari selancar dan snorkeling hingga sekadar bersantai di bawah sinar matahari tropis. Kami merekomendasikan menyewa skuter atau menyewa sopir pribadi untuk menjelajahi permata tersembunyi ini sesuai keinginan Anda.",
      ],
    },
  },
  "mount-rinjani-trekking-guide": {
    image: tour2,
    title: {
      en: "Complete Guide to Mount Rinjani Trekking",
      id: "Panduan Lengkap Trekking Gunung Rinjani",
    },
    category: { en: "Adventure", id: "Petualangan" },
    date: "Feb 10, 2026",
    author: "Look Lombok Team",
    content: {
      en: [
        "Mount Rinjani, standing at 3,726 meters, is Indonesia's second-highest volcano and one of the most popular trekking destinations in Southeast Asia.",
        "The trek typically takes 2-4 days depending on your route and fitness level. The most common starting point is Senaru village in north Lombok.",
        "Day 1 usually involves a 6-7 hour trek from Senaru to the crater rim at Plawangan Senaru (2,641m). The trail passes through tropical forest with stunning views.",
        "Day 2 offers the option to descend to Segara Anak Lake, a beautiful crater lake at 2,000m. You can also visit hot springs near the lake for a relaxing soak.",
        "The summit push typically starts around 2-3 AM to reach the peak for sunrise. The final stretch is challenging with loose volcanic scree, but the panoramic views are unforgettable.",
        "Essential items to bring: warm layers, headlamp, trekking poles, rain gear, sunscreen, and plenty of water. We recommend booking with a licensed guide for safety.",
        "The best time to trek Rinjani is during the dry season from April to November. The park is closed during the wet season (January-March) for safety reasons.",
      ],
      id: [
        "Gunung Rinjani, berdiri di ketinggian 3.726 meter, adalah gunung berapi tertinggi kedua di Indonesia dan salah satu tujuan trekking paling populer di Asia Tenggara.",
        "Trekking biasanya memakan waktu 2-4 hari tergantung rute dan tingkat kebugaran Anda. Titik awal paling umum adalah desa Senaru di utara Lombok.",
        "Hari pertama biasanya melibatkan trekking 6-7 jam dari Senaru ke bibir kawah di Plawangan Senaru (2.641m). Jalur ini melewati hutan tropis dengan pemandangan yang menakjubkan.",
        "Hari kedua menawarkan opsi untuk turun ke Danau Segara Anak, danau kawah yang indah di 2.000m. Anda juga bisa mengunjungi sumber air panas di dekat danau.",
        "Pendakian puncak biasanya dimulai sekitar pukul 2-3 pagi untuk mencapai puncak saat matahari terbit. Bagian terakhir menantang dengan batuan vulkanik yang gembur, tapi pemandangan panoramiknya tak terlupakan.",
        "Barang penting yang harus dibawa: pakaian hangat, headlamp, tongkat trekking, jas hujan, tabir surya, dan banyak air. Kami merekomendasikan pemesanan dengan pemandu berlisensi untuk keamanan.",
        "Waktu terbaik untuk trekking Rinjani adalah selama musim kering dari April hingga November. Taman ditutup selama musim hujan (Januari-Maret) untuk alasan keamanan.",
      ],
    },
  },
  "sasak-culture-traditions": {
    image: tour4,
    title: {
      en: "Exploring Sasak Culture and Traditions",
      id: "Menjelajahi Budaya dan Tradisi Sasak",
    },
    category: { en: "Culture", id: "Budaya" },
    date: "Feb 5, 2026",
    author: "Look Lombok Team",
    content: {
      en: [
        "The Sasak people are the indigenous inhabitants of Lombok, making up about 85% of the island's population. Their rich cultural heritage spans centuries of tradition.",
        "Traditional Sasak villages like Sade and Ende offer visitors a glimpse into a way of life that has remained largely unchanged. Houses are built with bamboo walls and thatched roofs.",
        "Weaving is one of the most important Sasak traditions. Women in villages like Sukarara create intricate textiles using backstrap looms, with patterns that tell stories of daily life and mythology.",
        "Sasak cuisine is known for its bold, spicy flavors. Ayam Taliwang (grilled chicken with chili paste) and Plecing Kangkung (water spinach with sambal) are must-try dishes.",
        "Traditional music and dance play important roles in Sasak ceremonies. The Gendang Beleq is a traditional war dance featuring large drums, performed during festivals and celebrations.",
        "Visiting a traditional Sasak village is one of the most enriching experiences you can have in Lombok. We recommend hiring a local guide who can explain the customs and traditions in detail.",
      ],
      id: [
        "Suku Sasak adalah penduduk asli Lombok, membentuk sekitar 85% populasi pulau ini. Warisan budaya mereka yang kaya membentang selama berabad-abad tradisi.",
        "Desa-desa Sasak tradisional seperti Sade dan Ende menawarkan pengunjung sekilas tentang cara hidup yang sebagian besar tetap tidak berubah. Rumah-rumah dibangun dengan dinding bambu dan atap jerami.",
        "Tenun adalah salah satu tradisi Sasak yang paling penting. Wanita di desa-desa seperti Sukarara menciptakan tekstil rumit menggunakan alat tenun gedogan, dengan pola yang menceritakan kehidupan sehari-hari dan mitologi.",
        "Masakan Sasak dikenal dengan rasa yang kuat dan pedas. Ayam Taliwang dan Plecing Kangkung adalah hidangan yang wajib dicoba.",
        "Musik dan tari tradisional memainkan peran penting dalam upacara Sasak. Gendang Beleq adalah tarian perang tradisional yang menampilkan drum besar, ditampilkan selama festival dan perayaan.",
        "Mengunjungi desa Sasak tradisional adalah salah satu pengalaman paling memperkaya yang bisa Anda miliki di Lombok. Kami merekomendasikan menyewa pemandu lokal yang bisa menjelaskan adat istiadat secara detail.",
      ],
    },
  },
  "best-waterfalls-north-lombok": {
    image: tour5,
    title: {
      en: "Best Waterfalls to Visit in North Lombok",
      id: "Air Terjun Terbaik di Lombok Utara",
    },
    category: { en: "Nature", id: "Alam" },
    date: "Jan 28, 2026",
    author: "Look Lombok Team",
    content: {
      en: [
        "North Lombok is a treasure trove of stunning waterfalls hidden within lush tropical forests on the slopes of Mount Rinjani.",
        "Tiu Kelep Waterfall is the most famous, featuring a 42-meter cascade surrounded by tropical vegetation. The trek takes about 30 minutes through a river path.",
        "Sendang Gile Waterfall is located near Tiu Kelep and is easily accessible with a short walk from the parking area. The powerful falls create a refreshing mist.",
        "Benang Stokel and Benang Kelambu are twin waterfalls in central Lombok that look like curtains of water flowing over moss-covered rocks. Truly magical.",
        "For a less crowded experience, visit Mangku Sakti waterfall, which requires a longer trek but rewards you with a pristine natural pool.",
        "Best tips: wear water shoes, bring a waterproof bag for your camera, visit early morning for fewer crowds, and always hire a local guide for safety.",
      ],
      id: [
        "Lombok Utara adalah harta karun air terjun menakjubkan yang tersembunyi di dalam hutan tropis yang rimbun di lereng Gunung Rinjani.",
        "Air Terjun Tiu Kelep adalah yang paling terkenal, menampilkan air terjun setinggi 42 meter yang dikelilingi vegetasi tropis. Trekking memakan waktu sekitar 30 menit melalui jalur sungai.",
        "Air Terjun Sendang Gile terletak dekat Tiu Kelep dan mudah diakses dengan berjalan kaki singkat dari area parkir. Air terjun yang kuat menciptakan kabut yang menyegarkan.",
        "Benang Stokel dan Benang Kelambu adalah air terjun kembar di Lombok tengah yang terlihat seperti tirai air yang mengalir di atas batu berlumut. Sangat memukau.",
        "Untuk pengalaman yang lebih sepi, kunjungi air terjun Mangku Sakti, yang memerlukan trekking lebih panjang tetapi memanjakan Anda dengan kolam alami yang masih alami.",
        "Tips terbaik: kenakan sepatu air, bawa tas tahan air untuk kamera Anda, kunjungi pagi-pagi untuk menghindari keramaian, dan selalu sewa pemandu lokal untuk keamanan.",
      ],
    },
  },
  "lombok-food-guide": {
    image: tour3,
    title: {
      en: "Lombok Food Guide: Local Delicacies You Must Try",
      id: "Panduan Kuliner Lombok: Makanan Khas yang Wajib Dicoba",
    },
    category: { en: "Food", id: "Makanan" },
    date: "Jan 20, 2026",
    author: "Look Lombok Team",
    content: {
      en: [
        "Lombok's culinary scene is a spicy, flavorful adventure that reflects the island's Sasak heritage. Here are the must-try local delicacies.",
        "Ayam Taliwang — The island's signature dish, featuring grilled chicken marinated in a fiery chili, garlic, and shrimp paste sauce. Best enjoyed with steamed rice and plecing kangkung.",
        "Plecing Kangkung — Blanched water spinach served with a spicy tomato and chili sambal. Simple yet incredibly delicious, this side dish accompanies almost every meal.",
        "Sate Rembiga — Minced beef satay seasoned with a blend of spices, grilled over charcoal. A Lombok specialty that's different from other Indonesian satays.",
        "Nasi Balap Puyung — A rice dish with shredded chicken, fried soybeans, and chili sauce. Originally from Puyung village, it's now popular across the island.",
        "Beberuk Terong — A traditional Sasak salad made from grilled eggplant, tomato, chili, and shrimp paste. Tangy, spicy, and uniquely Lombok.",
        "For the best local food experience, visit the traditional markets in Mataram or the warungs (small eateries) in Senggigi and Kuta areas.",
      ],
      id: [
        "Kuliner Lombok adalah petualangan rasa yang pedas dan lezat yang mencerminkan warisan Sasak pulau ini. Berikut adalah makanan khas yang wajib dicoba.",
        "Ayam Taliwang — Hidangan khas pulau ini, menampilkan ayam panggang yang dimarinasi dalam saus cabai, bawang putih, dan terasi yang pedas. Paling nikmat dinikmati dengan nasi putih dan plecing kangkung.",
        "Plecing Kangkung — Kangkung rebus yang disajikan dengan sambal tomat dan cabai pedas. Sederhana namun sangat lezat, lauk ini menemani hampir setiap makanan.",
        "Sate Rembiga — Sate daging sapi cincang yang dibumbui dengan campuran rempah, dibakar di atas arang. Spesialisasi Lombok yang berbeda dari sate Indonesia lainnya.",
        "Nasi Balap Puyung — Hidangan nasi dengan ayam suwir, kedelai goreng, dan saus cabai. Berasal dari desa Puyung, sekarang populer di seluruh pulau.",
        "Beberuk Terong — Salad Sasak tradisional yang terbuat dari terong bakar, tomat, cabai, dan terasi. Asam, pedas, dan unik khas Lombok.",
        "Untuk pengalaman kuliner lokal terbaik, kunjungi pasar tradisional di Mataram atau warung-warung di daerah Senggigi dan Kuta.",
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
        <div className="pt-32 pb-20 text-center">
          <h1 className="text-2xl font-bold text-foreground">{language === "id" ? "Artikel tidak ditemukan" : "Article not found"}</h1>
          <Link to="/news" className="text-primary mt-4 inline-block">← {t("nav.news")}</Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="relative h-[50vh] min-h-[350px]">
        <img src={article.image} alt={article.title[language]} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 hero-gradient" />
        <div className="relative h-full flex items-end pb-12">
          <div className="container mx-auto px-4">
            <Link to="/news" className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-4 text-sm transition-colors">
              <ArrowLeft size={16} /> {t("nav.news")}
            </Link>
            <span className="block text-xs font-semibold text-accent mb-3">{article.category[language]}</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground text-shadow font-display max-w-3xl">
              {article.title[language]}
            </h1>
            <div className="flex items-center gap-4 mt-4 text-primary-foreground/70 text-sm">
              <span className="flex items-center gap-1.5"><User size={14} /> {article.author}</span>
              <span className="flex items-center gap-1.5"><Calendar size={14} /> {article.date}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg max-w-none">
              {article.content[language].map((paragraph, i) => (
                <p key={i} className="text-muted-foreground leading-relaxed mb-6">{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NewsDetail;
