import { Link } from "react-router-dom";
import { RoomsSlider } from "./RoomsSlider";
import { useRef } from "react";
import Slider from "react-slick";
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";
import { useTranslation } from "react-i18next";
import { useRoomStore } from "../../store/useRoomsStore";
import cn from "classnames";

export const RoomsHome = () => {
  const sliderRef = useRef<Slider | null>(null);
  const { t, i18n } = useTranslation();
  const isEng = i18n.language === "en";
  const { sliderProps } = useRoomStore();

  return (
    <div className="flex flex-col bg-[#A47762] relative items-center md:items-stretch overflow-x-hidden overflow-y-hidden ">
      {/* <div className="grid z-0 absolute md:grid-cols-[5.2%_19%_34.7%_25.8%] grid-cols-[89.07%]  lg:h-[1580px] md:h-[1000px] sm:h-[797px] h-[767px] md:items-start justify-center md:justify-start w-full  ">
        <div className="w-full h-full border-[#C29986] hidden md:block"></div>
        <div className="w-full h-full border-e border-x md:border-x-0 border-[#C29986] "></div>
        <div className="w-full h-full border-x border-[#C29986] hidden md:block"></div>
        <div className="w-full h-full border-e border-[#C29986] hidden md:block"></div>
      </div> */}

      <div className=" w-full lg:h-[350px] h-[300px] md:h-[350px] grid-cols-[89.07%] grid  lg:flex flex-col justify-center   ">
        <h1
          className="text-center lg:ps-[59px] flex-col lg:flex-row flex lg:justify-between justify-center
          items-center lg:items-start
            lg:w-[calc(100vw-14.3vw)] 
            w-full
            text-[48px] sm:text-[80px] md:text-[100px] lg:text-[120px] xl:text-[150px] 2xl:text-[198px]
            uppercase tracking-[-0.1em] 
            text-[#EDE8E5] md:text-center lg:text-start xl:text-start 
            leading-[81.5%] 
            2xl:gap-x-[50px]
            gap-y-[30px]
            lg:gap-y-0
            mt-[65px] 
            lg:mt-0
            z-20"
        >
          <span className="tracking-[-0.09em] text-[48px] sm:text-[80px] md:text-[100px] lg:text-[120px] xl:text-[150px] 2xl:text-[198px] [@media(min-width:1540px)and(max-width:1700px)]:text-[170px]">
            {t("home.rooms.rooms")}
          </span>

          <span className="flex lg:flex-col text-[24px] sm:text-[40px] md:text-[50px] lg:text-[60px] xl:text-[80px] 2xl:text-[100px]  tracking-[-0.09em] gap-y-[7px] leading-[81%] uppercase">
            <span className="leading-[81%] w-auto ">
              {t("home.rooms.forWhat.0")} &nbsp;
            </span>
            <span className="leading-[81%] ps-0 sm:ps-0 md:ps-12 lg:ps-24 xl:ps-36 2xl:ps-[205px]  w-auto ">
              {t("home.rooms.forWhat.1")}
            </span>
          </span>
        </h1>
        <div className="flex flex-col w-full h-full items-center lg:items-start md:justify-center   ">
          <div className="z-4 ">
            <div className="flex md:flex-row lg:ps-[80px]  md:ps-[60px] flex-col text-start items-center  md:items-start  2xl:items-start relative 2xl:h-[200px] xl:h-[190px] lg:h-[180px] md:h-[150px] sm:h-[130px] ">
              <div className="md:absolute flex md:flex-row items-center flex-col pt-[16px] md:pt-[35px]  space-y-[30px] md:space-y-0 text-center md:text-start md:gap-[20px] xl:gap-x-[60px]">
                <p
                  className="uppercase  2xl:w-[433px] xl:w-[400px] px-[24px] lg:w-[330px] md:w-[350px] sm:w-[285px] lg:px-0 
                   2xl:text-[16px] xl:text-[15px] lg:text-[14px] md:text-[13px]  
                text-[12px]  text-[#E9E9E9] "
                >
                  {t("home.rooms.desc")}
                </p>
                <div className="flex justify-center items-center  ">
                  <Link
                    to="/rooms"
                    className={cn(
                      `uppercase text-center block text-[#242425] font-cofo-medium hover:bg-black hover:text-[#EDE8E5]
                       bg-[#EDE8E5] whitespace-nowrap lg:px-5.25 h-[42px]  lg:h-[46px] py-[12.5px] px-[14.5px] 
                    rounded-full hover:cursor-pointer 2xl:text-[16px] lg:text-[15px] lg:w-[234px]   text-[12px] w-[178px]`,
                      {
                        "lg:w-[170px]": isEng,
                      }
                    )}
                  >
                    {t("buttons.viewRooms")}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:flex"></div>
      
      </div>

      <div className="relative max-w-screen z-0 mb-[34px] md:mb-0 mt-19 md:mt-0 xl:mt-10 2xl:mb-[121px] xl:mb-[30px]">
        <div className="z-10 2xl:h-[720px] xl:h-[650px] lg:h-[570px] md:h-[500px] sm:h-[370px] h-[357px]">
          <RoomsSlider ref={sliderRef} sliderProps={sliderProps} />
        </div>
      </div>

      <div className="h-[64px] w-full hidden md:flex">
        <div className="hidden md:flex  w-full justify-between 2xl:-translate-y-48 xl:-translate-y-38 lg:-translate-y-28 md:-translate-y-30 ">
          <button
            className="2xl:w-[62px] 2xl:h-[62px] xl:w-[58px] xl:h-[58px] lg:w-[54px] lg:h-[54px] md:w-[48px] md:h-[48px] flex items-center justify-center hover:text-[#8C331B] border hover:border-[#8C331B] rounded-full z-20 hover:bg-white text-white mt-[26px] 2xl:ms-[73px] md:ms-[60px] lg:ms-[60px] 2xl:mb-[44px] xl:mb-[40px] lg:mb-[36px]"
            onClick={() => sliderRef.current?.slickPrev()}
          >
            <HiArrowLongLeft className="2xl:w-[32px] 2xl:h-[32px] xl:w-[30px] xl:h-[30px] lg:w-[28px] lg:h-[28px]" />
          </button>

          <button
            className="2xl:w-[62px] 2xl:h-[62px] xl:w-[58px] xl:h-[58px] lg:w-[54px] lg:h-[54px] md:w-[48px] md:h-[48px] flex items-center justify-center hover:text-[#8C331B] border hover:border-[#8C331B] rounded-full z-20 hover:bg-white text-white mt-[26px] 2xl:me-[100px] md:me-[60px] xl:me-[90px] lg:me-[80px] 2xl:mb-[44px] xl:mb-[40px] lg:mb-[36px]"
            onClick={() => sliderRef.current?.slickNext()}
          >
            <HiArrowLongRight className="2xl:w-[32px] 2xl:h-[32px] xl:w-[30px] xl:h-[30px] lg:w-[28px] lg:h-[28px]" />
          </button>
        </div>
      </div>
    </div>
  );
};
