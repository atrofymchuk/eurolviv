import AboutSlider from "./AboutSlider";
import { useTranslation } from "react-i18next";
import {
  aboutRestaurant,
  aboutRestaurantScd,
  aboutRestaurantTrd,
} from "../../store/exportsImg";
import cn from "classnames";
interface AbootSliderContainerProps {
  slides?: string[];
  isTerrase?: boolean;
}

export const AbootSliderContainer: React.FC<AbootSliderContainerProps> = ({
  slides,
  isTerrase,
}) => {
  const { t } = useTranslation();

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
      className={`relative flex items-center lg:justify-end justify-center  2xl:h-[886px] xl:h-[750px] lg:h-[650px] md:h-[570px] h-[400px] flex-col ${
        isTerrase ? "w-full" : ""
      }`}
    >
      <div className="absolute w-full h-full -z-1 flex items-center justify-center">
        <div
          className={cn(`relative h-full  `, {
            "xl:w-[93.1%] lg:w-[93.2%] md:w-[93.2%] w-[89.0%]": !isTerrase,
            "lg:w-[93.25%] md:w-[93.25%] w-[89.9%]": isTerrase,
          })}
        >
          <div className="h-full grid grid-cols-1 w-full md:grid-cols-[49.87%_0.1%_50.03%]">
            <div className="h-full border-x md:border-x-0 box-border md:border-s w-full  border-[#B3B3B3]"></div>
            <div className="h-1/3 border-s md:border-s-0 border-[#B3B3B3] hidden md:block"></div>
            <div className="h-full border-e hidden md:block  md:border-x-0 md:border-e border-[#B3B3B3]"></div>
          </div>
        </div>
      </div>

      <AboutSlider slides={imgs} />

      <button
        className="lg:mb-[36px] lg:text-[14px] lg:mt-[38px] font-cofo-medium bg-[#8C331B] border border-[#8C331B] hover:text-[#8C331B] w-[194px]
       uppercase mt-[24px] mb-[10px] hover:bg-[#FFFFFF] text-[#FFFFFF] hover:cursor-pointer  lg:py-[13px] px-[17px] py-[10px] rounded-4xl text-[12px]"
      >
        {t("buttons.bookTable")}
      </button>
    </div>
  );
};
