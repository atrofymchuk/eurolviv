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
  isHome: boolean;
};

export const SpecialOffersSlider = forwardRef<
  Slider,
  SpecialOffersSliderToProps
>(({ isHome }, ref) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { specialOffers } = useSpecialOffersStore();
  const { t, i18n } = useTranslation();

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
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "0px",
          variableWidth: true,
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

  const isEng = i18n.language === "en";
  return (
    <div className="relative">
      <Slider
        {...settings}
        ref={ref}
        className="special-offers-slider w-screen"
      >
        {specialOffers.map((el, index) => (
          <div
            key={index}
            className={cn(
              `border lg: 2xl:p-[1.04vw] md:p-4 xl:p-3 px-[4vw_3.73vw] py-[4vw_3.2vw] h-[113.6vw] md:h-[540px] lg:h-[444px] xl:h-[37.5vw]
               2xl:h-[34.79vw] border-t border-[#C7C7C7] relative   ${
                 index !== specialOffers.length - 1 ? "border-r-0" : ""
               }`,
              {
                "border-s lg:border-s ": currentSlide === index,
              },
              {
                "border-s-0 ": isHome && currentSlide === index,
              },
              {
                "border-e-0 ": specialOffers.length - 1,
              }
            )}
          >
            <InViewWrapper className="relative">
              <picture>
                <source media="(min-width:1024px)" srcSet={el.src} />
                <source media="(max-width:1023px)" srcSet={el.srcMobile} />
                <img
                  src={el.src}
                  alt={t(el.title)}
                  className={`w-full h-auto  object-cover  xl:h-[23.44vw]
                  lg:h-[421px] 2xl:w-[23.13vw] 2xl:h-[22.29vw]  ${el.classes}`}
                />
              </picture>
              <div
                className={cn(
                  `absolute  md:max-w-full `,
                  {
                    "md:pe-0  max-w-[80%]": index === 0,
                  },
                  {
                    "md:pe-0 pe-[20%] ": index === 0 && !isEng,
                  },
                  {
                    "md:pe-0 pe-[10%] ": isEng,
                  }
                )}
              >
                <p
                  className={cn(
                    `lg:left-[35px] md:left-[28px] lg:top-[35px] md:top-[28px] flex xl:ms-4.5 2xl:ms-[0.94vw] xl:mt-[1.41vw] 2xl:mt-[0.94vw] ms-3 mt-3 w-fit
        uppercase lg:w-fit border bg-[#FFFFFF] text-[#A47762] lg:leading-[20px] md:leading-[16px] 2xl:py-[12px] z-10  
        md:py-[11px] py-[7px] px-[12px]  md:px-[10px] rounded-full font-cofo-medium 
        2xl:text-[0.83vw]  xl:py-1
        xl:text-[0.78vw]
        lg:text-[16px] md:text-[13px] 
        text-[10px] leading-[12px] break-words md:[text-wrap:normal] [text-wrap:balance] `,
                    {
                      "xl:me-[9vw] 2xl:me-[9.5vw]": index === 0 && isEng,
                    }
                  )}
                >
                  {t(el.offer)}
                </p>
              </div>
            </InViewWrapper>

            <h4
              className="uppercase text-[5.33vw] tracking-[-0.05em] font-cofo-medium 
            leading-[100%]
             text-[#252526] md:text-[22px] lg:text-[24px] 2xl:text-[1.25vw] mt-[5.33vw]
              2xl:mt-[1.47vw] xl:mt-[1.25vw] xl:text-[1.41vw]"
            >
              {t(el.title)}
            </h4>
            <p
              className={`uppercase text-[2.67vw] pt-[3.47vw] xl:pt-[1.25vw] 2xl:pt-[1.15vw] text-[#8F8F8F] md:text-[14px]
             lg:text-[12px] 2xl:text-[0.83vw] xl:text-[0.94vw] leading-[108%]  md:w-[300px] lg:w-fit
             ${!isEng && index === 0 ? "w-[58.4vw]! lg:w-fit!" : ""}
              ${index === 1 ? " xl:w-[102%] " : ""}

              ${isEng && index === 1 ? " xl:w-[105%] tracking-[-0.03em]" : ""}
              ${index === 2 && isEng ? " 2xl:w-[80%]" : ""}
              ${
                index === 4 && isEng
                  ? " 2xl:w-[95%] xl:w-[100%] tracking-[-0.03em]"
                  : ""
              }
              `}
            >
              {t(el.cardDesc)}
            </p>
            <div className="flex flex-col text-start w-full 2xl:mb-1 xl:mb-2  mt-auto">
              <Link
                to="/special-offers"
                className="mt-auto inline-flex items-center justify-center font-cofo-medium border border-[#8C331B]
                 text-[#8C331B] px-5.75 py-2.5 xl:px-7.25 xl:py-3 rounded-full uppercase w-fit
                text-[3.2vw] md:text-[14px] xl:text-[0.94vw] 2xl:text-[0.83vw] xl:w-[11vw] xl:h-[2.8vw]
                 hover:cursor-pointer hover:bg-[#8C331B] hover:text-white transition-colors duration-300 
                 lg:w-[170px] 2xl:w-[8.85vw] 2xl:h-[2.4vw] lg:h-[46px]"
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
