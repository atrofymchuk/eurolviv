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
    <div className="relative z-10 lg:h-[523px]  w-screen  h-[245px]  lg:w-full">
      <Swiper
        modules={[Navigation]}
            className="mySwiper lg:h-[523px] w-screen h-[245px] items-center  lg:w-full"
        loop
        onSwiper={(swiper)=>setSwiperInstance(swiper)}
      >
        {imageSlider.map((img) => (
          <SwiperSlide key={img} className="relative lg:h-[523px] w-screen h-[245px]  lg:w-full items-center flex justify-center  ">
            <img
              src={img}
              alt="room image"
              className={`${swiperImagesStyle} lg:w-full absolute lg:h-full lg:object-cover   lg:scale-100 scale-100`}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <button onClick={()=>swiperInstance?.slidePrev()} className="w-[45px] h-[45px] lg:w-fit lg:h-fit absolute left-5 lg:left-20 top-1/2 -translate-y-1/2 z-10 text-white hover:text-[#8C331B] hover:bg-white p-2 rounded-full border border-white transition">
        <IoIosArrowRoundBack size={44} className="lg:w-full lg:h-full w-[28px] h-[28px]"/>
      </button>
      <button onClick={()=>swiperInstance?.slideNext()} className="w-[45px] h-[45px] lg:w-fit lg:h-fit absolute lg:right-20 right-5 top-1/2 -translate-y-1/2 z-10 text-white hover:text-[#8C331B] hover:bg-white p-2 rounded-full border border-white transition">
        <IoIosArrowRoundForward size={44} className="lg:w-full lg:h-full w-[28px] h-[28px]"/>
      </button>

    </div>
  );
};
