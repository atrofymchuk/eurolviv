import { NavLinks } from "./NavLinks";
import { Room } from "../../types/types";
import { useTranslation } from "react-i18next";
import cn from "classnames";

type DesktopNavigationProps = {
  navLinks: Array<{ path: string; label: string }>;
  isActiveLink: (path: string) => string;
  handleMouseEnterRooms: () => void;
  handleMouseLeaveRooms: () => void;
  isShowRooms: boolean;
  rooms: Room[];
  setMenuOpen: (value: boolean) => void;
  setIsShowRooms: (value: boolean) => void;
  handleMouseEnterRestaurant: () => void;
  handleMouseLeaveRestaurant: () => void;
  isShowRestaurant: boolean;
  setIsShowRestaurant: (value: boolean) => void;
}

export const DesktopNavigation = ({
  navLinks,
  isActiveLink,
  handleMouseEnterRooms,
  handleMouseLeaveRooms,
  isShowRooms,
  rooms,
  setMenuOpen,
  setIsShowRooms,
  handleMouseEnterRestaurant,
  handleMouseLeaveRestaurant,
  isShowRestaurant,
  setIsShowRestaurant,
}: DesktopNavigationProps) => {
  const { i18n } = useTranslation();
  const isEng = i18n.language === "en";
  return (
    <nav
      className={cn("hidden lg:flex 2xl:space-x-[13px] xl:space-x-3 text-center lg:space-x-1.5 items-center", {
        "lg:ms-[50px]": !isEng,
        "lg:me-[10px]": isEng,
      })}
      onClick={() => {
        setIsShowRooms(false);
        setIsShowRestaurant(false);
      }}
    >
      <NavLinks
        navLinks={navLinks}
        isActiveLink={isActiveLink}
        handleMouseEnterRooms={handleMouseEnterRooms}
        handleMouseLeaveRooms={handleMouseLeaveRooms}
        isShowRooms={isShowRooms}
        rooms={rooms}
        setMenuOpen={setMenuOpen}
        handleMouseEnterRestaurant={handleMouseEnterRestaurant}
        handleMouseLeaveRestaurant={handleMouseLeaveRestaurant}
        isShowRestaurant={isShowRestaurant}
      />
    </nav>
  );
}; 