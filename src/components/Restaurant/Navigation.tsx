import { forwardRef } from "react";
import { CgArrowLeft, CgArrowRight } from "react-icons/cg";
import Slider from "react-slick";
import cn from "classnames";

export const Navigation = forwardRef<Slider>((_, ref) => {
  return (
    <div className="flex flex-col md:items-end lg:justify-between  md:justify-end justify-center items-center ">
      <div
        className={cn(
          `flex md:w-[96.55%] w-[89%]  xl:w-[96.6%] 2xl:w-[96.6%] justify-between lg:mt-0 border-b lg:border-x  border-t  md:border-t-0 lg:border-t xl:border-t-0 border-[#B3B3B3] `
        )}
        
      >
        <button
          className="lg:w-[62px] lg:h-[62px] w-[9.33vw] h-[9.33vw]  flex items-center justify-center
           text-[#8C331B] border border-[#8C331B] hover:bg-[#8C331B] rounded-full z-20 bg-white
            hover:text-white mt-[26px] ms-[20px] mb-[44px] md:ms-[88px] xl:mt-[59px] xl:mb-[36px]"
          onClick={() => {
            if (ref && typeof ref !== 'function' && ref.current) {
              ref.current.slickPrev();
            }
          }}
        >
          <CgArrowLeft className="lg:w-[32px] lg:h-[32px] w-[24px] h-[24px]" />
        </button>

        <button
          className="lg:w-[62px] lg:h-[62px] w-[9.33vw] h-[9.33vw] bg-[#8C331B] text-[white] flex items-center xl:mt-[59px] justify-center border border-[#8C331B] hover:bg-[#] rounded-full z-20 hover:text-white mt-[26px] me-[20px] mb-[44px] md:me-[102px] xl:mb-[36px]  xl:me-[137px]"
          onClick={() => {
            if (ref && typeof ref !== 'function' && ref.current) {
              ref.current.slickNext();
            }
          }}
        >
          <CgArrowRight className="lg:w-[32px] lg:h-[32px] w-[24px] h-[24px]" />
        </button>
      </div>
    </div>
  );
});
