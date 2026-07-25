import { Product } from "@/types/product";

export const getSearchedProducts = (
  products: Product[],
  userSearch: string,
) => {
  const searchValue = userSearch.trim().toLowerCase();

  if (searchValue.trim() !== "") {
    const searchedProducts = products.filter(
      (p) =>
        p.title.toLowerCase().includes(searchValue) ||
        p.description.toLowerCase().includes(searchValue),
    );
    return searchedProducts;
  }

  return;
};
