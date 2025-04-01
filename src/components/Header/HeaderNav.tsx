import {
  Dispatch,
  memo,
  SetStateAction,
  useCallback,
  useMemo,
  useState,
} from "react";
import { useTranslation } from "react-i18next";
import { Room } from "../../types/types";
import { Logo } from "./Logo";
import { MobileMenuButton, MobileBookingButton } from "./MobileMenu";
import { DesktopNavigation } from "./DesktopNavigation";
import { MobileNavigation } from "./MobileNavigation";

type HeaderNavProps = {
  scrolled: boolean;
  logo: string;
  iconLogoStyle: string;
  pathname: string;
  isActiveLink: (path: string) => string;
  setIsShowRooms: Dispatch<SetStateAction<boolean>>;
  rightMenu: string;
  changeLanguage: () => void;
  rooms: Room[];
  isShowRooms: boolean;
};

export const HeaderNav = memo(
  ({
    scrolled,
    pathname,
    logo,
    iconLogoStyle,
    setIsShowRooms,
    isActiveLink,
    changeLanguage,
    rooms,
    isShowRooms,
  }: HeaderNavProps) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isShowRestaurant, setIsShowRestaurant] = useState(false);

    const toggleMenu = useCallback(() => setMenuOpen((prev) => !prev), []);
    const { t } = useTranslation();

    const handleMouseEnterRooms = useCallback(() => {
      setIsShowRooms(true);
      setIsShowRestaurant(false);
    }, [setIsShowRooms]);

    const handleMouseLeaveRooms = useCallback(() => {
      setIsShowRooms(false);
    }, [setIsShowRooms]);

    const handleMouseEnterRestaurant = useCallback(() => {
      setIsShowRestaurant(true);
      setIsShowRooms(false);
    }, [setIsShowRooms]);

    const handleMouseLeaveRestaurant = useCallback(() => {
      setIsShowRestaurant(false);
    }, []);

    const navLinks = useMemo(
      () => [
        { path: "/about", label: t("header.about") },
        { path: "/rooms", label: t("header.rooms") },
        { path: "/conference-service", label: t("header.conferenceServices") },
        { path: "/restaurant", label: t("header.restaurant") },
        { path: "/special-offers", label: t("header.specialOffers") },
        { path: "/contacts", label: t("header.contacts") },
      ],
      [t]
    );

    return (
      <div className="flex relative w-full me-0 h-full">
        <div className="flex lg:justify-end justify-center w-full">
          <MobileMenuButton
            toggleMenu={toggleMenu}
            scrolled={scrolled}
            pathname={pathname}
            isActiveLink={isActiveLink}
          />
          
          <Logo 
            logo={logo} 
            iconLogoStyle={iconLogoStyle} 
            scrolled={scrolled} 
          />

          <MobileBookingButton scrolled={scrolled} />

          <DesktopNavigation
            navLinks={navLinks}
            isActiveLink={isActiveLink}
            handleMouseEnterRooms={handleMouseEnterRooms}
            handleMouseLeaveRooms={handleMouseLeaveRooms}
            isShowRooms={isShowRooms}
            rooms={rooms}
            setMenuOpen={setMenuOpen}
            setIsShowRooms={setIsShowRooms}
            handleMouseEnterRestaurant={handleMouseEnterRestaurant}
            handleMouseLeaveRestaurant={handleMouseLeaveRestaurant}
            isShowRestaurant={isShowRestaurant}
            setIsShowRestaurant={setIsShowRestaurant}
          />
        </div>

        <MobileNavigation
          menuOpen={menuOpen}
          pathname={pathname}
          scrolled={scrolled}
          navLinks={navLinks}
          isActiveLink={isActiveLink}
          handleMouseEnterRooms={handleMouseEnterRooms}
          handleMouseLeaveRooms={handleMouseLeaveRooms}
          isShowRooms={isShowRooms}
          rooms={rooms}
          setMenuOpen={setMenuOpen}
          changeLanguage={changeLanguage}
          handleMouseEnterRestaurant={handleMouseEnterRestaurant}
          handleMouseLeaveRestaurant={handleMouseLeaveRestaurant}
          isShowRestaurant={isShowRestaurant}
        />
      </div>
    );
  }
);
