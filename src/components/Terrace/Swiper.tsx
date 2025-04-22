import { useRef } from "react";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";

export const SwiperSlider = ({ slides }: { slides: string[] }) => {
  const swiperRef = useRef<SwiperClass | null>(null);

  return (
    <div className="relative 2xl:ms-[3.02vw]  xl:ms-[2vw] ms-[1.41vw] lg:ms-[30px] md:ms-[20px]  mt-[30px]  mr-[calc(-1*((100vw-87.7%)/2))] md:w-[calc(100%+((100vw-87.7%)/2))] overflow-x-hidden">
     
      <Swiper
        loop={true}
        className="dish-swiper overflow-x-hidden"
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        threshold={20}
        touchRatio={0.8}
        touchStartPreventDefault={true}
        breakpoints={{
          320: {
            slidesPerView: 'auto',
            spaceBetween: 10,
          },
          640: {
            spaceBetween: 15,
            slidesPerView: 'auto',
          },
          768: {
            spaceBetween: 15,
            slidesPerView: 'auto',
          },
          1024: {
            spaceBetween: 20,
            slidesPerView: 'auto',
          },
          1280: {
            spaceBetween: 20,
            slidesPerView: 'auto',
          },
          1536: {
            slidesPerView: 'auto',
            spaceBetween: 10,
          },
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="dish-slide sm:w-auto sm:h-auto 2xl:w-[28.54vw] xl:w-[27.49vw] xl:h-[27.34vw] w-[283px] h-[269px] 
                 md:h-[300px] 2xl:h-[27.14vw] lg:w-[350px] md:w-[300px] "
            >
              <img loading="lazy"
                src={slide}
                alt={slide}
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        className="w-[35px] h-[35px] lg:w-[48px] lg:h-[48px] 2xl:w-[60px] 2xl:h-[60px] xl:w-[54px] xl:h-[54px]  items-center justify-center 2xl:left-[1.67vw] xl:left-[1.3vw]
                 left-5  lg:left-12 z-10 text-white hover:text-[#8C331B] hover:bg-white absolute top-1/2 
                 transform -translate-y-1/2 rounded-full border border-white transition hidden md:flex"
        onClick={() => {
          if (swiperRef.current) {
            swiperRef.current.slidePrev();
          }
        }}
      >
        <IoIosArrowRoundBack className="w-3/4 h-3/4" /> 
      </button>

      <button
        className="w-[35px] h-[35px] lg:w-[48px] lg:h-[48px] 2xl:w-[60px] 2xl:h-[60px] xl:w-[54px] xl:h-[54px]  items-center justify-center xl:right-[13.5vw]
                 right-5 2xl:right-[13.2vw] z-10 text-white hover:text-[#8C331B] hover:bg-white absolute top-1/2 
                 transform -translate-y-1/2 rounded-full border border-white transition lg:right-30 md:right-34 hidden md:flex"
        onClick={() => {
          if (swiperRef.current) {
            swiperRef.current.slideNext();
          }
        }}
      >
        <IoIosArrowRoundForward className="w-3/4 h-3/4" />
      </button>
    </div>
  );
};
