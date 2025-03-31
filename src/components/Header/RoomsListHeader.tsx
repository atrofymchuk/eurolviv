import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import cn from "classnames"

type RoomsListHeaderToProps = {
  roomType: string;
  roomTitle: string;
}

export const RoomsListHeader = ({ roomType, roomTitle }: RoomsListHeaderToProps) => {
  const { t } = useTranslation();

  return (
    <Link 
      to={`/rooms/${roomType}`} 
      className={cn(
        "block px-[18px]  py-3 backdrop-blur-[54.5px]  bg-white/26 font-cofo-medium   hover:bg-[#C7C7C7] transition-colors whitespace-nowrap text-left",
        "border-b border-[#FFFFFF33] last:border-b-0",
        "text-[#FFFFFF] hover:text-[#252526]"
      )}
    >
      <span className="text-inherit uppercase text-[16px]">
        {t(roomTitle)}
      </span>
    </Link>
  );
};
