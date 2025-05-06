import { useCallback, useEffect, useMemo, useRef, useState, memo } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
interface RoomSliderProps {
  images: string[];
  viewShowcaseSwiperImages: {
    ua: string[];
    eng: string[];
  };
}

export const RoomSlider = memo(({ images }: RoomSliderProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const sliderRef = useRef<Slider | null>(null);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsMobile(window.innerWidth <= 768);
      }, 150);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timeoutId);
    };
  }, []);

  const totalSlidesMobile = useMemo(
    () => Math.ceil(images.length / 2),
    [images.length]
  );

  const handleBeforeChange = useCallback(
    (_oldIndex: number, newIndex: number) => {
      setCurrentSlide(newIndex);
    },
    []
  );

  const handlePrevClick = useCallback(() => {
    sliderRef.current?.slickPrev();
  }, []);

  const handleNextClick = useCallback(() => {
    sliderRef.current?.slickNext();
  }, []);

  const settings = useMemo(
    () => ({
      dots: false,
      infinite: false,
      speed: 500,
      slidesToScroll: 2,
      arrows: false,
      variableWidth: true,
      beforeChange: handleBeforeChange,

      responsive: [
        {
          breakpoint: 1280,
          settings: {
            slidesToScroll: 2,
            variableWidth: true,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToScroll: 2,
            variableWidth: true,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToScroll: 2,
            variableWidth: true,
            rows: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToScroll: 1,
            slidesToShow: 1.3,
            centerMode: true,
            rows: 2,
            centerPadding: "0",
          },
        },
      ],
    }),
    [handleBeforeChange]
  );

  const showNextButton = useMemo(() => {
    return isMobile
      ? Math.round(currentSlide + 1) < totalSlidesMobile
      : currentSlide + 2 < images.length;
  }, [currentSlide, images.length, isMobile, totalSlidesMobile]);

  return (
    <div className="relative flex justify-center lg:ms-[71px] ms-[calc(5%)]">
      {currentSlide > 0 && (
        <button
          className="w-[35px] h-[35px]  lg:w-[40px] lg:h-[40px] xl:w-[60px] xl:h-[60px] flex items-center justify-center 
                     left-5 lg:left-5 z-10 text-[#8C331B] bg-white absolute top-1/2 
                     transform -translate-y-1/2 rounded-full border border-white transition"
          onClick={handlePrevClick}
          aria-label="Previous slide"
        >
          <IoIosArrowRoundBack className="w-3/4 h-3/4" />
        </button>
      )}

      <div className="max-w-screen flex justify-center w-full relative">
        <div className="w-full">
          <Slider ref={sliderRef} {...settings} className="hall">
            {images.map((slide, index) => (
              <div key={index} className="pe-[6.5px] lg:pe-5">
                <div className="relative">
                  <img
                    src={slide}
                    alt={`Slide ${index}`}
                    width={835}
                    height={556}
                    loading={index < 4 ? "eager" : "lazy"}
                    className="object-cover 
                      w-[73.33vw] h-[47.22vw]
                      sm:w-[41.67vw] sm:h-[39.06vw]
                      md:w-[36.46vw] md:h-[30.77vw]
                      lg:w-[38.25vw] lg:h-[28.39vw]
                      xl:w-[39.2vw] xl:h-[31.88vw]
                      2xl:w-[43.49vw] 2xl:h-[28.96vw]"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {showNextButton && (
        <button
          className="w-[35px] h-[35px] xl:w-[60px] xl:h-[60px] lg:w-[40px] lg:h-[40px] 2xl:right-[6vw] flex items-center justify-center 
                     right-[17vw] lg:right-[12vw] z-10 text-[#8C331B] bg-white absolute top-1/2 
                     transform -translate-y-1/2 rounded-full border border-white transition"
          onClick={handleNextClick}
          aria-label="Next slide"
        >
          <IoIosArrowRoundForward className="w-3/4 h-3/4" />
        </button>
      )}
    </div>
  );
});
