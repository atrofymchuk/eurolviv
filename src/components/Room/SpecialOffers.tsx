import Slider from "react-slick";
import { SpecialOffersSlider } from "./SpecialOffersSlider";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import cn from "classnames";
export const SpecialOffers = () => {
  const { t } = useTranslation();
  const sliderRef = useRef<Slider | null>(null);
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <div className="w-full h-[598px] sm:h-[612px]  lg:h-[1003px] md:h-[746px] xl:h-[922px] flex  items-center overflow-hidden flex-col mb-[30px] md:mb-[71px] lg:mb-[75px]">
      <div
        className={cn(`container-fluid    ${
          isHome ? "w-[91.0%]" : "w-[79.4%] md:w-[85.06%]"
        } `)}
      >
        <div
          className={cn(`border-s border-[#C7C7C7] h-full w-full  `)}
        >
          <div>
            <h1
              className="uppercase text-[32px] pt-[82px] sm:text-[38px] md:text-[48px] lg:text-[100px] mb-[24px] lg:leading-[81px] lg:tracking-[-0.04em] 
                ms-[20px] lg:ms-[19px] lg:pt-[110px] lg:mb-[63px]  lg:w-full   xl:whitespace-nowrap
                w-[244px] leading-[104%] "
            >
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
      
    </div>
  );
};
