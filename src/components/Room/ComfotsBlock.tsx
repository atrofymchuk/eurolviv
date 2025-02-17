import livingRoomFirst from "../../assets/Rooms/LuxTwoRooms/livingRoom.jpg";
import livingRoomSecond from "../../assets/Rooms/LuxTwoRooms/livingRoom2.jpg";

import TV from "../../assets/icons/Rooms/Living Room/TV.svg";
import armChair from "../../assets/icons/Rooms/Living Room/armChair.svg";
import balcony from "../../assets/icons/Rooms/Living Room/balcony.svg";
import cabinet from "../../assets/icons/Rooms/Living Room/cabinet.svg";
import carpet from "../../assets/icons/Rooms/Living Room/carpet.svg";
import kettle from "../../assets/icons/Rooms/Living Room/kettle.svg";
import minibar from "../../assets/icons/Rooms/Living Room/minibar.svg";
import phone from "../../assets/icons/Rooms/Living Room/phone.svg";
import safe from "../../assets/icons/Rooms/Living Room/safe.svg";
import sofa from "../../assets/icons/Rooms/Living Room/sofa.svg";
import tea from "../../assets/icons/Rooms/Living Room/tea.svg";
import wardrobe from "../../assets/icons/Rooms/Living Room/wardrobe.svg";
import airCondition from "../../assets/icons/About/airConditioning.svg";
import wifi from "../../assets/icons/About/wifi.svg";

const amenities = [
  { src: sofa, text: "диван-ліжко" },
  { src: armChair, text: "м'яке крісло" },
  { src: balcony, text: "балкон" },
  { src: carpet, text: "килимове покриття" },
  { src: wardrobe, text: "гардеробна" },
  { src: cabinet, text: "робочий стіл" },
  { src: airCondition, text: "кондиціонер" },
  { src: TV, text: "LCD TV 52 ДЮЙМИ" },
  { src: minibar, text: "мінібар" },
  { src: kettle, text: "чайник" },
  { src: tea, text: "чайний набір" },
  { src: phone, text: "телефон" },
  { src: wifi, text: "wi-fi" },
  { src: safe, text: "сейф" },
];

export const ComfortsBlock = () => {
  return (
    <div className="">
      <div className="grid lg:grid-cols-[575px_474px_545px] grid-cols-[377px] items-center *:lg:h-[840px] justify-center bg-[#A47762]">
        <div className="lg:border-x border-[#C7C7C7] flex flex-col justify-center items-center">
            <div className="w-[295px] lg:w-full border-x border-[#C7C7C7] lg:border-x-0">

          <div className="p-5 pb-[22px] lg:pb-5">
            <h1 className="uppercase text-white lg:text-[48px] lg:mb-[51px] lg:w-[313px] text-[32px] leading-[28.8px] mt-[34px] lg:mt-0  lg:leading-[48px]">
              зручності у вітальні
            </h1>
          </div>
          <div className="flex justify-center items-center lg:h-[510px]">
            <img
              src={livingRoomFirst}
              alt="livingroom"
              className="lg:w-[533px] lg:h-[510px] object-cover  lg:flex hidden"
            />
          </div>
            </div>
        </div>
        <div className="lg:border-e border-[#C7C7C7] lg:order-none flex items-center justify-center  ">
          <div className="flex flex-col lg:p-[36px] border-[#C7C7C7] border-x lg:border-x-0 p-[15px] h-full justify-center lg:pt-[220px] lg:order-none order-1 w-[295px] lg:w-full">
            <ul>
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
          </div>
        </div>
        <div className="lg:border-e   border-[#C7C7C7] flex items-center justify-center flex-col lg:order-none order-2 ">
          <div className="flex lg:pt-[190px] border-x lg:border-x-0 border-[#C7C7C7] justify-center items-center lg:h-[510px] lg:w-full w-[295px]  pb-[28px]">
            <img
              src={livingRoomSecond}
              alt="livingroom"
              className="w-[497px] h-[510px]  object-cover object-[40%_20%] lg:flex hidden"
            />
            <img
              src={livingRoomFirst}
              alt="livingroom"
              className="lg:w-[533px] lg:h-[510px] w-[276px] h-[262px] object-cover flex lg:hidden"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
