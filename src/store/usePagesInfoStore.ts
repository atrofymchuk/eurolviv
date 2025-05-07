import { create } from "zustand";
import { PagesInfo } from "@/types/types";
import { hotelInfo, services,concepts,reviews,places,infrastructure,suggestion,restaurantReviews, availableService, amenities, cards } from "@/store/InitialPagesInfoStore";

export const usePagesInfoStore = create<PagesInfo>(() => ({
    hotelInfo:hotelInfo,
    services:services,
    concepts:concepts,
    reviews:reviews,
    places:places,
    infrastructure:infrastructure,
    suggestion:suggestion,
    restaurantReviews:restaurantReviews,
    amenities:amenities,
    availableService:availableService,
    cards:cards
}));
    
