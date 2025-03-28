import Slider from "react-slick";
import { forwardRef, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRoomStore } from "../../store/useRoomsStore";
import { squareWhite, guestWhite } from "../../store/exportsIcons";
import cn from "classnames";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { InViewWrapper } from "../utils/InViewWrapper";
type RoomSSliderProps = {
  ref: Slider | null;
};

export const RoomsSlider = forwardRef<Slider, RoomSSliderProps>((_, ref) => {
  const { rooms } = useRoomStore();
  const [currentSlide, setCurrentSlide] = useState(1);
  const { t } = useTranslation();

  const settings = {
    infinite: true,
    speed: 800,
    arrows: false,
    slidesToShow: 3.2,
    slidesToScroll: 1,
    centerMode: true,
    initialSlide: 1,
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
          slidesToShow: 1,
          centerPadding: "15%",
        },
      },
      {
        breakpoint: 640, // sm
        settings: {
          slidesToShow: 1,
          centerPadding: "10%",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerPadding: "7%",
        },
      },
    ],
  };

  return (
    <div className=" overflow-visible 2xl:w-[97%] xl:ms-[70px] ">
      <Slider {...settings} className="overflow-visible" ref={ref}>
        {rooms.map((el, index) => {
          const isActive = index === currentSlide;

          return (
            <div
              key={index}
              className={cn(
                "transition-all duration-500 ease-in-out px-3",
                "flex flex-col items-center justify-between",
                {
                  "z-10": isActive,
                  "opacity-85": !isActive,
                }
              )}
            >
              <div
                className={cn(
                  "overflow-hidden h-full transition-all duration-500",
                  {
                    "2xl:h-[420px] xl:h-[370px] lg:h-[320px] md:h-[290px] sm:h-[250px] h-[220px] ":
                      isActive,
                    "2xl:h-[320px] xl:h-[290px] lg:h-[260px] md:h-[230px] sm:h-[210px] h-[190px] ":
                      !isActive,
                  }
                )}
              >
                <InViewWrapper>
                  <img
                    src={el.header.previewImage}
                    alt={`${t(el.title)}`}
                    className={cn(
                      "object-cover xl:w-full h-full transition-transform duration-700 md:max-h-full max-h-[200px] w-full",
                      { "scale-110": isActive }
                    )}
                  />
                </InViewWrapper>
              </div>

              <div className="mt-4 px-2 w-full">
                <h4
                  className={cn(
                    "uppercase font-cofo-medium text-[#EDE8E5] text-center line-clamp-2 transition-all duration-500",
                    {
                      "2xl:text-[28px] xl:text-[24px] lg:text-[22px] md:text-[20px] text-[18px]":
                        isActive,
                      "2xl:text-[22px] xl:text-[20px] lg:text-[18px] md:text-[16px] text-[14px]":
                        !isActive,
                    }
                  )}
                >
                  {t(el.title)}
                </h4>

                <div
                  className={cn(
                    "flex flex-col items-center text-white gap-y-2 transition-all duration-500",
                    {
                      "pt-[14px]": isActive,
                      "pt-[8px]": !isActive,
                    }
                  )}
                >
                  <div className="flex gap-2 items-center">
                    <img
                      src={squareWhite}
                      alt=""
                      className="w-[18px] h-[18px]"
                    />
                    <p className="uppercase text-[14px] leading-[20px]">
                      {t("home.rooms.area")}: {el.area} M<sup>2</sup>
                    </p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <img
                      src={guestWhite}
                      alt=""
                      className="w-[18px] h-[18px]"
                    />
                    <p className="uppercase text-[14px] leading-[20px]">
                      {t("home.rooms.guests")}: {el.guests}
                    </p>
                  </div>
                </div>

                {isActive && (
                  <div className="mt-5 flex justify-center transition-all duration-500">
                    <Link
                      to={`/rooms/${el.type}`}
                      className="border border-[#FFFFFF] uppercase text-[12px] xl:text-[16px] font-cofo-medium w-fit px-[20.5px] py-[10px] xl:px-[30.5px] xl:py-[12px] rounded-full text-[#FFFFFF] hover:text-black hover:bg-[#FFFFFF] transition-colors duration-300"
                    >
                      {t("buttons.details")}
                    </Link>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
});
