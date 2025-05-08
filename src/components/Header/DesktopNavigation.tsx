import { NavLinks } from "@/components/Header/NavLinks";
import cn from "classnames";
import {useIsEnglish} from "@/components/hooks/useIsEnglish";

type DesktopNavigationProps = {
  navLinks: Array<{ path: string; label: string }>;
  isActiveLink: (path: string) => string;
  handleMouseEnterRooms: () => void;
  handleMouseLeaveRooms: () => void;
  isShowRooms: boolean;
  scrolled: boolean;
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
  setMenuOpen,
  setIsShowRooms,
  handleMouseEnterRestaurant,
  handleMouseLeaveRestaurant,
  isShowRestaurant,
  setIsShowRestaurant,
  scrolled,
}: DesktopNavigationProps) => {
  const isEng = useIsEnglish();
  return (
    <nav
      className={cn("hidden lg:flex 2xl:gap-x-[0.68vw] xl:gap-[0.78vw] lg:gap-[.57vw] items-center  xl:pt-[18px] 2xl:pt-[1.15vw] 2xl:me-[3.96vw] xl:me-[3vw] lg:me-[1.17vw] ",
        {
          "xl:me-[6.96vw]!": isEng,
        }
      )}
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
        scrolled={scrolled}
        setMenuOpen={setMenuOpen}
        handleMouseEnterRestaurant={handleMouseEnterRestaurant}
        handleMouseLeaveRestaurant={handleMouseLeaveRestaurant}
        isShowRestaurant={isShowRestaurant}
      />
    </nav>
  );
}; 