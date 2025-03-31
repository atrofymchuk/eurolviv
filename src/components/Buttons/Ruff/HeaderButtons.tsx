import { useModalStore } from "../../../store/useModalStore";
import { useTranslation } from "react-i18next";

export const HeaderButtons = () => {
  const { onOpenModal } = useModalStore();
  const { t } = useTranslation();
  return (
    <div className="flex lg:flex-row flex-col w-fit lg:space-x-[13px] lg:space-y-0 space-y-[12px] lg:mt-[53px] mt-[30px] md:max-w-full max-w-[171px]">
      <button
        onClick={() => onOpenModal("menu")}
        className="font-cofo-medium uppercase text-white bg-[#8C331B] text-[12px] md:text-[13px] lg:text-[14px] 
   hover:cursor-pointer md:px-[69.5px] md:py-[10.5px] px-[70px] py-[11px] rounded-full text-md hover:text-[#8C331B] hover:bg-white"
      >
        {t("restaurant.menu.menu")}
      </button>
      <button className="font-cofo-medium uppercase px-[10px] py-[10px] border border-[#FFFFFF] text-[#FFFFFF] hover:cursor-pointer md:px-[19.5px] md:py-[10.5px] rounded-4xl  md:text-[13px] lg:text-[14px] text-[12px] ">
        {t("buttons.bookTable")}
      </button>
    </div>
  );
};
