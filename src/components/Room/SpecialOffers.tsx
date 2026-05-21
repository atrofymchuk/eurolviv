import Slider from "react-slick";
import { SpecialOffersSlider } from "@/components/Room/SpecialOffersSlider";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import cn from "classnames";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";

export const SpecialOffers = () => {
  const { t } = useTranslation();
  const sliderRef = useRef<Slider | null>(null);
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <div className="w-full  bg-[#FFFFFF] relative  flex items-center overflow-hidden flex-col  z-20">
      <div
        className={cn(
          `container-fluid z-50 relative ${
            isHome ? "w-[89.05%] md:w-[91.06%]" : "w-[81.9%] md:w-[85.06%]"
          } `
        )}
      >
        <div
          className={cn(` border-[#C7C7C7]  h-full w-full z-20 relative`, {
            "md:border-s lg:border-s-0 border-s": isHome,
          })}
        >
          <div className="z-50 relative">
            <div
              className={cn(
                `ps-[20px] lg:ps-[19px]   lg:border-s border-s h-full  border-[#C7C7C7] lg:pt-[113px] lg:pb-[63px]  pb-[24px]`,
                {
                  "border-s-0 lg:border-s pt-[69px]": isHome,
                },
                {
                  "md:border-s lg:border-s border-s pt-[82px]": !isHome,
                }
              )}
            >
              <h1
                className="uppercase text-[32px]  sm:text-[38px] md:text-[48px] 2xl:text-[100px] xl:text-[7.03vw] leading-[90%] lg:tracking-[-0.04em] relative z-50
                lg:w-full   xl:whitespace-nowrap 
              w-[244px]"
              >
                {t("home.specialOffers.title")}
              </h1>
            </div>

            <div
              className={cn(
                "relative z-50 flex w-screen flex-col overflow-hidden",
                isHome
                  ? "h-[113.6vw] sm:h-[500px] md:h-[540px] lg:h-[584px] xl:h-[37.5vw] 2xl:h-[35.79vw]"
                  : "h-[120vw] sm:h-[500px] md:h-[600px] lg:h-[670px] 2xl:h-[36vw]"
              )}
            >
              <div className="flex overflow-y-hidden overflow-x-hidden w-full">
                <SpecialOffersSlider ref={sliderRef} isHome={isHome} />
              </div>
            </div>
          </div>
          <div
            className={cn("hidden w-full items-center justify-between lg:flex", {
              "lg:hidden": !isHome,
              "py-[18px] xl:py-[22px]": isHome,
              "my-[24px] gap-4 xl:my-[42px]": !isHome,
            })}
          >
            <button
              className="flex h-[35px] w-[35px] shrink-0 items-center justify-center rounded-full border border-[#8C331B] bg-white text-[#8C331B] transition hover:bg-[#8C331B] hover:text-white lg:h-[60px] lg:w-[60px]"
              onClick={() => {
                if (
                  sliderRef.current &&
                  typeof sliderRef.current !== "function"
                ) {
                  const slider = sliderRef.current as Slider;
                  if (slider && slider.slickPrev) {
                    slider.slickPrev();
                  }
                }
              }}
            >
              <IoIosArrowRoundBack className="w-3/4 h-3/4" />
            </button>
            <button
              className="flex h-[35px] w-[35px] shrink-0 items-center justify-center rounded-full border border-[#8C331B] bg-[#8C331B] text-white transition hover:bg-white hover:text-[#8C331B] lg:h-[60px] lg:w-[60px]"
              onClick={() => {
                if (
                  sliderRef.current &&
                  typeof sliderRef.current !== "function"
                ) {
                  const slider = sliderRef.current as Slider;
                  if (slider && slider.slickNext) {
                    slider.slickNext();
                  }
                }
              }}
            >
              <IoIosArrowRoundForward className="w-3/4 h-3/4" />
            </button>
          </div>
          <div
            className={cn("h-[50px]", {
              "h-[45px]": !isHome,
              "sm:hidden md:block lg:hidden": isHome,
            })}
          />
        </div>
      </div>
    </div>
  );
};
