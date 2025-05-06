import { InViewWrapper } from "../utils/InViewWrapper";
import { hotel } from "../../store/exportsImg";
import { TFunction } from "i18next";
import { useCustomWidth } from "../Hooks/useCustomWidth";
import { useIsEnglish } from "../Hooks/useIsEnglish";
export const InfrastructureSection = ({ t }: { t: TFunction }) => {
  const isEng = useIsEnglish();
  const isSpecialWidth = useCustomWidth(1500, 1700)
  return (
    <div className={`  lg:border-r border-b-0  border-[#c7c7c7] flex flex-col items-center  lg:items-start pb-[30px] lg:pb-0 lg:border-b`}>
      <div className={`2xl:ps-[2.604vw] xl:ps-[2.7vw] lg:ps-[30px] flex flex-col items-center lg:items-start `}>
        <h2 className={`2xl:ps-[0.36vw] xl:ps-[0.36vw] lg:text-[14px] font-semibold lg:font-medium ${isSpecialWidth ? "xl:text-[20px]" : "xl:text-[18px]"} text-[#8C331B] xl:mt-[1.25vw] 2xl:mt-[2.29vw] 2xl:text-[1.25vw] xl:text-[0.938vw] font-cofo-medium text-[3.2vw] text-center xl:text-left mt-6 uppercase tracking-[-0.05em]`}>
          {t("about.whereWeAre.infrastructureTitle")}
        </h2>
        <h1 className={`md:font-cofo-medium lg:text-[48px]  ${isSpecialWidth ? "xl:text-[70px]" : "xl:text-[64px]"} uppercase text-[8.533vw] 2xl:text-[5.208vw]   2xl:pt-[1.3vw] xl:pt-[1.3vw] text-center lg:text-left leading-[94%] lg:leading-[81%] tracking-[-0.07em] w-2/3 pt-[6px]`}>
          {t("about.whereWeAre.placesTitle")}
        </h1>
        <p className={`text-[#252526] text-[3.2vw] lg:text-[14px] xl:text-[1.10vw]  2xl:text-[0.938vw] ${isEng ? "w-[90%] 2xl:w-[70%] xl:w-[82%]" : "lg:w-[73%] sm:w-[80%] xl:w-[82%] 2xl:w-[70%]"}
           pt-[18px] 2xl:pt-[4.063vw] xl:pt-[2.5vw] text-center lg:text-left uppercase  tracking-[-0.01em] leading-[120%] `}>
          {t("about.whereWeAre.infrastructureDesc")}
        </p>
      </div>
      <div className={`justify-center self-center mt-[2.5vw] hidden lg:flex 2xl:pb-[2.083vw] xl:mb-6 2xl:mb-0`}>
        <InViewWrapper>
          <img loading="lazy" src={hotel} alt="hotel" className={`w-[39.583vw] h-[30.313vw]`} />
        </InViewWrapper>
      </div>
    </div>
  );
};
