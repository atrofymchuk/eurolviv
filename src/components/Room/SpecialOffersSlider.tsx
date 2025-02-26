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
    slidesToShow:4,
    slidesToScroll: 1,
    arrows: false,
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
      className={`border lg:p-5 p-3.5 h-[426px] lg:h-[652px] border-[#C7C7C7] ${
        index !== specialOffers.length - 1 ? "border-r-0" : ""
      }`}
    >
      <img
        src={el.src}
        alt=""
        className={`w-[240px] h-[232px] lg:w-[444px] lg:h-[429px] object-cover ${el.classes}`}
      />
      <p className="absolute lg:left-[35px] lg:top-[35px] left-[23px] top-[23px] uppercase lg:w-fit w-[150px] border bg-[#FFFFFF] text-[#A47762] lg:leading-[20px] lg:py-[13px] py-[7px] px-[12px] lg:px-[22px] rounded-full font-semibold lg:text-[16px] text-[10px] leading-[12px]">
        {el.offer}
      </p>

      <h4 className="uppercase text-[20px] tracking-[-0.05em] leading-[22px] font-semibold pt-[20px] text-[#252526] lg:pt-[28px] lg:text-[24px] lg:leading-[26px]">
        {el.title}
      </h4>
      <p className="uppercase text-[10px] w-[219px] pt-[13px] text-[#8F8F8F] lg:text-[16px] lg:leading-[17px] leading-[11px] lg:w-fit">
        {el.cardDesc}
      </p>
      <div className="text-start w-full px-[15px] lg:px-0 lg:mb-4 mb-2 mt-auto">
        <Link
          to="/special-offers"
          className="mt-auto font-semibold border border-[#8C331B] text-[#8C331B] px-4 py-3 rounded-full uppercase text-[12px] xl:text-base hover:cursor-pointer hover:bg-[#8C331B] hover:text-white font-cofo"
        >
          детальніше
        </Link>
      </div>
    </div>
  ))}
</Slider>

  );
})
