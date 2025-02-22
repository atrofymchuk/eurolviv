import { About } from "../components/ConferesceService/About"
import { Equipment } from "../components/ConferesceService/Equipment"
import { Header } from "../components/ConferesceService/Header"
import { RoomSliderContainer } from "../components/ConferesceService/RoomSliderContainer"
import { useRoomStore } from "../store/useRoomsStore"


export const ConferenceService = ()=>{

    const {halls} = useRoomStore()

    return(
        <div>
            <Header />
            {halls.map((el)=>(
                <div>

                <About item={el} key={el.floor} />
                <Equipment icons={el.icons} price={el.price}/>
                <RoomSliderContainer images={el.showcaseSwiperImages} />
                </div>
            ))

            }
        </div>
    )
}