import { create } from "zustand";

import { initialRoomsState } from "./InitialRoomState";
import { RoomsState } from "./types";

export const useRoomStore = create<RoomsState>(() => ({
  rooms: initialRoomsState.rooms,
}));
