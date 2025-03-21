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
import { RiArrowDownSLine } from "react-icons/ri";
import cn from "classnames";

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
      className=" fixed inset-0 z-50 h-fit flex items-center justify-center "
      onMouseLeave={() => setIsShowRooms(false)}
    >

      <div
        className={cn(
          "fixed top-0 left-0 right-0  mx-auto py-4 px-6 flex justify-between items-center  transition-colors duration-300 z-50 border-b border-[#FFFFFF]/20",
          {
            "bg-white text-black": scrolled,
            "text-white": !scrolled,
            "bg-[#252526]/93": isShowRooms,
          }
        )}
      >
        <div className="w-full xl:w-[92.71%] flex items-center justify-center mx-auto">
          
        <div className="flex items-center lg:space-x-4 justify-between w-full">
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
          <div className="flex items-center lg:space-x-4">
            <div className={cn(`${rightMenu}`)}>
              <ChangeLangButton
                changeLanguage={changeLanguage}
                isMobile={false}
                scrolled={scrolled}
              />
            </div>
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen((prev) => !prev)}
                className={cn(`whitespace-nowrap uppercase hidden xl:flex items-center space-x-1 font-cofo-medium hover:cursor-pointer ${rightMenu}`) }
              >
                <span>{t("header.callUs")}</span>
                <span>
                  <RiArrowDownSLine />
                </span>
              </button>

              {isDropdownOpen && (
                <div
                  className="absolute right-0 mt-2  bg-white text-black rounded shadow-lg py-2 font-cofo-medium w-[200px]"
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
              className={cn(`uppercase bg-[#a33d2e] text-white px-3 text-center items-center justify-center py-2 rounded-full hover:bg-[#922b1f] font-cofo-medium text-[12px] md:text-[14px] hover:cursor-pointer hidden lg:flex`, {
                "lg:flex hidden": scrolled,
                "flex": !scrolled,
              })}
              >
              {t("header.book")
                .split(" ")
                .map((word, index) => (
                  <span
                  className={cn(`uppercase ${index === 1 ? "lg:flex hidden" : ""}`, {
                    "lg:flex hidden": scrolled,
                    "flex": !scrolled,
                  })}
                  key={index}
                  >
                    {word}&nbsp;
                  </span>
                ))}
            </Link>
          </div>
      </div>
        </div>
      </div>

      {isShowRooms && !scrolled && (
        <div
          className={cn(`fixed left-0 w-full p-4 pt-0 z-90 shadow-[0px_4px_86.4px_0px_#252526] bg-[#252526]/93 2xl:top-[117px] xl:top-[103px] lg:top-[93px] md:top-[93px] top-[80px] md:hidden lg:block`, {
            "bg-white text-black": scrolled,
            "text-white": !scrolled,
          })}
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
