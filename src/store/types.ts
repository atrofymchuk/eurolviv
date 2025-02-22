import Slider from "react-slick";
import { ConferenceService } from "../pages/ConferenceService";

export type SpecialOffers = {
  src: string;
  url:string
  title: string;
  desc: string;
  cardDesc:string
  offer: string;
  classes: string;
  discount?:string
  details:string[]
  conditions:string[]
  
}
export type ConferenceServiceState = {
  halls: ConferenceService[];
};

export type ConferenceService = {
  previewImage: string;
  title: string;
  size: string;
  area: string;
  floor: number;
  capacity: string;
  price: {
    hour: number;
    day: number;
  };
  about: {
    pOne: string;
    pTwo: string;
  };
  swiperImages:string[]
  showcaseSwiperImages:string[]
  icons: { src: string; text: string }[];
};

export type SpecialOffersState = {
  specialOffers: SpecialOffers[];
  getSpecialOffer:(param:string) => SpecialOffers | undefined

};
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
  ammetiveImgStyleFst:string
  ammetiveImgStyleScd:string
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
  suggestion:SuggestionT[]
};


export type SuggestionT = {
  title:string
  type:string
  desc:string
  img:string
  size:string
}

export type Icon = {
  src: string;
  text: string;
}

export type IconsState = {
  ammentiesInRoom: Icon[];
  bathRoom: Icon[];
  bedRoom?:Icon[]
}


export type RoomsState = {
  rooms: Room[];
};
export type RoomsItitialState = {
  rooms: Room[];
  halls: ConferenceService[];

};


export interface ModalStore {
  isOpenOrder: boolean;
  openModalOrder: () => void;
  closeModalOrder: () => void;

  isOpenSpecialOfferModal: boolean;
  openModalSpecialOffer: () => void;
  closeModalSpecialOffer: () => void;
}

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
    ref:Slider | null
  }
  

  export interface AboutSliderProps {
    swiperImagesStyle?:string
    imageSlider:string[]
  }