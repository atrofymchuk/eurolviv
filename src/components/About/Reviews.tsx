import { useRef } from "react";
import { Reviews } from "../../store/types";
import { useModalStore } from "../../store/useModalStore";
import ReviewSlider from "./ReviewSlider";
import Slider from "react-slick";
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";
import { useTranslation } from "react-i18next";
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

  const { onOpenModal } = useModalStore();
  const { t } = useTranslation();

  return (
    <section className="bg-[#A47762]   px-4 md:px-6 sm:px-6 xl:px-6 flex justify-center  ">
      <div className="flex flex-col items-center border-x border-[#C7C7C7] overflow-x-hidden xl:px-0 xl:max-w-[1720px]">
        <div className="grid xl:grid-cols-2 grid-cols-1 container-fluid mx-auto w-full   pe-4">
          <div className="xl:col-span-1 pt-10 xl:pt-[109px] flex flex-col">
            <h1 className="text-center font-cofo text-3xl md:text-5xl xl:text-[198px]  uppercase tracking-[-0.09em] text-[#EDE8E5] xl:text-start xl:leading-[160px]">
              {t("reviews.title")}
              <span className="xl:hidden block">{t("reviews.heading")}</span>
            </h1>
            <div className="flex flex-col xl:flex-row gap-4 xl:gap-10 text-start xl:pb-10 items-center xl:items-start">
              <p className="uppercase text-xs sm:text-sm md:text-lg xl:text-[16px] xl:leading-[16px] text-[#E9E9E9] pt-4 xl:ps-[39px] xl:pt-[38px] text-center xl:text-left">
                {t("reviews.desc")}
              </p>
              <button
                onClick={() => onOpenModal("order")}
                className="uppercase text-[#A47762] font-semibold whitespace-nowrap bg-[#EDE8E5] border-[#EDE8E5] border hover:bg-[#A47762] hover:text-[#EDE8E5] w-fit h-fit mt-4 xl:mt-[38px] xl:px-[22.5px] xl:py-[13px] py-[12.5px] px-[14.5px] rounded-full mx-auto xl:mx-0 hover:cursor-pointer text-xs md:text-sm xl:text-base"
              >
                {t("buttons.bookRoom")}
              </button>
            </div>
          </div>

          <div className="xl:col-span-1 xl:flex flex-col justify-center items-center hidden ">
            <h2 className="uppercase text-5xl md:text-[80px] xl:text-[100px] xl:leading-[81px]  xl:tracking-[-0.09em] text-[#EDE8E5] flex flex-col">
              <span className="relative left-[-30px] md:left-[-70px] xl:left-[-105px]">
                {t('reviews.heading')}
              </span>
              <span className="relative left-[30px] md:left-[70px] xl:left-[105px]">
                {t('reviews.heading2')}
              </span>
            </h2>
          </div>
        </div>

        <div className="lg:w-full flex justify-end w-full  max-h-[500px]">
          <div className="xl:max-w-[1781px] w-full  h-full relative">
            <ReviewSlider reviews={reviews} ref={sliderRef} />
          </div>
        </div>

        <div className="flex xl:max-w-[1720px] w-screen  justify-between mt-10 lg:mt-0 z-50">
          <button
            className="lg:w-[62px] lg:h-[62px] w-[30px] h-[30px] md:ms-20 sm:ms-20 ms-15  flex items-center justify-center hover:text-[#8C331B] border hover:border-[#8C331B] rounded-full z-20 hover:bg-white text-white mt-[26px]  mb-[44px] lg:ms-[39px] lg:mt-[29px] lg:mb-[72px]"
            onClick={() => sliderRef.current?.slickPrev()}
          >
            <HiArrowLongLeft className="lg:w-[32px] lg:h-[32px] w-[24px] h-[24px]" />
          </button>

          <button
            className="lg:w-[62px] lg:h-[62px] w-[30px] h-[30px] md:me-20 sm:me-20 me-15 flex items-center justify-center hover:text-[#8C331B] border hover:border-[#8C331B] rounded-full z-20 hover:bg-white text-white mt-[26px]  mb-[44px] lg:mb-[72px] lg:mt-[29px] lg:me-[39px]"
            onClick={() => sliderRef.current?.slickNext()}
          >
            <HiArrowLongRight className="lg:w-[32px] lg:h-[32px] w-[24px] h-[24px]" />
          </button>
        </div>
      </div>
    </section>
  );
};
