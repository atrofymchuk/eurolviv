import Slider from "react-slick";
import { ReviewSliderCard } from "./ReviewSliderCard";
import { forwardRef } from "react";
import { usePagesInfoStore } from "../../store/usePagesInfoStore";
import cn from "classnames";

export const ReviewSlider = forwardRef<Slider>((_, ref) => {
  const { restaurantReviews } = usePagesInfoStore();
  
  const settings = {
    infinite: true,
    speed: 500,
    rows: 1,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
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
          " md:w-[96.5%] w-[89.1%] sm:w-[89.1%] xl:w-[96.55%] 2xl:h-[458px] xl:h-[458px] lg:h-[350px] md:h-[254px]  h-fit md:border-x xl:border border-[#B3B3B3] "
        )}
      >
        <div className="slider-container overflow-visible">
          <Slider {...settings} ref={ref}>
            {restaurantReviews.map((el) => (
              <ReviewSliderCard img={el.img} key={el.id} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
});
