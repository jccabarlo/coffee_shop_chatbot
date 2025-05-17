import { create } from "zustand";

interface CartState {
  orders_count: number;
  increase: (by: number) => void;
}

export const useCartStore = create<CartState>()((set) => ({
  orders_count: 0,
  increase: (by) => set((state) => ({ orders_count: state.orders_count + by })),
}));
