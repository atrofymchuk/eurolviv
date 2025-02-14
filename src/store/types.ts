
export interface Review {
    id: number;
    name: string;
    country: string;
    flag: string;
    text: string;
  }
  
  export interface Reviews {
    ua: Review[];
    abroad: Review[];
  }
  
  export interface ReviewSliderProps {
    reviews: Reviews;
  }
  

  export type ModalStore = {
    isOpen: boolean;
    openModal: () => void;
    closeModal: () => void;
  };