import { Reviews } from "../../store/types";
import ReviewSlider from "./ReviewSlider";

export const Rewies = () => {
  const reviews: Reviews = {
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
    ],
  };

  return (
    <section className="flex flex-col items-center bg-[#A47762] *:font-cofo   ">
      <div className="grid md:grid-cols-2 w-full border-x border-[#C7C7C7] md:max-w-[1720px]  max-w-[326px] px-0">
        <div className="md:col-span-1   pt-[52px] md:pt-[109px] flex flex-col ">
          <h1 className="text-center font-cofo md:text-[198px] text-[32px] uppercase tracking-[-0.09em] text-[#EDE8E5] md:text-start md:leading-[160px] leading-[32px] md:ps-[20px]">
            Відгуки<span className=" md:hidden block">Наших гостей</span>
          </h1>
          <div className="flex flex-col md:flex-row gap-4 md:gap-10 text-start md:pb-10 items-center md:items-start">
            <p className="uppercase w-full md:w-[450px] md:text-[16px] text-[12px] md:leading-[16px] text-[#E9E9E9] pt-[15px] md:ps-[39px] md:pt-[38px] text-center md:text-left">
              100 номерів, де кожна деталь творить особливу естетику. Від
              стандартних кімнат до люксів — незмінно висока якість сервісу.
            </p>
            <button className="uppercase text-[#A47762] font-semibold bg-[#EDE8E5] w-fit h-fit mt-4 md:mt-[38px] md:px-[22.5px] md:py-[13px] py-[12.5px] px-[14.5px] rounded-full mx-auto md:mx-0 hover:cursor-pointer">
              забронювати номер
            </button>
          </div>
        </div>
        <div className="md:col-span-1 border-e border-[#C7C7C7] pt-[52px] md:pt-[109px] md:flex flex-col justify-center items-center hidden">
          <h2 className="uppercase text-[100px] md:leading-[81px] md:tracking-[-0.09em] text-[#EDE8E5] flex flex-col">
            <span className="relative left-[-105px]">Наших</span>
            <span className="relative left-[105px]">гостей</span>
          </h2>
        </div>
      </div>

      <div className="w-full flex justify-end h-fit ">
        <div className="md:max-w-[1720px] w-full max-w-[334px]">
          <div className="md:max-w-[1720px] min-h-[527px] w-[326px] absolute md:left-25 left-6.25 md:w-full border-x border-[#C7C7C7] z-10 "></div>
          <ReviewSlider reviews={reviews} />
        </div>
      </div>
    </section>
  );
};
