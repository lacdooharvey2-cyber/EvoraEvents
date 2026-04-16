export interface Service {
  id: string;
  name: string;
  category: string;
  subcategory: string;
  price: number;
  image: string;
  rating: number;
}

export const serviceCategories = [
  "All",
  "Photography",
  "Catering",
  "Hosting / Entertainment",
  "Lights and Sound",
  "Planning",
] as const;

export const services: Service[] = [
  { id: "s1", name: "Self Portrait Studio", category: "Photography", subcategory: "Studio", price: 8000, image: "https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=600", rating: 4.7 },
  { id: "s2", name: "Premium Photobooth", category: "Photography", subcategory: "Photobooth", price: 12000, image: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=600", rating: 4.8 },
  { id: "s3", name: "Food Catering Deluxe", category: "Catering", subcategory: "Food Catering", price: 35000, image: "https://images.unsplash.com/photo-1555244162-803834f70033?w=600", rating: 4.9 },
  { id: "s4", name: "Sweets & Desserts Bar", category: "Catering", subcategory: "Sweets & Desserts", price: 15000, image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=600", rating: 4.7 },
  { id: "s5", name: "Korean Cuisine Package", category: "Catering", subcategory: "Korean Cuisine", price: 28000, image: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=600", rating: 4.6 },
  { id: "s6", name: "Japanese Cuisine Package", category: "Catering", subcategory: "Japanese Cuisine", price: 30000, image: "https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?w=600", rating: 4.8 },
  { id: "s7", name: "American BBQ Feast", category: "Catering", subcategory: "American Cuisine", price: 25000, image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=600", rating: 4.5 },
  { id: "s8", name: "Kiddie Meals Party Pack", category: "Catering", subcategory: "Kiddie Meals", price: 12000, image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600", rating: 4.6 },
  { id: "s9", name: "Studio Club Experience", category: "Hosting / Entertainment", subcategory: "Studio Club", price: 20000, image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600", rating: 4.7 },
  { id: "s10", name: "Perfume Bar – Make Your Scent", category: "Hosting / Entertainment", subcategory: "Perfume Bar", price: 18000, image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=600", rating: 4.8 },
  { id: "s11", name: "On-the-Go Tattoos", category: "Hosting / Entertainment", subcategory: "Tattoo Bar", price: 15000, image: "https://images.unsplash.com/photo-1590246814883-57764511e652?w=600", rating: 4.5 },
  { id: "s12", name: "DIY Flower Arrangement", category: "Hosting / Entertainment", subcategory: "Bouquet", price: 10000, image: "https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=600", rating: 4.7 },
  { id: "s13", name: "Minimalist Bracelet Making", category: "Hosting / Entertainment", subcategory: "Bracelet", price: 8000, image: "https://images.unsplash.com/photo-1573461160327-b450ce3d8e7f?w=600", rating: 4.6 },
  { id: "s14", name: "Professional Host / Emcee", category: "Hosting / Entertainment", subcategory: "Host / Emcee", price: 15000, image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600", rating: 4.8 },
  { id: "s15", name: "Character Mascot", category: "Hosting / Entertainment", subcategory: "Mascot", price: 8000, image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600", rating: 4.5 },
  { id: "s16", name: "Live Performers Package", category: "Hosting / Entertainment", subcategory: "Performers", price: 25000, image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=600", rating: 4.9 },
  { id: "s17", name: "Magician Show", category: "Hosting / Entertainment", subcategory: "Magicians", price: 12000, image: "https://images.unsplash.com/photo-1503095396549-807759245b35?w=600", rating: 4.6 },
  { id: "s18", name: "Clown Entertainment", category: "Hosting / Entertainment", subcategory: "Clown", price: 8000, image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600", rating: 4.4 },
  { id: "s19", name: "DJ Setup & Performance", category: "Lights and Sound", subcategory: "DJ", price: 20000, image: "https://images.unsplash.com/photo-1571266028243-3716f02d2d2e?w=600", rating: 4.8 },
  { id: "s20", name: "Professional Lighting Setup", category: "Lights and Sound", subcategory: "Lighting Setup", price: 18000, image: "https://images.unsplash.com/photo-1504509546545-e000b4a62425?w=600", rating: 4.7 },
  { id: "s21", name: "Event Styling Package", category: "Planning", subcategory: "Event Styling", price: 30000, image: "https://images.unsplash.com/photo-1478146059778-26028b07395a?w=600", rating: 4.9 },
  { id: "s22", name: "Event Coordinator", category: "Planning", subcategory: "Event Coordinator", price: 25000, image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600", rating: 4.8 },
];
