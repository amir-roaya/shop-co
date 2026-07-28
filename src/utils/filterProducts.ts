import { Product, ValidFilters } from "@/types/product";

export const filterProducts = (
  products: Product[],
  validFilters: ValidFilters,
  itemPerPage: number,
) => {
  let filteredProducts = [...products];

  if (validFilters.category !== "All") {
    filteredProducts = filteredProducts.filter(
      (p) => p.category === validFilters.category,
    );
  }

  filteredProducts = filteredProducts.filter(
    (p) => p.price >= validFilters.min && p.price <= validFilters.max,
  );

  switch (validFilters.sort) {
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

  const totalPages = Math.ceil(filteredProducts.length / itemPerPage);
  const currentPage = Math.min(validFilters.page, totalPages || 1);

  const start = (currentPage - 1) * itemPerPage;
  const paginatedProducts = filteredProducts.slice(start, start + itemPerPage);

  return {
    products: paginatedProducts,
    totalItems: filteredProducts.length,
    currentPage,
  };
};
