import { useState, useRef, useEffect, useCallback } from "react";
import Slider from "react-slick";
import cn from "classnames";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { InViewWrapper } from "../utils/InViewWrapper";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useCustomWidth } from "../Hooks/useCustomWidth";
interface AboutSliderProps {
  slides: string[];
}

function AboutSlider({ slides }: AboutSliderProps) {
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef<Slider | null>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const isCustomWidth = useCustomWidth(1500, 1700)
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = useCallback(() => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isSwipe = Math.abs(distance) > minSwipeDistance;

    if (isSwipe) {
      if (distance > 0) {
        sliderRef.current?.slickNext();
      } else {
        sliderRef.current?.slickPrev();
      }
    }
  }, [touchStart, touchEnd]);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0",
    arrows: false,
    slidesToShow: 1,
    variableWidth: true,
    speed: 500,
    focusOnSelect: true,
    swipe: true,
    beforeChange: (_: number, next: number) => setActiveSlide(next),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerPadding: "0",
          centerMode: true,
          slidesToShow: 1,
          variableWidth: true,
          swipe: true,
        },
      },
    ],
  };

  useEffect(() => {
    const handleResize = () => {
      if (sliderRef.current) {
        sliderRef.current.slickGoTo(activeSlide);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [activeSlide]);

  return (
    <div 
      className="slider-container relative w-full overflow-hidden max-w-screen"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <button
        className="hidden md:flex absolute left-4 md:left-[10%] top-1/2 transform -translate-y-1/2 z-10 w-[35px] h-[35px] lg:w-[50px] lg:h-[50px]  
        xl:left-[20vw]
                   items-center justify-center text-white hover:text-[#8C331B] hover:bg-white 2xl:left-[22vw] 2xl:w-[3.2vw] 2xl:h-[3.2vw]
                   rounded-full border border-white transition hover:cursor-pointer"
        onClick={() => sliderRef.current?.slickPrev()}
      >
        <IoIosArrowRoundBack className="w-3/4 h-3/4" />
      </button>

      <div className="flex justify-center">
        <Slider ref={sliderRef} {...settings} className="w-full">
          {slides.map((el, index) => {
            const isSide =
              Math.abs(activeSlide - index) === 1 ||
              Math.abs(activeSlide - index) > 1;

            return (
              <div
                key={index}
                className="px-[3.5px] xl:px-[12px] 2xl:px-[17.5px] transition-all duration-300 slick-slide relative flex justify-center"
              >
                <InViewWrapper>
                  <img loading="lazy"
                    src={el}
                    alt={`slide_${index}`}
                    className={`object-cover -z-10 2xl:w-[64vw] 2xl:h-[35.1vw]  lg:w-[800px] lg:h-[450px] md:w-[500px] md:h-[350px] w-[71.5vw] h-[50vw] mx-auto transition-all duration-300 \
                      ${isCustomWidth ? "xl:w-[65vw] xl:h-[37vw]" : "xl:w-[65vw] xl:h-[35vw]" }`}
                  />
                </InViewWrapper>
                <div
                  className={cn(
                    `absolute inset-0 bg-[#FFFFFFB2] transition-opacity duration-500 ${
                      isSide ? "opacity-100" : "opacity-0"
                    }`
                  )}
                ></div>
              </div>
            );
          })}
        </Slider>
      </div>

      <button
        className="hidden md:flex absolute right-4 md:right-[10%] top-1/2 transform -translate-y-1/2 z-10 w-[35px] h-[35px] lg:w-[50px] lg:h-[50px]  
        xl:right-[20vw]
                   items-center justify-center text-white hover:text-[#8C331B] hover:bg-white 2xl:right-[22vw] 2xl:w-[3.2vw] 2xl:h-[3.2vw]
                   rounded-full border border-white transition hover:cursor-pointer"
        onClick={() => sliderRef.current?.slickNext()}
      >
        <IoIosArrowRoundForward className="w-3/4 h-3/4" />
      </button>
    </div>
  );
}

export default AboutSlider;
