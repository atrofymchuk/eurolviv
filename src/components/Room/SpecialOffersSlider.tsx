import { Link } from "react-router-dom";
import Slider from "react-slick";
import { useSpecialOffersStore } from "../../store/useSpecialOffersStore";
import { useTranslation } from "react-i18next";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { forwardRef, useState } from "react";
import { InViewWrapper } from "../utils/InViewWrapper";
import cn from "classnames";

type SpecialOffersSliderToProps = {
  ref: Slider | null;
};

export const SpecialOffersSlider = forwardRef<
  Slider,
  SpecialOffersSliderToProps
>((_, ref) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { specialOffers } = useSpecialOffersStore();
  const { t } = useTranslation();
  
  const settings = {
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    infinite: true,

    swipeToSlide: true,
    touchThreshold: 10,
    afterChange: (index: number) => {
      setCurrentSlide(index);
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerPadding: "30px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: true,
        },
      },
    ],
  };

  return (
    <div className="relative">
      <Slider {...settings} ref={ref} className="special-offers-slider w-screen">
        {specialOffers.map((el, index) => (
          <div
            key={index}
            className={cn(`border lg:p-5 md:p-4 p-3.5 h-[426px] md:h-[540px] lg:h-[668px] border-t border-[#C7C7C7] relative   ${
              index !== specialOffers.length - 1 ? "border-r-0" : ""
            }`
            ,{
              "border-s-0 lg:border-s ": currentSlide === index,
            },
            {
              "border-e-0 ":  specialOffers.length -1,
            }
          )}
          >
            <InViewWrapper className="relative">
              <img
                src={el.src}
                alt={t(el.title)}
                className={cn(
                  `w-[240px] h-[232px] md:w-[340px] md:h-[320px] lg:w-[444px] lg:h-[421px] object-cover ${el.classes}`
                )}
              />
              <div
                className={cn(`absolute max-w-[80%]  `, {
                  "md:pe-0 pe-[20%]": index === 0,
                })}
              >
                <p
                  className={cn(`lg:left-[35px] md:left-[28px] lg:top-[35px] md:top-[28px] flex xl:ms-4.5 xl:mt-4.5  ms-3 mt-3 w-fit
        uppercase lg:w-fit border bg-[#FFFFFF] text-[#A47762] lg:leading-[20px] md:leading-[16px] xl:py-[12px] z-10  
        md:py-[11px] py-[7px] px-[12px] xl:px-[16px] md:px-[10px] rounded-full font-cofo-medium lg:text-[16px] md:text-[13px] 
        text-[10px] leading-[12px] break-words md:[text-wrap:normal] [text-wrap:balance]`)}
                >
                  {t(el.offer)}
                </p>
              </div>
            </InViewWrapper>

            <h4 className="uppercase text-[20px] tracking-[-0.05em] leading-[22px] font-cofo-medium pt-[20px] text-[#252526] md:pt-[24px] lg:pt-[28px] md:text-[22px] lg:text-[24px] md:leading-[24px] lg:leading-[26px]">
              {t(el.title)}
            </h4>
            <p className="uppercase text-[10px] w-[219px] pt-[13px] text-[#8F8F8F] md:text-[14px] lg:text-[16px] md:leading-[15px] lg:leading-[17px] leading-[11px] md:w-[300px] lg:w-fit">
              {t(el.cardDesc)}
            </p>
            <div className="text-start w-full  lg:mb-4 md:mb-3 mb-2 mt-auto">
              <Link
                to="/special-offers"
                className="mt-auto font-cofo-medium border border-[#8C331B] text-[#8C331B] px-5.75 py-2.5 xl:px-7.25 xl:py-3 rounded-full uppercase text-[12px] md:text-[14px] xl:text-[16px]
                 hover:cursor-pointer hover:bg-[#8C331B] hover:text-white transition-colors duration-300 font-cofo"
              >
                {t("buttons.details")}
              </Link>
            </div>
          </div>
        ))}
      </Slider>
      
    </div>
  );
});
