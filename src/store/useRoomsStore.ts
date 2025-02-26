import { create } from "zustand";

import { initialCoferenceHallState, initialRoomsState, initialTerraseState } from "./InitialRoomState";
import { RoomsItitialState } from "./types";

export const useRoomStore = create<RoomsItitialState>(() => ({
  rooms: initialRoomsState.rooms,
  terases:initialTerraseState.terases,
  halls:initialCoferenceHallState.halls
}));
