import { Swiper as SwiperComponent, SwiperSlide } from "swiper/react";
import {
  forwardRef,
  useState,
  useEffect,
  useMemo,
  useRef,
  useCallback,
} from "react";
import { Navigation, EffectCoverflow, Autoplay } from "swiper/modules";
import type { Swiper } from "swiper";
import type { SwiperOptions } from "swiper/types";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import { squareWhite, guestWhite } from "../../store/exportsIcons";
import cn from "classnames";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./HallList.css";
import { useCustomWidth } from "../Hooks/useCustomWidth";
import { useIsEnglish } from "../Hooks/useIsEnglish";

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
    const [activeSlide, setActiveSlide] = useState(1);
    const [slidesOffset, setSlidesOffset] = useState(100);
    const swiperRef = useRef<Swiper | null>(null);
    const [isPrev, setIsPrev] = useState(false);

    const { t } = useTranslation();
    const isCustomWidth = useCustomWidth(1530, 1700);
    const isEng = useIsEnglish();

    const handleSlideChange = useCallback((swiper: Swiper) => {
      requestAnimationFrame(() => {
        setActiveSlide(swiper.realIndex);
      });
    }, []);

    useEffect(() => {
      const preloadImages: HTMLImageElement[] = [];

      sliderProps.forEach((item) => {
        const img = new Image();
        img.src = item.src;
        preloadImages.push(img);
      });

      return () => {
        preloadImages.length = 0;
      };
    }, [sliderProps]);

    useEffect(() => {
      if (swiperRef.current && swiperRef.current.params && swiperRef.current.params.breakpoints) {
        if (swiperRef.current.params.breakpoints[1536]) {
          swiperRef.current.params.breakpoints[1536].slidesOffsetBefore = slidesOffset;
          swiperRef.current.update();
        }
      }
    }, [slidesOffset]);

    const handleSlideNextTransitionStart = useCallback(() => {
      if (window.innerWidth >= 1536) {
        setSlidesOffset(100);
        setIsPrev(false)
      }
    }, []);

    const handleSlidePrevTransitionStart = useCallback(() => {
      if (window.innerWidth >= 1536) {
        setSlidesOffset(50);
        setIsPrev(false);
      }
    }, []);

    const handleSlidePrevTransitionEnd = useCallback(() => {
      if (window.innerWidth >= 1536) {
        setSlidesOffset(50);
        setIsPrev(true);
      }
    }, []);



    const breakpoints = useMemo<Record<number, SwiperOptions>>(
      () => ({
        320: {
          slidesPerView: "auto" as const,
          spaceBetween: 15,
          initialSlide: 0,
          slidesOffsetBefore:30,
          centeredSlides: false,
        },
        480: {
          slidesPerView: 1,
          spaceBetween: 15,
          initialSlide: 0,
        },
        640: {
          slidesPerView: 1,
          spaceBetween: 5,
          centeredSlides: true,
        },
        768: {
          spaceBetween: 10,
          centeredSlides: true,
          slidesPerView: 1.5,
        },
        1024: {
          spaceBetween: 15,
          centeredSlides: true,
          slidesPerView: 2.5,
          initialSlide: 1,
        },
        1280: {
          slidesPerView: 3.2,
          spaceBetween: 30,
          slidesOffsetBefore: 140,
          centeredSlides: true,
          initialSlide: 1,
        },
        1536: {
          slidesPerView: 3.4,
          spaceBetween: 40,
          centeredSlides: true,
          slidesOffsetBefore: slidesOffset,
          initialSlide: 1,
        },
      }),
      [slidesOffset]
    );

    const coverflowEffect = useMemo(
      () => ({
        rotate: 0,
        stretch: 0,
        depth: 0,
        modifier: 0,
        slideShadows: false,
      }),
      []
    );

    const handleSwiperInit = useCallback(
      (swiper: Swiper) => {
        swiperRef.current = swiper;

        if (ref) {
          if (typeof ref === "function") {
            ref(swiper);
          } else {
            ref.current = swiper;
          }
        }
      },
      [ref]
    );

    const slides = useMemo(() => {
      return sliderProps.map((el, index) => {
        const isActive = index === activeSlide;

        return (
          <SwiperSlide
            key={index}
            className="h-full flex items-center justify-center"
          >
            <div
              className={`flex flex-col items-center w-full 2xl:min-h-[26.61vw] xl:min-h-[33.59vw] min-h-[89.87vw]`}
            >
              <div
                className={cn("transition-all  duration-500", {
                  "xl:ms-[2vw] 2xl:ms-[5.4vw]": !isPrev && activeSlide - 1 === index,
                  "opacity-0": activeSlide -2 === index,
                  "opacity-0 lg:opacity-100": activeSlide === 0 && index === sliderProps.length - 1,
                  "opacity-[0]": activeSlide === 0 && index === sliderProps.length - 2,
                  "xl:ms-[2vw] 2xl:ms-[2.41vw]":
                  !isPrev && activeSlide === 0 && index === sliderProps.length - 1,
                  "2xl:w-[31.7vw] xl:w-[30vw] lg:w-[34vw] md:w-[38vw] w-[69vw]":
                    isActive,
                  "2xl:w-[24.7vw] xl:w-[26vw] lg:w-[30vw] md:w-[34vw] w-[69vw]":
                    !isActive,
                })}
              >
                <img
                  loading={
                    isActive || Math.abs(index - activeSlide) <= 1
                      ? "eager"
                      : "lazy"
                  }
                  src={el.src}
                  style={{
                    objectFit: "cover",
                    transition: "transform 0.7s ease-in-out",
                    width: "100%",
                    willChange: "transform",
                    transform: `translateZ(0)`,
                  }}
                  alt={`room ${el.title}`}
                  className={cn(
                    "object-cover transition-transform duration-700 flex flex-col items-center justify-center",
                    {
                      "2xl:h-[21.9vw] xl:h-[25vw] lg:h-[25vw] md:h-[28vw] h-[46vw]":
                        isActive,
                      "2xl:h-[16.7vw] xl:h-[21vw] lg:h-[21vw] md:h-[24vw] h-[46vw]":
                        !isActive,
                    }
                  )}
                />
                 <div
                className={cn("flex flex-col h-full lg:h-auto", {
                  "2xl:w-[30.7vw] xl:w-[30vw] lg:w-[34vw] md:w-[38vw] w-[69vw]":
                    isActive,
                  "2xl:w-[25.7vw] xl:w-[26vw] lg:w-[30vw] md:w-[34vw] w-[69vw]":
                    !isActive,
                })}
              >
                <div
                  className={`flex items-center justify-center  2xl:pt-[28px] xl:pt-[16px] lg:pt-[20px] md:pt-[16px] 
                    `}
                >
                  <h4
                    className={cn(
                      "2xl:text-[1.667vw] lg:w-4/5  xl:text-[1.8vw] lg:text-[22px] md:text-[18px] text-[18px] leading-[104%] tracking-[-0.05em] mt-[13px] lg:mt-0 uppercase font-cofo-medium text-[#EDE8E5] text-center transition-all duration-500",
                      isEng
                        ? {
                            "2xl:w-[22vw] xl:w-[60%] w-[55%]":
                              t(el.title).length > 15,
                            "2xl:w-[35vw]! xl:w-[17vw]! w-[65%]":
                              t(el.title).length > 20 &&
                              t(el.title).length < 20,
                            " xl:w-[55%] w-[75%]":
                              t(el.title).length > 30 &&
                              t(el.title).length < 40,

                            "!w-[50%] lg:w-fit!": index === 1,
                          }
                        : {
                            " xl:w-[95%] w-[75%]": t(el.title).length > 15 && t(el.title).length < 20,
                            "2xl:w-[22vw]! xl:w-[26w]! w-[75%]":
                              t(el.title).length > 20 &&
                              t(el.title).length < 30,
                            " xl:w-[90%] w-[95%]":
                              t(el.title).length > 30 &&
                              t(el.title).length < 40,

                            "!w-[50%] lg:w-fit!": index === 1,
                          }
                    )}
                  >
                    {t(el.title)}
                  </h4>
                </div>

                <div
                  className={cn(
                    "flex flex-col items-center text-white lg:gap-y-2 gap-y-[6px] transition-all duration-500 text-[12px] lg:text-[16px]",
            
                  )}
                >
                  <div className="flex gap-[3px] lg:gap-2 items-center mt-[11px] lg:mt-[18px]">
                    <img
                      loading="lazy"
                      src={squareWhite}
                      alt=""
                      className="object-cover w-[18px] h-[18px]"
                    />
                    <p className="uppercase text-[12px] lg:text-[14px] leading-[104%]">
                      {t("home.rooms.area")}: {el.area} M<sup>2</sup>
                    </p>
                  </div>
                  <div className="flex gap-[3px] lg:gap-2 items-center">
                    <img
                      loading="lazy"
                      src={guestWhite}
                      alt=""
                      className="w-[18px] h-[18px]"
                    />
                    <p className="uppercase text-[12px] lg:text-[14px] leading-[104%]">
                      {t("home.rooms.guests")}: {el.guests}
                    </p>
                  </div>
                </div>

                <div className="lg:mt-[34px] mt-[22px] flex justify-center transition-all duration-500">
                  {
                    <Link
                      to={`/rooms/${el.type}`}
                      className={cn(
                        `border border-[#FFFFFF] uppercase text-[12px] xl:w-[150px] 2xl:w-[8.9vw] 2xl:h-[2.4vw] xl:h-[44px] flex items-center justify-center text-center xl:text-[16px] font-cofo-medium lg:w-[170px] w-[123px] h-[40px] rounded-full text-[#FFFFFF] hover:text-black hover:bg-[#FFFFFF] transition-colors duration-300`,
                        {
                          "md:hidden": !isActive,
                          "xl:w-[170px] xl:h-[47px]": isCustomWidth,
                        }
                      )}
                    >
                      {t("buttons.details")}
                    </Link>
                  }
                </div>
              </div>

              </div>

             
            </div>
          </SwiperSlide>
        );
      });
    }, [activeSlide, isCustomWidth, isEng, isPrev, sliderProps, t]);

    return (
      <div className="overflow-hidden w-full h-full absolute flex items-center justify-center hall-list">
        <SwiperComponent
          modules={[Navigation, EffectCoverflow, Autoplay]}
          effect="coverflow"
          loop={true}
          loopAdditionalSlides={2}
          grabCursor={true}
          initialSlide={1}
          slidesOffsetBefore={0}
          centeredSlides={true}
          spaceBetween={10}
          slidesPerView={1}
          coverflowEffect={coverflowEffect}
          className="2xl:h-[39.06vw] xl:h-[750px] lg:h-[570px] md:h-[500px] sm:h-[370px] h-[357px] flex items-center"
          onSlideChange={handleSlideChange}
          onSwiper={handleSwiperInit}
          onSlideNextTransitionStart={handleSlideNextTransitionStart}
          onSlidePrevTransitionStart={handleSlidePrevTransitionStart}
          onSlidePrevTransitionEnd={handleSlidePrevTransitionEnd}
          breakpoints={breakpoints}
          updateOnWindowResize
          watchSlidesProgress
          observer
          observeParents
          speed={600}
          simulateTouch={true}
          threshold={5}
          resistance={false}
          preventInteractionOnTransition={false}
        >
          {slides}
        </SwiperComponent>
      </div>
    );
  }
);
