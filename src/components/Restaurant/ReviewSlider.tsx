import Slider from "react-slick";
import { ReviewSliderCard } from "@/components/Restaurant/ReviewSliderCard";
import { forwardRef } from "react";
import { usePagesInfoStore } from "@/store/usePagesInfoStore";
import cn from "classnames";
import { useCustomWidth } from "@/components/hooks/useCustomWidth";

export const ReviewSlider = forwardRef<Slider>((_, ref) => {
  const { restaurantReviews } = usePagesInfoStore();
  const isCustomWidth = useCustomWidth(389, 410)
  const settings = {
    infinite: true,
    speed: 500,
    rows: 1,
    slidesToShow: 4,
    slidesToScroll: 1,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          variableWidth: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: false,
          slidesPerRow: 3,
        },
      },
    ],
  };

  return (
    <div className="flex flex-col md:items-end items-center justify-end w-full overflow-hidden">
      <div
        className={cn(
          " md:w-[96.5%]  sm:w-[89.1%] xl:w-[96.6%] 2xl:w-[96.6%] 2xl:h-[458px] xl:h-[408px] lg:h-[350px] md:h-[254px]  h-fit md:border-x xl:border border-[#B3B3B3] ",{
            "w-[89%]": !isCustomWidth,
            "w-[89.4%]": isCustomWidth
          }
        )}
      >
        <div className="slider-container overflow-visible">
          <Slider {...settings} ref={ref}>
            {restaurantReviews.map((el, index) => (
              <ReviewSliderCard img={el.img} key={el.id} index={index} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
});
