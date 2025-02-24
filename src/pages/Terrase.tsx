import { AbootSliderContainer } from "../components/Restaurant/AbootSliderContainer"
import { AboutTerrase } from "../components/Restaurant/AboutTerrase"
import { Celebration } from "../components/Restaurant/Celebration"
import { TerraseHeader } from "../components/Restaurant/Header"
import { Karaoke } from "../components/Restaurant/Karaoke"
import { Menu } from "../components/Restaurant/Menu"


export const Terrase = ( ) =>{
    return (
        <div className="">
            <TerraseHeader/>
            <AboutTerrase />
            <AbootSliderContainer />
            <Menu />
            <Karaoke />
            <Celebration/>
        </div>
    )
}