import { useEffect, useState, useRef, memo } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

interface RoomSliderProps {
  images: string[];
}

export const RoomSlider = memo(({ images }: RoomSliderProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const sliderRef = useRef<Slider | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlidesMobile = Math.ceil(images.length / 2);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2.2,
    slidesToScroll: 2,
    arrows: false,
    variableWidth: false,
    beforeChange: (_oldIndex: number, newIndex: number) =>
      setCurrentSlide(newIndex),

    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 2.2,
          slidesToScroll: 2,
          rows: 1,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2.2,
          slidesToScroll: 2,
          rows: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.2,
          slidesToScroll: 2,
          rows: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2.2,
          slidesToScroll: 1,
          rows: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1,
          rows: 2,
        },
      },
    ],
  };

  return (
    <div className="relative flex justify-center lg:ms-[71px]">
      {currentSlide > 0 && (
        <button
          className="w-[35px] h-[35px] lg:w-[60px] lg:h-[60px] flex items-center justify-center 
                     left-10 lg:left-5 z-10 text-[#8C331B] bg-white absolute top-1/2 
                     transform -translate-y-1/2 rounded-full border border-white transition"
          onClick={() => sliderRef.current?.slickPrev()}
        >
          <IoIosArrowRoundBack className="w-3/4 h-3/4" />
        </button>
      )}

      <div className="max-w-screen flex justify-center w-full relative">
        <div className="w-full ps-5 lg:px-0">
          <Slider ref={sliderRef} {...settings} className="hall">
            {images.map((slide, index) => (
              <div
                key={index}
                className="px-2"
              >
                <div className="w-full h-full">
                  <img
                    src={slide}
                    alt={`Slide ${index}`}
                    className="w-full h-[184px] md:h-[334px] lg:h-[456px] object-cover"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {(isMobile
        ? currentSlide < totalSlidesMobile - 1
        : currentSlide + 2 < images.length) && (
        <button
          className="w-[35px] h-[35px] lg:w-[60px] lg:h-[60px] flex items-center justify-center 
                     right-14 lg:right-5 z-10 text-[#8C331B] bg-white absolute top-1/2 
                     transform -translate-y-1/2 rounded-full border border-white transition"
          onClick={() => sliderRef.current?.slickNext()}
        >
          <IoIosArrowRoundForward className="w-3/4 h-3/4" />
        </button>
      )}
    </div>
  );
});
