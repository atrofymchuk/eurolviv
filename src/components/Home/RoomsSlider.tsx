import { Swiper as SwiperComponent, SwiperSlide } from "swiper/react";
import { forwardRef, useState } from "react";
import { Navigation, EffectCoverflow } from "swiper/modules";
import type { Swiper } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import { squareWhite, guestWhite } from "../../store/exportsIcons";
import cn from "classnames";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import './HallList.css'

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

export const RoomsSlider = forwardRef<Swiper, RoomsSliderProps>(
  ({ sliderProps }, ref) => {
    const [activeIndex, setActiveIndex] = useState(() => {
      if (window.innerWidth <= 640) {
        return 0;
      }
      return 1;
    });

    const { t } = useTranslation();

    return (
      <div className="overflow-hidden w-full h-full absolute flex items-center justify-center">
        <SwiperComponent
          modules={[Navigation, EffectCoverflow]}
          effect="coverflow"
          grabCursor={true}
          initialSlide={activeIndex}
          slidesOffsetBefore={0}
          centeredSlides={true}
          spaceBetween={10}
          slidesPerView={1}
          width={window.innerWidth <= 640 ? window.innerWidth : undefined}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 0,
            modifier: 0,
            slideShadows: false,
          }}
          className="2xl:h-[750px] xl:h-[650px] lg:h-[570px] md:h-[500px] sm:h-[370px] h-[407px] flex items-center" 
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          onSwiper={(swiper) => {
            if (ref) {
              if (typeof ref === 'function') {
                ref(swiper);
              } else {
                ref.current = swiper;
              }
            }
          }}
          breakpoints={{
            320: {
              slidesPerView: "auto",
              spaceBetween: 10,
              slidesOffsetBefore: 40,
              centeredSlides: false,
            },
            480: {
              slidesPerView: 1,
              spaceBetween: 5,
              centeredSlides: true,
            },
            640: { 
              slidesPerView: 1,
              spaceBetween: 5,
              centeredSlides: true,
            },
            768: { 
              spaceBetween: 10,
              centeredSlides: true,
            },
            1024: { 
              spaceBetween: 15,
              centeredSlides: true,
              slidesPerView: 2.5,
              initialSlide: 1,
            },
            1280: {
              slidesPerView: 3.2,
              spaceBetween: 10,
              slidesOffsetBefore: 0,
              centeredSlides: true,
              initialSlide: 1,
            },
            1536: { 
              slidesPerView: 3.4,
              spaceBetween: 40,
              slidesOffsetBefore: -40,
              centeredSlides: true,
              initialSlide: 1,
            }
          }}
        >
          {sliderProps.map((el, index) => {
            const isActive = index === activeIndex;

            return (
              <SwiperSlide key={index} className="h-full flex items-center justify-center">
                <div className="flex flex-col items-center w-full h-auto">
                  <div className={cn(
                    "transition-all duration-500",  
                    {
                      "2xl:w-[30.7vw] xl:w-[32vw] lg:w-[34vw] md:w-[38vw] w-full ": isActive,
                      "2xl:w-[24.7vw] xl:w-[28vw] lg:w-[30vw] md:w-[34vw] w-full ": !isActive
                    }
                  )}>
                    <img 
                      loading="lazy"
                      src={el.src}
                      style={{
                        objectFit: "cover",
                        transition: "transform 0.7s ease-in-out",
                        width: "100% !important",
                      }}
                      alt={`room ${el.title}`}
                      className={cn(
                        "object-cover transition-transform duration-700 w-full! ",
                        {
                          "2xl:h-[21.9vw] xl:h-[26vw] lg:h-[25vw] md:h-[28vw] h-[46vw]": isActive,
                          "2xl:h-[16.7vw] xl:h-[22vw] lg:h-[21vw] md:h-[24vw] h-[46vw]": !isActive
                        }
                      )}
                    />
                  </div>

                  <div className={cn(
                    "flex flex-col",
                    {
                      "2xl:w-[30.7vw] xl:w-[32vw] lg:w-[34vw] md:w-[38vw] w-[76.5vw]": isActive,
                      "2xl:w-[24.7vw] xl:w-[28vw] lg:w-[30vw] md:w-[34vw] w-[70.8vw]": !isActive
                    }
                  )}>
                    <div className="flex items-center justify-center 2xl:pt-[28px] xl:pt-[24px] lg:pt-[20px] md:pt-[16px] ">
                      <h4
                        className={cn(
                          "2xl:text-[32px] w-[90%] 2xl:w-3/4 lg:w-4/5 xl:text-[26px] lg:text-[22px] md:text-[18px] text-[18px] leading-[104%] tracking-[-0.05em] mt-[13px] lg:mt-0 uppercase font-cofo-medium text-[#EDE8E5] text-center transition-all duration-500"
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
                        <img loading="lazy"
                          src={squareWhite}
                          alt=""
                          className="w-[18px] h-[18px]"
                        />
                        <p className="uppercase text-[12px] lg:text-[14px] leading-[104%]">
                          {t("home.rooms.area")}: {el.area} M<sup>2</sup>
                        </p>
                      </div>
                      <div className="flex gap-[3px] lg:gap-2 items-center">
                        <img loading="lazy"
                          src={guestWhite}
                          alt=""
                          className="w-[18px] h-[18px]"
                        />
                        <p className="uppercase text-[12px] lg:text-[14px] leading-[104%]">
                          {t("home.rooms.guests")}: {el.guests}
                        </p>
                      </div>
                    </div>

                    <div className="lg:mt-[34px] mt-auto flex justify-center transition-all duration-500">
                      {(
                        <Link
                          to={`/rooms/${el.type}`}
                          className={cn(`border border-[#FFFFFF] uppercase text-[12px] text-center xl:text-[16px] font-cofo-medium w-fit lg:w-[170px] px-[20.5px] py-[10px] rounded-full text-[#FFFFFF] hover:text-black hover:bg-[#FFFFFF] transition-colors duration-300`,
                            {
                              "md:hidden": !isActive
                            }
                          )}
                        >
                          {t("buttons.details")}
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </SwiperComponent>
      </div>
    );
  }
);
