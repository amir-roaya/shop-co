import { create } from "zustand";

type FiltersMenuStore = {
  isFiltersOpen: boolean;
  toggleFilters: (value: boolean) => void;
};

export const useFiltersStore = create<FiltersMenuStore>((set) => ({
  isFiltersOpen: false,
  toggleFilters: (value) => set({ isFiltersOpen: value }),
}));
