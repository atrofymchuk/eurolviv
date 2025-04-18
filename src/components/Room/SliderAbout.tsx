import { memo, useRef, useCallback, useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { AboutSliderProps } from "../../types/types";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import { InViewWrapper } from "../utils/InViewWrapper";
import cn from "classnames";

export const SliderAbout: React.FC<AboutSliderProps> = memo(
  ({ imageSlider, swiperImagesStyle, isConference }) => {
    const swiperRef = useRef<SwiperType | null>(null);

    const swiperModules = useMemo(() => [Navigation], []);

    const handlePrev = useCallback(() => {
      swiperRef.current?.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
      swiperRef.current?.slideNext();
    }, []);
 

    return (
      <div>
        <div
          className={cn(`relative z-10 
          ${
            isConference
              ? "h-full "
              : "h-[245px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[450px] 2xl:h-[27.19vw]"
          }`)}
        >
          <Swiper
            modules={swiperModules}
            className={`mySwiper slider-about
            ${
              isConference
                ? "h-[245px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[520px] 2xl:h-[33vw]"
                : "h-[245px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[450px] 2xl:h-[27.19vw]"
            }`}
            loop
            slidesPerView={1}
            spaceBetween={0}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
          >
            {imageSlider.map((img) => (
              <SwiperSlide
                key={img}
                className="relative 
                w-full flex items-center justify-center h-full"
              >
                <InViewWrapper>
                  <img loading="lazy"
                    src={img}
                    alt="room image"
                    className={cn(
                      `${swiperImagesStyle} w-full h-full object`
                    )}
                  />
                </InViewWrapper>
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            className="w-[35px] h-[35px] lg:w-[46px] lg:h-[46px]  2xl:w-[60px] 2xl:h-[60px] xl:w-[52px] xl:h-[52px] flex items-center justify-center 2xl:left-[3.9vw] xl:left-[3.9vw]
                     left-5 lg:left-5 z-10 hover:text-[#8C331B]  absolute top-1/2 hover:bg-white text-white 
                     transform -translate-y-1/2 rounded-full border border-white transition"
            onClick={handlePrev}
          >
            <IoIosArrowRoundBack className="w-3/4 h-3/4" />
          </button>

          <button
            className="w-[35px] h-[35px] lg:w-[46px] lg:h-[46px] 2xl:w-[60px] 2xl:h-[60px] xl:w-[52px] xl:h-[52px] flex items-center justify-center 2xl:right-[2.2vw] xl:right-[1.7vw]
                     right-5 lg:right-5 z-10 hover:text-[#8C331B]  absolute top-1/2 hover:bg-white text-white 
                     transform -translate-y-1/2 rounded-full border border-white transition"
            onClick={handleNext}
          >
            <IoIosArrowRoundForward className="w-3/4 h-3/4" />
          </button>
        </div>
      </div>
    );
  }
);
