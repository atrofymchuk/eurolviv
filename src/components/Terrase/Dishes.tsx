import { useTranslation } from "react-i18next";
import { useModalStore } from "../../store/useModalStore";
import "swiper/css";
import "swiper/css/pagination";
import { SwiperSlider } from "./Swiper";

export const Dishes = ({
  slides,
  content,
}: {
  slides: string[];
  content: {
    title: string;
    titleTwo?: string;
    desc: string;
    heading: string;
    button: string;
    isMenu?: boolean;
  };
}) => {
  const { t } = useTranslation();
  const { onOpenModal } = useModalStore();

  return (
    <div className="w-full overflow-x-hidden overflow-y-hidden h-fit">
      <div
        className={`relative mx-auto w-[89.7%] border-x md:border-x-0 border-[#B3B3B3] ${
          content.isMenu ? "" : "lg:pb-[149px] pb-[59px]"
        }`}
      >
        <div
          className={`md:border-x border-[#B3B3B3] ${
            content.isMenu
              ? "xl:pt-[173px] lg:pt-[100px] pt-[94px]"
              : "xl:pt-[180px] lg:pt-[100px] pt-[56px]"
          }`}
        >
          <h4 className="font-cofo-medium text-[#252526] leading-[22.68px] justify-center flex  xl:mb-3 mb-1.75">
            <span className="font-blessed  text-center text-[16px] xl:text-[36px] lg:text-[20px] xl:inline xl:pt-4">
              {t(content.heading)}
            </span>
          </h4>
          <h1
            className={`text-center  uppercase leading-[81%] xl:text-[233px]  tracking-[-0.09em] lg:text-[100px] ${
              content.isMenu ? "text-[64px]" : "text-[32px]"
            }`}
          >
            {t(content.title)}
          </h1>
          {content.titleTwo && (
            <h1
              className={`text-center  uppercase leading-[81%] xl:text-[48px]  tracking-[-0.09em] lg:text-[36px] text-[32px] lg:pt-[29px] lg:pb-[19px]`}
            >
              {t(content.titleTwo)}
            </h1>
          )}
          <p className="text-center leading-[120%] uppercase xl:text-[20px] text-[12px] lg:pt-[18px] pt-[22px] lg:pb-[30px] pb-[22px] md:w-1/3 w-8/9 mx-auto">
            {t(content.desc)}
          </p>
        </div>

        <div className="md:border-x border-[#B3B3B3]">
          <div className="flex justify-center">
            <button
              onClick={() => onOpenModal("menu")}
              className={`uppercase  xl:text-[14px]  w-fit 
          rounded-full lg:py-[10px] font-cofo-medium text-[12px] hover:cursor-pointer ${content.isMenu ? "xl:px-[37px] xl:py-[10.5px] px-[32px] py-[10px] text-[#FFFFFF] hover:bg-[#FFFFFF] hover:text-[#8C331B] bg-[#8C331B]" : "px-[32px] py-[10px] xl:px-[25px] xl:py-[10.5px] text-[#8C331B] border border-[#8C331B]"}`}
            >
              {t(content.button)}
            </button>
          </div>
        </div>

        <div className="absolute w-full h-[1000px] md:border-x overflow-y-hidden  border-[#B3B3B3] "></div>

        <SwiperSlider slides={slides} />
      </div>
    </div>
  );
};
