import { Category, ProductsSearchParams, Sort } from "@/types/product";

const categories: Category[] = [
  "All",
  "beauty",
  "fragrances",
  "furniture",
  "groceries",
];

const sorts: Sort[] = [
  "All Sorts",
  "Latest",
  "Cheapest",
  "Most Popular",
  "Most Expensive",
];

export const getValidFilters = (params: ProductsSearchParams) => {
  const min = Number(params.min);
  const max = Number(params.max);

  const validFilters = {
    category:
      categories.find((category) => category === params.category) ?? "All",
    min: Number.isFinite(min) ? Math.max(0, min) : 0,
    max: Number.isFinite(min) ? Math.min(800, max) : 800,
    sort: sorts.find((sort) => sort === params.sort) ?? "All Sorts",
    page: Math.max(1, Number(params.page ?? 1)),
  };

  return validFilters;
};
