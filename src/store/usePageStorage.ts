import { create } from "zustand";
import { AboutHeader } from "../components/About/Header";
import { StorySection } from "../components/About/StorySection";
import { Advantages } from "../components/About/Advantages";
import { Mission } from "../components/About/Mission";
import { Concepts } from "../components/About/Concepts";
import { WhereWeAre } from "../components/About/WhereWeAre";
import { Rewies } from "../components/About/Reviews";

import { Header as HeaderSpecialOffers } from "../components/SpecialOffers/Header"
import { Cards } from "../components/SpecialOffers/Cards"
import SpecialOffersModal from "../components/Modals/SpecialOfferModal"

import { Header as ContactsHeader } from "../components/Contacts/Header";
import { Info } from "../components/Contacts/Info";
import { Location } from "../components/Contacts/Location";

import { HeaderHome } from "../components/Home/HeaderHome";
import { AboutHome } from "../components/Home/AboutHome";
import { RoomsHome } from "../components/Home/Rooms";
import { ConferenceService as HomeConferenceService } from "../components/Home/ConferenceService";
import { RoofService } from "../components/Home/RoofService";
import { SpecialOffers } from "../components/Room/SpecialOffers";
import { Menu } from "../components/Restaurant/Menu";
import { AboutRestaurant } from "../components/Restaurant/AboutRestaurant";
import { Celebration } from "../components/Restaurant/Celebration";
import { RestaurantHeader } from "../components/Restaurant/Header";
import { ReviewsContainer } from "../components/Restaurant/ReviewsContainer";
import { AbootSliderContainer } from "../components/Restaurant/AbootSliderContainer";               
import { Karaoke } from "../components/Restaurant/Karaoke";
import { TerrasesContainer } from "../components/Terrase/TerrasesContainer";
import { TerraseHeader } from "../components/Terrase/Header";
import { Additionally } from "../components/Terrase/Additionally";
import { RoomsInfo } from "../components/Rooms/RoomsInfo";
import { Guarantee } from "../components/Rooms/Guarantee";
import { Header as HeaderRooms } from "../components/Rooms/Header";

interface PageStore {
  sections: Record<string, React.FC[]>;
  loadedSections: Record<string, number>;
  loadMore: (page: string) => void; 
}

const allPageSections: Record<string, React.FC[]> = {
  about: [
    AboutHeader,
    StorySection,
    Advantages,
    Mission,
    Concepts,
    WhereWeAre,
    Rewies,
  ],
  contacts: [ContactsHeader, Info, Location],
  home: [
    HeaderHome,
    AboutHome,
    RoomsHome,
    HomeConferenceService,
    RoofService,
    SpecialOffers,
  ],
  offers: [
    HeaderSpecialOffers,
    Cards,
    SpecialOffersModal
  ],
  restaurant: [
    RestaurantHeader,
    AboutRestaurant,
    AbootSliderContainer,
    Menu,
    Karaoke,
    Celebration,
    ReviewsContainer
  ],
  terrase: [
    TerraseHeader,
    TerrasesContainer,
    Additionally,
    ReviewsContainer
  ],
  rooms:[
    HeaderRooms,
    RoomsInfo,
    Guarantee
  ],
  specialOffers:[
    HeaderSpecialOffers,
    Cards,
    SpecialOffersModal
  ]
};

export const usePageStore = create<PageStore>((set, get) => ({
  sections: allPageSections,
  loadedSections: Object.fromEntries(
    Object.keys(allPageSections).map((key) => [key, 2])
  ), 

  loadMore: (page) => {
    const currentLength = get().loadedSections[page];
    const totalLength = get().sections[page].length;

    if (currentLength < totalLength) {
      set((state) => ({
        loadedSections: {
          ...state.loadedSections,
          [page]: currentLength + 1,
        },
      }));
    }
  },
}));
