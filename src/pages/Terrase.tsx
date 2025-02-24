import { AbootSliderContainer } from "../components/Restaurant/AbootSliderContainer"
import { AboutTerrase } from "../components/Restaurant/AboutTerrase"
import { TerraseHeader } from "../components/Restaurant/Header"
import { Menu } from "../components/Restaurant/Menu"


export const Terrase = ( ) =>{
    return (
        <div className="">
            <TerraseHeader/>
            <AboutTerrase />
            <AbootSliderContainer />
            <Menu />
        </div>
    )
}