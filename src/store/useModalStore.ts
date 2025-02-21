import { create } from "zustand";
import { ModalStore } from "./types";



export const useModalStore = create<ModalStore>((set) => ({
  isOpenOrder: false,
  openModalOrder: () => set({ isOpenOrder: true }),
  closeModalOrder: () => set({ isOpenOrder: false }),

  isOpenSpecialOfferModal:false,
  openModalSpecialOffer: () => set({ isOpenSpecialOfferModal: true }),
  closeModalSpecialOffer: () => set({ isOpenSpecialOfferModal: false }),

 
}));
