"use server";

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

  const data = await res.json();
  return data.products;
};

export const getProduct = async (id: number): Promise<Product | null> => {
  if (!API_URL) {
    throw new Error("API_URL is not defined");
  }

  const res = await fetch(`${API_URL}/products/${id}`);

  if (res.status === 404) return null;

  if (!res.ok) {
    throw new Error("Faild to fetch product");
  }

  return res.json();
};
