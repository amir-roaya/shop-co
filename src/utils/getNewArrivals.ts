import { Product } from "@/types/product";

export const getNewArrivals =  (products: Product[]) => {
  return  products.slice(-4);
};
