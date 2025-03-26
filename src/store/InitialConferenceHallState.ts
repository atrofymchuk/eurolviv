import { ConferenceServiceState } from "../types/types";
import * as imgs from "./exportsImg";
import * as icons from "./exportsIcons";
export const initialCoferenceHallState: ConferenceServiceState = {
  halls: [
    {
      previewImage: imgs.bigHall,
      title: "conferenceHallState.bigHall.title",
      size: "conferenceHallState.bigHall.desc",
      area: "120M²",
      floor: 1,
      capacity: "conferenceHallState.bigHall.capacity",
      about: {
        pOne: "conferenceHallState.bigHall.about.pOne",
        pTwo: "conferenceHallState.bigHall.about.pTwo",
      },
      price: { hour: 800, day: 3000 },
      swiperImages: [imgs.bigHallTheathre, imgs.hallH, imgs.bigHall],
      showcaseSwiperImages: [
        imgs.pLetterImg,
        imgs.pLetter,
        imgs.hallH,
        imgs.classRoom,
        imgs.bigHallTheathre,
        imgs.theathre,
        imgs.bigHallTheathre,
        imgs.negotiationTable,
      ],
      icons: [
        {
          src: icons.projector,
          text: "conferenceHallState.bigHall.icons.projector",
        },
        {
          src: icons.notebook,
          text: "conferenceHallState.bigHall.icons.notebook",
        },
        { src: icons.screen, text: "conferenceHallState.bigHall.icons.screen" },
        {
          src: icons.flipchart,
          text: "conferenceHallState.bigHall.icons.flipchart",
        },
        {
          src: icons.soundSystem,
          text: "conferenceHallState.bigHall.icons.soundSystem",
        },
        { src: icons.paper, text: "conferenceHallState.bigHall.icons.paper" },
        {
          src: icons.presenter,
          text: "conferenceHallState.bigHall.icons.presenter",
        },
        {
          src: icons.microphone,
          text: "conferenceHallState.bigHall.icons.microphone",
        },
      ],
    },

    {
      previewImage: imgs.smallHallPreview,
      title: "conferenceHallState.smallHall.title",
      size: "conferenceHallState.smallHall.desc",
      area: "75M²",
      floor: 1,
      capacity: "conferenceHallState.smallHall.capacity",
      about: {
        pOne: "conferenceHallState.smallHall.about.pOne",
        pTwo: "conferenceHallState.smallHall.about.pTwo",
      },
      price: { hour: 1000, day: 5000 },
      swiperImages: [
        imgs.smallHallPreview,
        imgs.pLetterSmall,
        imgs.theathreSmall,
        imgs.negotiationTableSmall,
      ],
      showcaseSwiperImages: [
        imgs.pLetterSmall,
        imgs.pLetter,
        imgs.theathreSmall,
        imgs.theathre,
        imgs.negotiationTableSmall,
        imgs.negotiationTable,
      ],
      icons: [
        {
          src: icons.screen,
          text: "conferenceHallState.smallHall.icons.screen",
        },
        {
          src: icons.soundSystem,
          text: "conferenceHallState.smallHall.icons.soundSystem",
        },
        {
          src: icons.notebook,
          text: "conferenceHallState.smallHall.icons.notebook",
        },
        { src: icons.paper, text: "conferenceHallState.smallHall.icons.paper" },
        {
          src: icons.presenter,
          text: "conferenceHallState.smallHall.icons.presenter",
        },
        {
          src: icons.flipchart,
          text: "conferenceHallState.smallHall.icons.flipchart",
        },
      ],
    },

    {
      previewImage: imgs.laungePreview,
      title: "conferenceHallState.launge.title",
      size: "conferenceHallState.launge.desc",
      area: "45M²",
      floor: 1,
      capacity: "conferenceHallState.launge.capacity",
      about: {
        pOne: "conferenceHallState.launge.about.pOne",
        pTwo: "conferenceHallState.launge.about.pTwo",
      },
      price: { hour: 800, day: 3000 },
      swiperImages: [
        imgs.laungePreview,
        imgs.laungeTheatre,
        imgs.negotiationTableLaunge,
      ],
      showcaseSwiperImages: [
        imgs.laungeTheatre,
        imgs.theathre,
        imgs.negotiationTableLaunge,
        imgs.negotiationTable,
      ],
      icons: [
        { src: icons.screen, text: "conferenceHallState.launge.icons.screen" },
        {
          src: icons.soundSystem,
          text: "conferenceHallState.launge.icons.soundSystem",
        },
        {
          src: icons.notebook,
          text: "conferenceHallState.launge.icons.notebook",
        },
        { src: icons.paper, text: "conferenceHallState.launge.icons.paper" },
        {
          src: icons.presenter,
          text: "conferenceHallState.launge.icons.presenter",
        },
        {
          src: icons.flipchart,
          text: "conferenceHallState.launge.icons.flipchart",
        },
      ],
    },
  ],
};
