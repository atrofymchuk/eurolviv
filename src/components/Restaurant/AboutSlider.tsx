import { useState, useRef } from "react";
import Slider from "react-slick";

import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { InViewWrapper } from "../utils/InViewWrapper";
import {
  aboutRestaurant,
  aboutRestaurantScd,
  aboutRestaurantTrd,
} from "../../store/exportsImg";
import cn from "classnames";
function AboutSlider() {
  const slides = [
    aboutRestaurant,
    aboutRestaurantScd,
    aboutRestaurantTrd,
    aboutRestaurant,
    aboutRestaurantScd,
  ];
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef<Slider | null>(null);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "100px",
    arrows: false,
    slidesToShow: 1,
    variableWidth: true,
    speed: 500,
    focusOnSelect: true,
    beforeChange: (_: number, next: number) => setActiveSlide(next),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerPadding: "20px",
          slidesToShow: 1,
          variableWidth: true,
        },
      },
    ],
  };

  return (
    <div className="slider-container relative w-full flex items-center justify-center">
      <button
        className="absolute left-10 md:left-[20%] z-10 w-[35px] h-[35px] lg:w-[60px] lg:h-[60px] 
                   lg:flex hidden items-center justify-center text-[#8C331B] bg-white 
                   rounded-full border border-white transition hover:cursor-pointer"
        onClick={() => sliderRef.current?.slickPrev()}
      >
        <IoIosArrowRoundBack className="w-3/4 h-3/4" />
      </button>

      <Slider ref={sliderRef} {...settings} className="w-full">
        {slides.map((el, index) => {
          const isSide =
            Math.abs(activeSlide - index) === 1 ||
            Math.abs(activeSlide - index) > 1;

          return (
            <div
              key={index}
              className="px-2 transition-all duration-300 slick-slide relative"
            >
              <InViewWrapper>
                <img
                  src={el}
                  alt={`slide_${index}`}
                  className="2xl:w-[1223px] 2xl:h-[675px] xl:w-[1000px] xl:h-[550px] lg:w-[800px] lg:h-[450px] md:w-[500px] md:h-[350px] w-[285px] h-[186px] mx-auto transition-all duration-300"
                />
              </InViewWrapper>
              <div
                className={cn(`absolute inset-0 bg-[#FFFFFFB2] transition-opacity duration-500 ${
                  isSide ? "opacity-100" : "opacity-0"
                }`)}
              ></div>
            </div>
          );
        })}
      </Slider>

      <button
        className="absolute hidden md:right-[20%] z-10 w-[35px] h-[35px] lg:w-[60px] lg:h-[60px] 
                   lg:flex items-center justify-center text-[#8C331B] bg-white 
                   rounded-full border border-white transition hover:cursor-pointer"
        onClick={() => sliderRef.current?.slickNext()}
      >
        <IoIosArrowRoundForward className="w-3/4 h-3/4" />
      </button>
    </div>
  );
}

export default AboutSlider;
