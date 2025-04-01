import { NavLinks } from "./NavLinks";
import { Room } from "../../types/types";

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
};

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
      className="hidden lg:flex 2xl:space-x-[13px] xl:space-x-3 text-center lg:space-x-1.5 w-full items-center justify-center lg:mx-[20px] 2xl:mx-[76px]"
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