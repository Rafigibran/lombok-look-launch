import { Search, Clock, Users, MapPin } from "lucide-react";

const SearchFilter = () => {
  return (
    <div className="bg-card rounded-xl shadow-lg p-6 w-full max-w-sm">
      <div className="space-y-4">
        <div className="flex items-center gap-3 pb-4 border-b border-border">
          <MapPin size={20} className="text-primary" />
          <div className="flex-1">
            <input
              type="text"
              placeholder="Destination"
              className="w-full text-sm text-foreground placeholder:text-primary bg-transparent outline-none font-medium"
            />
          </div>
          <Search size={16} className="text-primary" />
        </div>

        <div className="flex items-center gap-3 pb-4 border-b border-border">
          <Clock size={20} className="text-primary" />
          <select className="flex-1 text-sm text-primary bg-transparent outline-none font-medium appearance-none cursor-pointer">
            <option>Duration</option>
            <option>1-2 Days</option>
            <option>3-4 Days</option>
            <option>5+ Days</option>
          </select>
        </div>

        <div className="flex items-center gap-3 pb-4 border-b border-border">
          <Users size={20} className="text-primary" />
          <select className="flex-1 text-sm text-primary bg-transparent outline-none font-medium appearance-none cursor-pointer">
            <option>Guests</option>
            <option>1-2 Guests</option>
            <option>3-5 Guests</option>
            <option>6+ Guests</option>
          </select>
        </div>

        <button className="w-full bg-primary text-primary-foreground py-3 rounded-full text-sm font-semibold hover:bg-teal-dark transition-colors">
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchFilter;
