import { create } from "zustand";
import * as Components from "./exportComponents";

interface PageStore {
  sections: Record<string, React.FC[]>;
  loadedSections: Record<string, number>;
  loadMore: (page: string) => void;
}

const allPageSections: Record<string, React.FC[]> = {
  about: [
    Components.AboutHeader,
    Components.StorySection,
    Components.Advantages,
    Components.Mission,
    Components.Concepts,
    Components.WhereWeAre,
    Components.Rewies,
  ],
  contacts: [Components.ContactsHeader, Components.Info, Components.Location],
  home: [
    Components.HeaderHome,
    Components.AboutHome,
    Components.RoomsHome,
    Components.HomeConferenceService,
    Components.RoofService,
    Components.SpecialOffers,
  ],
  offers: [
    Components.HeaderSpecialOffers,
    Components.Cards,
    Components.SpecialOffersModal,
  ],
  restaurant: [
    Components.RestaurantHeader,
    Components.AboutRestaurant,
    Components.AbootSliderContainer,
    Components.Menu,
    Components.Karaoke,
    Components.Celebration,
    Components.ReviewsContainer,
  ],
  terrase: [
    Components.TerraseHeader,
    Components.TerrasesContainer,
    Components.BarComponent,
    Components.Services,
  ],
  rooms: [Components.HeaderRooms, Components.RoomsInfo, Components.Guarantee],
  specialOffers: [
    Components.HeaderSpecialOffers,
    Components.Cards,
    Components.SpecialOffersModal,
  ],
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
