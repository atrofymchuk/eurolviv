import { useTranslation } from "react-i18next";
import { SliderAbout } from "./SliderAbout";
import { RoomAbout } from "../../types/types";
import { memo } from "react";
import { guestBrown, houseBrown, squareBrown } from "../../store/exportsIcons";
import { AboutRoomTitle } from "./AboutRoomTitle";
import { BookLink } from "../Buttons/BookLink";

type RoomAboutToProps = {
  about?: RoomAbout;
  area?: number;
  guests?: string;
  title?: string;
  size?: string | undefined;
  swiperImagesStyle?: string;
  nameRoom?: string;
};

export const About = memo(
  ({ about, area, guests, swiperImagesStyle, nameRoom }: RoomAboutToProps) => {
    const { pOne, pTwo, swiperImages, rooms } = about || {};
    const { t } = useTranslation();
    if (
      !about ||
      !swiperImages ||
      swiperImages.length === 0 ||
      !pOne ||
      !pTwo ||
      !nameRoom
    )
      return null;
    return (
      <div>
        <div className="grid md:grid-cols-[20.47%_42.66%_36.88%]   grid-cols-[10.67%_78.67%_10.67%] items-center justify-center 2xl:items-start 2xl:justify-normal  md:max-w-full mx-auto md:mx-0">
          <div className="2xl:h-[109px] border-x md:border-x-0 border-b md:border-b-0 md:border-e  w-full h-[109px] border-[#C7C7C7] order-1 md:order-none" />
          <div className="2xl:h-[109px] border-x md:border-x-0 border-b md:border-b-0  md:border-e  w-full h-[109px] border-[#C7C7C7] order-3 md:order-none" />
          <div className="2xl:h-[109px] border-x md:hidden md:border-x-0 md:border-e w-full h-[109px] border-[#C7C7C7] order-5 md:order-none" />
          <div className="2xl:h-[109px] border-x md:border-x-0 md:border-e  w-full h-[109px] border-[#C7C7C7] order-6 md:order-none " />
          <div
            className=" h-full border-t 2xl:h-[14rem] xl:h-[10rem]  md:border-e border-b md:border-b-0 border-[#C7C7C7] flex flex-col justify-end md:justify-start  p-2.5 2xl:p-0
          2xl:items-center order-2 md:order-none "
          >
            <div className="  text-[#8C331B] ">
              <div className="2xl:space-y-1.5 2xl:pt-[2.8rem] lg:pt-[1.4rem] ">
                <p className="flex uppercase 2xl:text-[20px] lg:text-[14px] xl:text-[18px] text-[12px] 2xl:leading-[25.2px] leading-[15px] items-center   ">
                  <img
                    src={houseBrown}
                    alt="houseicon"
                    className="pe-2 w-[22px] h-[22px] 2xl:w-fit"
                  />
                  {t("room.about.area")}:
                  <span className="font-cofo-medium">&nbsp;{area} М²</span>
                </p>
                <p className="flex uppercase 2xl:text-[20px] lg:text-[14px] xl:text-[18px] text-[12px] 2xl:leading-[25.2px] leading-[15px] items-center ">
                  <img
                    src={squareBrown}
                    alt="houseicon"
                    className="pe-2 w-[22px] h-[22px] 2xl:w-fit"
                  />
                  {t("room.about.count")}:
                  <span className="font-cofo-medium">&nbsp;{rooms}</span>
                </p>
                <p className="flex uppercase 2xl:text-[20px] lg:text-[14px] xl:text-[18px] text-[12px] 2xl:leading-[25.2px] leading-[15px] items-center">
                  <img
                    src={guestBrown}
                    alt="houseicon"
                    className="pe-2 w-[22px] h-[22px] 2xl:w-fit"
                  />
                  {t("room.about.guests")}:
                  <span className="font-cofo-medium">&nbsp;{guests}</span>
                </p>
              </div>
            </div>
          </div>

          <div className="flex   order-5 md:order-none h-full w-full">
            <AboutRoomTitle nameRoom={nameRoom} />
          </div>

          <div className=" md:border-t border-x md:border-x-0 h-full border-[#C7C7C7] order-8 hidden md:block"></div>
        </div>

        <div
          className="grid  
 md:max-w-full mx-auto md:mx-0
        grid-cols-1  md:grid-cols-[63.13%_36.88%]

        h-auto"
        >
          <div className="md:w-full border-[#C7C7C7] md:border-t w-screen  ">
            <SliderAbout
              imageSlider={swiperImages}
              swiperImagesStyle={swiperImagesStyle}
            />
          </div>

          <div
            className="flex flex-col xl:items-center justify-center 
          md:border-t  border-[#C7C7C7]  border-e md:border-e border-x md:border-x-0  
          pt-9 md:py-0 md:max-w-full
                  max-w-[79.5%] mx-auto md:mx-0
          "
          >
            <div
              className="flex flex-col 
            gap-4 sm:gap-5 md:gap-6 lg:gap-7 xl:gap-[24px]
            px-4 sm:px-6 md:px-4 lg:pe-[40px] lg:ps-[20px] 2xl:ps-11 2xl:pe-[120px] xl:ps-8 xl:pe-[70px]"
            >
              <p
                className="text-[12px] sm:text-[14px] md:text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px]
              leading-[1.2] sm:leading-[1.3] md:leading-[1.4] lg:leading-[1.5] xl:leading-[24px]
              tracking-[-0.02em] sm:tracking-[-0.03em] xl:tracking-[-0.04em]
              text-[#8C331B] uppercase"
              >
                {t(pOne)}
              </p>

              <p
                className="text-[12px] sm:text-[14px] md:text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px]
              leading-[1.2] sm:leading-[1.3] md:leading-[1.4] lg:leading-[1.5] xl:leading-[24px]
              tracking-[-0.02em] sm:tracking-[-0.03em] xl:tracking-[-0.04em]
              text-[#444444] uppercase"
              >
                {t(pTwo)}
              </p>

              <BookLink
                to={"/booking"}
                className="uppercase bg-[#8C331B] text-white w-fit 2xl:mt-[70px] xl:mt-[50px] mt-[69px] mb-[28px] md:mb-0
            "
              >
                {t("buttons.bookRoomArr.0")}{" "}
                <span className="hidden md:inline">
                  {t("buttons.bookRoomArr.1")}
                </span>
              </BookLink>
            </div>
          </div>
        </div>
        <div className="flex flex-col ps-[7.45%]">
          <div
            className="md:grid w-full  max-w-[90.83%]
          grid-cols-1 
          md:grid-cols-[35.58%_30.61%_33.76%]
          border-s border-[#C7C7C7]
          hidden 
          "
          >
            <div className="h-[84px]  w-full  border-[#C7C7C7]"></div>
            <div className="h-[84px] border-x w-full   border-[#C7C7C7]"></div>
            <div className="h-[84px]    border-[#C7C7C7] w-full   "></div>
          </div>
        </div>
      </div>
    );
  }
);
