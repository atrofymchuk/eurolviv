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

export const Advantages = () => {
  return (
    <section className="flex justify-center px-6 bg-[#A47762] h-auto md:h-[684px] w-fit md:w-full *:font-cofo">
      <div className="flex flex-col md:grid md:grid-cols-3 items-center max-w-[1720px] w-full px-6 box-border border-collapse gap-0">
        <div className="border-x border-[#C7C7C7] h-full p-4 w-full">
          <div className="flex flex-col ps-0 md:ps-7.5">
            <h1 className="uppercase text-3xl md:text-5xl text-[#FFFFFF] pt-[18px] md:pt-[86px] md:text-left">
              інформація <br className="hidden md:block" /> про готель
            </h1>
            <ul className="uppercase pt-[29px] md:pt-[52px] text-[#FFFFFF] text-[14px] md:text-[20px] tracking-tighter md:text-xl *:flex *:items-center *:gap-1.5">
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

        <div className="md:hidden flex justify-center py-6 border-x w-full border-[#C7C7C7]">
          <img src={AdvantagesImg} alt="advantages" className="w-[250px] h-[250px]" />
        </div>

        <div className="border-x md:border-x-0 border-[#C7C7C7] h-full p-4 w-full">
          <div className="flex flex-col ps-0 md:ps-7.5">
            <h1 className="uppercase text-3xl md:text-5xl text-[#FFFFFF] pt-[40px] md:pt-[86px] md:text-left">
              послуги та зручності
            </h1>
            <ul className="uppercase pt-[30px] md:pt-[52px] text-[#FFFFFF] text-[14px] md:text-xl text- *:flex *:items-center *:gap-1.5">
              <li><img className="icon" src={reception} alt="reception" /> цілодобова стійка рецепції</li>
              <li><img className="icon" src={roomService} alt="roomservice" /> цілодобовий рум-сервіс</li>
              <li><img className="icon" src={car} alt="car" /> трансфер</li>
              <li><img className="icon" src={breakfast} alt="breakfast" /> сніданок</li>
              <li><img className="icon" src={airConditioning} alt="air conditioning" /> кондиціонер</li>
              <li><img className="icon" src={wifi} alt="wifi" /> безкоштовний Wi-Fi</li>
              <li><img className="icon" src={washingMachine} alt="washing machine" /> прання</li>
              <li><img className="icon" src={ironingChlothes} alt="ironing clothes" /> прасування</li>
            </ul>
            <button className=" uppercase bg-[#EDE8E5] text-[#A47762] w-full md:w-fit self-center md:self-start px-5 py-3 rounded-3xl font-semibold text-sm mt-4 md:mt-6.5 hover:cursor-pointer">
              забронювати номер
            </button>
          </div>
        </div>

        <div className="hidden md:flex border border-[#C7C7C7] h-full justify-center items-center">
          <img src={AdvantagesImg} alt="advantages" className="w-[496px] h-[509px]" />
        </div>
      </div>
    </section>
  );
};
