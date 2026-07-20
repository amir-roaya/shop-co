import { Product } from "@/types/product";

const API_URL = process.env.API_URL;

export const getProducts = async (): Promise<Product[]> => {
  if (!API_URL) {
    throw new Error("API_URL is not defined");
  }

  const res = await fetch(`${API_URL}/products`);
  if (!res.ok) {
    throw new Error("Faild to fetch products");
  }

  return res.json();
};

export const getProduct = async (id: number): Promise<Product> => {
  if (!API_URL) {
    throw new Error("API_URL is not defined");
  }

  const res = await fetch(`${API_URL}/products/${id}`);
  if (!res.ok) {
    throw new Error("Faild to fetch products");
  }

  return res.json();
};
