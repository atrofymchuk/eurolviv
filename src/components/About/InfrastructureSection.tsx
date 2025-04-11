import { InViewWrapper } from "../utils/InViewWrapper";
import { hotel } from "../../store/exportsImg";
import { TFunction } from "i18next";

export const InfrastructureSection = ({ t }: { t: TFunction }) => {
  return (
    <div className="  lg:border-r border-b-0  border-[#c7c7c7] flex flex-col items-center  lg:items-start pb-[30px] lg:pb-0 lg:border-b">
      <div className="lg:ps-[50px] flex flex-col items-center lg:items-start">
        <h2 className="text-[#8C331B] xl:text-[24px] font-cofo-medium text-[12px] text-center xl:text-left mt-6 uppercase tracking-[-0.05em]">
          {t("about.whereWeAre.infrastructureTitle")}
        </h2>
        <h1 className="uppercase text-3xl xl:text-[100px]  lg:pt-[26px] text-center xl:text-left leading-[81%] tracking-[-0.07em] w-2/3 pt-[6px]">
          {t("about.whereWeAre.placesTitle")}
        </h1>
        <p className="text-[#252526] text-[12px] xl:text-[18px] pt-[18px] lg:pt-[78px] text-center lg:text-left uppercase lg:w-[73%] tracking-[-0.001em] leading-[120%] sm:w-[80%] ">
          {t("about.whereWeAre.infrastructureDesc")}
        </p>
      </div>
      <div className=" justify-center  self-center mt-12 hidden lg:flex xl:pb-[40px]">
        <InViewWrapper>
          <img loading="lazy" src={hotel} alt="hotel" className=" w-[760px] h-[582px]" />
        </InViewWrapper>
      </div>
    </div>
  );
};
