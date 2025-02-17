import { useModalStore } from "../../store/useModalStore";

import guest from "../../assets/icons/Rooms/Living Room/guests.svg";
import sofa from "../../assets/icons/Rooms/Living Room/sofa.svg";
import babybed from "../../assets/icons/Rooms/Living Room/babybed.svg";
import kid from "../../assets/icons/Rooms/Living Room/kid.svg";
import olderkid from "../../assets/icons/Rooms/Living Room/olderKid.svg";
import cup from "../../assets/icons/Rooms/Living Room/cup.svg";

import washingMachine from "../../assets/icons/About/washingMachine.svg";
import roomservice from "../../assets/icons/About/roomService.svg";
import ironing from "../../assets/icons/About/ironingChlothes.svg";
import pet from "../../assets/icons/About/pet.svg";
import parking from "../../assets/icons/About/parking.svg";

import bedwithpet from "../../assets/Rooms/LuxTwoRooms/bedwithpet.png";

const amenities = [
  { src: sofa, text: "спальне місце на дивані " },
  { src: babybed, text: "доступне дитяче ліжечко" },
  { src: kid, text: "дитина до 6 років безкоштовно" },
  { src: olderkid, text: "старше 6 років  – 700 UAH/доба" },
  { src: cup, text: "сніданок включено" },
  { src: guest, text: "max – 2 особи" },
];
const availableService = [
  { src: washingMachine, text: "прання " },
  { src: roomservice, text: "прасування" },
  { src: ironing, text: "цілодобовий рум-сервіс" },
  { src: pet, text: "pet-friendly" },
  
];

export const MoreInfo = () => {
  const { openModal } = useModalStore();

  return (
    <div className="">
      <div className="grid lg:grid-cols-[575px_474px_545px] grid-cols-[377px] items-center *:lg:h-[684px] justify-center bg-[#A47762]">
       
        <div className="lg:border-x border-[#C7C7C7] flex flex-col  items-center order-1 lg:order-none">
          <div className="w-[295px] lg:w-full border-x border-[#C7C7C7] lg:border-x-0">
            <div className="lg:p-5 p-3 lg:pt-[85px]  pb-[27px] lg:pb-5">
              <h1 className="uppercase text-white lg:text-[48px] lg:mb-[51px] lg:w-[417px] text-[32px] leading-[28.8px] mt-[54px] lg:mt-0  lg:leading-[48px]">
                додаткове місце в номері
              </h1>
              <ul className="pt-[44px] lg:pt-0">
                {amenities.map((item, index) => (
                  <li
                    key={index}
                    className="flex uppercase items-center text-[#E1E1E1] text-[14px] leading-[17px] lg:text-[20px] lg:leading-[20px] *:font-cofo space-x-3 space-y-0.25"
                  >
                    <img
                      src={item.src}
                      alt=""
                      className="lg:w-[36px] lg:h-[36px] w-[24px] h-[24px]"
                    />
                    <p className="lg:h-[26px]">{item.text}</p>
                  </li>
                ))}
              </ul>
              <button
                onClick={openModal}
                className="lg:flex hidden uppercase text-[#A47762] font-semibold bg-[#EDE8E5] w-fit h-fit  xl:mt-[100px] xl:px-[22.5px] xl:py-[13px] py-[12.5px] px-[14.5px] rounded-full mx-auto xl:mx-0 hover:cursor-pointer"
              >
                забронювати номер
              </button>
              <p className="lg:hidden flex uppercase text-[#E1E1E1] text-[14px] leading-[17px] lg:text-[20px] lg:leading-[20px] font-cofo space-x-3 mt-[35px]">
                <img src={parking} alt="" className="w-[24px] h-[24px]" />
                міський паркінг знаходиться навпроти готелю.Попередня резервація місць не передбачена.</p>
            </div>
          </div>
        </div>
        <div className="lg:border-e border-[#C7C7C7] flex items-center justify-center  order-3 lg:order-none">
          <div className="flex flex-col  lg:pt-[85px] pt-[54px] border-[#C7C7C7] border-x lg:border-x-0 lg:p-[15px] px-[10px] h-full  lg:order-none order-1 w-[295px] lg:w-full">
            <h1 className="uppercase text-white lg:text-[48px] lg:mb-[51px] lg:w-[417px] text-[32px] leading-[28.8px] mt-[34px] lg:mt-0  lg:leading-[48px]">
              доступні платні послуги
            </h1>
            <ul className="flex flex-col justify-center ">   
              {availableService.map((item, index) => (
                <li
                  key={index}
                    className={`flex uppercase items-center text-[#E1E1E1] text-[14px] leading-[17px] lg:text-[20px] lg:leading-[20px] *:font-cofo space-x-3`}
                >
                  <img
                    src={item.src}
                    alt=""
                    className="lg:w-[36px] lg:h-[36px] w-[24px] h-[24px]"
                  />
                  <p className="lg:h-[26px]  ">{item.text}</p>
                </li>
              ))}
            </ul>
            <p className="lg:flex hidden uppercase text-[#E1E1E1] text-[14px] leading-[17px] lg:text-[20px] lg:leading-[20px] font-cofo space-x-3 mt-[148px]">
                <img src={parking} alt="" className="w-[36px] h-[36px]" />
                міський паркінг знаходиться навпроти готелю.Попередня резервація місць не передбачена.</p>
            <button
                onClick={openModal}
                className="lg:hidden flex  uppercase text-[#A47762] font-semibold bg-[#EDE8E5] w-fit h-fit text-[12px]  xl:mt-[100px] xl:px-[22.5px] xl:py-[13px] py-[12.5px] px-[14.5px] rounded-full my-[42px] xl:mx-0 hover:cursor-pointer"
              >
                забронювати номер
              </button>
          </div>
        </div>
        <div className="lg:border-e   border-[#C7C7C7] flex items-center justify-center flex-col lg:order-none order-2 ">
          <div className="flex  border-x lg:border-x-0 border-[#C7C7C7] justify-center items-center lg:h-[510px] lg:w-full w-[295px] xl:pt-3   ">
            <img
              src={bedwithpet}
              alt="livingroom"
              className="lg:w-[497px] lg:h-[510px] w-[277px] h-[262px]  object-cover object-[40%_20%]  "
            />

          </div>
        </div>
      </div>
    </div>
  );
};
