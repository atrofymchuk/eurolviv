import Slider from "react-slick";
import { ReviewSliderProps } from "../../types/types";
import { ReviewCard } from "./ReviewCard";
import { forwardRef, memo, useMemo } from "react";
import { useTranslation } from "react-i18next";

const ReviewSlider = memo(forwardRef<Slider, ReviewSliderProps>(({ reviews }, ref) => {
  const {t } = useTranslation()
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
          rows: 2,
          useTransform:false,
          variableWidth: true,
        },
      },
    ],
  };

  const mixedReviews = useMemo(() => 
    reviews.ua.flatMap((review, index) => [review, reviews.abroad[index]].filter(Boolean)), 
    [reviews]
  )
  

  return (
    <div className="z-20  w-screen top-0 left-0  ">
      <Slider {...settings} ref={ref} className="review mt-10">
        {mixedReviews.map((review, index) => (
          <div key={index} className="mt-2.5 ">
            <ReviewCard review={review} reviewHeader={t("reviews.review")}/>
          </div>
        ))}
      </Slider>
      
    </div>
  );
}))

export default ReviewSlider;
