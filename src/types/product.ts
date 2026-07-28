export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
  rating: {
    rate: number;
    count: number;
  };
};

export type ProductCarouselProps = {
  title: string;
  products: Product[];
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
  | "electronics"
  | "Latest"
  | "men's clothing"
  | "women's clothing"
  | "jewelery";

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
