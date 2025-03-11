import * as icons from "./exportsIcons";
import { roomLux, terasse, bussines, bar, restaurant, karaoke, terasseHome, menuTerrase, celebratingTerrase, barTerrase } from "./exportsImg";
import { Reviews } from "./types";


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
      img: restaurant,
      title:"home.roofService.restaurant.title",
      titleDesc:"home.roofService.restaurant.titleDesc",
      desc:"home.roofService.restaurant.desc",
      url: "/restaurant",
    },
    {
      img: karaoke,
      title:"home.roofService.karaoke.title",
      titleDesc:"home.roofService.karaoke.titleDesc",
      desc:"home.roofService.karaoke.desc",
      url: "/restaurant",
    },
    {
      img: terasseHome,
      title:"home.roofService.terrace.title",
      titleDesc:"home.roofService.terrace.titleDesc",
      desc:"home.roofService.terrace.desc",
      url: "/terrase",
    },
  ];

  export const restaurantReviews = [
    {
      id: 1,
      text: `Мала можливість спробувати кухню вашого закладу та побувати у вас протягом 2 днів.
  Вражень багато: великий вибір, смачна кухня, уважний та ввічливий персонал. Чистенько та надзвичайно атмосферно! Ваш готель заслуговує на найкращі рекомендації!!!
  Дякую за високий рівень обслуговування клієнтів!
  `,
      impression: "Відмінно",
    },
    {
      id: 2,
      text: `комфортні світлі номери, розташування супер, 10 хв прогулянки і ти в центрі, чудовий ресторан на 8 поверсі, смачні сніданки з прекрасним краєвидом
  `,
      impression: "Відмінно",
    },
    {
      id: 3,
      text: `Нещодавно відвідала цей ресторан і залишилась у повному захваті! З перших хвилин відчувається увага до деталей та щире бажання подарувати гостям приємні емоції. Особливо хочу відзначити роботу хостеса Максима. Його ввічливість, доброзичливість і щира усмішка створили теплу атмосферу з самого початку.Максим професійно та швидко допоміг із вибором столика, врахував наші побажання
  
  Обов’язково повернуся ще не раз!
  Сервіс: 5/5`,
      impression: "",
    },
    {
      id: 4,
      text: `Надзвичайно приємна атмосфера, стильний інтер’єр і бездоганне обслуговування. Кожна страва була витвором мистецтва, а подача – справжнім шоу! Дуже вдячна персоналу за їхню увагу до деталей.`,
      impression: "Чудово",
    },
    {
      id: 5,
      text: `Відпочинок у вашому готелі залишив лише найкращі враження. Комфортні номери, привітний персонал і смачні страви у ресторані зробили наше перебування незабутнім. Дякую за гостинність!`,
      impression: "Прекрасно",
    },
    {
      id: 6,
      text: `Ресторан перевершив усі очікування! Неймовірно смачні страви, великий вибір напоїв та приємна атмосфера. Окремо хочу відзначити офіціанта Олександра, який був дуже уважним і професійним.`,
      impression: "Вражаюче",
    },
    {
      id: 7,
      text: `Святкували день народження в цьому закладі – залишились у захваті! Організація на високому рівні, персонал уважний, а кухня – справжній гастрономічний рай. Будемо рекомендувати друзям!`,
      impression: "Неймовірно",
    },
    {
      id: 8,
      text: `Це місце, куди хочеться повертатися знову і знову! Все ідеально: від атмосфери до смаку страв. Дуже вдячна всьому персоналу за такий теплий прийом!`,
      impression: "Надзвичайно",
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
        text: "комфортні світлі номери, розташування супер, 10 хв прогулянки і ти в центрі, чудовий ресторан на 8 поверсі, смачні сніданки з прекрасним краєвидом",
      },
      {
        id: 2,
        name: "Tetiana",
        country: "Україна",
        flag: "🇺🇦",
        text: "розташування, номери чисті. сніданки дуже смачні, великий вибір страв як для дорослих, і для дітей. дуже зручно, що є відкрита, де також можна до пізна можна смачно повечеряти",
      },
      {
        id: 3,
        name: "Svetlana",
        country: "Україна",
        flag: "🇺🇦",
        text: "розташування, номери чисті. сніданки дуже смачні, великий вибір страв як для дорослих, і для дітей. дуже зручно, що є відкрита, де також можна до пізна можна смачно повечеряти",
      },
    ],
    abroad: [
      {
        id: 4,
        name: "Polska",
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
      {
        id: 6,
        name: "Michal",
        country: "Polska",
        flag: "🇵🇱",
        text: "Hotel czysty, śniadanie, miła obsuga, wszystkobsprawne, blisko do centrum.”",
      },
      {
        id: 7,
        name: "Michal",
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
      text: "about.concepts.frstCard.desc",
    },
    {
      title: [
        "about.concepts.secondCard.title.0",
        "about.concepts.secondCard.title.1",
      ],
      img: terasse,
      alt: "terrace",
      text: "about.concepts.secondCard.desc",
    },
    {
      title: [
        "about.concepts.thirdCard.title.0",
        "about.concepts.thirdCard.title.1",
      ],
      img: bussines,
      alt: "conference",
      text: "about.concepts.thirdCard.desc",
    },
    {
      title: [
        "about.concepts.fourthCard.title.0",
        "about.concepts.fourthCard.title.1",
      ],
      img: bar,
      alt: "karaoke",
      text: "about.concepts.fourthCard.desc",
    },
  ];