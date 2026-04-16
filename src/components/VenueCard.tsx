import { Venue } from "@/data/venues";
import { MapPin, Star, Users, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useBooking } from "@/context/BookingContext";

interface VenueCardProps {
  venue: Venue;
}

const VenueCard = ({ venue }: VenueCardProps) => {
  const { booking, setVenue } = useBooking();
  const isSelected = booking.venue?.id === venue.id;

  return (
    <div className={`group overflow-hidden rounded-lg border bg-card transition-all hover:shadow-lg hover:-translate-y-1 ${isSelected ? "border-accent ring-2 ring-accent/30" : "border-border"}`}>
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={venue.image}
          alt={venue.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <span className="absolute top-3 left-3 rounded-full bg-background/90 px-3 py-1 text-xs font-medium backdrop-blur-sm">
          {venue.category}
        </span>
      </div>
      <div className="p-4">
        <h3 className="font-display text-lg font-semibold leading-tight">{venue.name}</h3>
        <div className="mt-2 flex items-center gap-3 text-sm text-muted-foreground">
          <span className="flex items-center gap-1"><MapPin size={14} /> {venue.location}</span>
          <span className="flex items-center gap-1"><Users size={14} /> {venue.capacity}</span>
        </div>
        <div className="mt-3 flex items-center justify-between">
          <div>
            <span className="text-lg font-bold text-accent">₱{venue.price.toLocaleString()}</span>
            <span className="text-xs text-muted-foreground ml-1">/ event</span>
          </div>
          <div className="flex items-center gap-1 text-sm">
            <Star size={14} className="fill-accent text-accent" />
            <span className="font-medium">{venue.rating}</span>
          </div>
        </div>
        <Button
          className={`mt-3 w-full font-semibold ${isSelected ? "bg-accent text-accent-foreground" : "gradient-gold text-primary"}`}
          size="sm"
          onClick={() => setVenue(isSelected ? null : venue)}
        >
          {isSelected ? <><Check size={16} /> Selected</> : "Select Venue"}
        </Button>
      </div>
    </div>
  );
};

export default VenueCard;
