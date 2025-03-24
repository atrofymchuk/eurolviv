import { memo, useRef, useCallback, useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { AboutSliderProps } from "../../types/types";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import { InViewWrapper } from "../utils/InViewWrapper";

export const SliderAbout: React.FC<AboutSliderProps> = memo(
  ({ imageSlider, swiperImagesStyle }) => {
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
          className="relative z-10 
          h-[245px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[490px] 2xl:h-[522px] "
        >
          <Swiper
            modules={swiperModules}
            className="mySwiper 
            h-[245px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[490px] 2xl:h-[522px]"
            loop
            onSwiper={(swiper) => (swiperRef.current = swiper)}
          >
            {imageSlider.map((img) => (
              <SwiperSlide
                key={img}
                className="relative 
                w-full flex items-center justify-center h-full"
              >
                <InViewWrapper>
                  <img
                    src={img}
                    alt="room image"
                    className={`${swiperImagesStyle} w-full h-full object-cover`}
                  />
                </InViewWrapper>
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            className="w-[35px] h-[35px] lg:w-[60px] lg:h-[60px] flex items-center justify-center 
                     left-5 lg:left-5 z-10 hover:text-[#8C331B]  absolute top-1/2 hover:bg-white text-white 
                     transform -translate-y-1/2 rounded-full border border-white transition"
            onClick={handlePrev}
          >
            <IoIosArrowRoundBack className="w-3/4 h-3/4" />
          </button>

          <button
            className="w-[35px] h-[35px] lg:w-[60px] lg:h-[60px] flex items-center justify-center 
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
