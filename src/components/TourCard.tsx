import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

interface TourCardProps {
  image: string;
  title: string;
  price: string;
  duration: string;
  slug: string;
}

const TourCard = ({ image, title, price, duration, slug }: TourCardProps) => {
  const { t } = useLanguage();

  return (
    <Link to={`/tour-package/${slug}`} className="group block">
      <div className="relative rounded-2xl overflow-hidden premium-shadow hover:shadow-2xl transition-all duration-500">
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 card-gradient" />
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <p className="text-[11px] text-primary-foreground/60 uppercase tracking-widest font-light">{duration}</p>
            <h3 className="text-sm font-semibold text-primary-foreground mt-1 font-sans">{title}</h3>
          </div>
        </div>
      </div>
      <div className="mt-4 text-center">
        <p className="text-[11px] text-muted-foreground uppercase tracking-wider">{t("tour.startFrom")}</p>
        <p className="text-lg font-bold text-foreground mt-0.5">
          {price}<span className="text-xs font-normal text-muted-foreground ml-0.5">{t("tour.pax")}</span>
        </p>
      </div>
    </Link>
  );
};

export default TourCard;
