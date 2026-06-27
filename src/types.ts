export type Category = 'Textiles' | 'Ceramics' | 'Woodwork' | 'Metal Art' | 'Apparel' | 'Stationery';

export interface ProcessStep {
  title: string;
  desc: string;
}

export interface Artisan {
  id: string;
  name: string;
  role: string;
  location: string;
  image: string;
  bio: string;
  storyDetails: string;
  techniques: string[];
  processSteps: ProcessStep[];
  materials: string[];
  bannerColor?: string; // Terracotta, ochre, indigo, etc.
}

export interface Product {
  id: string;
  name: string;
  price: number;
  currency: string;
  category: Category;
  region: string;
  image: string;
  hoverImage?: string;
  rating: number;
  reviewCount: number;
  description: string;
  artistId: string;
  artistName: string;
  status?: 'Bestseller' | 'Sold out' | 'Limited Edition' | 'New';
  materials: string[];
  careInstructions: string[];
  shippingReturns: string;
  thumbnails: string[];
  hasVideo?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export type ViewState = 'home' | 'shop' | 'product' | 'artisan' | 'about';
