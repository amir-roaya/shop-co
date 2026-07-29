import { Product } from "@/types/product";

const CLIENT_API_URL = process.env.NEXT_PUBLIC_API_URL;

export const getClientProducts = async (): Promise<Product[]> => {
  if (!CLIENT_API_URL) {
    throw new Error("API_URL is not defined");
  }

  const res = await fetch(`${CLIENT_API_URL}/products`);
  if (!res.ok) {
    throw new Error("Faild to fetch products");
  }

  return res.json();
};
