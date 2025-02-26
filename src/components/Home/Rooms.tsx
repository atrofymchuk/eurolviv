import { Link } from "react-router-dom";
import { RoomsSlider } from "./RoomsSlider";
import { useRef } from "react";
import Slider from "react-slick";
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";

export const RoomsHome = () => {
  const sliderRef = useRef<Slider | null>(null);

  return (
    <div className="flex flex-col bg-[#A47762] relative">
      <div className="grid grid-cols-[365px_667px_446px] ms-[100px] h-[580px]  ">
        <div className="grid absolute grid-cols-[365px_667px_446px]  h-[580px] ">
          <div className="absolute border left-0 border-[#C29986] w-[365px] h-[1280px]">
            <div className="absolute border-e left-[365px] border-[#C29986] w-[667px] h-[1280px]"></div>
          </div>
          <div className="absolute border-e right-0 border-[#C29986] w-[667px] h-[1280px]"></div>
        </div>
        <div className=" flex flex-col justify-center ">
          <div className="translate-y-[130px]">
            <h1 className="text-center font-cofo xl:text-[198px] text-[32px] -translate-x-16 uppercase tracking-[-0.09em] text-[#EDE8E5] xl:text-start xl:leading-[160px] leading-[32px] xl:ps-[20px]">
              номери
            </h1>
            <div className="flex xl:flex-row text-start items-center xl:items-start relative h-[200px]">
              <div className="absolute flex items-center justify-center xl:justify-start ">
                <p className="uppercase w-[433px]  xl:text-[16px] text-[12px] xl:leading-[16px] text-[#E9E9E9] text-center xl:text-left absolute left-[-29px]">
                  100 номерів, де кожна деталь творить особливу естетику. Від
                  стандартних кімнат до люксів — незмінно висока якість сервісу.
                </p>
                <Link
                  to="/rooms"
                  className="uppercase text-[#242425] font-semibold translate-x-[480px] bg-[#EDE8E5] w-fit h-fit xl:px-[22.5px] xl:py-[13px] py-[12.5px] px-[14.5px] rounded-full hover:cursor-pointer"
                >
                  переглянути номери
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div></div>
        <div className=" h-full flex flex-col justify-center">
          <h1 className="uppercase text-[100px] leading-[81%] tracking-[-9%] relative  whitespace-nowrap text-[#EDE8E5]">
            <span className="absolute translate-x-[-186px]">для вашого</span>
            <br />
            <span className="absolute translate-x-[18px]"> комфорту</span>
          </h1>
        </div>
      </div>

      <div className="relative">
        <div className="-translate-y-15 z-10 h-[700px]">
          <RoomsSlider ref={sliderRef} />
        </div>
      </div>

        <div className="h-[0px]">
        <div className="flex lg:w-full w-[300px] justify-between -translate-y-50  ">
          <button
            className="lg:w-[62px] lg:h-[62px] w-[30px] h-[30px]  flex items-center justify-center hover:text-[#8C331B] border hover:border-[#8C331B] rounded-full z-20 hover:bg-white text-white mt-[26px] ms-[100px] mb-[44px] lg:ms-[73px] "
            onClick={() => sliderRef.current?.slickPrev()}
          >
            <HiArrowLongLeft className="lg:w-[32px] lg:h-[32px] w-[24px] h-[24px]" />
          </button>

          <button
            className="lg:w-[62px] lg:h-[62px] w-[30px] h-[30px] flex items-center justify-center hover:text-[#8C331B] border hover:border-[#8C331B] rounded-full z-20 hover:bg-white text-white mt-[26px] me-[100px]  mb-[44px] lg:mb-[72px] "
            onClick={() => sliderRef.current?.slickNext()}
          >
            <HiArrowLongRight className="lg:w-[32px] lg:h-[32px] w-[24px] h-[24px]" />
          </button>
        </div>
      </div>
    </div>
  );
};
