import { useTranslation } from "react-i18next";
import { memo } from "react";
import { ViewMenuButton } from "../Buttons/ViewMenu";
import { ContactInfo } from "./ContactInfo";
import { useCustomWidth } from "../Hooks/useCustomWidth";

type RoomDescriptionProps = {
  pOne: string;
  pTwo: string;
  isOnTop: boolean;
  pMobile: string;
  index: number;
};

export const RoomDescription = memo(
  ({ pOne, pTwo, pMobile, isOnTop, index }: RoomDescriptionProps) => {
    const { t } = useTranslation();
    const isCustomWidth = useCustomWidth(1530, 1700);
    const isHD = useCustomWidth(1280, 1529);
    const isMobile = useCustomWidth(330, 1023);
    const isMobileSecond = useCustomWidth(390, 420);
    const isMobileThird = useCustomWidth(421, 450);

    return (
      <div className="2xl:pt-[42px] xl:pt-[30px] lg:pt-[30px]   pt-[52px] flex flex-col h-full justify-between">
        <div className="flex flex-col gap-[24px]">
          <p
            className={`2xl:text-[1.05vw] text-[12px] sm:text-[14px] md:text-[14px] lg:text-[14px] xl:text-[1.05vw] leading-[120.1%] 2xl:tracking-[-0.04em]  h-fit lg:text-[#8C331B] ]
          text-[#252526]  uppercase ${
            isCustomWidth && isOnTop ? "xl:w-[90%]" : "xl:w-[95%] 2xl:w-[95%]"
          } ${!isOnTop && !isCustomWidth ? "2xl:w-[95%] xl:w-[94%]" : " "}
            ${isOnTop && isHD ? "xl:w-[89%]!" : ""}
            ${!isOnTop ? "2xl:w-[100%]" : ""}
            ${index === 1 ? "w-[95%] lg:w-auto" : ""}
            ${index === 1 && isMobileSecond ? "!w-[90%] lg:w-auto" : ""}
            ${index === 1 && isMobileThird ? "!w-[82%] lg:w-auto" : ""}
           ${isMobileThird ? " w-[90%]" : ""}
            `}
          >
            {isMobile ? t(pMobile) : t(pOne)}
          </p>

          <p
            className={`2xl:text-[1.05vw] text-[12px] sm:text-[14px]  md:text-[14px] lg:text-[14px] xl:text-[1.05vw] leading-[120.1%] 2xl:pb-3 
          tracking-[-0.04em]  text-[#444444] h-fit uppercase lg:flex hidden
           ${isCustomWidth && isOnTop ? "xl:w-[89%]" : ""}
          ${isCustomWidth && !isOnTop ? "xl:w-[90%]" : ""}
            ${isOnTop && !isCustomWidth ? "2xl:w-[99%] xl:w-[90%]" : ""}
            ${isOnTop === false && isHD ? "xl:w-[89%]! lg:w-[90%]!" : ""}
            ${isOnTop && isHD ? "xl:w-[89%]!" : ""}`}
          >
            {t(pTwo)}
          </p>
        </div>

        <div className="flex-1 flex items-center">
          <ViewMenuButton className={`text-[14px] 2xl:text-[0.74vw] hidden lg:flex  ${isCustomWidth ?"xl:w-[12.6vw] xl:h-[3.1vw]" :"xl:w-[14vw] xl:h-[3.3vw]"} 2xl:w-[10.6vw] 2xl:h-[2.3vw] items-center justify-center`}>
            {t("buttons.conferenceMenu")}
          </ViewMenuButton>
        </div>

        <div className="lg:mt-2">
          <ContactInfo />
        </div>
      </div>
    );
  }
);
