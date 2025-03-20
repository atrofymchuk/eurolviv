import { InViewWrapper } from "../utils/InViewWrapper";
import { hotel } from "../../store/exportsImg";
import { TFunction } from "i18next";

export const InfrastructureSection = ({ t }: { t: TFunction }) => {
  return (
    <div className="p-4 xl:p-12 lg:border-r border-[#c7c7c7] flex flex-col items-center md:items-start">
      <h2 className="text-[#8C331B] text-xl xl:text-[24px] font-semibold text-center xl:text-left uppercase tracking-[-0.05em]">
        {t("about.whereWeAre.infrastructureTitle")}
      </h2>
      <h1 className="uppercase text-3xl xl:text-[100px] font-bold mt-4 text-center xl:text-left leading-[81%] tracking-[-7%]">
        {t("about.whereWeAre.placesTitle")}
      </h1>
      <p className="text-[#252526] text-sm xl:text-[18px] mt-6 text-center xl:text-left uppercase w-4/5 tracking-[-0.001em] leading-[120%]">
        {t("about.whereWeAre.infrastructureDesc")}
      </p>
      <div className="flex justify-center xl:justify-start mt-12">
        <InViewWrapper>
          <img
            src={hotel}
            alt="hotel"
            className="hidden lg:block w-[760px] h-[582px]"
          />
        </InViewWrapper>
      </div>
    </div>
  );
};