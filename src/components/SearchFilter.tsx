import { Search, Clock, Users, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface SearchFilterProps {
  destination: string;
  duration: string;
  guests: string;
  onDestinationChange: (val: string) => void;
  onDurationChange: (val: string) => void;
  onGuestsChange: (val: string) => void;
  onSearch: () => void;
}

const SearchFilter = ({
  destination,
  duration,
  guests,
  onDestinationChange,
  onDurationChange,
  onGuestsChange,
  onSearch,
}: SearchFilterProps) => {
  const { t } = useLanguage();

  return (
    <div className="bg-card rounded-2xl premium-shadow p-7 w-full max-w-sm border border-border/50">
      <div className="space-y-5">
        <div className="flex items-center gap-3 pb-5 border-b border-border">
          <MapPin size={18} className="text-primary" />
          <div className="flex-1">
            <input
              type="text"
              value={destination}
              onChange={(e) => onDestinationChange(e.target.value)}
              placeholder={t("filter.destination")}
              className="w-full text-sm text-foreground placeholder:text-muted-foreground bg-transparent outline-none font-medium"
            />
          </div>
          <Search size={14} className="text-muted-foreground" />
        </div>

        <div className="flex items-center gap-3 pb-5 border-b border-border">
          <Clock size={18} className="text-primary" />
          <select
            value={duration}
            onChange={(e) => onDurationChange(e.target.value)}
            className="flex-1 text-sm text-muted-foreground bg-transparent outline-none font-medium appearance-none cursor-pointer"
          >
            <option value="">{t("filter.duration")}</option>
            <option value="1-2">{t("filter.1-2days")}</option>
            <option value="3-4">{t("filter.3-4days")}</option>
            <option value="5+">{t("filter.5+days")}</option>
          </select>
        </div>

        <div className="flex items-center gap-3 pb-5 border-b border-border">
          <Users size={18} className="text-primary" />
          <select
            value={guests}
            onChange={(e) => onGuestsChange(e.target.value)}
            className="flex-1 text-sm text-muted-foreground bg-transparent outline-none font-medium appearance-none cursor-pointer"
          >
            <option value="">{t("filter.guests")}</option>
            <option value="1-2">{t("filter.1-2guests")}</option>
            <option value="3-5">{t("filter.3-5guests")}</option>
            <option value="6+">{t("filter.6+guests")}</option>
          </select>
        </div>

        <button
          onClick={onSearch}
          className="w-full bg-foreground text-primary-foreground py-3.5 rounded-full text-xs uppercase tracking-[0.2em] font-semibold hover:bg-primary transition-colors duration-300"
        >
          {t("filter.search")}
        </button>
      </div>
    </div>
  );
};

export default SearchFilter;
