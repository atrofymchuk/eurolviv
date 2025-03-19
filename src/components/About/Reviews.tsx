import { useRef } from "react";
import { useModalStore } from "../../store/useModalStore";
import ReviewSlider from "./ReviewSlider";
import Slider from "react-slick";
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";
import { useTranslation } from "react-i18next";
import { usePagesInfoStore } from "../../store/usePagesInfoStore";

export const Rewies = () => {
  const sliderRef = useRef<Slider | null>(null);
  const { onOpenModal } = useModalStore();
  const { t } = useTranslation();
  const { reviews } = usePagesInfoStore();
  return (
    <section className="bg-[#A47762] flex-col   flex justify-center items-center  ">
      <div className="flex flex-col items-center border-x border-[#C7C7C7]  overflow-x-hidden xl:px-0 w-[89.68%] ">
        <div className="grid xl:grid-cols-2 grid-cols-1  w-full   pe-4">
          <div className="xl:col-span-1 pt-10 xl:pt-[109px] flex flex-col">
            <h1 className="text-center font-cofo text-[32px] md:text-5xl xl:text-[198px] leading-[96%]  uppercase tracking-[-0.09em] text-[#EDE8E5] xl:text-start xl:leading-[160px]">
              
              <span className="xl:hidden block">{t("reviews.title")} {t("reviews.heading")}</span>
              <span className="">
                {t("reviews.heading2")}
              </span>
            </h1>
            <div className="flex flex-col xl:flex-row gap-4 xl:gap-10 text-start xl:pb-10 items-center xl:items-start">
              <p className="uppercase text-xs sm:text-sm md:text-lg xl:text-[16px] xl:leading-[16px] text-[#E9E9E9] pt-4 px-4  xl:ps-[39px] xl:pt-[38px] text-center xl:text-left">
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
                {t("reviews.heading")}
              </span>
              <span className="relative left-[30px] md:left-[70px] xl:left-[105px]">
                {t("reviews.heading2")}
              </span>
            </h2>
          </div>
        </div>
      </div>
      <div className="relative w-full flex flex-col items-center h-[500px] md:h-[400px] overflow-x-hidden overflow-y-hidden">
        <div className="absolute w-[89.68%] border-x border-[#C7C7C7] h-[700px]  overflow-y-hidden"></div>

        <div className="absolute inset-0 flex justify-center ">
          <div className="relative w-[80.79%] ">
            <div className="absolute inset-0 w-full ">
              <ReviewSlider reviews={reviews} ref={sliderRef} />
            </div>
          </div>
        </div>
      </div>

      <div className="flex max-w-[89.58%] w-screen  border-x border-[#C7C7C7]  justify-between  z-50">
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
    </section>
  );
};
