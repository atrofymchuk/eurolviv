import { create } from "zustand";
import { ModalStore } from "@/types/types";

export const useModalStore = create<ModalStore>((set) => ({
  isOpenOrder: false,
  isOpenSpecialOfferModal: false,
  activeModal: null,
  url: null,
  onOpenModal: (modal: string, url?: string) => {
    if (modal === "order") {
      set({ isOpenOrder: true, activeModal: modal });
    }  else if (modal === "contacts") {
      set({ activeModal: modal });
    } else {
      set({ isOpenSpecialOfferModal: true, activeModal: modal, url});

    }
  },
  onCloseGlobalModal: () => {
    set({
      isOpenOrder: false,
      isOpenSpecialOfferModal: false,
      activeModal: null,
    });
  },
}));
