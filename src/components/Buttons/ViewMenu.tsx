import { useTranslation } from "react-i18next";
import cn from "classnames";
import { useModalStore } from "../../store/useModalStore";

export const ViewMenuButton = ({className}: {className?: string}) => {
  const { onOpenModal } = useModalStore();
  const { t } = useTranslation();


  return (
    <button onClick={()=>onOpenModal('menu')} className={cn("uppercase text-[#EDE8E5] text-[12px] border px-4.75 py-[8.5px] lg:text-[16px] border-[#EDE8E5] lg:text-[#8C331B] lg:border-[#8C331B] rounded-full font-cofo-medium hover:bg-white hover:text-[#242425] transition", className)} >
    {t("buttons.viewMenu")}
  </button>
  );
}