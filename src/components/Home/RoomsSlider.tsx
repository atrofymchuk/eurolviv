import Slider from "react-slick";
import { forwardRef, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRoomStore } from "../../store/useRoomsStore";

import area from "../../assets/icons/Rooms/squareWhite.svg";
import guest from "../../assets/icons/Rooms/guestWhite.svg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
type RoomSSliderProps = {
    ref:Slider | null
}


export const RoomsSlider =  forwardRef<Slider, RoomSSliderProps>((_,ref) => {
  const { rooms } = useRoomStore();
  const [currentSlide, setCurrentSlide] = useState(1);
  const {t} = useTranslation()
  const settings = {
    infinite: true,
    speed: 800,
    arrows: false,
    slidesToShow: 3.5,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "60px",
    initialSlide: 1,
    beforeChange: (_: number, newIndex: number) => setCurrentSlide(newIndex),
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 3,
          centerPadding: "40px",
          infinite: true,
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2.8,
          centerPadding: "30px",
          infinite: true,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2.5,
          centerPadding: "25px",
          infinite: true,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          centerPadding: "20px",
          infinite: true,
        },
      },
      {
        breakpoint: 1041,
        settings: {
          slidesToShow: 1,
          centerPadding: "15px",
          infinite: true,
          variableWidth: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "20px",
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          slidesToScroll: 1,
          centerPadding: "1%",
          infinite: true,
        },
      },
    ],
  };

  const getSlideClass = (index: number) => {
    const baseClass = "transition-all duration-300";
    if (index === currentSlide) {
      return `${baseClass} 2xl:w-[589px] 2xl:h-[556px] xl:w-[500px] xl:h-[660px] lg:w-[450px] lg:h-[440px] md:w-[400px] md:h-[520px] w-[350px] h-[500px] z-10`;
    }
    return `${baseClass} 2xl:w-[475px] 2xl:h-[311px] xl:w-[400px] xl:h-[280px] lg:w-[380px] lg:h-[260px] md:w-[350px] md:h-[240px] w-[300px] h-[220px]`;
  };

  return (
    <div className="2xl:w-full xl:w-full lg:w-full w-full overflow-visible ">
      <Slider {...settings} className=" overflow-visible" ref={ref}>
        {rooms.map((el, index) => (
       <div
       key={index}
       className={`flex flex-col items-center text-center justify-between ${getSlideClass(
         index
       )}`}
     >
       <div className="flex items-center justify-center w-full h-[250px] xl:h-[300px]">
         <img
           src={el.header.previewImage}
           alt={`Slide ${index}`}
           className={`object-cover w-full h-full transition-all duration-300 ${
             index === currentSlide ? 'scale-110' : 'scale-100'
           }`}
         />
       </div>
     
       <h4 className="uppercase text-[#EDE8E5] text-[24px] 2xl:text-[31.2px] xl:text-[28px] lg:text-[26px] xl:w-[399px] lg:w-[360px] w-[320px] mx-auto leading-[32.5px] tracking-[-3%] pt-[20px] text-center line-clamp-2">
         {el.title}
       </h4>
     
       <div className="flex flex-col items-center text-white pt-[10px] xl:pt-[18px] gap-y-2">
         <div className="flex gap-2 items-center">
           <img src={area} alt="" className="w-[20px] h-[20px]" />
           <p className="uppercase text-[14px] 2xl:text-[16px] xl:text-[15px] leading-[20px]">
              {t("home.rooms.area")}: {el.area}
           </p>
         </div>
         <div className="flex gap-2 items-center">
           <img src={guest} alt="" className="w-[20px] h-[20px]" />
           <p className="uppercase text-[14px] 2xl:text-[16px] xl:text-[15px] leading-[20px]">
             {t("home.rooms.guests")}: {el.guests}
           </p>
         </div>
       </div>
     
       {index === currentSlide && (
         <div className="xl:mt-5 mt-5 ">
           <Link
             to={`/rooms/${el.type}`}
             className="hover:cursor-pointer border border-[#FFFFFF] uppercase text-[14px] 2xl:text-[16px] xl:text-[15px] font-medium px-[20px] py-[10px] 2xl:px-[29px] 2xl:py-[13px] xl:px-[25px] xl:py-[12px] rounded-full text-[#FFFFFF] hover:text-black hover:bg-[#FFFFFF] transition-colors duration-300"
           >
           {t("buttons.details")}
           </Link>
         </div>
       )}
     </div>
        ))}
      </Slider>
    </div>
  );
})
