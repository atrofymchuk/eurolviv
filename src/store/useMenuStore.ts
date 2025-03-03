import { create } from "zustand";
import { MenuInitialState } from "./types";
import { initialMenuState } from "./InitialMenuState";

export const useMenuStore= create<MenuInitialState>(() => ({
  menuItems:initialMenuState.menuItems
}));
