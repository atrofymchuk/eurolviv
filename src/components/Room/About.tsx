import house from "../../assets/icons/Rooms/house.svg";
import square from "../../assets/icons/Rooms/squareBrown.svg";
import guestsIco from "../../assets/icons/Rooms/guestsBrown.svg";
import { useTranslation } from "react-i18next";
import { SliderAbout } from "./SliderAbout";
import { useModalStore } from "../../store/useModalStore";
import { RoomAbout } from "../../store/types";

type RoomAboutToProps = {
  about: RoomAbout;
  area: number;
  guests: string;
  title: string;
  size: string | undefined;
  swiperImagesStyle: string;
  nameRoom: string;
};

export const About = ({
  about,
  area,
  guests,
  swiperImagesStyle,
  nameRoom,
}: RoomAboutToProps) => {
  const { pOne, pTwo, swiperImages, rooms } = about;
  const {t} = useTranslation()
  const { onOpenModal } = useModalStore();

  if (!swiperImages || swiperImages.length === 0) return null;

  return (
    <div className="   ">
      <div className="grid 2xl:grid-cols-[393px_819px_708px] xl:grid-cols-[1frpx_2frpx_2frx] lg:grid-cols-[1fr_2fr_2fr] 
      
      md:grid-cols-[1fr_2fr_2fr] grid-cols-[40px_295px_40px] items-center justify-center 2xl:items-start 2xl:justify-normal">
        <div className="2xl:h-[109px] border-x 2xl:border-x-0 border-b 2xl:border-b-0 2xl:border-e  w-full h-[109px] border-[#C7C7C7] order-1 2xl:order-none"></div>
        <div className="2xl:h-[109px] border-x 2xl:border-x-0 border-b 2xl:border-b-0  2xl:border-e  w-full h-[109px] border-[#C7C7C7] order-3 2xl:order-none"></div>
        <div className="2xl:h-[109px] border-x 2xl:border-x-0  2xl:border-e  w-full h-[109px] border-[#C7C7C7] order-5 2xl:order-none"></div>
        <div className="2xl:h-[109px] border-x 2xl:border-x-0  2xl:border-e  w-full h-[109px] border-[#C7C7C7] order-6 2xl:order-none 2xl:hidden"></div>
        <div className="border-t  2xl:border-e border-b 2xl:border-b-0 border-[#C7C7C7] flex flex-col h-full justify-center p-2.5 2xl:p-0  2xl:items-center order-2 2xl:order-none">
          <div className="font-cofo  text-[#8C331B] pt-[22px]">
            <div className="2xl:space-y-1.5">
              <p className="flex uppercase 2xl:text-[20px] text-[12px] 2xl:leading-[25.2px] leading-[15px] items-center   ">
                <img
                  src={house}
                  alt="houseicon"
                  className="pe-2 w-[22px] h-[22px] 2xl:w-fit"
                />
                {t('room.about.area')}:
                <span className="font-semibold">&nbsp;{area} М²</span>
              </p>
              <p className="flex uppercase 2xl:text-[20px] text-[12px] 2xl:leading-[25.2px] leading-[15px] items-center ">
                <img
                  src={square}
                  alt="houseicon"
                  className="pe-2 w-[22px] h-[22px] 2xl:w-fit"
                />
                {t('room.about.count')}:
                <span className="font-semibold">&nbsp;{rooms}</span>
              </p>
              <p className="flex uppercase 2xl:text-[20px] text-[12px] 2xl:leading-[25.2px] leading-[15px] items-center">
                <img
                  src={guestsIco}
                  alt="houseicon"
                  className="pe-2 w-[22px] h-[22px] 2xl:w-fit"
                />
                {t('room.about.guests')}:
                <span className="font-semibold">&nbsp;{guests}</span>
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center order-5 2xl:order-none">
          <div
            className={`2xl:border-t 2xl:border-e items-center justify-center flex 2xl:block border-[#C7C7C7]  2xl:p-[35px] w-full relative`}
          >
            <h1 className="uppercase font-cofo 2xl:text-[100px] text-[32px] 2xl:leading-[81px] 2xl:w-[1200px]  font-semibold 2xl:font-normal leading-[28px] flex flex-col tracking-[-0.026em]   overflow-visible">
              <span className="order-1 2xl:order-2 inline w-fit">
                {" "}
                {nameRoom}{" "}
              </span>
            </h1>
          </div>
        </div>

        <div className="border-e border-t border-[#C7C7C7] 2xl:flex hidden"></div>
      </div>

      <div className="grid 
        grid-cols-1 sm:grid-cols-1 md:grid-cols-[475px_1fr] lg:grid-cols-[747px_1fr] 
        xl:grid-cols-[870px_1fr]  2xl:grid-cols-[1212px_1fr] 
        h-auto">
        <div className="w-full border-[#C7C7C7] border-t xl:border-e">
          <SliderAbout
            imageSlider={swiperImages}
            swiperImagesStyle={swiperImagesStyle}
          />
        </div>
        
        <div className="flex flex-col xl:items-center justify-center 
           
          border-t  border-[#C7C7C7]  border-e 
          py-6 sm:py-8 md:py-10 lg:py-12 xl:py-16">
          <div className="flex flex-col 
            gap-4 sm:gap-5 md:gap-6 lg:gap-7 xl:gap-[24px]
            w-[280px] sm:w-[300px] md:w-[1fr] lg:w-[1fr] xl:w-[1fr] 
            px-4 sm:px-6 md:px-4 lg:px-10 xl:px-0 ">
            
            <p className="text-[12px] sm:text-[14px] md:text-[12px] lg:text-[16px] xl:text-[20px]
              leading-[1.2] sm:leading-[1.3] md:leading-[1.4] lg:leading-[1.5] xl:leading-[24px]
              tracking-[-0.02em] sm:tracking-[-0.03em] xl:tracking-[-0.04em]
              text-[#8C331B] uppercase">
              {pOne}
            </p>

            <p className="text-[12px] sm:text-[14px] md:text-[12px] lg:text-[16px] xl:text-[20px]
              leading-[1.2] sm:leading-[1.3] md:leading-[1.4] lg:leading-[1.5] xl:leading-[24px]
              tracking-[-0.02em] sm:tracking-[-0.03em] xl:tracking-[-0.04em]
              text-[#444444] uppercase">
              {pTwo}
            </p>

            <button
              onClick={()=>onOpenModal('order')}
              className="uppercase bg-[#8C331B] text-white
                px-4 sm:px-5 md:px-6 lg:px-7 xl:px-5
                py-2 sm:py-2.5 md:py-3 lg:py-3.5 xl:py-3
                text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] xl:text-sm
                rounded-3xl font-semibold
                hover:bg-[#9c3b20] transition-colors
                w-fit"> 
              {t('buttons.bookRoomArr.0')} <span className="hidden md:inline">{t('buttons.bookRoomArr.1')}</span>
            </button>
          </div>
        </div>
      </div>
      <div className="container-fluid mx-auto px-4 sm:px-6 md:px-6 lg:px-10 xl:px-6 2xl:px-6">
        <div className="grid 
          grid-cols-1 
          md:grid-cols-[1fr_1fr] 
          lg:grid-cols-[1fr_1fr_1fr] 
          border-s border-[#C7C7C7]">
          <div className="h-[84px]  w-full  border-[#C7C7C7]"></div>
          <div className="h-[84px] border-x w-full  hidden lg:flex border-[#C7C7C7]"></div>
          <div className="h-[84px]  border-e lg:border-e-0 border-[#C7C7C7] w-full   "></div>
        </div>
      </div>
    </div>
  );
};
