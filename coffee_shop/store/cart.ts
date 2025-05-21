import { Product } from "@/types/types";
import { create } from "zustand";

interface CartState {
  orders_count: number;
  increase: (by: number) => void;
  cart_items: Record<number, Product>;
  addItemToCart: (item: Product) => void;
}

export const useCartStore = create<CartState>()((set) => ({
  orders_count: 0,
  increase: (by) => set((state) => ({ orders_count: state.orders_count + by })),
  cart_items: [],
  addItemToCart: (item) =>
    set((state) => {
      const cartItem = state.cart_items[item.id];
      if (!cartItem) {
        return {
          cart_items: { 
            ...state.cart_items,
            [item.id]: { ...item, quantity: 1 } 
          },
        };
      }

      if (cartItem) {
        return {
          cart_items: {
            ...state.cart_items,
            [item.id]: {
              ...cartItem,
              quantity: cartItem.quantity + 1,
            },
          },
        };
      }

      return state;
    }),
}));
