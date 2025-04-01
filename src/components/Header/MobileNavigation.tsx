import cn from "classnames";
import { NavLinks } from "./NavLinks";
import { ChangeLangButton } from "./ChangeLangButton";
import { Room } from "../../types/types";

type MobileNavigationProps = {
  menuOpen: boolean;
  pathname: string;
  scrolled: boolean;
  navLinks: Array<{ path: string; label: string }>;
  isActiveLink: (path: string) => string;
  handleMouseEnterRooms: () => void;
  handleMouseLeaveRooms: () => void;
  isShowRooms: boolean;
  rooms: Room[];
  setMenuOpen: (value: boolean) => void;
  changeLanguage: () => void;
  handleMouseEnterRestaurant: () => void;
  handleMouseLeaveRestaurant: () => void;
  isShowRestaurant: boolean;
};

export const MobileNavigation = ({
  menuOpen,
  pathname,
  scrolled,
  navLinks,
  isActiveLink,
  handleMouseEnterRooms,
  handleMouseLeaveRooms,
  isShowRooms,
  rooms,
  setMenuOpen,
  changeLanguage,
  handleMouseEnterRestaurant,
  handleMouseLeaveRestaurant,
  isShowRestaurant,
}: MobileNavigationProps) => {
  if (!menuOpen) return null;

  return (
    <nav
      className={cn(
        `absolute top-full left-0 w-full flex flex-col items-center py-4 space-y-2 z-50 xl:hidden animate-fadeIn ${
          pathname === "/contacts" || scrolled
            ? "bg-white text-black"
            : "bg-black text-white"
        }`
      )}
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
      <div className="flex justify-center w-full h-10">
        <ChangeLangButton
          scrolled={scrolled}
          changeLanguage={changeLanguage}
          isMobile={true}
        />
      </div>
    </nav>
  );
}; 