import { create } from "zustand";
import { ModalStore } from "../types/types";

export const useModalStore = create<ModalStore>((set) => ({
  isOpenOrder: false,
  isOpenMenuModal: false,
  isOpenSpecialOfferModal: false,
  activeModal: null,
  onOpenModal: (modal: string) => {
    if (modal === "order") {
      set({ isOpenOrder: true, activeModal: modal });
    } else if (modal === "menu") {
      set({ isOpenMenuModal: true, activeModal: modal });
    } else if (modal === "contacts") {
      set({ activeModal: modal });
    } else {
      set({ isOpenSpecialOfferModal: true, activeModal: modal });
    }
  },
  onCloseGlobalModal: () => {
    set({
      isOpenOrder: false,
      isOpenMenuModal: false,
      isOpenSpecialOfferModal: false,
      activeModal: null,
    });
  },
}));
