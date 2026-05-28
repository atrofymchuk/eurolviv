type SiteLocale = "uk" | "en";

type SeoMeta = {
  title: string;
  description: string;
  h1: string;
};

export const specialOfferSeoConfig: Record<
  SiteLocale,
  Record<string, SeoMeta>
> = {
  uk: {
    military: {
      title: "Знижка для військових у готелі Eurohotel Львів",
      description:
        "Спеціальна пропозиція для військових у готелі Eurohotel у Львові. Знижка на проживання та вигідні умови бронювання.",
      h1: "Тариф для військових",
    },
    business: {
      title: "Бізнес-тариф дня у готелі Eurohotel Львів",
      description:
        "Денний бізнес-тариф у готелі Eurohotel у Львові. Зручне розташування в центрі міста для ділових поїздок.",
      h1: "Бізнес-тариф дня",
    },
    "travel-with-pet": {
      title: "Pet-friendly готель Львів – проживання з тваринами | Eurohotel",
      description:
        "Pet-friendly готель у Львові для комфортного проживання з домашніми улюбленцями. Подорожуйте разом із тваринами та насолоджуйтесь відпочинком у Eurohotel.",
      h1: "Подорожуй з улюбленцем",
    },
    photossession: {
      title: "Фотосесія у готелі Eurohotel Львів",
      description:
        "Спеціальна пропозиція для фотосесії в готелі Eurohotel у Львові. Стильні інтер'єри та зручна локація.",
      h1: "Фотосесія в Eurohotel",
    },
    "newly-weeds": {
      title: "Номер для молодят Львів – романтичний відпочинок у Eurohotel",
      description:
        "Спеціальна пропозиція для молодят у Eurohotel Львів: безкоштовне проживання, компліменти та пізнє виселення. Номер для молодят у Львові у подарунок, при святкуванні весілля в ресторані ROOF.",
      h1: "Подарунок для молодят",
    },
    birthday: {
      title: "День народження у готелі Eurohotel Львів",
      description:
        "Святкуйте день народження в готелі Eurohotel у Львові. Знижка на проживання та особливі умови для гостей.",
      h1: "День народження в Eurohotel",
    },
  },
  en: {
    military: {
      title: "Military Discount at Eurohotel Lviv",
      description:
        "Special offer for military personnel at Eurohotel in Lviv. Discounted accommodation and flexible booking terms.",
      h1: "Military Rate",
    },
    business: {
      title: "Business Day Rate at Eurohotel Lviv",
      description:
        "Business day rate at Eurohotel in Lviv. Convenient city centre location for work trips.",
      h1: "Business Day Rate",
    },
    "travel-with-pet": {
      title: "Pet-Friendly Hotel in Lviv – Eurohotel",
      description:
        "Pet-friendly offer at Eurohotel in Lviv. Comfortable stay with your pet in the city centre.",
      h1: "Travel with Your Pet",
    },
    photossession: {
      title: "Photo Session at Eurohotel Lviv",
      description:
        "Special photo session offer at Eurohotel in Lviv. Stylish interiors and a convenient central location.",
      h1: "Photo Session at Eurohotel",
    },
    "newly-weeds": {
      title: "Newlyweds Gift at Eurohotel Lviv",
      description:
        "Special newlyweds offer at Eurohotel in Lviv. Complimentary stay benefits, gifts, and late check-out.",
      h1: "Gift for Newlyweds",
    },
    birthday: {
      title: "Birthday Celebration at Eurohotel Lviv",
      description:
        "Celebrate your birthday at Eurohotel in Lviv. Special discount and comfortable stay in the city centre.",
      h1: "Birthday at Eurohotel",
    },
  },
};

export const getSpecialOfferSeoMeta = (
  locale: SiteLocale,
  slug: string
): SeoMeta | undefined => specialOfferSeoConfig[locale][slug];
