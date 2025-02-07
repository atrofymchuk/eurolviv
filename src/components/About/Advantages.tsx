import door from '../../assets/icons/About/door.svg'
import restaurant from '../../assets/icons/About/restaurant.svg'
import karaoke from '../../assets/icons/About/karaoke.svg'
import terasse from '../../assets/icons/About/terrase.svg'
import conferenceRoom from '../../assets/icons/About/conferenceRoom.svg'
import wheelChair from '../../assets/icons/About/wheelchairuser.svg'
import parking from '../../assets/icons/About/parking.svg'
import pet from '../../assets/icons/About/pet.svg'

import reception from '../../assets/icons/About/reception.svg'
import roomService from '../../assets/icons/About/roomService.svg'
import car from '../../assets/icons/About/car.svg'
import breakfast from '../../assets/icons/About/breakfast.svg'
import airConditioning from '../../assets/icons/About/airConditioning.svg'
import wifi from '../../assets/icons/About/wifi.svg'
import ironingChlothes from '../../assets/icons/About/ironingChlothes.svg'
import washingMachine from '../../assets/icons/About/washingMachine.svg'

import AdvantagesImg from '../../assets/About/advantages.png'

export const Advantages = ()=>{
    return(
        <section className="flex justify-center px-6 bg-[#A47762] h-[684px] *:font-cofo">
        <div className="grid md:grid-cols-3 items-center max-w-[1720px] w-full px-6 box-border border-collapse ">
          <div className="md:col-span-1 border-l border-r border-[#C7C7C7] -me-[0.1%] h-full p-4  ">
            <div className="flex flex-col ps-7.5">
              <h1 className="uppercase text-5xl text-[#FFFFFF] pt-[86px]">
                інформація <br />
                про готель
              </h1>
              <ul className="uppercase pt-[52px] text-[#FFFFFF] text-xl *:flex *:items-center *:gap-1.5">
                <li className=''>
                    <img src={door} alt="100rooms" />
                    номерів: 100</li>
                <li>
                <img src={wheelChair} alt="disabled person" />
                номери для гостей з інвалідністю</li>
                <li>
                <img src={pet} alt="pet-frendly" />
                pet-frendly</li>
                <li>
                    <img src={parking} alt="parking" />
                    міський паркінг поруч</li>
                <li>
                <img src={conferenceRoom} alt="conference-rooms" />
                конференц-зали</li>
                <li>
                <img src={restaurant} alt="restaurant" />

                    ресторан</li>
                <li>
                    <img src={karaoke} alt="karaoke" />
                    караоке-лаунж</li>
                <li>
                    <img src={terasse} alt="terasse" />
                    літня тераса на даху</li>
              </ul>
            </div>
          </div>
          <div className="md:col-span-1 border-l  border-r border-[#C7C7C7] -me-[0.1%] h-full p-4">
          <div className="flex flex-col ps-7.5 ">
              <h1 className="uppercase text-5xl text-[#FFFFFF] pt-[86px]">
                послуги та зручності
              </h1>
              <ul className="uppercase pt-[52px] text-[#FFFFFF] text-xl *:flex *:items-center *:gap-1.5">
                <li className=''>
                    <img src={reception} alt="reception" />
                    цілодобова стійка рецепції</li>
                <li>
                <img src={roomService} alt="roomservice" />
                цілодобовий рум-сервіс</li>
                <li>
                <img src={car} alt="car" />
                трансфер</li>
                <li>
                    <img src={breakfast} alt="breakfast" />
                    сніданок</li>
                <li>
                <img src={airConditioning} alt="air conditioning" />
                кондиціонер</li>
                <li>
                <img src={wifi} alt="wifi" />

                безкоштовний Wi-Fi</li>
                <li>
                    <img src={washingMachine} alt="washing machine" />
                    прання</li>
                <li>
                    <img src={ironingChlothes} alt="ironing clothes" />
                    прасування</li>
              </ul>
                <button className='uppercase bg-[#EDE8E5] text-[#A47762] w-fit self-start px-5 py-3 rounded-3xl font-semibold text-sm mt-6.5 hover:cursor-pointer'> забронювати номер</button>
            </div>
          </div>
          <div className="md:col-span-1 border-l border-r border-[#C7C7C7] -me-[0.1%] h-full  justify-center items-center flex">
                <img src={AdvantagesImg} alt="advantagesimg"  className='w-[496px] h-[509px]'/>
          </div>
        </div>
      </section>
    )
}