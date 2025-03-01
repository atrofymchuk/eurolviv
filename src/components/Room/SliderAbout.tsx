import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { AboutSliderProps } from "../../store/types";
import { useRef } from "react";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";

export const SliderAbout: React.FC<AboutSliderProps> = ({
  imageSlider,
  swiperImagesStyle,
}) => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div>
      <div
        className="relative z-10 
        h-[245px] sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-[550px] 2xl:h-[623px]"
      >
        <Swiper
          modules={[Navigation]}
          className="mySwiper 
          h-[245px] sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-[550px] 2xl:h-[623px]"
          loop
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {imageSlider.map((img) => (
            <SwiperSlide
              key={img}
              className="relative 
              h-[245px] sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-[550px] 2xl:h-[623px] 
              w-full 
              flex items-center justify-center"
            >
              <img
                src={img}
                alt="room image"
                className={`${swiperImagesStyle} 
                w-full h-full 
                object-cover`}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          className="w-[35px] h-[35px] lg:w-[60px] lg:h-[60px] flex items-center justify-center 
                     left-5 lg:left-5 z-10 text-[#8C331B] bg-white absolute top-1/2  hover:bg-[#8C331B] hover:text-white border-none
                     transform -translate-y-1/2 rounded-full border border-white transition"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <IoIosArrowRoundBack className="w-3/4 h-3/4" />
        </button>

        <button
          className="w-[35px] h-[35px] lg:w-[60px] lg:h-[60px] flex items-center justify-center 
                     right-5 lg:right-5 z-10 text-[#8C331B] bg-white absolute top-1/2  hover:bg-[#8C331B] hover:text-white border-none
                     transform -translate-y-1/2 rounded-full border border-white transition"
          onClick={() => swiperRef.current?.slideNext()}
        >
          <IoIosArrowRoundForward className="w-3/4 h-3/4" />
        </button>
      </div>
    </div>
  );
};