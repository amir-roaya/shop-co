import { Product } from "@/types/product";
import { create } from "zustand";

type CartItem = Product & {
  size: string;
  quantity: number;
};

type CartStore = {
  cart: CartItem[];
  loadCart: () => void;
  addToCart: (product: Product, size: string, quantity: number) => void;
  removeFromCart: (id: number, size: string) => void;
  increaseQuantity: (id: number, size: string) => void;
  decreaseQuantity: (id: number, size: string) => void;
};

export const useCartStore = create<CartStore>((set, get) => ({
  cart: [],

  loadCart: () => {
    const cart = localStorage.getItem("cart");
    if (!cart) return;
    set({
      cart: JSON.parse(cart),
    });
  },

  addToCart: (product, size, quantity) => {
    const cart = get().cart;

    const sameProduct = cart.find(
      (p) => p.id === product.id && p.size === size,
    );

    if (sameProduct) {
      sameProduct.quantity += quantity;
    } else {
      cart.push({
        ...product,
        size,
        quantity,
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    set({ cart });
  },

  removeFromCart: (id, size) => {
    const cart = get().cart.filter(
      (product) => !(product.id === id && product.size === size),
    );
    localStorage.setItem("cart", JSON.stringify(cart));
    set({ cart });
  },

  increaseQuantity: (id, size) => {
    const cart = get().cart.map((product) =>
      product.id === id && product.size === size
        ? { ...product, quantity: product.quantity + 1 }
        : product,
    );
    localStorage.setItem("cart", JSON.stringify(cart));
    set({ cart });
  },

  decreaseQuantity: (id, size) => {
    const cart = get()
      .cart.map((product) =>
        product.id === id && product.size === size
          ? { ...product, quantity: product.quantity - 1 }
          : product,
      )
      .filter((product) => product.quantity > 0);
    localStorage.setItem("cart", JSON.stringify(cart));
    set({ cart });
  },
}));
