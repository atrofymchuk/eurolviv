import { useState } from "react";
import { useRoomStore } from "../../store/useRoomsStore";
import { HeaderSocial } from "./HeaderSocial";
import useNavbarStyles from "../Hooks/useHeaderStyle";
import { HeaderNav } from "./HeaderNav";
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
          "fixed top-0 left-0 right-0   mx-auto  flex justify-between items-center lg:h-[133px] h-[95px] transition-colors duration-300 z-50 border-b border-[#FFFFFF]/20",
          {
            "bg-white text-black": scrolled,
            "text-white": !scrolled          }
        )}
      >
        <div className="w-full xl:w-[92.71%] flex items-center justify-center mx-auto lg:mx-[20px] xl:mx-auto ">
          <div className="flex items-center xl:space-x-4 space-x-3  w-full " >
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
                rooms,
                isShowRooms,
              }}
            />
            <div className="flex items-center xl:space-x-5 lg:space-x-3 justify-between ">
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
                  className={cn(
                    `whitespace-nowrap uppercase hidden xl:flex items-center space-x-1 font-cofo-medium hover:cursor-pointer ${rightMenu}`
                  )}
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
                to={"/booking"}
                className={cn(
                  `uppercase bg-[#a33d2e] text-white px-3 text-center items-center justify-center py-2 rounded-full hover:bg-[#922b1f] font-cofo-medium text-[12px] 2xl:text-[14px] hover:cursor-pointer hidden lg:flex`,
                  {
                    "lg:flex hidden": scrolled,
                    flex: !scrolled,
                  }
                )}
              >
                {t("header.book")
                  .split(" ")
                  .map((word, index) => (
                    <span
                      className={cn(
                        `uppercase ${index === 1 ? "lg:flex hidden" : ""}`,
                        {
                          "lg:flex hidden": scrolled,
                          flex: !scrolled,
                        }
                      )}
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
    </header>
  );
}
