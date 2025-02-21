import SpecialOffersModal from '../components/Modals/SpecialOfferModal'
import { Cards } from '../components/SpecialOffers/Cards'
import {Header} from '../components/SpecialOffers/Header'

export const SpecialOffers = () =>{

    return(
       <div>
        <Header />
        <Cards />

        <SpecialOffersModal />  
       </div>
    )
}