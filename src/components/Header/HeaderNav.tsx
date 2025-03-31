import {
  Dispatch,
  memo,
  SetStateAction,
  useCallback,
  useMemo,
  useState,
} from "react";
import { Link } from "react-router-dom";
import burgerMenu from "../../assets/icons/burgerMenu.svg";
import { useTranslation } from "react-i18next";
import { ChangeLangButton } from "./ChangeLangButton";
import { InViewWrapper } from "../utils/InViewWrapper";
import cn from "classnames";
import { RoomsListHeader } from "./RoomsListHeader";
import { Room } from "../../types/types";

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
    const toggleMenu = useCallback(() => setMenuOpen((prev) => !prev), []);
    const { t } = useTranslation();

    const handleMouseEnterRooms = useCallback(() => {
      setIsShowRooms(true);
    }, [setIsShowRooms]);

    const handleMouseLeaveRooms = useCallback(() => {
      setIsShowRooms(false);
    }, [setIsShowRooms]);

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

    const renderNavLinks = useCallback(
      (isMobile = false) => {
        return navLinks.map(({ path, label }) => (
          <div
            key={path}
            className="relative"
            onMouseEnter={path === "/rooms" ? handleMouseEnterRooms : undefined}
            onMouseLeave={path === "/rooms" ? handleMouseLeaveRooms : undefined}
          >
            <Link
              to={path}
              className={cn(
                "uppercase 2xl:text-[16px] xl:text-[14px] lg:text-[14px] text-[12px]",
                isActiveLink(path)
              )}
              onClick={() => isMobile && setMenuOpen(false)}
            >
              {label}
            </Link>

            {path === "/rooms" && isShowRooms && (
              <div className="absolute -left-5  top-full pt-4 ">
                <div className="w-fit">
                  <div className="flex flex-col rounded-lg overflow-hidden">
                    {rooms.map((room) => (
                      <RoomsListHeader
                        key={room.type}
                        roomType={room.type}
                        roomTitle={room.title}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        ));
      },
      [
        navLinks,
        isActiveLink,
        handleMouseEnterRooms,
        handleMouseLeaveRooms,
        isShowRooms,
        rooms,
      ]
    );

    return (
      <div className="flex    w-full me-0">
        <div className="flex font-normal  lg:justify-end justify-around w-full ">
          <button
            className={cn(
              `lg:hidden text-white text-2xl flex items-center gap-2`
            )}
            onClick={() => toggleMenu()}
          >
            <img
              src={burgerMenu}
              alt="Меню"
              className={cn(
                pathname === "/contacts" || scrolled ? "filter-invert-gray" : ""
              )}
            />
            <span className={cn(` text-sm ${isActiveLink("/contacts")}`)}>
              {t("header.menu")}
            </span>
          </button>

          <Link to="/">
            <InViewWrapper>
              <img
                src={logo}
                alt="logo"
                className={cn(
                  `duration-300 ${iconLogoStyle}   ${
                    !scrolled ? "w-[68px] h-[40px]" : "w-[82px] h-[48px]"
                  } 2xl:w-[203px] 2xl:h-[78px] xl:w-[120px] xl:h-[70px] lg:w-[100px] lg:h-[60px] md:w-[80px] md:h-[48px]`
                )}
              />
            </InViewWrapper>
          </Link>

          <Link
            to="/booking"
            className={cn(
              `bg-[#a33d2e] text-white px-2 py-1 lg:hidden uppercase  rounded-3xl hover:bg-[#922b1f]  self-center
                font-cofo-medium  text-[10px] justify-end h-fit
                ${scrolled ? "opacity-0" : ""}`,
              {
                "text-white": !scrolled,
                "text-black": scrolled,
              }
            )}
          >
            {t("buttons.bookRoomArr.0")}
            <span className="hidden lg:inline">
              {t("buttons.bookRoomArr.1")}
            </span>
          </Link>

          <nav
            className="hidden lg:flex 2xl:space-x-[13px] xl:space-x-3 text-center lg:space-x-1.5 w-full items-center justify-center lg:mx-[20px] 2xl:mx-[76px]"
            onClick={() => setIsShowRooms(false)}
          >
            {renderNavLinks()}
          </nav>
        </div>

        {menuOpen && (
          <nav
            className={cn(
              `absolute top-full left-0 w-full  flex flex-col items-center py-4 space-y-2 z-50 xl:hidden  animate-fadeIn ${
                pathname === "/contacts" || scrolled
                  ? "bg-white text-black"
                  : "bg-black text-white"
              }`
            )}
          >
            {renderNavLinks(true)}
            <div className="flex justify-center w-full h-10">
              <ChangeLangButton
                scrolled={scrolled}
                changeLanguage={changeLanguage}
                isMobile={true}
              />
            </div>
          </nav>
        )}
      </div>
    );
  }
);
