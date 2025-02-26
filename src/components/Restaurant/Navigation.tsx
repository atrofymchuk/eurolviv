import { forwardRef } from "react";
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";
import Slider from "react-slick";

type NavigationToProps ={
  isTerrasePage:boolean
}

export const Navigation = forwardRef<Slider, NavigationToProps>(({isTerrasePage}, ref) => {
  const sliderRef = ref as React.RefObject<Slider>;
  return (
    <div className="flex flex-col lg:items-end lg:justify-between justify-center items-center ">
      <div className={`flex ${isTerrasePage ? 'lg:w-[1833px]': 'lg:w-[1854px]'}  w-[334px] justify-between lg:mt-0 border-b border-x lg:border-t-0 border-t b border-[#B3B3B3]`}>
        <button
          className="lg:w-[62px] lg:h-[62px] w-[30px] h-[30px]  flex items-center justify-center text-[#8C331B] border border-[#8C331B] hover:bg-[#8C331B] rounded-full z-20 bg-white hover:text-white mt-[26px] ms-[20px] mb-[44px] lg:ms-[68px] lg:mt-[17px] lg:mb-[72px]"
          onClick={() => sliderRef?.current.slickPrev()}
        >
          <HiArrowLongLeft className="lg:w-[32px] lg:h-[32px] w-[24px] h-[24px]" />
        </button>

        <button
          className="lg:w-[62px] lg:h-[62px] w-[30px] h-[30px] flex items-center justify-center text-[#8C331B] border border-[#8C331B] hover:bg-[#8C331B] rounded-full z-20 hover:text-white mt-[26px] me-[20px] mb-[44px] lg:mb-[72px] lg:mt-[17px] lg:me-[137px]"
          onClick={() => sliderRef?.current.slickNext()}
        >
          <HiArrowLongRight className="lg:w-[32px] lg:h-[32px] w-[24px] h-[24px]" />
        </button>
      </div>
    </div>
  );
});
