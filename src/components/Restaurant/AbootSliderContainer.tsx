import AboutSlider from "./AboutSlider";
import { useTranslation } from "react-i18next";
import {
  aboutRestaurant,
  aboutRestaurantScd,
  aboutRestaurantTrd,
} from "../../store/exportsImg";
import cn from "classnames";
import { useCustomWidth } from "../Hooks/useCustomWidth";
interface AbootSliderContainerProps {
  slides?: string[];
  isTerrase?: boolean;
}

export const AbootSliderContainer: React.FC<AbootSliderContainerProps> = ({
  slides,
  isTerrase,
}) => {
  const { t } = useTranslation();
  const isMobile = useCustomWidth(410, 450)
  const isCustomWidth = useCustomWidth(1500, 1700)
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
      className={`relative flex items-center lg:justify-end justify-center max-w-screen 2xl:h-[46.15vw]  lg:h-[650px] md:h-[570px] h-[360px] flex-col 
        ${isCustomWidth ? "xl:h-[750px]" : 'xl:h-[620px]'}
        ${
        isTerrase ? "w-full" : ""
      }`}
    >
      <div className="absolute w-full h-[660px] -z-1 flex items-end justify-center">
        <div
          className={cn(`absolute h-[660px] xl:h-[1030px] 2xl:h-[46.15vw]  `, {
            "2xl:w-[93.1%] xl:w-[93.2%] lg:w-[93.2%] md:w-[93.2%] w-[89.07%]": !isTerrase,
            " xl:w-[93.25%] lg:w-[93.25%] md:w-[93.25%] w-[89.7%]": isTerrase,
            "h-[700px] w-[89.06%]!": isMobile,
          })}
        >
          <div className="h-full grid grid-cols-1  w-full md:grid-cols-[49.87%_0.1%_50.03%]">
            <div className="h-full border-x md:border-x-0 box-border md:border-s w-full  border-[#B3B3B3]"></div>
            <div className="h-1/3 border-s md:border-s-0 border-[#B3B3B3] hidden md:block"></div>
            <div className="h-full border-e hidden md:block  md:border-x-0 md:border-e border-[#B3B3B3]"></div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center lg:mb-0 mt-8">
        <AboutSlider slides={imgs} />

        <button
          className={cn(`lg:mb-[36px] 2xl:text-[.73vw] lg:text-[14px] 2xl:mt-[38px]  font-cofo-medium text-center
           bg-[#8C331B] border border-[#8C331B] hover:text-[#8C331B] w-[160px] h-[40px] 2xl:w-[10.1vw] 2xl:h-[2.3vw] 
        uppercase mt-[24px] mb-[10px] hover:bg-[#FFFFFF] text-[#FFFFFF] hover:cursor-pointer  rounded-4xl text-[12px]`, {
          "xl:w-[12.1vw] xl:h-[2.5vw]": isCustomWidth,
          "xl:w-[14.2vw] xl:h-[2.9vw]": !isCustomWidth
        })}
        >
          {t("buttons.bookTable")}
        </button>
      </div>
    </div>
  );
};
