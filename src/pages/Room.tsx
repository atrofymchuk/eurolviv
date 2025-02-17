import { About } from "../components/Room/About"
import { ComfortsBlocksWrapper } from "../components/Room/ComfortBlocksWrapper"
import { Header } from "../components/Room/Header"

export const Room = () =>{

    return(
        <div>
            <Header />
            <About />
            <ComfortsBlocksWrapper />

        </div>
    )
}