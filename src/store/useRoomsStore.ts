import { create } from "zustand";

import { initialRoomsState } from "@/store/InitialRoomState";
import { initialCoferenceHallState } from "@/store/InitialConferenceHallState";
import { initialTerraseState } from "@/store/InitialTerraseState";
import { RoomsItitialState } from "@/types/types";

export const useRoomStore = create<RoomsItitialState>(() => ({
  rooms: initialRoomsState.rooms,
  terases:initialTerraseState.terases,
  halls:initialCoferenceHallState.halls,
  sliderProps: initialRoomsState.sliderProps
}));
