import { useNavigate } from "react-router-dom";
import { useBooking } from "@/context/BookingContext";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CalendarDays, MapPin, Star, Trash2, Users, Phone, Mail, ShoppingBag, LogIn } from "lucide-react";

const BookingSummary = () => {
  const navigate = useNavigate();
  const { booking, updateDetails, removeService, setVenue, totalCost } = useBooking();
  const { user } = useAuth();

  const hasItems = booking.venue || booking.services.length > 0;
  const isValid = hasItems && booking.date && booking.pax > 0 && booking.contactNumber && booking.email;

  if (!user) {
    return (
      <div className="container py-20 text-center">
        <LogIn size={48} className="mx-auto text-muted-foreground" />
        <h1 className="mt-4 text-3xl font-bold">Sign In Required</h1>
        <p className="mt-2 text-muted-foreground">You need to sign in before you can complete a booking.</p>
        <Button className="mt-6 gradient-gold text-primary font-semibold" onClick={() => navigate("/sign-in")}>
          Sign In
        </Button>
      </div>
    );
  }


  if (!hasItems) {
    return (
      <div className="container py-20 text-center">
        <ShoppingBag size={48} className="mx-auto text-muted-foreground" />
        <h1 className="mt-4 text-3xl font-bold">Your Booking is Empty</h1>
        <p className="mt-2 text-muted-foreground">Add a venue or services to get started.</p>
        <div className="mt-6 flex justify-center gap-3">
          <Button className="gradient-gold text-primary font-semibold" onClick={() => navigate("/venues")}>
            Browse Venues
          </Button>
          <Button variant="outline" onClick={() => navigate("/services")}>
            Browse Services
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold sm:text-4xl">Booking Summary</h1>
      <p className="mt-2 text-muted-foreground">Review your selections and confirm your details.</p>

      <div className="mt-8 grid gap-8 lg:grid-cols-3">
        {/* Left — items */}
        <div className="lg:col-span-2 space-y-6">
          {/* Venue */}
          {booking.venue && (
            <div className="rounded-xl border border-border bg-card p-4">
              <div className="flex items-start justify-between">
                <h2 className="text-lg font-semibold font-display">Selected Venue</h2>
                <button onClick={() => setVenue(null)} className="text-destructive hover:text-destructive/80 transition-colors">
                  <Trash2 size={16} />
                </button>
              </div>
              <div className="mt-3 flex gap-4">
                <img
                  src={booking.venue.image}
                  alt={booking.venue.name}
                  className="h-24 w-32 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <h3 className="font-semibold">{booking.venue.name}</h3>
                  <p className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
                    <MapPin size={14} /> {booking.venue.location}
                  </p>
                  <p className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
                    <Users size={14} /> Up to {booking.venue.capacity} pax
                  </p>
                  <p className="mt-1 flex items-center gap-1 text-sm">
                    <Star size={14} className="fill-accent text-accent" /> {booking.venue.rating}
                  </p>
                </div>
                <span className="text-lg font-bold text-accent whitespace-nowrap">
                  ₱{booking.venue.price.toLocaleString()}
                </span>
              </div>
            </div>
          )}

          {/* Services */}
          {booking.services.length > 0 && (
            <div className="rounded-xl border border-border bg-card p-4">
              <h2 className="text-lg font-semibold font-display">Selected Services</h2>
              <div className="mt-3 space-y-3">
                {booking.services.map((s) => (
                  <div key={s.id} className="flex items-center gap-4 rounded-lg bg-secondary/50 p-3">
                    <img src={s.image} alt={s.name} className="h-16 w-20 rounded-lg object-cover" />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-sm truncate">{s.name}</h3>
                      <p className="text-xs text-muted-foreground">{s.category} · {s.subcategory}</p>
                    </div>
                    <span className="font-bold text-accent whitespace-nowrap">₱{s.price.toLocaleString()}</span>
                    <button onClick={() => removeService(s.id)} className="text-destructive hover:text-destructive/80 transition-colors">
                      <Trash2 size={16} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right — details & total */}
        <div className="space-y-6">
          <div className="rounded-xl border border-border bg-card p-5 space-y-4">
            <h2 className="text-lg font-semibold font-display">Event Details</h2>

            <div className="space-y-2">
              <Label htmlFor="date" className="flex items-center gap-1"><CalendarDays size={14} /> Event Date</Label>
              <Input
                id="date"
                type="date"
                value={booking.date}
                onChange={(e) => updateDetails({ date: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="pax" className="flex items-center gap-1"><Users size={14} /> Number of Guests</Label>
              <Input
                id="pax"
                type="number"
                min={1}
                placeholder="e.g. 50"
                value={booking.pax || ""}
                onChange={(e) => updateDetails({ pax: Number(e.target.value) })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="contact" className="flex items-center gap-1"><Phone size={14} /> Contact Number</Label>
              <Input
                id="contact"
                type="tel"
                placeholder="09XX XXX XXXX"
                value={booking.contactNumber}
                onChange={(e) => updateDetails({ contactNumber: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="flex items-center gap-1"><Mail size={14} /> Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@email.com"
                value={booking.email}
                onChange={(e) => updateDetails({ email: e.target.value })}
              />
            </div>
          </div>

          {/* Cost breakdown */}
          <div className="rounded-xl border border-border bg-card p-5">
            <h2 className="text-lg font-semibold font-display">Cost Breakdown</h2>
            <div className="mt-3 space-y-2 text-sm">
              {booking.venue && (
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Venue</span>
                  <span>₱{booking.venue.price.toLocaleString()}</span>
                </div>
              )}
              {booking.services.map((s) => (
                <div key={s.id} className="flex justify-between">
                  <span className="text-muted-foreground truncate max-w-[60%]">{s.name}</span>
                  <span>₱{s.price.toLocaleString()}</span>
                </div>
              ))}
              <div className="border-t border-border pt-2 mt-2 flex justify-between text-base font-bold">
                <span>Total</span>
                <span className="text-accent">₱{totalCost.toLocaleString()}</span>
              </div>
            </div>

            <Button
              className="mt-5 w-full gradient-gold text-primary font-semibold h-11"
              disabled={!isValid}
              onClick={() => navigate("/payment")}
            >
              Proceed to Payment
            </Button>
            {!isValid && (
              <p className="mt-2 text-xs text-center text-muted-foreground">
                Please fill in all event details above.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingSummary;
