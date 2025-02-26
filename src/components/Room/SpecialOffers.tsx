import Slider from "react-slick";
import { SpecialOffersSlider } from "./SpecialOffersSlider";
import { useRef } from "react";
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";

type SpecialOffersToProps = {
  width?: string;
};

export const SpecialOffers = ({
  width = "lg:w-[1595px]",
}: SpecialOffersToProps) => {
  const sliderRef = useRef<Slider | null>(null);

  return (
    <div className="relative w-full h-[658px] lg:h-[976px] flex justify-center items-center overflow-hidden flex-col">
      <div
        className={`relative border-s border-[#C7C7C7] h-full w-[296px] mb-[71px] lg:mb-[75px] ${width} `}
      >
        <div className="absolute w-screen">
          <h1 className="uppercase text-[32px] mb-[24px] lg:leading-[81px] lg:tracking-[-0.04em] ms-[20px] lg:ms-[19px] lg:mt-[110px] lg:mb-[63px] lg:w-full lg:text-[100px] w-[244px] leading-[28px] mt-[82px]">
            спеціальні ПРОПОЗИЦІЇ
          </h1>

          <div className="flex overflow-hidden">
            <div className="flex overflow-x-hidden">
              <SpecialOffersSlider ref={sliderRef} />
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full">
        <div className="absolute right-0 lg:flex hidden w-[1680px] -translate-16 justify-between ">
          <button
            className="w-[50px] h-[50px] lg:w-[62px] lg:h-[62px] flex items-center justify-center text-[#8C331B] border border-[#8C331B] rounded-full hover:bg-[#8C331B] hover:text-white transition"
            onClick={() => sliderRef.current?.slickPrev()}
          >
            <HiArrowLongLeft className="w-[24px] h-[24px] lg:w-[32px] lg:h-[32px]" />
          </button>

          <button
            className="w-[50px] h-[50px] lg:w-[62px] lg:h-[62px] flex items-center justify-center text-[#8C331B] border border-[#8C331B] rounded-full hover:bg-[#8C331B] hover:text-white  transition"
            onClick={() => sliderRef.current?.slickNext()}
          >
            <HiArrowLongRight className="w-[24px] h-[24px] lg:w-[32px] lg:h-[32px]" />
          </button>
        </div>
      </div>
    </div>
  );
};
