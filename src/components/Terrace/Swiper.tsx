import { useRef } from "react";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";

export const SwiperSlider = ({ slides }: { slides: string[] }) => {
  const swiperRef = useRef<SwiperClass | null>(null);

  return (
    <div className="relative xl:ms-[58px] ms-[18px] lg:ms-[30px] md:ms-[20px]  mt-[30px]  mr-[calc(-1*((100vw-87.7%)/2))] md:w-[calc(100%+((100vw-87.7%)/2))] overflow-x-hidden">
      <button
        className="w-[35px] h-[35px] lg:w-[48px] lg:h-[48px] xl:w-[60px] xl:h-[60px]  items-center justify-center 
                 left-5 xl:left-14 lg:left-12 z-10 text-white hover:text-[#8C331B] hover:bg-white absolute top-1/2 
                 transform -translate-y-1/2 rounded-full border border-white transition hidden md:flex"
        onClick={() => {
          if (swiperRef.current) {
            swiperRef.current.slidePrev();
          }
        }}
      >
        <IoIosArrowRoundBack className="w-3/4 h-3/4" />
      </button>
      <Swiper
        loop={true}
        slidesPerView={2.4}
        width={1265}
        className="dishes-swiper overflow-x-hidden"
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        breakpoints={{
          320: {
            spaceBetween: 10,
            width: 670,
          },
          640: {
            spaceBetween: 15,
            slidesPerView: 2.3,
            width: 920,
          },
          768: {
            spaceBetween: 15,
            slidesPerView: 2.5,
            width: 950,
          },
          1024: {
            spaceBetween: 20,
            slidesPerView: 3,
            width: 1170,
          },
          1280: {
            spaceBetween: 20,
            slidesPerView: 3.2,
            width: 1380,
          },
          1536: {
            slidesPerView: 3.3,
            spaceBetween: 10,
            width: 1865,
          },
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="dish-slide sm:w-auto sm:h-auto 2xl:w-[548px] xl:w-[448px] xl:h-[420px] w-[283px] h-[269px]
                 md:h-[300px] 2xl:h-[521px] lg:w-[350px] md:w-[300px] pe-5  md:pe-5 lg:pe-1 xl:pe-5 2xl:pe-0"
            >
              <img
                src={slide}
                alt={slide}
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        className="w-[35px] h-[35px] lg:w-[48px] lg:h-[48px] xl:w-[60px] xl:h-[60px]  items-center justify-center 
                 right-5 xl:right-50 z-10 text-white hover:text-[#8C331B] hover:bg-white absolute top-1/2 
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
