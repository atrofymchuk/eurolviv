import { useRef } from "react";
import { Reviews } from "./Reviews"
import { ReviewSlider } from "./ReviewSlider"
import Slider from "react-slick";
import { Navigation } from "./Navigation";


export const ReviewsContainer =() =>{
    const sliderRef = useRef<Slider | null>(null);

    return(
        <div >
             
             <Reviews />
            <ReviewSlider ref={sliderRef}/> 
            <Navigation ref={sliderRef}/>

        </div>
    )
}