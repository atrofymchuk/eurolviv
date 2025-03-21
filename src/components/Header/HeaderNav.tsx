import { Dispatch, memo, SetStateAction, useCallback,  useMemo,  useState } from "react";
import { Link } from "react-router-dom";
import burgerMenu from "../../assets/icons/burgerMenu.svg";
import { useTranslation } from "react-i18next";
import { ChangeLangButton } from "./ChangeLangButton";
import { InViewWrapper } from "../utils/InViewWrapper";
import cn from "classnames";
type HeaderNavProps = {
  scrolled: boolean;
  logo: string;
  iconLogoStyle: string;
  pathname:string ;
  isActiveLink: (path: string) => string;
  setIsShowRooms: Dispatch<SetStateAction<boolean>>;
  rightMenu: string;
  changeLanguage: () => void 
};

export const HeaderNav = memo(({
  scrolled,
  pathname,
  logo,
  iconLogoStyle,
  setIsShowRooms,
  isActiveLink,
  changeLanguage
}: HeaderNavProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = useCallback(() => setMenuOpen(prev => !prev), []);
    const { t } = useTranslation();

 
  const handleMouseEnterRooms = useCallback(() => {
    if (!scrolled) setIsShowRooms(true);
  }, [scrolled, setIsShowRooms]);
  
  const handleMouseLeaveRooms = useCallback(() => {
    setIsShowRooms(false);
  }, [setIsShowRooms]);
  
  
 const navLinks = useMemo(() => [
   { path: "/about", label: t("header.about") },
   { path: "/rooms", label: t("header.rooms") },
   { path: "/conference-service", label: t("header.conferenceServices") },
   { path: "/restaurant", label: t("header.restaurant") },
   { path: "/special-offers", label: t("header.specialOffers") },
   { path: "/contacts", label: t("header.contacts") },
 ], [t]);
 

  const renderNavLinks = useCallback((isMobile = false) =>{
    return navLinks.map(({ path, label }) => (
      <Link
      key={path}
      to={path}
      className={cn(`uppercase ${isActiveLink(
        path
      )} 2xl:text-[16px] xl:text-[14px] lg:text-[14px] text-[12px] `, {
        "text-white": !scrolled,
        "text-black": scrolled,
      })}
      onClick={() => isMobile && setMenuOpen(false)}
      onMouseEnter={path === "/rooms" ? handleMouseEnterRooms : undefined}
      onMouseLeave={path !== "/rooms" ? handleMouseLeaveRooms : undefined}
    >
      {label}
    </Link>
    ))
    }, [navLinks, isActiveLink, handleMouseEnterRooms, handleMouseLeaveRooms, scrolled])


  return (
    <div className="flex w-[100%]   ">
      <div className="flex font-normal  lg:justify-end justify-between w-full ">
        <button
          className={`lg:hidden text-white text-2xl flex items-center gap-2`}
          onClick={() => toggleMenu()}
        >
          <img
            src={burgerMenu}
            alt="Меню"
            className={pathname === '/contacts' || scrolled ? "filter-invert-gray" : "" }
          />
          <span
            className={` text-sm ${isActiveLink(
              '/contacts'
            )}`}
          >
            {t("header.menu")}
          </span>
        </button>

        <Link to="/" >
          <InViewWrapper>
          <img
            src={logo}
            alt="logo"
            className={cn(`duration-300 ${iconLogoStyle}  ${
              !scrolled ? "w-[68px] h-[40px]" : "w-[82px] h-[48px]"
            } 2xl:w-[153px] 2xl:h-[84px] xl:w-[120px] xl:h-[70px] lg:w-[100px] lg:h-[60px] md:w-[80px] md:h-[48px]`)}
          />
          </InViewWrapper>
        </Link>

        <Link to="/booking" className={cn(`bg-[#a33d2e] text-white px-2 py-1 lg:hidden uppercase  rounded-3xl hover:bg-[#922b1f]  self-center
                font-cofo-medium  text-[9px] justify-end h-fit  ${
                  scrolled ? "opacity-0" : ""
                }`, {
                  "text-white": !scrolled,
                  "text-black": scrolled,
                })}
        >
          {t("buttons.bookRoomArr.0")} <span className="hidden lg:inline">{t("buttons.bookRoomArr.1")}</span>
        </Link>

        <nav
          className="hidden lg:flex 2xl:space-x-3 xl:space-x-3 text-center lg:space-x-1.5 w-full items-center justify-center "
          onClick={() => setIsShowRooms(false)}
        >
          {renderNavLinks()}
        </nav>
      </div>

      {menuOpen && (
        <nav
          className={cn(`absolute top-full left-0 w-full  flex flex-col items-center py-4 space-y-2 z-50 xl:hidden  animate-fadeIn ${
            pathname === '/contacts' || scrolled ? "bg-white text-black" : "bg-black text-white"
          }`)}
        >
          {renderNavLinks(true)}
          <div className="flex justify-center w-full h-10">

          <ChangeLangButton changeLanguage={changeLanguage} isMobile={true}/>
          </div>

        </nav>
      )}
    </div>
  );
})
