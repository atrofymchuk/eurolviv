import { create } from "zustand";

import { initialSpecialsOfferState } from "@/store/InitialSpecialOffersState";
import { SpecialOffers, SpecialOffersState } from "@/types/types";

export const useSpecialOffersStore = create<SpecialOffersState>(() => ({
  specialOffers: initialSpecialsOfferState,

  getSpecialOffer: (param: string): SpecialOffers | undefined => {
    return initialSpecialsOfferState.find((offer) => offer.url === param);
  },
}));
