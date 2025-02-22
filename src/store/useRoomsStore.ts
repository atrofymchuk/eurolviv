import { create } from "zustand";

import { initialCoferenceHallState, initialRoomsState } from "./InitialRoomState";
import { RoomsItitialState } from "./types";

export const useRoomStore = create<RoomsItitialState>(() => ({
  rooms: initialRoomsState.rooms,
  halls:initialCoferenceHallState.halls
}));
