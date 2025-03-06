import { Dispatch, SetStateAction, useState } from "react";
import { Link } from "react-router-dom";
import burgerMenu from "../../assets/icons/burgerMenu.svg";
import { useTranslation } from "react-i18next";
import { ChangeLangButton } from "./ChangeLangButton";
import { InViewWrapper } from "../InViewWrapper";

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

export const HeaderNav = ({
  scrolled,
  pathname,
  logo,
  iconLogoStyle,
  setIsShowRooms,
  isActiveLink,
  changeLanguage
}: HeaderNavProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useTranslation();
  
  
  const navLinks = [
    { path: "/about", label: t("header.about") },
    { path: "/rooms", label: t("header.rooms") },
    { path: "/conference-service", label: t("header.conferenceServices") },
    { path: "/restaurant", label: t("header.restaurant") },
    { path: "/special-offers", label: t("header.specialOffers") },
    { path: "/contacts", label: t("header.contacts") },
  ];

  const renderNavLinks = (isMobile = false) =>
    navLinks.map(({ path, label }) => (
      <Link
        key={path}
        to={path}
        className={`uppercase ${isActiveLink(
          path
        )} 2xl:text-[16px] xl:text-[14px] lg:text-[14px] text-[12px] `}
        onClick={() => isMobile && setMenuOpen(false)}
        onMouseEnter={() =>
          !isMobile && path === "/rooms" && !scrolled && setIsShowRooms(true)
        }
        onMouseLeave={() =>
          !isMobile && path !== "/rooms" && setIsShowRooms(false)
        }
      >
        {label}
      </Link>
    ));



  return (
    <div className="flex w-full  ">
      <div className="flex font-cofo font-normal  lg:justify-end justify-between w-full ">
        <button
          className={`lg:hidden text-white text-2xl flex items-center gap-2`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <img
            src={burgerMenu}
            alt="Меню"
            className={pathname === '/contacts' || scrolled ? "filter-invert-gray" : "" }
          />
          <span
            className={`font-cofo text-sm ${isActiveLink(
              '/contacts'
            )}`}
          >
            МЕНЮ
          </span>
        </button>

        <Link to="/">
          <InViewWrapper>
          <img
            src={logo}
            alt="logo"
            className={`duration-300 ${iconLogoStyle}  ${
              !scrolled ? "w-[68px] h-[40px]" : "w-[82px] h-[48px]"
            } 2xl:w-[153px] 2xl:h-[84px] xl:w-[120px] xl:h-[70px] lg:w-[100px] lg:h-[60px] md:w-[80px] md:h-[48px]`}
          />
          </InViewWrapper>
        </Link>

        <button
          className={`bg-[#a33d2e] text-white px-2 py-1 lg:hidden rounded-3xl hover:bg-[#922b1f]  self-center
                font-cofo  text-[9px] lg:justify-self-end h-fit  ${
                  scrolled ? "opacity-0" : ""
                }`}
        >
          ЗАБРОНЮВАТИ <span className="hidden lg:inline">НОМЕР</span>
        </button>

        <nav
          className="hidden lg:flex 2xl:space-x-3 xl:space-x-3 text-center lg:space-x-1.5 w-full items-center justify-center "
          onClick={() => setIsShowRooms(false)}
        >
          {renderNavLinks()}
        </nav>
      </div>

      {menuOpen && (
        <nav
          className={`absolute top-full left-0 w-full  flex flex-col items-center py-4 space-y-2 z-50 xl:hidden  animate-fadeIn ${
            pathname === '/contacts' || scrolled ? "bg-white text-black" : "bg-black text-white"
          }`}
        >
          {renderNavLinks(true)}
          <div className="flex justify-center w-full h-10">

          <ChangeLangButton changeLanguage={changeLanguage} isMobile={true}/>
          </div>

        </nav>
      )}
    </div>
  );
};
