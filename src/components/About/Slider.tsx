import { useRef, useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  mirrorAboutSlider,
  luxTwoRoomsPreview,
  bathroomAboutSlider,
  champagneAboutSlider,
  bedroomAboutSlider,
} from "../../store/exportsImg";

import { HiArrowLongRight, HiArrowLongLeft } from "react-icons/hi2";
import { InViewWrapper } from "../utils/InViewWrapper";
import cn from "classnames";
import { useCustomWidth } from "../Hooks/useCustomWidth";
  const slides = [
  mirrorAboutSlider,
  champagneAboutSlider,
  bedroomAboutSlider,
  bathroomAboutSlider,
  luxTwoRoomsPreview,
];

const ImageSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);
const isCustomWidth = useCustomWidth(1500, 1700);
  const settings = {
    infinite: true,
    centerMode: true,
    centerPadding: "8%",
    slidesToShow: 3,
    arrows: false,
    responsive: [
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 3,
          centerPadding: "8%",
        },
      },
      {
        breakpoint: 1530,
        settings: {
          slidesToShow: 3,
          centerPadding: "8%",
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          centerPadding: "10%",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "22%",
        },
      },
    ],
    speed: 500,
    beforeChange: (_: number, next: number) => setActiveSlide(next),
  };

  const slideRef = useRef<Slider | null>(null);

  return (
    <div className="relative w-full flex justify-center ">
      <Slider {...settings} ref={slideRef} className={cn(`w-full h-full  img`)}>
        {slides.map((image, index) => {
          const totalSlides = slides.length;
          const isActive = activeSlide === index;

          const normalizedDiff = Math.min(
            Math.abs(activeSlide - index),
            Math.abs(activeSlide - index + totalSlides),
            Math.abs(activeSlide - index - totalSlides)
          );

          const isSide = normalizedDiff === 1;
          const isEdge = normalizedDiff > 1;

          return (
            <InViewWrapper key={index}>
              <img
                loading="lazy"
                src={image}
                alt={`slide_${index}`}
                className={cn(
                  `w-full object-cover transition-all duration-500  px-2 lg:px-0`,
                  {
                    "2xl:w-[26.563vw] 2xl:h-[29.896vw]    lg:w-[350px] lg:h-[400px] md:h-[300px] h-full z-10 scale-[105%] lg:scale-[100%] ":
                      isActive,
                    "2xl:w-[27.604vw] 2xl:h-[18.385vw]  lg:w-[300px] lg:h-[213px]  h-[154px] z-5 ":
                      isSide,
                    "2xl:w-[26.771vw] 2xl:h-[16.458vw]   h-[154px] lg:w-[250px] lg:h-[194px] ":
                      isEdge,
                      "xl:w-[40vw] xl:h-[500px]":isActive && isCustomWidth,
                      "xl:w-[37vw] xl:h-[410px]":isActive && !isCustomWidth,
                      "xl:w-[26.469vw] xl:h-[283px]":isSide && isCustomWidth,
                      "xl:w-[26.469vw] xl:h-[253px]":isSide && !isCustomWidth,
                      "xl:w-[27.469vw] xl:h-[246px]":isEdge && isCustomWidth,
                      "xl:w-[27.469vw] xl:h-[216px]":isEdge && !isCustomWidth,

                    }
                )}
              />
            </InViewWrapper>
          );
        })}
      </Slider>

      <button
        className={`xl:absolute left-40 -bottom-20  2xl:bottom-[-0.5vw]  2xl:left-[8.5vw] xl:bottom-[0vw] xl:left-[8.7vw]
          xl:flex  items-center justify-center text-[#8C331B]  hidden border-[#8C331B] 2xl:w-[62px] 2xl:h-[62px] w-[42px] h-[42px] bg-white p-0 rounded-full border z-20 hover:bg-[#8C331B]
           hover:cursor-pointer hover:text-white transition ${isCustomWidth ? "xl:bottom-[2vw]" : "xl:bottom-[0vw]"}`}  
        onClick={() => slideRef.current?.slickPrev()}
      >
        <HiArrowLongLeft className="2xl:w-[32px] 2xl:h-[32px] xl:w-[26px] xl:h-[26px] w-[22px] h-[22px]" />
      </button>
      <button 
        className={`xl:absolute right-40 -bottom-20 2xl:bottom-[-0.5vw] xl:flex 2xl:right-[8.5vw]  xl:right-[8.7vw]
           items-center justify-center text-[#8C331B] hidden border-[#8C331B] 2xl:w-[62px] 2xl:h-[62px] w-[42px] h-[42px] bg-white p-0 rounded-full border z-20 hover:bg-[#8C331B] 
         hover:cursor-pointer hover:text-white transition ${isCustomWidth ? "xl:bottom-[2vw]" : "xl:bottom-[0vw]"}`}
        onClick={() => slideRef.current?.slickNext()}
      >
        <HiArrowLongRight
          className="2xl:w-[32px] 2xl:h-[32px] xl:w-[26px] xl:h-[26px] w-[22px] h-[22px]"
        />
      </button>
    </div>
  );
};

export default ImageSlider;
