import { Search, Clock, Users, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const SearchFilter = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-card rounded-xl shadow-lg p-6 w-full max-w-sm">
      <div className="space-y-4">
        <div className="flex items-center gap-3 pb-4 border-b border-border">
          <MapPin size={20} className="text-primary" />
          <div className="flex-1">
            <input
              type="text"
              placeholder={t("filter.destination")}
              className="w-full text-sm text-foreground placeholder:text-primary bg-transparent outline-none font-medium"
            />
          </div>
          <Search size={16} className="text-primary" />
        </div>

        <div className="flex items-center gap-3 pb-4 border-b border-border">
          <Clock size={20} className="text-primary" />
          <select className="flex-1 text-sm text-primary bg-transparent outline-none font-medium appearance-none cursor-pointer">
            <option>{t("filter.duration")}</option>
            <option>{t("filter.1-2days")}</option>
            <option>{t("filter.3-4days")}</option>
            <option>{t("filter.5+days")}</option>
          </select>
        </div>

        <div className="flex items-center gap-3 pb-4 border-b border-border">
          <Users size={20} className="text-primary" />
          <select className="flex-1 text-sm text-primary bg-transparent outline-none font-medium appearance-none cursor-pointer">
            <option>{t("filter.guests")}</option>
            <option>{t("filter.1-2guests")}</option>
            <option>{t("filter.3-5guests")}</option>
            <option>{t("filter.6+guests")}</option>
          </select>
        </div>

        <button className="w-full bg-primary text-primary-foreground py-3 rounded-full text-sm font-semibold hover:bg-teal-dark transition-colors">
          {t("filter.search")}
        </button>
      </div>
    </div>
  );
};

export default SearchFilter;
