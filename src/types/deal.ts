export interface Deal {
  id: string;
  title: string;
  description: string;
  price: number;
  originalPrice: number;
  imageUrl: string;
  category: string;
  featured: boolean;
  timeLeft?: string;
  rating: number;
  reviews: number;
}