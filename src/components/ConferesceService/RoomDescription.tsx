import { useTranslation } from "react-i18next";
import { memo } from "react";
import { ViewMenuButton } from "../Buttons/ViewMenu";
import { ContactInfo } from "./ContactInfo";
type RoomDescriptionProps = {
  pOne: string;
  pTwo: string;
};

export const RoomDescription = memo(({ pOne, pTwo }: RoomDescriptionProps) => {
  const { t } = useTranslation();

  return (
    <div className="xl:pt-[42px] lg:pt-[30px] lg:px-[22px_20px] xl:px-0 pt-[52px] flex flex-col h-full justify-between">
      <div>
        <p className="2xl:text-[20px] text-[12px] sm:text-[14px] md:text-[14px] lg:text-[14px] xl:text-[16px] leading-[120.1%] 2xl:tracking-[-0.04em] lg:w-fit h-fit lg:text-[#8C331B] text-[#252526]  uppercase ">
          {t(pOne)}
        </p>

        <p className="2xl:text-[20px] text-[12px] sm:text-[14px] pt-[24px] md:text-[14px] lg:text-[14px] xl:text-[16px] leading-[120.1%] tracking-[-0.04em]  text-[#444444] h-fit uppercase lg:flex hidden">
          {t(pTwo)}
        </p>
      </div>
      
      <div className="flex-1 flex items-center">
        <ViewMenuButton className="text-[14px] hidden lg:flex">
          {t("buttons.conferenceMenu")}
        </ViewMenuButton>
      </div>
      
      <div className="lg:mt-2">
        <ContactInfo />
      </div>
    </div>
  );
});
