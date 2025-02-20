import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Grid, Pagination } from "swiper/modules";
import { ReviewCard } from "./ReviewCard";
import { ReviewSliderProps } from "../../store/types";
import { useState } from "react";

export default function ReviewSlider({ reviews }: ReviewSliderProps) {
  const mixedReviews = reviews.ua.flatMap((review, index) => {
    return [review, reviews.abroad[index]].filter(Boolean);
  });

  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  const loopFixCount = 2;
  const clonedReviews = [
    ...mixedReviews.slice(-loopFixCount),
    ...mixedReviews,
    ...mixedReviews.slice(0, loopFixCount),
  ];


  return (
    <div className="relative flex justify-center items-center ">
      
      <div className="absolute  h-full" />
      <Swiper
        spaceBetween={17}
        grid={{ fill: "row", rows: 2 }}
        modules={[Grid, Pagination]}
        breakpoints={{
          200: { grid: { rows: 2 }, width: 299, slidesPerView: 1, loop:true, loopAdditionalSlides:2  },
          1000: { grid: { rows: 1 }, width: 533, slidesPerGroup: 2, loop:true, loopAdditionalSlides:2 },
        }}
        onSwiper={(swiper) => setSwiperInstance(swiper)}
        onSlideChange={(swiper)=>{
          if (swiper.activeIndex === 0) {
            swiper.slideTo(clonedReviews.length - loopFixCount * 2, 0);
          } else if (swiper.activeIndex === clonedReviews.length - loopFixCount) {
            swiper.slideTo(loopFixCount, 0);
          }
        }}
        className="mt-10 z-20"
      >
        
        {clonedReviews.map((review, index) => (
          <SwiperSlide
            key={review.text + index}
            className="bg-[#EDE8E5] xl:w-[533px] xl:min-h-[329px] xl:max-w-[533px]   min-h-[210px]"
          >
            <ReviewCard review={review} />
          </SwiperSlide>
        ))}
       
        <div className="flex justify-between w-full mt-6 pb-[72px]">
          <button
            className="flex items-center justify-center border-white xl:w-[62px] xl:h-[62px] w-[32px] h-[32px] rounded-full border hover:bg-white text-white hover:text-[#A47762] transition"
            onClick={() => swiperInstance?.slidePrev()}
          >
            ←
          </button>

          <button
            className="flex items-center justify-center border-white xl:w-[62px] xl:h-[62px] w-[32px] h-[32px] rounded-full border hover:bg-white text-white hover:text-[#A47762] transition me-20 xl:me-40"
            onClick={() => swiperInstance?.slideNext()}
          >
            →
          </button>
        </div>
      </Swiper>
    </div>
  );
}
  