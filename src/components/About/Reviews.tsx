import { useRef } from "react";
import { Reviews } from "../../store/types";
import { useModalStore } from "../../store/useModalStore";
import ReviewSlider from "./ReviewSlider";
import Slider from "react-slick";
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";

export const Rewies = () => {
  const sliderRef = useRef<Slider | null>(null);

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
      {
        id: 7,
        name: "Michal",
        country: "Polska",
        flag: "🇵🇱",
        text: "Hotel czysty, śniadanie, miła obsuga, wszystkobsprawne, blisko do centrum.”",
      },
    ],
  };

  const { openModalOrder } = useModalStore();

  return (
    <section className="flex flex-col items-center bg-[#A47762] *:font-cofo  overflow-x-hidden ">
      <div className="grid xl:grid-cols-2 xl:w-full border-x border-[#C7C7C7] xl:max-w-[1720px]  w-[332px] px-0">
        <div className="xl:col-span-1   pt-[52px] xl:pt-[109px] flex flex-col ">
          <h1 className="text-center font-cofo xl:text-[198px] text-[32px] uppercase tracking-[-0.09em] text-[#EDE8E5] xl:text-start xl:leading-[160px] leading-[32px] xl:ps-[20px]">
            Відгуки<span className=" xl:hidden block">Наших гостей</span>
          </h1>
          <div className="flex flex-col xl:flex-row gap-4 xl:gap-10 text-start xl:pb-10 items-center xl:items-start">
            <p className="uppercase w-full xl:w-[450px] xl:text-[16px] text-[12px] xl:leading-[16px] text-[#E9E9E9] pt-[15px] xl:ps-[39px] xl:pt-[38px] text-center xl:text-left">
              100 номерів, де кожна деталь творить особливу естетику. Від
              стандартних кімнат до люксів — незмінно висока якість сервісу.
            </p>
            <button
              onClick={openModalOrder}
              className="uppercase text-[#A47762] font-semibold bg-[#EDE8E5] border-[#EDE8E5] border hover:bg-[#A47762] hover:text-[#EDE8E5] w-fit h-fit mt-4 xl:mt-[38px] xl:px-[22.5px] xl:py-[13px] py-[12.5px] px-[14.5px] rounded-full mx-auto xl:mx-0 hover:cursor-pointer"
            >
              забронювати номер
            </button>
          </div>
        </div>
        <div className="xl:col-span-1  xl:flex flex-col justify-center items-center hidden">
          <h2 className="uppercase text-[100px] xl:leading-[81px] xl:tracking-[-0.09em] text-[#EDE8E5] flex flex-col">
            <span className="relative left-[-105px]">Наших</span>
            <span className="relative left-[105px]">гостей</span>
          </h2>
        </div>
      </div>

      <div className="lg:w-full flex justify-end  w-full  lg:h-fit h-[400px] ">
        <div className="xl:max-w-[1781px] w-full max-w-[340px] lg:h-fit h-[400px] ">
          <div className="xl:max-w-[1720px] min-h-[427px] w-[332px] left-1/2 translate-x-[-50%] h-full  absolute  xl:w-full border-x border-[#C7C7C7]  "></div>
          <ReviewSlider reviews={reviews} ref={sliderRef}  />
        </div>
      </div>
      <div>
        <div className="flex lg:w-[1720px] w-[300px] justify-between mt-20 lg:mt-0 ">
          <button
            className="lg:w-[62px] lg:h-[62px] w-[30px] h-[30px]  flex items-center justify-center hover:text-[#8C331B] border hover:border-[#8C331B] rounded-full z-20 hover:bg-white text-white mt-[26px] ms-[20px] mb-[44px] lg:ms-[39px] lg:mt-[29px] lg:mb-[72px]"
            onClick={() => sliderRef.current?.slickPrev()}
          >
            <HiArrowLongLeft className="lg:w-[32px] lg:h-[32px] w-[24px] h-[24px]" />
          </button>

          <button
            className="lg:w-[62px] lg:h-[62px] w-[30px] h-[30px] flex items-center justify-center hover:text-[#8C331B] border hover:border-[#8C331B] rounded-full z-20 hover:bg-white text-white mt-[26px] me-[20px] mb-[44px] lg:mb-[72px] lg:mt-[29px] lg:me-[39px]"
            onClick={() => sliderRef.current?.slickNext()}
          >
            <HiArrowLongRight className="lg:w-[32px] lg:h-[32px] w-[24px] h-[24px]" />
          </button>
        </div>
      </div>
    </section>
  );
};
