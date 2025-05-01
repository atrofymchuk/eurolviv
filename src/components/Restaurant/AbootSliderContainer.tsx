import AboutSlider from "./AboutSlider";
import { useTranslation } from "react-i18next";
import {
  aboutRestaurant,
  aboutRestaurantScd,
  aboutRestaurantTrd,
} from "../../store/exportsImg";
import cn from "classnames";
import { useCustomWidth } from "../Hooks/useCustomWidth";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { links } from "../../Constants/Links";

interface AbootSliderContainerProps {
  slides?: string[];
  isTerrase?: boolean;
  index?: number;
}

export const AbootSliderContainer: React.FC<AbootSliderContainerProps> = ({
  slides,
  isTerrase,  
  index
}) => {
  const { t } = useTranslation();
  const isCustomWidth = useCustomWidth(1500, 1700);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const imgs = slides
    ? slides
    : [
        aboutRestaurant,
        aboutRestaurantScd,
        aboutRestaurantTrd,
        aboutRestaurant,
        aboutRestaurantScd,
      ];
  

  return (
    <div
      ref={containerRef}
      className={`relative flex xl:h-[50vw] items-center lg:justify-end   max-w-screen overflow-x-hidden overflow-y-hidden  lg:h-[650px] md:h-[570px] flex-col 
        ${
        isTerrase ? "w-full h-[380px] 2xl:h-[46.15vw] " : "justify-center h-[370px] 2xl:h-[46.15vw]"
      }`}
    >
      <div className="absolute w-full h-[660px] -z-1 flex items-end justify-center ">
        <div
          className={cn(`absolute  xl:h-[50vw] 2xl:h-[46.15vw]  h-[700px]`, {
            
            "2xl:w-[93.1%] xl:w-[93.1%] lg:w-[93.1%] md:w-[93.1%] w-[89.05%]": !isTerrase,
            "2xl:w-[93.23%] xl:w-[93.23%] lg:w-[93.25%] md:w-[93.25%] w-[89.9%]": isTerrase,
          })}
        >
          <div className="h-full grid grid-cols-1  w-full md:grid-cols-[49.9%_0.1%_50.03%]">
            <div className="h-full border-x md:border-x-0 box-border md:border-s w-full  border-[#B3B3B3]"></div>
            <div className={` border-s  ${isTerrase ? " md:border-s" : " md:border-s-0"} ${index===2 ? "h-2/3" : ""}  border-[#B3B3B3] hidden md:block`}></div>
            <div className="h-full border-e hidden md:block  md:border-x-0 md:border-e border-[#B3B3B3]"></div>
          </div>
        </div>
      </div>

      <div className={`flex flex-col items-center lg:mb-0 ${isTerrase ? "mt-12" : "mt-1 "}`}>
          <AboutSlider slides={imgs} />

        <Link
          to={links.bookTable}
          target="_blank"
          className={cn(`2xl:text-[.73vw] lg:text-[14px] 2xl:mt-[38px]  font-cofo-medium text-center flex items-center justify-center
           bg-[#8C331B] border border-[#8C331B] hover:text-[#8C331B] w-[160px] h-[40px] 2xl:w-[10.1vw] 2xl:h-[2.3vw] 
        uppercase mt-[24px] mb-[10px] hover:bg-[#FFFFFF] text-[#FFFFFF] hover:cursor-pointer  rounded-4xl text-[12px]`, {
          "xl:w-[12.1vw] xl:h-[2.5vw]": isCustomWidth,
          "xl:w-[14.2vw] xl:h-[2.9vw]": !isCustomWidth,
          "2xl:mb-[1.88vw] xl:mb-[2.88vw]": isTerrase,
          "2xl:mb-[2.24vw] xl:mb-[2.24vw]": !isTerrase,
          "xl:mb-[7.24vw]": isTerrase,
        })}
        >
          {t("buttons.bookTable")}
        </Link>
      </div>
    </div>
  );
};
