"use client";

import { useFiltersStore } from "@/store/filtersMenuStore";
import { useMenuStore } from "@/store/menuStore";

export default function Overlay() {
  const isMenuOpen = useMenuStore((state) => state.isMenuOpen);
  const isFiltersOpen = useFiltersStore((state) => state.isFiltersOpen);

  return (
    <>
      <div
        className={`menu-cover menu-transition ${isMenuOpen ? "menu-cover-show" : ""}`}
      ></div>

      <div
        className={`filter-cover transition-all duration-600 ${isFiltersOpen ? "filter-cover-show" : ""}`}
      ></div>
    </>
  );
}
