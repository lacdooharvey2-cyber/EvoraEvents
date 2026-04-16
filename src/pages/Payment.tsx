import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useBooking } from "@/context/BookingContext";
import { Button } from "@/components/ui/button";
import { CheckCircle, CreditCard, Smartphone, Building2, ShieldCheck } from "lucide-react";

const paymentMethods = [
  { id: "gcash", label: "GCash", icon: Smartphone, color: "bg-blue-500/10 border-blue-500/30" },
  { id: "maya", label: "Maya", icon: Smartphone, color: "bg-green-500/10 border-green-500/30" },
  { id: "card", label: "Credit / Debit Card", icon: CreditCard, color: "bg-purple-500/10 border-purple-500/30" },
  { id: "bank", label: "Online Banking", icon: Building2, color: "bg-orange-500/10 border-orange-500/30" },
] as const;

const Payment = () => {
  const navigate = useNavigate();
  const { booking, totalCost, clearBooking } = useBooking();
  const [selected, setSelected] = useState<string>("");
  const [processing, setProcessing] = useState(false);
  const [success, setSuccess] = useState(false);

  const hasItems = booking.venue || booking.services.length > 0;

  if (!hasItems) {
    navigate("/booking");
    return null;
  }

  const handlePay = () => {
    setProcessing(true);
    // Simulate PayMongo payment processing
    setTimeout(() => {
      setProcessing(false);
      setSuccess(true);
    }, 2000);
  };

  if (success) {
    return (
      <div className="container flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
        <div className="rounded-full gradient-gold p-4">
          <CheckCircle size={48} className="text-primary" />
        </div>
        <h1 className="mt-6 text-3xl font-bold">Payment Successful!</h1>
        <p className="mt-3 max-w-md text-muted-foreground">
          Your booking has been confirmed. An official receipt, invoice, and booking agreement have been sent to <strong>{booking.email}</strong>.
        </p>
        <div className="mt-6 rounded-xl border border-border bg-card p-5 text-left w-full max-w-sm">
          <h3 className="font-semibold font-display text-sm">Booking Details</h3>
          <div className="mt-3 space-y-1 text-sm text-muted-foreground">
            {booking.venue && <p>Venue: {booking.venue.name}</p>}
            {booking.services.length > 0 && <p>Services: {booking.services.length} selected</p>}
            <p>Date: {new Date(booking.date).toLocaleDateString("en-PH", { year: "numeric", month: "long", day: "numeric" })}</p>
            <p>Guests: {booking.pax}</p>
            <p className="font-bold text-foreground">Total Paid: ₱{totalCost.toLocaleString()}</p>
          </div>
        </div>
        <Button
          className="mt-8 gradient-gold text-primary font-semibold px-8"
          onClick={() => {
            clearBooking();
            navigate("/");
          }}
        >
          Back to Home
        </Button>
      </div>
    );
  }

  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold sm:text-4xl">Payment</h1>
      <p className="mt-2 text-muted-foreground">Choose your preferred payment method to complete your booking.</p>

      <div className="mt-8 grid gap-8 lg:grid-cols-3">
        {/* Payment methods */}
        <div className="lg:col-span-2 space-y-4">
          <h2 className="text-lg font-semibold font-display">Select Payment Method</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {paymentMethods.map((m) => (
              <button
                key={m.id}
                onClick={() => setSelected(m.id)}
                className={`flex items-center gap-4 rounded-xl border-2 p-4 text-left transition-all ${
                  selected === m.id
                    ? "border-accent bg-accent/5 shadow-md"
                    : "border-border bg-card hover:border-accent/40"
                }`}
              >
                <div className={`flex h-12 w-12 items-center justify-center rounded-lg border ${m.color}`}>
                  <m.icon size={22} />
                </div>
                <div>
                  <span className="font-semibold">{m.label}</span>
                  <p className="text-xs text-muted-foreground">Powered by PayMongo</p>
                </div>
              </button>
            ))}
          </div>

          <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
            <ShieldCheck size={16} className="text-accent" />
            <span>Payments are processed securely through PayMongo. Your data is encrypted.</span>
          </div>
        </div>

        {/* Order summary */}
        <div className="rounded-xl border border-border bg-card p-5">
          <h2 className="text-lg font-semibold font-display">Order Summary</h2>
          <div className="mt-3 space-y-2 text-sm">
            {booking.venue && (
              <div className="flex justify-between">
                <span className="text-muted-foreground truncate max-w-[60%]">{booking.venue.name}</span>
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

          <div className="mt-4 space-y-1 text-xs text-muted-foreground">
            <p>Date: {new Date(booking.date).toLocaleDateString("en-PH", { year: "numeric", month: "long", day: "numeric" })}</p>
            <p>Guests: {booking.pax}</p>
            <p>Contact: {booking.contactNumber}</p>
            <p>Email: {booking.email}</p>
          </div>

          <Button
            className="mt-5 w-full gradient-gold text-primary font-semibold h-11"
            disabled={!selected || processing}
            onClick={handlePay}
          >
            {processing ? "Processing…" : `Pay ₱${totalCost.toLocaleString()}`}
          </Button>
          {!selected && (
            <p className="mt-2 text-xs text-center text-muted-foreground">
              Select a payment method to continue.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Payment;
