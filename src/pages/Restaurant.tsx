import { AbootSliderContainer } from "../components/Restaurant/AbootSliderContainer"
import { AboutRestaurant } from "../components/Restaurant/AboutRestaurant"
import { Celebration } from "../components/Restaurant/Celebration"
import { RestaurantHeader } from "../components/Restaurant/Header"
import { Karaoke } from "../components/Restaurant/Karaoke"
import { Menu } from "../components/Restaurant/Menu"
import { ReviewsContainer } from "../components/Restaurant/ReviewsContainer"


export const Restaurant = ( ) =>{
    return (
        <div className="scroll-smooth restaurant-page">
            <RestaurantHeader/>
            <AboutRestaurant />
            <AbootSliderContainer />
            <Menu />
            <Karaoke />
            <Celebration/>
           <ReviewsContainer />
        </div>
    )
}