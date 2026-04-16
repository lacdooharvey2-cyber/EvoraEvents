import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import ServiceCard from "@/components/ServiceCard";
import { services, serviceCategories } from "@/data/services";

const Services = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = useMemo(() => {
    return services.filter((s) => {
      const matchCategory = activeCategory === "All" || s.category === activeCategory;
      const matchSearch =
        s.name.toLowerCase().includes(search.toLowerCase()) ||
        s.subcategory.toLowerCase().includes(search.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [search, activeCategory]);

  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold sm:text-4xl">Event Services</h1>
      <p className="mt-2 text-muted-foreground">Browse top-rated services to make your event unforgettable.</p>

      <div className="mt-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="relative max-w-md flex-1">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search services..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9"
          />
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {serviceCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
              activeCategory === cat
                ? "gradient-gold text-primary"
                : "bg-secondary text-muted-foreground hover:bg-secondary/80"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filtered.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-12 text-center text-muted-foreground">No services found. Try a different search or category.</p>
      )}
    </div>
  );
};

export default Services;
