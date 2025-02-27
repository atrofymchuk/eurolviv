import Slider from "react-slick";
import { ReviewSliderProps } from "../../store/types";
import { ReviewCard } from "./ReviewCard";
import { forwardRef } from "react";

const ReviewSlider = forwardRef<Slider, ReviewSliderProps>(({ reviews }, ref) => {

  const settings = {
    initialSlide: 0,
    slidesToShow: 3, 
    slidesToScroll: 1, 
    speed: 500,
   
    variableWidth: true,
    infinite:true,
    useTransform: false,
    arrows:false, 
    responsive: [
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 1, 
          slidesToScroll: 1,
          centerMode: false, 
          centerPadding: "%", 
          rows: 2,
          useTransform:false,
          variableWidth: true,
        },
      },
    ],
  };

  const mixedReviews = reviews.ua.flatMap((review, index) => {
    return [review, reviews.abroad[index]].filter(Boolean);
  });

  return (
    <div className="z-20 h-full lg:w-fit lg:h-fit  top-0 left-0 w-full ">
      <Slider {...settings} ref={ref} className="review mt-10">
        {mixedReviews.map((review, index) => (
          <div key={index} className="mt-2.5 ">
            <ReviewCard review={review} />
          </div>
        ))}
      </Slider>
      
    </div>
  );
})

export default ReviewSlider;
