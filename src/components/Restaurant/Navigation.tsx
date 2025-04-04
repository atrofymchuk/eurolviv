import { forwardRef } from "react";
import { CgArrowLeft, CgArrowRight } from "react-icons/cg";
import Slider from "react-slick";
import cn from "classnames";

export const Navigation = forwardRef<Slider>((_, ref) => {
  return (
    <div className="flex flex-col md:items-end lg:justify-between md:justify-end justify-center items-center ">
      <div
        className={cn(
          `flex md:max-w-[96.55%] max-w-[89.1%] justify-between lg:mt-0 border-b border-x  border-t  md:border-t-0 lg:border-t xl:border-t-0 border-[#B3B3B3] w-full`
        )}
        
      >
        <button
          className="lg:w-[62px] lg:h-[62px] w-[30px] h-[30px]  flex items-center justify-center text-[#8C331B] border border-[#8C331B] hover:bg-[#8C331B] rounded-full z-20 bg-white hover:text-white mt-[26px] ms-[20px] mb-[44px] md:ms-[88px] xl:mt-[17px] xl:mb-[72px]"
          onClick={() => {
            if (ref && typeof ref !== 'function' && ref.current) {
              ref.current.slickPrev();
            }
          }}
        >
          <CgArrowLeft className="lg:w-[32px] lg:h-[32px] w-[24px] h-[24px]" />
        </button>

        <button
          className="lg:w-[62px] lg:h-[62px] w-[30px] h-[30px] flex items-center justify-center text-[#8C331B] border border-[#8C331B] hover:bg-[#8C331B] rounded-full z-20 hover:text-white mt-[26px] me-[20px] mb-[44px] md:me-[102px] xl:mb-[72px] xl:mt-[17px] xl:me-[137px]"
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
