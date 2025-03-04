import { Link } from "react-router-dom";
import { RoomsSlider } from "./RoomsSlider";
import { useRef } from "react";
import Slider from "react-slick";
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";
import { useTranslation } from "react-i18next";

export const RoomsHome = () => {
  const sliderRef = useRef<Slider | null>(null);
  const {t} = useTranslation()

  return (
    <div className="flex flex-col bg-[#A47762] relative items-center md:items-stretch overflow-x-hidden overflow-y-hidden ">
<div className="grid absolute md:grid-cols-[5.2%_19%_34.7%_23.2%] grid-cols-[89.07%]  lg:*:h-[1580px] md:*:h-[1000px] *:h-[900px] md:items-start justify-center md:justify-start    w-full  ">
        <div className="w-full border-s border-[#C29986] hidden md:block"></div>
        <div className="w-full border-x border-[#C29986] "></div>
        <div className="w-full border-e border-[#C29986] hidden md:block"></div>
        <div className="w-full border-e border-[#C29986] hidden md:block"></div>
      </div> 

      <div className="grid  items-center justify-center md:grid-cols-[24.7%_45.1%_30.2%] w-full lg:h-[350px] h-[300px] md:h-[400px] grid-cols-[89.07%]   ">
        <div className="flex flex-col w-full h-full justify-center  lg:translate-y-[50px] ">
          <div>
            <h1 className="text-center font-cofo 2xl:text-[198px] xl:text-[150px] lg:text-[120px] md:text-[100px] sm:text-[80px] text-[68px]
            uppercase tracking-[-0.09em] 
             text-[#EDE8E5] xl:text-start lg:text-start md:text-center 2xl:leading-[160px] xl:leading-[140px] 
             lg:leading-[120px] md:leading-[90px] sm:leading-[60px] leading-[32px]  xl:ps-[18px] lg:ps-[15px]">
              {t("home.rooms.rooms")}
            </h1>
            <div className="flex md:flex-row flex-col text-start items-center md:items-start  2xl:items-start relative 2xl:h-[200px] xl:h-[190px] lg:h-[180px] md:h-[150px] sm:h-[130px] ">
              <div className="md:absolute flex md:flex-row flex-col pt-[35px] md:pt-[30px] sm:pt-[25px] space-y-4 md:space-y-0 text-center md:text-start">
                <p className="uppercase  2xl:w-[433px] xl:w-[400px] lg:w-[330px] md:w-[300px] sm:w-[280px] w-[250px] 2xl:text-[16px] xl:text-[15px] lg:text-[14px] md:text-[13px]  text-[14px] leading-[104%] text-[#E9E9E9] ps-[30px]">
                {t("home.rooms.desc")}
                </p>
                <div className="flex justify-center items-center xl:ms-[10px] lg:ms-[10px] ">

                <Link
                  to="/rooms"
                  className="uppercase text-center text-[#242425] font-semibold hover:bg-black hover:text-[#EDE8E5]   bg-[#EDE8E5] whitespace-nowrap 2xl:px-[22.5px] 2xl:py-[13px] xl:px-[22px] xl:py-[12px] lg:px-[18px] lg:py-[10px] md:px-[20px] md:py-[11px] sm:px-[16px] sm:py-[10px] py-[12.5px] px-[14.5px] rounded-full hover:cursor-pointer 2xl:text-[16px] lg:text-[15px] md:text-[14px] sm:text-[13px] text-[12px]"
                  >
                  {t("buttons.viewRooms")}
                </Link>
                  </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:flex"></div>
        <div className="hidden md:flex h-full flex-col justify-center pe-[50px] xl:-translate-y-[60px] lg:-translate-y-[60px] md:-translate-y-[80px] ">
          <h1 className="uppercase 2xl:text-[100px] xl:text-[80px] lg:text-[60px] md:text-[60px] sm:text-[50px] text-[40px] leading-[81%] tracking-[-9%] relative whitespace-nowrap text-[#EDE8E5]">
            <span className="absolute  xl:-translate-x-[280px] lg:-translate-x-[200px] md:-translate-x-[150px]">
              {t("home.rooms.forWhat.0")}
            </span>
            <br />
            <span className="absolute xl:-translate-x-[50px]  md:-translate-x-[50px]">
              {t("home.rooms.forWhat.1")}
            </span>
          </h1>
        </div>
      </div>

      <div className="relative w-screen ">
        <div className=" z-10 2xl:h-[600px] xl:h-[650px] lg:h-[470px] md:h-[450px] h-[420px] ">
          <RoomsSlider ref={sliderRef} />
        </div>
      </div> 
      <div className="h-[64px] w-full">
        <div className="hidden md:flex  w-full justify-between 2xl:-translate-y-34 xl:-translate-y-45 lg:-translate-y-25 md:-translate-y-20 ">
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
