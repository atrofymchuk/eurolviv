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
  const { openModal } = useModalStore();

  return (
    <div className="">
      <div
        className={`grid lg:grid-cols-[575px_474px_545px] grid-cols-[377px] items-center  *:h-full ${
          !isShowAdditionalPlace ? "*:lg:h-[684px]" : "*:lg:h-[825px]"
        }  justify-center bg-[#A47762]`}
      >
        <div className="lg:border-x border-[#C7C7C7] flex flex-col  items-center order-1 lg:order-none">
          <div className="w-[295px] lg:w-full border-x border-[#C7C7C7] lg:border-x-0">
            <div className="lg:p-5 p-3 lg:pt-[85px]  pb-[27px] lg:pb-5 ">
              <div className={`${!isShowAdditionalPlace ? "hidden" : ""}`}>
                <h1 className="uppercase text-white lg:text-[48px] lg:mb-[51px] lg:w-[417px] text-[32px] leading-[28.8px] mt-[34px] lg:mt-0  lg:leading-[48px]">
                  доступні платні послуги
                </h1>
                <img
                  src={coffee}
                  alt=""
                  className="lg:w-[537px] lg:h-[512px] w-[276px] h-[262px] object-cover lg:flex hidden"
                />
              </div>

              <div
                className={` ${
                  !isShowAdditionalPlace ? "" : " lg:pt-[200px]"
                } `}
              >
                <h1
                  className={` ${
                    !isShowAdditionalPlace ? "lg:pb-0 pb-[47px]" : "hidden"
                  }   uppercase text-white lg:text-[48px] lg:mb-[51px] lg:w-[417px] text-[32px] leading-[28.8px] mt-[42px] lg:mt-0  lg:leading-[48px]`}
                >
                  додаткове місце в номері
                </h1>

                <ul className={`${isShowAdditionalPlace ? "hidden" : ""}`}>
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
                  className={`  ${
                    isShowAdditionalPlace ? "hidden" : "lg:flex hidden"
                  } uppercase text-[#A47762] font-semibold bg-[#EDE8E5] w-fit h-fit text-[12px] lg:text-[14px]  xl:mt-[100px] xl:px-[22.5px] xl:py-[13px] py-[12.5px] px-[14.5px] rounded-full my-[42px] xl:mx-0 hover:cursor-pointer`}
                >
                  забронювати номер
                </button>

                <p
                  className={` ${
                    isShowAdditionalPlace ? "lg:flex hidden" : "lg:hidden flex "
                  } uppercase text-[#E1E1E1] text-[14px] leading-[17px] lg:text-[20px] lg:leading-[20px] font-cofo space-x-3 mt-[35px]`}
                >
                  <img src={parking} alt="" className="w-[24px] h-[24px]" />
                  міський паркінг знаходиться навпроти готелю.Попередня
                  резервація місць не передбачена.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`lg:border-e border-[#C7C7C7] flex items-center justify-center ${
            isShowAdditionalPlace ? "order-2 " : "order-4 "
          }   lg:order-none`}
        >
          <div
            className={`flex flex-col justify-center  items-center lg:items-start  ${
              isShowAdditionalPlace ? "lg:pt-[170px]" : "  "
            }  border-[#C7C7C7] border-x lg:border-x-0 lg:ps-[41px] px-[10px] h-full  lg:order-none order-1 w-[295px] lg:w-full`}
          >
            <h1
              className={`uppercase text-white lg:text-[48px] lg:mb-[51px] lg:w-[417px] text-[32px] leading-[28.8px] mt-[34px] lg:mt-0  lg:leading-[48px] ${
                !isShowAdditionalPlace ? "lg:pb-0 pb-[47px]" : "hidden   "
              }`}
            >
              доступні платні послуги
            </h1>
            <ul className={`flex  flex-col lg:justify-center  `}>
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
            <p
              className={`lg:flex hidden uppercase text-[#E1E1E1] text-[14px] leading-[17px] lg:text-[20px] lg:leading-[20px] font-cofo space-x-3 mt-[148px] ${
                isShowAdditionalPlace ? "" : ""
              }`}
            >
              <img src={parking} alt="" className="w-[36px] h-[36px]" />
              міський паркінг знаходиться навпроти готелю.Попередня резервація
              місць не передбачена.
            </p>
            <button
              onClick={openModal}
              className={` self-start ${
                !isShowAdditionalPlace ? "lg:hidden" : "lg:flex "
              } uppercase text-[#A47762] font-semibold bg-[#EDE8E5] w-fit h-fit text-[12px] lg:text-[14px]  xl:mt-[100px] xl:px-[22.5px] xl:py-[13px] py-[12.5px] px-[14.5px] rounded-full my-[42px] xl:mx-0 hover:cursor-pointer`}
            >
              забронювати номер
            </button>
          </div>
        </div>
        <div
          className={`lg:border-e   border-[#C7C7C7] flex items-center justify-center lg:justify-normal  flex-col lg:order-none order-2 ${
            isShowAdditionalPlace ? "lg:pt-[96px]" : ""
          }`}
        >
          <div
            className={`flex flex-col lg:pt-[50px] border-x lg:border-x-0 border-[#C7C7C7] justify-center items-center lg:h-full lg:w-full w-[295px] `}
          >
            <img
              src={`${!isShowAdditionalPlace ? bedwithpet : coffee}`}
              alt="livingroom"
              className={`lg:w-[497px] lg:h-[510px] w-[277px] h-[262px]  object-cover object-[40%_80%] ${
                !isShowAdditionalPlace ? "lg: flex " : "lg:hidden flex"
              } `}
            />
            <img
              src={`${isShowAdditionalPlace ? bedwithpet : coffee}`}
              alt="livingroom"
              className={`lg:w-[497px] lg:h-[510px] w-[277px] h-[262px]  object-cover object-[40%_80%] ${
                isShowAdditionalPlace ? "lg:flex hidden " : "lg:flex hidden"
              } `}
            />
            <p
              className={` ${
                !isShowAdditionalPlace ? "hidden " : "lg:hidden flex "
              } uppercase text-[#E1E1E1] text-[14px] leading-[17px] lg:text-[20px] lg:leading-[20px] font-cofo space-x-3 mt-[24px] p-3`}
            >
              <img src={parking} alt="" className="w-[24px] h-[24px]" />
              міський паркінг знаходиться навпроти готелю.Попередня резервація
              місць не передбачена.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
