import * as icons from "./exportsIcons";
import { roomLux, terasse, bussines, bar,  terasseHome, menuTerrase, celebratingTerrase, barTerrase, reviewFst, reviewScd, reviewTrd, reviewFth, reviewFve, restaurantPC, karaokePC } from "./exportsImg";
import { Reviews } from "../types/types";


export  const cards = [
    {
      src: menuTerrase,
      title: "terrase.additionally.cardTitles.0",
      text: "terrase.additionally.cardsDesc.0",
    },
    {
      src: celebratingTerrase,
      title: "terrase.additionally.cardTitles.1",
      text: "terrase.additionally.cardsDesc.1",
    },
    {
      src: barTerrase,
      title: "terrase.additionally.cardTitles.2",
      text: "terrase.additionally.cardsDesc.2",
    },
  ];

  export  const amenities = [
    { src: icons.sofa, text: 'room.moreInfo.amenties.0' },
    { src: icons.babybed, text: 'room.moreInfo.amenties.1' },
    { src: icons.kid, text: 'room.moreInfo.amenties.2' },
    { src: icons.olderkid, text: 'room.moreInfo.amenties.3' },
    { src: icons.cup, text: 'room.moreInfo.amenties.4' },
    { src: icons.guestAmmenties, text: 'room.moreInfo.amenties.5' },
  ]
  
  export const availableService = [
    { src: icons.washingMachine, text: 'room.moreInfo.availableService.0' },
    { src: icons.roomService  , text: 'room.moreInfo.availableService.1' },
    { src: icons.ironingChlothes, text: 'room.moreInfo.availableService.2' },
    { src: icons.pet, text: 'room.moreInfo.availableService.3' },
  ]

export const suggestion = [
    {
      img: restaurantPC,
      title:"home.roofService.restaurant.title",
      titleDesc:"home.roofService.restaurant.titleDesc",
      desc:["home.roofService.restaurant.desc.0","home.roofService.restaurant.desc.1", "home.roofService.restaurant.desc.2", "home.roofService.restaurant.desc.3"],
      url: "/restaurant",
    },
    {
      img: karaokePC,
      title:"home.roofService.karaoke.title",
      titleDesc:"home.roofService.karaoke.titleDesc",
      desc:["home.roofService.karaoke.desc.0","home.roofService.karaoke.desc.1","home.roofService.karaoke.desc.2","home.roofService.karaoke.desc.3"],
      url: "/restaurant#karaoke",
    },
    {
      img: terasseHome,
      title:"home.roofService.terrace.title",
      titleDesc:"home.roofService.terrace.titleDesc",
      desc:["home.roofService.terrace.desc.0","home.roofService.terrace.desc.1","home.roofService.terrace.desc.2"]  ,
      url: "/terrase",
    },
  ];

  export const restaurantReviews = [
    {
      id: 1,
      img: reviewFst,
    },
    {
      id: 2,
     img:reviewScd
    },
    {
      id: 3,
      img:reviewTrd
    },
    {
      id: 4,
      img:reviewFth
    },
    {
      id: 5,
      img:reviewFve
    },
  ];


export const hotelInfo= [
    { icon: icons.door, text: "about.advantages.services.0"},
    { icon: icons.wheelChair, text: "about.advantages.services.1" },
    { icon: icons.pet, text: "about.advantages.services.2" },
    { icon: icons.parking, text: "about.advantages.services.3" },
    { icon: icons.conferenceRoom, text: "about.advantages.services.4" },
    { icon: icons.restaurant, text: "about.advantages.services.5" },
    { icon: icons.karaoke, text: "about.advantages.services.6" },
    { icon: icons.terasse, text: "about.advantages.services.7" },
  ];

  export const services = [
    { icon: icons.reception, text: "about.advantages.servises2.0" },
    { icon: icons.roomService, text: "about.advantages.servises2.1" },
    { icon: icons.car, text: "about.advantages.servises2.2" },
    { icon: icons.breakfast, text: "about.advantages.servises2.3" },
    { icon: icons.airCondition, text: "about.advantages.servises2.4" },
    { icon: icons.wifi, text: "about.advantages.servises2.5" },
    { icon: icons.washingMachine, text: "about.advantages.servises2.6" },
    { icon: icons.ironingChlothes, text: "about.advantages.servises2.7" },
  ];

  export const places = [
    [
      "about.whereWeAre.places.title.0",
      "about.whereWeAre.places.title.1",
    ],
    [
      "about.whereWeAre.places.title2.0",
      "about.whereWeAre.places.title2.1",
    ],
    [
      "about.whereWeAre.places.title3.0",
      "about.whereWeAre.places.title3.1",
    ],
    [
      "about.whereWeAre.places.title4.0",
      "about.whereWeAre.places.title4.1",
    ],
    [
      "about.whereWeAre.places.title5.0",
      "about.whereWeAre.places.title5.1",
    ],
    [
      "about.whereWeAre.places.title6.0",
      "about.whereWeAre.places.title6.1",
    ],
    [
      "about.whereWeAre.places.title7.0",
      "about.whereWeAre.places.title7.1",
    ],
    [
      "about.whereWeAre.places.title8.0",
      "about.whereWeAre.places.title8.1",
    ],
  ];

  export const infrastructure = [
    [
      "about.whereWeAre.infrastructure.title.0",
      "about.whereWeAre.infrastructure.title.1",
    ],
    [
      "about.whereWeAre.infrastructure.title2.0",
      "about.whereWeAre.infrastructure.title2.1",
    ],
    [
      "about.whereWeAre.infrastructure.title3.0",
      "about.whereWeAre.infrastructure.title3.1",
    ],
    [
      "about.whereWeAre.infrastructure.title4.0",
      "about.whereWeAre.infrastructure.title4.1",
    ],
    [
      "about.whereWeAre.infrastructure.title5.0",
      "about.whereWeAre.infrastructure.title5.1",
    ],
    [
      "about.whereWeAre.infrastructure.title6.0",
      "about.whereWeAre.infrastructure.title6.1",
    ],
    [
      "about.whereWeAre.infrastructure.title7.0",
      "about.whereWeAre.infrastructure.title7.1",
    ],
    [
      "about.whereWeAre.infrastructure.title8.0",
      "about.whereWeAre.infrastructure.title8.1",
    ],
  ];


  export const reviews: Reviews = {
    ua: [
      {
        id: 1,
        name: "Anna",
        country: "Україна",
        flag: "🇺🇦",
        textUa: "комфортні світлі номери, розташування супер, 10 хв прогулянки і ти в центрі, чудовий ресторан на 8 поверсі, смачні сніданки з прекрасним краєвидом",
        textEn:"Comfortable, bright rooms with a perfect location—just a 10-minute walk to the city center. The restaurant on the 8th floor is fantastic, with delicious breakfasts and a stunning view."
      },
      {
        id: 2,
        name: "Tetiana",
        country: "Україна",
        flag: "🇺🇦",
        textUa: "розташування, номери чисті. сніданки дуже смачні, великий вибір страв як для дорослих, і для дітей. дуже зручно, що є відкрита, де також можна до пізна можна смачно повечеряти",
        textEn:"Great location, clean rooms, and delicious breakfasts with a wide variety of options for both adults and kids. It’s also great to have an open terrace where you can enjoy a tasty dinner late into the night."
      },
      

    ],
    abroad: [
      {
        id: 4,
        name: "Maciej",
        country: "Polska",
        flag: "🇵🇱",
        text: "Śniadanie w takim miejscu i jeszcze szampon! Żadnej rewelacji. Mama była podekscytowana. Widok na cały Lwów! Pięknie świeciło święciło. Nie było ruchu. Żadnych środowych marzeń",
      },
      {
        id: 5,
        name: "Grzegorz",
        country: "Polska",
        flag: "🇵🇱",
        text: "Hotel czysty, śniadanie, miła obsuga, wszystkobsprawne, blisko do centrum.”",
      },


    ],
  };


export  const concepts = [
    {
      title: [
        "about.concepts.frstCard.title.0",
        "about.concepts.frstCard.title.1",
      ],
      img: roomLux,
      alt: "bedroom",
      text: ["about.concepts.frstCard.desc.0", "about.concepts.frstCard.desc.1"],
    },
    {
      title: [
        "about.concepts.secondCard.title.0",
        "about.concepts.secondCard.title.1",
      ],
      img: terasse,
      alt: "terrace",
      text: ["about.concepts.secondCard.desc.0"],
    },
    {
      title: [
        "about.concepts.thirdCard.title.0",
        "about.concepts.thirdCard.title.1",
      ],
      img: bussines,
      alt: "conference",
      text: ["about.concepts.thirdCard.desc.0", "about.concepts.thirdCard.desc.1", "about.concepts.thirdCard.desc.2", "about.concepts.thirdCard.desc.3"],
    },
    {
      title: [
        "about.concepts.fourthCard.title.0",
        "about.concepts.fourthCard.title.1",
      ],
      img: bar,
      alt: "karaoke",
      text: ["about.concepts.fourthCard.desc.0", "about.concepts.fourthCard.desc.1", "about.concepts.fourthCard.desc.2",],
    },
  ];