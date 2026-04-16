import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import VenueCard from "@/components/VenueCard";
import { venues, venueCategories } from "@/data/venues";

const Venues = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = useMemo(() => {
    return venues.filter((v) => {
      const matchCategory = activeCategory === "All" || v.category === activeCategory;
      const matchSearch =
        v.name.toLowerCase().includes(search.toLowerCase()) ||
        v.location.toLowerCase().includes(search.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [search, activeCategory]);

  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold sm:text-4xl">Event Venues</h1>
      <p className="mt-2 text-muted-foreground">Discover the perfect space for your celebration.</p>

      {/* Search + Categories */}
      <div className="mt-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="relative max-w-md flex-1">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search venues or locations..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9"
          />
        </div>
      </div>

      {/* Category pills */}
      <div className="mt-4 flex flex-wrap gap-2">
        {venueCategories.map((cat) => (
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

      {/* Grid */}
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filtered.map((venue) => (
          <VenueCard key={venue.id} venue={venue} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-12 text-center text-muted-foreground">No venues found. Try a different search or category.</p>
      )}
    </div>
  );
};

export default Venues;
