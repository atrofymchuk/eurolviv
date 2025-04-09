import { useTranslation } from "react-i18next";
import { weddingFst, weddingScd, weddingTrd } from "../../store/exportsImg";
import { ViewMenuButton } from "../Buttons/ViewMenu";
export const Celebration = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center justify-center mx-auto md:w-[93.16%] w-[89.067%] border-[#B3B3B3] md:border-b">
      <div className="grid md:grid-cols-[35.7%_28.8%_35.6%] grid-cols-1 w-full border-x border-[#B3B3B3] md:border-t ">
        <div className="lg:h-[616px]  hidden md:flex justify-end  "></div>

        <div className="lg:h-[616px] flex border-[#B3B3B3] md:border-x  flex-col items-center lg:justify-end justify-end  lg:oy-0 py-[65px_57px] text-center lg:pb-[27px]">
          <span className="font-blessed  block text-center leading-[70%] text-[16px] xl:text-[36px] lg:leading-[25.2px] xl:inline xl:pb-[22px] pb-[7px]">
            Ruff
          </span>
          <h1 className="uppercase lg:w-fit w-[217px] md:w-[317px] xl:text-[100px] lg:text-[54px] md:text-[44px]   md:leading-[81%] leading-[94%]   text-[32px] tracking-[-7%] lg:whitespace-nowrap   ">
            {t("restaurant.celebration.title")}
          </h1>
          <div className="lg:space-y-4 space-y-4 lg:mt-[37px] mt-[24px]">
            <p className="text-[#252526] 2xl:w-[722px] lg:w-[520px] xl:w-[620px] md:w-[420px] md:text-[14px]  w-[319px] uppercase xl:text-[18px] lg:text-[16px]  lg:leading-[120%] text-[12px] ">
              {t("restaurant.celebration.desc.0")}
            </p>
            <p className="text-[#252526] 2xl:w-[722px] lg:w-[520px] xl:w-[620px] md:w-[420px]  md:text-[14px]  w-[319px] uppercase xl:text-[18px] lg:text-[16px]  lg:leading-[120%] text-[12px] ">
              {t("restaurant.celebration.desc.1")}
            </p>
          </div>
          <ViewMenuButton
            pdf="Бенкетне меню.pdf"
            className="uppercase lg:text-[14px] lg:w-[175px]!  text-[12px] font-cofo-medium bg-[#8C331B]
             lg:text-white hover:bg-[#FFFFFF] w-[160px] lg:hover:text-[#8C331B] border border-[#8C331B]
              py-[10px] px-[23px]  lg:py-[13px] rounded-full lg:mt-[45px] mt-[26px]"
          >
            {t("buttons.celebrationMenu")}
          </ViewMenuButton>
        </div>
        <div className="md:flex hidden  border-[#B3B3B3]"></div>
      </div>
      <div className="grid md:grid-cols-[35.7%_28.8%_35.6%] grid-cols-1 border-x md:border-b-0   border-y border-[#B3B3B3] w-full">
        <div className="flex items-center justify-center lg:px-[14px_12px] md:px-[12px_10px] xl:px-[24px_20px] md:py-3.25 xl:py-[23px_26px] lg:py-3 py-[17px_22px] px-[18px_16px]">
          <img
            src={weddingFst}
            alt=""
            className="w-full md:h-full   h-[310px]  2xl:max-h-[620px] xl:max-h-[520px] lg:max-h-[460px] object-cover"
          />
        </div>
        <div className="flex items-center justify-center lg:px-[14px_14px] md:px-[12px_10px] xl:px-5 md:border-x border-y md:border-y-0 border-[#B3B3B3] px-[17px_17px] md:py-3.25 lg:py-3 xl:py-[23px_26px] py-[20px_22px] ">
          <img
            src={weddingScd}
            alt=""
            className="w-full md:h-full    2xl:max-h-[620px]  xl:max-h-[520px] lg:max-h-[460px] h-[392px] object-cover"
          />
        </div>
        <div className="flex items-center justify-center lg:px-[14px_12px] xl:px-[20px_14px] md:px-[12px_10px] xl:py-[23px_26px]  lg:py-3 md:py-3.25 py-[20px_22px] px-[18px_15px]">
          <img
            src={weddingTrd}
            alt=""
            className="w-full md:h-full  2xl:max-h-[620px]  xl:max-h-[520px] lg:max-h-[460px] max-h-[316px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};
