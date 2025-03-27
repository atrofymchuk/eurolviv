import { useTranslation } from "react-i18next";
import { useModalStore } from "../../store/useModalStore";
import { memo } from "react";

type RoomDescriptionProps = {
  pOne: string;
  pTwo: string;
};

export const RoomDescription = memo(({ pOne, pTwo }: RoomDescriptionProps) => {
  const { t } = useTranslation();
  const { onOpenModal } = useModalStore();

  return (
    <div className="xl:pt-[42px] lg:pt-[30px] lg:px-[22px_20px]  pt-[52px]">
      <p className="2xl:text-[20px] text-[12px] sm:text-[14px] md:text-[16px] lg:text-[14px] xl:text-[17px] leading-[120.1%] 2xl:tracking-[-0.04em] 2xl:w-[532px] lg:w-fit h-fit lg:text-[#8C331B] text-[#252526] uppercase ">
        {t(pOne)}
      </p>

      <p className="2xl:text-[20px] text-[12px] sm:text-[14px] pt-[24px] md:text-[16px] lg:text-[14px] xl:text-[17px] leading-[120.1%] 2xl:tracking-[-0.04em] text-[#444444] h-fit uppercase 2xl:w-[532px] lg:flex hidden">
        {t(pTwo)}
      </p>
      <button
        onClick={() => onOpenModal("menu")}
        className="uppercase mt-auto border lg:flex hidden border-[#8C331B] text-[#8C331B] hover:bg-[#8C331B] hover:text-[#FFFFFF] 
        bg-[#FFFFFF] self-center md:self-start xl:text-[14px] xl:px-[30.5px] xl:py-2.75 px-[28px] py-[13px] w-fit rounded-full lg:py-[10px] font-cofo-medium text-[12px] 2xl:mt-[50px] lg:mt-[30px] hover:cursor-pointer"
      >
        {t("buttons.conferenceMenu")}
      </button>
    </div>
  );
}); 