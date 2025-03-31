import { useTranslation } from "react-i18next";
import { useModalStore } from "../../store/useModalStore";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";
import type SwiperClass from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { fish, golubtsi, pasta, pie, steak } from "../../store/exportsImg";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

export const Dishes = () => {
  const { t } = useTranslation();
  const { onOpenModal } = useModalStore();
  const swiperRef = useRef<SwiperClass | null>(null);

  const dishesSlides = [
    { id: 1, image: fish, title: "Страва 1" },
    { id: 2, image: golubtsi, title: "Страва 2" },
    { id: 3, image: pasta, title: "Страва 4" },
    { id: 4, image: pie, title: "Страва 5" },
    { id: 5, image: steak, title: "Страва 6" },
  ];

  return (
    <div className="w-full overflow-x-hidden overflow-y-hidden">
      <div className="relative mx-auto w-[89.7%] border-x md:border-x-0 border-[#B3B3B3] ">
        <div className="md:border-x border-[#B3B3B3] xl:pt-[189px] lg:pt-[100px] pt-[94px]">
          <h4 className="font-cofo-medium text-[#252526] leading-[22.68px] justify-center flex  xl:mb-3 mb-1.75">
            <span className="font-blessed  text-center text-[16px] xl:text-[36px] lg:text-[20px] xl:inline">
              {t("terrase.dishes.title2")}
            </span>
          </h4>
          <h1 className="text-center  uppercase leading-[81%] xl:text-[233px] text-[64px] tracking-[-0.09em] lg:text-[100px]">
            {t("terrase.dishes.title")} RUFF
          </h1>

          <p className="text-center mt-2 leading-[120%] uppercase xl:text-[20px] text-[12px]  pt-[18px] pb-[30px] md:w-1/3 w-8/9 mx-auto">
            {t("terrase.dishes.desc")}
          </p>
        </div>

        <div className="md:border-x border-[#B3B3B3]">
          <div className="flex justify-center">
            <button
              onClick={() => onOpenModal("menu")}
              className="uppercase border border-[#8C331B] text-[#FFFFFF] hover:bg-[#FFFFFF] hover:text-[#8C331B] 
          bg-[#8C331B] xl:text-[14px] xl:px-[37px] xl:py-[10.5px] px-[32px] py-[10px] w-fit 
          rounded-full lg:py-[10px] font-cofo-medium text-[12px] hover:cursor-pointer "
            >
              {t("buttons.menu")}
            </button>
          </div>
        </div>

        <div className="absolute w-full h-[800px] md:border-x overflow-y-hidden  border-[#B3B3B3] "></div>
        

        <div className="relative xl:ms-[58px] ms-[18px] lg:ms-[30px] md:ms-[20px]  mt-[30px] mb-10 mr-[calc(-1*((100vw-87.7%)/2))] md:w-[calc(100%+((100vw-87.7%)/2))] overflow-x-hidden">
         
          <button
            className="w-[35px] h-[35px] lg:w-[48px] lg:h-[48px] xl:w-[60px] xl:h-[60px]  items-center justify-center 
                   left-5 xl:left-25 lg:left-12 z-10 text-white hover:text-[#8C331B] hover:bg-white absolute top-1/2 
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
                width: 670
              },
              640: {
                spaceBetween: 15,
                slidesPerView: 2.3,
                width: 920
              },
              768: {
                spaceBetween: 15,
                slidesPerView: 2.5,
                width: 950
              },
              1024: {
                spaceBetween: 20,
                slidesPerView: 3,
                width: 1170
              },
              1280: {
                spaceBetween: 20,
                slidesPerView: 3.2,
                width: 1380
              },
              1536: {
                slidesPerView: 3.3,
                spaceBetween: 10,
                width: 1865
              },
            }}
          >
            {dishesSlides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div
                  className="dish-slide sm:w-auto sm:h-auto 2xl:w-[548px] xl:w-[448px] xl:h-[420px] w-[283px] h-[269px]
                   md:h-[300px] 2xl:h-[521px] lg:w-[350px] md:w-[300px] pe-3  md:pe-5 lg:pe-1 xl:pe-5 2xl:pe-0"
                >
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            className="w-[35px] h-[35px] lg:w-[48px] lg:h-[48px] xl:w-[60px] xl:h-[60px]  items-center justify-center 
                   right-5 xl:right-53 z-10 text-white hover:text-[#8C331B] hover:bg-white absolute top-1/2 
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
      </div>
    </div>
  );
};
