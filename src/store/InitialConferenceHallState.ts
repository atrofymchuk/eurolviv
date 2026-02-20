import { ConferenceServiceState } from "@/types/types";
import * as imgs from "@/store/exportsImg";
import * as icons from "@/store/exportsIcons";

export const initialCoferenceHallState: ConferenceServiceState = {
  halls: [
    {
      previewImage: imgs.conferencePreview2,
      title: "conferenceHallState.bigHall.title",
      size: "conferenceHallState.bigHall.desc",
      area: "120M²",
      floor: 1,
      capacity: "conferenceHallState.bigHall.capacity",
      about: {
        pOne: "conferenceHallState.bigHall.about.pOne",
        pTwo: "conferenceHallState.bigHall.about.pTwo",
        pMobile: "conferenceHallState.bigHall.about.pMobile",
      },
      price: null,
      swiperImages: [imgs.bigHallGallery1, imgs.bigHallGallery2, imgs.bigHallGallery3],
      showcaseSwiperImages: [
        imgs.bigHallGallery2,
        imgs.bigHallGallery1,
        imgs.bigHallGallery3,
      ],
      viewShowcaseSwiperImages: {
        ua: [imgs.pLetter, imgs.classRoom, imgs.theathre],
        eng: [imgs.uShape40max, imgs.class40max, imgs.theater],
      },

      icons: [
        {
          src: icons.projector,
          text: "conferenceHallState.bigHall.icons.projector",
        },
        { src: icons.screen, text: "conferenceHallState.bigHall.icons.screen" },
        {
          src: icons.soundSystem,
          text: "conferenceHallState.bigHall.icons.soundSystem",
        },
        {
          src: icons.presenter,
          text: "conferenceHallState.bigHall.icons.presenter",
        },
        {
          src: icons.notebook,
          text: "conferenceHallState.bigHall.icons.notebook",
        },
        {
          src: icons.flipchart,
          text: "conferenceHallState.bigHall.icons.flipchart",
        },
        { src: icons.paper, text: "conferenceHallState.bigHall.icons.paper" },
        {
          src: icons.microphone,
          text: "conferenceHallState.bigHall.icons.microphone",
        },
        {
          src: icons.flipchart,
          text: "conferenceHallState.bigHall.icons.interactiveBoard",
        },
        {
          src: icons.camera,
          text: "conferenceHallState.bigHall.icons.videoConferenceCamera",
        },
        {
          src: icons.tablet,
          text: "conferenceHallState.bigHall.icons.tablet",
        },
        {
          src: icons.screen,
          text: "conferenceHallState.bigHall.icons.twoDisplays65",
        },
      ],
    },

    {
      previewImage: imgs.conferencePreview1,
      title: "conferenceHallState.smallHall.title",
      size: "conferenceHallState.smallHall.desc",
      area: "75M²",
      floor: 1,
      capacity: "conferenceHallState.smallHall.capacity",
      about: {
        pOne: "conferenceHallState.smallHall.about.pOne",
        pTwo: "conferenceHallState.smallHall.about.pTwo",
        pMobile: "conferenceHallState.smallHall.about.pMobile",
      },
      price: null,
      swiperImages: [
        imgs.smallHallGallery1,
        imgs.smallHallGallery2,
        imgs.smallHallGallery3,
        imgs.smallHallGallery4,
      ],
      showcaseSwiperImages: [
        imgs.smallHallGallery1,
        imgs.smallHallGallery2,
        imgs.smallHallGallery4,
      ],
      viewShowcaseSwiperImages: {
        ua: [imgs.pMax20, imgs.theathreMax30, imgs.negotiationTableMax25],
        eng: [imgs.uShape, imgs.theater, imgs.board],
      },
      icons: [
        {
          src: icons.screen,
          text: "conferenceHallState.smallHall.icons.screen",
        },
        {
          src: icons.notebook,
          text: "conferenceHallState.smallHall.icons.notebook",
        },
        {
          src: icons.presenter,
          text: "conferenceHallState.smallHall.icons.presenter",
        },
        {
          src: icons.soundSystem,
          text: "conferenceHallState.smallHall.icons.soundSystem",
        },
        
        { src: icons.paper, text: "conferenceHallState.smallHall.icons.paper" },
       
        {
          src: icons.flipchart,
          text: "conferenceHallState.smallHall.icons.flipchart",
        },
      ],
    },

    {
      previewImage: imgs.conferencePreview3,
      title: "conferenceHallState.launge.title",
      size: "conferenceHallState.launge.desc",
      area: "45M²",
      floor: 1,
      capacity: "conferenceHallState.launge.capacity",
      about: {
        pOne: "conferenceHallState.launge.about.pOne",
        pTwo: "conferenceHallState.launge.about.pTwo",
        pMobile: "conferenceHallState.launge.about.pMobile",
      },
      price: null,
      swiperImages: [
        imgs.laungeGallery1,
        imgs.laungeGallery2,
        imgs.laungeGallery3,
        imgs.laungeGallery4,
      ],
      showcaseSwiperImages: [
        imgs.laungeGallery2,
        imgs.laungeGallery3,
        imgs.laungeGallery1,
      ],
      viewShowcaseSwiperImages: {
        ua: [imgs.classRoom, imgs.theathreMax30, imgs.negotiationTableMax20],
        eng: [imgs.class, imgs.theater30max, imgs.board20max],
      },
      icons: [
        {
          src: icons.projector,
          text: "conferenceHallState.launge.icons.projector",
        },
        { src: icons.screen, text: "conferenceHallState.launge.icons.screen" },
        {
          src: icons.notebook,
          text: "conferenceHallState.launge.icons.notebook",
        },
        { src: icons.paper, text: "conferenceHallState.launge.icons.paper" },
        {
          src: icons.flipchart,
          text: "conferenceHallState.launge.icons.flipchart",
        },
     
        {
          src: icons.presenter,
          text: "conferenceHallState.launge.icons.presenter",
        },
      ],
    },
  ],
};
