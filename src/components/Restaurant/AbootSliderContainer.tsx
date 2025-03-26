import AboutSlider from "./AboutSlider";
import { useTranslation } from "react-i18next";

export const AbootSliderContainer = () => {
  const { t } = useTranslation();

  return (
    <div className="relative flex items-center lg:justify-end justify-end 2xl:h-[886px] xl:h-[750px] lg:h-[650px]  md:h-[570px] h-[360px] flex-col">
      <div className="absolute md:w-[93.16%] w-[89.067%] 2xl:h-[886px]  xl:h-[650px] lg:h-[680px]  md:h-[570px] h-[360px]  border-x border-[#B3B3B3] z-[-2]"></div>
      <AboutSlider />
      <button className=" lg:mb-[36px] lg:text-[14px]  lg:mt-[38px] font-cofo-medium bg-[#8C331B] border border-[#8C331B] hover:text-[#8C331B]
       uppercase  mt-[24px] mb-[55px] hover:bg-[#FFFFFF] text-[#FFFFFF] hover:cursor-pointer lg:px-[23.5px] lg:py-[13px] px-[17px] py-[10px] rounded-4xl text-[12px]">
        {t("buttons.bookTable")}
      </button>
    </div>
  );
};
