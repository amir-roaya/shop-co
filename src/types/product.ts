export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  thumbnail: string;
  category: string;
  rating: number;
};

export type ProductsSearchParams = {
  category: string;
  min: string;
  max: string;
  sort: string;
  page: string;
};

export type Category =
  | "All"
  | "beauty"
  | "fragrances"
  | "furniture"
  | "groceries"

export type Sort =
  | "Most Popular"
  | "Cheapest"
  | "Latest"
  | "Most Expensive"
  | "All Sorts";

export type ValidFilters = {
  category: Category;
  min: number;
  max: number;
  sort: Sort;
  page: number;
};
