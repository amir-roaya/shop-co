"use client";

import { useCartStore } from "@/store/cartStore";
import { useEffect } from "react";

export default function CartProvider() {
  const loadCart = useCartStore((state) => state.loadCart);
  useEffect(() => {
    loadCart();
  }, [loadCart]);
  return null;
}
