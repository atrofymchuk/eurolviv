import { useRef } from "react";
import ReviewSlider from "./ReviewSlider";
import Slider from "react-slick";
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";
import { useTranslation } from "react-i18next";
import { usePagesInfoStore } from "../../store/usePagesInfoStore";
import { Link } from "react-router-dom";
import cn from "classnames";
export const Rewies = () => {
  const sliderRef = useRef<Slider | null>(null);
  const { t,i18n } = useTranslation();
  const { reviews } = usePagesInfoStore();
  const isEng = i18n.language === "en";
  
  return (
    <section className="bg-[#A47762] flex-col   flex justify-center items-center  ">
      <div className="flex flex-col items-center border-x border-[#C7C7C7]  overflow-x-hidden xl:px-0 w-[89.68%] ">
        <div className="grid xl:grid-cols-2 grid-cols-1 overflow-hidden  w-full lg:pe-4">
          <div className="xl:col-span-1 pt-[58px] xl:pt-[109px] flex flex-col">
            <h1 className="text-center font-cofo    uppercase tracking-[-0.09em] text-[#EDE8E5]  xl:leading-[160px]">
              <span className="xl:hidden block text-[32px] lg:text-[80px] leading-[96%]">
                {t("reviews.title")} {t("reviews.heading")}
              </span>
              <span className="hidden xl:block text-[32px] xl:text-[150px] text-start md:ps-[25px] tracking-[-0.09em] leading-[81%] 2xl:text-[198px]">
                {t("reviews.title")}
              </span>
              <span className="xl:hidden block lg:text-[80px]  text-[32px] leading-[96%]">
                {t("reviews.heading2")}
              </span>
            </h1>
            <div className="flex flex-col xl:flex-row gap-4 xl:gap-[24px] text-start  items-center xl:mt-[38px] ">
                <p className="uppercase text-xs sm:text-sm md:text-lg xl:text-[16px] xl:leading-[16px] text-[#E9E9E9] pt-4  2xl:w-[444px]  xl:ps-[39px]  text-center xl:text-left">
                {t("reviews.desc")}
              </p>

              <Link
                to={"/booking"}
                className="uppercase text-[#A47762] lg:w-[234px] text-center mt-[30px] lg:mt-0 font-cofo-medium whitespace-nowrap bg-[#EDE8E5] border-[#EDE8E5] border hover:bg-[#A47762] hover:text-[#EDE8E5] w-fit h-fit  xl:px-[22.5px] xl:py-[10px] py-[10px] px-[14px] rounded-full -0 hover:cursor-pointer text-[12px] xl:text-[16px]"
              >
                {t("buttons.bookRoom")}
              </Link>
            </div>
          </div>

          <div className="xl:col-span-1 xl:flex flex-col justify-center items-center hidden ">
            <h2 className="uppercase text-5xl md:text-[80px] xl:text-[100px] xl:leading-[81px]  xl:tracking-[-0.09em] text-[#EDE8E5] flex flex-col">
              <span className={cn(`relative left-[-30px] md:left-[-70px] xl:left-[-105px] 2xl:left-[0px]`, {
                'hidden': isEng
              })}>
                {t("reviews.heading")}
              </span>
              <span className="relative left-[30px] md:left-[70px] xl:left-[105px] 2xl:left-[220px]">
                {t("reviews.reviewAbout")}
              </span>
            </h2>
          </div>
        </div>
      </div>
      <div className="relative w-full flex flex-col items-center h-[500px] md:h-[470px] lg:h-[400px]  overflow-x-hidden overflow-y-hidden">
        <div className="absolute w-[89.68%] border-x border-[#C7C7C7] h-[700px]  overflow-y-hidden"></div>

        <div className="absolute inset-0 flex justify-center ">
          <div className="relative w-[80.79%] md:w-[85.79%]">
              <ReviewSlider reviews={reviews} ref={sliderRef} />
          </div>
        </div>
      </div>

      <div className="flex max-w-[89.7%] w-screen  border-x border-[#C7C7C7]  justify-between  z-10">
        <button
          className="lg:w-[62px] lg:h-[62px] w-[30px] h-[30px] md:ms-20 sm:ms-20 ms-5  flex items-center justify-center hover:text-[#8C331B] border hover:border-[#8C331B] rounded-full z-20 hover:bg-white text-white mt-[26px]  mb-[44px] lg:ms-[39px] lg:mt-2 lg:mb-[72px]"
          onClick={() => sliderRef.current?.slickPrev()}
        >
          <HiArrowLongLeft className="lg:w-[32px] lg:h-[32px] w-[24px] h-[24px]" />
        </button>

        <button
          className="lg:w-[62px] lg:h-[62px] w-[30px] h-[30px] md:me-20 sm:me-20 me-5 flex items-center justify-center hover:text-[#8C331B] border hover:border-[#8C331B] rounded-full z-20 hover:bg-white text-white mt-[26px]  mb-[44px] lg:mb-[72px] lg:mt-2 lg:me-[39px]"
          onClick={() => sliderRef.current?.slickNext()}
        >
          <HiArrowLongRight className="lg:w-[32px] lg:h-[32px] w-[24px] h-[24px]" />
        </button>
      </div>
    </section>
  );
};
