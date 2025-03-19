import { useState } from "react";
import { useRoomStore } from "../../store/useRoomsStore";
import { HeaderSocial } from "./HeaderSocial";
import useNavbarStyles from "../Hooks/useHeaderStyle";
import { HeaderNav } from "./HeaderNav";
import { RoomsListHeader } from "./RoomsListHeader";
import { useTranslation } from "react-i18next";
import { ChangeLangButton } from "./ChangeLangButton";
import useLanguage from "../Hooks/useLanguage";
import { Link } from "react-router-dom";

export function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { rooms } = useRoomStore();
  const {
    styles,
    iconLogoStyle,
    pathname,
    logo,
    rightMenu,
    scrolled,
    isShowRooms,
    setIsShowRooms,
    isActiveLink,
  } = useNavbarStyles();

  const { t } = useTranslation();
  const { changeLanguage } = useLanguage();

  return (
    <header
      className="max-w-screen fixed inset-0 z-50 h-fit  flex "
      onMouseLeave={() => setIsShowRooms(false)}
    >
      <div
        className={`fixed top-0 left-0 w-full py-4  px-6 flex lg:justify-around  justify-around items-center font-cofo border-b border-[#FFFFFF33] transition-colors duration-300 z-50  max-w-screen 
          ${scrolled ? "bg-white text-black" : "text-white"} 
          ${isShowRooms ? "bg-[#252526]/93" : ""}`}
      >
        <div className="flex items-center lg:space-x-4 lg:justify-around lg:w-fit w-full">
          <HeaderNav
            {...{
              logo,
              scrolled,
              iconLogoStyle,
              setIsShowRooms,
              isActiveLink,
              rightMenu,
              styles,
              pathname,
              changeLanguage,
            }}
          />
          <div className={`${rightMenu}`}>
            <ChangeLangButton
              changeLanguage={changeLanguage}
              isMobile={false}
            />
          </div>
          <div className="relative ">
            <button
              onClick={() => setIsDropdownOpen((prev) => !prev)}
              className={`whitespace-nowrap uppercase hidden xl:flex items-center space-x-1 font-cofo font-bold hover:cursor-pointer ${rightMenu}`}
            >
              <span>{t("header.callUs")}</span>
              <span>▾</span>
            </button>

            {isDropdownOpen && (
              <div
                className="absolute right-0 mt-2 w-fit bg-white text-black rounded shadow-lg py-2 font-cofo"
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                {["+380 99 123 45 67", "+380 97 765 43 21"].map(
                  (phone, index) => (
                    <a
                      key={index}
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      {phone}
                    </a>
                  )
                )}
              </div>
            )}
          </div>

          <HeaderSocial styles={styles} />

          <Link
          to={'/booking'}
            className={ `uppercase bg-[#a33d2e] text-white px-4 lg:w-xs text-center items-center justify-center  py-2 rounded-3xl hover:bg-[#922b1f] font-cofo font-semibold text-[12px] md:text-[14px] hover:cursor-pointer  hidden lg:flex ${
              scrolled ? "lg:flex hidden" : "flex"
            }`}
          >
            {t("header.book")
              .split(" ")
              .map((word, index) => (
                <span
                  className={`uppercase ${index === 1 ? "lg:flex hidden" : ""}`}
                  key={index}
                >
                  {word}&nbsp;
                </span>
              ))}
          </Link>
        </div>
      </div>

      {isShowRooms && !scrolled && (
        <div
          className={`fixed left-0 w-full p-4 pt-0 z-90 shadow-[0px_4px_86.4px_0px_#252526] bg-[#252526]/93 2xl:top-[117px] xl:top-[103px] lg:top-[93px] md:top-[93px] top-[80px] md:hidden lg:block`}
        >
          <div className="flex justify-center">
            <div className=" grid lg:grid-cols-4 grid-cols-2">
              {rooms.slice(0, 4).map((room, index) => (
                <RoomsListHeader key={index} {...{ room, index }} />
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
