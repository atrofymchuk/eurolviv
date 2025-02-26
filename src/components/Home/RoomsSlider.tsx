import Slider from "react-slick";
import { forwardRef, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRoomStore } from "../../store/useRoomsStore";

import area from "../../assets/icons/Rooms/squareWhite.svg";
import guest from "../../assets/icons/Rooms/guestWhite.svg";
import { Link } from "react-router-dom";

type RoomSSliderProps = {
    ref:Slider | null
}


export const RoomsSlider =  forwardRef<Slider, RoomSSliderProps>((_,ref) => {
  const { rooms } = useRoomStore();
  const [currentSlide, setCurrentSlide] = useState(1);

  const settings = {
    infinite: true,
    speed: 800,
    arrows:false,
    slidesToShow: 3.5,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "60px",
    initialSlide: 1,
    beforeChange: (_: number, newIndex: number) => setCurrentSlide(newIndex),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.5,
        },
      },
    ],
  };

  const getSlideClass = (index: number) => {
    return index === currentSlide
      ? "w-[589px] h-[416px]  z-10 "
      : "w-[475px] h-[311px]  ";
  };

  return (
    <div className="w-full h-[500px] ">
      <Slider {...settings} className="roomslider" ref={ref}>
        {rooms.map((el, index) => (
          <div
            key={index}
            className={`flex justify-center flex-col items-center text-center   ${getSlideClass(
              index
            )}`}
          >
            <img
              src={el.header.previewImage}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover  transition-transform duration-300 my-auto"
            />
            <h4 className="uppercase text-[#EDE8E5] text-[31.2px] w-[399px] mx-auto leading-[32.5px] tracking-[-9%] pt-[28px]">
              {el.title}
            </h4>
            <div className="flex flex-col items-center text-white pt-[18px]">
              <div className="flex">
                <img src={area} alt="" />
                <p className="uppercase text-[16px] leading-[20px]">
                  площа:{el.area}
                </p>
              </div>
              <div className="flex">
                <img src={guest} alt="" />
                <p className="uppercase text-[16px] leading-[20px]">
                  гостей:{el.guests}
                </p>
             
              </div>
              <div className="mt-[34px]">
                
              {index === currentSlide && (
                <div className="mt-[24px] relative ">
                  <Link
                    to={`/rooms/${el.type}`}
                    className="hover:cursor-pointer border border-[#FFFFFF] uppercase text-[16px] font-medium px-[29px] py-[13px] rounded-full text-[#FFFFFF] hover:text-black hover:bg-[#FFFFFF]"
                  >
                    детальніше
                  </Link>
                </div>
              )}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
})
