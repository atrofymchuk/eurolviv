import { create } from "zustand";

import {  initialRoomsState } from "./InitialState";
import {   StoreState } from "./types";



export const useRoomStore = create<StoreState>(() => ({
  rooms: initialRoomsState.rooms
  
}));
