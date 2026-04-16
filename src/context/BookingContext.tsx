import { createContext, useContext, useState, ReactNode } from "react";
import { Venue } from "@/data/venues";
import { Service } from "@/data/services";

export interface BookingState {
  venue: Venue | null;
  services: Service[];
  date: string;
  pax: number;
  contactNumber: string;
  email: string;
}

interface BookingContextType {
  booking: BookingState;
  setVenue: (venue: Venue | null) => void;
  addService: (service: Service) => void;
  removeService: (serviceId: string) => void;
  isServiceSelected: (serviceId: string) => boolean;
  updateDetails: (details: Partial<Pick<BookingState, "date" | "pax" | "contactNumber" | "email">>) => void;
  totalCost: number;
  clearBooking: () => void;
}

const initial: BookingState = {
  venue: null,
  services: [],
  date: "",
  pax: 0,
  contactNumber: "",
  email: "",
};

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const BookingProvider = ({ children }: { children: ReactNode }) => {
  const [booking, setBooking] = useState<BookingState>(initial);

  const setVenue = (venue: Venue | null) => setBooking((prev) => ({ ...prev, venue }));

  const addService = (service: Service) =>
    setBooking((prev) => {
      if (prev.services.find((s) => s.id === service.id)) return prev;
      return { ...prev, services: [...prev.services, service] };
    });

  const removeService = (serviceId: string) =>
    setBooking((prev) => ({
      ...prev,
      services: prev.services.filter((s) => s.id !== serviceId),
    }));

  const isServiceSelected = (serviceId: string) =>
    booking.services.some((s) => s.id === serviceId);

  const updateDetails = (details: Partial<Pick<BookingState, "date" | "pax" | "contactNumber" | "email">>) =>
    setBooking((prev) => ({ ...prev, ...details }));

  const totalCost =
    (booking.venue?.price ?? 0) +
    booking.services.reduce((sum, s) => sum + s.price, 0);

  const clearBooking = () => setBooking(initial);

  return (
    <BookingContext.Provider
      value={{ booking, setVenue, addService, removeService, isServiceSelected, updateDetails, totalCost, clearBooking }}
    >
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => {
  const ctx = useContext(BookingContext);
  if (!ctx) throw new Error("useBooking must be used within BookingProvider");
  return ctx;
};
