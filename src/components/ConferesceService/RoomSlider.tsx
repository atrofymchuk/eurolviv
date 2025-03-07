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
    slidesToScroll: 2,
    arrows: false,
    variableWidth: true,
    beforeChange: (_oldIndex: number, newIndex: number) => setCurrentSlide(newIndex),

    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          variableWidth: true,
          // centerMode: true,
          rows: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          variableWidth: true,
          // centerMode: true,
          // rows: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          variableWidth: true,
          // centerMode: true,
          rows: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: true,
          centerMode: true,
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
                     left-5 lg:left-5 z-10 text-[#8C331B] bg-white absolute top-1/2 
                     transform -translate-y-1/2 rounded-full border border-white transition"
          onClick={() => sliderRef.current?.slickPrev()}
        >
          <IoIosArrowRoundBack className="w-3/4 h-3/4" />
        </button>
      )}

      <div className="max-w-screen flex justify-center w-full relative">
        <div className="w-full">
          <Slider ref={sliderRef} {...settings} className="hall">
            {images.map((slide, index) => (
              <div key={index} className="flex justify-center 2xl:w-[855px] 2xl:pe-[28px] xl:pe-[20px] sm:w-[355px] sm:h-[184px] lg:pe-[15px] md:pe-[10px] sm:pe-[20px] pe-[20px] w-[276px] h-[184px]">
                <div className="flex md:items-start md:justify-center 2xl:w-[835px] xl:w-[590px] lg:w-[505px] md:w-[382px] sm:w-[355px] w-[276px] h-[184px] sm:pe-0 pe-[20px]">
                  <img src={slide} alt={`Slide ${index}`} className="lg:w-full lg:h-[556px] md:w-[452px] md:h-[334px] sm:w-[325px] sm:h-[303px] w-[276px] h-[184px] object-cover " />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {(isMobile ? currentSlide < totalSlidesMobile - 1 : currentSlide + 2 < images.length) && (
        <button
          className="w-[35px] h-[35px] lg:w-[60px] lg:h-[60px] flex items-center justify-center 
                     right-5 lg:right-5 z-10 text-[#8C331B] bg-white absolute top-1/2 
                     transform -translate-y-1/2 rounded-full border border-white transition"
          onClick={() => sliderRef.current?.slickNext()}
        >
          <IoIosArrowRoundForward className="w-3/4 h-3/4" />
        </button>
      )}
    </div>
  );
});
