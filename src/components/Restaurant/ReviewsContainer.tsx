import { useRef } from "react";
import { Reviews } from "./Reviews";
import { ReviewSlider } from "./ReviewSlider";
import Slider from "react-slick";
import { Navigation } from "./Navigation";

type ReviewsContainerToProps = {
  isTerrasePage?: boolean;
};

export const ReviewsContainer = ({
  isTerrasePage = false,
}: ReviewsContainerToProps) => {
  const sliderRef = useRef<Slider | null>(null);

  return (
    <div className="">
      <div className="">
        <Reviews isTerrasePage={isTerrasePage} />
      </div>
      <ReviewSlider ref={sliderRef} isTerrasePage={isTerrasePage} />
      <Navigation ref={sliderRef} isTerrasePage={isTerrasePage} />
    </div>
  );
};
