import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, MapPin, Users, Mail, CalendarDays, Building, Camera, Music, Utensils } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import heroImage from "@/assets/hero-event.jpg";

const features = [
  { icon: Building, title: "Premium Venues", desc: "From gardens to rooftops, find the perfect space." },
  { icon: Camera, title: "Top Services", desc: "Photography, catering, entertainment & more." },
  { icon: Music, title: "All-in-One Booking", desc: "Book everything you need in a single transaction." },
  { icon: Utensils, title: "Secure Payments", desc: "Pay safely with GCash, Maya, or card via PayMongo." },
];

const Index = () => {
  const navigate = useNavigate();
  const [pax, setPax] = useState("");
  const [date, setDate] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Event venue" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-foreground/80" />
        </div>

        <div className="container relative z-10 flex flex-col items-center text-center px-4">
          <h1 className="animate-fade-in max-w-3xl text-4xl font-bold leading-tight text-primary-foreground sm:text-5xl lg:text-6xl">
            Plan Once. Book Everything.{" "}
            <span className="text-gradient-gold">Celebrate Without Stress.</span>
          </h1>
          <p className="mt-4 max-w-xl text-base text-primary-foreground/80 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Your one-stop platform for event venues and services in the Philippines.
          </p>

          {/* Search bar */}
          <div
            className="mt-10 w-full max-w-4xl rounded-2xl border border-border/20 bg-background/95 p-4 shadow-2xl backdrop-blur-md animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <div className="relative">
                <Users size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Number of Guests"
                  type="number"
                  value={pax}
                  onChange={(e) => setPax(e.target.value)}
                  className="pl-9"
                />
              </div>
              <div className="relative">
                <CalendarDays size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Target Date"
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="pl-9"
                />
              </div>
              <div className="relative">
                <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Email Address"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-9"
                />
              </div>
              <div className="relative">
                <MapPin size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="pl-9"
                />
              </div>
            </div>
            <Button
              className="mt-4 w-full gradient-gold text-primary font-semibold text-base h-11"
              onClick={() => navigate("/venues")}
            >
              <Search size={18} className="mr-2" />
              Search Venues & Services
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-center text-3xl font-bold sm:text-4xl">
            Why <span className="text-gradient-gold">EventHub</span>?
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-center text-muted-foreground">
            Everything you need to plan the perfect event — all in one place.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-xl border border-border bg-card p-6 text-center transition-all hover:shadow-md hover:-translate-y-1"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full gradient-gold">
                  <f.icon size={22} className="text-primary" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary py-20">
        <div className="container text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Ready to Plan Your Event?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-muted-foreground">
            Sign up today and start browsing hundreds of venues and services.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button className="gradient-gold text-primary font-semibold px-8" onClick={() => navigate("/sign-up")}>
              Get Started
            </Button>
            <Button variant="outline" className="px-8" onClick={() => navigate("/venues")}>
              Browse Venues
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
