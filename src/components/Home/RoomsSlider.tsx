import Slider from "react-slick";
import { forwardRef, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { squareWhite, guestWhite } from "../../store/exportsIcons";
import cn from "classnames";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { InViewWrapper } from "../utils/InViewWrapper";

type Room = {
  title: string;
  area: number;
  guests: string;
  type: string;
  src: string;
};

type RoomsSliderProps = {
  sliderProps: Room[];
};

export const RoomsSlider = forwardRef<Slider, RoomsSliderProps>(
  ({ sliderProps }, ref) => {
    const [currentSlide, setCurrentSlide] = useState(() => {
      if (window.innerWidth <= 640) {
        return 0;
      }
      return 1;
    });

    const { t } = useTranslation();

    const defaultSettings = {
      infinite: true,
      speed: 800,
      arrows: false,
      slidesToShow: 3.2,
      slidesToScroll: 1,
      centerMode: true,
      initialSlide: currentSlide,
      centerPadding: "0",
      beforeChange: (_: number, newIndex: number) => setCurrentSlide(newIndex),
      responsive: [
        {
          breakpoint: 1280, // xl
          settings: {
            slidesToShow: 1.4,
            centerPadding: "25%",
          },
        },
        {
          breakpoint: 1024, // lg
          settings: {
            slidesToShow: 1.2,
            centerPadding: "20%",
          },
        },
        {
          breakpoint: 768, // md
          settings: {
            slidesToShow: 1.2,
            centerPadding: "12%",
            variableWidth: true,
            loop: false,
          },
        },
        {
          breakpoint: 640, // sm
          settings: {
            slidesToShow: 1,
            centerPadding: "5%",
            centerMode: false,
            infinite: false,
            variableWidth: true,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            centerPadding: "0",
            centerMode: false,
            infinite: false,
            variableWidth: true,
          },
        },
      ],
    };

    const settings = { ...defaultSettings };

    return (
      <div className="overflow-visible 2xl:w-[97%] xl:ms-[70px]  ms-[calc(5.93%)] h-full">
        <Slider
          {...settings}
          className="overflow-visible flex items-center justify-center home-room-slider"
          ref={ref}
        >
          {sliderProps.map((el, index) => {
            const isActive = index === currentSlide;

            return (
              <div
                key={index}
                className={cn(
                  " px-3",
                  "flex  items-center justify-center self-center place-content-center transition-all duration-500 h-full",
                  {
                    "z-10 2xl:h-[800px] xl:h-[650px] lg:h-[600px] h-fit":
                      isActive,
                    "2xl:h-[780px] xl:h-[670px] lg:h-[600px] md:h-[400px] h-fit":
                      !isActive,
                  }
                )}
              >
                <div
                  className={cn(
                    "overflow-hidden transition-all duration-500   md:w-full   "
                  )}
                >
                  <InViewWrapper>
                    <img
                      src={el.src}
                      alt={`room $`}
                      className={cn(
                        "object-cover  transition-transform duration-700  h-[168px] md:w-full  w-[259px]",
                        { "": isActive },
                        {
                          "2xl:h-[420px] xl:h-[370px] lg:h-[320px] md:h-[290px] ":
                            isActive,
                          "2xl:h-[320px] xl:h-[290px] lg:h-[260px] md:h-[230px]  ":
                            !isActive,
                        }
                      )}
                    />
                  </InViewWrapper>
                </div>

                <div className=" lg:mt-[28px]  lg:w-full md:w-full w-[259px] flex flex-col h-[150px]">
                  <div className="flex items-center justify-center">
                    <h4
                      className={cn(
                        "2xl:text-[32px] 2xl:w-2/3 lg:w-4/5 xl:text-[26px] lg:text-[22px] md:text-[18px] text-[18px] leading-[104%] tracking-[-0.05em]  mt-[13px] lg:mt-0 uppercase font-cofo-medium text-[#EDE8E5] text-center transition-all duration-500"
                      )}
                    >
                      {t(el.title)}
                    </h4>
                  </div>

                  <div
                    className={cn(
                      "flex flex-col items-center text-white lg:gap-y-2 gap-y-[6px] transition-all duration-500 text-[12px] lg:text-[16px]"
                    )}
                  >
                    <div className="flex gap-[3px] lg:gap-2 items-center mt-[11px] lg:mt-[18px]">
                      <img
                        src={squareWhite}
                        alt=""
                        className="w-[18px] h-[18px]"
                      />
                      <p className="uppercase text-[12px] lg:text-[14px] leading-[104%]">
                        {t("home.rooms.area")}: {el.area} M<sup>2</sup>
                      </p>
                    </div>
                    <div className="flex gap-[3px] lg:gap-2 items-center">
                      <img
                        src={guestWhite}
                        alt=""
                        className="w-[18px] h-[18px]"
                      />
                      <p className="uppercase text-[12px] lg:text-[14px] leading-[104%]">
                        {t("home.rooms.guests")}: {el.guests}
                      </p>
                    </div>
                  </div>

                  <div className="lg:mt-[34px] mt-auto  flex justify-center transition-all duration-500">
                    {isActive && (
                      <Link
                        to={`/rooms/${el.type}`}
                        className="border border-[#FFFFFF] uppercase text-[12px] xl:text-[16px] font-cofo-medium w-fit lg:w-[170px] px-[20.5px] py-[10px]  rounded-full text-[#FFFFFF] hover:text-black hover:bg-[#FFFFFF] transition-colors duration-300"
                      >
                        {t("buttons.details")}
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
);
