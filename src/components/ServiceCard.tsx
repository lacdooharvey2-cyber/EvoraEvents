import { Service } from "@/data/services";
import { Star, Check, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useBooking } from "@/context/BookingContext";

interface ServiceCardProps {
  service: Service;
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  const { addService, removeService, isServiceSelected } = useBooking();
  const selected = isServiceSelected(service.id);

  return (
    <div className={`group overflow-hidden rounded-lg border bg-card transition-all hover:shadow-lg hover:-translate-y-1 ${selected ? "border-accent ring-2 ring-accent/30" : "border-border"}`}>
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={service.image}
          alt={service.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <span className="absolute top-3 left-3 rounded-full bg-background/90 px-3 py-1 text-xs font-medium backdrop-blur-sm">
          {service.subcategory}
        </span>
      </div>
      <div className="p-4">
        <h3 className="font-display text-lg font-semibold leading-tight">{service.name}</h3>
        <p className="mt-1 text-xs text-muted-foreground">{service.category}</p>
        <div className="mt-3 flex items-center justify-between">
          <div>
            <span className="text-lg font-bold text-accent">₱{service.price.toLocaleString()}</span>
          </div>
          <div className="flex items-center gap-1 text-sm">
            <Star size={14} className="fill-accent text-accent" />
            <span className="font-medium">{service.rating}</span>
          </div>
        </div>
        <Button
          className={`mt-3 w-full font-semibold ${selected ? "bg-accent text-accent-foreground" : "gradient-gold text-primary"}`}
          size="sm"
          onClick={() => selected ? removeService(service.id) : addService(service)}
        >
          {selected ? <><Check size={16} /> Added</> : <><Plus size={16} /> Add Service</>}
        </Button>
      </div>
    </div>
  );
};

export default ServiceCard;
