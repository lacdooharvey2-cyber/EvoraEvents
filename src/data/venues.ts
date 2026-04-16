export interface Venue {
  id: string;
  name: string;
  category: string;
  price: number;
  capacity: number;
  image: string;
  rating: number;
  location: string;
}

export const venueCategories = [
  "All",
  "Function Room",
  "Garden",
  "Beach",
  "Mansion",
  "Rooftop",
  "Country Club",
  "Loft",
  "Pool Bar",
  "Kiddie Party",
  "Studio",
  "Arcade Room",
] as const;

export const venues: Venue[] = [
  { id: "1", name: "Corporate Meeting Hall", category: "Function Room", price: 25000, capacity: 200, image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=600", rating: 4.8, location: "Makati City" },
  { id: "2", name: "Conference Function Room", category: "Function Room", price: 18000, capacity: 100, image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600", rating: 4.6, location: "BGC, Taguig" },
  { id: "3", name: "Ballroom", category: "Function Room", price: 45000, capacity: 500, image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=600", rating: 4.9, location: "Quezon City" },
  { id: "4", name: "Dance Studio Ballroom", category: "Function Room", price: 15000, capacity: 80, image: "https://images.unsplash.com/photo-1504609813442-a9924e2e4757?w=600", rating: 4.5, location: "Pasig City" },
  { id: "5", name: "Theater Ballroom", category: "Function Room", price: 35000, capacity: 300, image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600", rating: 4.7, location: "Manila" },
  { id: "6", name: "Secret Garden Pavilion", category: "Garden", price: 30000, capacity: 150, image: "https://images.unsplash.com/photo-1510076857177-7470076d4098?w=600", rating: 4.9, location: "Tagaytay" },
  { id: "7", name: "Botanical Garden Venue", category: "Garden", price: 28000, capacity: 120, image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600", rating: 4.7, location: "Antipolo" },
  { id: "8", name: "Glass Garden Hall", category: "Garden", price: 35000, capacity: 180, image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600", rating: 4.8, location: "Laguna" },
  { id: "9", name: "Rustic Garden Events Place", category: "Garden", price: 22000, capacity: 100, image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600", rating: 4.6, location: "Bulacan" },
  { id: "10", name: "Sunset Garden Pavilion", category: "Garden", price: 26000, capacity: 130, image: "https://images.unsplash.com/photo-1478146059778-26028b07395a?w=600", rating: 4.8, location: "Batangas" },
  { id: "11", name: "Night Bar by the Beach", category: "Beach", price: 40000, capacity: 200, image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600", rating: 4.9, location: "Boracay" },
  { id: "12", name: "Acoustic Night Beach Lounge", category: "Beach", price: 35000, capacity: 100, image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=600", rating: 4.7, location: "La Union" },
  { id: "13", name: "Grand Mansion", category: "Mansion", price: 80000, capacity: 400, image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600", rating: 4.9, location: "Alabang" },
  { id: "14", name: "Fine Dining Rooftop", category: "Rooftop", price: 50000, capacity: 100, image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600", rating: 4.9, location: "BGC, Taguig" },
  { id: "15", name: "Overlooking Rooftop Spot", category: "Rooftop", price: 30000, capacity: 80, image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600", rating: 4.6, location: "Cebu City" },
  { id: "16", name: "Pool Roof Side Venue", category: "Rooftop", price: 38000, capacity: 120, image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=600", rating: 4.7, location: "Makati City" },
  { id: "17", name: "Country Club – Riverside", category: "Country Club", price: 55000, capacity: 250, image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600", rating: 4.8, location: "Clark, Pampanga" },
  { id: "18", name: "Country Club – Beachside", category: "Country Club", price: 60000, capacity: 300, image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600", rating: 4.8, location: "Batangas" },
  { id: "19", name: "Country Club – Pool Area", category: "Country Club", price: 45000, capacity: 200, image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600", rating: 4.7, location: "Laguna" },
  { id: "20", name: "Industrial Loft Space", category: "Loft", price: 20000, capacity: 80, image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600", rating: 4.5, location: "Makati City" },
  { id: "21", name: "Tropical Pool Bar Lounge", category: "Pool Bar", price: 28000, capacity: 100, image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=600", rating: 4.6, location: "Cebu" },
  { id: "22", name: "Sunset Pool Bar", category: "Pool Bar", price: 32000, capacity: 120, image: "https://images.unsplash.com/photo-1561501900-3701fa6a0864?w=600", rating: 4.7, location: "Palawan" },
  { id: "23", name: "Kids Playground (Indoor)", category: "Kiddie Party", price: 12000, capacity: 50, image: "https://images.unsplash.com/photo-1566454825481-f8f7e247ee15?w=600", rating: 4.5, location: "Quezon City" },
  { id: "24", name: "Kids Playground (Outdoor)", category: "Kiddie Party", price: 15000, capacity: 60, image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=600", rating: 4.6, location: "Pasig City" },
  { id: "25", name: "Dance Studio", category: "Studio", price: 10000, capacity: 40, image: "https://images.unsplash.com/photo-1504609813442-a9924e2e4757?w=600", rating: 4.4, location: "Manila" },
  { id: "26", name: "Recording Studio", category: "Studio", price: 8000, capacity: 20, image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=600", rating: 4.5, location: "BGC, Taguig" },
  { id: "27", name: "Arcade Room with KTV", category: "Arcade Room", price: 15000, capacity: 30, image: "https://images.unsplash.com/photo-1511882150382-421056c89033?w=600", rating: 4.6, location: "Makati City" },
];
