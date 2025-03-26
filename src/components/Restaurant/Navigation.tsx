import { forwardRef } from "react";
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";
import Slider from "react-slick";
import cn from "classnames";
type NavigationToProps ={
  isTerrasePage:boolean
}

export const Navigation = forwardRef<Slider, NavigationToProps>(({isTerrasePage}, ref) => {
  const sliderRef = ref as React.RefObject<Slider>;
  return (
    <div className="flex flex-col md:items-end lg:justify-between md:justify-end justify-center items-center ">
      <div className={cn(`flex ${isTerrasePage ? 'xl:max-w-[95.16%] max-w-[90.31%] ': 'md:max-w-[96.6%] max-w-[89.067%]'}  w-full justify-between lg:mt-0 border-b border-x  border-t  border-[#B3B3B3]`)}>
        <button
          className="lg:w-[62px] lg:h-[62px] w-[30px] h-[30px]  flex items-center justify-center text-[#8C331B] border border-[#8C331B] hover:bg-[#8C331B] rounded-full z-20 bg-white hover:text-white mt-[26px] ms-[20px] mb-[44px] md:ms-[88px] xl:mt-[17px] xl:mb-[72px]"
          onClick={() => sliderRef?.current.slickPrev()}
        >
          <HiArrowLongLeft className="lg:w-[32px] lg:h-[32px] w-[24px] h-[24px]" />
        </button>

        <button
          className="lg:w-[62px] lg:h-[62px] w-[30px] h-[30px] flex items-center justify-center text-[#8C331B] border border-[#8C331B] hover:bg-[#8C331B] rounded-full z-20 hover:text-white mt-[26px] me-[20px] mb-[44px] md:me-[102px] xl:mb-[72px] xl:mt-[17px] xl:me-[137px]"
          onClick={() => sliderRef?.current.slickNext()}
        >
          <HiArrowLongRight className="lg:w-[32px] lg:h-[32px] w-[24px] h-[24px]" />
        </button>
      </div>
    </div>
  );
});
