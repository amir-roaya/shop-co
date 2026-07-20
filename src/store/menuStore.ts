import { create } from "zustand";

type MenuStore = {
  isMenuOpen: boolean;
  toggleMenu: (value: boolean) => void;
};

export const useMenuStore = create<MenuStore>((set) => ({
  isMenuOpen: false,
  toggleMenu: (value) => set({ isMenuOpen: value }),
}));
