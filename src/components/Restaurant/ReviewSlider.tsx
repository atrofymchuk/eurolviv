import Slider from "react-slick";
import { ReviewSliderCard } from "./ReviewSliderCard";
import { forwardRef } from "react";

const reviews = [
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

type ReviewSliderToProps = {
  isTerrasePage?:boolean
}

export const ReviewSlider = forwardRef<Slider, ReviewSliderToProps>(({isTerrasePage}, ref) => {
  const settings = {
    infinite: true,
    speed: 500,
    rows: 1,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          variableWidth: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: false,
          slidesPerRow: 3,
        },
      },
    ],
  };

  return (
    <div className="flex flex-col items-end justify-end w-full overflow-hidden">
      <div className={`w-full ${isTerrasePage ? " max-w-[1833px]" :' max-w-[1854px]'}  lg:h-[458px] h-fit lg:border border-[#B3B3B3]`}>
        <div className="slider-container overflow-visible">
          <Slider {...settings} ref={ref}>
            {reviews.map((el) => (
              <ReviewSliderCard
                impression={el.impression}
                text={el.text}
                key={el.id}
              />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
});
