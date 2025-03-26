import Slider from "react-slick";
import { ReviewSliderCard } from "./ReviewSliderCard";
import { forwardRef } from "react";
import { usePagesInfoStore } from "../../store/usePagesInfoStore";
import { useTranslation } from "react-i18next";
import cn from "classnames";

type ReviewSliderToProps = {
  isTerrasePage?: boolean;
};

export const ReviewSlider = forwardRef<Slider, ReviewSliderToProps>(
  ({ isTerrasePage }, ref) => {
    const { restaurantReviews } = usePagesInfoStore();
    const { t } = useTranslation();

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
            `w-full ${
              isTerrasePage
                ? " md:max-w-[95.16%] max-w-[95.31%] "
                : " md:max-w-[96.60%] max-w-[89.1%]"
            }  2xl:h-[458px] xl:h-[380px] lg:h-[350px] md:h-[254px]  h-fit md:border-x xl:border border-[#C7C7C7]`
          )}
        >
          <div className="slider-container overflow-visible">
            <Slider {...settings} ref={ref}>
              {restaurantReviews.map((el) => (
                <ReviewSliderCard
                  impression={t(el.impression)}
                  text={t(el.text)}
                  key={el.id}
                />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    );
  }
);
