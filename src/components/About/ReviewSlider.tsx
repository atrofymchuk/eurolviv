import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

import { Grid, Pagination } from "swiper/modules";

export default function ReviewSlider() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        grid={{
          rows: 1,
        }}
        spaceBetween={30}
        modules={[Grid, Pagination]}
        className="mySwiper mt-10 z-20"
      >
       
        <SwiperSlide className="bg-[#EDE8E5] min-w-[533px] min-h-[329px]">
          <div className=" flex flex-col min-h-[329px] justify-between">
            <div>
              <h1 className="uppercase md:ps-[34px] md:pt-[33px] text-[#A47762] md:text-[48px] md:leading-[60px] font-semibold">
                Anna
              </h1>
              <p className="text-[#727272] md:ps-[31px]">🇺🇦 УКРАЇНА</p>
            </div>
            <div className="md:ps-[33px] md:pb-[46px]">
              <h2 className="uppercase text-[#A47762] font-semibold ">відгук</h2>
              <p className="uppercase text-[#6B6B6B] md:pt-[13px] md:max-w-[476px]">
                комфортні світлі номери, розташування супер, 10 хв прогулянки і
                ти в центрі, чудовий ресторан на 8 поверсі, смачні сніданки з
                прекрасним краєвидом
              </p>
            </div>
          </div>
        </SwiperSlide>
       
        <SwiperSlide className="bg-[#EDE8E5] min-w-[533px] min-h-[329px]">
          <div className=" flex flex-col min-h-[329px] justify-between">
            <div>
              <h1 className="uppercase md:ps-[34px] md:pt-[33px] text-[#A47762] md:text-[48px] md:leading-[60px] font-semibold">
                Anna
              </h1>
              <p className="text-[#727272] md:ps-[31px]">🇺🇦 УКРАЇНА</p>
            </div>
            <div className="md:ps-[33px] md:pb-[46px]">
              <h2 className="uppercase text-[#A47762] font-semibold ">відгук</h2>
              <p className="uppercase text-[#6B6B6B] md:pt-[13px] md:max-w-[476px]">
                комфортні світлі номери, розташування супер, 10 хв прогулянки і
                ти в центрі, чудовий ресторан на 8 поверсі, смачні сніданки з
                прекрасним краєвидом
              </p>
            </div>
          </div>
        </SwiperSlide>
       
        <SwiperSlide className="bg-[#EDE8E5] min-w-[533px] min-h-[329px]">
          <div className=" flex flex-col min-h-[329px] justify-between">
            <div>
              <h1 className="uppercase md:ps-[34px] md:pt-[33px] text-[#A47762] md:text-[48px] md:leading-[60px] font-semibold">
                Anna
              </h1>
              <p className="text-[#727272] md:ps-[31px]">🇺🇦 УКРАЇНА</p>
            </div>
            <div className="md:ps-[33px] md:pb-[46px]">
              <h2 className="uppercase text-[#A47762] font-semibold ">відгук</h2>
              <p className="uppercase text-[#6B6B6B] md:pt-[13px] md:max-w-[476px]">
                комфортні світлі номери, розташування супер, 10 хв прогулянки і
                ти в центрі, чудовий ресторан на 8 поверсі, смачні сніданки з
                прекрасним краєвидом
              </p>
            </div>
          </div>
        </SwiperSlide>
       
        <SwiperSlide className="bg-[#EDE8E5] min-w-[533px] min-h-[329px]">
          <div className=" flex flex-col min-h-[329px] justify-between">
            <div>
              <h1 className="uppercase md:ps-[34px] md:pt-[33px] text-[#A47762] md:text-[48px] md:leading-[60px] font-semibold">
                Anna
              </h1>
              <p className="text-[#727272] md:ps-[31px]">🇺🇦 УКРАЇНА</p>
            </div>
            <div className="md:ps-[33px] md:pb-[46px]">
              <h2 className="uppercase text-[#A47762] font-semibold ">відгук</h2>
              <p className="uppercase text-[#6B6B6B] md:pt-[13px] md:max-w-[476px]">
                комфортні світлі номери, розташування супер, 10 хв прогулянки і
                ти в центрі, чудовий ресторан на 8 поверсі, смачні сніданки з
                прекрасним краєвидом
              </p>
            </div>
          </div>
        </SwiperSlide>
       
        <SwiperSlide className="bg-[#EDE8E5] min-w-[533px] min-h-[329px]">
          <div className=" flex flex-col min-h-[329px] justify-between">
            <div>
              <h1 className="uppercase md:ps-[34px] md:pt-[33px] text-[#A47762] md:text-[48px] md:leading-[60px] font-semibold">
                Anna
              </h1>
              <p className="text-[#727272] md:ps-[31px]">🇺🇦 УКРАЇНА</p>
            </div>
            <div className="md:ps-[33px] md:pb-[46px]">
              <h2 className="uppercase text-[#A47762] font-semibold ">відгук</h2>
              <p className="uppercase text-[#6B6B6B] md:pt-[13px] md:max-w-[476px]">
                комфортні світлі номери, розташування супер, 10 хв прогулянки і
                ти в центрі, чудовий ресторан на 8 поверсі, смачні сніданки з
                прекрасним краєвидом
              </p>
            </div>
          </div>
        </SwiperSlide>
       
        <SwiperSlide className="bg-[#EDE8E5] min-w-[533px] min-h-[329px]">
          <div className=" flex flex-col min-h-[329px] justify-between">
            <div>
              <h1 className="uppercase md:ps-[34px] md:pt-[33px] text-[#A47762] md:text-[48px] md:leading-[60px] font-semibold">
                Anna
              </h1>
              <p className="text-[#727272] md:ps-[31px]">🇺🇦 УКРАЇНА</p>
            </div>
            <div className="md:ps-[33px] md:pb-[46px]">
              <h2 className="uppercase text-[#A47762] font-semibold ">відгук</h2>
              <p className="uppercase text-[#6B6B6B] md:pt-[13px] md:max-w-[476px]">
                комфортні світлі номери, розташування супер, 10 хв прогулянки і
                ти в центрі, чудовий ресторан на 8 поверсі, смачні сніданки з
                прекрасним краєвидом
              </p>
            </div>
          </div>
        </SwiperSlide>
       
        <SwiperSlide className="bg-[#EDE8E5] min-w-[533px] min-h-[329px]">
          <div className=" flex flex-col min-h-[329px] justify-between">
            <div>
              <h1 className="uppercase md:ps-[34px] md:pt-[33px] text-[#A47762] md:text-[48px] md:leading-[60px] font-semibold">
                Anna
              </h1>
              <p className="text-[#727272] md:ps-[31px]">🇺🇦 УКРАЇНА</p>
            </div>
            <div className="md:ps-[33px] md:pb-[46px]">
              <h2 className="uppercase text-[#A47762] font-semibold ">відгук</h2>
              <p className="uppercase text-[#6B6B6B] md:pt-[13px] md:max-w-[476px]">
                комфортні світлі номери, розташування супер, 10 хв прогулянки і
                ти в центрі, чудовий ресторан на 8 поверсі, смачні сніданки з
                прекрасним краєвидом
              </p>
            </div>
          </div>
        </SwiperSlide>
       
        <SwiperSlide className="bg-[#EDE8E5] min-w-[533px] min-h-[329px]">
          <div className=" flex flex-col min-h-[329px] justify-between">
            <div>
              <h1 className="uppercase md:ps-[34px] md:pt-[33px] text-[#A47762] md:text-[48px] md:leading-[60px] font-semibold">
                Anna
              </h1>
              <p className="text-[#727272] md:ps-[31px]">🇺🇦 УКРАЇНА</p>
            </div>
            <div className="md:ps-[33px] md:pb-[46px]">
              <h2 className="uppercase text-[#A47762] font-semibold ">відгук</h2>
              <p className="uppercase text-[#6B6B6B] md:pt-[13px] md:max-w-[476px]">
                комфортні світлі номери, розташування супер, 10 хв прогулянки і
                ти в центрі, чудовий ресторан на 8 поверсі, смачні сніданки з
                прекрасним краєвидом
              </p>
            </div>
          </div>
        </SwiperSlide>
       
        <SwiperSlide className="bg-[#EDE8E5] min-w-[533px] min-h-[329px]">
          <div className=" flex flex-col min-h-[329px] justify-between">
            <div>
              <h1 className="uppercase md:ps-[34px] md:pt-[33px] text-[#A47762] md:text-[48px] md:leading-[60px] font-semibold">
                Anna
              </h1>
              <p className="text-[#727272] md:ps-[31px]">🇺🇦 УКРАЇНА</p>
            </div>
            <div className="md:ps-[33px] md:pb-[46px]">
              <h2 className="uppercase text-[#A47762] font-semibold ">відгук</h2>
              <p className="uppercase text-[#6B6B6B] md:pt-[13px] md:max-w-[476px]">
                комфортні світлі номери, розташування супер, 10 хв прогулянки і
                ти в центрі, чудовий ресторан на 8 поверсі, смачні сніданки з
                прекрасним краєвидом
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
