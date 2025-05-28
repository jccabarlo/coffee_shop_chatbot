import { Json } from "@/database.types";

// Products Interface
export interface Product {
    id: number;
    category: string | null;
    description: string | null;
    ingredients: Json | null;
    image_url: string | null;
    name: string | null;
    price: number | null;
    rating: number | null;
  }

  export interface CartItem extends Product { 
    quantity: number;
  }

export interface ProductCategory {
    id: string;
    selected: boolean;
}

// Message Interface
export interface MessageInterface {
    role: string;
    content: string;
    memory?: any;
}