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

  return (
    <div className="relative flex justify-center items-center z-20">
      <div className="absolute md:w-[1720px] h-full w-[299px]  " />
      <Swiper
        slidesPerView={1}
        loop
        spaceBetween={17}
        grid={{fill:'row', rows:2}}
        modules={[Grid, Pagination]}
        breakpoints={{
          640: { grid: { rows: 2 }, width:299, height:210, slidesPerView:2 },
          1000: { grid: { rows: 1 }, width: 533, slidesPerGroup:2},
          
        }}
        onSwiper={(swiper) => setSwiperInstance(swiper)}
        className="mt-10 z-20"
      >
        {mixedReviews.map((review) => (
          <SwiperSlide
            key={review.id}
            className="bg-[#EDE8E5] md:min-w-[533px] md:min-h-[329px] w-[299px] min-h-[210px]"
          >
            <ReviewCard review={review} />
          </SwiperSlide>
        ))}
        <div className="hidden md:flex justify-between w-full mt-6 pb-[72px]">
          <button
            className="border-white w-[62px] h-[62px]  rounded-full border hover:bg-white text-white hover:text-[#A47762] transition"
            onClick={() => swiperInstance?.slidePrev()}
          >
            ←
          </button>

          <button
            className="border-white w-[62px] h-[62px] p-3 rounded-full border hover:bg-white text-white hover:text-[#A47762] transition me-40"
            onClick={() => swiperInstance?.slideNext()}
          >
            →
          </button>
        </div>
      </Swiper>
    </div>
  );
}
