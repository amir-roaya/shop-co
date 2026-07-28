"use client";

import { useFiltersStore } from "@/store/filtersMenuStore";
import SortFilter from "./SortFilter";
import Filters from "./Filters";
import { ValidFilters } from "@/types/product";

export default function MobileFilters({ validFilters }: { validFilters: ValidFilters }) {
  const isFiltersOpen = useFiltersStore((state) => state.isFiltersOpen);
  const toggleFilters = useFiltersStore((state) => state.toggleFilters);

  return (
    <div className="md:hidden flex items-center gap-3 relative">
      <SortFilter validFilters={validFilters} radioName="mobile-sort" />

      <button
        onClick={() => toggleFilters(true)}
        className="bg-bg-secondary p-1.5 rounded-full"
      >
        <svg className="w-4 h-4">
          <use href="#filters"></use>
        </svg>
      </button>

      <div
        className={`fixed left-0 right-0 bottom-0 flex flex-col border top-[6%] border-border-color-primary rounded-2xl overflow-hidden bg-white p-4 shadow-main-shadow z-120 transition-all duration-600 ${isFiltersOpen ? "translate-y-0" : "translate-y-full"}`}
      >
        <div className="flex justify-between items-center pb-5">
          <h5 className="font-satoshi-bold">Filters</h5>

          <button onClick={() => toggleFilters(false)}>
            <svg className="w-6 h-6 text-text-secondary">
              <use href="#close"></use>
            </svg>
          </button>
        </div>

        <Filters validFilters={validFilters} radioName="mobile-category" />
      </div>
    </div>
  );
}
