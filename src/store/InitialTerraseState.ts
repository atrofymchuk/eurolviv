import { TerrasesInitialState } from "./types";
import * as imgs from "./exportsImg";

export const initialTerraseState: TerrasesInitialState = {
    terases: [
      {
        imgs: [imgs.mainFst, imgs.mainScd, imgs.mainTrd, imgs.mainFth],
        title: "terasesState.mainTerrase.title",
        desc: "terasesState.mainTerrase.desc",
        titleTwo: "terasesState.mainTerrase.titleTwo",
        descTwo: "terasesState.mainTerrase.descTwo",
      },
      {
        imgs: [imgs.upperFst, imgs.upperScd, imgs.upperThd, imgs.upperFhd],
        title: "terasesState.upperTerrase.title",
        desc: "terasesState.upperTerrase.desc",
        titleTwo: "terasesState.upperTerrase.titleTwo",
        descTwo: "terasesState.upperTerrase.descTwo",
      },
      {
        imgs: [imgs.upperFst, imgs.upperScd, imgs.upperThd, imgs.upperFhd],
        title: "terasesState.lowerTerrase.title",
        desc: "terasesState.lowerTerrase.desc",
        titleTwo: "terasesState.lowerTerrase.titleTwo",
        descTwo: "terasesState.lowerTerrase.descTwo",
      },
    ],
  };