import AboutSlider from "./AboutSlider";
import { useTranslation } from "react-i18next";
import {
  aboutRestaurant,
  aboutRestaurantScd,
  aboutRestaurantTrd,
} from "../../store/exportsImg";

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
      className={`relative flex items-center justify-center 2xl:h-[886px] xl:h-[750px] lg:h-[650px] md:h-[570px] h-[400px] flex-col ${
        isTerrase ? "w-full" : ""
      }`}
    >
      <div className="absolute w-full h-full -z-1">
        <div className="relative h-full md:max-w-[89.7%] max-w-[89.7%] mx-auto">
          <div className="h-full grid grid-cols-1 md:grid-cols-[49.87%_0.1%_50.03%]">
            <div className="h-full border-x md:border-x-0 md:border-s  border-[#B3B3B3]"></div>
            <div className="h-1/3 border-s border-[#B3B3B3]"></div>
            <div className="h-full border-x  md:border-x-0 md:border-e border-[#B3B3B3]"></div>
          </div>
        </div>
      </div>
      <AboutSlider slides={imgs} />
      <button
        className="lg:mb-[36px] lg:text-[14px] lg:mt-[38px] font-cofo-medium bg-[#8C331B] border border-[#8C331B] hover:text-[#8C331B]
       uppercase mt-[24px] mb-[10px] hover:bg-[#FFFFFF] text-[#FFFFFF] hover:cursor-pointer lg:px-[23.5px] lg:py-[13px] px-[17px] py-[10px] rounded-4xl text-[12px]"
      >
        {t("buttons.bookTable")}
      </button>
    </div>
  );
};
