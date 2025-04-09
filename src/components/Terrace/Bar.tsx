import {
  barImg,
  cocktailImg,
  cocktailImgScnd,
  wineImg,
  wineImgScnd,
} from "../../store/exportsImg";
import { useTranslation } from "react-i18next";
import { InViewWrapper } from "../utils/InViewWrapper";

export const BarComponent = () => {
  const { t } = useTranslation();
  return (
    <div className="mx-auto md:w-[93.25%] w-[89.7%] border-x md:border-x-0 border-[#B3B3B3] ">
      <div className="md:border-x  border-[#B3B3B3] xl:pt-[149px]">
        <h4 className="font-cofo-medium text-[#252526] leading-[22.68px] justify-center flex xl:mb-4">
          <span className="font-blessed   text-center text-[16px] xl:text-[36px]  xl:inline">
            {t("terrase.bar.title2")}
          </span>
        </h4>
        <h1 className="text-center  uppercase leading-[81%] xl:text-[233px] text-[64px] tracking-[-0.09em]">
          {t("terrase.bar.title")}
        </h1>

        <p className="text-center mt-2 leading-[120%] uppercase xl:text-[20px] text-[12px]  pt-[22px] lg:pb-[28px] md:w-1/3 mx-auto">
          {t("terrase.bar.desc")}
        </p>
      </div>
      <div className="flex flex-wrap pt-[36px] md:pt-0">
        <div className="w-full md:w-[53.46%] xl:pt-[26px] xl:px-[30px_36px] border-y md:border-s border-[#B3B3B3] px-[10px_9px] pt-[10px]">
          <InViewWrapper>
            <img
              src={barImg}
              alt="bar"
              className="xl:w-[883px] xl:h-[811px] lg:h-[495px] w-full h-[289px] object-cover"
            />
          </InViewWrapper>
          <h2 className="text-center text-[16px]  block underline underline-2 xl:py-[25px_31px] py-[17px_18px] uppercase text-[#8C331B] xl:text-[30px] leading-[108%] tracking-[-0.05em] font-cofo-medium">
            {t("terrase.bar.alcoholCard")}
          </h2>
        </div>

        <div className="w-full md:w-[46.48%] border-t-0 md:border-t border-b border-[#B3B3B3] md:border-s md:border-e">
          <div className=" xl:pt-[26px] pt-[10px] w-full md:w-fit grid grid-cols-2 ">
            <div className=" md:w-fit xl:px-[31px_10px] px-[10px_3.5px]">
              <InViewWrapper>
                <img
                  src={cocktailImg}
                  alt="cocktail"
                  className=" md:w-[378px]  xl:h-[348px] object-cover  "
                />
              </InViewWrapper>
            </div>
            <div className=" md:w-fit xl:px-[10px_25px] px-[3.5px_7.5px]">
              <InViewWrapper>
                <img
                  src={cocktailImgScnd}
                  alt="cocktail"
                  className=" md:w-[378px] xl:h-[348px] object-cover "
                />
              </InViewWrapper>
            </div>
          </div>
          <h2 className="text-center   text-[16px] underline underline-2 xl:py-[25px_31px] py-[17px_18px] uppercase text-[#8C331B] xl:text-[30px] leading-[108%] tracking-[-0.05em] font-cofo-medium">
            {t("terrase.bar.cocktailCard")}
          </h2>

          <div className="grid grid-cols-2 xl:pt-[26px] pt-[10px] w-full md:w-fit border-t  border-[#B3B3B3]">
            <div className=" md:w-fit xl:px-[31px_10px] px-[10px_3.5px]">
              <InViewWrapper>
                <img
                  src={wineImg}
                  alt="cocktail"
                  className=" md:w-[378px]  xl:h-[348px] object-cover  "
                />
              </InViewWrapper>
            </div>
            <div className=" md:w-fit xl:px-[10px_25px] px-[3.5px_7.5px]">
              <InViewWrapper>
                <img
                  src={wineImgScnd}
                  alt="cocktail"
                  className=" md:w-[378px] xl:h-[348px] object-cover  "
                />
              </InViewWrapper>
            </div>
          </div>
          <h2 className="text-center   text-[16px] underline underline-2 xl:py-[25px_31px] py-[17px_18px] uppercase text-[#8C331B] xl:text-[30px] leading-[108%] tracking-[-0.05em] font-cofo-medium">
            {t("terrase.bar.wineCard")}
          </h2>
        </div>
      </div>
    </div>
  );
};
