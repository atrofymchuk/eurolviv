import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";


import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import { AboutSliderProps } from "../../store/types";
import { IoIosArrowRoundForward, IoIosArrowRoundBack  } from "react-icons/io";
import { useState } from "react";
export const SliderAbout: React.FC<AboutSliderProps> = ({ imageSlider,swiperImagesStyle }) => {
    const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  return (
    <div className="relative z-10 //lg:h-[623px] lg:h-full  w-screen  h-[245px]  lg:w-full">
      <Swiper
        modules={[Navigation]}
            className="mySwiper lg:h-full w-screen h-[245px] items-center  lg:w-full"
        loop
        onSwiper={(swiper)=>setSwiperInstance(swiper)}
      >
        {imageSlider.map((img) => (
          <SwiperSlide key={img} className="relative lg:h-full w-screen h-[245px]  lg:w-full items-center flex justify-center  ">
            <img
              src={img}
              alt="room image"
              className={`${swiperImagesStyle} lg:w-full absolute lg:h-full lg:object-cover   lg:scale-100 scale-100`}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <button
  onClick={() => swiperInstance?.slidePrev()}
  className="w-[35px] h-[35px] lg:w-[60px] lg:h-[60px] absolute left-5 lg:left-20 top-1/2 -translate-y-1/2 z-10 
  text-white hover:text-[#8C331B] hover:bg-white flex items-center justify-center rounded-full border border-white transition"
>
  <IoIosArrowRoundBack className="w-[35px] h-[35px] lg:w-[44px] lg:h-[44px]" />
</button>

<button
  onClick={() => swiperInstance?.slideNext()}
  className="w-[35px] h-[35px] lg:w-[60px] lg:h-[60px] absolute lg:right-20 right-5 top-1/2 -translate-y-1/2 z-10 
  text-white hover:text-[#8C331B] hover:bg-white flex items-center justify-center rounded-full border border-white transition"
>
  <IoIosArrowRoundForward className="w-[35px] h-[35px] lg:w-[44px] lg:h-[44px]" />
</button>


    </div>
  );
};
