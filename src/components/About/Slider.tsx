import { useRef, useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import slide1 from "../../assets/About/champagne.webp";
import slide2 from "../../assets/About/bathroom.webp";
import slide3 from "../../assets/About/bedroom.webp";
import slide4 from "../../assets/About/2roomLux.webp";
import slide5 from "../../assets/About/mirror.webp";
import { HiArrowLongRight, HiArrowLongLeft } from "react-icons/hi2";
import { InViewWrapper } from "../InViewWrapper";
const slides = [slide1, slide2, slide3, slide4, slide5];




const ImageSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    infinite: true,
    centerMode: true,
    centerPadding: "8%",
    slidesToShow: 3,
    arrows:false,
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
      <Slider {...settings} ref={slideRef} className={`w-full h-full  img`}>
        {slides.map((image, index) => {
          const isActive = activeSlide === index;
          const isSide = Math.abs(activeSlide - index) === 1;
          const isEdge = Math.abs(activeSlide - index) > 1;

          return (
            <InViewWrapper key={index}>
            <img
            
            src={image}
            alt={`slide_${index}`}
            className={`w-full max-w-[500px]  object-cover  transition-all duration-500 lg:px-0      px-2
              ${isSide ? "xl:w-[530px] xl:h-[353px] w-[231px] h-[154px]" : ""}
              ${isEdge ? "xl:w-[514px] xl:h-[316px] w-[231px] h-[154px]" : ""}
              ${
                isActive
                ? "xl:w-[510px] xl:h-[400px] w-[290px] h-[193px]"
                : ""
              }`}
              />
              </InViewWrapper>
          );
        })}
      </Slider>

      <button
        className="xl:absolute left-40 -bottom-20    xl:block justify-center text-[#8C331B]  hidden border-[#8C331B] w-[62px] h-[62px] bg-white p-3 rounded-full border z-20 hover:bg-[#8C331B] hover:cursor-pointer hover:text-white transition"
        onClick={() => slideRef.current?.slickPrev()}
      >
        <HiArrowLongLeft className="w-[32px] h-[32px]" />
      </button>
      <button
        className="xl:absolute right-40 -bottom-20 xl:block justify-center text-[#8C331B] hidden border-[#8C331B] bg-white p-3 rounded-full border w-[62px] h-[62px] z-20 hover:bg-[#8C331B] hover:cursor-pointer hover:text-white transition"
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
