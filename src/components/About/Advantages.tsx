import './Advantages.css';

import door from '../../assets/icons/About/door.svg';
import restaurant from '../../assets/icons/About/restaurant.svg';
import karaoke from '../../assets/icons/About/karaoke.svg';
import terasse from '../../assets/icons/About/terrase.svg';
import conferenceRoom from '../../assets/icons/About/conferenceRoom.svg';
import wheelChair from '../../assets/icons/About/wheelchairuser.svg';
import parking from '../../assets/icons/About/parking.svg';
import pet from '../../assets/icons/About/pet.svg';

import reception from '../../assets/icons/About/reception.svg';
import roomService from '../../assets/icons/About/roomService.svg';
import car from '../../assets/icons/About/car.svg';
import breakfast from '../../assets/icons/About/breakfast.svg';
import airConditioning from '../../assets/icons/About/airConditioning.svg';
import wifi from '../../assets/icons/About/wifi.svg';
import ironingChlothes from '../../assets/icons/About/ironingChlothes.svg';
import washingMachine from '../../assets/icons/About/washingMachine.svg';

import AdvantagesImg from '../../assets/About/advantages.png';
import { useModalStore } from '../../store/useModalStore';

const hotelInfo = [
  { icon: door, text: 'номерів: 100' },
  { icon: wheelChair, text: 'номери для гостей з інвалідністю' },
  { icon: pet, text: 'pet-friendly' },
  { icon: parking, text: 'міський паркінг поруч' },
  { icon: conferenceRoom, text: 'конференц-зали' },
  { icon: restaurant, text: 'ресторан' },
  { icon: karaoke, text: 'караоке-лаунж' },
  { icon: terasse, text: 'літня тераса на даху' },
];

const services = [
  { icon: reception, text: 'цілодобова стійка рецепції' },
  { icon: roomService, text: 'цілодобовий рум-сервіс' },
  { icon: car, text: 'трансфер' },
  { icon: breakfast, text: 'сніданок' },
  { icon: airConditioning, text: 'кондиціонер' },
  { icon: wifi, text: 'безкоштовний Wi-Fi' },
  { icon: washingMachine, text: 'прання' },
  { icon: ironingChlothes, text: 'прасування' },
];

export const Advantages = () => {
  const { openModalOrder } = useModalStore();

  return (
    <section className="flex justify-center items-center bg-[#A47762] px-4 sm:px-6 *:font-cofo">
      <div className="container mx-auto border-x border-[#C7C7C7] grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 items-center xl:h-[684px] max-w-[1720px] gap-0">
        
      <div className="h-full p-4 flex lg:justify-start justify-center">
  <div className="flex flex-col xl:ps-7.5 items-center  lg:items-start lg:text-start">
    <h1 className="uppercase text-3xl xl:text-5xl text-[#FFFFFF] pt-[18px] xl:pt-[56px]">
      інформація <br className="hidden xl:block" /> про готель
    </h1>
    <ul className="uppercase pt-[29px] xl:pt-[52px] text-[#FFFFFF] text-[14px] xl:text-[20px] tracking-tighter xl:text-xl space-y-2">
      {hotelInfo.map(({ icon, text }, index) => (
        <li key={index} className="flex items-center gap-1.5 lg:self-end">
          <img className="icon" src={icon} alt={text} />
          {text}
        </li>
      ))}
    </ul>
  </div>
</div>


        <div className="lg:hidden flex justify-center py-6 w-full">
          <img src={AdvantagesImg} alt="advantages" className="w-[250px] h-[250px]" />
        </div>

        <div className="h-full p-4 w-full lg:border-x  border-[#C7C7C7]">
          <div className="flex flex-col ps-0 xl:ps-7.5 items-center lg:items-start">
            <h1 className="uppercase text-3xl xl:text-5xl text-[#FFFFFF] pt-[18px] xl:pt-[56px] xl:text-left">
              послуги та зручності
            </h1>
            <ul className="uppercase pt-[30px] xl:pt-[52px] text-[#FFFFFF] text-[14px] xl:text-[20px] space-y-2">
              {services.map(({ icon, text }, index) => (
                <li key={index} className="flex items-center gap-1.5">
                  <img className="icon " src={icon} alt={text} />
                  {text}
                </li>
              ))}
            </ul>
            <button 
              onClick={openModalOrder}
              className="uppercase bg-[#EDE8E5] text-[#A47762] hover:bg-[#A47762] hover:text-[#EDE8E5] border-[#EDE8E5] border w-fit xl:w-fit self-center xl:self-start px-5 py-3 rounded-3xl font-semibold text-sm mt-4 xl:mt-6.5 hover:cursor-pointer">
              забронювати номер
            </button>
          </div>
        </div>

        <div className="hidden lg:flex  h-full justify-center items-center p-4">
  <img
    src={AdvantagesImg}
    alt="advantages"
    className="w-[95%] h-auto max-w-[400px] xl:max-w-[496px] max-h-[400px] xl:max-h-[509px] object-contain"
  />
</div>

      </div>
    </section>
  );
};
