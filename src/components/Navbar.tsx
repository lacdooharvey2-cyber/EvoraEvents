import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ShoppingBag, LogOut, UserCircle } from "lucide-react";
import { useState } from "react";
import { useBooking } from "@/context/BookingContext";
import { useAuth } from "@/context/AuthContext";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Venues", to: "/venues" },
  { label: "Services", to: "/services" },
];

const Navbar = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { booking, totalCost } = useBooking();
  const { user, signOut } = useAuth();
  const itemCount = (booking.venue ? 1 : 0) + booking.services.length;

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-display text-2xl font-bold tracking-tight">
            Event<span className="text-gradient-gold">Hub</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium transition-colors hover:text-accent ${
                location.pathname === link.to
                  ? "text-accent"
                  : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          {itemCount > 0 && (
            <Button variant="outline" size="sm" asChild className="relative">
              <Link to="/booking">
                <ShoppingBag size={16} />
                <span className="ml-1">₱{totalCost.toLocaleString()}</span>
                <span className="absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-[10px] font-bold text-accent-foreground">
                  {itemCount}
                </span>
              </Link>
            </Button>
          )}
          {user ? (
            <>
              <span className="flex items-center gap-1 text-sm text-muted-foreground">
                <UserCircle size={18} />
                <span className="max-w-[120px] truncate">{user.user_metadata?.full_name || user.email}</span>
              </span>
              <Button variant="ghost" size="sm" onClick={signOut}>
                <LogOut size={16} /> Sign Out
              </Button>
            </>
          ) : (
            <>
              <Button variant="ghost" size="sm" asChild>
                <Link to="/sign-in">Sign In</Link>
              </Button>
              <Button size="sm" className="gradient-gold font-semibold text-primary" asChild>
                <Link to="/sign-up">Sign Up</Link>
              </Button>
            </>
          )}
        </div>

        {/* Mobile toggle */}
        <div className="flex items-center gap-2 md:hidden">
          {itemCount > 0 && (
            <Link to="/booking" className="relative p-2">
              <ShoppingBag size={20} />
              <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-accent text-[9px] font-bold text-accent-foreground">
                {itemCount}
              </span>
            </Link>
          )}
          <button
            className="text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border bg-background px-4 pb-4 md:hidden">
          <nav className="flex flex-col gap-3 pt-3">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={`text-sm font-medium py-2 ${
                  location.pathname === link.to
                    ? "text-accent"
                    : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex gap-3 pt-2">
              {user ? (
                <Button variant="ghost" size="sm" className="flex-1" onClick={() => { signOut(); setMobileOpen(false); }}>
                  <LogOut size={16} /> Sign Out
                </Button>
              ) : (
                <>
                  <Button variant="ghost" size="sm" asChild className="flex-1">
                    <Link to="/sign-in" onClick={() => setMobileOpen(false)}>Sign In</Link>
                  </Button>
                  <Button size="sm" className="gradient-gold font-semibold text-primary flex-1" asChild>
                    <Link to="/sign-up" onClick={() => setMobileOpen(false)}>Sign Up</Link>
                  </Button>
                </>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
