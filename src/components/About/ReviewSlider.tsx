import Slider from "react-slick";
import { ReviewSliderProps } from "../../types/types";
import { ReviewCard } from "./ReviewCard";
import { forwardRef, memo, useMemo } from "react";
import { useTranslation } from "react-i18next";

const ReviewSlider = memo(forwardRef<Slider, ReviewSliderProps>(({ reviews }, ref) => {
  const {t } = useTranslation()
  const settings = {
    initialSlide: 0,
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
           
          rows: 2,
          centerMode: true,
        },
        },
      ],
    };

    const mixedReviews = useMemo(() => 
      reviews.ua.flatMap((review, index) => [review, reviews.abroad[index]].filter(Boolean)), 
      [reviews]
    )
    

  return (
    <div className="z-20  w-screen top-0 left-0   ">
      <Slider {...settings} ref={ref} className="w-[calc(100% + 100px)] mt-10 review md:me-0 -me-2">
        {mixedReviews.map((review, index) => (
          <div key={index} className="mt-2.5 lg: me-4 ">
            <ReviewCard review={review} reviewHeader={t("reviews.review")}/>
          </div>
        ))}
      </Slider>
      
    </div>
  );
}))

export default ReviewSlider;
