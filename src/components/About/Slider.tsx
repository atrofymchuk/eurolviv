import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";
import { useState } from "react";
import { Swiper as SwiperType } from "swiper";

import slide1 from "../../assets/About/champagne.png";
import slide2 from "../../assets/About/bathroom.png";
import slide3 from "../../assets/About/bedroom.png";
import slide4 from "../../assets/About/2roomLux.png";
import slide5 from "../../assets/About/mirror.png";

import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

const slides = [slide1, slide2, slide3, slide4, slide5];

const ImageSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  return (
    <div className=" w-screen grid place-items-center">
      <div className="xl:w-[1720px] w-[332px]  border-x border-[#C7C7C7] box-border border-collapse"  />

      <div className="  grid place-items-center ">
        
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          lazyPreloadPrevNext={5}
          loop={true}
          slidesPerView={2}
          spaceBetween={0}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 0,
            slideShadows: false,
          }}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          breakpoints={{
            768: { slidesPerView: 'auto' },
          }}
          modules={[EffectCoverflow, Navigation]}
          className="w-full xl:h-[60vh] h-[353px]"
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          onSwiper={(swiper) => setSwiperInstance(swiper)}
        >
          {slides.map((image, index) => {
            const isActive = activeIndex === index;
            const isSide = Math.abs(activeIndex - index) === 1;
            const isEdge = Math.abs(activeIndex - index) > 1;

            return (
              <SwiperSlide
                key={index}
                className={`flex justify-center items-center h-full w-full max-w-fit transition-all duration-300 
                ${isActive ? "scale-110 xl:p-10" : ""}
                ${isSide ? "p-4" : ""}
                ${isEdge ? "p-4" : ""}
                `}
              >
                <div className="flex items-center justify-center w-fit h-full">
                  <img
                    src={image}
                    alt={`slide_${index + 1}`}
                    className={` transition-all duration-500 ease-in-out
                    ${isSide ?"xl:w-[530px] xl:h-[353px] w-[231px] h-[154px]" : ""}
                    ${isEdge ? "xl:w-[514px] xl:h-[316px] w-[231px] h-[154px]" : ""}
                    ${isActive ? "xl:w-[510px] xl:h-[400px] w-[290px] h-[193px]" : ""}
                    `}
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        <button
          className="xl:absolute left-40 top-135   -translate-y-1/2 xl:block justify-center text-[#8C331B]  hidden border-[#8C331B] w-[62px] h-[62px] bg-white p-3 rounded-full border z-20 hover:bg-[#8C331B] hover:cursor-pointer hover:text-white transition"
          onClick={() => swiperInstance?.slidePrev()}
        >
          ←
        </button>
        <button
          className="xl:absolute right-40 top-135 -translate-y-1/2 xl:block justify-center text-[#8C331B] hidden border-[#8C331B] bg-white p-3 rounded-full border w-[62px] h-[62px] z-20 hover:bg-[#8C331B] hover:cursor-pointer hover:text-white transition"
          onClick={() => swiperInstance?.slideNext()}
        >
          →
        </button>
      </div>
    </div>
  );
};


export default ImageSlider;
