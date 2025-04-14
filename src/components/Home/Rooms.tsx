import { Link } from "react-router-dom";
import { RoomsSlider } from "./RoomsSlider";
import { useRef } from "react";
import type { Swiper } from "swiper";
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";
import { useTranslation } from "react-i18next";
import { useRoomStore } from "../../store/useRoomsStore";
import cn from "classnames";

export const RoomsHome = () => {
  const sliderRef = useRef<Swiper | null>(null);
  const { t, i18n } = useTranslation();
  const isEng = i18n.language === "en";
  const { sliderProps } = useRoomStore();

  return (
    <div className="flex flex-col bg-[#A47762] relative items-center md:items-stretch overflow-x-hidden overflow-y-hidden ">
      <div className="grid z-0 absolute md:grid-cols-[5.2%_19%_34.7%_25.8%] grid-cols-[89.07%]  lg:h-[1580px] md:h-[1000px] sm:h-[797px] h-[807px] md:items-start justify-center md:justify-start w-full  ">
        <div className="w-full h-full border-[#C29986] hidden md:block"></div>
        <div className="w-full h-full border-e border-x md:border-x-0 border-[#C29986] "></div>
        <div className="w-full h-full border-x border-[#C29986] hidden md:block"></div>
        <div className="w-full h-full border-e border-[#C29986] hidden md:block"></div>
      </div>

      <div className="w-full lg:h-[11.5vw] h-[80vw] md:h-[34.18vw] grid-cols-[89.07%] grid lg:flex flex-col justify-center 2xl:mt-[11.51vw] xl:mt-[9.38vw] lg:mt-[9.72vw]">
        <h1
          className="text-center lg:ps-[4.1vw] flex-col lg:flex-row flex lg:justify-between justify-center
          items-center lg:items-start
            lg:w-[calc(100vw-14.3vw)] 
            w-full
            text-[12.8vw] sm:text-[10.42vw] md:text-[9.77vw] lg:text-[8.33vw] xl:text-[7.81vw] 2xl:text-[10.31vw]
            uppercase tracking-[-0.1em] 
            text-[#EDE8E5] md:text-center lg:text-start xl:text-start 
            leading-[81.5%] 
            2xl:gap-x-[2.6vw]
            gap-y-[8vw]
            lg:gap-y-0
            mt-[17.33vw] 
            lg:mt-0
            z-20"
        >
          <span className="tracking-[-0.09em] text-[12.8vw] sm:text-[10.42vw] md:text-[9.77vw] lg:text-[11vw] xl:text-[10.81vw] 2xl:text-[10.31vw]">
            {t("home.rooms.rooms")}
          </span>

          <span className="flex lg:flex-col text-[6.4vw] sm:text-[5.21vw] md:text-[4.88vw] lg:text-[5vw] xl:text-[5.17vw] 2xl:text-[5.21vw] tracking-[-0.09em] gap-y-[0.36vw] leading-[81%] uppercase">
            <span className="leading-[81%] w-auto">
              {t("home.rooms.forWhat.0")} &nbsp;
            </span>
            <span className="leading-[81%] xl:ps-[10.88vw] 2xl:ps-[10.68vw] lg:ps-[11vw]  w-auto">
              {t("home.rooms.forWhat.1")}
            </span>
          </span>
        </h1>
        <div className="flex flex-col w-full h-full items-center lg:items-start lg:justify-center ">
          <div className="z-4 ">
            <div className="flex md:flex-row lg:ps-[5.56vw] md:ps-[5.86vw] flex-col text-start items-center md:items-start 2xl:items-start relative 2xl:h-[10.42vw] xl:h-[9.9vw] lg:h-[12.5vw] md:h-[14.65vw] sm:h-[16.93vw]">
              <div className="md:absolute flex md:flex-row items-center flex-col pt-[4.27vw] md:pt-[3.42vw] xl:pt-[1.8vw]  space-y-[8vw] md:space-y-0 text-center md:text-start md:gap-[1.95vw] xl:gap-x-[3.13vw] md:hidden lg:flex">
                <p
                  className="uppercase 2xl:w-[22.55vw] xl:w-[20.83vw] px-[6.4vw] lg:w-[22.92vw] md:w-[34.18vw] sm:w-[37.11vw] lg:px-0 
                  text-[3.2vw] sm:text-[2.08vw] md:text-[1.27vw] lg:text-[0.97vw] xl:text-[0.78vw] 2xl:text-[0.83vw]
                  text-[#E9E9E9]"
                >
                  {t("home.rooms.desc")}
                </p>
                <div className="flex justify-center items-center">
                  <Link
                    to="/rooms"
                    className={cn(
                      `uppercase text-center text-[#242425] font-cofo-medium hover:bg-black hover:text-[#EDE8E5]
                       bg-[#EDE8E5] whitespace-nowrap 
                       px-[3.87vw] py-[1.2vw]
                       h-[11.2vw] w-[47.47vw]
                       md:w-[14.5vw]
                       md:h-[3.1vw]
                       max-w-[234px]
                       lg:px-[1.39vw] lg:py-[0.83vw]
                       2xl:h-[2.4vw] 2xl:w-[12.25vw]
                       xl:w-[14.81vw]
                       xl:h-[3vw]
                       2xl:text-[0.83vw]
                       text-[3.2vw] lg:text-[1.04vw]
                       rounded-full hover:cursor-pointer
                       flex items-center justify-center`,
                      {
                        "lg:w-[11.81vw]": isEng,
                      }
                    )}
                  >
                    {t("buttons.viewRooms")}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:flex"></div>
      </div>

      <div className="max-w-screen relative z-0 mb-[19vw] md:mb-0 mt-[17vw] md:mt-[0] xl:mb-[1.56vw] w-full  md:h-[500px]  h-[350px] ">
        <div className="z-10 absolute  2xl:h-[750px] xl:h-[750px] lg:h-[570px] md:h-[500px] sm:h-[470px] h-[457px] w-full  ">
          <RoomsSlider ref={sliderRef} sliderProps={sliderProps} />
        </div>
      </div>

      <div className="h-[17.07vw] w-full hidden md:flex">
        <div className="hidden md:flex w-full justify-between 2xl:translate-y-[.0vw] xl:-translate-y-[0.73vw] lg:-translate-y-[1.94vw] md:-translate-y-[2.93vw]">
          <button
            className="2xl:w-[3.23vw] 2xl:h-[3.23vw] xl:w-[3.02vw] xl:h-[3.02vw] lg:w-[3.75vw] lg:h-[3.75vw] md:w-[4.69vw] md:h-[4.69vw] flex items-center justify-center hover:text-[#8C331B] border hover:border-[#8C331B] rounded-full z-20 hover:bg-white text-white mt-[6.93vw] 2xl:ms-[3.8vw] md:ms-[5.86vw] lg:ms-[4.17vw] 2xl:mb-[2.29vw] xl:mb-[2.08vw] lg:mb-[2.5vw]"
            onClick={() => sliderRef.current?.slidePrev()}
          >
            <HiArrowLongLeft className="2xl:w-[1.67vw] 2xl:h-[1.67vw] xl:w-[1.56vw] xl:h-[1.56vw] lg:w-[1.94vw] lg:h-[1.94vw]" />
          </button>

          <button
            className="2xl:w-[3.23vw] 2xl:h-[3.23vw] xl:w-[3.02vw] xl:h-[3.02vw] lg:w-[3.75vw] lg:h-[3.75vw] md:w-[4.69vw] md:h-[4.69vw] flex items-center justify-center hover:text-[#8C331B] border hover:border-[#8C331B] rounded-full z-20 hover:bg-white text-white mt-[6.93vw] 2xl:me-[5.21vw] md:me-[5.86vw] xl:me-[4.69vw] lg:me-[5.56vw] 2xl:mb-[2.29vw] xl:mb-[2.08vw] lg:mb-[2.5vw]"
            onClick={() => sliderRef.current?.slideNext()}
          >
            <HiArrowLongRight className="2xl:w-[1.67vw] 2xl:h-[1.67vw] xl:w-[1.56vw] xl:h-[1.56vw] lg:w-[1.94vw] lg:h-[1.94vw]" />
          </button>
        </div>
      </div>
    </div>
  );
};
