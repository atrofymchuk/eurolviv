import { SpecialOffers } from "./types";

import military from "../../assets/SpecialOffers/military.jpg";
import birthday from "../../assets/SpecialOffers/birthday.png";
import buissenes from "../../assets/SpecialOffers/buissenes.jpg";
import newlyweds from "../../assets/SpecialOffers/newlyweds.png";
import photosession from "../../assets/SpecialOffers/photosession.jpg";
import bedwithpet from "../../assets/Rooms/AdditionaInfo/bedwithpet.png";

export const initialSpecialsOfferState: SpecialOffers[] = [
    {
      src: military,
      title: "тариф для військових",
      desc: " Ми щиро вдячні нашим військовим за те, що маємо можливість надалі працювати",
      offer: "-20% на проживання для військових ",
      classes: "object-[1%_50%]",
    },
    {
      src: buissenes,
      title: "бізнес - тариф денний",
      desc: "Коротка зупинка для бізнесу чи натхнення? Обирайте наш денний бізнес-тариф з 50%",
      offer: "-50% бізнес-тариф денний",
      classes: "object-[50%_45%]",
    },
    {
      src: bedwithpet,
      title: "Подорож з домашнім улюбленцем",
      desc: "Наш пакет створений для того, щоб ваш улюбленець відчував себе як вдома",
      offer: "лапки вітаються",
      classes: "object-[60%_45%]",
    },
    {
      src: photosession,
      title: "фотосесія",
      desc: "Шукаєте стильну локацію для найкращих фото? Eurohotel запрошує вас скористатися унікальною можливістю ",
      offer: "фотосесія",
      classes: "object-[50%_0%]",
    },
    {
      src: newlyweds,
      title: "Подарунок для молодят",
      desc: "Ваш ідеальний початок спільного життя! Подаруйте собі незабутній відпочинок післянайважливішого дня святкування. ",
      offer: "Подарунок для молодят",
      classes: "object-[50%_0%]",
    },
    {
      src: birthday,
      title: "день народження",
      desc: "Відсвяткуйте свій особливий день у затишній атмосфері Eurohotel! ",
      offer: "-20% у день народження",
      classes: "object-[50%_0%]",
    },
  ];
