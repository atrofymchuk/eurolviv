import { useState, useRef } from "react";
import Slider from "react-slick";

import SlideFst from "../../assets/Terrase/aboutSlide1.jpg";
import SlideScd from "../../assets/Terrase/aboutSlide2.png";
import SlideTrd from "../../assets/Terrase/aboutSlide3.png";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

function AboutSlider() {
  const slides = [SlideFst, SlideScd, SlideTrd, SlideFst, SlideScd];
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
    <div className="slider-container relative w-full ">
      <Slider ref={sliderRef} {...settings}>
        {slides.map((el, index) => {
          const isSide =
            Math.abs(activeSlide - index) === 1 ||
            Math.abs(activeSlide - index) > 1;

          return (
            <div
              key={index}
              className="px-2 transition-all duration-300 slick-slide relative"
            >
              <img
                src={el}
                alt={`slide_${index}`}
                className="lg:w-[1223px] lg:h-[675px] w-[285px] h-[186px] mx-auto transition-all duration-300"
              />

              <div
                className={`absolute inset-0 bg-[#FFFFFFB2] transition-opacity duration-500 ${
                  isSide ? "opacity-100" : "opacity-0"
                }`}
              ></div>
            </div>
          );
        })}
      </Slider>

      <div className="lg:flex hidden">
        <button
          className="w-[35px] h-[35px] lg:w-[60px] lg:h-[60px] flex items-center justify-center 
                             left-5 lg:left-100 z-10 text-[#8C331B] bg-white absolute top-1/2 
                             transform -translate-y-1/2 rounded-full border border-white transition hover:cursor-pointer" 
          onClick={() => sliderRef.current?.slickPrev()}
        >
          <IoIosArrowRoundBack className="w-3/4 h-3/4" />
        </button>
        <button
          className="w-[35px] h-[35px] lg:w-[60px] lg:h-[60px] flex items-center justify-center  
                                      right-5 lg:right-100 z-10 text-[#8C331B] bg-white absolute top-1/2 
                                      transform -translate-y-1/2 rounded-full border border-white transition hover:cursor-pointer"
          onClick={() => sliderRef.current?.slickNext()}
        >
          <IoIosArrowRoundForward className="w-3/4 h-3/4" />
        </button>
      </div>
    </div>
  );
}

export default AboutSlider;
