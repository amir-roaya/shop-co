import { Product, ProductsSearchParams } from "@/types/product";

export const filterProducts = (products: Product[], params: ProductsSearchParams) => {
  let filteredProducts = [...products];
  const filters = {
    category: params.category ?? "All",
    min: Number(params.min ?? 0),
    max: Number(params.max ?? 1000),
    sort: params.sort ?? "All Sorts",
  };

  if (filters.category !== "All") {
    filteredProducts = filteredProducts.filter(
      (p) => p.category === filters.category,
    );
  }

  filteredProducts = filteredProducts.filter(
    (p) => p.price >= filters.min && p.price <= filters.max,
  );

  switch (filters.sort) {
    case "Most Popular": {
      filteredProducts = filteredProducts.sort(
        (a, b) => b.rating.rate - a.rating.rate,
      );
      break;
    }

    case "Cheapest": {
      filteredProducts = filteredProducts.sort((a, b) => a.price - b.price);
      break;
    }

    case "Latest": {
      filteredProducts = filteredProducts.reverse();
      break;
    }

    case "Most Expensive": {
      filteredProducts = filteredProducts.sort((a, b) => b.price - a.price);
      break;
    }
  }

  return filteredProducts;
};
