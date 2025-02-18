export type RoomHeader = {
  title: string;
  size?: string;
  description: string;
  count: number;
  view: string;
  arriveTime: string;
  leaveTime: string;
  previewImage: string;
};

export type RoomAbout = {
  pOne: string;
  pTwo: string;
  rooms:number
  swiperImages: string[];
  swiperImagesStyle:string
  isBalcony: boolean;
  bedText: string;
  blocksStyle: string[] | string;
  ammetiveImgStyle:string
  ammentiesImages:string[]
};

export type Room = {
  type: string;
  title: string;
  description: string;
  area: number;
  guests: string;
  header: RoomHeader;
  about: RoomAbout;
  icons:IconsState
  isLux:boolean
};

export type Icon = {
  src: string;
  text: string;
}

export type IconsState = {
  ammentiesInRoom: Icon[];
  bathRoom: Icon[];
}


export type StoreState = {
  rooms: Room[];
  
};


  export type ModalStore = {
    isOpen: boolean;
    openModal: () => void;
    closeModal: () => void;
  };

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
  

  export interface AboutSliderProps {
    swiperImagesStyle:string
    imageSlider:string[]
  }