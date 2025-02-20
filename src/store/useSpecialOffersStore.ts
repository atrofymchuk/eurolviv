

import { create } from "zustand";

import { initialSpecialsOfferState } from "./InitialSpecialOffersState";
import { SpecialOffersState } from "./types";


export const useSpecialOffersStore = create<SpecialOffersState>(() => ({
    specialOffers: initialSpecialsOfferState, 
  }));