import { SliderAbout } from "../Room/SliderAbout";
import { ConferenceService } from "../../store/types";
import { useModalStore } from "../../store/useModalStore";
import { RoomInfo } from "./RoomInfo";

type AboutToProps = {
  item: ConferenceService;
  isOnTop:boolean
};

export const About = ({ item, isOnTop }: AboutToProps) => {
  const { openModalOrder } = useModalStore();

  return (
    <div className="flex flex-col">
      <div className={`grid 2xl:grid-cols-[21%_42%_37%] lg:grid-cols-[21%_42%_37%]  grid-cols-[7.5%_85%_7.5%] items-center justify-center 2xl:items-start 2xl:justify-normal`}>
        <div className={`2xl:h-[109px] ${isOnTop ? "lg:border- " :'  '} 2xl:border-x-0 box-border border-b  w-full h-[109px] border-[#C7C7C7] order-1 lg:order-none`}></div>
        <div className={`2xl:h-[109px] ${isOnTop ? "lg:border-b  lg:border-x" :'lg:border-x border-b'} 2xl:border-x box-border border-b  2xl:border-e w-full h-[109px] border-[#C7C7C7] order-3 lg:order-none`}></div>
        <div className={`2xl:h-[109px] ${isOnTop ? " lg:border-b " :' lg:border-b '} 2xl:border-x-0 box-border  w-full h-[109px] border-[#C7C7C7] order-5 lg:order-none`}></div>
        <div className={`2xl:h-[109px] ${isOnTop ? "lg:border-e " :' '} box-border  w-full h-[109px] border-[#C7C7C7] order-6 lg:order-none lg:hidden`}></div>
        <div className={`flex ${isOnTop ? 'lg:border-x-0 border-x' : ' border-x lg:border-x-0'}  border-b 2xl:border-b-0 border-[#C7C7C7] flex-col h-full justify-center p-2.5 2xl:p-0 2xl:items-center
         order-2 lg:order-none`}>
          <div className="font-cofo text-[#8C331B] hidden lg:flex">
            <RoomInfo
              area={item.area}
              capacity={item.capacity}
              roomFloor={item.floor}
            />
          </div>
        </div>

        <div className="flex flex-col-reverse lg:flex-row 2xl:items-center justify-center order-5 lg:order-none h-full">
          <div className={`${isOnTop ? ' lg:border-x border-x' : 'lg:border-x  border-x'} items-center justify-center flex 2xl:block border-[#C7C7C7] 2xl:p-[35px] w-full relative h-full `}>
            <h1 className="uppercase font-cofo 2xl:text-[100px] text-[32px] sm:text-[40px] md:text-[48px] 2xl:leading-[81%] 2xl:w-[1200px] font-semibold 2xl:font-normal flex flex-col 2xl:tracking-[-4%] tracking-[-0.07em] leading-[90%] overflow-visible mt-auto 2xl:mt-0 2xl:mb-0 mb-5">
              <span className="order-1 2xl:order-2 inline w-fit">{item.title}</span>
              <span className="order-1 2xl:order-2 inline w-fit 2xl:pt-2.5">{item.size}</span>
            </h1>
          </div>
        </div>

        <div className="border-e   border-[#C7C7C7] 2xl:flex hidden"></div>
      </div>

      <div className="grid  flex-col  lg:grid-cols-[63%_37%] h-auto grid-cols-1  2xl:h-[624px] order-7 lg:order-none ">
        <div className="h-full border-[#C7C7C7] 2xl:border-e 2xl:border-t overflow-hidden">
          <div className="h-full">
            <SliderAbout imageSlider={item.swiperImages} />
          </div>
        </div>
        <div className="flex flex-col 2xl:items-center justify-center items-center border-x md:border-x-0 2xl:border-x-0 border-t lg:border-s-0 px-[7.5%] border-[#C7C7C7] w-full 2xl:w-auto min-h-[300px] flex-1">
          <div className="lg:flex flex-col flex justify-center items-center 2xl:items-center  2xl:w-fit  p-2.5 border-x  lg:border-x-0 border-[#C7C7C7] 2xl:border-x-0 h-auto w-full lg:w-auto ">
            <div className="lg:hidden ">
              <RoomInfo
                area={item.area}
                capacity={item.capacity}
                roomFloor={item.floor}
              />
            </div>
            <p className="2xl:text-[20px] text-[12px] sm:text-[14px]  text-center lg:text-left md:text-[16px] 2xl:leading-[24px] leading-[14.4px] 2xl:tracking-[-0.04em] 2xl:w-[532px] w-[256px] lg:w-fit h-fit lg:leading-[20px] 2xl:text-[#8C331B] text-[#252526] uppercase pt-[10px] xl:pt-[30px] 2xl:pt-0">
              {item.about.pOne}
            </p>

            <p className="2xl:text-[20px] text-[12px] sm:text-[14px]  md:text-[16px] 2xl:leading-[24px] leading-[14.4px] 2xl:tracking-[-0.04em] text-[#444444] w-[2] h-fit uppercase 2xl:w-[532px] lg:flex hidden">
              {item.about.pTwo}
            </p>
            <button
              onClick={openModalOrder}
              className="uppercase mb-[23px] mt-auto border lg:flex hidden border-[#8C331B] text-[#8C331B] hover:bg-[#8C331B] hover:text-[#FFFFFF] bg-[#FFFFFF] self-center 2xl:px-5 2xl:py-3 px-[28px] py-[13px] w-fit rounded-3xl font-semibold 2xl:text-sm text-[12px] 2xl:mt-[50px] hover:cursor-pointer"
            >
              конференц <span className="">&nbsp;меню</span>
            </button>

            <div className="self-center lg:self-start pt-[10px] 2xl:pt-0 text-center lg:text-left">
              <h1 className="2xl:text-[20px] tracking-[-0.05em] text-[14px] sm:text-[16px] md:text-[18px] 2xl:leading-[20px] text-[#8C331B] uppercase font-medium">
                Контакти
              </h1>
              <ul className="2xl:space-y-[9px] space-y-1 2xl:pt-[21px] ">
                <li className="uppercase text-[#252526] font-[500] 2xl:text-[18px] text-[12px] sm:text-[14px] md:text-[16px] leading-[15px]">
                  +38 (073) 242 40 02
                </li>
                <li className="uppercase text-[#252526] font-[500] 2xl:text-[18px] text-[12px] sm:text-[14px] md:text-[16px] leading-[15px]">
                  +38 (093) 242 40 02
                </li>
              </ul>
              <p className="uppercase text-[#252526] font-medium 2xl:text-[18px] text-[12px] sm:text-[14px] md:text-[16px] leading-[15px] 2xl:pt-[21px] pt-[17px]">
                info@eurohotel.lviv.ua
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
