import { useTranslation } from "react-i18next";
import cn from "classnames";
import { useModalStore } from "@/store/useModalStore";

export const ViewMenuButton = ({className}: {className?: string}) => {
  const { onOpenModal } = useModalStore();
  const { t } = useTranslation();


  return (
    <button onClick={()=>onOpenModal('menu')} className={cn("uppercase font-cofo-medium text-[#EDE8E5] text-[12px] border  lg:py-[10px] lg:w-[209px] py-[8.5px] lg:text-[14px] border-[#EDE8E5] flex justify-center lg:text-[#8C331B] lg:border-[#8C331B] rounded-full font-cofo-medium  hover:text-[white] hover:bg-[#8C331B] transition", className)} >
    {t("buttons.viewMenuButton")}
  </button>
  );
}