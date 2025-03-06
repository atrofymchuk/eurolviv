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

import AdvantagesImg from '../../assets/About/advantages.webp';
import { useModalStore } from '../../store/useModalStore';

import { useTranslation } from 'react-i18next';
import { InViewWrapper } from '../InViewWrapper';


export const Advantages = () => {
  const { onOpenModal } = useModalStore();
  const {t} = useTranslation()
  const hotelInfo = [
    { icon: door, text: t("about.advantages.services.0") },
    { icon: wheelChair, text: t("about.advantages.services.1") },
    { icon: pet, text: t("about.advantages.services.2") },
    { icon: parking, text: t("about.advantages.services.3") },
    { icon: conferenceRoom, text: t("about.advantages.services.4") },
    { icon: restaurant, text: t("about.advantages.services.5") },
    { icon: karaoke, text: t("about.advantages.services.6") },
    { icon: terasse, text: t("about.advantages.services.7") },
  ];
  
  const services = [
    { icon: reception, text: t("about.advantages.servises2.0") },
    { icon: roomService, text: t("about.advantages.servises2.1") },
    { icon: car, text: t("about.advantages.servises2.2") },
    { icon: breakfast, text: t("about.advantages.servises2.3") },
    { icon: airConditioning, text: t("about.advantages.servises2.4") },
    { icon: wifi, text: t("about.advantages.servises2.5") },
    { icon: washingMachine, text: t("about.advantages.servises2.6") },
    { icon: ironingChlothes, text: t("about.advantages.servises2.7") },
  ];

  return (
    <section className="flex justify-center items-center bg-[#A47762] px-4 sm:px-6 *:font-cofo">
      <div className="container mx-auto border-x border-[#C7C7C7] grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 items-center xl:h-[684px] max-w-[1720px] gap-0">
        
      <div className="h-full p-4 flex lg:justify-start justify-center">
  <div className="flex flex-col xl:ps-7.5 items-center  lg:items-start lg:text-start">
    <h1 className="uppercase text-3xl xl:text-5xl text-[#FFFFFF] pt-[18px] xl:pt-[56px]">
      {t("about.advantages.title")}
    </h1>
    <ul className="uppercase pt-[29px] xl:pt-[52px] text-[#FFFFFF] text-[14px] xl:text-[20px] tracking-tighter xl:text-xl space-y-2">
      {hotelInfo.map(({ icon, text }, index) => (
        <li key={index} className="flex items-center gap-1.5 lg:self-end">
          <InViewWrapper>
          <img className="icon" src={icon} alt={text} />
          </InViewWrapper>
          {text}
        </li>
      ))}
    </ul>
  </div>
</div>


        <div className="lg:hidden flex justify-center py-6 w-full"> 
          <InViewWrapper>
          <img src={AdvantagesImg} alt="advantages" className="w-[250px] h-[250px]" />
          </InViewWrapper>
        </div>

        <div className="h-full p-4 w-full lg:border-x  border-[#C7C7C7]">
          <div className="flex flex-col ps-0 xl:ps-7.5 items-center lg:items-start">
            <h1 className="uppercase text-3xl xl:text-5xl text-[#FFFFFF] pt-[18px] xl:pt-[56px] xl:text-left">
              {t("about.advantages.title2")}
            </h1>
            <ul className="uppercase pt-[30px] xl:pt-[52px] text-[#FFFFFF] text-[14px] xl:text-[20px] space-y-2">
              {services.map(({ icon, text }, index) => (
                <li key={index} className="flex items-center gap-1.5">
                  <InViewWrapper>
                  <img className="icon " src={icon} alt={text} />
                  </InViewWrapper>
                  {text}
                </li>
              ))}
            </ul>
            <button 
              onClick={()=>onOpenModal('order')}
              className="uppercase bg-[#EDE8E5] text-[#A47762] hover:bg-[#A47762] hover:text-[#EDE8E5] border-[#EDE8E5] border w-fit xl:w-fit self-center xl:self-start px-5 py-3 rounded-3xl font-semibold text-sm mt-4 xl:mt-6.5 hover:cursor-pointer">
              {t("buttons.bookRoom")}
            </button>
          </div>
        </div>

        <div className="hidden lg:flex  h-full justify-center items-center p-4">
          <InViewWrapper>
          <img
            src={AdvantagesImg}
            alt="advantages"
    className="w-[95%] h-auto max-w-[400px] xl:max-w-[496px] max-h-[400px] xl:max-h-[509px] object-contain"
  />
  </InViewWrapper>
</div>

      </div>
    </section>
  );
};
