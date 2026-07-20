import { Product } from "@/types/product";

export const getSameProducts = (product: Product, products: Product[]) => {
  return products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);
};
