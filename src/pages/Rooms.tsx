import { Guarantee } from "../components/Rooms/Guarantee"
import { Header } from "../components/Rooms/Header"
import { RoomsInfo } from "../components/Rooms/RoomsInfo"


export const Rooms = ()=>{
    
    return(
        <div className="overflow-x-hidden">
                <Header />
                <RoomsInfo />
                <Guarantee />
        </div>
    )
}