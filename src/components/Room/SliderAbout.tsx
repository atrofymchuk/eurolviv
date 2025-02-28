import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import { AboutSliderProps } from "../../store/types";
import { useState } from "react";

export const SliderAbout: React.FC<AboutSliderProps> = ({
  imageSlider,
  swiperImagesStyle,
}) => {
  const [, setSwiperInstance] = useState<SwiperType | null>(null);

  return (
    <div>
      <div
        className="relative z-10 
        h-[245px] sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-[550px] 2xl:h-[623px] 
        w-screen"
      >
        <Swiper
          modules={[Navigation]}
          className="mySwiper 
          h-[245px] sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-[550px] 2xl:h-[623px] 
          w-screen"
          loop
          onSwiper={(swiper) => setSwiperInstance(swiper)}
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
      </div>

    </div>
  );
};
