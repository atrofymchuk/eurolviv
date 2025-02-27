import { Link } from "react-router-dom";
import { RoomsSlider } from "./RoomsSlider";
import { useRef } from "react";
import Slider from "react-slick";
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";

export const RoomsHome = () => {
  const sliderRef = useRef<Slider | null>(null);

  return (
    <div className="flex flex-col bg-[#A47762] relative items-center 2xl:items-stretch overflow-x-hidden overflow-y-hidden">
      <div className="grid 2xl:grid-cols-[365px_667px_446px] xl:grid-cols-[320px_600px_400px] lg:grid-cols-[300px_500px_350px] md:grid-cols-[668px] 2xl:ms-[100px] xl:ms-[80px] lg:ms-[60px] h-[580px] grid-cols-[334px]">
        <div className="grid absolute 2xl:grid-cols-[365px_717px_446px] xl:grid-cols-[320px_600px_400px] lg:grid-cols-[300px_500px_350px] md:grid-cols-[668px] grid-cols-[334px] h-[580px]">
          <div className="absolute border-x left-0 border-[#C29986] 2xl:w-[365px] xl:w-[320px] lg:w-[300px] md:w-[668px] w-full 2xl:h-[1080px] xl:h-[1250px] lg:h-[1030px] md:h-[1080px] h-[1080px]">
            <div className="absolute 2xl:border-e left-[365px] 2xl:left-[365px] xl:left-[320px] lg:left-[300px] md:left-[668px] border-[#C29986] 2xl:w-[667px] xl:w-[600px] lg:w-[500px] md:w-[400px] 2xl:h-[1080px] xl:h-[1050px] lg:h-[1030px] md:h-[980px] h-[950px]"></div>
          </div>
          <div className="absolute border-e xl:border-s 2xl:border-s-0 right-0 border-[#C29986] 2xl:w-[617px] xl:w-[550px] lg:w-[500px] md:w-[668px] 2xl:h-[1180px] xl:h-[1050px] lg:h-[1030px] md:h-[980px] h-[950px]"></div>
        </div>
        <div className="flex flex-col justify-center">
          <div className="2xl:translate-y-[130px] xl:translate-y-[110px] lg:translate-y-[100px] md:translate-y-[80px] sm:translate-y-[60px]">
            <h1 className="text-center font-cofo 2xl:text-[198px] xl:text-[170px] lg:text-[150px] md:text-[100px] sm:text-[80px] text-[68px] 2xl:-translate-x-16 xl:-translate-x-14 lg:-translate-x-12 uppercase tracking-[-0.09em] text-[#EDE8E5] 2xl:text-start xl:text-start lg:text-start md:text-center 2xl:leading-[160px] xl:leading-[140px] lg:leading-[120px] md:leading-[90px] sm:leading-[60px] leading-[32px] 2xl:ps-[20px] xl:ps-[18px] lg:ps-[15px]">
              номери
            </h1>
            <div className="flex lg:flex-row flex-col text-start items-center 2xl:items-start relative 2xl:h-[200px] xl:h-[190px] lg:h-[180px] md:h-[150px] sm:h-[130px]">
              <div className="lg:absolute flex lg:flex-row flex-col items-center justify-center 2xl:justify-start pt-[35px] md:pt-[30px] sm:pt-[25px]">
                <p className="uppercase 2xl:w-[433px] xl:w-[400px] lg:w-[380px] md:w-[500px] sm:w-[280px] w-[250px] 2xl:text-[16px] xl:text-[15px] lg:text-[14px] md:text-[13px] sm:text-[12px] text-[11px] 2xl:leading-[16px] xl:leading-[15px] lg:leading-[15px] md:leading-[14px] sm:leading-[13px] leading-[12px] text-[#E9E9E9] text-center 2xl:text-left xl:text-left md:text-center 2xl:absolute 2xl:left-[-29px] xl:left-[-27px] lg:left-[-25px]">
                  100 номерів, де кожна деталь творить особливу естетику. Від
                  стандартних кімнат до люксів — незмінно висока якість сервісу.
                </p>
                <Link
                  to="/rooms"
                  className="uppercase text-center text-[#242425] font-semibold hover:bg-black hover:text-[#EDE8E5] mt-[10px] 2xl:translate-x-[480px] xl:translate-x-[50px] md:translate-x-0 bg-[#EDE8E5] whitespace-nowrap 2xl:px-[22.5px] 2xl:py-[13px] xl:px-[22px] xl:py-[12px] lg:px-[22px] lg:py-[12px] md:px-[20px] md:py-[11px] sm:px-[16px] sm:py-[10px] py-[12.5px] px-[14.5px] rounded-full hover:cursor-pointer 2xl:text-[16px] lg:text-[15px] md:text-[14px] sm:text-[13px] text-[12px]"
                >
                  переглянути номери
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden 2xl:flex"></div>
        <div className="hidden lg:flex h-full flex-col justify-center pe-[50px]">
          <h1 className="uppercase 2xl:text-[100px] xl:text-[90px] lg:text-[80px] md:text-[60px] sm:text-[50px] text-[40px] leading-[81%] tracking-[-9%] relative whitespace-nowrap text-[#EDE8E5]">
            <span className="absolute 2xl:translate-x-[-186px] xl:translate-x-[370px] lg:translate-x-[320px] md:translate-x-[-120px] translate-x-[-100px]">для вашого</span>
            <br />
            <span className="absolute 2xl:translate-x-[18px] xl:translate-x-[316px] lg:translate-x-[315px] md:translate-x-[12px] translate-x-[10px]">комфорту</span>
          </h1>
        </div>
      </div>

      <div className="relative w-screen">
        <div className="2xl:-translate-y-9 xl:-translate-y-8 lg:-translate-y-7 md:-translate-y-5 z-10 2xl:h-[500px] xl:h-[590px] lg:h-[550px] md:h-[500px] h-[500px] -translate-y-30">
          <RoomsSlider ref={sliderRef} />
        </div>
      </div>

      <div className="h-[0px] w-full">
        <div className="md:hidden xl:flex  w-full justify-between 2xl:-translate-y-34 xl:-translate-y-45 lg:-translate-y-40">  
          <button
            className="2xl:w-[62px] 2xl:h-[62px] xl:w-[58px] xl:h-[58px] lg:w-[54px] lg:h-[54px] flex items-center justify-center hover:text-[#8C331B] border hover:border-[#8C331B] rounded-full z-20 hover:bg-white text-white mt-[26px] 2xl:ms-[73px]  lg:ms-[60px] 2xl:mb-[44px] xl:mb-[40px] lg:mb-[36px]"
            onClick={() => sliderRef.current?.slickPrev()}
          >
            <HiArrowLongLeft className="2xl:w-[32px] 2xl:h-[32px] xl:w-[30px] xl:h-[30px] lg:w-[28px] lg:h-[28px]" />
          </button>

          <button
            className="2xl:w-[62px] 2xl:h-[62px] xl:w-[58px] xl:h-[58px] lg:w-[54px] lg:h-[54px] flex items-center justify-center hover:text-[#8C331B] border hover:border-[#8C331B] rounded-full z-20 hover:bg-white text-white mt-[26px] 2xl:me-[100px] xl:me-[90px] lg:me-[80px] 2xl:mb-[44px] xl:mb-[40px] lg:mb-[36px]"
            onClick={() => sliderRef.current?.slickNext()}
          >
            <HiArrowLongRight className="2xl:w-[32px] 2xl:h-[32px] xl:w-[30px] xl:h-[30px] lg:w-[28px] lg:h-[28px]" />
          </button>
        </div>
      </div>
    </div>
  );
};
