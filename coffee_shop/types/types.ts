// Products Interface
export interface Product {
    id: number;
    category: string | null;
    description: string | null;
    ingredients: string | null;
    image_url: string;
    name: string;
    price: number;
    rating: number;
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