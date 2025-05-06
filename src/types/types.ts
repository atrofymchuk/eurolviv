import Slider from "react-slick";
import { ConferenceService } from "../pages/ConferenceService";

export type SpecialOffers = {
  src: string;
  srcMobile: string;
  srcModal:string
  srcModalMobile:string
  url: string;
  title: string;
  desc: string | string[];
  cardDesc: string;
  offer: string;
  classes: string;
  discount?: string;
  details: string[];
  conditions: string[];
};
export type ConferenceServiceState = {
  halls: ConferenceService[];
};

export type TerrasesInitialState = {
  terases: TerraseT[];
};

export type TerraseT = {
  imgs: string[];
  title: string;
  titleTwo: string;
  preview: string[];
  descOne: { text: string; isBold?: boolean, isEng?: boolean }[];
  descTwo: { text: string; isBold?: boolean, isEng?: boolean }[];
  descThree: { text: string; isBold?: boolean, isEng?: boolean }[];
};

export type Room = {
  type: string;
  title: string;
  description: string;
  descriptionMobile?: string;
  area: number;
  guests: string;
  header: RoomHeader;
  about: RoomAbout;
  icons: IconsState;
  isLux: boolean;
  suggestion: SuggestionT[];
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
    pMobile: string;
  };
  swiperImages: string[];
  showcaseSwiperImages: string[];
  viewShowcaseSwiperImages: {
    ua: string[];
    eng: string[];
  };
  icons: { src: string; text: string }[];
};

export type SpecialOffersState = {
  specialOffers: SpecialOffers[];
  getSpecialOffer: (param: string) => SpecialOffers | undefined;
};
export type RoomHeader = {
  title: string;
  size?: string;
  description: string;
  descriptionMobile?: string;
  count: number;
  view: string;
  arriveTime: string;
  leaveTime: string;
  previewImage: string;
};

export type RoomAbout = {
  pOne: string;
  pTwo: string;
  rooms: number;
  swiperImages: string[];
  swiperImagesStyle: string;
  isBalcony: boolean;
  bedText: string;
  ammetiveImgStyleFst: string;
  ammetiveImgStyleScd: string;
  ammentiesImages: string[];
  ammentiesMobileImages: string[];
};

export type SuggestionT = {
  title: string;
  type: string;
  desc: string;
  img: string;
  size: string;
};

export type Icon = {
  src: string;
  text: string;
};

export type IconsState = {
  ammentiesInRoom: Icon[];
  bathRoom: Icon[];
  bedRoom?: Icon[];
};

export type RoomsState = {
  rooms: Room[];
  sliderProps: {
    area: number;
    guests: string;
    src: string;
    title: string;
    type: string;
  }[];
};
export type RoomsItitialState = {
  rooms: Room[];
  sliderProps: {
    area: number;
    guests: string;
    src: string;
    title: string;
    type: string;
  }[];
  halls: ConferenceService[];
  terases: TerraseT[];
};

export interface ModalStore {
  isOpenOrder: boolean;
  isOpenMenuModal: boolean;
  isOpenSpecialOfferModal: boolean;
  activeModal: string | null;
  url: string | null;
  onOpenModal: (modal: string, url?: string) => void;
  onCloseGlobalModal: () => void;
}

export interface Review {
  id: number;
  name: string;
  country: string;
  flag: string;
  textUa: string;
  textEn: string;
  text: string;
}

export interface Reviews {
  ua: Array<{
    id: number;
    name: string;
    country: string;
    flag: string;
    textUa: string;
    textEn: string;
  }>;
  abroad: Array<{
    id: number;
    name: string;
    country: string;
    flag: string;
    text: string;
  }>;
}

export interface RestaurantReview {
  id: number;
  img: string;
}

export interface ReviewSliderProps {
  reviews: Reviews;
  ref: Slider | null;
}

export interface AboutSliderProps {
  imageSlider: string[];
  isConference?: boolean;
  swiperImagesStyle?: string;
}

export interface MenuInitialState {
  menuItems: MenuItem[];
}

export interface MenuItem {
  title: string;
  previewImage: string;
  ingredients: string[];
  grams: string;
}

export interface PagesInfo {
  hotelInfo: { icon: string; text: string }[];
  services: { icon: string; text: string }[];
  concepts: { title: string[]; img: string; alt: string; text: string[]; to: string }[];
  places: string[][];
  infrastructure: string[][];
  reviews: Reviews;
  suggestion: {
    img: string;
    title: string;
    titleDesc: string;
    desc: string[];
    url: string;
  }[];
  restaurantReviews: RestaurantReview[];
  amenities: Icon[];
  availableService: Icon[];
  cards: { src: string; title: string; text: string }[];
}

export interface PromoAlertProps {
  delay?: number; 
  image?: string;
}
