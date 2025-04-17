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
      className={cn("hidden lg:flex 2xl:gap-x-[0.68vw] xl:gap-[0.78vw] lg:gap-[.57vw] items-center  xl:pt-[18px] 2xl:pt-[1.15vw] 2xl:me-[3.96vw] xl:me-[3vw] lg:me-[1.17vw] ")}
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