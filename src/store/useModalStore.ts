import { create } from "zustand";
import { ModalStore } from "./types";



export const useModalStore = create<ModalStore>((set) => ({
  
  isOpenOrder: false,
  isOpenMenuModal:false,
  isOpenSpecialOfferModal:false,
  onOpenModal: (modal: string) =>{
    if(modal === 'order'){
      set({ isOpenOrder: true })
    }else if(modal === 'menu'){
      set({ isOpenMenuModal: true })
    }else if(modal === 'specialOffer'){
      set({ isOpenSpecialOfferModal: true })
    }
  },
  onCloseGlobalModal: () => {
    set({isOpenOrder: false, isOpenMenuModal: false, isOpenSpecialOfferModal: false })
    
  },
}));
