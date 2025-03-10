import { useRef } from "react";
import { Reviews } from "./Reviews";
import { ReviewSlider } from "./ReviewSlider";
import Slider from "react-slick";
import { Navigation } from "./Navigation";
import { useLocation } from "react-router-dom";


export const ReviewsContainer = () => {
  const sliderRef = useRef<Slider | null>(null);
  const {pathname} = useLocation()
  const isTerrasePage = pathname === "/terrase"
  
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
