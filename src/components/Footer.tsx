import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border bg-secondary/50 py-12">
    <div className="container">
      <div className="grid gap-8 md:grid-cols-3">
        <div>
          <span className="font-display text-xl font-bold">
            Event<span className="text-gradient-gold">Hub</span>
          </span>
          <p className="mt-3 text-sm text-muted-foreground max-w-xs">
            Your one-stop platform for event planning and booking. Venues, services, and seamless payments all in one place.
          </p>
        </div>
        <div>
          <h4 className="font-sans text-sm font-semibold mb-3">Quick Links</h4>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <Link to="/venues" className="hover:text-accent transition-colors">Venues</Link>
            <Link to="/services" className="hover:text-accent transition-colors">Services</Link>
            <Link to="/sign-in" className="hover:text-accent transition-colors">Sign In</Link>
          </div>
        </div>
        <div>
          <h4 className="font-sans text-sm font-semibold mb-3">Contact</h4>
          <p className="text-sm text-muted-foreground">hello@eventhub.ph</p>
          <p className="text-sm text-muted-foreground mt-1">Manila, Philippines</p>
        </div>
      </div>
      <div className="mt-10 border-t border-border pt-6 text-center text-xs text-muted-foreground">
        © 2026 EventHub. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
