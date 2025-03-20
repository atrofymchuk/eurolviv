import { InViewWrapper } from "../utils/InViewWrapper";
import { hotel } from "../../store/exportsImg";
import { TFunction } from "i18next";

export const InfrastructureSection = ({ t }: { t: TFunction }) => {
  return (
    <div className="p-4 xl:p-12 lg:border-r border-[#c7c7c7] flex flex-col items-center  lg:items-start pb-8">
      
      <h2 className="text-[#8C331B] xl:text-[24px] font-cofo-medium text-[12px] text-center xl:text-left mt-6 uppercase tracking-[-0.05em]">
        {t("about.whereWeAre.infrastructureTitle")}
      </h2>
      <h1 className="uppercase text-3xl xl:text-[100px] font-bold mt-1.5 text-center xl:text-left leading-[81%] tracking-[-7%]">
        {t("about.whereWeAre.placesTitle")}
      </h1>
      <p className="text-[#252526] text-sm xl:text-[18px] mt-6 text-center lg:text-left uppercase w-4/5 tracking-[-0.001em] leading-[120%]">
        {t("about.whereWeAre.infrastructureDesc")}
      </p>
      <div className=" justify-center xl:justify-start mt-12 hidden lg:flex">
        <InViewWrapper>
          <img
            src={hotel}
            alt="hotel"
            className=" w-[760px] h-[582px]"
          />
        </InViewWrapper>
      </div>
    </div>
  );
};