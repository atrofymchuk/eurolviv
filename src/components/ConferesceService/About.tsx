import { SliderAbout } from "../Room/SliderAbout";
import { ConferenceService } from "../../store/types";
import { useModalStore } from "../../store/useModalStore";
import { RoomInfo } from "./RoomInfo";

type AboutToProps = {
  item: ConferenceService;
  isOnTop:boolean
};

export const About = ({ item,isOnTop }: AboutToProps) => {
  const { openModalOrder } = useModalStore();

  return (
    <div className="flex flex-col ">
      <div className={`grid lg:grid-cols-[396px_816px_708px] grid-cols-[40px_293px_40px] items-center justify-center lg:items-start lg:justify-normal`}>
        <div className={`lg:h-[109px] ${isOnTop ? "border-x" :'border-e'}  lg:border-x-0 border-b lg:border-b-0 lg:border-e  w-full h-[53px] border-[#C7C7C7] order-1 lg:order-none`}></div>
        <div className={`lg:h-[109px] ${isOnTop ? "border-x" :'border-s'}  lg:border-x-0 border-b lg:border-b-0  lg:border-e  w-full h-[53px] border-[#C7C7C7] order-3 lg:order-none`}></div>
        <div className={`lg:h-[109px] ${isOnTop ? "border-x" :'border-e'}  lg:border-x-0  lg:border-e  w-full h-[109px] border-[#C7C7C7] order-5 lg:order-none`}></div>
        <div className={`lg:h-[109px] ${isOnTop ? "border-x" :'border-s'}  lg:border-x-0  lg:border-e  w-full h-[109px] border-[#C7C7C7] order-6 lg:order-none lg:hidden`}></div>
        <div className={`flex  ${isOnTop ? 'border-t': ' '}   lg:border-e border-b lg:border-b-0 border-[#C7C7C7]  flex-col h-full justify-center p-2.5 lg:p-0  lg:items-center order-2 lg:order-none`}>
          <div className="font-cofo  text-[#8C331B] hidden lg:flex ">
            <RoomInfo
              area={item.area}
              capacity={item.capacity}
              roomFloor={item.floor}
            />
          </div>
        </div>

        <div className="flex flex-col-reverse lg:flex-row lg:items-center justify-center order-5 lg:order-none h-full">
  <div
    className={`lg:border-t lg:border-e items-center justify-center flex lg:block border-[#C7C7C7] lg:p-[35px] w-full relative h-full`}
  >
    <h1 className="uppercase font-cofo lg:text-[100px] text-[32px] lg:leading-[81%] lg:w-[1200px] font-semibold lg:font-normal  flex flex-col lg:tracking-[-4%] tracking-[-0.07em] leading-[90%] overflow-visible mt-auto lg:mt-0 lg:mb-0 mb-5">
      <span className="order-1 lg:order-2 inline w-fit">{item.title}</span>
      <span className="order-1 lg:order-2 inline w-fit lg:pt-2.5">{item.size}</span>
    </h1>
  </div>
</div>

        <div className="border-e border-t border-[#C7C7C7] lg:flex hidden"></div>
      </div>

      <div className="lg:grid flex flex-col lg:grid-cols-[1212px_708px] h-auto lg:h-[624px] order-7 lg:order-none">
        <div className="w-full border-[#C7C7C7] lg:border-e lg:border-t lg:w-auto">
          <SliderAbout imageSlider={item.swiperImages} />
        </div>

        <div className="flex flex-col items-center justify-center lg:gap-[24px] border-x lg:border-x-0 border-t border-[#C7C7C7] w-full lg:w-auto min-h-[300px] flex-1">
          <div className="lg:flex flex-col lg:gap-[24px] flex justify-center lg:items-center lg:w-fit w-[295px] gap-y-[13px] p-2.5 border-x border-[#C7C7C7] lg:border-x-0 h-auto">
            <div className="lg:hidden">

          <RoomInfo
              area={item.area}
              capacity={item.capacity}
              roomFloor={item.floor}
              />
              </div>
            <p className="lg:text-[20px] text-[12px] lg:leading-[24px] leading-[14.4px] lg:tracking-[-0.04em] lg:w-[532px] w-[257px] h-fit lg:text-[#8C331B] text-[#252526] uppercase pt-[30px] lg:pt-0">
              {item.about.pOne}
            </p>

            <p className="lg:text-[20px] text-[12px] lg:leading-[24px] leading-[14.4px] lg:tracking-[-0.04em] text-[#444444] w-[257px] h-fit uppercase lg:w-[532px] lg:flex hidden">
              {item.about.pTwo}
            </p>
            <button
              onClick={openModalOrder}
              className="uppercase mb-[23px] mt-auto border lg:flex hidden border-[#8C331B] text-[#8C331B] bg-[#FFFFFF] self-start lg:px-5 lg:py-3 px-[28px] py-[13px] w-fit rounded-3xl font-semibold lg:text-sm text-[12px] lg:mt-[50px] hover:cursor-pointer"
            >
              конференц <span className="">меню</span>
            </button>

            <div className="self-start pt-[10px] lg:pt-0">
              <h1 className="lg:text-[20px] tracking-[-0.05em] text-[14px] lg:leading-[20px] text-[#8C331B] uppercase font-medium">
                Контакти
              </h1>
              <ul className="lg:space-y-[9px] space-y-1 lg:pt-[21px]">
                <li className="uppercase text-[#252526] font-[500] lg:text-[18px] text-[12px] leading-[15px]">
                  +38 (073) 242 40 02
                </li>
                <li className="uppercase text-[#252526] font-[500] lg:text-[18px] text-[12px] leading-[15px]">
                  +38 (093) 242 40 02
                </li>
              </ul>
              <p className="uppercase text-[#252526] font-medium lg:text-[18px] text-[12px] leading-[15px] lg:pt-[21px] pt-[17px]">
                info@eurohotel.lviv.ua
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
