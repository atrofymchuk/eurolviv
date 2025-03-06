  import Slider from "react-slick";
  import { SpecialOffersSlider } from "./SpecialOffersSlider";
  import { useRef } from "react";
  import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";
  import { useTranslation } from "react-i18next";


  export const SpecialOffers = () => {
    const {t} = useTranslation()
    const sliderRef = useRef<Slider | null>(null);

    return (
      <div className="w-full h-[668px] sm:h-[720px]  lg:h-[1106px] md:h-[825px] xl:h-[1026px] flex justify-end items-center overflow-hidden flex-col">
        <div className="container-fluid  max-w-[91%] px-4 sm:px-6 md:px-6 lg:px-6 2xl:px-0">
          <div  
            className={`border-s border-[#C7C7C7] h-full w-full mb-[71px] lg:mb-[75px]`}
          >
            <div>
              <h1 className="uppercase text-[24px] sm:text-[28px] md:text-[32px] lg:text-[100px] mb-[24px] lg:leading-[81px] lg:tracking-[-0.04em] 
                ms-[20px] lg:ms-[19px] lg:pt-[110px] lg:mb-[63px] lg:w-full  pt-[10px] xl:whitespace-nowrap
                w-[244px] leading-[28px] ">
                {t("home.specialOffers.title")}
              </h1>

              <div className="flex overflow-hidden h-[450px] sm:h-[500px] md:h-[600px] lg:h-[670px] w-screen flex-col">
                <div className="flex overflow-y-hidden overflow-x-hidden w-full">
                  <SpecialOffersSlider ref={sliderRef} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-between space-x-4 mt-4 -translate-y-20">
          <button
            className="w-[40px] h-[40px] sm:w-[45px] sm:h-[45px] md:w-[50px] md:h-[50px] lg:w-[62px] lg:h-[62px] flex items-center justify-center 
            ms-12 sm:ms-18 md:ms-20 lg:ms-40 
              text-[#8C331B] border border-[#8C331B] rounded-full 
              hover:bg-[#8C331B] hover:text-white transition"
            onClick={() => sliderRef.current?.slickPrev()}
          >
            <HiArrowLongLeft className="w-[20px] h-[20px] sm:w-[22px] sm:h-[22px] md:w-[24px] md:h-[24px] lg:w-[32px] lg:h-[32px]" />
          </button>

          <button
            className="w-[40px] h-[40px] sm:w-[45px] sm:h-[45px] md:w-[50px] md:h-[50px] lg:w-[62px] lg:h-[62px] flex items-center justify-center 
              text-[#8C331B] border border-[#8C331B] rounded-full
              me-4 sm:me-6 md:me-8 lg:me-20  
              hover:bg-[#8C331B] hover:text-white transition"
            onClick={() => sliderRef.current?.slickNext()}
          >
            <HiArrowLongRight className="w-[20px] h-[20px] sm:w-[22px] sm:h-[22px] md:w-[24px] md:h-[24px] lg:w-[32px] lg:h-[32px]" />
          </button>
        </div>
      </div>
    );
  };
