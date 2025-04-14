import { NavLinks } from "./NavLinks";
import { Room } from "../../types/types";
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
  return (
    <nav
      className={cn("hidden lg:flex 2xl:space-x-[13px] xl:space-x-2.25  lg:space-x-1.5 items-center  xl:pt-[22px] 2xl:me-[2.5vw]")}
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