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

import bedwithpet from "../../assets/Rooms/AdditionaInfo/bedwithpet.png";
import coffee from "../../assets/Rooms/AdditionaInfo/coffee.jpg";

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

type MoreInfoToProps = {
  isShowAdditionalPlace: boolean;
};

export const MoreInfo = ({ isShowAdditionalPlace }: MoreInfoToProps) => {
  const { openModalOrder } = useModalStore();

  return (
    <div className="bg-[#A47762] px-4 sm:px-6 md:px-6 lg:px-10 xl:px-6 ">
      <div className=" container-fluid mx-auto max-w-[1720px]">
        <div className="grid  
          grid-cols-1 
          md:grid-cols-[1fr_1fr] 
          lg:grid-cols-[350px_350px_350px] 
          xl:grid-cols-[1fr_1fr_1fr]
          2xl:grid-cols-[1fr_1fr_1fr]
          lg:items-center lg:justify-center 
          border-x border-[#C7C7C7]">

          {/* Перша колонка */}
          <div className="flex flex-col justify-center items-center 
            py-6 md:py-0 lg:py-0 xl:py-0 2xl:ps-5 
            md:col-span-2 lg:col-span-1
            
            2xl:h-[825px]">
            <div className="w-[90%] sm:w-[400px] md:w-[500px] lg:w-fit xl:w-full 
              ">
              
              {/* Секція для додаткових послуг */}
              <div className={`${isShowAdditionalPlace ? "flex flex-col" : "hidden"} px-5 lg:px-0`}>
                <h1 className="uppercase text-white font-cofo text-center lg:text-left
                  text-[24px] sm:text-[28px] md:text-[32px] lg:text-[40px] xl:text-[48px]
                  leading-[1.2] sm:leading-[1.3] md:leading-[1.4] lg:leading-[1.5]
                  2xl:mb-[51px]">
                  доступні платні послуги
                </h1>
                <img
                  src={coffee}
                  alt="coffee"
                  className="hidden lg:block 
                    w-full h-[300px] md:h-[400px]
                    lg:w-[330px] lg:h-[411px] 
                    2xl:w-[537px] 2xl:h-[512px]
                    
                    object-cover"
                />
              </div>

              {/* Секція для додаткового місця */}
              <div className={!isShowAdditionalPlace ? "block" : "hidden"}>
                <h1 className="uppercase text-white font-cofo
                  text-[24px] sm:text-[28px] md:text-[32px] lg:text-[40px] xl:text-[48px] 
                  leading-[1.2] sm:leading-[1.3] md:leading-[1.4] lg:leading-[1.5]
                  mb-6 sm:mb-8 md:mb-10 lg:mb-[51px]">
                  додаткове місце в номері
                </h1>
                
                <ul className="">
                  {amenities.map((item, index) => (
                    <li key={index}
                      className="flex items-center text-[#E1E1E1] uppercase font-cofo
                        space-x-3 sm:space-x-4">
                      <img
                        src={item.src}
                        alt="amenities"
                        className="w-[20px] h-[20px] 
                          sm:w-[24px] sm:h-[24px] 
                          md:w-[28px] md:h-[28px] 
                          lg:w-[32px] lg:h-[32px] 
                          xl:w-[36px] xl:h-[36px]"
                      />
                      <p className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px]
                        leading-[1.2] sm:leading-[1.3] md:leading-[1.4] lg:leading-[1.5]">
                        {item.text}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Друга колонка */}
          <div className="lg:border-x border-[#C7C7C7] 
            flex lg:items-start justify-center 
            2xl:h-[825px] ">
            <div className="w-[90%] sm:w-[400px] md:w-[300px] lg:w-full 
              px-4 sm:px-6 lg:px-6 xl:ps-[36px] md:py-10 
              lg:pt-[200px] xl:pt-[120px] 2xl:pt-[170px]">
              
              <h1 className={!isShowAdditionalPlace ? "block" : "hidden " + 
                " uppercase text-white font-cofo" +
                " text-[24px] sm:text-[28px] md:text-[32px] lg:text-[40px]  xl:text-[48px] " +
                " leading-[1.2] sm:leading-[1.3] md:leading-[1.4] lg:leading-[1.5]" +
                " mb-6 sm:mb-8 md:mb-10 lg:mb-[51px]"}>
                доступні платні послуги
              </h1>

              <ul className="">
                {availableService.map((item, index) => (
                  <li key={index}
                    className="flex items-center text-[#E1E1E1] uppercase font-cofo
                      space-x-3 sm:space-x-4">
                    <img
                      src={item.src}
                      alt="service"
                      className="w-[20px] h-[20px] 
                        sm:w-[24px] sm:h-[24px] 
                        md:w-[28px] md:h-[28px] 
                        lg:w-[32px] lg:h-[32px] 
                        xl:w-[36px] xl:h-[36px]"
                    />
                    <p className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px]
                      leading-[1.2] sm:leading-[1.3] md:leading-[1.4] lg:leading-[1.5]">
                      {item.text}
                    </p>
                  </li>
                ))}
              </ul>

              {/* Паркінг інформація */}
              <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-[148px]
                flex items-center text-[#E1E1E1] uppercase font-cofo
                space-x-3 sm:space-x-4">
                <img
                  src={parking}
                  alt="parking icon"
                  className="w-[20px] h-[20px] 
                    sm:w-[24px] sm:h-[24px] 
                    md:w-[28px] md:h-[28px] 
                    lg:w-[32px] lg:h-[32px] 
                    xl:w-[36px] xl:h-[36px]"
                />
                <p className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] mt-auto
                  leading-[1.2] sm:leading-[1.3] md:leading-[1.4] lg:leading-[1.5]">
                  міський паркінг знаходиться навпроти готелю. 
                  Попередня резервація місць не передбачена.
                </p>
                
              </div>
              <button
                onClick={openModalOrder}
                className={`mt-6 sm:mt-8 md:mt-10 lg:mt-[100px] ${!isShowAdditionalPlace ? "hidden" : "block"}
                  uppercase font-semibold 
                  bg-[#EDE8E5] text-[#A47762]
                  text-[12px] sm:text-[13px] md:text-[14px]
                  px-4 sm:px-5 md:px-6 lg:px-[22.5px]
                  py-2 sm:py-2.5 md:py-3 lg:py-[13px]
                  rounded-full
                  hover:bg-white transition-colors`}>
                забронювати номер
              </button>
            </div>
           
          </div>

          <div className="flex items-center justify-center 
            py-6 md:py-8 lg:py-0
            2xl:h-[825px]">
            <div className="w-[90%] sm:w-[400px] md:w-[400px] lg:w-full  
              lg:h-[441px] xl:h-[510px]
              lg:pt-[70px] px-5 lg:px-0 ">
              <img
                src={isShowAdditionalPlace ? bedwithpet : coffee}
                alt="room image"
                className="w-full 
                  h-[230px] sm:h-[300px] md:h-[350px]
                  lg:ps-5 
                  lg:w-[330px] lg:h-[411px] lg:pt-[10px]
                  2xl:w-[497px] 2xl:h-[510px] 
                  object-cover"
              />
              
              <button
                onClick={openModalOrder}
                className={`mt-6 sm:mt-8 md:mt-10 lg:mt-[100px] ${isShowAdditionalPlace ? "hidden" : "flex"}
                  uppercase font-semibold 
                  bg-[#EDE8E5] text-[#A47762]
                  text-[12px] sm:text-[13px] md:text-[14px]
                  px-4 sm:px-5 md:px-6 lg:px-[22.5px]
                  py-2 sm:py-2.5 md:py-3 lg:py-[13px]
                  rounded-full
                  hover:bg-white transition-colors`}>
                забронювати номер
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
