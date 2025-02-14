import house from "../../assets/icons/Rooms/house.svg";
import square from "../../assets/icons/Rooms/squareBrown.svg";
import guests from "../../assets/icons/Rooms/guestsBrown.svg";

import room from "../../assets/Rooms/LuxTwoRooms/room.jpg";

export const About = () => {
  return (
    <div>
      <div className="grid lg:grid-cols-[393px_819px_708px]">
        <div className="lg:h-[109px] border-e border-[#C7C7C7]"></div>
        <div className="lg:h-[109px] border-e border-[#C7C7C7]"></div>
        <div className="lg:h-[109px] border-e border-[#C7C7C7]"></div>
        <div className="border-t border-e border-[#C7C7C7] flex flex-col justify-center items-center">
          <div className="font-cofo  text-[#8C331B] ">
            <div className="space-y-1.5">
              <p className="flex uppercase lg:text-[20px] lg:leading-[25.2px]   ">
                <img src={house} alt="houseicon" className="pe-2" /> площа
                номера: <span className="font-semibold">&nbsp;38 М²</span>
              </p>
              <p className="flex uppercase lg:text-[20px] lg:leading-[25.2px] ">
                <img src={square} alt="houseicon" className="pe-2" /> кількість
                кімнат: <span className="font-semibold">&nbsp;2</span>
              </p>
              <p className="flex uppercase lg:text-[20px] lg:leading-[25.2px] ">
                <img src={guests} alt="houseicon" className="pe-2" /> кількість
                гостей: <span className="font-semibold">&nbsp;2+2</span>
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center ">
          <div className="border-t border-e border-[#C7C7C7] lg:p-7">
            <h1 className="uppercase font-cofo lg:text-[100px] leading-[81px] tracking-[-0.04em]">
              люкс двокімнатний
            </h1>
          </div>
        </div>
        <div className="border-e border-t border-[#C7C7C7]"></div>
      </div>

      <div className="grid grid-cols-[1212px_708px] h-[523px]">
        <div className="object-contain border-e border-t border-[#C7C7C7]">
          <img
            src={room}
            alt="room"
            className="object-cover h-[523px] w-full object-[30%_70%]"
          />
        </div>
        <div>
          <p className="lg:text-[20px]  leading-[24px] tracking-[-0.04em] text-[#8C331B]">
            
            Двокімнатний просторий номер з балконом, зручним робочим місцем і
            зоною для відпочинку стане ідеальним вибором для тих, хто цінує
            високий рівень комфортного проживання.
          </p>
          
          <p className="lg:text-[20px]  leading-[24px] tracking-[-0.04em] text-[#444444]">
            
          Диван з функцією ліжка створює можливість для розміщення сімʼї або ж перетворює номер на затишне місце для перезавантаження після ділових зустрічей.
          </p>
          
        </div>
      </div>
    </div>
  );
};
