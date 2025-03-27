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
  const { t } = useTranslation();
  
  return (
    <div className="flex flex-col items-center mt-8 gap-1.75">
      {showBookButton && (
        <BookLink className="text-[#252526] bg-[#EDE8E5]" to="/booking">
          {t("buttons.book")}
        </BookLink>
      )}

      {showOrderButton && (
        <button
          onClick={onOrderClick}
          className="uppercase bg-[#EDE8E5] hover:text-[#EDE8E5] hover:bg-[#252526] text-[#252526] w-fit md:px-[34.5px] md:py-[13.5px]
           px-[19px] py-[11px] rounded-full font-cofo-medium text-[12px] hover:cursor-pointer "
        >
          {t("buttons.order")}
        </button>
      )}

      {showConferenceMenuButton && (
        <button className="uppercase hover:bg-[#EDE8E5] hover:text-[#252526] text-[#EDE8E5] border-[#EDE8E5] border w-fit lg:px-[25.5px] lg:py-[13.5px] px-[15px] py-[10px] rounded-full font-cofo-medium text-[12px]  lg:hidden hover:cursor-pointer">
          {t("buttons.conferenceMenu")}
        </button>
      )}

      {customButton}
    </div>
  );
}; 