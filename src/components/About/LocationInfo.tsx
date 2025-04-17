import { InViewWrapper } from "../utils/InViewWrapper";
import { navigate } from "../../store/exportsIcons";
import { TFunction } from "i18next";
import { RouteButton } from "../Buttons/RouteButton";
import { useCustomWidth } from "../Hooks/useCustomWidth";

export const LocationInfo = ({ t }: { t: TFunction }) => {

  const isSpecialWidth = useCustomWidth(1500, 1700);
  
  return (
    <div className="flex flex-col justify-center lg:justify-start items-center pb-[30px] lg:pb-0 lg:items-start border-t-0 p-4 md:p-0 pt-[61px] lg:mt-0 2xl:h-[36.042vw] xl:h-[39.063vw] xl:pt-[50px] 2xl:pt-[73px]">
      <div className="2xl:ms-[52px] xl:ms-[42px]">
        <p className="uppercase flex items-center  lg:items-start justify-center lg:justify-start">
          <InViewWrapper>
            <img loading="lazy" src={navigate} alt="navigate" className="mr-[1.5px] 2xl:w-[0.938vw] 2xl:h-[0.938vw]" />
          </InViewWrapper>
          <span className="underline underline-offset-3 text-[#8C331B] font-cofo-medium text-[3.2vw] xl:text-[14px] 2xl:text-[0.938vw]">
            {t("about.whereWeAre.desc.0")}
          </span>
        </p>
        <h1 className={`uppercase text-[8.533vw] 2xl:text-[5.208vw]   pt-[8px] lg:pt-[26px] text-center lg:text-left leading-[94%]  tracking-[-0.04em] lg:tracking-[-0.1em]
           ${isSpecialWidth ? "xl:text-[5.1vw]" : "xl:text-[5vw]"}`}>
          {t("about.whereWeAre.title")}
        </h1>
        <p className={`text-[#8F8F8F] text-[3.2vw] leading-[110%] xl:text-[1.25vw] 2xl:text-[1.042vw] px-5 md:px-0 2xl:max-w-[500px]
           xl:w-[90%] text-center uppercase lg:text-left  2xl:mt-[61px] ${isSpecialWidth ? "mt-12" : "mt-10"}`}>
          <span className="text-[#8C331B] font-cofo-medium">
            {t("about.whereWeAre.desc.1")}
          </span>
          {t("about.whereWeAre.desc.2")}
        </p>
        <p className="font-cofo-medium text-[3.2vw] tracking-[-0.04em] leading-[115%] xl:text-[1.25vw] 2xl:text-[1.042vw] text-center lg:text-left xl:w-[70%] uppercase pt-4 w-4/5 mx-auto lg:mx-0 2xl:w-2/3">
          {t("about.whereWeAre.rating")}
        </p>
        <div className={`flex  justify-center text-[3.2vw]! lg:justify-start mb-[4px] ${isSpecialWidth ? "mt-6 lg:mt-0" : "mt-0"}`}>
          <RouteButton className="mt-5 h-[40px] xl:h-[44px] block  2xl:mt-[3.906vw] xl:mt-[30px] 2xl:w-[11.615vw] xl:w-[200px] xl:text-[14px] text-center w-[171px] 2xl:text-[0.729vw] "/>
        </div>
      </div>
    </div>
  );
};