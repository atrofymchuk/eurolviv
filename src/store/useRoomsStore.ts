import { create } from "zustand";

import { initialRoomsState } from "./InitialRoomState";
import { initialCoferenceHallState } from "./InitialConferenceHallState";
import { initialTerraseState } from "./InitialTerraseState";
import { RoomsItitialState } from "./types";

export const useRoomStore = create<RoomsItitialState>(() => ({
  rooms: initialRoomsState.rooms,
  terases:initialTerraseState.terases,
  halls:initialCoferenceHallState.halls
}));
