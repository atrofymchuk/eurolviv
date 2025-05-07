import { useRef } from "react";
import { Reviews } from "@/components/Restaurant/Reviews";
import { ReviewSlider } from "@/components/Restaurant/ReviewSlider";
import Slider from "react-slick";
import { Navigation } from "@/components/Restaurant/Navigation";


export const ReviewsContainer = () => {
  const sliderRef = useRef<Slider | null>(null);
  
  return (
    <div className="">
      <div className="">
        <Reviews />
      </div>
      <ReviewSlider ref={sliderRef} />
      <Navigation ref={sliderRef} />
    </div>
  );
};
