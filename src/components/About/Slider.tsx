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
const slides = [
    mirrorAboutSlider,
  champagneAboutSlider,
  bedroomAboutSlider,
  bathroomAboutSlider,
  luxTwoRoomsPreview,
];

const ImageSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    infinite: true,
    centerMode: true,
    centerPadding: "8%",
    slidesToShow: 3,
    arrows: false,
    responsive: [
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
          centerPadding: "25%",
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
              <img loading="lazy"
                src={image}
                alt={`slide_${index}`}
                className={cn(`w-full max-w-[500px]  object-cover  transition-all duration-500  px-2
              
            `,
            {
                    "2xl:w-[510px] 2xl:h-[700px] xl:w-[390px] xl:h-[500px] w-[290px] lg:w-[350px] lg:h-[400px] md:h-[300px] max-h-full h-5/6 z-10 scale-[105%] lg:scale-[100%]":
                      isActive,
                    "2xl:w-[530px] 2xl:h-[353px] xl:w-[370px] xl:h-[253px] lg:w-[300px] lg:h-[213px] w-[231px] h-[154px] z-5":
                      isSide,
                    "2xl:w-[514px] 2xl:h-[316px] xl:w-[370px] xl:h-[216px] w-[231px] h-[154px] lg:w-[250px] lg:h-[194px]":
                      isEdge,
                  }
                )}
              />
            </InViewWrapper>
          );
        })}
      </Slider>

      <button
        className="xl:absolute left-40 -bottom-20  xl:bottom-4  xl:block justify-center text-[#8C331B]  hidden border-[#8C331B] w-[62px] h-[62px] bg-white p-3 rounded-full border z-20 hover:bg-[#8C331B] hover:cursor-pointer hover:text-white transition"
        onClick={() => slideRef.current?.slickPrev()}
      >
        <HiArrowLongLeft className="w-[32px] h-[32px]" />
      </button>
      <button
        className="xl:absolute right-40 -bottom-20 xl:block  xl:bottom-4 justify-center text-[#8C331B] hidden border-[#8C331B] bg-white p-3 rounded-full border w-[62px] h-[62px] z-20 hover:bg-[#8C331B] hover:cursor-pointer hover:text-white transition"
        onClick={() => slideRef.current?.slickNext()}
      >
        <HiArrowLongRight
          width={36}
          height={36}
          className="w-[32px] h-[32px]"
        />
      </button>
    </div>
  );
};

export default ImageSlider;
