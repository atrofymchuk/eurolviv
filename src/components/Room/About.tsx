import house from "../../assets/icons/Rooms/house.svg";
import square from "../../assets/icons/Rooms/squareBrown.svg";
import guests from "../../assets/icons/Rooms/guestsBrown.svg";

import room from "../../assets/Rooms/LuxTwoRooms/room.jpg";
import bathroomFirst from "../../assets/Rooms/LuxTwoRooms/bathroom.jpg";
import bathroomSecond from "../../assets/Rooms/LuxTwoRooms/bathroom2.jpg";
import livingRoomFirst from "../../assets/Rooms/LuxTwoRooms/livingRoom.jpg";
import livingRoomSecond from "../../assets/Rooms/LuxTwoRooms/livingRoom2.jpg";
import bedRoomFirst from "../../assets/Rooms/LuxTwoRooms/bedroom.jpg";
import bedRoomSecond from "../../assets/Rooms/LuxTwoRooms/bedroom2.jpg";

import { SliderAbout } from "./SliderAbout";
import { useModalStore } from "../../store/useModalStore";

export const About = () => {
  const imageSlider = [
    room,
    bathroomFirst,
    bathroomSecond,
    livingRoomFirst,
    livingRoomSecond,
    bedRoomFirst,
    bedRoomSecond,
  ];

  const { openModal } = useModalStore();

  return (
    <div>
      <div className="grid lg:grid-cols-[393px_819px_708px] grid-cols-[40px_295px_40px] items-center justify-center lg:items-start lg:justify-normal">
        <div className="lg:h-[109px] border-x lg:border-x-0 border-b lg:border-b-0 lg:border-e  w-full h-[109px] border-[#C7C7C7] order-1 lg:order-none"></div>
        <div className="lg:h-[109px] border-x lg:border-x-0 border-b lg:border-b-0  lg:border-e  w-full h-[109px] border-[#C7C7C7] order-3 lg:order-none"></div>
        <div className="lg:h-[109px] border-x lg:border-x-0  lg:border-e  w-full h-[109px] border-[#C7C7C7] order-5 lg:order-none"></div>
        <div className="lg:h-[109px] border-x lg:border-x-0  lg:border-e  w-full h-[109px] border-[#C7C7C7] order-6 lg:order-none lg:hidden"></div>
        <div className="border-t  lg:border-e border-b lg:border-b-0 border-[#C7C7C7] flex flex-col h-full justify-center p-2.5 lg:p-0  lg:items-center order-2 lg:order-none">
          <div className="font-cofo  text-[#8C331B] pt-[22px]">
            <div className="lg:space-y-1.5">
              <p className="flex uppercase lg:text-[20px] text-[12px] lg:leading-[25.2px] leading-[15px] items-center   ">
                <img src={house} alt="houseicon" className="pe-2 w-[22px] h-[22px] lg:w-fit" /> площа
                номера: <span className="font-semibold">&nbsp;38 М²</span>
              </p>
              <p className="flex uppercase lg:text-[20px] text-[12px] lg:leading-[25.2px] leading-[15px] items-center ">
                <img src={square} alt="houseicon" className="pe-2 w-[22px] h-[22px] lg:w-fit" /> кількість
                кімнат: <span className="font-semibold">&nbsp;2</span>
              </p>
              <p className="flex uppercase lg:text-[20px] text-[12px] lg:leading-[25.2px] leading-[15px] items-center">
                <img src={guests} alt="houseicon" className="pe-2 w-[22px] h-[22px] lg:w-fit" /> кількість
                гостей: <span className="font-semibold">&nbsp;2+2</span>
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center order-5 lg:order-none">
          <div className="lg:border-t lg:border-e   items-center justify-center flex lg:block border-[#C7C7C7] lg:p-7 w-full">
            <h1 className="uppercase font-cofo lg:text-[100px] text-[32px] lg:leading-[81px] w-[278px] lg:w-fit font-semibold lg:font-normal leading-[28px] flex flex-col tracking-[-0.04em]">
             <span className="order-2 lg:order-1">люкс</span>  <span className="order-1 lg:order-2">двокімнатний </span>
            </h1>
          </div>
        </div>
        <div className="border-e border-t border-[#C7C7C7] lg:flex hidden"></div>
      </div>

      <div className="lg:grid lg:grid-cols-[1212px_708px] lg:grid-rows-none grid-cols-[337px] h-[588px] lg:h-fit  order-7 lg:order-none">
        <div className="object-contain lg:border-e lg:border-t w-full border-[#C7C7C7] ">
          <SliderAbout imageSlider={imageSlider} /> 
        </div>
        <div className="flex flex-col items-center justify-center lg:gap-[24px]  border-x lg:border-x-0 border-t border-[#C7C7C7]">
          <div className="lg:flex flex-col lg:gap-[24px] flex justify-center lg:items-center lg:w-fit w-[295px] gap-y-[13px] p-2.5 border-x border-[#C7C7C7] lg:border-x-0 h-[342px]">
            <p className="lg:text-[20px] text-[12px] lg:leading-[24px] leading-[14.4px] lg:tracking-[-0.04em] lg:w-[532px] w-[257px] h-fit pt-[26px] text-[#8C331B] uppercase">
              Двокімнатний просторий номер з балконом, зручним робочим місцем і
              зоною для відпочинку стане ідеальним вибором для тих, хто цінує
              високий рівень комфортного проживання.
            </p>

            <p className="lg:text-[20px] text-[12px] lg:leading-[24px] leading-[14.4px] lg:tracking-[-0.04em] text-[#444444]  w-[257px] h-fit uppercase lg:w-[532px]">
              Диван з функцією ліжка створює можливість для розміщення сімʼї або
              ж перетворює номер на затишне місце для перезавантаження після
              ділових зустрічей.
            </p>
            <button
              onClick={openModal}
              className="uppercase mb-[23px] mt-auto bg-[#8C331B] text-[#FFFFFF]  self-start lg:px-5 lg:py-3 px-[28px] py-[13px] w-fit rounded-3xl font-semibold lg:text-sm text-[12px]   lg:mt-[50px] hover:cursor-pointer"
            >
              забронювати <span className="lg:inline hidden">номер</span>
            </button>
          </div>
        </div>
      </div>
      <div className="lg:grid lg:items-center  justify-center lg:grid-cols-[575px_474px_545px] order-8 lg:order-none hidden">
        <div className="h-[84px] border-s  border-e border-[#C7C7C7]"></div>
        <div className="h-[84px] border-e border-[#C7C7C7]"></div>
        <div className="h-[84px]  border-[#C7C7C7] "></div>
      </div>

    </div>
  );
};
