import { useTranslation } from "react-i18next";
import { BookLink } from "../../Buttons/BookLink";
import { HeaderActionsProps } from "../../../types/headerTypes";

export const HeaderActions: React.FC<HeaderActionsProps> = ({
  showBookButton,
  showOrderButton,
  showConferenceMenuButton,
  customButton,
  onOrderClick,
}) => {
  const { t } = useTranslation()
  
  return (
    <div className="flex flex-col items-center  gap-1.75">
      {showBookButton && (
        <BookLink className="lg:px-[34.5px] lg:py-[13.5px] px-[19px] lg:mt-[43px] text-center py-[11px] w-[171px] text-[#252526] mt-[30px] bg-[#EDE8E5] lg:w-[204px]" to="/booking">

          {t("buttons.book")}
        </BookLink>
      )}

      {showOrderButton && (
        <button
          onClick={onOrderClick}
          className="uppercase mt-[30px] lg:mt-[43px] bg-[#EDE8E5] lg:text-[14px] hover:text-[#EDE8E5] hover:bg-[#252526] text-[#252526] w-fit md:px-[34.5px] md:py-[13.5px]
           px-[19px] py-[11px] rounded-full font-cofo-medium text-[12px] hover:cursor-pointer lg:w-[204px] "
        >
          {t("buttons.order")}
        </button>
      )}

      {showConferenceMenuButton && (
        <button className="uppercase  hover:bg-[#EDE8E5]  hover:text-[#252526] text-[#EDE8E5] border-[#EDE8E5] border md:px-[30.5px] md:py-[12.5px] w-fit lg:px-[25.5px] lg:py-[13.5px] px-[15px] py-[10px] rounded-full font-cofo-medium text-[12px]  lg:hidden hover:cursor-pointer">
          {t("buttons.conferenceMenu")}
        </button>
      )}

      {customButton}
    </div>
  );
}; 