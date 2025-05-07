import { create } from "zustand";
import { MenuInitialState } from "@/types/types";
import { initialMenuState } from "@/store/InitialMenuState";

export const useMenuStore= create<MenuInitialState>(() => ({
  menuItems:initialMenuState.menuItems
}));
