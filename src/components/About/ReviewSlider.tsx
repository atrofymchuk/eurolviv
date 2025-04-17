import Slider from "react-slick";
import { ReviewSliderProps } from "../../types/types";
import { ReviewCard } from "./ReviewCard";
import { forwardRef,  useMemo } from "react";
import { useTranslation } from "react-i18next";

const ReviewSlider = forwardRef<Slider, ReviewSliderProps>(({ reviews }, ref) => {
  const {t } = useTranslation()
  const windowWidth = window.innerWidth;
  const settings = {
    initialSlide: 0,
    speed: 500,
    variableWidth: true,
    arrows:false, 
    responsive: [
      {
        breakpoint: 1536, 
        settings: {
          slidesToShow: 4,
          variableWidth: true,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          variableWidth: true,
        },
      },
      {
        breakpoint: 1480,
        settings: {
          slidesToShow: 3,
          variableWidth: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          variableWidth: true,
        },
      },
      {
        breakpoint: 768, 
        settings: {
          rows: 2,
          slidesToShow: 2,
          centerMode: true,
          variableWidth: true,
        },
      },
 
      {
        breakpoint: 640, 
        settings: {
          rows: 2,
          centerMode: true,
          variableWidth: true,
        },
      },
      {
        breakpoint: 440,
        settings: {
          rows: 2,
          centerMode: true,
          variableWidth: true,
          centerPadding: '8%',
        },
      },
      {
        breakpoint: 410,
        settings: {
          rows: 2,
          centerMode: true,
          variableWidth: true,
          centerPadding: '13%',
        },
      },
    ],
  };

  const mixedReviews = useMemo(() => 
    reviews.ua.flatMap((review, index) => [review, reviews.abroad[index]].filter(Boolean)), 
    [reviews]
  )
    

  return (
    <div className="z-20  w-screen top-0 left-0 ">
      <Slider {...settings} ref={ref} className={`w-[calc(100% + 100px)]  review md:me-0  ${windowWidth < 400 ? '-me-[40px]' : 'me-[10px] sm:me-0'} sm:-me-40`}>
        {mixedReviews.map((review, index) => (
          <div key={index} className=" lg:me-4  ">
            <ReviewCard review={review} reviewHeader={t("reviews.review")} index={index}/>
          </div>
        ))}
      </Slider>
      
    </div>
  );
})

export default ReviewSlider;
