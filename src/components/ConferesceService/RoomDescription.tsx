import { useTranslation } from "react-i18next";
import { memo } from "react";
import { ViewMenuButton } from "../Buttons/ViewMenu";
type RoomDescriptionProps = {
  pOne: string;
  pTwo: string;
};

export const RoomDescription = memo(({ pOne, pTwo }: RoomDescriptionProps) => {
  const { t } = useTranslation();

  return (
    <div className="xl:pt-[42px] lg:pt-[30px] lg:px-[22px_20px] xl:px-0 pt-[52px]">
      <p className="2xl:text-[20px] text-[12px] sm:text-[14px] md:text-[16px] lg:text-[14px] xl:text-[17px] leading-[120.1%] 2xl:tracking-[-0.04em]  lg:w-fit h-fit lg:text-[#8C331B] text-[#252526] xl:w-[90%] uppercase ">
        {t(pOne)}
      </p>

      <p className="2xl:text-[20px] text-[12px] sm:text-[14px] pt-[24px] md:text-[16px] lg:text-[14px] xl:text-[17px] leading-[120.1%] tracking-[-0.04%] text-[#444444] h-fit uppercase xl:w-[90%] lg:flex hidden">
        {t(pTwo)}
      </p>
      <ViewMenuButton className="xl:mt-[50px] lg:mt-[37px] text-[14px]" />
    </div>
  );
});
