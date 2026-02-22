import { Link } from "react-router-dom";

interface TourCardProps {
  image: string;
  title: string;
  price: string;
  duration: string;
}

const TourCard = ({ image, title, price, duration }: TourCardProps) => {
  return (
    <Link to="/tour-package" className="group block">
      <div className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 card-gradient" />
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <p className="text-xs text-primary-foreground/80">{duration}</p>
            <h3 className="text-sm font-semibold text-primary-foreground">{title}</h3>
          </div>
        </div>
      </div>
      <div className="mt-3 text-center">
        <p className="text-xs text-muted-foreground">Start from</p>
        <p className="text-lg font-bold text-foreground">
          {price}<span className="text-sm font-normal text-muted-foreground">/pax</span>
        </p>
      </div>
    </Link>
  );
};

export default TourCard;
