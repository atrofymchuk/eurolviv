import { Link } from "react-router-dom";
import Slider from "react-slick";
import { useSpecialOffersStore } from "../../store/useSpecialOffersStore";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { forwardRef } from "react";

type SpecialOffersSliderToProps = {
    ref:Slider | null
}

export const SpecialOffersSlider = forwardRef<Slider, SpecialOffersSliderToProps>((_,ref) => {
  const { specialOffers } = useSpecialOffersStore();

  const settings = {
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    infinite: true,
    swipeToSlide: true,
    touchThreshold: 10,
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
          variableWidth: true
        },
      },
    ],
  };

  return (
    <Slider {...settings} ref={ref} className="special-offers-slider w-screen">
      {specialOffers.map((el, index) => (
        <div
          key={index}
          className={`border lg:p-5 md:p-4 p-3.5 h-[426px] md:h-[540px] lg:h-[652px] border-[#C7C7C7] ${
            index !== specialOffers.length - 1 ? "border-r-0" : ""
          }`}
        >
          <img
            src={el.src}
            alt=""
            className={`w-[240px] h-[232px] md:w-[340px] md:h-[320px] lg:w-[444px] lg:h-[421px] object-cover ${el.classes}`}
          />
          <p className="absolute lg:left-[35px] md:left-[28px] lg:top-[35px] md:top-[28px] left-[23px] top-[23px] uppercase lg:w-fit md:w-[180px] w-[150px] border bg-[#FFFFFF] text-[#A47762] lg:leading-[20px] md:leading-[16px] lg:py-[13px] md:py-[10px] py-[7px] px-[12px] lg:px-[22px] md:px-[16px] rounded-full font-semibold lg:text-[16px] md:text-[13px] text-[10px] leading-[12px]">
            {el.offer}
          </p>

          <h4 className="uppercase text-[20px] tracking-[-0.05em] leading-[22px] font-semibold pt-[20px] text-[#252526] md:pt-[24px] lg:pt-[28px] md:text-[22px] lg:text-[24px] md:leading-[24px] lg:leading-[26px]">
            {el.title}
          </h4>
          <p className="uppercase text-[10px] w-[219px] pt-[13px] text-[#8F8F8F] md:text-[14px] lg:text-[16px] md:leading-[15px] lg:leading-[17px] leading-[11px] md:w-[300px] lg:w-fit">
            {el.cardDesc}
          </p>
          <div className="text-start w-full px-[15px] lg:px-0 lg:mb-4 md:mb-3 mb-2 mt-auto">
            <Link
              to="/special-offers"
              className="mt-auto font-semibold border border-[#8C331B] text-[#8C331B] px-4 py-3 rounded-full uppercase text-[12px] md:text-[14px] xl:text-base hover:cursor-pointer hover:bg-[#8C331B] hover:text-white transition-colors duration-300 font-cofo"
            >
              детальніше
            </Link>
          </div>
        </div>
      ))}
    </Slider>
  );
})
