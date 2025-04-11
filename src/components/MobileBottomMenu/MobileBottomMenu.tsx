import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { map } from "../../Constants/map";
import {
  calendarBooking,
  menu,
  callUs,
  locationWhite,
} from "../../store/exportsIcons";
import { useModalStore } from "../../store/useModalStore";

type MobileBottomMenuProps = {
  setMenuOpen: (value: boolean) => void;
};

export const MobileBottomMenu = ({ setMenuOpen }: MobileBottomMenuProps) => {
  const { t } = useTranslation();
  const { onOpenModal } = useModalStore();

  const menuItems = [
    {
      icon: <img loading="lazy" src={menu} alt="menu" />,
      label: t("phoneBottomMenu.menu"),
      action: () => setMenuOpen(true),
    },
    {
      icon: <img loading="lazy" src={calendarBooking} alt="calendar" />,
      label: t("phoneBottomMenu.book"),
      action: () => onOpenModal("order"),
    },
    {
      icon: <img loading="lazy" src={callUs} alt="call" />,
      label: t("phoneBottomMenu.callUs"),
      action: () => onOpenModal("contacts"),
    },
    {
      icon: <img loading="lazy" src={locationWhite} alt="location" />,
      label: t("phoneBottomMenu.route"),
      path: map.address,
      external: true,
    },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#A47762] text-white lg:hidden z-20  border-t-0">
      <div className="flex justify-between items-stretch h-full m-0 p-0">
        {menuItems.map((item, index) =>
          item.path ? (
            <Link
              key={index}
              to={item.path}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className="flex-1 flex border-r border-[#C29986] flex-col items-center p-3.5 justify-center py-[15px] hover:bg-[#8C331B] transition-colors whitespace-nowrap px-[13px] last:border-r-0"
            >
              {item.icon}
              <span className="text-[10px] mt-[7px] uppercase font-cofo-medium">
                {item.label}
              </span>
            </Link>
          ) : (
            <button
              key={index}
              onClick={item.action}
              className="flex-1 flex p-3.5 border-r border-[#C29986] flex-col items-center justify-center py-[15px] hover:bg-[#8C331B] transition-colors whitespace-nowrap last:border-r-0"
            >
              {item.icon}
              <span className="text-[10px] mt-[7px] uppercase font-cofo-medium">
                {item.label}
              </span>
            </button>
          )
        )}
      </div>
    </div>
  );
};
