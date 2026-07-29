import { Product } from "@/types/product";

export const getTopSelling = (products: Product[]) => {
  return products.filter((product) => product.rating >= 4).slice(0, 4);
};
