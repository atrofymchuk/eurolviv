import './Advantages.css'

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
import { useModalStore } from '../../store/useModalStore'

export const Advantages = () => {

  const {openModalOrder} = useModalStore()

  return (
    <section className="flex justify-center items-center bg-[#A47762] px-6 *:font-cofo">
      <div className="border-x border-[#C7C7C7] xl:grid xl:grid-cols-[575px_494px_651px] items-center xl:h-[684px] max-w-[1720px] xl:w-full w-[334px] mx-auto box-border border-collapse gap-0">
        <div className="xl:border-e border-[#C7C7C7] h-full p-4 xl:w-full w-[334px]">
          <div className="flex flex-col xl:ps-7.5">
            <h1 className="uppercase text-3xl xl:text-5xl text-[#FFFFFF] pt-[18px] xl:pt-[86px] xl:text-left">
              інформація <br className="hidden xl:block" /> про готель
            </h1>
            <ul className="uppercase pt-[29px] xl:pt-[52px] *:font-cofo text-[#FFFFFF] text-[14px] xl:text-[20px] tracking-tighter xl:text-xl *:flex *:items-center *:gap-1.5">
              <li><img className="icon" src={door} alt="100rooms" /> номерів: 100</li>
              <li><img className="icon" src={wheelChair} alt="disabled person" /> номери для гостей з інвалідністю</li>
              <li><img className="icon" src={pet} alt="pet-friendly" /> pet-friendly</li>
              <li><img className="icon" src={parking} alt="parking" /> міський паркінг поруч</li>
              <li><img className="icon" src={conferenceRoom} alt="conference-rooms" /> конференц-зали</li>
              <li><img className="icon" src={restaurant} alt="restaurant" /> ресторан</li>
              <li><img className="icon" src={karaoke} alt="karaoke" /> караоке-лаунж</li>
              <li><img className="icon" src={terasse} alt="terasse" /> літня тераса на даху</li>
            </ul>
          </div>
        </div>

        <div className="xl:hidden flex justify-center py-6 w-full">
          <img src={AdvantagesImg} alt="advantages" className="w-[250px] h-[250px]" />
        </div>

        <div className="h-full p-4 w-full">
          <div className="flex flex-col ps-0 xl:ps-7.5">
            <h1 className="uppercase text-3xl xl:text-5xl text-[#FFFFFF] pt-[40px] xl:pt-[86px] xl:text-left">
              послуги та зручності
            </h1>
            <ul className="uppercase pt-[30px] xl:pt-[52px] text-[#FFFFFF] text-[14px] xl:text-xl *:flex *:items-center *:gap-1.5">
              <li><img className="icon" src={reception} alt="reception" /> цілодобова стійка рецепції</li>
              <li><img className="icon" src={roomService} alt="roomservice" /> цілодобовий рум-сервіс</li>
              <li><img className="icon" src={car} alt="car" /> трансфер</li>
              <li><img className="icon" src={breakfast} alt="breakfast" /> сніданок</li>
              <li><img className="icon" src={airConditioning} alt="air conditioning" /> кондиціонер</li>
              <li><img className="icon" src={wifi} alt="wifi" /> безкоштовний Wi-Fi</li>
              <li><img className="icon" src={washingMachine} alt="washing machine" /> прання</li>
              <li><img className="icon" src={ironingChlothes} alt="ironing clothes" /> прасування</li>
            </ul>
            <button 
            onClick={openModalOrder}
            className="uppercase bg-[#EDE8E5] text-[#A47762] w-full xl:w-fit self-center xl:self-start px-5 py-3 rounded-3xl font-semibold text-sm mt-4 xl:mt-6.5 hover:cursor-pointer">
              забронювати номер
            </button>
          </div>
        </div>

        <div className="hidden xl:flex xl:border-s border-[#C7C7C7] h-full justify-center items-center">
          <img src={AdvantagesImg} alt="advantages" className="w-[496px] h-[509px]" />
        </div>
      </div>
    </section>
  );
};

