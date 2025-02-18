// import TV from "../assets/icons/Rooms/Living Room/TV.svg";
// import armChair from "../assets/icons/Rooms/Living Room/armChair.svg";
// import balcony from "../assets/icons/Rooms/Living Room/balcony.svg";
// import cabinet from "../assets/icons/Rooms/Living Room/cabinet.svg";
// import carpet from "../assets/icons/Rooms/Living Room/carpet.svg";
// import kettle from "../assets/icons/Rooms/Living Room/kettle.svg";
// import minibar from "../assets/icons/Rooms/Living Room/minibar.svg";
// import phone from "../assets/icons/Rooms/Living Room/phone.svg";
// import safe from "../assets/icons/Rooms/Living Room/safe.svg";
// import sofa from "../assets/icons/Rooms/Living Room/sofa.svg";
// import tea from "../assets/icons/Rooms/Living Room/tea.svg";
// import wardrobe from "../assets/icons/Rooms/Living Room/wardrobe.svg";
// import airCondition from "../assets/icons/About/airConditioning.svg";
// import wifi from "../assets/icons/About/wifi.svg";

import bedBrown from "../assets/icons/Rooms/LivingRoomBrown/bed.svg";
import cabinetBrown from "../assets/icons/Rooms/LivingRoomBrown/cabinet.svg";
import carpetBrown from "../assets/icons/Rooms/LivingRoomBrown/carpet.svg";
import minibarBrown from "../assets/icons/Rooms/LivingRoomBrown/minibar.svg";
import safeBrown from "../assets/icons/Rooms/LivingRoomBrown/safe.svg";
import kettleBrown from "../assets/icons/Rooms/LivingRoomBrown/kettle.svg";
import conditionBrown from "../assets/icons/Rooms/LivingRoomBrown/condition.svg";
import tvBrown from "../assets/icons/Rooms/LivingRoomBrown/tv.svg";
import phoneBrown from "../assets/icons/Rooms/LivingRoomBrown/phone.svg";
import wifiBrown from "../assets/icons/Rooms/LivingRoomBrown/wifi.svg";
import balconyBrown from "../assets/icons/Rooms/LivingRoomBrown/balcony.svg";
import sofaBrown from "../assets/icons/Rooms/LivingRoomBrown/sofa.svg";

import bathRobe from "../assets/icons/Rooms/LivingRoomBrown/bathRobe.svg";
import cosmetic from "../assets/icons/Rooms/LivingRoomBrown/cosmetic.svg";
import hairDryer from "../assets/icons/Rooms/LivingRoomBrown/hairDryer.svg";
import shovergigi from "../assets/icons/Rooms/LivingRoomBrown/shovergigi.svg";
import shower from "../assets/icons/Rooms/LivingRoomBrown/shower.svg";
import slippers from "../assets/icons/Rooms/LivingRoomBrown/slippers.svg";
import towels from "../assets/icons/Rooms/LivingRoomBrown/towels.svg";
import wc from "../assets/icons/Rooms/LivingRoomBrown/wc.svg";

import standartSinglePreview from "../assets/Rooms/StandartSingle/prewiew.jpg";
import standartSingleBedroomFst from "../assets/Rooms/StandartSingle/bedroom.jpg";
import standartSingleBedroomScd from "../assets/Rooms/StandartSingle/bedroomTwo.jpg";
import standartSingleAmmenties from "../assets/Rooms/StandartSingle/ammenties.jpg";

import standartBigBedPreview from "../assets/Rooms/StandartWithBigBed/preview.jpg";
import standartBigBedFst from "../assets/Rooms/StandartWithBigBed/bedroom.jpg";
import standartBigBedScd from "../assets/Rooms/StandartWithBigBed/bedroomTwo.jpg";

import standartTwoBedPreview from "../assets/Rooms/StandartWithTwoBeds/preview.jpg";
import standartTwoBedFst from "../assets/Rooms/StandartWithTwoBeds/bedrom.jpg";
import standartTwoBedScd from "../assets/Rooms/StandartWithTwoBeds/bedroomTwo.jpg";

import standartBigBedAndBalconyPreview from "../assets/Rooms/StandartWithBigBedAndBalcony/preview.jpg";
import standartBigBedAndBalconyBedroomFst from "../assets/Rooms/StandartWithBigBedAndBalcony/bedroom.jpg";
import standartBigBedAndBalconyBedroomScd from "../assets/Rooms/StandartWithBigBedAndBalcony/bedroom.Two.jpg";

import standartTwoBedAndBalconyPreview from "../assets/Rooms/StandartWithTwoBedsAndBalcony/preview.jpg";
import standartTwoBedAndBalconyBedroomFst from "../assets/Rooms/StandartWithTwoBedsAndBalcony/bedroom.jpg";
import standartTwoBedAndBalconyBedroomScd from "../assets/Rooms/StandartWithTwoBedsAndBalcony/bedroomTwo.jpg";

import semiLuxPreview from "../assets/Rooms/SemiLux/preview.jpg";
import semiLuxBathroomFst from "../assets/Rooms/SemiLux/bathroom.jpg";
import semiLuxBathroomScd from "../assets/Rooms/SemiLux/bathroomTwo.jpg";
// import semiLuxBedroomFst from "../assets/Rooms/SemiLux/bedroom.jpg";
import semiLuxBedroomScd from "../assets/Rooms/SemiLux/bedroomTwo.jpg";
// import luxTwoRoomsPreview from "../assets/Rooms/LuxTwoRooms/header.jpg";
// import luxImperiumPreview from "../assets/Rooms/LuxImpreial/preview.jpg";
// import luxElegantPreview from "../assets/Rooms/LuxElegant/preview.jpg";

import ammenties from "../assets/Rooms/StandartAbout/amenities.jpg";
import standartBathRoomFst from "../assets/Rooms/StandartAbout/bathRoom.jpg";
import standartBathRoomSnd from "../assets/Rooms/StandartAbout/bathRoomTwo.jpg";
import standartBedRoomTwo from "../assets/Rooms/StandartSingle/bedroomTwo.jpg";
import { StoreState } from "./types";

const standartBlocksStyles =
  "bg-[#EDE8E5] shadow-[0px_-14px_61.3px_0px_#25252612]";
// const luxBlocksStyles = [
//   "bg-[#A47762]",
//   standartBlocksStyles,
//   standartBlocksStyles,
// ];
export const initialRoomsState: StoreState = {
  rooms: [
    {
      type: "standart-single",
      title: "стандарт одномісний",
      description: "Оптимальний вибір для ділової подорожі",
      area: 15,
      guests: "1",
      isLux: false,
      header: {
        previewImage: standartSinglePreview,
        title: "стандарт",
        size: "одномісний",
        description: "Оптимальний вибір для ділової подорожі",
        count: 6,
        view: "У двір",
        arriveTime: "14:00",
        leaveTime: "12:00",
      },
      about: {
        pOne: `Одномісний номер – відмінний вибір для ділових поїздок. Стильний дизайн і продуманий простір забезпечують комфорт для продуктивної роботи та відновлення сил.`,
        pTwo: `Лаконічний та затишний номер дарує тишу та приватність. Вікна номеру виходять у внутрішній двір готелю. Кожна деталь створена, щоб ви могли працювати ефективно й відпочивати безтурботно.`,
        rooms: 2,
        swiperImagesStyle: "object-[100%_40%]",
        swiperImages: [
          standartSingleBedroomFst,
          standartSingleBedroomScd,
          standartSinglePreview,
          standartBathRoomFst,
          standartBathRoomSnd,
        ],
        isBalcony: false,
        ammetiveImgStyle: "object-[2%_20%]",

        ammentiesImages: [
          standartBedRoomTwo,
          standartSingleAmmenties,
          standartBathRoomFst,
          standartBathRoomSnd,
        ],
        bedText: "односпальне ліжко (90*190 см)",
        blocksStyle: standartBlocksStyles,
      },
      icons: {
        ammentiesInRoom: [
          { src: bedBrown, text: "односпальне ліжко (90*190 см)" },
          { src: cabinetBrown, text: "робочий стіл" },
          { src: carpetBrown, text: "килимове покриття" },
          { src: minibarBrown, text: "мінібар" },
          { src: safeBrown, text: "сейф" },
          { src: kettleBrown, text: "електрочайник" },
          { src: conditionBrown, text: "кондиціонер" },
          { src: tvBrown, text: "LCD TV 43 дюйми" },
          { src: phoneBrown, text: "телефон" },
          { src: wifiBrown, text: "WI-fi" },
        ],
        bathRoom: [
          { src: shower, text: "душова" },
          { src: wc, text: "туалет" },
          { src: shovergigi, text: "гігієнічний душ" },
          { src: hairDryer, text: "фен" },
          { src: towels, text: "рушники" },
          { src: bathRobe, text: "халати" },
          { src: slippers, text: "капці" },
          { src: cosmetic, text: "готельна косметика" },
        ],
      },
    },
    {
      type: "standart-big-bed",
      title: "стандарт з великим ліжком",
      description: "Комфорт та зручність для вашого відпочинку ",
      area: 18,
      isLux: false,
      guests: "2",
      header: {
        previewImage: standartBigBedPreview,
        title: "стандарт",
        size: "з великим ліжком",
        description: "Оптимальний вибір для ділової подорожі",
        count: 12,
        view: "У двір",
        arriveTime: "14:00",
        leaveTime: "12:00",
      },
      about: {
        pOne: `Сучасний та водночас елегантний номер, створений для вашого комфорту під час відпочинку чи роботи. В номері зручне двоспальне ліжко та функціональне робоче місце.`,
        pTwo: `Номер стане чудовим вибором як для одномісного розміщення під час бізнес-поїздки, так і для романтичного відпочинку. Вікна номеру виходять у внутрішній двір готелю.`,
        rooms: 1,
        swiperImagesStyle: "object-[100%_65%]",
        swiperImages: [
          standartBigBedFst,
          standartBigBedScd,
          standartBathRoomFst,
          standartBathRoomSnd,
        ],
        isBalcony: false,
        ammetiveImgStyle: "object-[33%_50%]",

        ammentiesImages: [
          standartBigBedScd,
          ammenties,
          standartBathRoomFst,
          standartBathRoomSnd,
        ],
        bedText: "односпальне ліжко (90*190 см)",
        blocksStyle: standartBlocksStyles,
      },
      icons: {
        ammentiesInRoom: [
          { src: bedBrown, text: "двоспальне ліжко (160*200 см)" },
          { src: cabinetBrown, text: "робочий стіл" },
          { src: carpetBrown, text: "килимове покриття" },
          { src: minibarBrown, text: "мінібар" },
          { src: safeBrown, text: "сейф" },
          { src: kettleBrown, text: "електрочайник" },
          { src: conditionBrown, text: "кондиціонер" },
          { src: tvBrown, text: "LCD TV 43 дюйми" },
          { src: phoneBrown, text: "телефон" },
          { src: wifiBrown, text: "WI-fi" },
        ],
        bathRoom: [
          { src: shower, text: "душова" },
          { src: wc, text: "туалет" },
          { src: shovergigi, text: "гігієнічний душ" },
          { src: hairDryer, text: "фен" },
          { src: towels, text: "рушники" },
          { src: bathRobe, text: "халати" },
          { src: slippers, text: "капці" },
          { src: cosmetic, text: "готельна косметика" },
        ],
      },
    },
    {
      type: "standart-two-bed",
      title: "стандарт з двома ліжками",
      description: "Тиша і зручність в центрі ділового міста",
      area: 18,
      guests: "2",
      isLux: false,
      header: {
        previewImage: standartTwoBedPreview,
        title: "стандарт",
        size: "з двома ліжками",
        description: "Тиша і зручність в центрі ділового міста",
        count: 18,
        view: "У двір",
        arriveTime: "14:00",
        leaveTime: "12:00",
      },
      about: {
        pOne: `Номер, створений для балансу між роботою та відпочинком. Простір та затишок дозволяють зосередитись на важливих справах і водночас знайти час і для відпочинку.`,
        pTwo: `Бездоганний вибір для колег у відрядженні або ж друзів-мандрівників. Вікна номеру виходять у внутрішній двір готелю, що додає відчуття усамітнення й тиші.`,
        rooms: 1,
        swiperImagesStyle: "object-[100%_78%]",
        swiperImages: [
          standartTwoBedFst,
          standartTwoBedScd,
          standartBathRoomFst,
          standartBathRoomSnd,
        ],
        isBalcony: false,
        ammetiveImgStyle: "object-[0%_20%]",
        ammentiesImages: [
          standartTwoBedScd,
          ammenties,
          standartBathRoomFst,
          standartBathRoomSnd,
        ],
        bedText: "односпальне ліжко (90*190 см)",
        blocksStyle: standartBlocksStyles,
      },
      icons: {
        ammentiesInRoom: [
          { src: bedBrown, text: "два односпальні ліжка (90*190 см)" },
          { src: cabinetBrown, text: "робочий стіл" },
          { src: carpetBrown, text: "килимове покриття" },
          { src: minibarBrown, text: "мінібар" },
          { src: safeBrown, text: "сейф" },
          { src: kettleBrown, text: "електрочайник" },
          { src: conditionBrown, text: "кондиціонер" },
          { src: tvBrown, text: "LCD TV 43 дюйми" },
          { src: phoneBrown, text: "телефон" },
          { src: wifiBrown, text: "WI-fi" },
        ],
        bathRoom: [
          { src: shower, text: "душова" },
          { src: wc, text: "туалет" },
          { src: shovergigi, text: "гігієнічний душ" },
          { src: hairDryer, text: "фен" },
          { src: towels, text: "рушники" },
          { src: bathRobe, text: "халати" },
          { src: slippers, text: "капці" },
          { src: cosmetic, text: "готельна косметика" },
        ],
      },
    },
    {
      type: "standart-big-bed-balcony",
      title: "стандарт з великим ліжком та балконом",
      description: "Ритм міста поруч, затишок усередині",
      area: 18,
      guests: "2",
      isLux: false,
      header: {
        previewImage: standartBigBedAndBalconyPreview,
        title: "стандарт",
        size: "з великим ліжком та балконом",
        description: "Ритм міста поруч, затишок усередині",
        count: 19,
        view: "на вулицю",
        arriveTime: "14:00",
        leaveTime: "12:00",
      },
      about: {
        pOne: `Затишний номер з балконом, з якого відкривається красивий вид на Храм Святої Трійці. В номері  зручне двоспальне ліжко та продумане робоче місце для вашого комфорту.`,
        pTwo: `Сучасний інтер’єр та чудова панорама міста подарують вам приємні спогади, а зручне розташування в центрі Львова дозволить легко дістатися до основних пам’яток.`,
        rooms: 1,
        swiperImagesStyle: "object-[0%_100%]",
        swiperImages: [
          standartBigBedAndBalconyBedroomFst,
          standartBigBedAndBalconyBedroomScd,
          standartBathRoomFst,
          standartBathRoomSnd,
        ],
        isBalcony: false,
        ammetiveImgStyle: "object-[65%_20%]",
        ammentiesImages: [
          standartBigBedAndBalconyBedroomScd,
          ammenties,
          standartBathRoomFst,
          standartBathRoomSnd,
        ],
        bedText: "односпальне ліжко (90*190 см)",
        blocksStyle: standartBlocksStyles,
      },
      icons: {
        ammentiesInRoom: [
          { src: bedBrown, text: "двоспальне ліжко (160*200 см)" },
          { src: balconyBrown, text: "балкон" },
          { src: cabinetBrown, text: "робочий стіл" },
          { src: carpetBrown, text: "килимове покриття" },
          { src: minibarBrown, text: "мінібар" },
          { src: safeBrown, text: "сейф" },
          { src: kettleBrown, text: "електрочайник" },
          { src: conditionBrown, text: "кондиціонер" },
          { src: tvBrown, text: "LCD TV 43 дюйми" },
          { src: phoneBrown, text: "телефон" },
          { src: wifiBrown, text: "WI-fi" },
        ],
        bathRoom: [
          { src: shower, text: "душова" },
          { src: wc, text: "туалет" },
          { src: shovergigi, text: "гігієнічний душ" },
          { src: hairDryer, text: "фен" },
          { src: towels, text: "рушники" },
          { src: bathRobe, text: "халати" },
          { src: slippers, text: "капці" },
          { src: cosmetic, text: "готельна косметика" },
        ],
      },
    },
    {
      type: "standart-two-bed-balcony",
      title: "стандарт з двома  ліжками та балконом",
      description: "Відчуйте гармонію між стилем та комфортом",
      area: 18,
      guests: "2",
      isLux: false,
      header: {
        previewImage: standartTwoBedAndBalconyPreview,
        title: "стандарт",
        size: `з двома  ліжками та балконом`,
        description: "Відчуйте гармонію між стилем та бездоганним комфортомі",
        count: 33,
        view: "на вулицю",
        arriveTime: "14:00",
        leaveTime: "12:00",
      },
      about: {
        pOne: `Комфортабельний номер з балконом зачарує вас чудовим видом на Храм Святої Трійці. У номері два окремих ліжка, робоче місце та все необхідне для вашого приємного перебування.`,
        pTwo: `Інтер’єр цього номера поєднує елегантність та сучасний стиль, а розташування в самому центрі Львова дозволяє легко дістатись до найвідоміших пам’яток міста.`,
        rooms: 1,
        swiperImagesStyle: "object-[0%_100%]",
        swiperImages: [
          standartTwoBedAndBalconyBedroomScd,
          standartTwoBedAndBalconyBedroomFst,
          standartBathRoomFst,
          standartBathRoomSnd,
        ],
        isBalcony: false,
        ammetiveImgStyle: "object-[65%_20%]",
        ammentiesImages: [
          standartBigBedAndBalconyBedroomScd,
          ammenties,
          standartBathRoomFst,
          standartBathRoomSnd,
        ],
        bedText: "односпальне ліжко (90*190 см)",
        blocksStyle: standartBlocksStyles,
      },
      icons: {
        ammentiesInRoom: [
          { src: bedBrown, text: "два односпальні ліжка (90*190 см)" },
          { src: balconyBrown, text: "балкон" },
          { src: cabinetBrown, text: "робочий стіл" },
          { src: carpetBrown, text: "килимове покриття" },
          { src: minibarBrown, text: "мінібар" },
          { src: safeBrown, text: "сейф" },
          { src: kettleBrown, text: "електрочайник" },
          { src: conditionBrown, text: "кондиціонер" },
          { src: tvBrown, text: "LCD TV 43 дюйми" },
          { src: phoneBrown, text: "телефон" },
          { src: wifiBrown, text: "WI-fi" },
        ],
        bathRoom: [
          { src: shower, text: "душова" },
          { src: wc, text: "туалет" },
          { src: shovergigi, text: "гігієнічний душ" },
          { src: hairDryer, text: "фен" },
          { src: towels, text: "рушники" },
          { src: bathRobe, text: "халати" },
          { src: slippers, text: "капці" },
          { src: cosmetic, text: "готельна косметика" },
        ],
      },
    },
    {
      type: "standart-two-bed-balcony",
      title: "стандарт з двома  ліжками та балконом",
      description: "Відчуйте гармонію між стилем та комфортом",
      area: 18,
      guests: "2",
      isLux: false,
      header: {
        previewImage: standartTwoBedAndBalconyPreview,
        title: "стандарт",
        size: `з двома  ліжками та балконом`,
        description: "Відчуйте гармонію між стилем та бездоганним комфортомі",
        count: 33,
        view: "на вулицю",
        arriveTime: "14:00",
        leaveTime: "12:00",
      },
      about: {
        pOne: `Комфортабельний номер з балконом зачарує вас чудовим видом на Храм Святої Трійці. У номері два окремих ліжка, робоче місце та все необхідне для вашого приємного перебування.`,
        pTwo: `Інтер’єр цього номера поєднує елегантність та сучасний стиль, а розташування в самому центрі Львова дозволяє легко дістатись до найвідоміших пам’яток міста.`,
        rooms: 1,
        swiperImagesStyle: "object-[0%_100%]",
        swiperImages: [
          standartTwoBedAndBalconyBedroomScd,
          standartTwoBedAndBalconyBedroomFst,
          standartBathRoomFst,
          standartBathRoomSnd,
        ],
        isBalcony: false,
        ammetiveImgStyle: "object-[65%_20%]",
        ammentiesImages: [
          standartBigBedAndBalconyBedroomScd,
          ammenties,
          standartBathRoomFst,
          standartBathRoomSnd,
        ],
        bedText: "односпальне ліжко (90*190 см)",
        blocksStyle: standartBlocksStyles,
      },
      icons: {
        ammentiesInRoom: [
          { src: bedBrown, text: "два односпальні ліжка (90*190 см)" },
          { src: balconyBrown, text: "балкон" },
          { src: cabinetBrown, text: "робочий стіл" },
          { src: carpetBrown, text: "килимове покриття" },
          { src: minibarBrown, text: "мінібар" },
          { src: safeBrown, text: "сейф" },
          { src: kettleBrown, text: "електрочайник" },
          { src: conditionBrown, text: "кондиціонер" },
          { src: tvBrown, text: "LCD TV 43 дюйми" },
          { src: phoneBrown, text: "телефон" },
          { src: wifiBrown, text: "WI-fi" },
        ],
        bathRoom: [
          { src: shower, text: "душова" },
          { src: wc, text: "туалет" },
          { src: shovergigi, text: "гігієнічний душ" },
          { src: hairDryer, text: "фен" },
          { src: towels, text: "рушники" },
          { src: bathRobe, text: "халати" },
          { src: slippers, text: "капці" },
          { src: cosmetic, text: "готельна косметика" },
        ],
      },
    },
    {
        type: "semi-lux",
    title: "напівлюкс",
    description: "Номер, де кожна деталь має значення",
    area: 22,
    guests: "2+2",
      isLux: false,
      header: {
        previewImage: semiLuxPreview,
        title: "напівлюкс",
        description: "Ритм міста поруч, затишок усередині",
        count: 6,
        view: "у двір",
        arriveTime: "14:00",
        leaveTime: "12:00",
      },
      about: {
        pOne: `Просторий та затишний номер зі зручним двоспальним ліжком та диваном, що забезпечує за необхідності 2 додаткові спальні місця для гостей, які подорожують з сім'єю.`,
        pTwo: `Поєднання елегантності та функціональності робить цей номер ідеальним вибором для будь-якої подорожі. Вікна номеру виходять у тихий внутрішній двір готелю.`,
        rooms: 1,
        swiperImagesStyle: "object-[0%_65%]",
        swiperImages: [
            semiLuxPreview,
            semiLuxBedroomScd,
          semiLuxBathroomFst,
          semiLuxBathroomScd,
        ],
        isBalcony: false,
        ammetiveImgStyle: "object-[65%_20%]",
        ammentiesImages: [
            semiLuxBedroomScd,
          ammenties,
          semiLuxBathroomFst,
          semiLuxBathroomScd,
        ],
        bedText: "односпальне ліжко (90*190 см)",
        blocksStyle: standartBlocksStyles,
      },
      icons: {
        ammentiesInRoom: [
          { src: bedBrown, text: "двоспальне ліжко (160*200 см) / 2 односпальні ліжка (90*190 см)" },
          { src: sofaBrown, text: "диван-ліжко" },
          { src: cabinetBrown, text: "робочий стіл" },
          { src: carpetBrown, text: "килимове покриття" },
          { src: minibarBrown, text: "мінібар" },
          { src: safeBrown, text: "сейф" },
          { src: kettleBrown, text: "електрочайник" },
          { src: conditionBrown, text: "кондиціонер" },
          { src: tvBrown, text: "LCD TV 43 дюйми" },
          { src: phoneBrown, text: "телефон" },
          { src: wifiBrown, text: "WI-fi" },
        ],
        bathRoom: [
          { src: shower, text: "душова" },
          { src: wc, text: "туалет" },
          { src: shovergigi, text: "гігієнічний душ" },
          { src: hairDryer, text: "фен" },
          { src: towels, text: "рушники" },
          { src: bathRobe, text: "халати" },
          { src: slippers, text: "капці" },
          { src: cosmetic, text: "готельна косметика" },
        ],
      },
    },
    {
      type: "standart-two-bed-balcony",
      title: "стандарт з двома  ліжками та балконом",
      description: "Відчуйте гармонію між стилем та комфортом",
      area: 18,
      guests: "2",
      isLux: false,
      header: {
        previewImage: standartTwoBedAndBalconyPreview,
        title: "стандарт",
        size: `з двома  ліжками та балконом`,
        description: "Відчуйте гармонію між стилем та бездоганним комфортомі",
        count: 33,
        view: "у двір",
        arriveTime: "14:00",
        leaveTime: "12:00",
      },
      about: {
        pOne: `Комфортабельний номер з балконом зачарує вас чудовим видом на Храм Святої Трійці. У номері два окремих ліжка, робоче місце та все необхідне для вашого приємного перебування.`,
        pTwo: `Інтер’єр цього номера поєднує елегантність та сучасний стиль, а розташування в самому центрі Львова дозволяє легко дістатись до найвідоміших пам’яток міста.`,
        rooms: 1,
        swiperImagesStyle: "object-[0%_100%]",
        swiperImages: [
          standartTwoBedAndBalconyBedroomScd,
          standartTwoBedAndBalconyBedroomFst,
          standartBathRoomFst,
          standartBathRoomSnd,
        ],
        isBalcony: false,
        ammetiveImgStyle: "object-[65%_20%]",
        ammentiesImages: [
          standartBigBedAndBalconyBedroomScd,
          ammenties,
          standartBathRoomFst,
          standartBathRoomSnd,
        ],
        bedText: "односпальне ліжко (90*190 см)",
        blocksStyle: standartBlocksStyles,
      },
      icons: {
        ammentiesInRoom: [
          { src: bedBrown, text: "два односпальні ліжка (90*190 см)" },
          { src: balconyBrown, text: "балкон" },
          { src: cabinetBrown, text: "робочий стіл" },
          { src: carpetBrown, text: "килимове покриття" },
          { src: minibarBrown, text: "мінібар" },
          { src: safeBrown, text: "сейф" },
          { src: kettleBrown, text: "електрочайник" },
          { src: conditionBrown, text: "кондиціонер" },
          { src: tvBrown, text: "LCD TV 43 дюйми" },
          { src: phoneBrown, text: "телефон" },
          { src: wifiBrown, text: "WI-fi" },
        ],
        bathRoom: [
          { src: shower, text: "душова" },
          { src: wc, text: "туалет" },
          { src: shovergigi, text: "гігієнічний душ" },
          { src: hairDryer, text: "фен" },
          { src: towels, text: "рушники" },
          { src: bathRobe, text: "халати" },
          { src: slippers, text: "капці" },
          { src: cosmetic, text: "готельна косметика" },
        ],
      },
    },
   
  ],
};

//   {
//     
//     previewImage: semiLuxPreview,
//   },
//   {
//     type: "lux-two-rooms",
//     title: "люкс двокімнатний",
//     description: "затишок, який зустрічає вас в центрі Львова",
//     area: 38,
//     guests: "2+2",
//     previewImage: luxTwoRoomsPreview,
//   },
//   {
//     type: "lux-imperial",
//     title: "люкс покращений imperial",
//     description: "Для гостей, які цінують винятковість",
//     area: 60,
//     guests: "2",
//     previewImage: luxImperiumPreview,
//   },
//   {
//     type: "lux-imperial",
//     title: "люкс покращений imperial",
//     description: "Для гостей, які цінують винятковість",
//     area: 60,
//     guests: "2",
//     previewImage: luxElegantPreview,
//   },
