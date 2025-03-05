import { create } from "zustand";
import { ModalStore } from "./types";



export const useModalStore = create<ModalStore>((set,get) => ({
  
  isOpenOrder: false,
  isOpenMenuModal:false,
  isOpenSpecialOfferModal:false,
  onOpenModal: (modal: string) =>{
    if(modal === 'order'){
      set({ isOpenOrder: true })
    }else if(modal === 'menu'){
      console.log(get().isOpenMenuModal); 
      set({ isOpenMenuModal: true })
    }else if(modal === 'specialOffer'){
      set({ isOpenSpecialOfferModal: true })
      
      
    }
  },
  onCloseGlobalModal: () => {
    console.log('close');
    set({isOpenOrder: false, isOpenMenuModal: false, isOpenSpecialOfferModal: false })
    
  },
}));
